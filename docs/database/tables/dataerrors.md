# Table : dataerrors

## Description

Table des erreurs de donnees. Journal des erreurs detectees lors des traitements de donnees.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| decode | char(4) | Non | Code |
| detyp | char(1) | Non |  |
| deseq | numeric(5) | Non | Sequence |
| dedesc | varchar(240) | Oui | Description |
| dedatim | timestamp | Oui |  |

## Cles et index

- **PK** : _(aucune cle primaire definie)_

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
