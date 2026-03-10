# Table : fileprogress

## Description

Table d'avancement des dossiers. Suivi de la progression des projets.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| fpfilecode | numeric(4) | Non | Code **(PK)** |
| fpdate | timestamp | Non | Date **(PK)** |
| fpfileheadstatu | char(1) | Oui |  |
| fpuser | char(50) | Oui | Utilisateur |
| fpvalue | numeric(4,2) | Oui |  |

## Cles et index

- **PK** : fpfilecode, fpdate
- **FK** : fpfilecode -> filehead(fhcode)

## Relations

- **Parents (FK sortantes)** : filehead
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
