LootJS.lootTables(event =>{
    const creative_drawers = [
        'cdp2:crystal_matrix_creative_drawer',
        'cdp2:gold_leaf_creative_drawer',
        'cdp2:shattered_singularity_creative_drawer',
        "cdp2:black_iron_ingot_creative_drawer",
        "cdp2:reprocessed_fissile_fragment_creative_drawer",
        "cdp2:the_ultimate_ingot_creative_drawer",
        "cdp2:infinity_catalyst_creative_drawer",
        "cdp2:amethyst_block_shiny_connecting_creative_drawer",
        "cdp2:iron_block_pipes_connecting_creative_drawer"
    ]
    creative_drawers.forEach(drawer =>{
        let args = drawer.split(":")
        let location = args[0] + ":blocks/" + args[1]
        event.create(location).createPool(pool =>{
            pool.addEntry(LootEntry.of(drawer))
        })
    })

    event.modifyBlockTables('actuallyadditions:black_quartz_ore').clear().createPool(pool =>{
        pool.addEntry(LootEntry.of('actuallyadditions:black_quartz_ore'))
    })
})