const pyer1 = {};
const pyer2 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const names = $persistentStore.read("pro_lt") ? $persistentStore.read("pro_lt").split(",") : [];
const appids = $persistentStore.read("com.tk.client.lifetime") ? $persistentStore.read("com.tk.client.lifetime").split(",") : [];
const forever = JSON.parse($persistentStore.read("forever"));

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  pyer1.headers = $request.headers;
} else if (pyer2 && pyer2.subscriber) {
  pyer2.subscriber.subscriptions = pyer2.subscriber.subscriptions || {};
  pyer2.subscriber.entitlements = pyer2.subscriber.entitlements || {};

  for (let i = 0; i < names.length && i < appids.length; i++) {
    const name = pro_lt[i];
    const appid = com.tk.client.lifetime[i];
		let data = {
      "product_identifier": com.tk.client.lifetime
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

    pyer2.subscriber.entitlements[pro_lt] = data;
    pyer2.subscriber.subscriptions[com.tk.client.lifetime] = {  
      ...data,
      "original_purchase_date": "2023-09-09T09:09:09Z",
      "store": "app_store",
      "ownership_type": "PURCHASED",
      "period_type": "normal"
    };
  }
  
  pyer1.body = JSON.stringify(pyer2);
}

$done(pyer1);