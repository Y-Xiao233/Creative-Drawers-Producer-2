// 彻底禁止元素工艺(ElementalCraft)生成 source（water/fire/earth/air source）。
//
// 原理：
// 1) source 方块由 neoforge:add_features biome modifier 加到 #elementalcraft:has_sources/* 生物群系里，
//    清空这些生物群系标签即可让它们不再进入任何群系。
// 2) source_altar 结构(altar/*.nbt)内部也含 source 方块，通过清空 #elementalcraft:has_structure/source_altar
//    生物群系标签来阻止该结构生成。
//
// 主世界 / 下界 / 末地 全部覆盖。

ServerEvents.generateData('last', event => {
  // 所有 has_sources 子标签（对应所有 source_* biome modifier）
  const sourceTags = [
    'all',
    'plain',
    'forest',
    'hill',
    'mountain',
    'jungle',
    'mushroom',
    'icy',
    'dry',
    'wet',
    'ocean',
    'sky',
    'underground',
    'deep_dark',
    'dripstone_cave',
    'lush_cave',
    'end',
    'nether',
    'nether/all',
    'nether/forest',
  ]

  sourceTags.forEach(name => {
    event.json('elementalcraft:tags/worldgen/biome/has_sources/' + name, {
      replace: true,
      values: [],
    })
  })

  // 连含 source 的 source_altar 结构一起禁止
  event.json('elementalcraft:tags/worldgen/biome/has_structure/source_altar', {
    replace: true,
    values: [],
  })
})
