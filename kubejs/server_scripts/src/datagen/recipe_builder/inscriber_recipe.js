/**
 * 
 * @param {$CommandContext_<$CommandSourceStack_>} ctx 
 * @param {string} path 
 */
function generateInscriberRecipe(ctx,path){
const {player} = ctx.source
    const items = player.getInventory().asContainer()
    const json = createJsonObject()
    let list = []
    let output = items.getStackInSlot(0).id
    let count = items.getStackInSlot(0).count
    let slots = [9,18,27]
    slots.forEach(slot =>{
        let id = items.getStackInSlot(slot).id
        if(id !== "minecraft:air"){
            list.push(id)
        }
    })

    const locations = ["top","middle","bottom"]
    for(let i = 0; i < list.length; i ++){
        addToJsonObject(json,locations[i],list[i])
    }
    if(list.length < 3){
        addToJsonObject(json,locations[i],false)
        addToJsonObject(json,"mode",2)
    }else{
        addToJsonObject(json,"mode",1)
    }

    addToJsonObject(json,"output",output)
    addToJsonObject(json,"output_amount",count)
    addToJsonObject(json,"id",output.substring(output.indexOf(":") + 1))

    JsonIO.write(path,json)
    player.tell(Text.of(JsonIO.toPrettyString(json)).green().clickCopy(JsonIO.toPrettyString(json)).hover("Inscriber Recipe(Click to Copy)"))
}