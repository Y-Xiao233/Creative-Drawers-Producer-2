ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/ifeu/precision_shapeless/"

    const recipes = [
        {
            "output":'ifeu:chance_addon_1',
            "inputs":[
                'minecraft:redstone_block',
                '#c:glass_panes',
                'minecraft:book',
                'industrialforegoing:gold_gear'
            ],
            "chance":0.6,
            "id":"chance_addon_1"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.ifeu.precision_shapeless(recipe.output,recipe.inputs,recipe.chance).id(prefix + recipe.id)
    })
})