# ws_RequestedShipment

- **Type**: User Object (Non-visuel)
- **Ancetre**: nonvisualobject
- **Module**: _fedex
- **Description**: Objet d'integration FedEx

## Variables d'instance

| Variable | Type |
|----------|------|
| ShipTimestamp | datetime |
| DropoffType | long |
| ServiceType | long |
| PackagingType | long |
| ManifestDetail | ws_ShipmentManifestDetail |
| TotalWeight | ws_Weight |
| TotalInsuredValue | ws_Money |
| PreferredCurrency | string |
| ShipmentAuthorizationDetail | ws_ShipmentAuthorizationDetail |
| Shipper | ws_Party |
| Recipient | ws_Party |
| RecipientLocationNumber | string |
| Origin | ws_ContactAndAddress |
| SoldTo | ws_Party |
| ShippingChargesPayment | ws_Payment |
| SpecialServicesRequested | ws_ShipmentSpecialServicesRequested |
| ExpressFreightDetail | ws_ExpressFreightDetail |
| FreightShipmentDetail | ws_FreightShipmentDetail |
| DeliveryInstructions | string |
| VariableHandlingChargeDetail | ws_VariableHandlingChargeDetail |
| CustomsClearanceDetail | ws_CustomsClearanceDetail |
| PickupDetail | ws_PickupDetail |
| SmartPostDetail | ws_SmartPostShipmentDetail |
| BlockInsightVisibility | boolean |
| BlockInsightVisibilitySpecified | boolean |
| LabelSpecification | ws_LabelSpecification |
| ShippingDocumentSpecification | ws_ShippingDocumentSpecification |
| RateRequestTypes | long[] |
| EdtRequestType | long |
| EdtRequestTypeSpecified | boolean |
| MasterTrackingId | ws_TrackingId |
| PackageCount | string |
| ConfigurationData | ws_DangerousGoodsDetail[] |
| RequestedPackageLineItems | ws_RequestedPackageLineItem[] |

## Fonctions publiques

Aucune fonction publique definie.

## Evenements

Aucun evenement personnalise.
