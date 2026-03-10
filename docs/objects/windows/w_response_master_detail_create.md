# w_response_master_detail_create

- **Type**: Window
- **Ancetre**: w_response
- **Module**: _ancestor
- **Lignes**: 186
- **Description**: Fenetre response specialisee pour la creation de documents maitre-detail (entete + lignes). Fournit deux DataWindows (dw_head et dw_line), des boutons d'insertion/suppression/sauvegarde, et la logique de validation et sauvegarde avec gestion transactionnelle (commit/rollback).

## Heritage
- Ancetres: w_response > w_a_response_pmi > w_window > w_a_pmi > window (PB built-in)
- Descendants directs: w_trf_3step_create (1 descendant dans _stock)

## Variables d'instance
| Variable | Type | Description |
|----------|------|-------------|
| istr_objectparm | struct_objectparm | Structure de parametres recue a l'ouverture de la fenetre |
| is_succes_message | string | Message de succes affiche apres sauvegarde (defaut: "Operation realisee avec succes") |

## Fonctions
| Fonction | Visibilite | Description |
|----------|-----------|-------------|
| wf_inputok() | public | Validation des saisies avant sauvegarde (retourne true par defaut, surchargeable) |
| wf_save(string as_error) | public | Sauvegarde maitre puis detail avec gestion d'erreur. Met a jour dw_head puis dw_line |

## Evenements surcharges
| Evenement | Description |
|-----------|-------------|
| open | Recupere les parametres (message.powerobjectparm) dans istr_objectparm |
| pb_save::clicked | AcceptText sur les deux DW, appelle wf_inputok() puis wf_save(), gere commit/rollback et affichage des messages |

## Controles principaux
| Controle | Type | Role |
|----------|------|------|
| dw_head | uo_datawindow | DataWindow entete (master) |
| dw_line | uo_datawindow | DataWindow lignes (detail) |
| pb_insert | uo_picturebutton | Bouton d'insertion de ligne |
| pb_erase | uo_picturebutton | Bouton de suppression de ligne |
| pb_save | uo_picturebutton | Bouton de sauvegarde |
| uo_2 | uo_screenid | Identifiant d'ecran |

## Dependances
- **Utilise**: w_response (heritage), uo_datawindow, uo_picturebutton, uo_screenid, struct_objectparm, nvo_msgbox, SQLCA
- **Utilise par**: w_trf_3step_create (_stock)
