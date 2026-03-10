# d_purinvtransact

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT histostock.hsitem,   
         histostock.hslot,    
         histostock.hsqty,
         histostock.hsdatim,  
         purinvtransact.pthistoseq, 
         purinvtransact.ptpurinvcode, 
         purinvtransact.ptpurinvline, 
         ( select items.itname from items where items.itcode = histostock.hsitem) as itname, 
         ( select lots.loadcode from lots where lots.locode = histostock.hslot ) as supplier,
         ( select items.itlot from items where items.itcode = histostock.hsitem) as itlot  
    FROM histostock,   
         purinvtransact  
   WHERE ( purinvtransact.pthistoseq = histostock.hsseq ) and  
         ( ( purinvtransact.ptpurinvcode = :al_purinvcode ) AND  
         ( purinvtransact.ptpurinvline = :al_purinvline ) )    

```

## Colonnes
| Colonne |
|---------|
| histostock_hsitem |
| histostock_hslot |
| histostock_hsqty |
| histostock_hsdatim |
| purinvtransact_pthistoseq |
| purinvtransact_ptpurinvcode |
| purinvtransact_ptpurinvline |
| citname |
| csupplier |
| citlot |

