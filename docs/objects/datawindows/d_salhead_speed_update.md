# d_salhead_speed_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT salhead.shcode,   
         salhead.shcust,   
         salhead.shcurr,   
         salhead.shstatus,   
         salhead.shdatcrea,   
         salhead.shlastline,   
         salhead.shcustref,   
         salhead.shdatreq,   
         salhead.shcmnt,   
         salhead.shautho,   
         salhead.shdlvt,   
         salhead.shcustpay,   
         salhead.shtype,   
         salhead.shsalesman,   
         salhead.shshipcost,   
         salhead.shdlvtplace,   
         salhead.shfileref,   
         salhead.shfileline,   
         salhead.shturnid,   
         salhead.shstdcondition
    FROM salhead,adresses  
   WHERE ( salhead.shcode = :Selected_order)

				

```

## Colonnes
| Colonne |
|---------|
| shcode |
| shcust |
| shcurr |
| shstatus |
| shdatcrea |
| shlastline |
| shcustref |
| shdatreq |
| shcmnt |
| shautho |
| shdlvt |
| shcustpay |
| shtype |
| shsalesman |
| shshipcost |
| shdlvtplace |
| shfileref |
| shfileline |
| shturnid |
| shstdcondition |

