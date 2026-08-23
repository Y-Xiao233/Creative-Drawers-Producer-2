//为生物添加掉落物
LootJS.lootTables(event =>{
    event.modifyEntityTables('minecraft:fox').clear().createPool(pool =>{
        pool.when(condition =>{
            condition.randomChance(0.8)
        }).addEntry(LootEntry.ofItem('ars_nouveau:air_essence'))
        pool.when(condition =>{
            condition.randomChance(0.8)
        }).addEntry(LootEntry.ofItem('ars_nouveau:manipulation_essence'))
    }).createPool(pool =>{
        pool.when(condition =>{
            condition.randomChance(0.8)
        }).addEntry(LootEntry.ofItem('ars_nouveau:manipulation_essence'))
    })

    event.modifyEntityTables('minecraft:skeleton').clear().createPool(pool =>{
        pool.when(condition =>{
            condition.randomChance(0.8)
        }).addEntry(LootEntry.of("mysticalagriculture:skeleton_essence").setCount([0,8]))
    }).createPool(pool =>{
        pool.when(condition =>{
            condition.randomChance(0.3)
        }).addEntry(LootEntry.ofItem('naturesaura:birth_spirit'))
    })

    event.modifyEntityTables("minecraft:cow").createPool(pool =>{
        pool.addEntry(LootEntry.of(Item.of("naturesaura:aura_bottle",'[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]')).setCount([0,4]))
    })

    event.modifyEntityTables("minecraft:ender_dragon").createPool(pool =>{
        pool.addEntry(LootEntry.of(Item.of("naturesaura:aura_bottle",'[naturesaura:aura_bottle_data={aura_type:"naturesaura:end"}]')).setCount([0,2]))
    }).createPool(pool =>{
        pool.when(condition =>{
            condition.randomChance(0.6)
        }).addEntry(LootEntry.of('apothic_enchanting:infused_breath').setCount([2,8]))
    }).createPool(pool =>{
        pool.when(condition =>{
            condition.randomChance(0.6)
        }).addEntry(LootEntry.of('mysticalagradditions:dragon_egg_chunk').setCount([1,3]))
    }).createPool(pool =>{
        pool.when(condition =>{
            condition.randomChance(0.1)
        }).addEntry(LootEntry.of('minecraft:dragon_egg'))
    })
})


LootJS.lootTables(event =>{
    event.modifyEntityTables('minecraft:wither_skeleton').removeItem('minecraft:wither_skeleton_skull')
    event.modifyEntityTables('occultism:wild_hunt_wither_skeleton').removeItem('minecraft:wither_skeleton_skull')
    event.modifyEntityTables('mekanismadditions:baby_wither_skeleton').removeItem('minecraft:wither_skeleton_skull')
    event.modifyEntityTables("minecraft:warden").removeItem('minecraft:sculk_catalyst')
})

//禁用打凋零掉落下界之星
EntityEvents.drops("minecraft:wither",event =>{
    event.cancel()
})