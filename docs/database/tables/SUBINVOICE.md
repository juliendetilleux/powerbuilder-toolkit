# Table: SUBINVOICE

## Description
Sous-traitance

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| si_id | integer | NO | |
| si_subscribe_fk_SUBHEAD | integer | NO | |
| si_invoice_fk_invoicehead | numeric(6) | YES | |
| si_date_start | timestamp | NO | |
| si_date_end | timestamp | NO | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| INVOICEHEAD | invoicehead |
| SUBHEAD | SUBHEAD |

