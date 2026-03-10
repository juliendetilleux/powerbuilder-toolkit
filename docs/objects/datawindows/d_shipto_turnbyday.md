# d_shipto_turnbyday

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT
		shipto.stcode, 
		shipto.stseq,   
         shipto.stdesc,   
         shipto.stturnmonday,
         shipto.stturntuesday,
         shipto.stturnwednesday,
         shipto.stturnthursday,
         shipto.stturnfriday,
         shipto.stturnsaturday,
         shipto.stturnsunday,
		shipto.stturnbyday
    FROM shipto  
   WHERE ( shipto.STCODE = :Selected_adress ) AND  
         ( shipto.STSEQ = :Selected_seq )    

```

## Colonnes
| Colonne |
|---------|
| stcode |
| stseq |
| stdesc |
| stturnmonday |
| stturntuesday |
| stturnwednesday |
| stturnthursday |
| stturnfriday |
| stturnsaturday |
| stturnsunday |
| stturnbyday |

