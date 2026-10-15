ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/malum/runeworking/"

    const recipes = [
        {
            "output":'8x malum:infernal_spirit',
            "input":'malum:runic_sapball',
            "spirit":'8x malum:arcane_spirit',
            "id":"infernal_spirit"
        },
        {
            "output":'8x kubejs:alloy_hypercharged',
            "input":'8x mekanism_extras:alloy_spectrum',
            "spirit":'8x malum:earthen_spirit',
            "id":"alloy_hypercharged"
        }
    ]

    recipes.forEach(recipe =>{
        let output = parseItem(recipe.output)
        let input = parseItem(recipe.input)
        let spirit = parseItem(recipe.spirit)
        event.custom({
            "type": "malum:runeworking",
            "input": {
                "count": input.getCount(),
                "item": input.getId()
            },
            "result": {
                "count": output.getCount(),
                "id": output.getId()
            },
            "secondaryInput": {
                "count": spirit.getCount(),
                "item": spirit.getId()
            },
            "soundType": "malum:runic_workbench_shapes_tainted_rune"
        }).id(prefix + recipe.id)
    })
})