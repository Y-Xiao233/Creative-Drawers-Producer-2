ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/draconicevolution/fusion_crafting/"

    /**
     "draconium"
     "wyvern"
     "draconic"
     "chaotic"
    */
    const recipes = [
        {
            "output":"kubejs:spirit_shard",
            "inputs":[
                'malum:arcane_spirit',
                'malum:infernal_spirit',
                'malum:sacred_spirit',
                'malum:earthen_spirit'
            ],
            "catalyst":'kubejs:dao_ze_origin_topological_lattice',
            "level":"draconium",
            "energy":1000000
        },
        {
            "output":"32x draconicevolution:awakened_draconium_ingot",
            "inputs":[
                'mysticalagriculture:awakened_supremium_ingot',
                'mysticalagriculture:awakened_supremium_ingot',
                'mysticalagriculture:awakened_supremium_ingot',
                'mysticalagriculture:awakened_supremium_ingot',
                'draconicevolution:draconium_block',
                'draconicevolution:dragon_heart',
                'draconicevolution:wyvern_core',
                'draconicevolution:wyvern_core'
            ],
            "catalyst":'16x draconicevolution:draconium_ingot',
            "level":"wyvern",
            "energy":10000000
        },
        {
            "output":'12x kubejs:alloy_subatomic',
            "inputs":[
                'mekanism:atomic_disassembler',
                'actuallyadditions:atomic_reconstructor',
                'occultism:dragonyst_dust',
                'draconicevolution:wyvern_core'
            ],
            "catalyst":'8x mekanismsun:supernova_alloy',
            "level":"draconic",
            "energy":10000000
        },
        {
            "output":'kubejs:quantum_control_circuit',
            "inputs":[
                'cataclysm:witherite_ingot',
                'kubejs:alloy_subatomic',
                'malum:eldritch_spirit',
                'malum:eldritch_spirit'
            ],
            "catalyst":'mekanismsun:supernova_control_circuit',
            "level":"draconic",
            "energy":10000000
        },
        {
            "output":'8x kubejs:alloy_singular',
            "inputs":[
                'mekanism_extras:qio_drive_singularity',
                'extendedcrafting:ultimate_singularity',
                'ae2lt:overload_singularity',
                'avaritia:eternal_singularity',
                'ae2omnicells:singularity_block',
                'extendedae_plus:oblivion_singularity'
            ],
            "catalyst":'8x kubejs:alloy_subatomic',
            "level":"chaotic",
            "energy":100000000000
        }
    ]

    recipes.forEach(recipe =>{
        let main = parseItem(recipe.catalyst)
        let result = parseItem(recipe.output)
        let inputs = createJsonArray()
        recipe.inputs.forEach(input =>{
            let temp = createJsonObject()
            let ingredient = createJsonObject()
            if(!input.startsWith("*")){
                addToJsonObject(temp,"consume",true)
                addToJsonObject(ingredient,"item",input)
            }else{
                addToJsonObject(ingredient,"item",input.substring(1))
                addToJsonObject(temp,"consume",false)
            }
            addToJsonObject(temp,"ingredient",ingredient)
            addToJsonArray(inputs,temp)
        })
        if(main.getCount() > 1){
            event.custom({
                "type": "draconicevolution:fusion_crafting",
                "catalyst": {
                    "type": "draconicevolution:stack",
                    "items": main.getId(),
                    "count":main.getCount()
                },
                "ingredients": inputs,
                "result": {
                    "count": result.getCount(),
                    "id": result.getId()
                },
                "techLevel": recipe.level,
                "totalEnergy": recipe.energy
            }).id(prefix + recipe.output.substring(recipe.output.indexOf(":") + 1))
        }else{
            event.custom({
                "type": "draconicevolution:fusion_crafting",
                "catalyst": {
                    "item": main.getId(),
                    "count":main.getCount()
                },
                "ingredients": inputs,
                "result": {
                    "count": result.getCount(),
                    "id": result.getId()
                },
                "techLevel": recipe.level,
                "totalEnergy": recipe.energy
            }).id(prefix + recipe.output.substring(recipe.output.indexOf(":") + 1))
        }
    })
})