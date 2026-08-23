ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/avaritia/sculk_crafting/shaped/"

    const recipes = [
        {
            "output": "cdp2:quantum",
            "pattern": [
                "AAA",
                "ABA",
                "AAA"
            ],
            "key": {
                "A": "forbidden_arcanus:quantum_injector",
                "B": 'extendedae_plus:quantum_storage_core'
            },
            "id": "quantum"
        },
        {
            "output": "cdp2:assembler_matrix",
            "pattern": [
                "AAA",
                "ABA",
                "AAA"
            ],
            "key": {
                "A": "extendedae:assembler_matrix_frame",
                "B": "ae2:cell_component_256k"
            },
            "id": "assembler_matrix"
        },
        {
            "output": "2x entangled:block",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "minecraft:sculk",
                "B": "minecraft:crying_obsidian",
                "C": "forbidden_arcanus:quantum_core"
            },
            "id": "entangled_block"
        },
        {
            "output": "justdirethings:gooblock_tier4",
            "pattern": [
                "ABA",
                "CDC",
                "ABA"
            ],
            "key": {
                "A": "minecraft:sculk",
                "B": "apothic_enchanting:infused_breath",
                "C": "justdirethings:celestigem_block",
                "D": "justdirethings:gooblock_tier3"
            },
            "id": "gooblock_tier4"
        },
        {
            "output": "avaritia:nether_crafting_table",
            "pattern": [
                "ABA",
                "CDC",
                "EFE"
            ],
            "key": {
                "A": "minecraft:wither_skeleton_skull",
                "B": "justdynathings:creative_goo",
                "C": "minecraft:netherrack",
                "D": "avaritia:double_compressed_crafting_table",
                "E": "mysticalagradditions:insanium_ingot",
                "F": "ifeu:dragon_star"
            },
            "id": "nether_crafting_table"
        }
    ]

    recipes.forEach(recipe =>{
        let output = parseItem(recipe.output)
        let keys = createJsonObject()
        for (const [key, value] of Object.entries(recipe.key)) {
            addToJsonObject(keys,key,createDefaultJsonObject("item",value))
        }
        event.custom({
            "type": "avaritia:shaped_table",
            "key": keys,
            "pattern": recipe.pattern,
            "result": {
                "count": output.getCount(),
                "id": output.getId()
            },
            "tier": 1
        }).id(prefix + recipe.id)
    })
})