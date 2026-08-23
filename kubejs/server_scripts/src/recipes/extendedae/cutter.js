ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/extendedae/cutter/"

    const recipes = [
        {
            "input":'forbidden_arcanus:deorum_block',
            "output":'kubejs:printed_arcanus_processor',
            "count":9,
            "id":"printed_arcanus_processor"
        }
    ]

    recipes.forEach(recipe =>[
        event.custom({
            "type": "extendedae:circuit_cutter",
            "input": {
                "ingredient": {
                "item": recipe.input
                }
            },
            "output": {
                "count": recipe.count,
                "id": recipe.output
            }
        }).id(prefix + recipe.id)
    ])
})