ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/ae2cs/circuit_ether/"

    const recipes = [
        {
            "type": "ae2cs:circuit_etcher_recipe_serializer",
            "result": {
                "count": 9,
                "id": "kubejs:arcanus_processor"
            },
            "input_a": {
                "item": "forbidden_arcanus:deorum_block",
                "count": 1
            },
            "input_b": {
                "item": "forbidden_arcanus:mundabitur_dust",
                "count": 9
            },
            "input_c": {
                "item": "ae2cs:silicon_block",
                "count": 1
            },
            "energy_cost": 57600.0,
            "id": "arcanus_processor"
        }
    ]

    recipes.forEach(recipe =>{
        event.custom(recipe).id(prefix + recipe.id)
    })
})