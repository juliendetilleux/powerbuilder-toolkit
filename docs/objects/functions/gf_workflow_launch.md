# gf_workflow_launch

- **Module**: `_sales_crm` (CRM - Gestion de la relation client)
- **Signature**: `long gf_workflow_launch(integer ai_head, integer ai_seq, string as_adcode, string as_user_act_prec, date ad_date, long al_aacode, long al_fileref, long al_fileline, string as_aacomment)`
- **Description**: Lance un workflow CRM

## Parametres

| Param | Type | Description |
|-------|------|-------------|
| `ai_head` | `integer` | Entier - head |
| `ai_seq` | `integer` | Entier - seq |
| `as_adcode` | `string` | Chaine - adcode |
| `as_user_act_prec` | `string` | Chaine - user act prec |
| `ad_date` | `date` | Date/decimal - date |
| `al_aacode` | `long` | Valeur long - aacode |
| `al_fileref` | `long` | Valeur long - fileref |
| `al_fileline` | `long` | Valeur long - fileline |
| `as_aacomment` | `string` | Chaine - aacomment |

## Appele par

- `gf_workflow` (_sales_crm)
- `w_crm_action_group` (_sales_crm)
- `w_devis` (_devis)
- `w_dvi_offer_launch` (_devis)

## Appelle

- `dberrormsg`
- `gf_workflow`
- `gf_workflow_seqsearch`
- `messagebox`

