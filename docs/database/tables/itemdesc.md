# Table : itemdesc

## Description

Table des descriptions d'articles. Descriptions detaillees et etendues.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| iditem | char(12) | Non | Article **(PK)** |
| idnew | char(1) | Oui |  |
| iddispo | char(20) | Oui |  |
| idimplantation | char(20) | Oui |  |
| idmillesime | numeric(4) | Oui |  |
| idcouchage | char(2) | Oui |  |
| idplcartgrise | char(2) | Oui |  |
| idporteur | varchar(12) | Oui |  |
| idtraction | varchar(12) | Oui |  |
| idtypchas | varchar(12) | Oui |  |
| idcarburant | char(2) | Oui |  |
| idcv | numeric(6,2) | Oui |  |
| idcouple | varchar(12) | Oui |  |
| idcylind | numeric(4) | Oui |  |
| idnbvit | char(2) | Oui |  |
| idlonghorstout | numeric(4) | Oui |  |
| idlongcaisse | numeric(4) | Oui |  |
| idlongint | numeric(4) | Oui |  |
| idhauthorsstout | numeric(4) | Oui |  |
| idhautint | numeric(4) | Oui |  |
| idlargeur | numeric(4) | Oui |  |
| idlargint | numeric(4) | Oui |  |
| iddevelopsol | numeric(4) | Oui |  |
| idpoidsencharge | numeric(4) | Oui |  |
| idpoidstract | numeric(4) | Oui |  |
| idpoidsvide | numeric(4) | Oui |  |
| idnbessieux | char(2) | Oui |  |
| idcouleur | char(2) | Oui |  |
| idtypelit | char(20) | Oui |  |
| idtypecuis | varchar(30) | Oui |  |
| idmaterext | varchar(30) | Oui |  |
| idtyperoue | char(20) | Oui |  |
| idgarage | char(20) | Oui |  |
| idcomment | long varcha(32767) | Oui | Commentaire |
| idpremdtmisenci | timestamp | Oui |  |
| idtype | char(20) | Oui | Type |

## Cles et index

- **PK** : iditem

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
