# Table : bomline

## Description

Table des lignes de nomenclature (BOM). Composants et matieres premieres d'une nomenclature.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| blcode | char(20) | Non | Code article parent **(PK)** |
| bltype | char(1) | Non | Type nomenclature **(PK)** |
| blline | numeric(5) | Non | Numero de ligne **(PK)** |
| blramcode | char(20) | Non | Code |
| blramqty | numeric(12,4) | Non | Quantite |
| blramtype | char(1) | Non | Type |
| blstartdat | timestamp | Non | Date debut |
| blstopdat | timestamp | Non |  |
| blramval | numeric(12,4) | Non | Valeur matieres |
| blscrap | numeric(3,1) | Oui | Taux de rebut (%) |
| blcomment | char(60) | Oui | Commentaire |
| blpalloctyp | char(1) | Oui |  |
| blrlupramval | numeric(12,4) | Oui | Valeur |
| blroutline | numeric(4) | Oui | Numero de ligne |
| bloneemp | char(1) | Oui |  |
| blloc | char(8) | Oui | Emplacement |
| bltdmoddate | timestamp | Oui | Date modification |
| bltdqty | numeric(12,4) | Oui | Quantite |
| bl_ismain | tinyint | Oui |  |

## Cles et index

- **PK** : blcode, bltype, blline
- **FK** : blcode -> bomhead(bhcode)
- **FK** : bltype -> bomhead(bhtype)
- **FK** : blramcode -> items(itcode)

## Relations

- **Parents (FK sortantes)** : bomhead, items
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
