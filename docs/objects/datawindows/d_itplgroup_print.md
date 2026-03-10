# d_itplgroup_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT 1, 
			plangroup.pgtyp,   
         plangroup.pgcode,   
         plangroup.pgname as pgname,   
         items.itcode,   
         items.itname  
    FROM items,   
         plangroup  
   WHERE ( items.itplgroup = plangroup.pgcode )  and 
			( items.itactiv = 'Y' ) and
			( plangroup.pgtyp = 'P' )
    AND  items.itcode not like '###########%'   

UNION all 

  SELECT 2, 
			plangroup.pgtyp,   
         plangroup.pgcode,   
         plangroup.pgname as pgname,   
         items.itcode,   
         items.itname  
    FROM items,   
         plangroup  
   WHERE ( items.itmfggroup = plangroup.pgcode )   and 
			( items.itactiv = 'Y' )    and
			( plangroup.pgtyp = 'M' )
    AND  items.itcode not like '###########%'   

UNION all 

  SELECT 3, 
			plangroup.pgtyp,   
         plangroup.pgcode,   
         plangroup.pgname as pgname,   
         items.itcode,   
         items.itname  
    FROM items,   
         plangroup  
   WHERE ( items.itmfggroup = plangroup.pgcode )   and 
			( items.itactiv = 'Y' )    and
			( plangroup.pgtyp = 'N' )
    AND  items.itcode not like '###########%'   

UNION all 

  SELECT 9,
			'N',   
         0,   
         'Sans groupe fusion',   
         items.itcode,   
         items.itname  
    FROM items 
   WHERE (items.ittyp = 'M' ) and 
			( items.itmfggroup is null )  and 
			( items.itactiv = 'Y' )  
    AND  items.itcode not like '###########%'   

UNION all 

  SELECT 9,
			'M',   
         0,   
         'Sans Fab campagne',   
         items.itcode,   
         items.itname  
    FROM items 
   WHERE (items.ittyp = 'M' ) and 
			( items.itplgroup is null )   and 
			( items.itactiv = 'Y' ) 
    AND  items.itcode not like '###########%'   

UNION all 

  SELECT 9,
			'P',   
         0,   
         'Sans Achat groupé',   
         items.itcode,   
         items.itname  
    FROM items 
   WHERE (items.ittyp in ('P', 'C') ) and 
			( items.
```

## Colonnes
| Colonne |
|---------|
| compute_0001 |
| plangroup_pgtyp |
| plangroup_pgcode |
| plangroup_pgname |
| items_itcode |
| items_itname |

