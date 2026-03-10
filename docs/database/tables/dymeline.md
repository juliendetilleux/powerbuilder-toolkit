# Table : dymeline

## Description

Table des lignes de mesures dynamiques. Valeurs de mesure pour chaque dimension.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| dlcode | char(20) | Non | Code **(PK)** |
| dlversid | char(5) | Non |  **(PK)** |
| dlline | numeric(4) | Non | Numero de ligne **(PK)** |
| dltyp | char(1) | Oui |  |
| dldesc | varchar(30) | Oui | Description |
| dluomid | numeric(4) | Oui |  |
| dlqtybas | numeric(4) | Oui |  |
| dlqtycomp | numeric(4) | Oui |  |

## Cles et index

- **PK** : dlcode, dlversid, dlline

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
