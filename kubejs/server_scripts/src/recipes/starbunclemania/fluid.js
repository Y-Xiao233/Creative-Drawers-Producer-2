ServerEvents.recipes(event =>{
    const recipes = [
        [
            "mekanism:nutritional_paste",
            0.02
        ],
        [
            "industrialforegoing:latex",
            0.6
        ],
        [
            "ifeu:liquid_dragon_breath",
            8
        ]
    ]

    recipes.forEach(([fluid,ratio]) =>{
        event.custom({
            "type": "starbunclemania:fluid_sourcelink",
            "fluid": fluid,
            "mb_to_source_ratio": ratio
        })
    })
})