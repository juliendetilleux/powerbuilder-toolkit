# d_2per_sal_comp_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT Distinct items.itcode,
         items.itname,   
         items.itum,
         adresses.adcode,   
         adresses.adname,   
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr, 
			adresses.adgrcust 
    FROM items,   
         adresses,
         invoicehead,
         invoiceline 
   WHERE ( adresses.adcode    = invoicehead.ihcust                          ) And  
         (( invoicehead.ihdate Between :adt_Start And :adt_Stop       ) Or
         ( invoicehead.ihdate Between :adt_OldStart And :adt_OldStop )      )And
         ( invoicehead.ihdate > :adt_Seuil )And
         ( items.itcode       = invoiceline.ilitem                          ) And 
         ( invoiceline.ilcode = invoicehead.ihcode                          )
UNION  
select distinct clotfinitad.cditem, 
         items.itname,   
         items.itum,
         adresses.adcode,   
         adresses.adname,   
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr, 
			adresses.adgrcust  
    from clotfinitad, 
         items,
         adresses 
  where  ( clotfinitad.cdadid = adresses.adcode ) and 
         ( clotfinitad.cditem = items.itcode ) and 
         ( clotfinitad.cdadid = adresses.adcode ) and 
         ( clotfinitad.cdtyp = 'S' ) And
         (( date(clotfinitad.cdperiod +'01') Between :adt_Start And :adt_Stop  ) or
         ( date(clotfinitad.cdperiod +'01') Between :adt_OldStart And :adt_OldStop ) ) and
         ( date(clotfinitad.cdperiod +'01') < :adt_seuil ) 
Order By 4,1
         
```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| items_itum |
| adresses_adcode |
| adresses_adname |
| adresses_adadr1 |
| adresses_adadr2 |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountr |
| adresses_adgrcust |

