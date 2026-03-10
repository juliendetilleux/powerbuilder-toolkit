# Table : histogdrp

## Description

Table historique RGPD. Journal des operations de conformite RGPD.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| hgcount | integer | Non |  **(PK)** |
| hgdatim | timestamp | Oui |  |
| hgjob | char(100) | Oui |  |
| hgcomment | long varcha(32767) | Oui | Commentaire |
| hguser | char(50) | Oui | Utilisateur |
| hgwindow | char(60) | Oui |  |
| hgargument | long varcha(32767) | Oui |  |
| hgfilter | long varcha(32767) | Oui |  |

## Cles et index

- **PK** : hgcount

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
