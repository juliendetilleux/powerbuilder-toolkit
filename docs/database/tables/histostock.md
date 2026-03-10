# Table : histostock

## Description

Table historique de stock. Archive des mouvements de stock (entrees, sorties, transferts).

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| hsseq | numeric(12) | Non | Sequence **(PK)** |
| hscode | char(4) | Oui | Code |
| hsordtyp | char(1) | Oui |  |
| hsordno | numeric(8) | Oui |  |
| hsordlin | numeric(3) | Oui |  |
| hsitem | char(20) | Oui | Article |
| hslot | char(30) | Oui | Lot |
| hsloc | char(8) | Oui | Emplacement |
| hsqty | numeric(12,3) | Oui | Quantite |
| hsum | char(2) | Oui | Unite de mesure |
| hsval | numeric(12,2) | Oui | Valeur |
| hsuser | char(50) | Oui | Utilisateur |
| hsdatim | timestamp | Oui |  |
| hscomment | char(30) | Oui | Commentaire |
| hsprgcmnt | char(30) | Oui | Commentaire |
| hsord2no | numeric(8) | Oui |  |
| hsord2lin | numeric(4) | Oui |  |
| hstrfint_ret | char(1) | Oui |  |
| hsqtytarif | numeric(12,3) | Oui |  |
| hspn | varchar(256) | Oui |  |
| hscash | char(30) | Oui |  |

## Cles et index

- **PK** : hsseq
- **FK** : hsloc -> locations(lccode)
- **Index** : histostock_shipline (hsord2no, hsord2lin) [non-unique]
- **Index** : horodate (hsdatim) [non-unique]
- **Index** : hs3_ordno (hsordno, hsordlin) [non-unique]
- **Index** : hs4 (hscode, hsordtyp, hsdatim) [non-unique]
- **Index** : hs4_lot_date (hslot, hsdatim) [non-unique]
- **Index** : item (hsitem) [non-unique]

## Relations

- **Parents (FK sortantes)** : locations
- **Enfants (FK entrantes)** : purinvtransact

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
