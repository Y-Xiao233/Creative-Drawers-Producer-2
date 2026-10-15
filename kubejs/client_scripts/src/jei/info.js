ItemEvents.modifyTooltips(event =>{
    const evolved_items = [
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
        "block_better_gold",
        "block_plaslitherite",
        "alloy_singular",
        "dense_control_circuit"
    ]
    evolved_items.forEach(item => event.add("kubejs:" + item,[Text.translatable("tip.cdp2.assets_from_evolved_mekanism")]))

    event.add('kubejs:cosmic_origin_topological_lattice',[Text.translatable("tip.cdp2.unknown_portal")])

    event.add('ae2:wireless_receiver',[Text.translatable("tip.cdp2.can_go_to_other_dimensions_tip")])
})