# uo_dw_doc

- **Type**: User Object (Visuel)
- **Ancetre**: uo_datawindow
- **Module**: _general
- **Description**: Objet utilitaire general - gestion DataWindow

## Variables d'instance

| Variable | Type |
|----------|------|
| is_Sel_DocMod | String |
| iboo_Del | Boolean |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| wf_setsort(string as_sort) : integer | Public | Fonction privee de fenetre |
| uof_retrieve(string as_ref, string as_refid) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_retrieve(string as_ref, long al_refid) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_retrieve_crm(string as_ref, string as_refid) : void (subroutine) | Public | Fonction utilisateur publique |
| uof_retrieve() : void (subroutine) | Public | Fonction utilisateur publique |

## Evenements

| Evenement | Description |
|-----------|-------------|
| ue_tri | Evenement personnalise |
