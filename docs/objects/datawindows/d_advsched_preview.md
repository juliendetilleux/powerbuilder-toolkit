# d_advsched_preview

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _planning
- **Table principale**: 0

## SQL
```sql
  SELECT machine.mcid,
		machine.mcode,
		machine.mcname,
		CELLS.clname,
		cast(0 as numeric(9)) as nof,
		cast(null as varchar(1)) as  day1,
		cast(null as varchar(1)) as day2,
		cast(null as varchar(1)) as day3,
		cast(null as varchar(1)) as day4,
		cast(null as varchar(1)) as day5,
		cast(null as varchar(1)) as day6,
		cast(null as varchar(1)) as day7		
    FROM machine,
			CELLS
 WHERE machine.mcactiv = 'Y' AND
	machine.mccells = CELLS.clid
 ORDER BY CELLS.clname,
		machine.mcpriority

```

## Colonnes
| Colonne |
|---------|
| machine_mcid |
| machine_mcode |
| machine_mcname |
| cells_clname |
| nof |
| day1 |
| day2 |
| day3 |
| day4 |
| day5 |
| day6 |
| day7 |

