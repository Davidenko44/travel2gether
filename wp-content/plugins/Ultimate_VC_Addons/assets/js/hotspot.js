jQuery(document).ready(function(a) {
	
	if(jQuery('.cqtooltip-wrapper').find('.aio-icon-img'))
	{
		jQuery('.cqtooltip-wrapper').find('.aio-icon-img img').load(function(){
			init_tooltip();
		});
	}
	else
	{
		init_tooltip();
	}
	
	jQuery(window).load(function(){
		init_tooltip();
	});


	function init_tooltip()
	{
		jQuery('a[href="#"]').click(function(event){ 
			event.preventDefault(); 
		});
	
		a(".cqtooltip-wrapper").each(function() {
			a(this);
	
			/*var f = a(this).data("width") || 320,*/
			var g = a(this).data("opacity") || .5;
	
	
			a(".cq-tooltip", a(this)).each(function() {
	
				if(jQuery(this).find('.aio-icon-img'))
				{
					var iconHeight = jQuery(this).find('.aio-icon-img').outerHeight( true );
					var iconWidth = jQuery(this).find('.aio-icon-img').outerWidth( true );
				}
				else
				{
					var iconHeight = jQuery(this).find('.aio-icon').outerHeight( true );
					var iconWidth = jQuery(this).find('.aio-icon').outerWidth( true );
				}
	
				var y = Math.round(iconHeight / 2);
				var x = Math.round(iconWidth / 2);
	
				var h, d = a(this).data("tooltipanimation"),
					e = a(this).data("trigger") || "hover";
	
				var j = a(this).data("arrowposition") || "top";
				
				var ba = a(this).data("bubble-arrow");
	
				var ContentStyle = a(this).data("tooltip-content-style");// || false;
				var BaseStyle = a(this).data("tooltip-base-style");// || false;
	
				var k = a(this).find(".hotspot-tooltip-content").html(),
					l = 3,
					m = a(this).data("tooltip-offsety") || 0;
				
				if(j == 'top')
				{
					y = 0;
				}
				if(j == 'bottom')
				{
					y = iconHeight;
				}
				if(j == 'left')
				{
					y = -y;
					x = 0;
				}
				if(j == 'right')
				{
					x = iconWidth;
					y = -y;
				}
				
				if(/firefox/.test(navigator.userAgent.toLowerCase()))
				{
					x = 0;
					y = 0;
				}
				
		 
					a(this).tooltipster({
					content: k,
					position: j,
					offsetX: x, //l,
					offsetY: y,//0, //m,
	
					/*      Ultimate Options 
					 *---------------------------*/
					ultCustomTooltipStyle: true,
					ultContentStyle: ContentStyle,
					ultBaseStyle: BaseStyle,
					//ultContainerWidth: r,
					//ultBaseWidth: f,
					//ultPadding: pd,
	
					//ultBaseBGColor: cbgc,//"rgb(8, 187, 252)",
					//ultBaseBorderColor: cbc,//"rgb(8, 187, 252)",
	
					//ultBaseColor: cc,
	
					/*maxWidth: f,*/
					arrow: ba,
	
					//  Bubble arrow
					//arrow: true,
	
					delay: 100,
					speed: 300,
					interactive: !0,
					animation: d,
					trigger: e,
					/*positionTracker: true,*/
					/*contentAsHTML: 1,*/
					contentAsHTML: !0,
					//theme: 'tooltipster-default', //"tooltipster-" + c,
					/*minWidth: r,*/
					/*ultContainerWidth: f,*/  /* ultimate */
					/*ultContentSize: r,*/  /* ultimate */
				});
			});
		});
	}
    
});