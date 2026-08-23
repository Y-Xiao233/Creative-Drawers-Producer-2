/**
 * 
 * @param {$CommandContext_<$CommandSourceStack_>} ctx 
 * @param {string} path 
 * @param {String} name 
 */
function generateCrystalSeedModels(ctx,path,name){
    let age0 = "ae2cs:item/" + name + "_0"
    let age1 = "ae2cs:item/" + name + "_1"
    let age2 = "ae2cs:item/" + name + "_2"
    let model0 = {
        "parent": "minecraft:item/generated",
        "overrides": [
            {
            "model": age1,
            "predicate": {
                "ae2cs:age": 0.333
            }
            },
            {
            "model": age2,
            "predicate": {
                "ae2cs:age": 0.666
            }
            }
        ],
        "textures": {
            "layer0": age0
        }
    }
    let model1 = {
        "parent": "minecraft:item/generated",
        "textures": {
            "layer0": age1
        }
    }
    let model2 = {
        "parent": "minecraft:item/generated",
        "textures": {
            "layer0": age2
        }
    }
    JsonIO.write(path + name + ".json",model0)
    JsonIO.write(path + name + "_1.json",model1)
    JsonIO.write(path + name + "_2.json",model2)
}