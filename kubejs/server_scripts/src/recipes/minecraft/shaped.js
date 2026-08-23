ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/minecraft/shaped/"
    const recipes = [
        {
            "output": "cdp2:void_block",
            "pattern": [
                "AA",
                "AA"
            ],
            "key": {
                "A":"cdp2:void_matter"
            },
            "id": "void_block"
        },
        {
            "output": "cdp2:void_crafting_table",
            "pattern": [
                "AA",
                "AA"
            ],
            "key": {
                "A":"cdp2:void_block"
            },
            "id": "void_crafting_table"
        },
        {
            "output": "minecraft:bucket",
            "pattern": [
                "   ",
                "ABA",
                " A "
            ],
            "key": {
                "A":"cdp2:frame",
                "B":"cdp2:void_matter"
            },
            "id": "bucket"
        },
        {
            "output": "cdp2:void_sieve",
            "pattern": [
                "AAA",
                "B B",
                "BBB"
            ],
            "key": {
                "A":"cdp2:void_matter",
                "B":"cdp2:frame"
            },
            "id": "void_sieve"
        },
        {
            "output": "cdp2:void_omni_tool",
            "pattern": [
                "AAA",
                "ABA",
                " B "
            ],
            "key": {
                "A":"cdp2:void_block",
                "B":"cdp2:void_matter"
            },
            "id": "void_omni_tool"
        },
        {
            "output": "8x pipez:item_pipe",
            "pattern": [
                "AAA",
                "BCB",
                "AAA"
            ],
            "key": {
                "A": "cdp2:void_matter",
                "B": "cdp2:void_block",
                "C": "minecraft:chest"
            },
            "id": "item_pipe"
        },
        {
            "output": "pipez:ultimate_upgrade",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "cdp2:void_block",
                "B": "minecraft:coal",
                "C": "cdp2:frame"
            },
            "id": "ultimate_upgrade"
        },
        {
            "output": "mekanism:nutritional_liquifier",
            "pattern": [
                "AAA",
                "BCB",
                "AAA"
            ],
            "key": {
                "A": "cdp2:void_block",
                "B": "minecraft:bowl",
                "C": "cdp2:frame"
            },
            "id": "nutritional_liquifier"
        },
        {
            "output": "mekanism:combiner",
            "pattern": [
                "AAA",
                "BCB",
                "AAA"
            ],
            "key": {
                "A": "cdp2:void_matter",
                "B": "cdp2:void_block",
                "C": "cdp2:frame"
            },
            "id": "combiner"
        },
        {
            "output": "mekanism:basic_energy_cube",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "fluxnetworks:flux_dust",
                "B": "minecraft:redstone",
                "C": "minecraft:iron_block"
            },
            "id": "basic_energy_cube"
        },
        {
            "output": "mekanism:rotary_condensentrator",
            "pattern": [
                "ABA",
                "CDE",
                "ABA"
            ],
            "key": {
                "A": "cdp2:void_matter",
                "B": "fluxnetworks:flux_dust",
                "C": "mekanism:basic_chemical_tank",
                "D": "mekanism:basic_energy_cube",
                "E": "mekanism:basic_fluid_tank"
            },
            "id": "rotary_condensentrator"
        },
        {
            "output": "mekmm:planting_station",
            "pattern": [
                "ABA",
                "CDE",
                "ABA"
            ],
            "key": {
                "A": "cdp2:void_matter",
                "B": "mekanism:ingot_osmium",
                "C": "mekanism:basic_chemical_tank",
                "D": "mekanism:basic_energy_cube",
                "E": "minecraft:chest"
            },
            "id": "planting_station"
        },
        {
            "output": "fluxnetworks:flux_block",
            "pattern": [
                "AAA",
                "AAA",
                "AAA"
            ],
            "key": {
                "A": "fluxnetworks:flux_dust"
            },
            "id": "flux_block"
        },
        {
            "output": "mekanism:enrichment_chamber",
            "pattern": [
                "ABA",
                "CDC",
                "ABA"
            ],
            "key": {
                "A": "minecraft:iron_ingot",
                "B": "mekanism:ingot_osmium",
                "C": "minecraft:chest",
                "D": "mekanism:basic_energy_cube"
            },
            "id": "enrichment_chamber"
        },
        {
            "output": "mekanism:chemical_injection_chamber",
            "pattern": [
                "ABA",
                "CDE",
                "ABA"
            ],
            "key": {
                "A": "mekanism:alloy_infused",
                "B": "mekanism:steel_casing",
                "C": "mekanism:basic_chemical_tank",
                "D": "cdp2:frame",
                "E": "mekanism:basic_energy_cube"
            },
            "id": "chemical_injection_chamber"
        },
        {
            "output": "minecraft:clay",
            "pattern": [
                "AA ",
                "AA ",
                "   "
            ],
            "key": {
                "A": "minecraft:clay_ball"
            },
            "id": "clay"
        },
        {
            "output": "16x mekanism:basic_universal_cable",
            "pattern": [
                "   ",
                "ABA",
                "   "
            ],
            "key": {
                "A": "minecraft:iron_ingot",
                "B": "minecraft:redstone"
            },
            "id": "basic_universal_cable"
        },
        {
            "output": "cdp2:upgrade_station",
            "pattern": [
                "ABA",
                "CDC",
                "AEA"
            ],
            "key": {
                "A": "mekanism:alloy_infused",
                "B": "mekanism:steel_casing",
                "C": "minecraft:redstone_block",
                "D": "cdp2:frame",
                "E": "minecraft:chest"
            },
            "id": "upgrade_station"
        },
        {
            "output": "ae2cs:crystal_growth_chamber",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "ae2:certus_quartz_dust",
                "B": "minecraft:iron_ingot",
                "C": "cdp2:frame"
            },
            "id": "crystal_growth_chamber"
        },
        {
            "output": "ae2cs:crystal_aggregator",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "minecraft:iron_ingot",
                "B": "ae2:certus_quartz_dust",
                "C": "cdp2:frame"
            },
            "id": "crystal_aggregator"
        },
        {
            "output": "8x ae2:sky_stone_block",
            "pattern": [
                "AAA",
                "ABA",
                "AAA"
            ],
            "key": {
                "A": "minecraft:stone",
                "B": "ae2cs:purified_meteor_crystal"
            },
            "id": "sky_stone_block"
        },
        {
            "output": "4x forbidden_arcanus:deorum_ingot",
            "pattern": [
                "ABA",
                "CDC",
                "ABA"
            ],
            "key": {
                "A": "minecraft:coal",
                "B": "minecraft:redstone",
                "C": "ae2:certus_quartz_dust",
                "D": "minecraft:gold_ingot"
            },
            "id": "deorum_ingot"
        },
        {
            "output": "ae2:inscriber",
            "pattern": [
                "ABA",
                "C A",
                "ABA"
            ],
            "key": {
                "A": "forbidden_arcanus:rune",
                "B": "minecraft:piston",
                "C": "forbidden_arcanus:mundabitur_dust"
            },
            "id": "inscriber"
        },
        {
            "output": "packagedauto:encoder",
            "pattern": [
                "ABA",
                "CDC",
                "AEA"
            ],
            "key": {
                "A": "minecraft:iron_ingot",
                "B": "packagedauto:package_component",
                "C": "minecraft:crafting_table",
                "D": "ae2:fluix_block",
                "E": "minecraft:comparator"
            },
            "id": "encoder"
        },
        {
            "output": "packagedauto:packaging_provider",
            "pattern": [
                "ABA",
                "CDC",
                "AEA"
            ],
            "key": {
                "A": "ae2:fluix_pearl",
                "B": "packagedauto:packager",
                "C": "packagedauto:unpackager",
                "D": "kubejs:arcanus_processor",
                "E": "forbidden_arcanus:deorum_block"
            },
            "id": "packaging_provider"
        },
        {
            "output": "2x packagedauto:recipe_holder",
            "pattern": [
                "ABA",
                "B B",
                "CDC"
            ],
            "key": {
                "A": "minecraft:glass",
                "B": "forbidden_arcanus:mundabitur_dust",
                "C": "minecraft:copper_ingot",
                "D": "packagedauto:package_component"
            },
            "id": "recipe_holder"
        },
        {
            "output": "ae2:crafting_unit",
            "pattern": [
                "ABA",
                "C C",
                "ABA"
            ],
            "key": {
                "A": "minecraft:iron_ingot",
                "B": "kubejs:arcanus_processor",
                "C": "ae2:fluix_glass_cable"
            },
            "id": "crafting_unit"
        },
        {
            "output": "8x ae2:blank_pattern",
            "pattern": [
                "AAA",
                "ABA",
                "AAA"
            ],
            "key": {
                "A": "ae2:certus_quartz_dust",
                "B": "packagedauto:recipe_holder"
            },
            "id": "blank_pattern"
        },
        {
            "output": "9x ae2:cell_component_1k",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "forbidden_arcanus:mundabitur_dust",
                "B": "forbidden_arcanus:arcane_crystal_dust",
                "C": "kubejs:arcanus_processor"
            },
            "id": "cell_component_1k"
        },
        {
            "output": "mekanism:chemical_oxidizer",
            "pattern": [
                "ABA",
                "CDE",
                "ABA"
            ],
            "key": {
                "A": "mekanism:alloy_infused",
                "B": "forbidden_arcanus:whirlwind_prism",
                "C": "minecraft:barrel",
                "D": "mekanism:steel_casing",
                "E": "mekanism:basic_chemical_tank"
            },
            "id": "chemical_oxidizer"
        },
        {
            "output": "16x ae2:advanced_card",
            "pattern": [
                "AB ",
                "CDB",
                "AB "
            ],
            "key": {
                "A": "forbidden_arcanus:whirlwind_prism",
                "B": "minecraft:iron_ingot",
                "C": "forbidden_arcanus:mundabitur_dust",
                "D": "kubejs:arcanus_processor"
            },
            "id": "advanced_card"
        },
        {
            "output": "3x ae2:cell_component_4k",
            "pattern": [
                "ADA",
                "CBC",
                "ACA"
            ],
            "key": {
                "A": "forbidden_arcanus:mundabitur_dust",
                "B": "ae2:quartz_glass",
                "C": "ae2:cell_component_1k",
                "D": "kubejs:arcanus_processor"
            },
            "id": "cell_component_4k"
        },
        {
            "output": "ae2:cell_component_16k",
            "pattern": [
                "ABA",
                "CDC",
                "ACA"
            ],
            "key": {
                "A": "ae2:fluix_dust",
                "B": "kubejs:arcanus_processor",
                "C": "ae2:cell_component_4k",
                "D": "ae2:quartz_glass"
            },
            "id": "cell_component_16k"
        },
        {
            "output": "mekanismadditions:white_plastic",
            "pattern": [
                "AAA",
                "AAA",
                "AAA"
            ],
            "key": {
                "A": "industrialforegoing:plastic"
            },
            "id": "white_plastic"
        },
        {
            "output": "4x create:andesite_alloy",
            "pattern": [
                "AB ",
                "BA ",
                "   "
            ],
            "key": {
                "A": "forbidden_arcanus:ferrognetic_mixture",
                "B": "minecraft:andesite"
            },
            "id": "andesite_alloy"
        },
        {
            "output": "4x industrialforegoing:machine_frame_pity",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "create:brass_casing",
                "B": "industrialforegoing:plastic",
                "C": "forbidden_arcanus:mundabitur_dust"
            },
            "id": "machine_frame_pity"
        },
        {
            "output": 'appmek:chemical_storage_cell_1k[ae2:storage_cell_inv=[{"#":640L,"#t":"appmek:chemical",id:"kubejs:crystal"}]]',
            "pattern": [
                "AAA",
                "ABA",
                "AAA"
            ],
            "key": {
                "A": "avaritia:crystal_matrix_ingot",
                "B": "appmek:chemical_storage_cell_1k"
            },
            "id": "crystal_1"
        },
        {
            "output": "cdp2:ritual_eziveus",
            "pattern": [
                "ABA",
                "CDC",
                "ABA"
            ],
            "key": {
                "A": "ars_nouveau:purple_archwood_log",
                "B": "forbidden_arcanus:whirlwind_prism",
                "C": "create:andesite_alloy",
                "D": "ars_nouveau:source_gem_block"
            },
            "id": "ritual_eziveus"
        },
        {
            "output": "minecraft:blaze_rod",
            "pattern": [
                "AA ",
                "AA ",
                "   "
            ],
            "key": {
                "A": "minecraft:blaze_powder"
            },
            "id": "blaze_rod"
        },
        {
            "output": "industrialforegoing:ore_laser_base",
            "pattern": [
                "ABA",
                "CDC",
                "EFE"
            ],
            "key": {
                "A": "industrialforegoing:plastic",
                "B": "forbidden_arcanus:sea_prism",
                "C": "ars_nouveau:sourcestone",
                "D": "industrialforegoing:machine_frame_simple",
                "E": "mekanism:elite_control_circuit",
                "F": "forbidden_arcanus:mundabitur_dust"
            },
            "id": "ore_laser_base"
        },
        {
            "output": "starbunclemania:fluid_sourcelink",
            "pattern": [
                " A ",
                "BCB",
                " A "
            ],
            "key": {
                "A": "ars_nouveau:source_gem",
                "B": "avaritia:crystal_matrix_ingot",
                "C": "mekanism:alloy_reinforced"
            },
            "id": "fluid_sourcelink"
        },
        {
            "output": "ae2cs:crystal_pulverizer",
            "pattern": [
                "ABA",
                "CDC",
                "EFE"
            ],
            "key": {
                "A": "ae2:certus_quartz_dust",
                "B": "ae2:inscriber",
                "C": "minecraft:iron_ingot",
                "D": "cdp2:frame",
                "E": "forbidden_arcanus:rune",
                "F": "minecraft:blaze_powder"
            },
            "id": "crystal_pulverizer"
        },
        {
            "output": "ae2:drive",
            "pattern": [
                "ABA",
                "CDC",
                "ABA"
            ],
            "key": {
                "A": "minecraft:iron_ingot",
                "B": "kubejs:arcanus_processor",
                "C": "ae2:fluix_glass_cable",
                "D": "cdp2:frame"
            },
            "id": "drive"
        },
        {
            "output": "8x packaged_faa:pedestal_packaged",
            "pattern": [
                "AAA",
                "ABA",
                "AAA"
            ],
            "key": {
                "A": "forbidden_arcanus:darkstone_pedestal",
                "B": "packagedauto:package_component"
            },
            "id": "pedestal_packaged"
        },
        {
            "output": "merequester:requester",
            "pattern": [
                "ABA",
                "CDC",
                "EFE"
            ],
            "key": {
                "A": "minecraft:iron_ingot",
                "B": "#ae2:interface",
                "C": "ae2:crafting_accelerator",
                "D": "forbidden_arcanus:whirlwind_prism",
                "E": "minecraft:copper_ingot",
                "F": "minecraft:amethyst_shard"
            },
            "id": "requester"
        },
        {
            "output": "8x ae2:basic_card",
            "pattern": [
                "AB ",
                "CDB",
                "AB "
            ],
            "key": {
                "A": "mekanism:alloy_infused",
                "B": "forbidden_arcanus:deorum_ingot",
                "C": "ae2:certus_quartz_dust",
                "D": "kubejs:arcanus_processor"
            },
            "id": "basic_card"
        },
        {
            "output": "advanced_ae:adv_pattern_encoder",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "forbidden_arcanus:arcane_crystal_dust",
                "B": "forbidden_arcanus:mundabitur_dust",
                "C": "kubejs:arcanus_processor"
            },
            "id": "adv_pattern_encoder"
        },
        {
            "output": "advanced_ae:small_adv_pattern_provider",
            "pattern": [
                "AB ",
                "CD ",
                "   "
            ],
            "key": {
                "A": "ae2:pattern_provider",
                "B": "forbidden_arcanus:mundabitur_dust",
                "C": "minecraft:ender_pearl",
                "D": "kubejs:arcanus_processor"
            },
            "id": "small_adv_pattern_provider"
        },
        {
            "output": "sfm:disk",
            "pattern": [
                "ABA",
                "BCB",
                "DED"
            ],
            "key": {
                "A": "minecraft:paper",
                "B": "forbidden_arcanus:mundabitur_dust",
                "C": "forbidden_arcanus:deorum_block",
                "D": "minecraft:red_dye",
                "E": "minecraft:repeater"
            },
            "id": "disk"
        },
        {
            "output": "advanced_ae:adv_pattern_provider",
            "pattern": [
                "AB ",
                "CD ",
                "   "
            ],
            "key": {
                "A": "extendedae:ex_pattern_provider",
                "B": "forbidden_arcanus:mundabitur_dust",
                "C": "minecraft:ender_pearl",
                "D": "kubejs:arcanus_processor"
            },
            "id": "adv_pattern_provider"
        },
        {
            "output": "extendedae:ex_pattern_provider",
            "pattern": [
                "ABA",
                "CDE",
                "ABA"
            ],
            "key": {
                "A": "minecraft:iron_ingot",
                "B": "minecraft:crafting_table",
                "C": "ae2:annihilation_core",
                "D": "ae2:capacity_card",
                "E": "ae2:formation_core"
            },
            "id": "ex_pattern_provider"
        },
        {
            "output": "appliedsoul:soul_cell_housing",
            "pattern": [
                "ABA",
                "B B",
                "CDC"
            ],
            "key": {
                "A": "ae2:quartz_glass",
                "B": "minecraft:echo_shard",
                "C": "industrialforegoing:plastic",
                "D": "naturesaura:gold_powder"
            },
            "id": "soul_cell_housing"
        },
        {
            "output": "appliedsoul:soul_collector",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "avaritia:neutron_pile",
                "B": "minecraft:echo_shard",
                "C": "ae2:interface"
            },
            "id": "soul_collector"
        },
        {
            "output": "8x minecraft:sweet_berries",
            "pattern": [
                "A  ",
                " A ",
                "  A"
            ],
            "key": {
                "A": "mysticalagriculture:nature_essence"
            },
            "id": "sweet_berries"
        },
        {
            "output": "ars_nouveau:enchanting_apparatus",
            "pattern": [
                "ABA",
                "CDC",
                "ABA"
            ],
            "key": {
                "A": "create:brass_nugget",
                "B": "ars_nouveau:sourcestone",
                "C": "create:brass_ingot",
                "D": "ars_nouveau:manipulation_essence"
            },
            "id": "enchanting_apparatus"
        },
        {
            "output": "justdirethings:gooblock_tier1",
            "pattern": [
                "ABA",
                "CDC",
                "ABA"
            ],
            "key": {
                "A": "minecraft:diamond",
                "B": "forbidden_arcanus:sea_prism",
                "C": "minecraft:rotten_flesh",
                "D": "create:brass_casing"
            },
            "id": "gooblock_tier1"
        },
        {
            "output": "advanced_ae:reaction_chamber",
            "pattern": [
                "ABA",
                "ACA",
                "DED"
            ],
            "key": {
                "A": "ae2:fluix_dust",
                "B": "ae2:condenser",
                "C": "industrialforegoing:machine_frame_advanced",
                "D": "occultism:otherworld_ashes",
                "E": "naturesaura:birth_spirit"
            },
            "id": "reaction_chamber"
        },
        {
            "output": 'appmek:chemical_storage_cell_1k[ae2:storage_cell_inv=[{"#":5760L,"#t":"appmek:chemical",id:"kubejs:crystal"}]]',
            "pattern": [
                "AAA",
                "ABA",
                "AAA"
            ],
            "key": {
                "A": "avaritia:crystal_matrix",
                "B": "appmek:chemical_storage_cell_1k"
            },
            "id": "crystal_2"
        },
        {
            "output": "avaritia:crystal_matrix",
            "pattern": [
                "AAA",
                "ABA",
                "AAA"
            ],
            "key": {
                "A": "avaritia:crystal_matrix_ingot",
                "B": "occultism:iesnium_ingot"
            },
            "id": "crystal_matrix"
        },
        {
            "output": "naturesaura:projectile_generator",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "naturesaura:tainted_gold",
                "B": "naturesaura:infused_stone",
                "C": "industrialforegoing:machine_frame_advanced"
            },
            "id": "projectile_generator"
        },
        {
            "output": "avaritia:sculk_crafting_table",
            "pattern": [
                "ABA",
                "CDC",
                "ABA"
            ],
            "key": {
                "A": "minecraft:echo_shard",
                "B": "avaritia:double_compressed_crafting_table",
                "C": "forbidden_arcanus:quantum_core",
                "D": "industrialforegoing:machine_frame_advanced"
            },
            "id": "sculk_crafting_table"
        },
        {
            "output": "16x ae2omnicells:quantum_omni_cell_component_1k",
            "pattern": [
                "ABA",
                "CDC",
                "ACA"
            ],
            "key": {
                "A": "advanced_ae:quantum_alloy_plate",
                "B": "ae2omnicells:multidimensional_expansion_processor",
                "C": "advanced_ae:quantum_alloy",
                "D": "ae2:cell_component_1k"
            },
            "id": "quantum_omni_cell_component_1k"
        },
        {
            "output": "extendedcrafting:compressor",
            "pattern": [
                "ABA",
                "BCB",
                "ADA"
            ],
            "key": {
                "A": "extendedcrafting:black_iron_ingot",
                "B": "justdirethings:celestigem",
                "C": "industrialforegoing:machine_frame_advanced",
                "D": "extendedcrafting:black_iron_slate"
            },
            "id": "compressor"
        },
        {
            "output": "mekmm:recycler",
            "pattern": [
                "ABA",
                "CDC",
                "ABA"
            ],
            "key": {
                "A": "createmoremachines:end_alloy",
                "B": "kubejs:enchanted_time_crystal",
                "C": "mysticalagradditions:insanium_ingot",
                "D": "industrialforegoing:machine_frame_advanced"
            },
            "id": "recycler"
        },
        {
            "output": "mekmm:ambient_gas_collector",
            "pattern": [
                "ABA",
                "CDC",
                "EEE"
            ],
            "key": {
                "A": "createmoremachines:end_alloy",
                "B": "mysticalagradditions:insanium_ingot",
                "C": "mekanism:ultimate_chemical_tank",
                "D": "industrialforegoing:machine_frame_advanced",
                "E": "minecraft:crying_obsidian"
            },
            "id": "ambient_gas_collector"
        },
        {
            "output": "4x justdynathings:creative_goo",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "jdte:time_fluid_catalyst",
                "B": "mysticalagradditions:insanium_ingot",
                "C": "ifeu:dragon_star"
            },
            "id": "creative_goo"
        },
        {
            "output": "cdp2:flux_infusion_enchantment_factory",
            "pattern": [
                "ABA",
                "CDC",
                "EFE"
            ],
            "key": {
                "A": "industrialforegoing:plastic",
                "B": "apothicenchantingaddition:flux_enchanting_table",
                "C": "kubejs:quantum_prism",
                "D": "industrialforegoing:machine_frame_supreme",
                "E": "mysticalagradditions:insanium_ingot",
                "F": "ifeu:dragon_star"
            },
            "id": "flux_infusion_enchantment_factory"
        },
        {
            "output": "4x createmoremachines:beyond_alloy",
            "pattern": [
                "ABC",
                "DED",
                "FGH"
            ],
            "key": {
                "A": "mekanism:alloy_infused",
                "B": "mekanism:alloy_reinforced",
                "C": "mekanism:alloy_atomic",
                "D": "mekanism_extras:alloy_radiance",
                "E": "jdte:time_fluid_catalyst",
                "F": "create:andesite_alloy",
                "G": "createmoremachines:end_alloy",
                "H": "createmoremachines:netherite_alloy"
            },
            "id": "beyond_alloy"
        },
        {
            "output": "occultism:dimensional_mineshaft",
            "pattern": [
                "ABA",
                "CDC",
                "ABA"
            ],
            "key": {
                "A": "avaritia:blaze_cube",
                "B": "jdte:time_fluid_catalyst",
                "C": "createmoremachines:beyond_alloy",
                "D": "industrialforegoing:machine_frame_supreme"
            },
            "id": "dimensional_mineshaft"
        },
        {
            "output": "justdynathings:reforger",
            "pattern": [
                "ABA",
                "CDC",
                "ACA"
            ],
            "key": {
                "A": "justdirethings:ferricore_ingot",
                "B": "createmoremachines:beyond_alloy",
                "C": "justdirethings:celestigem",
                "D": "justdynathings:creative_goo"
            },
            "id": "reforger"
        },
        {
            "output": "ae2:creative_energy_cell",
            "pattern": [
                "ABA",
                "CDC",
                "ABA"
            ],
            "key": {
                "A": "ae2:dense_energy_cell",
                "B": "createmoremachines:beyond_alloy",
                "C": "forbidden_arcanus:eternal_stella",
                "D": 'appflux:core_256m'
            },
            "id": "creative_energy_cell"
        },
        {
            "output": "8x occultism:storage_stabilizer_tier0",
            "pattern": [
                "ABA",
                " C ",
                "AAA"
            ],
            "key": {
                "A": "occultism:otherstone_slab",
                "B": "mekanism_extras:alloy_radiance",
                "C": "occultism:otherstone"
            },
            "id": "storage_stabilizer_tier0"
        },
        {
            "output": "4x extendedae_plus:infinity_core",
            "pattern": [
                "ABC",
                "BDB",
                "EBF"
            ],
            "key": {
                "A": "ae2omnicells:quantum_omni_cell_component_256m",
                "B": "occultism:storage_stabilizer_tier4",
                "C": "ae2omnicells:complex_omni_cell_component_256m",
                "D": "appflux:core_256m",
                "E": "appliedcreate:stress_storage_component_256m",
                "F": "ae2omnicells:omni_cell_component_256m"
            },
            "id": "infinity_core"
        },
        {
            "output": "64x cdp2:absolute_essence",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "mekanism_extras:alloy_radiance",
                "B": "mysticalagradditions:insanium_essence",
                "C": "extendedae_plus:infinity_core"
            },
            "id": "absolute_essence"
        },
        {
            "output": "cdp2:absolute_botany_pot",
            "pattern": [
                "ABA",
                "ACA",
                "DAD"
            ],
            "key": {
                "A": "minecraft:terracotta",
                "B": "createmoremachines:beyond_alloy_block",
                "C": "botanypotstiers:mega_terracotta_botany_pot",
                "D": "mekanism_extras:absolute_control_circuit"
            },
            "id": "absolute_botany_pot"
        },
        {
            "output": "cdp2:absolute_hopper_botany_pot",
            "pattern": [
                "ABA",
                "ACA",
                "DAD"
            ],
            "key": {
                "A": "minecraft:terracotta",
                "B": "createmoremachines:beyond_alloy_block",
                "C": "botanypotstiers:mega_terracotta_hopper_botany_pot",
                "D": "mekanism_extras:absolute_control_circuit"
            },
            "id": "absolute_hopper_botany_pot"
        },
        {
            "output": "16x mekanismgenerators:fission_reactor_casing",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "mysticalagradditions:insanium_ingot",
                "B": "mekanism:ingot_lead",
                "C": "industrialforegoing:machine_frame_supreme"
            },
            "id": "fission_reactor_casing"
        },
        {
            "output": "actuallyadditions:iron_casing",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "createmoremachines:beyond_alloy",
                "B": "actuallyadditions:black_quartz",
                "C": "industrialforegoing:machine_frame_supreme"
            },
            "id": "iron_casing"
        },
        {
            "output": "mekmm:large_gas_burning_generator",
            "pattern": [
                "ABA",
                "CDC",
                "ABA"
            ],
            "key": {
                "A": "mekmm:ultimate_max_chemical_tank",
                "B": "mekmm:advanced_electrolysis_core",
                "C": "actuallyadditions:iron_casing",
                "D": "mekanismgenerators:gas_burning_generator"
            },
            "id": "large_gas_burning_generator"
        },
        {
            "output": "actuallyadditions:display_stand",
            "pattern": [
                " A ",
                "BCB",
                "DDD"
            ],
            "key": {
                "A": "actuallyadditions:advanced_coil",
                "B": "actuallyadditions:ethetic_green_block",
                "C": "actuallyadditions:iron_casing",
                "D": "actuallyadditions:ethetic_white_block"
            },
            "id": "display_stand"
        },
        {
            "output": "16x cdp2:supreme_essence",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "mekanism_extras:alloy_thermonuclear",
                "B": "cdp2:absolute_essence",
                "C": "extendedae_plus:infinity_core"
            },
            "id": "supreme_essence"
        },
        {
            "output": "ae2cs:meteorite_pattern_provider",
            "pattern": [
                "ABA",
                "CAC",
                "ABA"
            ],
            "key": {
                "A": "ae2:molecular_assembler",
                "B": "forbidden_arcanus:sea_prism",
                "C": "extendedae:ex_pattern_provider"
            },
            "id": "meteorite_pattern_provider"
        },
        {
            "output": "ars_nouveau:dominion_wand",
            "pattern": [
                " AB",
                " CA",
                "C  "
            ],
            "key": {
                "A": "ars_nouveau:source_gem",
                "B": "minecraft:gold_ingot",
                "C": "minecraft:stick"
            },
            "id": "dominion_wand"
        },
        {
            "output": "ars_nouveau:relay_splitter",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "minecraft:quartz",
                "B": "minecraft:lapis_lazuli",
                "C": "ars_nouveau:relay"
            },
            "id": "relay_splitter"
        },
        {
            "output": "create:creative_blaze_cake",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "industrialforegoing:pink_slime_ingot",
                "B": "create:blaze_cake",
                "C": "ifeu:creative_chance_addon"
            },
            "id": "creative_blaze_cake"
        },
        {
            "output": "16x minecraft:bone",
            "pattern": [
                "   ",
                "AAA",
                "   "
            ],
            "key": {
                "A": "mysticalagriculture:skeleton_essence"
            },
            "id": "bone"
        },
        {
            "output": "ars_nouveau:creative_source_jar",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "starbunclemania:fluid_sourcelink",
                "B": "ae2lt:overload_alloy",
                "C": "ars_nouveau:source_jar"
            },
            "id": "creative_source_jar"
        },
        {
            "output": "jdte:crystal_incubator",
            "pattern": [
                " A ",
                "BCB",
                " A "
            ],
            "key": {
                "A": "justdirethings:time_crystal",
                "B": "jdte:range_upgrade",
                "C": "jdte:extended_item_receiver"
            },
            "id": "crystal_incubator"
        },
        {
            "output": "4x mekanism:thermal_evaporation_block",
            "pattern": [
                " A ",
                "ABA",
                " A "
            ],
            "key": {
                "A": "mekanism:ingot_steel",
                "B": "mekanism:reprocessed_fissile_fragment"
            },
            "id": "thermal_evaporation_block"
        },
        {
            "output": "minecraft:ancient_debris",
            "pattern": [
                "AAA",
                "ABA",
                "AAA"
            ],
            "key": {
                "A": "mysticalagriculture:netherite_essence",
                "B": "minecraft:basalt"
            },
            "id": "ancient_debris"
        },
        {
            "output": "jdte:greenhouse",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "cdp2:absolute_hopper_botany_pot",
                "B": "mysticalagradditions:insanium_ingot",
                "C": "industrialforegoing:machine_frame_supreme"
            },
            "id": "greenhouse"
        },
        {
            "output": "extendedcompressor:extended_compressor",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "createmoremachines:beyond_alloy",
                "B": "forbidden_arcanus:eternal_stella",
                "C": "extendedcrafting:compressor"
            },
            "id": "extended_compressor"
        },
        {
            "output": "ae2ltpp:aa_empowerer_packaged_core",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "actuallyadditions:black_quartz",
                "B": "actuallyadditions:empowered_diamatine_crystal",
                "C": "ae2ltpp:basic_packaged_core"
            },
            "id": "aa_empowerer_packaged_core"
        },
        {
            "output": "4x ae2lt:matter_warping_matrix_casing",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "extendedcrafting:the_ultimate_block",
                "B": "ae2lt:firmament_alloy_ingot",
                "C": 'actuallyadditions:ender_casing'
            },
            "id": "matter_warping_matrix_casing"
        },
        {
            "output": "mekanism:antiprotonic_nucleosynthesizer",
            "pattern": [
                "ABA",
                "CDC",
                "ABA"
            ],
            "key": {
                "A": "mekanism_extras:alloy_thermonuclear",
                "B": "mekanism_extras:supreme_control_circuit",
                "C": "mekanism:pellet_antimatter",
                "D": "ae2lt:matter_warping_matrix_casing"
            },
            "id": "antiprotonic_nucleosynthesizer"
        },
        {
            "output": "extendedcrafting:crafting_core",
            "pattern": [
                "ABA",
                "CDC",
                "AEA"
            ],
            "key": {
                "A": "extendedcrafting:black_iron_ingot",
                "B": "extendedcrafting:crystaltine_catalyst",
                "C": "extendedcrafting:crystaltine_component",
                "D": "ae2lt:matter_warping_matrix_casing",
                "E": "extendedcrafting:black_iron_slate"
            },
            "id": "crafting_core"
        },
        {
            "output": "4x mekanism_extras:enriched_shining",
            "pattern": [
                "ABA",
                "CDC",
                "AEA"
            ],
            "key": {
                "A": "kubejs:colorful_star",
                "B": "mekanism:pellet_antimatter",
                "C": "naturesaura:depth_ingot",
                "D": "extendedcrafting:the_ultimate_block",
                "E": "mekanism_extras:enriched_thermonuclear"
            },
            "id": "enriched_shining"
        },
        {
            "output": "16x cdp2:cosmic_essence",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "mekanism_extras:alloy_shining",
                "B": "cdp2:supreme_essence",
                "C": "extendedae_plus:infinity_core"
            },
            "id": "cosmic_essence"
        },
        {
            "output": "appliedsoul:soul_broadcast",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "minecraft:echo_shard",
                "B": "avaritia:neutron_pile",
                "C": "ae2:interface"
            },
            "id": "soul_broadcast"
        },
        {
            "output": "appliedsoul:broadcast_connect_tool",
            "pattern": [
                " A ",
                " B ",
                " C "
            ],
            "key": {
                "A": "ae2:wireless_receiver",
                "B": "avaritia:neutron_pile",
                "C": "minecraft:echo_shard"
            },
            "id": "broadcast_connect_tool"
        },
        {
            "output": "jdte:large_greenhouse",
            "pattern": [
                "ABA",
                "CDC",
                "ABA"
            ],
            "key": {
                "A": "actuallyadditions:ender_casing",
                "B": "actuallyadditions:ring_of_growth",
                "C": "actuallyadditions:greenhouse_glass",
                "D": "jdte:greenhouse"
            },
            "id": "large_greenhouse"
        },
        {
            "output": "actuallyadditions:ender_casing",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "minecraft:ender_pearl",
                "B": "actuallyadditions:empowered_diamatine_crystal",
                "C": "actuallyadditions:iron_casing"
            },
            "id": "ender_casing"
        },
        {
            "output": "4x cdp2:infinity_catalyst_creative_drawer",
            "pattern": [
                "ACA",
                "CBC",
                "ACA"
            ],
            "key": {
                "A": 'ae2lt:hyperdimensional_topological_lattice',
                "B": "cdp2:infinity_catalyst_creative_drawer",
                "C": 'cdp2:cosmic_essence'
            },
            "id": "infinity_catalyst_creative_drawer"
        },
        {
            "output": 'cell4:infinity_item_cell[custom_data={cell4item:"avaritia:infinity_catalyst"}]',
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "kubejs:infinity_lightning_cell",
                "B": "cdp2:infinity_catalyst_creative_drawer",
                "C": "avaritia:tesseract"
            },
            "id": "infinity_item_cell/infinity_catalyst"
        },
        {
            "output": "16x mekanism_extras:enriched_spectrum",
            "pattern": [
                "ABA",
                "CDC",
                "AEA"
            ],
            "key": {
                "A": "cdp2:cosmic_essence",
                "B": "extendedcrafting:ultimate_singularity",
                "C": "ae2lt:hyperdimensional_topological_lattice",
                "D": "mekanism_extras:enriched_shining",
                "E": "avaritia:eternal_singularity"
            },
            "id": "enriched_spectrum"
        },
        {
            "output": "4x cdp2:infinite_essence",
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "mekanism_extras:alloy_spectrum",
                "B": "cdp2:cosmic_essence",
                "C": "extendedae_plus:infinity_core"
            },
            "id": "infinite_essence"
        },
        {
            "output": "createmoremachines:creative_casing",
            "pattern": [
                "ABC",
                "DEF",
                "GHI"
            ],
            "key": {
                "A": "botanypots:terracotta_hopper_botany_pot",
                "B": "botanypotstiers:elite_terracotta_hopper_botany_pot",
                "C": "botanypotstiers:ultra_terracotta_hopper_botany_pot",
                "D": "cdp2:infinite_hopper_botany_pot",
                "E": "createmoremachines:beyond_casing",
                "F": "botanypotstiers:mega_terracotta_hopper_botany_pot",
                "G": "cdp2:cosmic_hopper_botany_pot",
                "H": "cdp2:supreme_hopper_botany_pot",
                "I": "cdp2:absolute_hopper_botany_pot"
            },
            "id": "creative_casing"
        },
        {
            "output": "cdp2:cozy_home",
            "pattern": [
                "AAA",
                "ABA",
                "AAA"
            ],
            "key": {
                "A": "kubejs:cosmic_origin_topological_lattice",
                "B": "createmoremachines:creative_casing"
            },
            "id": "cozy_home"
        }
    ]
    
    recipes.forEach(recipe =>{
        event.shaped(recipe.output,recipe.pattern,recipe.key).id(prefix + recipe.id)
    })

    botanypot("absolute","supreme",'actuallyadditions:empowered_restonia_crystal_block','mekanism_extras:supreme_control_circuit')
    botanypot("supreme","cosmic",'naturesaura:depth_ingot_block','mekanism_extras:cosmic_control_circuit')
    botanypot("cosmic","infinite",'ae2lt:pigmee_fumo','mekanism_extras:infinite_control_circuit')

    event.shaped(
        "ae2lt:pigmee_fumo",
        [
            "AAA",
            "ABA",
            "AAA"
	    ],
	    {
            "A": "mekanism_extras:alloy_spectrum",
            "B": "ae2lt:pigmee_core"
	    }
    ).keepIngredient("ae2lt:pigmee_core").id(prefix + "pigmee_fumo")



    function botanypot(before, tier, material0, material1){
        event.shaped(`cdp2:${tier}_botany_pot`,
            [
                "ABA",
                "ACA",
                "DAD"
            ],
            {
                "A": "minecraft:terracotta",
                "B": material0,
                "C": `cdp2:${before}_botany_pot`,
                "D": material1
            }
        ).id(prefix + `${tier}_botany_pot`)

        event.shaped(`cdp2:${tier}_hopper_botany_pot`,
            [
                "ABA",
                "ACA",
                "DAD"
            ],
            {
                "A": "minecraft:terracotta",
                "B": material0,
                "C": `cdp2:${before}_hopper_botany_pot`,
                "D": material1
            }
        ).id(prefix + `${tier}_hopper_botany_pot`)

        event.shapeless(`cdp2:${tier}_hopper_botany_pot`,
            [
                "minecraft:hopper",
                `cdp2:${tier}_botany_pot`
            ]
        ).id("cdp2:recipes/minecraft/shapeless/" + `${tier}_hopper_botany_pot`)
    }
})