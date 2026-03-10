# d_transact_ord_qty

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT histostock.hsseq,
			histostock.hsdatim,
			 ( select lots.loexpdat from lots where lots.locode = histostock.hslot  ) As expdate,
         ( select items.itdefaultlot from items where items.itcode = histostock.hsitem ) DefaultLot , 
			( Select transactions.trsign from transactions where transactions.trcode = histostock.hscode ) Sign ,
         ( histostock.hsqty * Sign ) QTY,   
         histostock.hsum,
         histostock.hslot,
		lots.loorgcode 
    FROM histostock  left outer join lots on histostock.hslot = lots.locode
   WHERE ( histostock.hscode = :ras_Code1 Or 
           histostock.hscode = :ras_Code2 ) AND  
         ( histostock.hsordtyp = :ras_OrdType ) AND  
         ( histostock.hsordno = :ran_OrdNo ) AND  
         ( histostock.hsordlin = :ran_OrdLine )   
ORDER BY histostock.hsdatim desc

```

## Colonnes
| Colonne |
|---------|
| hsseq |
| hsdatim |
| expdate |
| defaultlot |
| sign |
| qty |
| hsum |
| hslot |
| lots_loorgcode |

