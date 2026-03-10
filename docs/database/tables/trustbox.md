# Table: trustbox

## Description
Table metier PMIX

## Colonnes
| Colonne | Type | Nullable | Description |
|---------|------|----------|-------------|
| tb_id | integer | NO | |
| tb_item | char(20) | NO | |
| tb_portion | numeric(12,8) | NO | |
| tb_targetMarketCountryCode | varchar(2) | YES | |
| tb_currentStatus | numeric(1) | YES | |
| tb_brandName_en | varchar(100) | YES | |
| tb_brandName_fr | varchar(100) | YES | |
| tb_brandName_nl | varchar(100) | YES | |
| tb_brandName_de | varchar(100) | YES | |
| tb_nameOfInformationProvider_en | varchar(100) | YES | |
| tb_gpcCode_en | varchar(8) | YES | |
| tb_nameOfBrandOwner_en | varchar(100) | YES | |
| tb_manufacturer_en | varchar(100) | YES | |
| tb_packageSize_en | varchar(100) | YES | |
| tb_productImageThumbnailURL_en | varchar(256) | YES | |
| tb_productImageThumbnailURL_fr | varchar(256) | YES | |
| tb_productImageThumbnailURL_de | varchar(256) | YES | |
| tb_productImageThumbnailURL_nl | varchar(256) | YES | |
| tb_productImageURL_en | varchar(256) | YES | |
| tb_productImageURL_fr | varchar(256) | YES | |
| tb_productImageURL_de | varchar(256) | YES | |
| tb_productImageURL_nl | varchar(256) | YES | |
| tb_compulsoryAdditiveLabelInformation_de | varchar(512) | YES | |
| tb_compulsoryAdditiveLabelInformation_en | varchar(512) | YES | |
| tb_compulsoryAdditiveLabelInformation_fr | varchar(512) | YES | |
| tb_compulsoryAdditiveLabelInformation_nl | varchar(512) | YES | |
| tb_distributerName | varchar(100) | YES | |
| tb_instructionsForUse_de | varchar(512) | YES | |
| tb_instructionsForUse_en | varchar(512) | YES | |
| tb_instructionsForUse_fr | varchar(512) | YES | |
| tb_instructionsForUse_nl | varchar(512) | YES | |
| tb_nutritionalHealthClaim1_de | varchar(256) | YES | |
| tb_nutritionalHealthClaim1_en | varchar(256) | YES | |
| tb_nutritionalHealthClaim1_fr | varchar(256) | YES | |
| tb_nutritionalHealthClaim1_nl | varchar(256) | YES | |
| tb_nutritionalHealthClaim2_de | varchar(256) | YES | |
| tb_nutritionalHealthClaim2_en | varchar(256) | YES | |
| tb_nutritionalHealthClaim2_fr | varchar(256) | YES | |
| tb_nutritionalHealthClaim2_nl | varchar(256) | YES | |
| tb_nutritionalHealthClaim3_de | varchar(256) | YES | |
| tb_nutritionalHealthClaim3_en | varchar(256) | YES | |
| tb_nutritionalHealthClaim3_fr | varchar(256) | YES | |
| tb_nutritionalHealthClaim3_nl | varchar(256) | YES | |
| tb_nutritionalHealthClaim4_de | varchar(256) | YES | |
| tb_nutritionalHealthClaim4_en | varchar(256) | YES | |
| tb_nutritionalHealthClaim4_fr | varchar(256) | YES | |
| tb_nutritionalHealthClaim4_nl | varchar(256) | YES | |
| tb_nutritionalHealthClaim5_de | varchar(256) | YES | |
| tb_nutritionalHealthClaim5_en | varchar(256) | YES | |
| tb_nutritionalHealthClaim5_fr | varchar(256) | YES | |
| tb_nutritionalHealthClaim5_nl | varchar(256) | YES | |
| tb_nutritionalHealthClaim6_de | varchar(256) | YES | |
| tb_nutritionalHealthClaim6_en | varchar(256) | YES | |
| tb_nutritionalHealthClaim6_fr | varchar(256) | YES | |
| tb_nutritionalHealthClaim6_nl | varchar(256) | YES | |
| tb_percentageOfAlcoholByVolume | numeric(4,2) | YES | |
| tb_regulatedProductName_de | varchar(100) | YES | |
| tb_regulatedProductName_en | varchar(100) | YES | |
| tb_regulatedProductName_fr | varchar(100) | YES | |
| tb_regulatedProductName_nl | varchar(100) | YES | |
| tb_specialStorageConditions_de | varchar(256) | YES | |
| tb_specialStorageConditions_en | varchar(256) | YES | |
| tb_specialStorageConditions_fr | varchar(256) | YES | |
| tb_specialStorageConditions_nl | varchar(256) | YES | |
| tb_claimAgricultureBiologique | numeric(1) | NO | |
| tb_claimCertusLabel | numeric(1) | NO | |
| tb_claimKosher | numeric(1) | NO | |
| tb_claimBiogarantie | numeric(1) | NO | |
| tb_claimEuOrganic | numeric(1) | NO | |
| tb_claimFairtrade | numeric(1) | NO | |
| tb_claimHalal | numeric(1) | NO | |
| tb_claimOxfam | numeric(1) | NO | |
| tb_claimMeesterlyck | numeric(1) | NO | |
| tb_claimMeritus | numeric(1) | NO | |
| tb_claimMarineSteward | numeric(1) | NO | |
| tb_claimVegetarisch | numeric(1) | NO | |
| tb_householdServingSize_en | varchar(64) | YES | |
| tb_householdServingSize_fr | varchar(64) | YES | |
| tb_householdServingSize_de | varchar(64) | YES | |
| tb_householdServingSize_nl | varchar(64) | YES | |
| tb_dailyValueIntakeReference_en | varchar(64) | YES | |
| tb_dailyValueIntakeReference_fr | varchar(64) | YES | |
| tb_dailyValueIntakeReference_de | varchar(64) | YES | |
| tb_dailyValueIntakeReference_nl | varchar(64) | YES | |
| tb_servingsPerContainer_en | varchar(32) | YES | |
| tb_reference_amount | varchar(8) | YES | |

## Cles etrangeres (sortantes)
| FK | Table parente |
|----|---------------|
| items | items |

