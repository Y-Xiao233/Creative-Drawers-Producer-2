ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/powah/energizing/"

    const recipes = [
        {
            "output": "powah:charged_snowball",
            "inputs": [
                "minecraft:snowball"
            ],
            "energy": 1000.0,
            "id": "charged_snowball"
        },
        {
            "output": 'minecraft:netherite_upgrade_smithing_template',
            "inputs": [
                'minecraft:netherite_block',
                'minecraft:netherrack',
                'minecraft:diamond_block'
            ],
            "energy": 1000.0,
            "id": "netherite_upgrade_smithing_template"
        },
        {
            "output": "cdp2:ritual_uphyxes",
            "inputs": [
                "createmoremachines:beyond_alloy",
                "forbidden_arcanus:eternal_stella",
                "jdte:time_fluid_catalyst",
                "avaritia:blaze_cube",
                "ifeu:dragon_star"
            ],
            "energy": 10000.0,
            "id": "ritual_uphyxes"
        },
        {
            "output": "occultism:storage_stabilizer_tier3",
            "inputs": [
                "occultism:storage_stabilizer_tier2",
                "occultism:storage_stabilizer_tier2",
                "avaritia:blaze_cube",
                "avaritia:blaze_cube",
                "occultism:storage_stabilizer_tier2",
                "occultism:storage_stabilizer_tier2"
            ],
            "energy": 10000.0,
            "id": "storage_stabilizer_tier3"
        },
        {
            "output": "cdp2:firmament_starship",
            "inputs": [
                "mysticalagriculture:tertium_essence",
                "mysticalagriculture:imperium_essence",
                "mysticalagriculture:supremium_essence",
                "mysticalagradditions:insanium_essence",
                "cdp2:absolute_essence",
                "cdp2:supreme_essence"
            ],
            "energy": 200000000,
            "id": "firmament_starship"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.powah.energizing(recipe.inputs,recipe.output,recipe.energy).id(prefix + recipe.id)
    })
})