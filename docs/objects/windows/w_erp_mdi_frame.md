# w_erp_mdi_frame

- **Type**: Window
- **Ancetre**: w_mdi
- **Module**: _system
- **Lignes**: 564
- **Description**: Fenetre MDI principale de l'ERP. Cadre principal qui contient toutes les feuilles enfant (child sheets) de l'application. Reference par 248 objets dans le projet.

## Heritage

w_mdi -> w_a_mdi_pmi -> w_window -> w_a_pmi -> window

## Variables d'instance

- `is_ad : string`
- `im_MenuTag : m_Xtra_Action`
- `Key : string`
- `is_LicenceExp : String`

## Fonctions

- `wf_adapt_erp_menu() : void -- Adaptation du menu ERP selon les droits`
- `wf_get_acces_filter() : string -- Obtention du filtre d'acces utilisateur`

## Dependances

Voir les references croisees dans le module _system.
