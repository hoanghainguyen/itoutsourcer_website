
$(document).ready(function() {
	setTimeout(function(){$("body").show();}, 1000); 
	
	if($("#portlet_58").length > 0 ){
		$("body").addClass("disabled-onepage-scroll");
	}
	
	var anchors = [];
	anchors.push("");
	$('#navigation a').map(function() {
		anchors.push(this.hash.substr(1, this.hash.length - 1));
	});
	
	
	$(window).load(function(){
		 // move to the index when you refresh the page
		 var hashIndex = document.location.hash.substr(1, document.location.hash.length - 1);
		 if(hashIndex && hashIndex != "") {
			 $("#content").moveTo(($.inArray(hashIndex, anchors)));
			 history.pushState( {}, document.title, "#"+hashIndex );
			 adjustMenu();
			 
		 }
		
	 });
	
	
	var aboutSection , whySection , servicesSection ,blogSection,  referencesSection ,contactSection ;
	
	
	$("section .section-content service-item").hide();
	// One Page Scroll initialization and options
	$("#content").onepage_scroll({
		sectionContainer : "section",
		loop : true,
		pagination : false,
		updateURL : true,
		keyboard: true,     
		responsiveFallback : false,
		direction: "vertical",
		anchors : anchors,
		beforeMove : function(index) {
			// :))
			if(!aboutSection){
				initView()
			}
			$("section .section-header h1").hide().removeClass("animated bounceInDown");
			
			$(".local-scroll .arrow-down").show();
			if (aboutSection.hasClass('active')) {
				aboutSection.find(".section-content").hide().removeClass("animated fadeInUp");
				$(".local-scroll .arrow-up").hide();
				$(".local-scroll .arrow-down a").attr("href", "#why-it-outsourcing-ltd");
			}
			if (whySection.hasClass('active')) {
				whySection.find(".section-content").hide().removeClass("animated fadeInUp");
				$(".local-scroll .arrow-up a").attr("href", "#about");
				$(".local-scroll .arrow-down a").attr("href", "#services");
			}
			if (servicesSection.hasClass('active')) {
				clearServiceView();
				$(".local-scroll .arrow-up a").attr("href", "#why-it-outsourcing-ltd");
				$(".local-scroll .arrow-down a").attr("href", "#references");
			}
			if (blogSection.hasClass('active')) {
				blogSection.find(".section-content").hide().removeClass("animated fadeInUp");
			}
			if (referencesSection.hasClass('active')) {
				referencesSection.find(".section-content").hide().removeClass("animated fadeInUp");
				$(".local-scroll .arrow-down").hide();
				$(".local-scroll .arrow-up a").attr("href", "#services");
				
			}
			if (contactSection.hasClass('active')) {
				contactSection.find(".contact-info").hide().removeClass("animated fadeInUp");
				contactSection.find(".maps-image").hide().removeClass("animated fadeInUp");
				$("#footer").show();
			}
		},
		afterMove : function(index) {
			if(!aboutSection){
				initView()
			}
			$("section .section-header h1").show().addClass("animated bounceInDown");
			
			$(".local-scroll .arrow-up").show();
			if (aboutSection.hasClass('active')) {
				$(".local-scroll .arrow-up").hide();
				setTimeout(function(){ aboutSection.find(".section-content").show().addClass("animated fadeInUp");}, 200);
			}
			if (whySection.hasClass('active')) {
				setTimeout(function(){whySection.find(".section-content").show().addClass("animated fadeInUp");}, 200);
			}
			if (servicesSection.hasClass('active')) {
				loadServiceView();
			}
			if (blogSection.hasClass('active')) {
				setTimeout(function(){ blogSection.find(".section-content").show().addClass("animated fadeInUp");}, 200);
			}
			if (referencesSection.hasClass('active')) {
				setTimeout(function(){ referencesSection.find(".section-content").show().addClass("animated fadeInUp");}, 200);
				
				$(".local-scroll .arrow-up").show();
			}
			if (contactSection.hasClass('active')) {
				setTimeout(function(){ contactSection.find(".contact-info").show().addClass("animated fadeInDown");}, 200);
				setTimeout(function(){ contactSection.find(".maps-image").show().addClass("animated fadeInUp");}, 200);
				$("#footer").hide();
			}
			
			adjustMenu();
		}
	});
	
	 window.onpopstate = function(event) {
		 var hashIndex = document.location.hash.substr(1, document.location.hash.length - 1);
	     if ($.inArray(hashIndex, anchors)) {
	        $("#content").moveTo($.inArray(hashIndex,anchors));
	     }
	     else {
	        $("#content").moveTo(hashIndex);
	     }
	     if (hashIndex == 'about'){
	    	 
	     }
	     
	     if (history.replaceState) {
	    	 var href = window.location.href.substr(0,window.location.href.indexOf('#')) + "#" + (hashIndex);
	         history.pushState( {}, document.title, href );
	     }
	 };
	
	// Set up nav bar
	 $(".brand").on("click touchend", function(event){
		 var currentHash = document.location.hash.substr(1, document.location.hash.length - 1);
		 //TODO: need dynamic check :)
		 if(currentHash != "about"){
			 $("#content").moveTo(1);
			 adjustMenu();
		 }
		 event.preventDefault();
	});
	 $('#navigation a').on('click touchend', function (event){
		 var hashIndex = this.hash.substr(1, this.hash.length - 1);
		 var currentHash = document.location.hash.substr(1, document.location.hash.length - 1);
		 if(hashIndex != currentHash){
			 $("#content").moveTo($.inArray(hashIndex, anchors));
			 $("#header").addClass('primary-nav-scroll');
		 }
		 
		 event.preventDefault();
	 });

	 $(".service-item").click(function(){
		 clearServiceView();
		
	 });
	 $("#web-creation").click(function(){
		 $("#web-creation-detail").show();
		 $("#web-creation-detail .services-detail-top, #web-creation-detail .services-detail-top h1, #web-creation-detail .services-detail-bottom").removeClass('animated slideOutRight').addClass('animated slideInRight').css({'opacity':'1'}).show();
		 setTimeout(function(){$("#bullets").removeClass("animated slideOutDown").show().addClass("animated slideInUp");}, 2000);
	 });
	 
	 $("#app-development").click(function(){
		 $("#app-development-detail").show();
		 $("#app-development-detail .services-detail-top, #app-development-detail .services-detail-top h1, #app-development-detail .services-detail-bottom").removeClass('animated slideOutRight').addClass('animated slideInRight').css({'opacity':'1'}).show();
		 setTimeout(function(){$("#bullets").removeClass("animated slideOutDown").show().addClass("animated slideInUp");}, 2000);
	 });
	 
	 $("#web-creation-detail .services-detail-top .icon-back").click(function(){
		 $("#web-creation-detail .services-detail-top").removeClass("slideInRight").addClass("slideOutRight");
		 $("#web-creation-detail .services-detail-bottom").removeClass("slideInRight").addClass("slideOutRight");
		 
	 });
	 
	 $("#app-development-detail .services-detail-top .icon-back").click(function(){
		 $("#app-development-detail .services-detail-top").removeClass("slideInRight").addClass("slideOutRight");
		 $("#app-development-detail .services-detail-bottom").removeClass("slideInRight").addClass("slideOutRight");
	 });
	 
	 $(".services-detail-top .icon-back").click(function(){
		 setTimeout(function(){
			 clearServiceView();
			 loadServiceView();
		 }, 500);
	 });
	 
	 function adjustMenu(){
		 $('#navigation li.active').removeClass("active");
		 var currentHash = document.location.hash.substr(1, document.location.hash.length - 1);
		 $('#navigation li a').each(function(){
			 var hash = this.hash.substr(1, this.hash.length - 1);
			 if(hash == currentHash){
				 $(this).parent("li").addClass("active");
			 }
		 });
	 }
	 
	 function initView(){
		 //TODO : get from navigation use js
		 aboutSection = $("section[data-anchor='about']")
		 whySection = $("section[data-anchor='why-it-outsourcing-ltd']");
		 servicesSection = $("section[data-anchor='services']");
		 blogSection = $("section[data-anchor='blog']");
		 referencesSection = $("section[data-anchor='references']");
		 contactSection = $("section[data-anchor='contact']");
		 
//		 $(".local-scroll .arrow-down").hide();
//		 $(".local-scroll .arrow-up").hide();
	 }
	 
	 function resetServiceView(){
	 }
	 
	 function clearServiceView(){
		 $(servicesSection).find("h1").hide().removeClass("animated bounceInDown");
		 $(".service-item").removeClass("animated fadeInLeft fadeInRight").hide();
		 $(servicesSection).find(".services-detail-wrapper").hide();
		 $(servicesSection).find(".services-detail-top, .services-detail-bottom").removeClass("animated slideInRight");
		 
		 
	 }
	 
	 var serviceView;
	 function loadServiceView(){
		 serviceView = setTimeout(function(){
			 $(servicesSection).find("h1").show().addClass("animated bounceInDown");
			$(".service-item").addClass("animated");
	        $(".web-creation").show().addClass("fadeInLeft");
	        $(".app-development").show().addClass("fadeInRight");
	    }, 300);
	 }
});