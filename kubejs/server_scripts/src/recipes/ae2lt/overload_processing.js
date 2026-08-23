ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/ae2lt/overload_preocessing"

    /**
        mode
        1: 高压
        2: 极高压

        energy
        高压消耗 = 8x 极高压消耗
        能量消耗 = 高压消耗 x 20000
    */


    const recipes = [
        {
            "output": "36x kubejs:arcanus_processor",
            "cost":1,
            "mode":1,
            "inputs": [
                "4x forbidden_arcanus:deorum_block",
                "36x forbidden_arcanus:mundabitur_dust",
                "4x ae2cs:silicon_block"
            ],
            "id": "arcanus_processor"
        },
        {
            "output":'12x ae2lt:overload_alloy_plate',
            "cost":1,
            "mode":1,
            "inputs":[
                '4x minecraft:netherite_ingot',
                '4x ae2lt:overload_alloy',
                '4x ae2lt:overload_processor'
            ],
            "id":"overload_alloy_plate"
        },
        {
            "output":'ae2lt:ultimate_overload_core',
            "cost":1,
            "mode":1,
            "inputs":[
                '2x ae2lt:overload_singularity',
                'ae2lt:overload_alloy_plate',
                'minecraft:sculk'
            ],
            "id":"ultimate_overload_core"
        },
        {
            "output":'ae2lt:lightning_collapse_matrix',
            "cost":128,
            "mode":1,
            "inputs":[
                'ae2lt:perfect_electro_chime_crystal',
                '4x ae2lt:ultimate_overload_core'
            ],
            "id":"lightning_collapse_matrix"
        },
        {
            "output":'ae2lt:overload_singularity',
            "cost":1,
            "mode":1,
            "inputs":[
                '64x ae2:singularity',
                'minecraft:nether_star',
                'minecraft:echo_shard'
            ],
            "id":"overload_singularity"
        },
        {
            "output":'ae2lt:lightning_simulation_room',
            "cost":1,
            "mode":1,
            "inputs":[
                '16x ae2lt:overload_processor',
                '16x ae2lt:overload_alloy',
                '16x ae2lt:overload_crystal_block'
            ],
            "id":"lightning_simulation_room"
        },
        {
            "output":'36x appliedcreate:stress_processor',
            "cost":1,
            "mode":1,
            "inputs":[
                '4x create:andesite_alloy_block',
                '4x allthecompressed:netherrack_1x',
                '4x ae2cs:silicon_block'
            ],
            "id":"stress_processor"
        },
        {
            "output":'36x appliedcreate:advanced_stress_processor',
            "cost":1,
            "mode":1,
            "inputs":[
                '4x create:brass_block',
                '4x allthecompressed:netherrack_1x',
                '4x ae2cs:silicon_block'
            ],
            "id":"advanced_stress_processor"
        },
        {
            "output":'16x appliedsoul:ender_star',
            "cost":1,
            "mode":1,
            "inputs":[
                '16x minecraft:nether_star',
                '16x ae2:singularity',
                '16x minecraft:ender_pearl'
            ],
            "id":"ender_star"
        },
        {
            "output":'kubejs:colorful_star',
            "cost":4,
            "mode":2,
            "inputs":[
                'actuallyadditions:ender_star',
                'extendedcrafting:ender_star',
                'extendedcrafting:flux_star',
                'forbidden_arcanus:dark_nether_star',
                'appliedsoul:ender_star',
                'minecraft:nether_star',
                'ifeu:dragon_star'
            ],
            "id":"colorful_star"
        },
        {
            "output":'ae2lt:basic_topological_lattice',
            "cost":1,
            "mode":1,
            "inputs":[
                '4x minecraft:glass',
                '4x minecraft:quartz',
                '4x minecraft:lapis_lazuli',
                '4x minecraft:glowstone_dust',
                '4x minecraft:redstone',
                '2000x avaritia:infinity_catalyst'
            ],
            "inputFluid":"100x minecraft:lava",
            "id":"basic_topological_lattice"
        },
        {
            "output":'ae2lt:hyperdimensional_topological_lattice',
            "cost":1024,
            "mode":2,
            "inputs":[
                '64x ae2lt:entangled_topological_lattice',
                '4x mekanism_extras:alloy_shining',
                '1024x minecraft:sculk',
                '128x minecraft:crying_obsidian',
                '128x minecraft:shulker_shell',
                '128x minecraft:breeze_rod',
                '128x minecraft:dragon_breath',
                '128x minecraft:sculk_catalyst',
                'kubejs:colorful_star'
            ],
            "inputFluid":"kubejs:molten_firmament",
            "id":"hyperdimensional_topological_lattice"
        }
    ]

    recipes.forEach(recipe =>{
        let array = createJsonArray()
        recipe.inputs.forEach(input =>{
            let item = Item.of(input)
            if(input.indexOf("x ") !== -1){
                let args = input.split("x ")
                item = Item.of(args[1])
                item.setCount(args[0])
            }
            let ingredient = createDefaultJsonObject("ingredient",createDefaultJsonObject("item",item.getId()))
            addToJsonObject(ingredient,"count",item.getCount())
            addToJsonArray(array,ingredient)
        })
        let output = Item.of(recipe.output)
        if(recipe.output.indexOf("x ") !== -1){
            let args = recipe.output.split("x ")
            output = Item.of(args[1])
            output.setCount(args[0])
        }

        if(recipe.inputFluid == undefined || recipe.inputFluid == null){
            event.custom({
                "type": "ae2lt:overload_processing",
                "priority": 0,
                "inputs": array,
                "results": [{
                    "id": output.getId(),
                    "count": output.getCount()
                }],
                "totalEnergy": recipe.mode == 1 ? recipe.cost * 20000 : recipe.cost * 8 * 20000,
                "lightningCost": recipe.cost,
                "lightningTier": recipe.mode == 1 ? "high_voltage" : "extreme_high_voltage"
            }).id(prefix + recipe.id)
        }else{
            let inputFluid = Fluid.of(recipe.inputFluid)
            if(recipe.inputFluid.indexOf("x ") !== -1){
                let args = recipe.inputFluid.split("x ")
                inputFluid = Fluid.of(args[1],args[0])
            }
            event.custom({
                "type": "ae2lt:overload_processing",
                "priority": 0,
                "inputs": array,
                "results": [{
                    "id": output.getId(),
                    "count": output.getCount()
                }],
                "inputFluid": {
                    "id": inputFluid.getFluid().getId(),
                    "amount": inputFluid.getAmount()
                },
                "totalEnergy": recipe.mode == 1 ? recipe.cost * 20000 : recipe.cost * 8 * 20000,
                "lightningCost": recipe.cost,
                "lightningTier": recipe.mode == 1 ? "high_voltage" : "extreme_high_voltage"
            }).id(prefix + recipe.id)
        }
    })

    event.custom({
        "type": "ae2lt:overload_processing",
        "priority": 0,
        "inputs": [
            {
                "ingredient": {
                    "item": "advanced_ae:quantum_infused_dust"
                },
                "count": 16
            }
        ],
        "inputFluid": {
            "id": "minecraft:water",
            "amount": 16000
        },
        "resultFluid": {
            "id": "advanced_ae:quantum_infusion_source",
            "amount": 16000
        },
        "totalEnergy": 20000,
        "lightningCost": 1,
        "lightningTier": "high_voltage"
    }).id(prefix + "quantum_infusion_source")
})