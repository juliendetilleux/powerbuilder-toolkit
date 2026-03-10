# d_qry_salhead_export

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
	  SELECT salhead.shcode,
			(select salesman.smname from salesman where salesman.smcode = salhead.shsalesman ) as salesman_name,
				adresses.adname,   
			left( trim( adresses.adloc ), 2 )  as dpt,
			 dateformat( salhead.shdatcrea, 'YYYY/MM/DD' ) as date_crea,   
			 dateformat( salhead.shdatcrea, 'YYYY/MM/DD' )  as  date_encodage,
			 dateformat( isnull( salhead.shdateprintprep, salhead.shdatcrea ), 'YYYY/MM/DD' )  as  date_print_prepcmd,
			dateformat( ( select max( shiphead.shdate ) 
								 from shiphead JOIN shipline ON shipline.slcode = shiphead.shcode 
							  where shipline.slsalorder = salhead.shcode ), 'YYYY/MM/DD' ) as date_ship,
			(select count(*) from salline where salhead.shcode = salline.slcode and salline.slstatus <> '9' ) as count_salline ,
			(select count(*) from salline where salhead.shcode = salline.slcode and salline.slstatus <> '9' and isnull(salline.slqtyreal,0) = 0 ) as count_rupt ,
			(select thdesc from turnhead where turnhead.thid = salhead.shturnid ) as turn ,
			( select sum( isnull( shiphead.shpalnbr, 0 ) ) 
				 from shiphead
			  where shiphead.shcode IN ( select shipline.slcode 
													from shipline
													where shipline.slsalorder = salhead.shcode ) ) as count_palette,
			0 as count_colis,
	
			'=L' + string(number(*))+'*30+'
				+ string( CAST(  isnull( ( select sum(isnull(items.itweight,0) * shipline.slqty)
												 from shipline JOIN items ON items.itcode = shipline.slitem
													JOIN salline ON salline.slcode = shipline.slsalorder AND
																	salline.slline = shipline.slsalline
												  where ( salline.slprintghost <> 'N' or salline.slprintghost is null ) and
														salhead.shcode = shipline.slsalorder ), 0 ) as numeric(12,0) ))
				  as net_weight,
	
			( select sum( ihsalval ) 
				from invoicehead
			  where invoicehead.ihcode in (select ilcode from invoiceline where ilsalorder = salhead.shcode ) ) as invoice_val_HTVA,
			cast( 0 as numeric(8,2)
```

## Colonnes
| Colonne |
|---------|
| salhead_shcode |
| salesman_name |
| adresses_adname |
| dpt |
| salhead_date_crea |
| salhead_date_encodage |
| salhead_date_print_prepcmd |
| date_ship |
| count_salline |
| count_rupt |
| turn |
| count_palette |
| count_colis |
| net_weight |
| invoice_val_htva |
| cout_envoi |
| perc_cout_envoi |
| statut_cout_env |
| delais |
| statut_rap |
| perc_ref_shipped |
| statut_rupt |
| cmnt |

