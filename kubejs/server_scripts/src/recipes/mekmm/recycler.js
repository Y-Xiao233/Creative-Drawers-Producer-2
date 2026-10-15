ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/mekmm/recycler/"

    const recipes = [
        {
            "output":'mekmm:scrap',
            "input":'forbidden_arcanus:aurum_leaves',
            "chance":0.8,
            "id":"from_aurum_leaves"
        },
        {
            "output":'64x mekmm:scrap',
            "input":'malum:twisted_rock',
            "chance":1,
            "id":"from_twisted_rock"
        }
    ]

    recipes.forEach(recipe =>{
        let output = parseItem(recipe.output)
        let input = parseItem(recipe.input)

        event.custom({
            "type": "mekmm:recycler",
            "input": {
                "count": input.getCount(),
                "item": input.getId()
            },
            "chance": recipe.chance,
            "output": {
                "count": output.getCount(),
                "id": output.getId()
            }
        }).id(prefix + recipe.id)
    })
})