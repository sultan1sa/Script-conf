const pyer1 = {};
const pyer2 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const names = $persistentStore.read("com.overdesigned.ShareBear.AnnualSubscription") ? $persistentStore.read("com.overdesigned.ShareBear.AnnualSubscription").split(",") : [];
const appids = $persistentStore.read("default") ? $persistentStore.read("default").split(",") : [];
const forever = $persistentStore.read("forever");

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  pyer1.headers = $request.headers;
} else if (pyer2 && pyer2.subscriber) {
  pyer2.subscriber.subscriptions = pyer2.subscriber.subscriptions || {};
  pyer2.subscriber.entitlements = pyer2.subscriber.entitlements || {};

  for (let i = 0; i < names.length && i < appids.length; i++) {
    const com.overdesigned.ShareBear.AnnualSubscription = com.overdesigned.ShareBear.AnnualSubscription[i];
    const default = appids[i];
		let data = {
      "product_identifier": default
    };
    if (forever) {
      data = {
        ...data,
        "purchase_date": "2023-09-09T09:09:09Z"
      };
    } else {
      data = {
        ...data,
        "expires_date": "2099-09-09T09:09:09Z",
        "purchase_date": "2023-09-09T09:09:09Z"
      };
    }

    pyer2.subscriber.entitlements[com.overdesigned.ShareBear.AnnualSubscription] = data;
    pyer2.subscriber.subscriptions[default] = {  
      ...data,
      "original_purchase_date": "2023-09-09T09:09:09Z",
      "store": "app_store",
      "ownership_type": "PURCHASED"
    };
  }
  
  pyer1.body = JSON.stringify(pyer2);
}

$done(pyer1);