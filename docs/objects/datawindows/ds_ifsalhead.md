# ds_ifsalhead

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: salhead

## SQL
```sql
  SELECT salhead.shcode,   
         salhead.shcust,   
         salhead.shcustref,   
         salhead.shcurr,   
         salhead.shstatus,   
         salhead.shdatcrea,   
         salhead.shlastline,   
         salhead.shdatreq,   
         salhead.shautho,   
         salhead.shcmnt,   
         salhead.shdlvt,   
         salhead.shcustpay,   
         salhead.shtype,   
         salhead.shediref,   
         salhead.shedilink,   
         salhead.shsalesman,   
         salhead.shshipcost,   
         salhead.shdlvtplace,   
         salhead.shtransfered,   
         salhead.shwebidhead  
    FROM salhead   
	WHERE salhead.shautho > '6' 																	And 
			( select count(slline)
				 from salline, items
				where salline.slitem = items.itcode 				and
                  salline.slcode = salhead.shcode				and 
						items.itif2trf =  'Y'							and
						isnull(salline.sltransfered, 'N') <> 'Y'	and
						salline.slstatus < '4' 									) > 0				And
			salhead.shstatus < '6'

```

## Colonnes
| Colonne |
|---------|
| shcode |
| shcust |
| shcustref |
| shcurr |
| shstatus |
| shdatcrea |
| shlastline |
| shdatreq |
| shautho |
| shcmnt |
| shdlvt |
| shcustpay |
| shtype |
| shediref |
| shedilink |
| shsalesman |
| shshipcost |
| shdlvtplace |
| shtransfered |
| shwebidhead |

