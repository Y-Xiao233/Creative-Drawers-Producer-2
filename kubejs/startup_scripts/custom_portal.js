const $CustomPortalBuilder = Java.loadClass('net.kyrptonaught.customportalapi.api.CustomPortalBuilder')

StartupEvents.postInit(event => {
    /**
     * 
     * @param {string} frameBlockId 
     * @param {string} lightItemId 
     * @param {string} dimDestination 
     * @param {string} dimReturn 
     * @param {Object} tintColorObj 
     * @returns 
     */
    function customPortal(frameBlockId, lightItemId, dimDestination, dimReturn, tintColorObj) {
        const builder = $CustomPortalBuilder.beginPortal()
        const { R, G, B } = tintColorObj

        builder["frameBlock(net.minecraft.world.level.block.Block)"](frameBlockId).destDimID(dimDestination).returnDim(dimReturn,false).lightWithItem(lightItemId)
            .onlyLightInOverworld()
            .forcedSize(3,4)
            .tintColor(R, G, B)


        builder.registerPostTPEvent(entity =>{
            let data = entity.getData($CDPAttachmentTypes.PLAYER_EXTRA_DATA)
            data.putIntArray("unknown_dimension_respawnpoint",[entity.getX() + 1,entity.getY(),entity.getZ() + 1])
        })

        builder.registerPortal()
    }
    
    customPortal('malum:block_of_soulstone','kubejs:cosmic_origin_topological_lattice',"cdp2:unknown","minecraft:overworld",{ R: 255, G: 0, B: 255 })
})