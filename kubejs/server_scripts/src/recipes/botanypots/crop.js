ServerEvents.recipes(event =>{
    const $BuiltInRegisties = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")
    const $MysticalSeedsItem = Java.loadClass("com.blakebr0.mysticalagriculture.item.MysticalSeedsItem")
    const prefix = "cdp2:recipes/botanypots/crop/"


    event.recipes.botanypots.crop('ars_nouveau:purple_archwood_sapling','#minecraft:dirt',DisplayState.basic('ars_nouveau:purple_archwood_sapling'),[
        DropItem.item('4x ars_nouveau:purple_archwood_log',0.8),
        DropItem.item('ars_nouveau:purple_archwood_sapling',0.1)
    ],20 * 90).id(prefix + "purple_archwood_log")

    event.recipes.botanypots.crop('forbidden_arcanus:growing_edelwood',"#cdp2:soil/imperium",DisplayState.basic('forbidden_arcanus:growing_edelwood'),[
        DropItem.item('forbidden_arcanus:edelwood_log',0.6),
        DropItem.item('forbidden_arcanus:edelwood_stick',0.4),
        DropItem.item('forbidden_arcanus:growing_edelwood',0.1)
    ],20 * 90).id(prefix + "growing_edelwood")

    event.recipes.botanypots.crop('forbidden_arcanus:aurum_sapling',"#cdp2:soil/insanium",DisplayState.basic('forbidden_arcanus:aurum_sapling'),[
        DropItem.item('forbidden_arcanus:aurum_sapling',0.1),
        DropItem.item('forbidden_arcanus:aurum_log',0.2),
        DropItem.item('forbidden_arcanus:aurum_leaves',0.8)
    ],20 * 180).id(prefix + "aurum_sapling")

    $BuiltInRegisties.ITEM.forEach(item =>{
        if(item instanceof $MysticalSeedsItem){
            let crop = item.getCrop()
            let tier = crop.getTier().getValue()
            let location = $BuiltInRegisties.ITEM.getKey(item)
            event.recipes.botanypots.crop(crop.getSeedsItem(),getIngredinetByTier(tier),DisplayState.aging(crop.getCropBlock()),[
                DropItem.item(crop.getSeedsItem(),0.1),
                DropItem.item(crop.getEssenceItem(),1),
                DropItem.item('mysticalagriculture:fertilized_essence',0.1)
            ],(tier * 30 + 30) * 20).id(prefix + location.getNamespace() + "/" + location.getPath())
        }
    })

    function getIngredinetByTier(tier){
        if(tier == 1){
            return "#cdp2:soil/inferium"
        }else if(tier == 2){
            return "#cdp2:soil/prudentium"
        }else if(tier == 3){
            return "#cdp2:soil/tertium"
        }else if(tier == 4){
            return "#cdp2:soil/imperium"
        }else if(tier == 5){
            return "#cdp2:soil/supremium"
        }else if(tier == 6){
            return "#cdp2:soil/insanium"
        }else if(tier == 7){
            return "#cdp2:soil/absolute"
        }else if(tier == 8){
            return "#cdp2:soil/supreme"
        }else if(tier == 9){
            return "#cdp2:soil/cosmic"
        }else if(tier == 10){
            return "#cdp2:soil/infinite"
        }
    }
})