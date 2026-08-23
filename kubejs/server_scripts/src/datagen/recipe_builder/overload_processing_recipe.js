/**
 * 
 * @param {$CommandContext_<$CommandSourceStack_>} ctx 
 * @param {string} path 
 */
function generateOverloadProcessingRecipe(ctx,path){
    const {player} = ctx.source
    const items = player.getInventory().asContainer()
    const json = createJsonObject()
    let inputs = []
    let input_counts = []
    let output = items.getStackInSlot(0).id
    let count = items.getStackInSlot(0).count
    for(let i = 9; i <= 11; i ++){
        let id = items.getStackInSlot(i).id
        let count = items.getStackInSlot(i).count
        if(id != "minecraft:air"){
            inputs.push(id)
            input_counts.push(count)
        }
    }

    for(let i = 18; i <= 20; i ++){
        let id = items.getStackInSlot(i).id
        if(id != "minecraft:air"){
            inputs.push(id)
            input_counts.push(count)
        }
    }

    for(let i = 27; i <= 29; i ++){
        let id = items.getStackInSlot(i).id
        if(id != "minecraft:air"){
            inputs.push(id)
            input_counts.push(count)
        }
    }

    const inputs_arr = createJsonArray()
    const input_counts_arr = createJsonArray()
    for(let i = 0; i < inputs.length; i++) {
        addToJsonArray(inputs_arr,inputs[i])
        addToJsonArray(input_counts_arr,input_counts[i])
    }
    addToJsonObject(json,"inputs",inputs_arr)
    addToJsonObject(json,"input_count",input_counts_arr)
    addToJsonObject(json,"output",output)
    addToJsonObject(json,"output_count",count)
    addToJsonObject(json,"totalEnergy",400000)
    addToJsonObject(json,"lightningCost",1)
    addToJsonObject(json,"lightningTier","high_voltage")
    addToJsonObject(json,"priority",0)

    addToJsonObject(json,"id",output.substring(output.indexOf(":") + 1))

    JsonIO.write(path,json)
    player.tell(Text.of(JsonIO.toPrettyString(json)).green().clickCopy(JsonIO.toPrettyString(json)).hover("Overload Processing Recipe(Click to Copy)"))
}