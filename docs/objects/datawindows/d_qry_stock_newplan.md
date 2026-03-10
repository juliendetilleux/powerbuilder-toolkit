# d_qry_stock_newplan

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT 'R',   
         MATREQ.MRREQDAT,   
         MATREQ.MRORIGIN,   
         -MATREQ.MRQTY  
    FROM MATREQ  
   WHERE ( MATREQ.MRITEM = :Selected_item ) AND  
         ( MATREQ.MRORIGIN <> 'R' )   
   UNION   all  
  SELECT 'P',   
         MATPLANNEW.MPPLDUEDAT,   
         MATPLANNEW.MPUSE,   
         MATPLANNEW.MPYIELD * MATPLANNEW.MPPLQTY / 100  
    FROM MATPLANNEW,   
         ITEMS  
   WHERE ( ITEMS.ITCODE = MATPLANNEW.MPITEM ) and  
         ( ( MATPLANNEW.MPITEM = :Selected_item ) AND  
         ( MATPLANNEW.MPORIGIN <> 'G' ) AND  
         ( ITEMS.ITTYP IN ('M', 'V') ) )  
   UNION    all 
  SELECT 'P',   
         MATPLANNEW.MPPLDUEDAT,   
         MATPLANNEW.MPUSE,   
         MATPLANNEW.MPPLQTY  
    FROM MATPLANNEW,   
         ITEMS  
   WHERE ( ITEMS.ITCODE = MATPLANNEW.MPITEM ) and  
         ( ( ITEMS.ITTYP = 'P' ) AND  
         ( MATPLANNEW.MPORIGIN <> 'G' ) AND  
         ( MATPLANNEW.MPITEM = :Selected_item ) )    
order by 2 asc , 3 desc, 1 desc
```

## Colonnes
| Colonne |
|---------|
| compute_0001 |
| mrreqdat |
| mrorigin |
| compute_0004 |

