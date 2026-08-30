ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/minecraft/shapeless/"
    const recipes = [
        [
            "4x cdp2:void_matter",
            [
                "cdp2:void_block"
            ],
            "void_matter"
        ],
        [
            'minecraft:flint_and_steel',
            [
                'mekanism:ingot_steel',
                'minecraft:flint'
            ],
            "flint_and_steel"
        ],
        [
            "4x mysticalagradditions:insanium_essence",
            [
                "cdp2:absolute_essence"
            ],
            "insanium_essence"
        ],
        [
            "4x cdp2:absolute_essence",
            [
                "cdp2:supreme_essence"
            ],
            "absolute_essence"
        ],
        [
            "4x cdp2:supreme_essence",
            [
                "cdp2:cosmic_essence"
            ],
            "supreme_essence"
        ],
        [
            "4x cdp2:cosmic_essence",
            [
                "cdp2:infinite_essence"
            ],
            "cosmic_essence"
        ],
        hephaestus_packaged(1),
        hephaestus_packaged(2),
        hephaestus_packaged(3),
        hephaestus_packaged(4),
        hephaestus_packaged(5),
        [
            "ae2:silicon_press",
            [
                "kubejs:arcanus_print_press",
                "ae2:silicon"
            ],
            "silicon_press"
        ],
        [
            "ae2:crafting_accelerator",
            [
                "ae2:crafting_unit",
                "kubejs:arcanus_processor"
            ],
            "crafting_accelerator"
        ],
        [
            "4x minecraft:clay_ball",
            [
                "minecraft:clay"
            ],
            "clay_ball"
        ],
        [
            "9x fluxnetworks:flux_dust",
            [
                "fluxnetworks:flux_block"
            ],
            "flux_dust"
        ],
        [
            "ae2:capacity_card",
            [
                "forbidden_arcanus:arcane_crystal_dust",
                "ae2:basic_card"
            ],
            "capacity_card"
        ],
        [
            "extendedae:ex_pattern_provider",
            [
                "ae2:pattern_provider",
                "ae2:capacity_card"
            ],
            "ex_pattern_provider"
        ],
        [
            "minecraft:netherite_ingot",
            [
                "minecraft:netherite_scrap",
                "minecraft:netherite_scrap",
                "minecraft:netherite_scrap",
                "minecraft:netherite_scrap",
                "create:brass_ingot",
                "create:brass_ingot",
                "create:brass_ingot",
                "create:brass_ingot"
            ],
            "netherite_ingot"
        ],
        [
            "jdte:time_fluid_catalyst",
            [
                "kubejs:enchanted_time_crystal",
                "justdirethings:polymorphic_catalyst",
                "mekanism_extras:dust_radiance"
            ],
            "time_fluid_catalyst"
        ],
        [
            "mysticalagradditions:insanium_ingot",
            [
                "justdirethings:eclipsealloy_ingot",
                "mysticalagradditions:insanium_essence",
                "mysticalagradditions:insanium_essence"
            ],
            "insanium_ingot"
        ],
        [
            "extendedae_plus:infinity_biginteger_cell",
            [
                "extendedae_plus:infinity_core",
                "ae2:item_cell_housing"
            ],
            "infinity_biginteger_cell"
        ],
        [
            "cdp2:absolute_hopper_botany_pot",
            [
                "minecraft:hopper",
                "cdp2:absolute_botany_pot"
            ],
            "absolute_hopper_botany_pot"
        ],
        [
            "kubejs:infinity_lava_cell",
            [
                "ae2:fluid_storage_cell_16k",
                "functionalstorage:dripping_upgrade"
            ],
            "infinity_lava_cell"
        ],
        [
            "arseng:me_source_jar",
            [
                "ae2:interface",
                "ars_nouveau:source_jar"
            ],
            "me_source_jar"
        ],
        [
            "arseng:source_cell_housing",
            [
                "ae2:item_cell_housing",
                "ars_nouveau:source_jar"
            ],
            "source_cell_housing"
        ],
        [
            "ars_nouveau:archmage_spell_book",
            [
                "ars_nouveau:apprentice_spell_book",
                "minecraft:nether_star"
            ],
            "archmage_spell_book"
        ],
        [
            "kubejs:infinity_lightning_cell",
            [
                "ae2lt:bulk_lightning_storage_component",
                "cdp2:cosmic_essence"
            ],
            "infinity_lightning_cell"
        ],
        [
            "ae2lt:inactive_firmament_spirit_core",
            [
                "ae2cs:blank_print_press",
                "ae2lt:firmament_alloy_ingot"
            ],
            "inactive_firmament_spirit_core"
        ]
    ]
    
    recipes.forEach(([result,input,id]) =>{
        event.shapeless(result,input).id(prefix + id)
    })

    replication_creative("ars_nouveau:creative_source_jar")
    // replication_creative("ae2:creative_energy_cell")
    // replication_creative("create:creative_motor")




    function hephaestus_packaged(level){
        if(level == 1){
            return [
                'packaged_faa:hephaestus_packaged',
                [
                    'packagedauto:package_component',
                    'forbidden_arcanus:hephaestus_forge_tier_1'
                ],
                "hephaestus_packaged_1"
            ]
        }
        return [
            `packaged_faa:hephaestus_packaged[packaged_faa:level_forge={level:${level}}]`,
            [
                'packagedauto:package_component',
                `forbidden_arcanus:hephaestus_forge_tier_${level}`
            ],
            `hephaestus_packaged_${level}`
        ]
    }

    function replication_creative(creative_item){
        event.shapeless("2x " + creative_item,[creative_item,'mekanism_extras:alloy_thermonuclear']).id(prefix + "replication/" + creative_item.substring(creative_item.indexOf(":") + 1))
    }
})