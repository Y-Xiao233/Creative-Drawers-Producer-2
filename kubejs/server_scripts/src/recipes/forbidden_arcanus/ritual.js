const $RitualInput = Java.loadClass("com.stal111.forbidden_arcanus.common.block.entity.forge.ritual.RitualInput")

ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/forbidden_arcanus/ritual/"

    const recipes = [
        {
            "output":'packagedauto:package_component',
            "count":1,
            "input":'minecraft:ender_eye',
            "inputs":[
                'forbidden_arcanus:deorum_ingot',
                '#minecraft:planks',
                'forbidden_arcanus:deorum_ingot',
                '#minecraft:planks',
                'forbidden_arcanus:deorum_ingot',
                '#minecraft:planks',
                'forbidden_arcanus:deorum_ingot',
                '#minecraft:planks'
            ],
            "duration":2,
            "essence":[0,0,0,0],
            "tier":1,
            "id":"package_component"
        },
        {
            "output": "ae2:charger",
            "count": 1,
            "input": "cdp2:frame",
            "inputs": [
                "minecraft:iron_ingot",
                "minecraft:copper_ingot",
                "minecraft:iron_ingot",
                "minecraft:copper_ingot",
                "minecraft:iron_ingot",
                "minecraft:copper_ingot",
                "minecraft:iron_ingot",
                "minecraft:copper_ingot"
            ],
            "duration": 2.0,
            "essence": [
                0,
                0,
                0,
                0
            ],
            "tier": 1.0,
            "id": "charger"
        },
        {
            "output": "kubejs:blank_prism",
            "count": 1,
            "input": "forbidden_arcanus:arcane_crystal_dust",
            "inputs": [
                "minecraft:iron_ingot",
                "minecraft:white_wool",
                "minecraft:iron_ingot",
                "minecraft:white_wool",
                "minecraft:iron_ingot",
                "minecraft:white_wool",
                "minecraft:iron_ingot",
                "minecraft:white_wool"
            ],
            "duration": 2.0,
            "essence": [
                0,
                0,
                0,
                0
            ],
            "tier": 1.0,
            "id": "blank_prism"
        },
        {
            "output": "ae2:controller",
            "count": 1,
            "input": "forbidden_arcanus:whirlwind_prism",
            "inputs": [
                "ae2:smooth_sky_stone_block",
                "ae2:fluix_crystal",
                "ae2:smooth_sky_stone_block",
                "ae2:fluix_crystal",
                "ae2:smooth_sky_stone_block",
                "ae2:fluix_crystal",
                "ae2:smooth_sky_stone_block",
                "ae2:fluix_crystal"
            ],
            "duration": 2.0,
            "essence": [
                0,
                0,
                0,
                0
            ],
            "tier": 1.0,
            "id": "controller"
        },
        {
            "output": "kubejs:arcanus_print_press",
            "count": 1,
            "input": "minecraft:iron_block",
            "inputs": [
                "forbidden_arcanus:arcane_crystal_dust",
                "forbidden_arcanus:mundabitur_dust",
                "forbidden_arcanus:arcane_crystal_dust",
                "forbidden_arcanus:mundabitur_dust",
                "forbidden_arcanus:arcane_crystal_dust",
                "forbidden_arcanus:mundabitur_dust",
                "forbidden_arcanus:arcane_crystal_dust",
                "forbidden_arcanus:mundabitur_dust"
            ],
            "duration": 2.0,
            "essence": [
                0,
                0,
                0,
                0
            ],
            "tier": 1.0,
            "id": "arcanus_print_press"
        },
        {
            "output": "mekanismgenerators:gas_burning_generator",
            "count": 1,
            "input": "mekanism:electrolytic_core",
            "inputs": [
                "forbidden_arcanus:whirlwind_prism",
                "mekanism:steel_casing",
                "forbidden_arcanus:whirlwind_prism",
                "mekanism:basic_chemical_tank",
                "forbidden_arcanus:whirlwind_prism",
                "mekanism:steel_casing",
                "forbidden_arcanus:whirlwind_prism",
                "mekanism:basic_chemical_tank"
            ],
            "duration": 2.0,
            "essence": [
                1000.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": 1.0,
            "id": "gas_burning_generator"
        },
        {
            "output": "mysticalagriculture:prudentium_seeds",
            "count": 1,
            "input": "mysticalagriculture:inferium_seeds",
            "inputs": [
                "forbidden_arcanus:whirlwind_prism",
                "mysticalagriculture:inferium_block",
                "forbidden_arcanus:whirlwind_prism",
                "mysticalagriculture:inferium_block",
                "forbidden_arcanus:whirlwind_prism",
                "mysticalagriculture:inferium_block",
                "forbidden_arcanus:whirlwind_prism",
                "mysticalagriculture:inferium_block"
            ],
            "duration": 2.0,
            "essence": [
                1000.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": 1.0,
            "id": "prudentium_seeds"
        },
        {
            "output": "avaritia:neutron_collector",
            "count": 4,
            "input": "ae2:crafting_unit",
            "inputs": [
                "avaritia:crystal_matrix_ingot",
                "forbidden_arcanus:mundabitur_dust",
                "avaritia:crystal_matrix_ingot",
                "forbidden_arcanus:mundabitur_dust",
                "avaritia:crystal_matrix_ingot",
                "forbidden_arcanus:mundabitur_dust",
                "avaritia:crystal_matrix_ingot",
                "forbidden_arcanus:mundabitur_dust"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": 1.0,
            "id": "neutron_collector"
        },
        {
            "output": "forbidden_arcanus:ferrognetic_mixture",
            "count": 4,
            "input": 'mekanism:alloy_reinforced',
            "inputs": [
                "minecraft:iron_ingot",
                "avaritia:neutron_pile",
                "minecraft:iron_ingot",
                "avaritia:neutron_pile",
                "minecraft:iron_ingot",
                "avaritia:neutron_pile",
                "minecraft:iron_ingot",
                "avaritia:neutron_pile"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": 2.0,
            "id": "ferrognetic_mixture"
        },
        {
            "output": "ars_nouveau:purple_archwood_sapling",
            "count": 1,
            "input": "minecraft:oak_sapling",
            "inputs": [
                "ae2cs:purified_fluix_crystal",
                'mekanism:alloy_reinforced',
                "ae2cs:purified_fluix_crystal",
                'mekanism:alloy_reinforced',
                "ae2cs:purified_fluix_crystal",
                'mekanism:alloy_reinforced',
                "ae2cs:purified_fluix_crystal",
                'mekanism:alloy_reinforced'
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": 1.0,
            "id": "purple_archwood_sapling"
        },
        {
            "output": "forbidden_arcanus:soul",
            "count": 16,
            "input": "forbidden_arcanus:whirlwind_prism",
            "inputs": [
                'forbidden_arcanus:rune',
                'forbidden_arcanus:rune',
                'forbidden_arcanus:rune',
                'forbidden_arcanus:rune',
                'forbidden_arcanus:rune',
                'forbidden_arcanus:rune',
                'forbidden_arcanus:rune',
                'forbidden_arcanus:rune'
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                16,
                0.0,
                0.0
            ],
            "tier": 2.0,
            "id": "soul"
        },
        {
            "output": "minecraft:soul_sand",
            "count": 8,
            "input": "forbidden_arcanus:soul",
            "inputs": [
                "minecraft:sand",
                "minecraft:sand",
                "minecraft:sand",
                "minecraft:sand",
                "minecraft:sand",
                "minecraft:sand",
                "minecraft:sand",
                "minecraft:sand"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": 2.0,
            "id": "soul_sand"
        },
        {
            "output": "mysticalagriculture:tertium_seeds",
            "count": 1,
            "input": "mysticalagriculture:prudentium_seeds",
            "inputs": [
                "mysticalagriculture:prudentium_block",
                "forbidden_arcanus:sea_prism",
                "mysticalagriculture:prudentium_block",
                "forbidden_arcanus:sea_prism",
                "mysticalagriculture:prudentium_block",
                "forbidden_arcanus:sea_prism",
                "mysticalagriculture:prudentium_block",
                "forbidden_arcanus:sea_prism"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": 2.0,
            "id": "tertium_seeds"
        },
        {
            "output": "ars_technica:source_motor",
            "count": 1,
            "input": "create:andesite_casing",
            "inputs": [
                "create:brass_ingot",
                "ars_nouveau:source_gem",
                "create:brass_ingot",
                "ars_nouveau:source_gem",
                "create:brass_ingot",
                "ars_nouveau:source_gem",
                "create:brass_ingot",
                "ars_nouveau:source_gem"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": 2.0,
            "id": "source_motor"
        },
        {
            "output": "mysticalagriculture:prudentium_essence",
            "count": 1,
            "input": "mysticalagriculture:inferium_essence",
            "inputs": [
                "forbidden_arcanus:whirlwind_prism",
                "mysticalagriculture:inferium_block",
                "forbidden_arcanus:whirlwind_prism",
                "mysticalagriculture:inferium_block",
                "forbidden_arcanus:whirlwind_prism",
                "mysticalagriculture:inferium_block",
                "forbidden_arcanus:whirlwind_prism",
                "mysticalagriculture:inferium_block"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": 1.0,
            "id": "prudentium_essence"
        },
        {
            "output": "mysticalagriculture:tertium_essence",
            "count": 1,
            "input": "mysticalagriculture:prudentium_essence",
            "inputs": [
                "forbidden_arcanus:sea_prism",
                "mysticalagriculture:prudentium_block",
                "forbidden_arcanus:sea_prism",
                "mysticalagriculture:prudentium_block",
                "forbidden_arcanus:sea_prism",
                "mysticalagriculture:prudentium_block",
                "forbidden_arcanus:sea_prism",
                "mysticalagriculture:prudentium_block"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": 2.0,
            "id": "tertium_essence"
        },
        {
            "output": "industrialforegoingsouls:soul_laser_base",
            "count": 1,
            "input": "industrialforegoing:ore_laser_base",
            "inputs": [
                "industrialforegoing:plastic",
                "minecraft:echo_shard",
                "industrialforegoing:plastic",
                "minecraft:echo_shard",
                "industrialforegoing:plastic",
                "minecraft:echo_shard",
                "industrialforegoing:plastic",
                "minecraft:echo_shard"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": 2.0,
            "id": "soul_laser_base"
        },
        {
            "output": "forbidden_arcanus:growing_edelwood",
            "count": 1,
            "input": "minecraft:oak_sapling",
            "inputs": [
                "ars_nouveau:manipulation_essence",
                "mysticalagriculture:skeleton_essence",
                "ars_nouveau:manipulation_essence",
                "mysticalagriculture:skeleton_essence",
                "ars_nouveau:manipulation_essence",
                "mysticalagriculture:skeleton_essence",
                "ars_nouveau:manipulation_essence",
                "mysticalagriculture:skeleton_essence"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": 2.0,
            "id": "growing_edelwood"
        },
        {
            "output": "industrialforegoing:machine_frame_advanced",
            "count": 1,
            "input": "industrialforegoing:machine_frame_simple",
            "inputs": [
                "naturesaura:birth_spirit",
                "industrialforegoing:plastic",
                "minecraft:netherite_scrap",
                "industrialforegoing:pink_slime_ingot",
                "industrialforegoing:diamond_gear",
                "industrialforegoing:pink_slime_ingot",
                "minecraft:netherite_scrap",
                "industrialforegoing:plastic"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": 3.0,
            "id": "machine_frame_advanced"
        },
        {
            "output": "ifeu:creative_chance_addon",
            "count": 1,
            "input": "ifeu:chance_addon_1",
            "inputs": [
                "powah:charged_snowball",
                "ars_nouveau:source_gem",
                "industrialforegoing:pink_slime_ingot",
                "ars_nouveau:source_gem",
                "powah:charged_snowball",
                "ars_nouveau:source_gem",
                "industrialforegoing:pink_slime_ingot",
                "ars_nouveau:source_gem"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": 3.0,
            "id": "creative_chance_addon"
        },
        {
            "output": "justdirethings:gooblock_tier2",
            "count": 1,
            "input": "justdirethings:gooblock_tier1",
            "inputs": [
                "industrialforegoing:pink_slime_ingot",
                "minecraft:netherite_ingot",
                "minecraft:nether_wart",
                "minecraft:netherite_ingot",
                "industrialforegoing:pink_slime_ingot",
                "minecraft:netherite_ingot",
                "minecraft:nether_wart",
                "minecraft:netherite_ingot"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": "3",
            "id": "gooblock_tier2"
        },
        {
            "output": "mysticalagriculture:imperium_essence",
            "count": 1,
            "input": "mysticalagriculture:tertium_essence",
            "inputs": [
                "mysticalagriculture:tertium_block",
                "kubejs:nature_prism",
                "mysticalagriculture:tertium_block",
                "kubejs:nature_prism",
                "mysticalagriculture:tertium_block",
                "kubejs:nature_prism",
                "mysticalagriculture:tertium_block",
                "kubejs:nature_prism"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": "3",
            "id": "imperium_essence"
        },
        {
            "output": "mysticalagriculture:imperium_seeds",
            "count": 1,
            "input": "mysticalagriculture:tertium_seeds",
            "inputs": [
                "kubejs:nature_prism",
                "minecraft:nether_star",
                "kubejs:nature_prism",
                "minecraft:nether_star",
                "kubejs:nature_prism",
                "minecraft:nether_star",
                "kubejs:nature_prism",
                "minecraft:nether_star"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": "3",
            "id": "imperium_seeds"
        },
        {
            "output": "forbidden_arcanus:quantum_core",
            "count": 1,
            "input": "minecraft:heavy_core",
            "inputs": [
                "kubejs:nature_prism",
                "advanced_ae:quantum_alloy",
                "kubejs:nature_prism",
                "advanced_ae:quantum_alloy",
                "kubejs:nature_prism",
                "advanced_ae:quantum_alloy",
                "kubejs:nature_prism",
                "advanced_ae:quantum_alloy"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": "3",
            "id": "quantum_core"
        },
        {
            "output": "ifeu:laser_lens_sculk",
            "count": 1,
            "input": "justdirethings:celestigem",
            "inputs": [
                "minecraft:nether_star",
                "minecraft:glass_pane",
                "minecraft:nether_star",
                "minecraft:glass_pane",
                "minecraft:nether_star",
                "minecraft:glass_pane",
                "minecraft:nether_star",
                "minecraft:glass_pane"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": "4",
            "id": "laser_lens_sculk"
        },
        {
            "output": "ifeu:infuser",
            "count": 1,
            "input": "forbidden_arcanus:quantum_core",
            "inputs": [
                "industrialforegoing:machine_frame_advanced",
                "minecraft:bucket",
                "industrialforegoing:machine_frame_advanced",
                "minecraft:bucket",
                "industrialforegoing:machine_frame_advanced",
                "minecraft:bucket",
                "industrialforegoing:machine_frame_advanced",
                "minecraft:bucket"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": "4",
            "id": "infuser"
        },
        {
            "output": "kubejs:quantum_prism",
            "count": 1,
            "input": "kubejs:blank_prism",
            "inputs": [
                "createmoremachines:end_casing",
                "advanced_ae:quantum_alloy",
                "logisticsnetworks:dimensional_upgrade",
                "advanced_ae:quantum_alloy",
                'createmoremachines:end_casing',
                "advanced_ae:quantum_alloy",
                "entangled:block",
                "advanced_ae:quantum_alloy"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": "4",
            "id": "quantum_prism"
        },
        {
            "output": "mysticalagriculture:supremium_seeds",
            "count": 1,
            "input": "mysticalagriculture:imperium_seeds",
            "inputs": [
                "kubejs:enchanted_time_crystal",
                "kubejs:quantum_prism",
                "kubejs:enchanted_time_crystal",
                "kubejs:quantum_prism",
                "kubejs:enchanted_time_crystal",
                "kubejs:quantum_prism",
                "kubejs:enchanted_time_crystal",
                "kubejs:quantum_prism"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": "4",
            "id": "supremium_seeds"
        },
        {
            "output": "mysticalagriculture:supremium_essence",
            "count": 1,
            "input": "mysticalagriculture:imperium_essence",
            "inputs": [
                "mysticalagriculture:imperium_block",
                "kubejs:quantum_prism",
                "mysticalagriculture:imperium_block",
                "kubejs:quantum_prism",
                "mysticalagriculture:imperium_block",
                "kubejs:quantum_prism",
                "mysticalagriculture:imperium_block",
                "kubejs:quantum_prism"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": "4",
            "id": "supremium_essence"
        },
        {
            "output": "forbidden_arcanus:aurum_sapling",
            "count": 1,
            "input": "mysticalagradditions:insanium_essence",
            "inputs": [
                "minecraft:oak_sapling",
                "forbidden_arcanus:growing_edelwood",
                "minecraft:oak_sapling",
                "forbidden_arcanus:growing_edelwood",
                "minecraft:oak_sapling",
                "forbidden_arcanus:growing_edelwood",
                "minecraft:oak_sapling",
                "forbidden_arcanus:growing_edelwood"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": "4",
            "id": "aurum_sapling"
        },
        {
            "output": "mysticalagriculture:insanium_seeds",
            "count": 1,
            "input": "mysticalagriculture:supremium_seeds",
            "inputs": [
                "createmoremachines:beyond_alloy",
                "cdp2:absolute_essence",
                "createmoremachines:beyond_alloy",
                "cdp2:absolute_essence",
                "createmoremachines:beyond_alloy",
                "cdp2:absolute_essence",
                "createmoremachines:beyond_alloy",
                "cdp2:absolute_essence"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": "4",
            "id": "insanium_seeds"
        },
        {
            "output": "avaritia:tesseract",
            "count": 1,
            "input": "ae2lt:matter_warping_matrix_casing",
            "inputs": [
                "naturesaura:sky_ingot",
                "extendedcrafting:black_iron_ingot",
                "naturesaura:sky_ingot",
                "extendedcrafting:black_iron_ingot",
                "naturesaura:sky_ingot",
                "extendedcrafting:black_iron_ingot",
                "naturesaura:sky_ingot",
                "extendedcrafting:black_iron_ingot"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": "5",
            "id": "tesseract"
        },
        {
            "output": "forbidden_arcanus:quantum_injector",
            "count": 1,
            "input": "forbidden_arcanus:mundabitur_dust",
            "inputs": [
                "advanced_ae:quantum_alloy",
                "forbidden_arcanus:quantum_core",
                "advanced_ae:quantum_alloy",
                "forbidden_arcanus:quantum_core",
                "advanced_ae:quantum_alloy",
                "forbidden_arcanus:quantum_core",
                "advanced_ae:quantum_alloy",
                "forbidden_arcanus:quantum_core"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": "3",
            "id": "quantum_injector"
        }
    ]
    
    recipes.forEach(recipe =>{
        const i = []
        recipe.inputs.forEach(input =>{
            i.push(new $RitualInput(input,1))
        })

        event.recipes.forbidden_arcanus.ritual(RitualResults.ofCreateItemResult(Item.of(recipe.output,recipe.count)),recipe.input)
            .inputs(i)
            .duration(recipe.duration)
            .essences(recipe.essence[0],recipe.essence[1],recipe.essence[2],recipe.essence[3])
            .forgeTier(recipe.tier)
            .id(prefix + recipe.id)
    })
})