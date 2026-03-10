# Table : dischead

## Description

Table en-tete des remises. Definition des grilles de remise.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| dhcode | numeric(4) | Non | Code **(PK)** |
| dhname | varchar(30) | Non | Nom |
| dhactiv | char(1) | Non | Actif |
| dhstartdate | timestamp | Non | Date debut |
| dhstopdate | timestamp | Non | Date |
| dhdesc | varchar(200) | Oui | Description |

## Cles et index

- **PK** : dhcode

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : discline, linkaddiscount

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
