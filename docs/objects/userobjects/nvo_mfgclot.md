# nvo_mfgclot

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _manufg
- **Description**: Objet du module Fabrication - gestion de fabrication

## Variables d'instance

| Variable | Type |
|----------|------|
| is_curr_user | string |
| ib_messageboxon | boolean |
| is_CTMFGCLOS | string |
| is_MFGEVAL | string |
| is_OFCLSPREST | string |
| is_ITUMTRF | string |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uf_mfg_close(long al_mfghead, boolean ab_print, boolean ab_withbackflush) : boolean | Public | Fonction utilitaire |
| wf_check_directfab(long al_mfghead) : boolean | Public | Fonction privee de fenetre |
| uf_return_dtreq(decimal ad_mhcode) : datetime | Public | Fonction utilitaire |
| uof_checkfor_rebilling(long al_of) : boolean | Public | Fonction utilisateur publique |
| uf_closemfgpc(long al_mfghead) : boolean | Public | Fonction utilitaire |
| uf_mfgcosting(long al_mfghead, string as_subcontract, string as_mfgtypbom) : boolean | Public | Fonction utilitaire |
| uf_cleanallocations(long al_mfghead) : boolean | Public | Fonction utilitaire |
| uf_closesubpur(long al_mfghead) : boolean | Public | Fonction utilitaire |

## Evenements

Aucun evenement personnalise.
