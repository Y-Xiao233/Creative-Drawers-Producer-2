ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/naturesaura/altaar/"

    const recipes = [
        {
            "output":'naturesaura:tainted_gold',
            "input":'justdirethings:blazegold_ingot',
            "aura":100,
            "time":20,
            "id":"tainted_gold"
        },
        {
            "output":'naturesaura:tainted_gold_block',
            "input":'justdirethings:blazegold_block',
            "aura":900,
            "time":180,
            "id":"tainted_gold_block"
        },
        {
            "output":'naturesaura:infused_stone',
            "input":'occultism:otherstone',
            "aura":100,
            "time":20,
            "id":"infused_stone"
        },
        {
            "output":'kubejs:nature_prism',
            "input":'kubejs:blank_prism',
            "aura":10000,
            "time":160,
            "id":"nature_prism"
        },
        {
            "output":'minecraft:ghast_tear',
            "input":'minecraft:soul_soil',
            "aura":90000,
            "time":160,
            "id":"ghast_tear"
        }
    ]

    recipes.forEach(recipe =>{
        if(recipe.catalyst == undefined){
            event.recipes.naturesaura.altar(recipe.output,recipe.input,recipe.aura,recipe.time).id(prefix + recipe.id)
        }else{
            event.recipes.naturesaura.altar(recipe.output,recipe.input,recipe.aura,recipe.time,recipe.catalyst).id(prefix + recipe.id)
        }
    })
})