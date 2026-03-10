# Procedure: SP_marge_per_item_ad

## Type
Procedure stockee SQL Anywhere

## Parametres
| Parametre | Type | Direction |
|-----------|------|-----------|
| @Sel_period | char (6 | IN |

## Source
```sql
create PROCEDURE DBA."SP_marge_per_item_ad"( IN @Sel_period char (6), @Sel_period2 char (6) , @Sel_filtre_item varchar(30), @Sel_filtre_adresse varchar(30) )
	RESULT( item_code varchar(12), item_name char(30), adcode char(10), adname CHAR(30), invoiced_qty_p1 numeric (17,7), invoiced_value_p1 numeric (17,7), purchase_value_p1 numeric (17,7), yqs_ilorval numeric(17,7), yqs_lotcode char(30), yqs_salaux_p1 numeric(12,4) )
	BEGIN
		declare @pkid numeric(9,0); --001
		  declare @invoice_id numeric(9,0); --002
		  declare @invoice_number numeric(12); --003
		  declare @invoicer_id varchar(10); --bonus
		  declare @invoicer_name char(30); --004
		  declare @document_type char(10); --005
		  declare @invoice_currency char(3); --006
		  declare @invoice_date date; --007
		  declare @invoice_expiry_date date; --008
		  declare @customer_code char(10); --009
		  declare @vat_type char(20); --010
		  declare @customer_name char(30); --011
		  declare @customer_address_1 char(30); --012
		  declare @customer_address_2 char(30); --013
		  declare @customer_zip char(10); --014
		  declare @customer_location char(25); --015
		  declare @customer_country char(2); --016
		  declare @customer_zone_id numeric(3,0); --017
		  declare @customer_zone_name varchar(20); --018
		  declare @customer_group char(5); --019
		  declare @customer_groupname varchar(30); --020
		  declare @salesman char(8); --021
		  declare @invoiceline_type char(1); --022
		  declare @item_code varchar(12); --023
		  declare @item_name char(30); --024
		  declare @item_group_id char(2); --0items.itcode
		  declare @item_group_name char(20); --026
		  declare @item_subgroup_id char(2); --027
		  declare @item_subgroup_name char(20); --028
		  declare @invoiced_qty numeric(14,3); --029
		  declare @item_unit char(2); --030
		  declare @invoiced_value_currency numeric(10,2); --031
		  declare @invoiced_value numeric(21,7); --032
		  declare @vat_level numeric(6,4); --033
		  declare @account_number char(12); --034
		  declare @shipto_name char(30); --035
		  declare @shipping_id numeric(10,0); --036
		  declare @shipping_line numeric(10,0); --037
		  declare @shipping_date timestamp; --038
		  declare @sale_order_id numeric(10,0); --039
		  declare @sale_order_line numeric(10,0); --040
		  declare @project_id numeric(10,0); --041
		  declare @project_name char(50); --042
		  declare @project_familly varchar(50); --043
		  declare @subproject_id numeric(10,0); --044
		  declare @subproject_name char(50); --045
		  declare @customer_activity varchar(20); --046
		  declare @customer_source varchar(20); --047
		  declare @customer_type varchar(20); --048
		  declare @cust_uf00 varchar(20); --049
		  declare @cust_uf01 varchar(20); --050
		  declare @cust_uf02 varchar(20); --051
		  declare @cust_uf03 varchar(20); --052
		  declare @cust_uf04 varchar(20); --053
		  declare @cust_uf05 varchar(20); --054
		  declare @cust_uf06 varchar(20); --055
		  declare @cust_uf07 varchar(20); --056
		  declare @cust
```

*Source tronquee (12332 caracteres au total)*
