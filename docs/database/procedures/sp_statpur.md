# Procedure: sp_statpur

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| as_perio1_start | varchar(8 | IN |

## Source
```sql
create PROCEDURE sp_statpur( as_perio1_start varchar(8), as_perio1_stop varchar(8), as_perio2_start varchar(8), as_perio2_stop varchar(8))
    RESULT( s_item varchar(30), s_itemname varchar(60), s_supp_code varchar(20),
			s_supp_name varchar(40), d_pur_qty1 numeric(12,2), d_inv_qty1 numeric(12,2),
			d_pur_qty2 numeric(12,2), d_inv_qty2 numeric(12,2), d_pur_val1 numeric(12,2),
			d_inv_val1 numeric(12,2), d_pur_val2 numeric(12,2), d_inv_val2 numeric(12,2) )
BEGIN
	DECLARE err_notfound EXCEPTION FOR SQLSTATE '02000';
	DECLARE lb_goon numeric(1,0);
	DECLARE lb_typ_period numeric(1,0);
	DECLARE ls_locode varchar(20);
	DECLARE ld_pur_qty numeric(12,2);
	DECLARE ld_inv_qty numeric(12,2);
	DECLARE ld_pur_val numeric(12,2);
	DECLARE ld_inv_val numeric(12,2);
	DECLARE ld_sum_inv_qty numeric(12,2);
	DECLARE ld_sum_inv_val numeric(12,2);
	DECLARE ls_tmp varchar(20);
	DECLARE li_plordno integer;
	DECLARE li_plordlin integer;
	
	DECLARE ls_item varchar(30);
	DECLARE ls_itemname varchar(60);
	DECLARE ls_supp_code varchar(20);
	DECLARE ls_supp_name varchar(40);
	DECLARE ld_pur_qty1 numeric(12,2);
	DECLARE ld_inv_qty1 numeric(12,2);
	DECLARE ld_pur_qty2 numeric(12,2);
	DECLARE ld_inv_qty2 numeric(12,2);
	DECLARE ld_pur_val1 numeric(12,2);
	DECLARE ld_inv_val1 numeric(12,2);
	DECLARE ld_pur_val2 numeric(12,2);
	DECLARE ld_inv_val2 numeric(12,2);
			
	declare Cur_histolot cursor for
		SELECT DISTINCT histostock.hslot
		  FROM histostock
		 WHERE histostock.hsordno = li_plordno AND
			histostock.hsordlin = li_plordlin AND
			histostock.hsordtyp = 'P' AND
			histostock.hscode In ('RCPO','RTPO') ;
				
	declare Cur_statpur cursor for
		SELECT 1 as typ,
			purinvline.plitem,
			items.itname,
			purinvhead.pisup,
			adresses.adname,
			sum( purinvhead.pifacnot * purinvline.plqty ) purqty,
			sum( purinvline.plpurval * purinvhead.pifacnot / purinvhead.picurconv ),
			purinvline.plordno,
			purinvline.plordlin
		  FROM purinvhead
			   JOIN purinvline ON purinvhead.picode = purinvline.plcode
			   JOIN items ON purinvline.plitem = items.itcode
			   JOIN adresses ON adresses.adcode = purinvhead.pisup
		 WHERE purinvhead.picptper BETWEEN as_perio1_start and as_perio1_stop AND
			items.ittyp IN ('P', 'C', 'D') AND
			purinvline.pltype = 'S'
		GROUP BY typ, purinvline.plitem, items.itname, purinvhead.pisup, adresses.adname, purinvline.plordno, purinvline.plordlin
		UNION ALL
		SELECT 2 as typ,
			purinvline.plitem,
			items.itname,
			purinvhead.pisup,
			adresses.adname,
			sum( purinvhead.pifacnot * purinvline.plqty ) purqty,
			sum( purinvline.plpurval * purinvhead.pifacnot / purinvhead.picurconv ),
			purinvline.plordno,
			purinvline.plordlin
		  FROM purinvhead
			   JOIN purinvline ON purinvhead.picode = purinvline.plcode
			   JOIN items ON purinvline.plitem = items.itcode
			   JOIN adresses ON adresses.adcode = purinvhead.pisup
		 WHERE purinvhead.picptper BETWEEN as_perio2_start and as_perio2_stop AND
			items.ittyp IN ('P', 'C', 'D') AND
			purinvline.pltype =
```

*Source tronquee (6624 caracteres au total)*
