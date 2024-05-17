#!name=autoqo
#!desc=auyoqo

[Script]
zyjh = type=http-response, pattern=^httpsapi.qonversion.io/v1/user/init, script-path=https://raw.githubusercontent.com/sultan1sa/Script-conf/main/Lancex/qo.js, requires-body=true, max-size=-1, timeout=60

[MITM]
hostname = %APPEND% api.qonversion.io