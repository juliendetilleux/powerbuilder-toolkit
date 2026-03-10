#!/usr/bin/env python3
"""Generate markdown documentation for all J-Z tables."""
import re
import os
from collections import defaultdict

BASE = r"c:\Users\JUDE\Claude\Code\__REF___pmix2025____REF__\docs\database\tables"

def parse_fixed_width(filepath):
    """Parse dbisql fixed-width output into list of dicts."""
    with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
        lines = f.readlines()
    if len(lines) < 3:
        return []
    # First line is header, second is dashes
    header_line = lines[0]
    dash_line = lines[1]

    # Find column boundaries from dash line
    cols = []
    start = 0
    in_dash = False
    for i, ch in enumerate(dash_line.rstrip('\n').rstrip('\r')):
        if ch == '-' and not in_dash:
            start = i
            in_dash = True
        elif ch == ' ' and in_dash:
            cols.append((start, i))
            in_dash = False
    if in_dash:
        cols.append((start, len(dash_line.rstrip('\n').rstrip('\r'))))

    # Get header names
    headers = []
    for s, e in cols:
        h = header_line[s:e].strip()
        headers.append(h)

    # Parse data rows
    rows = []
    for line in lines[2:]:
        stripped = line.strip()
        if not stripped or stripped.startswith('(') or stripped == '':
            continue
        values = {}
        for idx, (s, e) in enumerate(cols):
            val = line[s:e].strip() if s < len(line) else ''
            if idx < len(headers):
                values[headers[idx]] = val
        # Skip empty rows
        if any(v for v in values.values()):
            rows.append(values)
    return rows

# ---- Parse all data files ----
print("Parsing columns...")
columns_data = parse_fixed_width(os.path.join(BASE, "_all_columns_jz.txt"))
print(f"  {len(columns_data)} column rows")

print("Parsing PKs...")
pk_data = parse_fixed_width(os.path.join(BASE, "_all_pk_jz.txt"))
print(f"  {len(pk_data)} PK rows")

print("Parsing indexes...")
idx_data = parse_fixed_width(os.path.join(BASE, "_all_indexes_jz.txt"))
print(f"  {len(idx_data)} index rows")

print("Parsing FK parents...")
fk_parent_data = parse_fixed_width(os.path.join(BASE, "_all_fk_parents_jz.txt"))
print(f"  {len(fk_parent_data)} FK parent rows")

print("Parsing FK children...")
fk_child_data = parse_fixed_width(os.path.join(BASE, "_all_fk_children_jz.txt"))
print(f"  {len(fk_child_data)} FK child rows")

# ---- Organize by table ----
tables_columns = defaultdict(list)
for row in columns_data:
    tn = row.get('table_name', '').strip()
    if tn:
        tables_columns[tn].append(row)

tables_pk = defaultdict(list)
for row in pk_data:
    tn = row.get('table_name', '').strip()
    cn = row.get('column_name', '').strip()
    if tn and cn:
        tables_pk[tn].append(cn)

tables_indexes = defaultdict(lambda: defaultdict(lambda: {'unique': '', 'columns': []}))
for row in idx_data:
    tn = row.get('table_name', '').strip()
    iname = row.get('index_name', '').strip()
    uniq = row.get('unique', '').strip()
    col = row.get('column_name', '').strip()
    seq = row.get('sequence', '0').strip()
    if tn and iname:
        tables_indexes[tn][iname]['unique'] = uniq
        tables_indexes[tn][iname]['columns'].append((int(seq) if seq.isdigit() else 0, col))

tables_fk_parents = defaultdict(list)
for row in fk_parent_data:
    tn = row.get('child_table', '').strip()
    role = row.get('role', '').strip()
    parent = row.get('parent_table', '').strip()
    if tn and parent:
        tables_fk_parents[tn].append((role, parent))

tables_fk_children = defaultdict(list)
for row in fk_child_data:
    tn = row.get('parent_table', '').strip()
    role = row.get('role', '').strip()
    child = row.get('child_table', '').strip()
    if tn and child:
        tables_fk_children[tn].append((role, child))

# ---- Column description inference ----
def infer_description(col_name, table_name):
    """Infer a French description from column name."""
    col = col_name.lower()

    # Common suffixes/patterns
    mappings = {
        'code': 'Code identifiant',
        'desc': 'Description',
        'description': 'Description',
        'name': 'Nom',
        'nam': 'Nom',
        'date': 'Date',
        'creadate': 'Date de creation',
        'moddate': 'Date de modification',
        'clotdate': 'Date de cloture',
        'creauser': 'Utilisateur createur',
        'moduser': 'Utilisateur derniere modification',
        'clotuser': 'Utilisateur cloture',
        'status': 'Statut',
        'state': 'Etat',
        'type': 'Type',
        'qty': 'Quantite',
        'qte': 'Quantite',
        'price': 'Prix',
        'amount': 'Montant',
        'amt': 'Montant',
        'total': 'Total',
        'ref': 'Reference',
        'num': 'Numero',
        'note': 'Note / commentaire',
        'notes': 'Notes / commentaires',
        'comment': 'Commentaire',
        'text': 'Texte',
        'address': 'Adresse',
        'addr': 'Adresse',
        'phone': 'Telephone',
        'fax': 'Fax',
        'email': 'Email',
        'mail': 'Email',
        'web': 'Site web',
        'url': 'URL',
        'actif': 'Indicateur actif',
        'activ': 'Indicateur actif',
        'active': 'Indicateur actif',
        'flag': 'Indicateur',
        'sort': 'Ordre de tri',
        'ord': 'Ordre',
        'order': 'Ordre',
        'seq': 'Sequence',
        'sequence': 'Sequence',
        'line': 'Numero de ligne',
        'weight': 'Poids',
        'width': 'Largeur',
        'height': 'Hauteur',
        'length': 'Longueur',
        'color': 'Couleur',
        'country': 'Pays',
        'city': 'Ville',
        'zip': 'Code postal',
        'lang': 'Langue',
        'currency': 'Devise',
        'unit': 'Unite',
        'user': 'Utilisateur',
        'login': 'Login',
        'password': 'Mot de passe',
        'level': 'Niveau',
        'group': 'Groupe',
        'class': 'Classe',
        'category': 'Categorie',
        'parent': 'Parent',
        'child': 'Enfant',
        'start': 'Debut',
        'end': 'Fin',
        'begin': 'Debut',
        'from': 'Depuis',
        'to': 'Vers',
        'min': 'Minimum',
        'max': 'Maximum',
        'count': 'Compteur',
        'size': 'Taille',
        'percent': 'Pourcentage',
        'rate': 'Taux',
        'ratio': 'Ratio',
        'disc': 'Remise',
        'discount': 'Remise',
        'tax': 'Taxe',
        'vat': 'TVA',
        'tva': 'TVA',
        'margin': 'Marge',
        'cost': 'Cout',
        'stock': 'Stock',
        'loc': 'Emplacement',
        'location': 'Emplacement',
        'warehouse': 'Entrepot',
        'item': 'Article',
        'product': 'Produit',
        'customer': 'Client',
        'supplier': 'Fournisseur',
        'vendor': 'Fournisseur',
        'invoice': 'Facture',
        'inv': 'Facture',
        'order': 'Commande',
        'ship': 'Expedition',
        'delivery': 'Livraison',
        'payment': 'Paiement',
        'pay': 'Paiement',
        'bank': 'Banque',
        'account': 'Compte',
        'acct': 'Compte',
        'balance': 'Solde',
        'debit': 'Debit',
        'credit': 'Credit',
        'label': 'Libelle',
        'title': 'Titre',
        'version': 'Version',
        'revision': 'Revision',
        'path': 'Chemin',
        'file': 'Fichier',
        'filename': 'Nom de fichier',
        'image': 'Image',
        'logo': 'Logo',
        'icon': 'Icone',
        'priority': 'Priorite',
        'urgency': 'Urgence',
        'delay': 'Delai',
        'duration': 'Duree',
        'memo': 'Memo',
        'remark': 'Remarque',
        'machine': 'Machine',
        'worker': 'Operateur',
        'batch': 'Lot',
        'lot': 'Lot',
        'serial': 'Numero de serie',
        'barcode': 'Code-barres',
        'printed': 'Imprime',
        'confirmed': 'Confirme',
        'validated': 'Valide',
        'approved': 'Approuve',
        'cancelled': 'Annule',
        'closed': 'Cloture',
        'locked': 'Verrouille',
        'visible': 'Visible',
        'enabled': 'Active',
    }

    # Try suffix match (longest first)
    for key in sorted(mappings.keys(), key=len, reverse=True):
        if col.endswith(key):
            return mappings[key]

    # Try contains
    for key in ['date', 'code', 'name', 'desc', 'qty', 'price', 'amount', 'status', 'type', 'user']:
        if key in col:
            return mappings[key]

    return ''


def infer_table_description(table_name, columns):
    """Infer table description from name and columns."""
    tn = table_name.lower()

    descs = {
        'jalons': 'Gestion des jalons (milestones) pour le suivi de projets et ordres de fabrication',
        'labelconfig': 'Configuration des formats d\'etiquettes pour impression',
        'lang': 'Table des langues disponibles dans l\'application',
        'lang_object': 'Traductions des objets de l\'interface utilisateur',
        'lang_object_item': 'Traductions des elements individuels des objets',
        'lblproc': 'Procedures d\'etiquetage',
        'lblproc2': 'Procedures d\'etiquetage (secondaire)',
        'link_country_ecost': 'Liaison entre pays et couts supplementaires',
        'link_lbl_logo': 'Liaison entre etiquettes et logos',
        'link_machine_pdc': 'Liaison entre machines et postes de charge',
        'linkactivities': 'Liaison des activites (CRM)',
        'linkadch': 'Liaison adresses - champs additionnels',
        'linkaddisclogist': 'Liaison adresses - remises logistiques',
        'linkaddiscount': 'Liaison adresses - remises',
        'linkadgppoint': 'Liaison adresses - points de groupement',
        'linkadpromo': 'Liaison adresses - promotions',
        'linkadristqty': 'Liaison adresses - ristournes par quantite',
        'linkappad': 'Liaison applications - adresses',
        'linkappadtype': 'Liaison applications - types d\'adresses',
        'linkappmcdo': 'Liaison applications - commandes McDonald\'s',
        'linkdisc': 'Liaison des remises',
        'linkitad': 'Liaison articles - adresses',
        'linkitadpack': 'Liaison articles - adresses - conditionnements',
        'linkitadpoint': 'Liaison articles - adresses - points',
        'linkitadtd': 'Liaison articles - adresses - donnees techniques',
        'linkitadumpur': 'Liaison articles - adresses - unites d\'achat',
        'linkitcn': 'Liaison articles - nomenclature',
        'linkitcountry': 'Liaison articles - pays',
        'linkitloc': 'Liaison articles - emplacements',
        'linklpappoint': 'Liaison planning - rendez-vous',
        'linkmaus': 'Liaison machines - utilisateurs',
        'linkmcad': 'Liaison multi-criteres - adresses',
        'linkmcad2': 'Liaison multi-criteres - adresses (secondaire)',
        'linksaus': 'Liaison commerciaux - utilisateurs',
        'linkusus': 'Liaison utilisateurs - utilisateurs',
        'lkitcl': 'Liaison articles - classes',
        'locations': 'Emplacements de stockage',
        'lots': 'Gestion des lots de fabrication et reception',
        'machine': 'Table des machines de production',
        'machinehead': 'En-tetes de groupes de machines',
        'mailaccount': 'Comptes de messagerie email',
        'matallocs': 'Allocations matieres pour ordres de fabrication',
        'matplan': 'Plan de matieres',
        'matplannew': 'Nouveau plan de matieres (MRP)',
        'matreq': 'Besoins en matieres',
        'matsal': 'Matieres - ventes',
        'measures': 'Table des unites de mesure',
        'methodeview': 'Vue des methodes de fabrication',
        'mfgcoitem': 'Co-produits des ordres de fabrication',
        'mfgcoitemsal': 'Co-produits OF - ventes associees',
        'mfgcosts': 'Couts de fabrication',
        'mfghbatch': 'Lots de fabrication - en-tetes',
        'mfghead': 'En-tetes des ordres de fabrication',
        'mfglallocs': 'Allocations de lots de fabrication',
        'mfglbatch': 'Lots de fabrication - lignes',
        'mfgwcreject': 'Rebuts par poste de charge',
        'mfgwcreqs': 'Besoins par poste de charge',
        'mfgwcreqs_advsc': 'Besoins poste de charge - planification avancee',
        'mfgwctests': 'Tests qualite par poste de charge',
        'mfgxtracost': 'Couts supplementaires de fabrication',
        'modules': 'Modules fonctionnels de l\'application',
        'monitplan': 'Moniteur de planification',
        'monitplanline': 'Lignes du moniteur de planification',
        'monittest': 'Tests du moniteur',
        'mrpabnorm': 'Anomalies MRP (calcul des besoins)',
        'multico': 'Gestion multi-societes',
        'offergrouphead': 'En-tetes de groupes d\'offres',
        'offergroupline': 'Lignes de groupes d\'offres',
        'packgrhead': 'En-tetes de groupes de conditionnement',
        'packgrline': 'Lignes de groupes de conditionnement',
        'packings': 'Conditionnements / emballages',
        'parameters': 'Parametres generaux de l\'application',
        'paramini': 'Parametres d\'initialisation',
        'paymode': 'Modes de paiement',
        'pbcatcol': 'Catalogue PowerBuilder - colonnes',
        'pbcatedt': 'Catalogue PowerBuilder - formats d\'edition',
        'pbcatfmt': 'Catalogue PowerBuilder - formats d\'affichage',
        'pbcattbl': 'Catalogue PowerBuilder - tables',
        'pbcatvld': 'Catalogue PowerBuilder - validations',
        'pclicence': 'Licences PC / postes de travail',
        'pfhead': 'En-tetes de profils',
        'pfline': 'Lignes de profils',
        'pfobjet': 'Objets associes aux profils',
        'pfuseracces': 'Acces utilisateurs par profil',
        'pfusers': 'Utilisateurs associes aux profils',
        'plangroup': 'Groupes de planification',
        'planifiedtask': 'Taches planifiees',
        'planimport': 'Import de planification',
        'pmiconn': 'Connexions PMI / sessions utilisateurs',
        'printers': 'Configuration des imprimantes',
        'printsubst': 'Substitutions d\'impression',
        'profohead': 'En-tetes de factures proforma',
        'profoline': 'Lignes de factures proforma',
        'profotva': 'TVA des factures proforma',
        'progerrors': 'Journal des erreurs programme',
        'progparam': 'Parametres de programmes',
        'progparamwindow': 'Parametres de fenetres de programmes',
        'progparamwindow_': 'Parametres de fenetres de programmes (extension)',
        'programs': 'Table des programmes / modules applicatifs',
        'projaux': 'Donnees auxiliaires des projets',
        'projdetail': 'Details des projets',
        'projhead': 'En-tetes des projets',
        'projinvlin': 'Lignes de facturation des projets',
        'projlab': 'Main d\'oeuvre des projets',
        'projline': 'Lignes des projets',
        'projmat': 'Matieres des projets',
        'projsize': 'Tailles / dimensions des projets',
        'projstep': 'Etapes des projets',
        'projvrsn': 'Versions des projets',
        'promohead': 'En-tetes de promotions commerciales',
        'promoline': 'Lignes de promotions commerciales',
        'purcnthead': 'En-tetes de contrats d\'achat',
        'purcntline': 'Lignes de contrats d\'achat',
        'purghead': 'En-tetes de regroupements d\'achats',
        'purgline': 'Lignes de regroupements d\'achats',
        'purhead': 'En-tetes de commandes d\'achat',
        'purheadlimite': 'Limites sur en-tetes de commandes d\'achat',
        'purinvcpt': 'Comptabilisation des factures d\'achat',
        'purinvhead': 'En-tetes de factures d\'achat',
        'purinvline': 'Lignes de factures d\'achat',
        'purinvsplit': 'Ventilation des factures d\'achat',
        'purinvtransact': 'Transactions des factures d\'achat',
        'purline': 'Lignes de commandes d\'achat',
        'purlinelimite': 'Limites sur lignes de commandes d\'achat',
        'purreqhead': 'En-tetes de demandes d\'achat',
        'purreqline': 'Lignes de demandes d\'achat',
        'qcauditctrl': 'Controles d\'audit qualite',
        'qcctrlhead': 'En-tetes de controles qualite',
        'qcctrlline': 'Lignes de controles qualite',
        'qcspecetiq': 'Etiquettes de specifications qualite',
        'qcspechead': 'En-tetes de specifications qualite',
        'qcspecline': 'Lignes de specifications qualite',
        'qctchoice': 'Choix de tests qualite',
        'qctest': 'Tests qualite',
        'query': 'Requetes sauvegardees',
        'quotes': 'Devis / offres de prix',
        'r_ih_ih': 'Relation en-tete facture - en-tete facture',
        'r_il_il': 'Relation ligne facture - ligne facture',
        'ratehead': 'En-tetes de tarifs',
        'rateline': 'Lignes de tarifs',
        'routjal': 'Jalons de gammes de fabrication',
        'routline': 'Lignes de gammes de fabrication (operations)',
        'routline_nomachine': 'Operations de gamme sans machine',
        'routreject': 'Rebuts dans les gammes de fabrication',
        'routtest': 'Tests dans les gammes de fabrication',
        'rs_lastcommit': 'Replication SQL - dernier commit',
        'rs_threads': 'Replication SQL - threads',
        'salaudit': 'Audit des ventes',
        'salaux': 'Donnees auxiliaires de ventes',
        'salediscount': 'Remises sur ventes',
        'salegroup': 'Groupes de vente',
        'salesman': 'Table des commerciaux / representants',
        'salhead': 'En-tetes de commandes de vente',
        'salline': 'Lignes de commandes de vente',
        'salplab': 'Main d\'oeuvre des ventes planifiees',
        'salpline': 'Lignes de ventes planifiees',
        'salpmat': 'Matieres des ventes planifiees',
        'salpsize': 'Tailles des ventes planifiees',
        'schedmat': 'Ordonnancement des matieres',
        'schedwrkcal': 'Calendrier de travail pour ordonnancement',
        'schedwrkdet': 'Details du calendrier de travail',
        'sendmail': 'File d\'attente d\'envoi de mails',
        'serialnum': 'Numeros de serie',
        'shipcost': 'Couts d\'expedition',
        'shipgrhead': 'En-tetes de groupes d\'expedition',
        'shipgrline': 'Lignes de groupes d\'expedition',
        'shiphead': 'En-tetes d\'expeditions (bons de livraison)',
        'shipline': 'Lignes d\'expeditions',
        'shippack': 'Colis d\'expeditions',
        'shipplan': 'Planification des expeditions',
        'shipto': 'Adresses de livraison',
        'skins': 'Themes visuels de l\'application',
        'smartsales_action': 'Actions commerciales intelligentes',
        'smartsales_client': 'Clients - ventes intelligentes',
        'smartsales_contact': 'Contacts - ventes intelligentes',
        'smt_category': 'Categories de codes intelligents',
        'smtcode': 'Codes intelligents (smart codes)',
        'smtlink': 'Liaisons de codes intelligents',
        'srvccycle': 'Cycles de service apres-vente',
        'srvcentity': 'Entites de service',
        'srvcrqhead': 'En-tetes de demandes de service',
        'srvcrqlab': 'Main d\'oeuvre des demandes de service',
        'srvcrqmat': 'Matieres des demandes de service',
        'srvcrqoth': 'Autres frais des demandes de service',
        'ssccline': 'Lignes de codes SSCC (Serial Shipping Container Code)',
        'stocks': 'Etat des stocks par article et emplacement',
        'stocks_f': 'Stocks futurs / previsionnels',
        'subaction': 'Sous-actions de sous-traitance',
        'subhead': 'En-tetes de sous-traitance',
        'subinvoice': 'Factures de sous-traitance',
        'subline_rep': 'Lignes de sous-traitance - reparation',
        'subline_sal': 'Lignes de sous-traitance - ventes',
        'techdata': 'Donnees techniques des articles',
        'techdatalang': 'Donnees techniques multilingues',
        'techlink': 'Liaisons de donnees techniques',
        'template_html': 'Modeles HTML pour mails et documents',
        'tickethead': 'En-tetes de tickets (caisse / POS)',
        'ticketline': 'Lignes de tickets',
        'ticketline_invoicelin': 'Liaison lignes ticket - lignes facture',
        'toreception': 'Receptions a effectuer',
        'transact_with_confirm': 'Transactions avec confirmation',
        'transactcash': 'Transactions en especes',
        'transactico': 'Transactions inter-societes',
        'transactico_func': 'Fonctions de transactions inter-societes',
        'transactions': 'Journal des transactions',
        'transreason': 'Motifs de transactions de stock',
        'trf_emp_3step_head': 'En-tetes de transferts employes 3 etapes',
        'trf_emp_3step_line': 'Lignes de transferts employes 3 etapes',
        'truckhead': 'En-tetes de camions / transports',
        'truckline': 'Lignes de camions / transports',
        'truckref': 'References de camions',
        'truckturn': 'Tournees de camions',
        'trustbox': 'Coffre-fort de confiance (securite)',
        'turn_prev': 'Previsions de tournees',
        'turnhead': 'En-tetes de tournees de livraison',
        'turnline': 'Lignes de tournees de livraison',
        'tvalvl': 'Niveaux de validation des transactions',
        'tvalvl_country': 'Niveaux de validation par pays',
        'userfields': 'Champs personnalises utilisateur',
        'userfieldsddlb': 'Listes deroulantes des champs personnalises',
        'users': 'Table des utilisateurs',
        'users_design': 'Preferences de design par utilisateur',
        'users_favoris': 'Favoris des utilisateurs',
        'users_size': 'Tailles de fenetres sauvegardees par utilisateur',
        'usersconx': 'Historique des connexions utilisateurs',
        'viewnames': 'Noms des vues de base de donnees',
        'viewstruct': 'Structure des vues de base de donnees',
        'wb5addfields': 'Champs additionnels Web',
        'wbvatcodes': 'Codes TVA Web',
        'wccal': 'Calendrier des postes de charge',
        'wcplan': 'Planification des postes de charge',
        'wcreq': 'Besoins des postes de charge',
        'webcmnt': 'Commentaires Web',
        'websalhead': 'En-tetes de commandes Web',
        'websalline': 'Lignes de commandes Web',
        'windows_resize': 'Sauvegarde des tailles de fenetres',
        'wipeval': 'Evaluation des en-cours de production (WIP)',
        'wms_css': 'WMS - styles CSS',
        'wms_sto': 'WMS - stockage',
        'workcenters': 'Postes de charge / centres de travail',
        'workers': 'Operateurs / travailleurs',
        'workflowhead': 'En-tetes de workflows',
        'workflowline': 'Lignes de workflows',
        'workhead': 'En-tetes d\'ordres de travail',
        'workimport': 'Import d\'ordres de travail',
        'workline': 'Lignes d\'ordres de travail',
        'workoper': 'Operations d\'ordres de travail',
        'workroll': 'Roulement de travail',
        'worktictrl': 'Controle des tickets de travail',
        'worktime': 'Temps de travail',
        'xmlerrors': 'Erreurs d\'import/export XML',
        'xmlfile': 'Fichiers XML',
        'ztmp_cs1': 'Table temporaire de calcul 1',
        'ztmp_cs2': 'Table temporaire de calcul 2',
        'ztmp_cs3': 'Table temporaire de calcul 3',
        'ztmp_cs4': 'Table temporaire de calcul 4',
    }

    return descs.get(tn, f'Table {table_name}')


def generate_md(table_name, columns, pk_cols, indexes, fk_parents, fk_children):
    """Generate markdown for a table."""
    lines = []
    lines.append(f'# Table: {table_name}')
    lines.append('')
    lines.append('## Description')
    lines.append(infer_table_description(table_name, columns))
    lines.append('')
    lines.append('## Colonnes')
    lines.append('| Colonne | Type | Largeur | Nullable | Description |')
    lines.append('|---------|------|---------|----------|-------------|')

    for col in columns:
        cn = col.get('column_name', '').strip()
        dtype = col.get('domain_name', '').strip()
        width = col.get('width', '').strip()
        scale = col.get('scale', '').strip()
        nulls = col.get('nulls', '').strip()
        default = col.get('default', '').strip()

        # Format width
        if scale and scale != '0':
            w_str = f'{width},{scale}'
        else:
            w_str = width

        nullable = 'Oui' if nulls == 'Y' else 'Non'
        desc = infer_description(cn, table_name)

        # Mark PK
        if cn in pk_cols:
            desc = 'PK' + (f' - {desc}' if desc else '')

        # Mark default
        if default and default != '(NULL)':
            desc += f' (defaut: {default})'

        lines.append(f'| {cn} | {dtype} | {w_str} | {nullable} | {desc} |')

    lines.append('')
    lines.append('## Cles et index')

    # PK
    if pk_cols:
        lines.append(f'- **PK**: {", ".join(pk_cols)}')
    else:
        lines.append('- **PK**: (aucune cle primaire definie)')

    # Indexes
    if indexes:
        for iname, idata in sorted(indexes.items()):
            uniq = idata['unique']
            cols_sorted = [c[1] for c in sorted(idata['columns'])]
            u_str = 'unique' if uniq in ('Y', 'U') else 'non-unique'
            lines.append(f'- **Index** {iname} ({", ".join(cols_sorted)}) [{u_str}]')

    lines.append('')
    lines.append('## Relations')

    # FK parents
    if fk_parents:
        parents_str = ', '.join(f'{parent} (via {role})' for role, parent in fk_parents)
        lines.append(f'- **Parents (FK sortantes)**: {parents_str}')
    else:
        lines.append('- **Parents (FK sortantes)**: Aucune')

    # FK children
    if fk_children:
        children_str = ', '.join(f'{child} (via {role})' for role, child in fk_children)
        lines.append(f'- **Enfants (FK entrantes)**: {children_str}')
    else:
        lines.append('- **Enfants (FK entrantes)**: Aucune')

    lines.append('')
    lines.append('## Utilisee par (DataWindows)')
    lines.append('*A completer lors de la Phase 3*')
    lines.append('')

    return '\n'.join(lines)


# ---- Generate all files ----
all_tables = sorted(tables_columns.keys())
print(f"\nGenerating {len(all_tables)} table files...")

count = 0
for tn in all_tables:
    cols = tables_columns[tn]
    pk = tables_pk.get(tn, [])
    idx = dict(tables_indexes.get(tn, {}))
    fk_p = tables_fk_parents.get(tn, [])
    fk_c = tables_fk_children.get(tn, [])

    md = generate_md(tn, cols, pk, idx, fk_p, fk_c)

    filepath = os.path.join(BASE, f"{tn}.md")
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(md)
    count += 1

print(f"Done! Generated {count} files.")
