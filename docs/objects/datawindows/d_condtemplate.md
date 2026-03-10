# d_condtemplate

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT condtemplate.ctcode,   
         condtemplate.ctdesc,   
         condtemplate.cttarget,   
         condtemplate.ctsyntax,   
         jalons.jadesc,   
         jalons.jatype,   
         jalons.jastatus,   
         (SELECT filehead.fhdesc FROM filehead WHERE filehead.fhcode = jalons.jafileref) as fileref,   
         (SELECT fileline.fldesc FROM fileline WHERE fileline.flcode = jalons.jafileref and fileline.flline = jalons.jafileline) as fileline  
    FROM condtemplate,   
         condline,   
         jalons  
   WHERE ( condline.cltemplate = condtemplate.ctcode ) and  
         ( condline.clactiv = 'Y' )  and
         ( jalons.jacode = condline.cljalon)  

```

## Colonnes
| Colonne |
|---------|
| ctcode |
| ctdesc |
| cttarget |
| ctsyntax |
| jalons_jadesc |
| jalons_jatype |
| jalons_jastatus |
| cfileref |
| cfileline |

