ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/ae2cs/pulverizer/"

    const recipes = [
        {
            "output":'minecraft:gravel',
            "output_count":1,
            "input":'minecraft:cobblestone',
            "input_count":1,
            "energy":160,
            "id":"gravel"
        }
    ]

    recipes.forEach(recipe =>{
        event.custom({
            "type": "ae2cs:crystal_pulverizer_recipe_serializer",
            "energy_cost": recipe.energy,
            "input": {"count": recipe.input_count,"item": recipe.input},
            "result": {"count": recipe.output_count,"id": recipe.output}
        })
    })
})