ItemEvents.rightClicked("powah:charged_snowball", event =>{
    const {player, hand} = event
    player.tell(Text.translatable("tip.cdp2.charged_snowball"))
    event.cancel()
})