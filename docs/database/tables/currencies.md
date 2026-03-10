# Table : currencies

## Description

Table des devises. Referentiel des devises avec symboles et taux de change.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| cucode | char(3) | Non | Code devise **(PK)** |
| cuname | char(20) | Non | Nom |
| cuconv | numeric(10,6) | Oui |  |
| cuactiv | char(1) | Oui | Actif |

## Cles et index

- **PK** : cucode
- **Index** : ixc_DBA_index_consultant_7 (cuname) [non-unique]

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : linkitad

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
