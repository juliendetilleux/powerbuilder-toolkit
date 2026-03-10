# d_stock_histo_line

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stkbarcod
- **Table principale**: 0

## SQL
```sql
SELECT malot,loorgcode,maissuedqty, lorcpoum,mllallocqty,cast (0 as decimal(6,3))

FROM mfglallocs,
     matallocs,
    lots

where 
     mlcode = matallocs.macode and
      mlcode = :sel_of and
      mlitemseq = :sel_line and
 matallocs.malot = lots.locode
			AND matallocs.macode = mfglallocs.mlcode
			AND matallocs.maitemseq = mfglallocs.mlitemseq
			AND matallocs.matyp = 'M'
			AND mfglallocs.mlpalloctyp <> 'B'
```

## Colonnes
| Colonne |
|---------|
| matallocs_malot |
| lots_loorgcode |
| matallocs_maissuedqty |
| lots_lorcpoum |
| mfglallocs_mllallocqty |
| qty_att |

