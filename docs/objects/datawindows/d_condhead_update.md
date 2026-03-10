# d_condhead_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT condhead.chcode,   
         condhead.chdesc,   
         condhead.chvalid,   
         condhead.chfileref,   
         condhead.chlevel,   
         condhead.chactiv,   
         condhead.chparent,   
         condhead.chsalcode,   
         condhead.chsalline  
    FROM condhead  
   WHERE ( condhead.chcode = :ran_code )    

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
| chparent |
| chsalcode |
| chsalline |

