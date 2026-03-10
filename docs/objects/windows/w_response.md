# w_response

- **Type**: Window
- **Ancetre**: w_a_response_pmi
- **Module**: _ancestor
- **Lignes**: 20
- **Description**: Ancetre principal pour les fenetres de type Response (dialog modal). C'est l'ancetre le PLUS UTILISE de l'application avec environ 964 descendants. Toutes les fenetres de saisie, listes de selection, dialogues de confirmation heritent de cette classe.

## Heritage
- Ancetres: w_a_response_pmi > w_window > w_a_pmi > window (PB built-in)
- Descendants directs: 964 fenetres au total, repartis dans tous les modules (_stock, _system, _sales, _stkbarcod, _masters, _purch, _manufg, _query, _devis, _projects, _services, _planning, _quality, _gdpr, _fedex, etc.)

## Variables d'instance
Aucune variable d'instance propre (herite tout de la chaine d'ancetres).

## Fonctions
Aucune fonction propre.

## Evenements surcharges
Aucun evenement surcharge.

## Controles principaux
Aucun controle specifique.

## Dependances
- **Utilise**: w_a_response_pmi (heritage)
- **Utilise par**: 1930+ references dans le projet -- quasiment toutes les fenetres de dialogue de l'application
