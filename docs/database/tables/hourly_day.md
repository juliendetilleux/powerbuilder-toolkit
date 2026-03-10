# Table : hourly_day

## Description

Table des jours de tarification horaire. Tarifs differencies par jour de la semaine.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| hdid | integer | Non |  **(PK)** |
| hdtyp | char(1) | Non |  |
| hddaynum | numeric(1) | Oui | Numero |
| hddate | timestamp | Oui | Date |
| hdhourly | integer | Oui |  |
| hdmachine | integer | Oui |  |
| hdstart | time | Non |  |
| hdstop | time | Non |  |

## Cles et index

- **PK** : hdid
- **FK** : hdhourly -> hourly(hyid)
- **FK** : hdmachine -> machine(mcid)

## Relations

- **Parents (FK sortantes)** : hourly, machine
- **Enfants (FK entrantes)** : hourly_day_int

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
