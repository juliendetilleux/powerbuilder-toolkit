# d_salord_alloc_mod1_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adname,   
         adresses.adtva, 
			( Select parameters.pmcval From parameters Where parameters.pmcode = 'LASTHCON' ) As Consignement, 
         adresses.adautoitpack ,
			adresses.adneval,
			( select first salline.sldatship from salline where slcode = :ran_Order ) as dat2ship,

          (select first shipto.stdesc
		   from shipto
		where shipto.stcode = adresses.adcode and  
         		shipto.stseq = :ran_shipto) as stdesc
    FROM adresses
   WHERE adresses.adcode = :ras_Cust   

```

## Colonnes
| Colonne |
|---------|
| adresses_adname |
| adresses_adtva |
| consignement |
| adresses_adautoitpack |
| adresses_adneval |
| dat2ship |
| stdesc |

