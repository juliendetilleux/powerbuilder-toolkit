# Table : fcsthead

## Description

Table en-tete des previsions. Previsions de vente et de demande par periode.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| fhid | numeric(5) | Non |  **(PK)** |
| fhdesc | char(20) | Oui | Description |
| fhtyp | char(1) | Oui |  |
| fhdat | timestamp | Oui |  |
| fhdure | numeric(2) | Oui |  |
| fhpmix | char(1) | Oui |  |
| fhpmixd | timestamp | Oui |  |
| fhcmnt | long varcha(32767) | Oui | Commentaire |

## Cles et index

- **PK** : fhid

## Relations

- **Parents (FK sortantes)** : _(aucune)_
- **Enfants (FK entrantes)** : _(aucune)_

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
