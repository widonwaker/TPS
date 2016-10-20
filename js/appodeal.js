        function initialize() {
            var appKey = "80729c3857e25a006c7c1006fd65af2a2e03d540f22a6dce";
            Appodeal.confirm(Appodeal.SKIPPABLE_VIDEO);
            Appodeal.setLogging(true);
            Appodeal.initialize(appKey, Appodeal.INTERSTITIAL | Appodeal.SKIPPABLE_VIDEO | Appodeal.BANNER | Appodeal.REWARDED_VIDEO);
            Appodeal.enableInterstitialCallbacks(true);
            Appodeal.enableSkippableVideoCallbacks(true);
            Appodeal.enableBannerCallbacks(true);
            Appodeal.enableRewardedVideoCallbacks(true);
            registerAdEvents();
            Appodeal.show(Appodeal.BANNER_BOTTOM);    
        }
        function showInterstitial() {
            Appodeal.show(Appodeal.INTERSTITIAL, function(result) {
                console.log(result);
                if (result) {
                    console.log("Appodeal Ads Shown");
                } else {
                    console.log("Appodeal Ads Not Shown");
                }
            });
        }
        function showSkippableVideo() {
            Appodeal.isLoaded(Appodeal.SKIPPABLE_VIDEO, function(result) {
                console.log(result);
                if (result) {
                    Appodeal.show(Appodeal.SKIPPABLE_VIDEO);
                }
            });
        }
        function showRewardedVideo() {
            Appodeal.showWithPlacement(Appodeal.REWARDED_VIDEO, "rewarded_vide-Button_click");
        }
        function showBanner() {
            Appodeal.show(Appodeal.BANNER_BOTTOM);
        }
        function showInterstitialOrVideo() {
            Appodeal.show(Appodeal.INTERSTITIAL | Appodeal.SKIPPABLE_VIDEO);
        }
        function hideBanner() {
            Appodeal.hide(Appodeal.BANNER);
        }
        function registerAdEvents() {
            document.addEventListener('onInterstitialShown', function() {
                console.log('Cordova onInterstitialShown');
            });
            document.addEventListener('onInterstitialLoaded', function() {
                console.log('Cordova onInterstitialLoaded');
            });
            document.addEventListener('onInterstitialFailedToLoad', function() {
                console.log('Cordova onInterstitialFailedToLoad');
            });
            document.addEventListener('onInterstitialClosed', function() {
                console.log('Cordova onInterstitialClosed');
            });
            document.addEventListener('onInterstitialClicked', function() {
                console.log('Cordova onInterstitialClicked');
            });
            document.addEventListener('onSkippableVideoClosed', function() {
                console.log('Cordova onSkippableVideoClosed');
            });
            document.addEventListener('onSkippableVideoFailedToLoad', function() {
                console.log('Cordova onSkippableVideoFailedToLoad');
            });
            document.addEventListener('onSkippableVideoFinished', function() {
                console.log('Cordova onSkippableVideoFinished');
            });
            document.addEventListener('onSkippableVideoLoaded', function() {
                console.log('Cordova onSkippableVideoLoaded');
            });
            document.addEventListener('onSkippableVideoShown', function() {
                console.log('Cordova onSkippableVideoShown');
            });
            document.addEventListener('onRewardedVideoClosed', function() {
                console.log('Cordova onRewardedVideoClosed');
            });
            document.addEventListener('onRewardedVideoFailedToLoad', function() {
                console.log('Cordova onRewardedVideoFailedToLoad');
            });
            document.addEventListener('onRewardedVideoFinished', function(data) {
                console.log('Cordova reward:' + data.amount + ' ' + data.name);
            });
            document.addEventListener('onRewardedVideoLoaded', function() {
                console.log('Cordova onRewardedVideoLoaded');
            });
            document.addEventListener('onRewardedVideoShown', function() {
                console.log('Cordova onRewardedVideoShown');
            });
            document.addEventListener('onBannerClicked', function() {
                console.log('Cordova onBannerClicked');
            });
            document.addEventListener('onBannerFailedToLoad', function() {
                console.log('Cordova onBannerFailedToLoad');
            });
            document.addEventListener('onBannerLoaded', function() {
                console.log('Cordova onBannerLoaded');
            });
            document.addEventListener('onBannerShown', function() {
                console.log('Cordova onBannerShown');
            });
        }
