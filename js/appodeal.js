document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {  
var appKey = "80729c3857e25a006c7c1006fd65af2a2e03d540f22a6dce";
            Appodeal.disableLocationPermissionCheck();
            Appodeal.initialize(appKey, Appodeal.INTERSTITIAL | Appodeal.SKIPPABLE_VIDEO | Appodeal.BANNER);
            Appodeal.isLoaded(Appodeal.BANNER, function(result){});
            Appodeal.show(Appodeal.BANNER_BOTTOM);
            Appodeal.enableInterstitialCallbacks(true);

document.addEventListener('onInterstitialLoaded', function(){});
document.addEventListener('onInterstitialFailedToLoad', function(){});
document.addEventListener('onInterstitialShown', function(){});
document.addEventListener('onInterstitialClicked', function(){});
document.addEventListener('onInterstitialClosed', function(){});
}
