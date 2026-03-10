# w_aftransact_reception

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Aftransact reception (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_cpt | integer |
| il_oldrow | long |
| il_currow | long |
| il_afaj_id | long |
| is_from | string |
| is_to | string |
| is_userfrom | string |
| is_userto | string |
| idt_from | datetime |
| idt_to | datetime |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_cancel(long al_row) | public | Verifie wf_cancel |
| wf_recept(long al_row) | public | Verifie wf_recept |
| wf_delete(long al_row) | public | Suppression |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
