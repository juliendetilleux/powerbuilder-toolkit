#!/usr/bin/env node
/**
 * Generate markdown documentation for all J-Z tables.
 */
const fs = require('fs');
const path = require('path');

const BASE = path.resolve(__dirname);

function parseFixedWidth(filepath) {
  const content = fs.readFileSync(filepath, 'utf-8');
  const lines = content.split(/\r?\n/);
  if (lines.length < 3) return [];

  const headerLine = lines[0];
  const dashLine = lines[1];

  // Find column boundaries from dash line
  const cols = [];
  let start = 0;
  let inDash = false;
  for (let i = 0; i < dashLine.length; i++) {
    if (dashLine[i] === '-' && !inDash) {
      start = i;
      inDash = true;
    } else if (dashLine[i] === ' ' && inDash) {
      cols.push([start, i]);
      inDash = false;
    }
  }
  if (inDash) cols.push([start, dashLine.length]);

  // Get header names
  const headers = cols.map(([s, e]) => headerLine.substring(s, e).trim());

  // Parse data rows
  const rows = [];
  for (let i = 2; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim() || line.trim().startsWith('(')) continue;

    const values = {};
    for (let j = 0; j < cols.length; j++) {
      const [s, e] = cols[j];
      values[headers[j]] = (line.substring(s, e) || '').trim();
    }
    if (Object.values(values).some(v => v)) {
      rows.push(values);
    }
  }
  return rows;
}

// ---- Parse all data files ----
console.log('Parsing columns...');
const columnsData = parseFixedWidth(path.join(BASE, '_all_columns_jz.txt'));
console.log(`  ${columnsData.length} column rows`);

console.log('Parsing PKs...');
const pkData = parseFixedWidth(path.join(BASE, '_all_pk_jz.txt'));
console.log(`  ${pkData.length} PK rows`);

console.log('Parsing indexes...');
const idxData = parseFixedWidth(path.join(BASE, '_all_indexes_jz.txt'));
console.log(`  ${idxData.length} index rows`);

console.log('Parsing FK parents...');
const fkParentData = parseFixedWidth(path.join(BASE, '_all_fk_parents_jz.txt'));
console.log(`  ${fkParentData.length} FK parent rows`);

console.log('Parsing FK children...');
const fkChildData = parseFixedWidth(path.join(BASE, '_all_fk_children_jz.txt'));
console.log(`  ${fkChildData.length} FK child rows`);

// ---- Organize by table ----
const tablesColumns = {};
for (const row of columnsData) {
  const tn = (row.table_name || '').trim();
  if (tn) {
    if (!tablesColumns[tn]) tablesColumns[tn] = [];
    tablesColumns[tn].push(row);
  }
}

const tablesPk = {};
for (const row of pkData) {
  const tn = (row.table_name || '').trim();
  const cn = (row.column_name || '').trim();
  if (tn && cn) {
    if (!tablesPk[tn]) tablesPk[tn] = [];
    tablesPk[tn].push(cn);
  }
}

const tablesIndexes = {};
for (const row of idxData) {
  const tn = (row.table_name || '').trim();
  const iname = (row.index_name || '').trim();
  const uniq = (row['unique'] || '').trim();
  const col = (row.column_name || '').trim();
  const seq = parseInt((row.sequence || '0').trim()) || 0;
  if (tn && iname) {
    if (!tablesIndexes[tn]) tablesIndexes[tn] = {};
    if (!tablesIndexes[tn][iname]) tablesIndexes[tn][iname] = { unique: '', columns: [] };
    tablesIndexes[tn][iname].unique = uniq;
    tablesIndexes[tn][iname].columns.push([seq, col]);
  }
}

const tablesFkParents = {};
for (const row of fkParentData) {
  const tn = (row.child_table || '').trim();
  const role = (row.role || '').trim();
  const parent = (row.parent_table || '').trim();
  if (tn && parent) {
    if (!tablesFkParents[tn]) tablesFkParents[tn] = [];
    tablesFkParents[tn].push([role, parent]);
  }
}

const tablesFkChildren = {};
for (const row of fkChildData) {
  const tn = (row.parent_table || '').trim();
  const role = (row.role || '').trim();
  const child = (row.child_table || '').trim();
  if (tn && child) {
    if (!tablesFkChildren[tn]) tablesFkChildren[tn] = [];
    tablesFkChildren[tn].push([role, child]);
  }
}

// ---- Column description inference ----
function inferDescription(colName, tableName) {
  const col = colName.toLowerCase();

  const suffixMap = [
    ['creadate', 'Date de creation'],
    ['moddate', 'Date de modification'],
    ['clotdate', 'Date de cloture'],
    ['creauser', 'Utilisateur createur'],
    ['moduser', 'Utilisateur derniere modification'],
    ['clotuser', 'Utilisateur cloture'],
    ['description', 'Description'],
    ['filename', 'Nom de fichier'],
    ['barcode', 'Code-barres'],
    ['currency', 'Devise'],
    ['category', 'Categorie'],
    ['password', 'Mot de passe'],
    ['confirmed', 'Confirme'],
    ['validated', 'Valide'],
    ['approved', 'Approuve'],
    ['cancelled', 'Annule'],
    ['warehouse', 'Entrepot'],
    ['delivery', 'Livraison'],
    ['discount', 'Remise'],
    ['address', 'Adresse'],
    ['comment', 'Commentaire'],
    ['country', 'Pays'],
    ['customer', 'Client'],
    ['supplier', 'Fournisseur'],
    ['location', 'Emplacement'],
    ['duration', 'Duree'],
    ['priority', 'Priorite'],
    ['sequence', 'Sequence'],
    ['revision', 'Revision'],
    ['version', 'Version'],
    ['balance', 'Solde'],
    ['machine', 'Machine'],
    ['percent', 'Pourcentage'],
    ['payment', 'Paiement'],
    ['product', 'Produit'],
    ['invoice', 'Facture'],
    ['printed', 'Imprime'],
    ['enabled', 'Active'],
    ['visible', 'Visible'],
    ['account', 'Compte'],
    ['urgency', 'Urgence'],
    ['remarks', 'Remarques'],
    ['worker', 'Operateur'],
    ['amount', 'Montant'],
    ['height', 'Hauteur'],
    ['length', 'Longueur'],
    ['margin', 'Marge'],
    ['remark', 'Remarque'],
    ['status', 'Statut'],
    ['closed', 'Cloture'],
    ['locked', 'Verrouille'],
    ['weight', 'Poids'],
    ['vendor', 'Fournisseur'],
    ['serial', 'Numero de serie'],
    ['credit', 'Credit'],
    ['active', 'Indicateur actif'],
    ['parent', 'Parent'],
    ['notes', 'Notes / commentaires'],
    ['order', 'Ordre'],
    ['total', 'Total'],
    ['level', 'Niveau'],
    ['group', 'Groupe'],
    ['class', 'Classe'],
    ['begin', 'Debut'],
    ['color', 'Couleur'],
    ['phone', 'Telephone'],
    ['email', 'Email'],
    ['child', 'Enfant'],
    ['debit', 'Debit'],
    ['label', 'Libelle'],
    ['title', 'Titre'],
    ['image', 'Image'],
    ['delay', 'Delai'],
    ['login', 'Login'],
    ['width', 'Largeur'],
    ['stock', 'Stock'],
    ['price', 'Prix'],
    ['ratio', 'Ratio'],
    ['batch', 'Lot'],
    ['state', 'Etat'],
    ['actif', 'Indicateur actif'],
    ['activ', 'Indicateur actif'],
    ['start', 'Debut'],
    ['count', 'Compteur'],
    ['code', 'Code identifiant'],
    ['desc', 'Description'],
    ['name', 'Nom'],
    ['date', 'Date'],
    ['type', 'Type'],
    ['addr', 'Adresse'],
    ['note', 'Note / commentaire'],
    ['sort', 'Ordre de tri'],
    ['unit', 'Unite'],
    ['user', 'Utilisateur'],
    ['size', 'Taille'],
    ['rate', 'Taux'],
    ['cost', 'Cout'],
    ['disc', 'Remise'],
    ['item', 'Article'],
    ['ship', 'Expedition'],
    ['memo', 'Memo'],
    ['path', 'Chemin'],
    ['file', 'Fichier'],
    ['logo', 'Logo'],
    ['icon', 'Icone'],
    ['text', 'Texte'],
    ['mail', 'Email'],
    ['lang', 'Langue'],
    ['city', 'Ville'],
    ['acct', 'Compte'],
    ['flag', 'Indicateur'],
    ['line', 'Numero de ligne'],
    ['nam', 'Nom'],
    ['ref', 'Reference'],
    ['num', 'Numero'],
    ['qty', 'Quantite'],
    ['qte', 'Quantite'],
    ['amt', 'Montant'],
    ['pay', 'Paiement'],
    ['inv', 'Facture'],
    ['web', 'Site web'],
    ['url', 'URL'],
    ['fax', 'Fax'],
    ['tax', 'Taxe'],
    ['vat', 'TVA'],
    ['tva', 'TVA'],
    ['loc', 'Emplacement'],
    ['lot', 'Lot'],
    ['ord', 'Ordre'],
    ['seq', 'Sequence'],
    ['zip', 'Code postal'],
    ['min', 'Minimum'],
    ['max', 'Maximum'],
    ['end', 'Fin'],
  ];

  for (const [key, desc] of suffixMap) {
    if (col.endsWith(key)) return desc;
  }

  // Contains match
  for (const key of ['date', 'code', 'name', 'desc', 'qty', 'price', 'amount', 'status', 'type', 'user']) {
    if (col.includes(key)) {
      const found = suffixMap.find(([k]) => k === key);
      if (found) return found[1];
    }
  }

  return '';
}

const tableDescriptions = {
  'jalons': "Gestion des jalons (milestones) pour le suivi de projets et ordres de fabrication",
  'labelconfig': "Configuration des formats d'etiquettes pour impression",
  'lang': "Table des langues disponibles dans l'application",
  'lang_object': "Traductions des objets de l'interface utilisateur",
  'lang_object_item': "Traductions des elements individuels des objets",
  'lblproc': "Procedures d'etiquetage",
  'lblproc2': "Procedures d'etiquetage (secondaire)",
  'link_country_ecost': "Liaison entre pays et couts supplementaires",
  'link_lbl_logo': "Liaison entre etiquettes et logos",
  'link_machine_pdc': "Liaison entre machines et postes de charge",
  'linkactivities': "Liaison des activites (CRM)",
  'linkadch': "Liaison adresses - champs additionnels",
  'linkaddisclogist': "Liaison adresses - remises logistiques",
  'linkaddiscount': "Liaison adresses - remises",
  'linkadgppoint': "Liaison adresses - points de groupement",
  'linkadpromo': "Liaison adresses - promotions",
  'linkadristqty': "Liaison adresses - ristournes par quantite",
  'linkappad': "Liaison applications - adresses",
  'linkappadtype': "Liaison applications - types d'adresses",
  'linkappmcdo': "Liaison applications - commandes fournisseur special",
  'linkdisc': "Liaison des remises",
  'linkitad': "Liaison articles - adresses (fournisseurs)",
  'linkitadpack': "Liaison articles - adresses - conditionnements",
  'linkitadpoint': "Liaison articles - adresses - points",
  'linkitadtd': "Liaison articles - adresses - donnees techniques",
  'linkitadumpur': "Liaison articles - adresses - unites d'achat",
  'linkitcn': "Liaison articles - nomenclature",
  'linkitcountry': "Liaison articles - pays",
  'linkitloc': "Liaison articles - emplacements",
  'linklpappoint': "Liaison planning - rendez-vous",
  'linkmaus': "Liaison machines - utilisateurs",
  'linkmcad': "Liaison multi-criteres - adresses",
  'linkmcad2': "Liaison multi-criteres - adresses (secondaire)",
  'linksaus': "Liaison commerciaux - utilisateurs",
  'linkusus': "Liaison utilisateurs - utilisateurs",
  'lkitcl': "Liaison articles - classes",
  'locations': "Emplacements de stockage",
  'lots': "Gestion des lots de fabrication et reception",
  'machine': "Table des machines de production",
  'machinehead': "En-tetes de groupes de machines",
  'mailaccount': "Comptes de messagerie email",
  'matallocs': "Allocations matieres pour ordres de fabrication",
  'matplan': "Plan de matieres (besoins calcules)",
  'matplannew': "Nouveau plan de matieres (MRP)",
  'matreq': "Besoins en matieres",
  'matsal': "Matieres - ventes",
  'measures': "Table des unites de mesure",
  'methodeview': "Vue des methodes de fabrication",
  'mfgcoitem': "Co-produits des ordres de fabrication",
  'mfgcoitemsal': "Co-produits OF - ventes associees",
  'mfgcosts': "Couts de fabrication",
  'mfghbatch': "Lots de fabrication - en-tetes historiques",
  'mfghead': "En-tetes des ordres de fabrication (OF)",
  'mfglallocs': "Allocations de lots de fabrication",
  'mfglbatch': "Lots de fabrication - lignes",
  'mfgwcreject': "Rebuts par poste de charge",
  'mfgwcreqs': "Besoins par poste de charge (operations OF)",
  'mfgwcreqs_advsc': "Besoins poste de charge - planification avancee",
  'mfgwctests': "Tests qualite par poste de charge",
  'mfgxtracost': "Couts supplementaires de fabrication",
  'modules': "Modules fonctionnels de l'application",
  'monitplan': "Moniteur de planification",
  'monitplanline': "Lignes du moniteur de planification",
  'monittest': "Tests du moniteur",
  'mrpabnorm': "Anomalies MRP (calcul des besoins nets)",
  'multico': "Gestion multi-societes",
  'offergrouphead': "En-tetes de groupes d'offres",
  'offergroupline': "Lignes de groupes d'offres",
  'packgrhead': "En-tetes de groupes de conditionnement",
  'packgrline': "Lignes de groupes de conditionnement",
  'packings': "Conditionnements / emballages",
  'parameters': "Parametres generaux de l'application",
  'paramini': "Parametres d'initialisation (fichier INI)",
  'paymode': "Modes de paiement",
  'pbcatcol': "Catalogue PowerBuilder - colonnes (metadonnees)",
  'pbcatedt': "Catalogue PowerBuilder - styles d'edition",
  'pbcatfmt': "Catalogue PowerBuilder - formats d'affichage",
  'pbcattbl': "Catalogue PowerBuilder - tables (metadonnees)",
  'pbcatvld': "Catalogue PowerBuilder - regles de validation",
  'pclicence': "Licences PC / postes de travail",
  'pfhead': "En-tetes de profils de securite",
  'pfline': "Lignes de profils de securite (droits d'acces)",
  'pfobjet': "Objets associes aux profils de securite",
  'pfuseracces': "Acces utilisateurs par profil",
  'pfusers': "Utilisateurs associes aux profils",
  'plangroup': "Groupes de planification",
  'planifiedtask': "Taches planifiees / ordonnancees",
  'planimport': "Import de planification",
  'pmiconn': "Connexions PMI / sessions utilisateurs actives",
  'printers': "Configuration des imprimantes",
  'printsubst': "Substitutions d'impression (redirection imprimantes)",
  'profohead': "En-tetes de factures proforma",
  'profoline': "Lignes de factures proforma",
  'profotva': "TVA des factures proforma",
  'progerrors': "Journal des erreurs programme",
  'progparam': "Parametres de programmes",
  'progparamwindow': "Parametres de fenetres de programmes",
  'progparamwindow_': "Parametres de fenetres de programmes (extension)",
  'programs': "Table des programmes / modules applicatifs",
  'projaux': "Donnees auxiliaires des projets",
  'projdetail': "Details des projets",
  'projhead': "En-tetes des projets",
  'projinvlin': "Lignes de facturation des projets",
  'projlab': "Main d'oeuvre des projets",
  'projline': "Lignes des projets",
  'projmat': "Matieres des projets",
  'projsize': "Tailles / dimensions des projets",
  'projstep': "Etapes des projets",
  'projvrsn': "Versions des projets",
  'promohead': "En-tetes de promotions commerciales",
  'promoline': "Lignes de promotions commerciales",
  'purcnthead': "En-tetes de contrats d'achat",
  'purcntline': "Lignes de contrats d'achat",
  'purghead': "En-tetes de regroupements d'achats",
  'purgline': "Lignes de regroupements d'achats",
  'purhead': "En-tetes de commandes d'achat",
  'purheadlimite': "Limites sur en-tetes de commandes d'achat",
  'purinvcpt': "Comptabilisation des factures d'achat",
  'purinvhead': "En-tetes de factures d'achat",
  'purinvline': "Lignes de factures d'achat",
  'purinvsplit': "Ventilation des factures d'achat",
  'purinvtransact': "Transactions des factures d'achat",
  'purline': "Lignes de commandes d'achat",
  'purlinelimite': "Limites sur lignes de commandes d'achat",
  'purreqhead': "En-tetes de demandes d'achat",
  'purreqline': "Lignes de demandes d'achat",
  'qcauditctrl': "Controles d'audit qualite",
  'qcctrlhead': "En-tetes de controles qualite",
  'qcctrlline': "Lignes de controles qualite",
  'qcspecetiq': "Etiquettes de specifications qualite",
  'qcspechead': "En-tetes de specifications qualite",
  'qcspecline': "Lignes de specifications qualite",
  'qctchoice': "Choix de tests qualite",
  'qctest': "Tests qualite",
  'query': "Requetes sauvegardees",
  'quotes': "Devis / offres de prix",
  'r_ih_ih': "Relation en-tete facture - en-tete facture (avoir/remboursement)",
  'r_il_il': "Relation ligne facture - ligne facture (avoir/remboursement)",
  'ratehead': "En-tetes de grilles tarifaires",
  'rateline': "Lignes de grilles tarifaires",
  'routjal': "Jalons de gammes de fabrication",
  'routline': "Lignes de gammes de fabrication (operations)",
  'routline_nomachine': "Operations de gamme sans machine assignee",
  'routreject': "Rebuts dans les gammes de fabrication",
  'routtest': "Tests dans les gammes de fabrication",
  'rs_lastcommit': "Replication SQL - dernier commit",
  'rs_threads': "Replication SQL - threads",
  'salaudit': "Audit des ventes (historique modifications)",
  'salaux': "Donnees auxiliaires de ventes",
  'salediscount': "Remises sur ventes",
  'salegroup': "Groupes de vente",
  'salesman': "Table des commerciaux / representants",
  'salhead': "En-tetes de commandes de vente",
  'salline': "Lignes de commandes de vente",
  'salplab': "Main d'oeuvre des ventes planifiees",
  'salpline': "Lignes de ventes planifiees",
  'salpmat': "Matieres des ventes planifiees",
  'salpsize': "Tailles des ventes planifiees",
  'schedmat': "Ordonnancement des matieres",
  'schedwrkcal': "Calendrier de travail pour ordonnancement",
  'schedwrkdet': "Details du calendrier de travail",
  'sendmail': "File d'attente d'envoi de mails",
  'serialnum': "Numeros de serie",
  'shipcost': "Couts d'expedition",
  'shipgrhead': "En-tetes de groupes d'expedition",
  'shipgrline': "Lignes de groupes d'expedition",
  'shiphead': "En-tetes d'expeditions (bons de livraison)",
  'shipline': "Lignes d'expeditions",
  'shippack': "Colis d'expeditions",
  'shipplan': "Planification des expeditions",
  'shipto': "Adresses de livraison",
  'Skins': "Themes visuels de l'application",
  'smartsales_action': "Actions commerciales intelligentes",
  'smartsales_client': "Clients - ventes intelligentes",
  'smartsales_contact': "Contacts - ventes intelligentes",
  'smt_category': "Categories de codes intelligents",
  'smtcode': "Codes intelligents (smart codes)",
  'smtlink': "Liaisons de codes intelligents",
  'srvccycle': "Cycles de service apres-vente",
  'srvcentity': "Entites de service",
  'srvcrqhead': "En-tetes de demandes de service (SAV)",
  'srvcrqlab': "Main d'oeuvre des demandes de service",
  'srvcrqmat': "Matieres des demandes de service",
  'srvcrqoth': "Autres frais des demandes de service",
  'ssccline': "Lignes de codes SSCC (Serial Shipping Container Code)",
  'stocks': "Etat des stocks par article et emplacement",
  'stocks_f': "Stocks futurs / previsionnels",
  'SUBACTION': "Sous-actions de sous-traitance",
  'SUBHEAD': "En-tetes de sous-traitance",
  'SUBINVOICE': "Factures de sous-traitance",
  'SUBLINE_REP': "Lignes de sous-traitance - reparation",
  'SUBLINE_SAL': "Lignes de sous-traitance - ventes",
  'techdata': "Donnees techniques des articles",
  'Techdatalang': "Donnees techniques multilingues",
  'techlink': "Liaisons de donnees techniques",
  'template_html': "Modeles HTML pour mails et documents",
  'tickethead': "En-tetes de tickets (caisse / POS)",
  'ticketline': "Lignes de tickets",
  'ticketline_invoicelin': "Liaison lignes ticket - lignes facture",
  'toreception': "Receptions a effectuer (attendues)",
  'transact_with_confirm': "Transactions avec confirmation requise",
  'transactcash': "Transactions en especes",
  'transactico': "Transactions inter-societes",
  'transactico_func': "Fonctions de transactions inter-societes",
  'transactions': "Journal des transactions de stock",
  'transreason': "Motifs de transactions de stock",
  'trf_emp_3step_head': "En-tetes de transferts employes 3 etapes",
  'trf_emp_3step_line': "Lignes de transferts employes 3 etapes",
  'truckhead': "En-tetes de camions / transports",
  'truckline': "Lignes de camions / chargements",
  'truckref': "References de camions / vehicules",
  'truckturn': "Tournees de camions",
  'trustbox': "Coffre-fort de confiance (securite)",
  'turn_prev': "Previsions de tournees",
  'turnhead': "En-tetes de tournees de livraison",
  'turnline': "Lignes de tournees de livraison",
  'tvalvl': "Niveaux de validation des transactions",
  'tvalvl_country': "Niveaux de validation par pays",
  'userfields': "Champs personnalises utilisateur",
  'userfieldsddlb': "Listes deroulantes des champs personnalises",
  'users': "Table des utilisateurs de l'application",
  'users_design': "Preferences de design par utilisateur",
  'users_favoris': "Favoris des utilisateurs (raccourcis)",
  'users_size': "Tailles de fenetres sauvegardees par utilisateur",
  'usersconx': "Historique des connexions utilisateurs",
  'viewnames': "Noms des vues de base de donnees",
  'viewstruct': "Structure des vues de base de donnees",
  'wb5addfields': "Champs additionnels Web",
  'wbvatcodes': "Codes TVA Web",
  'wccal': "Calendrier des postes de charge",
  'wcplan': "Planification des postes de charge",
  'wcreq': "Besoins des postes de charge",
  'webcmnt': "Commentaires Web (e-commerce)",
  'websalhead': "En-tetes de commandes Web (e-commerce)",
  'websalline': "Lignes de commandes Web (e-commerce)",
  'windows_resize': "Sauvegarde des tailles de fenetres",
  'wipeval': "Evaluation des en-cours de production (WIP)",
  'WMS_CSS': "WMS - styles CSS",
  'WMS_STO': "WMS - stockage",
  'workcenters': "Postes de charge / centres de travail",
  'workers': "Operateurs / travailleurs",
  'workflowhead': "En-tetes de workflows",
  'workflowline': "Lignes / etapes de workflows",
  'workhead': "En-tetes d'ordres de travail",
  'workimport': "Import d'ordres de travail",
  'workline': "Lignes d'ordres de travail",
  'workoper': "Operations d'ordres de travail",
  'workroll': "Roulement / planning de travail",
  'worktictrl': "Controle des tickets de travail",
  'worktime': "Saisie des temps de travail",
  'xmlerrors': "Erreurs d'import/export XML",
  'xmlfile': "Fichiers XML (import/export)",
  'ztmp_cs1': "Table temporaire de calcul 1",
  'ztmp_cs2': "Table temporaire de calcul 2",
  'ztmp_cs3': "Table temporaire de calcul 3",
  'ztmp_cs4': "Table temporaire de calcul 4",
};

function inferTableDescription(tableName) {
  return tableDescriptions[tableName] || tableDescriptions[tableName.toLowerCase()] || `Table ${tableName}`;
}

function generateMd(tableName, columns, pkCols, indexes, fkParents, fkChildren) {
  const lines = [];
  lines.push(`# Table: ${tableName}`);
  lines.push('');
  lines.push('## Description');
  lines.push(inferTableDescription(tableName));
  lines.push('');
  lines.push('## Colonnes');
  lines.push('| Colonne | Type | Largeur | Nullable | Description |');
  lines.push('|---------|------|---------|----------|-------------|');

  for (const col of columns) {
    const cn = (col.column_name || '').trim();
    const dtype = (col.domain_name || '').trim();
    const width = (col.width || '').trim();
    const scale = (col.scale || '').trim();
    const nulls = (col.nulls || '').trim();
    const defVal = (col['default'] || '').trim();

    const wStr = (scale && scale !== '0') ? `${width},${scale}` : width;
    const nullable = nulls === 'Y' ? 'Oui' : 'Non';
    let desc = inferDescription(cn, tableName);

    if (pkCols.includes(cn)) {
      desc = 'PK' + (desc ? ` - ${desc}` : '');
    }
    if (defVal && defVal !== '(NULL)') {
      desc += ` (defaut: ${defVal})`;
    }

    lines.push(`| ${cn} | ${dtype} | ${wStr} | ${nullable} | ${desc} |`);
  }

  lines.push('');
  lines.push('## Cles et index');

  if (pkCols.length > 0) {
    lines.push(`- **PK**: ${pkCols.join(', ')}`);
  } else {
    lines.push('- **PK**: (aucune cle primaire definie)');
  }

  if (indexes) {
    for (const [iname, idata] of Object.entries(indexes).sort()) {
      const colsSorted = idata.columns.sort((a, b) => a[0] - b[0]).map(c => c[1]);
      const uStr = (idata.unique === 'Y' || idata.unique === 'U') ? 'unique' : 'non-unique';
      lines.push(`- **Index** ${iname} (${colsSorted.join(', ')}) [${uStr}]`);
    }
  }

  lines.push('');
  lines.push('## Relations');

  if (fkParents && fkParents.length > 0) {
    const parentsStr = fkParents.map(([role, parent]) => `${parent} (via ${role})`).join(', ');
    lines.push(`- **Parents (FK sortantes)**: ${parentsStr}`);
  } else {
    lines.push('- **Parents (FK sortantes)**: Aucune');
  }

  if (fkChildren && fkChildren.length > 0) {
    const childrenStr = fkChildren.map(([role, child]) => `${child} (via ${role})`).join(', ');
    lines.push(`- **Enfants (FK entrantes)**: ${childrenStr}`);
  } else {
    lines.push('- **Enfants (FK entrantes)**: Aucune');
  }

  lines.push('');
  lines.push('## Utilisee par (DataWindows)');
  lines.push('*A completer lors de la Phase 3*');
  lines.push('');

  return lines.join('\n');
}

// ---- Generate all files ----
const allTables = Object.keys(tablesColumns).sort();
console.log(`\nGenerating ${allTables.length} table files...`);

let count = 0;
for (const tn of allTables) {
  const cols = tablesColumns[tn];
  const pk = tablesPk[tn] || [];
  const idx = tablesIndexes[tn] || {};
  const fkP = tablesFkParents[tn] || [];
  const fkC = tablesFkChildren[tn] || [];

  const md = generateMd(tn, cols, pk, idx, fkP, fkC);
  const filepath = path.join(BASE, `${tn}.md`);
  fs.writeFileSync(filepath, md, 'utf-8');
  count++;
}

console.log(`Done! Generated ${count} files.`);
