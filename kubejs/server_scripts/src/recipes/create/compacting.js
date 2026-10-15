ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/create/compacting/"

    const recipes = [
        {
            "output":'extendedcrafting:black_iron_slate',
            "input":'32x extendedcrafting:black_iron_ingot',
            "id":"black_iron_slate"
        },
        {
            "output":'create:blaze_cake_base',
            "input":[
                'minecraft:egg',
                'industrialforegoing:pink_slime_ingot',
                'create:cinder_flour'
            ],
            "id":"blaze_cake_base"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.create.compacting(recipe.output,recipe.input).id(prefix + recipe.id)
    })
})