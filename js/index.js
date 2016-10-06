// Add to index.js or the first page that loads with your app.
// For Intel XDK and please add this to your app.js.

document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
    admob.setOptions({
        publisherId:          "ca-app-pub-8260710890108991~5325263661",  // Required
        interstitialAdId:     "ca-app-pub-8260710890108991/3429728069",  // Optional
    });
	
	admob.requestInterstitialAd();
  
  var notificationOpenedCallback = function(jsonData) {
    console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal.init("76de9b2b-577d-44c6-844a-dc9228b9597f",
                                 {googleProjectNumber: "440027051507"},
                                 notificationOpenedCallback);
  
  // Show an alert box if a notification comes in when the user is in your app.
  window.plugins.OneSignal.enableInAppAlertNotification(true);
}, false);