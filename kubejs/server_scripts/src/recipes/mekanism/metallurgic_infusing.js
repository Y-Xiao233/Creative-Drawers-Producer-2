ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/mekanism/metallurgic_infusing/"

    const recipes = [
        {
            output:'mekanism:ingot_steel',
            item:'minecraft:iron_ingot',
            infuse:"40x kubejs:void",
            id:"steel"
        },
        {
            output:'2x mekanism:alloy_infused',
            item:'mekanism:ingot_steel',
            infuse:"10x mekanism:redstone",
            id:"alloy_infused"
        },
        {
            output:'2x mekanism:basic_energy_cube',
            item:'minecraft:iron_block',
            infuse:"40x kubejs:flux",
            id:"basic_energy_cube"
        },
        {
            output:'mekanism:alloy_reinforced',
            item:'mekanism:alloy_infused',
            infuse:"20x kubejs:crystal",
            id:"alloy_reinforced"
        },
        {
            output:'ifeu:rubber_log',
            item:'#minecraft:logs',
            infuse:"20x kubejs:rubber",
            id:"rubber_log"
        },
        {
            output:'minecraft:wither_skeleton_skull',
            item:'naturesaura:infused_stone',
            infuse:"1000x mekanism:carbon",
            id:"wither_skeleton_skull"
        },
        {
            output:'mekanism_extras:alloy_thermonuclear',
            item:'createmoremachines:beyond_alloy',
            infuse:"120x mekanism_extras:thermonuclear",
            id:"alloy_thermonuclear"
        },
        {
            output:'create:polished_rose_quartz',
            item:'minecraft:quartz',
            infuse:"80x mekanism:redstone",
            id:"polished_rose_quartz"
        },
        {
            output:'forbidden_arcanus:obsidiansteel_ingot',
            item:'ae2lt:firmament_alloy_ingot',
            infuse:"80x mekanism:refined_obsidian",
            id:"obsidiansteel_ingot"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.metallurgic_infusing(recipe.output,recipe.item,recipe.infuse).id(recipe.id)
    })
})