# w_mfgmes_finish

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _manufg
- **Description**: Mfgmes finish (Fabrication)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_of | long |
| il_wcline | long |
| id_mwcoeff | decimal |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_test_qty(ref string as_error) | public | Test |
| wf_clot_step(ref string as_error) | public | Verifie wf_clot_step |
| wf_savedw(ref string as_error) | public | Sauvegarde les donnees |
| wf_updateof() | public | Mise a jour |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
