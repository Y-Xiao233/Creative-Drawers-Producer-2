ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/forbidden_arcanus/upgrade_ritual/"

    const recipes = [
        {
            "upgrade_tier":2,
            "input": "mekanismadditions:white_plastic",
            "inputs": [
                "forbidden_arcanus:mundabitur_dust",
                "forbidden_arcanus:arcane_crystal_dust",
                "forbidden_arcanus:mundabitur_dust",
                "forbidden_arcanus:arcane_crystal_dust",
                "forbidden_arcanus:mundabitur_dust",
                "forbidden_arcanus:arcane_crystal_dust",
                "forbidden_arcanus:mundabitur_dust",
                "forbidden_arcanus:arcane_crystal_dust"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": 1.0,
            "id": "hephaestus_forge_tier_2"
        },
        {
            "upgrade_tier":3,
            "input": "mysticalagriculture:soulstone_cobble",
            "inputs": [
                "minecraft:netherite_ingot",
                "minecraft:echo_shard",
                "minecraft:netherite_ingot",
                "minecraft:echo_shard",
                "minecraft:netherite_ingot",
                "minecraft:echo_shard",
                "minecraft:netherite_ingot",
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
            "id": "hephaestus_forge_tier_3"
        },
        {
            "upgrade_tier":4,
            "input": "advanced_ae:quantum_alloy_block",
            "inputs": [
                "justdirethings:time_crystal",
                "justdirethings:celestigem",
                "justdirethings:eclipsealloy_ingot",
                "apothic_enchanting:infused_breath",
                "justdirethings:time_crystal",
                "justdirethings:celestigem",
                "justdirethings:eclipsealloy_ingot",
                "apothic_enchanting:infused_breath"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": 3,
            "id": "hephaestus_forge_tier_4"
        },
        {
            "upgrade_tier":5,
            "input": "naturesaura:depth_ingot_block",
            "inputs": [
                "kubejs:colorful_star",
                "cdp2:cosmic_essence",
                "kubejs:colorful_star",
                "cdp2:cosmic_essence",
                "kubejs:colorful_star",
                "cdp2:cosmic_essence",
                "kubejs:colorful_star",
                "cdp2:cosmic_essence"
            ],
            "duration": 2.0,
            "essence": [
                0.0,
                0.0,
                0.0,
                0.0
            ],
            "tier": "4",
            "id": "hephaestus_forge_tier_5"
        }
    ]
    
    recipes.forEach(recipe =>{
        const i = []
        recipe.inputs.forEach(input =>{
            i.push(new $RitualInput(input,1))
        })

        event.recipes.forbidden_arcanus.ritual(RitualResults.ofUpgradeTierResult(recipe.upgrade_tier),recipe.input)
            .inputs(i)
            .duration(recipe.duration)
            .essences(recipe.essence[0],recipe.essence[1],recipe.essence[2],recipe.essence[3])
            .forgeTier(recipe.tier)
            .magicCircles("forbidden_arcanus:upgrade_tier")
            .id(prefix + recipe.id)
    })
})