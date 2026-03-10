# Procedure: sp_lot_q_useof

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| al_daydiff | integer | IN |

## Source
```sql
create PROCEDURE DBA."sp_lot_q_useof"( IN al_daydiff integer )
		 RESULT( lots_locode varchar(20), lots_loitem varchar(40), items_itname varchar(40), lots_loorgcode varchar(40),
		    lots_loexpdat timestamp, listof long varchar )
		BEGIN
			  SELECT distinct lots.locode,
		    		lots.loitem,
		    		items.itname,
		    		lots.loorgcode,
		    		lots.loexpdat,
		    		list( mfghead.mhcode ) as listof
		        FROM mfghead, mfglallocs, lots, items
		      WHERE mfghead.mhcode = mfglallocs.mlcode AND
		    		mfghead.mhstatus < '8' AND
		    		date(mfghead.mhreqdat) <= date(today() + isnull(al_daydiff, 0) ) AND
		    		lots.lostatus = 'Q' AND
		    		lots.loitem = mfglallocs.mlitem AND
		    		mfglallocs.mllallocqty - ( mfglallocs.mlissuedqty + ( mfglallocs.mlpallocqty - if mfglallocs.mldelalloc > mfglallocs.mlpallocqty then
                                                                                                        mfglallocs.mlpallocqty
                                                                                                    else
                                                                                                        IF mfglallocs.mldelalloc < 0 then 0 else mfglallocs.mldelalloc ENDIF
                                                                                                    endif ) ) > 0 AND
		    		lots.loitem = items.itcode
		    GROUP BY lots.locode,
		    		lots.loitem,
		    		lots.loorgcode,
		    		lots.loexpdat,
		    		items.itname ;
		END
```
