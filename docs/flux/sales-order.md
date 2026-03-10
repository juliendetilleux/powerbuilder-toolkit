# Flux : Cycle de vente

## Description
Le cycle de vente dans PmiGest ERP couvre l'ensemble du processus commercial, depuis la creation d'un devis jusqu'a la facturation finale du client. Ce flux traverse quatre modules principaux (`_devis`, `_sales`, `_stock`, `_ifcpt`) et implique des interactions etroites entre les commandes de vente, les expeditions (livraisons), et la generation de factures. Le processus inclut egalement l'impression des documents commerciaux via le module `_prints_std`.

## Etapes du flux

1. **Creation du devis** : L'utilisateur cree un devis pour un client avec les articles, prix et conditions. → Fenetre : `w_devis_update`, Table : `devishead` / `devisline`
2. **Conversion devis en commande** : Le devis accepte est transforme en commande de vente (copie des lignes devis vers lignes commande). → Fenetre : `w_devis_update` (action conversion), Tables : `salhead` / `salline`
3. **Saisie/modification commande** : L'operateur peut creer ou modifier une commande de vente directement. Verification des stocks disponibles, calcul des prix, gestion des remises. → Fenetre : `w_sales_order_update`, Tables : `salhead` / `salline`
4. **Allocation stock** : Les quantites commandees sont reservees (allouees) dans le stock. Le champ `slqtyalloc` de `salline` est mis a jour. → Fenetre : `w_sales_order_update`, Table : `salline`, `stockmvt`
5. **Preparation de commande / Picking** : Preparation physique des articles a expedier. Peut etre effectuee via lecteur codes-barres. → Fenetre : `w_brf_ship_prepare` / `w_bcd_ship_prepare`, Tables : `salline`, `stockmvt`
6. **Creation du bon de livraison (BL)** : Generation du bon d'expedition a partir des lignes commande preparees. → Fenetre : `w_sales_shipnotice2`, Tables : `shiphead` / `shipline`
7. **Expedition** : Validation de l'expedition, mise a jour des quantites livrees (`slqtyreal` dans `salline`), deduction du stock. → Fenetre : `w_sales_shipnotice2`, Tables : `shiphead`, `shipline`, `stockmvt`
8. **Facturation** : Generation de la facture a partir des bons de livraison ou directement depuis la commande. → Fenetre : `w_invoices_create` / `w_invoices_update`, Tables : `invoicehead` / `invoiceline`
9. **Impression des documents** : Impression des devis, confirmations de commande, bons de livraison et factures via la structure `s_print` (PrintParam). → Fenetre : `w_print`, DataWindows : `d_salhead_print`, `d_shiphead_print`, `d_invhead_print`
10. **Export comptable** : Les factures validees sont exportees vers le logiciel comptable. → Fenetre : `w_cpt_invexp`, Tables : `invoicehead`, `cptexport`

## Fenetres impliquees

| Fenetre | Module | Role |
|---------|--------|------|
| `w_devis_update` | `_devis` | Creation et modification des devis |
| `w_devis_list` | `_devis` | Liste et consultation des devis |
| `w_sales_order_update` | `_sales` | Creation et modification des commandes de vente |
| `w_sales_order_list` | `_sales` | Liste des commandes de vente |
| `w_sales_shipnotice2` | `_sales` | Bons de livraison / expedition |
| `w_sales_invoices` | `_sales` | Gestion des factures de vente |
| `w_invoices_create` | `_sales` | Creation de factures |
| `w_invoices_update` | `_sales` | Modification de factures |
| `w_brf_ship_prepare` | `_stkbarcod` | Preparation commande par lecteur code-barres (BRF) |
| `w_bcd_ship_prepare` | `_stkbarcod` | Preparation commande par scanner (BCD) |
| `w_print` | `cust_peppol` / `_prints_std` | Fenetre d'impression generique |
| `w_cpt_invexp` | `_ifcpt` | Export comptable des factures |
| `w_invoices_peppol` | `cust_peppol` | Envoi des factures electroniques (Peppol) |
| `w_invoices_pdf` | `cust_peppol` | Generation des factures PDF |

## Tables impliquees

| Table | Usage |
|-------|-------|
| `devishead` | En-tete des devis (ecriture lors creation, lecture lors conversion) |
| `devisline` | Lignes de devis (ecriture/lecture) |
| `salhead` | En-tete des commandes de vente (ecriture) - champs cles : `shcode`, `shcust`, `shdate`, `shstatus` |
| `salline` | Lignes de commande (ecriture) - champs cles : `slcode`, `slline`, `slitem`, `slqtyreq`, `slqtyalloc`, `slqtyreal`, `slstatus` |
| `shiphead` | En-tete des bons de livraison (ecriture) - champs : `shcode`, `shdate`, `shcust` |
| `shipline` | Lignes de livraison (ecriture) - champs : `slcode`, `slsalorder`, `slsalline`, `slqtyship` |
| `invoicehead` | En-tete des factures (ecriture) - champs : `ihcode`, `ihcust`, `ihdate`, `ihtypinv` |
| `invoiceline` | Lignes de facture (ecriture) - champs : `ilcode`, `ilsalorder`, `ilsalline` |
| `stockmvt` | Mouvements de stock generes par allocation et expedition (ecriture) |
| `items` | Articles - reference (lecture) |
| `adresses` | Clients / Adresses (lecture) |
| `multico` | Gestion multi-societes (lecture) |
| `cptexport` | Export comptable (ecriture) |
| `salpline` | Lignes de prix commande (ecriture) |

## DataWindows principaux

| DataWindow | Module | Role |
|------------|--------|------|
| `d_devishead_update` | `_devis` | Mise a jour en-tete devis |
| `d_devisline_update` | `_devis` | Mise a jour lignes devis |
| `d_salhead_update` | `_sales` | Mise a jour en-tete commande |
| `d_salline_update` | `_sales` | Mise a jour lignes commande |
| `d_salhead_sel` | `_sales` | Selection / liste commandes |
| `d_shiphead_update` | `_sales` | Mise a jour en-tete livraison |
| `d_shipline_update` | `_sales` | Mise a jour lignes livraison |
| `d_invhead_update` | `_sales` | Mise a jour en-tete facture |
| `d_invline_update` | `_sales` | Mise a jour lignes facture |
| `d_salhead_print` | `_prints_std` | Impression confirmation commande |
| `d_shiphead_print` | `_prints_std` | Impression bon de livraison |
| `d_invhead_print` | `_prints_std` | Impression facture |
| `d_invhead_sel_peppol` | `cust_peppol` | Selection factures pour envoi Peppol |
| `d_list_prepa` | `_cust2` | Liste des preparations de commande |

## Statuts de commande (salline.slstatus)

| Valeur | Signification |
|--------|---------------|
| 1 | Nouvelle |
| 2 | En cours |
| 3 | Allouee |
| 4 | Partiellement livree |
| 5 | Livree |
| 6 | Cloturee |
| 9 | Annulee |

## Mecanisme d'appel entre fenetres

Le flux utilise principalement `OpenWithParm` avec la structure `s_print` (alias `PrintParam`) pour passer les parametres d'impression. La structure contient le nom du DataWindow, les arguments de retrieve, le format, le nombre de copies, etc. La fenetre `w_print` est la fenetre generique d'impression appelee par `openwithparm(w_print, printparam)`.

Pour la navigation entre fenetres metier, le service global `gn_open` fournit des methodes comme `fn_openwithparm()` et `fn_open()` qui gerent l'ouverture avec controle d'acces.
