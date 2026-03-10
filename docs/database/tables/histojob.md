# Table : histojob

## Description

Table historique des travaux/jobs. Archive des traitements batch et automatiques.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| hjdatim | timestamp | Non |  **(PK)** |
| hjseq | numeric(4) | Non | Sequence **(PK)** |
| hjjob | char(15) | Oui |  |
| hjcomment | long varcha(32767) | Oui | Commentaire |
| hjuser | char(50) | Oui | Utilisateur |

## Cles et index

- **PK** : hjdatim, hjseq

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
