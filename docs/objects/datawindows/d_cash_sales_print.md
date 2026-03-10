# d_cash_sales_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT Sum( ticketline.tlsalval) As BaseVal,   
         ticketline.tltva,   
         Sum( ticketline.tltvaval) As TvaVal,   
         Sum( ticketline.tltotval) As TotVal,   
         ticketline.tlcode,
         tickethead.thdate  
    FROM ticketline,   
         tickethead  
   WHERE ( ticketline.tlcode = tickethead.thcode ) and  
         ( ( ticketline.tlcash = :ras_Cash ) AND  
          ( ticketline.tlcash = tickethead.thcash ) and  
         ( tickethead.thdate >= :radt_Start ) AND  
         ( tickethead.thdate <= :radt_Stop )            )   
Group	By ticketline.tlcode,
			ticketline.tltva,
         tickethead.thdate       
ORDER BY ticketline.tlcode ASC   

```

## Colonnes
| Colonne |
|---------|
| baseval |
| ticketline_tltva |
| tvaval |
| totval |
| ticketline_tlcode |
| tickethead_thdate |

