ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/mekanism/combining/"

    const recipes = [
        {
            output:'64x minecraft:gravel',
            input:'64x cdp2:void_block',
            extra:'64x minecraft:black_dye',
            id:"gravel"
        },
        {
            output:'fluxnetworks:flux_core',
            input:'4x fluxnetworks:flux_dust',
            extra:'minecraft:emerald',
            id:"flux_core"
        },
        {
            output:'mekanism:steel_casing',
            input:'cdp2:frame',
            extra:'8x mekanism:ingot_steel',
            id:"steel_casing"
        },
        {
            output:'minecraft:lava_bucket',
            input:'minecraft:flint_and_steel',
            extra:'minecraft:bucket',
            id:"lava_bucket"
        },
        {
            output:'64x forbidden_arcanus:soulless_sand',
            input:'64x minecraft:soul_sand',
            extra:'forbidden_arcanus:soul_extractor',
            id:"soulless_sand"
        },
        {
            output:'mysticalagriculture:soulstone_cobble',
            input:'minecraft:cobblestone',
            extra:'forbidden_arcanus:soulless_sand',
            id:"soulstone_cobble"
        },
        {
            output:'4x naturesaura:infused_iron',
            input:'4x justdirethings:ferricore_ingot',
            extra:'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]',
            id:"infused_iron"
        },
        {
            output:'4x naturesaura:infused_iron_block',
            input:'4x justdirethings:ferricore_block',
            extra:'9x naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]',
            id:"infused_iron_block"
        },
        {
            output:'mekanism_extras:dust_radiance',
            input:'ae2cs:quantum_crystal_dust',
            extra:'mekmm:scrap_box',
            id:"dust_radiance"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.combining(recipe.output,recipe.input,recipe.extra).id(prefix + recipe.id)
    })
})