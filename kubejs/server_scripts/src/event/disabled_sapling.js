// BlockEvents.rightClicked(event =>{
//     const {block, item, hand, player} = event
//     if(block.getBlockState()["is(net.minecraft.tags.TagKey)"]('minecraft:dirt') && player.getItemInHand(hand)["is(net.minecraft.tags.TagKey)"]('minecraft:saplings')){
//         player.tell(Text.translatable("tip.cdp2.disabled_sapling").red())
//         event.cancel()
//     }
// })