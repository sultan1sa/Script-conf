hostname= education.github.com, baimiao.uzero.cn, lambda.us-east-1.amazonaws.com, *.intsig.net, tagit.hyhuo.com

;buy.itunes.apple.com, 

# > 拦截100解锁超级会员
^https?:\/\/tagit\.hyhuo\.com\/cypt\/block100\/get_vip_info$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/Block100SVIPCrack.js

# 扫描全能王
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/id77/QuantumultX/master/Script/camscanner.js
# workingcopy
^https:\/\/education\.github\.com\/api\/user$ url response-body "student":false response-body "student":true
# 韩剧TV
^http:\/\/api\.hanju\.koudaibaobao\.com\/api\/series\/rslvV4 url response-body "quality":\d response-body "quality":10
# 白描
^https:\/\/baimiao\.uzero\.cn\/api\/v2\.user\/(logout|appLaunchWithUser|loginByWeixin) url script-response-body https://raw.githubusercontent.com/id77/QuantumultX/master/Script/baimiao.js


# 内购解锁
# 需要ios13 复制放本地 申请试用-》恢复购买-〉取消订阅；禁用主机名
# 通用解锁 试用取消 主机名buy.itunes.apple.com
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/zhiyicai/langkhach270389-Scripting-20191122/53e785a96e435022162ee3e574d9e5d118999969/verify_receipt.js
# drops
^https:\/\/lambda\.us-east-1\.amazonaws\.com/.*/functions\/prod-4-syncPurchases\/invocations$ url script-response-body https://raw.githubusercontent.com/id77/QuantumultX/master/Script/drops.js
