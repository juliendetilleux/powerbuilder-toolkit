# d_transact_rcpo_rcpodirectdlxo

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT histostock.hsseq,   
         histostock.hscode,   
         histostock.hsordtyp,   
         histostock.hsordno,   
         histostock.hsitem,   
         histostock.hslot,   
         histostock.hsloc,   
         histostock.hsqty,   
         histostock.hsum,   
         histostock.hsval,   
         histostock.hsdatim,  
         histostock.hsuser,    
         histostock.hscomment,   
         histostock.hsordlin,   
         histostock.hsprgcmnt  
    FROM histostock  
   WHERE histostock.hsseq = :Selected_sequence    

```

## Colonnes
| Colonne |
|---------|
| hsseq |
| hscode |
| hsordtyp |
| hsordno |
| hsitem |
| hsdatim |
| hsloc |
| hsqty |
| hsum |
| hsval |
| hsdatim |
| hsuser |
| hscomment |
| hsordlin |
| hsprgcmnt |

