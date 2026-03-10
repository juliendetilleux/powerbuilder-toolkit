# Table : condtemplate

## Description

Table des modeles de conditions commerciales. Templates reutilisables pour les conditions.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ctcode | numeric(6) | Non | Code contact **(PK)** |
| ctdesc | char(80) | Oui | Description |
| cttarget | char(1) | Oui |  |
| ctsyntax | long varcha(32767) | Oui | Taxe |
| ctcomment | long varcha(32767) | Oui | Commentaire |

## Cles et index

- **PK** : ctcode

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : condline

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
