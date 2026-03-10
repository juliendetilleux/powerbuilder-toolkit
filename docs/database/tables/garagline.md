# Table : garagline

## Description

Table des lignes de garage/atelier. Detail des interventions et reparations.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| glcode | numeric(5) | Non | Code **(PK)** |
| glline | numeric(4) | Non | Numero de ligne **(PK)** |
| gldate | timestamp | Oui | Date |
| glkm | numeric(6) | Oui |  |
| gltype | char(4) | Oui | Type |

## Cles et index

- **PK** : glcode, glline

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
