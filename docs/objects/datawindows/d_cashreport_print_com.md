# d_cashreport_print_com

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_cash
- **Table principale**: 0

## SQL
```sql
SELECT histocash.hhdate, 
         histocash.hhordtyp,   
         histocash.hhordno,      
         histocash.hhseq,  
         histocash.hhcode,   
			( Select invoicehead.ihcodemc
				 From invoicehead
				Where invoicehead.ihcode = histocash.hhordno ) As InvCode,
         transactcash.tcdesc,   
         transactcash.tcsign,   
         histocash.hhpaytyp,   
         isnull( histocash.hhval, 0)  As Val,   
         choiceline.clname,
		if histocash.hhcode = 'IINV' and histocash.hhordtyp = 'I'  then
			( Select invoicehead.ihcust || ', ' || adresses.adname 
				 From invoicehead, adresses
				Where invoicehead.ihcode = histocash.hhordno and invoicehead.ihcust =adresses.adcode ) 
		else
            if histocash.hhcode = 'IINV' and histocash.hhordtyp = 'X'  then
			    ( Select shiphead.shcust || ', ' || adresses.adname 
				From shiphead, adresses
				Where shiphead.shcode = histocash.hhordno and shiphead.shcust =adresses.adcode ) 
		    else
                if histocash.hhcode = 'IINV' and histocash.hhordtyp = 'T'  then
    			   isnull ( ( Select isnull ( tickethead.thcust || ', ','') || isnull ( adresses.adname ,'')
    				From tickethead, adresses
    				Where tickethead.thcode = histocash.hhordno and tickethead.thcust = adresses.adcode ) , '')
		        else
			        isnull (histocash.hhcmnt ,'')
                endif
            endif
		endif as doccomment,
		 (select pmcval from parameters where pmcode='SYSCURR') as syscur,
		(select cuconv from currencies, parameters where cucode = pmcval and pmcode='SYSCURR2') as mnt_devise,
		(select pmcval from currencies, parameters where cucode = pmcval and pmcode='SYSCURR2') as devise,
		if (select pmcval from parameters where pmcode='SYSCURR2') = '' then '' else 'Totaux en ' endif as txt_dev
    FROM choiceline,   
         histocash,   
         transactcash,
		users  
   WHERE ( choiceline.clline = histocash.hhpaytyp ) and  
         ( histocash.hhcode = transactcash.t
```

## Colonnes
| Colonne |
|---------|
| histocash_hhdate |
| histocash_hhordtyp |
| histocash_hhordno |
| histocash_hhseq |
| histocash_hhcode |
| invcode |
| transactcash_tcdesc |
| transactcash_tcsign |
| histocash_hhpaytyp |
| val |
| choiceline_clname |
| doccomment |
| syscur |
| mnt_devise |
| devise |
| txt_dev |

