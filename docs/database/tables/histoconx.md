# Table : histoconx

## Description

Table historique des connexions. Journal des connexions utilisateur a l'application.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| hcconxdate | timestamp | Non | Date **(PK)** |
| hcpcuser | varchar(50) | Non | Utilisateur |
| hcpcname | varchar(50) | Non | Nom |
| hcprguser | char(50) | Non | Utilisateur |
| hcconxtype | char(2) | Non | Type |
| hcipadress | char(15) | Oui |  |
| hcdisconxdate | timestamp | Oui | Date |
| hcapplic | varchar(8) | Oui |  |

## Cles et index

- **PK** : hcconxdate

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
