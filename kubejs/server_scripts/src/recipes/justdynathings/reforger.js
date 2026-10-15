ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/justdynathings/reforger/"

    event.custom({
        "type": "justdynathings:reforger",
        "catalyst": {
            "item": 'ae2lt:dense_topological_lattice'
        },
        "chanceToUse": 95,
        "input": 'minecraft:end_stone',
        "output": 'neoecoae:tungsten_ore'
    }).id(prefix + "tungsten_ore")

    event.custom({
        "type": "justdynathings:reforger",
        "catalyst": {
            "item": 'kubejs:alloy_hypercharged'
        },
        "chanceToUse": 5,
        "input": 'malum:twisted_rock',
        "output": 'draconicevolution:overworld_draconium_ore'
    }).id(prefix + "overworld_draconium_ore")
})