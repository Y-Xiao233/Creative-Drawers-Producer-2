ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/mekanism/reaction/"

    const recipes = [
        {
            "output":'4x actuallyadditions:black_quartz',
            "fluid":"1000x ifeu:liquid_dragon_breath",
            "chemical":"1000x mekanism:sodium",
            "item":'actuallyadditions:black_quartz_ore',
            "id":"black_quartz"
        },
        {
            "output":'actuallyadditions:canola_seeds',
            "fluid":"1000x ifeu:liquid_dragon_breath",
            "chemical":"1000x mekanism:superheated_sodium",
            "item":'minecraft:wheat_seeds',
            "id":"canola_seeds"
        },
        {
            "output":'64x extendedcrafting:luminessence',
            "fluid":"1000x actuallyadditions:refined_canola_oil",
            "chemical":"1000x mekanism:chlorine",
            "item":'cdp2:absolute_essence',
            "id":"luminessence"
        },
        {
            "output":'jdte:life_apple',
            "fluid":"1000x jdte:life_fluid_source",
            "chemical":"1000x mekanismgenerators:deuterium",
            "item":'mysticalagradditions:insanium_apple',
            "id":"life_apple"
        },
        {
            "output":'actuallyadditions:restonia_crystal',
            "chemical_output":"240x mekanism_extras:molten_thermonuclear",
            "fluid":"500x minecraft:lava",
            "chemical":"500x mekanism:superheated_sodium",
            "item":'actuallyadditions:empowered_restonia_crystal',
            "id":"molten_thermonuclear"
        },
        {
            "output":'64x ae2cs:irradiated_seed',
            "fluid":"10x kubejs:molten_firmament",
            "chemical":"1x mekanism:antimatter",
            "item":'64x ae2cs:nether_quartz_seed',
            "id":"irradiated_seed"
        },
        {
            "output":'8x extendedcrafting:crystaltine_block',
            "fluid":"50x kubejs:molten_firmament",
            "chemical":"1000x mekanism_extras:polonium-208",
            "item":'64x extendedcrafting:the_ultimate_block',
            "id":"crystaltine_block"
        },
        {
            "output":'8x naturesaura:calling_spirit',
            "fluid":"50x kubejs:molten_firmament",
            "chemical":"1000x mekanism_extras:polonium-208",
            "item":'8x extendedcrafting:the_ultimate_ingot',
            "id":"calling_spirit"
        },
        {
            "output":'kubejs:infinity_time_fluid_cell',
            "fluid":"1000x justdirethings:time_fluid_source",
            "chemical":"1000x mekanism_extras:molten_thermonuclear",
            "item":'appliedcreate:creative_stress_cell',
            "id":"infinity_time_fluid_cell"
        },
        {
            "output":'64x minecraft:prismarine_shard',
            "fluid":"1000x mekanism_extras:polonium-208",
            "chemical":"400x kubejs:sea",
            "item":'minecraft:lapis_block',
            "id":"prismarine_shard"
        }
    ]

    recipes.forEach(recipe =>{
        if(recipe.chemical_output === undefined){
            event.recipes.mekanism.reaction(recipe.item,recipe.fluid,recipe.chemical).itemOutput(recipe.output).duration(100).id(prefix + recipe.id)
        }else{
            event.recipes.mekanism.reaction(recipe.item,recipe.fluid,recipe.chemical).itemOutput(recipe.output).chemicalOutput(recipe.chemical_output).duration(100).id(prefix + recipe.id)
        }
    })
})