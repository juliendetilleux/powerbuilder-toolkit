# Table : fileline

## Description

Table des lignes de dossier. Detail des taches, postes et elements de projet.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| flcode | numeric(4) | Non | Code **(PK)** |
| flline | numeric(4) | Non | Numero de ligne **(PK)** |
| fldesc | char(50) | Oui | Description |
| fldesc2 | long varcha(32767) | Oui |  |
| flstatus | char(1) | Oui | Statut |
| flbudgetmat | numeric(8,2) | Oui |  |
| flbudgetlabour | numeric(8,2) | Oui |  |
| flbudgetother | numeric(8,2) | Oui |  |
| flbudget | numeric(8,2) | Oui |  |
| flresp | varchar(8) | Oui |  |
| flddlbus | numeric(3) | Oui |  |

## Cles et index

- **PK** : flcode, flline
- **FK** : flcode -> filehead(fhcode)

## Relations

- **Parents (FK sortantes)** : filehead
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
