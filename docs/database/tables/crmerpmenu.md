# Table : crmerpmenu

## Description

Table de configuration du menu CRM/ERP. Liens entre modules CRM et ERP dans les menus.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| cecode | varchar(20) | Non | Code **(PK)** |
| cename | varchar(30) | Non | Nom |
| ceactiv | char(1) | Non | Actif |

## Cles et index

- **PK** : cecode
- **Index** : ixc_DBA_index_consultant_9 (cename) [non-unique]

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
