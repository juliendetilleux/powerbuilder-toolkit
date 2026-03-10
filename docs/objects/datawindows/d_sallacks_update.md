# d_sallacks_update

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
         salhead.shautho,   
         salhead.shdlvt,   
         salhead.shcustpay,   
         salhead.shtype,   
         salhead.shsalesman,   
         salhead.shshipcost,   
         salhead.shdlvtplace,   
         salhead.shcmnt,   
         salhead.shfileref,   
         salhead.shfileline,   
         salhead.shstdcondition,
         salhead.shcreauser,
			( select condhead.chparent from condhead where condhead.chcode = shstdcondition and condhead.chactiv = 'Y' ) as global_condition,
        salhead.shturnid,
			salhead.shcons
    FROM salhead
   WHERE salhead.shcode = :Selected_order    

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
| shautho |
| shdlvt |
| shcustpay |
| shtype |
| shsalesman |
| shshipcost |
| shdlvtplace |
| shcmnt |
| shfileref |
| shfileline |
| shstdcondition |
| shcreauser |
| global_condition |
| shturnid |
| shcons |

