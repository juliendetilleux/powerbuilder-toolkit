# d_cashcentral_print_tout

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_cash
- **Table principale**: 0

## SQL
```sql
  SELECT 10 As Sort, 
			histocash.hhdate As DateMvt  ,   
         histocash.hhcode,   
         Min ( histocash.hhseq ) As SeqSort,   
         histocash.hhordno, 
			( Select invoicehead.ihcodemc
				 From invoicehead
				Where invoicehead.ihcode = histocash.hhordno ) As InvCode, 
		IF histocash.hhordtyp = 'X' THEN
			( Select shiphead.shcust
				 From shiphead
				Where shiphead.shcode = histocash.hhordno  ) 
		ELSE
			( Select invoicehead.ihcust
				 From invoicehead
				Where invoicehead.ihcode = histocash.hhordno  ) 
		ENDIF As CustId, 
			( Select adresses.adname
				 From adresses
				Where adresses.adcode = CustId ) As CustName,
         transactcash.tcsign, 
         transactcash.tcdesc, 
			Sum ( If transactcash.tcsign = 1 Then isnull(histocash.hhval, 0) Else 0 EndIf) As Credit, 
			Sum ( If transactcash.tcsign = -1 Then isnull(histocash.hhval, 0 ) Else 0 EndIf) As debit,
         histocash.hhordtyp,
			( If histocash.hhcode = 'IINV' Then 
															IF histocash.hhordtyp = 'X' THEN
																'NE ' + String( histocash.hhordno )
															ELSE 
																'Facture ' + String( invcode )
															ENDIF 
													 Else transactcash.tcdesc + ':' + histocash.hhcmnt
													 EndIf ) As Cmnt,
		(select pmcval from parameters where pmcode='SYSCURR') as syscur,
		(select cuconv from currencies, parameters where cucode = pmcval and pmcode='SYSCURR2') as mnt_devise,
		(select pmcval from currencies, parameters where cucode = pmcval and pmcode='SYSCURR2') as devise,
		if (select pmcval from parameters where pmcode='SYSCURR2') = '' then '' else 'Totaux en ' endif as txt_dev
    FROM histocash,   
         transactcash  
   WHERE ( histocash.hhcode = transactcash.tccode ) and  
         ( IsNull( histocash.hhordtyp, '') <> 'T' ) AND    
         ( histocash.hhdate >= :radt_Start ) AND  
         ( histocash.hhdate <= :radt_Stop )          
Group By DateMvt,   
         histocash.hhcode,   

```

## Colonnes
| Colonne |
|---------|
| sort |
| datemvt |
| histocash_hhcode |
| seqsort |
| histocash_hhordno |
| invcode |
| custid |
| custname |
| transactcash_tcsign |
| transactcash_tcdesc |
| credit |
| debit |
| histocash_hhordtyp |
| cmnt |
| syscur |
| mnt_devise |
| devise |
| txt_dev |

