# zmod_invoice_header_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT invoicehead.ihcode, 
         invoicehead.ihcust, 
         invoicehead.ihdate, 
         invoicehead.ihtvaref,
			invoicehead.ihtyptva,
         invoicehead.ihtypinv,
         invoicehead.ihexpiry,
			invoicehead.ihcomment,
			invoicehead.ihinvattention,
         invoicehead.ihstructcom, 
			(select users.usname from users where users.uscode =
				(select parameters.pmcval from parameters where parameters.pmcode = 'USINGINV' ) ) as signatory,
			(select users.ustitle from users where users.uscode =
				(select parameters.pmcval from parameters where parameters.pmcode = 'USINGINV' ) ) as title,    
         invoicehead.ihcodemc   
    FROM invoicehead
   WHERE invoicehead.ihcode = :an_invoice

```

## Colonnes
| Colonne |
|---------|
| ihcode |
| ihcust |
| ihdate |
| ihtvaref |
| ihtyptva |
| ihtypinv |
| ihexpiry |
| ihcomment |
| ihinvattention |
| ihstructcom |
| signatory |
| title |
| ihcodemc |

