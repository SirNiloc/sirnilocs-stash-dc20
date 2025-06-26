/**
 * Print to console if the script activates.
 */
Hooks.on("ready", function () {
    console.log("SirNiloc's Stash | RegisterEventsRAVN");
    //const data = require()


    //console.log(data.id);


    //game.dc20rpg.events.registerEventType("evtGlobal", global, "Global Event");
    //game.dc20rpg.events.registerEventType("evtYule2", yule2, "Yule 2");
    //game.dc20rpg.events.registerEventType("evtYule3", yule3, "Yule 3");

    game.dc20rpg.events.registerEventTrigger("trgrApexAction", "Apex Action");
    game.dc20rpg.events.registerEventTrigger("trgrTopOfRound", "Round Start");
});



/**
 * Runs when combat updates
 * Checks to see if it is the top of a round (aka Round X Turn 0), then runs the round start code
 */
Hooks.on("updateCombat", async (combat, changed, options, userId) => {
    if (!combat.started) return;
    const currentTurn = combat.turn;

    if (currentTurn == 0) {
        topOfTheRound(combat);
    }

});



/**
 * Not yet in use
 */
function global() {

    const tokensInScene = getTokensInActiveScene();

    for (let i = 0; i < tokensInScene.length; i++) {
        let targetedToken = tokensInScene[i];
        let targetedActor = targetedToken.actor;
        //DO stuff that targets everyone

    }

}

/**
 * Gets all active tokens in a scene.
 */
function getTokensInActiveScene() {
    return this.game.scenes.active.tokens.contents;
}

/**
 * At the start of a round this runs
 * If the target is not incapacitated it triggers "Apex Action"
 * @param {Combat} combat 
 */
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
            game.dc20rpg.events.runEventsFor("trgrApexAction", combatActor);
        }
    });
}
