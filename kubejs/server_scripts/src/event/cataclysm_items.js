// 灾变(Cataclysm) Boss 激活 / 封印之门所需物品
// 由 CDP2 的 CDPModifyEvents.cataclysmItem 驱动(server 事件)，改完执行 /reload 即可生效
// 每个 key 同时管"实体/祭坛/门的物品"和"对应 Boss 重生笼的物品"
CDPModifyEvents.cataclysmItem(event => {

    // 下界合金巨兽(Netherite Monstrosity)：右键唤醒 + 其 Boss 重生笼
    event.setItem('cataclysm:netherite_monstrosity', 'minecraft:diamond')

    // 先驱者(The Harbinger)：右键唤醒 + 其 Boss 重生笼
    event.setItem('cataclysm:the_harbinger', 'kubejs:alloy_subatomic')

    // 远古遗魂(Ancient Remnant)：右键唤醒 + 其 Boss 重生笼
    event.setItem('cataclysm:ancient_remnant', 'minecraft:diamond')

    // 炎魔(Ignis)：烈焰祭坛 + 其 Boss 重生笼
    event.setItem('cataclysm:ignis', 'kubejs:dao_ze_origin_topological_lattice')

    // 封印之门(Door of Seal)
    event.setItem('cataclysm:door_of_seal', 'minecraft:diamond')

})
