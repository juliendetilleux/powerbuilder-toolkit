# Flux : Cycle d'achat

## Description
Le cycle d'achat dans PmiGest couvre le processus complet depuis la demande d'achat jusqu'a la reception des marchandises et la facturation fournisseur. Le module `_purch` gere les commandes d'achat, le module `_stock` prend en charge les receptions, et le module `_ifcpt` assure l'export des factures fournisseurs vers la comptabilite.

## Etapes du flux

1. **Besoin d'achat** : Les besoins sont identifies manuellement ou generes automatiquement depuis les commandes de vente (generation croisee vente/achat) ou depuis la planification (MRP). → Fenetre : `w_mfg_prep_byfiles`, Tables : `salline`, `purghead`
2. **Creation commande d'achat** : Saisie de la commande fournisseur avec articles, quantites, prix et conditions de livraison. → Fenetre : `w_purchase_order_update`, Tables : `purghead` / `purgline`
3. **Impression commande d'achat** : Impression et envoi au fournisseur. → Fenetre : `w_print`, DataWindow : `d_purghead_print`
4. **Reception marchandises** : Enregistrement de la reception physique des articles commandes. Mise a jour du stock et des quantites recues sur la commande. → Fenetre : `w_purchase_receipt`, Tables : `stockmvt`, `purgline`
5. **Reception partielle / complete** : Gestion des receptions partielles avec suivi des soldes restants. Declenchement optionnel du controle qualite a la reception. → Fenetre : `w_transact_rcpo_inout` / `w_transact_rcpo3`, Tables : `purgline`, `stockmvt`, `qlctrl`
6. **Retour fournisseur** : En cas de non-conformite, retour des articles au fournisseur. → Fenetre : `w_purchase_return`, Tables : `purgline`, `stockmvt`
7. **Facturation fournisseur** : Rapprochement de la facture fournisseur avec les receptions et la commande. → Fenetre : `w_purchase_invoice`, Tables : `invoicehead` / `invoiceline`
8. **Export comptable fournisseur** : Export des factures d'achat vers le logiciel comptable. → Fenetre : `w_cpt_purinvexp`, Table : `cptexport`

## Fenetres impliquees

| Fenetre | Module | Role |
|---------|--------|------|
| `w_purchase_order_update` | `_purch` | Creation/modification commande achat |
| `w_purchase_order_list` | `_purch` | Liste des commandes d'achat |
| `w_purchase_receipt` | `_stock` | Reception des marchandises |
| `w_purchase_return` | `_stock` | Retour fournisseur |
| `w_transact_rcpo_inout` | `_stock` | Transaction de reception (entree/sortie) |
| `w_transact_rcpo2_inout` | `_stock` | Transaction reception variante 2 |
| `w_transact_rcpo3` | `_stock` | Transaction reception variante 3 |
| `w_transact_rcpo_dlxo` | `_stock` | Transaction reception avec delai |
| `w_transact_rtpo` | `_stock` | Transaction retour fournisseur |
| `w_transact_rtpo1` | `_stock` | Transaction retour variante 1 |
| `w_transact_rtpo2` | `_stock` | Transaction retour variante 2 |
| `w_transact_rcsc` | `_stock` | Transaction reception sous-traitance |
| `w_transact_rtsc` | `_stock` | Transaction retour sous-traitance |
| `w_purchase_invoice` | `_purch` | Facturation fournisseur |
| `w_cpt_purinvexp` | `_ifcpt` | Export comptable factures achat |
| `w_print` | `_prints_std` | Impression documents |
| `w_mfg_linkallocwcreq` | `_manufg` | Lien allocation avec demande d'achat |

## Tables impliquees

| Table | Usage |
|-------|-------|
| `purghead` | En-tete commande achat (ecriture) - champs : `phcode`, `phsupp`, `phdate`, `phstatus` |
| `purgline` | Lignes commande achat (ecriture) - champs : `plcode`, `plline`, `plitem`, `plqtyord`, `plqtyrcpt` |
| `stockmvt` | Mouvements de stock (ecriture) - generes a la reception |
| `invoicehead` | En-tete facture fournisseur (ecriture) |
| `invoiceline` | Lignes facture fournisseur (ecriture) |
| `items` | Articles (lecture) |
| `adresses` | Fournisseurs / Adresses (lecture) |
| `qlctrl` | Controle qualite a la reception (ecriture optionnelle) |
| `cptexport` | Export comptable (ecriture) |
| `multico` | Multi-societes (lecture) |

## DataWindows principaux

| DataWindow | Module | Role |
|------------|--------|------|
| `d_purghead_update` | `_purch` | Mise a jour en-tete commande achat |
| `d_purgline_update` | `_purch` | Mise a jour lignes commande achat |
| `d_purghead_sel` | `_purch` | Liste / selection commandes achat |
| `d_pur_rcpt_sel` | `_stock` | Selection receptions |
| `d_trans_rcpo_print` | `_prints_std` | Impression bon de reception |
| `d_purghead_print` | `_prints_std` | Impression commande d'achat |

## Liens avec autres flux

- **Vente** : La generation croisee `vente → achat` cree automatiquement des commandes fournisseur a partir des commandes client (via menu `m_salhead.m_generatesalespurch`).
- **Fabrication** : Les ordres de fabrication peuvent generer des besoins d'achat pour les matieres premieres.
- **Controle qualite** : La reception peut declencher un controle qualite parametrable (`QCParaLaunch`).
- **Stock** : Les receptions mettent a jour le stock en temps reel via la table `stockmvt`.
