# nvo_lbcmfg2

- **Type**: User Object (Non-visuel)
- **Ancetre**: uo_userobject
- **Module**: _manufg
- **Description**: Objet du module Fabrication - gestion de fabrication

## Variables d'instance

| Variable | Type |
|----------|------|
| ii_level | integer |
| il_error | long |
| is_error | string |
| il_return | long |
| is_lot | string |
| il_mhcode | long[] |
| il_itemseq | long[] |
| is_item | string[] |
| idec_allocqty | decimal[] |
| idec_issuedqty | decimal[] |
| idec_itstdpur | decimal[] |
| is_itisumtarif | string[] |
| idec_itstdpur_trf | decimal[] |
| idec_issuedqty_trf | decimal[] |
| is_ITUMTRF | string |
| idec_issuedvalue | decimal[] |
| idec_allocvalue | decimal[] |
| is_mfglot | string[] |
| idec_lotbascost | decimal[] |

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| f_lbc(string as_lot) : long | Public | Fonction publique |
| f_geterror() : string | Public | Fonction publique |

## Evenements

Aucun evenement personnalise.
