# Table : itemlang

## Description

Table des traductions d'articles. Libelles articles en differentes langues.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ilitcode | char(20) | Non | Code **(PK)** |
| illgcode | char(2) | Non | Code **(PK)** |
| ildesc | char(60) | Oui | Description |

## Cles et index

- **PK** : ilitcode, illgcode

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
