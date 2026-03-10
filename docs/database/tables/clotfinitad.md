# Table : clotfinitad

## Description

Table des adresses d'initialisation de cloture. Donnees par tiers pour la cloture.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| cdperiod | char(6) | Non |  **(PK)** |
| cdtyp | char(1) | Non |  **(PK)** |
| cditem | char(20) | Non | Article **(PK)** |
| cdadid | char(10) | Non |  **(PK)** |
| cdqty | numeric(12,3) | Oui | Quantite |
| cdval | numeric(10,2) | Oui | Valeur |
| cdstdprop | numeric(10,4) | Oui |  |
| cdstdconf | numeric(10,4) | Oui |  |
| cdmccode | varchar(10) | Non | Code **(PK)** |

## Cles et index

- **PK** : cdperiod, cdtyp, cditem, cdadid, cdmccode
- **FK** : cdadid -> adresses(adcode)

## Relations

- **Parents (FK sortantes)** : adresses
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
