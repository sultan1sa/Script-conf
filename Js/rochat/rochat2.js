var objc = JSON.parse($response.body);
    objc = {
  "rights" : {
    "generalbotLeftTimes" : 5000,
    "premiumbotLeftTimes" : 595,
    "gptLeftTimes" : 5000,
    "premiumbotTotalTimes" : 600,
    "gptDisplayName" : "GPT-4",
    "gptTotalTimes" : 300,
    "haveStripeBill" : true,
    "generabotDisplayName" : "通用Bot",
    "premiumbotDisplayName" : "专业Bot",
    "generalbotTotalTimes" : 500,
    "memberShipRights" : {
      "term" : "yearly",
      "starttime" : "1706442853",
      "expiredtime" : "1883639265"
    },
    "isGeneralbotUnlimited" : true
  }
}


$done({body : JSON.stringify(objc)});