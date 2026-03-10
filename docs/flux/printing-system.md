# Flux : Systeme d'impression

## Description
Le systeme d'impression de PmiGest est centralise autour de la fenetre `w_print` et de la structure `s_print` (alias `PrintParam`). Cette architecture permet une gestion uniforme de l'impression de tous les documents de l'ERP : commandes, bons de livraison, factures, etiquettes, rapports, etc. Les DataWindows d'impression sont repartis dans les modules `_prints_std`, `_prints_mod`, `_prints_mod2t`, `_prints_qry`, `_prints_crm` et `_prints_clot`. Le module `_FlxReport` fournit une integration avec FlexReport pour les etats avances.

## Etapes du flux

1. **Preparation des parametres** : Le code appelant remplit la structure `s_print` (PrintParam) avec : le DataWindow a utiliser, les arguments de retrieve, le format, le nombre de copies, les options d'affichage. → Structure : `s_print`
2. **Appel de la fenetre d'impression** : La fenetre generique est ouverte avec les parametres. → Appel : `openwithparm(w_print, printparam)`
3. **Chargement des donnees** : La fenetre `w_print` cree dynamiquement le DataWindow, le connecte a la base (SQLCA), et execute le retrieve avec les arguments fournis. → Fenetre : `w_print`
4. **Apercu avant impression** : L'utilisateur visualise le document avant impression (si `autoprint = false`). → Fenetre : `w_print`
5. **Impression** : Envoi a l'imprimante avec les parametres (imprimante, format, copies). → Fenetre : `w_print`
6. **Export** : Export optionnel vers PDF, Excel, ou autre format. → Fenetre : `w_print`, champs : `exportname`, `exportformat`
7. **Envoi par email** : Envoi du document en piece jointe par email. → Fenetre : `w_print` → `openwithparm(w_email, email)`
8. **Envoi par fax** : Envoi du document par fax (legacy). → Fenetre : `w_print` → `openwithparm(w_print2fax, printparam)`
9. **Impression FlexReport** : Pour les etats avances, utilisation de FlexReport. → Fenetre : `w_flxreport` via `OpenWithParm(w_flxreport, str_tmp)`

## Structure s_print (PrintParam)

| Champ | Type | Description |
|-------|------|-------------|
| `datawindow` | String | Nom du DataWindow a imprimer (ex: `d_salhead_print`) |
| `retrievearg` | String | Arguments du retrieve (ex: numero de commande) |
| `windowname` | String | Titre de la fenetre d'apercu |
| `docname` | String | Nom du document |
| `format` | String | Format papier (ex: `A4V`, `A4H`) |
| `nbcopy` | Integer | Nombre de copies |
| `autoprint` | Boolean | Impression directe (true) ou apercu (false) |
| `withsetup` | Boolean | Afficher la boite de dialogue imprimante |
| `withfilter` | Boolean | Permettre le filtrage des donnees |
| `filter` | String | Filtre a appliquer |
| `companyname` | Boolean | Afficher le nom de societe |
| `companylogo` | Boolean | Afficher le logo societe |
| `companycurrency` | Boolean | Afficher la devise |
| `withtitle` | Boolean | Afficher un titre |
| `reporttitle` | String | Titre du rapport |
| `withinfo` | Boolean | Afficher des infos supplementaires |
| `infotext` | String | Texte d'information |
| `withisoref` | Boolean | Afficher la reference ISO |
| `isoref` | String | Reference ISO |
| `exportable` | Boolean | Permettre l'export |
| `exportname` | String | Nom du fichier d'export |
| `exportformat` | String | Format d'export (E=Excel, EC=Excel complet, P=PDF) |
| `PrinterName` | String | Nom de l'imprimante |
| `WithPrinter` | Boolean | Utiliser une imprimante specifique |

## Fenetres impliquees

| Fenetre | Module | Role |
|---------|--------|------|
| `w_print` | `cust_peppol` / `_prints_std` | Fenetre generique d'impression (3200+ lignes) |
| `w_flxreport` | `_FlxReport` | Integration FlexReport |
| `w_email` | `Shared_mail` | Envoi email avec piece jointe |
| `w_print2fax` | `_prints_std` | Envoi par fax |
| `w_erreur_log_mail` | `_prints_std` | Log des erreurs d'envoi mail |

## Modules d'impression

| Module | Nombre d'objets | Role |
|--------|----------------|------|
| `_prints_std` | 569 | DataWindows d'impression standard (commandes, factures, BL, etc.) |
| `_prints_mod` | 193 | DataWindows d'impression modifies (variantes client) |
| `_prints_mod2t` | - | Variantes d'impression secondaires |
| `_prints_qry` | 207 | DataWindows d'impression pour les requetes/rapports |
| `_prints_crm` | - | Impressions specifiques CRM |
| `_prints_clot` | - | Impressions de cloture |
| `_FlxReport` | 184 | Etats FlexReport |

## DataWindows d'impression principaux

| DataWindow | Module | Role |
|------------|--------|------|
| `d_salhead_print` | `_prints_std` | Confirmation de commande |
| `d_shiphead_print` | `_prints_std` | Bon de livraison |
| `d_invhead_print` | `_prints_std` | Facture de vente |
| `d_purghead_print` | `_prints_std` | Commande d'achat |
| `d_trans_rcpo_print` | `_prints_std` | Bon de reception |
| `d_trans_rcmo_print` | `_prints_std` | Bon de production |
| `d_stock_id_print` | `_prints_std` | Etiquette de stock |
| `d_prepcmd_etiq_print` | `_prints_std` | Etiquette preparation commande |
| `d_invoicexml_print` | `cust_peppol` | Facture electronique XML |

## Mecanisme d'appel typique

```powerscript
// Exemple d'impression d'une commande
s_print PrintParam

Printparam.datawindow = "d_salhead_print"
Printparam.retrievearg = String(ll_salorder)
Printparam.windowname = "Confirmation de commande"
Printparam.docname = "CMD_" + String(ll_salorder)
Printparam.format = "A4V"
Printparam.nbcopy = 1
Printparam.companyname = True
Printparam.companylogo = True
Printparam.withsetup = True
Printparam.exportable = True
Printparam.exportformat = "E"

openwithparm(w_print, printparam)
```

## Liens avec autres flux

- **Tous les modules** : Chaque module fonctionnel utilise `w_print` pour ses impressions.
- **Email** : L'envoi par email est integre via `Shared_mail`.
- **Peppol** : Les factures electroniques utilisent `w_flxreport` pour la generation XML.
- **FlexReport** : Les etats complexes sont geres par `_FlxReport`.
