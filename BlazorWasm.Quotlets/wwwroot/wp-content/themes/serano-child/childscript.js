jQuery(function ($) {
	$( document ).ajaxSuccess(function() {
		
		if (typeof window.vc_js === "function") {
		
			window.vc_js();
		}
	});
});