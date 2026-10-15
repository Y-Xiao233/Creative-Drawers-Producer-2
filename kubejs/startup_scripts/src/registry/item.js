StartupEvents.registry("item", event =>{
    const simple_items = [
        "blank_prism",
        "arcanus_print_press",
        "arcanus_processor",
        "printed_arcanus_processor",
        "nature_prism",
        "quantum_prism",
        "colorful_star",
        "ultra4_hyperdimensional_topological_lattice",
        "cosmic_origin_topological_lattice",
        "alloy_exoversal",
        "multiversal_control_circuit",
        "alloy_subatomic",
        "quantum_control_circuit",
        "alloy_hypercharged",
        "overclocked_control_circuit",
        "alloy_creative",
        "creative_control_circuit",
        "ingot_better_gold",
        "nugget_better_gold",
        "ingot_plaslitherite",
        "nugget_plaslitherite",
        "dao_ze_origin_topological_lattice",
        "spirit_shard",
        "alloy_singular",
        "dense_control_circuit"
    ]
    simple_items.forEach(item => event.create(item))

    event.create("enchanted_time_crystal").glow(true)
})