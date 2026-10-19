ItemEvents.modification(event =>{
    const items = [
        'forbidden_arcanus:eternal_stella',
        'ae2lt:pigmee_core'
    ]

    items.forEach(item =>{
        event.modify(item,modifier =>{
            modifier.setMaxStackSize(64)
        })
    })
})