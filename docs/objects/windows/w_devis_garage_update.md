# w_devis_garage_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _devis
- **Description**: Devis garage - Mise a jour

## Variables d'instance

| Variable | Type |
|----------|------|
| is_message | string |
| idwc_shipto | datawindowchild |
| idwc_cust | datawindowchild |
| idwc_chassis | datawindowchild |
| is_adcode | string |
| iboo_IncMod | Boolean |
| idwc_Rate | DataWindowChild |
| iboo_ReqDatMod | Boolean |
| idwc_Adresse | DataWindowChild |
| il_ProjId | Long |
| is_Status | String |
| iboo_OfferMod | Boolean |
| iboo_SuccessPer | Boolean |
| ii_copy | int |
| is_MULTICO | string |
| is_article | string |
| il_VersId | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| inputok() | public | Calcule/retourne inputok |
| wf_custsearch() | public | Recherche |
| wf_norate() | public | Traitement wf_norate |
| wf_incmod() | public | Verifie wf_incmod |
| wf_actul() | public | Verifie wf_actul |
| wf_ratemod() | public | Verifie wf_ratemod |
| wf_copy_line() | public | Copie |
| wf_get_deviid() | public | Retourne deviid |
| wf_get_version() | public | Retourne version |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
