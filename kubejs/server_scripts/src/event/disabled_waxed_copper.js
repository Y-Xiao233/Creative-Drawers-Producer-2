BlockEvents.rightClicked('minecraft:copper_block', event =>{
    const {item} = event
    if(item.id == 'minecraft:honeycomb'){
        event.cancel()
    }
})