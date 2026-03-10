# d_profhead_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT profohead.phcode,   
         profohead.phcust,   
         profohead.phdate,   
         profohead.phcurr,   
         profohead.phtvaref,   
         profohead.phpaymnt,   
         profohead.phcomment,   
         profohead.phexpiry,   
         profohead.phtyptva,   
         profohead.phcurconv,   
         profohead.phpaymode,   
         profohead.phactiv,   
         profohead.phrist,   
         profohead.phesct,   
         profohead.phristval,   
         profohead.phesctval,   
         profohead.phsalval,   
         profohead.phtvaval,   
         profohead.phtotval,   
         profohead.phorderrist,
			isnull(Profohead.phmccode,'##########') as phmccode 
    FROM profohead  
   WHERE ( profohead.phcode = :a_code)    

```

## Colonnes
| Colonne |
|---------|
| phcode |
| phcust |
| phdate |
| phcurr |
| phtvaref |
| phpaymnt |
| phcomment |
| phexpiry |
| phtyptva |
| phcurconv |
| phpaymode |
| phactiv |
| phrist |
| phesct |
| phristval |
| phesctval |
| phsalval |
| phtvaval |
| phtotval |
| phorderrist |
| phmccode |

