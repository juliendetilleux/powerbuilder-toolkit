# ds_useraccess_print

- **Type**: DataWindow
- **Style**: Composite
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT pfobjet.poid,   
         pfuseracces.pauscode,   
         if  users.ustyp = 'S' then 'X' else if pfuseracces.paautoriteg = 'Y' then 'x' else '' endif endif as useraccess  
    FROM pfobjet,   
         pfuseracces,   
         users  
   WHERE ( pfuseracces.papoid = pfobjet.poid ) and  
         ( users.uscode = pfuseracces.pauscode ) and  
         ( users.usactiv = 'Y' ) and
		( users.uscode not in ('########', 'PMIGEST' ) )

```

## Colonnes
| Colonne |
|---------|
| pfuseracces_pauscode |
| useraccess |

