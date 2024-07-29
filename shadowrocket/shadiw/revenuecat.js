/*

Aphrodite、Pandora、Apollo、VSCO、CountDuck、Happy Days、Awesome Habits、Anybox、Grow、Planny、我的物品、mizframa、事线、FaceGlow

[rewrite_local]

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-echo-response https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/revenueCat.js
^https:\/\/api\.revenuecat\.com\/.+\/subscribers\/[^/]+/(offerings|attributes)$ url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2

[MITM]
hostname = api.revenuecat.com

*/

// ========= 动态ID ========= //
const entitlementMapping = {
  //'User-Agent':['权益名称','订阅标识符']
  'Aphrodite': ['all'],
  'OneBox':['all', 'com.ziheng.OneBox'],
  'apollo': ['all'],
  'VSCO': ['membership'],
  'CountDuck': ['premium', 'Lifetime'],
  'Happy%3ADays': ['pro', 'happy_999_lifetime'],
  'Awesome%20Habits': ['premium'],
  'Anybox': ['pro'],
  'Grow': ['grow.pro', 'grow_lifetime'],
  'Planny': ['premium'],
  'mizframa': ['premium', 'mf_20_lifetime2'],
  'Overdue': ['Pro'],//我的物品
  '%E4%BA%8B%E7%BA%BF': ['pro','xyz.jiaolong.eventline.pro.lifetime'],//事线
  'GetFace': ['Pro access'],//FaceGlow
};

// ========= 固定部分 ========= // 
// ========= @ddgksf2021 ========= // 
var userAgent = $request.headers["User-Agent"] || $request.headers["user-agent"];

var metadata = {
  AlxXxlA: "原数据！",
  request_date_ms: 1684383920000,//请求日期的毫秒数
  request_date: "2023-05-18T12:25:20Z",//请求日期的字符串格式
  subscriber: {
    non_subscriptions: {},
    first_seen: "2023-05-18T12:25:20Z",//首次见到的日期
    original_application_version: "7",//原始应用程序版本
    other_purchases: {},//其他购买的对象
    management_url: "https://apps.apple.com/account/subscriptions",//管理订阅的网址
    subscriptions: {},//订阅的对象
    entitlements: {},//权益的对象
    original_purchase_date: "2023-05-17T12:25:20Z",//原始购买日期
    original_app_user_id: "$RCAnonymousID:AlxXxlA",//原始应用程序用户的标识符
    last_seen: "2023-05-18T12:25:20Z"//最后见到的日期
  }//订阅者的信息，作为元数据的初始模板，后面会根据用户的 User-Agent 来修改其中的 subscriptions 和 entitlements 字段。
};

var subscriptionInfo = {
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  period_type: "normal",
  expires_date: "2099-05-18T12:25:20Z",//过期日期
  grace_period_expires_date: null,//宽限期过期日期
  unsubscribe_detected_at: null,//发现取消订阅的日期
  original_purchase_date: "2023-05-18T12:25:20Z",//原始购买日期
  purchase_date: "2023-05-18T12:25:20Z",//购买日期
  store: "app_store"
};//作为订阅的对象的模板，后面会根据用户的 User-Agent 来修改其中的 product_identifier 字段。

var premiumSubscription = {
  grace_period_expires_date: null,
  purchase_date: "2023-05-18T12:25:20Z",//购买日期
  product_identifier: "alxxxla",//产品标识符
  expires_date: "2099-05-18T12:25:20Z"//过期日期
};//这个对象的作用是作为权益的对象的模板，后面会根据用户的 User-Agent 来修改其中的 product_identifier 字段。

var metadataObject = JSON.parse(JSON.stringify(metadata));
premiumSubscription.product_identifier = "com.alxxxla.premium.yearly";
metadataObject.subscriber.subscriptions["com.alxxxla.premium.yearly"] = subscriptionInfo;
//使用 Object.keys(entitlementMapping) 方法，获取 entitlementMapping 对象的所有键，返回一个包含所有键的数组，然后使用 find 方法，遍历这个数组，对每个键执行一个回调函数，该函数的参数是 key，表示当前遍历的键，函数的返回值是一个布尔值，表示是否找到了匹配的键。回调函数的逻辑是使用 userAgent.includes(key) 方法，判断用户的 User-Agent 是否包含当前遍历的键，如果包含，则返回 true，否则返回 false。find 方法的返回值是第一个使回调函数返回 true 的键，或者如果没有找到匹配的键，则返回 undefined。将 find 方法的返回值赋值给一个变量 matchedKey，这个变量的作用是表示用户的 User-Agent 匹配的应用程序的名称，或者如果没有匹配的应用程序，则为 undefined。
const matchedKey = Object.keys(entitlementMapping).find(key => userAgent.includes(key));
if (matchedKey) {//判断 matchedKey 是否存在
  //使用 let 关键字，定义两个变量 entitlementKey 和 subscriptionKey，它们的值是从 entitlementMapping 对象中，根据 matchedKey 作为键，获取对应的值，该值是一个数组，包含两个元素，第一个元素赋值给 entitlementKey，第二个元素赋值给 subscriptionKey。这两个变量的作用是表示用户的 User-Agent 匹配的应用程序的权益名称和订阅标识符。
  let [entitlementKey, subscriptionKey] = entitlementMapping[matchedKey];
  if (subscriptionKey) {//判断 subscriptionKey 是否存在
    /*
    将 premiumSubscription 对象的 product_identifier 字段的值设置为 subscriptionKey，这表示用户订阅了匹配的应用程序的订阅标识符。
    将 metadataObject 对象的 subscriber 对象的 subscriptions 对象的 subscriptionKey 字段的值设置为 subscriptionInfo 对象，这表示用户订阅了匹配的应用程序的订阅信息。
    */
    premiumSubscription.product_identifier = subscriptionKey;
    metadataObject.subscriber.subscriptions[subscriptionKey] = subscriptionInfo;
  }
  //将 metadataObject 对象的 subscriber 对象的 entitlements 对象的 entitlementKey 字段的值设置为 premiumSubscription 对象，这表示用户拥有匹配的应用程序的权益信息。
  metadataObject.subscriber.entitlements[entitlementKey] = premiumSubscription;
} else {//如果 matchedKey 不存在
  //将 metadataObject 对象的 subscriber 对象的 entitlements 对象的 pro 字段的值设置为 premiumSubscription 对象，这表示用户拥有默认的 pro 权益信息。
  metadataObject.subscriber.entitlements.pro = premiumSubscription;
}
//将 metadataObject 对象转换为 JSON 格式的字符串。将元数据对象作为响应的正文返回给用户。
$done({ body: JSON.stringify(metadataObject) });