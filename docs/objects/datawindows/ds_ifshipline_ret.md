# ds_ifshipline_ret

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: 0

## SQL
```sql
SELECT histostock.hsseq,
		shipline.slcode,   
	    shipline.slline,  
		salline.slcode,
   	 	salline.slline, 
	    shipline.slitem,   
	    shipline.slitcustnam,   
		 shipline.sllot,   
	    histostock.hsqty, 
	    histostock.hsloc,   
	    shipline.slinv,   
	    shipline.slinvno,   
	    shipline.slcomment,   
	    shipline.slqcip,   
	    shipline.sltransfered,
		histostock.hsum,
		histostock.hsval,
		histostock.hsprgcmnt,
		lots.loorgcode,
		salline.slwebidhead,
		salline.slwebidline,
		shiphead.shcust,
		shipline.slcustpc
  FROM shipline, salline, histostock, lots, shiphead  
 WHERE salline.slcode = shipline.slsalorder and
		salline.slline = shipline.slsalline and 
		salline.slcode = histostock.hsordno and
		salline.slline = histostock.hsordlin and
		shipline.slcode = shiphead.shcode and
		histostock.hslot = shipline.sllot and
		histostock.hslot = lots.locode and
//		exists( select * from histostock where hscode = 'RCPO' and hsordno = purline.plcode and hsordlin = purline.plline and hslot = shipline.sllot ) and
		 isnull(shipline.Sltransfered, 'N') = 'Y' and
		isnull(salline.slwebidhead, 0) > 0 and
		isnull(salline.slwebidline, 0) > 0 and
//		purline.pltransfered = 'Y' and /*dont la commande d'achat associé fait partie des lignes d'achat réceptionner par multico*/
		histostock.hscode = 'RTXO' and	/*retour d'expédition*/
		shipline.slqty             <>  0 and
	//	isnull(lots.loorgcode, '') <> '' and
		histostock.hstrfint_ret <> 'Y' and
		histostock.hsseq > :al_RETPURIC and
		shiphead.shcust = :as_Cust 
 
order by 1

```

## Colonnes
| Colonne |
|---------|
| histostock_hsseq |
| shipline_slcode |
| shipline_slline |
| salline_slcode |
| salline_slline |
| slitem |
| slitcustnam |
| sllot |
| histostock_hsqty |
| histostock_hsloc |
| slinv |
| slinvno |
| slcomment |
| slqcip |
| sltransfered |
| histostock_hsum |
| histostock_hsval |
| histostock_hsprgcmnt |
| lots_loorgcode |
| salline_slwebidhead |
| salline_slwebidline |
| shiphead_shcust |
| slcustpc |

