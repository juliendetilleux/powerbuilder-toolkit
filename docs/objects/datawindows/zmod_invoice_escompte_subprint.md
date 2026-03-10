# zmod_invoice_escompte_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
SELECT 70,
			null,
			sum(Invoiceline.ilqtycust),
			Invoiceline.iluomord,   
         Invoiceline.ilstdval,
         Invoiceline.ilorval,
         sum(Invoiceline.ilsalval),
			Invoiceline.ilitcustnam,
			Invoiceline.iltva,
			9999999,
			Invoicehead.ihcust,
         Invoicehead.ihcurr,
			null,
			null,
			null,
			null,
			null,
			null,
			Invoiceline.ilrist AS ilrist,
			Invoiceline.iltype AS iltyp,
			(Select Shiphead.shshipto From Shiphead Where Shiphead.shcode = Invoiceline.ilshiporder) AS shshipto,
			Invoiceline.ilitcustnam,
			invoiceline.ilcomment,
			'',
			'' ,  
         '' , 
         0 , 
            (select salhead.shcustref from salhead where salhead.shcode = invoiceline.ilsalorder ) as ref,
			isnull( ( select pmcval from parameters where pmcode = 'ESCSHOW' ), '' ) as ESCSHOW,
			abs( adresses.adescdcust ) as nbdayesc,
			isnull( ( select cocmnt from comments_lang where cotype = 'ESCP' and cokey = '1' and coprinv = 'Y' and colang ='FR' ) , '' ) as cmnt1_FR,
			isnull( ( select cocmnt from comments_lang where cotype = 'ESCP' and cokey = '2' and coprinv = 'Y' and colang ='FR' ) , '' ) as cmnt2_FR,
			isnull( ( select cocmnt from comments_lang where cotype = 'ESCP' and cokey = '1' and coprinv = 'Y' and colang ='EN' ) , '' ) as cmnt1_EN,
			isnull( ( select cocmnt from comments_lang where cotype = 'ESCP' and cokey = '2' and coprinv = 'Y' and colang ='EN' ) , '' ) as cmnt2_EN,
			isnull( ( select cocmnt from comments_lang where cotype = 'ESCP' and cokey = '1' and coprinv = 'Y' and colang ='GE' ) , '' ) as cmnt1_GE,
			isnull( ( select cocmnt from comments_lang where cotype = 'ESCP' and cokey = '2' and coprinv = 'Y' and colang ='GE' ) , '' ) as cmnt2_GE,
			isnull( ( select cocmnt from comments_lang where cotype = 'ESCP' and cokey = '1' and coprinv = 'Y' and colang ='NL' ) , '' ) as cmnt1_NL,
			isnull( ( select cocmnt from comments_lang where cotype = 'ESCP' and cokey = '2' and coprinv = 'Y' and colang ='NL' ) , '
```

## Colonnes
| Colonne |
|---------|
| c0 |
| null |
| compute_0003 |
| invoiceline_iluomord |
| invoiceline_ilstdval |
| invoiceline_ilorval |
| compute_0007 |
| invoiceline_ilitcustnam |
| invoiceline_iltva |
| c999999 |
| invoicehead_ihcust |
| invoicehead_ihcurr |
| null_1 |
| null_2 |
| null_3 |
| null_4 |
| null_5 |
| null_6 |
| invoiceline_ilrist |
| invoiceline_iltyp |
| shshipto |
| invoiceline_ilitcustnam_1 |
| invoiceline_ilcomment |
| compute_0024 |
| compute_0025 |
| compute_0026 |
| c |
| ref |
| escshow |
| nbdayesc |
| cmnt1_fr |
| cmnt2_fr |
| cmnt1_en |
| cmnt2_en |
| cmnt1_ge |
| cmnt2_ge |
| cmnt1_nl |
| cmnt2_nl |
| cmnt1_it |
| cmnt2_it |
| cmnt1_sp |
| cmnt2_sp |

