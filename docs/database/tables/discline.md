# Table : discline

## Description

Table des lignes de remise. Detail des paliers de remise par quantite ou montant.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| dlcode | numeric(4) | Non | Code **(PK)** |
| dlline | numeric(4) | Non | Numero de ligne **(PK)** |
| dlitem | char(20) | Oui | Article |
| dlstat1 | char(2) | Oui |  |
| dlstat2 | char(2) | Oui |  |
| dldiscpc | numeric(8,5) | Oui |  |

## Cles et index

- **PK** : dlcode, dlline
- **FK** : dlcode -> dischead(dhcode)

## Relations

- **Parents (FK sortantes)** : dischead
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
