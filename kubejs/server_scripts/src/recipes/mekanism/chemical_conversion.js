ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/mekanism/chemical_conversion/"
    
    const recipes = [
        {
            item:'cdp2:void_matter',
            output:"10x kubejs:void",
            id:"void/from_void_matter"
        },
        {
            item:'cdp2:void_block',
            output:"90x kubejs:void",
            id:"void/from_void_block"
        },
        {
            item:'fluxnetworks:flux_dust',
            output:"10x kubejs:flux",
            id:"void/from_flux_dust"
        },
        {
            item:'fluxnetworks:flux_block',
            output:"90x kubejs:flux",
            id:"void/from_flux_block"
        },
        {
            item:'industrialforegoing:dryrubber',
            output:"80x kubejs:rubber",
            id:"rubber/from_dryrubber"
        },
        {
            item:'mekanismadditions:white_plastic',
            output:"1000x kubejs:rubber",
            id:"rubber/from_white_plastic"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.chemical_conversion(recipe.output,recipe.item).id(prefix + recipe.id)
    })
})