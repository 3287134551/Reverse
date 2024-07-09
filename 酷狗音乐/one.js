MD5 = function(e) {
    function t(e, t, i) {
        return e & t | ~e & i
    }
    function i(e, t, i) {
        return i & e | ~i & t
    }
    function n(e, t) {
        return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]
    }
    function r(e) {
        for (var t = [], i = 0; i < e.length; i++)
            if (e.charCodeAt(i) <= 127)
                t.push(e.charCodeAt(i));
            else
                for (var n = encodeURIComponent(e.charAt(i)).substr(1).split("%"), r = 0; r < n.length; r++)
                    t.push(parseInt(n[r], 16));
        return t
    }
    function o(e) {
        for (var t = new Array(e.length), i = 0; i < e.length; i++)
            t[i] = e[i];
        return t
    }
    function s(e, t) {
        return 4294967295 & e + t
    }
    var a = null
      , c = null;
    function d(e, t, i, n) {
        var r = y;
        y = v,
        m = s(v = m, (e = s(h, s(e, s(t, i)))) << n & 4294967295 | e >>> 32 - n),
        h = r
    }
    "string" == typeof e ? a = r(e) : e.constructor == Array ? 0 === e.length ? a = e : "string" == typeof e[0] ? a = function(e) {
        for (var t = [], i = 0; i < e.length; i++)
            t = t.concat(r(e[i]));
        return t
    }(e) : "number" == typeof e[0] ? a = e : c = typeof e[0] : "undefined" != typeof ArrayBuffer ? e instanceof ArrayBuffer ? a = o(new Uint8Array(e)) : e instanceof Uint8Array || e instanceof Int8Array ? a = o(e) : e instanceof Uint32Array || e instanceof Int32Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Float32Array || e instanceof Float64Array ? a = o(new Uint8Array(e.buffer)) : c = typeof e : c = typeof e,
    c && alert("MD5 type mismatch, cannot process " + c);
    var e = a.length
      , l = (a.push(128),
    a.length % 64);
    if (56 < l) {
        for (var p = 0; p < 64 - l; p++)
            a.push(0);
        l = a.length % 64
    }
    for (p = 0; p < 56 - l; p++)
        a.push(0);
    a = a.concat(function(e) {
        for (var t = [], i = 0; i < 8; i++)
            t.push(255 & e),
            e >>>= 8;
        return t
    }(8 * e));
    for (var u = 1732584193, _ = 4023233417, f = 2562383102, g = 271733878, h = 0, m = 0, v = 0, y = 0, p = 0; p < a.length / 64; p++) {
        var h = u
          , b = 64 * p;
        d(t(m = _, v = f, y = g), 3614090360, n(a, b), 7),
        d(t(m, v, y), 3905402710, n(a, 4 + b), 12),
        d(t(m, v, y), 606105819, n(a, 8 + b), 17),
        d(t(m, v, y), 3250441966, n(a, 12 + b), 22),
        d(t(m, v, y), 4118548399, n(a, 16 + b), 7),
        d(t(m, v, y), 1200080426, n(a, 20 + b), 12),
        d(t(m, v, y), 2821735955, n(a, 24 + b), 17),
        d(t(m, v, y), 4249261313, n(a, 28 + b), 22),
        d(t(m, v, y), 1770035416, n(a, 32 + b), 7),
        d(t(m, v, y), 2336552879, n(a, 36 + b), 12),
        d(t(m, v, y), 4294925233, n(a, 40 + b), 17),
        d(t(m, v, y), 2304563134, n(a, 44 + b), 22),
        d(t(m, v, y), 1804603682, n(a, 48 + b), 7),
        d(t(m, v, y), 4254626195, n(a, 52 + b), 12),
        d(t(m, v, y), 2792965006, n(a, 56 + b), 17),
        d(t(m, v, y), 1236535329, n(a, 60 + b), 22),
        d(i(m, v, y), 4129170786, n(a, 4 + b), 5),
        d(i(m, v, y), 3225465664, n(a, 24 + b), 9),
        d(i(m, v, y), 643717713, n(a, 44 + b), 14),
        d(i(m, v, y), 3921069994, n(a, b), 20),
        d(i(m, v, y), 3593408605, n(a, 20 + b), 5),
        d(i(m, v, y), 38016083, n(a, 40 + b), 9),
        d(i(m, v, y), 3634488961, n(a, 60 + b), 14),
        d(i(m, v, y), 3889429448, n(a, 16 + b), 20),
        d(i(m, v, y), 568446438, n(a, 36 + b), 5),
        d(i(m, v, y), 3275163606, n(a, 56 + b), 9),
        d(i(m, v, y), 4107603335, n(a, 12 + b), 14),
        d(i(m, v, y), 1163531501, n(a, 32 + b), 20),
        d(i(m, v, y), 2850285829, n(a, 52 + b), 5),
        d(i(m, v, y), 4243563512, n(a, 8 + b), 9),
        d(i(m, v, y), 1735328473, n(a, 28 + b), 14),
        d(i(m, v, y), 2368359562, n(a, 48 + b), 20),
        d(m ^ v ^ y, 4294588738, n(a, 20 + b), 4),
        d(m ^ v ^ y, 2272392833, n(a, 32 + b), 11),
        d(m ^ v ^ y, 1839030562, n(a, 44 + b), 16),
        d(m ^ v ^ y, 4259657740, n(a, 56 + b), 23),
        d(m ^ v ^ y, 2763975236, n(a, 4 + b), 4),
        d(m ^ v ^ y, 1272893353, n(a, 16 + b), 11),
        d(m ^ v ^ y, 4139469664, n(a, 28 + b), 16),
        d(m ^ v ^ y, 3200236656, n(a, 40 + b), 23),
        d(m ^ v ^ y, 681279174, n(a, 52 + b), 4),
        d(m ^ v ^ y, 3936430074, n(a, b), 11),
        d(m ^ v ^ y, 3572445317, n(a, 12 + b), 16),
        d(m ^ v ^ y, 76029189, n(a, 24 + b), 23),
        d(m ^ v ^ y, 3654602809, n(a, 36 + b), 4),
        d(m ^ v ^ y, 3873151461, n(a, 48 + b), 11),
        d(m ^ v ^ y, 530742520, n(a, 60 + b), 16),
        d(m ^ v ^ y, 3299628645, n(a, 8 + b), 23),
        d(v ^ (m | ~y), 4096336452, n(a, b), 6),
        d(v ^ (m | ~y), 1126891415, n(a, 28 + b), 10),
        d(v ^ (m | ~y), 2878612391, n(a, 56 + b), 15),
        d(v ^ (m | ~y), 4237533241, n(a, 20 + b), 21),
        d(v ^ (m | ~y), 1700485571, n(a, 48 + b), 6),
        d(v ^ (m | ~y), 2399980690, n(a, 12 + b), 10),
        d(v ^ (m | ~y), 4293915773, n(a, 40 + b), 15),
        d(v ^ (m | ~y), 2240044497, n(a, 4 + b), 21),
        d(v ^ (m | ~y), 1873313359, n(a, 32 + b), 6),
        d(v ^ (m | ~y), 4264355552, n(a, 60 + b), 10),
        d(v ^ (m | ~y), 2734768916, n(a, 24 + b), 15),
        d(v ^ (m | ~y), 1309151649, n(a, 52 + b), 21),
        d(v ^ (m | ~y), 4149444226, n(a, 16 + b), 6),
        d(v ^ (m | ~y), 3174756917, n(a, 44 + b), 10),
        d(v ^ (m | ~y), 718787259, n(a, 8 + b), 15),
        d(v ^ (m | ~y), 3951481745, n(a, 36 + b), 21),
        u = s(u, h),
        _ = s(_, m),
        f = s(f, v),
        g = s(g, y)
    }
    return function() {
        for (var e, t = "", i = 3; 0 <= i; i--)
            t += (e = ((e = (((255 & (e = arguments[i])) << 8 | 255 & (e >>>= 8)) << 8 | 255 & (e >>>= 8)) << 8 | (e >>>= 8)) >>> 0).toString(16),
            "00000000".substr(0, 8 - e.length) + e);
        return t
    }(g, f, _, u).toUpperCase()
}

K = [
    "NVPh5oo715z5DIWAeQlhMDsWXXQV4hwt",
    "appid=1014",
    "clienttime=1720342234",
    "clientver=10",
    "dfid=3x7Yqu2pdnco1BSQP11xIHjo",
    "mid=3ec0e6f10ebbed3d4cf77bea4bb6aeaf",
    "srcappid=2919",
    "uuid=1720342234765",
    "{\"plat\":4,\"mobile\":\"18199999999\",\"code\":\"111111\",\"expire_day\":1,\"support_multi\":1,\"userid\":\"\",\"force_login\":1}",
    "NVPh5oo715z5DIWAeQlhMDsWXXQV4hwt"
]

signature = MD5(K.join(""))
console.log(signature)