# w_brf_nvo

- **Type**: Window
- **Ancetre**: w_brf_response
- **Module**: _ancestor
- **Lignes**: 94
- **Description**: Fenetre de formulaire codes-barres avec objet non-visuel (NVO) integre. Etend w_brf_response en ajoutant une reference a un NVO de traitement codes-barres (nvo_bcd_brf) et un niveau de navigation.

## Heritage
- Ancetres: w_brf_response > w_a_response_pmi > w_window > w_a_pmi > window (PB built-in)
- Descendants directs: Aucun descendant direct

## Variables d'instance
| Variable | Type | Description |
|----------|------|-------------|
| nvo_bc | nvo_bcd_brf | Reference vers l'objet non-visuel de traitement codes-barres |
| ii_level | integer | Niveau de navigation dans la hierarchie des ecrans codes-barres |

## Fonctions
Aucune fonction publique propre documentee.

## Evenements surcharges
Aucun evenement surcharge documente.

## Controles principaux
Aucun controle specifique (logique dans le NVO nvo_bc).

## Dependances
- **Utilise**: w_brf_response (heritage), nvo_bcd_brf
- **Utilise par**: Aucune reference directe trouvee
