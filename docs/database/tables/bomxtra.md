# Table : bomxtra

## Description

Table des donnees supplementaires de nomenclature. Informations etendues sur les nomenclatures.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| bxcode | char(20) | Non | Code **(PK)** |
| bxtype | char(1) | Non | Type **(PK)** |
| bxline | numeric(3) | Non | Numero de ligne **(PK)** |
| bxdesc | varchar(50) | Oui | Description |
| bxxtrtype | char(1) | Oui | Type |
| bxxtrval | numeric(12,4) | Oui | Valeur |

## Cles et index

- **PK** : bxcode, bxtype, bxline

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
