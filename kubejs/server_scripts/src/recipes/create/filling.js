ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/create/filling/"

    const recipes = [
        {
            "output":'minecraft:nether_star',
            "inputs":[
                'ifeu:empty_nether_star',
                Fluid.of("industrialforegoing:ether_gas",1000)
            ],
            "id":"nether_star"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.create.filling(recipe.output,recipe.inputs).id(prefix + recipe.id)
    })
})