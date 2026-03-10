# d_of

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _cust2
- **Table principale**: 0

## SQL
```sql
select  string(mhcode) as 'of',
        mhitem as item,
        itname as itemlabel,
        mhreqqty as qtyreq,
        mhmfgqty as qtyfab,
        mhreqqty - mhmfgqty as qty,
        mhlotmfg as lot,
        itloc as loc,
        mhcmntrel as 'comment',
        mhitemseq as nbitem
from mfghead, items
where mhstatus < 8
and itcode = mhitem
and string(mhcode) = IsNull(:s_mhcode, mhcode)
```

## Colonnes
| Colonne |
|---------|
| of |
| item |
| itemlabel |
| qtyreq |
| qtyfab |
| qty |
| lot |
| loc |
| comment |
| nbitem |

