ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/cdp2/void_sieve/"

    const recipes = [
        [
            ChanceIngredient.of('minecraft:oak_log'),
            [
                ChanceItemStack.of('minecraft:oak_sapling',0.1),
                ChanceItemStack.of('cdp2:apple_creative_drawer',0.01),
                ChanceItemStack.of('minecraft:apple',0.6)
            ],
            "oak_log"
        ],
        [
            ChanceIngredient.of("cdp2:void_block"),
            [
                ChanceItemStack.of("cdp2:void_matter_creative_drawer",0.01),
                ChanceItemStack.of("minecraft:oak_log",0.2)
            ],
            "void_matter"
        ],
        [
            ChanceIngredient.of('minecraft:gravel'),
            [
                ChanceItemStack.of('6x minecraft:redstone',0.4),
                ChanceItemStack.of('4x fluxnetworks:flux_dust',0.4),
                ChanceItemStack.of('4x minecraft:iron_ingot',0.6),
                ChanceItemStack.of('4x mekanism:ingot_osmium',0.4),
                ChanceItemStack.of('4x minecraft:copper_ingot',0.4),
                ChanceItemStack.of('minecraft:flint',0.4),
                ChanceItemStack.of('minecraft:emerald',0.2)
            ],
            "gravel"
        ],
        [
            ChanceIngredient.of('minecraft:dirt'),
            [
                ChanceItemStack.of('mysticalagriculture:spider_seeds',0.6),
                ChanceItemStack.of('mysticalagriculture:inferium_seeds',0.2),
                ChanceItemStack.of('mysticalagriculture:zombie_seeds',0.2),
                ChanceItemStack.of('occultism:datura',0.2),
                ChanceItemStack.of("minecraft:wheat_seeds",0.6)
            ],
            "dirt"
        ],
        [
            ChanceIngredient.of("minecraft:sand"),
            [
                ChanceItemStack.of('minecraft:gold_ingot',0.6),
                ChanceItemStack.of('minecraft:sugar_cane',0.6),
                ChanceItemStack.of('minecraft:lapis_lazuli',0.6),
                ChanceItemStack.of('minecraft:kelp',0.6)
            ],
            "sand"
        ],
        [
            ChanceIngredient.of('ae2:sky_stone_block'),
            [
                ChanceItemStack.of('minecraft:blaze_powder',0.6),
                ChanceItemStack.of('forbidden_arcanus:rune',0.4),
                ChanceItemStack.of('minecraft:quartz',0.4),
                ChanceItemStack.of('minecraft:ender_pearl',0.2)
            ],
            "sky_stone_block"
        ],
        [
            ChanceIngredient.of('forbidden_arcanus:soulless_sand'),
            [
                ChanceItemStack.of('4x minecraft:netherite_scrap',0.6),
                ChanceItemStack.of('4x minecraft:ender_pearl',0.6),
                ChanceItemStack.of('minecraft:netherrack',0.4),
                ChanceItemStack.of('minecraft:magma_cream',0.6),
                ChanceItemStack.of('minecraft:blaze_rod',0.4),
                ChanceItemStack.of('minecraft:nether_wart',0.4)
            ],
            "soulless_sand"
        ],
        [
            ChanceIngredient.of('occultism:otherstone'),
            [
                ChanceItemStack.of('occultism:iesnium_ingot',0.4)
            ],
            "otherstone"
        ]
    ]
    

    recipes.forEach(([input,outputs,id]) =>{
        event.recipes.cdp2.void_sieve(input,outputs).id(prefix + id)
    })
})