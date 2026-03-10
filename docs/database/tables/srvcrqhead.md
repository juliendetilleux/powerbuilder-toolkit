# Table: srvcrqhead

## Description
Service/Maintenance

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| srid | numeric(6) | NO | |
| srtype | char(1) | YES | |
| srentity | char(8) | YES | |
| srstatus | char(1) | YES | |
| srscid | numeric(6) | YES | |
| srname | varchar(50) | YES | |
| srdesc | varchar(180) | YES | |
| srcreatyp | char(1) | YES | |
| srcreadat | timestamp | YES | |
| srprint | char(1) | YES | |
| srcreausr | char(50) | YES | |
| srreqdat | timestamp | YES | |
| srrealdat | timestamp | YES | |
| srmatcost | numeric(8,2) | YES | |
| srlabcost | numeric(8,2) | YES | |
| srothcost | numeric(8,2) | YES | |
| srcmnt | long varchar(32767) | YES | |
| srenddat | timestamp | YES | |
| srendusr | char(50) | YES | |
| srfamily | numeric(3) | YES | |
| srlot | char(30) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| srvccycle | srvccycle |
| srvcentity | srvcentity |

## Referencee par
| FK | Table enfant |
|----|-------------|
| srvcrqhead | srvcrqlab |
| srvcrqhead | srvcrqmat |
| srvcrqhead | srvcrqoth |

