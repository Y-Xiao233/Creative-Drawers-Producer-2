ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/ae2lt/lightning_strike/"

    const recipes = [
        {
            "type": "ae2lt:lightning_strike",
            "requires_natural_lightning": false,
            "center_input": 'forbidden_arcanus:quantum_injector',
            "center_output": "ae2lt:flawless_budding_overload_crystal",
            "requirements": [
                { "offset": [-1, 0, -1], "block": "ae2:quartz_block", "consume": true },
                { "offset": [1, 0, -1], "block": "ae2:quartz_block", "consume": true },
                { "offset": [-1, 0, 1], "block": "ae2:quartz_block", "consume": true },
                { "offset": [1, 0, 1], "block": "ae2:quartz_block", "consume": true },
                { "offset": [0, 0, -1], "block": "ae2:fluix_block", "consume": true },
                { "offset": [-1, 0, 0], "block": "ae2:fluix_block", "consume": true },
                { "offset": [1, 0, 0], "block": "ae2:fluix_block", "consume": true },
                { "offset": [0, 0, 1], "block": "ae2:fluix_block", "consume": true }
            ]
        }
    ]

    recipes.forEach(recipe =>{
        event.custom(recipe).id(prefix + recipe.center_output.substring(recipe.center_output.indexOf(":") + 1))
    })
})