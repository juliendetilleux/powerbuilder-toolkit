# w_freejalon_update

- **Type**: Window
- **Ancetre**: w_main
- **Module**: _projects
- **Description**: Freejalon - Mise a jour (Projets)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_currjalon | long |
| il_linesel_jalon | long |
| il_linesel_cond | long |
| il_currcondline | long |
| il_currcond | long |
| il_filecode | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| rowschanging(uo_datawindow source, uo_datawindow destination, integer emplacement) | public | Calcule/retourne rowschanging |
| wf_refresh_conddetail() | public | Rafraichit l'affichage |
| wf_refresh_condhead() | public | Rafraichit l'affichage |
| wf_refresh_jalons() | public | Rafraichit l'affichage |
| wf_modifycondhead() | public | Traitement wf_modifycondhead |
| wf_deletecondhead() | public | Suppression |
| wf_deletecondline() | public | Suppression |
| wf_copy_cond(long al_refcopy) | public | Copie |
| wf_create_jalonref(ref long al_cljalon) | public | Creation |
| wf_createcondhead() | public | Creation |
| wf_copyjalons(long al_fileref) | public | Copie |
| wf_copyrefcondhead() | public | Copie |
| wf_duplicatecondhead() | public | Traitement wf_duplicatecondhead |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| doubleclicked | Double-clic sur la fenetre |
| dragdrop | Depot de glisser-deposer |
| rbuttondown | Evenement rbuttondown |
