# Table: srvccycle

## Description
Service/Maintenance

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| scid | numeric(6) | NO | |
| scentity | char(8) | YES | |
| scname | varchar(50) | YES | |
| scdesc | varchar(180) | YES | |
| sctype | char(1) | YES | |
| sctypfreq | char(1) | YES | |
| scfreq | numeric(4) | YES | |
| scmethod | char(1) | YES | |
| scmatcost | numeric(8,2) | YES | |
| sclabcost | numeric(8,2) | YES | |
| scothcost | numeric(8,2) | YES | |
| sclastldat | timestamp | YES | |
| sclastrdat | timestamp | YES | |
| scleadt | numeric(2) | YES | |
| scnextdat | timestamp | YES | |
| scflagsr | char(1) | YES | |
| sclastsrid | numeric(6) | YES | |
| scsrid | numeric(6) | YES | |
| sccreatdat | timestamp | YES | |
| scmoddat | timestamp | YES | |
| scmodusr | char(50) | YES | |
| sccmnt | long varchar(32767) | YES | |
| scactiv | char(1) | YES | |
| ScFamily | numeric(3) | YES | |
| sclot | char(30) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| srvcentity | srvcentity |

## Referencee par
| FK | Table enfant |
|----|-------------|
| srvccycle | srvcrqhead |

