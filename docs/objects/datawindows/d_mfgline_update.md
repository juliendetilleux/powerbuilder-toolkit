# d_mfgline_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT mfglallocs.mlcode,   
         mfglallocs.mlitemseq,   
         mfglallocs.mlline,   
         mfglallocs.mlstatus,   
         mfglallocs.mlitem,   
         mfglallocs.mlbomqty,   
         mfglallocs.mllallocqty,   
         mfglallocs.mlpallocqty,   
         mfglallocs.mlissuedqty,   
         mfglallocs.mlpallocseq,   
         mfglallocs.mlcomment,   
         mfglallocs.mlpalloctyp,   
         mfglallocs.mlctrl,   
         mfglallocs.mldelalloc,   
         mfglallocs.mloneemp,   
         mfglallocs.mlloc,
		(select items.ittyp from items where items.itcode = mfglallocs.mlitem ) as ittyp 
    FROM mfglallocs
   WHERE ( mfglallocs.mlcode = :Selected_order ) AND  
         ( mfglallocs.mlitemseq = :Selected_seq ) 

```

## Colonnes
| Colonne |
|---------|
| mlcode |
| mlitemseq |
| mlline |
| mlstatus |
| mlitem |
| mlbomqty |
| mllallocqty |
| mlpallocqty |
| mlissuedqty |
| mlpallocseq |
| mlcomment |
| mlpalloctyp |
| mlctrl |
| mldelalloc |
| mloneemp |
| mlloc |
| ittyp |

