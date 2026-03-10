# d_stockid_sal_rcpo_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT items.itname,   
         histostock.hsqty,   
         histostock.hsum,   
         histostock.hsitem,   
         histostock.hslot,   
         histostock.hscomment,   
         histostock.hsprgcmnt,   
         adresses.adname,   
         histostock.hsdatim,   
         items.itdefaultlot,   
         histostock.hsordno,   
         histostock.hsordlin,   
         histostock.hsuser  ,
			purline.plsalhead As SalHead ,
			purline.plsalline As SalLine ,
			purhead.phrcpocmnt,
			isnull((select salline.slcustref
						from salline
						where salline.slcode = purline.plsalhead and
							salline.slline = purline.plsalline), '') as shcustref,
			isnull((select adresses.adname 
						from adresses,
							salhead
						where adresses.adcode = salhead.shcust and
							salhead.shcode = purline.plsalhead), '') as custname
    FROM histostock,   
         items,   
         adresses,   
         purhead,
			purline   
   WHERE ( histostock.hsitem = items.itcode ) and  
         ( purhead.phsupp = adresses.adcode ) and  
         ( histostock.hsordno = purhead.phcode ) and  
         ( histostock.hsordno = purline.plcode ) and  
         ( histostock.hsordlin = purline.plline ) and  
         ( ( histostock.hsseq = :id_histostock ) )    

```

## Colonnes
| Colonne |
|---------|
| items_itname |
| histostock_hsqty |
| histostock_hsum |
| histostock_hsitem |
| histostock_hslot |
| histostock_hscomment |
| histostock_hsprgcmnt |
| adresses_adname |
| histostock_hsdatim |
| items_itdefaultlot |
| histostock_hsordno |
| histostock_hsordlin |
| histostock_hsuser |
| csalhead |
| csalline |
| purhead_phrcpocmnt |
| cshcustref |
| ccustname |

