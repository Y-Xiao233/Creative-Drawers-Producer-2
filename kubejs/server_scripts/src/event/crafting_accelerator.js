const $ItemHandlerHelper = Java.loadClass("net.neoforged.neoforge.items.ItemHandlerHelper")

//由于更改了并行处理单元处理单元的配方,所以更改手持其shift右键拆解所得物
ItemEvents.rightClicked('ae2:crafting_accelerator', event =>{
    const {player, hand, item} = event

    if(player.isShiftKeyDown()){
        const count = item.getCount()
        $ItemHandlerHelper.giveItemToPlayer(player,Item.of('ae2:crafting_unit',count))
        $ItemHandlerHelper.giveItemToPlayer(player,Item.of('kubejs:arcanus_processor',count))
        item.setCount(0)
        event.cancel()
    }
})