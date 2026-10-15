StartupEvents.registry("block", event =>{
    const simple_blocks = [
        "block_better_gold",
        "block_plaslitherite"
    ]
    simple_blocks.forEach(block => {
        event.create(block).requiresTool(true).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_wooden_tool').hardness(0.4).soundType("amethyst")
    })
})