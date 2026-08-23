/**
 * 
 * @param {$CommandContext_<$CommandSourceStack_>} ctx 
 * @param {string} path 
 * @param {String} name 
 */
function generateCreativeDrawerModels(ctx,path,name){
    let blockstate = {
        "variants": {
            "subfacing=east": {
                "model": "cdp2:block/creative_drawer",
                "y": 90
            },
            "subfacing=north": {
                "model": "cdp2:block/creative_drawer"
            },
            "subfacing=south": {
                "model": "cdp2:block/creative_drawer",
                "y": 180
            },
            "subfacing=west": {
                "model": "cdp2:block/creative_drawer",
                "y": 270
            }
        }
    }
    let item_model = {
        "parent": "minecraft:builtin/entity"
    }
    JsonIO.write(path + "blockstates/" + name + ".json",blockstate)
    JsonIO.write(path + "models/item/" + name + ".json",item_model)

}