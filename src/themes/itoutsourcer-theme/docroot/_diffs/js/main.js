AUI().ready('liferay-navigation-interaction', 'liferay-sign-in-modal',
		function(A) {
			var Lang = A.Lang;
			var BODY = A.getBody();
			var WIN = A.getWin();
			var navigation = A.one('#navigation');
			if (navigation) {
				navigation.plug(Liferay.NavigationInteraction);
			}
			
			var navigationToggleBtn = A.one('#mobile-nav-icon'); // get our toggle button
			var navigationUl = A.one(Liferay.Data.NAV_SELECTOR); // get default navigation ul element
			
			if (navigationToggleBtn && navigationUl) {
			// do nothing when toggle button not present (user not signed in) or if navigation is not present
				navigationToggleBtn.on('click',function (event) {
					navigationToggleBtn.toggleClass('open');
                    navigationUl.toggleClass('open');
				});
				
				navigationUl.on('click',function (event) {
					navigationToggleBtn.toggleClass('open');
					navigationUl.toggleClass('open');
				});
			}
		});

Liferay.Portlet.ready(

/*
 * This function gets loaded after each and every portlet on the page.
 * 
 * portletId: the current portlet's id node: the Alloy Node object of the
 * current portlet
 */

function(portletId, node) {
});

Liferay.on('allPortletsReady',

/*
 * This function gets loaded when everything, including the portlets, is on the
 * page.
 */

function() {
});

