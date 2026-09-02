const $LightningKey = Java.loadClass("com.moakiee.ae2lt.me.key.LightningKey")

StartupEvents.registry("item", event =>{
    event.create("infinity_essence","meinfinitycell:infinities_cell").setName(Text.translatable("infinities_cell.kubejs.essence")).setKeys(KeyList.create().adds(key =>{
        key.add(AEKeyHelper.fluid("packaged_faa:fluid_aureal"))
        key.add(AEKeyHelper.fluid("packaged_faa:fluid_blood"))
        key.add(AEKeyHelper.fluid("packaged_faa:fluid_souls"))
    }))

    event.create("infinity_lava_cell","meinfinitycell:infinity_cell").fluidType("minecraft:lava")

    event.create("infinity_lightning_cell","meinfinitycell:infinities_cell").setName(Text.translatable("infinities_cell.kubejs.lightning")).setKeys(KeyList.create().adds(key =>{
        key.add(AEKeyHelper.of($LightningKey.HIGH_VOLTAGE))
        key.add(AEKeyHelper.of($LightningKey.EXTREME_HIGH_VOLTAGE))
    }))

    event.create("infinity_time_fluid_cell","meinfinitycell:infinity_cell").fluidType("justdirethings:time_fluid_source")
})