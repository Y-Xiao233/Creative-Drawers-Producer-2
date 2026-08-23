ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/extendedcrafting/combination/"

    const recipes = [
        {
            "output":'naturesaura:offering_table',
            "core_input":'ars_nouveau:arcane_pedestal',
            "inputs":[
                'ae2lt:firmament_alloy_ingot',
                'ae2lt:matter_warping_matrix_casing',
                'naturesaura:infused_iron',
                'jdte:time_fluid_catalyst',
                'occultism:afrit_essence',
                'naturesaura:tainted_gold',
                'naturesaura:token_joy',
                'naturesaura:birth_spirit'
            ],
            "power":1000000,
            "id":"offering_table"
        },
        {
            "output":'4x naturesaura:depth_ingot',
            "core_input":'kubejs:colorful_star',
            "inputs":[
                'naturesaura:sky_ingot',
                'naturesaura:sky_ingot',
                'naturesaura:sky_ingot',
                'naturesaura:sky_ingot'
            ],
            "power":1000000,
            "id":"depth_ingot"
        },
        {
            "output":'extendedcrafting:ender_crafter',
            "core_input":'ae2lt:matter_warping_matrix_casing',
            "inputs":[
                'minecraft:ender_eye',
                'minecraft:ender_eye',
                'minecraft:ender_eye',
                'forbidden_arcanus:eternal_stella',
                'forbidden_arcanus:eternal_stella',
                'forbidden_arcanus:eternal_stella',
                'forbidden_arcanus:eternal_stella',
                'forbidden_arcanus:eternal_stella'
            ],
            "power":1000000,
            "id":"ender_crafter"
        },
        {
            "output":'extendedcrafting:flux_crafter',
            "core_input":'ae2lt:matter_warping_matrix_casing',
            "inputs":[
                'mekanism_extras:absolute_control_circuit',
                'mekanism_extras:absolute_control_circuit',
                'mekanism_extras:absolute_control_circuit',
                'mekanism_extras:supreme_control_circuit',
                'mekanism_extras:supreme_control_circuit',
                'mekanism_extras:supreme_control_circuit',
                'mekanism_extras:supreme_control_circuit',
                'mekanism_extras:supreme_control_circuit'
            ],
            "power":1000000,
            "id":"flux_crafter"
        },
        {
            "output":'ae2ltpp:ec_combination_packaged_core',
            "core_input":'ae2ltpp:basic_packaged_core',
            "inputs":[
                'packagedauto:package_component',
                'packagedauto:package_component',
                'packagedauto:package_component',
                'packagedauto:package_component',
                'packagedauto:package_component',
                'packagedauto:package_component',
                'packagedauto:package_component',
                'packagedauto:package_component'
            ],
            "power":1000000,
            "id":"ec_combination_packaged_core"
        },
        {
            "output":'16x avaritia:neutron_compressor',
            "core_input":'avaritia:tesseract',
            "inputs":[
                'avaritia:neutron',
                'ae2lt:matter_warping_matrix_casing',
                'naturesaura:sky_ingot_block',
                'ae2lt:dense_topological_lattice'
            ],
            "power":1000000,
            "id":"neutron_compressor"
        },
        {
            "output":'avaritia:infinity_ingot',
            "core_input":'avaritia:infinity_catalyst',
            "inputs":[
                'ars_nouveau:creative_source_jar',
                'create:creative_blaze_cake',
                'create:creative_motor',
                'appliedcreate:creative_stress_cell',
                'ifeu:creative_chance_addon',
                'ae2:creative_energy_cell',
                'mysticalagradditions:creative_essence',
                'createmoremachines:creative_casing'
            ],
            "power":100000000,
            "id":"infinity_ingot"
        },
        {
            "output":'kubejs:cosmic_origin_topological_lattice',
            "core_input":'kubejs:ultra4_hyperdimensional_topological_lattice',
            "inputs":[
                'ae2lt:basic_topological_lattice',
                'ae2lt:dense_topological_lattice',
                'ae2lt:entangled_topological_lattice',
                'ae2lt:hyperdimensional_topological_lattice',
                'mekanism_extras:alloy_spectrum',
                'mekanism_extras:alloy_shining',
                'mekanism_extras:alloy_thermonuclear',
                'mekanism_extras:alloy_radiance',
                'mekanism:alloy_atomic',
                'mekanism:alloy_reinforced',
                'mekanism:alloy_infused',
                'create:andesite_alloy',
                'createmoremachines:netherite_alloy',
                'createmoremachines:end_alloy',
                'createmoremachines:beyond_alloy'
            ],
            "power":1000000,
            "id":"cosmic_origin_topological_lattice"
        }
    ]

    recipes.forEach(recipe =>{
        let output = parseItem(recipe.output)
        let array = createJsonArray()
        recipe.inputs.forEach(input =>{
            let item = Item.of(input)
            let ingredient = createDefaultJsonObject("item",item.getId())
            addToJsonArray(array,ingredient)
        })
        event.custom({
            "type": "extendedcrafting:combination",
            "power_cost": recipe.power,
            "input": {
                "item": recipe.core_input
            },
            "ingredients": array,
            "result": {
                "id": output.getId(),
                "count":output.getCount()
            }
        }).id(prefix + recipe.id)
    })
})