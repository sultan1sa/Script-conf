[General]
ipv6 = false
ipv6-vif = disabled

[Rule]
FINAL,DIRECT

[Header_Rewrite]
http-response ^https?://api\.revenuecat\.com/.+/(receipts$|subscribers/?(.*?)*$) header-del X-RevenueCat-ETag
http-response ^https?://api\.revenuecat\.com/.+/(receipts$|subscribers/?(.*?)*$) header-del x-revenuecat-etag

[MITM]
hostname = api.revenuecat.com, buy.itunes.apple.com, api.picsart.com, api-account.kinemasters.com, us-central1-alight-creative.cloudfunctions.net, api.adapty.io, carrotweather.herokuapp.com, order.creativeappnow.com, api.mwm-users.com, us-central1-muslim-pro-app.cloudfunctions.net, prod.studysmarter.de, api.qonversion.io, subscription.grammarly.com, api.esound.app, api.purchasely.io, api.sandbox.love, subscriptions.songshift.com, api.adblockpro.app, mobile-api.adguard.org, url2script.com

[rewrite_local]


AppAdTesters = type=http-response,pattern=https://api.adapty.io/api/v1/sdk/analytics/profiles,requires-body=1,max-size=0,binary-body-mode=0,script-path=https://apptesters.org/wp-content/uploads/Adapty.js,script-update-interval=5

AppFMTesters = type=http-response,pattern=https://order.creativeappnow.com/iap/receipt,requires-body=1,max-size=0,binary-body-mode=0,script-path=https://apptesters.org/wp-content/uploads/Facemoji.js,script-update-interval=5

AppReTesters = type=http-response,pattern=https:\/\/license\.pdfexpert\.com\/api\/2\.0\/(calendarslite|pdfexpert6|documents)\/subscription\/(refresh|check),requires-body=1,max-size=0,binary-body-mode=0,script-path=https://apptesters.org/wp-content/uploads/readdle.js,script-update-interval=5

AppitTesters = type=http-response,pattern=^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt,requires-body=1,max-size=0,binary-body-mode=0,script-path=https://apptesters.org/wp-content/uploads/iTunes.js,script-update-interval=5

AppMuTesters = type=http-response,pattern=us-central1-muslim-pro-app.cloudfunctions.net/GetUserPremiumInfo,requires-body=1,max-size=0,binary-body-mode=0,script-path=https://apptesters.org/wp-content/uploads/MuslimPro.js,script-update-interval=5

AppGrTesters = type=http-response,pattern=^https?:\/\/subscription\.grammarly\.com\/api\/v1\/subscription$,requires-body=1,max-size=0,binary-body-mode=0,script-path=https://apptesters.org/wp-content/uploads/Grammarly.js,script-update-interval=5

AppeSTesters = type=http-response,pattern=api.esound.app/account,requires-body=1,max-size=0,binary-body-mode=0,script-path=https://apptesters.org/wp-content/uploads/eSound.js,script-update-interval=5

AppPurTesters = type=http-response,pattern=https://api.purchasely.io/paab/user_purchases,requires-body=1,max-size=0,binary-body-mode=0,script-path=https://apptesters.org/wp-content/uploads/purchasely.js,script-update-interval=5

AppVaTesters = type=http-response,pattern=prod.studysmarter.de/payments/info,requires-body=1,max-size=0,binary-body-mode=0,script-path=https://apptesters.org/wp-content/uploads/Vaia.js,script-update-interval=5

AppQOTesters = type=http-response,pattern=api.qonversion.io/v1/user/init,requires-body=1,max-size=0,binary-body-mode=0,script-path=https://apptesters.org/wp-content/uploads/qonversion.js,script-update-interval=5

AppDJTesters = type=http-response,pattern=https://api.mwm-users.com/me/features,requires-body=1,max-size=0,binary-body-mode=0,script-path=https://apptesters.org/wp-content/uploads/edjingMix.js,script-update-interval=5

AppVCTesters = type=http-response,pattern=https://api-fra.vivacut.com/api/rest/commerce/integrate/vip/perform,requires-body=1,max-size=0,binary-body-mode=0,script-path=https://apptesters.org/wp-content/uploads/VivaCut.js,script-update-interval=5

AppCaTesters = type=http-response,pattern=https://carrotweather.herokuapp.com/parse/functions/findSubscriptionsForUserId,requires-body=1,max-size=0,binary-body-mode=0,script-path=https://apptesters.org/wp-content/uploads/Carrot.js,script-update-interval=5

AppKineTesters = type=http-response,pattern=https://api-account.kinemasters.com/v2/user/subscribe,requires-body=1,max-size=0,binary-body-mode=0,script-path=https://apptesters.org/wp-content/uploads/KineMaster.js,script-update-interval=5

AppPicTesters = type=http-request,pattern=https://api.picsart.com/gw-v2/shop/subscription/apple/purchases,requires-body=1,max-size=0,binary-body-mode=0,script-path=https://apptesters.org/wp-content/uploads/PicsArt.js,script-update-interval=5

AppAMTesters = type=http-response,pattern=https://us-central1-alight-creative.cloudfunctions.net/getAccountStatusAndLicenses,requires-body=1,max-size=0,binary-body-mode=0,script-path=https://apptesters.org/wp-content/uploads/AlightMotion.js,script-update-interval=5

AppSaTesters = type=http-response,pattern=api.sandbox.love/accounts/current,requires-body=1,max-size=0,binary-body-mode=0,script-path=https://apptesters.org/wp-content/uploads/SandBox.js,script-update-interval=5

AppSSesters = type=http-response,pattern=subscriptions.songshift.com/validate,requires-body=1,max-size=-1,binary-body-mode=0,script-path=https://apptesters.org/wp-content/uploads/SongShift.js,script-update-interval=5

AppADBTesters = type=http-response,pattern=api.adblockpro.app/verify,requires-body=1,max-size=0,binary-body-mode=0,script-path=https://apptesters.org/wp-content/uploads/AdblockPro.js,script-update-interval=5

AppADGTesters = type=http-response,pattern=^https:\/\/mobile-api\.adguard\.org\/api\/.+\/ios_validate_receipt\/(.*?),requires-body=1,max-size=0,binary-body-mode=0,script-path=https://apptesters.org/wp-content/uploads/AdGuardPro.js,script-update-interval=5

AppDTesters = type=http-response,pattern=ILoveDevTheDev.com,requires-body=1,max-size=0,binary-body-mode=0,script-path=https://URL2Script.com,script-update-interval=5