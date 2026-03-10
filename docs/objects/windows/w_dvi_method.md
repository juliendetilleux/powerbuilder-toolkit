# w_dvi_method

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _devis
- **Description**: Dvi methodes (Devis)

## Variables d'instance

| Variable | Type |
|----------|------|
| iboo_Import | Boolean |
| iboo_VersDetMod | Boolean |
| iboo_ProjDetMod | Boolean |
| iboo_ProjUFMod | Boolean |
| iboo_VersQtyMod | Boolean |
| iboo_VersElseMod | Boolean |
| iboo_EmptyMethod | Boolean |
| iboo_LvlFilter | Boolean |
| ViewPos | Integer |
| idec_RamInc | Decimal |
| idec_LabInc | Decimal |
| idec_OtherInc | Decimal |
| idec_GlobInc | Decimal |
| idec_ChildLnPurVal | Decimal |
| idec_ChildLnSalVal | Decimal |
| idec_HeadQty | Decimal |
| idec_HeadQtyAdd | Decimal |
| ii_AddLevel | Integer |
| ii_MaxLevel | Integer |
| ii_LastFilterLvl | Integer |
| ii_Ret | Integer |
| ii_UfHeight | Integer |
| il_LineCpt | Long |
| il_ProjId | Long |
| il_VersId | Long |
| il_SelRow | Long |
| il_Row | Long |
| il_LineNum | Long |
| il_RowTemp | Long |
| is_ItId | String |
| is_BomType | String |
| is_AddType | String |
| is_DviLvl | String |
| iboo_Continue | Boolean |
| is_Mod | String |
| iboo_OfferMod | Boolean |
| iboo_RecalcTrigger | Boolean |
| is_typ | String |
| iw_parent | w_window |
| il_oldrow | long |
| il_currow | long |
| ib_modified | boolean |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_titleset(string as_linetype) | public | Traitement wf_titleset |
| wf_versdwset() | public | Traitement wf_versdwset |
| wf_versdetcalc() | public | Calcul |
| wf_qtycalc(decimal adec_diffqty, long al_parentline, integer ai_level, integer ai_fctcallnbr) | public | Calcul |
| wf_deleterow() | public | Suppression |
| wf_horzsplitset() | public | Traitement wf_horzsplitset |
| wf_linesortset() | public | Applique un tri |
| wf_projimportmethod(integer ai_level, integer ai_parentline, string as_itid, string as_bomhdtype, decimal adec_parentqty) | public | Importation |
| wf_addfreewc() | public | Ajout |
| wf_valchange(string as_action) | public | Modification |
| wf_selectrow() | public | Selection |
| wf_genset() | public | Traitement wf_genset |
| wf_dvi_in_print() | public | Impression |
| wf_dvi_out_print() | public | Impression |
| wf_additem(string as_addtype) | public | Ajout |
| wf_addwc(string as_addtype) | public | Ajout |
| wf_itemreplace() | public | Remplacement de chaine |
| wf_checkfilter_add(string as_when) | public | Applique un filtre |
| wf_incchange() | public | Modification |
| wf_addfreeitem(string as_addtype) | public | Ajout |
| wf_addother(string as_addtype) | public | Ajout |
| wf_addfreetext(string as_addtype) | public | Ajout |
| wf_addmethod(string as_addtype) | public | Ajout |
| wf_addtranche(string as_addtype) | public | Ajout |
| wf_pricerefresh() | public | Rafraichit l'affichage |
| wf_addmethod_1level() | public | Ajout |
| wf_projimportmethod_1level(integer ai_parentline, string as_itid, string as_bomhdtype, decimal adec_parentqty) | public | Importation |
| wf_specpricerefresh() | public | Rafraichit l'affichage |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| closequery | Verification avant fermeture |
| clicked | Clic sur la fenetre |
| ue_editchanged | Evenement personnalise ue_editchanged |
| losefocus | Evenement losefocus |
| rbuttondown | Evenement rbuttondown |
| ue_savepos | Evenement personnalise ue_savepos |
| ue_rbuttonup | Evenement personnalise ue_rbuttonup |
| ue_key | Evenement personnalise ue_key |
