# Vue: yq_QualityControl

## Description

Vue de requete sur les controles qualite avec resultats et mesures.

## SQL

```sql
create view "DBA"."yq_QualityControl"
  as select "qcctrlhead"."qhctrlid" as "Qc_Sample_Id",
    "qcctrlhead"."qhitem" as "Item_Code",
    (select "items"."itname"
      from "DBA"."items"
      where "items"."itcode" = "qcctrlhead"."qhitem") as "Item_Name",
    "qcctrlhead"."qhtyp" as "Qc_Type_Id",
    (case "qcctrlhead"."qhtyp" when 'F' then 'MES' when 'I' then 'STOCK' when 'M' then 'IP MANUFACTURING' when 'R' then 'IP RECEPTION' when 'X' then 'IP DELIVERY' end) as "Qc_Type_Desc",
    "qcctrlhead"."qhadcode" as "Adres_Id",
    (select "adresses"."adname"
      from "DBA"."adresses"
      where "adresses"."adcode" = "qcctrlhead"."qhadcode") as "Adres_Name",
    "qcctrlhead"."qhversn" as "SpecVers_Id",
    "qcctrlhead"."qhlot" as "Lot",
    "qcctrlhead"."qhactiv" as "Activ",
    "qcctrlhead"."qhcmnt" as "Qc_Head_Comment",
    "qcctrlhead"."qhcreadat" as "Creation_Date",
    "qcctrlhead"."qhcreausr" as "Creation_User",
    (case "qcctrlhead"."qhappro" when 'E' then 'IN PROGRESS' when 'Y' then 'APPROVED' when 'N' then 'REJECTED' when 'C' then 'CANCELED' end) as "Qc_Head_Status",
    "qcctrlhead"."qhapprousr" as "Qc_Approved_User",
    "qcctrlhead"."qhapprodat" as "Qc_Approved_Date",
    "qcctrlhead"."qhordno" as "Order_Num",
    "qcctrlhead"."qhordlin" as "Order_Line",
    "qcctrlline"."qlline" as "Qc_Line_Id",
    "qcctrlline"."qlseq" as "Qc_Line_Sequence",
    "qcctrlline"."qltestid" as "Test_Id",
    "qcctrlline"."qldesc" as "Test_Desc",
    "qcctrlline"."qlmin" as "Min_Limit",
    "qcctrlline"."qlmax" as "Max_LImit",
    "qcctrlline"."qlum" as "Measure_Unit",
    "qcctrlline"."qlcmnt" as "Qc_Line_Comment",
    "qcctrlline"."qlrsltval" as "Numeric_Result",
    (case "qcctrlline"."qlrslt" when 'Y' then 'CONFORM' when 'N' then 'NOT CONFORMS' when 'E' then 'IN PROGRESS' end) as "Conform_Result",
    "qcctrlline"."qltestdat" as "Result_Entry_Date",
    "qcctrlline"."qlusrid" as "Result_Entry_User",
    (case "qcctrlline"."qlrsltrange" when '1' then 'BETWEEN MIN MAX' when '2' then 'MAX VALUE' when '3' then 'MIN VALUE' end) as "Result_Value_Type",
    (case "qcctrlline"."qlflag" when 'S' then 'FROM SPEC' when 'M' then 'MANUAL' end) as "Test_Origin",
    "qcctrlline"."qlchoiceseq" as "Choice_Result_Sequence",
    "qcctrlline"."qlchdesc" as "Choice_Result_Desc",
    "qcctrlline"."qlshowext" as "Show_External_Report",
    "qcctrlline"."qlshowsum" as "Show_Resume",
    (case "qcctrlline"."qlexectyp" when '1' then 'NONE' when '2' then 'DAYS' when '3' then 'QTY' when '4' then 'LOT COUNT' end) as "Monitoring_Type"
    from "DBA"."qcctrlhead"
      ,"DBA"."qcctrlline" where(
    "qcctrlline"."qlctrlid" = "qcctrlhead"."qhctrlid")
```

## Tables source

- `SPEC`
- `adresses`
- `items`
- `qcctrlhead`
- `qcctrlline`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `Qc_Sample_Id` | Qc sample id |
| `Item_Code` | Code identifiant |
| `Item_Name` | Nom/designation |
| `Qc_Type_Id` | Type |
| `Qc_Type_Desc` | Description |
| `Adres_Id` | Adres id |
| `Adres_Name` | Nom/designation |
| `SpecVers_Id` | Specvers id |
| `Lot` | Lot |
| `Activ` | Activ |
| `Qc_Head_Comment` | Commentaire |
| `Creation_Date` | Date |
| `Creation_User` | Utilisateur |
| `Qc_Head_Status` | Statut |
| `Qc_Approved_User` | Utilisateur |
| `Qc_Approved_Date` | Date |
| `Order_Num` | Order num |
| `Order_Line` | Numero de ligne |
| `Qc_Line_Id` | Numero de ligne |
| `Qc_Line_Sequence` | Numero de ligne |
| `Test_Id` | Test id |
| `Test_Desc` | Description |
| `Min_Limit` | Min limit |
| `Max_LImit` | Max limit |
| `Measure_Unit` | Unite |
| `Qc_Line_Comment` | Commentaire |
| `Numeric_Result` | Numeric result |
| `Conform_Result` | Conform result |
| `Result_Entry_Date` | Date |
| `Result_Entry_User` | Utilisateur |
| `Result_Value_Type` | Type |
| `Test_Origin` | Test origin |
| `Choice_Result_Sequence` | Choice result sequence |
| `Choice_Result_Desc` | Description |
| `Show_External_Report` | Show external report |
| `Show_Resume` | Show resume |
| `Monitoring_Type` | Type |
