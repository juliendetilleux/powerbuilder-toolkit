# Table : filesalline

## Description

Table des lignes de vente de dossier. Detail des lignes de vente projet.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| flfilid | numeric(9) | Non |  **(PK)** |
| flfillineid | numeric(4) | Non |  **(PK)** |
| flshipto | char(20) | Oui |  |
| fliditem | char(20) | Oui | Article |
| flqtyreq | numeric(10,3) | Oui |  |
| flrist | numeric(4,2) | Oui |  |
| flcomment | long varcha(32767) | Oui | Commentaire |
| flstdval | numeric(10,4) | Oui | Valeur |
| fldatreq | timestamp | Oui |  |
| flwithprice | char(1) | Oui | Prix |
| flshiptoapb | char(20) | Oui |  |
| flio | char(5) | Oui |  |
| zflcmdgroup | varchar(50) | Oui | Groupe |

## Cles et index

- **PK** : flfilid, flfillineid
- **FK** : flfilid -> filesalhead(fhfilid)

## Relations

- **Parents (FK sortantes)** : filesalhead
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
