ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/botanypots/soil/"

    const recipes = [
        {
            soil:'mysticalagriculture:inferium_farmland',
            grow:0.15,
            id:"inferium_farmland"
        },
        {
            soil:'mysticalagriculture:prudentium_farmland',
            grow:0.2,
            id:"prudentium_farmland"
        },
        {
            soil:'mysticalagriculture:tertium_farmland',
            grow:0.25,
            id:"tertium_farmland"
        },
        {
            soil:'mysticalagriculture:imperium_farmland',
            grow:0.3,
            id:"imperium_farmland"
        },
        {
            soil:'mysticalagriculture:supremium_farmland',
            grow:0.35,
            id:"supremium_farmland"
        },
        {
            soil:'mysticalagradditions:insanium_farmland',
            grow:0.4,
            id:"insanium_farmland"
        },
        {
            soil:'cdp2:absolute_farmland',
            grow:0.5,
            yield:0.5,
            id:"absolute_farmland"
        },
        {
            soil:'cdp2:supreme_farmland',
            grow:0.6,
            yield:0.6,
            id:"supreme_farmland"
        },
        {
            soil:'cdp2:cosmic_farmland',
            grow:0.7,
            yield:0.7,
            id:"cosmic_farmland"
        },
        {
            soil:'cdp2:infinite_farmland',
            grow:0.8,
            yield:0.8,
            id:"infinite_farmland"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.botanypots.soil(recipe.soil,DisplayState.basic(recipe.soil),recipe.grow,recipe.yield == undefined ? 0 : recipe.yield).id(prefix + recipe.id)
    })
})