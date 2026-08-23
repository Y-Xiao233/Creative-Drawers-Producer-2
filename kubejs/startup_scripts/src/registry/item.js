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
        "cosmic_origin_topological_lattice"
    ]
    simple_items.forEach(item => event.create(item))

    event.create("enchanted_time_crystal").glow(true)
})