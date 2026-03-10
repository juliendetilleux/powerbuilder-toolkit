# w_intro_com

- **Type**: Window
- **Ancetre**: w_main
- **Module**: _system
- **Lignes**: 691
- **Description**: Ecran d'accueil mode commercial. Version simplifiee de l'intro pour les utilisateurs commerciaux avec acces CRM.

## Heritage

w_main -> w_a_main_pmi -> w_window -> w_a_pmi -> window

## Variables d'instance

- `is_ad : string`
- `im_MenuTag : m_Xtra_Action`
- `timeflash : boolean`

## Fonctions

- `wf_check_menu_access(uo_statictext, integer) : boolean -- Controle acces menu`
- `wf_setlastsyncdat() : void -- Mise a jour date derniere synchronisation`

## Dependances

Voir les references croisees dans le module _system.
