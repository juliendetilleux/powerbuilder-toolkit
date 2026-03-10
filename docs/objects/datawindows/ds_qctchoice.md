# ds_qctchoice

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _quality
- **Table principale**: 0

## SQL
```sql
  SELECT qctchoice.qcchoiceid,   
         qctchoice.qcseq,   
         qctchoice.qcsort,   
         qctchoice.qcdesc,   
         qctchoice.qcrslt  
    FROM qctchoice   
where (qctchoice.qcchoiceid = :choiceid)

```

## Colonnes
| Colonne |
|---------|
| qcchoiceid |
| qcseq |
| qcsort |
| qcdesc |
| qcrslt |

