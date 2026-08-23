ServerEvents.tags("item",event =>{
    event.add("cdp2:creative_drawer/1",['cdp2:apple_creative_drawer','cdp2:void_matter_creative_drawer'])

    event.add("cdp2:soil/inferium",['mysticalagriculture:inferium_farmland','minecraft:dirt'])
    event.add("cdp2:soil/prudentium",['mysticalagriculture:prudentium_farmland'])
    event.add("cdp2:soil/tertium",['mysticalagriculture:tertium_farmland'])
    event.add("cdp2:soil/imperium",['mysticalagriculture:imperium_farmland'])
    event.add("cdp2:soil/supremium",['mysticalagriculture:supremium_farmland'])
    event.add("cdp2:soil/insanium",['mysticalagradditions:insanium_farmland'])
    event.add("cdp2:soil/absolute",['cdp2:absolute_farmland'])
    event.add("cdp2:soil/supreme",['cdp2:supreme_farmland'])
    event.add("cdp2:soil/cosmic",['cdp2:cosmic_farmland'])
    event.add("cdp2:soil/infinite",['cdp2:infinite_farmland'])

    event.add("cdp2:soil/inferium","#cdp2:soil/prudentium")
    event.add("cdp2:soil/prudentium","#cdp2:soil/tertium")
    event.add("cdp2:soil/tertium","#cdp2:soil/imperium")
    event.add("cdp2:soil/imperium","#cdp2:soil/supremium")
    event.add("cdp2:soil/supremium","#cdp2:soil/insanium")
    event.add("cdp2:soil/insanium","#cdp2:soil/absolute")
    event.add("cdp2:soil/absolute","#cdp2:soil/supreme")
    event.add("cdp2:soil/supreme","#cdp2:soil/cosmic")
    event.add("cdp2:soil/cosmic","#cdp2:soil/infinite")

    event.add("ae2cs:crystal_seeds",["ae2cs:iron_seed",'ae2cs:amethyst_seed'])
    event.add("ae2cs:pure_crystal",['minecraft:amethyst_shard','ae2cs:purified_fluix_crystal'])
})


ServerEvents.tags("item",event =>{
    event.removeAllTagsFrom(['ae2cs:purified_fluix_crystal','occultism:otherrock'])

    event.remove('ae2:inscriber_presses','ae2:silicon_press')

    event.remove('c:ores_in_ground/stone',['forbidden_arcanus:stella_arcanum'])

    event.add("ae2cs:pure_crystal",['ae2cs:purified_fluix_crystal'])
})