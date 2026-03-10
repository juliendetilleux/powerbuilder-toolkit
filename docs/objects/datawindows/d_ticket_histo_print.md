# d_ticket_histo_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT histocash.hhseq as thcode,   
         histocash.hhcash as thcash,   
         histocash.hhdate as thdat,   
         histocash.hhuser as thuser,   
         1 as tlqty,   
         histocash.hhval as tlstdval,   
         histocash.hhval as tltotval,   
			adresses.adname As AdName , 
			adresses.adtva As TvaNum ,
			adresses.adtel As AdTel   ,
		( select cocmnt from comments where cotype = 'CMSP'  and cokey = 'XX' and coline = 0 and cotab = 6 ) as cmnt,
		(SELECT transactcash.tcdesc FROM transactcash WHERE transactcash.tccode = histocash.hhcode) as desctransact
    FROM histocash,     
			adresses
   WHERE ( adresses.adcode = '##########' ) And
         ( histocash.hhseq = :ran_TckHead )

```

## Colonnes
| Colonne |
|---------|
| histocash_thcode |
| histocash_thcash |
| histocash_thdat |
| histocash_thuser |
| ticketline_tlqty |
| histocash_tlstdval |
| histocash_tltotval |
| adname |
| tvanum |
| adtel |
| cmnt |
| desctransact |

