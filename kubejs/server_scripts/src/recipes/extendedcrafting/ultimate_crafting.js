ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/extendedcrafting/ultimate_crafting/"

    const recipes = [
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "AAAABAAAA",
                "CDDDDDDDC",
                "CDEFGFEDC",
                "CDFEHEFDC",
                "CDGHIHGDC",
                "CDFEHEFDC",
                "CDEFGFEDC",
                "CDDDDDDDC",
                "CCCCCCCCC"
            ],
            "key": {
                "A": {
                "item": "extendedcrafting:ultimate_catalyst"
                },
                "B": {
                "item": "extendedae_plus:infinity_core"
                },
                "C": {
                "item": "allthecompressed:end_stone_4x"
                },
                "D": {
                "item": "extendedcrafting:luminessence"
                },
                "E": {
                "item": "createmoremachines:beyond_alloy"
                },
                "F": {
                "item": "actuallyadditions:black_quartz"
                },
                "G": {
                "item": "kubejs:quantum_prism"
                },
                "H": {
                "item": "justdynathings:creative_goo"
                },
                "I": {
                "item": "actuallyadditions:iron_casing"
                }
            },
            "result": {
                "id": "minecraft:end_portal_frame",
                "count": 4
            }
        },
        {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAAAAAA",
            "BCCCDCCCB",
            "BEEEDEEEB",
            "BCCCDCCCB",
            "BEEEDEEEB",
            "BCCCDCCCB",
            "BEEEDEEEB",
            "BCCCDCCCB",
            "AAAAFAAAA"
        ],
        "key": {
            "A": {
            "item": "justdirethings:eclipsealloy_block"
            },
            "B": {
            "item": "minecraft:red_stained_glass"
            },
            "C": {
            "item": "extendedcrafting:luminessence"
            },
            "D": {
            "item": "jdte:time_fluid_catalyst"
            },
            "E": {
            "items": "extendedcrafting:singularity",
            "components": {
                "extendedcrafting:singularity_id": "extendedcrafting:redstone"
            },
            "type": "neoforge:components"
            },
            "F": {
            "item": "minecraft:beacon"
            }
        },
        "result": {
            "id": 'jdte:life_synthesis_vat'
        }
        }
    ]

    recipes.forEach(recipe =>{
        event.custom(recipe).id(prefix + recipe.result.id.substring(recipe.result.id.indexOf(":") + 1))
    })
})