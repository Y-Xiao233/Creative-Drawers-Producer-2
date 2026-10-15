const $LightningKey = Java.loadClass("com.moakiee.ae2lt.me.key.LightningKey")
const $ForbiddenEssenceKey = Java.loadClass("net.yxiao233.cdp2.common.integration.ae2.key.ForbiddenEssenceKey")

StartupEvents.registry("item", event =>{
    event.create("infinity_essence","meinfinitycell:infinities_cell").setName(Text.translatable("infinities_cell.kubejs.essence")).setKeys(KeyList.create().adds(key =>{
        key.add(AEKeyHelper.of($ForbiddenEssenceKey.BLOOD))
        key.add(AEKeyHelper.of($ForbiddenEssenceKey.SOULS))
        key.add(AEKeyHelper.of($ForbiddenEssenceKey.EXPERIENCE))
        key.add(AEKeyHelper.of($ForbiddenEssenceKey.AUREAL))
    }))

    event.create("infinity_lava_cell","meinfinitycell:infinity_cell").fluidType("minecraft:lava")

    event.create("infinity_lightning_cell","meinfinitycell:infinities_cell").setName(Text.translatable("infinities_cell.kubejs.lightning")).setKeys(KeyList.create().adds(key =>{
        key.add(AEKeyHelper.of($LightningKey.HIGH_VOLTAGE))
        key.add(AEKeyHelper.of($LightningKey.EXTREME_HIGH_VOLTAGE))
    }))

    event.create("infinity_time_fluid_cell","meinfinitycell:infinity_cell").fluidType("justdirethings:time_fluid_source")

    event.create("infinity_antimatter_cell","meinfinitycell:infinity_cell").type(MekanismKeyHelper.of("mekanism:antimatter"))

    event.create("infinity_bucket_cell","meinfinitycell:infinity_cell").itemType("minecraft:bucket")
})