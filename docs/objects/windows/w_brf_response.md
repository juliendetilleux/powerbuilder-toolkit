# w_brf_response

- **Type**: Window
- **Ancetre**: w_a_response_pmi
- **Module**: _ancestor
- **Lignes**: 76
- **Description**: Ancetre pour les fenetres de formulaire codes-barres (barcode reader form). Configure l'apparence adaptee aux terminaux mobiles/lecteurs codes-barres : pas de barre de titre, fond vert fonce (8388608), positionnement automatique (plein ecran ou centre).

## Heritage
- Ancetres: w_a_response_pmi > w_window > w_a_pmi > window (PB built-in)
- Descendants directs: w_brf_nvo (_ancestor), w_brf_select_sscc_qty, w_brf_select_sscc, w_brf_mfg_prepare_histo_list, w_brf_mfg_prepare_histo, w_brf_mfg_linecheck, w_brf_chose_date (_stkbarcod) (7 descendants)

## Variables d'instance
| Variable | Type | Description |
|----------|------|-------------|
| ib_fullposition | boolean | Si true, la fenetre occupe tout l'ecran. Si false, elle est centree |

## Fonctions
| Fonction | Visibilite | Description |
|----------|-----------|-------------|
| wf_position(string a_type) | public | Positionne la fenetre selon le type : "FULL" (plein ecran 1098x1281) ou "CENTER" (centree dans l'ecran) |

## Evenements surcharges
| Evenement | Description |
|-----------|-------------|
| open | Appelle wf_position('FULL') ou wf_position('CENTER') selon ib_fullposition |

## Controles principaux
Aucun controle specifique (fenetre de base pour l'heritage).

## Dependances
- **Utilise**: w_a_response_pmi (heritage)
- **Utilise par**: w_brf_nvo (_ancestor), 6 fenetres dans _stkbarcod
