ServerEvents.tags("block",event =>{
    const creative_drawers = [
        'cdp2:crystal_matrix_creative_drawer',
        'cdp2:gold_leaf_creative_drawer',
        'cdp2:shattered_singularity_creative_drawer',
        "cdp2:black_iron_ingot_creative_drawer",
        "cdp2:reprocessed_fissile_fragment_creative_drawer",
        "cdp2:the_ultimate_ingot_creative_drawer",
        "cdp2:infinity_catalyst_creative_drawer",
        "cdp2:amethyst_block_shiny_connecting_creative_drawer",
        "cdp2:iron_block_pipes_connecting_creative_drawer",
        "cdp2:void_matter_creative_drawer_creative_drawer",
        "cdp2:sea_prism_creative_drawer",
        "cdp2:electrum_ingot_creative_drawer"
    ]
    event.add("minecraft:mineable/pickaxe",creative_drawers)


    event.remove('c:ores_in_ground/stone',[
        'forbidden_arcanus:stella_arcanum','malum:soulstone_ore',
        'malum:brilliant_stone','mekanismsun:deepslate_silver_ore',
        'mekanismsun:silver_ore','mekmm:silver_ore',
        'mekmm:deepslate_silver_ore','occultism:silver_ore_deepslate',
        'enderio_evolution:silver_ore','enderio_evolution:deepslate_silver_ore'
    ])
})