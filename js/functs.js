function call_tag(name, params){
    return TAGS[name](params)
}

function parse_logic(context){
    // do something with data
    $('if').each((i, v)=>{
        $(v).html(call_tag('if', [$(v).attr('c'), $(v).html()]))
    })
}

function set_content(content) {
    $.ajax({
        method: "post",
        url: "./pages/"+content+".html",
        beforeSend: ()=> $('#content').html('loading...'),
        data: {param: "value"},
        success: function(data) {
            $('#content').html(data)
            parse_logic('#content')
        }
    })
}