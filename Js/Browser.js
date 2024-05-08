#!name = revenuecat
#!desc = 恢复订阅模板，多个值以“,”分隔。
#!openUrl = 
#!author = @leepyer
#!homepage = https://github.com/leey668
#!icon = https://www.revenuecat.com/icons/icon-512x512.png
#!input = name
#!input = appid
#!select = forever,true,false
#!date = 2024-04-19 00:00:00

[Script]
http-response ^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) script-path=https://raw.githubusercontent.com/sultan1sa/Script-conf/main/Js/revenuecat.js, requires-body=true, timeout=60, tag=revenuecat_1

http-request ^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) script-path=https://raw.githubusercontent.com/sultan1sa/Script-conf/main/Js/revenuecat.js, timeout=60, tag=revenuecat_2


[Mitm]
hostname = api.revenuecat.com
