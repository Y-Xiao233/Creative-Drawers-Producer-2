ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/industrialforegoing/dissolution_chamber/"

    const recipes = [
        {
            "output":'24x powah:dielectric_paste',
            "inputs":[
                'minecraft:clay_ball','industrialforegoing:dryrubber','minecraft:clay_ball',
                'minecraft:blaze_powder','minecraft:blaze_powder',
                'industrialforegoing:dryrubber','minecraft:blaze_powder','industrialforegoing:dryrubber'
            ],
            "fluid":Fluid.of("industrialforegoing:latex",200),
            "output_fluid":Fluid.empty,
            "time":100,
            "id":"dielectric_paste"
        },
        {
            "output":'8x minecraft:snowball',
            "inputs":[
                'minecraft:slime_ball','minecraft:slime_ball','minecraft:slime_ball',
                'minecraft:slime_ball','minecraft:slime_ball',
                'minecraft:slime_ball','minecraft:slime_ball','minecraft:slime_ball'
            ],
            "fluid":Fluid.of("minecraft:water",2000),
            "output_fluid":Fluid.empty,
            "time":100,
            "id":"snowball"
        },
        {
            "output":'industrialforegoing:machine_frame_simple',
            "inputs":[
                'powah:charged_snowball','industrialforegoing:machine_frame_pity','powah:charged_snowball',
                'create:brass_ingot','create:brass_ingot',
                'powah:charged_snowball','forbidden_arcanus:sea_prism','powah:charged_snowball'
            ],
            "fluid":Fluid.of("industrialforegoing:latex",200),
            "output_fluid":Fluid.empty,
            "time":100,
            "id":"machine_frame_simple"
        },
        {
            "output":'industrialforegoing:mob_imprisonment_tool',
            "inputs":[
                'industrialforegoing:plastic','industrialforegoing:plastic','industrialforegoing:plastic',
                'industrialforegoing:plastic'
            ],
            "fluid":Fluid.of("justdirethings:xp_fluid_source",1000),
            "output_fluid":Fluid.empty,
            "time":100,
            "id":"mob_imprisonment_tool"
        },
        {
            "output":'minecraft:iron_ingot',
            "inputs":[
                'naturesaura:infused_iron'
            ],
            "fluid":Fluid.of("minecraft:water",8000),
            "output_fluid":Fluid.of("justdirethings:xp_fluid_source",16000),
            "time":400,
            "id":"xp_fluid_source"
        },
        {
            "output":'8x minecraft:glass_bottle',
            "inputs":[
                'apothic_enchanting:infused_breath','apothic_enchanting:infused_breath','apothic_enchanting:infused_breath',
                'apothic_enchanting:infused_breath','apothic_enchanting:infused_breath',
                'apothic_enchanting:infused_breath','apothic_enchanting:infused_breath','apothic_enchanting:infused_breath'
            ],
            "fluid":Fluid.of("ifeu:liquid_sculk_matter",1000),
            "output_fluid":Fluid.of("ifeu:liquid_dragon_breath",500),
            "time":100,
            "id":"liquid_dragon_breath"
        },
        {
            "output":'industrialforegoing:machine_frame_supreme',
            "inputs":[
                'avaritia:blaze_cube','industrialforegoing:machine_frame_advanced','avaritia:blaze_cube',
                'mysticalagradditions:insanium_ingot','mysticalagradditions:insanium_ingot',
                'industrialforegoing:diamond_gear','justdynathings:creative_goo','industrialforegoing:diamond_gear'
            ],
            "fluid":Fluid.of("ifeu:liquid_dragon_breath",100),
            "output_fluid":Fluid.empty,
            "time":100,
            "id":"machine_frame_supreme"
        },
        {
            "output":'4x ifeu:empty_nether_star',
            "inputs":[
                'minecraft:netherite_ingot','industrialforegoing:plastic','minecraft:netherite_ingot',
                'industrialforegoing:plastic','industrialforegoing:plastic',
                'minecraft:netherite_ingot','industrialforegoing:plastic','minecraft:netherite_ingot'
            ],
            "fluid":Fluid.of("ifeu:liquid_malic_acid",400),
            "output_fluid":Fluid.empty,
            "time":100,
            "id":"empty_nether_star_1"
        },
        {
            "output":'36x ifeu:empty_nether_star',
            "inputs":[
                'minecraft:netherite_block','mekanismadditions:white_plastic','minecraft:netherite_block',
                'mekanismadditions:white_plastic','mekanismadditions:white_plastic',
                'minecraft:netherite_block','mekanismadditions:white_plastic','minecraft:netherite_block'
            ],
            "fluid":Fluid.of("ifeu:liquid_malic_acid",3600),
            "output_fluid":Fluid.empty,
            "time":100,
            "id":"empty_nether_star_2"
        }
    ]

    recipes.forEach(recipe =>{
        if(recipe.output_fluid !== Fluid.empty){
            event.recipes.industrialforegoing.dissolution_chamber(recipe.output,recipe.inputs,recipe.fluid,recipe.time,recipe.output_fluid).id(prefix + recipe.id)
        }else{
            event.recipes.industrialforegoing.dissolution_chamber(recipe.output,recipe.inputs,recipe.fluid,recipe.time).id(prefix + recipe.id)
        }
    })
})