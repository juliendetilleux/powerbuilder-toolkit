# Table: ticketline

## Description
Tickets/Caisse

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| tlcode | numeric(9) | NO | |
| tlcash | char(2) | NO | |
| tlline | numeric(4) | NO | |
| tlitem | varchar(20) | YES | |
| tlqty | numeric(10,3) | YES | |
| tlstdval | numeric(10,4) | YES | |
| tlsalval | numeric(8,2) | YES | |
| tltva | numeric(6,4) | YES | |
| tltvaval | numeric(8,2) | YES | |
| tltotval | numeric(8,2) | YES | |
| tltype | char(1) | YES | |
| tlbascost | numeric(12,4) | YES | |
| tlxtrcost | numeric(12,4) | YES | |
| tlqtypc | numeric(7) | YES | |
| tlcurrconv2 | numeric(10,6) | YES | |

## Referencee par
| FK | Table enfant |
|----|-------------|
| ticketline | ticketline_invoiceline |

