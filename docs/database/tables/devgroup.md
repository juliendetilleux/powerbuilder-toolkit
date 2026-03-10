# Table : devgroup

## Description

Table des groupes de devis. Regroupement de devis par categorie.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| dgpvhid | numeric(6) | Non |  **(PK)** |
| dgcode | numeric(4) | Non | Code **(PK)** |
| dgdesc | varchar(100) | Oui | Description |
| dgdetail | char(1) | Oui |  |
| dgpricedetail | char(1) | Oui |  |
| dgoghcode | numeric(3) | Oui | Code |

## Cles et index

- **PK** : dgpvhid, dgcode
- **FK** : dgpvhid -> projhead(phcode)

## Relations

- **Parents (FK sortantes)** : projhead
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
