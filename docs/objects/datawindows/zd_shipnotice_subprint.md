# zd_shipnotice_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
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

		Shipline.slqty AS slqty,
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
		Salline.sluomord AS sluomord,
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
      Salline.sluomconv  As UmConv,
		salhead.shshiptocmnt											As	shiptocmnt	,
		salline.slsalghost											As Ghost			,
		salline.slprintghost											As printghost  ,
		(Select first count(*) 
			From salline as sals 
			Where sals.slcode = shcode And 
				sals.slsalghost = salline.slline) 				As kit			,
		(Select parameters.pmcval From parameters Where parameters.pmcode = 'SHOWKIT') as showkit,
			if isnull((SELECT progparam.ppvalue  
							 FROM progparam  
							WHERE progparam.ppcode = 'SHIPDELIV' ),'') = '1' AND isnull((SELECT shipto.sttype
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

