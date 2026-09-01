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

    event.custom({
        "type": "advanced_ae:reaction",
        "input_energy": 200000,
        "input_fluid": {
            "amount": 500,
            "ingredient": {
            "fluid": "minecraft:water"
            }
        },
        "input_items": [
            {
                "amount":32,
                "ingredient": {
                    "item": 'naturesaura:infused_iron'
                }
            },
            {
                "amount":32,
                "ingredient": {
                    "item": 'ae2:fluix_crystal'
                }
            }
        ],
        "output": {
            "#": 64,
            "#t": "ae2:i",
            "id": 'extendedae:entro_crystal'
        }
    }).id(prefix + "entro_crystal")
})