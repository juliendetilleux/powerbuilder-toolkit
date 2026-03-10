# w_adresse_sqlselect

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Adresses sqlselect (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_adress | string |
| AdressNameFilter | string |
| idwc_Group | DataWindowChild |
| is_Action | String |
| ib_Maintallowed | Boolean |
| ib_canceled | boolean |
| WithAltMenu | boolean |
| AltMenu | string |
| Altmenuitem | string |
| is_fkey | string |
| iSel_adresse_id | string |
| ib_canfilter | boolean |
| is_BDBADRS | string |
| is_basicSqlSelect | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteradresse() | public | Applique un filtre |
| arrange(string as_diffretrieve) | public | Reorganisation |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_postopen | Evenement personnalise ue_postopen |
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| getfocus | Evenement getfocus |
| losefocus | Evenement losefocus |
| doubleclicked | Double-clic sur la fenetre |
| rbuttondown | Evenement rbuttondown |
