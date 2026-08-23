ItemEvents.rightClicked(event =>{
    const {item,player} = event

    //空手则直接返回
    if(player.mainHandItem == 'minecraft:air') return;

    //获取物品id
    const ItemID = item.id

    //判断玩家按下了shift键,副手为钻石,并且玩家是创造/旁观者
    if((player.offHandItem == 'minecraft:diamond')&&(player.shiftKeyDown)&&((player.spectator)||(player.creative))){
        //玩家主手是否为获取到的物品id
        if(player.mainHandItem == ItemID){
            //运行命令
            player.runCommandSilent('kubejs hand')
        }
    }
})