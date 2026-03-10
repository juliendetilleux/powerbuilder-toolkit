# d_purg_rtn_sspdc_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT  histostock.hsseq,
			adresses.adcode ,
			 histostock.hsitem ,   
			items.itname ,          
			histostock.hslot ,     
			histostock.hsqty ,      
			histostock.hsdatim ,    
			histostock.hscomment ,        
			histostock.hsum ,       
			purghead.phcode ,     
			mfghead.mhcode ,      
			purghead.phdatcrea    
 FROM adresses ,     
		histostock ,         
		items ,       
		purghead ,       
		mfghead 
		,purgline
		,mfgwcreqs
  WHERE ( histostock.hsitem = items.itcode ) AND     
			( purghead.phsupp = adresses.adcode ) AND   
			 ( mfghead.mhcode = histostock.hsordno ) AND            
			purghead.phcode=purgline.plcode AND 
			purgline.plrefnum=mfghead.mhcode  AND 
			purgline.plrefline=mfgwcreqs.mwline  AND 
			mfgwcreqs.mwline=(select first a.hsordlin from histostock a where a.hsordno=histostock.hsordno and a.hsordtyp='M' and a.hscode='RCMO' and a.hslot= histostock.hslot) and 
			hscode='RTMO'  AND 
			mfgwcreqs.mwcode=mfghead.mhcode  AND 
			( ( histostock.hsseq = :sel_histo ) )   
			

```

## Colonnes
| Colonne |
|---------|
| histostock_hsseq |
| adresses_adcode |
| histostock_hsitem |
| items_itname |
| histostock_hslot |
| histostock_hsqty |
| histostock_hsdatim |
| histostock_hscomment |
| histostock_hsum |
| purghead_phcode |
| mfghead_mhcode |
| purghead_phdatcrea |

