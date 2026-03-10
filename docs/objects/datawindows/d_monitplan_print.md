# d_monitplan_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT monitplan.mpname,
		monitplan.mpcmnt,
		monitplan.mpcreadate,
		monitplan.mpcreauser,
		monitplan.mpmodifdate,
		monitplan.mpmodifuser,
		monitplan.mpactif,
		monitplanline.mlline,
		monitplanline.mltyp,
		monitplanline.mllocal, 
		monitplanline.mlequipmnt,
		monitplanline.mlsamplepoint,
		monitplanline.mlopprod,
		monitplanline.mltemp,
		monitplanline.mlwarninglimit,
		monitplanline.mlactionlimit
    FROM monitplan,
		monitplanline,
		items
   WHERE monitplan.mpcode = monitplanline.mlcode AND
		monitplan.mpcode = :al_mpcode AND
		monitplanline.mltyp = items.itcode  
ORDER BY monitplan.mpcode ASC,   
         monitplanline.mlline ASC   

```

## Colonnes
| Colonne |
|---------|
| monitplan_mpname |
| monitplan_mpcmnt |
| monitplan_mpcreadate |
| monitplan_mpcreauser |
| monitplan_mpmodifdate |
| monitplan_mpmodifuser |
| monitplan_mpactif |
| monitplanline_mlline |
| monitplanline_mltyp |
| monitplanline_mllocal |
| monitplanline_mlequipmnt |
| monitplanline_mlsamplepoint |
| monitplanline_mlopprod |
| monitplanline_mltemp |
| monitplanline_mlwarninglimit |
| monitplanline_mlactionlimit |

