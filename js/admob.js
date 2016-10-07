    function onDocLoad() {
        if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
            document.addEventListener('deviceready', initApp, false);
        } else {
            initApp();
        }
    }
    
    function initApp() {
        initAd();
        // display the banner at startup
        window.plugins.AdMob.createBannerView();
      
        // display the interstitial at startup
        window.plugins.AdMob.createInterstitialView();
    }
    function initAd(){
        if ( window.plugins && window.plugins.AdMob ) {
    	    var ad_units = {
				ios : {
					banner: 'ca-app-pub-8260710890108991/8505934461',
					interstitial: 'ca-app-pub-8260710890108991/3656932463'
				},
				android : {
					banner: 'ca-app-pub-8260710890108991/4634138060',
					interstitial: 'ca-app-pub-8260710890108991/3429728069'
				}
    	    };
    	    var admobid = "";
    	    if( /(android)/i.test(navigator.userAgent) ) {
    	    	admobid = ad_units.android;
    	    } else if(/(iphone|ipad)/i.test(navigator.userAgent)) {
    	    	admobid = ad_units.ios;
    	    }
            window.plugins.AdMob.setOptions( {
                publisherId: admobid.banner,
                interstitialAdId: admobid.interstitial,
                bannerAtTop: false, // set to true, to put banner at top
                overlap: false, // set to true, to allow banner overlap webview
                offsetTopBar: false, // set to true to avoid ios7 status bar overlap
                isTesting: true, // receiving test ad
                autoShow: true // auto show interstitial ad when loaded
            });
            registerAdEvents();
            
        } else {
            alert( 'admob plugin not ready' );
        }
    }
	// optional, in case respond to events
    function registerAdEvents() {
    	document.addEventListener('onReceiveAd', function(){});
        document.addEventListener('onFailedToReceiveAd', function(data){});
        document.addEventListener('onPresentAd', function(){});
        document.addEventListener('onDismissAd', function(){ });
        document.addEventListener('onLeaveToAd', function(){ });
        document.addEventListener('onReceiveInterstitialAd', function(){ });
        document.addEventListener('onPresentInterstitialAd', function(){ });
        document.addEventListener('onDismissInterstitialAd', function(){ });
    }