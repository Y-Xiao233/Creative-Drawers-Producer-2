/**
 * 
 * @param {$CommandContext_<$CommandSourceStack_>} ctx 
 * @param {string} path 
 */
function generateShapelessRecipe(ctx,path){
    const {player} = ctx.source
    const items = player.getInventory().asContainer()
    const json = createJsonArray()
    let list = []
    let output = items.getStackInSlot(0).id
    let count = items.getStackInSlot(0).count
    for(let i = 9; i <= 11; i ++){
        let id = items.getStackInSlot(i).id
        if(id !== "minecraft:air"){
            list.push(id)
        }
    }

    for(let i = 18; i <= 20; i ++){
        let id = items.getStackInSlot(i).id
        if(id !== "minecraft:air"){
           list.push(id)
        }
    }

    for(let i = 27; i <= 29; i ++){
        let id = items.getStackInSlot(i).id
        if(id !== "minecraft:air"){
            list.push(id)
        }
    }

    if(count <= 1){
        addToJsonArray(json,output)
    }else{
        addToJsonArray(json,count + "x " + output)
    }
    const keys = createJsonArray()
    for(let i = 0; i < list.length; i ++){
        addToJsonArray(keys,list[i])
    }
    addToJsonArray(json,keys)
    addToJsonArray(json,output.substring(output.indexOf(":") + 1))

    JsonIO.write(path,json)
    player.tell(Text.of(JsonIO.toPrettyString(json)).green().clickCopy(JsonIO.toPrettyString(json)).hover("Shapeless Recipe(Click to Copy)"))
}