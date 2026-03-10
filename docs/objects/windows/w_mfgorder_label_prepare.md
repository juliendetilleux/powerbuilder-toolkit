# w_mfgorder_label_prepare

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _manufg
- **Description**: Mfgorder etiquettes prepare (Fabrication)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_mfgorder_label | s_mfgorder_label |
| ii_etityp | integer |
| is_etipri | string |
| is_labeldir | string |
| defetiitem | string |
| defetiitemprnt | integer |
| adetiitem | string |
| is_para_etiqexp | string |
| idwc_winprintergroof | datawindowchild |
| idwc_winprinterpalof | datawindowchild |
| idwc_winprinteritemof | datawindowchild |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_load_lineorders() | public | Charge les donnees |
| wf_load_global_labels() | public | Charge les donnees |
| wf_load_specific_labels(string sel_item, ref string line_etiitem, ref string line_etigro, ref string line_etipal) | public | Charge les donnees |
| wf_load_specific_printer(string sel_item, ref integer line_etiitemprnt, ref integer line_etigroprnt, ref integer line_etipalprnt) | public | Charge les donnees |
| wf_load_global_printer() | public | Charge les donnees |
| wf_reportvalidity(string as_report) | public | Verifie wf_reportvalidity |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
