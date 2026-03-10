# d_condhead_filehead

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT  condhead.chcode ,
           condhead.chdesc ,
           condhead.chvalid ,
           condhead.chfileref ,
           condhead.chlevel ,
           condhead.chactiv ,
           ( select count( condline.clinvclot ) 
			  from condline 
			  where condline.clcode = condhead.chcode and 
				condline.clactiv = 'Y' and
				condline.clinvclot = 'Y' ) as invclot_count,
            condhead.chstock 
   FROM condhead  
    WHERE ( condhead.chlevel = if :ras_level is null then condhead.chlevel else :ras_level endif ) AND
			condhead.chfileref = :al_filehead
```

## Colonnes
| Colonne |
|---------|
| chcode |
| chdesc |
| chvalid |
| chfileref |
| chlevel |
| chactiv |
| invclot_count |
| chstock |

