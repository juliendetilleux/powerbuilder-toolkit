# nvuo_dexiadataimp

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _ifcpt
- **Description**: Objet d'interface comptable

## Variables d'instance

| Variable | Type |
|----------|------|
| iboo_Problem | Boolean |
| idst_DexiaData | nv_datastore |
| is_ErrMess | String |
| is_NotFind | String |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uof_alreadytreat(string as_logfilepath, string as_logfilename, string as_datafilename) : boolean | Public | Fonction utilisateur publique |
| uof_dexiafileimp() : void (subroutine) | Public | Fonction utilisateur publique |
| uof_dexinvupdate() : void (subroutine) | Public | Fonction utilisateur publique |
| wf_rowmove() : void (subroutine) | Public | Fonction privee de fenetre |

## Evenements

Aucun evenement personnalise.
