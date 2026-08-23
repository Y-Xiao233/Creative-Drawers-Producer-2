ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/advancedae/reaction/"

    event.custom({
        "type": "advanced_ae:reaction",
        "input_energy": 20000,
        "input_fluid": {
            "amount": 16000,
            "ingredient": {
            "fluid": "advanced_ae:quantum_infusion_source"
            }
        },
        "input_items": [
            {
                "amount":16,
                "ingredient": {
                    "item": 'justdirethings:time_crystal'
                }
            }
        ],
        "output": {
            "#": 16000,
            "#t": "ae2:f",
            "id": "justdirethings:time_fluid_source"
        }
    }).id(prefix + "time_fluid_source")

    event.custom({
        "type": "advanced_ae:reaction",
        "input_energy": 20000,
        "input_fluid": {
            "amount": 16000,
            "ingredient": {
            "fluid": "minecraft:water"
            }
        },
        "input_items": [
            {
                "amount":16,
                "ingredient": {
                    "item": "advanced_ae:quantum_infused_dust"
                }
            }
        ],
        "output": {
            "#": 16000,
            "#t": "ae2:f",
            "id": "advanced_ae:quantum_infusion_source"
        }
    }).id(prefix + "quantum_infusion_source")

    // recipes.forEach(recipe =>{
    //     const [input_amount, input_id] = recipe.fluid.split('x').map(s => s.trim())
    //     const [output_type, output_amount, output_id] = recipe.output.match(/[^*x]+/g).map(s => s.trim())
    //     let input_item = parseItem(recipe.item)
    //     event.custom({
    //         "type": "advanced_ae:reaction",
    //         "input_energy": recipe.energy,
    //         "input_fluid": {
    //             "amount": input_amount,
    //             "ingredient": {
    //             "fluid": input_id
    //             }
    //         },
    //         "input_items": [
    //             {
    //                 "amount":input_item.getCount(),
    //                 "ingredient": {
    //                     "item": input_item.getId()
    //                 }
    //             }
    //         ],
    //         "output": {
    //             "#": output_amount,
    //             "#t": `ae2:${output_type}`,
    //             "id": output_id
    //         }
    //     }).id(prefix + recipe.id)
    // })
})