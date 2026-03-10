# d_etiq_trsp_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT etiq_trsp.et_id,   
         etiq_trsp.et_name,   
         etiq_trsp.et_actif,   
         etiq_trsp.et_no_cust,   
         etiq_trsp.et_lastseq,   
         etiq_trsp.et_lastseq_max,   
         etiq_trsp.et_lastseq_min,   
         etiq_trsp.et_removal,   
         etiq_trsp.et_sender_mail,  
         etiq_trsp.et_recipent_mail,
	    etiq_trsp.et_mail_content,
	    etiq_trsp.et_pass,
	    etiq_trsp.et_sendergsm,
		et_typ_internationnal  
    FROM etiq_trsp   
  WHERE etiq_trsp.et_id = :al_et_id
```

## Colonnes
| Colonne |
|---------|
| et_id |
| et_name |
| et_actif |
| et_no_cust |
| et_lastseq |
| et_lastseq_max |
| et_lastseq_min |
| et_removal |
| et_sender_mail |
| et_recipent_mail |
| et_mail_content |
| et_pass |
| et_sendergsm |
| et_typ_internationnal |

