/**
 * 
 * @param {$CommandContext_<$CommandSourceStack_>} ctx 
 * @param {string} path 
 */
function generateFluidShapedRecipe(ctx,path){
    const {player} = ctx.source
    const items = player.getInventory().asContainer()
    const json = createJsonObject()
    let list = []
    var p1 = "",p2 = "",p3 = ""
    let pattern = createJsonArray()
    let output = items.getStackInSlot(0).id
    let fluid = items.getStackInSlot(1).id
    let count = items.getStackInSlot(0).count
    for(let i = 9; i <= 11; i ++){
        let id = items.getStackInSlot(i).id
        if(id == "minecraft:air"){
            p1 += " "
        }else{
            if(list.indexOf(id) == -1){
                list.push(id)
            }
            p1 += String.fromCharCode(65 + list.indexOf(id))
        }
        if(i == 11){
            addToJsonArray(pattern,p1)
        }
    }

    for(let i = 18; i <= 20; i ++){
        let p = []
        let id = items.getStackInSlot(i).id
        if(id == "minecraft:air"){
           p2 += " "
        }else{
            if(list.indexOf(id) == -1){
                list.push(id)
            }
            p2 += String.fromCharCode(65 + list.indexOf(id))
        }
        if(i == 20){
            addToJsonArray(pattern,p2)
        }
    }

    for(let i = 27; i <= 29; i ++){
        let p = []
        let id = items.getStackInSlot(i).id
        if(id == "minecraft:air"){
            p3 += " "
        }else{
            if(list.indexOf(id) == -1){
                list.push(id)
            }
            p3 += String.fromCharCode(65 + list.indexOf(id))
        }
        if(i == 29){
            addToJsonArray(pattern,p3)
        }
    }

    const fluid_id = fluid.substring(0,fluid.indexOf("_bucket"))
    if(count <= 1){
        addToJsonObject(json,"output",output)
    }else{
        addToJsonObject(json,"output",count + "x " + output)
    }
    addToJsonObject(json,"fluid",fluid_id)
    addToJsonObject(json,"pattern",pattern)
    const keys = createJsonObject()
    for(let i = 0; i < list.length; i ++){
        addToJsonObject(keys,String.fromCharCode(65 + i),list[i])
    }
    addToJsonObject(json,"key",keys)
    addToJsonObject(json,"id",output.substring(output.indexOf(":") + 1))
    JsonIO.write(path,json)
    player.tell(Text.of(JsonIO.toPrettyString(json)).green().clickCopy(JsonIO.toPrettyString(json)).hover("Fluid Shaped Recipe(Click to Copy)"))
}