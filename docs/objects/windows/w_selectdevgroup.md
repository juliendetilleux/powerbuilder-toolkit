# w_selectdevgroup

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _devis
- **Description**: Selectdevgroup (Devis)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_return | long |
| il_projhead | long |
| il_group | long |
| is_tablename | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_refresh() | public | Rafraichit l'affichage |
| wf_inputok() | public | Verifie wf_inputok |
| wf_offergrouplist_refresh() | public | Rafraichit l'affichage |
| wf_fill_grouplist(integer ai_offergrouphead) | public | Traitement wf_fill_grouplist |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| ue_selectionchanged | Evenement personnalise ue_selectionchanged |
