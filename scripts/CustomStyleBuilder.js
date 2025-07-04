class CustomStyleRegistry {
    static customStylesRAVN = [];
    static customStyles = 0;

    /**
     * Creates a custom weapon style for DC20.
     * @param {String} customStyle this is the name of your new weapon style such as "pistol"
     */
    static createCustomStyle(customStyle, conditions) {

        var styleName = capitalizeWords(customStyle.trim() + " Style");

        var styleKey = customStyle.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, "");

        console.log("SirNiloc's Stash DC20 | Create Custom Style: " + styleName);

        CONFIG.DC20RPG.DROPDOWN_DATA.rangedWeaponStyles[styleKey] = styleName;
        CONFIG.DC20RPG.DROPDOWN_DATA.weaponStyles[styleKey] = styleName;

        var condition2Add = CustomStyleRegistry.buildCustomStyleConditional(styleKey, conditions);

        console.log("Add conditional");
        console.log(condition2Add);

        this.customStylesRAVN.push(condition2Add);
        this.customStyles++;

    }

    static addCustomStyleToActor(actor) {
        if (actor.system.conditionals === null);
        else {
            this.customStylesRAVN.forEach(conditional => actor.system.conditionals.push(conditional));

        }

    }

    static buildCustomStyleConditional(weaponStyle, conditions) {
        const weaponStyleLabel = getLabelFromKey(weaponStyle, CONFIG.DC20RPG.DROPDOWN_DATA.weaponStyles)

        var conditonalText = '[';
        var conditionCount = conditions.length;

        for (var i = 0; i < conditionCount - 1; i++) {
            conditonalText = conditonalText + '"' + conditions[i] + '", ';
        }

        conditonalText = conditonalText + '"' + conditions[conditionCount - 1] + '"]';

        return {
            hasConditional: true,
            condition: `target.hasAnyCondition(${conditonalText})`,
            bonus: '1',
            useFor: `system.weaponStyle=["${weaponStyle}"]&&system.weaponStyleActive=[${true}]`,
            name: `${weaponStyleLabel} Passive`,
            linkWithToggle: false,
            flags: {
                ignorePdr: false,
                ignoreMdr: false,
                ignoreResistance: {},
                ignoreImmune: {}
            },
            effect: null,
            addsNewRollRequest: false,
            rollRequest: {
                category: "",
                saveKey: "",
                contestedKey: "",
                dcCalculation: "",
                dc: 0,
                addMasteryToDC: true,
                respectSizeRules: false,
            },
        }
    }
}

Hooks.on("updateActor", (actor, data, options, userId) => {
    CustomStyleRegistry.addCustomStyleToActor(actor);
});