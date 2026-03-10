# Table : intrastat

## Description

Table Intrastat. Declarations statistiques d'echanges intra-communautaires (UE).

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| iscode | numeric(4) | Non | Code **(PK)** |
| isactiv | char(1) | Oui | Actif |
| isref | varchar(12) | Oui | Reference |
| isdesc | varchar(30) | Oui | Description |
| istyp | char(1) | Oui |  |

## Cles et index

- **PK** : iscode
- **Index** : ixc_Profile_1 (isref) [non-unique]

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
