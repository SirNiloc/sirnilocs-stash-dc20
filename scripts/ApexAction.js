/**
 * Print to console if the script activates.
 */
Hooks.on("ready", function () {
    console.log("SirNiloc's Stash | Apex Action");
});

/**
 * See if it is time to run the apex action or if it is not the correct round for the action
 * @param {*} currentRound 
 * @param {*} apexStart 
 * @param {*} apexEnd 
 * @returns 
 */
function doApexAction(currentRound, apexStart, apexEnd) {
    if (apexStart <= currentRound || currentRound <= apexEnd) {
        return true;
    }

    return false;
}


/**
 * Do apex actions for Chris
 * @param {*} actor 
 */
function apexChris(actor) {
    yule1(actor);
    yule2(actor);
    yule3(actor);
}


/**
 * Round 3 all creatures on scene make a DC15 mental save, on fail become charmed.
 * @param {*} actor 
 */
async function yule1(actor) {
    const combat = game.combat;
    const round = combat.round;

    const allCombatants = combat.combatants.map(c => c.actor);

    if (round == 3) {
        let d = new Dialog({
            title: "Apex Action: Open to Me Your Mind",
            content: "<p>Chrisulhu targets all other creatures and they must save against 'Ancient Yule One'.</p>",
            buttons: {}
        });
        d.render(true);

        allCombatants.forEach(combatActor => {
            //Do mental save or become charmed for others
            if (debug) console.log("Running Yule 1");
        });
    } else if (debug) console.log("No Yule 1");
}

/**
 * Round 4-9 cast command on any creature charmed by you If the target passes the Charisma Save you may force the target to follow the command anyway and then they lose the charmed condition and they become immune to your charms permanently.
 * @param {*} actor 
 */
function yule2(actor) {
    const combat = game.combat;
    const round = combat.round;
    const allCombatants = combat.combatants.map(c => c.actor);


    if (round <= 9 && combat.round >= 4) {
        if (debug) console.log("Running Yule 2");


        allCombatants.forEach(combatActor => {
            //Populate command options

        });

        if (round == 4) {
            let d = new Dialog({
                title: "Apex Action: Suffer Me Now!",
                content: "<p><strong>Round 4+</strong>: Chrisulhu can cast command on any charmed creature.</p><p>If the target passes the <strong>Charisma Save</strong> Chrisulhu may force the target to follow the command anyway and then the target loses the charmed condition and they become immune to Chrisulhu's charms permanently.</p>",

                buttons: {}
            });
            d.render(true);
        }

    } else if (debug) console.log("Yule 2 requires between round 3 and 9; not round " + round);
}

/**
 * Round 10: Chrisulhu and all of the Dreadspawn fly up into the sky and all that is left is the glow of an aurora in the sky.
 * @param {*} actor 
 */
function yule3(actor) {
    const combat = game.combat;
    const round = combat.round;
    const allCombatants = combat.combatants.map(c => c.actor);

    if (round > 9) {
        if (debug) console.log("Running Yule 3");
        let d = new Dialog({
            title: "Apex Action: Away They All Flew Like the Down of a Thistle",
            content: "<p>Chrisulhu and all of the Dreadspawn fly up into the sky and all that is left is the glow of an aurora in the sky.</p>",
            buttons: {}
        });
        d.render(true);

        allCombatants.forEach(combatActor => {
            //Find all "deleteable" actors and delete them

        });

    } else if (debug) console.log("Yule 3 requires round 9 not round " + round);

}