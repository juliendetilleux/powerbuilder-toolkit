# w_intro

- **Type**: Window
- **Ancetre**: w_main
- **Module**: _system
- **Lignes**: 2662
- **Description**: Ecran d'accueil principal de l'application. Affiche le menu de demarrage avec les raccourcis vers les modules ERP, charge les variables globales et verifie la version BD.

## Heritage

w_main -> w_a_main_pmi -> w_window -> w_a_pmi -> window

## Variables d'instance

- `is_ad : string`
- `im_MenuTag : m_Xtra_Action`
- `Key : string`
- `timeflash : boolean`

## Fonctions

- `wf_read_actions() : void -- Lecture des actions disponibles`
- `checkcustprg() : void -- Verification programme client`
- `wf_load_global_var() : void -- Chargement variables globales`
- `wf_load_custversion() : void -- Chargement version client`
- `wf_check_dbversion() : void -- Verification version base de donnees`
- `wf_adapt_modules() : void -- Adaptation des modules selon licence`
- `wf_setfocus(uo_statictext) : void -- Gestion du focus`
- `wf_show_info(uo_picture, string) : void -- Affichage informations`
- `wf_show_general_info() : void -- Affichage informations generales`
- `wf_adapt_dbcolor(long) : void -- Adaptation couleur BD`
- `wf_check_menu_access(uo_statictext, integer) : boolean -- Controle acces menu`
- `wf_shortcuts(string) : void -- Gestion raccourcis`
- `wf_sethighlight(graphicobject) : void -- Mise en surbrillance`

## Dependances

Voir les references croisees dans le module _system.
