StartupEvents.registry("fluid",(event) => {

    const fluids = [
        {
            id:"molten_lumin",
            color:0xFFFF00
        },
        {
            id:"molten_firmament",
            color:0xFFFFFF
        },
        {
            id:"naquadah_uranium_fuel",
            color:0x817D3A
        }
    ]

    fluids.forEach(fluid =>{
        event.create(fluid.id)
            .stillTexture('kubejs:block/liquid_overlayer/still').tint(fluid.color)
            .flowingTexture('kubejs:block/liquid_overlayer/flow').tint(fluid.color)
    })
})