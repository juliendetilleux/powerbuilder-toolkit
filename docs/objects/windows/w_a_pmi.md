# w_a_pmi

- **Type**: Window
- **Ancetre**: window (PB built-in)
- **Module**: _ancestor
- **Lignes**: 139
- **Description**: Ancetre racine de toutes les fenetres de l'application. Fournit le controle d'acces, la gestion des autorites utilisateur et le filtrage par defaut des controles.

## Heritage
- Ancetres: window (PB built-in)
- Descendants directs: w_window (1 descendant direct, toutes les fenetres de l'application en sous-descendants)

## Variables d'instance
| Variable | Type | Description |
|----------|------|-------------|
| ib_init_filter | Boolean | Flag indiquant si le filtre par defaut doit etre initialise (TRUE par defaut) |
| ii_authority | Integer | Code d'autorite pour le controle d'acces a la fenetre |
| ipo_return_authority | PowerObject | Objet de retour utilise lors de la fermeture avec controle d'autorite |

## Fonctions
| Fonction | Visibilite | Description |
|----------|-----------|-------------|
| wf_get_progparamwindow_object_i(string as_objectname) | public | Recherche une valeur entiere dans la table progparamwindow_object pour un objet visuel de la fenetre |
| wf_set_default_filter(windowobject awo_control[]) | public | Parcourt les controles de la fenetre et selectionne le filtre EAN par defaut dans les DropDownListBox |
| wf_set_return_authority() | public | Fonction surchargeable pour definir l'objet de retour lors du controle d'autorite |
| wf_set_instance_authority() | public | Fonction surchargeable pour definir le code d'autorite de la fenetre |
| wf_windowscheckacces() | public | Verifie si l'utilisateur courant a l'autorite requise pour acceder a la fenetre. Ferme la fenetre si non autorise |

## Evenements surcharges
| Evenement | Description |
|-----------|-------------|
| activate | Initialise le filtre par defaut sur les controles si ib_init_filter est TRUE et si le parametre DBVERS vaut 1 |

## Controles principaux
Aucun controle specifique (fenetre de base).

## Dependances
- **Utilise**: gf_checkacces, gf_get_param_n, progparamwindow_object (table DB)
- **Utilise par**: w_window (heritage direct), projet pmix
