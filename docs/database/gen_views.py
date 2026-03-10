#!/usr/bin/env python3
"""Generate markdown documentation for PMIX database views."""
import os
import re
import sys

VIEWS_DIR = r"c:\Users\JUDE\Claude\Code\__REF___pmix2025____REF__\docs\database\views"
TEMP_DIR = r"c:\temp"

VIEWS = [
    "yq_action", "yq_actions", "yq_CallStat", "yq_cmdsales", "yq_companies",
    "yq_contacts", "yq_filehead", "yq_histostock", "yq_items", "Yq_licences",
    "yq_mes", "yq_mes_rejects", "yq_MethodCostStructure", "yq_mfgsteps",
    "Yq_modules", "yq_of", "yq_offer", "Yq_paramprog", "yq_purchases",
    "yq_QualityControl", "yq_saleclot", "yq_sales", "yq_suppcust",
    "yv_confsale", "yv_ean_info", "yv_files_yield", "yv_Item_Cust_TD",
    "yv_linkitad", "yv_linkmcad", "yv_proforma", "yv_quote",
    "yv_sal_prev_2inv_mproj", "yv_sal_prev_2inv_pproj", "yv_sal_prev_global",
    "yv_sal_prev_jalons", "yv_sal_prev_nojalons", "yv_sal_prev_offer_mproj",
    "yv_sal_prev_offer_pproj", "yv_shipnotice", "zv_item_comments",
    "zv_mfglabel", "zv_users_planning"
]

# Business descriptions inferred from view names
DESCRIPTIONS = {
    "yq_action": "Vue de requete sur les actions CRM individuelles avec details client, contact, activite et couts associes.",
    "yq_actions": "Vue de requete etendue sur les actions CRM avec informations detaillees sur les activites, contacts et suivi.",
    "yq_CallStat": "Vue de requete sur les statistiques d'appels telephoniques et activites de contact.",
    "yq_cmdsales": "Vue de requete sur les commandes de vente avec details lignes, articles et montants.",
    "yq_companies": "Vue de requete sur les societes/entreprises (clients, fournisseurs) avec coordonnees completes.",
    "yq_contacts": "Vue de requete sur les contacts avec informations personnelles et rattachement aux adresses.",
    "yq_filehead": "Vue de requete sur les en-tetes de dossiers/affaires avec suivi et statut.",
    "yq_histostock": "Vue de requete sur l'historique des mouvements de stock.",
    "yq_items": "Vue de requete sur les articles avec descriptions, categories et parametres.",
    "Yq_licences": "Vue de requete sur les licences logicielles et modules actives.",
    "yq_mes": "Vue de requete sur les ordres de fabrication (MES - Manufacturing Execution System).",
    "yq_mes_rejects": "Vue de requete sur les rebuts/rejets de fabrication.",
    "yq_MethodCostStructure": "Vue de requete sur la structure des couts des gammes de fabrication.",
    "yq_mfgsteps": "Vue de requete sur les etapes/operations de fabrication.",
    "Yq_modules": "Vue de requete sur les modules applicatifs disponibles.",
    "yq_of": "Vue de requete sur les ordres de fabrication avec details operationnels.",
    "yq_offer": "Vue de requete sur les offres/devis commerciaux.",
    "Yq_paramprog": "Vue de requete sur les parametres de programmation/configuration systeme.",
    "yq_purchases": "Vue de requete sur les commandes d'achat avec details fournisseurs et lignes.",
    "yq_QualityControl": "Vue de requete sur les controles qualite avec resultats et mesures.",
    "yq_saleclot": "Vue de requete sur les lots de vente (cloture/regroupement de ventes).",
    "yq_sales": "Vue de requete sur les ventes avec details complets (en-tetes, lignes, montants).",
    "yq_suppcust": "Vue de requete croisee fournisseurs/clients avec correspondances.",
    "yv_confsale": "Vue de confirmation de vente avec details de commande et livraison.",
    "yv_ean_info": "Vue d'information sur les codes EAN/codes-barres des articles.",
    "yv_files_yield": "Vue de rendement des dossiers/affaires avec calcul de marge.",
    "yv_Item_Cust_TD": "Vue des articles par client avec tarifs et remises specifiques (TD = Tarif/Discount).",
    "yv_linkitad": "Vue des liens articles-adresses (associations article/client ou fournisseur).",
    "yv_linkmcad": "Vue des liens machines-adresses (associations machine/fournisseur).",
    "yv_proforma": "Vue pour la generation de factures proforma.",
    "yv_quote": "Vue des devis/cotations avec details lignes et montants.",
    "yv_sal_prev_2inv_mproj": "Vue previsionnelle des ventes a facturer - multi-projets.",
    "yv_sal_prev_2inv_pproj": "Vue previsionnelle des ventes a facturer - par projet.",
    "yv_sal_prev_global": "Vue previsionnelle globale des ventes avec agregation tous projets.",
    "yv_sal_prev_jalons": "Vue previsionnelle des ventes avec jalons de facturation.",
    "yv_sal_prev_nojalons": "Vue previsionnelle des ventes sans jalons (facturation directe).",
    "yv_sal_prev_offer_mproj": "Vue previsionnelle des offres commerciales - multi-projets.",
    "yv_sal_prev_offer_pproj": "Vue previsionnelle des offres commerciales - par projet.",
    "yv_shipnotice": "Vue des avis d'expedition (bordereaux de livraison) avec details colis et lignes.",
    "zv_item_comments": "Vue des commentaires/remarques associes aux articles.",
    "zv_mfglabel": "Vue des etiquettes de fabrication pour l'impression.",
    "zv_users_planning": "Vue des utilisateurs pour le module de planification.",
}


def clean_sql(raw_text):
    """Remove dbisql headers (first 2 lines) and trailing count line."""
    lines = raw_text.split('\n')
    # Skip header line and dash separator line
    if len(lines) >= 2:
        # Find where data starts (after header + dashes)
        start = 0
        for i, line in enumerate(lines):
            if line.strip().startswith('---'):
                start = i + 1
                break
        # Remove trailing "(N lignes)" or empty lines
        end = len(lines)
        for i in range(len(lines) - 1, -1, -1):
            stripped = lines[i].strip()
            if stripped == '' or re.match(r'^\(\d+ lignes?\)$', stripped):
                end = i
            else:
                break
        return '\n'.join(lines[start:end]).strip()
    return raw_text.strip()


def extract_tables(sql_text):
    """Extract table names from SQL view definition."""
    tables = set()
    # Match "DBA"."tablename" patterns
    for m in re.finditer(r'"DBA"\."(\w+)"', sql_text):
        name = m.group(1)
        # Skip the view name itself (appears in CREATE VIEW)
        tables.add(name)
    # Also match FROM/JOIN tablename without DBA prefix
    for m in re.finditer(r'(?:from|join)\s+"?(\w+)"?', sql_text, re.IGNORECASE):
        name = m.group(1)
        if name.upper() not in ('DBA', 'SYS', 'SELECT', 'WHERE', 'AND', 'OR', 'ON', 'AS', 'DUMMY'):
            tables.add(name)
    return sorted(tables)


def extract_columns(sql_text):
    """Extract column aliases from SELECT ... AS patterns."""
    columns = []
    # Match patterns like: something as "column_name"
    for m in re.finditer(r'\bas\s+"([^"]+)"', sql_text, re.IGNORECASE):
        col = m.group(1)
        if col not in columns:
            columns.append(col)
    return columns


def infer_column_desc(col_name, sql_text):
    """Infer column description from name."""
    col_lower = col_name.lower()

    # Common patterns
    mappings = {
        'code': 'Code identifiant',
        'name': 'Nom/designation',
        'desc': 'Description',
        'date': 'Date',
        'qty': 'Quantite',
        'price': 'Prix',
        'cost': 'Cout',
        'amount': 'Montant',
        'status': 'Statut',
        'comment': 'Commentaire',
        'cmnt': 'Commentaire',
        'addr': 'Adresse',
        'phone': 'Telephone',
        'fax': 'Fax',
        'email': 'Email',
        'mail': 'Email',
        'user': 'Utilisateur',
        'cust': 'Client',
        'supp': 'Fournisseur',
        'item': 'Article',
        'lot': 'Lot',
        'line': 'Numero de ligne',
        'ref': 'Reference',
        'type': 'Type',
        'rate': 'Taux',
        'disc': 'Remise',
        'weight': 'Poids',
        'vol': 'Volume',
        'unit': 'Unite',
        'curr': 'Devise',
        'inv': 'Facture',
        'sal': 'Vente',
        'pur': 'Achat',
        'mfg': 'Fabrication',
        'wc': 'Poste de charge',
        'success': 'Succes/resultat',
        'prior': 'Priorite',
        'timing': 'Duree/horaire',
        'country': 'Pays',
        'city': 'Ville',
        'zip': 'Code postal',
        'vat': 'TVA',
        'total': 'Total',
        'net': 'Montant net',
        'gross': 'Montant brut',
        'contact': 'Contact',
        'resp': 'Responsable',
        'deliv': 'Livraison',
        'ship': 'Expedition',
        'label': 'Etiquette/libelle',
        'flag': 'Indicateur',
        'pct': 'Pourcentage',
    }

    for key, desc in mappings.items():
        if key in col_lower:
            return desc

    return col_name.replace('_', ' ').capitalize()


def generate_view_md(view_name):
    """Generate markdown documentation for a view."""
    filepath = os.path.join(TEMP_DIR, f"view_{view_name}.txt")

    if not os.path.exists(filepath):
        return f"# Vue: {view_name}\n\n## Description\n\nVue non trouvee dans la base de donnees.\n"

    with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
        raw = f.read()

    sql = clean_sql(raw)

    if not sql or len(sql) < 10:
        return f"# Vue: {view_name}\n\n## Description\n\nDefinition SQL non disponible.\n"

    desc = DESCRIPTIONS.get(view_name, f"Vue {view_name}")
    tables = extract_tables(sql)
    columns = extract_columns(sql)

    # Remove the view itself from tables list
    tables = [t for t in tables if t.lower() != view_name.lower()]

    md = f"# Vue: {view_name}\n\n"
    md += f"## Description\n\n{desc}\n\n"
    md += f"## SQL\n\n```sql\n{sql}\n```\n\n"

    md += "## Tables source\n\n"
    if tables:
        for t in tables:
            md += f"- `{t}`\n"
    else:
        md += "- Aucune table identifiee\n"
    md += "\n"

    md += "## Colonnes\n\n"
    md += "| Colonne | Description |\n"
    md += "|---------|-------------|\n"
    if columns:
        for col in columns:
            col_desc = infer_column_desc(col, sql)
            md += f"| `{col}` | {col_desc} |\n"
    else:
        md += "| *(pas d'alias identifies)* | - |\n"

    return md


def main():
    os.makedirs(VIEWS_DIR, exist_ok=True)

    count = 0
    for view in VIEWS:
        md = generate_view_md(view)
        outpath = os.path.join(VIEWS_DIR, f"{view}.md")
        with open(outpath, 'w', encoding='utf-8') as f:
            f.write(md)
        count += 1
        print(f"  [{count}/{len(VIEWS)}] {view}.md")

    print(f"\nTermine: {count} fichiers generes dans {VIEWS_DIR}")


if __name__ == '__main__':
    main()
