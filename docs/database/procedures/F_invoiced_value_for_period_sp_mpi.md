# Function: F_invoiced_value_for_period_sp_mpi

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
create FUNCTION DBA.F_invoiced_value_for_period_sp_mpi( in @Sel_period2 char(6) , in @itcode varchar(12))
	RETURNS numeric(14,3)
	DETERMINISTIC
	BEGIN
		DECLARE p2invoiced_value numeric(21,3);
			select
				sum(yqs_invoiced_value) into p2invoiced_value
			from
				temp_yq_sales
			where
				yqs_item_code = @itcode and
				yqs_accounting_period = @Sel_period2 and
				yqs_invoiceline_type in (  'I', 'C' , 'R') ;
		RETURN p2invoiced_value;
	END
```
