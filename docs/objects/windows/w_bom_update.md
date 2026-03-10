# w_bom_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _methods
- **Description**: Nomenclatures - Mise a jour (Methodes/Nomenclatures)

## Variables d'instance

| Variable | Type |
|----------|------|
| Action | String |
| ii_Ret | int |
| itname | String |
| itstdpur | Dec |
| is_backflush | string |
| is_start_alloctyp | string |
| ib_bfdel | boolean |
| iSel_method_item | string |
| iSel_method_type | string |
| iSel_Bom_Line | integer |
| is_stockunmanaged | string |
| is_ittyp | string |
| idwc_loc | datawindowchild |
| ibl_ramcode | string |
| iw_parent | w_window |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| bomlineinputok() | public | Verifie bomlineinputok |
| wf_compare(any var1, any var2, string text) | public | Retourne wf_compare |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| ue_keypressed | Evenement personnalise ue_keypressed |
| clicked | Clic sur la fenetre |
