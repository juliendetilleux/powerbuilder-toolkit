# w_crm_import_show

- **Type**: Window
- **Ancetre**: w_main
- **Module**: _sales_crm
- **Description**: Importation show (CRM)

## Variables d'instance

| Variable | Type |
|----------|------|
| itab_fieldBinded | struct_prepare_import |
| ds_crm_import_updatead | nv_datastore |
| ds_crm_import_updatect | nv_datastore |
| tab_ctlangue | string |
| tab_activ | string |
| tab_civ | string |
| tab_lang | string |
| tab_act | string |
| tab_sou | string |
| tab_sal | string |
| tab_typ | string |
| tab_cid | string |
| tab_acz | string |
| tab_gra | string |
| tab_cur | string |
| tab_uf00 | string |
| tab_uf01 | string |
| tab_uf02 | string |
| tab_uf03 | string |
| tab_uf04 | string |
| tab_uf05 | string |
| tab_uf06 | string |
| tab_uf07 | string |
| tab_uf08 | string |
| tab_uf09 | string |
| tab_uf10 | string |
| tab_uf11 | string |
| tab_uf12 | string |
| tab_uf13 | string |
| tab_uf14 | string |
| tab_uf15 | string |
| tab_uf16 | string |
| tab_uf17 | string |
| tab_uf18 | string |
| tab_uf19 | string |
| tab_uf20 | string |
| tab_uf21 | string |
| tab_uf22 | string |
| tab_uf23 | string |
| tab_uf24 | string |
| tab_uf25 | string |
| tab_uf26 | string |
| tab_uf27 | string |
| tab_uf28 | string |
| tab_uf29 | string |
| ii_currentPos | integer |
| itab_bind_ctlangue | struct_bind |
| itab_bind_activ | struct_bind |
| itab_bind_civ | struct_bind |
| itab_bind_lang | struct_bind |
| itab_bind_sal | struct_bind |
| itab_bind_typ | struct_bind |
| itab_bind_act | struct_bind |
| itab_bind_cid | struct_bind |
| itab_bind_sou | struct_bind |
| itab_bind_uf00 | struct_bind |
| itab_bind_uf01 | struct_bind |
| itab_bind_uf02 | struct_bind |
| itab_bind_uf03 | struct_bind |
| itab_bind_uf04 | struct_bind |
| itab_bind_uf05 | struct_bind |
| itab_bind_uf06 | struct_bind |
| itab_bind_uf07 | struct_bind |
| itab_bind_uf08 | struct_bind |
| itab_bind_uf09 | struct_bind |
| itab_bind_uf10 | struct_bind |
| itab_bind_uf11 | struct_bind |
| itab_bind_uf12 | struct_bind |
| itab_bind_uf13 | struct_bind |
| itab_bind_uf14 | struct_bind |
| itab_bind_uf15 | struct_bind |
| itab_bind_uf16 | struct_bind |
| itab_bind_uf17 | struct_bind |
| itab_bind_uf18 | struct_bind |
| itab_bind_uf19 | struct_bind |
| itab_bind_uf20 | struct_bind |
| itab_bind_uf21 | struct_bind |
| itab_bind_uf22 | struct_bind |
| itab_bind_uf23 | struct_bind |
| itab_bind_uf24 | struct_bind |
| itab_bind_uf25 | struct_bind |
| itab_bind_uf26 | struct_bind |
| itab_bind_uf27 | struct_bind |
| itab_bind_uf28 | struct_bind |
| itab_bind_uf29 | struct_bind |
| itab_bind_acz | struct_bind |
| itab_bind_gra | struct_bind |
| itab_bind_cur | struct_bind |
| ib_previous | boolean |
| ids | nv_datastore |
| is_line | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_loadright(ref string tab[], string ls_line, integer li_separatorpos) | public | Charge les donnees |
| wf_adretrieve(integer ai_linenum) | public | Recupere les donnees |
| wf_ctretrieve(integer ai_linenum) | public | Recupere les donnees |
| wf_bind(string childcolumn, string tab_file[], struct_bind tab_bind[], string mode, string datatype) | public | Traitement wf_bind |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
