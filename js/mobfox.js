
		function onLoad() {
			if ((/(ipad|iphone|ipod|android)/i.test(navigator.userAgent))) {
				document.addEventListener('deviceready', initApp, false);
				
			} else {
				initApp();
				
			}
		}
		var ad_units = {
			ios : "40a348597e2dc81c63d908d38d00d424",
			android : "40a348597e2dc81c63d908d38d00d424"
		};
		// select the right Ad Id according to platform
		var publisherId = (/(android)/i.test(navigator.userAgent)) ? ad_units.android : ad_units.ios;
		function initApp() {
			if (! MobFox) {
				alert('MobFox plugin not ready');
				return;
			}
			registerAdEvents();
			
			MobFox.setOptions({
				// adId: publisherId,
				isTesting: true,
				// width: integer,
				// height: integer,
				position : MobFox.AD_POSITION.BOTTOM_CENTER,
				// x: integer,		// valid when set position to 0 / POS_XY
				// y: integer,		// valid when set position to 0 / POS_XY
				// autoShow: true // auto show interstitial ad when loaded, set to false if prepare/show
			});
			
			createSelectedBanner();
		}
		// optional, in case respond to events or handle error
		function registerAdEvents() {
            document.addEventListener('onAdFailLoad', function(data){ 
            	alert('error: ' + data.error + 
            			', reason: ' + data.reason + 
            			', adNetwork:' + data.adNetwork + 
            			', adType:' + data.adType + 
            			', adEvent:' + data.adEvent); // adType: 'banner' or 'interstitial'
            });
            document.addEventListener('onAdLoaded', function(data){});
            document.addEventListener('onAdPresent', function(data){});
            document.addEventListener('onAdLeaveApp', function(data){});
            document.addEventListener('onAdDismiss', function(data){});
		}
		// click button to call following functions
		function getSelectedAdSize() {
			var i = document.getElementById("adSize").selectedIndex;
			var items = document.getElementById("adSize").options;
			return items[i].value;
		}
		function getSelectedPosition() {
			var i = document.getElementById("adPosition").selectedIndex;
			var items = document.getElementById("adPosition").options;
			return parseInt(items[i].value);
		}
		function createSelectedBanner() {
			var overlap = document.getElementById('overlap').checked;
			MobFox.createBanner({
				adId : publisherId,
				overlap : overlap,
				adSize : getSelectedAdSize(),
				position : getSelectedPosition()
			});
		}
		function createBannerOfGivenSize() {
			var w = document.getElementById('w').value;
			var h = document.getElementById('h').value;
			MobFox.createBanner({
				adId : publisherId,
				width : w,
				height : h,
				position : getSelectedPosition()
			});
		}
		function showBannerAtSelectedPosition() {
			MobFox.showBanner(getSelectedPosition());
		}
		function showBannerAtGivenXY() {
			var x = document.getElementById('x').value;
			var y = document.getElementById('y').value;
			MobFox.showBannerAtXY(x, y);
		}
		function prepareInterstitial() {
			var autoshow = document.getElementById('autoshow').checked;
			var enablevideo = document.getElementById('enablevideo').checked;
			MobFox.prepareInterstitial({
				adId : publisherId,
				enableVideo : enablevideo,
				autoShow : autoshow
			});
		}
		function onResize() {
			var s = document.getElementById('sizeinfo');
			s.innerHTML = "web view: " + window.innerWidth + " x "
					+ window.innerHeight;
		}
