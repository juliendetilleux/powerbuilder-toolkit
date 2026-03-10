# Table : imputcpt

## Description

Table des imputations comptables. Affectation comptable des operations (comptes, centres de cout).

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| iccode | numeric(4) | Non | Code **(PK)** |
| icactiv | char(1) | Oui | Actif |
| ictyp | char(1) | Oui |  |
| icref | varchar(12) | Oui | Reference |
| icdesc | varchar(20) | Oui | Description |
| icesct | char(1) | Oui |  |
| Icfrais | char(1) | Oui |  |
| ictvadec | char(1) | Oui |  |
| icconsdef | char(1) | Oui |  |

## Cles et index

- **PK** : iccode
- **Index** : ixc_Profile_5 (ictyp, icactiv) [non-unique]

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
