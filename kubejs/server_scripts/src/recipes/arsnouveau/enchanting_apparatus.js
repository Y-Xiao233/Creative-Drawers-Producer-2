ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/ars_nouveau/enchanting_apparatus/"

    const recipes = [
        {
            "output":'ars_nouveau:drygmy_charm',
            "inputs":[
                'mysticalagriculture:tertium_seeds',
                'minecraft:apple',
                'minecraft:wheat',
                'minecraft:carrot',
                'minecraft:sweet_berries',
                'ars_nouveau:source_gem',
                'ars_nouveau:source_gem',
                'ars_nouveau:source_gem'
            ],
            "active":'ars_nouveau:manipulation_essence',
            "source":1000,
            "id":"drygmy_charm"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.ars_nouveau.enchanting_apparatus(recipe.inputs,recipe.active,recipe.output,recipe.source).id(prefix + recipe.id)
    })
})