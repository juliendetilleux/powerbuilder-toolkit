# Table : histocall

## Description

Table historique des appels de livraison. Archive des appels passes.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| hcid | numeric(8) | Non |  **(PK)** |
| hcchid | numeric(8) | Oui |  |
| hcdate | timestamp | Oui | Date |
| hcuser | varchar(8) | Oui | Utilisateur |
| hcprgcmnt | varchar(100) | Oui | Commentaire |
| hcstbef | numeric(3) | Oui |  |
| hcstaft | numeric(3) | Oui |  |

## Cles et index

- **PK** : hcid
- **Index** : ind_hc01 (hcchid) [non-unique]
- **Index** : ind_hc02 (hcdate) [non-unique]

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
