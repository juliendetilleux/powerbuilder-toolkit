# zmod_shipnotice_lot_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
SELECT 1 AS clineid,
		Shipline.slcode AS slcode,
		Shipline.slline AS slline,
		Shipline.slsalorder AS slsalorder,
		Shipline.slsalline AS slsalline,
		Shipline.slitem AS slitem,
		Shipline.slitcustnam AS slitcustnam,
  
		 if trim( isnull( (select loorgcode from lots where locode = shipline.sllot) , '') ) = '' then
			shipline.sllot
		else
			(select loorgcode from lots where locode = shipline.sllot)
		endif  												As sllot			,

		IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN
			shipline.slcustpc
		ELSE
			shipline.slqty
		ENDIF as slqty,
		Shipline.slinv AS slinv,
		Shipline.slinvno AS slinvno,
		Shipline.slcomment AS slcomment,
		Shipline.slqcip AS slqcip,
		Shipline.sltransfered AS sltransfered,
		Items.itname AS itname,
		Items.itdesc2 AS itdesc2,
		Items.itdefaultlot AS itdefaultlot,
		Salhead.shcode AS shcode,
		Salhead.shcustref AS shcustref,

		IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN
			items.itumtarif
		ELSE
			salline.sluomord
		ENDIF as sluomord,

		(SELECT yv_linkitad.lkadref
			FROM yv_linkitad
			WHERE yv_linkitad.lktyp = 'S'
				AND yv_linkitad.lkitem = Items.itcode
				AND yv_linkitad.lkadcode = cust
				AND yv_linkitad.lkactiv  = 'Y') AS Lkadref,
		(SELECT yv_linkitad.lkadref2
			FROM yv_linkitad
			WHERE yv_linkitad.lktyp    = 'S'
				AND yv_linkitad.lkitem   = Items.itcode
				AND yv_linkitad.lkadcode = cust
				AND yv_linkitad.lkactiv  = 'Y') AS Lkadref2,
		(SELECT Itemlang.ildesc
			FROM Itemlang
			WHERE Itemlang.ilitcode = Shipline.slitem
				AND Itemlang.illgcode = :as_Lang) AS Translate,
	      IF isnull(items.itisumtarif,'') = 'Y' AND isnull((select ppvalue from progparam where ppcode = 'ITUMTRF'),'') <> '' /*os2751*/ THEN
			1
		ELSE
			salline.sluomconv 
		ENDIF as UmConv,
		salhead.shshiptocmnt					
```

## Colonnes
| Colonne |
|---------|
| clineid |
| slcode |
| slline |
| slsalorder |
| slsalline |
| slitem |
| slitcustnam |
| sllot |
| slqty |
| slinv |
| slinvno |
| slcomment |
| slqcip |
| sltransfered |
| itname |
| itdesc2 |
| itdefaultlot |
| shcode |
| shcustref |
| sluomord |
| lkadref |
| lkadref2 |
| translate |
| umconv |
| shiptocmnt |
| ghost |
| printghost |
| kit |
| showkit |
| cust |
| rmq_client |

