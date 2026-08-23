ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/cdp2/chemical_from_cell_info/"

    const recipes = [
        [
            'appmek:chemical_storage_cell_1k[ae2:storage_cell_inv=[{"#":640L,"#t":"appmek:chemical",id:"kubejs:crystal"}]]',
            "64x kubejs:crystal",
            "crystal"
        ]
    ]

    recipes.forEach(([cell,chemical,id]) =>{
        event.recipes.cdp2.chemical_from_cell_info(cell,chemical).id(prefix + id)
    })
})