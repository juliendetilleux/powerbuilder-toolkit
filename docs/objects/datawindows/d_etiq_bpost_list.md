# d_etiq_bpost_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
SELECT etiq_trsp.et_typ_nationnal as ProductId,
		adresses.adname as Name,
		contacts.ctname + IF trim( isnull(contacts.ctfirstname, '' )) <> '' THEN
									' ' + contacts.ctfirstname 
								ELSE
									''
								ENDIF as 'Contact Name',
		IF isnull( contacts.cttel, '' ) = '' THEN isnull( adresses.adtel, '' ) ELSE contacts.cttel ENDIF as 'Contact Phone',
		left( isnull( adresses.adadr1, '' ) +  IF trim( isnull(adresses.adadr2, '' )) <> '' THEN
											', ' + adresses.adadr2
										ELSE
											''
										ENDIF , 40) as street,
		'' as 'Street Number',
		'' as 'Box Number',
		adresses.adzip as 'Postal Code',
		adresses.adloc as City,
		adresses.adcountrid as Country,
		admain.adname as 'Sender Name',
		'' as 'Sender Contact Name',
		left( admain.adadr1 + IF trim( isnull(admain.adadr2, '' )) <> '' THEN
											', ' + admain.adadr2
										ELSE
											''
										ENDIF, 40) as 'Sender Street',
		'' as 'Sender Street Number',
		'' as 'Sender Box Number',
		admain.adzip as 'Sender Postal Code',
		admain.adloc as 'Sender City',
		( select sum( conssale.ccweight )
		    from salegroup JOIN conssale ON conssale.cpcode = salegroup.sgconssale and conssale.ccslcode = salegroup.sgsalhead 
		 where salegroup.sgkey3 = 'Y' and 
				salegroup.sgid = ETI_BPOST.EP_sgid AND
				salegroup.sgsalhead = ETI_BPOST.EP_salhead_fk_shcode ) as Weight,
		left( cast (IF trim( isnull( salhead.shcustref, '' )) <> '' THEN
						salhead.shcustref
					ELSE
						string( salhead.shcode )
					ENDIF as varchar(50) ), 50 ) as 'Customer Reference',
		'' as 'Cost Center',
		left( ETI_BPOST.EP_comments, 50 ) as 'Free Message',
		ETI_BPOST.EP_id,
		ETI_BPOST.EP_salhead_fk_shcode,
		ETI_BPOST.EP_date,
		ETI_BPOST.EP_users_fk_uscode,
		ETI_BPOST.EP_exported,
		/*international*/
		etiq_trsp.et_typ_internationnal as ProductId_international,
		'0032 '  + admain.adtel as 'Sender Contact Phone',
		admain.adcountrid as 'Sender Country',

```

## Colonnes
| Colonne |
|---------|
| productid |
| name |
| contact_name |
| contact_phone |
| street |
| street_number |
| box_number |
| postal_code |
| city |
| country |
| sender_name |
| sender_contact_name |
| sender_street |
| sender_street_number |
| sender_box_number |
| sender_postal_code |
| sender_city |
| weight |
| customer_reference |
| cost_center |
| free_message |
| eti_bpost_ep_id |
| eti_bpost_ep_salhead_fk_shcode |
| eti_bpost_ep_date |
| eti_bpost_ep_users_fk_uscode |
| eti_bpost_ep_exported |
| productid_international |
| sender_contact_phone |
| sender_country |
| parcel_info |
| parcel_content |
| parcel_value |
| parcel_return_instructions |
| salhead_shdatreq |
| adresses_adadr1 |
| adresses_adadr2 |
| admain_adadr1 |
| admain_adadr2 |
| contact_mail |
| sender_contact_mail |
| eti_bpost_ep_sgid |
| sender_longname |
| longname |

