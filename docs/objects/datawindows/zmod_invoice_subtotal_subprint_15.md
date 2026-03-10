# zmod_invoice_subtotal_subprint_15

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT invoicehead.ihcode, 
         invoicehead.ihcust, 
         invoicehead.ihsalval,   
         invoicehead.ihtvaval,   
         invoicehead.ihtotval,   
         invoicehead.ihcurr,   
         invoicehead.ihtypinv, 
         invoicehead.ihtyptva,
         paymode.pmdescext,
         invoicehead.ihexpiry,
			( Select Count( *) 
				 From invoiceline,
						imputcpt
				Where invoiceline.ilcode	= invoicehead.ihcode And
						invoiceline.ilcptsal = imputcpt.icref     And
						imputcpt.icfrais     = 'P'				 				) As Prest,
			( Select Count( *) 
				 From invoiceline,
						imputcpt
				Where invoiceline.ilcode	= invoicehead.ihcode And
						invoiceline.ilcptsal = imputcpt.icref     And
						imputcpt.icfrais     = 'N'				 				) As Non_Prest,
			(
			if :ras_lang = 'FR' then
				(select cocmnt from comments where cotype = 'CMSP' and cokey = 'xx' and coline = 0 and cotab = 8)
			else
				(select cocmnt from comments_lang where cotype = 'CMSP' and cokey = 'xx' and cotab = 8 and colang = :ras_lang)
			endif
			) as intracomservices,
			(
			if :ras_lang = 'FR' then
				(select cocmnt from comments where cotype = 'CMSP' and cokey = 'xx2' and coline = 0 and cotab = 8)
			else
				(select cocmnt from comments_lang where cotype = 'CMSP' and cokey = 'xx2' and cotab = 8 and colang = :ras_lang)
			endif
			) as intracombiens,
			(
			if :ras_lang = 'FR' then
				(select cocmnt from comments where cotype = 'CMSP' and cokey = 'xx3' and coline = 0 and cotab = 8)
			else
				(select cocmnt from comments_lang where cotype = 'CMSP' and cokey = 'xx3' and cotab = 8 and colang = :ras_lang)
			endif
			) as exportservices,
			(
			if :ras_lang = 'FR' then
				(select cocmnt from comments where cotype = 'CMSP' and cokey = 'xx4' and coline = 0 and cotab = 8)
			else
				(select cocmnt from comments_lang where cotype = 'CMSP' and cokey = 'xx4' and cotab = 8 and colang = :ras_lang)
			endif
			) as exportbiens,
			(
			if :ras_lang 
```

## Colonnes
| Colonne |
|---------|
| invoicehead_ihcode |
| invoicehead_ihcust |
| invoicehead_ihsalval |
| invoicehead_ihtvaval |
| invoicehead_ihtotval |
| invoicehead_ihcurr |
| invoicehead_ihtypinv |
| invoicehead_ihtyptva |
| paymode_pmdescext |
| invoicehead_ihexpiry |
| prest |
| non_prest |
| intracomservices |
| intracombiens |
| exportservices |
| exportbiens |
| concontract |

