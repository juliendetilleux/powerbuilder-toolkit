# Table: salline

## Description
Ventes/Sales

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| slcode | numeric(6) | NO | |
| slline | numeric(4) | NO | |
| slitem | char(20) | NO | |
| slqtyord | numeric(10,3) | NO | |
| slqtyreq | numeric(10,3) | YES | |
| slcustref | char(40) | YES | |
| sluomord | varchar(5) | YES | |
| sluomconv | numeric(16,10) | YES | |
| sldatreq | timestamp | YES | |
| sldatship | timestamp | YES | |
| slstdval | numeric(10,4) | YES | |
| slsalval | numeric(8,2) | YES | |
| sldatplan | timestamp | YES | |
| slqtyalloc | numeric(10,3) | YES | |
| slqtyreal | numeric(10,3) | YES | |
| sldatreal | timestamp | YES | |
| slstatus | char(1) | YES | |
| sldatcrea | timestamp | YES | |
| slpallocseq | numeric(4) | YES | |
| slshipto | numeric(4) | YES | |
| slctrl | char(1) | YES | |
| slorval | numeric(10,4) | YES | |
| slrist | numeric(5,2) | YES | |
| slprorig | char(1) | YES | |
| slexfrcst | char(1) | YES | |
| sltypord | char(1) | YES | |
| slordno | numeric(6) | YES | |
| slmfgship | timestamp | YES | |
| slmfgcust | timestamp | YES | |
| slqtyinv | numeric(10,3) | YES | |
| slpreinv | char(1) | YES | |
| slcontst | char(1) | YES | |
| slsample | char(1) | YES | |
| slqtyres | numeric(10,3) | YES | |
| sldatcustreq | timestamp | YES | |
| slediref | varchar(10) | YES | |
| slcomment | long varchar(32767) | YES | |
| slwebidhead | numeric(9) | YES | |
| slwebidline | numeric(9) | YES | |
| sltransfered | char(1) | YES | |
| slstdcondition | numeric(6) | YES | |
| slpricetype | char(1) | YES | |
| slfileref | numeric(4) | YES | |
| slfileline | numeric(4) | YES | |
| slunitprice | numeric(10,4) | YES | |
| sldvihead | numeric(6) | YES | |
| sldviline | numeric(3) | YES | |
| slbaseprice | numeric(10,4) | YES | |
| slstate | char(1) | YES | |
| Slsalorder | numeric(6) | YES | |
| Slsalline | numeric(4) | YES | |
| slallocprinted | char(1) | YES | |
| slcustalloc | numeric(12,3) | YES | |
| slcustship | numeric(12,3) | YES | |
| slfinalprice | numeric(12,4) | YES | |
| slsalghost | numeric(4) | YES | |
| slprintghost | char(1) | YES | |
| slsort | numeric(4) | YES | |
| slediean | varchar(20) | YES | |
| slsddisc | numeric(11,5) | YES | |
| slvalsddisc | numeric(10,4) | YES | |
| slorigval | numeric(10,4) | YES | |
| slratehead | numeric(5) | YES | |
| slcurrconv2 | numeric(10,6) | YES | |
| slallocdate | timestamp | YES | |
| slreserved | char(1) | YES | |
| slclot | timestamp | YES | |
| slpoint | char(1) | YES | |
| slgetriscde | numeric(1) | YES | |
| slsumcde | numeric(1) | YES | |
| zslcmdgroup | varchar(50) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| itemsall | items |
| salhead | salhead |

## Referencee par
| FK | Table enfant |
|----|-------------|
| salline | colisage |
| salline | conssale |
| salline | mfgcoitemsal |
| salline | salaudit |
| salline | shipline |
| salline | SUBLINE_SAL |

