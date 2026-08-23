ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/arsnouveau/imbuement/"

    const recipes = [
        {
            "input":'minecraft:lapis_lazuli',
            "output":'4x minecraft:prismarine_shard',
            "pedestals":'forbidden_arcanus:sea_prism',
            "source":100,
            "id":"prismarine_shard_1"
        },
        {
            "input":'minecraft:lapis_block',
            "output":'36x minecraft:prismarine_shard',
            "pedestals":'forbidden_arcanus:sea_prism',
            "source":900,
            "id":"prismarine_shard_2"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.ars_nouveau.imbuement(recipe.input,recipe.output,recipe.source,recipe.pedestals).id(prefix + recipe.id)
    })
})