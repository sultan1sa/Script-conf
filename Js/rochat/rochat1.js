var objc = JSON.parse($response.body);
    objc = {
  "rights" : {
    "generalbotLeftTimes" : 29,
    "premiumbotLeftTimes" : 595,
    "gptLeftTimes" : 296,
    "premiumbotTotalTimes" : 600,
    "gptDisplayName" : "GPT-4",
    "gptTotalTimes" : 300,
    "haveStripeBill" : true,
    "generabotDisplayName" : "通用Bot",
    "premiumbotDisplayName" : "专业Bot",
    "generalbotTotalTimes" : 30,
    "memberShipRights" : {
      "term" : "MONTHLY",
      "starttime" : "1706442853",
      "expiredtime" : "4131390113"
    },
    "isGeneralbotUnlimited" : true
  }
}


$done({body : JSON.stringify(objc)});