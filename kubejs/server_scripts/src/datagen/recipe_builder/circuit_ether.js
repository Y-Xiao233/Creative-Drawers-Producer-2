/**
 * 
 * @param {$CommandContext_<$CommandSourceStack_>} ctx 
 * @param {string} path 
 */
function generateCircuitEtherRecipe(ctx,path){
    const {player} = ctx.source
    const items = player.getInventory().asContainer()
    const json = createJsonObject()
    let inputs = []
    let input_counts = []
    let output = items.getStackInSlot(8).id
    let count = items.getStackInSlot(8).count
    for(let i = 0; i < 3; i ++){
        let id = items.getStackInSlot(i).id
        if(id !== "minecraft:air"){
            inputs.push(id)
            input_counts.push(items.getStackInSlot(i).getCount())
        }
    }

    addToJsonObject(json,"type","ae2cs:circuit_etcher_recipe_serializer")
    const result = createJsonObject()
    addToJsonObject(result,"count",count)
    addToJsonObject(result,"id",output)
    addToJsonObject(json,"result",result)

    const input_keys = ["input_a","input_b","input_c"]
    for(let i = 0; i < inputs.length; i ++){
        let input = createJsonObject()
        addToJsonObject(input,"item",inputs[i])
        addToJsonObject(input,"count",input_counts[i])
        addToJsonObject(json,input_keys[i],input)
    }
    addToJsonObject(json,"energy_cost",57600)
    addToJsonObject(json,"id",output.substring(output.indexOf(":") + 1))
    JsonIO.write(path,json)
    player.tell(Text.of(JsonIO.toPrettyString(json)).green().clickCopy(JsonIO.toPrettyString(json)).hover("Circuit Ether Recipe(Click to Copy)"))
}