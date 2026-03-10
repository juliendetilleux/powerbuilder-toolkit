# w_print2fax

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _prints_std
- **Description**: Print2fax (Impressions standard)

## Variables d'instance

| Variable | Type |
|----------|------|
| printparam | s_print |
| shared_index | integer |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| Sleep(ulong dwmilliseconds) | public | Pause |
| changeprinter(string ls_newdefault) | public | Impression |
| getcodecountry(string numfax) | public | Retourne getcodecountry |
| getcodefax(string numfax, string numcodecountry) | public | Retourne getcodefax |
| replacestring(string old_str, string new_str, string string_replace) | public | Remplacement de chaine |
| genhtml() | public | Retourne genhtml |
| testfax(string adid) | public | Test |
| loadfaxes() | public | Charge les donnees |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_postopen | Evenement personnalise ue_postopen |
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
