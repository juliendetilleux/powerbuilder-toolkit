# d_salhead_quick_dirsal_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_cash
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
         salhead.shstdcondition,   
         salhead.shcreauser,
			cast(null as numeric(3,0)) as shrist,  
			salhead.shshiptocmnt, 
			cast( null as datetime) as dateexp,
			IsNull( salhead.shdirectsal , 'N') As shdirectsal,
			IsNull( salhead.shdirsalrate, 'N') As shdirsalrate,
			IsNull( salhead.shdirsalinv, 'N') As shdirsalinv,
			''	As CustRate,
		isnull(salhead.shmccode, '##########') as shmccode,
			(select adresses.adtva from adresses where adcode = salhead.shcust) as adtva 
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
| shcreauser |
| shrist |
| shshiptocmnt |
| dateexp |
| shdirectsal |
| shdirsalrate |
| shdirsalinv |
| custrate |
| shmccode |
| adtva |

