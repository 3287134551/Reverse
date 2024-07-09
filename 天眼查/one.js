window = global;
be = function(e) {
    return null != e && (_e(e) || function(e) {
        return "function" === typeof e.readFloatLE && "function" === typeof e.slice && _e(e.slice(0, 0))
    }(e) || !!e._isBuffer)
};
var ye = {
    utf8: {
        stringToBytes: function(e) {
            return ye.bin.stringToBytes(unescape(encodeURIComponent(e)))
        },
        bytesToString: function(e) {
            return decodeURIComponent(escape(ye.bin.bytesToString(e)))
        }
    },
    bin: {
        stringToBytes: function(e) {
            for (var t = [], n = 0; n < e.length; n++)
                t.push(255 & e.charCodeAt(n));
            return t
        },
        bytesToString: function(e) {
            for (var t = [], n = 0; n < e.length; n++)
                t.push(String.fromCharCode(e[n]));
            return t.join("")
        }
    }
}
  , ve = ye
ge = {
    exports: {}
};
!function() {
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
      , t = {
        rotl: function(e, t) {
            return e << t | e >>> 32 - t
        },
        rotr: function(e, t) {
            return e << 32 - t | e >>> t
        },
        endian: function(e) {
            if (e.constructor == Number)
                return 16711935 & t.rotl(e, 8) | 4278255360 & t.rotl(e, 24);
            for (var n = 0; n < e.length; n++)
                e[n] = t.endian(e[n]);
            return e
        },
        randomBytes: function(e) {
            for (var t = []; e > 0; e--)
                t.push(Math.floor(256 * Math.random()));
            return t
        },
        bytesToWords: function(e) {
            for (var t = [], n = 0, r = 0; n < e.length; n++,
            r += 8)
                t[r >>> 5] |= e[n] << 24 - r % 32;
            return t
        },
        wordsToBytes: function(e) {
            for (var t = [], n = 0; n < 32 * e.length; n += 8)
                t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
            return t
        },
        bytesToHex: function(e) {
            for (var t = [], n = 0; n < e.length; n++)
                t.push((e[n] >>> 4).toString(16)),
                t.push((15 & e[n]).toString(16));
            return t.join("")
        },
        hexToBytes: function(e) {
            for (var t = [], n = 0; n < e.length; n += 2)
                t.push(parseInt(e.substr(n, 2), 16));
            return t
        },
        bytesToBase64: function(t) {
            for (var n = [], r = 0; r < t.length; r += 3)
                for (var o = t[r] << 16 | t[r + 1] << 8 | t[r + 2], i = 0; i < 4; i++)
                    8 * r + 6 * i <= 8 * t.length ? n.push(e.charAt(o >>> 6 * (3 - i) & 63)) : n.push("=");
            return n.join("")
        },
        base64ToBytes: function(t) {
            t = t.replace(/[^A-Z0-9+\/]/gi, "");
            for (var n = [], r = 0, o = 0; r < t.length; o = ++r % 4)
                0 != o && n.push((e.indexOf(t.charAt(r - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | e.indexOf(t.charAt(r)) >>> 6 - 2 * o);
            return n
        }
    };
    ge.exports = t
}();
!function() {
    var e = ge.exports
      , t = ve.utf8
      , n = be
      , r = ve.bin
      , o = function(i, a) {
        i.constructor == String ? i = a && "binary" === a.encoding ? r.stringToBytes(i) : t.stringToBytes(i) : n(i) ? i = Array.prototype.slice.call(i, 0) : Array.isArray(i) || i.constructor === Uint8Array || (i = i.toString());
        for (var s = e.bytesToWords(i), c = 8 * i.length, u = 1732584193, l = -271733879, d = -1732584194, f = 271733878, p = 0; p < s.length; p++)
            s[p] = 16711935 & (s[p] << 8 | s[p] >>> 24) | 4278255360 & (s[p] << 24 | s[p] >>> 8);
        s[c >>> 5] |= 128 << c % 32,
        s[14 + (c + 64 >>> 9 << 4)] = c;
        var h = o._ff
          , m = o._gg
          , g = o._hh
          , y = o._ii;
        for (p = 0; p < s.length; p += 16) {
            var v = u
              , b = l
              , _ = d
              , w = f;
            u = h(u, l, d, f, s[p + 0], 7, -680876936),
            f = h(f, u, l, d, s[p + 1], 12, -389564586),
            d = h(d, f, u, l, s[p + 2], 17, 606105819),
            l = h(l, d, f, u, s[p + 3], 22, -1044525330),
            u = h(u, l, d, f, s[p + 4], 7, -176418897),
            f = h(f, u, l, d, s[p + 5], 12, 1200080426),
            d = h(d, f, u, l, s[p + 6], 17, -1473231341),
            l = h(l, d, f, u, s[p + 7], 22, -45705983),
            u = h(u, l, d, f, s[p + 8], 7, 1770035416),
            f = h(f, u, l, d, s[p + 9], 12, -1958414417),
            d = h(d, f, u, l, s[p + 10], 17, -42063),
            l = h(l, d, f, u, s[p + 11], 22, -1990404162),
            u = h(u, l, d, f, s[p + 12], 7, 1804603682),
            f = h(f, u, l, d, s[p + 13], 12, -40341101),
            d = h(d, f, u, l, s[p + 14], 17, -1502002290),
            u = m(u, l = h(l, d, f, u, s[p + 15], 22, 1236535329), d, f, s[p + 1], 5, -165796510),
            f = m(f, u, l, d, s[p + 6], 9, -1069501632),
            d = m(d, f, u, l, s[p + 11], 14, 643717713),
            l = m(l, d, f, u, s[p + 0], 20, -373897302),
            u = m(u, l, d, f, s[p + 5], 5, -701558691),
            f = m(f, u, l, d, s[p + 10], 9, 38016083),
            d = m(d, f, u, l, s[p + 15], 14, -660478335),
            l = m(l, d, f, u, s[p + 4], 20, -405537848),
            u = m(u, l, d, f, s[p + 9], 5, 568446438),
            f = m(f, u, l, d, s[p + 14], 9, -1019803690),
            d = m(d, f, u, l, s[p + 3], 14, -187363961),
            l = m(l, d, f, u, s[p + 8], 20, 1163531501),
            u = m(u, l, d, f, s[p + 13], 5, -1444681467),
            f = m(f, u, l, d, s[p + 2], 9, -51403784),
            d = m(d, f, u, l, s[p + 7], 14, 1735328473),
            u = g(u, l = m(l, d, f, u, s[p + 12], 20, -1926607734), d, f, s[p + 5], 4, -378558),
            f = g(f, u, l, d, s[p + 8], 11, -2022574463),
            d = g(d, f, u, l, s[p + 11], 16, 1839030562),
            l = g(l, d, f, u, s[p + 14], 23, -35309556),
            u = g(u, l, d, f, s[p + 1], 4, -1530992060),
            f = g(f, u, l, d, s[p + 4], 11, 1272893353),
            d = g(d, f, u, l, s[p + 7], 16, -155497632),
            l = g(l, d, f, u, s[p + 10], 23, -1094730640),
            u = g(u, l, d, f, s[p + 13], 4, 681279174),
            f = g(f, u, l, d, s[p + 0], 11, -358537222),
            d = g(d, f, u, l, s[p + 3], 16, -722521979),
            l = g(l, d, f, u, s[p + 6], 23, 76029189),
            u = g(u, l, d, f, s[p + 9], 4, -640364487),
            f = g(f, u, l, d, s[p + 12], 11, -421815835),
            d = g(d, f, u, l, s[p + 15], 16, 530742520),
            u = y(u, l = g(l, d, f, u, s[p + 2], 23, -995338651), d, f, s[p + 0], 6, -198630844),
            f = y(f, u, l, d, s[p + 7], 10, 1126891415),
            d = y(d, f, u, l, s[p + 14], 15, -1416354905),
            l = y(l, d, f, u, s[p + 5], 21, -57434055),
            u = y(u, l, d, f, s[p + 12], 6, 1700485571),
            f = y(f, u, l, d, s[p + 3], 10, -1894986606),
            d = y(d, f, u, l, s[p + 10], 15, -1051523),
            l = y(l, d, f, u, s[p + 1], 21, -2054922799),
            u = y(u, l, d, f, s[p + 8], 6, 1873313359),
            f = y(f, u, l, d, s[p + 15], 10, -30611744),
            d = y(d, f, u, l, s[p + 6], 15, -1560198380),
            l = y(l, d, f, u, s[p + 13], 21, 1309151649),
            u = y(u, l, d, f, s[p + 4], 6, -145523070),
            f = y(f, u, l, d, s[p + 11], 10, -1120210379),
            d = y(d, f, u, l, s[p + 2], 15, 718787259),
            l = y(l, d, f, u, s[p + 9], 21, -343485551),
            u = u + v >>> 0,
            l = l + b >>> 0,
            d = d + _ >>> 0,
            f = f + w >>> 0
        }
        return e.endian([u, l, d, f])
    };
    o._ff = function(e, t, n, r, o, i, a) {
        var s = e + (t & n | ~t & r) + (o >>> 0) + a;
        return (s << i | s >>> 32 - i) + t
    }
    ,
    o._gg = function(e, t, n, r, o, i, a) {
        var s = e + (t & r | n & ~r) + (o >>> 0) + a;
        return (s << i | s >>> 32 - i) + t
    }
    ,
    o._hh = function(e, t, n, r, o, i, a) {
        var s = e + (t ^ n ^ r) + (o >>> 0) + a;
        return (s << i | s >>> 32 - i) + t
    }
    ,
    o._ii = function(e, t, n, r, o, i, a) {
        var s = e + (n ^ (t | ~r)) + (o >>> 0) + a;
        return (s << i | s >>> 32 - i) + t
    }
    ,
    o._blocksize = 16,
    o._digestsize = 16,
    window.ccc = function(t, n) {
        if (void 0 === t || null === t)
            throw new Error("Illegal argument " + t);
        var i = e.wordsToBytes(o(t, n));
        return n && n.asBytes ? i : n && n.asString ? r.bytesToString(i) : e.bytesToHex(i)
    }
}();

console.log(window.ccc("A112233"))