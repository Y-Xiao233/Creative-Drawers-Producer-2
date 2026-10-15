ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/malum/void_favor/"

    const recipes = [
        {
            "output":'malum:refined_soulstone',
            "input":'malum:raw_soulstone',
            "id":"refined_soulstone"
        },
        {
            "output":'kubejs:arcanus_processor',
            "input":'malum:runic_sapball',
            "id":"arcanus_processor"
        }
    ]

    recipes.forEach(recipe =>{
        let output = parseItem(recipe.output)
        let input = parseItem(recipe.input)
        event.custom({
            "type": "malum:void_favor",
            "input": {
                "item": input.getId()
            },
            "result": {
                "count": output.getCount(),
                "id": output.getId()
            }
        }).id(prefix + recipe.id)
    })
})