# Table : altmeasures

## Description

Table des unites de mesure alternatives. Definit les conversions entre unites de mesure.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ambaseumid | char(2) | Non |  **(PK)** |
| amcode | char(5) | Non | Code **(PK)** |
| amdesc | char(20) | Oui | Description |
| amconv | numeric(16,10) | Oui |  |
| amrealconv | numeric(16,10) | Oui |  |
| amactiv | char(1) | Oui | Actif |

## Cles et index

- **PK** : ambaseumid, amcode

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
