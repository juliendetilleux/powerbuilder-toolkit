# Flux : Fabrication

## Description
Le flux de fabrication dans PmiGest gere le cycle complet de production, depuis la creation des nomenclatures (BOM) et gammes operatoires, jusqu'au suivi de l'avancement des ordres de fabrication (OF) et leur cloture. Les modules `_methods` (nomenclatures/gammes), `_manufg` (ordres de fabrication), et `_planning` (planification) collaborent pour orchestrer la production.

## Etapes du flux

1. **Definition des nomenclatures (BOM)** : Creation de la structure produit avec les composants necessaires et leurs quantites. → Fenetre : `w_bom_update`, Tables : `bomhead` / `bomline`
2. **Definition des gammes operatoires** : Creation des sequences d'operations avec les temps, machines et postes de travail. → Fenetre : `w_routing_update`, Tables : `routhead` / `routline`
3. **Consultation BOM/Gamme combinee** : Vue combinee nomenclature + gamme pour un article. → Fenetre : `w_bomrout`, Tables : `bomhead`, `bomline`, `routhead`, `routline`
4. **Planification (MRP/CBN)** : Calcul des besoins nets en matieres et composants a partir des commandes et previsions. → Module : `_planning`, Tables : `planhead`, `planline`
5. **Creation des ordres de fabrication** : Generation manuelle ou automatique (depuis planification) des OF. → Fenetre : `w_mfg_order_update`, Tables : `mfghead` / `mfgline`
6. **Preparation des lots de fabrication** : Regroupement des OF en lots pour la production. → Fenetre : `w_mfg_batch`, Table : `mfgbatch`
7. **Preparation par dossiers** : Preparation de la fabrication par dossiers/fichiers. → Fenetre : `w_mfg_prep_byfiles`, Tables : `mfghead`, `salline`
8. **Suivi d'avancement** : Declaration des temps et quantites produites par operation. → Fenetre : `w_brf_mfg_progress` / `w_bcd_mfg_progress`, Tables : `mfgprogress`, `mfghead`
9. **Declaration de production** : Enregistrement des quantites fabriquees (entree en stock). → Fenetre : `w_transact_rcmo_f` / `w_brf_mfg_report`, Tables : `stockmvt`, `mfghead`
10. **Controle qualite production** : Tests et controles sur les produits finis. → Fenetre : `w_brf_quality` / `w_bcd_quality`, Table : `qlctrl`
11. **Cloture de l'OF** : Validation finale, calcul des ecarts, cloture de l'ordre. → Fenetre : `w_mfg_order_update`, Table : `mfghead` (statut cloture)
12. **Suivi des temps (pointage)** : Enregistrement des temps de travail par operateur via terminal. → Fenetre : `w_tictrl_wnt_param`, Table : `timctrl`

## Fenetres impliquees

| Fenetre | Module | Role |
|---------|--------|------|
| `w_bom_update` | `_methods` | Creation/modification nomenclature |
| `w_bomcoitem_update` | `_methods` | Mise a jour co-produits nomenclature |
| `w_routing_update` | `_methods` | Creation/modification gamme operatoire |
| `w_routing_copy` | `_methods` | Copie d'une gamme existante |
| `w_bomrout` | `_methods` | Vue combinee nomenclature + gamme |
| `w_mfg_order_update` | `_manufg` | Gestion des ordres de fabrication |
| `w_mfg_batch` | `_manufg` | Lots de fabrication |
| `w_mfg_prep_byfiles` | `_manufg` | Preparation par dossiers |
| `w_mfg_linkallocwcreq` | `_manufg` | Lien allocation avec demande |
| `w_tictrl_wnt_param` | `_manufg` | Parametres du pointage |
| `w_brf_mfg_report` | `_stkbarcod` | Declaration production (BRF) |
| `w_brf_mfg_progress` | `_stkbarcod` | Suivi avancement (BRF) |
| `w_brf_mfg_prepare` | `_stkbarcod` | Preparation fabrication (BRF) |
| `w_brf_mfg_prepare2` | `_stkbarcod` | Preparation fabrication variante (BRF) |
| `w_brf_mfg_picking` | `_stkbarcod` | Picking composants (BRF) |
| `w_brf_mfg_prepare_histo` | `_stkbarcod` | Historique preparations (BRF) |
| `w_bcd_mfg_progress` | `_stkbarcod` | Suivi avancement (BCD) |
| `w_brf_quality` | `_stkbarcod` | Controle qualite (BRF) |
| `w_transact_rcmo_f` | `_stock` | Reception fabrication (transaction stock) |
| `w_qry_item_mfg_1it` | `_query` | Requete historique fabrication article |
| `w_qry_lot_info` | `_query` | Information lot (incluant tests fabrication) |

## Tables impliquees

| Table | Usage |
|-------|-------|
| `bomhead` | En-tete nomenclature (ecriture) |
| `bomline` | Lignes nomenclature / composants (ecriture) - champs : `blbomcode`, `blramcode`, `blqty` |
| `routhead` | En-tete gamme operatoire (ecriture) |
| `routline` | Lignes gamme / operations (ecriture) |
| `mfghead` | En-tete ordre de fabrication (ecriture) |
| `mfgline` | Lignes OF / composants a consommer (ecriture) |
| `mfgprogress` | Suivi d'avancement des operations (ecriture) |
| `mfgbatch` | Lots de fabrication (ecriture) |
| `stockmvt` | Mouvements de stock (ecriture) - entrees de production (RCMO) |
| `items` | Articles (lecture) - champs : `ittyp`, `itpol`, `itcode` |
| `timctrl` | Pointage des temps (ecriture) |
| `qlctrl` | Controle qualite (ecriture) |
| `planhead` | Planning (lecture) |
| `planline` | Lignes planning (lecture) |

## DataWindows principaux

| DataWindow | Module | Role |
|------------|--------|------|
| `d_bom_update` | `_methods` | Mise a jour nomenclature |
| `d_routing_update` | `_methods` | Mise a jour gamme |
| `d_mfghead_update` | `_manufg` | Mise a jour OF |
| `d_mfgline_update` | `_manufg` | Mise a jour lignes OF |
| `d_mfg_testsshow` | `_query` | Affichage tests fabrication |
| `d_mfg_histo` | `_query` | Historique fabrication |
| `d_mfg_histo_one` | `_query` | Historique fabrication 1 article |
| `d_mfg_histograph` | `_query` | Graphique historique fabrication |
| `d_trans_rcmo_print` | `_prints_std` | Impression transaction reception fabrication |

## Objet non-visuel cle

| Objet | Module | Role |
|-------|--------|------|
| `nvo_mfgreport` | `_manufg` / `_cust2` | Logique metier des declarations de production, impression des rapports, gestion des composants et nomenclatures. Plus de 5000 lignes de code. |

## Liens avec autres flux

- **Vente** : Les commandes client declenchent des besoins de fabrication via la planification.
- **Achat** : Les composants manquants generent des demandes d'achat.
- **Stock** : Les declarations de production alimentent le stock (RCMO), les sorties de composants retirent du stock (ISSU).
- **Qualite** : Le controle qualite peut etre declenche a la fin de production.
