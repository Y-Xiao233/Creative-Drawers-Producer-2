ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/avaritia/end_crafting/"

    const recipes = [
        {
            "type": "avaritia:shaped_table",
            "pattern": [
                "ABCDCBA",
                "BAEDEAB",
                "CEAFAEC",
                "DDFGFDD",
                "CEAFAEC",
                "BAEDEAB",
                "ABCDCBA"
            ],
            "key": {
                "A": {
                "item": "ars_technica:source_motor"
                },
                "B": {
                "item": "create:windmill_bearing"
                },
                "C": {
                "item": "createmoremachines:beyond_alloy_block"
                },
                "D": {
                "item": "create:steam_engine"
                },
                "E": {
                "item": "create:large_water_wheel"
                },
                "F": {
                "item": "actuallyadditions:iron_casing"
                },
                "G": {
                "item": "extendedae_plus:infinity_core"
                }
            },
            "result": {
                "id": 'create:creative_motor'
            },
            "tier": 3
        }
    ]

    recipes.forEach(recipe =>{
        event.custom(recipe).id(prefix + recipe.result.id.substring(recipe.result.id.indexOf(":") + 1))
    })
})