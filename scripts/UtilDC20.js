function getLabelFromKey(key, labels) {
    if (!labels) return key;
    let label = labels[key];
    if (label) return label;
    else return key;
}

/**
 * Get a random value based on the weight of the random values.
 * @param {*} options 
 * @returns 
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

function capitalizeWords(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function createCustomStyle(customStyle){
    
    var styleName = capitalizeWords(customStyle.trim()+ " Style");

    var styleKey = customStyle.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, "");

    console.log("SirNiloc's Stash DC20 | Create Custom Style: "+styleName);

    CONFIG.DC20RPG.DROPDOWN_DATA.rangedWeaponStyles[styleKey] = styleName;
    CONFIG.DC20RPG.DROPDOWN_DATA.weaponStyles[styleKey] = styleName;
}

function splitObj(objectToSplit) {
    return Object.keys(objectToSplit);
}
function getRandomFromArray(objArray) {
    return objArray.at(getRandomInt(1, objArray.length) - 1);
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomBoolean() {
    return Math.random() < 0.5;
}
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
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}