const $CDPAttachmentTypes = Java.loadClass("net.yxiao233.cdp2.common.registry.CDPAttachmentTypes")

ItemEvents.rightClicked(event =>{
    const {item, player} = event
    if(item == "kubejs:cosmic_origin_topological_lattice" && player.isCreative() && player.isShiftKeyDown()){
        player.removeData($CDPAttachmentTypes.PLAYER_EXTRA_DATA)
        player.tell("成功清空未知维度相关玩家数据")
    }
    if(item == "kubejs:ultra4_hyperdimensional_topological_lattice" && player.isCreative() && player.isShiftKeyDown()){
        let data = player.getData($CDPAttachmentTypes.PLAYER_EXTRA_DATA)
        let arg0 = data.getIntArray("unknown_dimension_respawnpoint")
        let arg1 = data.contains("once_enter_unknown_portal")
        let arg2 = data.contains("can_go_to_other_dimensions")
        player.tell(arg0.toString())
        player.tell(`${arg1}, ${arg2}`)
    }
})