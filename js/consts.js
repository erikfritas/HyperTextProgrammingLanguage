const reserved = {
    '==': (item1, item2) =>{
        return item1 == item2
    },
    '===': (item1, item2) =>{
        return item1 === item2
    },
    '!=': (item1, item2) =>{
        return item1 != item2
    },
    '!==': (item1, item2) =>{
        return item1 !== item2
    },
    '>': (item1, item2) =>{
        return item1 > item2
    },
    '>=': (item1, item2) =>{
        return item1 >= item2
    },
    '<': (item1, item2) =>{
        return item1 < item2
    },
    '<=': (item1, item2) =>{
        return item1 <= item2
    },
    '&&': (item1, item2) =>{
        return item1 && item2
    },
    '||': (item1, item2) =>{
        return item1 || item2
    }
}

const TAGS = {
    'if': (params) => {
        let cond_text = params[0]

        let inc = false

        // check which condition will be used
        Object.keys(reserved).forEach((r, i) => {
            inc = cond_text.includes(r)
            if (inc) {
                cond = cond_text.split(r)
                cond = reserved[r](cond[0].replace(" ", ''), cond[1].replace(" ", ''))
            }
        })

        if (cond_text == 'true' || cond)
            return params[1]
        else if (typeof params[2] !== 'undefined')
            return params[2]
        else return ''
    }
}