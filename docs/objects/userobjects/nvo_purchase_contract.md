# nvo_purchase_contract

- **Type**: User Object (Non-visuel)
- **Ancetre**: nv_nonvisualobject
- **Module**: _purch
- **Description**: Objet du module Achats - gestion des achats

## Variables d'instance

Aucune variable d'instance definie.

## Fonctions publiques

| Fonction | Visibilite | Description |
|----------|------------|-------------|
| uf_recuptype(long al_chcode) : long | Public | Fonction utilitaire |
| uf_getsold(long al_chcode, string as_item, decimal ad_qtcmd) : integer | Public | Fonction utilitaire |
| uf_checkqt(long al_chcode) : decimal | Public | Fonction utilitaire |
| uf_recupprix(long al_chcode, string as_item) : decimal | Public | Fonction utilitaire |
| uf_getconvqt(long al_chcode, string as_item) : integer | Public | Fonction utilitaire |
| uf_checkdate(long al_chcode) : integer | Public | Fonction utilitaire |
| uf_checksold(long al_chcode, string as_item, decimal ad_qtcmd) : integer | Public | Fonction utilitaire |

## Evenements

Aucun evenement personnalise.
