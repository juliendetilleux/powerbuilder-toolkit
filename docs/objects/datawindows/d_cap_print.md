# d_cap_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT  wcplan.wpwccode , 
          workcenters.wcname , 
          wcplan.wpdat , 
          wcplan.wpmacavail , 
          wcplan.wpmacrun , 
          wccal.wkordno , 
          wccal.wkmacreq , 
          matplannew.mpitem , 
          matplannew.mpplduedat     
        FROM wcplan , 
          wccal , 
          workcenters , 
          matplannew     
        WHERE ( workcenters.wccode = wccal.wkcode ) and 
         ( workcenters.wccode = wcplan.wpwccode ) and 
         ( wccal.wkcode = wcplan.wpwccode ) and 
         ( wccal.wkdate = wcplan.wpdat ) and 
         ( matplannew.mpordno = wccal.wkordno )  
        ORDER BY wcplan.wpwccode          ASC, 
          wcplan.wpdat          ASC  
```

## Colonnes
| Colonne |
|---------|
| wcplan_wpwccode |
| workcenters_wcname |
| wcplan_wpdat |
| wcplan_wpmacavail |
| wcplan_wpmacrun |
| wccal_wkordno |
| wccal_wkmacreq |
| matplannew_mpitem |
| matplannew_mpplduedat |

