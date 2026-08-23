/**
 * 
 * @param {$CommandContext_<$CommandSourceStack_>} ctx 
 * @param {string} path 
 */
function generateEnergizingRecipe(ctx,path){
    const {player} = ctx.source
    const items = player.getInventory().asContainer()
    const json = createJsonObject()
    const inputs = createJsonArray()
    let output = items.getStackInSlot(8).id
    let count = items.getStackInSlot(8).count
    for(let i = 0; i < 6; i ++){
        let id = items.getStackInSlot(i).id
        if(id !== "minecraft:air"){
            addToJsonArray(inputs,id)
        }
    }

    if(count <= 1){
        addToJsonObject(json,"output",output)
    }else{
        addToJsonObject(json,"output",count + "x " + output)
    }
    addToJsonObject(json,"inputs",inputs)
    addToJsonObject(json,"energy",10000)
    addToJsonObject(json,"id",output.substring(output.indexOf(":") + 1))
    JsonIO.write(path,json)
    player.tell(Text.of(JsonIO.toPrettyString(json)).green().clickCopy(JsonIO.toPrettyString(json)).hover("Energizing Recipe(Click to Copy)"))
}