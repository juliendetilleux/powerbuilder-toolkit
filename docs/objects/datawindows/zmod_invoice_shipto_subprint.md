# zmod_invoice_shipto_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
SELECT FIRST 
	shipto.stdesc ,           
	shipto.stloc ,
	shipto.stadr1,
	shipto.stadr2,
	shipto.stzip,
	shipto.stcountr,    
	(trim(shipto.stdesc) + trim(shipto.stloc) + trim(shipto.stadr1) + trim(shipto.stadr2) + trim(shipto.stzip) + trim(shipto.stcountr)) as compareshiptoadr, 
	(if (select isnull ( trim(adinvto) , '' ) from adresses where adcode = :Sel_Ad) = '' then
  	(select trim(adname) + trim(adloc) + trim(adadr1) + trim(adadr2) + trim(adzip) + trim(adcountr) from adresses where adcode = :Sel_Ad)
	else
  	(select trim(adname) + trim(adloc) + trim(adadr1) + trim(adadr2) + trim(adzip) + trim(adcountr) from adresses where adcode = (select isnull ( trim(adinvto) , '' ) from adresses where adcode = :Sel_Ad))
	endif)   as compareinvoiceadr   
FROM shipto      
WHERE ( shipto.stcode = :Sel_Ad ) and          ( shipto.stseq = :Sel_shipto ) 
order by 1
```

## Colonnes
| Colonne |
|---------|
| stdesc |
| stloc |
| stadr1 |
| stadr2 |
| stzip |
| stcountr |
| compareshiptoadr |
| compareinvoiceadr |

