ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/mekmm/planting/"

    const recipes = [
        {
            item:'minecraft:oak_sapling',
            chemical:"mekmm:nutritional_paste",
            chemical_amount:100,
            output:'minecraft:oak_log',
            main_count:4,
            secondary_output:'minecraft:apple',
            secondary_chance:0.5,
            per_tick_usage:false,
            id:"oak_log"
        },
        {
            item:'mysticalagriculture:spider_seeds',
            chemical:"mekmm:nutritional_paste",
            chemical_amount:100,
            output:'mysticalagriculture:spider_essence',
            per_tick_usage:false,
            id:"spider_essence"
        }
    ]
    

    recipes.forEach(recipe =>{
        const obj = createDefaultJsonObject("type","mekmm:planting")
        const item_in = createDefaultJsonObject("item",recipe.item)
        if(recipe.item_count == undefined || recipe.item_count == null){
            addToJsonObject(item_in,"count",1)
        }else{
            addToJsonObject(item_in,"count",recipe.item_count)
        }
        addToJsonObject(obj,"item_input",item_in)
        const chemical_input = createDefaultJsonObject("chemical",recipe.chemical)
        if(recipe.chemical_amount == undefined || recipe.chemical_amount == null){
            addToJsonObject(chemical_input,"amount",1)
        }else{
            addToJsonObject(chemical_input,"amount",recipe.chemical_amount)
        }
        addToJsonObject(obj,"chemical_input",chemical_input)
        const main_output = createDefaultJsonObject("id",recipe.output)
        if(recipe.main_count == undefined || recipe.main_count == null){
            addToJsonObject(main_output,"count",1)
        }else{
            addToJsonObject(main_output,"count",recipe.main_count)
        }
        addToJsonObject(obj,"main_output",main_output)
        if(recipe.secondary_output == undefined || recipe.secondary_output == null){

        }else{
            const secondary_output = createDefaultJsonObject("id",recipe.secondary_output)
            if(recipe.secondary_count == undefined || recipe.secondary_count == null){
                addToJsonObject(secondary_output,"count",1)
            }else{
                addToJsonObject(secondary,"count",recipe.secondary_count)
            }
            addToJsonObject(obj,"secondary_output",secondary_output)
            if(recipe.secondary_chance !== undefined || recipe.secondary_chance !== null){
                addToJsonObject(obj,"secondary_chance",recipe.secondary_chance)
            }
        }
        if(recipe.per_tick_usage == undefined || recipe.per_tick_usage == null){
            addToJsonObject(obj,"per_tick_usage",true)
        }else{
            addToJsonObject(obj,"per_tick_usage",recipe.per_tick_usage)
        }
        event.custom(obj).id(prefix + recipe.id)
    })
})