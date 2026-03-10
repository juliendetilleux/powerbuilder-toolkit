# ds_userfields_def

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _system
- **Table principale**: 0

## SQL
```sql
  SELECT userfields.uflabel,   
         userfields.uffieldid,   
         userfields.uftype,   
         userfields.ufformat,   
         userfields.ufchoice,   
         userfields.ufsort,   
         userfields.ufinitval,   
         userfields.ufddlbid,   
         userfields.ufddlbtyp,   
         userfields.ufddlbdisplay,   
         userfields.ufddlbdata,   
         userfields.ufddlbobject,
	    userfields.ufactiv,
	    userfields.ufchoice_nbline ,
	    userfields.uf_show_format     
    FROM userfields  
   WHERE ( userfields.uftableid = :ras_Table ) AND  
         ( userfields.ufactiv = 'Y' OR userfields.ufactiv = 'E' )   
ORDER BY userfields.ufsort ASC   

```

## Colonnes
| Colonne |
|---------|
| uflabel |
| uffieldid |
| uftype |
| ufformat |
| ufchoice |
| ufsort |
| ufinitval |
| ufddlbid |
| ufddlbtyp |
| ufddlbdisplay |
| ufddlbdata |
| ufddlbobject |
| ufactiv |
| ufchoice_nbline |
| uf_show_format |

