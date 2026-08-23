ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/ae2lt/lighting_transform/"

    const recipes = [
        {
            "output":'ae2lt:overload_alloy',
            "inputs":[
                '4x advanced_ae:quantum_alloy',
                '4x ae2lt:overload_crystal_dust'
            ],
            "id":"overload_alloy"
        },
        {
            "output":'ae2lt:tesla_coil',
            "inputs":[
                '8x ae2lt:overload_machine_frame',
                '8x ae2lt:overload_processor',
                '8x ae2:crystal_resonance_generator'
            ],
            "id":"tesla_coil"
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
            "type": "ae2lt:lightning_transform",
            "priority": 0,
            "inputs": array,
            "result": {
                "count": output.getCount(),
                "id": output.getId()
            }
        }).id(prefix + recipe.id)

        
    })
})