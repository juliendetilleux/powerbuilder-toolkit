# d_aft3_resume_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
SELECT 

histostock.hsseq,   
histostock.hscode,   
histostock.hsordtyp,   
histostock.hsordno,   
histostock.hsordlin,   
histostock.hsitem,   
histostock.hslot,   
histostock.hsloc,   
histostock.hsqty,   
histostock.hsum,   
histostock.hsval,   
histostock.hsuser,   
histostock.hsdatim,   
histostock.hscomment,   
histostock.hsprgcmnt,   
histostock.hsord2no,   
histostock.hsord2lin,  
(select itname from items where itcode = histostock.hsitem) as itname

FROM 

histostock   

WHERE

histostock.hscode = 'AFT3' AND
histostock.hsdatim <= :adt_to AND
histostock.hsdatim >= :adt_from

order by 

histostock.hsitem,
histostock.hsordno,
histostock.hsordlin,
histostock.hsqty


```

## Colonnes
| Colonne |
|---------|
| hsseq |
| hscode |
| hsordtyp |
| hsordno |
| hsordlin |
| hsitem |
| hslot |
| hsloc |
| hsqty |
| hsum |
| hsval |
| hsuser |
| hsdatim |
| hscomment |
| hsprgcmnt |
| hsord2no |
| hsord2lin |
| itname |

