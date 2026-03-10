# w_dvi_salord_create

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _devis
- **Description**: Dvi salord - Creation (Devis)

## Variables d'instance

| Variable | Type |
|----------|------|
| il_devis | long |
| is_type | string |
| is_adcode | string |
| il_shipto | integer |
| is_curr | string |
| il_nbdays | long |
| id_curconv | dec |
| id_datreq | datetime |
| ii_Ret | Integer |
| iboo_Save | Boolean |
| is_DviType | String |
| idwc_FileHead | DataWindowChild |
| idwc_condition | DatawindowChild |
| iboo_FileMod | Boolean |
| ii_DviFileLn | Integer |
| il_DviFileHd | Long |
| il_condhead | Long |
| invo_conditionmanager | nvo_conditionmanager |
| il_condchoose | long |
| is_McCode | string |
| is_MULTICO | string |
| is_turntruck | string |
| is_QUICKTRUC | string |
| is_TURNSAL | string |
| ib_create | boolean |
| idt_dateship | datetime |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_createline_m(long salordno) | public | Creation |
| zz_autre_creation_attente() | public | Traitement zz_autre_creation_attente |
| inputok() | public | Verifie inputok |
| wf_choosetrucs(datetime ad_allocdate) | public | Calcule/retourne wf_choosetrucs |
| allocate_truck(long al_sel_order, long al_truck) | public | Calcule/retourne allocate_truck |
| wf_truckitems(long al_salcode, datetime ad_allocdate, long al_truck) | public | Calcule/retourne wf_truckitems |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| ue_getcal | Evenement personnalise ue_getcal |
| rbuttondown | Evenement rbuttondown |
