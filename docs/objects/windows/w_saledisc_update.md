# w_saledisc_update

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Saledisc - Mise a jour (Ventes)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_action | string |
| il_linkaddiscount | long |
| is_cust | string |
| is_adresgroup | string |
| is_SALQTYDIS | string |
| is_stafilter | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_inputok() | public | Verifie wf_inputok |
| wf_retreive_itstat2(string as_sdstat1, boolean ab_initialize) | public | Traitement wf_retreive_itstat2 |
| wf_refresh() | public | Rafraichit l'affichage |
| wf_creation_fichier_saledisc() | public | Traitement wf_creation_fichier_saledisc |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| ue_selectionchanged | Evenement personnalise ue_selectionchanged |
| clicked | Clic sur la fenetre |
