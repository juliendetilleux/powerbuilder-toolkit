# d_get_command_purchase

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _cust2
- **Table principale**: 0

## SQL
```sql
SELECT items.itcode,
        purline.plcode,   
         items.itname,   
         items.itleadtime,   
         items.itactiv,   
         items.ittyp,   
         items.itsale,
			items.itstat1,
			items.itstat2,
			items.itdesc2,
			items.itcat,
			items.itum,
			items.itlot,   
         cast(null as integer) as change_color,
        itloc as emplacement_default,
        plline as ligne_cmd,
        plqtyreq as qty_uc,
        plqtyord as qty_fournisseur,
        pluomconv as unite_convertion,
        pluomord as unite_cmd,
       ITEMS.ITVAL as dlc,
		plqtyrec as qty_deja_prepare_uc,
		plqtyrec * pluomconv  as qty_deja_prepare_um,

case (select isnull(lkean1,'') from linkitad where lkitem= itcode and lktyp = 'P' and lkadcode = phsupp)
    when '' then isnull(itean,'')
    else     (select isnull(lkean1,'') from linkitad where lkitem= itcode and lktyp = 'P' and lkadcode = phsupp)
    end  as itean,
///////////////////////////////////////////////////
case (select isnull(lkean2,'') from linkitad where lkitem= itcode and lktyp = 'P' and lkadcode = phsupp)
    when '' then isnull(itean2,'')
    else     (select isnull(lkean2,'') from linkitad where lkitem= itcode and lktyp = 'P' and lkadcode = phsupp)
    end  as itean2,

case (select isnull(lkean2,'') from linkitad where lkitem= itcode and lktyp = 'P' and lkadcode = phsupp)
    when '' then isnull(itean2conv,0)
    else     isnull((select isnull(lkean2conv,0) from linkitad where lkitem= itcode and lktyp = 'P' and lkadcode = phsupp),0)
    end  as itean2conv,
////////////////////////////////////////////////////

 
case (select isnull(lkean3,'') from linkitad where lkitem= itcode and lktyp = 'P' and lkadcode = phsupp)
    when '' then isnull(itean3,'')
    else     isnull((select isnull(lkean3,'') from linkitad where lkitem= itcode and lktyp = 'P' and lkadcode = phsupp),'')
end  as itean3,

case (select isnull(lkean3,'') from linkitad where lkitem= itcode and lktyp = 'P' a
```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| purline_plcode |
| items_itname |
| items_itleadtime |
| items_itactiv |
| items_ittyp |
| items_itsale |
| items_itstat1 |
| items_itstat2 |
| items_itdesc2 |
| items_itcat |
| items_itum |
| items_itlot |
| change_color |
| items_emplacement_default |
| purline_ligne_cmd |
| purline_qty_uc |
| purline_qty_fournisseur |
| purline_unite_convertion |
| purline_unite_cmd |
| items_dlc |
| purline_qty_deja_prepare_uc |
| qty_deja_prepare_um |
| itean |
| itean2 |
| itean2conv |
| itean3 |
| itean3conv |
| scan_article |
| scan_commande |

