# d_edisalhead

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: 0

## SQL
```sql
  SELECT  edisalhead.ehenvsend ,
          edisalhead.ehheadref ,
          edisalhead.ehenvid ,
          edisalhead.ehcustean ,
          edisalhead.ehcustid ,
          edisalhead.ehdocdate ,
          edisalhead.ehreqdate ,
          edisalhead.ehcurr ,
          edisalhead.ehstatus ,
          edisalhead.ehsalorder ,
          edisalhead.ehcmnt ,
          ( select adresses.adname from adresses where adresses.adcode = edisalhead.ehcustid) adname,
          ( select adresses.adactiv from adresses where adresses.adcode = edisalhead.ehcustid) adactiv,
          'N' Selected,
		edisalhead.ehenvrec
     FROM edisalhead 
    Where edisalhead.ehstatus < '6'  AND
		  edisalhead.ehtype <> 'T' 
Order By  edisalhead.ehdocdate ,
          edisalhead.ehheadref
```

## Colonnes
| Colonne |
|---------|
| ehenvsend |
| ehheadref |
| ehenvid |
| ehcustean |
| ehcustid |
| ehdocdate |
| ehreqdate |
| ehcurr |
| ehstatus |
| ehsalorder |
| ehcmnt |
| adname |
| adactiv |
| selected |
| ehenvrec |

