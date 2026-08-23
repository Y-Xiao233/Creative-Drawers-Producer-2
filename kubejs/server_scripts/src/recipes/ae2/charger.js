ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/ae2/charger/"
    const recipes = [
        {
            "input":'ae2:certus_quartz_dust',
            "output":'forbidden_arcanus:arcane_crystal_dust',
            "id":"arcane_crystal_dust",
        }
    ]

    recipes.forEach(recipe =>{
        event.custom({
            "type": "ae2:charger",
            "ingredient":{"item": recipe.input},
            "result": {"count": 1,"id": recipe.output}
        }).id(prefix + recipe.id)
    })
})