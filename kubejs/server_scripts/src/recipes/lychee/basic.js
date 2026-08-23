ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/lychee/basic/"
    let post = PostBuilder.create()
    let contextual = ContextualBuilder.create()

    event.recipes.lychee.block_interacting(
        [
            SizedIngredientWrapper.of('cdp2:void_matter')
        ],
        BlockPredicateWrapper.block("cdp2:void_block"),
        post.consumeAndPlace("minecraft:water")
    ).id(prefix + "water")

    event.recipes.lychee.item_inside(
        [
            SizedIngredientWrapper.of("cdp2:void_block")
        ],
        BlockPredicateWrapper.block("minecraft:water"),
        [
            post.dropItem("cdp2:frame"),
            post.dropItem("minecraft:black_dye")
        ]
    ).id(prefix + "frame")
})