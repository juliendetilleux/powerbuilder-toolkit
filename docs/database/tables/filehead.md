# Table : filehead

## Description

Table en-tete des dossiers/projets. Donnees principales des projets et affaires.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| fhcode | numeric(4) | Non | Code **(PK)** |
| fhdesc | char(50) | Oui | Description |
| fhdesc2 | long varcha(32767) | Oui |  |
| fhcreadate | timestamp | Oui | Date creation |
| fhcreausr | char(50) | Oui |  |
| fhlastmoddate | timestamp | Oui | Date modification |
| fhlastmodusr | char(50) | Oui |  |
| fhstartdate | timestamp | Oui | Date debut |
| fhexpstartdate | timestamp | Oui | Date debut |
| fhexpenddate | timestamp | Oui | Date |
| fhstatus | char(1) | Oui | Statut |
| fhadid | char(10) | Oui |  |
| fhresp | char(50) | Oui |  |
| fhprogress | numeric(4,2) | Oui |  |
| fhbudgetmat | numeric(8,2) | Oui |  |
| fhbudgetlabour | numeric(8,2) | Oui |  |
| fhbudgetother | numeric(8,2) | Oui |  |
| fhbudget | numeric(8,2) | Oui |  |
| fhstat1 | numeric(3) | Oui |  |

## Cles et index

- **PK** : fhcode
- **FK** : fhadid -> adresses(adcode)
- **FK** : fhstat1 -> filefamily(ffcode)
- **Index** : ixc_DBA_index_consultant_3 (fhdesc) [non-unique]

## Relations

- **Parents (FK sortantes)** : adresses, filefamily
- **Enfants (FK entrantes)** : adrsactions, fileline, fileprogress, invoicehead, invoiceline, purghead, purhead, purinvhead, salhead

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
