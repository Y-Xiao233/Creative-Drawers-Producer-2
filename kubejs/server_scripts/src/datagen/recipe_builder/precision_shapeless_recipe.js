/**
 * 
 * @param {$CommandContext_<$CommandSourceStack_>} ctx 
 * @param {string} path 
 */
function generatePrecisionShapelessRecipe(ctx,path){
    const {player} = ctx.source
    const items = player.getInventory().asContainer()
    const json = createJsonObject()
    let list = createJsonArray()
    let output = items.getStackInSlot(0).id
    let count = items.getStackInSlot(0).count
    for(let i = 9; i <= 11; i ++){
        let id = items.getStackInSlot(i).id
        if(id !== "minecraft:air"){
            addToJsonArray(list,id)
        }
    }

    for(let i = 18; i <= 20; i ++){
        let id = items.getStackInSlot(i).id
        if(id !== "minecraft:air"){
            addToJsonArray(list,id)
        }
    }

    for(let i = 27; i <= 29; i ++){
        let id = items.getStackInSlot(i).id
        if(id !== "minecraft:air"){
            addToJsonArray(list,id)
        }
    }

    if(count <= 1){
        addToJsonObject(json,"output",output)
    }else{
        addToJsonObject(json,"output",count + "x " + output)
    }
    addToJsonObject(json,"chance",1)
    addToJsonObject(json,"inputs",list)
    addToJsonObject(json,"id",output.substring(output.indexOf(":") + 1))
    JsonIO.write(path,json)
    player.tell(Text.of(JsonIO.toPrettyString(json)).green().clickCopy(JsonIO.toPrettyString(json)).hover("Precision Shapeless Recipe(Click to Copy)"))
}