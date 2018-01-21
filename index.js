const timeFormat = (time) => {

    let date = new Date()
    let y,m,d
    y = date.getFullYear()
    m = date.getMonth()
    d = date.getDay()
    return y+"-"+m+"-"+d
}

module.export = {
    timeFormat
}