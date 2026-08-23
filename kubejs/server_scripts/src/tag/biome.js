ServerEvents.tags("worldgen/biome",event =>{
    event.add("cdp2:naquadah_ore","minecraft:end_highlands")
    event.add("cdp2:mineral_extractor/disabled",/^minecraft:(?!end_highlands$).*$/)
})