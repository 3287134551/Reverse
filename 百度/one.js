window = global;
Document = function Document(){
    debugger;
}
document = new Document()
navigator = {
    userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0'
}


var PassMachine = "undefined" == typeof window.PassMachine ? {} : window.PassMachine;
!function(e, t, n) {
    function i() {
        var e = new Date
          , t = e.getTime();
        return t
    }
    function o(e, t) {
        var n;
        return function() {
            return n ? void 0 : (n = setTimeout(function() {
                n = null
            }, t),
            e.apply(this))
        }
    }
    function r(e, t) {
        var n, i = e, o = !0;
        return function() {
            var e = arguments
              , r = this;
            return o ? (i.apply(r, e),
            o = !1) : n ? !1 : void (n = setTimeout(function() {
                clearTimeout(n),
                n = null,
                i.apply(r, e)
            }, t || 500))
        }
    }
    function s() {
        try {
            var n = e.mozInnerScreenY || e.screenTop
              , i = e.mozInnerScreenX || e.screenLeft;
            "undefined" == typeof n && (n = 0),
            "undefined" == typeof i && (i = 0);
            var o = t.documentElement.clientWidth || t.body.clientWidth
              , r = t.documentElement.clientHeight || t.body.clientHeight
              , s = e.screen.width
              , a = e.screen.height
              , c = e.screen.availWidth
              , u = e.screen.availHeight
              , l = e.outerWidth
              , d = e.outerHeight
              , f = t.documentElement.scrollWidth || t.body.scrollWidth
              , p = t.documentElement.scrollWidth || t.body.scrollHeight;
            return {
                screenTop: n,
                screenLeft: i,
                clientWidth: o,
                clientHeight: r,
                screenWidth: s,
                screenHeight: a,
                availWidth: c,
                availHeight: u,
                outerWidth: l,
                outerHeight: d,
                scrollWidth: f,
                scrollHeight: p
            }
        } catch (h) {}
    }
    function a(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
    }
    function c(e, t) {
        return !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
    }
    function u(e, t) {
        return "hide" === t && (t = "pass-machine-" + t),
        c(e, t) || (e.className,
        e.className += " " + t),
        this
    }
    function l(e, t) {
        return "hide" === t && (t = "pass-machine-" + t),
        c(e, t) && (e.className = e.className.indexOf(" " + t + " ") >= 0 ? e.className.replace(new RegExp("(\\s|^)" + t + "(\\s|$)"), " ") : e.className.replace(new RegExp("(\\s|^)" + t + "(\\s|$)"), "")),
        this
    }
    function d(e, t, n) {
        e.removeEventListener ? e.removeEventListener(t, n, !1) : e.datachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null
    }
    function f(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    }
    function p(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }
    function h(e) {
        var t = new RegExp("(^| )" + e + "=([^;]*)(;|$)")
          , n = t.exec(document.cookie);
        return n ? n[2] || null : null
    }
    function m(e) {
        var t = h(e);
        return "string" == typeof t ? t = decodeURIComponent(t) : null
    }
    function v() {
        var e = navigator.userAgent.toLowerCase()
          , t = null;
        if (e.indexOf("android") > 0) {
            var n = /android [\d._]+/gi
              , i = e.match(n);
            t = (i + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, "."),
            t = parseInt(t.split(".")[0], 10)
        }
        return t
    }
    try {
        var g = window.navigator.userAgent.toLowerCase()
          , y = "";
        if ((g.match(/msie\s\d+/) && g.match(/msie\s\d+/)[0] || g.match(/trident\s?\d+/) && g.match(/trident\s?\d+/)[0]) && (y = g.match(/msie\s\d+/)[0].match(/\d+/)[0] || g.match(/trident\s?\d+/)[0]),
        y && 7 > y)
            return !1;
        var b, x, w = null, T = 0, C = null, k = !1, E = !1, S = !1, D = {
            testUrl: "https://bjyz-passport-antispam01.bjyz.baidu.com:8888/viewlog",
            onlineUrl: "https://passport.baidu.com/viewlog",
            pcFeedbackUrl: "https://zhiqiu.baidu.com/imcswebchat/roulette/in?id=48907&token=m75585l8ssgl520b862a2588nm1j91oc&domainID=pass&type=2",
            wapFeedbackUrl: "https://zhiqiu.baidu.com/imcswebchat/roulette/in?id=48807&token=1qjus3gv7vbr8aaq7a32sj195s68r6v7&domainID=pass&type=1",
            returnUrl: "https://www.baidu.com",
            networkErrorImg: "data:image/png;base64,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"
        };
        PassMachine.mkd = function(e) {
            this.init(e)
        }
        ,
        PassMachine.mkd.prototype = {
            init: function(t) {
                var n = this;
                this.initConfig(t),
                this.mobilecheck(),
                this.initMock(),
                "wap" === this.devicetype && "dark" === m("passtheme") && (t.darkmode = !0),
                e.PassMachine.haveMkd ? setTimeout(function() {
                    n.conf.initApiSuccessFn && n.conf.initApiSuccessFn(e.PassMachine.haveMkd.dsData)
                }, 0) : (this.initApi(),
                e.PassMachine.haveMkd = this)
            },
            initConfig: function(e) {
                this.conf = e,
                this.setLang(e),
                this.protocol = "https:";
                var t = this.getQueryString("hideHelp");
                this.store = {
                    storeVer: "1.0.1",
                    count: 0,
                    countnum: 10,
                    nameL: "6bffae1c",
                    nameR: "appsapi0",
                    sendUrl: e.sendUrl || D.onlineUrl,
                    hideHelp: e.hideHelp || t && 1 === +t || !1,
                    ExteriorSwitch: !1,
                    styAnimaBtn: !0,
                    doubleSucTac: !1,
                    backupFeedUrl: "",
                    doubleSucFeedUrl: "",
                    slideTitle: null,
                    spinTitle: null,
                    senceTitleConfig: {
                        animaTipSence: {
                            slide: "请完成下方验证后继续操作",
                            spin: "请完成下方验证后继续操作"
                        },
                        doubleSucSence: {
                            slide: "请存在安全风险，请再次验证",
                            spin: "存在安全风险，请再次验证"
                        }
                    },
                    openYmg: e.openYmg || !1,
                    scene: e.scene || ""
                },
                this.conf && this.conf.testurl && (this.store.sendUrl = D.testUrl),
                this.store.getStyleUrl = this.store.sendUrl + "/getstyle",
                this.store.qrstatus = this.store.sendUrl + "/qrstatus",
                this.store.ak = e.ak || "";
                var n = "c27bbc89afca0463650ac9bde68ebe06" === this.store.ak || "248b24c134a6b4f52ee85f8b9577d4a8" === this.store.ak;
                if (this.store.ExteriorSwitch = this.store.ak && n ? !0 : !1,
                this.store.type = e.type || "default",
                this.store.id = e.id || "mkd",
                this.store.styAnimaBtn) {
                    var i = this.store.senceTitleConfig.animaTipSence;
                    this.lang.slideConTitle = i.slide,
                    this.lang.spinConTitle = i.spin
                }
                this.store.openYmg && this.initYmg()
            },
            setVcodeConfig: function(e) {
                this.conf.verifySuccessFn = e.verifySuccessFn || function() {}
                ,
                this.conf.closeFn = e.closeFn || function() {}
            },
            setLang: function(e) {
                this.lang = {
                    slideHeadTitle: e.headTitle || e.slideConfig && e.slideConfig.headTitle || "安全验证",
                    slideConTitle: e.slideConfig && e.slideConfig.conTitle || "滑至最右 完成验证",
                    slideBottomTitle: e.slideConfig && e.slideConfig.bottomTitle || "",
                    verifySuccess: e.slideConfig && e.slideConfig.finishTitle || "验证成功",
                    verifyError: e.slideConfig && e.slideConfig.errorTitle || "验证失败",
                    spinHeadTitle: e.headTitle || e.spinConfig && e.spinConfig.headTitle || "安全验证",
                    spinConTitle: e.spinConfig && e.spinConfig.conTitle || "拖动滑块，使图片角度为正",
                    spinBottomTitler: e.spinConfig && e.spinConfig.bottomTitle || "",
                    feedback: e.publicConfig && e.publicConfig.feedback || "意见反馈",
                    auxiliary: e.publicConfig && e.publicConfig.auxiliary || "扫码验证",
                    qrcodeHeadTitle: e.headTitle || e.qrcodeConfig && e.qrcodeConfig.headTitle || "安全验证",
                    qrcodeTipTitle: e.qrcodeConfig && e.qrcodeConfig.qrcodeTipTitle || "你当前的设备不便验证时",
                    qrcodeBottomTitle: e.qrcodeConfig && e.qrcodeConfig.qrcodeBottomTitle || "可通过手机扫描以下二维码验证",
                    headTitle: e.headTitle || "安全验证",
                    deviceConTitle: e.deviceConfig && e.deviceConfig.conTitle || "左右摇摆手机 指针对准不同元素",
                    bottomTitle: e.bottomTitle || "",
                    vcodeSlideBottomTips: "拖动左侧滑块至最右侧",
                    vcodeSpinBottomTips: "拖动左侧滑块使图片为正"
                }
            },
            initYmg: function() {
                try {
                    var e = "2100";
                    Paris.init({
                        sid: e,
                        timeout: 5e3,
                        abcliteUrl: "https://dlswbr.baidu.com/heicha/mw/abclite-".concat(e, "-s.js"),
                        abcliteFields: {
                            subid: function() {
                                return ""
                            }
                        },
                        disasterConfig: {
                            abcliteUrl: "https://miaowu.baidu.com/sdk/heicha/mw/abclite-".concat(e, "-s.js"),
                            secondReportUrl: "https://miaowu.baidu.com/slim/abdr"
                        }
                    })
                } catch (t) {
                    console.log("error:", t)
                }
            },
            getYmgData: function(t) {
                var n = e.PassMachine.haveMkd || this;
                try {
                    Paris.getAbcliteInstance(function(e, i) {
                        return e ? (n.rzData.envir_param = "",
                        void (t && t())) : void i.getAutoResponse(function(e, i) {
                            return e ? (n.rzData.envir_param = "",
                            void (t && t())) : (n.rzData.envir_param = JSON.parse(i),
                            void (t && t()))
                        })
                    })
                } catch (i) {
                    n.rzData.envir_param = "",
                    t && t()
                }
            },
            mobilecheck: function() {
                try {
                    var e = navigator.platform || "Win";
                    /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent) ? this.wapsetconfig() : e.indexOf("Mac") > -1 && "ontouchend"in document ? this.wapsetconfig() : "ontouchend"in document && -1 === e.indexOf("Win") && -1 === e.indexOf("Mac") ? this.wapsetconfig() : this.pcsetconfig()
                } catch (t) {
                    this.wapsetconfig()
                }
            },
            wapsetconfig: function() {
                this.devicetype = "wap",
                this.eventclick = "touchstart",
                this.eventmove = "touchmove",
                this.eventend = "touchend",
                this.eventend2 = "touchcancel",
                this.store.countnum = 10
            },
            pcsetconfig: function() {
                this.devicetype = "pc",
                this.eventclick = "mousedown",
                this.eventmove = "mousemove",
                this.eventend = "mouseup",
                this.store.countnum = 20
            },
            initMock: function() {
                this.rzData = {
                    cl: [],
                    mv: [],
                    sc: [],
                    kb: [],
                    sb: [],
                    sd: [],
                    sm: [],
                    cr: s(),
                    simu: window.navigator.webdriver ? 1 : 0,
                    ac_c: 0
                },
                this.dsData = {}
            },
            initApi: function() {
                var e = this
                  , t = {};
                t.ak = e.store.ak,
                n.ajax({
                    url: e.store.sendUrl,
                    dataType: "jsonp",
                    data: t,
                    timeout: 18e4,
                    success: function(t) {
                        1 === t.code ? (b = 1,
                        x = t.msg,
                        t.feedbackUrl = e.getFeedbackUrl(t.data),
                        t.returnUrl = e.getreturnUrl(t.data),
                        e.conf.initApiErrorFn && e.conf.initApiErrorFn(t)) : (e.dsData = t.data || {},
                        e.store.nameL = t.data.as || "6bffae1c",
                        e.feedbackUrl = e.getFeedbackUrl(t.data),
                        e.initGatherEvent(),
                        e.conf.initApiSuccessFn && e.conf.initApiSuccessFn(e.dsData))
                    },
                    error: function() {
                        e.errorData(),
                        e.conf.initApiErrorFn && e.conf.initApiErrorFn(e.dsData)
                    }
                })
            },
            getFeedbackUrl: function(e) {
                var t, n = this;
                return t = e && e.feedback ? e.feedback["default"] || ("pc" === n.devicetype ? e.feedback.pc : e.feedback.wap) : "pc" === n.devicetype ? D.pcFeedbackUrl : D.wapFeedbackUrl,
                n.store.backupFeedUrl = t,
                t
            },
            getreturnUrl: function(e) {
                var t, n = this;
                return t = e && e["return"] ? e["return"]["default"] || ("pc" === n.devicetype ? e["return"].pc : e["return"].wap) : D.returnUrl
            },
            initGatherEvent: function() {
                var n = this
                  , r = function(t) {
                    t = t || e.event;
                    var o = {}
                      , r = t.changedTouches && t.changedTouches[0] || t;
                    o.x = parseInt(r.clientX, 10),
                    o.y = parseInt(r.clientY, 10),
                    o.t = i(),
                    n.rzData.cl.push(o),
                    n.reportedOpportunity()
                }
                  , s = o(function(t) {
                    t = t || e.event || arguments.callee.caller.arguments[0];
                    var o = {}
                      , r = t.changedTouches && t.changedTouches[0] || t;
                    o.fx = parseInt(r.clientX, 10),
                    o.fy = parseInt(r.clientY, 10),
                    o.t = i(),
                    o.bf = k ? 1 : 2,
                    n.rzData.mv.push(o),
                    n.reportedOpportunity()
                }, 150)
                  , c = function() {
                    var e = {};
                    e.key = "a",
                    e.t = i(),
                    n.rzData.kb.push(e),
                    n.reportedOpportunity()
                }
                  , u = o(function(i) {
                    i = i || e.event;
                    var o = {};
                    o.tx = t.documentElement.scrollLeft || t.body.scrollLeft,
                    o.ty = t.documentElement.scrollTop || t.body.scrollTop,
                    n.rzData.sc.push(o),
                    n.reportedOpportunity()
                }, 300);
                a(t, n.eventclick, r),
                a(t, "touchmove", s),
                a(t, "mousemove", s),
                a(t, "keyup", c),
                a(e, "scroll", u),
                n.removeGatherEvent = function() {
                    d(t, n.eventclick, r),
                    d(t, n.eventmove, s),
                    d(t, "keyup", c),
                    d(e, "scroll", u)
                }
            },
            getStyleInfo: function(e, t, i) {
                var o = this
                  , r = {};
                r.ak = o.store.ak,
                r.tk = o.dsData.tk,
                r.scene = o.conf.scene || "",
                r.isios = o.isios ? 1 : 0,
                r.type = i && i.type || o.store.type || "default",
                n.ajax({
                    url: o.store.getStyleUrl,
                    dataType: "jsonp",
                    data: r,
                    time: 18e4,
                    success: function(n) {
                        return 1 === n.code ? void t(n) : (o.conf.backstr = n.data.backstr,
                        o.conf.type = n.data.type || "slide",
                        o.conf.ext = n.data.ext || {},
                        void e(n))
                    },
                    error: function() {
                        o.conf.type = "slide",
                        t()
                    }
                })
            },
            postData: function(t, i) {
                var o = e.PassMachine.haveMkd || this
                  , r = function(e, t) {
                    if (1 === b)
                        return o.removeGatherEvent && o.removeGatherEvent(),
                        o.removeVcodeEvent && o.removeVcodeEvent(),
                        !1;
                    var i = JSON.stringify(o.rzData)
                      , r = o.encrypt(i)
                      , s = {};
                    s.ak = o.store.ak,
                    s.as = o.store.nameL || "",
                    s.fs = r,
                    s.tk = o.dsData.tk || "",
                    s.scene = o.conf.scene || "",
                    t && (s.cv = t),
                    o.store.count = 0,
                    o.initMock(),
                    n.ajax({
                        url: o.store.sendUrl,
                        dataType: "jsonp",
                        data: s,
                        time: 18e4,
                        success: function(t) {
                            if (0 === t.code && t.data) {
                                o.dsData = t.data || {},
                                o.store.nameL = t.data.as || "6bffae1c";
                                var n = t.data;
                                delete n.as,
                                e && e(n)
                            } else
                                1 === t.code ? (o.removeGatherEvent && o.removeGatherEvent(),
                                o.removeVcodeEvent && o.removeVcodeEvent(),
                                b = 1) : (o.errorData(),
                                e && e(o.dsData))
                        },
                        error: function() {
                            o.errorData(),
                            e && e(o.dsData)
                        }
                    })
                };
                o.store.openYmg ? o.getYmgData(function() {
                    r(t, i)
                }) : r(t, i)
            },
            stopSlideWebview: function(t) {
                e.Pass && e.Pass.client && e.Pass.client.deviceClassCheck && window.Pass.client.deviceClassCheck("action_stop_slide_webview", {
                    isStop: t || !1
                }, null, null)
            },
            initVcode: function(e, t) {
                n.isEmptyObject(e) || this.setLang(e);
                var i = this
                  , o = n(".mod-vcodes")[0];
                return o || this.lock ? !1 : (this.lock = !0,
                void (this.conf && this.conf.type && "device" === this.conf.type ? i.checkDeviceMotionEvent(function() {
                    i.initVcodeOld(e, t)
                }, function() {
                    i.initVcodeOld(e, t)
                }) : i.initVcodeOld(e, t)))
            },
            initVcodeOld: function(e, t) {
                var n = this;
                n.num = Math.floor(1e3 * Math.random());
                var i = y && 9 > y;
                "qrcode" === n.store.type || i ? n.initQrcodeDom(e) : n.getStyleInfo(function() {
                    t && t(),
                    "qrcode" === n.conf.type ? n.initQrcodeDom(e) : "spin" === n.conf.type ? n.initSpinDom(e) : "device" === n.conf.type ? n.initDeviceDom(e) : n.initSildeDom(e)
                }, function() {
                    t && t(),
                    n.initSildeDom(e)
                }, e),
                this.stopSlideWebview(!0)
            },
            blueLinkStr: function(e) {
                var t = this
                  , n = t.conf.ext && 1 === t.conf.ext.sup ? "" : "pass-machine-hide"
                  , i = e || n || ""
                  , o = '<div class="bluelink"><span class="vcode-slide-bluelink clearfix ' + i + '" id="pass-slide-auxiliary' + this.num + '"><div class="vcode-slide-auxiliary-img"></div><div class="vcode-slide-auxiliary-txt">' + this.lang.auxiliary + "</div></span>" + ("pass-machine-hide" !== i ? '<span class="vcode-slide-distance-line"></span>' : "") + '<span class="vcode-slide-bluelink clearfix" id="pass-slide-feedback' + this.num + '"><div class="vcode-slide-feedback-img"></div><div class="vcode-slide-feedback-txt ' + (this.store.hideHelp ? "pass-machine-hide" : "") + '">' + this.lang.feedback + "</div></span></div>";
                return o
            },
            aiverifyfooter: function(e) {
                var t = "slide" === e ? this.lang.slideBottomTitle : this.lang.spinBottomTitler;
                if (this.lang.bottomTitle && (t = this.lang.bottomTitle),
                t) {
                    var n = '<p class="vcode-slide-footer" id="pass-spin-footer' + this.num + '">' + t + "</p>";
                    return n
                }
                return ""
            },
            initSildeDom: function(e) {
                var t = this;
                if (1 === b)
                    return !1;
                e = e || {},
                e.id = e && e.id || this.store.id;
                var n = ""
                  , i = ""
                  , o = "";
                y && 10 > y ? (n = '<div class="vcode-slide-img"></div>',
                i = "vcode-slide-expression",
                o = "vcode-slide-loading") : (n = '<div class="vcode-slide-img"></div>',
                i = "vcode-slide-expression-x",
                o = "vcode-slide-loading-x"),
                this.odiv = document.createElement("div");
                var r = this.odiv;
                r.className = this.conf.darkmode ? "mod-vcodes darkmode" : "mod-vcodes",
                r.id = "mod-vcodes" + this.num;
                var s = this.store.styAnimaBtn ? '<p class="vcode-slide-bottom-tips slideShine" id="vcode-slide-bottom-tips' + this.num + '">' + this.lang.vcodeSlideBottomTips + "</p>" : "";
                r.innerHTML = '<div class="mod-vcode-content-mkd clearfix" id="pass-content' + this.num + '"><p class="mod-page-tipInfo-gray1" id="pass-slide-tipInfo' + this.num + '">' + this.lang.slideHeadTitle + '</p><p class="mod-page-tipInfo-gray2" id="pass-slide-tipInfo2' + this.num + '">' + this.lang.slideConTitle + '</p><div class="vcode-slide-faceboder" id="vcode-slide-faceboder' + this.num + '">' + n + '<div class="' + i + '" id="vcode-slide-expression' + this.num + '"></div></div><div class="vcode-slide-control"  id="pass-slide-control' + this.num + '"><div class="vcode-slide-bottom" id="vcode-slide-bottom' + this.num + '">' + s + '<p id="vcode-slide-bottom-p' + this.num + '"></p></div><div class="vcode-slide-cover" id="vcode-slide-cover' + this.num + '"><p id="vcode-slide-cover-p' + this.num + '"></p></div><div class="vcode-slide-button" id="vcode-slide-button' + this.num + '"><p class="" id="vcode-slide-button-p' + this.num + '"></p></div><div class="' + o + '" id="vcode-slide-loading' + this.num + '"></div></div>' + this.blueLinkStr() + this.aiverifyfooter("slide") + "</div>",
                e.slideSimple && (r.innerHTML = '<div class="mod-vcode-content-mkd clearfix padding0" id="pass-content' + this.num + '"><div class="none" id="vcode-slide-faceboder' + this.num + '"><div class="none" id="vcode-slide-expression' + this.num + '"></div></div><div class="vcode-slide-control  width100"  id="pass-slide-control' + this.num + '"><div class="vcode-slide-bottom" id="vcode-slide-bottom' + this.num + '"><p id="vcode-slide-bottom-p' + this.num + '">' + this.lang.slideConTitle + '</p></div><div class="vcode-slide-cover" id="vcode-slide-cover' + this.num + '"><p id="vcode-slide-cover-p' + this.num + '"></p></div><div class="vcode-slide-button" id="vcode-slide-button' + this.num + '"><p class="" id="vcode-slide-button-p' + this.num + '"></p></div><div class="' + o + '" id="vcode-slide-loading' + this.num + '"></div></div></div>'),
                t.appendDomProcess(r, e),
                setTimeout(function() {
                    t.initVcodeEvent()
                }, 100)
            },
            initSpinDom: function(e) {
                var t = this;
                if (1 === b)
                    return !1;
                e = e || {},
                e.id = e && e.id || this.store.id;
                var n = "";
                n = '<div class="vcode-spin-faceboder" id="vcode-spin-faceboder' + this.num + '"><img class="vcode-spin-img" id="vcode-spin-img' + this.num + '"><div class="vcode-spin-coordinate pass-machine-hide" id="vcode-spin-coordinate' + this.num + '"></div><div class="vcode-spin-mask pass-machine-hide" id="vcode-spin-mask' + this.num + '"></div><div class="vcode-spin-icon pass-machine-hide" id="vcode-spin-icon' + this.num + '"></div></div>';
                var i = ""
                  , o = this.store.styAnimaBtn ? '<p class="vcode-spin-bottom-tips slideShine" id="vcode-spin-bottom-tips' + this.num + '">' + this.lang.vcodeSpinBottomTips + "</p>" : "";
                i = '<div class="vcode-spin-control"  id="pass-spin-control' + this.num + '"><div class="vcode-spin-bottom" id="vcode-spin-bottom' + this.num + '">' + o + '</div><div class="vcode-spin-button" id="vcode-spin-button' + this.num + '"><p class="" id="vcode-spin-button-p' + this.num + '"></p></div></div>';
                var r = decodeURIComponent(this.conf.ext && this.conf.ext.img) || "";
                this.conf.ext && this.conf.ext.info || "",
                this.odiv = document.createElement("div");
                var s = this.odiv;
                s.className = this.conf.darkmode ? "mod-vcodes darkmode" : "mod-vcodes",
                s.id = "mod-vcodes" + this.num,
                s.innerHTML = '<div class="mod-vcode-content-mkd clearfix" id="pass-content' + this.num + '"><p class="mod-page-tipInfo-gray1" id="pass-slide-tipInfo' + this.num + '">' + this.lang.spinHeadTitle + '</p><p class="mod-page-tipInfo-gray2" id="pass-spin-tipInfo2' + this.num + '">' + this.lang.spinConTitle + "</p>" + n + i + this.blueLinkStr() + this.aiverifyfooter("spin") + "</div>",
                t.appendDomProcess(s, e);
                var a = document.getElementById("vcode-spin-img" + this.num);
                t.logImgLoad(a),
                a.src = r,
                setTimeout(function() {
                    t.initVcodeEvent()
                }, 100)
            },
            initDeviceDom: function(e) {
                var t = this;
                if (1 === b)
                    return !1;
                e = e || {},
                e.id = e && e.id || this.store.id;
                var i = "";
                i = '<div class="vcode-device-faceboder" id="vcode-spin-faceboder' + this.num + '"><div class="vcode-device-img" id="vcode-device-img' + this.num + '"></div><img class="vcode-device-img-answer" id="vcode-device-img-answer' + this.num + '"></img><div class="vcode-device-error" id="vcode-device-error' + this.num + '"><div class="vcode-device-error-img" id="vcode-device-error-img' + this.num + '"></div><p class="vcode-device-error-title" id="vcode-device-error-title' + this.num + '">加载失败</p></div><div class="vcode-device-mask pass-machine-hide" id="vcode-device-mask' + this.num + '"></div><div class="vcode-device-tip pass-machine-hide" id="vcode-device-tip' + this.num + '"><span class="vcode-device-icon-loading" id="vcode-device-statusImg' + this.num + '"></span></div><div class="vcode-device-pointer" id="vcode-device-pointer' + this.num + '"></div></div>';
                var o = '<div class="mod-vcode-content-mkd clearfix" id="pass-content' + this.num + '"><p class="mod-page-tipInfo-gray1" id="pass-device-tipInfo' + this.num + '">' + this.lang.headTitle + '</p><p class="mod-page-tipInfo-gray2" id="pass-device-tipInfo2' + this.num + '">' + this.lang.deviceConTitle + '</p><div class="vcode-device-tipimg"></div>' + i + this.blueLinkStr(!0) + this.aiverifyfooter("spin") + "</div>";
                if (e && "change" === e.type) {
                    var r = document.getElementById("pass-content" + this.num);
                    r && r.parentNode && r.parentNode.removeChild(r);
                    var s = document.getElementById("mod-vcodes" + this.num);
                    s.innerHTML = o
                } else {
                    var a = decodeURIComponent(this.conf.ext && this.conf.ext.img) || ""
                      , c = decodeURIComponent(this.conf.ext && this.conf.ext.title) || "";
                    this.odiv = document.createElement("div");
                    var u = this.odiv;
                    u.className = this.conf.darkmode ? "mod-vcodes darkmode" : "mod-vcodes",
                    u.id = "mod-vcodes" + this.num,
                    u.innerHTML = o,
                    t.appendDomProcess(u, e);
                    var l = document.getElementById("vcode-device-img-answer" + this.num)
                      , d = document.getElementById("pass-device-tipInfo2" + this.num);
                    d.innerHTML = c,
                    l.src = a,
                    n(".vcode-device-img-answer").error(function() {
                        n(".vcode-device-faceboder").addClass("vcode-device-faceboder-error"),
                        n(".vcode-device-pointer").remove(),
                        n(".vcode-device-img").remove(),
                        n(".vcode-device-img-answer").remove(),
                        n(".vcode-device-tipimg").remove(),
                        n(".vcode-device-error").show(),
                        d.innerHTML = "网络不给力，请关闭后重试",
                        t.removeDeviceEvent && t.removeDeviceEvent()
                    })
                }
                setTimeout(function() {
                    t.initVcodeEvent("device")
                }, 100)
            },
            initQrcodeDom: function(e) {
                var t = this;
                if (1 === b)
                    return !1;
                e = e || {},
                e.id = e && e.id || this.store.id;
                var n = "";
                n = '<div class="vcode-qrcode-faceboder" id="vcode-qrcode-faceboder' + this.num + '"><img class="vcode-qrcode-img" id="vcode-qrcode-img' + this.num + '" src="https://passport.bdimg.com/passApi/img/loading.gif"><div class="vcode-qrcode-mask pass-machine-hide" id="vcode-qrcode-mask' + this.num + '"></div><div class="vcode-qrcode-tip pass-machine-hide" id="vcode-qrcode-tip' + this.num + '"><span class="vcode-qrcode-mask-loadingImg" id="vcode-qrcode-statusImg' + this.num + '"></span><p id="vcode-qrcode-statusMsg' + this.num + '">正在加载...</p></div></div>';
                var i = '<div class="mod-vcode-content-mkd clearfix" id="pass-content' + this.num + '"><p class="mod-page-tipInfo-gray1" id="pass-qrcode-tipInfo' + this.num + '">' + this.lang.qrcodeHeadTitle + '</p><p class="mod-page-tipInfo-gray3" id="pass-qrcode-tipInfo2' + this.num + '">' + this.lang.qrcodeTipTitle + '</p><p class="mod-page-tipInfo-gray3" id="pass-qrcode-tipInfo2' + this.num + '">' + this.lang.qrcodeBottomTitle + "</p>" + n + '<p class="vcode-qrcode-errmsg" id="vcode-qrcode-errmsg' + this.num + '"></p>' + this.blueLinkStr("pass-machine-hide") + "</div>";
                if (e && "change" === e.type) {
                    var o = document.getElementById("pass-content" + this.num);
                    o && o.parentNode && o.parentNode.removeChild(o);
                    var r = document.getElementById("mod-vcodes" + this.num);
                    r.innerHTML = i
                } else {
                    this.odiv = document.createElement("div");
                    var s = this.odiv;
                    s.className = this.conf.darkmode ? "mod-vcodes darkmode" : "mod-vcodes",
                    s.id = "mod-vcodes" + this.num,
                    s.innerHTML = i,
                    t.appendDomProcess(s, e)
                }
                setTimeout(function() {
                    t.initVcodeEvent("qrcode")
                }, 100)
            },
            logImgLoad: function(e) {
                var t = this;
                e.onerror = function() {
                    e.src = D.networkErrorImg,
                    setTimeout(function() {
                        t.removeVcodeEvent && t.removeVcodeEvent()
                    }, 100),
                    t.logAll("mkd_load_img_error")
                }
            },
            getQueryString: function(e) {
                var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)","i")
                  , n = window.location.search.substr(1).match(t);
                return null != n ? unescape(n[2]) : null
            },
            logAll: function(e) {
                var t = this;
                try {
                    var n = document.location.protocol + "//nsclick.baidu.com/v.gif?pid=111&data_source=fe&type=1023&source=" + (t.getQueryString("clientfrom") || "wap") + "&client=" + (t.getQueryString("client") || "") + "&v=" + (new Date).getTime() + "&tpl=" + t.getQueryString("tpl");
                    n += "&auto_statistic=" + t.base64encode("{eventType:" + e + "}"),
                    n += "&auto_en=" + e;
                    var i = new Image;
                    i.onload = i.onerror = function() {
                        i.onload = i.onerror = null,
                        i = null
                    }
                    ,
                    i.src = n
                } catch (o) {}
            },
            base64encode: function(e) {
                var t, n, i, o, r, s, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                for (i = e.length,
                n = 0,
                t = ""; i > n; ) {
                    if (o = 255 & e.charCodeAt(n++),
                    n === i) {
                        t += a.charAt(o >> 2),
                        t += a.charAt((3 & o) << 4),
                        t += "==";
                        break
                    }
                    if (r = e.charCodeAt(n++),
                    n === i) {
                        t += a.charAt(o >> 2),
                        t += a.charAt((3 & o) << 4 | (240 & r) >> 4),
                        t += a.charAt((15 & r) << 2),
                        t += "=";
                        break
                    }
                    s = e.charCodeAt(n++),
                    t += a.charAt(o >> 2),
                    t += a.charAt((3 & o) << 4 | (240 & r) >> 4),
                    t += a.charAt((15 & r) << 2 | (192 & s) >> 6),
                    t += a.charAt(63 & s)
                }
                return t
            },
            appendDomProcess: function(e, t) {
                var n = this;
                if (this.conf && this.conf.maskModule === !0 && t.maskModule !== !1)
                    this.createDialogMask(),
                    this.createDialogBody(),
                    l(this.maskDiv, "hide"),
                    l(this.bodyDiv, "hide"),
                    this.bodyDiv.appendChild(e),
                    this.closeDiv = document.createElement("div"),
                    this.closeDiv.className = "vcode-close",
                    this.closeDiv.id = "vcode-close" + this.num,
                    this.bodyDiv.appendChild(this.closeDiv),
                    a(this.closeDiv, this.eventclick, function(e) {
                        p(e),
                        f(e),
                        setTimeout(function() {
                            n.conf.closeFn && n.conf.closeFn(),
                            n.removeMask()
                        }, 300),
                        n.stopSlideWebview(!1)
                    });
                else if (t && t.id) {
                    if (document.getElementById(t.id).lastChild && "mod-vcodes" === document.getElementById(t.id).lastChild.className) {
                        var i = document.getElementById(t.id);
                        i.removeChild(i.lastChild),
                        i.lastChild = null,
                        this.removeVcodeEvent && this.removeVcodeEvent(),
                        this.finish = !1,
                        this.start = !1
                    }
                    document.getElementById(t.id).appendChild(e)
                } else
                    document.appendChild(e);
                this.lock = !1,
                this.store.slideTitle = document.getElementById("pass-slide-tipInfo2" + this.num),
                this.store.spinTitle = document.getElementById("pass-spin-tipInfo2" + this.num),
                n.conf.initVcodeSuccessFn && n.conf.initVcodeSuccessFn()
            },
            initVcodeEvent: function(t) {
                var i = this;
                "qrcode" === this.conf.type || "qrcode" === t ? this.initQrcodeEvent() : "device" === this.conf.type || "device" === t ? this.initDeviceVcodeEvent() : "spin" === this.conf.type ? this.initSpinVcodeEvent() : this.initSildeVcodeEvent();
                var o = document.getElementById("pass-slide-feedback" + this.num)
                  , r = document.getElementById("pass-slide-auxiliary" + this.num);
                o && n(o).on("click", function() {
                    if (i.store.hideHelp)
                        return !1;
                    var t = e.PassMachine.haveMkd || i;
                    t.store.doubleSucTac && t.store.ExteriorSwitch ? t.store.doubleSucFeedUrl && (t.feedbackUrl = t.store.doubleSucFeedUrl) : t.store.backupFeedUrl && (t.feedbackUrl = t.store.backupFeedUrl),
                    e.Pass && e.Pass.client && e.Pass.client.newPage ? e.Pass.client.newPage(1, "咨询客服", t.feedbackUrl) : window.location.href = t.feedbackUrl,
                    i.stopSlideWebview(!1)
                }),
                r && n(r).on("click", function() {
                    i.initQrcodeDom({
                        type: "change"
                    })
                }),
                setTimeout(function() {
                    i.animationTipsFn()
                }, 300)
            },
            initSildeVcodeEvent: function() {
                var t = this
                  , i = document.getElementById("mod-vcodes" + this.num)
                  , o = (document.getElementById("pass-content" + this.num),
                document.getElementById("pass-slide-control" + this.num),
                document.getElementById("pass-slide-tipInfo" + this.num),
                document.getElementById("pass-slide-footer" + this.num),
                document.getElementById("vcode-slide-faceboder" + this.num))
                  , r = document.getElementById("vcode-slide-expression" + this.num)
                  , s = document.getElementById("vcode-slide-button" + this.num)
                  , c = document.getElementById("vcode-slide-bottom" + this.num)
                  , f = document.getElementById("vcode-slide-cover" + this.num)
                  , h = document.getElementById("vcode-slide-loading" + this.num)
                  , m = s.offsetWidth
                  , v = document.getElementById("vcode-slide-bottom-p" + this.num)
                  , g = document.getElementById("vcode-slide-cover-p" + this.num)
                  , b = document.getElementById("vcode-slide-button-p" + this.num)
                  , x = document.getElementById("vcode-slide-bottom-tips" + this.num);
                n(".vcode-slide-bottom").width() - n(".vcode-slide-button").width(),
                t.conf.slideConfig && "square" === t.conf.slideConfig.borderRadius && (u(s, "borderRadius"),
                u(c, "borderRadius"),
                u(f, "borderRadius"));
                var w = function() {
                    var e = 0;
                    e = y && 9 >= +y ? 500 : 700,
                    h.style.display = "block",
                    t.setData && (t.setData("ac_c", 1),
                    t.setData("backstr", t.conf.backstr),
                    t.postData(function(n) {
                        var i = n;
                        h.style.display = "none",
                        1 === i.op ? (t.successUiCallback(),
                        setTimeout(function() {
                            t.conf.verifySuccessFn && t.conf.verifySuccessFn(i),
                            t.stopSlideWebview(!1)
                        }, e)) : t.errorUiCallback()
                    }, "submit")),
                    k = !1
                }
                  , T = function() {
                    l(v, "hide"),
                    u(f, "vcode-transition"),
                    f.style.width = m + "px",
                    u(s, "vcode-transition"),
                    u(r, "vcode-transition"),
                    u(v, "vcode-transition"),
                    l(b, "opacity0");
                    var e = 0;
                    y && 9 >= +y ? (s.style["margin-left"] = "",
                    r.style["margin-left"] = "",
                    v.style["margin-left"] = "",
                    e = 0) : (s.style.transform = "translateX(0)",
                    s.style.msTransform = "translateX(0)",
                    s.style.webkitTransform = "translateX(0)",
                    s.style.MozTransform = "translateX(0)",
                    s.style.OTransform = "translateX(0)",
                    r.style.transform = "translateX(0)",
                    r.style.msTransform = "translateX(0)",
                    r.style.webkitTransform = "translateX(0)",
                    r.style.MozTransform = "translateX(0)",
                    r.style.OTransform = "translateX(0)",
                    v.style.transform = "translateX(0)",
                    v.style.msTransform = "translateX(0)",
                    v.style.webkitTransform = "translateX(0)",
                    v.style.MozTransform = "translateX(0)",
                    v.style.OTransform = "translateX(0)",
                    e = 300),
                    setTimeout(function() {
                        l(s, "vcode-transition"),
                        l(s, "vcode-slide-button-focus"),
                        t.conf.slideConfig && t.conf.slideConfig.color && n(s).removeAttr("style"),
                        l(s, "vcode-slide-button-error"),
                        l(f, "vcode-slide-cover-error"),
                        l(f, "vcode-transition"),
                        l(o, "vcode-slidefaceboder-horizontal"),
                        l(r, "vcode-transition"),
                        l(v, "vcode-transition"),
                        t.store.styAnimaBtn && l(x, "hide")
                    }, e),
                    k = !1
                };
                t.successUiCallback = function() {
                    u(s, "vcode-slide-button-success"),
                    u(o, "vcode-slide-faceborder-animate"),
                    u(g, "vcode-transition"),
                    l(g, "coverp-hide"),
                    u(g, "coverp-show"),
                    g.innerHTML = t.lang.verifySuccess
                }
                ,
                t.errorUiCallback = function(e) {
                    t.conf.slideConfig && t.conf.slideConfig.color && (f.style.background = "",
                    s.style.background = "",
                    s.style.border = "");
                    var n = e || {};
                    u(s, "vcode-slide-button-error"),
                    u(f, "vcode-slide-cover-error"),
                    l(o, "vcode-slide-faceborder-animate"),
                    u(o, "vcode-slidefaceboder-horizontal"),
                    u(g, "vcode-transition"),
                    l(g, "coverp-hide"),
                    u(g, "coverp-show"),
                    g.innerHTML = n.msg || t.lang.verifyError,
                    setTimeout(function() {
                        l(g, "coverp-show"),
                        u(g, "coverp-hide"),
                        g.innerHTML = "",
                        T(),
                        t.finish = !1,
                        t.start = !1
                    }, 1e3)
                }
                ;
                var C = function(n) {
                    if (t.finish || E)
                        return !1;
                    t.start = !0,
                    k = !0,
                    n = n || e.event,
                    p(n);
                    var i = n.touches && n.touches[0] || n.changedTouches && n.changedTouches[0] || n;
                    u(s, "vcode-slide-button-focus"),
                    t.conf.slideConfig && t.conf.slideConfig.color && (f.style.background = t.conf.slideConfig.color || "#4b96ea"),
                    t.currentX = i.clientX
                }
                  , S = function(i) {
                    if (t.finish || !t.start)
                        return !1;
                    i = i || e.event,
                    p(i);
                    var o = i.changedTouches && i.changedTouches[0] || i
                      , a = o.clientX - t.currentX
                      , c = n(".vcode-slide-bottom").width() - n(".vcode-slide-button").width();
                    a > 0 && t.store.styAnimaBtn && u(x, "hide"),
                    a >= c - 5 ? (a = c,
                    t.finish = !0,
                    w()) : 0 >= a && (a = 0,
                    t.store.styAnimaBtn && l(x, "hide"));
                    var d = parseFloat(a / c).toFixed(2);
                    f.style.width = a + m + "px",
                    y && 9 >= +y ? (s.style["margin-left"] = a + "px",
                    r.style["margin-left"] = -563 * d + "px",
                    v.style["margin-left"] = -75 + .1 * a + "px") : (s.style.transform = "translateX(" + a + "px)",
                    s.style.msTransform = "translateX(" + a + "px)",
                    s.style.webkitTransform = "translateX(" + a + "px)",
                    s.style.MozTransform = "translateX(" + a + "px)",
                    s.style.OTransform = "translateX(" + a + "px)",
                    r.style.transform = "translateX(-" + 89.5 * d + "%)",
                    r.style.msTransform = "translateX(-" + 89.5 * d + "%)",
                    r.style.webkitTransform = "translateX(-" + 89.5 * d + "%)",
                    r.style.MozTransform = "translateX(-" + 89.5 * d + "%)",
                    r.style.OTransform = "translateX(-" + 89.5 * d + "%)",
                    v.style.transform = "translateX(" + 10 * d + "%)")
                }
                  , D = function(n) {
                    if (!t.start)
                        return !1;
                    t.start = !1,
                    n = n || e.event,
                    p(n);
                    var i = n.changedTouches && n.changedTouches[0] || n
                      , o = i.clientX - this.currentX;
                    return 0 >= o ? (l(s, "vcode-slide-button-focus"),
                    t.conf.slideConfig && t.conf.slideConfig.color && (s.style = ""),
                    l(s, "vcode-slide-button-error")) : t.finish || T(),
                    !1
                };
                a(s, "touchstart", C),
                a(s, "mousedown", C),
                a(i, "touchmove", S),
                a(i, "mousemove", S),
                a(i, "touchend", D),
                a(i, "mouseup", D),
                a(i, "touchcancel", D),
                t.removeVcodeEvent = function() {
                    d(s, "touchstart", C),
                    d(s, "mousedown", C),
                    d(i, "touchmove", S),
                    d(i, "mousemove", S),
                    d(i, "touchend", D),
                    d(i, "mouseup", D),
                    d(i, "touchcancel", D)
                }
            },
            initSpinVcodeEvent: function() {
                function t(e) {
                    i.getStyleInfo(function(t) {
                        var n = document.getElementById("vcode-spin-img" + i.num);
                        n.src = decodeURIComponent(t.data.ext && t.data.ext.img),
                        n.onload = function() {
                            e && e()
                        }
                    })
                }
                var i = this
                  , o = document.getElementById("mod-vcodes" + this.num)
                  , r = document.getElementById("pass-spin-control" + this.num)
                  , s = document.getElementById("vcode-spin-img" + this.num)
                  , c = document.getElementById("vcode-spin-coordinate" + this.num)
                  , f = document.getElementById("vcode-spin-mask" + this.num)
                  , h = document.getElementById("vcode-spin-icon" + this.num)
                  , m = document.getElementById("vcode-spin-button" + this.num)
                  , v = document.getElementById("vcode-spin-bottom" + this.num)
                  , g = (m.offsetWidth,
                document.getElementById("vcode-spin-bottom-p" + this.num),
                document.getElementById("vcode-spin-button-p" + this.num))
                  , y = document.getElementById("vcode-spin-bottom-tips" + this.num);
                i.conf.spinConfig && "square" === i.conf.spinConfig.borderRadius && (u(m, "borderRadius"),
                u(v, "borderRadius"));
                var b = function() {
                    l(m, "vcode-spin-button-focus"),
                    u(m, "vcode-spin-button-loading"),
                    l(f, "hide"),
                    l(h, "hide"),
                    u(h, "vcode-spin-icon-loading"),
                    i.setData && (i.setData("ac_c", +i.percentage),
                    i.setData("backstr", i.conf.backstr || ""),
                    i.postData(function(e) {
                        var t = e;
                        1 === +t.op ? (i.successUiCallback(),
                        setTimeout(function() {
                            i.conf.verifySuccessFn && i.conf.verifySuccessFn(t),
                            i.stopSlideWebview(!1)
                        }, 500)) : i.errorUiCallback()
                    }, "submit")),
                    k = !1
                }
                  , x = function(e) {
                    S && i.toggleDuringIconShow("show"),
                    l(g, "opacity0");
                    var t = 0;
                    m.style.transform = "translateX(0)",
                    m.style.msTransform = "translateX(0)",
                    m.setAttribute("style", "transform:translateX(0)"),
                    t = 300,
                    l(m, "vcode-slide-button-focus"),
                    l(m, "vcode-spin-button-error"),
                    u(f, "hide"),
                    u(h, "hide"),
                    l(h, "vcode-spin-icon-error"),
                    s.style.transform = "",
                    s.style.msTransform = "",
                    e && e(),
                    k = !1,
                    i.store.styAnimaBtn && l(y, "hide")
                };
                i.successUiCallback = function() {
                    l(h, "vcode-spin-icon-loading"),
                    u(h, "vcode-spin-icon-success")
                }
                ,
                i.errorUiCallback = function(e) {
                    l(h, "vcode-spin-icon-loading"),
                    u(h, "vcode-spin-icon-error"),
                    u(r, "vcode-spin-control-horizontal"),
                    l(m, "vcode-spin-button-loading"),
                    S || u(m, "vcode-spin-button-error");
                    var n = 1e3;
                    e && "spinRight" === e.type && (n = 3e3),
                    setTimeout(function() {
                        l(r, "vcode-spin-control-horizontal"),
                        t(function() {
                            x()
                        }),
                        i.finish = !1,
                        i.start = !1,
                        e && "spinRight" === e.type && l(v, "vcode-spin-bottom-top")
                    }, n)
                }
                ;
                var w = function(t) {
                    if (i.finish || E)
                        return !1;
                    i.start = !0,
                    k = !0,
                    t = t || e.event,
                    p(t);
                    var n = t.touches && t.touches[0] || t.changedTouches && t.changedTouches[0] || t;
                    u(m, "vcode-spin-button-focus"),
                    l(c, "hide"),
                    i.currentX = n.clientX
                }
                  , T = function(t) {
                    if (i.finish || !i.start)
                        return !1;
                    t = t || e.event,
                    p(t);
                    var o = t.changedTouches && t.changedTouches[0] || t
                      , r = o.clientX - i.currentX
                      , a = n(".vcode-spin-bottom").width() - n(".vcode-spin-button").width();
                    u(m, "vcode-spin-button-focus"),
                    i.conf.color && (m.style.background = i.conf.color || "#4b96ea",
                    m.style.border = i.conf.color || "#4b96ea"),
                    r > 0 && i.store.styAnimaBtn && u(y, "hide"),
                    r >= a ? r = a : 0 > r && (r = 0,
                    l(m, "vcode-spin-button-focus"),
                    i.conf.color && (m.style = "")),
                    i.percentage = parseFloat(r / a).toFixed(2),
                    s.style.transform = "rotate(" + 360 * i.percentage + "deg)",
                    s.style.msTransform = "rotate(" + 360 * i.percentage + "deg)",
                    s.style.webkitTransform = "rotate(" + 360 * i.percentage + "deg)",
                    s.style.MozTransform = "rotate(" + 360 * i.percentage + "deg)",
                    s.style.OTransform = "rotate(" + 360 * i.percentage + "deg)",
                    m.style.transform = "translateX(" + r + "px)",
                    m.style.msTransform = "translateX(" + r + "px)",
                    m.style.webkitTransform = "translateX(" + r + "px)",
                    m.style.MozTransform = "translateX(" + r + "px)",
                    m.style.OTransform = "translateX(" + r + "px)"
                }
                  , C = function(t) {
                    if (!i.start)
                        return !1;
                    i.start = !1,
                    t = t || e.event,
                    p(t);
                    var o = t.changedTouches && t.changedTouches[0] || t;
                    u(c, "hide");
                    var r = o.clientX - i.currentX
                      , s = n(".vcode-spin-bottom").width() - n(".vcode-spin-button").width();
                    return r >= s ? (r = s,
                    i.finish = !0,
                    l(m, "vcode-spin-button-focus"),
                    l(f, "hide"),
                    l(h, "hide"),
                    u(h, "vcode-spin-icon-loading"),
                    i.errorUiCallback({
                        type: "spinRight"
                    }),
                    u(v, "vcode-spin-bottom-top")) : 0 >= r ? (l(m, "vcode-spin-button-focus"),
                    l(m, "vcode-spin-button-error"),
                    i.store.styAnimaBtn && l(y, "hide")) : i.finish || b(),
                    !1
                };
                a(m, "touchstart", w),
                a(m, "mousedown", w),
                a(o, "touchmove", T),
                a(o, "mousemove", T),
                a(o, "touchend", C),
                a(o, "mouseup", C),
                a(o, "touchcancel", C),
                a(o, "mouseleave", function(e) {
                    i.start === !0 && C(e)
                }),
                i.removeVcodeEvent = function() {
                    d(m, "touchstart", w),
                    d(m, "mousedown", w),
                    d(o, "touchmove", T),
                    d(o, "mousemove", T),
                    d(o, "touchend", C),
                    d(o, "mouseup", C),
                    d(o, "touchcancel", C)
                }
            },
            initDeviceVcodeEvent: function() {
                var e = this;
                e.openDevice = !0
            },
            beginDeviceOrientationEvent: function() {
                function e(e) {
                    if (k = !0,
                    t.firstAlpha || (t.firstAlpha = e.alpha),
                    t.alpha = e.alpha,
                    t.beta = e.beta,
                    t.gamma = e.gamma,
                    t.openDevice) {
                        try {
                            t.handlerDeviceVcodeEvent()
                        } catch (n) {}
                        t.handerDevicePush()
                    }
                }
                var t = this;
                t.gjarr = [],
                t.xArr = [],
                t.yArr = [],
                t.zArr = [];
                try {
                    window.DeviceOrientationEvent && (t.isios = !0,
                    t.store.countnum = 30,
                    window.addEventListener("deviceorientation", e, !1)),
                    t.removeDeviceEvent = function() {
                        d(window, "deviceorientation", e)
                    }
                } catch (n) {
                    alert(n)
                }
            },
            checkDeviceMotionEvent: function(e) {
                var t = this;
                t.isios = !1;
                try {
                    var n = navigator.userAgent.toLowerCase()
                      , i = /os [\d._]*/gi
                      , o = n.match(i)
                      , r = (o + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".")
                      , s = r.split(".");
                    return s[0] > 12 && s[1] > 2 ? void (e && e()) : (n.indexOf("android") > -1 && v() && v() > 7 && t.beginDeviceOrientationEvent(),
                    void (e && e()))
                } catch (a) {
                    e && e()
                }
            },
            handlerDeviceVcodeEvent: function() {
                var e = this
                  , t = n(".vcode-device-pointer")
                  , i = e.firstAlpha - e.alpha
                  , o = "";
                o = i > 180 ? i - 360 : -270 > i ? i + 360 : i,
                o = o.toFixed(2);
                var s = 1
                  , a = o * s
                  , c = Math.abs(a) - Math.abs(o);
                return e.newRotate = a,
                Math.abs(i) > 90 - c && Math.abs(i) < 270 + c ? !1 : (w || (w = r(function(t) {
                    e.isStop(t)
                }, 50)),
                w(a),
                void (t && t[0] && t[0].style && (t[0].style.transform = "rotate(" + a + "deg)",
                t[0].style.msTransform = "rotate(" + a + "deg)",
                t[0].style.webkitTransform = "rotate(" + a + "deg)",
                t[0].style.MozTransform = "rotate(" + a + "deg)",
                t[0].style.OTransform = "rotate(" + a + "deg)")))
            },
            handerDevicePush: function() {
                var e = this;
                C || (C = r(function() {
                    e.xArr.push(e.alpha.toFixed()),
                    e.yArr.push(e.beta.toFixed()),
                    e.zArr.push(e.gamma.toFixed());
                    var t = {};
                    t.x = parseInt(e.alpha, 10),
                    t.y = parseInt(e.beta, 10),
                    t.z = parseInt(e.gamma, 10),
                    t.t = i(),
                    e.rzData.sb.push(t),
                    e.reportedOpportunity(),
                    document.querySelector("#alpha1") && (document.querySelector("#alpha1").innerHTML = e.xArr),
                    document.querySelector("#beta1") && (document.querySelector("#beta1").innerHTML = e.yArr),
                    document.querySelector("#gamma1") && (document.querySelector("#gamma1").innerHTML = e.zArr)
                }, 200)),
                C()
            },
            isStop: function(e) {
                var t = this;
                document.querySelector("#newRotate") && (document.querySelector("#newRotate").innerHTML = e),
                t.gjarr[T % 10] = e,
                T++;
                var i = Math.max.apply(null, t.gjarr)
                  , o = Math.min.apply(null, t.gjarr)
                  , r = document.getElementById("vcode-device-tip" + t.num)
                  , s = document.getElementById("vcode-device-mask" + t.num)
                  , a = document.getElementById("vcode-device-statusImg" + t.num);
                Math.abs(i - o) > 3 && (t.userChange = !0,
                u(s, "hide"),
                u(r, "hide"),
                n(".vcode-device-pointer").show(),
                u(a, "vcode-device-icon-loading"),
                l(a, "vcode-device-icon-error"),
                l(a, "vcode-device-icon-success")),
                t.gjarr.length > 5 && t.isLongStay,
                Math.abs(i - o) < 1.5 && t.gjarr.length > 5 && (Math.round(i) > 2 || Math.round(o) < -2) && t.userChange && (t.userChange = !1,
                t.deviceFinish()),
                document.querySelector("#arrtest") && (document.querySelector("#arrtest").innerHTML = t.gjarr)
            },
            deviceFinish: function() {
                var e = this
                  , t = document.getElementById("vcode-device-tip" + e.num)
                  , i = document.getElementById("vcode-device-mask" + e.num)
                  , o = document.getElementById("vcode-device-statusImg" + e.num)
                  , r = 500;
                e.userChange = !1,
                l(i, "hide"),
                l(t, "hide"),
                e.setData && (e.setData("sbc_c", e.newRotate),
                e.setData("backstr", e.conf.backstr),
                n(".vcode-device-pointer").hide(),
                e.postData(function(s) {
                    function a() {
                        e.getStyleInfo(function(t) {
                            var n = document.getElementById("vcode-device-img-answer" + e.num)
                              , i = document.getElementById("pass-device-tipInfo2" + e.num);
                            i.innerHTML = decodeURIComponent(t.data.ext && t.data.ext.title),
                            n.src = decodeURIComponent(t.data.ext && t.data.ext.img)
                        })
                    }
                    var c = s;
                    1 === c.op ? setTimeout(function() {
                        l(o, "vcode-device-icon-loading"),
                        u(o, "vcode-device-icon-success"),
                        setTimeout(function() {
                            e.conf.verifySuccessFn && e.conf.verifySuccessFn(c),
                            e.stopSlideWebview(!1),
                            e.removeDeviceEvent && e.removeDeviceEvent()
                        }, r)
                    }, 200) : setTimeout(function() {
                        l(o, "vcode-device-icon-loading"),
                        u(o, "vcode-device-icon-error");
                        var e = 1e3;
                        setTimeout(function() {
                            l(o, "vcode-device-icon-error"),
                            u(t, "hide"),
                            u(i, "hide"),
                            n(".vcode-device-pointer").show(),
                            a()
                        }, e)
                    }, 200)
                }, "submit"),
                k = !1)
            },
            initQrcodeEvent: function() {
                var e = this;
                e.getQrcodeImg(function() {
                    e.getQrstatus()
                }, function() {})
            },
            getQrstatus: function() {
                var e = this
                  , t = document.getElementById("vcode-qrcode-tip" + e.num)
                  , i = document.getElementById("vcode-qrcode-mask" + e.num)
                  , o = document.getElementById("vcode-qrcode-statusImg" + e.num)
                  , r = document.getElementById("vcode-qrcode-statusMsg" + e.num)
                  , s = document.getElementById("vcode-qrcode-errmsg" + e.num)
                  , a = {};
                a.ak = e.conf.ak,
                a.tk = e.dsData.tk,
                a.qrsign = e.conf.ext.qrsign,
                n.ajax({
                    url: e.store.qrstatus,
                    dataType: "jsonp",
                    data: a,
                    success: function(a) {
                        if (n(".vcode-qrcode-faceboder")[0])
                            if (0 === a.code) {
                                l(i, "hide"),
                                l(t, "hide"),
                                l(o, "vcode-qrcode-mask-loadingImg"),
                                u(o, "vcode-qrcode-mask-successImg"),
                                r.innerHTML = "验证成功";
                                var c = {};
                                c.ds = a.ds,
                                c.tk = a.tk,
                                e.conf.verifySuccessFn && e.conf.verifySuccessFn(c)
                            } else
                                1 === a.code ? (u(t, "hide"),
                                u(i, "hide"),
                                s.innerHTML = a.msg || "扫码失败，请刷新后扫码重试",
                                1 === a.reload && e.initQrcodeEvent()) : 2 === a.code ? (s.innerHTML = "",
                                l(t, "hide"),
                                l(i, "hide"),
                                u(o, "vcode-qrcode-mask-loadingImg"),
                                r.innerHTML = "等待验证…",
                                e.getQrstatus()) : e.getQrstatus()
                    },
                    error: function() {
                        s.innerHTML = "网络错误，请稍后再试"
                    }
                })
            },
            getQrcodeImg: function(e, t) {
                var n = this
                  , i = document.getElementById("vcode-qrcode-img" + n.num)
                  , o = document.getElementById("vcode-qrcode-errmsg" + n.num);
                n.getStyleInfo(function(t) {
                    i.src = t.data.ext.img,
                    e && e()
                }, function(e) {
                    o.innerHTML = e.msg || "扫码失败，请重新验证",
                    t && t()
                }, {
                    type: "qrcode"
                })
            },
            getDataAsync: function(t) {
                var n = e.PassMachine.haveMkd || this;
                n.store.count > 0 ? n.postData(function(e) {
                    e.data ? t && t(e) : t && t(n.dsData)
                }) : t && t(n.dsData)
            },
            createDialogMask: function() {
                var e = this;
                e.maskDiv = document.createElement("div"),
                e.maskDiv.className = "vcode-mask pass-machine-hide",
                e.maskDiv.id = "vcode-mask" + this.num,
                document.body.appendChild(e.maskDiv)
            },
            createDialogBody: function() {
                var e = this;
                e.bodyDiv = document.createElement("div"),
                e.bodyDiv.className = "wap" === e.devicetype ? "vcode-body vcode-body-css3 pass-machine-hide" : "spin" === e.conf.type ? "vcode-body vcode-body-spin pass-machine-hide" : "vcode-body pass-machine-hide",
                e.bodyDiv.id = "vcode-body" + this.num,
                document.body.appendChild(e.bodyDiv)
            },
            removeMask: function(e) {
                var t = this;
                if (t.maskDiv && document.body.removeChild(t.maskDiv),
                t.bodyDiv && document.body.removeChild(t.bodyDiv),
                e) {
                    var i = n(".mod-vcodes")[0];
                    i && i.parentNode && i.parentNode.removeChild(i),
                    t.odiv = null
                }
                t.maskDiv = null,
                t.bodyDiv = null,
                t.removeVcodeEvent && t.removeVcodeEvent(),
                t.finish = !1,
                t.start = !1,
                t.firstAlpha = ""
            },
            encrypt: function(e) {
                var t = "760ef7b6appsapi0"
                  , n = PassMachine.CryptoJS.enc.Utf8.parse(t)
                  , i = PassMachine.CryptoJS.enc.Utf8.parse(e)
                  , o = PassMachine.CryptoJS.AES.encrypt(i, n, {
                    mode: PassMachine.CryptoJS.mode.ECB,
                    padding: PassMachine.CryptoJS.pad.Pkcs7
                });
                return o.toString()
            },
            setData: function(t, n) {
                var i = e.PassMachine.haveMkd || this;
                i.rzData[t] = n
            },
            errorData: function() {
                this.dsData.ds = "iggkFNY5Z8odmaVWu0oRjsneNUhc65bBgY7IeyRqe6S++zbDz3JlV99QbnGMERCkRH57fRY77K4T0r5PTAk/Xoi21K1UoYgRM089xf8wdrl+FzMEwt13AaO5Dq4G0u5I49RTUPfwr4/MuB6b6hOcPwItorZarOJw+1yy7pp4LUUwmk1kqy5LXHQ2vXVRRIzBmEYkAd4LEMWB3TNN/Ehb/v2mIBHtw+V8prcJi637saZP2NZL2qVarc81Js3Ls1ICNon1ghv5Vly2IjvClAg1oFtLIYqQN5/lojRrg11ajOBnVkwrC/MbVsQ+paftGrOl9PHjBbRFq8+5LwAmVysU+83iZLMBC3M7NhKKlIiTJpvDAR+KrUAG1HP8GTH8L8mrVjuno9MIfX6oloTXcpZHfXZln2FwwTosFnTHZ0iaqdnCklq7W+xuSUyIYydL72/hi34W2QIyEh6PilSgac2Mgjh80ygOrj9hrR7+0rlc5c+cpeILmTUI3FNlzY0degKH81V3dYUSNO27zcZ2KG3Zxb4I5SCnxYbEigiJJQkemNNAT+GiX2Je2XR9Xivcn0pFkdxEReHb2uHStsvaCaI+AxmHXc8PBV6X6CdAtRtSLnA+NBYrRrVGBmZIQd112r6eSjJeO7R9ItEXpKnAb2jhyZ+dyBeQNYee3JeyNZpofxAsXyHLFkrKOqaceZBzhvxL9SZwADneJcVSYvLS9Fbf9RAo0FHHrAFjphDmLe3wPcIgyiAKnpvgw58Z13bY1LYKEM3QYt+U974GYlahfJpett38TeJSbfcn3f1sk1+Q00jb46ivKadXTztpkD0z++pKJtMCgc5pLJg40QLb6wbTpqa4wVULYnCouw6/9H5+COUDC0RKfLDhYzdcCCygSGlA",
                this.dsData.tk = "3338yojP4YX/CPjsNQpSEls3CchneKTLKfp9KvCfkBgWNCk="
            },
            getDs: function() {
                return this.dsData.ds
            },
            getTk: function() {
                return this.dsData.tk
            },
            reportedOpportunity: function() {
                var e = this;
                ++e.store.count,
                e.store.count > e.store.countnum && e.postData()
            },
            animationTipsFn: function() {
                var e = this
                  , t = 400;
                if (this.store.styAnimaBtn)
                    if ("spin" === e.conf.type) {
                        var n = document.getElementById("vcode-spin-button" + this.num);
                        u(n, "vcode-spin-control-horizontal-2"),
                        u(n, "vcode-spin-button-focus"),
                        E = !0,
                        setTimeout(function() {
                            l(n, "vcode-spin-control-horizontal-2"),
                            l(n, "vcode-spin-button-focus"),
                            E = !1
                        }, t)
                    } else if ("slide" === e.conf.type) {
                        var i = document.getElementById("vcode-slide-button" + this.num)
                          , o = document.getElementById("vcode-slide-cover" + this.num);
                        e.conf.slideConfig && e.conf.slideConfig.color && (o.style.backgroundColor = e.conf.slideConfig.color || "#4b96ea"),
                        u(i, "vcode-slidefaceboder-horizontal-2"),
                        u(o, "slideCoverWidth"),
                        E = !0,
                        setTimeout(function() {
                            l(i, "vcode-slidefaceboder-horizontal-2"),
                            l(o, "slideCoverWidth"),
                            E = !1
                        }, t)
                    }
            },
            toggleDuringIconShow: function(e) {
                try {
                    var t = document.getElementById("vcode-spin-mask" + this.num)
                      , n = document.getElementById("vcode-spin-icon" + this.num)
                      , i = document.getElementById("vcode-spin-button" + this.num);
                    "hide" === e ? (l(n, "vcode-spin-icon-success"),
                    t.style.visibility = n.style.visibility = "hidden",
                    S = !0) : (t.style.visibility = n.style.visibility = "visible",
                    u(i, "vcode-spin-button-error"),
                    S = !1)
                } catch (o) {}
            }
        }
    } catch (A) {}
}(window, document, PassMachine.$)

e = {"cl":[{"x":664,"y":515,"t":1720684099276}],"mv":[{"fx":803,"fy":437,"t":1720684098937,"bf":2},{"fx":669,"fy":512,"t":1720684099096,"bf":2}],"sc":[],"kb":[],"sb":[],"sd":[],"sm":[],"cr":{"screenTop":0,"screenLeft":-2,"clientWidth":810,"clientHeight":886,"screenWidth":1920,"screenHeight":1080,"availWidth":1920,"availHeight":1032,"outerWidth":1930,"outerHeight":992,"scrollWidth":1250,"scrollHeight":1250},"simu":0,"ac_c":0}

AAA = PassMachine.mkd.prototype.encrypt(JSON.stringify(e))
console.log(AAA)