# Table : CASHPARAM

## Description

Table des parametres de caisse. Configuration des caisses enregistreuses et terminaux de paiement.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| cpid | integer | Non |  **(PK)** |
| cpcash | varchar(2) | Non |  |
| cpthcode | numeric(12) | Oui | Code |

## Cles et index

- **PK** : cpid
- **Index** : CASHPARAM UNIQUE (cpcash) (cpcash) [unique]

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
