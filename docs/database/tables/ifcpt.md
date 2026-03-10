# Table : ifcpt

## Description

Table d'interface comptable. Configuration du lien avec le logiciel de comptabilite.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ictyp | char(10) | Non |  **(PK)** |
| icpara | char(10) | Non |  **(PK)** |
| icdesc | varchar(30) | Oui | Description |
| icvalc | char(120) | Oui |  |
| icvali | numeric(6) | Oui |  |
| icsort | numeric(2) | Oui | Ordre de tri |
| icauthtyp | char(1) | Oui |  |
| icmccocode | char(10) | Non | Code **(PK)** |

## Cles et index

- **PK** : ictyp, icpara, icmccocode
- **Index** : ixc_Profile_27 (ictyp, icpara) [non-unique]

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
