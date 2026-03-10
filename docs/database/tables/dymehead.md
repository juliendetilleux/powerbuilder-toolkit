# Table : dymehead

## Description

Table en-tete des mesures dynamiques. Definition des articles a mesures variables (decoupe, sur-mesure).

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| dhcode | char(20) | Non | Code **(PK)** |
| dhversid | char(5) | Non |  **(PK)** |
| dhactiv | char(1) | Oui | Actif |
| dhdesc | varchar(30) | Oui | Description |
| dhdesc2 | varchar(120) | Oui |  |
| dhgroup1 | char(2) | Oui |  |
| dhgroup2 | char(2) | Oui |  |
| dhdatcrea | timestamp | Oui |  |
| dhdatmodif | timestamp | Oui | Modifie |
| dhcmnt | long varcha(32767) | Oui | Commentaire |

## Cles et index

- **PK** : dhcode, dhversid

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
