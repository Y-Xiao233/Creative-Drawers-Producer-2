ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/justdirethings/goospread/"

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
    }).id(prefix + "arcane_crystal_block")

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
    }).id(prefix + "rune_block")


    event.custom({
        "type": "justdirethings:goospread",
        "craftingDuration": 2400,
        "id": 'justdirethings:raw_ferricore_ore',
        "input": {
            "Name": 'enderio:conductive_alloy_block'
        },
        "output": {
            "Name": 'justdirethings:raw_ferricore_ore'
        },
        "tierRequirement": 1
    }).id(prefix + "raw_ferricore_ore")

    event.custom({
        "type": "justdirethings:goospread",
        "craftingDuration": 2400,
        "id": 'justdirethings:raw_eclipsealloy_ore',
        "input": {
            "Name": 'enderio:energetic_alloy_block'
        },
        "output": {
            "Name": 'justdirethings:raw_eclipsealloy_ore'
        },
        "tierRequirement": 4
    }).id(prefix + "raw_eclipsealloy_ore")

    event.custom({
        "type": "justdirethings:goospread",
        "craftingDuration": 2400,
        "id": 'neoecoae:aluminum_block',
        "input": {
            "Name": 'avaritia:blaze_cube_block'
        },
        "output": {
            "Name": 'neoecoae:aluminum_block'
        },
        "tierRequirement": 4
    }).id(prefix + "aluminum_block")
})