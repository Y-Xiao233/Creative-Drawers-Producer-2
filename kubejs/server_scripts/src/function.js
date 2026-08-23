const $JsonArray = Java.loadClass("com.google.gson.JsonArray")
const $JsonObject = Java.loadClass("com.google.gson.JsonObject")

/**
 * 
 * @param {$SimpleLevelKubeEvent} event 
 * @param {StringJS} rule 
 * @param {StringJS} value 
 * @param {boolean} silent 
 */
function setRule(event, rule, value, silent){
    if(event.getLevel().getGameRules().get(rule)!==value){
        event.server.getGameRules().set(rule,value)
        if(!silent){
            event.server.tell(Text.translate("tip.cdp2.gamerule_" + value,rule))
        }
    }
}

/**
 * 
 * @param {String} context 
 * @returns {$ItemStack}
 */
function parseItem(context){
    let output = Item.of(context)
    if(context.indexOf("x ") !== -1){
        let args = context.split("x ")
        output = Item.of(args[1])
        output.setCount(args[0])
    }
    return output
}

//Json Util

/**
 * 
 * @param {String} key 
 * @param {*} value 
 * @returns {$JsonObject}
 */
function asJsonObject(key,value){
    /**
     * @type {$JsonObject}
     */
    const obj = new $JsonObject()
    obj.add(key,value)
    return obj
}

/**
 * 
 * @param {$JsonObject} obj 
 * @param {String} key 
 * @param {*} value 
 * @returns {void}
 */
function addToJsonObject(obj,key,value){
    obj.add(key,value)
}

/**
 * 
 * @param {$JsonObject} obj 
 * @param {String[]} keys
 * @param {*[]} values  
 * @returns {void}
 */
function addsToJsonObject(obj,keys,values){
    for(let i = 0; i < keys.length; i ++){
        if(i < values.length){
            addToJsonObject(obj,keys[i],values[i])
        }
    }
}


/**
 * 
 * @returns {$JsonObject}
 */
function createJsonObject(){
    return new $JsonObject()
}

/**
 * 
 * @param {String} key 
 * @param {*} value 
 * @returns {$JsonObject}
 */
function createDefaultJsonObject(key,value){
    var json = createJsonObject()
    addToJsonObject(json,key,value)
    return json
}

/**
 * 
 * @returns {$JsonArray}
 */
function createJsonArray(){
    return new $JsonArray()
}


/**
 * 
 * @param {$JsonArray} array 
 * @param {*} value 
 */
function addToJsonArray(array,value){
    array["add(com.google.gson.JsonElement)"](value)
}

/**
 *
 * @param {$JsonArray} array
 * @param {*[]} values
 */
function addsToJsonArray(array,values){
    values.forEach(value => {
        addToJsonArray(array,value)
    })
}