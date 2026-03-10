# zd_promorate_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT promohead.phcode,   
         promohead.phname,   
         promohead.phactiv,   
         promohead.phstartdate,   
         promohead.phstopdate,   
         promohead.phrateid,   
         promohead.phdesc,   
         promoline.plitem,   
         promoline.plitstat1,   
         promoline.plitstat2,   
         promoline.pltyp,   
         promoline.plqty1,   
         promoline.plqty2,   
         promoline.pldiscpc  
    FROM promohead,   
         promoline  
   WHERE ( promoline.plcode = promohead.phcode            ) And  
         ( promohead.phrateid = :ran_rate                 ) And  
         ( promohead.phactiv = 'Y'                        ) And  
         ( promoline.plitem = :ras_item                   ) And  
         ( promoline.plitem is not Null                   )  

Union All    

  SELECT promohead.phcode,   
         promohead.phname,   
         promohead.phactiv,   
         promohead.phstartdate,   
         promohead.phstopdate,   
         promohead.phrateid,   
         promohead.phdesc,   
         promoline.plitem,   
         promoline.plitstat1,   
         promoline.plitstat2,   
         promoline.pltyp,   
         promoline.plqty1,   
         promoline.plqty2,   
         promoline.pldiscpc  
    FROM promohead,   
         promoline  
   WHERE ( promoline.plcode = promohead.phcode            ) And  
         ( promohead.phrateid = :ran_rate                 ) And  
         ( promohead.phactiv = 'Y'                        ) And  
         ( promoline.plitstat1 = :ras_itstat1             ) And  
         ( promoline.plitstat2 in ( :ras_itstat2, '*' )   ) And  
         ( promoline.plitem is Null                       )     

ORDER BY 4 ASC   

```

## Colonnes
| Colonne |
|---------|
| phcode |
| phname |
| phactiv |
| phstartdate |
| phstopdate |
| phrateid |
| phdesc |
| promoline_plitem |
| promoline_plitstat1 |
| promoline_plitstat2 |
| promoline_pltyp |
| promoline_plqty1 |
| promoline_plqty2 |
| promoline_pldiscpc |

