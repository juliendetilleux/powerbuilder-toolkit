# uo_doc

- **Type**: User Object (Visuel)
- **Ancetre**: uo_userobject
- **Module**: _general
- **Description**: Objet utilitaire general

## Variables d'instance

| Variable | Type |
|----------|------|
| il_docId | long |
| is_drmod | string |
| is_date | string |
| is_contact | string |
| is_resp | string |
| il_projet | long |
| il_famille | long |
| is_adcode | string |
| is_Sel_DocMod | string |
| iboo_Del | Boolean |
| ib_inMDI | Boolean |
| is_windowtitle | string |
| mailviewmode | boolean |
| il_row | long |
| is_dwfilter | string |
| il_rowcount | long |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_setsort(string as_sort) : integer | Public | Fonction privee de fenetre |
| get_windowhandle() : w_window | Public | Fonction publique |
| globalsetredraw(boolean value) : integer | Public | Fonction publique |
| uof_hlrow(long al_row) : long | Public | Fonction utilisateur publique |
| uof_retrieve_crm(string as_typ, string is_adcode) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_retrieve(string as_typ, long al_num) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_retrieve(string as_typ, string as_num) : void (subroutine) | Public | Fonction utilisateur publique |
| wf_constructor() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_init() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_constructor(string as_adcode, string as_type) : void (subroutine) | Public | Fonction privee de fenetre |
| wf_init(string as_adcode, string as_type) : void (subroutine) | Public | Fonction privee de fenetre |
| wf_constructor_project(long al_num_project) : void (subroutine) | Public | Fonction privee de fenetre |
| wf_init_project(long al_num_project) : void (subroutine) | Public | Fonction privee de fenetre |
| uof_retrieve() : void (subroutine) | Public | Fonction utilisateur publique |
| wf_setdocheight() : void (subroutine) | Public | Fonction privee de fenetre |
| wf_construtctor_mail(string as_adcode, string as_type) : void (subroutine) | Public | Fonction privee de fenetre |
| wf_set_filter(string filtername, any filterval) : void (subroutine) | Public | Fonction privee de fenetre |
| uof_delete() : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_docclicked | Evenement personnalise |
| ue_retrieve_end | Evenement personnalise |
| ue_mousemove | Evenement personnalise |
| ue_tri | Evenement personnalise |
| ue_keypressed | Evenement personnalise |
