ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/ae2lt/lightning_assembly/"

    const recipes = [
        {
            "output": 'ae2lt:electromagnetic_railgun',
            "cost":1024,
            "mode":2,
            "inputs": [
                '2x ae2lt:ultimate_overload_core',
                '96x ae2lt:firmament_alloy_ingot',
                '48x ae2lt:overload_alloy_plate',
                '4x kubejs:dao_ze_origin_topological_lattice'
            ],
            "id": "electromagnetic_railgun"
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
        event.custom({
            "type": "ae2lt:lightning_assembly",
            "priority": 0,
            "inputs": array,
            "result": {
                "id": output.getId(),
                "count": output.getCount()
            },
            "totalEnergy": recipe.mode == 1 ? recipe.cost * 20000 : recipe.cost * 8 * 20000,
            "lightningCost": recipe.cost,
            "lightningTier": recipe.mode == 1 ? "high_voltage" : "extreme_high_voltage"
        }).id(prefix + recipe.id)
    })
})