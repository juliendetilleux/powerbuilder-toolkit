# Table: mfghead

## Description
Fabrication/Manufacturing

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| mhcode | numeric(6) | NO | |
| mhstatus | char(1) | NO | |
| mhitem | char(20) | NO | |
| mhrelqty | numeric(12,3) | NO | |
| mhreqqty | numeric(12,3) | NO | |
| mhreldat | timestamp | NO | |
| mhreqdat | timestamp | NO | |
| mhmfgdat | timestamp | NO | |
| mhmfgqty | numeric(12,3) | NO | |
| mhitemseq | numeric(4) | YES | |
| mhcmntrel | long varchar(32767) | YES | |
| mhlotmfg | char(30) | YES | |
| mhmalloc | numeric(11,2) | YES | |
| mhmreal | numeric(11,2) | YES | |
| mhlalloc | numeric(11,2) | YES | |
| mhlreal | numeric(11,2) | YES | |
| mhtype | char(1) | YES | |
| mhprint | char(1) | YES | |
| mhsubc | char(1) | YES | |
| mhpghid | numeric(6) | YES | |
| mhpgline | numeric(4) | YES | |
| mhbomtyp | char(1) | YES | |
| mhsalhead | numeric(6) | YES | |
| mhsalline | numeric(4) | YES | |
| mhealloc | numeric(11,2) | YES | |
| mhereal | numeric(11,2) | YES | |
| mhqcip | numeric(8) | YES | |
| mhexpdat | timestamp | YES | |
| mhlotprt | char(20) | YES | |
| mhclosdat | timestamp | YES | |
| mhfileref | numeric(4) | YES | |
| mhfileline | numeric(4) | YES | |
| mhmfgcostqty | numeric(12,4) | YES | |
| mhmfgnqualqty | numeric(12,4) | YES | |
| mhmfgcost | numeric(12,4) | YES | |
| mhdecla | char(1) | YES | |
| mhmfgqtyqty | numeric(12,4) | YES | |
| mhcustof | numeric(6) | YES | |
| mhblocked | char(1) | YES | |
| mhmcdomaker | varchar(10) | YES | |
| mhpaid | numeric(12) | NO | |
| mhqtybybatch | numeric(7,2) | NO | |
| mhrefint | varchar(60) | YES | |
| mhdlcmp | numeric(1) | YES | |
| mhfabdvrg | char(1) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| adresses | adresses |
| itemmfgh | items |

## Referencee par
| FK | Table enfant |
|----|-------------|
| mfghead | invoiceline |
| mfghead | mfgcoitem |
| mfghead | mfghbatch |
| mfghead | mfglallocs |
| mfghead | purinvline |

