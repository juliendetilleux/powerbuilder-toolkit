# ds_linkitad_impexp

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT linkitad.lkadcode,   
         linkitad.lkitem,   
	    linkitad.lktyp,
         linkitad.lkcode,   
         linkitad.lkcurr,   
         linkitad.lkactiv,   
         linkitad.lkum,   
         linkitad.lkumconv,   
         linkitad.lkadref,   
         linkitad.lkleadtime,   
         linkitad.lkmain,   
         linkitad.lkremval,   
         linkitad.lkcmnt,   
         linkitad.lkadref2,   
         linkitad.lkean,   
         linkitad.lkconsinfo,   
         linkitad.lkean1,   
         linkitad.lkean2,   
         linkitad.lkean3,   
         linkitad.lkeanref,   
         linkitad.lkeanref2,   
         linkitad.lkeanref3,   
         linkitad.lkean2conv,   
         linkitad.lkean3conv,   
         linkitad.lklblproc,   
         linkitad.lkfinalprice,   
         linkitad.lkcol2,   
         linkitad.lkprocescrates,   
         linkitad.lkpcratesregroup,   
         linkitad.lkcratesweight,   
         linkitad.lkumean2,   
         linkitad.lkumean3,   
         linkitad.lkwithcertif,   
         linkitad.lkdatecertif,   
         linkitad.lknbdaycertif,   
         linkitad.lkcalcdluo  
    FROM linkitad  
   WHERE linkitad.lktyp = 'S'   
ORDER BY linkitad.lkadcode,   
         linkitad.lkitem
```

## Colonnes
| Colonne |
|---------|
| lkadcode |
| lkitem |
| lktyp |
| lkcode |
| lkcurr |
| lkactiv |
| lkum |
| lkumconv |
| lkadref |
| lkleadtime |
| lkmain |
| lkremval |
| lkcmnt |
| lkadref2 |
| lkean |
| lkconsinfo |
| lkean1 |
| lkean2 |
| lkean3 |
| lkeanref |
| lkeanref2 |
| lkeanref3 |
| lkean2conv |
| lkean3conv |
| lklblproc |
| lkfinalprice |
| lkcol2 |
| lkprocescrates |
| lkpcratesregroup |
| lkcratesweight |
| lkumean2 |
| lkumean3 |
| lkwithcertif |
| lkdatecertif |
| lknbdaycertif |
| lkcalcdluo |

