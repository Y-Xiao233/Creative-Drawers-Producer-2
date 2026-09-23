// =====================================================================
//  Malum 精魂掉落 - JEI 展示数据（客户端资源：assets/cdp2/spirit_data/entity）
// ---------------------------------------------------------------------
//  注意：SPIRIT_DROPS 必须与 run/kubejs/server_scripts/spirit_drops.js 里的一致。
//  客户端资源在游戏启动时生成，改完需要重启客户端生效。
// =====================================================================
const SPIRIT_DROPS = {
  'cataclysm:ignis':                   { primary: 'malum:infernal', spirits: [['malum:infernal', 3], ['malum:earthen', 1]] },
  'cataclysm:ignited_berserker':       { primary: 'malum:infernal', spirits: [['malum:infernal', 1]] },
  'cataclysm:ignited_revenant':        { primary: 'malum:infernal', spirits: [['malum:infernal', 1]] },
  'cataclysm:netherite_monstrosity':   { primary: 'malum:earthen',  spirits: [['malum:earthen', 4], ['malum:infernal', 2]] },
  'cataclysm:netherite_ministrosity':  { primary: 'malum:earthen',  spirits: [['malum:earthen', 1]] },
  'cataclysm:the_harbinger':           { primary: 'malum:eldritch', spirits: [['malum:eldritch', 4], ['malum:wicked', 2], ['malum:aerial', 1]] },
  'cataclysm:ender_guardian':          { primary: 'malum:umbral',   spirits: [['malum:umbral', 3], ['malum:eldritch', 2], ['malum:aerial', 1]] },
  'cataclysm:ender_golem':             { primary: 'malum:eldritch', spirits: [['malum:eldritch', 2], ['malum:umbral', 1]] },
  'cataclysm:the_watcher':             { primary: 'malum:umbral',   spirits: [['malum:umbral', 2], ['malum:wicked', 1]] },
  'cataclysm:the_prowler':             { primary: 'malum:wicked',   spirits: [['malum:wicked', 2], ['malum:umbral', 1]] },
  'cataclysm:the_leviathan':           { primary: 'malum:aqueous',  spirits: [['malum:aqueous', 5], ['malum:eldritch', 2], ['malum:sacred', 1]] },
  'cataclysm:the_baby_leviathan':      { primary: 'malum:aqueous',  spirits: [['malum:aqueous', 2]] },
  'cataclysm:scylla':                  { primary: 'malum:aqueous',  spirits: [['malum:aqueous', 3], ['malum:aerial', 1], ['malum:eldritch', 1]] },
  'cataclysm:ancient_remnant':         { primary: 'malum:earthen',  spirits: [['malum:earthen', 3], ['malum:arcane', 2]] },
  'cataclysm:modern_remnant':          { primary: 'malum:earthen',  spirits: [['malum:earthen', 1], ['malum:arcane', 1]] },
  'cataclysm:maledictus':              { primary: 'malum:wicked',   spirits: [['malum:wicked', 2], ['malum:arcane', 1]] },
  'cataclysm:amethyst_crab':           { primary: 'malum:arcane',   spirits: [['malum:arcane', 2], ['malum:aqueous', 1]] },
  'cataclysm:coral_golem':             { primary: 'malum:aqueous',  spirits: [['malum:aqueous', 2], ['malum:earthen', 1]] },
  'cataclysm:coralssus':               { primary: 'malum:aqueous',  spirits: [['malum:aqueous', 2]] },
  'cataclysm:deepling_warlock':        { primary: 'malum:arcane',   spirits: [['malum:arcane', 1], ['malum:aqueous', 1]] },
  'cataclysm:deepling_priest':         { primary: 'malum:sacred',   spirits: [['malum:sacred', 1], ['malum:aqueous', 1]] },
  'cataclysm:cindaria':                { primary: 'malum:sacred',   spirits: [['malum:sacred', 2], ['malum:arcane', 1]] },
  'cataclysm:hippocamtus':             { primary: 'malum:aerial',   spirits: [['malum:aerial', 1], ['malum:sacred', 1]] },
  'cataclysm:kobolediator':            { primary: 'malum:earthen',  spirits: [['malum:earthen', 2]] },
  'cataclysm:koboleton':               { primary: 'malum:earthen',  spirits: [['malum:earthen', 1]] },
  'cataclysm:wadjet':                  { primary: 'malum:earthen',  spirits: [['malum:earthen', 1], ['malum:arcane', 1]] },
  'cataclysm:clawdian':                { primary: 'malum:wicked',   spirits: [['malum:wicked', 1]] },
  'cataclysm:aptrgangr':               { primary: 'malum:umbral',   spirits: [['malum:umbral', 1], ['malum:wicked', 1]] },
  'cataclysm:draugr':                  { primary: 'malum:umbral',   spirits: [['malum:umbral', 1]] },
  'cataclysm:royal_draugr':            { primary: 'malum:umbral',   spirits: [['malum:umbral', 1]] },
  'cataclysm:elite_draugr':            { primary: 'malum:umbral',   spirits: [['malum:umbral', 1]] },
  'cataclysm:endermaptera':            { primary: 'malum:eldritch', spirits: [['malum:eldritch', 1]] },
  'cataclysm:lionfish':                { primary: 'malum:aqueous',  spirits: [['malum:aqueous', 1]] },
  'cataclysm:symbiocto':               { primary: 'malum:aqueous',  spirits: [['malum:aqueous', 1]] },
  'cataclysm:urchinkin':               { primary: 'malum:aqueous',  spirits: [['malum:aqueous', 1]] },
  'cataclysm:drowned_host':            { primary: 'malum:aqueous',  spirits: [['malum:aqueous', 1]] }
}

ClientEvents.generateAssets('last', event => {
  // 1) 自定义掉落（JEI 展示）
  Object.keys(SPIRIT_DROPS).forEach(entityId => {
    const data = SPIRIT_DROPS[entityId]
    const path = entityId.split(':')[1]
    event.json('cdp2:spirit_data/entity/cataclysm/' + path, {
      registry_name: entityId,
      primary_type: data.primary,
      spirits: data.spirits.map(entry => {
        return { spirit: entry[0], count: entry[1] }
      })
    })
  })

  // 2) 其余实体标记 no_spirits，让 JEI 不再显示默认/fallback
  const BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
  BuiltInRegistries.ENTITY_TYPE.keySet().forEach(key => {
    const id = key.toString()
    if (SPIRIT_DROPS[id]) return
    event.json('cdp2:spirit_data/entity/cdp2_no_spirits/' + key.getNamespace() + '/' + key.getPath(), {
      registry_name: id,
      no_spirits: true
    })
  })
})
