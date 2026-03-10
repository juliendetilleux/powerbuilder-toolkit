# Table : Crmfilter

## Description

Table des filtres CRM. Filtres de recherche sauvegardes pour le module CRM.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| fiid | numeric(4) | Non |  **(PK)** |
| finame | varchar(60) | Oui | Nom |
| fiquerry | long varcha(32767) | Oui |  |
| fiuscode | char(50) | Oui | Code |
| fiactiv | char(1) | Oui | Actif |
| fitable | char(1) | Oui |  |

## Cles et index

- **PK** : fiid

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : crmfilterformat

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
