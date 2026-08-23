/**
 * 
 * @param {$CommandContext_<$CommandSourceStack_>} ctx 
 * @param {string} path 
 */
function generateInfusionRecipe(ctx,path){
const {player} = ctx.source
    const items = player.getInventory().asContainer()
    const json = createJsonObject()
    let list = []
    let output = items.getStackInSlot(0).id
    let count = items.getStackInSlot(0).count
    let slots = [9,10,11,20,29,28,27,18,19]
    slots.forEach(slot =>{
        let id = items.getStackInSlot(slot).id
        if(id !== "minecraft:air"){
            list.push(id)
        }
    })

    addToJsonObject(json,"output",output)
    addToJsonObject(json,"count",count)
    
    const keys = createJsonArray()
    for(let i = 0; i < list.length; i ++){
        if(i == 8){
            addToJsonObject(json,"input",list[i])
        }else{
            addToJsonArray(keys,createDefaultJsonObject("item",list[i]))
        }
    }
    addToJsonObject(json,"ingredients",keys)
    addToJsonObject(json,"id",output.substring(output.indexOf(":") + 1))

    JsonIO.write(path,json)
    player.tell(Text.of(JsonIO.toPrettyString(json)).green().clickCopy(JsonIO.toPrettyString(json)).hover("Infusion Recipe(Click to Copy)"))
}