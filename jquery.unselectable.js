/*
 * jQuery unselectable
 *
 * Will Thirkettle
 *
 * Disables selection / text highlighting...
 */

(function($){

	$.fn.unselectable = function(cArgs) {
		
		var cSettings = $.extend({
			TouchSupport: false
		}, cArgs);
		
		var cCss = {
			"-moz-user-select": "none",
			"-webkit-user-select": "none",
			"user-select": "none"
		};
		
		if (cSettings.TouchSupport)
		{
			$.extend(cCss, {
				"-webkit-touch-callout": "none",
				"-webkit-tap-highlight-color": "rgba(0,0,0,0)"
			});
		}
		
		return this.each(function() {
			$(this).attr("unselectable", "on")
					.css(cCss)
					.each(function() {
						this.onselectstart = function() { return false; };
					});
		});
	};
	
})(jQuery);