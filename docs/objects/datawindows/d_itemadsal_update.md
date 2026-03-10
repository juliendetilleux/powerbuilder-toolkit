# d_itemadsal_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT linkitad.lktyp,   
         linkitad.lkitem,   
         linkitad.lkadcode,   
         linkitad.lkcurr,   
         linkitad.lkactiv,   
         linkitad.lkum,   
         linkitad.lkadref,   
         linkitad.lkcode,   
         linkitad.lkleadtime,   
         linkitad.lkmain,   
         linkitad.lkremval,    
         items.itval,   
         linkitad.lkcmnt,   
         items.itstat1,   
         items.itstat2,   
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
         linkitad.lkumconv,   
         linkitad.lkcol2,   
         linkitad.lkprocescrates,   
         linkitad.lkpcratesregroup,   
         linkitad.lkcratesweight,   
         linkitad.lkumean2,   
         linkitad.lkumean3,   
         items.itname,   
         linkitad.lkcalcdluo,   
         linkitad.lklblproc2,   
         isnull(linkitad.lkcheckpc, 'N') as lkcheckpc,
			linkitad.lkuseeaninv,
		linkitad.lkcustint   
    FROM linkitad,   
         items  
   WHERE ( items.itcode = linkitad.lkitem ) and  
         ( ( linkitad.lkcode = :Selected_code ) )    

```

## Colonnes
| Colonne |
|---------|
| lktyp |
| lkitem |
| lkadcode |
| lkcurr |
| lkactiv |
| lkum |
| lkadref |
| lkcode |
| lkleadtime |
| lkmain |
| lkremval |
| items_itval |
| linkitad_lkcmnt |
| items_itstat1 |
| items_itstat2 |
| linkitad_lkadref2 |
| linkitad_lkean |
| linkitad_lkconsinfo |
| linkitad_lkean1 |
| linkitad_lkean2 |
| linkitad_lkean3 |
| linkitad_lkeanref |
| linkitad_lkeanref2 |
| linkitad_lkeanref3 |
| linkitad_lkean2conv |
| linkitad_lkean3conv |
| linkitad_lklblproc |
| linkitad_lkfinalprice |
| lkumconv |
| linkitad_lkcol2 |
| linkitad_lkprocescrates |
| linkitad_lkpcratesregroup |
| linkitad_lkcratesweight |
| linkitad_lkumean2 |
| linkitad_lkumean3 |
| items_itname |
| linkitad_lkcalcdluo |
| linkitad_lklblproc2 |
| lkcheckpc |
| linkitad_lkuseeaninv |
| linkitad_lkcustint |

