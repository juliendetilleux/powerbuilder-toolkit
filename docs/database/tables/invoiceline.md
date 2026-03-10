# Table : invoiceline

## Description

Table des lignes de facture. Detail des articles et montants par ligne de facturation.

## Colonnes

| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| ilcode | numeric(6) | Non | Numero facture **(PK)** |
| illine | numeric(4) | Non | Numero de ligne **(PK)** |
| iltype | char(1) | Non | Type |
| ilsalorder | numeric(6) | Oui |  |
| ilsalline | numeric(4) | Oui | Numero de ligne |
| ilshiporder | numeric(8) | Oui |  |
| ilshipline | numeric(4) | Non | Numero de ligne |
| ilitem | char(20) | Non | Code article |
| ilitcustnam | char(30) | Oui |  |
| ilqty | numeric(12,3) | Non | Quantite |
| ilqtycust | numeric(12,3) | Non | Client |
| iluomord | varchar(5) | Oui |  |
| iluomconv | numeric(16,10) | Oui |  |
| ilstdval | numeric(10,4) | Oui | Valeur |
| ilsalval | numeric(8,2) | Oui | Valeur |
| iltva | numeric(6,4) | Oui | Code TVA |
| iltvaval | numeric(8,2) | Oui | Valeur |
| iltotval | numeric(8,2) | Oui | Valeur |
| ilcomment | long varcha(32767) | Oui | Commentaire |
| ilcptsal | char(12) | Oui |  |
| ilcptanal | char(12) | Oui |  |
| ilnetval | numeric(8,2) | Oui | Valeur |
| ilorval | numeric(10,4) | Oui | Valeur |
| ilrist | numeric(5,2) | Oui |  |
| ildlvt | char(1) | Oui |  |
| ilbastva | numeric(8,2) | Oui |  |
| ilrealtva | numeric(8,2) | Oui |  |
| ilfatype | numeric(3) | Oui | Type |
| ildlvtplace | varchar(15) | Oui |  |
| ilfileref | numeric(4) | Oui | Reference |
| ilfileline | numeric(4) | Oui | Numero de ligne |
| iltransfered | char(1) | Oui |  |
| ilsaleprocent | numeric(5,2) | Oui |  |
| ilsort | numeric(4) | Oui | Ordre de tri |
| ilshowprest | char(1) | Oui |  |
| iltvacalcontot | char(1) | Oui |  |
| ilcptanal2 | char(12) | Oui |  |
| ilristorg | numeric(5,2) | Oui |  |
| ilsddisc | numeric(5,2) | Oui | Remise |
| ilshipto | numeric(4) | Oui |  |
| ilcurrconv2 | numeric(10,6) | Oui |  |
| iltnetval1 | numeric(8,2) | Oui |  |
| iltnetval2 | numeric(8,2) | Oui |  |
| iltnetval3 | numeric(8,2) | Oui |  |
| ilristtnettyp | numeric(3) | Oui | Type ristourne nette |
| ilmfg | numeric(6) | Oui |  |
| ilmfgtype | char(1) | Oui | Type |
| ilmfgcostline | numeric(4) | Oui | Numero de ligne |

## Cles et index

- **PK** : ilcode, illine
- **FK** : ilfileref -> filehead(fhcode)
- **FK** : ilcode -> invoicehead(ihcode)
- **FK** : ilmfg -> mfghead(mhcode)
- **FK** : ilsalorder -> salhead(shcode)
- **FK** : ilshiporder -> shiphead(shcode)
- **Index** : il1_salord (ilsalorder, ilsalline) [non-unique]
- **Index** : il2_shipord (ilshiporder, ilshipline) [non-unique]
- **Index** : il3_item (ilitem) [non-unique]
- **Index** : ixc_Profile_16 (iltype, ilsalorder) [non-unique]

## Relations

- **Parents (FK sortantes)** : filehead, invoicehead, mfghead, salhead, shiphead
- **Enfants (FK entrantes)** : ticketline_invoi

## Utilisation dans le code

_A completer lors de la Phase 3 (analyse des DataWindows)._
