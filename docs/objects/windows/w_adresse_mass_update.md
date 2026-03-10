# w_adresse_mass_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Adresses mass - Mise a jour (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_screenfilter | string |
| ii_defturn | int |
| is_ADINVTO | string |
| is_MULTICO | string |
| is_type_WMS | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_show(string subject) | public | Affichage |
| wf_checkrow(long rownum) | public | Validation |
| wf_adapt4userfields() | public | Traitement wf_adapt4userfields |
| wf_refresh_tax() | public | Rafraichit l'affichage |
| wf_filter_adresses() | public | Applique un filtre |
| wf_creation_fichier_adresse(string as_adcode) | public | Traitement wf_creation_fichier_adresse |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
