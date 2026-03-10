# Table : cycnthead

## Description

Table en-tete des comptages cycliques. Planification des inventaires tournants.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| chnumcc | numeric(12) | Non |  **(PK)** |
| chdate | timestamp | Non | Date |
| chuscode | char(50) | Non | Code |
| chstatus | char(1) | Non | Statut |
| chnamec | varchar(50) | Oui |  |
| chdateend | timestamp | Oui |  |
| chdateclot | timestamp | Oui | Lot |
| chclot | numeric(12) | Oui | Lot |

## Cles et index

- **PK** : chnumcc

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : cycntline

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
