# w_transship

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Transship (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| iSel_truck | long |
| iSel_shiphead | long |
| ii_shipto | int |
| iSel_adresse_id | string |
| iSel_truck_typ | string |
| idt_OldStart | datetime |
| idt_OldStop | datetime |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| truck_refresh() | public | Rafraichit l'affichage |
| wf_addne() | public | Ajout |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
