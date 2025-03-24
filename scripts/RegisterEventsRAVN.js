const debug = false;

Hooks.on("ready", function () {
    console.log("RAVN Quest | Register Events");

    //game.dc20rpg.events.registerEventType("evtGlobal", global, "Global Event");
    //game.dc20rpg.events.registerEventType("evtYule2", yule2, "Yule 2");
    //game.dc20rpg.events.registerEventType("evtYule3", yule3, "Yule 3");

    game.dc20rpg.events.registerEventTrigger("trgrApexAction", "Apex Action");
    game.dc20rpg.events.registerEventTrigger("trgrTopOfRound", "Round Start");
});

Hooks.on("updateCombat", async (combat, changed, options, userId) => {
    if (!combat.started) return;
    const currentTurn = combat.turn;

    if (currentTurn == 0) {
        topOfTheRound(combat);
    }

});

function global(){
    //DO stuff that targets everyone
    const tokensInScene = getTokensInActiveScene();

    for(let i = 0; i < tokensInScene.length; i++){
        let targetedToken = tokensInScene[i];
        let targetedActor = targetedToken.actor;
        if(debug) console.log(targetedActor);

    }

}

function getTokensInActiveScene(){
    return this.game.scenes.active.tokens.contents;
}

function topOfTheRound(combat) {

    const currentRound = combat.round;
    const allCombatants = combat.combatants.map(c => c.actor);

    allCombatants.forEach(combatActor => {

        game.dc20rpg.events.runEventsFor("trgrTopOfRound", combatActor);

        let isIncap = false;
        combatActor.statuses.forEach(status => {
            if (status.id == "incapacitated") isIncap = true;
        });
        if (!isIncap) {
            if (debug) console.log("Running Apex");
            game.dc20rpg.events.runEventsFor("trgrApexAction", combatActor);//Trigger if not Incapacitated
        }
    });
}
