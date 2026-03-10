# Flux : Controle qualite

## Description
Le module qualite (`_quality`) de PmiGest assure le suivi des controles qualite sur les articles recus (reception fournisseur) et les articles produits (fabrication). Il s'integre avec le module stock pour la gestion des emplacements de quarantaine et avec le module codes-barres pour la saisie sur le terrain.

## Etapes du flux

1. **Configuration des controles** : Definition des parametres de controle qualite par article : tests a effectuer, criteres d'acceptation, frequence. → Configuration dans le module `_quality`, Tables : `qlparam`, `qltest`
2. **Declenchement automatique** : A la reception fournisseur, le systeme peut declencher automatiquement un controle qualite si l'article est parametre pour cela (champ `QCParaLaunch`). → Fenetre : `w_purchase_receipt` → `w_transact_rcpo_inout`, Table : `qlctrl`
3. **Saisie du controle** : L'operateur effectue les tests et saisit les resultats. La saisie peut se faire via l'ecran classique ou via le terminal codes-barres. → Fenetre : `w_qc_update` (classique), `w_brf_quality` / `w_bcd_quality` (codes-barres), Table : `qlctrl`
4. **Validation du controle** : Validation des resultats : accepte, refuse, accepte sous derogation. Mise a jour du statut qualite de l'article en stock. → Fenetre : `w_qc_update`, Tables : `qlctrl`, `stockmvt`
5. **Gestion de la quarantaine** : Les articles en attente de controle sont places en emplacement de quarantaine. Apres validation, ils sont transferes vers l'emplacement de stock normal. → Table : `stockmvt` (transfert quarantaine)
6. **Consultation historique QC** : Consultation de l'historique des controles qualite pour un lot ou un article. → Fenetre : `w_qry_lot_info` (onglet qualite), DataWindow : `d_mfg_testsshow`
7. **Controle qualite stock** : Verification qualite sur des articles deja en stock (retest, controles periodiques). → Fenetre : `w_sales_shipnotice2` (onglet QC stock), DataWindow : `d_qc_stock`

## Fenetres impliquees

| Fenetre | Module | Role |
|---------|--------|------|
| `w_qc_update` | `_quality` | Saisie et mise a jour des controles qualite |
| `w_brf_quality` | `_stkbarcod` | Saisie controle qualite par lecteur BRF |
| `w_bcd_quality` | `_stkbarcod` | Saisie controle qualite par scanner BCD |
| `w_purchase_receipt` | `_stock` | Reception fournisseur (declenchement QC) |
| `w_transact_rcpo_inout` | `_stock` | Transaction reception (parametre QCParaLaunch) |
| `w_transact_rcpo3` | `_stock` | Transaction reception variante (parametre QCParaLaunch) |
| `w_sales_shipnotice2` | `_sales` | Bon de livraison - onglet QC stock |
| `w_qry_lot_info` | `_query` | Information lot - historique tests |

## Tables impliquees

| Table | Usage |
|-------|-------|
| `qlctrl` | Controles qualite (ecriture) - table principale QC, champs : `qlctrlid`, `qlitem`, `qlresult` |
| `qlparam` | Parametres de controle qualite (lecture) |
| `qltest` | Tests qualite definis (lecture) |
| `qlresult` | Resultats des tests (ecriture) |
| `stockmvt` | Mouvements stock (ecriture) - quarantaine, liberation |
| `items` | Articles (lecture) - parametrage QC par article |
| `purgline` | Lignes commande achat (lecture) - lien avec reception |
| `mfghead` | OF (lecture) - lien avec production |

## DataWindows principaux

| DataWindow | Module | Role |
|------------|--------|------|
| `d_qc_update` | `_quality` | Mise a jour controle qualite |
| `d_qc_stock` | `_sales` | Controle qualite stock (dans shipnotice) |
| `d_mfg_testsshow` | `_query` | Affichage resultats tests fabrication |
| `d_quality_update` | `_stkbarcod` | Saisie QC par codes-barres |

## Objet non-visuel cle

| Objet | Module | Role |
|-------|--------|------|
| `nvo_bcd_brf` | `_stkbarcod` / `_cust2` | Logique metier du scanner codes-barres. Gere le declenchement QC, la saisie des resultats, le reset de la grille qualite. Plus de 24000 lignes de code. |

## Acces depuis les menus

- Menu ERP MDI : `m_erp_mdi` → `opensheet(w_qc_update, w_erp_mdi_frame, 0, Original!)`
- Menu action : `m_action` → `gn_open.fn_open(w_qc_update, true, parentwindow)`

## Liens avec autres flux

- **Achat** : Le controle qualite est declenche automatiquement lors de la reception fournisseur si le parametre `QCParaLaunch` est actif.
- **Fabrication** : Les produits finis peuvent etre soumis a un controle qualite a la sortie de production.
- **Stock** : Les articles en quarantaine sont geres par des mouvements de stock specifiques. La liberation ou le rejet modifie l'emplacement.
- **Vente** : L'onglet QC dans le bon de livraison permet de verifier le statut qualite avant expedition.
