# Flux : Gestion de projets

## Description
Le module de gestion de projets (`_projects`) permet de suivre les affaires/projets dans PmiGest. Il assure le lien entre les dossiers clients, les commandes de vente, les achats, la fabrication et les couts associes. Le suivi se fait via des rapports consolides par projet (affaire) avec des vues detaillees sur les commandes, livraisons et marges.

## Etapes du flux

1. **Creation de l'affaire/projet** : Definition du projet avec reference, client, description et budget previsionnel. → Fenetre : `w_files_update`, Tables : `filehead` / `fileline`
2. **Association des commandes** : Liaison des commandes de vente, d'achat et de fabrication au projet. Chaque ligne de commande peut etre rattachee a un dossier. → Fenetre : `w_files_report`, Tables : `salline`, `purgline`, `mfghead`
3. **Suivi des couts** : Consolidation des couts reels (achats, fabrication, heures) versus budget previsionnel. → Fenetre : `w_files_report`, Tables : `filehead`, `invoiceline`, `stockmvt`
4. **Consultation par projet** : Vue globale du projet avec onglets : commandes, livraisons, factures, achats, stock, fabrication. → Fenetre : `w_files_report`, DataWindow : `d_files_report`
5. **Selection de projet** : Choix du projet dans une liste deroulante (DDDW). → Fenetre : `w_files_report`, DataWindow : `dd_file_sel`
6. **Impression des rapports** : Impression des etats de projet avec informations consolidees. → Fenetre : `w_print`, DataWindows : `d_files_*_print`
7. **Cloture du projet** : Cloture administrative une fois le projet termine. → Fenetre : `w_files_update`, Table : `filehead`

## Fenetres impliquees

| Fenetre | Module | Role |
|---------|--------|------|
| `w_files_report` | `_projects` | Vue principale projet - rapport consolide (3800+ lignes) |
| `w_files_update` | `_projects` | Creation/modification du projet |
| `w_files_list` | `_projects` | Liste des projets |
| `w_print` | `_prints_std` | Impression des rapports projet |

## Tables impliquees

| Table | Usage |
|-------|-------|
| `filehead` | En-tete dossier/projet (ecriture) - champs : `fhcode`, `fhcust`, `fhdesc`, `fhstatus` |
| `fileline` | Lignes du dossier (ecriture) |
| `salhead` | Commandes vente liees au projet (lecture) |
| `salline` | Lignes commande vente (lecture) - champ `slfileref` pour le lien projet |
| `purghead` | Commandes achat liees (lecture) |
| `purgline` | Lignes commande achat (lecture) |
| `mfghead` | Ordres de fabrication lies (lecture) |
| `invoicehead` | Factures liees (lecture) |
| `invoiceline` | Lignes facture (lecture) |
| `shiphead` | Livraisons liees (lecture) |
| `shipline` | Lignes livraison (lecture) |
| `stockmvt` | Mouvements stock lies (lecture) |

## DataWindows principaux

| DataWindow | Module | Role |
|------------|--------|------|
| `d_files_report` | `_projects` | Rapport consolide projet |
| `d_files_update` | `_projects` | Mise a jour dossier |
| `d_files_list` | `_projects` | Liste des dossiers |
| `dd_file_sel` | `_projects` | Liste deroulante selection projet |
| `d_files_sal_print` | `_prints_std` | Impression commandes du projet |
| `d_files_pur_print` | `_prints_std` | Impression achats du projet |
| `d_files_inv_print` | `_prints_std` | Impression factures du projet |

## Structure de la fenetre w_files_report

La fenetre principale `w_files_report` (plus de 3800 lignes) contient un DataWindow `dw_projects` avec une DDDW pour la selection du projet. Le texte d'information est passe a l'impression via `Printparam.infotext = "Affaire : " + description_projet`.

Les rapports sont generes avec differents titres selon le contexte :
- "Projet : " + description
- "Affaire : " + description

## Liens avec autres flux

- **Vente** : Les commandes de vente sont rattachees aux projets via `salline.slfileref`.
- **Achat** : Les commandes d'achat contribuent aux couts du projet.
- **Fabrication** : Les OF sont lies aux projets pour le suivi de production.
- **Facturation** : Les factures sont tracees par projet pour le calcul de marge.
