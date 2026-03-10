# w_condline_sal

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _projects
- **Description**: Condline sal (Projets)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_condhead | long |
| il_currentline | long |
| il_salcode | long |
| il_salline | long |
| is_clinvclot | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_real_deletecondline() | public | Suppression |
| wf_deletecondline() | public | Suppression |
| wf_addcondline() | public | Ajout |
| wf_real_addcondline() | public | Ajout |
| wf_inputok() | public | Verifie wf_inputok |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| dragdrop | Depot de glisser-deposer |
| rbuttondown | Evenement rbuttondown |
