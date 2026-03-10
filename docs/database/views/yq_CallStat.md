# Vue: yq_CallStat

## Description

Vue de requete sur les statistiques d'appels telephoniques et activites de contact.

## SQL

```sql
create view "DBA"."yq_CallStat"
  as select "callhead"."chid" as "Call_Number",
    "callhead"."chstatus" as "Call_StatusId",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'CAST' and "choiceline"."clline" = "callhead"."chstatus") as "Call_StatusName",
    cast("left"("callhead"."chstatus"/100,1) as integer) as "Call_HyperStatusId",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'CAST' and "choiceline"."clline" = "Call_hyperStatusId"*100) as "Call_HyperStatusName",
    "callhead"."chadid" as "Customer_Code",
    (select "adresses"."adname" from "DBA"."adresses" where "adresses"."adcode" = "callhead"."chadid") as "Customer_Name",
    (select "adresses"."adgrcust" from "DBA"."adresses" where "adresses"."adcode" = "callhead"."chadid") as "Customer_GroupId",
    (select "contacts"."ctname" from "DBA"."contacts" where "contacts"."ctadcode" = "callhead"."chadid" and "contacts"."ctline" = "callhead"."chctid") as "Contact_Name",
    "callhead"."chcreadat" as "Call_CreationDate",
    "isnull"("callhead"."chmanageddat","datetime"('2999-12-31')) as "Call_ManageDate",
    "isnull"("callhead"."chpreclotdat","datetime"('2999-12-31')) as "Call_EndDate",
    "callhead"."chpreclotusr" as "Call_EndUserId",
    "isnull"("callhead"."chclotdat","datetime"('2999-12-31')) as "Call_CloseDate",
    "callhead"."chclotusr" as "Call_CloseUserId",
    "callhead"."chmanagedusr" as "Call_ResponsibleId",
    "callhead"."chhandlusr" as "Call_WorkerId",
    "callhead"."chpriority" as "Call_PriorityId",
    "isnull"("callhead"."chfixend",'N') as "Call_FixEnd",
    "isnull"("callhead"."chfixenddat","datetime"('2999-12-31')) as "CallFixEndDate",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'CAPR' and "choiceline"."clline" = "callhead"."chpriority") as "Call_PriorityName",
    "callhead"."chcateg" as "Call_CategoryId",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'CACG' and "choiceline"."clline" = "callhead"."chcateg") as "Call_CategoryName",
    if(select "isnull"("choiceline"."clival1",0) from "DBA"."choiceline" where "choiceline"."clcode" = 'CACG' and "choiceline"."clline" = "callhead"."chcateg") = 1 then 'Y'
    else 'N'
    endif as "Call_CategorySLA","callhead"."chcontracttyp" as "Call_ContractTypeId",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'CACT' and "choiceline"."clline" = "callhead"."chcontracttyp") as "Call_ContractTypeName",
    "ifnull"("callhead"."chwebvisible",'Y') as "Call_WebVIsible",
    "minutes"("callhead"."chcreadat","callhead"."chpreclotdat") as "Call_Minutes_Crea2End",
    "minutes"("callhead"."chcreadat","callhead"."chmanageddat") as "Call_Minutes_Crea2Manage",
    "callhead"."chdesc" as "Call_Description",
    "callhead"."chadcmnt" as "Call_CustomerComments",
    "callhead"."chcmnt" as "Call_Comments",
    "callhead"."chorigin" as "Call_OriginId",
    (select "choiceline"."clname" from "DBA"."choiceline" where "choiceline"."clcode" = 'CAOR' and "choiceline"."clline" = "callhead"."chorigin") as "Call_OriginName",
    (select "sum"("adrsactions"."aatiming") from "DBA"."adrsactions" where "adrsactions"."aacallid" = "callhead"."chid") as "Call_Action_time"
    from "DBA"."callhead" where "callhead"."chstatus" < 999
```

## Tables source

- `adresses`
- `adrsactions`
- `callhead`
- `choiceline`
- `contacts`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `Call_Number` | Call number |
| `Call_StatusId` | Statut |
| `Call_StatusName` | Nom/designation |
| `Call_HyperStatusId` | Statut |
| `Call_HyperStatusName` | Nom/designation |
| `Customer_Code` | Code identifiant |
| `Customer_Name` | Nom/designation |
| `Customer_GroupId` | Client |
| `Contact_Name` | Nom/designation |
| `Call_CreationDate` | Date |
| `Call_ManageDate` | Date |
| `Call_EndDate` | Date |
| `Call_EndUserId` | Utilisateur |
| `Call_CloseDate` | Date |
| `Call_CloseUserId` | Utilisateur |
| `Call_ResponsibleId` | Responsable |
| `Call_WorkerId` | Call workerid |
| `Call_PriorityId` | Priorite |
| `Call_FixEnd` | Call fixend |
| `CallFixEndDate` | Date |
| `Call_PriorityName` | Nom/designation |
| `Call_CategoryId` | Call categoryid |
| `Call_CategoryName` | Nom/designation |
| `Call_CategorySLA` | Call categorysla |
| `Call_ContractTypeId` | Type |
| `Call_ContractTypeName` | Nom/designation |
| `Call_WebVIsible` | Call webvisible |
| `Call_Minutes_Crea2End` | Call minutes crea2end |
| `Call_Minutes_Crea2Manage` | Call minutes crea2manage |
| `Call_Description` | Description |
| `Call_CustomerComments` | Commentaire |
| `Call_Comments` | Commentaire |
| `Call_OriginId` | Call originid |
| `Call_OriginName` | Nom/designation |
| `Call_Action_time` | Call action time |
