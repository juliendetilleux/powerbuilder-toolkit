# d_aftransact_reception_master

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _stock
- **Table principale**: 0

## SQL
```sql
  SELECT   distinct 
         transact_with_confirm.tc_num,   
         transact_with_confirm.tc_from,   
         transact_with_confirm.tc_to,   
         convert(char(16),transact_with_confirm.tc_date,116) as tc_date,   
         transact_with_confirm.tc_user,   
         transact_with_confirm.tc_comment,
         transact_with_confirm.tc_deleted,
		(select lcdesc from locations where lccode = transact_with_confirm.tc_to  ) desclocto,
		(select lcdesc from locations where lccode = transact_with_confirm.tc_from  ) desclocfrom
   FROM transact_with_confirm
   WHERE transact_with_confirm.tc_deleted = 'N'
order by 1 desc, 3 asc

```

## Colonnes
| Colonne |
|---------|
| transact_with_confirm_tc_num |
| transact_with_confirm_tc_from |
| transact_with_confirm_tc_to |
| transact_with_confirm_tc_date |
| transact_with_confirm_tc_user |
| transact_with_confirm_tc_comment |
| transact_with_confirm_tc_deleted |
| desclocto |
| desclocfrom |

