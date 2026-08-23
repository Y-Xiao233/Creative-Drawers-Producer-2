ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/ae2lt/lighting_simulation/"

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
            "output":'ae2lt:overload_alloy',
            "cost":1,
            "mode":1,
            "inputs":[
                'advanced_ae:quantum_alloy',
                'ae2lt:overload_crystal_dust'
            ],
            "id":"overload_alloy"
        },
        {
            "output":'ae2lt:tesla_coil',
            "cost":64,
            "mode":1,
            "inputs":[
                '4x ae2lt:overload_machine_frame',
                '4x ae2lt:overload_processor',
                '4x ae2:crystal_resonance_generator'
            ],
            "id":"tesla_coil"
        },
        {
            "output":'ae2lt:perfect_electro_chime_crystal',
            "cost":96,
            "mode":1,
            "inputs":[
                'ae2lt:electro_chime_crystal',
                '64x ae2lt:overload_singularity'
            ],
            "id":"perfect_electro_chime_crystal"
        },
        {
            "output":'ae2lt:overload_alloy_plate',
            "cost":4,
            "mode":1,
            "inputs":[
                'minecraft:netherite_ingot',
                'ae2lt:overload_alloy',
                'ae2lt:overload_processor'
            ],
            "id":"overload_alloy_plate"
        },
        {
            "output":'ae2lt:ultimate_overload_core',
            "cost":4,
            "mode":1,
            "inputs":[
                '8x ae2lt:overload_singularity',
                '4x ae2lt:overload_alloy_plate',
                '4x minecraft:sculk'
            ],
            "id":"ultimate_overload_core"
        },
        {
            "output":'ae2lt:lightning_collapse_matrix',
            "cost":256,
            "mode":1,
            "inputs":[
                'ae2lt:perfect_electro_chime_crystal',
                '8x ae2lt:ultimate_overload_core'
            ],
            "id":"lightning_collapse_matrix"
        },
        {
            "output":'ae2lt:overload_singularity',
            "cost":8,
            "mode":1,
            "inputs":[
                '256x ae2:singularity',
                'minecraft:nether_star',
                '4x minecraft:echo_shard'
            ],
            "id":"overload_singularity"
        }
    ]

    recipes.forEach(recipe =>{
        let output = Item.of(recipe.output)
        if(recipe.output.indexOf("x ") !== -1){
            let args = recipe.output.split("x ")
            output = Item.of(args[1])
            output.setCount(args[0])
        }
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
        event.custom({
            "type": "ae2lt:lightning_simulation",
            "priority": 0,
            "inputs": array,
            "result": {
                "count": output.getCount(),
                "id": output.getId()
            },
            "totalEnergy": recipe.mode == 1 ? recipe.cost * 20000 : recipe.cost * 8 * 20000,
            "lightningCost":recipe.cost,
            "lightningTier": recipe.mode == 1 ? "high_voltage" : "extreme_high_voltage"
        }).id(prefix + recipe.id)
    })
})