# w_system_application

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _system
- **Lignes**: 14263
- **Description**: Fenetre principale d'administration systeme. Gere les parametres applicatifs, controle des stocks, gestion des bibliotheques PBL, imprimantes, taches planifiees et deconnexion utilisateurs.

## Heritage

w_response -> w_a_response_pmi -> w_window -> w_a_pmi -> window

## Variables d'instance

- `id_CleanDate : Datetime`
- `originalpath : string`
- `zoom : integer`
- `ib_item_controled : boolean`
- `ib_sqlcancel : boolean`

## Fonctions

- `RegOpenKeyEx(unsignedlong, string, unsignedlong, unsignedlong, unsignedlong) : long -- Acces registre Windows`
- `checkstock_lot() : void -- Controle stock par lot`
- `checkstock_item() : void -- Controle stock par article`
- `check_stock() : void -- Controle general des stocks`
- `check_alloc_logical() : void -- Verification allocations logiques`
- `check_alloc_physical() : void -- Verification allocations physiques`
- `wf_get_reports() : void -- Recuperation des rapports disponibles`
- `wf_library_list(string) : void -- Liste des bibliotheques PBL`
- `zooming(string) : void -- Zoom avant/arriere`
- `wf_getdwlib(string, string) : void -- Extraction DW depuis bibliotheque`
- `wf_get_inforeports(string) : void -- Informations sur les rapports`
- `wf_wama_recalcul(long) : boolean -- Recalcul WAMA pour expedition`
- `wf_check_itstock_integrity() : boolean -- Verification integrite stock articles`
- `wf_planedtask_refresh() : void -- Rafraichissement taches planifiees`
- `wf_printsetup_filter() : void -- Filtre configuration impression`
- `_createstocks(string, integer, integer) : void -- Creation stocks depuis donnees brutes`
- `wf_disconnectuser() : void -- Deconnexion d'un utilisateur`

## Dependances

Voir les references croisees dans le module _system.
