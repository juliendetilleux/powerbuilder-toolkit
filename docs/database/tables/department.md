# Table : department

## Description

Table des departements/services. Referentiel des departements de l'entreprise.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| dpcode | numeric(2) | Non | Code **(PK)** |
| dpactiv | char(1) | Oui | Actif |
| dpdesc | varchar(30) | Oui | Description |

## Cles et index

- **PK** : dpcode

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
