# d_web_salline

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: 0

## SQL
```sql
  SELECT websalline.wslcode,   
         websalline.wslline,   
         websalline.wslstatus,   
         websalline.wslitem,   
         websalline.wslqtyord,   
         websalline.wslcustref,   
         websalline.wsldatreq,   
         websalline.wslstdval,   
         websalline.wsldatcrea,   
         websalline.wslshipto,   
         websalline.wslwebidhead,   
         websalline.wslwebidline  ,
         websalline.wslorval  ,
         websalline.wslorigin ,
		 ( Select shipto.stdesc 
             From shipto 
            Where shipto.stcode = websalhead.wshcust And 
                  shipto.stseq  = websalline.wslshipto   ) shiptodesc
    FROM websalline , websalhead
   WHERE websalline.wslwebidhead = :Sel_weborder and 
			websalline.wslstatus < '3' and
			websalline.wslwebidhead = websalhead.wshwebid
				   

```

## Colonnes
| Colonne |
|---------|
| wslcode |
| wslline |
| wslstatus |
| wslitem |
| websalline_wslqtyord |
| wslcustref |
| wsldatreq |
| wslstdval |
| wsldatcrea |
| wslshipto |
| wslwebidhead |
| wslwebidline |
| websalline_wslorval |
| websalline_wslorigin |
| cshiptodesc |

