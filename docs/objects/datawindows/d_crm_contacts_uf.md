# d_crm_contacts_uf

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
  SELECT contacts.ctadcode,
			contacts.ctline,
			contacts.ctcrmuf01,
			contacts.ctcrmuf02,
			contacts.ctcrmuf03,
			contacts.ctcrmuf04,
			contacts.ctcrmuf05,
			contacts.ctcrmuf06,
			contacts.ctcrmuf07,
			contacts.ctcrmuf08,
			contacts.ctcrmuf09,
			contacts.ctcrmuf10,
			contacts.ctcrmuf11,
			contacts.ctcrmuf12,
			contacts.ctcrmuf13,
			contacts.ctcrmuf14,
			contacts.ctcrmuf15
    FROM contacts  
   WHERE contacts.ctadcode = :Selected_ad AND
		contacts.ctline = :al_ctline

 
```

## Colonnes
| Colonne |
|---------|
| ctadcode |
| ctline |
| ctcrmuf01 |
| ctcrmuf02 |
| ctcrmuf03 |
| ctcrmuf04 |
| ctcrmuf05 |
| ctcrmuf06 |
| ctcrmuf07 |
| ctcrmuf08 |
| ctcrmuf09 |
| ctcrmuf10 |
| ctcrmuf11 |
| ctcrmuf12 |
| ctcrmuf13 |
| ctcrmuf14 |
| ctcrmuf15 |

