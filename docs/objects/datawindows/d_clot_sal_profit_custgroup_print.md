# d_clot_sal_profit_custgroup_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT sales.cditem item,   
         items.itname item_name, 
         items.itstat1 item_stat1,
			sales.cdadid custcode,
			adresses.adname custname, 
         ( select imdesc from itstat1 where imcode = items.itstat1 ) item_itstat1_name, 
         items.itstat1 item_stat2, 
         ( select isdesc from itstat2 where iscode = items.itstat1 and iscode2 = items.itstat2 ) item_itstat2_name, 
         sales.cdqty sale_qty,   
         sales.cdval  sale_val,   
         sales.cdval / sales.cdqty sale_stdval, 
         stock.cistdconf item_stdval, 
         isnull( ( select cdstdconf from clotfinitad where cdperiod = :Sel_period and cditem = sales.cditem and cdtyp = 'T' and cdadid = sales.cdadid ), 0 ) truck_stdval ,
         isnull( (select extracost.cistdconf from clotfinit extracost where extracost.ciperiod = stock.ciperiod and extracost.ciitem = stock.ciitem and extracost.cityp in( 'X', 'L') ), 0 ) xtra_stdval,
         adresses.adgrcust,
         ( select adresgroup.agdesc from adresgroup where adresgroup.agcode = adresses.adgrcust ) as adgrcustname
    FROM clotfinitad sales,   
         clotfinit stock,  
         items,
         adresses 
   WHERE ( sales.cditem = items.itcode ) and  
         ( sales.cdperiod = stock.ciperiod ) and  
         ( sales.cditem = stock.ciitem ) and  
         ( adresses.adcode = sales.cdadid ) and
         ( sales.cdtyp = 'S' ) and  
         ( stock.cityp = 'I' ) and  
         ( sales.cdperiod = :Sel_period ) and
         ( sales.cdqty <> 0 )  
 
 order by adresses.adgrcust, custname, item 
 
```

## Colonnes
| Colonne |
|---------|
| clotfinitad_item |
| items_item_name |
| items_item_stat1 |
| clotfinitad_custcode |
| adresses_custname |
| citem_itstat1_name |
| items_item_stat2 |
| citem_itstat2_name |
| clotfinitad_sale_qty |
| clotfinitad_sale_val |
| clotfinitad_sale_stdval |
| clotfinit_item_stdval |
| ctruck_stdval |
| clotfinit_xtra_stdval |
| adresses_adgrcust |
| cadgrcustname |

