ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/mekanism/oxidizing/"

    const recipes = [
        [
            "200x kubejs:whirlwind",
            'forbidden_arcanus:whirlwind_prism',
            'whirlwind'
        ],
        [
            "400x kubejs:sea",
            'forbidden_arcanus:sea_prism',
            'sea'
        ],
        [
            "600x kubejs:nature",
            'kubejs:nature_prism',
            "nature"
        ],
        [
            "1000x kubejs:quantum",
            'kubejs:quantum_prism',
            "quantum"
        ],
        [
            "10x kubejs:void",
            'cdp2:void_matter',
            "void/from_void_matter"
        ],
        [
            "90x kubejs:void",
            'cdp2:void_block',
            "void/from_void_block"
        ],
        [
            "10x kubejs:flux",
            'fluxnetworks:flux_dust',
            "void/from_flux_dust"
        ],
        [
            "90x kubejs:flux",
            'fluxnetworks:flux_block',
            "void/from_flux_block"
        ],
        [
            "80x kubejs:rubber",
            'industrialforegoing:dryrubber',
            "rubber/from_dryrubber"
        ],
        [
            "1000x kubejs:rubber",
            'mekanismadditions:white_plastic',
            "rubber/from_white_plastic"
        ],
        [
            "10000x mekanism:nuclear_waste",
            'ae2cs:purified_irradiated_crystal',
            "nuclear_waste/from_purified_irradiated_crystal"
        ],
        [
            '10x mekanism:antimatter',
            'mekanism:pellet_antimatter',
            "antimatter/from_pellet_antimatter"
        ],
        [
            '100x mekanism:sulfuric_acid',
            'mekanism:dust_sulfur',
            "sulfuric_acid/from_dust_sulfur"
        ],
        [
            "100x mekanism:sulfur_dioxide",
            'minecraft:gunpowder',
            "sulfur_dioxide/from_gunpowder"
        ],
        [
            "1000x mekanism_extras:spectrum",
            'mekanism_extras:enriched_spectrum',
            "spectrum/from_enriched_spectrum"
        ]
    ]

    recipes.forEach(([output,input,id]) =>{
        event.recipes.mekanism.oxidizing(output,input).id(prefix + id)
    })
})