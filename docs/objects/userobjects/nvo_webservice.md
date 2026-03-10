# nvo_webservice

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _cust2
- **Description**: Objet non-visuel pour l'integration de services web (inventaire, transferts, preparations, expeditions)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_parm | String |
| is_function | String |
| is_error | String |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| of_test() : integer | Public | Fonction de test du service web |
| of_setpreparenotplanned(transact a_str) : boolean | Public | Definit une preparation non planifiee |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_setinventory | Definit un inventaire |
| ue_setadjustment | Definit un ajustement de stock |
| ue_settransfer | Definit un transfert de stock |
| ue_setprepare | Definit une preparation |
| ue_setpreparenotplanned | Definit une preparation non planifiee |
| ue_setreport | Definit un rapport de fabrication |
| ue_setwork | Definit un travail |
| ue_setnotwork | Definit un non-travail |
| ue_setreceptpurchase | Definit une reception achat |
| ue_setshipprepare | Definit une preparation d'expedition |
| ue_print_etiq | Impression d'etiquettes |
