ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/mekmm/stamper/"

    const recipes = [
        {
            "output":'kubejs:arcanus_processor',
            "input1":'kubejs:printed_arcanus_processor',
            "input2":'forbidden_arcanus:mundabitur_dust',
            "input3":'ae2:printed_silicon',
            "id":"arcanus_processor"
            
        }
    ]
    

    recipes.forEach(recipe =>{
        let input1 = parseItem(recipe.input1)
        let input2 = parseItem(recipe.input2)
        let input3 = parseItem(recipe.input3)
        let output = parseItem(recipe.output)
        event.custom({
            "type": "mekmm:pressing",
            "primary_input": {
                "count": input1.getCount(),
                "item": input1.getId()
            },
            "secondary_input": {
                "count": input2.getCount(),
                "item": input2.getId()
            },
            "tertiary_input": {
                "count": input3.getCount(),
                "item": input3.getId()
            },
            "output": {
                "count": output.getCount(),
                "id": output.getId()
            }
            }).id(prefix + recipe.id)
    })
        
})