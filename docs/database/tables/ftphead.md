# Table : ftphead

## Description

Table en-tete des connexions FTP. Configuration des transferts de fichiers.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| fhpk | numeric(3) | Non |  **(PK)** |
| fhprofile | char(15) | Non |  **(PK)** |
| fhserv | char(15) | Oui |  |
| fhusrid | char(10) | Oui |  |
| fhpassw | char(10) | Oui |  |
| fhinitdir | char(20) | Oui |  |
| fhport | numeric(5) | Oui |  |
| fhanonym | char(1) | Oui |  |
| fhpassiv | char(1) | Oui |  |
| fhblob | binary(1) | Oui |  |

## Cles et index

- **PK** : fhpk, fhprofile

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
