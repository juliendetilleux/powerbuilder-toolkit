# Table : filefamily

## Description

Table des familles de dossiers. Classification des dossiers projet par famille.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ffcode | numeric(3) | Non | Code **(PK)** |
| ffdesc | varchar(50) | Non | Description |
| ffactiv | char(1) | Oui | Actif |

## Cles et index

- **PK** : ffcode

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : filehead

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
