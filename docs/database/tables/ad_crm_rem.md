# Table : ad_crm_rem

## Description

Table des rappels CRM associes aux adresses. Stocke les dates de rappel et les notes pour le suivi commercial.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| reid | numeric(10) | Non |  **(PK)** |
| readcode | char(10) | Oui | Code |
| recmnt | varchar(400) | Oui | Commentaire |
| redate | timestamp | Oui | Date |

## Cles et index

- **PK** : reid
- **FK** : readcode -> adresses(adcode)

## Relations

- **Parents (FK sortantes)** : adresses
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
