ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/enderio/alloy_smelting/"

    const recipes = [
        {
            "output":'2x enderio:conductive_alloy_ingot',
            "inputs":[
                'create:brass_ingot',
                "powah:charged_snowball"
            ],
            "id":"conductive_alloy_ingot"
        },
        {
            "output":'3x enderio:energetic_alloy_ingot',
            "inputs":[
                'minecraft:netherite_ingot',
                'enderio:conductive_alloy_ingot',
                'advanced_ae:quantum_alloy'
            ],
            "id":"energetic_alloy_ingot"
        },
        {
            "output":'2x enderio:vibrant_alloy_ingot',
            "inputs":[
                'enderio:energetic_alloy_ingot',
                'mekanism:alloy_atomic'
            ],
            "id":"vibrant_alloy_ingot"
        },
        {
            "output":'3x enderio_evolution:melodic_alloy_ingot',
            "inputs":[
                'enderio:vibrant_alloy_ingot',
                'enderio:end_steel_ingot',
                'enderio_evolution:crystalline_pink_slime_ingot'
            ],
            "id":"melodic_alloy_ingot"
        },
        {
            "output":'3x enderio:dark_steel_ingot',
            "inputs":[
                'minecraft:coal_block',
                'minecraft:waxed_copper_block',
                'minecraft:obsidian'
            ],
            "id":"dark_steel_ingot"
        },
        {
            "output":'4x enderio_evolution:stellar_alloy_ingot',
            "inputs":[
                'industrialforegoingextra:dragon_star',
                '2x enderio_evolution:melodic_alloy_ingot',
                'occultism:dragonyst_dust'
            ],
            "id":"stellar_alloy_ingot"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.enderio.alloy_smelting(recipe.output,recipe.inputs).id(prefix + recipe.id)
    })
})