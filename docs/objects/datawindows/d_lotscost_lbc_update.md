# d_lotscost_lbc_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT lots.locode,   
         lots.loitem,   
         lots.lostatus,   
         lots.loexpdat,   
         lots.loorgcode,   
         lots.lobascost,   
         lots.lostock,   
         lots.loalloc,
	    lots.lobasdate,
	    lots.lobasuser,
		lots.lorecdat
    FROM lots   
  WHERE EXISTS (select histostock.hsseq
						 from histostock
					   where histostock.hscode = 'RCPO' and
							histostock.hsordno = :al_ordno and
							histostock.hsordlin = :al_ordlin and 
							histostock.hslot = lots.locode) AND
			lots.locode <> ( select itdefaultlot from items where itcode = loitem )

```

## Colonnes
| Colonne |
|---------|
| locode |
| loitem |
| lostatus |
| loexpdat |
| loorgcode |
| lobascost |
| lostock |
| loalloc |
| lobasdate |
| lobasuser |
| lorecdat |

