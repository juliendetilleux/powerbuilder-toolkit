# Table : activities

## Description

Table des activites (types d'interventions, operations). Definit les categories d'activites utilisees dans le suivi de production, les feuilles de temps et la planification.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| accode | numeric(2) | Non | Code activite **(PK)** |
| acdesc | char(20) | Oui | Description |
| acsort | numeric(2) | Oui | Ordre de tri |
| acworkcenter | char(8) | Oui | Centre de charge |
| acfacturability | char(1) | Oui | Facturabilite |
| acactiv | char(1) | Oui | Actif |
| accmnt | varchar(240) | Oui | Commentaire |
| acshownum | char(1) | Oui | Afficher numero |
| acsendmail | char(1) | Oui | Envoi email |
| acdesc_nl | varchar(20) | Oui | Description (NL) |
| acdesc_en | varchar(20) | Oui | Description (EN) |
| actimesheet | char(1) | Oui | Feuille de temps |
| acagenda | char(1) | Oui | Agenda |
| accoeff | decimal(16,10) | Oui | Coefficient |
| acrh | numeric(3) | Oui | Code RH |
| acval | numeric(12,4) | Oui | Valeur |
| acum | char(3) | Oui | Unite de mesure |
| acrhtyp | char(1) | Oui | Type RH |
| acgpcode | numeric(6) | Oui | Code groupe |
| acactionout | numeric(1) | Oui | Action sortie |
| acmccdo | char(10) | Oui | Code MCC |

## Cles et index

- **PK** : accode
- **FK** : acworkcenter -> workcenters(wccode)
- **Index** : ixc_DBA_index_consultant_2 (acdesc) [non-unique]
- **Index** : ixc_DBA_index_consultant_5 (acsort) [non-unique]

## Relations

- **Parents (FK sortantes)** : workcenters
- **Enfants (FK entrantes)** : adrsactions, apphead, linkactivities, workflowline

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
