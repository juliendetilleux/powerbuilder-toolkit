# w_rate_recalc

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Taux recalc (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| lnvo_rate_recalc | nvo_rate_recalc |
| iuo_extendeddw | uo_extendeddw |
| is_OrdTri | any |
| iw_parent | w_window |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_insertratline(long al_rate) | public | Ajout |
| wf_createdatastore(string as_sql) | public | Creation |
| wf_load_multitri() | public | Charge les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
