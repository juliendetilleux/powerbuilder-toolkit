# Table : disclogist

## Description

Table des remises logistiques. Remises liees aux conditions logistiques.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| dlcode | numeric(4) | Non | Code **(PK)** |
| dlname | varchar(30) | Oui | Nom |
| dlactiv | char(1) | Oui | Actif |
| dlstartdate | timestamp | Oui | Date debut |
| dlstopdate | timestamp | Oui | Date |
| dldesc | varchar(200) | Oui | Description |

## Cles et index

- **PK** : dlcode

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : linkaddisclogist

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
