# Table : bomright

## Description

Table des droits sur les nomenclatures. Controle d'acces aux nomenclatures par utilisateur/role.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| bruser | varchar(8) | Non | Utilisateur **(PK)** |
| britem | varchar(20) | Non | Article **(PK)** |
| brtype | char(1) | Non | Type **(PK)** |
| brright | char(1) | Oui |  |
| brmanufrep | char(1) | Oui |  |
| brmanufclot | char(1) | Oui | Lot |
| brmancreate | char(1) | Oui |  |

## Cles et index

- **PK** : bruser, britem, brtype

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
