ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/mysticalagriculture/infusion/"
    
    const recipes = [
        {
            "output": "minecraft:coal_block",
            "count":2,
            "input": "fluxnetworks:flux_block",
            "ingredients": [
                {
                    "item": "minecraft:charcoal"
                },
                {
                    "item": "mysticalagriculture:prosperity_shard"
                },
                {
                    "item": "minecraft:charcoal"
                },
                {
                    "item": "mysticalagriculture:prosperity_shard"
                },
                {
                    "item": "minecraft:charcoal"
                },
                {
                    "item": "mysticalagriculture:prosperity_shard"
                },
                {
                    "item": "minecraft:charcoal"
                },
                {
                    "item": "mysticalagriculture:prosperity_shard"
                }
            ],
            "id": "coal_block"
        },
        {
            "output": "mysticalagriculture:coal_essence",
            "count":8,
            "input": "minecraft:coal_block",
            "ingredients": [
                {
                    "item": "minecraft:coal"
                },
                {
                    "item": 'mysticalagriculture:stone_essence'
                },
                {
                    "item": "minecraft:coal"
                },
                {
                    "item": 'mysticalagriculture:stone_essence'
                },
                {
                    "item": "minecraft:coal"
                },
                {
                    "item": 'mysticalagriculture:stone_essence'
                },
                {
                    "item": "minecraft:coal"
                },
                {
                    "item": 'mysticalagriculture:stone_essence'
                }
            ],
            "id": "coal_essence"
        },
        {
            "output": "ae2:certus_quartz_dust",
            "count": 8,
            "input": 'mekanism:dust_coal',
            "ingredients": [
                {
                    "item": "mekanism:dust_osmium"
                },
                {
                    "item": "mekanism:dust_iron"
                },
                {
                    "item": "mekanism:dust_osmium"
                },
                {
                    "item": "mekanism:dust_iron"
                },
                {
                    "item": "mekanism:dust_osmium"
                },
                {
                    "item": "mekanism:dust_iron"
                },
                {
                    "item": "mekanism:dust_osmium"
                },
                {
                    "item": "mekanism:dust_iron"
                }
            ],
            "id": "certus_quartz_dust"
        },
        {
            "output": "mysticalagriculture:sky_stone_essence",
            "count": 16,
            "input": "minecraft:coal",
            "ingredients": [
                {
                    "item": "minecraft:charcoal"
                },
                {
                    "item": "mysticalagriculture:coal_essence"
                },
                {
                    "item": "minecraft:charcoal"
                },
                {
                    "item": "mysticalagriculture:coal_essence"
                },
                {
                    "item": "minecraft:charcoal"
                },
                {
                    "item": "mysticalagriculture:coal_essence"
                },
                {
                    "item": "minecraft:charcoal"
                },
                {
                    "item": "mysticalagriculture:coal_essence"
                }
            ],
            "id": "sky_stone_essence"
        },
        {
            "output": "mysticalagriculture:rubber_seeds",
            "count": 1,
            "input": "mysticalagriculture:inferium_seeds",
            "ingredients": [
                {
                    "item": "avaritia:neutron_pile"
                },
                {
                    "item": "mysticalagriculture:prudentium_essence"
                },
                {
                    "item": "avaritia:neutron_pile"
                },
                {
                    "item": "mysticalagriculture:prudentium_essence"
                },
                {
                    "item": "avaritia:neutron_pile"
                },
                {
                    "item": "mysticalagriculture:prudentium_essence"
                },
                {
                    "item": "avaritia:neutron_pile"
                },
                {
                    "item": "mysticalagriculture:prudentium_essence"
                }
            ],
            "id": "rubber_seeds"
        },
        {
            "output": "mysticalagriculture:amethyst_seeds",
            "count": 1,
            "input": "mysticalagriculture:inferium_seeds",
            "ingredients": [
                {
                    "item": "ae2cs:purified_fluix_crystal"
                },
                {
                    "item": "mysticalagriculture:prudentium_essence"
                },
                {
                    "item": "ae2cs:purified_fluix_crystal"
                },
                {
                    "item": "mysticalagriculture:prudentium_essence"
                },
                {
                    "item": "ae2cs:purified_fluix_crystal"
                },
                {
                    "item": "mysticalagriculture:prudentium_essence"
                },
                {
                    "item": "ae2cs:purified_fluix_crystal"
                },
                {
                    "item": "mysticalagriculture:prudentium_essence"
                }
            ],
            "id": "amethyst_seeds"
        },
        {
            "output": "mysticalagriculture:certus_quartz_seeds",
            "count": 1,
            "input": "mysticalagriculture:prosperity_seed_base",
            "ingredients": [
                {
                    "item": "ae2:certus_quartz_dust"
                },
                {
                    "item": "mysticalagriculture:tertium_essence"
                },
                {
                    "item": "ae2:certus_quartz_dust"
                },
                {
                    "item": "mysticalagriculture:tertium_essence"
                },
                {
                    "item": "ae2:certus_quartz_dust"
                },
                {
                    "item": "mysticalagriculture:tertium_essence"
                },
                {
                    "item": "ae2:certus_quartz_dust"
                },
                {
                    "item": "mysticalagriculture:tertium_essence"
                }
            ],
            "id": "certus_quartz_seeds"
        },
        {
            "output": "mysticalagriculture:end_seeds",
            "input": "mysticalagriculture:prosperity_seed_base",
            "count": 1,
            "ingredients": [
                {
                    "item": "minecraft:end_stone"
                },
                {
                    "item": "mysticalagriculture:imperium_essence"
                },
                {
                    "item": "minecraft:end_stone"
                },
                {
                    "item": "mysticalagriculture:imperium_essence"
                },
                {
                    "item": "minecraft:end_stone"
                },
                {
                    "item": "mysticalagriculture:imperium_essence"
                },
                {
                    "item": "minecraft:end_stone"
                },
                {
                    "item": "mysticalagriculture:imperium_essence"
                }
            ],
            "id": "end_seeds"
        }
    ]

    recipes.forEach(recipe =>{
        event.custom({
            "type": "mysticalagriculture:infusion",
            "input": {"item": recipe.input},
            "ingredients": recipe.ingredients,
            "result": {"id": recipe.output, "count": recipe.count}
        }).id(prefix + recipe.id)
    })
})