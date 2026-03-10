# ds_ifsalline

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: 0

## SQL
```sql
  SELECT salline.slcode,   
         salline.slline,   
         salline.slitem,   
         salline.slqtyord,   
         salline.slqtyreq,   
         salline.slcustref,   
         salline.sluomord,   
         salline.sluomconv,   
         salline.sldatreq,   
         salline.sldatship,   
         salline.slstdval,   
         salline.slsalval,   
         salline.sldatplan,   
         salline.slqtyalloc,   
         salline.slqtyreal,   
         salline.sldatreal,   
         salline.slstatus,   
         salline.sldatcrea,   
         salline.slpallocseq,   
         salline.slshipto,   
         salline.slctrl,   
         salline.slorval,   
         salline.slrist,   
         salline.slprorig,   
         salline.slexfrcst,   
         salline.sltypord,   
         salline.slordno,   
         salline.slmfgship,   
         salline.slmfgcust,   
         salline.slqtyinv,   
         salline.slpreinv,   
         salline.slcontst,   
         salline.slsample,   
         salline.slqtyres,   
         salline.sldatcustreq,   
         salline.slediref,   
         salline.slcomment,   
         salline.sltransfered,   
         salline.slwebidhead,   
         salline.slwebidline  
    FROM salline, items   
	WHERE salline.slitem = items.itcode and
			items.itif2trf = 'Y' and
			isnull(salline.sltransfered, 'N') <> 'Y' and
			Slstatus < '4' and
			items.ittrfsupp = :ran_TrfSupp And /*HA2171*/
			slcode = :li_shcode

```

## Colonnes
| Colonne |
|---------|
| slcode |
| slline |
| slitem |
| slqtyord |
| slqtyreq |
| slcustref |
| sluomord |
| sluomconv |
| sldatreq |
| sldatship |
| slstdval |
| slsalval |
| sldatplan |
| slqtyalloc |
| slqtyreal |
| sldatreal |
| slstatus |
| sldatcrea |
| slpallocseq |
| slshipto |
| slctrl |
| slorval |
| slrist |
| slprorig |
| slexfrcst |
| sltypord |
| slordno |
| slmfgship |
| slmfgcust |
| slqtyinv |
| slpreinv |
| slcontst |
| slsample |
| slqtyres |
| sldatcustreq |
| slediref |
| slcomment |
| sltransfered |
| slwebidhead |
| slwebidline |

