ItemEvents.modification(event =>{
    const items = [
        'forbidden_arcanus:eternal_stella'
    ]

    items.forEach(item =>{
        event.modify(item,modifier =>{
            modifier.setMaxStackSize(64)
        })
    })
})