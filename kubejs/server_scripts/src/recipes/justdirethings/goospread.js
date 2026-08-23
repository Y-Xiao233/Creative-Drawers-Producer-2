ServerEvents.recipes(event =>{
    event.custom({
        "type": "justdirethings:goospread",
        "craftingDuration": 2400,
        "id": "forbidden_arcanus:arcane_crystal_block",
        "input": {
            "Name": 'ae2:quartz_block'
        },
        "output": {
            "Name": 'forbidden_arcanus:arcane_crystal_block'
        },
        "tierRequirement": 4
    })

    event.custom({
        "type": "justdirethings:goospread",
        "craftingDuration": 2400,
        "id": 'forbidden_arcanus:rune_block',
        "input": {
            "Name": 'naturesaura:infused_iron_block'
        },
        "output": {
            "Name": 'forbidden_arcanus:rune_block'
        },
        "tierRequirement": 4
    })
})