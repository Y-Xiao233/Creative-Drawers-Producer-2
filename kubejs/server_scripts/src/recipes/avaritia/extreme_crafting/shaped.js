ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/avaritia/extreme_crafting/shaped/"

    const recipes = [
        {
            "output": "avaritia:enhancement_core",
            "pattern": [
                "   PPP   ",
                " NPCCCPN ",
                " PABBBAP ",
                "PCBBXBBCP",
                "PCBXEXBCP",
                "PCBBXBBCP",
                " PABBBAP ",
                " NPCCCPN ",
                "   PPP   "
            ],
            "key": {
                "A": "avaritia:crystal_matrix",
                "B": 'mekanism_extras:enriched_spectrum',
                "C": "avaritia:crystal_matrix_ingot",
                "E": 'ae2lt:pigmee_fumo',
                "N": "avaritia:neutron_ingot",
                "P": "avaritia:neutron_pile",
                "X":  "avaritia:infinity_catalyst",
            },
            "id": "enhancement_core"
        },
    ]

    recipes.forEach(recipe =>{
        let output = parseItem(recipe.output)
        let keys = createJsonObject()
        for (const [key, value] of Object.entries(recipe.key)) {
            addToJsonObject(keys,key,createDefaultJsonObject("item",value))
        }
        event.custom({
            "type": "avaritia:shaped_table",
            "key": keys,
            "pattern": recipe.pattern,
            "result": {
                "count": output.getCount(),
                "id": output.getId()
            },
            "tier": 4
        }).id(prefix + recipe.id)
    })
})