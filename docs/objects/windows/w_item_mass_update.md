# w_item_mass_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Articles mass - Mise a jour (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_screenfilter | string |
| idw_stat2 | datawindowchild |
| idw_stat3 | datawindowchild |
| idddw_itwebtype2 | datawindowchild |
| ii_nbuf | integer |
| is_QCCHCKPSW | string |
| is_MONITORNG | string |
| is_FREEZABLE | string |
| is_QUICKALLOC | string |
| is_ITEMCONT | string |
| is_MFGBAKFLU | string |
| is_type_WMS | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_show(string subject) | public | Affichage |
| filteritem() | public | Applique un filtre |
| wf_checkrow(long rownum) | public | Validation |
| wf_adapt4userfields() | public | Traitement wf_adapt4userfields |
| wf_refresh_tax() | public | Rafraichit l'affichage |
| wf_check_audit() | public | Validation |
| wf_creation_fichier_article(string as_itcode) | public | Traitement wf_creation_fichier_article |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
