# Table : bomcoitem

## Description

Table des co-produits de nomenclature. Articles co-produits generes lors de la fabrication.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| bccode | char(20) | Non | Code **(PK)** |
| bctype | char(1) | Non | Type **(PK)** |
| bccoitem | char(20) | Non | Article **(PK)** |
| bcqtyf | numeric(12,4) | Oui |  |
| bccostf | numeric(12,4) | Oui |  |
| bccomment | char(60) | Oui | Commentaire |
| bcnqualf | numeric(12,4) | Oui |  |
| bcbackf | numeric(1) | Oui |  |
| blcoitem | char(20) | Oui | Article |
| bcbaseitqtypc | numeric(5,2) | Oui |  |
| bcbaseitcostpc | numeric(5,2) | Oui |  |

## Cles et index

- **PK** : bccode, bctype, bccoitem
- **FK** : bccode -> bomhead(bhcode)
- **FK** : bctype -> bomhead(bhtype)
- **FK** : blcoitem -> items(itcode)

## Relations

- **Parents (FK sortantes)** : bomhead, items
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
