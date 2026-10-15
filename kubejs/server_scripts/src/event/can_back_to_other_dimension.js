ItemEvents.rightClicked('ae2:wireless_receiver',event =>{
    const {player} = event
    let data = player.getData($CDPAttachmentTypes.PLAYER_EXTRA_DATA)
    if(player.isShiftKeyDown() && data.contains("can_go_to_other_dimensions")){
        data.putBoolean("can_go_to_other_dimensions",true)
        player.tell(Text.translatable("tip.cdp2.can_go_to_other_dimensions"))
    }
})