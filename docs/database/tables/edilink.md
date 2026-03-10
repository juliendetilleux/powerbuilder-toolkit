# Table : edilink

## Description

Table des liens EDI. Configuration des connexions et parametres EDI avec les partenaires.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| elseq | numeric(2) | Non | Sequence **(PK)** |
| elactiv | char(1) | Oui | Actif |
| eltype | char(1) | Oui | Type |
| eldesc | varchar(10) | Oui | Description |
| elfct | varchar(30) | Oui |  |
| elfilepath | varchar(50) | Oui |  |

## Cles et index

- **PK** : elseq

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
