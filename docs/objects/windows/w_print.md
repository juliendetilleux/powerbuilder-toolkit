# w_print

- **Type**: Window
- **Ancetre**: w_response
- **Module**: cust_peppol
- **Description**: Impression (Peppol client)

## Variables d'instance

| Variable | Type |
|----------|------|
| selection | string |
| NewLang | string |
| printparam | s_print |
| print_return | s_print_return |
| zoom | integer |
| NbReport | integer |
| ReportDW | String |
| ReportLang | String |
| Loc_rep | Boolean |
| AppDir | String |
| shared_index | integer |
| is_CustomDir | string |
| is_LocalDir | string |
| OriginalReport | String |
| Need2close | boolean |
| DWError | Boolean |
| is_defprinter | string |
| WithCopyCtrl | Boolean |
| HeaderHeight | String |
| NbBand | Integer |
| CurrBand | INteger |
| BandMove | String |
| MoveIP | boolean |
| WithNewPrinterSel | boolean |
| ib_print_done | boolean |
| is_auto_alternate | string |
| is_FACTELECT | string |
| is_PRTINVPDF | string |
| is_PROFOELECT | string |
| is_MULTICO | string |
| ii_original | integer |
| ii_duplicata | integer |
| is_adresses_adfactelect | string |
| il_choice_index | Long |
| is_dir_pdf | string |
| is_file_pdf | string |

## Fonctions

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| Sleep(ulong dwmilliseconds) | public | Pause |
| zooming(string sign) | public | Traitement zooming |
| testfax(string adid) | public | Test |
| showcurrprinter() | public | Impression |
| set_report_fullname(string reportname) | public | Retourne set_report_fullname |
| wf_replacestring(string old_str, string new_str, string string_replace) | public | Remplacement de chaine |
| retrieve_data() | public | Recupere les donnees |
| retrieve_report(string report2use) | public | Recupere les donnees |
| select_report() | public | Selection |
| wf_print_kitdocument() | public | Impression |
| wf_showpagenum() | public | Affichage |
| changelogo(string as_logoname, string as_object) | public | Journalisation |
| wf_save_pdf(string as_tempdir, string as_docname) | public | Sauvegarde les donnees |
| wf_set_text_modified() | public | Definit text_modified |
| wf_printer_forced_paramini() | public | Impression |
| wf_invpdf_add_duplicata() | public | Ajout |
| wf_isoriginal() | public | Verifie si original |
| wf_printinvoices() | public | Impression |
| wf_auditgdrp(string type_trans) | public | Traitement wf_auditgdrp |

## Evenements surcharges

| Evenement | Description |
|-----------|-------------|
| ue_postopen | Evenement personnalise ue_postopen |
| open | Ouverture de la fenetre |
| close | Fermeture de la fenetre |
| clicked | Clic sur la fenetre |
| constructor | Constructeur |
| rbuttondown | Evenement rbuttondown |
| getfocus | Evenement getfocus |
| ue_keypressed | Evenement personnalise ue_keypressed |
