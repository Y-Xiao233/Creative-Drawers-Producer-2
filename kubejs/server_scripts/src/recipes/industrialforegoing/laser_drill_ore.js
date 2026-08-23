ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/industrialforegoing/laser_drill_ore/"

    const recipes = [
        {
            "laser":'industrialforegoing:blue_laser_lens',
            "output":'minecraft:diamond',
            "dimension_blacklist":[],
            "dimension_whitelist":[],
            "depth_max":255,
            "depth_min":0,
            "weight":30,
            "id":"diamond"
        }
    ]

    recipes.forEach(recipe =>{
        event.custom({
            "type": "industrialforegoing:laser_drill_ore",
            "catalyst": {
                "item": recipe.laser
            },
            "output": {
                "count": 1,
                "item": recipe.output
            },
            "rarity": [
                {
                "biome_filter": {
                    "blacklist": [],
                    "whitelist": []
                },
                "depth_max": recipe.depth_max,
                "depth_min": recipe.depth_min,
                "dimension_filter": {
                    "blacklist": recipe.dimension_blacklist,
                    "whitelist": recipe.dimension_whitelist
                },
                "weight": recipe.weight
                }
            ]
        }).id(prefix + recipe.id)
    })
})