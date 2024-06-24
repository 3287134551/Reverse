// crypto-js 模块安装命令：npm i crypto-js --save
const CryptoJS = require('crypto-js')
debugger;
const T = function (e) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
        , t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        , a = t.enc
        , r = void 0 === a ? "Utf8" : a
        , c = t.mode
        , i = void 0 === c ? "ECB" : c
        , o = t.padding
        , u = void 0 === o ? "Pkcs7" : o
        , d = CryptoJS.enc[r].parse(n)
        , l = {
            mode: CryptoJS.mode[i],
            padding: CryptoJS.pad[u]
        }
        , s = CryptoJS.TripleDES.encrypt(e, d, l);
    return s.toString()
}

const F = function (e) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (e && "string" === typeof e) {
        var t = n.text || "0"
            , a = n.length || 24;
        if (e.length < a)
            for (var r = e.length; r < a; r++)
                e += t;
        else
            e = e.substring(0, a);
        return e
    }
}

const K = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return e.replace(/\s+/g, "")
}

const password = encodeURI(T("12132313", F(K("1231323213@163.com"))))
console.log(password)