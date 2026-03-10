# Table : gdrp

## Description

Table RGPD. Suivi de la conformite RGPD (protection des donnees personnelles).

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| grcode | char(50) | Non | Code **(PK)** |
| grline | numeric(3) | Non | Numero de ligne **(PK)** |
| grdatein | date | Oui |  |
| gruser | char(50) | Oui | Utilisateur |
| grmcdo | char(50) | Non |  |
| grcount | integer | Non |  **(PK)** |
| grcontact | char(50) | Oui |  |
| grdateout | date | Oui |  |
| gractif | char(1) | Oui |  |
| grcomment | long varcha(32767) | Oui | Commentaire |
| grctlgn | numeric(3) | Oui |  |

## Cles et index

- **PK** : grcode, grline, grcount

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
