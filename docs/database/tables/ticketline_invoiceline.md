# Table: ticketline_invoiceline

## Description
Tickets/Caisse

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| tiid | integer | NO | |
| titlcode | numeric(9) | NO | |
| tithcash | char(2) | NO | |
| titlline | numeric(4) | NO | |
| tiilcode | numeric(6) | NO | |
| tiilline | numeric(4) | NO | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| invoiceline | invoiceline |
| ticketline | ticketline |

