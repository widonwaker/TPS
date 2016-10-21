          var appKey = "80729c3857e25a006c7c1006fd65af2a2e03d540f22a6dce";
            Appodeal.initialize(appKey, Appodeal.INTERSTITIAL | Appodeal.SKIPPABLE_VIDEO | Appodeal.BANNER);
            Appodeal.show(Appodeal.BANNER_BOTTOM);
            Appodeal.isLoaded(Appodeal.BANNER, function(result){});
