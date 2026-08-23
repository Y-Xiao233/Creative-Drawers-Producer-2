/**
 * 
 * @param {$CommandContext_<$CommandSourceStack_>} ctx 
 * @param {string} path 
 * @param {number} tier 
 */
function generateForbiddenRitualRecipe(ctx,path,tier){
const {player} = ctx.source
    const items = player.getInventory().asContainer()
    const json = createJsonObject()
    let list = []
    let input = items.getStackInSlot(19).id
    let output = items.getStackInSlot(0).id
    let count = items.getStackInSlot(0).count
    let slots = [9,10,11,20,29,28,27,18]
    slots.forEach(slot =>{
        let id = items.getStackInSlot(slot).id
        if(id !== "minecraft:air"){
            list.push(id)
        }
    })

    addToJsonObject(json,"output",output)
    addToJsonObject(json,"count",count)
    addToJsonObject(json,"input",input)
    addToJsonObject(json,"inputs",list)
    addToJsonObject(json,"duration",2)
    addToJsonObject(json,"essence",[0,0,0,0])
    addToJsonObject(json,"tier",tier)
    addToJsonObject(json,"id",output.substring(output.indexOf(":") + 1))

    JsonIO.write(path,json)
    player.tell(Text.of(JsonIO.toPrettyString(json)).green().clickCopy(JsonIO.toPrettyString(json)).hover("Forbidden Ritual Recipe(Click to Copy)"))
}