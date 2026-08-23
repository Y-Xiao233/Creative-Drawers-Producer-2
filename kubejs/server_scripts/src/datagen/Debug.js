/**
    注册开发所用指令
 */

//默认输出路径
let default_output_path = "./kubejs/debug_output.json"
//水晶种子模型路径
let crystal_seed_models_path = "./kubejs/assets/ae2cs/models/item/"
//创造抽屉模型路径
let creative_drawer_models_path = "./kubejs/assets/cdp2/"
const $StringArgumentType = Java.loadClass("com.mojang.brigadier.arguments.StringArgumentType")
const tests = [
    {
        name:"shapedRecipe",
        func:(ctx) => generateShapedRecipe(ctx,default_output_path)
    },
    {
        name:"precisionShapedRecipe",
        func:(ctx) => generatePrecisionShapedRecipe(ctx,default_output_path)
    },
    {
        name:"precisionShapelessRecipe",
        func:(ctx) => generatePrecisionShapelessRecipe(ctx,default_output_path)
    },
    {
        name:"fluidShapedRecipe",
        func:(ctx) => generateFluidShapedRecipe(ctx,default_output_path)
    },
    {
        name:"energizingRecipe",
        func:(ctx) => generateEnergizingRecipe(ctx,default_output_path)
    },
    {
        name:"shapelessRecipe",
        func:(ctx) => generateShapelessRecipe(ctx,default_output_path)
    },
    {
        name:"infusionRecipe",
        func:(ctx) => generateInfusionRecipe(ctx,default_output_path)
    },
    {
        name:"aggregatorRecipe",
        func:(ctx) => generateAggregatorRecipe(ctx,default_output_path)
    },
    {
        name:"crystalSeedModels",
        func:(ctx, context) => generateCrystalSeedModels(ctx,crystal_seed_models_path,context),
        special:true
    },
    {
        name:"forbiddenRitualRecipe",
        func:(ctx, context) => generateForbiddenRitualRecipe(ctx,default_output_path,context),
        special:true
    },
    {
        name:"inscriberRecipe",
        func:(ctx) => generateInscriberRecipe(ctx,default_output_path)
    },
    {
        name:"assemblerRecipe",
        func:(ctx) => generateAssemblerRecipe(ctx,default_output_path)
    },
    {
        name:"circuitEtherRecipe",
        func:(ctx) => generateCircuitEtherRecipe(ctx,default_output_path)
    },
    {
        name:"overloadProcessingRecipe",
        func:(ctx) => generateOverloadProcessingRecipe(ctx,default_output_path)
    },
    {
        name:"creativeDrawerModels",
        func:(ctx, context) => generateCreativeDrawerModels(ctx,creative_drawer_models_path,context),
        special:true
    },
]

ServerEvents.commandRegistry(event =>{
    const {commands} = event
    const debug = commands.literal("kjs_debug")
    const test = debug.then(commands.argument("func",$StringArgumentType.string())
        .suggests((ctx, builder) =>{
            tests.forEach(suggest =>{
                builder.suggest(suggest.name)
            })
            return builder.buildFuture()
        })
        .executes(ctx =>{
            const func = $StringArgumentType.getString(ctx,"func")
            const index = find(func)
            if(index !== -1){
                if(special(func)){
                    ctx.source.sendFailure(Text.translate("debug.cdp2.extra_parameter").red())
                    return 0
                }else{
                    tests[index].func(ctx)
                    ctx.source.sendSuccess(Text.translate("debug.cdp2.success").green(),false)
                    return 1
                }
            }else{
                ctx.source.sendFailure(Text.translate("debug.cdp2.not_found").red())
                return 0
            }
        })
        .then(commands.argument("context",$StringArgumentType.string())
            .executes(ctx =>{
                const func = $StringArgumentType.getString(ctx,"func")
                const context = $StringArgumentType.getString(ctx,"context")
                const index = find(func)
                if(index !== -1){
                    if(!special(func)){
                        ctx.source.sendFailure(Text.translate("debug.cdp2.no_extra_parameter").red())
                        return 0
                    }else{
                        tests[index].func(ctx,context)
                        ctx.source.sendSuccess(Text.translate("debug.cdp2.success").green(),false)
                        return 1
                    }
                }else{
                    ctx.source.sendFailure(Text.translate("debug.cdp2.not_found").red())
                    return 0
                }
            })
        )
    )
    event.register(test)
})

/**
 * 
 * @param {string} name 
 * @returns {number}
 */
function find(name){
    for(let i = 0; i < tests.length; i ++){
        var obj = tests[i]
        if(obj.name == name){
            return i
        }
    }
    return -1
}

/**
 * 
 * @param {string} name
 * @returns {boolean} 
 */
function special(name){
    const func = tests[find(name)]
    if(func.special !== undefined && func.special !== null && func.special){
        return true
    }else{
        return false
    }
}