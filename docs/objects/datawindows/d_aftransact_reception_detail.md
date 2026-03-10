# d_aftransact_reception_detail

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT transact_with_confirm.tc_id,   
         transact_with_confirm.tc_num,   
         transact_with_confirm.tc_line,   
         transact_with_confirm.tc_itcode,   
         transact_with_confirm.tc_locode,   
         transact_with_confirm.tc_from,   
         transact_with_confirm.tc_to,   
         transact_with_confirm.tc_qty,   
         transact_with_confirm.tc_itum,   
         transact_with_confirm.tc_date,   
         transact_with_confirm.tc_user,   
         transact_with_confirm.tc_comment,   
         transact_with_confirm.tc_typ,   
         transact_with_confirm.tc_deleted,   
         items.itname , 
			transact_with_confirm.tc_qty as qtyrec
    FROM transact_with_confirm,   
         items  
   WHERE ( items.itcode = transact_with_confirm.tc_itcode )    and transact_with_confirm.tc_num = isnull ( :an_id, 0)
order by 2 desc, 3 asc

```

## Colonnes
| Colonne |
|---------|
| transact_with_confirm_tc_id |
| transact_with_confirm_tc_num |
| transact_with_confirm_tc_line |
| transact_with_confirm_tc_itcode |
| transact_with_confirm_tc_locode |
| transact_with_confirm_tc_from |
| transact_with_confirm_tc_to |
| transact_with_confirm_tc_qty |
| transact_with_confirm_tc_itum |
| transact_with_confirm_tc_date |
| transact_with_confirm_tc_user |
| transact_with_confirm_tc_comment |
| transact_with_confirm_tc_typ |
| transact_with_confirm_tc_deleted |
| items_itname |
| transact_with_confirm_qtyrec |

