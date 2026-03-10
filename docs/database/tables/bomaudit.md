# Table : bomaudit

## Description

Table d'audit des nomenclatures. Historique des modifications apportees aux nomenclatures (BOM).

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| babhcode | varchar(20) | Non | Code **(PK)** |
| babhtype | char(1) | Non | Type **(PK)** |
| balncode | varchar(20) | Non | Code **(PK)** |
| batyp | char(1) | Non |  **(PK)** |
| baline | numeric(4) | Non | Numero de ligne **(PK)** |
| badate | timestamp | Non | Date **(PK)** |
| bauser | varchar(8) | Oui | Utilisateur |
| baaction | varchar(2) | Oui |  |
| bacomment | varchar(1000) | Oui | Commentaire |

## Cles et index

- **PK** : babhcode, babhtype, balncode, batyp, baline, badate

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
