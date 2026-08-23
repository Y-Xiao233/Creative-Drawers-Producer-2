ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/apothicenchantingaddition/ritual/"

    const recipes = [
        {
            "output":'apothicenchantingaddition:flux_stats_bookshelf_tier_4',
            "inputs":[
                'minecraft:bookshelf',
                'minecraft:netherite_block',
                'minecraft:sculk',
                'minecraft:heart_of_the_sea',
                'minecraft:dragon_breath',
                'allthecompressed:amethyst_block_1x',
                'allthecompressed:emerald_block_1x',
                'allthecompressed:blazing_crystal_block_1x',
                'extendedcrafting:nether_star_block',
                'allthecompressed:netherrack_2x',
                'allthecompressed:gold_block_2x',
                'allthecompressed:end_stone_2x',
                'justdirethings:celestigem_block'
            ],
            "time":100,
            "id":"flux_stats_bookshelf_tier_4"
        },
        {
            "output":'apothicenchantingaddition:flux_spawner',
            "inputs":[
                'avaritia:tesseract'
            ],
            "time":100,
            "id":"flux_spawner"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.apothicenchantingaddition.ritual(recipe.inputs,recipe.output).craftTime(recipe.time).id(prefix + recipe.id)
    })
})