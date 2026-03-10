# Table : docref

## Description

Table des references de documents. Liens vers les documents externes (fichiers, images, PDF).

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| drcode | numeric(7) | Non | Code **(PK)** |
| drtyp | char(1) | Non |  |
| drrefc | char(20) | Oui |  |
| drrefn | numeric(6) | Oui |  |
| drfile | varchar(400) | Oui |  |
| drmod | char(1) | Oui |  |
| drcomment | varchar(120) | Oui | Commentaire |
| drdatecrea | timestamp | Oui |  |
| drmailid | numeric(10) | Oui |  |
| drcreauser | char(50) | Oui | Utilisateur |
| drcontactid | numeric(2) | Oui |  |
| drfileid | numeric(4) | Oui |  |
| drfilelineid | numeric(4) | Oui |  |
| drgroup1 | numeric(3) | Oui |  |
| drgroup2 | numeric(3) | Oui |  |
| drmailunread | varchar(1) | Oui |  |
| drmailattach | numeric(3) | Oui |  |
| drmailinout | varchar(1) | Oui |  |
| drmailfrom | varchar(50) | Oui |  |
| drmailto | varchar(50) | Oui |  |
| draction | varchar(1) | Oui |  |
| draddprintinv | char(1) | Oui |  |

## Cles et index

- **PK** : drcode
- **Index** : idx_drfile (drfile) [non-unique]
- **Index** : index_docref_group1 (drgroup1) [non-unique]
- **Index** : index_docref_group2 (drgroup2) [non-unique]
- **Index** : index_docref_refc (drrefc) [non-unique]
- **Index** : index_docref_refn (drrefn) [non-unique]
- **Index** : index_docref_typ (drtyp) [non-unique]

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
