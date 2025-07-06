/**
 * 
 * @param {String} key 
 * @param {Array} labels 
 * @returns 
 */
function getLabelFromKey(key, labels) {
    if (!labels) return key;
    let label = labels[key];
    if (label) return label;
    else return key;
}

/**
 * Get a random value based on the weight of the random values.
 * @param {*} options A value and a weight
 * @returns {*} The value of the random selection
 */
function getRandomWeighted(options) {
    var i;

    var weights = [options[0].weight];

    for (i = 1; i < options.length; i++)
        weights[i] = options[i].weight + weights[i - 1];

    var random = Math.random() * weights[weights.length - 1];

    for (i = 0; i < weights.length; i++)
        if (weights[i] > random)
            break;

    return options[i].value;
}

/**
 * Takes a string and capitalizes the first letter.
 * @param {String} word lowercase string
 * @returns string with an uppercase first letter
 */
function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

/**
 * Takes a string and capializes the first letter of each word
 * @param {String} str string of words
 * @returns string of words with each word starting with a capital letter
 */
function capitalizeWords(str) {
    return str.split(' ').map(word => capitalizeFirstLetter(word)).join(' ');
}

/**
 * Takes an object and splits it up into an array
 * @param {*} objectToSplit the object to be converted to an array
 * @returns the object as an array
 */
function splitObj(objectToSplit) {
    return Object.keys(objectToSplit);
}
/**
 * Selects a random object from an array
 * @param {Array} objArray array of objects
 * @returns a random object
 */
function getRandomFromArray(objArray) {
    return objArray.at(getRandomInt(1, objArray.length) - 1);
}
/**
 * Gives a random integer
 * @param {*} min the lowesst integer to be selected
 * @param {*} max the largest integer to me selected
 * @returns random integer between the two numbers
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    if (max > min)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    else
        return Math.floor(Math.random() * (min - max + 1)) + max;
}
/**
 * Get a random true or false outcome
 * @returns random boolean
 */
function getRandomBoolean() {
    return Math.random() < 0.5;
}

/**
 * Get a random boolean outcome based on a probability
 * @param {double} percent probability to be true
 * @returns true or false
 */
function getRandomFromProbability(percent) {
    if (percent > 1) percent = percent / 100.00;

    return Math.random() < percent;

}

/**
 * Get a random DC20 unit of time
 * @returns days/minutes/hours/months/rounds/turns/permanent/until canceled/years
 */
function getRandomTimeUnit() {
    return getRandomFromArray(splitObj(CONFIG.DC20RPG.DROPDOWN_DATA.timeUnits));
}
function getRandomSpellType() {
    return getRandomFromArray(splitObj(CONFIG.DC20RPG.DROPDOWN_DATA.spellTypes));
}
function getRandomSpellList() {
    return getRandomFromArray(splitObj(CONFIG.DC20RPG.DROPDOWN_DATA.spellLists));
}
function getRandomSize() {
    return getRandomFromArray(splitObj(CONFIG.DC20RPG.DROPDOWN_DATA.sizes));
}
function getRandomMovementType() {
    return getRandomFromArray(splitObj(CONFIG.DC20RPG.DROPDOWN_DATA.moveTypes));
}
function getRandomMagicSchool() {
    return getRandomFromArray(splitObj(CONFIG.DC20RPG.DROPDOWN_DATA.magicSchools));
}
function getRandomTargetType() {
    return getRandomFromArray(splitObj(CONFIG.DC20RPG.DROPDOWN_DATA.invidualTargets));
}
function getRandomFormulaCategory() {
    return getRandomFromArray(splitObj(CONFIG.DC20RPG.DROPDOWN_DATA.formulaCategories));
}
function getRandomHealingType() {
    return getRandomFromArray(splitObj(CONFIG.DC20RPG.DROPDOWN_DATA.healingTypes));
}
function getRandomAreaType() {
    return getRandomFromArray(splitObj(CONFIG.DC20RPG.DROPDOWN_DATA.areaTypes));
}
function getRandomCondition() {
    return getRandomFromArray(splitObj(CONFIG.DC20RPG.DROPDOWN_DATA.conditions));
}
function getRandomDuration() {
    return getRandomFromArray(splitObj(CONFIG.DC20RPG.DROPDOWN_DATA.durations));
}
function getRandomItemType() {
    return getRandomFromArray(splitObj(CONFIG.DC20RPG.DROPDOWN_DATA.inventoryTypes));
}
function getRandomWeaponType() {
    return getRandomFromArray(splitObj(CONFIG.DC20RPG.DROPDOWN_DATA.weaponTypes));
}
function getRandomDamage() {
    return getRandomFromArray(splitObj(CONFIG.DC20RPG.DROPDOWN_DATA.damageTypes));
}
function getRandomElementalDamage() {
    return getRandomFromArray(splitObj(CONFIG.DC20RPG.DROPDOWN_DATA.elementalDamageTypes));
}
function getRandomMysticalDamage() {
    return getRandomFromArray(splitObj(CONFIG.DC20RPG.DROPDOWN_DATA.mysticalDamageTypes));
}
function getRandomPhysicalDamageType() {
    return getRandomFromArray(splitObj(CONFIG.DC20RPG.DROPDOWN_DATA.physicalDamageTypes));
}
function getRandomEquipmentType() {
    return getRandomFromArray(splitObj(CONFIG.DC20RPG.DROPDOWN_DATA.equipmentTypes));
}
function getRandomConsumableType() {
    return getRandomFromArray(splitObj(CONFIG.DC20RPG.DROPDOWN_DATA.consumableTypes));
}
function getRandomMeleeWeaponStyle() {
    return getRandomFromArray(splitObj(CONFIG.DC20RPG.DROPDOWN_DATA.meleeWeaponStyles));
}
function getRandomRangedWeaponStyle() {
    return getRandomFromArray(splitObj(CONFIG.DC20RPG.DROPDOWN_DATA.rangedWeaponStyles));
}
function getRandomWeaponStyle() {
    return getRandomFromArray(splitObj(CONFIG.DC20RPG.DROPDOWN_DATA.weaponStyles));
}
