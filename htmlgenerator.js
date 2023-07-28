function HTMLGenerator() {
	d.innerHTML("resourceModal",countTo(topResources.length,true).map(i=>"<div id=\"div_topResource"+i+"\" class=\"resource\"></div>").join(""));
	d.innerHTML("div_normalAxisContainer",axisCodes.map(name=>"<button class=\"lockedaxisbutton\" onClick=\"buyAxis('"+name+"')\" id=\"button_"+name+"Axis\" style=\"display:none\">"+name+" Axis (<span id=\"span_"+name+"AxisAmount\"></span>)<br>"+axisEffectHTML[name].replace("{e}","<span id=\"span_"+name+"AxisEffect\"></span>")+"<br>Cost: <span id=\"span_"+name+"AxisCost\"></span></button>").join("")+empowerableAxis.map(name=>"<button class=\"empoweredaxis\" id=\"button_empowered"+name+"Axis\" onClick=\"buyEmpoweredAxis()\" style=\"display:none\">Empowered "+name+" Axis (<span id=\"span_empowered"+name+"AxisAmount\"></span>)<br>"+axisEffectHTML[name+"Empowered"]+"</button>").join(""))
	d.innerHTML("div_darkAxisContainer",axisCodes.map(name=>"<button class=\"lockedaxisbutton\" onClick=\"buyDarkAxis('"+name+"')\" id=\"button_dark"+name+"Axis\">Dark "+name+" Axis (<span id=\"span_dark"+name+"AxisAmount\"></span>)<br>"+axisEffectHTML["dark"+name].replace("{e}","<span id=\"span_dark"+name+"AxisEffect\"></span>").replace("{e2}","<span id=\"span_dark"+name+"AxisEffectAlt\"></span>")+"<br>Cost: <span id=\"span_dark"+name+"AxisCost\"></span><div style=\"position:absolute;top:5px;right:7px;color:rgba(0,0,0,0.5);font-size:7px\">Dark star boost: <span id=\"span_darkStarEffect2"+name+"\"></span></div></button>").join("")+empowerableDarkAxis.map(name=>"<button class=\"empoweredaxis\" id=\"button_empoweredDark"+name+"Axis\" onClick=\"buyEmpoweredAxis()\" style=\"display:none\">Empowered Dark "+name+" Axis (<span id=\"span_empoweredDark"+name+"AxisAmount\"></span>)<br>"+axisEffectHTML["dark"+name+"Empowered"]+"</button>").join(""))
	d.innerHTML("masteryContainerLegacy","<table>"+Array(totalMasteryRows+1).fill(0).map((x,row)=>(row==0)?"":("<tr id=\"masteryRow"+row+"Legacy\"><td style=\"width:180px\"><h3 class=\"_mastery\">Row "+row+"</h3></td><td style=\"width:180px\"><button class=\"genericbutton\" onClick=\"toggleMastery("+(row*10)+");masteryReset()\">Unassign Row "+row+" Masteries</button></td><td style=\"width:calc(100vw - 400px)\">"+Object.keys(masteryData).filter(code => Math.floor(code/10)==row).map(code => "<button class=\"masterybuttonLegacy\" id=\"button_mastery"+code+"Legacy\" onClick=\"toggleMastery("+code+")\"><div style=\"position:absolute;font-size:12px;top:6px;left:6px;text-align:center;color:rgba(0,0,0,0.4)\" class=\"masteryIDLegacy\">"+code+"</div><div id=\"span_mastery"+code+"BoostLegacy\" class=\"masteryBoostLegacy\" style=\"position:absolute;font-size:12px;top:6px;right:6px;text-align:center;color:rgba(0,0,0,0.4)\"></div><div id=\"span_mastery"+code+"ActiveLegacy\" class=\"masteryActiveLegacy\" style=\"position:absolute;font-size:12px;bottom:6px;left:6px;width:calc(100% - 12px);text-align:center;color:rgba(0,0,0,0.4)\"></div><span id=\"span_mastery"+code+"TextLegacy\"></span></button>").join("")+"</td></tr>")).join("")+"</table>")
	d.innerHTML("masteryContainerModern","<table>"+Array(totalMasteryRows+1).fill(0).map((x,row)=>(row==0)?"":("<tr id=\"masteryRow"+row+"Modern\"><td style=\"width:180px\"><h3 class=\"_mastery\">Row "+row+"</h3></td><td style=\"width:calc(100vw - 200px)\">"+Object.keys(masteryData).filter(code => Math.floor(code/10)==row).map(code => "<button class=\"masterybuttonModern\" id=\"button_mastery"+code+"Modern\" onClick=\"showMasteryInfo("+code+",3);shownMastery="+code+"\"><div style=\"position:absolute;font-size:8px;top:3px;left:3px;text-align:center;color:rgba(255,255,255,0.4)\" class=\"masteryIDModern\">"+code+"</div><div id=\"span_mastery"+code+"BoostModern\" class=\"masteryBoostModern\" style=\"position:absolute;font-size:8px;top:3px;right:3px;text-align:center;color:rgba(255,255,255,0.4)\"></div><div id=\"span_mastery"+code+"ActiveModern\" class=\"masteryActiveModern\" style=\"position:absolute;font-size:8px;bottom:3px;left:3px;width:calc(100% - 6px);text-align:center;color:rgba(255,255,255,0.4)\"></div>"+masteryData[code].icon+"</button>").join("")+"</td></tr>")).join("")+"</table>")
	d.innerHTML("achievementContainer",Object.keys(achievementList).map(tier=>"<div class=\"achievementtiercontainer\" style=\"background-color:"+achievement.tierColors[tier].primary+";border-color:"+achievement.tierColors[tier].secondary+"\" id=\"div_achievementTier"+tier+"\"><table style=\"table-layout:fixed\"><tr><td style=\"width:49vw\"><h3 style=\"text-decoration:underline;color:"+achievement.tierColors[tier].secondary+"\">"+achievement.tierName(tier)+" (<span id=\"span_ownedTier"+tier+"Achievements\"></span>"+(tier=="s"?"":("/"+Object.keys(achievementList[tier]).length))+")</h3></td><td style=\"width:49vw;color:#ffffff\">"+achievement.perAchievementReward[tier].text.replace("{}","<span id=\"span_perTier"+tier+"AchievementReward\"></span>")+"</td></tr></table><br>"+Object.keys(achievementList[tier]).map(ach=>"<button class=\"achievement\" id=\"div_achievement"+ach+"\" onMouseover=\"showAchievementInfo('"+ach+"')\">"+achievement(ach).name+"</button>").join("")+"</div>").join(""))
	d.innerHTML("secretAchievementContainer","<p>You have <span id=\"span_secretAchievementPoints\" class=\"big _achievements\"></span> secret achievement points. Each secret achievement point gives a super-secret boost!</p>"+Object.keys(secretAchievementList).sort((a,b)=>secretAchievementList[a].rarity-secretAchievementList[b].rarity).map(i=>"<button class=\"achievement\" id=\"div_secretAchievement"+i+"\" onMouseover=\"showSecretAchievementInfo("+i+")\" style=\"background-color:"+secretAchievementRarityColors[secretAchievementList[i].rarity]+";color:"+blackOrWhiteContrast(secretAchievementRarityColors[secretAchievementList[i].rarity])+"\"><span style=\"position:absolute;top:5px;left:5px;width:90px;font-size:9px\">"+secretAchievementRarityNames[secretAchievementList[i].rarity]+"</span>"+secretAchievementList[i].name+"</button>").join(""))
	d.innerHTML("subtab_options_hotkeys",Object.entries(hotkeys.hotkeyList).map(x=>"<button onClick=\"toggleHotkey('"+x[0]+"')\" class=\"hotkey\" id=\"button_hotkey_"+x[0]+"\"><span style=\"float:left\">"+x[0]+"</span><span style=\"float:right\" id=\"span_hotkey_"+x[0]+"\"></span></button>").join(""))
	d.innerHTML("div_dilationUpgrades","<h1>Dilation Upgrades</h1>"+countTo(4).map(i=>"<button id=\"div_dilationUpgrade"+i+"\" class=\"dilationUpgrade\" onClick=\"buyDilationUpgrade("+i+")\">"+dilationUpgrades[i].tooltip.replace("{e}","<span id=\"span_dilationUpgrade"+i+"Effect\"></span>")+"<br><br><span id=\"span_dilationUpgrade"+i+"Cost\"></span></button>").join(""))
	d.innerHTML("mainStatTable",countTo(mainStatistics.length,true).map(i=>"<tr id=\"mainStatRow"+i+"\"><td class=\"tablecell\" style=\"width:40vw\">"+mainStatistics[i].name+"</td><td class=\"tablecell\" style=\"width:40vw\" id=\"mainStatValue"+i+"\"></td></tr>").join(""))
	d.innerHTML("hiddenStatTable",countTo(hiddenStatistics.length,true).map(i=>"<tr id=\"hiddenStatRow"+i+"\"><td class=\"tablecell\" style=\"width:40vw\">"+hiddenStatistics[i].name+"</td><td class=\"tablecell\" style=\"width:40vw\" id=\"hiddenStatValue"+i+"\"></td></tr>").join(""))
	d.innerHTML("subtab_statistics_largeNumberVisualization",countTo(largeNumberVisualizationVariables.length,true).map(i=>"<div class=\"largeNumberVisualization\" id=\"div_largeNumberVisualization"+i+"\">You have <span id=\"span_largeNumberVisualization"+i+"Value\" class=\""+largeNumberVisualizationVariables[i].class+"\"></span> "+largeNumberVisualizationVariables[i].label+". This is equal to <span id=\"span_largeNumberVisualization"+i+"Comparison\" class=\""+largeNumberVisualizationVariables[i].class+"\"></span></div>").join("")+"<br>More resources appear when you reach <span id=\"span_largeNumberVisualizationRequirement\"></span> of them")
	d.innerHTML("table_last10StardustRuns",countTo(10).map(i=>"<tr id=\"last10StardustRuns_row"+i+"\"><td style=\"width:30px\" class=\"tablecell\">"+i+"</td><td id=\"span_last10StardustRuns_time"+i+"\" style=\"width:calc(33vw - 30px)\" class=\"tablecell\"></td><td id=\"span_last10StardustRuns_gain"+i+"\" style=\"width:calc(33vw - 30px)\" class=\"tablecell\"></td><td style=\"width:calc(33vw - 30px)\" class=\"tablecell\"><button id=\"button_last10StardustRuns_build"+i+"\" onClick=\"previousPrestige.showBuild('stardust','last',"+i+")\">Show <span class=\"previousPrestigeBuildList\"></span> builds</button></td></tr>").join(""))
	d.innerHTML("table_last10WormholeRuns",countTo(10).map(i=>"<tr id=\"last10WormholeRuns_row"+i+"\"><td style=\"width:30px\" class=\"tablecell\">"+i+"</td><td id=\"span_last10WormholeRuns_time"+i+"\" style=\"width:calc(33vw - 30px)\" class=\"tablecell\"></td><td id=\"span_last10WormholeRuns_gain"+i+"\" style=\"width:calc(33vw - 30px)\" class=\"tablecell\"></td><td style=\"width:calc(33vw - 30px)\" class=\"tablecell\"><button id=\"button_last10WormholeRuns_build"+i+"\" onClick=\"previousPrestige.showBuild('wormhole','last',"+i+")\">Show <span class=\"previousPrestigeBuildList\"></span> builds</button></td></tr>").join(""))
	let stardustRuns = previousPrestige.stardustRunsStored
	let wormholeRuns = previousPrestige.wormholeRunsStored
	d.innerHTML("div_bestStardustRuns",countTo(stardustRuns.length,true).map(i=>"<div id=\"div_previousStardustRun"+i+"\" class=\"previousPrestige previousPrestige_"+["wormhole","spacetime","eternity"][stardustRuns[i].layer-2]+"\"><h1 style=\"font-size:20px\">"+stardustRuns[i].label+"</h1><br><span id=\"span_previousStardustRun"+i+"_gain\" class=\"big _stardust\"></span> stardust gained in <span id=\"span_previousStardustRun"+i+"_time\" class=\"big _time\"></span><br><button class=\"narrowbar\" id=\"button_previousStardustRun"+i+"\" onClick=\"previousPrestige.showBuild('stardust','record',"+i+")\"><span class=\"previousPrestigeBuildList\"></span> build</button></div>").join(""))
	d.innerHTML("div_bestWormholeRuns",countTo(wormholeRuns.length,true).map(i=>"<div id=\"div_previousWormholeRun"+i+"\" class=\"previousPrestige previousPrestige_"+["spacetime","eternity"][wormholeRuns[i].layer-3]+"\"><h1 style=\"font-size:20px\">"+wormholeRuns[i].label+"</h1><br><span id=\"span_previousWormholeRun"+i+"_gain\" class=\"big _wormhole\"></span> HR gained in <span id=\"span_previousWormholeRun"+i+"_time\" class=\"big _time\"></span> (<span id=\"span_previousWormholeRun"+i+"_efficiency\" class=\"big _wormhole\"></span>)<br><button class=\"narrowbar\" id=\"button_previousWormholeRun"+i+"\" onClick=\"previousPrestige.showBuild('wormhole','record',"+i+")\"><span class=\"previousPrestigeBuildList\"></span> build</button></div>").join(""))
	d.innerHTML("div_stardustBoostContainer",countTo(12).map(i=>"<div class=\"stardustboost\" id=\"div_stardustBoost"+i+"\"><span class=\"huge _stardust\">#"+i+"</span><br>"+stardustBoostText[i].replace("{v}","<span id=\"span_stardustBoost"+i+"Value\" class=\"big _stardust\"></span>").replace("{t}","<span id=\"span_stardustBoost"+i+"Tooltip\"></span>")+"</div>").join(""))
	d.innerHTML("div_stardustUpgradeContainer",countTo(5).map(i=>"<button id=\"button_stardustUpgrade"+i+"\" class=\"lockedaxisbutton\" onClick=\"if(!g.confirmations.buyStardustUpgrade)buyStardustUpgrade("+i+")\"><div style=\"position:absolute;font-size:8px;top:3px;left:3px\">#"+i+" ("+stardustUpgradeNames[i]+" Path)</div><div style=\"position:absolute;font-size:8px;top:3px;right:3px\"><span id=\"span_stardustUpgrade"+i+"Level\"></span> purchased</div><span id=\"span_stardustUpgrade"+i+"Tooltip\"></span></button>").join(""))
	d.innerHTML("starContainerLegacy",countTo(10).map(row=>"<tr id=\"starRow"+row+"Legacy\"><td style=\"width:240px;color:#ffffff;font-size:10px\"><span style=\"font-weight:900\">Row "+row+"</span><br><span id=\"span_row"+row+"StarsAvailableLegacy\"></span> available</td>"+countTo(4).map(col=>"<td><button class=\"starbutton\" id=\"button_star"+(row*10+col)+"Legacy\" onClick=\"buyStarUpgrade("+(row*10+col)+")\"><div style=\"position:absolute;font-size:12px;top:4px;left:6px;width:calc(100% - 12px);text-align:center;color:rgba(0,0,0,0.4)\" class=\"starIDLegacy\">"+(row*10+col)+"</div><div style=\"position:absolute;font-size:12px;bottom:4px;left:6px;width:calc(100% - 12px);text-align:center;color:rgba(0,0,0,0.4)\" class=\"starActiveLegacy\" id=\"span_star"+(row*10+col)+"ActiveLegacy\"></div>"+starText(row*10+col).replace("{x}","<span id=\"span_star"+(row*10+col)+"EffectLegacy\"></span>")+"</button></td>").join("")+"</tr>").join(""))
	d.innerHTML("starContainerModern",countTo(10).map(row=>"<tr id=\"starRow"+row+"Modern\"><td style=\"width:240px;color:#ffffff;font-size:10px\"><span style=\"font-weight:900\">Row "+row+"</span><br><span id=\"span_row"+row+"StarsAvailableModern\"></span> available</td>"+countTo(4).map(col=>"<td><button class=\"starbutton\" id=\"button_star"+(row*10+col)+"Modern\" onClick=\"showStarInfo("+(row*10+col)+")\"><div style=\"position:absolute;font-size:12px;top:4px;left:6px;width:calc(100% - 12px);text-align:center;color:rgba(0,0,0,0.4)\" class=\"starIDModern\">"+(row*10+col)+"</div><div style=\"position:absolute;font-size:12px;bottom:4px;left:6px;width:calc(100% - 12px);text-align:center;color:rgba(0,0,0,0.4)\" class=\"starActiveModern\" id=\"span_star"+(row*10+col)+"ActiveModern\"></div>"+starIcons[row*10+col]+"</button></td>").join("")+"</tr>").join(""))
	d.innerHTML("energyContainer",countTo(energyTypes.length,true).map(i=>"<div class=\"energydivision\" id=\""+energyTypes[i]+"EnergyDiv\">You have <span class=\"big _energy\" id=\""+energyTypes[i]+"EnergyAmount\"></span> "+energyTypes[i]+" energy.<br>It is being multiplied by <span class=\"big _energy\" id=\""+energyTypes[i]+"EnergyPerSec\"></span> per second (based on "+energyDeterminers[i]+").<br>"+energyResources[i]+" is being "+[null,null,"multiplied by","raised to the power of"][energyHyper[i]]+" <span class=\"big _energy\" id=\""+energyTypes[i]+"EnergyEffect\"></span>"+([5,8].includes(i)?(" (need 10 "+energyTypes[i]+"energy)"):(" (need more "+energyTypes[i]+" energy than "+energyDeterminers[i]+")"))+".<br><span id=\"span_"+energyTypes[i]+"EnergyResetLayer\">This energy resets on "+(i>5?"<span class=\"_wormhole\">Wormhole</span>":"<span class=\"_stardust\">Stardust</span>")+" reset and above</span></div>").join(""))
	d.innerHTML("table_axisAutobuyerLimits","<tr><th colspan=\"2\">Axis limits:</th></tr>"+axisCodes.map(i=>"<tr id=\"tr_axisAutobuyerMax"+i+"\"><td><label for=\"axisAutobuyerMax"+i+"\">"+i+":</label></td><td><input id=\"axisAutobuyerMax"+i+"\" type=\"text\"></input></td></tr>").join("")+"<tr><td colspan=\"2\">Input \"u\" for no limit</td></tr>")
	d.innerHTML("table_darkAxisAutobuyerLimits","<tr><th colspan=\"2\">Axis limits:</th></tr>"+[axisCodes,"Stars"].flat().map(i=>"<tr id=\"tr_darkAxisAutobuyerMax"+i+"\"><td><label for=\"darkAxisAutobuyerMax"+i+"\">"+(i=="Stars"?"★":i)+":</label></td><td><input id=\"darkAxisAutobuyerMax"+i+"\" type=\"text\"></input></td></tr>").join("")+"<tr><td colspan=\"2\">Input \"u\" for no limit</td></tr>")
	d.innerHTML("table_stardustUpgradeAutobuyerLimits","<tr><th colspan=\"2\">Upgrade limits:</th></tr>"+countTo(5).map(i=>"<tr id=\"tr_stardustUpgradeAutobuyerMax"+i+"\"><td><label for=\"stardustUpgradeAutobuyerMax"+i+"\">"+i+":</label></td><td><input id=\"stardustUpgradeAutobuyerMax"+i+"\" type=\"text\"></input></td></tr>").join("")+"<tr><td colspan=\"2\">Input \"u\" for no limit</td></tr>")
	d.innerHTML("wormholeMilestoneContainer",Object.keys(wormholeMilestoneList).map(x=>{let milestone=wormholeMilestoneList[x];return "<div class=\"wormholeMilestone\" id=\"div_wormholeMilestone"+x+"\"><h3>"+x+" achievement"+(x==1?"":"s")+"</h3><p>"+(milestone.text??milestone.dynamic.replace("{v}","<span id=\"span_wormholeMilestone"+x+"Effect\"></span>"))+"</p></div>"}).join(""))
	d.innerHTML("researchTable",countTo(researchRows).map(row=>"<tr id=\"researchRow"+row+"\">"+countTo(15).map(col=>{let id="r"+row+"_"+col;return(research[id]==undefined)?"<td style=\"height:72px;width:72px\"></td>":("<td style=\"height:72px;width:72px\"><button id=\"button_research_"+id+"_visible\" class=\"researchButton "+research[id].type+"ResearchButton\" onClick=\"buyResearch("+row+","+col+")\" onMouseover=\"showResearchInfo("+row+","+col+")\" style=\"display:none;font-size:15px;"+((research[id].group==undefined)?"":("border-color:"+researchGroupList[research[id].group].color))+"\" aria-label=\""+researchAccessibleName(id)+"\">"+research[id].icon+"</button><button id=\"button_research_"+id+"_unknown\" class=\"researchButton unknownResearchButton\" style=\"display:none\" onMouseover=\"unknownResearchInfo()\" aria-label=\""+researchAccessibleName(id)+". Buy one of the researches adjacent to this to permanently reveal what this does.\"></button></td>")}).join("")+"</tr>").join(""))
	d.innerHTML("studyContainer",countTo(studies.length-1).map(i=>"<div id=\"div_study"+i+"\"><h2 style=\"text-decoration:underline\">Study "+roman(i)+": "+studies[i].name+"</h2><p id=\"span_study"+i+"Description\">"+studies[i].description()+"</p><button id=\"button_study"+i+"\" class=\"startStudy\" onClick=\"studyButtons.click("+i+")\"></button><hr><p>Goal: <span id=\"span_study"+i+"Goal\"></span> total dark axis</p><p><span id=\"span_study"+i+"Completions\" style=\"display:inline\"></span>/4 completions<hr><p>Reward:<br><span id=\"span_study"+i+"Reward\"></span></div>").join(""))
	function lightDiv(i){let name=lightNames[i];return"<div class=\"lightdiv "+name+"LightDiv\"><p>You have <span class=\"big\" id=\"span_"+name+"Chroma\"></span> "+name+" chroma</p><p>You have <span class=\"big\" id=\"span_"+name+"Lumens\"></span> "+name+" lumens (next at <span class=\"big\" id=\"span_"+name+"LumenReq\"></span> chroma)</p><p>"+lightData[i].effect.replace("{x}","<span class=\"big\" id=\"span_"+name+"LightEffect\"></span>").replace("{e}","<span class=\"big\" id=\"span_"+name+"LightBoost\"></span>").replace("{s}","<span id=\"span_"+name+"LightSign\"></span>")+"</p><button id=\"button_chromaGen"+i+"\" onClick=\"toggleChromaGen("+i+")\" class=\"chromabutton "+name+"ChromaButton\"></button></div>"}
	d.innerHTML("lightContainer1",[0,1,2].map(i=>lightDiv(i)).join(""))
	d.innerHTML("lightContainer2",[3,4,5].map(i=>lightDiv(i)).join(""))
	d.innerHTML("lightContainer3",[6,7].map(i=>lightDiv(i)).join(""))
}