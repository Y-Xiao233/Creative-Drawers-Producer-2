ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/ae2lt/firmament_conversion/"

    const recipes = [
        {
            "outputs":[
                'mekanism_extras:supreme_control_circuit'
            ],
            "inputs":[
                '2x mekanism_extras:absolute_control_circuit',
                'mekanism_extras:alloy_thermonuclear'
            ],
            "time":100,
            "id":"supreme_control_circuit"
        },
        {
            "outputs":[
                '8x ae2lt:firmament_alloy_ingot'
            ],
            "inputs":[
                '4x ae2lt:overload_alloy',
                '2x ae2lt:firmament_mixture',
                '2x mekanism_extras:supreme_control_circuit'
            ],
            "time":100,
            "id":"firmament_alloy_ingot"
        },
        {
            "outputs":[
                'mekanism_extras:cosmic_control_circuit'
            ],
            "inputs":[
                '2x mekanism_extras:supreme_control_circuit',
                'mekanism_extras:alloy_shining'
            ],
            "time":100,
            "id":"cosmic_control_circuit"
        },
        {
            "outputs":[
                'mekanism_extras:infinite_control_circuit'
            ],
            "inputs":[
                '2x mekanism_extras:supreme_control_circuit',
                'mekanism_extras:alloy_spectrum'
            ],
            "time":100,
            "id":"infinite_control_circuit"
        },
        {
            "outputs":[
                '32x ae2lt:firmament_alloy_ingot'
            ],
            "inputs":[
                '64x extendedcrafting:crystaltine_ingot',
                '8x ae2lt:firmament_mixture',
                '8x mekanism_extras:supreme_control_circuit'
            ],
            "time":20,
            "id":"firmament_alloy_ingot_2"
        }
    ]

    recipes.forEach(recipe =>{
        let results = createJsonArray()
        recipe.outputs.forEach(output =>{
            let item = parseItem(output)
            let ingredient = createDefaultJsonObject("id",item.getId())
            addToJsonObject(ingredient,"count",item.getCount())
            addToJsonArray(results,ingredient)
        })

        let inputs = createJsonArray()
        recipe.inputs.forEach(input =>{
            let item = parseItem(input)
            let ingredient = createDefaultJsonObject("ingredient",createDefaultJsonObject("item",item.getId()))
            addToJsonObject(ingredient,"count",item.getCount())
            addToJsonArray(inputs,ingredient)
        })
        event.custom({
            "type": "ae2lt:firmament_conversion",
            "inputs":inputs,
            "results":results,
            "processTime":recipe.time
        }).id(prefix + recipe.id)
    })
})