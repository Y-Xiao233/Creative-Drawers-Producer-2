const occultism_rituals = [
    "brass_ingot",
    "nautilus_shell",
    "wood_stand",
    "animal_spawner",
    "birth_spirit",
    "miner_foliot_unspecialized",
    "storage_stabilizer_tier4"
]

const ars_nouveau_occultism_rituals = [
    ["ritual_eziveus","埃兹维斯灵体驱策","Eziveus' Spectral Compulsion"],
    ["ritual_ophyx","欧菲克斯呼唤","Ophyx' Calling"],
    ["ritual_uphyxes","修菲斯的倒转之塔","Uphyxes Inverted Tower"]
]

const ars_nouveau_naturesaura_rituals = [
    ["animal_spawner","降生祭坛","Animal Spawner"],
    ["nature_altar","自然祭坛","Nature Altar"]
]

const other_rituals = [
    ["assembler_matrix","AE2扩展","ExtendedAE","装配矩阵","Assembler Matrix"],
    ["quantum","高级AE","AdvancedAE","量子计算机","Quantum"],
    ["firmament_starship","AE2闪电科技","AE2 Lightning Tech","苍穹星舰","Firmament Starship"],
]

const fluids = [
    ["molten_lumin","熔融流明","Molten Lumin"],
    ["molten_firmament","熔融苍穹","Molten Firmament"],
    ["naquadah_uranium_fuel","液态硅岩铀燃料","Liquid Naquadah Uranium Fuel"]
]

ClientEvents.lang("zh_cn",event =>{
    occultism_rituals.forEach(ritual =>{
        event.add(`ritual.cdp2.occultism/ritual/${ritual}.finished`,"仪式完成")
        event.add(`ritual.cdp2.occultism/ritual/${ritual}.started`,"仪式开始")
    })

    ars_nouveau_occultism_rituals.forEach(([id,zh_cn,en_us]) =>{
        event.add(`item.cdp2.${id}`,zh_cn)
        event.add(`cdp2.ritual_desc.${id}`,`激活以生成§b神秘学§r的§7${zh_cn}§r仪式`)
    })

    ars_nouveau_naturesaura_rituals.forEach(([id,zh_cn,en_us]) =>{
        event.add(`item.cdp2.${id}`,zh_cn)
        event.add(`cdp2.ritual_desc.${id}`,`激活以生成§b自然灵气§r的§7${zh_cn}§r结构`)
    })

    other_rituals.forEach(([id,mod_zh,mod_en,zh_cn,en_us]) =>{
        event.add(`item.cdp2.${id}`,zh_cn)
        event.add(`cdp2.ritual_desc.${id}`,`激活以生成§b${mod_zh}§r的§7${zh_cn}§r结构`)
    })

    fluids.forEach(([id,zh_cn,en_us]) =>{
        event.add(`fluid.kubejs.${id}`,zh_cn)
        event.add(`fluid_type.kubejs.${id}`,zh_cn)
        event.add(`block.kubejs.${id}`,zh_cn)
        event.add(`item.kubejs.${id}_bucket`,zh_cn + "桶")
    })
})

ClientEvents.lang("en_us",event =>{
    occultism_rituals.forEach(ritual =>{
        event.add(`ritual.cdp2.occultism/ritual/${ritual}.finished`,"Ritual Finished")
        event.add(`ritual.cdp2.occultism/ritual/${ritual}.started`,"Ritual Started")
    })

    ars_nouveau_occultism_rituals.forEach(([id,zh_cn,en_us]) =>{
        event.add(`item.cdp2.${id}`,en_us)
        event.add(`cdp2.ritual_desc.${id}`,`Action to summon the §7${en_us}§r ritual of§b occultism`)
    })


    ars_nouveau_naturesaura_rituals.forEach(([id,zh_cn,en_us]) =>{
        event.add(`item.cdp2.${id}`,en_us)
        event.add(`cdp2.ritual_desc.${id}`,`Action to summon the §7${en_us}§r sturcture of§b nature's aura`)
    })

    other_rituals.forEach(([id,mod_zh,mod_en,zh_cn,en_us]) =>{
        event.add(`item.cdp2.${id}`,en_us)
        event.add(`cdp2.ritual_desc.${id}`,`Action to summon the §7${en_us}§r sturcture of§b ${mod_en}}`)
    })

    fluids.forEach(([id,zh_cn,en_us]) =>{
        event.add(`fluid.kubejs.${id}`,en_us)
        event.add(`fluid_type.kubejs.${id}`,en_us)
        event.add(`block.kubejs.${id}`,en_us)
        event.add(`item.kubejs.${id}_bucket`,en_us + " Bucket")
    })
})