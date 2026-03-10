# w_sales_shipnotice_print

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _sales
- **Description**: Ventes shipnotice - Impression

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_type | integer |
| il_oldrow | long |
| is_OrdTri | string |
| is_McCoCode | string |
| ibool_reinit | boolean |
| is_PRINT1JOB | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_where_clause() | public | Retourne wf_where_clause |
| wf_shipnoticeprint() | public | Impression |
| wf_clotship(integer al_shcode, string as_clot) | public | Traitement wf_clotship |
| wf_print_pdf(string docfile, string directory) | public | Impression |
| wf_shipnoticepdf() | public | Fonction wf_shipnoticepdf |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| constructor | Constructeur |
| clicked | Clic sur la fenetre |
| destructor | Destructeur |
