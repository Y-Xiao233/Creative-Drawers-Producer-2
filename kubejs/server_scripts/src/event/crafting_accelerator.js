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

BlockEvents.rightClicked('ae2:crafting_accelerator', event =>{
    const {player, hand, item, entity, block} = event
    const isPlayerHandEmpty = false
    const isFakePlayer = false
    if(entity.isFakePlayer()){
        isPlayerHandEmpty = entity.getMainHandItem().isEmpty() || entity.getOffHandItem().isEmpty()
        isFakePlayer = true
    }else{
        isPlayerHandEmpty = player.getMainHandItem().isEmpty() || player.getOffHandItem().isEmpty()
    }

    if(!isPlayerHandEmpty){
        if(!isFakePlayer){
            $ItemHandlerHelper.giveItemToPlayer(player,Item.of('kubejs:arcanus_processor'))
        }
        block.set('ae2:crafting_unit')
        event.cancel()
    }
})