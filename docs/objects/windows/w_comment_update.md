# w_comment_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _general
- **Description**: Comment - Mise a jour (General)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_lang | string |
| ib_availlbl | Boolean |
| ib_availpur | Boolean |
| ib_availmfg | Boolean |
| ib_availsa1 | Boolean |
| ib_availsa2 | Boolean |
| ib_availinv | Boolean |
| is_availlbl | String |
| is_availpur | String |
| is_availmfg | String |
| is_availsa1 | String |
| is_availsa2 | String |
| is_availinv | String |
| typecmnt | String |
| is_typecmnt2 | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_visibility(string dataobject) | public | Traitement wf_visibility |
| wf_exist(string as_typecmnt, string cokey, integer coline, string colang, string cotab) | public | Traitement wf_exist |
| wf_copycheck(string dataobject, integer tabnumber) | public | Validation |
| wf_exist_mail(string as_typecmnt, string cokey, integer coline, string colang, string cotab) | public | Traitement wf_exist_mail |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| rbuttondown | Evenement rbuttondown |
