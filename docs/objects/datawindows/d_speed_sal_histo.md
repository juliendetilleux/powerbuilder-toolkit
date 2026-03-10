# d_speed_sal_histo

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  Select salhead.shcode,   
			salhead.shdatcrea, 
         sum(salline.slqtyreal * salline.slqtyinv),
			if salhead.zshinv < 0 then - salhead.zshinv else salhead.zshinv endif numfact ,
			( select ihpaydate from invoicehead where ihcode = numfact ) paydate,
			( select ihpaymode from invoicehead where ihcode = numfact ) paymode,
			( select ihtotval from invoicehead where ihcode = numfact ) factval

    From salhead,   
         salline   
   Where ( salline.slcode = salhead.shcode ) And  
         ( salline.slstatus >= '1' ) And
         ( salline.slstatus < '9' ) And
			( salhead.shcust = :ran_adresses)   
	group by salhead.shcode, salhead.shdatcrea,  paydate, paymode, numfact, factval
	order by salhead.shdatcrea desc  





```

## Colonnes
| Colonne |
|---------|
| salhead_shcode |
| salhead_shdatcrea |
| compute_0003 |
| salhead_numfact |
| cpaydate |
| cpaymode |
| cfactval |

