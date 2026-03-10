# Procedure: sp_change_alloc

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| al_salhead_to_delalloc | integer | IN |
| al_salline_to_delalloc | integer | IN |
| al_salhead_to_addalloc | integer | IN |
| al_salline_to_addalloc | integer | IN |

## Source
```sql
create PROCEDURE sp_change_alloc(IN al_salhead_to_delalloc integer, IN al_salline_to_delalloc integer,
								IN al_salhead_to_addalloc integer, IN al_salline_to_addalloc integer)
		BEGIN
			DECLARE ls_item_to_delalloc varchar(50);
			DECLARE ls_item_to_addalloc varchar(50);
			
			//v�rifi� que  l articles a allou� et a d�sallou� sont les m�mes
			SELECT salline.slitem
			  INTO ls_item_to_delalloc
			  FROM salline
			 WHERE salline.slcode = al_salhead_to_delalloc AND
				salline.slline = al_salline_to_delalloc;
				
			if ls_item_to_delalloc is null then
				set ls_item_to_delalloc = '';
			end if;
			
			SELECT salline.slitem
			  INTO ls_item_to_addalloc
			  FROM salline
			 WHERE salline.slcode = al_salhead_to_addalloc AND
				salline.slline = al_salline_to_addalloc;
				
			if ls_item_to_addalloc is null then
				set ls_item_to_addalloc = '';
			end if;
			
			if ls_item_to_addalloc = ls_item_to_delalloc then	//on ne modifie les allocations que si c est les m�mes articles
				UPDATE matallocs
				   SET matallocs.macode = al_salhead_to_addalloc,
					matallocs.maitemseq = al_salline_to_addalloc,
					matallocs.maallocseq = isnull((select max(matallocs.maallocseq)
													 from matallocs
													where matallocs.matyp = 'X' and
														matallocs.macode = al_salhead_to_addalloc and
														matallocs.maitemseq = al_salline_to_addalloc),0) + number(*)
				 WHERE matallocs.matyp = 'X' AND
					matallocs.macode = al_salhead_to_delalloc AND
					matallocs.maitemseq = al_salline_to_delalloc ;
					
				UPDATE salline
				   SET salline.slpallocseq = isnull((select max( maallocseq )
														from matallocs
													   where matallocs.matyp = 'X' and
															matallocs.macode = salline.slcode and
															matallocs.maitemseq = salline.slline),0),
					salline.slqtyalloc = isnull((select sum( maallocqty )
														from matallocs
													   where matallocs.matyp = 'X' and
															matallocs.macode = salline.slcode and
															matallocs.maitemseq = salline.slline),0)
				 WHERE salline.slcode = al_salhead_to_addalloc AND
					salline.slline = al_salline_to_addalloc ;
					
				UPDATE salline
				   SET salline.slpallocseq = 0,
					salline.slqtyalloc = 0
				 WHERE salline.slcode = al_salhead_to_delalloc AND
					salline.slline = al_salline_to_delalloc ;
			end if;
		END
```
