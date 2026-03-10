# uo_cash_change

- **Type**: User Object (Visuel)
- **Ancetre**: userobject
- **Module**: _sales_cash
- **Description**: Objet utilisateur

## Variables d'instance

| Variable | Type |
|----------|------|
| is_sens | string |
| idw | uo_datawindow |
| il_row | Long |
| is_column | String |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_set_column_total(uo_datawindow adw, long al_row, string as_column) : integer | Public | Fonction publique |
| of_update_column_total() : integer | Public | Fonction publique |
| of_clore_change(string as_hhcash, long al_hhseq) : integer | Public | Fonction publique |
| of_give_back_change(decimal adec_give) : integer | Public | Fonction publique |
| of_get_sum() : decimal | Public | Fonction publique |
| of_save(long al_hhseq) : integer | Public | Fonction publique |
| of_get_current_cash(string as_hhcash, string as_cocode) : integer | Public | Fonction publique |
| of_init(string as_sens, string as_cocode, integer al_hhseq) : integer | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
