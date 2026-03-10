# d_of_item

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _cust2
- **Table principale**: 0

## SQL
```sql
SELECT String(B.mlcode) as 'of',
       B.mlitemseq as 'line',
       B.mlitem as 'item',
       E.itname as 'itemlabel',
       B.mllallocqty as 'qtyrep',
       B.mlpallocqty as 'totalalloc',
       C.maallocqty as 'qtyalloc',
       B.mlissuedqty as 'qty',
       B.mlcomment as 'comment',
       C.malot as 'lot',
       C.maloc as 'empl',
       D.lcdesc as 'empllabel',
		10 as 'pourcent'
FROM mfghead A, mfglallocs B LEFT OUTER JOIN matallocs C ON B.mlcode = C.macode AND B.mlitemseq = C.maitemseq LEFT OUTER JOIN locations D ON C.maloc = D.lccode, items E
where String(A.mhcode) = :s_mhcode
AND B.mlitemseq = :l_mlitemseq
and B.mlcode = A.mhcode
AND E.itcode = B.mlitem
AND B.mlstatus < 8

```

## Colonnes
| Colonne |
|---------|
| of |
| line |
| item |
| itemlabel |
| qtyrep |
| totalalloc |
| qtyalloc |
| qty |
| comment |
| lot |
| empl |
| empllabel |
| pourcent |

