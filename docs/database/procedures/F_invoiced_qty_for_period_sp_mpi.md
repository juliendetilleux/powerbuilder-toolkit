# Function: F_invoiced_qty_for_period_sp_mpi

## Type
Function stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| @Sel_period2 | char(6 | IN |

## Retourne
`numeric(14,3)`

## Source
```sql
create FUNCTION DBA.F_invoiced_qty_for_period_sp_mpi( in @Sel_period2 char(6) , in @itcode varchar(12))
	RETURNS numeric(14,3)
	DETERMINISTIC
	BEGIN
		DECLARE p2invoiced_qty numeric(21,3);

			select sum(yqs_invoiced_qty) into p2invoiced_qty from
			temp_yq_sales
			where
			yqs_item_code = @itcode and
			yqs_accounting_period = @Sel_period2 and
			yqs_invoiceline_type in (  'I', 'C' );
				
				
		RETURN p2invoiced_qty;
	END
```
