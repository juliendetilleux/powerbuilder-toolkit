# w_linkitadpur_import

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _masters
- **Description**: Linkitadpur - Importation (Donnees de base)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_currentsupplier | string |
| is_anomalies | string |
| is_separator | string |
| is_delimitor | string |
| ib_canevas_fourn | boolean |
| is_autolinkitad | string |
| is_new_intrastat | string |
| is_tab_anomalies_ean | string |
| is_tab_anomalies_code | string |
| is_tab_anomalies_descr | string |
| is_tab_anomalies_code_rempl | string |
| is_tab_anomalies_intrastat | string |
| idec_tab_anomalies_poids | decimal |
| idec_tab_anomalies_prix_tvac | decimal |
| idec_tab_anomalies_prix_achat | decimal |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_savequotes() | public | Sauvegarde les donnees |
| wf_loadfile(string as_path, string as_file, ref string as_error) | public | Charge les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
