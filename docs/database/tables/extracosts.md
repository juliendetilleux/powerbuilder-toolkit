# Table : extracosts

## Description

Table des types de couts supplementaires. Referentiel des categories de frais additionnels.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ec_id | integer | Non |  **(PK)** |
| ec_desc | varchar(30) | Oui | Description |
| ec_sign | char(1) | Oui |  |
| ec_seuil | numeric(8,2) | Oui |  |
| ec_valtyp | char(1) | Oui |  |
| ec_lnval | numeric(8,2) | Oui | Valeur |
| ec_condapp | char(1) | Oui |  |
| ec_startdat | timestamp | Oui | Date debut |
| ec_stopdat | timestamp | Oui |  |
| ec_faty | numeric(3) | Oui |  |
| ec_withtva | char(1) | Oui |  |
| ec_inco | char(1) | Oui |  |

## Cles et index

- **PK** : ec_id

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : link_country_eco

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
