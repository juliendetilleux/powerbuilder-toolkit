# d_qry_mfgmes_exp

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT distinct mfgwctests.wtcode as OF_num,   
         mfghead.mhmfgdat as OF_date,   
         mfghead.mhitem as itemcode,   
         mfgcosts.mcitem as PDC,   
         mfgcosts.mcresponsable as responsable,   
         mfgwctests.wtseq as sequ,   
         mfgwctests.wtidreplicat as replicat,   
         mfgwctests.wtdesc as description,   
         mfgwctests.wtcmnt as commentaire,   
         mfgwctests.wtthtval as val_texte_theorique,   
         mfgwctests.wtthnval_min as borne_min, 
		mfgwctests.wtthnval_max as borne_max,   
         mfgwctests.wtnval as val_numerique,   
         mfgwctests.wtum as unites,    
         mfgwctests.wtbval as val_binaire,   
         mfgwctests.wttval as val_texte,   
          isnull((select qctchoice.qcdesc from qctchoice where ( qctchoice.qcchoiceid = mfgwctests.wtchoice )  and  ( mfgwctests.wtrsltchoice = qctchoice.qcseq )),'') as choice_desc
    FROM mfgwctests,   
         mfghead,   
         mfgcosts
   WHERE ( mfghead.mhcode = mfgwctests.wtcode ) and  
         ( mfgcosts.mccode = mfgwctests.wtcode ) and  
         ( mfgwctests.wtline = mfgcosts.mcseq ) and
		( mfgcosts.mctype = 'L')
```

## Colonnes
| Colonne |
|---------|
| mfgwctests_of_num |
| mfghead_of_date |
| mfghead_itemcode |
| mfgcosts_pdc |
| mfgcosts_responsable |
| mfgwctests_sequ |
| mfgwctests_replicat |
| mfgwctests_description |
| mfgwctests_commentaire |
| mfgwctests_val_texte_theorique |
| mfgwctests_borne_min |
| mfgwctests_borne_max |
| mfgwctests_val_numerique |
| mfgwctests_unites |
| mfgwctests_val_binaire |
| mfgwctests_val_texte |
| choice_desc |

