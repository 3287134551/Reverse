window = global;
h = function (a) {
    if (a.length < 2) {
        var b = a.charCodeAt(0);
        return 128 > b ? a : 2048 > b ? g(192 | b >>> 6) + g(128 | 63 & b) : g(224 | b >>> 12 & 15) + g(128 | b >>> 6 & 63) + g(128 | 63 & b)
    }
    var b = 65536 + 1024 * (a.charCodeAt(0) - 55296) + (a.charCodeAt(1) - 56320);
    return g(240 | b >>> 18 & 7) + g(128 | b >>> 12 & 63) + g(128 | b >>> 6 & 63) + g(128 | 63 & b)
}
i = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g
function j(a) {
    return a.replace(i, h)
}
function l(a) {
    return window.btoa(a)
}

function m(a) {
    return l(j(a))
}

function n(a, b) {
    return b ? m(String(a)).replace(/[+\/]/g, function (a) {
        return "+" == a ? "-" : "_"
    }).replace(/=/g, "") : m(String(a))
}


console.log(n("A112233", undefined))