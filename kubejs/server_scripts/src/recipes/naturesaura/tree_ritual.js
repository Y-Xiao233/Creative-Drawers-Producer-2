ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/naturesaura/tree_ritual/"

    const recipes = [
        {
            "output":'9x minecraft:echo_shard',
            "inputs":[
                'forbidden_arcanus:sea_prism',
                'minecraft:blaze_powder',
                'ae2cs:purified_fluix_crystal',
                'naturesaura:gold_leaf'
            ],
            "tree":'minecraft:oak_sapling',
            "time":20,
            "id":"echo_shard"
        },
        {
            "output":'3x ars_nouveau:mob_jar',
            "inputs":[
                '#c:logs/archwood',
                '#c:logs/archwood',
                '#c:logs/archwood',
                'ae2:quartz_glass',
                'ae2:quartz_glass',
                'ae2:quartz_glass',
                'ae2:quartz_glass',
                'ae2:quartz_glass'
            ],
            "tree":'minecraft:oak_sapling',
            "time":20,
            "id":"mob_jar"
        },
        {
            "output":'minecraft:skeleton_skull',
            "inputs":[
                'minecraft:white_dye',
                'ae2:matter_ball',
                'minecraft:white_dye',
                'ae2:matter_ball',
                'minecraft:white_dye',
                'ae2:matter_ball',
                'minecraft:white_dye',
                'ae2:matter_ball'
            ],
            "tree":'minecraft:oak_sapling',
            "time":20,
            "id":"skeleton_skull"
        },
        {
            "output":'cdp2:ritual_ophyx',
            "inputs":[
                'minecraft:skeleton_skull',
                'minecraft:echo_shard',
                'minecraft:skeleton_skull',
                'minecraft:echo_shard',
                'minecraft:skeleton_skull',
                'minecraft:echo_shard',
                'minecraft:skeleton_skull',
                'minecraft:echo_shard'
            ],
            "tree":'ars_nouveau:purple_archwood_sapling',
            "time":20,
            "id":"ritual_ophyx"
        },
        {
            "output":'cdp2:nature_altar',
            "inputs":[
                'industrialforegoing:machine_frame_advanced',
                'naturesaura:gold_leaf',
                'allthecompressed:stone_2x',
                'allthecompressed:oak_planks_2x',
                'naturesaura:infused_iron',
                'minecraft:netherite_ingot'
            ],
            "tree":'ars_nouveau:purple_archwood_sapling',
            "time":20,
            "id":"nature_altar"
        },
        {
            "output":'naturesaura:token_joy',
            "inputs":[
                'minecraft:heart_of_the_sea',
                'minecraft:torch',
                'naturesaura:gold_leaf',
                'minecraft:iron_ingot',
                'minecraft:apple',
                'minecraft:prismarine_shard'
            ],
            "tree":'minecraft:oak_sapling',
            "time":20,
            "id":"token_joy"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.naturesaura.tree_ritual(recipe.output,recipe.inputs,recipe.tree,recipe.time).id(prefix + recipe.id)
    })
})