ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/productivebees/bee_spawning/"

    const recipes = [
        {
            "nest":'productivebees:obsidian_nest',
            "item":'create:creative_blaze_cake',
            "bee":"productivebees:draconic"
        },
        {
            "nest":'productivebees:coarse_dirt_nest',
            "item":'mysticalagriculture:skeleton_essence',
            "bee":"productivebees:skeletal"
        }
    ]

    recipes.forEach(recipe =>{
        event.custom({
            "type": "productivebees:bee_spawning",
            "ingredient": {
                "item": recipe.nest
            },
            "spawn_item": {
                "item": recipe.item
            },
            "results": [
                recipe.bee
            ],
            "biomes": "#c:is_overworld"
        }).id(prefix + recipe.bee.indexOf(recipe.bee.indexOf(":") + 1))
    })
})