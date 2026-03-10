# d_web_salhead

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: 0

## SQL
```sql
  SELECT websalhead.wshcode,   
         websalhead.wshcust,   
         websalhead.wshcustref,   
         websalhead.wshcurr,   
         websalhead.wshcurr,   
         websalhead.wshdatcrea,   
         websalhead.wshdatreq,   
         websalhead.wshwebid,
			websalhead.wshcmnt,
			'N' Selected,
			websalhead.wshautho
    FROM websalhead 
where websalhead.wshstatus < '3' ;


```

## Colonnes
| Colonne |
|---------|
| websalhead_wshcode |
| websalhead_wshcust |
| websalhead_wshcustref |
| websalhead_wshcurr |
| wshcurr |
| websalhead_wshdatcrea |
| websalhead_wshdatreq |
| websalhead_wshwebid |
| wshcmnt |
| selected |
| wshautho |

