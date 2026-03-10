# d_cons_supp1_detail_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT histocons.hcdatim,   
         transactions.trname,   
         histocons.hcqty,   
         histocons.hcordtyp,   
         histocons.hcordno,   
         histocons.hcordlin,   
         histocons.hchistseq,   
         histocons.hccomment,   
         transreason.tidesc,   
         histocons.hcseq,
			histocons.hcowner,
			histocons.hcpack  
    FROM histocons,   
         transactions,   
         transreason  
   WHERE ( histocons.hccode = transactions.trcode ) and  
         ( transreason.ticode = transactions.trcode ) and  
         ( histocons.hcreasn = transreason.tiimp ) and  
         ( histocons.hcowner = :sel_loc ) AND  
         ( histocons.hcpack = :sel_pack ) AND  
         ( histocons.hcdatim >= :start_date  ) AND  
         ( histocons.hcdatim <= :stop_date )   
ORDER BY histocons.hcseq DESC   

```

## Colonnes
| Colonne |
|---------|
| histocons_hcdatim |
| transactions_trname |
| histocons_hcqty |
| histocons_hcordtyp |
| histocons_hcordno |
| histocons_hcordlin |
| histocons_hchistseq |
| histocons_hccomment |
| transreason_tidesc |
| histocons_hcseq |
| histocons_hcowner |
| histocons_hcpack |

