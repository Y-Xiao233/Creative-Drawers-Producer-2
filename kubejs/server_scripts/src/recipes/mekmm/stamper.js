ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/mekmm/stamper/"

    const recipes = [
        {
            "output":'kubejs:printed_arcanus_processor',
            "input":'forbidden_arcanus:deorum_ingot',
            "mold":'kubejs:arcanus_print_press',
            "id":"printed_arcanus_processor"
            
        }
    ]
    

    recipes.forEach(recipe =>{
        let input = parseItem(recipe.input)
        let output = parseItem(recipe.output)
        event.custom({
            "type": "mekmm:stamper",
            "input": {
                "count": input.getCount(),
                "item": input.getId()
            },
            "mold": {
                "count": 1,
                "item": recipe.mold
            },
            "output": {
                "count": output.getCount(),
                "id": output.getId()
            }
        }).id(prefix + recipe.id)
    })
        
})