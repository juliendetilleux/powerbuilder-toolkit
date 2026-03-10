# w_aftransact_ajtf_mass

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _stock
- **Description**: Aftransact ajtf mass (Stock)

## Variables d'instance

| Variable | Type |
|----------|------|
| is_screenfilter | string |
| is_from | string |
| ii_cat | integer |
| is_syntax | string |
| il_oldrow | long |
| il_hsseq | long |
| is_trcode | string |
| id_qty | decimal |
| il_row | long |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| filteritem() | public | Applique un filtre |
| wf_transfer() | public | Traitement wf_transfer |
| wf_isthereanyq() | public | Verifie si thereanyq |
| wf_isthereanyr() | public | Verifie si thereanyr |
| wf_totshow() | public | Affichage |
| wf_seltot() | public | Traitement wf_seltot |
| wf_lotrac() | public | Calcule/retourne wf_lotrac |
| wf_set_aftransact() | public | Definit aftransact |
| wf_getnextseq() | public | Retourne nextseq |
| wf_gettyp() | public | Retourne typ |
| wf_print(long al_num) | public | Impression |
| wf_allocate(string as_item, string as_lot, string as_loc, decimal adec_qty, long al_tcode, integer ai_tline) | public | Verifie wf_allocate |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| clicked | Clic sur la fenetre |
