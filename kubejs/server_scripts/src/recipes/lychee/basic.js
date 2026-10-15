ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/lychee/basic/"
    let post = PostBuilder.create()
    let contextual = ContextualBuilder.create()
    const { lychee } = event.recipes

    lychee.block_interacting(
        [
            SizedIngredientWrapper.of('cdp2:void_matter')
        ],
        BlockPredicateWrapper.block("cdp2:void_block"),
        post.consumeAndPlace("minecraft:water")
    ).id(prefix + "water")

    lychee.item_inside(
        [
            SizedIngredientWrapper.of("cdp2:void_block")
        ],
        BlockPredicateWrapper.block("minecraft:water"),
        [
            post.dropItem("cdp2:frame"),
            post.dropItem("minecraft:black_dye")
        ]
    ).id(prefix + "frame")

    lychee.item_inside(
        [
            SizedIngredientWrapper.of('#malum:soulwood_logs')
        ],
        BlockPredicateWrapper.block("cdp2:liquid_unknown"),
        [
            post.dropItem('minecraft:sand')
        ]
    ).id(prefix + "sand")

    lychee.item_inside(
        [
            SizedIngredientWrapper.of('malum:twisted_rock')
        ],
        BlockPredicateWrapper.block("cdp2:liquid_unknown"),
        [
            post.withChance(0.2).dropItem('mekanism_extras:infinite_crushing_factory'),
            post.withChance(0.2).dropItem('mekanism_extras:infinite_oxidizing_factory'),
            post.withChance(0.2).dropItem('mekanism_extras:infinite_smelting_factory'),
            post.withChance(0.2).dropItem('mekmm:large_gas_burning_generator')
        ]
    ).id(prefix + "twisted_rock")

    lychee.block_interacting(
        [
            SizedIngredientWrapper.of('minecraft:glass_bottle')
        ],
        BlockPredicateWrapper.block('malum:exposed_soulwood_log'),
        post.consumeAndDropItem('malum:cursed_sap')
    ).id(prefix + "cursed_sap")

    lychee.block_interacting(
        [
            SizedIngredientWrapper.of('minecraft:glass_bottle')
        ],
        BlockPredicateWrapper.block('malum:exposed_runewood_log'),
        post.consumeAndDropItem('malum:runic_sap')
    ).id(prefix + "runic_sap")
})