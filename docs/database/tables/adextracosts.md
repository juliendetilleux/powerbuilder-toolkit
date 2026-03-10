# Table : adextracosts

## Description

Table des couts supplementaires par adresse. Definit les frais additionnels (transport, emballage, etc.) lies a chaque tiers.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| axadcode | char(10) | Non | Code **(PK)** |
| axadline | numeric(3) | Non | Numero de ligne **(PK)** |
| axdesc | varchar(30) | Oui | Description |
| axsign | char(1) | Oui |  |
| axseuil | numeric(8,2) | Oui |  |
| axvaltyp | char(1) | Oui |  |
| axlnval | numeric(8,2) | Oui | Valeur |
| axcondapp | char(1) | Oui |  |
| axstartdat | timestamp | Oui | Date debut |
| axstopdat | timestamp | Oui |  |
| axfaty | numeric(3) | Oui |  |
| axwithtva | char(1) | Oui |  |
| axinco | char(1) | Oui |  |

## Cles et index

- **PK** : axadcode, axadline

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
