# w_purinvsplit_rcpo_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _purch
- **Description**: Purinvsplit rcpo - Mise a jour (Achats)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_supplier | string |
| iSel_invhead | long |
| iboo_ActionMod | boolean |
| ii_DstIndex | Integer |
| iw_parent | w_window |
| is_PURINVCOS | string |
| il_Purhead | long |
| il_Purline | long |
| is_purSup | string |
| is_purSupname | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_row_transact(long row) | public | Traitement wf_row_transact |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| doubleclicked | Double-clic sur la fenetre |
| dragdrop | Depot de glisser-deposer |
