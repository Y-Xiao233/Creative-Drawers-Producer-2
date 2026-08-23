ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/mekanism/nucleosynthesizing/"
    
    const recipes = [
        {
            output:'16x mekanism_extras:naquadah_reactor_casing',
            input:'64x mekanism_extras:block_naquadah',
            chemical:"1x mekanism:antimatter",
            duration:1200,
            id:"naquadah_reactor_casing"
        },
        {
            output:'2x ae2lt:hyperdimensional_topological_lattice',
            input:'ae2lt:hyperdimensional_topological_lattice',
            chemical:"10000x mekmm:uu_matter",
            duration:1200,
            id:"hyperdimensional_topological_lattice"
        },
        {
            output:'mekmm:uu_matter',
            input:'mekmm:empty_crystal',
            chemical:"10000x mekanism:antimatter",
            duration:1200,
            id:"uu_matter"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.nucleosynthesizing(recipe.output,recipe.input,recipe.chemical,recipe.duration).id(prefix + recipe.id)
    })
})