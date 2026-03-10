# Table : choiceline

## Description

Table des lignes de choix. Options disponibles dans un groupe de choix.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| clcode | char(4) | Non | Numero reclamation **(PK)** |
| clline | numeric(3) | Non | Numero de ligne **(PK)** |
| clname | varchar(40) | Oui | Nom |
| clsort | numeric(3) | Oui | Ordre de tri |
| clactiv | char(1) | Oui | Actif |
| clival1 | numeric(3) | Oui |  |
| clival2 | numeric(3) | Oui |  |
| clcval | varchar(40) | Oui | Valeur |
| clival3 | numeric(3) | Oui |  |
| clnval1 | numeric(10,4) | Oui |  |
| clcval2 | varchar(40) | Oui |  |
| clcval3 | long varcha(32767) | Oui |  |
| clcval4 | date | Oui |  |

## Cles et index

- **PK** : clcode, clline
- **Index** : ixc_Profile_13 (clsort) [non-unique]

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
