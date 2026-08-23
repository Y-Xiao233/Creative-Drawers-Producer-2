ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/extendedae/assembler/"

    const recipes = [
        {
            "inputs": [
                "kubejs:printed_arcanus_processor",
                "ae2:printed_silicon",
                "forbidden_arcanus:mundabitur_dust"
            ],
            "input_count": [
                4,
                4,
                4
            ],
            "output": "kubejs:arcanus_processor",
            "output_count": 4,
            "id": "arcanus_processor"
        }
    ]

    recipes.forEach(recipe =>{
        const s = []
        let index = 0
        recipe.inputs.forEach(input =>{
            s.push({
                "amount":recipe.input_count[index],
                "ingredient":{
                    "item":input
                }
            })
        })
        event.custom({
            "type": "extendedae:crystal_assembler",
            "input_items": s,
            "output": {
                "count": recipe.output_count,
                "id": recipe.output
            }
        }).id(prefix + recipe.id)
    })
})