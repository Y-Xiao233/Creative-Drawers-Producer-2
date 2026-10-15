ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/mekanismsun/assemble/"

    const recipes = [
        {
            output:'draconicevolution:wyvern_core',
            input:'draconicevolution:draconium_core',
            extra:'occultism:dragonyst_dust',
            chemical:"1000x mekanismgenerators:fusion_fuel"
        },
        {
            output:'kubejs:ingot_better_gold',
            input:'malum:hallowed_gold_ingot',
            extra:'enderio_evolution:stellar_alloy_ingot',
            chemical:"100x mekanism:spent_nuclear_waste"
        },
        {
            output:'mekanismsun:supernova_control_circuit',
            input:'kubejs:overclocked_control_circuit',
            extra:'4x mekanismsun:supernova_alloy',
            chemical:"1000x mekanismgenerators:fusion_fuel"
        },
        {
            output:'occultism:cruelty_essence',
            input:'occultism:afrit_essence',
            extra:'kubejs:quantum_control_circuit',
            chemical:"1000x mekanismgenerators:fusion_fuel"
        },
        {
            output:'mekanismsun:transmutator',
            input:'mekanismsun:assembler',
            extra:'kubejs:dense_control_circuit',
            chemical:"16000x mekanismsun:helium"
        }
    ]

    recipes.forEach(recipe =>{
        let result = parseItem(recipe.output)
        let main_input = parseItem(recipe.input)
        let extra_input = parseItem(recipe.extra)
        let gas_id = recipe.chemical
        let gas_amount = 1
        if(recipe.chemical.indexOf("x ") !== -1){
            let args = recipe.chemical.split("x ")
            gas_id = args[1].toString()
            gas_amount = Number.parseInt(args[0])
        }
        event.custom({
            "type": "mekanismsun:assemble",
            "main_input": {
                "count": main_input.getCount(),
                "item": main_input.getId()
            },
            "extra_input": {
                "count": extra_input.getCount(),
                "item": extra_input.getId()
            },
            "chemical_input": {
                "amount": gas_amount,
                "chemical": gas_id
            },
            "output": {
                "count": result.getCount(),
                "id": result.getId()
            }
        }).id(prefix + result.id.substring(result.id.indexOf(":") + 1))
    })
})