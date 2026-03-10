# d_mult_tictrll_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _manufg
- **Table principale**: 0

## SQL
```sql
  SELECT workline.wlwkcode,   
         workline.wldat,   
         workline.wlstart,   
         workline.wlend,   
         workline.wlwrktime,   
         workline.wltyp,   
         workline.wlmfgid,   
         workline.wlwcid,   
         workline.wlopid,   
         workline.wlstatus,   
         workoper.woopdesc,   
         workline.wlfileline,   
         progparam.ppvalue,   
         workline.wlseq  ,
         cast( null as char(40)) as ~
```

## Colonnes
| Colonne |
|---------|
| workline_wlwkcode |
| workline_wldat |
| workline_wlstart |
| workline_wlend |
| workline_wlwrktime |
| workline_wltyp |
| workline_wlmfgid |
| wcidname |
| workline_wlopid |
| workline_wlstatus |
| dsfd |
| workline_wlfileline |
| progparam_ppvalue |
| workline_wlseq |
| cwcidname |
| copidname |

