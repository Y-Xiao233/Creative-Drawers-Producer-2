ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/apothic_enchanting/infusion/"

    const recipes = [
        {
            "output":"kubejs:enchanted_time_crystal",
            "input":'justdirethings:time_crystal_block',
            "require":[100,100,100],
            "id":"enchanted_time_crystal"
        },
        {
            "output":'occultism:storage_stabilizer_tier1',
            "input":'occultism:storage_stabilizer_tier0',
            "require":[60,100,100],
            "id":"storage_stabilizer_tier1"
        }
    ]

    recipes.forEach(recipe =>{
        let output = Item.of(recipe.output)
        if(recipe.output.indexOf("x ") !== -1){
            let args = recipe.output.split("x ")
            output = Item.of(args[1])
            output.setCount(args[0])
        }
        event.custom({
            "type": "apothic_enchanting:infusion",
            "input": {
                "item": recipe.input
            },
            "requirements": {
                "eterna": recipe.require[0],
                "quanta": recipe.require[1],
                "arcana": recipe.require[2]
            },
            "result": {
                "id": output.getId(),
                "count": output.getCount()
            }
        }).id(prefix + recipe.id)
    })
})