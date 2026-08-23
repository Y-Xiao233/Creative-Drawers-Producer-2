ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/ae2cs/aggregator/"

    const recipes = [
        {
            "type": "ae2cs:crystal_aggregator_recipe_serializer",
            "result": {
                "count": 32,
                "id": "ae2cs:meteor_seed"
            },
            "input_a": {
                "item": "mysticalagriculture:sky_stone_essence",
                "count": 8
            },
            "input_b": {
                "item": "mysticalagriculture:coal_essence",
                "count": 8
            },
            "input_c": {
                "item": "minecraft:sand",
                "count": 16
            },
            "energy_cost": 160.0,
            "id": "meteor_seed"
        },
        {
            "type": "ae2cs:crystal_aggregator_recipe_serializer",
            "result": {
                "count": 1,
                "id": "tiab:time_in_a_bottle"
            },
            "input_a": {
                "item": "minecraft:gold_block",
                "count": 1
            },
            "input_b": {
                "item": "minecraft:glass_bottle",
                "count": 1
            },
            "input_c": {
                "item": "ae2cs:purified_meteor_crystal",
                "count": 1
            },
            "energy_cost": 160.0,
            "id": "time_in_a_bottle"
        },
        {
            "type": "ae2cs:crystal_aggregator_recipe_serializer",
            "result": {
                "count": 4,
                "id": "forbidden_arcanus:darkstone"
            },
            "input_a": {
                "item": "minecraft:cobblestone",
                "count": 1
            },
            "input_b": {
                "item": "ae2:sky_stone_block",
                "count": 2
            },
            "input_c": {
                "item": "cdp2:void_matter",
                "count": 1
            },
            "energy_cost": 160.0,
            "id": "darkstone"
        },
        {
            "type": "ae2cs:crystal_aggregator_recipe_serializer",
            "result": {
                "count": 3,
                "id": "forbidden_arcanus:mundabitur_dust"
            },
            "input_a": {
                "item": "ae2:certus_quartz_dust",
                "count": 1
            },
            "input_b": {
                "item": "minecraft:redstone",
                "count": 1
            },
            "input_c": {
                "item": "minecraft:blaze_powder",
                "count": 1
            },
            "energy_cost": 160.0,
            "id": "mundabitur_dust"
        },
        {
            "type": "ae2cs:crystal_aggregator_recipe_serializer",
            "result": {
                "count": 8,
                "id": "ae2:fluix_crystal"
            },
            "input_a": {
                "item": "forbidden_arcanus:arcane_crystal_dust",
                "count": 1
            },
            "input_b": {
                "item": "forbidden_arcanus:mundabitur_dust",
                "count": 1
            },
            "input_c": {
                "item": "forbidden_arcanus:deorum_ingot",
                "count": 1
            },
            "energy_cost": 160.0,
            "id": "fluix_crystal"
        },
        {
            "type": "ae2cs:crystal_aggregator_recipe_serializer",
            "result": {
                "count": 2,
                "id": "minecraft:breeze_rod"
            },
            "input_a": {
                "item": "forbidden_arcanus:arcane_crystal_dust",
                "count": 1
            },
            "input_b": {
                "item": "minecraft:stick",
                "count": 2
            },
            "input_c": {
                "item": "forbidden_arcanus:rune",
                "count": 1
            },
            "energy_cost": 160.0,
            "id": "breeze_rod"
        },
        {
            "type": "ae2cs:crystal_aggregator_recipe_serializer",
            "result": {
                "count": 1,
                "id": "forbidden_arcanus:whirlwind_prism"
            },
            "input_a": {
                "item": "minecraft:wind_charge",
                "count": 1
            },
            "input_b": {
                "item": "kubejs:blank_prism",
                "count": 1
            },
            "input_c": {
                "item": "forbidden_arcanus:arcane_crystal_dust",
                "count": 1
            },
            "energy_cost": 160.0,
            "id": "whirlwind_prism"
        },
        {
            "type": "ae2cs:crystal_aggregator_recipe_serializer",
            "result": {
                "count": 32,
                "id": "kubejs:arcanus_processor"
            },
            "input_a": {
                "item": "kubejs:printed_arcanus_processor",
                "count": 32
            },
            "input_b": {
                "item": "forbidden_arcanus:mundabitur_dust",
                "count": 32
            },
            "input_c": {
                "item": "ae2:printed_silicon",
                "count": 32
            },
            "energy_cost": 16000.0,
            "id": "arcanus_processor"
        },
        {
            "type": "ae2cs:crystal_aggregator_recipe_serializer",
            "result": {
                "count": 4,
                "id": "ae2:formation_core"
            },
            "input_a": {
                "item": "kubejs:arcanus_processor",
                "count": 1
            },
            "input_b": {
                "item": "ae2:fluix_crystal",
                "count": 1
            },
            "input_c": {
                "item": "forbidden_arcanus:arcane_crystal_dust",
                "count": 1
            },
            "energy_cost": 160.0,
            "id": "formation_core"
        },
        {
            "type": "ae2cs:crystal_aggregator_recipe_serializer",
            "result": {
                "count": 4,
                "id": "ae2:annihilation_core"
            },
            "input_a": {
                "item": "kubejs:arcanus_processor",
                "count": 1
            },
            "input_b": {
                "item": "ae2:fluix_crystal",
                "count": 1
            },
            "input_c": {
                "item": "forbidden_arcanus:mundabitur_dust",
                "count": 1
            },
            "energy_cost": 160.0,
            "id": "annihilation_core"
        },
        {
            "type": "ae2cs:crystal_aggregator_recipe_serializer",
            "result": {
                "count": 1,
                "id": "ae2:pattern_encoding_terminal"
            },
            "input_a": {
                "item": "ae2:crafting_terminal",
                "count": 1
            },
            "input_b": {
                "item": "ae2:blank_pattern",
                "count": 1
            },
            "energy_cost": 160.0,
            "id": "pattern_encoding_terminal"
        },
        {
            "type": "ae2cs:crystal_aggregator_recipe_serializer",
            "result": {
                "count": 1,
                "id": "ae2:crafting_terminal"
            },
            "input_a": {
                "item": "minecraft:crafting_table",
                "count": 1
            },
            "input_b": {
                "item": "kubejs:arcanus_processor",
                "count": 1
            },
            "energy_cost": 160.0,
            "id": "crafting_terminal"
        },
        {
            "type": "ae2cs:crystal_aggregator_recipe_serializer",
            "result": {
                "count": 8,
                "id": "industrialforegoing:dryrubber"
            },
            "input_a": {
                "item": "forbidden_arcanus:arcane_crystal_dust",
                "count": 2
            },
            "input_b": {
                "item": "mysticalagriculture:rubber_essence",
                "count": 4
            },
            "input_c": {
                "item": "forbidden_arcanus:rune",
                "count": 2
            },
            "energy_cost": 16000.0,
            "id": "dryrubber"
        },
        {
            "type": "ae2cs:crystal_aggregator_recipe_serializer",
            "result": {
                "count": 4,
                "id": "ae2cs:fluix_crystal_seed"
            },
            "input_a": {
                "item": "ae2:fluix_dust",
                "count": 1
            },
            "input_b": {
                "item": "avaritia:neutron_pile",
                "count": 2
            },
            "input_c": {
                "item": "forbidden_arcanus:arcane_crystal_dust",
                "count": 1
            },
            "energy_cost": 16000.0,
            "id": "fluix_crystal_seed"
        },
        {
            "type": "ae2cs:crystal_aggregator_recipe_serializer",
            "result": {
                "count": 32,
                "id": "ae2cs:amethyst_seed"
            },
            "input_a": {
                "item": "mysticalagriculture:amethyst_essence",
                "count": 8
            },
            "input_b": {
                "item": "forbidden_arcanus:mundabitur_dust",
                "count": 4
            },
            "energy_cost": 16000.0,
            "id": "amethyst_seed"
        },
        {
            "type": "ae2cs:crystal_aggregator_recipe_serializer",
            "result": {
                "count": 1,
                "id": "forbidden_arcanus:sea_prism"
            },
            "input_a": {
                "item": "minecraft:heart_of_the_sea",
                "count": 1
            },
            "input_b": {
                "item": "kubejs:blank_prism",
                "count": 1
            },
            "input_c": {
                "item": "powah:charged_snowball",
                "count": 1
            },
            "energy_cost": 16000.0,
            "id": "sea_prism"
        },
        {
            "type": "ae2cs:crystal_aggregator_recipe_serializer",
            "result": {
                "count": 1,
                "id": "minecraft:warden_spawn_egg"
            },
            "input_a": {
                "item": "minecraft:echo_shard",
                "count": 4
            },
            "input_b": {
                "item": "minecraft:egg",
                "count": 1
            },
            "energy_cost": 16000.0,
            "id": "warden_spawn_egg"
        },
        {
            "type": "ae2cs:crystal_aggregator_recipe_serializer",
            "result": {
                "count": 2,
                "id": "extendedae:assembler_matrix_frame"
            },
            "input_a": {
                "item": "forbidden_arcanus:quantum_injector",
                "count": 2
            },
            "input_b": {
                "item": "extendedae:entro_ingot",
                "count": 64
            },
            "input_c": {
                "item": "advanced_ae:quantum_processor",
                "count": 4
            },
            "energy_cost": 16000.0,
            "id": "assembler_matrix_frame"
        },
        {
            "type": "ae2cs:crystal_aggregator_recipe_serializer",
            "result": {
                "count": 1,
                "id": "ars_nouveau:glyph_lightning"
            },
            "input_a": {
                "item": "ars_nouveau:air_essence",
                "count": 4
            },
            "input_b": {
                "item": "minecraft:lightning_rod",
                "count": 4
            },
            "input_c": {
                "item": "forbidden_arcanus:quantum_core",
                "count": 1
            },
            "energy_cost": 16000.0,
            "id": "glyph_lightning"
        }
    ]

    recipes.forEach(recipe =>{
        event.custom(recipe).id(prefix + recipe.id)
    })
})