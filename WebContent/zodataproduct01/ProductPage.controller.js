sap.ui.controller("zodataproduct01.ProductPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zodataproduct01.ProductPage
*/
	onInit: function() {
		
		var url = "proxy/http/122.180.87.238:8000/sap/opu/odata/SAP/ZGW_BATCH24_PRODUCT_SRV/"
        var oModel = new sap.ui.model.odata.v2.ODataModel(url);
		
		// ODataModel, V2.ODatamodel, v4.ODataModel
		this.getView().setModel(oModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zodataproduct01.ProductPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zodataproduct01.ProductPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zodataproduct01.ProductPage
*/
//	onExit: function() {
//
//	}

});