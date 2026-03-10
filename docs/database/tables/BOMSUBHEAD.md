# Table : BOMSUBHEAD

## Description

Table en-tete des sous-nomenclatures. Nomenclatures partielles ou sous-ensembles reutilisables.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| bh_id | integer | Non |  **(PK)** |
| bh_name | varchar(60) | Non | Nom |
| bh_datecrea | timestamp | Non |  |
| bh_usercrea_fk_ | char(50) | Non |  |
| bh_datemodif | timestamp | Oui | Modifie |
| bh_usermodif_fk | char(50) | Oui |  |
| bh_periodicity | numeric(2) | Non | Ville |
| bh_activ | char(1) | Non | Actif |
| bh_cmnt | varchar(1024) | Non | Commentaire |

## Cles et index

- **PK** : bh_id

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : SUBHEAD

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
