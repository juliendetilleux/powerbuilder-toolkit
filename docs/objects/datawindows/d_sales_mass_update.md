# d_sales_mass_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

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
         salhead.shwebidhead,   
         salhead.shtransfered,   
         salhead.shfileref,   
         salhead.shfileline,   
         salhead.shstdcondition,   
         salhead.shprinted,   
         salhead.shextracosts,   
         salhead.shturnid,   
         salhead.shcreauser,   
         salhead.shshiptocmnt,   
         salhead.shedisender,   
         salhead.shorigin,   
         salhead.shdirectsal,   
         salhead.shdirsalrate,   
         salhead.shdirsalinv,   
         salhead.shpriority,   
         salhead.shpreparator,   
         salhead.shcons,   
         salhead.shadcontact,   
         salhead.shmccode  ,
			(if ((select count (distinct slexfrcst) from salline where slcode = salhead.shcode ) = 1) then 
				(select first slexfrcst from salline where slcode = salhead.shcode order by slline) 
			else 
				('X') 
			endif ) as slexfrcst

    FROM salhead,  choices  
	WHERE	( salhead.shstatus = choices.chcode ) and  
			(salhead.shstatus between :Sel_Status_Min and :Sel_Status_Max) AND  
         choices.chtype = 'CUSS' 
ORDER BY salhead.shcust ASC,   
         salhead.shcode ASC  

 

```

## Colonnes
| Colonne |
|---------|
| shcode |
| shcust |
| salhead_shcustref |
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
| salhead_shdlvtplace |
| shwebidhead |
| shtransfered |
| shfileref |
| shfileline |
| shstdcondition |
| shprinted |
| shextracosts |
| shturnid |
| shcreauser |
| shshiptocmnt |
| shedisender |
| shorigin |
| shdirectsal |
| shdirsalrate |
| shdirsalinv |
| shpriority |
| shpreparator |
| shcons |
| shadcontact |
| shmccode |
| slexfrcst |

