# Function: F_purchase_value_for_period_sp_mpi

## Type
Function stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| @Sel_period2 | char(6 | IN |

## Retourne
`numeric(21,3)`

## Source
```sql
create FUNCTION DBA.F_purchase_value_for_period_sp_mpi(in @Sel_period2 char(6) , in @itcode varchar(12))
	RETURNS numeric(21,3)
	DETERMINISTIC
	BEGIN
		DECLARE p2purchase_value numeric(21,3);
		select
			sum	(	if isnull(yqs_lotbasecost,0) + isnull(yqs_loxtrcost,0) = 0 then
						isnull(yqs_cost,0)
					else
						isnull(yqs_lotbasecost,0) + isnull(yqs_loxtrcost,0)
					endif
					* yqs_invoiced_qty
					) into p2purchase_value
		 from
			temp_yq_sales
					where
						yqs_item_code = @itcode and
						yqs_accounting_period = @Sel_period2 and
						yqs_invoiceline_type in (  'I', 'C' ) ;
		RETURN p2purchase_value;
	END
```
