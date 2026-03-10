# Table : bomhead

## Description

Table en-tete des nomenclatures (BOM). Definition des nomenclatures de fabrication avec revision et statut.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| bhcode | char(20) | Non | Code article **(PK)** |
| bhtype | char(1) | Non | Type nomenclature **(PK)** |
| bhcoeff | numeric(12,4) | Non | Coefficient |
| bhactiv | char(1) | Non | Active |
| bhramval | numeric(12,4) | Non | Valeur matieres premieres |
| bhmacval | numeric(20,12) | Non | Valeur machine |
| bhlabval | numeric(20,12) | Non | Valeur main d'oeuvre |
| bhyield | numeric(4,1) | Oui | Rendement (%) |
| bhcomment | long varcha(32767) | Oui | Commentaire |
| bhdateval | timestamp | Oui | Date valorisation |
| bhsubc | char(1) | Oui | Sous-traitance |
| bhsuppid | char(10) | Oui | Code fournisseur |
| bhdesc | char(30) | Oui | Description |
| bhrlupramval | numeric(12,4) | Oui | Rollup valeur matieres |
| bhrlupmacval | numeric(20,12) | Oui | Rollup valeur machine |
| bhrluplabval | numeric(20,12) | Oui | Rollup valeur MOD |
| bhcmntcopy | char(1) | Oui | Copier commentaire |
| bhrlupramthlvl | numeric(12,4) | Oui | Rollup matieres ce niveau |
| bhrlupmacthlvl | numeric(12,4) | Oui | Rollup machine ce niveau |
| bhrluplabthlvl | numeric(12,4) | Oui | Rollup MOD ce niveau |
| bhrlupramprlvl | numeric(12,4) | Oui | Rollup matieres niveaux inf. |
| bhrlupmacprlvl | numeric(12,4) | Oui | Rollup machine niveaux inf. |
| bhrluplabprlvl | numeric(12,4) | Oui | Rollup MOD niveaux inf. |
| bhxtrval | numeric(12,4) | Oui | Valeur extra |
| bhrlupxtrval | numeric(12,4) | Oui | Rollup valeur extra |
| bhrlupxtrthlvl | numeric(12,4) | Oui | Rollup extra ce niveau |
| bhrlupxtrprlvl | numeric(12,4) | Oui | Rollup extra niveaux inf. |
| bhdecla | char(1) | Oui | Declaration |
| bhoneemp | char(1) | Oui | Un seul employe |
| bhloc | char(8) | Oui | Emplacement |
| bhcoeff_calc | numeric(12,4) | Oui | Coefficient calcule |
| bhtdmoddate | timestamp | Oui | Date modification donnees techniques |
| bhusetdqty | char(1) | Oui | Utiliser quantite technique |
| bhbomright | char(1) | Oui | Droits nomenclature |
| bhmcdomaker | varchar(10) | Non | Fabricant multicompany |
| bhdlcmp | numeric(1) | Oui | Composant DL |
| bhautorcmo | char(1) | Oui | Auto reception CMO |
| bhfabdvrg | char(1) | Oui | Fabrication diverse |

## Cles et index

- **PK** : bhcode, bhtype
- **FK** : bhmcdomaker -> adresses(adcode)
- **FK** : bhcode -> items(itcode)
- **FK** : bhcode -> items(itcode)

## Relations

- **Parents (FK sortantes)** : adresses, items
- **Enfants (FK entrantes)** : bomcoitem, bomline

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
