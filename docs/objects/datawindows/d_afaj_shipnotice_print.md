# d_afaj_shipnotice_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
SELECT 

transact_with_confirm.tc_id,   
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
items.itname, 
(select adname from adresses where adcode = isnull( (select lcadcode from locations where lccode = transact_with_confirm.tc_from),'##########') ) as fromadname,
(select adadr1 from adresses where adcode = isnull( (select lcadcode from locations where lccode = transact_with_confirm.tc_from),'##########') ) as fromadadr1,
(select adadr2 from adresses where adcode = isnull( (select lcadcode from locations where lccode = transact_with_confirm.tc_from),'##########') ) as fromadadr2,
(select adzip from adresses where adcode = isnull( (select lcadcode from locations where lccode = transact_with_confirm.tc_from),'##########') ) as fromadzip,
(select adloc from adresses where adcode = isnull( (select lcadcode from locations where lccode = transact_with_confirm.tc_from),'##########') ) as fromadloc,
(select adcountr from adresses where adcode = isnull( (select lcadcode from locations where lccode = transact_with_confirm.tc_from),'##########') ) as fromadcountr,
(select adname from adresses where adcode = isnull( (select lcadcode from locations where lccode = transact_with_confirm.tc_to),'##########') ) as toadname,
(select adadr1 from adresses where adcode = isnull( (select lcadcode from locations where lccode = transact_with_confirm.tc_to),'##########') ) as toadadr1,
(select adadr2 from adresses where adcode = isnull( (select lcadcode from locations where lccode = transact_with_confirm.tc_to),'##########') ) as toadadr2,
(select adzip from adresses where adc
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
| fromadname |
| fromadadr1 |
| fromadadr2 |
| fromadzip |
| fromadloc |
| fromadcountr |
| toadname |
| toadadr1 |
| toadadr2 |
| toadzip |
| toadloc |
| toadcountr |
| lotetiq |

