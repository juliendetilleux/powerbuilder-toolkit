# w_link_machine_pdc_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Link machines pdc - Mise a jour (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| iw_parent | w_window |
| ist_objectparm | struct_objectparm |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_select_workcenter(long al_mcid) | public | Selection |
| wf_select_machine(string as_wccode) | public | Selection |
| wf_save_machine_from_pdc(string as_wccode) | public | Sauvegarde les donnees |
| wf_save_pdc_from_machine(long al_mcid) | public | Sauvegarde les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| doubleclicked | Double-clic sur la fenetre |
| clicked | Clic sur la fenetre |
