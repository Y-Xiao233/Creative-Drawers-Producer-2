ServerEvents.tags("block",event =>{
    const creative_drawers = [
        'cdp2:crystal_matrix_creative_drawer',
        'cdp2:gold_leaf_creative_drawer',
        'cdp2:shattered_singularity_creative_drawer',
        "cdp2:black_iron_ingot_creative_drawer",
        "cdp2:reprocessed_fissile_fragment_creative_drawer",
        "cdp2:the_ultimate_ingot_creative_drawer",
        "cdp2:infinity_catalyst_creative_drawer"
    ]
    event.add("minecraft:mineable/pickaxe",creative_drawers)


    event.remove('c:ores_in_ground/stone',['forbidden_arcanus:stella_arcanum'])
})