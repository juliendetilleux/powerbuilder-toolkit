# d_stock_histo_head

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
SELECT itum, mllallocqty,itname, itcode, mlitemseq

FROM mfglallocs,
     matallocs,
  items

where 
     mlcode = matallocs.macode and
      mlcode = :sel_of and
      mlitemseq = :sel_line 
			AND matallocs.macode = mfglallocs.mlcode
			AND matallocs.maitemseq = mfglallocs.mlitemseq
			AND matallocs.matyp = 'M'
			AND mfglallocs.mlpalloctyp <> 'B'
and mlitem = itcode
```

## Colonnes
| Colonne |
|---------|
| items_itum |
| mfglallocs_mllallocqty |
| items_itname |
| items_itcode |
| mfglallocs_mlitemseq |

