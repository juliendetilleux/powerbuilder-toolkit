# Table : apphead

## Description

Table en-tete des rendez-vous. Planification des rendez-vous et evenements dans l'agenda.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ahid | numeric(6) | Non |  **(PK)** |
| ahcode | char(4) | Non | Code |
| ahname | char(60) | Non | Nom |
| ahaction | numeric(2) | Oui |  |
| ahmajdat | timestamp | Oui |  |
| ahdefval | numeric(6) | Oui | Valeur |
| ahactiv | char(1) | Oui | Actif |
| ahsee | numeric(2) | Oui |  |

## Cles et index

- **PK** : ahid
- **FK** : ahaction -> activities(accode)

## Relations

- **Parents (FK sortantes)** : activities
- **Enfants (FK entrantes)** : appline

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
