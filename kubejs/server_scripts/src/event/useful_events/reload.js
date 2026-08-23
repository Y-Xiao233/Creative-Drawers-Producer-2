ItemEvents.rightClicked(event =>{
    const {player} = event

    //空手则直接返回
    if(player.offHandItem == 'minecraft:air') return;

    //判断玩家按下了shift键,主手为空气,副手为钻石,并且玩家是创造/旁观者
    if(((player.spectator)||(player.creative))&&(player.offHandItem == 'minecraft:diamond')&&(player.mainHandItem == 'minecraft:air')&&(player.shiftKeyDown)){
        //提示开始重载并运行命令
        player.tell("重新加载中!")
        player.runCommandSilent('reload')
    }
})