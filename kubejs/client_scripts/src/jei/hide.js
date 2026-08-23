const hides = [
    /botanypots:.*_terracotta_botany_pot/,
    /botanypots:.*_terracotta_waxed_botany_pot/,
    /botanypots:.*_terracotta_hopper_botany_pot/,
    /botanypots:.*_concrete_botany_pot/,
    /botanypots:.*_concrete_waxed_botany_pot/,
    /botanypots:.*_concrete_hopper_botany_pot/,
    /botanypots:.*_bricks_botany_pot/,
    /botanypots:.*_bricks_hopper_botany_pot/,
    /botanypots:.*_bricks_waxed_botany_pot/,
    'botanypots:bricks_botany_pot',
    'botanypots:bricks_hopper_botany_pot',
    'botanypots:bricks_waxed_botany_pot',
    "botanypots:terracotta_waxed_botany_pot",
    /botanypotstiers:.*_.*_terracotta_.*_botany_pot/,
    /botanypotstiers:.*_.*_terracotta_botany_pot/,
    /botanypotstiers:.*_.*_concrete_.*_botany_pot/,
    /botanypotstiers:.*_.*_concrete_botany_pot/,
    /botanypotstiers:.*_bricks_.*_botany_pot/,
    /botanypotstiers:.*_bricks_botany_pot/,
    /botanypotstiers:.*_terracotta_waxed_botany_pot/,
    'pipez:basic_upgrade',
    'pipez:improved_upgrade',
    'pipez:advanced_upgrade',
    /^mekanismadditions:(?!white_)[a-z]+_plastic$/,
    /mekanismadditions:.*_slick_plastic/,
    /mekanismadditions:.*_plastic_.*/,
    /mekanismadditions:.*_reinforced_plastic/,
    'mekanismadditions:dark_red_plastic',
    'mekanismadditions:light_gray_plastic',
    'mekanismadditions:light_blue_plastic',
    'mekanismadditions:dark_red_plastic',
    'mekanismadditions:light_gray_plastic',
    'mekanismadditions:light_blue_plastic',
    'mekanism:upgrade_filter',
    'mekanism:upgrade_chemical',
    'mekanism:upgrade_anchor',
    'mekanism:upgrade_muffling',
    'mekanism:upgrade_energy',
    'mekanism:upgrade_speed',
    'mekanism_extras:upgrade_stack',
    'mekanism_extras:upgrade_ionic_membrane',
    'industrialforegoing:latex_processing_unit',
    'botanypotstiers:mega_upgrade',
    'botanypotstiers:elite_upgrade',
    'botanypotstiers:ultra_upgrade',
    /ars_nouveau:.*_sourcelink/,
    'mysticalagriculture:soulium_spawner',
    'occultism:otherrock',
    'occultism:dimensional_battlefield',
    /justdynathings:goo_upgrader_t.*/,
    'jdte:advanced_infusion_machine',
    'jdte:extended_infusion_machine',
    'jdte:loot_fabricator',
    'jdte:bio_factory',
    'mekmm:large_heat_generator',
    'jdte:advanced_life_extractor',
    'jdte:extended_life_extractor',
    'ae2lt:damaged_budding_overload_crystal',
    'ae2lt:cracked_budding_overload_crystal',
    'ae2lt:flawed_budding_overload_crystal',
    'mekmm:replicator',
    /mekmm:.*_replicator/,
    /mekmm:.*_replicating_factory/,
    /mekanism_extras:.*_replicating_factory/,
]


RecipeViewerEvents.removeEntries("item",event =>{
    hides.forEach(hide => event.remove(hide))
})


ItemEvents.modifyTooltips(event =>{
    hides.forEach(hide => event.add(hide,[Text.translatable("tip.cdp2.disabled")]))

    event.modify('ars_nouveau:manipulation_essence',builder =>{
        builder.removeLine(1)
    })

    event.modify('ars_nouveau:air_essence',builder =>{
        builder.removeLine(1)
    })

    event.add('minecraft:nether_star',[Text.translatable("tip.cdp2.nether_star")])
})