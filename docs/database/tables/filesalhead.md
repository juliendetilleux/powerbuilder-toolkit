# Table : filesalhead

## Description

Table en-tete des ventes de dossier. Commandes de vente liees aux projets.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| fhfilid | numeric(9) | Non |  **(PK)** |
| fhidcust | char(20) | Oui | Client |
| fhsalesman | char(20) | Oui |  |
| fhcreauser | char(50) | Oui | Utilisateur |
| fhcustref | char(40) | Oui | Reference |
| fhdatcrea | timestamp | Oui |  |
| fhstatus | char(1) | Oui | Statut |
| fhsalorder | numeric(6) | Oui |  |
| fhtype | char(1) | Oui | Type |
| fhapbinvoice | char(20) | Oui |  |
| fhapbshipto | char(20) | Oui |  |
| fhio | char(5) | Oui |  |

## Cles et index

- **PK** : fhfilid

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : filesalline

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
