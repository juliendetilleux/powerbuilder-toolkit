# d_docnum_mc_invnc

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT 1 as salpur,
		MultiCo.mccode,    
         adresses.adname as info,    
         MultiCo.mclastinv,    
         cast( 0 as numeric(12,0) ) as newval,
		multico.mclastpurinv,    
         MultiCo.mclastinvnc,    
         cast( 0 as numeric(12,0) ) as newvalnc,
		multico.mclastpurinvnc        
    FROM MultiCo, adresses    
   WHERE isnull(Multico.mcactiv , 'Y') = 'Y'   
     AND isnull(MultiCo.mcintext, 'I') = 'I'
	  AND Multico.mccode = adresses.adcode    
  
UNION ALL 
 
  SELECT 2,
		MultiCo.mccode,    
         adresses.adname as info,    
         MultiCo.mclastinv,    
         cast( 0 as numeric(12,0) ) as newval,
		multico.mclastpurinv,    
         MultiCo.mclastinvnc,    
         cast( 0 as numeric(12,0) ) as newvalnc,
		multico.mclastpurinvnc      
    FROM MultiCo, adresses    
   WHERE isnull(Multico.mcactiv , 'Y') = 'Y'   
     AND isnull(MultiCo.mcintext, 'I') = 'I'
	  AND Multico.mccode = adresses.adcode    
  
ORDER BY 1 ASC , 2 ASC  

```

## Colonnes
| Colonne |
|---------|
| salpur |
| mccode |
| info |
| mclastinv |
| newval |
| mclastpurinv |
| mclastinvnc |
| newvalnc |
| mclastpurinvnc |

