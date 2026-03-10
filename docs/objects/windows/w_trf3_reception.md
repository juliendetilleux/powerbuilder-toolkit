# w_trf3_reception

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Trf3 reception (Stock)

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
| wf_recept(long al_row) | public | Verifie wf_recept |
| wf_refresh_dwhead() | public | Rafraichit l'affichage |
| wf_refresh_dwdetail() | public | Rafraichit l'affichage |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
