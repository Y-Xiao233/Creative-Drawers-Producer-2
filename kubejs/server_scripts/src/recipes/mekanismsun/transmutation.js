ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/mekanismsun/transmutation/"

    const recipes = [
        ['cdp2:cozy_home','cdp2:ritual_uphyxes']
    ]

    recipes.forEach(([output,input]) =>{
        let result = parseItem(output)
        let item = parseItem(input)
        event.custom({
            "type": "mekanismsun:transmutation",
            "input": {
                "count": item.getCount(),
                "item": item.getId()
            },
            "output": {
                "count": result.getCount(),
                "id": result.getId()
            }
        }).id(prefix + output.substring(output.indexOf(":") + 1))
    })
})