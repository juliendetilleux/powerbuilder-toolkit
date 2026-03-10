# Table : expenses

## Description

Table des frais/depenses. Suivi des notes de frais et depenses professionnelles.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| excode | numeric(6) | Non | Code **(PK)** |
| exline | numeric(6) | Non | Numero de ligne **(PK)** |
| exdesc | char(50) | Oui | Description |
| extotval | numeric(8,2) | Oui | Valeur |
| excreadate | timestamp | Oui | Date creation |
| excreauser | char(50) | Oui | Utilisateur |
| excomment | long varcha(32767) | Oui | Commentaire |

## Cles et index

- **PK** : excode, exline
- **FK** : excode -> adrsactions(aacode)

## Relations

- **Parents (FK sortantes)** : adrsactions
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
