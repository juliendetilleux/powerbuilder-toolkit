# d_qry_sscc

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT histostock.hscomment,   
         histostock.hsordno,   
         0,
         histostock.hscode,   
         histostock.hsqty,   
         histostock.hsdatim,
         histostock.hslot  
    FROM histostock  
   WHERE histostock.hscomment = :Sel_sscc    
UNION ALL
  select shipgrhead.ghsscc,
         shipgrhead.ghshipid,
			shipline.slline, 
         'DLXO',
         shipline.slqty,
         shiphead.shdate,
         shipline.sllot
    from shipgrhead, shiphead, shipline
   where shipgrhead.ghshipid = shipline.slcode and
         shipgrhead.ghshipid = shiphead.shcode and
         shipgrhead.ghlevelseq = shipline.slline and
         shipgrhead.ghlevel = 1 and
         shipgrhead.ghprevlevelseq = 0 and
         shipgrhead.ghsscc = :Sel_sscc

```

## Colonnes
| Colonne |
|---------|
| hscomment |
| hsordno |
| compute_0003 |
| hscode |
| hsqty |
| hsdatim |
| hslot |

