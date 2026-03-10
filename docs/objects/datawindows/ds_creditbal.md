# ds_creditbal

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _ifcpt
- **Table principale**: 0

## SQL
```sql
  SELECT salline.slqtyreq,   
         salline.slqtyreal,   
         salline.slqtyinv,   
         salline.slstdval,   
         salline.sluomconv, 
			salline.slstatus,  
			salline.slcode,
			salline.slline,
         currencies.cuconv  
    FROM salhead,   
         salline,   
         currencies  
   WHERE ( salline.slcode = salhead.shcode ) and  
         ( salhead.shcurr = currencies.cucode ) and  
         ( salhead.shcust = :ras_AdCode ) AND  
			( isnull(salline.slprintghost,'Y') <> 'N' ) And
/*         ( salline.slqtyreal <> salline.slqtyinv OR             
			 ( salline.slqtyreq > salline.slqtyreal And salline.slstatus < '6' And salline.slqtyreal = salline.slqtyinv ) )    */
		EXISTS (select * from shipline 
					where shipline.slsalorder = salline.slcode and
						shipline.slsalline = salline.slline and
						slinv = 'N')
 
```

## Colonnes
| Colonne |
|---------|
| salline_slqtyreq |
| salline_slqtyreal |
| salline_slqtyinv |
| salline_slstdval |
| salline_sluomconv |
| salline_slstatus |
| salline_slcode |
| salline_slline |
| currencies_cuconv |

