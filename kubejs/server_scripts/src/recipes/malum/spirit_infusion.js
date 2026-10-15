ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/malum/spirit_infusion/"

    const recipes = [
        {
            "output":'malum:runic_workbench',
            "main_input":'malum:soulwood_log',
            "inputs":[
                'malum:block_of_cthonic_gold',
                'malum:strange_crystal'
            ],
            "spirits":[
                'malum:arcane_spirit'
            ],
            "id":"runic_workbench"
        },
        {
            "output":'ae2lt:rainbow_pigmee_fumo',
            "main_input":'ae2lt:pigmee_fumo',
            "inputs":[
                '4x mekanism_extras:alloy_spectrum'
            ],
            "spirits":[
                '8x malum:arcane_spirit',
                '8x malum:infernal_spirit'
            ],
            "id":"rainbow_pigmee_fumo"
        },
        {
            "output":'4x malum:soul_stained_steel_ingot',
            "main_input":'4x malum:refined_soulstone',
            "inputs":[
                '8x malum:soulwood_leaves'
            ],
            "spirits":[
                '8x malum:arcane_spirit'
            ],
            "id":"soul_stained_steel_ingot"
        },
        {
            "output":'ae2:crafting_terminal',
            "main_input":'minecraft:crafting_table',
            "inputs":[
                'kubejs:arcanus_processor'
            ],
            "spirits":[
                'malum:infernal_spirit',
                'malum:arcane_spirit',
                'malum:earthen_spirit'
            ],
            "id":"crafting_terminal"
        },
        {
            "output":'ae2ltpp:malum_spirit_infusion_packaged_core',
            "main_input":'ae2ltpp:basic_packaged_core',
            "inputs":[
                'kubejs:alloy_hypercharged'
            ],
            "spirits":[
                'malum:infernal_spirit',
                'malum:arcane_spirit',
                'malum:earthen_spirit'
            ],
            "id":"malum_spirit_infusion_packaged_core"
        }
    ]

    recipes.forEach(recipe =>{
        let output = parseItem(recipe.output)
        let main_input = parseItem(recipe.main_input)
        let inputs = createJsonArray()
        recipe.inputs.forEach(input =>{
            const temp_item = parseItem(input)
            let temp = createDefaultJsonObject("item",temp_item.getId())
            addToJsonObject(temp,"count",temp_item.getCount())
            addToJsonArray(inputs,temp)
        })
        let spirits = createJsonArray()
        recipe.spirits.forEach(spirit =>{
            const temp_item = parseItem(spirit)
            const id = temp_item.getId()
            const type = id.substring(0,id.indexOf("_spirit"))
            let temp = createDefaultJsonObject("type",type)
            addToJsonObject(temp,"count",temp_item.getCount())
            addToJsonArray(spirits,temp)
        })
        event.custom({
            "type": "malum:spirit_infusion",
            "extraInputs": inputs,
            "input": {
                "count": main_input.getCount(),
                "item": main_input.getId()
            },
            "result": {
                "count": output.getCount(),
                "id": output.getId()
            },
            "spirits": spirits
        }).id(prefix + recipe.id)
    })
})