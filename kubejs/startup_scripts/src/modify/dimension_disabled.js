var $Player_ = Java.loadClass("net.minecraft.world.entity.player.Player")
var $EntityTravelToDimensionEvent = Java.loadClass("net.neoforged.neoforge.event.entity.EntityTravelToDimensionEvent")
const $CDPAttachmentTypes = Java.loadClass("net.yxiao233.cdp2.common.registry.CDPAttachmentTypes")

NativeEvents.onEvent("net.neoforged.neoforge.event.entity.EntityTravelToDimensionEvent",/**@param {$EntityTravelToDimensionEvent} event */event =>{
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

    if(dim == "cdp2:unknown"){
        let data = entity.getData($CDPAttachmentTypes.PLAYER_EXTRA_DATA)
        if(entity instanceof $Player_ && data != null){
            /**
             * @type {$Player_}
             */
            const player = entity
            const canEnter = player.isCreative() || player.isSpectator()
            if(canEnter){
                return
            }
            const value = data.contains("once_enter_unknown_portal")
            if(!value){
                data.putBoolean("once_enter_unknown_portal",true)
                player.tell(Text.translate("tip.cdp2.clear_inventory"))
                event.setCanceled(true)
                return
            }
            if(!data.contains("need_clear_inveotory")){
                entity.getInventory().clear()
                CuriosApi.getCuriosInventory(entity).get().getEquippedCurios().clear()
                data.putBoolean("need_clear_inveotory",false)
                data.putBoolean("can_go_to_other_dimensions",false)
            }
            return
        }
        event.setCanceled(true)
    }

    if(entity instanceof $Player_ && dim !== "cdp2:unknown"){
        /**
         * @type {$Player_}
         */
        const player = entity
        let data = entity.getData($CDPAttachmentTypes.PLAYER_EXTRA_DATA)
        if(data != null && data.contains("can_go_to_other_dimensions")){
            const value = data.getBoolean("can_go_to_other_dimensions")
            if(!value){
                const canEnter = player.isCreative() || player.isSpectator()
                if(canEnter){
                    return
                }
                player.tell(Text.translate("tip.cdp2.cant_go_to_other_dimensions"))
                event.setCanceled(true)
                return
            }
        }
    }
})