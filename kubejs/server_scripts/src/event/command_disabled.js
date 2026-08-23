ServerEvents.command(event =>{
    const text = Text.translate('tip.cdp2.command_disabled').red()

    //获取玩家输入的指令内容
    let command = event.getParseResults().getReader().getString()

    //定义要禁止的命令
    var fly = /fly/
    var channelmode = /ae2 channelmode/
    var time = /time/
    var ftblibrary = /ftblibrary/

    //如果输入的命令正则匹配,则发送消息并取消该事件
    if(fly.exec(command)!=null){
        event.server.tell(text)
        event.cancel()
    }

    if(channelmode.exec(command)!=null){
        event.server.tell(text)
        event.cancel()
    }

    if(time.exec(command)!=null){
        event.server.tell(text)
        event.cancel()
    }

    if(ftblibrary.exec(command)!=null){
        event.server.tell(text)
        event.cancel()
    }
})