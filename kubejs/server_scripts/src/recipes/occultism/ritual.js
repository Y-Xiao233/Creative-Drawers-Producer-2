ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/occultism/ritual/"

    /**
        occultism:craft_afrit	塞维拉永囚咒
        occultism:craft_djinni	斯特里格高等束缚
        occultism:craft_foliot	埃兹维斯灵体强迫
        occultism:craft_marid	修菲斯倒转之塔
        occultism:possess_afrit	阿巴拉斯强令召唤术
        occultism:possess_djinni	伊哈根奴役术
        occultism:possess_foliot	海德林诱惑术
        occultism:summon_afrit	阿巴拉斯召唤术
        occultism:summon_djinni	欧菲克斯的召唤
        occultism:summon_foliot	阿维亚之环
        occultism:summon_marid	法特玛极效引诱
        occultism:summon_wild_afrit	阿巴拉斯开环召唤术
        occultism:summon_wild_greater_spirit	奥索林的无约束召唤
    */
    const recipes = [
        {
            "output":"4x create:brass_ingot",
            "inputs":[
                'minecraft:copper_ingot',
                'create:andesite_alloy'
            ],
            "active":'forbidden_arcanus:mundabitur_dust',
            "pentacleId":"occultism:craft_foliot",
            "duration":2,
            "id":"brass_ingot"
        },
        {
            "output":'16x minecraft:nautilus_shell',
            "inputs":[
                'minecraft:prismarine_bricks',
                'minecraft:sea_lantern',
                'minecraft:prismarine_bricks',
                'minecraft:sea_lantern',
                'minecraft:water_bucket'
            ],
            "active":'minecraft:dark_prismarine',
            "pentacleId":"occultism:craft_foliot",
            "duration":2,
            "id":"nautilus_shell"
        },
        {
            "output":'8x naturesaura:wood_stand',
            "inputs":[
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf'
            ],
            "active":'industrialforegoing:machine_frame_pity',
            "pentacleId":"occultism:craft_foliot",
            "duration":2,
            "id":"wood_stand"
        },
        {
            "output":'cdp2:animal_spawner',
            "inputs":[
                'naturesaura:token_joy',
                'forbidden_arcanus:sea_prism',
                'minecraft:iron_bars',
                'minecraft:iron_bars',
                'allthecompressed:hay_block_1x',
                'allthecompressed:hay_block_1x',
                'create:brass_ingot',
                'create:brass_ingot',
                'create:brass_ingot',
                'create:brass_ingot',
                'minecraft:echo_shard',
                'minecraft:echo_shard'
            ],
            "active":'industrialforegoing:machine_frame_simple',
            "pentacleId":"occultism:summon_djinni",
            "duration":2,
            "id":"animal_spawner"
        },
        {
            "output":'8x naturesaura:birth_spirit',
            "inputs":[
                'naturesaura:token_joy',
                'naturesaura:token_joy',
                'naturesaura:token_joy',
                'naturesaura:token_joy',
                'naturesaura:token_joy',
                'naturesaura:token_joy',
                'naturesaura:token_joy',
                'naturesaura:token_joy'
            ],
            "active":'forbidden_arcanus:soul',
            "pentacleId":"occultism:summon_djinni",
            "duration":2,
            "id":"birth_spirit"
        },
        {
            "output":'occultism:miner_foliot_unspecialized',
            "inputs":[
                'occultism:iesnium_pickaxe',
                'occultism:magic_lamp_empty',
                'createmoremachines:beyond_alloy',
                'mekmm:scrap'
            ],
            "active":'occultism:book_of_binding_bound_foliot',
            "pentacleId":"occultism:craft_foliot",
            "duration":2,
            "id":"miner_foliot_unspecialized"
        },
        {
            "output":'occultism:storage_stabilizer_tier4',
            "inputs":[
                'occultism:iesnium_block',
                'ifeu:dragon_star',
                'occultism:spirit_attuned_crystal',
                'forbidden_arcanus:eternal_stella',
                'minecraft:beacon',
                'allthecompressed:gold_block_2x',
                'createmoremachines:beyond_alloy',
                'occultism:silver_block'
            ],
            "active":'occultism:storage_stabilizer_tier3',
            "pentacleId":"occultism:craft_marid",
            "duration":2,
            "id":"storage_stabilizer_tier4"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.occultism.ritual(recipe.output,recipe.inputs,recipe.active,recipe.pentacleId).duration(recipe.duration).id(prefix + recipe.id)
    })
})
