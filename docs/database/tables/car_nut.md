# Table : car_nut

## Description

Table des caracteres nutritionnels. Informations nutritionnelles des articles (secteur alimentaire).

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| cnid | integer | Non |  **(PK)** |
| cnlibelle | varchar(80) | Non |  |
| cnactif | bit | Non |  |
| cnsort | integer | Non | Ordre de tri |

## Cles et index

- **PK** : cnid

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
