ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/mekanism/enriching/"

    const recipes = [
        {
            output:'4x minecraft:cobblestone',
            input:'minecraft:gravel',
            id:"cobblestone"
        },
        {
            output:'mekanism:enriched_iron',
            input:'minecraft:iron_ingot',
            id:"enriched_iron"
        },
        {
            output:'forbidden_arcanus:arcane_crystal',
            input:'forbidden_arcanus:arcane_crystal_dust',
            id:"arcane_crystal"
        },
        {
            output:'minecraft:leather',
            input:'4x minecraft:rotten_flesh',
            id:"leather"
        },
        {
            output:'mysticalagriculture:soulium_dust',
            input:'4x mysticalagriculture:soul_dust',
            id:"soulium_dust"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.enriching(recipe.output,recipe.input).id(prefix + recipe.id)
    })
})