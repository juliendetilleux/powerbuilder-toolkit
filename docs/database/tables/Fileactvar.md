# Table : Fileactvar

## Description

Table des variables d'activite de dossier projet. Suivi des variables d'avancement.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| farunid | numeric(6) | Non |  **(PK)** |
| fasalorder | numeric(6) | Non |  **(PK)** |
| fasalline | numeric(4) | Non | Numero de ligne **(PK)** |
| farespons | char(50) | Non | Responsable **(PK)** |
| falinetype | char(1) | Non | Type **(PK)** |
| fainvhead | numeric(6) | Oui |  |
| fainvline | numeric(6) | Oui | Numero de ligne |
| fafileref | numeric(4) | Oui | Reference |
| fafileline | numeric(4) | Oui | Numero de ligne |
| fatimereal | numeric(6) | Oui |  |
| fatimeinv | numeric(6) | Oui |  |
| fatimevarconf | numeric(6) | Oui |  |
| fadeltainv | char(1) | Oui |  |

## Cles et index

- **PK** : farunid, fasalorder, fasalline, farespons, falinetype

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
