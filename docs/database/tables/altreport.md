# Table : altreport

## Description

Table des rapports alternatifs. Association de rapports personnalises aux DataWindows standard.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| aroriginal | char(30) | Non |  **(PK)** |
| aralternate | char(30) | Non |  **(PK)** |
| aractiv | char(1) | Oui | Actif |
| arname | char(20) | Oui | Nom |
| arsort | numeric(2) | Oui | Ordre de tri |
| arlang | char(2) | Oui | Langue |
| artype | char(1) | Oui | Type |
| arpcname | varchar(50) | Non | Nom **(PK)** |

## Cles et index

- **PK** : aroriginal, aralternate, arpcname
- **Index** : ixc_DBA_index_consultant_6 (aroriginal, arsort, aralternate) [non-unique]

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
