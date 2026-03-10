# Table : dymerout

## Description

Table des gammes de mesures dynamiques. Gammes specifiques aux articles a mesures variables.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| drcode | char(20) | Non | Code **(PK)** |
| drversid | char(5) | Non |  **(PK)** |
| drlineid | numeric(4) | Non |  **(PK)** |
| drroutid | numeric(3) | Non |  **(PK)** |
| drwcid | char(8) | Oui |  |
| dropdesc | varchar(60) | Oui | Description |
| droffset | numeric(6,2) | Oui |  |
| drmacfix | numeric(6,2) | Oui |  |
| drmacprop | numeric(6,2) | Oui |  |
| drlabfix | numeric(6,2) | Oui |  |
| drlabprop | numeric(6,2) | Oui |  |
| drphasid | numeric(2) | Oui |  |

## Cles et index

- **PK** : drcode, drversid, drlineid, drroutid

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
