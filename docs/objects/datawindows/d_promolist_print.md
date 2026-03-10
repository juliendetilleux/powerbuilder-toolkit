# d_promolist_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
select  adresses.adname as nom_client,
        adresses.adcode as code_client,
        items.itcode as code_art,
        items.itname as nom_art,
        case pltyp  
            when '2'then promoline.plqty1
            when '4'then promoline.plqty1
            else promoline.pldiscpc
        end as valeur,
        case pltyp  
            when '1' then '%' 
            when '2' then ' pour le prix de '
            when '3' then '% à partir de '
            when '4' then ' + '
            when '5' then ' prix fixe'
            when '6' then ' fixe à partir de' 
            when '7' then ' de - à partir de '
        end as type_promo,
        case pltyp  
            when '2' then plqty2
            when '3' then plqty2
            when '4' then plqty2
            when '6' then plqty2 
            when '7' then plqty2
            else ''
        end as valeur2,
        date(promohead.phstartdate) as date_début,
        date(promohead.phstopdate) as date_fin,
	    cast(promohead.phcode as char(3)) + '/' + cast(promoline.plline as char(3)) as code_promo,
        promohead.phname as nom_promo
    from promohead join promoline on promohead.phcode = promoline.plcode
            join linkadpromo on linkadpromo.lkpromo = promohead.phcode
            join adresses on linkadpromo.lkcust = adresses.adcode
            join items on promoline.plitem = items.itcode
            join choices on promoline.pltyp = choices.chcode
    where	choices.chtype = 'DISC'
			and promohead.phactiv = 'Y'
			and adresses.adcode like :as_adcode
    order by 1, 3

```

## Colonnes
| Colonne |
|---------|
| nom_client |
| code_client |
| code_art |
| nom_art |
| valeur |
| type_promo |
| valeur2 |
| date_fin |
| code_promo |
| nom_promo |

