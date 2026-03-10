# Table : ETIQ_TRSP

## Description

Table des etiquettes de transport. Configuration des etiquettes pour les differents transporteurs.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| et_id | integer | Non |  **(PK)** |
| et_name | varchar(30) | Non | Nom |
| et_actif | char(1) | Non |  |
| et_NO_cust | varchar(64) | Non | Client |
| et_lastseq | integer | Non | Sequence |
| et_lastseq_max | integer | Non |  |
| et_lastseq_min | integer | Non |  |
| et_removal | numeric(1) | Non | Valeur |
| et_sender_mail | varchar(128) | Non | Email |
| et_recipent_mai | varchar(128) | Non |  |
| et_mail_content | varchar(512) | Non |  |
| et_typ_nationna | varchar(64) | Non |  |
| et_typ_internat | varchar(64) | Non |  |
| et_parcel_conte | varchar(64) | Non |  |
| et_parcel_retur | varchar(64) | Non |  |
| et_pass | varchar(128) | Non |  |
| et_tyEtiq | varchar(128) | Non |  |
| et_sendergsm | varchar(128) | Non |  |

## Cles et index

- **PK** : et_id

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
