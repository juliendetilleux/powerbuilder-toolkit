# Table : comments

## Description

Table des commentaires. Commentaires associes aux differents objets metier (articles, commandes, etc.).

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| cotype | char(4) | Non | Type **(PK)** |
| cokey | char(20) | Non |  **(PK)** |
| coline | numeric(4) | Non | Numero de ligne **(PK)** |
| cotab | char(1) | Non |  **(PK)** |
| coprlbl | char(1) | Oui |  |
| coprpur | char(1) | Oui |  |
| coprmfg | char(1) | Oui |  |
| coprsa1 | char(1) | Oui |  |
| coprsa2 | char(1) | Oui |  |
| coprinv | char(1) | Oui |  |
| cocmnt | long varcha(32767) | Oui | Commentaire |

## Cles et index

- **PK** : cotype, cokey, coline, cotab
- **Index** : ixc_profile_30 (cotab, cotype) [non-unique]

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
