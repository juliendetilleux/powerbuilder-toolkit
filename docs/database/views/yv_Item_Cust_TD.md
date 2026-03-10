# Vue: yv_Item_Cust_TD

## Description

Vue des articles par client avec tarifs et remises specifiques (TD = Tarif/Discount).

## SQL

```sql
create view "DBA"."yv_Item_Cust_TD"( "Code_art",
  "Desc_art",
  "Desc_long_art",
  "Desc_art_NL",
  "Desc_art_EN",
  "Desc_art_DE",
  "Desc_art_SP",
  "Desc_art_IT",
  "Text1_art",
  "Text2_art",
  "Text3_art",
  "Text4_art",
  "Text5_art",
  "Text6_art",
  "Text7_art",
  "Text8_art",
  "Text9_art",
  "Text10_art",
  "Text1_artNL",
  "Text2_artNL",
  "Text3_artNL",
  "Text4_artNL",
  "Text5_artNL",
  "Text6_artNL",
  "Text7_artNL",
  "Text8_artNL",
  "Text9_artNL",
  "Text10_artNL",
  "Text1_artEN",
  "Text2_artEN",
  "Text3_artEN",
  "Text4_artEN",
  "Text5_artEN",
  "Text6_artEN",
  "Text7_artEN",
  "Text8_artEN",
  "Text9_artEN",
  "Text10_artEN",
  "Text1_artGE",
  "Text2_artGE",
  "Text3_artGE",
  "Text4_artGE",
  "Text5_artGE",
  "Text6_artGE",
  "Text7_artGE",
  "Text8_artGE",
  "Text9_artGE",
  "Text10_artGE",
  "Ingr",
  "InfoNutr",
  "Allergenes_presence",
  "Allergenes_traces",
  "Ingr_NL",
  "InfoNutr_NL",
  "Allergenes_presence_NL",
  "Allergenes_traces_NL",
  "Ingr_EN",
  "InfoNutr_EN",
  "Allergenes_presence_EN",
  "Allergenes_traces_EN",
  "Ingr_GE",
  "InfoNutr_GE",
  "Allergenes_presence_GE",
  "Allergenes_traces_GE",
  "Ingr_SP",
  "InfoNutr_SP",
  "Allergenes_presence_SP",
  "Allergenes_traces_SP",
  "Ingr_IT",
  "InfoNutr_IT",
  "Allergenes_presence_IT",
  "Allergenes_traces_IT",
  "Soc_code",
  "Soc_nom",
  "Lien_art_cli_DT_datemodif",
  "Lien_art_cli_DT_Ingr",
  "Lien_art_cli_DT_IfoNut",
  "Lien_art_cli_DT_Allerg",
  "Lien_art_clibase_DT_Ingr",
  "Lien_art_clibase_DT_IfoNut",
  "Lien_art_clibase_DT_Allerg",
  "Ing_sanspc",
  "Ing_avecpc",
  "Ing_avecpcexcl",
  "Ing_NL_sanspc",
  "Ing_NL_avecpc",
  "Ing_NL_avecpcexcl",
  "Ing_EN_sanspc",
  "Ing_EN_avecpc",
  "Ing_EN_avecpcexcl",
  "Ing_DE_sanspc",
  "Ing_DE_avecpc",
  "Ing_DE_avecpcexcl",
  "Ing_SP_sanspc",
  "Ing_SP_avecpc",
  "Ing_SP_avecpcexcl",
  "Ing_IT_sanspc",
  "Ing_IT_avecpc",
  "Ing_IT_avecpcexcl",
  "cmnt_art_sujet1",
  "cmnt_art_sujet2",
  "cmnt_art_sujet3",
  "cmnt_art_sujet4",
  "cmnt_art_NL_sujet1",
  "cmnt_art_NL_sujet2",
  "cmnt_art_NL_sujet3",
  "cmnt_art_NL_sujet4",
  "cmnt_art_EN_sujet1",
  "cmnt_art_EN_sujet2",
  "cmnt_art_EN_sujet3",
  "cmnt_art_EN_sujet4",
  "cmnt_art_GE_sujet1",
  "cmnt_art_GE_sujet2",
  "cmnt_art_GE_sujet3",
  "cmnt_art_GE_sujet4",
  "cmnt_art_SP_sujet1",
  "cmnt_art_SP_sujet2",
  "cmnt_art_SP_sujet3",
  "cmnt_art_SP_sujet4",
  "cmnt_art_IT_sujet1",
  "cmnt_art_IT_sujet2",
  "cmnt_art_IT_sujet3",
  "cmnt_art_IT_sujet4",
  "item_netweight",
  "item_um",
  "photo",
  "Ingr_100g",
  "InfoNutr_100g",
  "ingr_nl_100g",
  "infonutr_nl_100g",
  "ingr_en_100g",
  "infoNutr_en_100g",
  "ingr_ge_100g",
  "infoNutr_ge_100g",
  "ingr_sp_100g",
  "infonutr_sp_100g",
  "ingr_it_100g",
  "infonutr_it_100g" ) 
  as select "items"."itcode",
    "items"."itname",
    "items"."itdesc2",
    (select "itemlang"."ildesc"
      from "DBA"."itemlang"
      where "itemlang"."ilitcode" = "items"."itcode"
      and "itemlang"."illgcode" = 'NL'),
    (select "itemlang"."ildesc"
      from "DBA"."itemlang"
      where "itemlang"."ilitcode" = "items"."itcode"
      and "itemlang"."illgcode" = 'EN'),
    (select "itemlang"."ildesc"
      from "DBA"."itemlang"
      where "itemlang"."ilitcode" = "items"."itcode"
      and "itemlang"."illgcode" = 'GE'),
    (select "itemlang"."ildesc"
      from "DBA"."itemlang"
      where "itemlang"."ilitcode" = "items"."itcode"
      and "itemlang"."illgcode" = 'SP'),
    (select "itemlang"."ildesc"
      from "DBA"."itemlang"
      where "itemlang"."ilitcode" = "items"."itcode"
      and "itemlang"."illgcode" = 'IT'),
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where("comments"."cotype" = 'TECD') and(
      "comments"."cokey" = "items"."itcode") and(
      "comments"."coline" = 1) and(
      "comments"."cotab" = '1')),
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where("comments"."cotype" = 'TECD') and(
      "comments"."cokey" = "items"."itcode") and(
      "comments"."coline" = 1) and(
      "comments"."cotab" = '2')),
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where("comments"."cotype" = 'TECD') and(
      "comments"."cokey" = "items"."itcode") and(
      "comments"."coline" = 1) and(
      "comments"."cotab" = '3')),
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where("comments"."cotype" = 'TECD') and(
      "comments"."cokey" = "items"."itcode") and(
      "comments"."coline" = 1) and(
      "comments"."cotab" = '4')),
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where("comments"."cotype" = 'TECD') and(
      "comments"."cokey" = "items"."itcode") and(
      "comments"."coline" = 1) and(
      "comments"."cotab" = '5')),
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where("comments"."cotype" = 'TECD') and(
      "comments"."cokey" = "items"."itcode") and(
      "comments"."coline" = 1) and(
      "comments"."cotab" = '6')),
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where("comments"."cotype" = 'TECD') and(
      "comments"."cokey" = "items"."itcode") and(
      "comments"."coline" = 1) and(
      "comments"."cotab" = '7')),
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where("comments"."cotype" = 'TECD') and(
      "comments"."cokey" = "items"."itcode") and(
      "comments"."coline" = 1) and(
      "comments"."cotab" = '8')),
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where("comments"."cotype" = 'TECD') and(
      "comments"."cokey" = "items"."itcode") and(
      "comments"."coline" = 1) and(
      "comments"."cotab" = '9')),
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where("comments"."cotype" = 'TECD') and(
      "comments"."cokey" = "items"."itcode") and(
      "comments"."coline" = 1) and(
      "comments"."cotab" = 'A')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'NL') and(
      "comments_lang"."cotab" = '1')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'NL') and(
      "comments_lang"."cotab" = '2')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'NL') and(
      "comments_lang"."cotab" = '3')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'NL') and(
      "comments_lang"."cotab" = '4')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'NL') and(
      "comments_lang"."cotab" = '5')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'NL') and(
      "comments_lang"."cotab" = '6')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'NL') and(
      "comments_lang"."cotab" = '7')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'NL') and(
      "comments_lang"."cotab" = '8')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'NL') and(
      "comments_lang"."cotab" = '9')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'NL') and(
      "comments_lang"."cotab" = 'A')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'EN') and(
      "comments_lang"."cotab" = '1')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'EN') and(
      "comments_lang"."cotab" = '2')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'EN') and(
      "comments_lang"."cotab" = '3')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'EN') and(
      "comments_lang"."cotab" = '4')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'EN') and(
      "comments_lang"."cotab" = '5')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'EN') and(
      "comments_lang"."cotab" = '6')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'EN') and(
      "comments_lang"."cotab" = '7')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'EN') and(
      "comments_lang"."cotab" = '8')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'EN') and(
      "comments_lang"."cotab" = '9')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'EN') and(
      "comments_lang"."cotab" = 'A')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'GE') and(
      "comments_lang"."cotab" = '1')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'GE') and(
      "comments_lang"."cotab" = '2')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'GE') and(
      "comments_lang"."cotab" = '3')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'GE') and(
      "comments_lang"."cotab" = '4')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'GE') and(
      "comments_lang"."cotab" = '5')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'GE') and(
      "comments_lang"."cotab" = '6')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'GE') and(
      "comments_lang"."cotab" = '7')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'GE') and(
      "comments_lang"."cotab" = '8')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'GE') and(
      "comments_lang"."cotab" = '9')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TECD') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'GE') and(
      "comments_lang"."cotab" = 'A')),
    (select "trim"("list"(' '+"techdata"."Tddesc"+'  '
      +"DBA"."f_dectostring"(cast("techlink"."tivalue" as numeric(9,1)))
      +"choiceline"."clname" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        ,"DBA"."techdata"
        ,"DBA"."choiceline"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "choiceline"."clcode" = 'TECD') and(
      "choiceline"."clline" = "techdata"."tdum") and(
      "techdata"."tdtype" = 'I')),
    (select "trim"("list"('  '+"techdata"."Tddesc"+'  '
      +"DBA"."f_dectostring"("techlink"."tivalue")+'  '
      +"choiceline"."clname" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        ,"DBA"."techdata"
        ,"DBA"."choiceline"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "choiceline"."clcode" = 'TECD') and(
      "choiceline"."clline" = "techdata"."tdum") and(
      "techdata"."tdtype" = 'N')),
    (select "trim"("list"(' '+"techdata"."Tddesc" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        ,"DBA"."techdata"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "techdata"."tdtype" = 'A') and(
      "techlink"."tivalue" = 1)),
    (select "trim"("list"(' '+"techdata"."Tddesc" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        ,"DBA"."techdata"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "techdata"."tdtype" = 'A') and(
      "techlink"."tivalue" = 0)),
    (select "trim"("list"(' '+"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'NL'),"techdata"."Tddesc")+'  '+"DBA"."f_dectostring"(cast("techlink"."tivalue" as numeric(9,1)))+"choiceline"."clname" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        ,"DBA"."techdata"
        ,"DBA"."choiceline"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "choiceline"."clcode" = 'TECD') and(
      "choiceline"."clline" = "techdata"."tdum") and(
      "techdata"."tdtype" = 'I')),
    (select "trim"("list"(' '
      +"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'NL'),"techdata"."Tddesc")+'  '+"DBA"."f_dectostring"(cast("techlink"."tivalue" as numeric(9,1)))
      +"choiceline"."clname" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        ,"DBA"."techdata"
        ,"DBA"."choiceline"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "choiceline"."clcode" = 'TECD') and(
      "choiceline"."clline" = "techdata"."tdum") and(
      "techdata"."tdtype" = 'N')),
    (select "trim"("list"(' '
      +"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'NL'),"techdata"."Tddesc") order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        ,"DBA"."techdata"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "techdata"."tdtype" = 'A') and(
      "techlink"."tivalue" = 1)),
    (select "trim"("list"(' '
      +"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'NL'),"techdata"."Tddesc") order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        ,"DBA"."techdata"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "techdata"."tdtype" = 'A') and(
      "techlink"."tivalue" = 0)),
    (select "trim"("list"(' '+"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'EN'),"techdata"."Tddesc")+'  '+"DBA"."f_dectostring"(cast("techlink"."tivalue" as numeric(9,1)))+"choiceline"."clname" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        ,"DBA"."techdata"
        ,"DBA"."choiceline"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "choiceline"."clcode" = 'TECD') and(
      "choiceline"."clline" = "techdata"."tdum") and(
      "techdata"."tdtype" = 'I')),
    (select "trim"("list"(' '
      +"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'EN'),"techdata"."Tddesc")+'  '+"DBA"."f_dectostring"(cast("techlink"."tivalue" as numeric(9,1)))
      +"choiceline"."clname" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        ,"DBA"."techdata"
        ,"DBA"."choiceline"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "choiceline"."clcode" = 'TECD') and(
      "choiceline"."clline" = "techdata"."tdum") and(
      "techdata"."tdtype" = 'N')),
    (select "trim"("list"(' '
      +"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'EN'),"techdata"."Tddesc") order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        ,"DBA"."techdata"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "techdata"."tdtype" = 'A') and(
      "techlink"."tivalue" = 1)),
    (select "trim"("list"(' '
      +"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'EN'),"techdata"."Tddesc") order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        ,"DBA"."techdata"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "techdata"."tdtype" = 'A') and(
      "techlink"."tivalue" = 0)),
    (select "trim"("list"(' '+"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'GE'),"techdata"."Tddesc")+'  '+"DBA"."f_dectostring"(cast("techlink"."tivalue" as numeric(9,1)))+"choiceline"."clname" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        ,"DBA"."techdata"
        ,"DBA"."choiceline"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "choiceline"."clcode" = 'TECD') and(
      "choiceline"."clline" = "techdata"."tdum") and(
      "techdata"."tdtype" = 'I')),
    (select "trim"("list"(' '
      +"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'GE'),"techdata"."Tddesc")+'  '+"DBA"."f_dectostring"(cast("techlink"."tivalue" as numeric(9,1)))
      +"choiceline"."clname" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        ,"DBA"."techdata"
        ,"DBA"."choiceline"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "choiceline"."clcode" = 'TECD') and(
      "choiceline"."clline" = "techdata"."tdum") and(
      "techdata"."tdtype" = 'N')),
    (select "trim"("list"(' '
      +"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'GE'),"techdata"."Tddesc") order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        ,"DBA"."techdata"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "techdata"."tdtype" = 'A') and(
      "techlink"."tivalue" = 1)),
    (select "trim"("list"(' '
      +"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'GE'),"techdata"."Tddesc") order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        ,"DBA"."techdata"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "techdata"."tdtype" = 'A') and(
      "techlink"."tivalue" = 0)),
    (select "trim"("list"(' '+"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'SP'),"techdata"."Tddesc")+'  '+"DBA"."f_dectostring"(cast("techlink"."tivalue" as numeric(9,1)))+"choiceline"."clname" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        ,"DBA"."techdata"
        ,"DBA"."choiceline"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "choiceline"."clcode" = 'TECD') and(
      "choiceline"."clline" = "techdata"."tdum") and(
      "techdata"."tdtype" = 'I')),
    (select "trim"("list"(' '
      +"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'SP'),"techdata"."Tddesc")+'  '+"DBA"."f_dectostring"(cast("techlink"."tivalue" as numeric(9,1)))
      +"choiceline"."clname" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        ,"DBA"."techdata"
        ,"DBA"."choiceline"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "choiceline"."clcode" = 'TECD') and(
      "choiceline"."clline" = "techdata"."tdum") and(
      "techdata"."tdtype" = 'N')),
    (select "trim"("list"(' '
      +"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'SP'),"techdata"."Tddesc") order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        ,"DBA"."techdata"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "techdata"."tdtype" = 'A') and(
      "techlink"."tivalue" = 1)),
    (select "trim"("list"(' '
      +"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'SP'),"techdata"."Tddesc") order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        ,"DBA"."techdata"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "techdata"."tdtype" = 'A') and(
      "techlink"."tivalue" = 0)),
    (select "trim"("list"(' '+"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'IT'),"techdata"."Tddesc")+'  '+"DBA"."f_dectostring"(cast("techlink"."tivalue" as numeric(9,1)))+"choiceline"."clname" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        ,"DBA"."techdata"
        ,"DBA"."choiceline"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "choiceline"."clcode" = 'TECD') and(
      "choiceline"."clline" = "techdata"."tdum") and(
      "techdata"."tdtype" = 'I')),
    (select "trim"("list"(' '
      +"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'IT'),"techdata"."Tddesc")+'  '+"DBA"."f_dectostring"(cast("techlink"."tivalue" as numeric(9,1)))
      +"choiceline"."clname" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        ,"DBA"."techdata"
        ,"DBA"."choiceline"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "choiceline"."clcode" = 'TECD') and(
      "choiceline"."clline" = "techdata"."tdum") and(
      "techdata"."tdtype" = 'N')),
    (select "trim"("list"(' '
      +"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'IT'),"techdata"."Tddesc") order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        ,"DBA"."techdata"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "techdata"."tdtype" = 'A') and(
      "techlink"."tivalue" = 1)),
    (select "trim"("list"(' '
      +"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'IT'),"techdata"."Tddesc") order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        ,"DBA"."techdata"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "techdata"."tdtype" = 'A') and(
      "techlink"."tivalue" = 0)),
    "adresses"."adcode",
    "adresses"."adname",
    "linkitadtd"."ldmoddat",
    "linkitadtd"."lding",
    "linkitadtd"."ldnut",
    "linkitadtd"."ldalg",
    (select "linkitadtd"."lding"
      from "DBA"."linkitadtd"
      where "linkitadtd"."lditem" = "items"."itcode"
      and "linkitadtd"."ldadcode" = '##########'),
    (select "linkitadtd"."ldnut"
      from "DBA"."linkitadtd"
      where "linkitadtd"."lditem" = "items"."itcode"
      and "linkitadtd"."ldadcode" = '##########'),
    (select "linkitadtd"."ldalg"
      from "DBA"."linkitadtd"
      where "linkitadtd"."lditem" = "items"."itcode"
      and "linkitadtd"."ldadcode" = '##########'),
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where("comments"."cotype" = 'TDNT') and(
      "comments"."cokey" = "items"."itcode") and(
      "comments"."coline" = 1) and(
      "comments"."cotab" = '1')),
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where("comments"."cotype" = 'TDNT') and(
      "comments"."cokey" = "items"."itcode") and(
      "comments"."coline" = 1) and(
      "comments"."cotab" = '2')),
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where("comments"."cotype" = 'TDNT') and(
      "comments"."cokey" = "items"."itcode") and(
      "comments"."coline" = 1) and(
      "comments"."cotab" = '3')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TDNT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'NL') and(
      "comments_lang"."cotab" = '1')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TDNT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'NL') and(
      "comments_lang"."cotab" = '2')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TDNT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'NL') and(
      "comments_lang"."cotab" = '3')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TDNT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'EN') and(
      "comments_lang"."cotab" = '1')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TDNT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'EN') and(
      "comments_lang"."cotab" = '2')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TDNT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'EN') and(
      "comments_lang"."cotab" = '3')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TDNT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'GE') and(
      "comments_lang"."cotab" = '1')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TDNT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'GE') and(
      "comments_lang"."cotab" = '2')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TDNT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'GE') and(
      "comments_lang"."cotab" = '3')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TDNT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'SP') and(
      "comments_lang"."cotab" = '1')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TDNT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'SP') and(
      "comments_lang"."cotab" = '2')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TDNT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'SP') and(
      "comments_lang"."cotab" = '3')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TDNT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'IT') and(
      "comments_lang"."cotab" = '1')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TDNT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'IT') and(
      "comments_lang"."cotab" = '2')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'TDNT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'IT') and(
      "comments_lang"."cotab" = '3')),
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where("comments"."cotype" = 'ICMT') and(
      "comments"."cokey" = "items"."itcode") and(
      "comments"."coline" = 0) and(
      "comments"."cotab" = '1')),
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where("comments"."cotype" = 'ICMT') and(
      "comments"."cokey" = "items"."itcode") and(
      "comments"."coline" = 0) and(
      "comments"."cotab" = '2')),
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where("comments"."cotype" = 'ICMT') and(
      "comments"."cokey" = "items"."itcode") and(
      "comments"."coline" = 0) and(
      "comments"."cotab" = '3')),
    (select "comments"."cocmnt"
      from "DBA"."comments"
      where("comments"."cotype" = 'ICMT') and(
      "comments"."cokey" = "items"."itcode") and(
      "comments"."coline" = 0) and(
      "comments"."cotab" = '4')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'ICMT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'NL') and(
      "comments_lang"."cotab" = '1')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'ICMT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'NL') and(
      "comments_lang"."cotab" = '2')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'ICMT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'NL') and(
      "comments_lang"."cotab" = '3')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'ICMT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'NL') and(
      "comments_lang"."cotab" = '4')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'ICMT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'EN') and(
      "comments_lang"."cotab" = '1')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'ICMT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'EN') and(
      "comments_lang"."cotab" = '2')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'ICMT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'EN') and(
      "comments_lang"."cotab" = '3')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'ICMT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'EN') and(
      "comments_lang"."cotab" = '4')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'ICMT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'GE') and(
      "comments_lang"."cotab" = '1')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'ICMT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'GE') and(
      "comments_lang"."cotab" = '2')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'ICMT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'GE') and(
      "comments_lang"."cotab" = '3')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'ICMT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'GE') and(
      "comments_lang"."cotab" = '4')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'ICMT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'SP') and(
      "comments_lang"."cotab" = '1')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'ICMT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'SP') and(
      "comments_lang"."cotab" = '2')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'ICMT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'SP') and(
      "comments_lang"."cotab" = '3')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'ICMT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'SP') and(
      "comments_lang"."cotab" = '4')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'ICMT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'IT') and(
      "comments_lang"."cotab" = '1')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'ICMT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'IT') and(
      "comments_lang"."cotab" = '2')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'ICMT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'IT') and(
      "comments_lang"."cotab" = '3')),
    (select "comments_lang"."cocmnt"
      from "DBA"."comments_lang"
      where("comments_lang"."cotype" = 'ICMT') and(
      "comments_lang"."cokey" = "items"."itcode") and(
      "comments_lang"."colang" = 'IT') and(
      "comments_lang"."cotab" = '4')),
    "items"."itwistat",
    "items"."itum",
    (select first "docref"."drfile"
      from "DBA"."docref"
      where "docref"."drtyp" = 'I'
      and "docref"."drrefc" = "items"."itcode"
      and "docref"."drgroup2" = -99 order by 1 asc),
    (select "trim"("list"(' '+"techdata"."Tddesc"+'  '
      +"DBA"."f_dectostring"(cast("techlink"."tivalue"*if "isnull"("it2"."itwistat",0) = 0 then .1 else .1/"it2"."itwistat" endif as numeric(9,1)))
      +"choiceline"."clname" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        join "DBA"."items" as "it2" on "techlink"."tiitem" = "it2"."itcode"
        ,"DBA"."techdata"
        ,"DBA"."choiceline"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "choiceline"."clcode" = 'TECD') and(
      "choiceline"."clline" = "techdata"."tdum") and(
      "techdata"."tdtype" = 'I')) as "Ingr_100g",
    (select "trim"("list"('  '+"techdata"."Tddesc"+'  '
      +"DBA"."f_dectostring"(cast("techlink"."tivalue"*if "isnull"("it2"."itwistat",0) = 0 then .1 else .1/"it2"."itwistat" endif as numeric(9,1)))+'  '
      +"choiceline"."clname" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        join "DBA"."items" as "it2" on "techlink"."tiitem" = "it2"."itcode"
        ,"DBA"."techdata"
        ,"DBA"."choiceline"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "choiceline"."clcode" = 'TECD') and(
      "choiceline"."clline" = "techdata"."tdum") and(
      "techdata"."tdtype" = 'N')) as "InfoNutr_100g",
    (select "trim"("list"(' '+"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'NL'),"techdata"."Tddesc")+'  '+"DBA"."f_dectostring"(cast("techlink"."tivalue"*if "isnull"("it2"."itwistat",0) = 0 then .1 else .1/"it2"."itwistat" endif as numeric(9,1)))+"choiceline"."clname" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        join "DBA"."items" as "it2" on "techlink"."tiitem" = "it2"."itcode"
        ,"DBA"."techdata"
        ,"DBA"."choiceline"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "choiceline"."clcode" = 'TECD') and(
      "choiceline"."clline" = "techdata"."tdum") and(
      "techdata"."tdtype" = 'I')) as "ingr_nl_100g",
    (select "trim"("list"(' '
      +"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'NL'),"techdata"."Tddesc")+'  '+"DBA"."f_dectostring"(cast("techlink"."tivalue"*if "isnull"("it2"."itwistat",0) = 0 then .1 else .1/"it2"."itwistat" endif as numeric(9,1)))
      +"choiceline"."clname" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        join "DBA"."items" as "it2" on "techlink"."tiitem" = "it2"."itcode"
        ,"DBA"."techdata"
        ,"DBA"."choiceline"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "choiceline"."clcode" = 'TECD') and(
      "choiceline"."clline" = "techdata"."tdum") and(
      "techdata"."tdtype" = 'N')) as "infonutr_nl_100g",
    (select "trim"("list"(' '+"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'EN'),"techdata"."Tddesc")+'  '+"DBA"."f_dectostring"(cast("techlink"."tivalue"*if "isnull"("it2"."itwistat",0) = 0 then .1 else .1/"it2"."itwistat" endif as numeric(9,1)))+"choiceline"."clname" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        join "DBA"."items" as "it2" on "techlink"."tiitem" = "it2"."itcode"
        ,"DBA"."techdata"
        ,"DBA"."choiceline"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "choiceline"."clcode" = 'TECD') and(
      "choiceline"."clline" = "techdata"."tdum") and(
      "techdata"."tdtype" = 'I')) as "ingr_en_100g",
    (select "trim"("list"(' '
      +"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'EN'),"techdata"."Tddesc")+'  '+"DBA"."f_dectostring"(cast("techlink"."tivalue"*if "isnull"("it2"."itwistat",0) = 0 then .1 else .1/"it2"."itwistat" endif as numeric(9,1)))
      +"choiceline"."clname" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        join "DBA"."items" as "it2" on "techlink"."tiitem" = "it2"."itcode"
        ,"DBA"."techdata"
        ,"DBA"."choiceline"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "choiceline"."clcode" = 'TECD') and(
      "choiceline"."clline" = "techdata"."tdum") and(
      "techdata"."tdtype" = 'N')) as "infoNutr_en_100g",
    (select "trim"("list"(' '+"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'GE'),"techdata"."Tddesc")+'  '+"DBA"."f_dectostring"(cast("techlink"."tivalue"*if "isnull"("it2"."itwistat",0) = 0 then .1 else .1/"it2"."itwistat" endif as numeric(9,1)))+"choiceline"."clname" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        join "DBA"."items" as "it2" on "techlink"."tiitem" = "it2"."itcode"
        ,"DBA"."techdata"
        ,"DBA"."choiceline"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "choiceline"."clcode" = 'TECD') and(
      "choiceline"."clline" = "techdata"."tdum") and(
      "techdata"."tdtype" = 'I')) as "ingr_ge_100g",
    (select "trim"("list"(' '
      +"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'GE'),"techdata"."Tddesc")+'  '+"DBA"."f_dectostring"(cast("techlink"."tivalue"*if "isnull"("it2"."itwistat",0) = 0 then .1 else .1/"it2"."itwistat" endif as numeric(9,1)))
      +"choiceline"."clname" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        join "DBA"."items" as "it2" on "techlink"."tiitem" = "it2"."itcode"
        ,"DBA"."techdata"
        ,"DBA"."choiceline"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "choiceline"."clcode" = 'TECD') and(
      "choiceline"."clline" = "techdata"."tdum") and(
      "techdata"."tdtype" = 'N')) as "infoNutr_ge_100g",
    (select "trim"("list"(' '+"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'SP'),"techdata"."Tddesc")+'  '+"DBA"."f_dectostring"(cast("techlink"."tivalue"*if "isnull"("it2"."itwistat",0) = 0 then .1 else .1/"it2"."itwistat" endif as numeric(9,1)))+"choiceline"."clname" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        join "DBA"."items" as "it2" on "techlink"."tiitem" = "it2"."itcode"
        ,"DBA"."techdata"
        ,"DBA"."choiceline"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "choiceline"."clcode" = 'TECD') and(
      "choiceline"."clline" = "techdata"."tdum") and(
      "techdata"."tdtype" = 'I')) as "ingr_sp_100g",
    (select "trim"("list"(' '
      +"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'SP'),"techdata"."Tddesc")+'  '+"DBA"."f_dectostring"(cast("techlink"."tivalue"*if "isnull"("it2"."itwistat",0) = 0 then .1 else .1/"it2"."itwistat" endif as numeric(9,1)))
      +"choiceline"."clname" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        join "DBA"."items" as "it2" on "techlink"."tiitem" = "it2"."itcode"
        ,"DBA"."techdata"
        ,"DBA"."choiceline"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "choiceline"."clcode" = 'TECD') and(
      "choiceline"."clline" = "techdata"."tdum") and(
      "techdata"."tdtype" = 'N')) as "infonutr_sp_100g",
    (select "trim"("list"(' '+"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'IT'),"techdata"."Tddesc")+'  '+"DBA"."f_dectostring"(cast("techlink"."tivalue"*if "isnull"("it2"."itwistat",0) = 0 then .1 else .1/"it2"."itwistat" endif as numeric(9,1)))+"choiceline"."clname" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        join "DBA"."items" as "it2" on "techlink"."tiitem" = "it2"."itcode"
        ,"DBA"."techdata"
        ,"DBA"."choiceline"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "choiceline"."clcode" = 'TECD') and(
      "choiceline"."clline" = "techdata"."tdum") and(
      "techdata"."tdtype" = 'I')) as "ingr_it_100g",
    (select "trim"("list"(' '
      +"isnull"((select if "trim"("techdatalang"."tldesc") = '' then null else "techdatalang"."tldesc" endif
        from "DBA"."techdatalang" where "techdatalang"."tlcode" = "techlink"."ticode" and "techdatalang"."tllang" = 'IT'),"techdata"."Tddesc")+'  '+"DBA"."f_dectostring"(cast("techlink"."tivalue"*if "isnull"("it2"."itwistat",0) = 0 then .1 else .1/"it2"."itwistat" endif as numeric(9,1)))
      +"choiceline"."clname" order by "techdata"."tdpriority" asc))
      from "DBA"."techlink"
        join "DBA"."items" as "it2" on "techlink"."tiitem" = "it2"."itcode"
        ,"DBA"."techdata"
        ,"DBA"."choiceline"
      where("techdata"."tdcode" = "techlink"."ticode") and(
      "techlink"."tiitem" = "items"."itcode") and(
      "choiceline"."clcode" = 'TECD') and(
      "choiceline"."clline" = "techdata"."tdum") and(
      "techdata"."tdtype" = 'N')) as "infonutr_it_100g"
    from "DBA"."items" left outer join "DBA"."linkitadtd" on("linkitadtd"."lditem" = "items"."itcode")
      left outer join "DBA"."adresses" on "adresses"."adcode" = "linkitadtd"."ldadcode"
    where("items"."itactiv" = 'Y') and(
    "items"."itsale" = 'Y' or exists(select * from "DBA"."bomhead" where "bomhead"."bhcode" = "items"."itcode"))
```

## Tables source

- `adresses`
- `bomhead`
- `choiceline`
- `comments`
- `comments_lang`
- `docref`
- `f_dectostring`
- `itemlang`
- `items`
- `linkitadtd`
- `techdata`
- `techdatalang`
- `techlink`

## Colonnes

| Colonne | Description |
|---------|-------------|
| `it2` | It2 |
| `Ingr_100g` | Ingr 100g |
| `InfoNutr_100g` | Infonutr 100g |
| `ingr_nl_100g` | Ingr nl 100g |
| `infonutr_nl_100g` | Infonutr nl 100g |
| `ingr_en_100g` | Ingr en 100g |
| `infoNutr_en_100g` | Infonutr en 100g |
| `ingr_ge_100g` | Ingr ge 100g |
| `infoNutr_ge_100g` | Infonutr ge 100g |
| `ingr_sp_100g` | Ingr sp 100g |
| `infonutr_sp_100g` | Infonutr sp 100g |
| `ingr_it_100g` | Ingr it 100g |
| `infonutr_it_100g` | Infonutr it 100g |
