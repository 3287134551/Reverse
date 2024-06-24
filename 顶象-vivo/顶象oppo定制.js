
//底图还原   这里只针对oppo官网定制
function t(i, a) {
    if (i.includes)
        return i.includes(a);
    for (var t = 0, r = i.length; t < r; t++)
        if (i[t] === a)
            return !0;
    return !1
}

function M(i) {
    for (var a = [], e = 0; e < i.length; e++) {
        var n = i["charCodeAt"](e);
        if (32 === e)
            break;
        for (; t(a, n % 32); )
            n++;
        a.push(n % 32)
    }
    return a
}

function get_img(o) {

return M(o);

}

