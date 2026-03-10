# Table: salhead

## Description
Ventes/Sales

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| shcode | numeric(6) | NO | |
| shcust | char(10) | NO | |
| shcustref | char(40) | YES | |
| shcurr | char(3) | YES | |
| shstatus | char(1) | YES | |
| shdatcrea | timestamp | YES | |
| shlastline | numeric(4) | YES | |
| shdatreq | timestamp | YES | |
| shautho | char(1) | YES | |
| shcmnt | varchar(1000) | YES | |
| shdlvt | char(1) | YES | |
| shcustpay | char(1) | YES | |
| shtype | char(1) | YES | |
| shediref | varchar(35) | YES | |
| shedilink | char(1) | YES | |
| shsalesman | char(8) | YES | |
| shshipcost | char(1) | YES | |
| shdlvtplace | varchar(15) | YES | |
| shwebidhead | numeric(9) | YES | |
| shtransfered | char(1) | YES | |
| shfileref | numeric(4) | YES | |
| shfileline | numeric(4) | YES | |
| shstdcondition | numeric(6) | YES | |
| shprinted | char(1) | YES | |
| shextracosts | char(1) | YES | |
| shturnid | numeric(3) | YES | |
| shcreauser | char(50) | YES | |
| shshiptocmnt | varchar(40) | YES | |
| shedisender | varchar(13) | YES | |
| shorigin | varchar(1) | YES | |
| shdirectsal | char(1) | YES | |
| shdirsalrate | char(1) | YES | |
| shdirsalinv | char(1) | YES | |
| shpriority | numeric(3) | YES | |
| shpreparator | char(50) | YES | |
| shcons | char(1) | YES | |
| shadcontact | numeric(2) | YES | |
| shmccode | varchar(10) | YES | |
| shedisaledate | timestamp | YES | |
| shbeeingmod | tinyint | YES | |
| shdateprintprep | timestamp | YES | |
| shprsalegroup_modalloc | numeric(1) | YES | |
| sh_etiqtrsp_saturday | numeric(1) | NO | |
| sh_etiqtrsp_signed | numeric(1) | NO | |
| sh_etiqtrsp_insured | numeric(1) | NO | |
| sh_etiqtrsp_2presentation | numeric(1) | NO | |
| sh_etiqtrsp_reminder | numeric(1) | NO | |
| sh_etiqtrsp_nextday | numeric(1) | NO | |
| sh_etiqtrsp_recieved | numeric(1) | NO | |
| sh_etiqtrsp_COD | numeric(1) | NO | |
| shchassis | varchar(17) | YES | |
| shregistre | varchar(20) | YES | |
| shmarque | varchar(25) | YES | |
| shdatereg | timestamp | YES | |
| shkm | numeric(6) | YES | |
| shmgnl | char(13) | YES | |
| shsendwms | char(1) | YES | |
| shapbinvoice | char(20) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| adresses | adresses |
| custsalh | adresses |
| filehead | filehead |

## Referencee par
| FK | Table enfant |
|----|-------------|
| salhead | ETI_BPOST |
| salhead | ETI_BPS |
| salhead | invoiceline |
| salhead | salaux |
| salhead | salline |

