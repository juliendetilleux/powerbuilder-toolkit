# Table : clotfinit

## Description

Table d'initialisation de cloture financiere. Donnees initiales pour le processus de cloture.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ciperiod | char(6) | Non |  **(PK)** |
| cityp | char(1) | Non |  **(PK)** |
| ciitem | char(20) | Non | Article **(PK)** |
| ciqty | numeric(12,3) | Oui | Quantite |
| cival | numeric(10,2) | Oui | Valeur |
| cistdprop | numeric(10,4) | Oui |  |
| cistdconf | numeric(10,4) | Oui |  |
| cistdm | numeric(10,4) | Oui |  |
| cistdl | numeric(10,4) | Oui |  |
| cicmnt | varchar(30) | Oui | Commentaire |
| ciqtywip | numeric(12,3) | Oui |  |
| cimccode | varchar(10) | Non | Code **(PK)** |

## Cles et index

- **PK** : ciperiod, cityp, ciitem, cimccode

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
