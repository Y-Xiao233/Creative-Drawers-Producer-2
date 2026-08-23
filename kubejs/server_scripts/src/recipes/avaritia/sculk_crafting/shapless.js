ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/avaritia/sculk_crafting/shapeless/"

    const recipes = [
        {
            "output": "4x minecraft:echo_shard",
            "inputs":[
                'minecraft:sculk'
            ],
            "id": "echo_shard"
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
            addToJsonArray(array,createDefaultJsonObject("item",input))
        })
        event.custom({
            "type": "avaritia:shapeless_table",
            "ingredients":array,
            "result": {
                "count": output.getCount(),
                "id": output.getId()
            },
            "tier": 1
        }).id(prefix + recipe.id)
    })
})