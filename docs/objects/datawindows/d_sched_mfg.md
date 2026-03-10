# d_sched_mfg

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _planning
- **Table principale**: 0

## SQL
```sql
  SELECT schedmat.smitem,   
         schedmat.smreqdat,   
         schedmat.smordtyp,   
         schedmat.smordno,   
         schedmat.smordlin,   
         schedmat.smqty,   
         schedmat.smseq,   
         schedmat.smreldat,   
         schedmat.smrun,   
         schedmat.smaltrout,   
         items.itname,   
         items.itum,   
         schedmat.smscheddat,
         'I',
         0 mhsalhead,
         0 mhsalline 
    FROM schedmat,   
         items  
   WHERE ( items.itcode = schedmat.smitem ) and  
         ( schedmat.smordtyp in ('M', 'N') ) and
         ( schedmat.smitem <> '###########M'  )
UNION ALL
  SELECT schedmat.smitem,   
         schedmat.smreqdat,   
         schedmat.smordtyp,   
         schedmat.smordno,   
         schedmat.smordlin,   
         schedmat.smqty,   
         schedmat.smseq,   
         schedmat.smreldat,   
         schedmat.smrun,   
         schedmat.smaltrout,   
         salpline.sldesc,   
         salpline.slum,   
         schedmat.smscheddat,
         'F',  
         mfghead.mhsalhead,
         mfghead.mhsalline  
    FROM schedmat,
         mfghead,   
         salpline  
   WHERE ( salpline.slcode = mfghead.mhsalhead ) and  
         ( salpline.slline = mfghead.mhsalline ) and  
         ( mfghead.mhcode = schedmat.smordno ) and  
         ( schedmat.smordtyp = 'M' ) and
         ( schedmat.smitem = '###########M'  )
order by 7 ASC ;

```

## Colonnes
| Colonne |
|---------|
| smitem |
| smreqdat |
| smordtyp |
| smordno |
| smordlin |
| smqty |
| smseq |
| smreldat |
| smrun |
| smaltrout |
| items_itname |
| items_itum |
| schedmat_smscheddat |
| compute_0014 |
| schedmat_mhsalhead |
| schedmat_mhsalline |

