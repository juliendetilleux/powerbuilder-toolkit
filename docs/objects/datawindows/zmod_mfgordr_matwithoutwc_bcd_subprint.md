# zmod_mfgordr_matwithoutwc_bcd_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT mfglallocs.mlbomqty,   
         mfglallocs.mlcomment,   
         mfglallocs.mlitem,   
         mfglallocs.mlcode,   
         mfglallocs.mlitemseq,   
         mfglallocs.mlline,   
         (SELECT Items.itname FROM Items WHERE Items.itcode = Mfglallocs.mlitem) as itname,   
         (SELECT Items.itum FROM Items WHERE Items.itcode = Mfglallocs.mlitem) as itum,
			'Sans poste de charge' as pcname   ,   
         mfglallocs.mlpalloctyp,
			( SELECT isnull(mfghead.mhdecla, '' ) FROM mfghead  WHERE mfghead.mhcode = mfglallocs.mlcode ) as MFGDECLAR
    FROM mfglallocs
   WHERE ( mfglallocs.mlcode = :an_mfghead ) and
			( mfglallocs.mlwcreqs is null ) 
ORDER BY mfglallocs.mlline ASC   

```

## Colonnes
| Colonne |
|---------|
| mlbomqty |
| mlcomment |
| mlitem |
| mlcode |
| mlitemseq |
| mlline |
| items_itname |
| items_itum |
| pcname |
| mlpalloctyp |
| mfgdeclar |

