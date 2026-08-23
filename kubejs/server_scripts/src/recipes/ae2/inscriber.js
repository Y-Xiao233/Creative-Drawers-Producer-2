ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/ae2/inscriber/"

    //mode(1:"press" or 2:"inscribe") "press" consum the item on top , "inscribe" don't consum the item on top
    const reicpes = [
        {
            "top":'kubejs:arcanus_print_press',
            "middle":'forbidden_arcanus:deorum_ingot',
            "bottom":false,
            "mode":2,
            "output":'kubejs:printed_arcanus_processor',
            "output_amount":1,
            "id":"printed_arcanus_processor"
        },
        {
            "top": "kubejs:printed_arcanus_processor",
            "middle": "forbidden_arcanus:mundabitur_dust",
            "bottom": "ae2:printed_silicon",
            "mode": 1.0,
            "output": "kubejs:arcanus_processor",
            "output_amount": 1,
            "id": "arcanus_processor"
        }
    ]

    reicpes.forEach(recipe =>{
        recipe.mode = (recipe.mode == 1) ? "press" : "inscribe"
        event.custom({
            "type":"ae2:inscriber",
            "ingredients":(recipe.bottom == false)?{"middle":{"item":recipe.middle},"top":{"item":recipe.top}}:{"bottom":{"item":recipe.bottom},"middle":{"item":recipe.middle},"top":{"item":recipe.top}},
            "mode":recipe.mode,
            "result":{"id":recipe.output,"count":recipe.output_amount}
        }).id(prefix + recipe.id)
    })
})