# nv_datastore

- **Type**: User Object (non-visuel)
- **Ancetre**: nv_ds_a_pmi
- **Module**: _ancestor
- **Lignes**: 220
- **Description**: DataStore ancetre. Fournit la gestion transactionnelle (settransobject/update surcharges), le debug et la verification de changement de dataobject.

## Heritage
- Ancetres: nv_ds_a_pmi > datastore (PB built-in)
- Descendants directs: uo_datastore, nvo_ds_saveerror, ds_error (_system), nuo_srvc_task_print (_services), nvo_ds_company_twinctr (_sales_crm), nvo_datastore (_methods)

## Variables d'instance
| Variable | Type | Description |
|----------|------|-------------|
| inv_transaction | nv_transaction | Objet de transaction |

## Fonctions publiques
| Fonction | Visibilite | Description |
|----------|-----------|-------------|
| uof_check_change_dataobject() | public | Verifie si le dataobject a change |
| of_set_debug(long) | public | Active le mode debug pour une ligne |
| settransobject(transaction) | public | Surcharge : definit la transaction et stocke la reference |
| update() / update(boolean) / update(boolean, boolean) | public | Surcharges : mise a jour avec gestion d'erreur integree |

## Evenements
Aucun evenement surcharge.

## Dependances
- **Utilise**: nv_ds_a_pmi (heritage)
- **Utilise par**: uo_datastore, nvo_ds_saveerror, ds_error (_system), nuo_srvc_task_print (_services), nvo_ds_company_twinctr (_sales_crm), nvo_datastore (_methods)
