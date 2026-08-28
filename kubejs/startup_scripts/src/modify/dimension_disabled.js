var $Player_ = Java.loadClass("net.minecraft.world.entity.player.Player")
var $EntityTravelToDimensionEvent = Java.loadClass("net.neoforged.neoforge.event.entity.EntityTravelToDimensionEvent")

NativeEvents.onEvent("net.neoforged.neoforge.event.entity.EntityTravelToDimensionEvent",/**@param {$EntityTravelToDimensionEvent_} event */event =>{
    const dim = event.getDimension().location()
    const entity = event.getEntity()
    const disable_dim = ["minecraft:the_nether"]
    if(disable_dim.indexOf(dim) !== -1){
        if(entity instanceof $Player_){
            /**
             * @type {$Player_}
             */
            const player = entity
            const canEnter = player.isCreative() || player.isSpectator()
            if(canEnter){
                return
            }else{
                player.tell(Text.translate("dimension.cdp2.disabled").red())
            }
        }
        event.setCanceled(true)
    }
})