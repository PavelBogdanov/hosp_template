function scaleVideoContainer() {
    var t = $(window).height() + 5,
        e = parseInt(t) + "px";
    $(".homepage-hero-module").css("height", e)
}

function initBannerVideoSize(t) {
    $(t).each(function () {
        $(this).data("height", $(this).height()), $(this).data("width", $(this).width())
    }), scaleBannerVideoSize(t)
}

function scaleBannerVideoSize(t) {
    var n, s, e = $(window).width(),
        i = $(window).height() + 5;
    $(t).each(function () {
        var t = $(this).data("height") / $(this).data("width");
        $(this).width(e), 1e3 > e && (s = i, n = s / t, $(this).css({
            "margin-top": 0,
            "margin-left": -(n - e) / 2 + "px"
        }), $(this).width(n).height(s)), $(".homepage-hero-module .video-container video").addClass("fadeIn animated")
    })
}


function upTo(t, e) {
    for (e = e.toLowerCase(); t && t.parentNode;)
        if (t = t.parentNode, t.tagName && t.tagName.toLowerCase() == e) return t;
    return null
}(function () {
    "use strict";
    var t = this,
        e = t.Chart,
        i = function (t) {
            this.canvas = t.canvas, this.ctx = t;
            var i = function (t, e) {
                    return t["offset" + e] ? t["offset" + e] : document.defaultView.getComputedStyle(t).getPropertyValue(e)
                },
                s = this.width = i(t.canvas, "Width") || t.canvas.width,
                a = this.height = i(t.canvas, "Height") || t.canvas.height;
            return s = this.width = t.canvas.width, a = this.height = t.canvas.height, this.aspectRatio = this.width / this.height, n.retinaScale(this), this
        };
    i.defaults = {
        global: {
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            showScale: !0,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleIntegersOnly: !0,
            scaleBeginAtZero: !1,
            scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            responsive: !1,
            maintainAspectRatio: !0,
            showTooltips: !0,
            customTooltips: !1,
            tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
            tooltipFillColor: "rgba(0,0,0,0.8)",
            tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipFontSize: 14,
            tooltipFontStyle: "normal",
            tooltipFontColor: "#fff",
            tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipTitleFontSize: 14,
            tooltipTitleFontStyle: "bold",
            tooltipTitleFontColor: "#fff",
            tooltipTitleTemplate: "<%= label%>",
            tooltipYPadding: 6,
            tooltipXPadding: 6,
            tooltipCaretSize: 8,
            tooltipCornerRadius: 6,
            tooltipXOffset: 10,
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
            multiTooltipTemplate: "<%= value %>",
            multiTooltipKeyBackground: "#fff",
            segmentColorDefault: ["#A6CEE3", "#1F78B4", "#B2DF8A", "#33A02C", "#FB9A99", "#E31A1C", "#FDBF6F", "#FF7F00", "#CAB2D6", "#6A3D9A", "#B4B482", "#B15928"],
            segmentHighlightColorDefaults: ["#CEF6FF", "#47A0DC", "#DAFFB2", "#5BC854", "#FFC2C1", "#FF4244", "#FFE797", "#FFA728", "#F2DAFE", "#9265C2", "#DCDCAA", "#D98150"],
            onAnimationProgress: function () {},
            onAnimationComplete: function () {}
        }
    }, i.types = {};
    var n = i.helpers = {},
        s = n.each = function (t, e, i) {
            var n = Array.prototype.slice.call(arguments, 3);
            if (t)
                if (t.length === +t.length) {
                    var s;
                    for (s = 0; s < t.length; s++) e.apply(i, [t[s], s].concat(n))
                } else
                    for (var a in t) e.apply(i, [t[a], a].concat(n))
        },
        a = n.clone = function (t) {
            var e = {};
            return s(t, function (i, n) {
                t.hasOwnProperty(n) && (e[n] = i)
            }), e
        },
        o = n.extend = function (t) {
            return s(Array.prototype.slice.call(arguments, 1), function (e) {
                s(e, function (i, n) {
                    e.hasOwnProperty(n) && (t[n] = i)
                })
            }), t
        },
        r = n.merge = function (t, e) {
            var i = Array.prototype.slice.call(arguments, 0);
            return i.unshift({}), o.apply(null, i)
        },
        l = n.indexOf = function (t, e) {
            if (Array.prototype.indexOf) return t.indexOf(e);
            for (var i = 0; i < t.length; i++)
                if (t[i] === e) return i;
            return -1
        },
        d = (n.where = function (t, e) {
            var i = [];
            return n.each(t, function (t) {
                e(t) && i.push(t)
            }), i
        }, n.findNextWhere = function (t, e, i) {
            i || (i = -1);
            for (var n = i + 1; n < t.length; n++) {
                var s = t[n];
                if (e(s)) return s
            }
        }, n.findPreviousWhere = function (t, e, i) {
            i || (i = t.length);
            for (var n = i - 1; n >= 0; n--) {
                var s = t[n];
                if (e(s)) return s
            }
        }, n.inherits = function (t) {
            var e = this,
                i = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
                    return e.apply(this, arguments)
                },
                n = function () {
                    this.constructor = i
                };
            return n.prototype = e.prototype, i.prototype = new n, i.extend = d, t && o(i.prototype, t), i.__super__ = e.prototype, i
        }),
        f = n.noop = function () {},
        p = n.uid = function () {
            var t = 0;
            return function () {
                return "chart-" + t++
            }
        }(),
        v = n.warn = function (t) {
            window.console && "function" == typeof window.console.warn && console.warn(t)
        },
        g = n.amd = "function" == typeof define && define.amd,
        m = n.isNumber = function (t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        },
        y = n.max = function (t) {
            return Math.max.apply(Math, t)
        },
        b = n.min = function (t) {
            return Math.min.apply(Math, t)
        },
        x = (n.cap = function (t, e, i) {
            if (m(e)) {
                if (t > e) return e
            } else if (m(i) && i > t) return i;
            return t
        }, n.getDecimalPlaces = function (t) {
            if (t % 1 !== 0 && m(t)) {
                var e = t.toString();
                if (e.indexOf("e-") < 0) return e.split(".")[1].length;
                if (e.indexOf(".") < 0) return parseInt(e.split("e-")[1]);
                var i = e.split(".")[1].split("e-");
                return i[0].length + parseInt(i[1])
            }
            return 0
        }),
        C = n.radians = function (t) {
            return t * (Math.PI / 180)
        },
        S = (n.getAngleFromPoint = function (t, e) {
            var i = e.x - t.x,
                n = e.y - t.y,
                s = Math.sqrt(i * i + n * n),
                a = 2 * Math.PI + Math.atan2(n, i);
            return 0 > i && 0 > n && (a += 2 * Math.PI), {
                angle: a,
                distance: s
            }
        }, n.aliasPixel = function (t) {
            return t % 2 === 0 ? 0 : .5
        }),
        T = (n.splineCurve = function (t, e, i, n) {
            var s = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)),
                a = Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)),
                o = n * s / (s + a),
                r = n * a / (s + a);
            return {
                inner: {
                    x: e.x - o * (i.x - t.x),
                    y: e.y - o * (i.y - t.y)
                },
                outer: {
                    x: e.x + r * (i.x - t.x),
                    y: e.y + r * (i.y - t.y)
                }
            }
        }, n.calculateOrderOfMagnitude = function (t) {
            return Math.floor(Math.log(t) / Math.LN10)
        }),
        M = (n.calculateScaleRange = function (t, e, i, n, a) {
            var o = 2,
                r = Math.floor(e / (1.5 * i)),
                l = o >= r,
                c = [];
            s(t, function (t) {
                null == t || c.push(t)
            });
            var u = b(c),
                h = y(c);
            h === u && (h += .5, u >= .5 && !n ? u -= .5 : h += .5);
            for (var d = Math.abs(h - u), f = T(d), p = Math.ceil(h / (1 * Math.pow(10, f))) * Math.pow(10, f), v = n ? 0 : Math.floor(u / (1 * Math.pow(10, f))) * Math.pow(10, f), g = p - v, m = Math.pow(10, f), w = Math.round(g / m);
                (w > r || r > 2 * w) && !l;)
                if (w > r) m *= 2, w = Math.round(g / m), w % 1 !== 0 && (l = !0);
                else if (a && f >= 0) {
                if (m / 2 % 1 !== 0) break;
                m /= 2, w = Math.round(g / m)
            } else m /= 2, w = Math.round(g / m);
            return l && (w = o, m = g / w), {
                steps: w,
                stepValue: m,
                min: v,
                max: v + w * m
            }
        }, n.template = function (t, e) {
            function n(t, e) {
                var n = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : i[t] = i[t];
                return e ? n(e) : n
            }
            if (t instanceof Function) return t(e);
            var i = {};
            return n(t, e)
        }),
        E = (n.generateLabels = function (t, e, i, n) {
            var a = new Array(e);
            return t && s(a, function (e, s) {
                a[s] = M(t, {
                    value: i + n * (s + 1)
                })
            }), a
        }, n.easingEffects = {
            linear: function (t) {
                return t
            },
            easeInQuad: function (t) {
                return t * t
            },
            easeOutQuad: function (t) {
                return -1 * t * (t - 2)
            },
            easeInOutQuad: function (t) {
                return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1)
            },
            easeInCubic: function (t) {
                return t * t * t
            },
            easeOutCubic: function (t) {
                return 1 * ((t = t / 1 - 1) * t * t + 1)
            },
            easeInOutCubic: function (t) {
                return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            easeInQuart: function (t) {
                return t * t * t * t
            },
            easeOutQuart: function (t) {
                return -1 * ((t = t / 1 - 1) * t * t * t - 1)
            },
            easeInOutQuart: function (t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)
            },
            easeInQuint: function (t) {
                return 1 * (t /= 1) * t * t * t * t
            },
            easeOutQuint: function (t) {
                return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
            },
            easeInOutQuint: function (t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            easeInSine: function (t) {
                return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
            },
            easeOutSine: function (t) {
                return 1 * Math.sin(t / 1 * (Math.PI / 2))
            },
            easeInOutSine: function (t) {
                return -0.5 * (Math.cos(Math.PI * t / 1) - 1)
            },
            easeInExpo: function (t) {
                return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
            },
            easeOutExpo: function (t) {
                return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
            },
            easeInOutExpo: function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
            },
            easeInCirc: function (t) {
                return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
            },
            easeOutCirc: function (t) {
                return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
            },
            easeInOutCirc: function (t) {
                return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            easeInElastic: function (t) {
                var e = 1.70158,
                    i = 0,
                    n = 1;
                return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)))
            },
            easeOutElastic: function (t) {
                var e = 1.70158,
                    i = 0,
                    n = 1;
                return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / i) + 1)
            },
            easeInOutElastic: function (t) {
                var e = 1.70158,
                    i = 0,
                    n = 1;
                return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = 1 * (.3 * 1.5)), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), 1 > t ? -.5 * (n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i) * .5 + 1)
            },
            easeInBack: function (t) {
                var e = 1.70158;
                return 1 * (t /= 1) * t * ((e + 1) * t - e)
            },
            easeOutBack: function (t) {
                var e = 1.70158;
                return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
            },
            easeInOutBack: function (t) {
                var e = 1.70158;
                return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
            },
            easeInBounce: function (t) {
                return 1 - E.easeOutBounce(1 - t)
            },
            easeOutBounce: function (t) {
                return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            },
            easeInOutBounce: function (t) {
                return .5 > t ? .5 * E.easeInBounce(2 * t) : .5 * E.easeOutBounce(2 * t - 1) + .5
            }
        }),
        L = n.requestAnimFrame = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                return window.setTimeout(t, 1e3 / 60)
            }
        }(),
        V = (n.cancelAnimFrame = function () {
            return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (t) {
                return window.clearTimeout(t, 1e3 / 60)
            }
        }(), n.animationLoop = function (t, e, i, n, s, a) {
            var o = 0,
                r = E[i] || E.linear,
                l = function () {
                    o++;
                    var i = o / e,
                        c = r(i);
                    t.call(a, c, i, o), n.call(a, c, i), e > o ? a.animationFrame = L(l) : s.apply(a)
                };
            L(l)
        }, n.getRelativePosition = function (t) {
            var e, i, n = t.originalEvent || t,
                s = t.currentTarget || t.srcElement,
                a = s.getBoundingClientRect();
            return n.touches ? (e = n.touches[0].clientX - a.left, i = n.touches[0].clientY - a.top) : (e = n.clientX - a.left, i = n.clientY - a.top), {
                x: e,
                y: i
            }
        }, n.addEvent = function (t, e, i) {
            t.addEventListener ? t.addEventListener(e, i) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
        }),
        D = n.removeEvent = function (t, e, i) {
            t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = f
        },
        W = (n.bindEvents = function (t, e, i) {
            t.events || (t.events = {}), s(e, function (e) {
                t.events[e] = function () {
                    i.apply(t, arguments)
                }, V(t.chart.canvas, e, t.events[e])
            })
        }, n.unbindEvents = function (t, e) {
            s(e, function (e, i) {
                D(t.chart.canvas, i, e)
            })
        }),
        _ = n.getMaximumWidth = function (t) {
            var e = t.parentNode,
                i = parseInt($(e, "padding-left")) + parseInt($(e, "padding-right"));
            return e.clientWidth - i
        },
        H = n.getMaximumHeight = function (t) {
            var e = t.parentNode,
                i = parseInt($(e, "padding-bottom")) + parseInt($(e, "padding-top"));
            return e.clientHeight - i
        },
        $ = n.getStyle = function (t, e) {
            return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
        },
        j = (n.getMaximumSize = n.getMaximumWidth, n.retinaScale = function (t) {
            var e = t.ctx,
                i = t.canvas.width,
                n = t.canvas.height;
            window.devicePixelRatio && (e.canvas.style.width = i + "px", e.canvas.style.height = n + "px", e.canvas.height = n * window.devicePixelRatio, e.canvas.width = i * window.devicePixelRatio, e.scale(window.devicePixelRatio, window.devicePixelRatio))
        }),
        N = n.clear = function (t) {
            t.ctx.clearRect(0, 0, t.width, t.height)
        },
        q = n.fontString = function (t, e, i) {
            return e + " " + t + "px " + i
        },
        X = n.longestText = function (t, e, i) {
            t.font = e;
            var n = 0;
            return s(i, function (e) {
                var i = t.measureText(e).width;
                n = i > n ? i : n
            }), n
        },
        Y = n.drawRoundedRectangle = function (t, e, i, n, s, a) {
            t.beginPath(), t.moveTo(e + a, i), t.lineTo(e + n - a, i), t.quadraticCurveTo(e + n, i, e + n, i + a), t.lineTo(e + n, i + s - a), t.quadraticCurveTo(e + n, i + s, e + n - a, i + s), t.lineTo(e + a, i + s), t.quadraticCurveTo(e, i + s, e, i + s - a), t.lineTo(e, i + a), t.quadraticCurveTo(e, i, e + a, i), t.closePath()
        };
    i.instances = {}, i.Type = function (t, e, n) {
        this.options = e, this.chart = n, this.id = p(), i.instances[this.id] = this, e.responsive && this.resize(), this.initialize.call(this, t)
    }, o(i.Type.prototype, {
        initialize: function () {
            return this
        },
        clear: function () {
            return N(this.chart), this
        },
        stop: function () {
            return i.animationService.cancelAnimation(this), this
        },
        resize: function (t) {
            this.stop();
            var e = this.chart.canvas,
                i = _(this.chart.canvas),
                n = this.options.maintainAspectRatio ? i / this.chart.aspectRatio : H(this.chart.canvas);
            return e.width = this.chart.width = i, e.height = this.chart.height = n, j(this.chart), "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)), this
        },
        reflow: f,
        render: function (t) {
            if (t && this.reflow(), this.options.animation && !t) {
                var e = new i.Animation;
                e.numSteps = this.options.animationSteps, e.easing = this.options.animationEasing, e.render = function (t, e) {
                    var i = n.easingEffects[e.easing],
                        s = e.currentStep / e.numSteps,
                        a = i(s);
                    t.draw(a, s, e.currentStep)
                }, e.onAnimationProgress = this.options.onAnimationProgress, e.onAnimationComplete = this.options.onAnimationComplete, i.animationService.addAnimation(this, e)
            } else this.draw(), this.options.onAnimationComplete.call(this);
            return this
        },
        generateLegend: function () {
            return M(this.options.legendTemplate, this)
        },
        destroy: function () {
            this.clear(), W(this, this.events);
            var t = this.chart.canvas;
            t.width = this.chart.width, t.height = this.chart.height, t.style.removeProperty ? (t.style.removeProperty("width"), t.style.removeProperty("height")) : (t.style.removeAttribute("width"), t.style.removeAttribute("height")), delete i.instances[this.id]
        },
        showTooltip: function (t, e) {
            "undefined" == typeof this.activeElements && (this.activeElements = []);
            var a = function (t) {
                var e = !1;
                return t.length !== this.activeElements.length ? e = !0 : (s(t, function (t, i) {
                    t !== this.activeElements[i] && (e = !0)
                }, this), e)
            }.call(this, t);
            if (a || e) {
                if (this.activeElements = t, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), t.length > 0)
                    if (this.datasets && this.datasets.length > 1) {
                        for (var o, r, c = this.datasets.length - 1; c >= 0 && (o = this.datasets[c].points || this.datasets[c].bars || this.datasets[c].segments, r = l(o, t[0]), -1 === r); c--);
                        var u = [],
                            h = [],
                            d = function (t) {
                                var i, o, l, c, d, e = [],
                                    s = [],
                                    a = [];
                                return n.each(this.datasets, function (t) {
                                    i = t.points || t.bars || t.segments, i[r] && i[r].hasValue() && e.push(i[r])
                                }), n.each(e, function (t) {
                                    s.push(t.x), a.push(t.y), u.push(n.template(this.options.multiTooltipTemplate, t)), h.push({
                                        fill: t._saved.fillColor || t.fillColor,
                                        stroke: t._saved.strokeColor || t.strokeColor
                                    })
                                }, this), d = b(a), l = y(a), c = b(s), o = y(s), {
                                    x: c > this.chart.width / 2 ? c : o,
                                    y: (d + l) / 2
                                }
                            }.call(this, r);
                        new i.MultiTooltip({
                            x: d.x,
                            y: d.y,
                            xPadding: this.options.tooltipXPadding,
                            yPadding: this.options.tooltipYPadding,
                            xOffset: this.options.tooltipXOffset,
                            fillColor: this.options.tooltipFillColor,
                            textColor: this.options.tooltipFontColor,
                            fontFamily: this.options.tooltipFontFamily,
                            fontStyle: this.options.tooltipFontStyle,
                            fontSize: this.options.tooltipFontSize,
                            titleTextColor: this.options.tooltipTitleFontColor,
                            titleFontFamily: this.options.tooltipTitleFontFamily,
                            titleFontStyle: this.options.tooltipTitleFontStyle,
                            titleFontSize: this.options.tooltipTitleFontSize,
                            cornerRadius: this.options.tooltipCornerRadius,
                            labels: u,
                            legendColors: h,
                            legendColorBackground: this.options.multiTooltipKeyBackground,
                            title: M(this.options.tooltipTitleTemplate, t[0]),
                            chart: this.chart,
                            ctx: this.chart.ctx,
                            custom: this.options.customTooltips
                        }).draw()
                    } else s(t, function (t) {
                        var e = t.tooltipPosition();
                        new i.Tooltip({
                            x: Math.round(e.x),
                            y: Math.round(e.y),
                            xPadding: this.options.tooltipXPadding,
                            yPadding: this.options.tooltipYPadding,
                            fillColor: this.options.tooltipFillColor,
                            textColor: this.options.tooltipFontColor,
                            fontFamily: this.options.tooltipFontFamily,
                            fontStyle: this.options.tooltipFontStyle,
                            fontSize: this.options.tooltipFontSize,
                            caretHeight: this.options.tooltipCaretSize,
                            cornerRadius: this.options.tooltipCornerRadius,
                            text: M(this.options.tooltipTemplate, t),
                            chart: this.chart,
                            custom: this.options.customTooltips
                        }).draw()
                    }, this);
                return this
            }
        },
        toBase64Image: function () {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
        }
    }), i.Type.extend = function (t) {
        var e = this,
            n = function () {
                return e.apply(this, arguments)
            };
        if (n.prototype = a(e.prototype), o(n.prototype, t), n.extend = i.Type.extend, t.name || e.prototype.name) {
            var s = t.name || e.prototype.name,
                l = i.defaults[e.prototype.name] ? a(i.defaults[e.prototype.name]) : {};
            i.defaults[s] = o(l, t.defaults), i.types[s] = n, i.prototype[s] = function (t, e) {
                var a = r(i.defaults.global, i.defaults[s], e || {});
                return new n(t, a, this)
            }
        } else v("Name not provided for this chart, so it hasn't been registered");
        return e
    }, i.Element = function (t) {
        o(this, t), this.initialize.apply(this, arguments), this.save()
    }, o(i.Element.prototype, {
        initialize: function () {},
        restore: function (t) {
            return t ? s(t, function (t) {
                this[t] = this._saved[t]
            }, this) : o(this, this._saved), this
        },
        save: function () {
            return this._saved = a(this), delete this._saved._saved, this
        },
        update: function (t) {
            return s(t, function (t, e) {
                this._saved[e] = this[e], this[e] = t
            }, this), this
        },
        transition: function (t, e) {
            return s(t, function (t, i) {
                this[i] = (t - this._saved[i]) * e + this._saved[i]
            }, this), this
        },
        tooltipPosition: function () {
            return {
                x: this.x,
                y: this.y
            }
        },
        hasValue: function () {
            return m(this.value)
        }
    }), i.Element.extend = d, i.Point = i.Element.extend({
        display: !0,
        inRange: function (t, e) {
            var i = this.hitDetectionRadius + this.radius;
            return Math.pow(t - this.x, 2) + Math.pow(e - this.y, 2) < Math.pow(i, 2)
        },
        draw: function () {
            if (this.display) {
                var t = this.ctx;
                t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.stroke()
            }
        }
    }), i.Arc = i.Element.extend({
        inRange: function (t, e) {
            var i = n.getAngleFromPoint(this, {
                    x: t,
                    y: e
                }),
                s = i.angle % (2 * Math.PI),
                a = (2 * Math.PI + this.startAngle) % (2 * Math.PI),
                o = (2 * Math.PI + this.endAngle) % (2 * Math.PI) || 360,
                r = a > o ? o >= s || s >= a : s >= a && o >= s,
                l = i.distance >= this.innerRadius && i.distance <= this.outerRadius;
            return r && l
        },
        tooltipPosition: function () {
            var t = this.startAngle + (this.endAngle - this.startAngle) / 2,
                e = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
            return {
                x: this.x + Math.cos(t) * e,
                y: this.y + Math.sin(t) * e
            }
        },
        draw: function (t) {
            var i = this.ctx;
            i.beginPath(), i.arc(this.x, this.y, this.outerRadius < 0 ? 0 : this.outerRadius, this.startAngle, this.endAngle), i.arc(this.x, this.y, this.innerRadius < 0 ? 0 : this.innerRadius, this.endAngle, this.startAngle, !0), i.closePath(), i.strokeStyle = this.strokeColor, i.lineWidth = this.strokeWidth, i.fillStyle = this.fillColor, i.fill(), i.lineJoin = "bevel", this.showStroke && i.stroke()
        }
    }), i.Rectangle = i.Element.extend({
        draw: function () {
            var t = this.ctx,
                e = this.width / 2,
                i = this.x - e,
                n = this.x + e,
                s = this.base - (this.base - this.y),
                a = this.strokeWidth / 2;
            this.showStroke && (i += a, n -= a, s += a), t.beginPath(), t.fillStyle = this.fillColor, t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(i, this.base), t.lineTo(i, s), t.lineTo(n, s), t.lineTo(n, this.base), t.fill(), this.showStroke && t.stroke()
        },
        height: function () {
            return this.base - this.y
        },
        inRange: function (t, e) {
            return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && e >= this.y && e <= this.base
        }
    }), i.Animation = i.Element.extend({
        currentStep: null,
        numSteps: 60,
        easing: "",
        render: null,
        onAnimationProgress: null,
        onAnimationComplete: null
    }), i.Tooltip = i.Element.extend({
        draw: function () {
            var t = this.chart.ctx;
            t.font = q(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
            var e = this.caretPadding = 2,
                i = t.measureText(this.text).width + 2 * this.xPadding,
                n = this.fontSize + 2 * this.yPadding,
                s = n + this.caretHeight + e;
            this.x + i / 2 > this.chart.width ? this.xAlign = "left" : this.x - i / 2 < 0 && (this.xAlign = "right"), this.y - s < 0 && (this.yAlign = "below");
            var a = this.x - i / 2,
                o = this.y - s;
            if (t.fillStyle = this.fillColor, this.custom) this.custom(this);
            else {
                switch (this.yAlign) {
                case "above":
                    t.beginPath(), t.moveTo(this.x, this.y - e), t.lineTo(this.x + this.caretHeight, this.y - (e + this.caretHeight)), t.lineTo(this.x - this.caretHeight, this.y - (e + this.caretHeight)), t.closePath(), t.fill();
                    break;
                case "below":
                    o = this.y + e + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + e), t.lineTo(this.x + this.caretHeight, this.y + e + this.caretHeight), t.lineTo(this.x - this.caretHeight, this.y + e + this.caretHeight), t.closePath(), t.fill()
                }
                switch (this.xAlign) {
                case "left":
                    a = this.x - i + (this.cornerRadius + this.caretHeight);
                    break;
                case "right":
                    a = this.x - (this.cornerRadius + this.caretHeight)
                }
                Y(t, a, o, i, n, this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.text, a + i / 2, o + n / 2)
            }
        }
    }), i.MultiTooltip = i.Element.extend({
        initialize: function () {
            this.font = q(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = q(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.titleHeight = this.title ? 1.5 * this.titleFontSize : 0, this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + this.titleHeight, this.ctx.font = this.titleFont;
            var t = this.ctx.measureText(this.title).width,
                e = X(this.ctx, this.font, this.labels) + this.fontSize + 3,
                i = y([e, t]);
            this.width = i + 2 * this.xPadding;
            var n = this.height / 2;
            this.y - n < 0 ? this.y = n : this.y + n > this.chart.height && (this.y = this.chart.height - n), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
        },
        getLineHeight: function (t) {
            var e = this.y - this.height / 2 + this.yPadding,
                i = t - 1;
            return 0 === t ? e + this.titleHeight / 3 : e + (1.5 * this.fontSize * i + this.fontSize / 2) + this.titleHeight
        },
        draw: function () {
            if (this.custom) this.custom(this);
            else {
                Y(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                var t = this.ctx;
                t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), t.font = this.font, n.each(this.labels, function (e, i) {
                    t.fillStyle = this.textColor, t.fillText(e, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(i + 1)), t.fillStyle = this.legendColorBackground, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize), t.fillStyle = this.legendColors[i].fill, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                }, this)
            }
        }
    }), i.Scale = i.Element.extend({
        initialize: function () {
            this.fit()
        },
        buildYLabels: function () {
            this.yLabels = [];
            for (var t = x(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(M(this.templateString, {
                value: (this.min + e * this.stepValue).toFixed(t)
            }));
            this.yLabelWidth = this.display && this.showLabels ? X(this.ctx, this.font, this.yLabels) + 10 : 0
        },
        addXLabel: function (t) {
            this.xLabels.push(t), this.valuesCount++, this.fit()
        },
        removeXLabel: function () {
            this.xLabels.shift(), this.valuesCount--, this.fit()
        },
        fit: function () {
            this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
            var i, t = this.endPoint,
                e = this.endPoint - this.startPoint;
            for (this.calculateYRange(e), this.buildYLabels(), this.calculateXLabelRotation(); e > this.endPoint - this.startPoint;) e = this.endPoint - this.startPoint, i = this.yLabelWidth, this.calculateYRange(e), this.buildYLabels(), i < this.yLabelWidth && (this.endPoint = t, this.calculateXLabelRotation())
        },
        calculateXLabelRotation: function () {
            this.ctx.font = this.font;
            var i, n, t = this.ctx.measureText(this.xLabels[0]).width,
                e = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
            if (this.xScalePaddingRight = e / 2 + 3, this.xScalePaddingLeft = t / 2 > this.yLabelWidth ? t / 2 : this.yLabelWidth, this.xLabelRotation = 0, this.display) {
                var a, s = X(this.ctx, this.font, this.xLabels);
                this.xLabelWidth = s;
                for (var r = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > r && 0 === this.xLabelRotation || this.xLabelWidth > r && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) a = Math.cos(C(this.xLabelRotation)), i = a * t, n = a * e, i + this.fontSize / 2 > this.yLabelWidth && (this.xScalePaddingLeft = i + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = a * s;
                this.xLabelRotation > 0 && (this.endPoint -= Math.sin(C(this.xLabelRotation)) * s + 3)
            } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
        },
        calculateYRange: f,
        drawingArea: function () {
            return this.startPoint - this.endPoint
        },
        calculateY: function (t) {
            var e = this.drawingArea() / (this.min - this.max);
            return this.endPoint - e * (t - this.min)
        },
        calculateX: function (t) {
            var i = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
                n = i / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
                s = n * t + this.xScalePaddingLeft;
            return this.offsetGridLines && (s += n / 2), Math.round(s)
        },
        update: function (t) {
            n.extend(this, t), this.fit()
        },
        draw: function () {
            var t = this.ctx,
                e = (this.endPoint - this.startPoint) / this.steps,
                i = Math.round(this.xScalePaddingLeft);
            this.display && (t.fillStyle = this.textColor, t.font = this.font, s(this.yLabels, function (s, a) {
                var o = this.endPoint - e * a,
                    r = Math.round(o),
                    l = this.showHorizontalLines;
                t.textAlign = "right", t.textBaseline = "middle", this.showLabels && t.fillText(s, i - 10, o), 0 !== a || l || (l = !0), l && t.beginPath(), a > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), r += n.aliasPixel(t.lineWidth), l && (t.moveTo(i, r), t.lineTo(this.width, r), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(i - 5, r), t.lineTo(i, r), t.stroke(), t.closePath()
            }, this), s(this.xLabels, function (e, i) {
                var n = this.calculateX(i) + S(this.lineWidth),
                    s = this.calculateX(i - (this.offsetGridLines ? .5 : 0)) + S(this.lineWidth),
                    a = this.xLabelRotation > 0,
                    o = this.showVerticalLines;
                0 !== i || o || (o = !0), o && t.beginPath(), i > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), o && (t.moveTo(s, this.endPoint), t.lineTo(s, this.startPoint - 3), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(s, this.endPoint), t.lineTo(s, this.endPoint + 5), t.stroke(), t.closePath(), t.save(), t.translate(n, a ? this.endPoint + 12 : this.endPoint + 8), t.rotate(-1 * C(this.xLabelRotation)), t.font = this.font, t.textAlign = a ? "right" : "center", t.textBaseline = a ? "middle" : "top", t.fillText(e, 0, 0), t.restore()
            }, this))
        }
    }), i.RadialScale = i.Element.extend({
        initialize: function () {
            this.size = b([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
        },
        calculateCenterOffset: function (t) {
            var e = this.drawingArea / (this.max - this.min);
            return (t - this.min) * e
        },
        update: function () {
            this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels()
        },
        buildYLabels: function () {
            this.yLabels = [];
            for (var t = x(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(M(this.templateString, {
                value: (this.min + e * this.stepValue).toFixed(t)
            }))
        },
        getCircumference: function () {
            return 2 * Math.PI / this.valuesCount
        },
        setScaleSize: function () {
            var e, i, n, s, o, r, c, u, h, d, f, p, t = b([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
                a = this.width,
                l = 0;
            for (this.ctx.font = q(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), i = 0; i < this.valuesCount; i++) e = this.getPointPosition(i, t), n = this.ctx.measureText(M(this.templateString, {
                value: this.labels[i]
            })).width + 5, 0 === i || i === this.valuesCount / 2 ? (s = n / 2, e.x + s > a && (a = e.x + s, o = i), e.x - s < l && (l = e.x - s, c = i)) : i < this.valuesCount / 2 ? e.x + n > a && (a = e.x + n, o = i) : i > this.valuesCount / 2 && e.x - n < l && (l = e.x - n, c = i);
            h = l, d = Math.ceil(a - this.width), r = this.getIndexAngle(o), u = this.getIndexAngle(c), f = d / Math.sin(r + Math.PI / 2), p = h / Math.sin(u + Math.PI / 2), f = m(f) ? f : 0, p = m(p) ? p : 0, this.drawingArea = t - (p + f) / 2, this.setCenterPoint(p, f)
        },
        setCenterPoint: function (t, e) {
            var i = this.width - e - this.drawingArea,
                n = t + this.drawingArea;
            this.xCenter = (n + i) / 2, this.yCenter = this.height / 2
        },
        getIndexAngle: function (t) {
            var e = 2 * Math.PI / this.valuesCount;
            return t * e - Math.PI / 2
        },
        getPointPosition: function (t, e) {
            var i = this.getIndexAngle(t);
            return {
                x: Math.cos(i) * e + this.xCenter,
                y: Math.sin(i) * e + this.yCenter
            }
        },
        draw: function () {
            if (this.display) {
                var t = this.ctx;
                if (s(this.yLabels, function (e, i) {
                        if (i > 0) {
                            var a, n = i * (this.drawingArea / this.steps),
                                s = this.yCenter - n;
                            if (this.lineWidth > 0)
                                if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, this.lineArc) t.beginPath(), t.arc(this.xCenter, this.yCenter, n, 0, 2 * Math.PI), t.closePath(), t.stroke();
                                else {
                                    t.beginPath();
                                    for (var o = 0; o < this.valuesCount; o++) a = this.getPointPosition(o, this.calculateCenterOffset(this.min + i * this.stepValue)), 0 === o ? t.moveTo(a.x, a.y) : t.lineTo(a.x, a.y);
                                    t.closePath(), t.stroke()
                                }
                            if (this.showLabels) {
                                if (t.font = q(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                    var r = t.measureText(e).width;
                                    t.fillStyle = this.backdropColor, t.fillRect(this.xCenter - r / 2 - this.backdropPaddingX, s - this.fontSize / 2 - this.backdropPaddingY, r + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                                }
                                t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, t.fillText(e, this.xCenter, s)
                            }
                        }
                    }, this), !this.lineArc) {
                    t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;
                    for (var e = this.valuesCount - 1; e >= 0; e--) {
                        var i = null,
                            n = null;
                        if (this.angleLineWidth > 0 && (i = this.calculateCenterOffset(this.max), n = this.getPointPosition(e, i), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(n.x, n.y), t.stroke(), t.closePath()), this.backgroundColors && this.backgroundColors.length == this.valuesCount) {
                            null == i && (i = this.calculateCenterOffset(this.max)), null == n && (n = this.getPointPosition(e, i));
                            var a = this.getPointPosition(0 === e ? this.valuesCount - 1 : e - 1, i),
                                o = this.getPointPosition(e === this.valuesCount - 1 ? 0 : e + 1, i),
                                r = {
                                    x: (a.x + n.x) / 2,
                                    y: (a.y + n.y) / 2
                                },
                                l = {
                                    x: (n.x + o.x) / 2,
                                    y: (n.y + o.y) / 2
                                };
                            t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(r.x, r.y), t.lineTo(n.x, n.y), t.lineTo(l.x, l.y), t.fillStyle = this.backgroundColors[e], t.fill(), t.closePath()
                        }
                        var c = this.getPointPosition(e, this.calculateCenterOffset(this.max) + 5);
                        t.font = q(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), t.fillStyle = this.pointLabelFontColor;
                        var u = this.labels.length,
                            h = this.labels.length / 2,
                            d = h / 2,
                            f = d > e || e > u - d,
                            p = e === d || e === u - d;
                        0 === e ? t.textAlign = "center" : e === h ? t.textAlign = "center" : h > e ? t.textAlign = "left" : t.textAlign = "right", p ? t.textBaseline = "middle" : f ? t.textBaseline = "bottom" : t.textBaseline = "top", t.fillText(this.labels[e], c.x, c.y)
                    }
                }
            }
        }
    }), i.animationService = {
        frameDuration: 17,
        animations: [],
        dropFrames: 0,
        addAnimation: function (t, e) {
            for (var i = 0; i < this.animations.length; ++i)
                if (this.animations[i].chartInstance === t) return void(this.animations[i].animationObject = e);
            this.animations.push({
                chartInstance: t,
                animationObject: e
            }), 1 == this.animations.length && n.requestAnimFrame.call(window, this.digestWrapper)
        },
        cancelAnimation: function (t) {
            var e = n.findNextWhere(this.animations, function (e) {
                return e.chartInstance === t
            });
            e && this.animations.splice(e, 1)
        },
        digestWrapper: function () {
            i.animationService.startDigest.call(i.animationService)
        },
        startDigest: function () {
            var t = Date.now(),
                e = 0;
            this.dropFrames > 1 && (e = Math.floor(this.dropFrames), this.dropFrames -= e);
            for (var i = 0; i < this.animations.length; i++) null === this.animations[i].animationObject.currentStep && (this.animations[i].animationObject.currentStep = 0), this.animations[i].animationObject.currentStep += 1 + e, this.animations[i].animationObject.currentStep > this.animations[i].animationObject.numSteps && (this.animations[i].animationObject.currentStep = this.animations[i].animationObject.numSteps), this.animations[i].animationObject.render(this.animations[i].chartInstance, this.animations[i].animationObject), this.animations[i].animationObject.currentStep == this.animations[i].animationObject.numSteps && (this.animations[i].animationObject.onAnimationComplete.call(this.animations[i].chartInstance), this.animations.splice(i, 1), i--);
            var s = Date.now(),
                a = s - t - this.frameDuration,
                o = a / this.frameDuration;
            o > 1 && (this.dropFrames += o), this.animations.length > 0 && n.requestAnimFrame.call(window, this.digestWrapper)
        }
    }, n.addEvent(window, "resize", function () {
        var t;
        return function () {
            clearTimeout(t), t = setTimeout(function () {
                s(i.instances, function (t) {
                    t.options.responsive && t.resize(t.render, !0)
                })
            }, 50)
        }
    }()), g ? define(function () {
        return i
    }) : "object" == typeof module && module.exports && (module.exports = i), t.Chart = i, i.noConflict = function () {
        return t.Chart = e, i
    }
}).call(this),
    function () {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                scaleBeginAtZero: !0,
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: !0,
                scaleShowVerticalLines: !0,
                barShowStroke: !0,
                barStrokeWidth: 2,
                barValueSpacing: 5,
                barDatasetSpacing: 1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>'
            };
        e.Type.extend({
            name: "Bar",
            defaults: n,
            initialize: function (t) {
                var n = this.options;
                this.ScaleClass = e.Scale.extend({
                    offsetGridLines: !0,
                    calculateBarX: function (t, e, i) {
                        var s = this.calculateBaseWidth(),
                            a = this.calculateX(i) - s / 2,
                            o = this.calculateBarWidth(t);
                        return a + o * e + e * n.barDatasetSpacing + o / 2
                    },
                    calculateBaseWidth: function () {
                        return this.calculateX(1) - this.calculateX(0) - 2 * n.barValueSpacing
                    },
                    calculateBarWidth: function (t) {
                        var e = this.calculateBaseWidth() - (t - 1) * n.barDatasetSpacing;
                        return e / t
                    }
                }), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function (t) {
                    var e = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
                    this.eachBars(function (t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), i.each(e, function (t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(e)
                }), this.BarClass = e.Rectangle.extend({
                    strokeWidth: this.options.barStrokeWidth,
                    showStroke: this.options.barShowStroke,
                    ctx: this.chart.ctx
                }), i.each(t.datasets, function (e, n) {
                    var s = {
                        label: e.label || null,
                        fillColor: e.fillColor,
                        strokeColor: e.strokeColor,
                        bars: []
                    };
                    this.datasets.push(s), i.each(e.data, function (i, n) {
                        s.bars.push(new this.BarClass({
                            value: i,
                            label: t.labels[n],
                            datasetLabel: e.label,
                            strokeColor: e.strokeColor,
                            fillColor: e.fillColor,
                            highlightFill: e.highlightFill || e.fillColor,
                            highlightStroke: e.highlightStroke || e.strokeColor
                        }))
                    }, this)
                }, this), this.buildScale(t.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function (t, e, n) {
                    i.extend(t, {
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        x: this.scale.calculateBarX(this.datasets.length, n, e),
                        y: this.scale.endPoint
                    }), t.save()
                }, this), this.render()
            },
            update: function () {
                this.scale.update(), i.each(this.activeElements, function (t) {
                    t.restore(["fillColor", "strokeColor"])
                }), this.eachBars(function (t) {
                    t.save()
                }), this.render()
            },
            eachBars: function (t) {
                i.each(this.datasets, function (e, n) {
                    i.each(e.bars, t, this, n)
                }, this)
            },
            getBarsAtEvent: function (t) {
                for (var a, e = [], n = i.getRelativePosition(t), s = function (t) {
                        e.push(t.bars[a])
                    }, o = 0; o < this.datasets.length; o++)
                    for (a = 0; a < this.datasets[o].bars.length; a++)
                        if (this.datasets[o].bars[a].inRange(n.x, n.y)) return i.each(this.datasets, s), e;
                return e
            },
            buildScale: function (t) {
                var e = this,
                    n = function () {
                        var t = [];
                        return e.eachBars(function (e) {
                            t.push(e.value)
                        }), t
                    },
                    s = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: t.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function (t) {
                            var e = i.calculateScaleRange(n(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            i.extend(this, e)
                        },
                        xLabels: t,
                        font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        showHorizontalLines: this.options.scaleShowHorizontalLines,
                        showVerticalLines: this.options.scaleShowVerticalLines,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && i.extend(s, {
                    calculateYRange: i.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new this.ScaleClass(s)
            },
            addData: function (t, e) {
                i.each(t, function (t, i) {
                    this.datasets[i].bars.push(new this.BarClass({
                        value: t,
                        label: e,
                        datasetLabel: this.datasets[i].label,
                        x: this.scale.calculateBarX(this.datasets.length, i, this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        base: this.scale.endPoint,
                        strokeColor: this.datasets[i].strokeColor,
                        fillColor: this.datasets[i].fillColor
                    }))
                }, this), this.scale.addXLabel(e), this.update()
            },
            removeData: function () {
                this.scale.removeXLabel(), i.each(this.datasets, function (t) {
                    t.bars.shift()
                }, this), this.update()
            },
            reflow: function () {
                i.extend(this.BarClass.prototype, {
                    y: this.scale.endPoint,
                    base: this.scale.endPoint
                });
                var t = i.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(t)
            },
            draw: function (t) {
                var e = t || 1;
                this.clear();
                this.chart.ctx;
                this.scale.draw(e), i.each(this.datasets, function (t, n) {
                    i.each(t.bars, function (t, i) {
                        t.hasValue() && (t.base = this.scale.endPoint, t.transition({
                            x: this.scale.calculateBarX(this.datasets.length, n, i),
                            y: this.scale.calculateY(t.value),
                            width: this.scale.calculateBarWidth(this.datasets.length)
                        }, e).draw())
                    }, this)
                }, this)
            }
        })
    }.call(this),
    function () {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                percentageInnerCutout: 50,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>'
            };
        e.Type.extend({
            name: "Doughnut",
            defaults: n,
            initialize: function (t) {
                this.segments = [], this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = e.Arc.extend({
                    ctx: this.chart.ctx,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function (t) {
                    var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    i.each(this.segments, function (t) {
                        t.restore(["fillColor"])
                    }), i.each(e, function (t) {
                        t.fillColor = t.highlightColor
                    }), this.showTooltip(e)
                }), this.calculateTotal(t), i.each(t, function (e, i) {
                    e.color || (e.color = "hsl(" + 360 * i / t.length + ", 100%, 50%)"), this.addData(e, i, !0)
                }, this), this.render()
            },
            getSegmentsAtEvent: function (t) {
                var e = [],
                    n = i.getRelativePosition(t);
                return i.each(this.segments, function (t) {
                    t.inRange(n.x, n.y) && e.push(t)
                }, this), e
            },
            addData: function (t, i, n) {
                var s = void 0 !== i ? i : this.segments.length;
                "undefined" == typeof t.color && (t.color = e.defaults.global.segmentColorDefault[s % e.defaults.global.segmentColorDefault.length], t.highlight = e.defaults.global.segmentHighlightColorDefaults[s % e.defaults.global.segmentHighlightColorDefaults.length]), this.segments.splice(s, 0, new this.SegmentArc({
                    value: t.value,
                    outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                    innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                    fillColor: t.color,
                    highlightColor: t.highlight || t.color,
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    startAngle: 1.5 * Math.PI,
                    circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value),
                    label: t.label
                })), n || (this.reflow(), this.update())
            },
            calculateCircumference: function (t) {
                return this.total > 0 ? 2 * Math.PI * (t / this.total) : 0
            },
            calculateTotal: function (t) {
                this.total = 0, i.each(t, function (t) {
                    this.total += Math.abs(t.value)
                }, this)
            },
            update: function () {
                this.calculateTotal(this.segments), i.each(this.activeElements, function (t) {
                    t.restore(["fillColor"])
                }), i.each(this.segments, function (t) {
                    t.save()
                }), this.render()
            },
            removeData: function (t) {
                var e = i.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(e, 1), this.reflow(), this.update()
            },
            reflow: function () {
                i.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, i.each(this.segments, function (t) {
                    t.update({
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    })
                }, this)
            },
            draw: function (t) {
                var e = t ? t : 1;
                this.clear(), i.each(this.segments, function (t, i) {
                    t.transition({
                        circumference: this.calculateCircumference(t.value),
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    }, e), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle)
                }, this)
            }
        }), e.types.Doughnut.extend({
            name: "Pie",
            defaults: i.merge(n, {
                percentageInnerCutout: 0
            })
        })
    }.call(this),
    function () {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: !0,
                scaleShowVerticalLines: !0,
                bezierCurve: !0,
                bezierCurveTension: .4,
                pointDot: !0,
                pointDotRadius: 4,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>',
                offsetGridLines: !1
            };
        e.Type.extend({
            name: "Line",
            defaults: n,
            initialize: function (t) {
                this.PointClass = e.Point.extend({
                    offsetGridLines: this.options.offsetGridLines,
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx,
                    inRange: function (t) {
                        return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                    }
                }), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function (t) {
                    var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function (t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), i.each(e, function (t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(e)
                }), i.each(t.datasets, function (e) {
                    var n = {
                        label: e.label || null,
                        fillColor: e.fillColor,
                        strokeColor: e.strokeColor,
                        pointColor: e.pointColor,
                        pointStrokeColor: e.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(n), i.each(e.data, function (i, s) {
                        n.points.push(new this.PointClass({
                            value: i,
                            label: t.labels[s],
                            datasetLabel: e.label,
                            strokeColor: e.pointStrokeColor,
                            fillColor: e.pointColor,
                            highlightFill: e.pointHighlightFill || e.pointColor,
                            highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
                        }))
                    }, this), this.buildScale(t.labels), this.eachPoints(function (t, e) {
                        i.extend(t, {
                            x: this.scale.calculateX(e),
                            y: this.scale.endPoint
                        }), t.save()
                    }, this)
                }, this), this.render()
            },
            update: function () {
                this.scale.update(), i.each(this.activeElements, function (t) {
                    t.restore(["fillColor", "strokeColor"])
                }), this.eachPoints(function (t) {
                    t.save()
                }), this.render()
            },
            eachPoints: function (t) {
                i.each(this.datasets, function (e) {
                    i.each(e.points, t, this)
                }, this)
            },
            getPointsAtEvent: function (t) {
                var e = [],
                    n = i.getRelativePosition(t);
                return i.each(this.datasets, function (t) {
                    i.each(t.points, function (t) {
                        t.inRange(n.x, n.y) && e.push(t)
                    })
                }, this), e
            },
            buildScale: function (t) {
                var n = this,
                    s = function () {
                        var t = [];
                        return n.eachPoints(function (e) {
                            t.push(e.value)
                        }), t
                    },
                    a = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        offsetGridLines: this.options.offsetGridLines,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: t.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function (t) {
                            var e = i.calculateScaleRange(s(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            i.extend(this, e)
                        },
                        xLabels: t,
                        font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        showHorizontalLines: this.options.scaleShowHorizontalLines,
                        showVerticalLines: this.options.scaleShowVerticalLines,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && i.extend(a, {
                    calculateYRange: i.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new e.Scale(a)
            },
            addData: function (t, e) {
                i.each(t, function (t, i) {
                    this.datasets[i].points.push(new this.PointClass({
                        value: t,
                        label: e,
                        datasetLabel: this.datasets[i].label,
                        x: this.scale.calculateX(this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        strokeColor: this.datasets[i].pointStrokeColor,
                        fillColor: this.datasets[i].pointColor
                    }))
                }, this), this.scale.addXLabel(e), this.update()
            },
            removeData: function () {
                this.scale.removeXLabel(), i.each(this.datasets, function (t) {
                    t.points.shift()
                }, this), this.update()
            },
            reflow: function () {
                var t = i.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(t)
            },
            draw: function (t) {
                var e = t || 1;
                this.clear();
                var n = this.chart.ctx,
                    s = function (t) {
                        return null !== t.value
                    },
                    a = function (t, e, n) {
                        return i.findNextWhere(e, s, n) || t
                    },
                    o = function (t, e, n) {
                        return i.findPreviousWhere(e, s, n) || t
                    };
                this.scale && (this.scale.draw(e), i.each(this.datasets, function (t) {
                    var r = i.where(t.points, s);
                    i.each(t.points, function (t, i) {
                        t.hasValue() && t.transition({
                            y: this.scale.calculateY(t.value),
                            x: this.scale.calculateX(i)
                        }, e)
                    }, this), this.options.bezierCurve && i.each(r, function (t, e) {
                        var n = e > 0 && e < r.length - 1 ? this.options.bezierCurveTension : 0;
                        t.controlPoints = i.splineCurve(o(t, r, e), t, a(t, r, e), n), t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint), t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint)
                    }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), i.each(r, function (t, e) {
                        if (0 === e) n.moveTo(t.x, t.y);
                        else if (this.options.bezierCurve) {
                            var i = o(t, r, e);
                            n.bezierCurveTo(i.controlPoints.outer.x, i.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y)
                        } else n.lineTo(t.x, t.y)
                    }, this), this.options.datasetStroke && n.stroke(), this.options.datasetFill && r.length > 0 && (n.lineTo(r[r.length - 1].x, this.scale.endPoint), n.lineTo(r[0].x, this.scale.endPoint), n.fillStyle = t.fillColor, n.closePath(), n.fill()), i.each(r, function (t) {
                        t.draw()
                    })
                }, this))
            }
        })
    }.call(this),
    function () {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                scaleShowLabelBackdrop: !0,
                scaleBackdropColor: "rgba(255,255,255,0.75)",
                scaleBeginAtZero: !0,
                scaleBackdropPaddingY: 2,
                scaleBackdropPaddingX: 2,
                scaleShowLine: !0,
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>'
            };
        e.Type.extend({
            name: "PolarArea",
            defaults: n,
            initialize: function (t) {
                this.segments = [], this.SegmentArc = e.Arc.extend({
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    ctx: this.chart.ctx,
                    innerRadius: 0,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.scale = new e.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    lineArc: !0,
                    width: this.chart.width,
                    height: this.chart.height,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    valuesCount: t.length
                }), this.updateScaleRange(t), this.scale.update(), i.each(t, function (t, e) {
                    this.addData(t, e, !0)
                }, this), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function (t) {
                    var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    i.each(this.segments, function (t) {
                        t.restore(["fillColor"])
                    }), i.each(e, function (t) {
                        t.fillColor = t.highlightColor
                    }), this.showTooltip(e)
                }), this.render()
            },
            getSegmentsAtEvent: function (t) {
                var e = [],
                    n = i.getRelativePosition(t);
                return i.each(this.segments, function (t) {
                    t.inRange(n.x, n.y) && e.push(t)
                }, this), e
            },
            addData: function (t, e, i) {
                var n = e || this.segments.length;
                this.segments.splice(n, 0, new this.SegmentArc({
                    fillColor: t.color,
                    highlightColor: t.highlight || t.color,
                    label: t.label,
                    value: t.value,
                    outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value),
                    circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                    startAngle: 1.5 * Math.PI
                })), i || (this.reflow(), this.update())
            },
            removeData: function (t) {
                var e = i.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(e, 1), this.reflow(), this.update()
            },
            calculateTotal: function (t) {
                this.total = 0, i.each(t, function (t) {
                    this.total += t.value
                }, this), this.scale.valuesCount = this.segments.length
            },
            updateScaleRange: function (t) {
                var e = [];
                i.each(t, function (t) {
                    e.push(t.value)
                });
                var n = this.options.scaleOverride ? {
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                } : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                i.extend(this.scale, n, {
                    size: i.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                })
            },
            update: function () {
                this.calculateTotal(this.segments), i.each(this.segments, function (t) {
                    t.save()
                }), this.reflow(), this.render()
            },
            reflow: function () {
                i.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.updateScaleRange(this.segments), this.scale.update(), i.extend(this.scale, {
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), i.each(this.segments, function (t) {
                    t.update({
                        outerRadius: this.scale.calculateCenterOffset(t.value)
                    })
                }, this)
            },
            draw: function (t) {
                var e = t || 1;
                this.clear(), i.each(this.segments, function (t, i) {
                    t.transition({
                        circumference: this.scale.getCircumference(),
                        outerRadius: this.scale.calculateCenterOffset(t.value)
                    }, e), t.endAngle = t.startAngle + t.circumference, 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle), t.draw()
                }, this), this.scale.draw()
            }
        })
    }.call(this),
    function () {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers;
        e.Type.extend({
            name: "Radar",
            defaults: {
                scaleShowLine: !0,
                angleShowLineOut: !0,
                scaleShowLabels: !1,
                scaleBeginAtZero: !0,
                angleLineColor: "rgba(0,0,0,.1)",
                angleLineWidth: 1,
                pointLabelFontFamily: "'Arial'",
                pointLabelFontStyle: "normal",
                pointLabelFontSize: 10,
                pointLabelFontColor: "#666",
                pointDot: !0,
                pointDotRadius: 3,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>'
            },
            initialize: function (t) {
                this.PointClass = e.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx
                }), this.datasets = [], this.buildScale(t), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function (t) {
                    var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function (t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), i.each(e, function (t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(e)
                }), i.each(t.datasets, function (e) {
                    var n = {
                        label: e.label || null,
                        fillColor: e.fillColor,
                        strokeColor: e.strokeColor,
                        pointColor: e.pointColor,
                        pointStrokeColor: e.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(n), i.each(e.data, function (i, s) {
                        var a;
                        this.scale.animation || (a = this.scale.getPointPosition(s, this.scale.calculateCenterOffset(i))), n.points.push(new this.PointClass({
                            value: i,
                            label: t.labels[s],
                            datasetLabel: e.label,
                            x: this.options.animation ? this.scale.xCenter : a.x,
                            y: this.options.animation ? this.scale.yCenter : a.y,
                            strokeColor: e.pointStrokeColor,
                            fillColor: e.pointColor,
                            highlightFill: e.pointHighlightFill || e.pointColor,
                            highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
                        }))
                    }, this)
                }, this), this.render()
            },
            eachPoints: function (t) {
                i.each(this.datasets, function (e) {
                    i.each(e.points, t, this)
                }, this)
            },
            getPointsAtEvent: function (t) {
                var e = i.getRelativePosition(t),
                    n = i.getAngleFromPoint({
                        x: this.scale.xCenter,
                        y: this.scale.yCenter
                    }, e),
                    s = 2 * Math.PI / this.scale.valuesCount,
                    a = Math.round((n.angle - 1.5 * Math.PI) / s),
                    o = [];
                return (a >= this.scale.valuesCount || 0 > a) && (a = 0), n.distance <= this.scale.drawingArea && i.each(this.datasets, function (t) {
                    o.push(t.points[a])
                }), o
            },
            buildScale: function (t) {
                this.scale = new e.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backgroundColors: this.options.scaleBackgroundColors,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    angleLineColor: this.options.angleLineColor,
                    angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                    pointLabelFontColor: this.options.pointLabelFontColor,
                    pointLabelFontSize: this.options.pointLabelFontSize,
                    pointLabelFontFamily: this.options.pointLabelFontFamily,
                    pointLabelFontStyle: this.options.pointLabelFontStyle,
                    height: this.chart.height,
                    width: this.chart.width,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    labels: t.labels,
                    valuesCount: t.datasets[0].data.length
                }), this.scale.setScaleSize(), this.updateScaleRange(t.datasets), this.scale.buildYLabels()
            },
            updateScaleRange: function (t) {
                var e = function () {
                        var e = [];
                        return i.each(t, function (t) {
                            t.data ? e = e.concat(t.data) : i.each(t.points, function (t) {
                                e.push(t.value)
                            })
                        }), e
                    }(),
                    n = this.options.scaleOverride ? {
                        steps: this.options.scaleSteps,
                        stepValue: this.options.scaleStepWidth,
                        min: this.options.scaleStartValue,
                        max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                    } : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                i.extend(this.scale, n)
            },
            addData: function (t, e) {
                this.scale.valuesCount++, i.each(t, function (t, i) {
                    var n = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));
                    this.datasets[i].points.push(new this.PointClass({
                        value: t,
                        label: e,
                        datasetLabel: this.datasets[i].label,
                        x: n.x,
                        y: n.y,
                        strokeColor: this.datasets[i].pointStrokeColor,
                        fillColor: this.datasets[i].pointColor
                    }))
                }, this), this.scale.labels.push(e), this.reflow(), this.update()
            },
            removeData: function () {
                this.scale.valuesCount--, this.scale.labels.shift(), i.each(this.datasets, function (t) {
                    t.points.shift()
                }, this), this.reflow(), this.update()
            },
            update: function () {
                this.eachPoints(function (t) {
                    t.save()
                }), this.reflow(), this.render()
            },
            reflow: function () {
                i.extend(this.scale, {
                    width: this.chart.width,
                    height: this.chart.height,
                    size: i.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
            },
            draw: function (t) {
                var e = t || 1,
                    n = this.chart.ctx;
                this.clear(), this.scale.draw(), i.each(this.datasets, function (t) {
                    i.each(t.points, function (t, i) {
                        t.hasValue() && t.transition(this.scale.getPointPosition(i, this.scale.calculateCenterOffset(t.value)), e)
                    }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), i.each(t.points, function (t, e) {
                        0 === e ? n.moveTo(t.x, t.y) : n.lineTo(t.x, t.y)
                    }, this), n.closePath(), n.stroke(), n.fillStyle = t.fillColor, this.options.datasetFill && n.fill(), i.each(t.points, function (t) {
                        t.hasValue() && t.draw()
                    })
                }, this)
            }
        })
    }.call(this), ! function (t, e, i, n) {
        "use strict";

        function s(t, e, i) {
            return setTimeout(u(t, i), e)
        }

        function a(t, e, i) {
            return Array.isArray(t) ? (o(t, i[e], i), !0) : !1
        }

        function o(t, e, i) {
            var s;
            if (t)
                if (t.forEach) t.forEach(e, i);
                else if (t.length !== n)
                for (s = 0; s < t.length;) e.call(i, t[s], s, t), s++;
            else
                for (s in t) t.hasOwnProperty(s) && e.call(i, t[s], s, t)
        }

        function r(t, e, i) {
            for (var s = Object.keys(e), a = 0; a < s.length;)(!i || i && t[s[a]] === n) && (t[s[a]] = e[s[a]]), a++;
            return t
        }

        function l(t, e) {
            return r(t, e, !0)
        }

        function c(t, e, i) {
            var n, s = e.prototype;
            n = t.prototype = Object.create(s), n.constructor = t, n._super = s, i && r(n, i)
        }

        function u(t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }

        function h(t, e) {
            return typeof t == ut ? t.apply(e ? e[0] || n : n, e) : t
        }

        function d(t, e) {
            return t === n ? e : t
        }

        function f(t, e, i) {
            o(m(e), function (e) {
                t.addEventListener(e, i, !1)
            })
        }

        function p(t, e, i) {
            o(m(e), function (e) {
                t.removeEventListener(e, i, !1)
            })
        }

        function v(t, e) {
            for (; t;) {
                if (t == e) return !0;
                t = t.parentNode
            }
            return !1
        }

        function g(t, e) {
            return t.indexOf(e) > -1
        }

        function m(t) {
            return t.trim().split(/\s+/g)
        }

        function y(t, e, i) {
            if (t.indexOf && !i) return t.indexOf(e);
            for (var n = 0; n < t.length;) {
                if (i && t[n][i] == e || !i && t[n] === e) return n;
                n++
            }
            return -1
        }

        function b(t) {
            return Array.prototype.slice.call(t, 0)
        }

        function w(t, e, i) {
            for (var n = [], s = [], a = 0; a < t.length;) {
                var o = e ? t[a][e] : t[a];
                y(s, o) < 0 && n.push(t[a]), s[a] = o, a++
            }
            return i && (n = e ? n.sort(function (t, i) {
                return t[e] > i[e]
            }) : n.sort()), n
        }

        function x(t, e) {
            for (var i, s, a = e[0].toUpperCase() + e.slice(1), o = 0; o < lt.length;) {
                if (i = lt[o], s = i ? i + a : e, s in t) return s;
                o++
            }
            return n
        }

        function C() {
            return pt++
        }

        function k(t) {
            var e = t.ownerDocument;
            return e.defaultView || e.parentWindow
        }

        function S(t, e) {
            var i = this;
            this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function (e) {
                h(t.options.enable, [t]) && i.handler(e)
            }, this.init()
        }

        function P(t) {
            var e, i = t.options.inputClass;
            return new(e = i ? i : mt ? _ : yt ? B : gt ? N : W)(t, T)
        }

        function T(t, e, i) {
            var n = i.pointers.length,
                s = i.changedPointers.length,
                a = e & St && 0 === n - s,
                o = e & (Tt | At) && 0 === n - s;
            i.isFirst = !!a, i.isFinal = !!o, a && (t.session = {}), i.eventType = e, A(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
        }

        function A(t, e) {
            var i = t.session,
                n = e.pointers,
                s = n.length;
            i.firstInput || (i.firstInput = E(e)), s > 1 && !i.firstMultiple ? i.firstMultiple = E(e) : 1 === s && (i.firstMultiple = !1);
            var a = i.firstInput,
                o = i.firstMultiple,
                r = o ? o.center : a.center,
                l = e.center = L(n);
            e.timeStamp = ft(), e.deltaTime = e.timeStamp - a.timeStamp, e.angle = V(r, l), e.distance = z(r, l), M(i, e), e.offsetDirection = I(e.deltaX, e.deltaY), e.scale = o ? R(o.pointers, n) : 1, e.rotation = o ? D(o.pointers, n) : 0, O(i, e);
            var c = t.element;
            v(e.srcEvent.target, c) && (c = e.srcEvent.target), e.target = c
        }

        function M(t, e) {
            var i = e.center,
                n = t.offsetDelta || {},
                s = t.prevDelta || {},
                a = t.prevInput || {};
            (e.eventType === St || a.eventType === Tt) && (s = t.prevDelta = {
                x: a.deltaX || 0,
                y: a.deltaY || 0
            }, n = t.offsetDelta = {
                x: i.x,
                y: i.y
            }), e.deltaX = s.x + (i.x - n.x), e.deltaY = s.y + (i.y - n.y)
        }

        function O(t, e) {
            var i, s, a, o, r = t.lastInterval || e,
                l = e.timeStamp - r.timeStamp;
            if (e.eventType != At && (l > kt || r.velocity === n)) {
                var c = r.deltaX - e.deltaX,
                    u = r.deltaY - e.deltaY,
                    h = F(l, c, u);
                s = h.x, a = h.y, i = dt(h.x) > dt(h.y) ? h.x : h.y, o = I(c, u), t.lastInterval = e
            } else i = r.velocity, s = r.velocityX, a = r.velocityY, o = r.direction;
            e.velocity = i, e.velocityX = s, e.velocityY = a, e.direction = o
        }

        function E(t) {
            for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
                clientX: ht(t.pointers[i].clientX),
                clientY: ht(t.pointers[i].clientY)
            }, i++;
            return {
                timeStamp: ft(),
                pointers: e,
                center: L(e),
                deltaX: t.deltaX,
                deltaY: t.deltaY
            }
        }

        function L(t) {
            var e = t.length;
            if (1 === e) return {
                x: ht(t[0].clientX),
                y: ht(t[0].clientY)
            };
            for (var i = 0, n = 0, s = 0; e > s;) i += t[s].clientX, n += t[s].clientY, s++;
            return {
                x: ht(i / e),
                y: ht(n / e)
            }
        }

        function F(t, e, i) {
            return {
                x: e / t || 0,
                y: i / t || 0
            }
        }

        function I(t, e) {
            return t === e ? Mt : dt(t) >= dt(e) ? t > 0 ? Ot : Et : e > 0 ? Lt : Ft
        }

        function z(t, e, i) {
            i || (i = Dt);
            var n = e[i[0]] - t[i[0]],
                s = e[i[1]] - t[i[1]];
            return Math.sqrt(n * n + s * s)
        }

        function V(t, e, i) {
            i || (i = Dt);
            var n = e[i[0]] - t[i[0]],
                s = e[i[1]] - t[i[1]];
            return 180 * Math.atan2(s, n) / Math.PI
        }

        function D(t, e) {
            return V(e[1], e[0], Rt) - V(t[1], t[0], Rt)
        }

        function R(t, e) {
            return z(e[0], e[1], Rt) / z(t[0], t[1], Rt)
        }

        function W() {
            this.evEl = _t, this.evWin = Ht, this.allow = !0, this.pressed = !1, S.apply(this, arguments)
        }

        function _() {
            this.evEl = jt, this.evWin = Nt, S.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function H() {
            this.evTarget = Xt, this.evWin = Yt, this.started = !1, S.apply(this, arguments)
        }

        function $(t, e) {
            var i = b(t.touches),
                n = b(t.changedTouches);
            return e & (Tt | At) && (i = w(i.concat(n), "identifier", !0)), [i, n]
        }

        function B() {
            this.evTarget = Gt, this.targetIds = {}, S.apply(this, arguments)
        }

        function j(t, e) {
            var i = b(t.touches),
                n = this.targetIds;
            if (e & (St | Pt) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
            var s, a, o = b(t.changedTouches),
                r = [],
                l = this.target;
            if (a = i.filter(function (t) {
                    return v(t.target, l)
                }), e === St)
                for (s = 0; s < a.length;) n[a[s].identifier] = !0, s++;
            for (s = 0; s < o.length;) n[o[s].identifier] && r.push(o[s]), e & (Tt | At) && delete n[o[s].identifier], s++;
            return r.length ? [w(a.concat(r), "identifier", !0), r] : void 0
        }

        function N() {
            S.apply(this, arguments);
            var t = u(this.handler, this);
            this.touch = new B(this.manager, t), this.mouse = new W(this.manager, t)
        }

        function q(t, e) {
            this.manager = t, this.set(e)
        }

        function X(t) {
            if (g(t, ee)) return ee;
            var e = g(t, ie),
                i = g(t, ne);
            return e && i ? ie + " " + ne : e || i ? e ? ie : ne : g(t, te) ? te : Kt
        }

        function Y(t) {
            this.id = C(), this.manager = null, this.options = l(t || {}, this.defaults), this.options.enable = d(this.options.enable, !0), this.state = se, this.simultaneous = {}, this.requireFail = []
        }

        function Q(t) {
            return t & ce ? "cancel" : t & re ? "end" : t & oe ? "move" : t & ae ? "start" : ""
        }

        function G(t) {
            return t == Ft ? "down" : t == Lt ? "up" : t == Ot ? "left" : t == Et ? "right" : ""
        }

        function U(t, e) {
            var i = e.manager;
            return i ? i.get(t) : t
        }

        function Z() {
            Y.apply(this, arguments)
        }

        function J() {
            Z.apply(this, arguments), this.pX = null, this.pY = null
        }

        function K() {
            Z.apply(this, arguments)
        }

        function tt() {
            Y.apply(this, arguments), this._timer = null, this._input = null
        }

        function et() {
            Z.apply(this, arguments)
        }

        function it() {
            Z.apply(this, arguments)
        }

        function nt() {
            Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function st(t, e) {
            return e = e || {}, e.recognizers = d(e.recognizers, st.defaults.preset), new at(t, e)
        }

        function at(t, e) {
            e = e || {}, this.options = l(e, st.defaults), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = t, this.input = P(this), this.touchAction = new q(this, this.options.touchAction), ot(this, !0), o(e.recognizers, function (t) {
                var e = this.add(new t[0](t[1]));
                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
            }, this)
        }

        function ot(t, e) {
            var i = t.element;
            o(t.options.cssProps, function (t, n) {
                i.style[x(i.style, n)] = e ? t : ""
            })
        }

        function rt(t, i) {
            var n = e.createEvent("Event");
            n.initEvent(t, !0, !0), n.gesture = i, i.target.dispatchEvent(n)
        }
        var lt = ["", "webkit", "moz", "MS", "ms", "o"],
            ct = e.createElement("div"),
            ut = "function",
            ht = Math.round,
            dt = Math.abs,
            ft = Date.now,
            pt = 1,
            vt = /mobile|tablet|ip(ad|hone|od)|android/i,
            gt = "ontouchstart" in t,
            mt = x(t, "PointerEvent") !== n,
            yt = gt && vt.test(navigator.userAgent),
            bt = "touch",
            wt = "pen",
            xt = "mouse",
            Ct = "kinect",
            kt = 25,
            St = 1,
            Pt = 2,
            Tt = 4,
            At = 8,
            Mt = 1,
            Ot = 2,
            Et = 4,
            Lt = 8,
            Ft = 16,
            It = Ot | Et,
            zt = Lt | Ft,
            Vt = It | zt,
            Dt = ["x", "y"],
            Rt = ["clientX", "clientY"];
        S.prototype = {
            handler: function () {},
            init: function () {
                this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(k(this.element), this.evWin, this.domHandler)
            },
            destroy: function () {
                this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(k(this.element), this.evWin, this.domHandler)
            }
        };
        var Wt = {
                mousedown: St,
                mousemove: Pt,
                mouseup: Tt
            },
            _t = "mousedown",
            Ht = "mousemove mouseup";
        c(W, S, {
            handler: function (t) {
                var e = Wt[t.type];
                e & St && 0 === t.button && (this.pressed = !0), e & Pt && 1 !== t.which && (e = Tt), this.pressed && this.allow && (e & Tt && (this.pressed = !1), this.callback(this.manager, e, {
                    pointers: [t],
                    changedPointers: [t],
                    pointerType: xt,
                    srcEvent: t
                }))
            }
        });
        var $t = {
                pointerdown: St,
                pointermove: Pt,
                pointerup: Tt,
                pointercancel: At,
                pointerout: At
            },
            Bt = {
                2: bt,
                3: wt,
                4: xt,
                5: Ct
            },
            jt = "pointerdown",
            Nt = "pointermove pointerup pointercancel";
        t.MSPointerEvent && (jt = "MSPointerDown", Nt = "MSPointerMove MSPointerUp MSPointerCancel"), c(_, S, {
            handler: function (t) {
                var e = this.store,
                    i = !1,
                    n = t.type.toLowerCase().replace("ms", ""),
                    s = $t[n],
                    a = Bt[t.pointerType] || t.pointerType,
                    o = a == bt,
                    r = y(e, t.pointerId, "pointerId");
                s & St && (0 === t.button || o) ? 0 > r && (e.push(t), r = e.length - 1) : s & (Tt | At) && (i = !0), 0 > r || (e[r] = t, this.callback(this.manager, s, {
                    pointers: e,
                    changedPointers: [t],
                    pointerType: a,
                    srcEvent: t
                }), i && e.splice(r, 1))
            }
        });
        var qt = {
                touchstart: St,
                touchmove: Pt,
                touchend: Tt,
                touchcancel: At
            },
            Xt = "touchstart",
            Yt = "touchstart touchmove touchend touchcancel";
        c(H, S, {
            handler: function (t) {
                var e = qt[t.type];
                if (e === St && (this.started = !0), this.started) {
                    var i = $.call(this, t, e);
                    e & (Tt | At) && 0 === i[0].length - i[1].length && (this.started = !1), this.callback(this.manager, e, {
                        pointers: i[0],
                        changedPointers: i[1],
                        pointerType: bt,
                        srcEvent: t
                    })
                }
            }
        });
        var Qt = {
                touchstart: St,
                touchmove: Pt,
                touchend: Tt,
                touchcancel: At
            },
            Gt = "touchstart touchmove touchend touchcancel";
        c(B, S, {
            handler: function (t) {
                var e = Qt[t.type],
                    i = j.call(this, t, e);
                i && this.callback(this.manager, e, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: bt,
                    srcEvent: t
                })
            }
        }), c(N, S, {
            handler: function (t, e, i) {
                var n = i.pointerType == bt,
                    s = i.pointerType == xt;
                if (n) this.mouse.allow = !1;
                else if (s && !this.mouse.allow) return;
                e & (Tt | At) && (this.mouse.allow = !0), this.callback(t, e, i)
            },
            destroy: function () {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var Ut = x(ct.style, "touchAction"),
            Zt = Ut !== n,
            Jt = "compute",
            Kt = "auto",
            te = "manipulation",
            ee = "none",
            ie = "pan-x",
            ne = "pan-y";
        q.prototype = {
            set: function (t) {
                t == Jt && (t = this.compute()), Zt && (this.manager.element.style[Ut] = t), this.actions = t.toLowerCase().trim()
            },
            update: function () {
                this.set(this.manager.options.touchAction)
            },
            compute: function () {
                var t = [];
                return o(this.manager.recognizers, function (e) {
                    h(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                }), X(t.join(" "))
            },
            preventDefaults: function (t) {
                if (!Zt) {
                    var e = t.srcEvent,
                        i = t.offsetDirection;
                    if (this.manager.session.prevented) return void e.preventDefault();
                    var n = this.actions,
                        s = g(n, ee),
                        a = g(n, ne),
                        o = g(n, ie);
                    return s || a && i & It || o && i & zt ? this.preventSrc(e) : void 0
                }
            },
            preventSrc: function (t) {
                this.manager.session.prevented = !0, t.preventDefault()
            }
        };
        var se = 1,
            ae = 2,
            oe = 4,
            re = 8,
            le = re,
            ce = 16,
            ue = 32;
        Y.prototype = {
            defaults: {},
            set: function (t) {
                return r(this.options, t), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function (t) {
                if (a(t, "recognizeWith", this)) return this;
                var e = this.simultaneous;
                return t = U(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
            },
            dropRecognizeWith: function (t) {
                return a(t, "dropRecognizeWith", this) ? this : (t = U(t, this), delete this.simultaneous[t.id], this)
            },
            requireFailure: function (t) {
                if (a(t, "requireFailure", this)) return this;
                var e = this.requireFail;
                return t = U(t, this), -1 === y(e, t) && (e.push(t), t.requireFailure(this)), this
            },
            dropRequireFailure: function (t) {
                if (a(t, "dropRequireFailure", this)) return this;
                t = U(t, this);
                var e = y(this.requireFail, t);
                return e > -1 && this.requireFail.splice(e, 1), this
            },
            hasRequireFailures: function () {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function (t) {
                return !!this.simultaneous[t.id]
            },
            emit: function (t) {
                function e(e) {
                    i.manager.emit(i.options.event + (e ? Q(n) : ""), t)
                }
                var i = this,
                    n = this.state;
                re > n && e(!0), e(), n >= re && e(!0)
            },
            tryEmit: function (t) {
                return this.canEmit() ? this.emit(t) : void(this.state = ue)
            },
            canEmit: function () {
                for (var t = 0; t < this.requireFail.length;) {
                    if (!(this.requireFail[t].state & (ue | se))) return !1;
                    t++
                }
                return !0
            },
            recognize: function (t) {
                var e = r({}, t);
                return h(this.options.enable, [this, e]) ? (this.state & (le | ce | ue) && (this.state = se), this.state = this.process(e), void(this.state & (ae | oe | re | ce) && this.tryEmit(e))) : (this.reset(), void(this.state = ue))
            },
            process: function () {},
            getTouchAction: function () {},
            reset: function () {}
        }, c(Z, Y, {
            defaults: {
                pointers: 1
            },
            attrTest: function (t) {
                var e = this.options.pointers;
                return 0 === e || t.pointers.length === e
            },
            process: function (t) {
                var e = this.state,
                    i = t.eventType,
                    n = e & (ae | oe),
                    s = this.attrTest(t);
                return n && (i & At || !s) ? e | ce : n || s ? i & Tt ? e | re : e & ae ? e | oe : ae : ue
            }
        }), c(J, Z, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: Vt
            },
            getTouchAction: function () {
                var t = this.options.direction,
                    e = [];
                return t & It && e.push(ne), t & zt && e.push(ie), e
            },
            directionTest: function (t) {
                var e = this.options,
                    i = !0,
                    n = t.distance,
                    s = t.direction,
                    a = t.deltaX,
                    o = t.deltaY;
                return s & e.direction || (e.direction & It ? (s = 0 === a ? Mt : 0 > a ? Ot : Et, i = a != this.pX, n = Math.abs(t.deltaX)) : (s = 0 === o ? Mt : 0 > o ? Lt : Ft, i = o != this.pY, n = Math.abs(t.deltaY))), t.direction = s, i && n > e.threshold && s & e.direction
            },
            attrTest: function (t) {
                return Z.prototype.attrTest.call(this, t) && (this.state & ae || !(this.state & ae) && this.directionTest(t))
            },
            emit: function (t) {
                this.pX = t.deltaX, this.pY = t.deltaY;
                var e = G(t.direction);
                e && this.manager.emit(this.options.event + e, t), this._super.emit.call(this, t)
            }
        }), c(K, Z, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function () {
                return [ee]
            },
            attrTest: function (t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & ae)
            },
            emit: function (t) {
                if (this._super.emit.call(this, t), 1 !== t.scale) {
                    var e = t.scale < 1 ? "in" : "out";
                    this.manager.emit(this.options.event + e, t)
                }
            }
        }), c(tt, Y, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 500,
                threshold: 5
            },
            getTouchAction: function () {
                return [Kt]
            },
            process: function (t) {
                var e = this.options,
                    i = t.pointers.length === e.pointers,
                    n = t.distance < e.threshold,
                    a = t.deltaTime > e.time;
                if (this._input = t, !n || !i || t.eventType & (Tt | At) && !a) this.reset();
                else if (t.eventType & St) this.reset(), this._timer = s(function () {
                    this.state = le, this.tryEmit()
                }, e.time, this);
                else if (t.eventType & Tt) return le;
                return ue
            },
            reset: function () {
                clearTimeout(this._timer)
            },
            emit: function (t) {
                this.state === le && (t && t.eventType & Tt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = ft(), this.manager.emit(this.options.event, this._input)))
            }
        }), c(et, Z, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function () {
                return [ee]
            },
            attrTest: function (t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & ae)
            }
        }), c(it, Z, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .65,
                direction: It | zt,
                pointers: 1
            },
            getTouchAction: function () {
                return J.prototype.getTouchAction.call(this)
            },
            attrTest: function (t) {
                var e, i = this.options.direction;
                return i & (It | zt) ? e = t.velocity : i & It ? e = t.velocityX : i & zt && (e = t.velocityY), this._super.attrTest.call(this, t) && i & t.direction && t.distance > this.options.threshold && dt(e) > this.options.velocity && t.eventType & Tt
            },
            emit: function (t) {
                var e = G(t.direction);
                e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
            }
        }), c(nt, Y, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 2,
                posThreshold: 10
            },
            getTouchAction: function () {
                return [te]
            },
            process: function (t) {
                var e = this.options,
                    i = t.pointers.length === e.pointers,
                    n = t.distance < e.threshold,
                    a = t.deltaTime < e.time;
                if (this.reset(), t.eventType & St && 0 === this.count) return this.failTimeout();
                if (n && a && i) {
                    if (t.eventType != Tt) return this.failTimeout();
                    var o = this.pTime ? t.timeStamp - this.pTime < e.interval : !0,
                        r = !this.pCenter || z(this.pCenter, t.center) < e.posThreshold;
                    this.pTime = t.timeStamp, this.pCenter = t.center, r && o ? this.count += 1 : this.count = 1, this._input = t;
                    var l = this.count % e.taps;
                    if (0 === l) return this.hasRequireFailures() ? (this._timer = s(function () {
                        this.state = le, this.tryEmit()
                    }, e.interval, this), ae) : le
                }
                return ue
            },
            failTimeout: function () {
                return this._timer = s(function () {
                    this.state = ue
                }, this.options.interval, this), ue
            },
            reset: function () {
                clearTimeout(this._timer)
            },
            emit: function () {
                this.state == le && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), st.VERSION = "2.0.4", st.defaults = {
            domEvents: !1,
            touchAction: Jt,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [[et, {
                enable: !1
            }], [K, {
                enable: !1
            }, ["rotate"]], [it, {
                direction: It
            }], [J, {
                direction: It
            }, ["swipe"]], [nt], [nt, {
                event: "doubletap",
                taps: 2
            }, ["tap"]], [tt]],
            cssProps: {
                userSelect: "default",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        var he = 1,
            de = 2;
        at.prototype = {
            set: function (t) {
                return r(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
            },
            stop: function (t) {
                this.session.stopped = t ? de : he
            },
            recognize: function (t) {
                var e = this.session;
                if (!e.stopped) {
                    this.touchAction.preventDefaults(t);
                    var i, n = this.recognizers,
                        s = e.curRecognizer;
                    (!s || s && s.state & le) && (s = e.curRecognizer = null);
                    for (var a = 0; a < n.length;) i = n[a], e.stopped === de || s && i != s && !i.canRecognizeWith(s) ? i.reset() : i.recognize(t), !s && i.state & (ae | oe | re) && (s = e.curRecognizer = i), a++
                }
            },
            get: function (t) {
                if (t instanceof Y) return t;
                for (var e = this.recognizers, i = 0; i < e.length; i++)
                    if (e[i].options.event == t) return e[i];
                return null
            },
            add: function (t) {
                if (a(t, "add", this)) return this;
                var e = this.get(t.options.event);
                return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
            },
            remove: function (t) {
                if (a(t, "remove", this)) return this;
                var e = this.recognizers;
                return t = this.get(t), e.splice(y(e, t), 1), this.touchAction.update(), this
            },
            on: function (t, e) {
                var i = this.handlers;
                return o(m(t), function (t) {
                    i[t] = i[t] || [], i[t].push(e)
                }), this
            },
            off: function (t, e) {
                var i = this.handlers;
                return o(m(t), function (t) {
                    e ? i[t].splice(y(i[t], e), 1) : delete i[t]
                }), this
            },
            emit: function (t, e) {
                this.options.domEvents && rt(t, e);
                var i = this.handlers[t] && this.handlers[t].slice();
                if (i && i.length) {
                    e.type = t, e.preventDefault = function () {
                        e.srcEvent.preventDefault()
                    };
                    for (var n = 0; n < i.length;) i[n](e), n++
                }
            },
            destroy: function () {
                this.element && ot(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, r(st, {
            INPUT_START: St,
            INPUT_MOVE: Pt,
            INPUT_END: Tt,
            INPUT_CANCEL: At,
            STATE_POSSIBLE: se,
            STATE_BEGAN: ae,
            STATE_CHANGED: oe,
            STATE_ENDED: re,
            STATE_RECOGNIZED: le,
            STATE_CANCELLED: ce,
            STATE_FAILED: ue,
            DIRECTION_NONE: Mt,
            DIRECTION_LEFT: Ot,
            DIRECTION_RIGHT: Et,
            DIRECTION_UP: Lt,
            DIRECTION_DOWN: Ft,
            DIRECTION_HORIZONTAL: It,
            DIRECTION_VERTICAL: zt,
            DIRECTION_ALL: Vt,
            Manager: at,
            Input: S,
            TouchAction: q,
            TouchInput: B,
            MouseInput: W,
            PointerEventInput: _,
            TouchMouseInput: N,
            SingleTouchInput: H,
            Recognizer: Y,
            AttrRecognizer: Z,
            Tap: nt,
            Pan: J,
            Swipe: it,
            Pinch: K,
            Rotate: et,
            Press: tt,
            on: f,
            off: p,
            each: o,
            merge: l,
            extend: r,
            inherit: c,
            bindFn: u,
            prefixed: x
        }), typeof define == ut && define.amd ? define(function () {
            return st
        }) : "undefined" != typeof module && module.exports ? module.exports = st : t[i] = st
    }(window, document, "Hammer"),
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], t) : "object" == typeof exports ? t(require("jquery"), require("hammerjs")) : t(jQuery, Hammer)
    }(function (t, e) {
        function i(i, n) {
            var s = t(i);
            s.data("hammer") || s.data("hammer", new e(s[0], n))
        }
        t.fn.hammer = function (t) {
            return this.each(function () {
                i(this, t)
            })
        }, e.Manager.prototype.emit = function (e) {
            return function (i, n) {
                e.call(this, i, n), t(this.element).trigger({
                    type: i,
                    gesture: n
                })
            }
        }(e.Manager.prototype.emit)
    }),
    function () {
        function s(t) {
            t.addEventListener("click", function () {
                var t = this.classList;
                t.contains("flipped") === !0 ? t.remove("flipped") : t.add("flipped")
            })
        }
        for (var t = document.querySelectorAll(".card1.effect__click"), e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            s(n)
        }
    }(),
    function (t) {
        t(document).ready(function () {
            t(document).on("click.card", ".card", function (e) {
                t(this).find(".card-reveal").length && (t(e.target).is(t(".card-reveal .card-title")) || t(e.target).is(t(".card-reveal .card-title i")) ? t(this).find(".card-reveal").velocity({
                    translateY: 0
                }, {
                    duration: 225,
                    queue: !1,
                    easing: "easeInOutQuad",
                    complete: function () {
                        t(this).css({
                            display: "none"
                        })
                    }
                }) : (t(e.target).is(t(".card .activator")) || t(e.target).is(t(".card .activator i"))) && t(this).find(".card-reveal").css({
                    display: "block"
                }).velocity("stop", !1).velocity({
                    translateY: "-100%"
                }, {
                    duration: 300,
                    queue: !1,
                    easing: "easeInOutQuad"
                }))
            })
        })
    }(jQuery),
    function () {
        var t, e, i, n, s, a = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            },
            o = [].indexOf || function (t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        e = function () {
            function t() {}
            return t.prototype.extend = function (t, e) {
                var i, n;
                for (i in e) n = e[i], null == t[i] && (t[i] = n);
                return t
            }, t.prototype.isMobile = function (t) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
            }, t.prototype.createEvent = function (t, e, i, n) {
                var s;
                return null == e && (e = !1), null == i && (i = !1), null == n && (n = null), null != document.createEvent ? (s = document.createEvent("CustomEvent"), s.initCustomEvent(t, e, i, n)) : null != document.createEventObject ? (s = document.createEventObject(), s.eventType = t) : s.eventName = t, s
            }, t.prototype.emitEvent = function (t, e) {
                return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
            }, t.prototype.addEvent = function (t, e, i) {
                return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i
            }, t.prototype.removeEvent = function (t, e, i) {
                return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e]
            }, t.prototype.innerHeight = function () {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }, t
        }(), i = this.WeakMap || this.MozWeakMap || (i = function () {
            function t() {
                this.keys = [], this.values = []
            }
            return t.prototype.get = function (t) {
                var e, i, n, s, a;
                for (a = this.keys, e = n = 0, s = a.length; s > n; e = ++n)
                    if (i = a[e], i === t) return this.values[e]
            }, t.prototype.set = function (t, e) {
                var i, n, s, a, o;
                for (o = this.keys, i = s = 0, a = o.length; a > s; i = ++s)
                    if (n = o[i], n === t) return void(this.values[i] = e);
                return this.keys.push(t), this.values.push(e)
            }, t
        }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function () {
            function t() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return t.notSupported = !0, t.prototype.observe = function () {}, t
        }()), n = this.getComputedStyle || function (t, e) {
            return this.getPropertyValue = function (e) {
                var i;
                return "float" === e && (e = "styleFloat"), s.test(e) && e.replace(s, function (t, e) {
                    return e.toUpperCase()
                }), (null != (i = t.currentStyle) ? i[e] : void 0) || null
            }, this
        }, s = /(\-([a-z]){1})/g, this.WOW = function () {
            function s(t) {
                null == t && (t = {}), this.scrollCallback = a(this.scrollCallback, this), this.scrollHandler = a(this.scrollHandler, this), this.resetAnimation = a(this.resetAnimation, this), this.start = a(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new i, this.wowEvent = this.util().createEvent(this.config.boxClass)
            }
            return s.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null
            }, s.prototype.init = function () {
                var t;
                return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
            }, s.prototype.start = function () {
                var e, i, n, s;
                if (this.stopped = !1, this.boxes = function () {
                        var t, i, n, s;
                        for (n = this.element.querySelectorAll("." + this.config.boxClass), s = [], t = 0, i = n.length; i > t; t++) e = n[t], s.push(e);
                        return s
                    }.call(this), this.all = function () {
                        var t, i, n, s;
                        for (n = this.boxes, s = [], t = 0, i = n.length; i > t; t++) e = n[t], s.push(e);
                        return s
                    }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else
                        for (s = this.boxes, i = 0, n = s.length; n > i; i++) e = s[i], this.applyStyle(e, !0);
                return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function (t) {
                    return function (e) {
                        var i, n, s, a, o;
                        for (o = [], i = 0, n = e.length; n > i; i++) a = e[i], o.push(function () {
                            var t, e, i, n;
                            for (i = a.addedNodes || [], n = [], t = 0, e = i.length; e > t; t++) s = i[t], n.push(this.doSync(s));
                            return n
                        }.call(t));
                        return o
                    }
                }(this)).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }) : void 0
            }, s.prototype.stop = function () {
                return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
            }, s.prototype.sync = function (e) {
                return t.notSupported ? this.doSync(this.element) : void 0
            }, s.prototype.doSync = function (t) {
                var e, i, n, s, a;
                if (null == t && (t = this.element), 1 === t.nodeType) {
                    for (t = t.parentNode || t, s = t.querySelectorAll("." + this.config.boxClass), a = [], i = 0, n = s.length; n > i; i++) e = s[i], o.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), a.push(this.scrolled = !0)) : a.push(void 0);
                    return a
                }
            }, s.prototype.show = function (t) {
                return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
            }, s.prototype.applyStyle = function (t, e) {
                var i, n, s;
                return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), s = t.getAttribute("data-wow-iteration"), this.animate(function (a) {
                    return function () {
                        return a.customStyle(t, e, n, i, s)
                    }
                }(this))
            }, s.prototype.animate = function () {
                return "requestAnimationFrame" in window ? function (t) {
                    return window.requestAnimationFrame(t)
                } : function (t) {
                    return t()
                }
            }(), s.prototype.resetStyle = function () {
                var t, e, i, n, s;
                for (n = this.boxes, s = [], e = 0, i = n.length; i > e; e++) t = n[e], s.push(t.style.visibility = "visible");
                return s
            }, s.prototype.resetAnimation = function (t) {
                var e;
                return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim()) : void 0
            }, s.prototype.customStyle = function (t, e, i, n, s) {
                return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {
                    animationDuration: i
                }), n && this.vendorSet(t.style, {
                    animationDelay: n
                }), s && this.vendorSet(t.style, {
                    animationIterationCount: s
                }), this.vendorSet(t.style, {
                    animationName: e ? "none" : this.cachedAnimationName(t)
                }), t
            }, s.prototype.vendors = ["moz", "webkit"], s.prototype.vendorSet = function (t, e) {
                var i, n, s, a;
                n = [];
                for (i in e) s = e[i], t["" + i] = s, n.push(function () {
                    var e, n, o, r;
                    for (o = this.vendors, r = [], e = 0, n = o.length; n > e; e++) a = o[e], r.push(t["" + a + i.charAt(0).toUpperCase() + i.substr(1)] = s);
                    return r
                }.call(this));
                return n
            }, s.prototype.vendorCSS = function (t, e) {
                var i, s, a, o, r, l;
                for (r = n(t), o = r.getPropertyCSSValue(e), a = this.vendors, i = 0, s = a.length; s > i; i++) l = a[i], o = o || r.getPropertyCSSValue("-" + l + "-" + e);
                return o
            }, s.prototype.animationName = function (t) {
                var e;
                try {
                    e = this.vendorCSS(t, "animation-name").cssText
                } catch (i) {
                    e = n(t).getPropertyValue("animation-name")
                }
                return "none" === e ? "" : e
            }, s.prototype.cacheAnimationName = function (t) {
                return this.animationNameCache.set(t, this.animationName(t))
            }, s.prototype.cachedAnimationName = function (t) {
                return this.animationNameCache.get(t)
            }, s.prototype.scrollHandler = function () {
                return this.scrolled = !0
            }, s.prototype.scrollCallback = function () {
                var t;
                return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                    var e, i, n, s;
                    for (n = this.boxes, s = [], e = 0, i = n.length; i > e; e++) t = n[e], t && (this.isVisible(t) ? this.show(t) : s.push(t));
                    return s
                }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
            }, s.prototype.offsetTop = function (t) {
                for (var e; void 0 === t.offsetTop;) t = t.parentNode;
                for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
                return e
            }, s.prototype.isVisible = function (t) {
                var e, i, n, s, a;
                return i = t.getAttribute("data-wow-offset") || this.config.offset, a = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, s = a + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, n = this.offsetTop(t), e = n + t.clientHeight, s >= n && e >= a
            }, s.prototype.util = function () {
                return null != this._util ? this._util : this._util = new e
            }, s.prototype.disabled = function () {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, s
        }()
    }.call(this), $(document).ready(function () {
        scaleVideoContainer(), initBannerVideoSize(".video-container .poster img"), initBannerVideoSize(".video-container .filter"), initBannerVideoSize(".video-container video"), $(window).on("resize", function () {
            scaleVideoContainer(), scaleBannerVideoSize(".video-container .poster img"), scaleBannerVideoSize(".video-container .filter"), scaleBannerVideoSize(".video-container video")
        })
    }),
    function () {
        $(".hamburger-menu").on("click", function () {
            $(this).toggleClass("animate"), $(".bar").toggleClass("animate")
        })
    }(),
    function (t) {
        t(["jquery"], function (t) {
            return function () {
                function r(t, e, i) {
                    return w({
                        type: s.error,
                        iconClass: x().iconClasses.error,
                        message: t,
                        optionsOverride: i,
                        title: e
                    })
                }

                function l(i, n) {
                    return i || (i = x()), e = t("#" + i.containerId), e.length ? e : (n && (e = m(i)), e)
                }

                function c(t, e, i) {
                    return w({
                        type: s.info,
                        iconClass: x().iconClasses.info,
                        message: t,
                        optionsOverride: i,
                        title: e
                    })
                }

                function u(t) {
                    i = t
                }

                function h(t, e, i) {
                    return w({
                        type: s.success,
                        iconClass: x().iconClasses.success,
                        message: t,
                        optionsOverride: i,
                        title: e
                    })
                }

                function d(t, e, i) {
                    return w({
                        type: s.warning,
                        iconClass: x().iconClasses.warning,
                        message: t,
                        optionsOverride: i,
                        title: e
                    })
                }

                function f(t, i) {
                    var n = x();
                    e || l(n), g(t, n, i) || v(n)
                }

                function p(i) {
                    var n = x();
                    return e || l(n), i && 0 === t(":focus", i).length ? void C(i) : void(e.children().length && e.remove())
                }

                function v(i) {
                    for (var n = e.children(), s = n.length - 1; s >= 0; s--) g(t(n[s]), i)
                }

                function g(e, i, n) {
                    var s = n && n.force ? n.force : !1;
                    return e && (s || 0 === t(":focus", e).length) ? (e[i.hideMethod]({
                        duration: i.hideDuration,
                        easing: i.hideEasing,
                        complete: function () {
                            C(e)
                        }
                    }), !0) : !1
                }

                function m(i) {
                    return e = t("<div/>").attr("id", i.containerId).addClass(i.positionClass).attr("aria-live", "polite").attr("role", "alert"), e.appendTo(t(i.target)), e
                }

                function y() {
                    return {
                        tapToDismiss: !0,
                        toastClass: "toast",
                        containerId: "toast-container",
                        debug: !1,
                        showMethod: "fadeIn",
                        showDuration: 300,
                        showEasing: "swing",
                        onShown: void 0,
                        hideMethod: "fadeOut",
                        hideDuration: 1e3,
                        hideEasing: "swing",
                        onHidden: void 0,
                        closeMethod: !1,
                        closeDuration: !1,
                        closeEasing: !1,
                        extendedTimeOut: 1e3,
                        iconClasses: {
                            error: "toast-error",
                            info: "toast-info",
                            success: "toast-success",
                            warning: "toast-warning"
                        },
                        iconClass: "toast-info",
                        positionClass: "toast-top-right",
                        timeOut: 5e3,
                        titleClass: "toast-title",
                        messageClass: "toast-message",
                        escapeHtml: !1,
                        target: "body",
                        closeHtml: '<button type="button">&times;</button>',
                        newestOnTop: !0,
                        preventDuplicates: !1,
                        progressBar: !1
                    }
                }

                function b(t) {
                    i && i(t)
                }

                function w(i) {
                    function g(t) {
                        return null == t && (t = ""), new String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                    }

                    function m() {
                        k(), P(), T(), A(), M(), S()
                    }

                    function y() {
                        c.hover(F, L), !s.onclick && s.tapToDismiss && c.click(E), s.closeButton && f && f.click(function (t) {
                            t.stopPropagation ? t.stopPropagation() : void 0 !== t.cancelBubble && t.cancelBubble !== !0 && (t.cancelBubble = !0), E(!0)
                        }), s.onclick && c.click(function (t) {
                            s.onclick(t), E()
                        })
                    }

                    function w() {
                        c.hide(), c[s.showMethod]({
                            duration: s.showDuration,
                            easing: s.showEasing,
                            complete: s.onShown
                        }), s.timeOut > 0 && (r = setTimeout(E, s.timeOut), p.maxHideTime = parseFloat(s.timeOut), p.hideEta = (new Date).getTime() + p.maxHideTime, s.progressBar && (p.intervalId = setInterval(I, 10)))
                    }

                    function k() {
                        i.iconClass && c.addClass(s.toastClass).addClass(a)
                    }

                    function S() {
                        s.newestOnTop ? e.prepend(c) : e.append(c)
                    }

                    function P() {
                        i.title && (u.append(s.escapeHtml ? g(i.title) : i.title).addClass(s.titleClass), c.append(u))
                    }

                    function T() {
                        i.message && (h.append(s.escapeHtml ? g(i.message) : i.message).addClass(s.messageClass), c.append(h))
                    }

                    function A() {
                        s.closeButton && (f.addClass("toast-close-button").attr("role", "button"), c.prepend(f))
                    }

                    function M() {
                        s.progressBar && (d.addClass("toast-progress"), c.prepend(d))
                    }

                    function O(t, e) {
                        if (t.preventDuplicates) {
                            if (e.message === o) return !0;
                            o = e.message
                        }
                        return !1
                    }

                    function E(e) {
                        var i = e && s.closeMethod !== !1 ? s.closeMethod : s.hideMethod,
                            n = e && s.closeDuration !== !1 ? s.closeDuration : s.hideDuration,
                            a = e && s.closeEasing !== !1 ? s.closeEasing : s.hideEasing;
                        return !t(":focus", c).length || e ? (clearTimeout(p.intervalId), c[i]({
                            duration: n,
                            easing: a,
                            complete: function () {
                                C(c), s.onHidden && "hidden" !== v.state && s.onHidden(), v.state = "hidden", v.endTime = new Date, b(v)
                            }
                        })) : void 0
                    }

                    function L() {
                        (s.timeOut > 0 || s.extendedTimeOut > 0) && (r = setTimeout(E, s.extendedTimeOut), p.maxHideTime = parseFloat(s.extendedTimeOut), p.hideEta = (new Date).getTime() + p.maxHideTime)
                    }

                    function F() {
                        clearTimeout(r), p.hideEta = 0, c.stop(!0, !0)[s.showMethod]({
                            duration: s.showDuration,
                            easing: s.showEasing
                        })
                    }

                    function I() {
                        var t = (p.hideEta - (new Date).getTime()) / p.maxHideTime * 100;
                        d.width(t + "%")
                    }
                    var s = x(),
                        a = i.iconClass || s.iconClass;
                    if ("undefined" != typeof i.optionsOverride && (s = t.extend(s, i.optionsOverride), a = i.optionsOverride.iconClass || a), !O(s, i)) {
                        n++, e = l(s, !0);
                        var r = null,
                            c = t("<div/>"),
                            u = t("<div/>"),
                            h = t("<div/>"),
                            d = t("<div/>"),
                            f = t(s.closeHtml),
                            p = {
                                intervalId: null,
                                hideEta: null,
                                maxHideTime: null
                            },
                            v = {
                                toastId: n,
                                state: "visible",
                                startTime: new Date,
                                options: s,
                                map: i
                            };
                        return m(), w(), y(), b(v), s.debug && console && console.log(v), c
                    }
                }

                function x() {
                    return t.extend({}, y(), a.options)
                }

                function C(t) {
                    e || (e = l()), t.is(":visible") || (t.remove(), t = null, 0 === e.children().length && (e.remove(), o = void 0))
                }
                var e, i, o, n = 0,
                    s = {
                        error: "error",
                        info: "info",
                        success: "success",
                        warning: "warning"
                    },
                    a = {
                        clear: f,
                        remove: p,
                        error: r,
                        getContainer: l,
                        info: c,
                        options: {},
                        subscribe: u,
                        success: h,
                        version: "2.1.2",
                        warning: d
                    };
                return a
            }()
        })
    }("function" == typeof define && define.amd ? define : function (t, e) {
        "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : window.toastr = e(window.jQuery)
    }), $(window).scroll(function () {
        $(".navbar").offset().top > 50 ? $(".navbar-fixed-top").addClass("top-nav-collapse") : $(".navbar-fixed-top").removeClass("top-nav-collapse")
    }), $(function () {
        $("a.page-scroll").bind("click", function (t) {
            var e = $(this);
            $("html, body").stop().animate({
                scrollTop: $(e.attr("href")).offset().top
            }, 1500, "easeInOutExpo"), t.preventDefault()
        })
    }),
    function (t) {
        t.fn.collapsible = function (e) {
            var i = {
                accordion: void 0
            };
            return e = t.extend(i, e), this.each(function () {
                function a(e) {
                    n = i.find("> li > .collapsible-header"), e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function () {
                            t(this).css("height", "")
                        }
                    }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function () {
                            t(this).css("height", "")
                        }
                    }), n.not(e).removeClass("active").parent().removeClass("active"), n.not(e).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function () {
                            t(this).css("height", "")
                        }
                    })
                }

                function o(e) {
                    e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function () {
                            t(this).css("height", "")
                        }
                    }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function () {
                            t(this).css("height", "")
                        }
                    })
                }

                function r(t) {
                    var e = l(t);
                    return e.length > 0
                }

                function l(t) {
                    return t.closest("li > .collapsible-header")
                }
                var i = t(this),
                    n = t(this).find("> li > .collapsible-header"),
                    s = i.data("collapsible");
                i.off("click.collapse", ".collapsible-header"), n.off("click.collapse"), e.accordion || "accordion" === s || void 0 === s ? (n = i.find("> li > .collapsible-header"), n.on("click.collapse", function (e) {
                    var i = t(e.target);
                    r(i) && (i = l(i)), i.toggleClass("active"), a(i)
                }), a(n.filter(".active").first())) : n.each(function () {
                    t(this).on("click.collapse", function (e) {
                        var i = t(e.target);
                        r(i) && (i = l(i)), i.toggleClass("active"), o(i)
                    }), t(this).hasClass("active") && o(t(this))
                })
            })
        }, t(document).ready(function () {
            t(".collapsible").collapsible()
        })
    }(jQuery),
    function (t) {
        var e = {
            init: function (e) {
                var i = {
                    menuWidth: 240,
                    edge: "left",
                    closeOnClick: !1
                };
                e = t.extend(i, e), t(this).each(function () {
                    function s(i) {
                        a = !1, o = !1, t("body").css("overflow", ""), t("#sidenav-overlay").velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function () {
                                t(this).remove()
                            }
                        }), "left" === e.edge ? (t(".drag-target").css({
                            width: "",
                            right: "",
                            left: "0"
                        }), n.velocity({
                            left: -1 * (e.menuWidth + 10)
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutCubic",
                            complete: function () {
                                i === !0 && (n.removeAttr("style"), n.css("width", e.menuWidth))
                            }
                        })) : (t(".drag-target").css({
                            width: "",
                            right: "0",
                            left: ""
                        }), n.velocity({
                            right: -1 * (e.menuWidth + 10)
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutCubic",
                            complete: function () {
                                i === !0 && (n.removeAttr("style"), n.css("width", e.menuWidth))
                            }
                        }))
                    }
                    var i = t(this),
                        n = t("#" + i.attr("data-activates"));
                    240 != e.menuWidth && n.css("width", e.menuWidth), t("body").append(t('<div class="drag-target"></div>')), "left" == e.edge ? (n.css("left", -1 * (e.menuWidth + 10)), t(".drag-target").css({
                        left: 0
                    })) : (n.addClass("right-aligned").css("right", -1 * (e.menuWidth + 10)).css("left", ""), t(".drag-target").css({
                        right: 0
                    })), n.hasClass("fixed") && window.innerWidth > 992 && n.css("left", 0), n.hasClass("fixed") && t(window).resize(function () {
                        window.innerWidth > 992 ? 0 !== t("#sidenav-overlay").css("opacity") && o ? s(!0) : (n.removeAttr("style"), n.css("width", e.menuWidth)) : o === !1 && ("left" === e.edge ? n.css("left", -1 * (e.menuWidth + 10)) : n.css("right", -1 * (e.menuWidth + 10)))
                    }), e.closeOnClick === !0 && n.on("click.itemclick", "a:not(.collapsible-header)", function () {
                        s()
                    });
                    var a = !1,
                        o = !1;
                    t(".drag-target").on("click", function () {
                        s()
                    }), t(".drag-target").hammer({
                        prevent_default: !1
                    }).bind("pan", function (i) {
                        if ("touch" == i.gesture.pointerType) {
                            var r = (i.gesture.direction, i.gesture.center.x);
                            i.gesture.center.y, i.gesture.velocityX;
                            if (t("body").css("overflow", "hidden"), 0 === t("#sidenav-overlay").length) {
                                var u = t('<div id="sidenav-overlay"></div>');
                                u.css("opacity", 0).click(function () {
                                    s()
                                }), t("body").append(u)
                            }
                            if ("left" === e.edge && (r > e.menuWidth ? r = e.menuWidth : 0 > r && (r = 0)), "left" === e.edge) r < e.menuWidth / 2 ? o = !1 : r >= e.menuWidth / 2 && (o = !0), n.css("left", r - e.menuWidth);
                            else {
                                r < window.innerWidth - e.menuWidth / 2 ? o = !0 : r >= window.innerWidth - e.menuWidth / 2 && (o = !1);
                                var h = -1 * (r - e.menuWidth / 2);
                                h > 0 && (h = 0), n.css("right", h)
                            }
                            var d;
                            "left" === e.edge ? (d = r / e.menuWidth, t("#sidenav-overlay").velocity({
                                opacity: d
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            })) : (d = Math.abs((r - window.innerWidth) / e.menuWidth), t("#sidenav-overlay").velocity({
                                opacity: d
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }))
                        }
                    }).bind("panend", function (i) {
                        if ("touch" == i.gesture.pointerType) {
                            var s = i.gesture.velocityX;
                            a = !1, "left" === e.edge ? o && .3 >= s || -.5 > s ? (n.velocity({
                                left: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), t("#sidenav-overlay").velocity({
                                opacity: 1
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), t(".drag-target").css({
                                width: "50%",
                                right: 0,
                                left: ""
                            })) : (!o || s > .3) && (t("body").css("overflow", ""), n.velocity({
                                left: -1 * (e.menuWidth + 10)
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), t("#sidenav-overlay").velocity({
                                opacity: 0
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function () {
                                    t(this).remove()
                                }
                            }), t(".drag-target").css({
                                width: "10px",
                                right: "",
                                left: 0
                            })) : o && s >= -.3 || s > .5 ? (n.velocity({
                                right: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), t("#sidenav-overlay").velocity({
                                opacity: 1
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), t(".drag-target").css({
                                width: "50%",
                                right: "",
                                left: 0
                            })) : (!o || -.3 > s) && (t("body").css("overflow", ""), n.velocity({
                                right: -1 * (e.menuWidth + 10)
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), t("#sidenav-overlay").velocity({
                                opacity: 0
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function () {
                                    t(this).remove()
                                }
                            }), t(".drag-target").css({
                                width: "10px",
                                right: 0,
                                left: ""
                            }))
                        }
                    }), i.click(function () {
                        if (o === !0) o = !1, a = !1, s();
                        else {
                            t("body").css("overflow", "hidden"), "left" === e.edge ? (t(".drag-target").css({
                                width: "50%",
                                right: 0,
                                left: ""
                            }), n.velocity({
                                left: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            })) : (t(".drag-target").css({
                                width: "50%",
                                right: "",
                                left: 0
                            }), n.velocity({
                                right: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), n.css("left", ""));
                            var i = t('<div id="sidenav-overlay"></div>');
                            i.css("opacity", 0).click(function () {
                                o = !1, a = !1, s(), i.velocity({
                                    opacity: 0
                                }, {
                                    duration: 300,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function () {
                                        t(this).remove()
                                    }
                                })
                            }), t("body").append(i), i.velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function () {
                                    o = !0, a = !1
                                }
                            })
                        }
                        return !1
                    })
                })
            },
            show: function () {
                this.trigger("click")
            },
            hide: function () {
                t("#sidenav-overlay").trigger("click")
            }
        };
        t.fn.sideNav = function (i) {
            return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.sideNav") : e.init.apply(this, arguments)
        }
    }(jQuery),
    function (t) {
        var e = 0,
            i = 0,
            n = function () {
                return i++, "materialize-lean-overlay-" + i
            };
        t.fn.extend({
            openModal: function (i) {
                t("body").css("overflow", "hidden");
                var s = {
                        opacity: .5,
                        in_duration: 350,
                        out_duration: 250,
                        ready: void 0,
                        complete: void 0,
                        dismissible: !0,
                        starting_top: "4%"
                    },
                    a = n(),
                    o = t(this),
                    r = t('<div class="lean-overlay"></div>'),
                    l = ++e;
                r.attr("id", a).css("z-index", 1e3 + 2 * l), o.data("overlay-id", a).css("z-index", 1e3 + 2 * l + 1), t("body").append(r), i = t.extend(s, i), i.dismissible && (r.click(function () {
                    o.closeModal(i)
                }), t(document).on("keyup.leanModal" + a, function (t) {
                    27 === t.keyCode && o.closeModal(i)
                })), o.find(".modal-close").on("click.close", function (t) {
                    o.closeModal(i)
                }), r.css({
                    display: "block",
                    opacity: 0
                }), o.css({
                    display: "block",
                    opacity: 0
                }), r.velocity({
                    opacity: i.opacity
                }, {
                    duration: i.in_duration,
                    queue: !1,
                    ease: "easeOutCubic"
                }), o.data("associated-overlay", r[0]), o.hasClass("bottom-sheet") ? o.velocity({
                    bottom: "0",
                    opacity: 1
                }, {
                    duration: i.in_duration,
                    queue: !1,
                    ease: "easeOutCubic",
                    complete: function () {
                        "function" == typeof i.ready && i.ready()
                    }
                }) : (t.Velocity.hook(o, "scaleX", .7), o.css({
                    top: i.starting_top
                }), o.velocity({
                    top: "10%",
                    opacity: 1,
                    scaleX: "1"
                }, {
                    duration: i.in_duration,
                    queue: !1,
                    ease: "easeOutCubic",
                    complete: function () {
                        "function" == typeof i.ready && i.ready()
                    }
                }))
            }
        }), t.fn.extend({
            closeModal: function (i) {
                var n = {
                        out_duration: 250,
                        complete: void 0
                    },
                    s = t(this),
                    a = s.data("overlay-id"),
                    o = t("#" + a);
                i = t.extend(n, i), t("body").css("overflow", ""), s.find(".modal-close").off("click.close"), t(document).off("keyup.leanModal" + a), o.velocity({
                    opacity: 0
                }, {
                    duration: i.out_duration,
                    queue: !1,
                    ease: "easeOutQuart"
                }), s.hasClass("bottom-sheet") ? s.velocity({
                    bottom: "-100%",
                    opacity: 0
                }, {
                    duration: i.out_duration,
                    queue: !1,
                    ease: "easeOutCubic",
                    complete: function () {
                        o.css({
                            display: "none"
                        }), "function" == typeof i.complete && i.complete(), o.remove(), e--
                    }
                }) : s.velocity({
                    top: i.starting_top,
                    opacity: 0,
                    scaleX: .7
                }, {
                    duration: i.out_duration,
                    complete: function () {
                        t(this).css("display", "none"), "function" == typeof i.complete && i.complete(), o.remove(), e--
                    }
                })
            }
        }), t.fn.extend({
            leanModal: function (e) {
                return this.each(function () {
                    var i = {
                            starting_top: "4%"
                        },
                        n = t.extend(i, e);
                    t(this).click(function (e) {
                        n.starting_top = (t(this).offset().top - t(window).scrollTop()) / 1.15;
                        var i = t(this).attr("href") || "#" + t(this).data("target");
                        t(i).openModal(n), e.preventDefault()
                    })
                })
            }
        })
    }(jQuery),
    function (t) {
        t.fn.materialbox = function () {
            return this.each(function () {
                function c() {
                    i = !1;
                    var n = a.parent(".material-placeholder"),
                        l = (window.innerWidth, window.innerHeight, a.data("width")),
                        c = a.data("height");
                    a.velocity("stop", !0), t("#materialbox-overlay").velocity("stop", !0), t(".materialbox-caption").velocity("stop", !0), t("#materialbox-overlay").velocity({
                        opacity: 0
                    }, {
                        duration: s,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function () {
                            e = !1, t(this).remove()
                        }
                    }), a.velocity({
                        width: l,
                        height: c,
                        left: 0,
                        top: 0
                    }, {
                        duration: s,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), t(".materialbox-caption").velocity({
                        opacity: 0
                    }, {
                        duration: s,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function () {
                            n.css({
                                height: "",
                                width: "",
                                position: "",
                                top: "",
                                left: ""
                            }), a.css({
                                height: "",
                                top: "",
                                left: "",
                                width: "",
                                "max-width": "",
                                position: "",
                                "z-index": ""
                            }), a.removeClass("active"), i = !0, t(this).remove()
                        }
                    })
                }
                if (!t(this).hasClass("initialized")) {
                    t(this).addClass("initialized");
                    var e = !1,
                        i = !0,
                        n = 275,
                        s = 200,
                        a = t(this),
                        o = t("<div></div>").addClass("material-placeholder");
                    a.wrap(o), a.on("click", function () {
                        var s = a.parent(".material-placeholder"),
                            o = window.innerWidth,
                            r = window.innerHeight,
                            l = a.width(),
                            u = a.height();
                        if (i === !1) return c(), !1;
                        if (e && i === !0) return c(), !1;
                        i = !1, a.addClass("active"), e = !0, s.css({
                            width: s[0].getBoundingClientRect().width,
                            height: s[0].getBoundingClientRect().height,
                            position: "relative",
                            top: 0,
                            left: 0
                        }), a.css({
                            position: "absolute",
                            "z-index": 1e3
                        }).data("width", l).data("height", u);
                        var h = t('<div id="materialbox-overlay"></div>').css({
                            opacity: 0
                        }).click(function () {
                            i === !0 && c()
                        });
                        if (t("body").append(h), h.velocity({
                                opacity: 1
                            }, {
                                duration: n,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), "" !== a.data("caption")) {
                            var d = t('<div class="materialbox-caption"></div>');
                            d.text(a.data("caption")), t("body").append(d), d.css({
                                display: "inline"
                            }), d.velocity({
                                opacity: 1
                            }, {
                                duration: n,
                                queue: !1,
                                easing: "easeOutQuad"
                            })
                        }
                        var f = 0,
                            p = l / o,
                            v = u / r,
                            g = 0,
                            m = 0;
                        p > v ? (f = u / l, g = .9 * o, m = .9 * o * f) : (f = l / u, g = .9 * r * f, m = .9 * r), a.hasClass("responsive-img") ? a.velocity({
                            "max-width": g,
                            width: l
                        }, {
                            duration: 0,
                            queue: !1,
                            complete: function () {
                                a.css({
                                    left: 0,
                                    top: 0
                                }).velocity({
                                    height: m,
                                    width: g,
                                    left: t(document).scrollLeft() + o / 2 - a.parent(".material-placeholder").offset().left - g / 2,
                                    top: t(document).scrollTop() + r / 2 - a.parent(".material-placeholder").offset().top - m / 2
                                }, {
                                    duration: n,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function () {
                                        i = !0
                                    }
                                })
                            }
                        }) : a.css("left", 0).css("top", 0).velocity({
                            height: m,
                            width: g,
                            left: t(document).scrollLeft() + o / 2 - a.parent(".material-placeholder").offset().left - g / 2,
                            top: t(document).scrollTop() + r / 2 - a.parent(".material-placeholder").offset().top - m / 2
                        }, {
                            duration: n,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function () {
                                i = !0
                            }
                        })
                    }), t(window).scroll(function () {
                        e && c()
                    }), t(document).keyup(function (t) {
                        27 === t.keyCode && i === !0 && e && c()
                    })
                }
            })
        }, t(document).ready(function () {
            t(".materialboxed").materialbox()
        })
    }(jQuery);
var bar = $(".progress-bar-animated");
$(function () {
    $(bar).each(function () {
        bar_width = $(this).attr("aria-valuenow"), $(this).width(bar_width + "%")
    })
});
var selector = ".popout .panel-heading",
    parentSelector = ".popout .panel .active";
$(selector).on("click", function () {
        parentDiv = upTo(this, "DIV"), console.log(parentDiv), $(this).hasClass("active") ? ($(selector).removeClass("active"), $(".popout .panel").removeClass("active")) : ($(selector).removeClass("active"), $(".popout .panel").removeClass("active"), $(this).addClass("active"), $(parentDiv).addClass("active"))
    }), $(function () {
        var t = !0;
        $("#accordion").on("show.bs.collapse", function () {
            t && $("#accordion .in").collapse("hide")
        })
    }),
    function (t) {
        function e() {
            var e = +t(this).attr("length"),
                i = +t(this).val().length,
                n = e >= i;
            t(this).parent().find('span[class="character-counter"]').html(i + "/" + e), s(n, t(this))
        }

        function i(e) {
            var i = t("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1);
            e.parent().append(i)
        }

        function n() {
            t(this).parent().find('span[class="character-counter"]').html("")
        }

        function s(t, e) {
            var i = e.hasClass("invalid");
            t && i ? e.removeClass("invalid") : t || i || (e.removeClass("valid"), e.addClass("invalid"))
        }
        t.fn.characterCounter = function () {
            return this.each(function () {
                var s = void 0 !== t(this).attr("length");
                s && (t(this).on("input", e), t(this).on("focus", e), t(this).on("blur", n), i(t(this)))
            })
        }, t(document).ready(function () {
            t("input, textarea").characterCounter()
        })
    }(jQuery),
    function (t) {
        "function" == typeof define && define.amd ? define("picker", ["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : this.Picker = t(jQuery)
    }(function (t) {
        function s(e, l, c, h) {
            function b() {
                return s._.node("div", s._.node("div", s._.node("div", s._.node("div", y.component.nodes(f.open), v.box), v.wrap), v.frame), v.holder)
            }

            function w() {
                g.data(l, y).addClass(v.input).attr("tabindex", -1).val(g.data("value") ? y.get("select", p.format) : e.value), p.editable || g.on("focus." + f.id + " click." + f.id, function (t) {
                    t.preventDefault(), y.$root[0].focus()
                }).on("keydown." + f.id, k), r(e, {
                    haspopup: !0,
                    expanded: !1,
                    readonly: !1,
                    owns: e.id + "_root"
                })
            }

            function x() {
                y.$root.on({
                    keydown: k,
                    focusin: function (t) {
                        y.$root.removeClass(v.focused), t.stopPropagation()
                    },
                    "mousedown click": function (e) {
                        var i = e.target;
                        i != y.$root.children()[0] && (e.stopPropagation(), "mousedown" != e.type || t(i).is("input, select, textarea, button, option") || (e.preventDefault(), y.$root[0].focus()))
                    }
                }).on({
                    focus: function () {
                        g.addClass(v.target)
                    },
                    blur: function () {
                        g.removeClass(v.target)
                    }
                }).on("focus.toOpen", S).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function () {
                    var e = t(this),
                        i = e.data(),
                        n = e.hasClass(v.navDisabled) || e.hasClass(v.disabled),
                        s = u();
                    s = s && (s.type || s.href), (n || s && !t.contains(y.$root[0], s)) && y.$root[0].focus(), !n && i.nav ? y.set("highlight", y.component.item.highlight, {
                        nav: i.nav
                    }) : !n && "pick" in i ? y.set("select", i.pick) : i.clear ? y.clear().close(!0) : i.close && y.close(!0)
                }), r(y.$root[0], "hidden", !0)
            }

            function C() {
                var i;
                p.hiddenName === !0 ? (i = e.name, e.name = "") : (i = ["string" == typeof p.hiddenPrefix ? p.hiddenPrefix : "", "string" == typeof p.hiddenSuffix ? p.hiddenSuffix : "_submit"], i = i[0] + e.name + i[1]), y._hidden = t('<input type=hidden name="' + i + '"' + (g.data("value") || e.value ? ' value="' + y.get("select", p.formatSubmit) + '"' : "") + ">")[0], g.on("change." + f.id, function () {
                    y._hidden.value = e.value ? y.get("select", p.formatSubmit) : ""
                }), p.container ? t(p.container).append(y._hidden) : g.after(y._hidden)
            }

            function k(t) {
                var e = t.keyCode,
                    i = /^(8|46)$/.test(e);
                return 27 == e ? (y.close(), !1) : void((32 == e || i || !f.open && y.component.key[e]) && (t.preventDefault(), t.stopPropagation(), i ? y.clear().close() : y.open()))
            }

            function S(t) {
                t.stopPropagation(), "focus" == t.type && y.$root.addClass(v.focused), y.open()
            }
            if (!e) return s;
            var d = !1,
                f = {
                    id: e.id || "P" + Math.abs(~~(Math.random() * new Date))
                },
                p = c ? t.extend(!0, {}, c.defaults, h) : h || {},
                v = t.extend({}, s.klasses(), p.klass),
                g = t(e),
                m = function () {
                    return this.start()
                },
                y = m.prototype = {
                    constructor: m,
                    $node: g,
                    start: function () {
                        return f && f.start ? y : (f.methods = {}, f.start = !0, f.open = !1, f.type = e.type, e.autofocus = e == u(), e.readOnly = !p.editable, e.id = e.id || f.id, "text" != e.type && (e.type = "text"), y.component = new c(y, p), y.$root = t(s._.node("div", b(), v.picker, 'id="' + e.id + '_root" tabindex="0"')), x(), p.formatSubmit && C(), w(), p.container ? t(p.container).append(y.$root) : g.after(y.$root), y.on({
                            start: y.component.onStart,
                            render: y.component.onRender,
                            stop: y.component.onStop,
                            open: y.component.onOpen,
                            close: y.component.onClose,
                            set: y.component.onSet
                        }).on({
                            start: p.onStart,
                            render: p.onRender,
                            stop: p.onStop,
                            open: p.onOpen,
                            close: p.onClose,
                            set: p.onSet
                        }), d = a(y.$root.children()[0]), e.autofocus && y.open(), y.trigger("start").trigger("render"))
                    },
                    render: function (t) {
                        return t ? y.$root.html(b()) : y.$root.find("." + v.box).html(y.component.nodes(f.open)), y.trigger("render")
                    },
                    stop: function () {
                        return f.start ? (y.close(), y._hidden && y._hidden.parentNode.removeChild(y._hidden), y.$root.remove(), g.removeClass(v.input).removeData(l), setTimeout(function () {
                            g.off("." + f.id)
                        }, 0), e.type = f.type, e.readOnly = !1, y.trigger("stop"), f.methods = {}, f.start = !1, y) : y
                    },
                    open: function (a) {
                        return f.open ? y : (g.addClass(v.active), r(e, "expanded", !0), setTimeout(function () {
                            y.$root.addClass(v.opened), r(y.$root[0], "hidden", !1)
                        }, 0), a !== !1 && (f.open = !0, d && n.css("overflow", "hidden").css("padding-right", "+=" + o()), y.$root[0].focus(), i.on("click." + f.id + " focusin." + f.id, function (t) {
                            var i = t.target;
                            i != e && i != document && 3 != t.which && y.close(i === y.$root.children()[0])
                        }).on("keydown." + f.id, function (e) {
                            var i = e.keyCode,
                                n = y.component.key[i],
                                a = e.target;
                            27 == i ? y.close(!0) : a != y.$root[0] || !n && 13 != i ? t.contains(y.$root[0], a) && 13 == i && (e.preventDefault(), a.click()) : (e.preventDefault(), n ? s._.trigger(y.component.key.go, y, [s._.trigger(n)]) : y.$root.find("." + v.highlighted).hasClass(v.disabled) || y.set("select", y.component.item.highlight).close())
                        })), y.trigger("open"))
                    },
                    close: function (t) {
                        return t && (y.$root.off("focus.toOpen")[0].focus(), setTimeout(function () {
                            y.$root.on("focus.toOpen", S)
                        }, 0)), g.removeClass(v.active), r(e, "expanded", !1), setTimeout(function () {
                            y.$root.removeClass(v.opened + " " + v.focused), r(y.$root[0], "hidden", !0)
                        }, 0), f.open ? (f.open = !1, d && n.css("overflow", "").css("padding-right", "-=" + o()), i.off("." + f.id), y.trigger("close")) : y
                    },
                    clear: function (t) {
                        return y.set("clear", null, t)
                    },
                    set: function (e, i, n) {
                        var s, a, o = t.isPlainObject(e),
                            r = o ? e : {};
                        if (n = o && t.isPlainObject(i) ? i : n || {}, e) {
                            o || (r[e] = i);
                            for (s in r) a = r[s], s in y.component.item && (void 0 === a && (a = null), y.component.set(s, a, n)), ("select" == s || "clear" == s) && g.val("clear" == s ? "" : y.get(s, p.format)).trigger("change");
                            y.render()
                        }
                        return n.muted ? y : y.trigger("set", r)
                    },
                    get: function (t, i) {
                        if (t = t || "value", null != f[t]) return f[t];
                        if ("valueSubmit" == t) {
                            if (y._hidden) return y._hidden.value;
                            t = "value"
                        }
                        if ("value" == t) return e.value;
                        if (t in y.component.item) {
                            if ("string" == typeof i) {
                                var n = y.component.get(t);
                                return n ? s._.trigger(y.component.formats.toString, y.component, [i, n]) : ""
                            }
                            return y.component.get(t)
                        }
                    },
                    on: function (e, i, n) {
                        var s, a, o = t.isPlainObject(e),
                            r = o ? e : {};
                        if (e) {
                            o || (r[e] = i);
                            for (s in r) a = r[s], n && (s = "_" + s), f.methods[s] = f.methods[s] || [], f.methods[s].push(a)
                        }
                        return y
                    },
                    off: function () {
                        var t, e, i = arguments;
                        for (t = 0, namesCount = i.length; t < namesCount; t += 1) e = i[t], e in f.methods && delete f.methods[e];
                        return y
                    },
                    trigger: function (t, e) {
                        var i = function (t) {
                            var i = f.methods[t];
                            i && i.map(function (t) {
                                s._.trigger(t, y, [e])
                            })
                        };
                        return i("_" + t), i(t), y
                    }
                };
            return new m
        }

        function a(t) {
            var e, i = "position";
            return t.currentStyle ? e = t.currentStyle[i] : window.getComputedStyle && (e = getComputedStyle(t)[i]), "fixed" == e
        }

        function o() {
            if (n.height() <= e.height()) return 0;
            var i = t('<div style="visibility:hidden;width:100px" />').appendTo("body"),
                s = i[0].offsetWidth;
            i.css("overflow", "scroll");
            var a = t('<div style="width:100%" />').appendTo(i),
                o = a[0].offsetWidth;
            return i.remove(), s - o
        }

        function r(e, i, n) {
            if (t.isPlainObject(i))
                for (var s in i) l(e, s, i[s]);
            else l(e, i, n)
        }

        function l(t, e, i) {
            t.setAttribute(("role" == e ? "" : "aria-") + e, i)
        }

        function c(e, i) {
            t.isPlainObject(e) || (e = {
                attribute: i
            }), i = "";
            for (var n in e) {
                var s = ("role" == n ? "" : "aria-") + n,
                    a = e[n];
                i += null == a ? "" : s + '="' + e[n] + '"'
            }
            return i
        }

        function u() {
            try {
                return document.activeElement
            } catch (t) {}
        }
        var e = t(window),
            i = t(document),
            n = t(document.documentElement);
        return s.klasses = function (t) {
            return t = t || "picker", {
                picker: t,
                opened: t + "--opened",
                focused: t + "--focused",
                input: t + "__input",
                active: t + "__input--active",
                target: t + "__input--target",
                holder: t + "__holder",
                frame: t + "__frame",
                wrap: t + "__wrap",
                box: t + "__box"
            }
        }, s._ = {
            group: function (t) {
                for (var e, i = "", n = s._.trigger(t.min, t); n <= s._.trigger(t.max, t, [n]); n += t.i) e = s._.trigger(t.item, t, [n]), i += s._.node(t.node, e[0], e[1], e[2]);
                return i
            },
            node: function (e, i, n, s) {
                return i ? (i = t.isArray(i) ? i.join("") : i, n = n ? ' class="' + n + '"' : "", s = s ? " " + s : "", "<" + e + n + s + ">" + i + "</" + e + ">") : ""
            },
            lead: function (t) {
                return (10 > t ? "0" : "") + t
            },
            trigger: function (t, e, i) {
                return "function" == typeof t ? t.apply(e, i || []) : t
            },
            digits: function (t) {
                return /\d/.test(t[1]) ? 2 : 1
            },
            isDate: function (t) {
                return {}.toString.call(t).indexOf("Date") > -1 && this.isInteger(t.getDate())
            },
            isInteger: function (t) {
                return {}.toString.call(t).indexOf("Number") > -1 && t % 1 === 0
            },
            ariaAttr: c
        }, s.extend = function (e, i) {
            t.fn[e] = function (n, a) {
                var o = this.data(e);
                return "picker" == n ? o : o && "string" == typeof n ? s._.trigger(o[n], o, [a]) : this.each(function () {
                    var a = t(this);
                    a.data(e) || new s(this, e, i, n)
                })
            }, t.fn[e].defaults = i.defaults
        }, s
    }),
    function (t) {
        "function" == typeof define && define.amd ? define(["picker", "jquery"], t) : "object" == typeof exports ? module.exports = t(require("./picker.js"), require("jquery")) : t(Picker, jQuery)
    }(function (t, e) {
        function a(t, e) {
            var i = this,
                n = t.$node[0],
                s = n.value,
                a = t.$node.data("value"),
                o = a || s,
                r = a ? e.formatSubmit : e.format,
                l = function () {
                    return n.currentStyle ? "rtl" == n.currentStyle.direction : "rtl" == getComputedStyle(t.$root[0]).direction
                };
            i.settings = e, i.$node = t.$node, i.queue = {
                min: "measure create",
                max: "measure create",
                now: "now create",
                select: "parse create validate",
                highlight: "parse navigate create validate",
                view: "parse create validate viewset",
                disable: "deactivate",
                enable: "activate"
            }, i.item = {}, i.item.clear = null, i.item.disable = (e.disable || []).slice(0), i.item.enable = - function (t) {
                return t[0] === !0 ? t.shift() : -1
            }(i.item.disable), i.set("min", e.min).set("max", e.max).set("now"), o ? i.set("select", o, {
                format: r
            }) : i.set("select", null).set("highlight", i.item.now), i.key = {
                40: 7,
                38: -7,
                39: function () {
                    return l() ? -1 : 1
                },
                37: function () {
                    return l() ? 1 : -1
                },
                go: function (t) {
                    var e = i.item.highlight,
                        n = new Date(e.year, e.month, e.date + t);
                    i.set("highlight", n, {
                        interval: t
                    }), this.render()
                }
            }, t.on("render", function () {
                t.$root.find("." + e.klass.selectMonth).on("change", function () {
                    var i = this.value;
                    i && (t.set("highlight", [t.get("view").year, i, t.get("highlight").date]), t.$root.find("." + e.klass.selectMonth).trigger("focus"))
                }), t.$root.find("." + e.klass.selectYear).on("change", function () {
                    var i = this.value;
                    i && (t.set("highlight", [i, t.get("view").month, t.get("highlight").date]), t.$root.find("." + e.klass.selectYear).trigger("focus"))
                })
            }, 1).on("open", function () {
                var n = "";
                i.disabled(i.get("now")) && (n = ":not(." + e.klass.buttonToday + ")"), t.$root.find("button" + n + ", select").attr("disabled", !1)
            }, 1).on("close", function () {
                t.$root.find("button, select").attr("disabled", !0)
            }, 1)
        }
        var i = 7,
            n = 6,
            s = t._;
        a.prototype.set = function (t, e, i) {
            var n = this,
                s = n.item;
            return null === e ? ("clear" == t && (t = "select"), s[t] = e, n) : (s["enable" == t ? "disable" : "flip" == t ? "enable" : t] = n.queue[t].split(" ").map(function (s) {
                return e = n[s](t, e, i)
            }).pop(), "select" == t ? n.set("highlight", s.select, i) : "highlight" == t ? n.set("view", s.highlight, i) : t.match(/^(flip|min|max|disable|enable)$/) && (s.select && n.disabled(s.select) && n.set("select", s.select, i), s.highlight && n.disabled(s.highlight) && n.set("highlight", s.highlight, i)), n)
        }, a.prototype.get = function (t) {
            return this.item[t]
        }, a.prototype.create = function (t, i, n) {
            var a, o = this;
            return i = void 0 === i ? t : i, i == -(1 / 0) || i == 1 / 0 ? a = i : e.isPlainObject(i) && s.isInteger(i.pick) ? i = i.obj : e.isArray(i) ? (i = new Date(i[0], i[1], i[2]), i = s.isDate(i) ? i : o.create().obj) : i = s.isInteger(i) || s.isDate(i) ? o.normalize(new Date(i), n) : o.now(t, i, n), {
                year: a || i.getFullYear(),
                month: a || i.getMonth(),
                date: a || i.getDate(),
                day: a || i.getDay(),
                obj: a || i,
                pick: a || i.getTime()
            }
        }, a.prototype.createRange = function (t, i) {
            var n = this,
                a = function (t) {
                    return t === !0 || e.isArray(t) || s.isDate(t) ? n.create(t) : t
                };
            return s.isInteger(t) || (t = a(t)), s.isInteger(i) || (i = a(i)), s.isInteger(t) && e.isPlainObject(i) ? t = [i.year, i.month, i.date + t] : s.isInteger(i) && e.isPlainObject(t) && (i = [t.year, t.month, t.date + i]), {
                from: a(t),
                to: a(i)
            }
        }, a.prototype.withinRange = function (t, e) {
            return t = this.createRange(t.from, t.to), e.pick >= t.from.pick && e.pick <= t.to.pick
        }, a.prototype.overlapRanges = function (t, e) {
            var i = this;
            return t = i.createRange(t.from, t.to), e = i.createRange(e.from, e.to), i.withinRange(t, e.from) || i.withinRange(t, e.to) || i.withinRange(e, t.from) || i.withinRange(e, t.to)
        }, a.prototype.now = function (t, e, i) {
            return e = new Date, i && i.rel && e.setDate(e.getDate() + i.rel), this.normalize(e, i)
        }, a.prototype.navigate = function (t, i, n) {
            var s, a, o, r, l = e.isArray(i),
                c = e.isPlainObject(i),
                u = this.item.view;
            if (l || c) {
                for (c ? (a = i.year, o = i.month, r = i.date) : (a = +i[0], o = +i[1], r = +i[2]), n && n.nav && u && u.month !== o && (a = u.year, o = u.month), s = new Date(a, o + (n && n.nav ? n.nav : 0), 1), a = s.getFullYear(), o = s.getMonth(); new Date(a, o, r).getMonth() !== o;) r -= 1;
                i = [a, o, r]
            }
            return i
        }, a.prototype.normalize = function (t) {
            return t.setHours(0, 0, 0, 0), t
        }, a.prototype.measure = function (t, e) {
            var i = this;
            return e ? "string" == typeof e ? e = i.parse(t, e) : s.isInteger(e) && (e = i.now(t, e, {
                rel: e
            })) : e = "min" == t ? -(1 / 0) : 1 / 0, e
        }, a.prototype.viewset = function (t, e) {
            return this.create([e.year, e.month, 1])
        }, a.prototype.validate = function (t, i, n) {
            var c, u, f, p, a = this,
                o = i,
                r = n && n.interval ? n.interval : 1,
                l = -1 === a.item.enable,
                h = a.item.min,
                d = a.item.max,
                v = l && a.item.disable.filter(function (t) {
                    if (e.isArray(t)) {
                        var n = a.create(t).pick;
                        n < i.pick ? c = !0 : n > i.pick && (u = !0)
                    }
                    return s.isInteger(t)
                }).length;
            if ((!n || !n.nav) && (!l && a.disabled(i) || l && a.disabled(i) && (v || c || u) || !l && (i.pick <= h.pick || i.pick >= d.pick)))
                for (l && !v && (!u && r > 0 || !c && 0 > r) && (r *= -1); a.disabled(i) && (Math.abs(r) > 1 && (i.month < o.month || i.month > o.month) && (i = o, r = r > 0 ? 1 : -1), i.pick <= h.pick ? (f = !0, r = 1, i = a.create([h.year, h.month, h.date + (i.pick === h.pick ? 0 : -1)])) : i.pick >= d.pick && (p = !0, r = -1, i = a.create([d.year, d.month, d.date + (i.pick === d.pick ? 0 : 1)])), !f || !p);) i = a.create([i.year, i.month, i.date + r]);
            return i
        }, a.prototype.disabled = function (t) {
            var i = this,
                n = i.item.disable.filter(function (n) {
                    return s.isInteger(n) ? t.day === (i.settings.firstDay ? n : n - 1) % 7 : e.isArray(n) || s.isDate(n) ? t.pick === i.create(n).pick : e.isPlainObject(n) ? i.withinRange(n, t) : void 0
                });
            return n = n.length && !n.filter(function (t) {
                return e.isArray(t) && "inverted" == t[3] || e.isPlainObject(t) && t.inverted
            }).length, -1 === i.item.enable ? !n : n || t.pick < i.item.min.pick || t.pick > i.item.max.pick
        }, a.prototype.parse = function (t, e, i) {
            var n = this,
                a = {};
            return e && "string" == typeof e ? (i && i.format || (i = i || {}, i.format = n.settings.format), n.formats.toArray(i.format).map(function (t) {
                var i = n.formats[t],
                    o = i ? s.trigger(i, n, [e, a]) : t.replace(/^!/, "").length;
                i && (a[t] = e.substr(0, o)), e = e.substr(o)
            }), [a.yyyy || a.yy, +(a.mm || a.m) - 1, a.dd || a.d]) : e
        }, a.prototype.formats = function () {
            function t(t, e, i) {
                var n = t.match(/\w+/)[0];
                return i.mm || i.m || (i.m = e.indexOf(n) + 1), n.length
            }

            function e(t) {
                return t.match(/\w+/)[0].length
            }
            return {
                d: function (t, e) {
                    return t ? s.digits(t) : e.date
                },
                dd: function (t, e) {
                    return t ? 2 : s.lead(e.date)
                },
                ddd: function (t, i) {
                    return t ? e(t) : this.settings.weekdaysShort[i.day]
                },
                dddd: function (t, i) {
                    return t ? e(t) : this.settings.weekdaysFull[i.day]
                },
                m: function (t, e) {
                    return t ? s.digits(t) : e.month + 1
                },
                mm: function (t, e) {
                    return t ? 2 : s.lead(e.month + 1)
                },
                mmm: function (e, i) {
                    var n = this.settings.monthsShort;
                    return e ? t(e, n, i) : n[i.month]
                },
                mmmm: function (e, i) {
                    var n = this.settings.monthsFull;
                    return e ? t(e, n, i) : n[i.month]
                },
                yy: function (t, e) {
                    return t ? 2 : ("" + e.year).slice(2)
                },
                yyyy: function (t, e) {
                    return t ? 4 : e.year
                },
                toArray: function (t) {
                    return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
                },
                toString: function (t, e) {
                    var i = this;
                    return i.formats.toArray(t).map(function (t) {
                        return s.trigger(i.formats[t], i, [0, e]) || t.replace(/^!/, "")
                    }).join("")
                }
            }
        }(), a.prototype.isDateExact = function (t, i) {
            var n = this;
            return s.isInteger(t) && s.isInteger(i) || "boolean" == typeof t && "boolean" == typeof i ? t === i : (s.isDate(t) || e.isArray(t)) && (s.isDate(i) || e.isArray(i)) ? n.create(t).pick === n.create(i).pick : e.isPlainObject(t) && e.isPlainObject(i) ? n.isDateExact(t.from, i.from) && n.isDateExact(t.to, i.to) : !1
        }, a.prototype.isDateOverlap = function (t, i) {
            var n = this,
                a = n.settings.firstDay ? 1 : 0;
            return s.isInteger(t) && (s.isDate(i) || e.isArray(i)) ? (t = t % 7 + a, t === n.create(i).day + 1) : s.isInteger(i) && (s.isDate(t) || e.isArray(t)) ? (i = i % 7 + a, i === n.create(t).day + 1) : e.isPlainObject(t) && e.isPlainObject(i) ? n.overlapRanges(t, i) : !1
        }, a.prototype.flipEnable = function (t) {
            var e = this.item;
            e.enable = t || (-1 == e.enable ? 1 : -1)
        }, a.prototype.deactivate = function (t, i) {
            var n = this,
                a = n.item.disable.slice(0);
            return "flip" == i ? n.flipEnable() : i === !1 ? (n.flipEnable(1), a = []) : i === !0 ? (n.flipEnable(-1), a = []) : i.map(function (t) {
                for (var i, o = 0; o < a.length; o += 1)
                    if (n.isDateExact(t, a[o])) {
                        i = !0;
                        break
                    }
                i || (s.isInteger(t) || s.isDate(t) || e.isArray(t) || e.isPlainObject(t) && t.from && t.to) && a.push(t)
            }), a
        }, a.prototype.activate = function (t, i) {
            var n = this,
                a = n.item.disable,
                o = a.length;
            return "flip" == i ? n.flipEnable() : i === !0 ? (n.flipEnable(1), a = []) : i === !1 ? (n.flipEnable(-1), a = []) : i.map(function (t) {
                var i, r, l, c;
                for (l = 0; o > l; l += 1) {
                    if (r = a[l], n.isDateExact(r, t)) {
                        i = a[l] = null, c = !0;
                        break
                    }
                    if (n.isDateOverlap(r, t)) {
                        e.isPlainObject(t) ? (t.inverted = !0, i = t) : e.isArray(t) ? (i = t, i[3] || i.push("inverted")) : s.isDate(t) && (i = [t.getFullYear(), t.getMonth(), t.getDate(), "inverted"]);
                        break
                    }
                }
                if (i)
                    for (l = 0; o > l; l += 1)
                        if (n.isDateExact(a[l], t)) {
                            a[l] = null;
                            break
                        }
                if (c)
                    for (l = 0; o > l; l += 1)
                        if (n.isDateOverlap(a[l], t)) {
                            a[l] = null;
                            break
                        }
                i && a.push(i)
            }), a.filter(function (t) {
                return null != t
            })
        }, a.prototype.nodes = function (t) {
            var e = this,
                a = e.settings,
                o = e.item,
                r = o.now,
                l = o.select,
                c = o.highlight,
                u = o.view,
                h = o.disable,
                d = o.min,
                f = o.max,
                p = function (t, e) {
                    return a.firstDay && (t.push(t.shift()), e.push(e.shift())), s.node("thead", s.node("tr", s.group({
                        min: 0,
                        max: i - 1,
                        i: 1,
                        node: "th",
                        item: function (i) {
                            return [t[i], a.klass.weekdays, 'scope=col title="' + e[i] + '"']
                        }
                    })))
                }((a.showWeekdaysFull ? a.weekdaysFull : a.weekdaysLetter).slice(0), a.weekdaysFull.slice(0)),
                v = function (t) {
                    return s.node("div", " ", a.klass["nav" + (t ? "Next" : "Prev")] + (t && u.year >= f.year && u.month >= f.month || !t && u.year <= d.year && u.month <= d.month ? " " + a.klass.navDisabled : ""), "data-nav=" + (t || -1) + " " + s.ariaAttr({
                        role: "button",
                        controls: e.$node[0].id + "_table"
                    }) + ' title="' + (t ? a.labelMonthNext : a.labelMonthPrev) + '"')
                },
                g = function (i) {
                    var n = a.showMonthsShort ? a.monthsShort : a.monthsFull;
                    return "short_months" == i && (n = a.monthsShort), a.selectMonths && void 0 == i ? s.node("select", s.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: "option",
                        item: function (t) {
                            return [n[t], 0, "value=" + t + (u.month == t ? " selected" : "") + (u.year == d.year && t < d.month || u.year == f.year && t > f.month ? " disabled" : "")]
                        }
                    }), a.klass.selectMonth + " browser-default", (t ? "" : "disabled") + " " + s.ariaAttr({
                        controls: e.$node[0].id + "_table"
                    }) + ' title="' + a.labelMonthSelect + '"') : "short_months" == i ? null != l ? s.node("div", n[l.month]) : s.node("div", n[u.month]) : s.node("div", n[u.month], a.klass.month)
                },
                m = function (i) {
                    var n = u.year,
                        o = a.selectYears === !0 ? 5 : ~~(a.selectYears / 2);
                    if (o) {
                        var r = d.year,
                            l = f.year,
                            c = n - o,
                            h = n + o;
                        if (r > c && (h += r - c, c = r), h > l) {
                            var p = c - r,
                                v = h - l;
                            c -= p > v ? v : p, h = l
                        }
                        if (a.selectYears && void 0 == i) return s.node("select", s.group({
                            min: c,
                            max: h,
                            i: 1,
                            node: "option",
                            item: function (t) {
                                return [t, 0, "value=" + t + (n == t ? " selected" : "")]
                            }
                        }), a.klass.selectYear + " browser-default", (t ? "" : "disabled") + " " + s.ariaAttr({
                            controls: e.$node[0].id + "_table"
                        }) + ' title="' + a.labelYearSelect + '"')
                    }
                    return "raw" == i ? s.node("div", n) : s.node("div", n, a.klass.year)
                };
            return createDayLabel = function () {
                return null != l ? s.node("div", l.date) : s.node("div", r.date)
            }, createWeekdayLabel = function () {
                var t;
                t = null != l ? l.day : r.day;
                var e = a.weekdaysFull[t];
                return e
            }, s.node("div", s.node("div", createWeekdayLabel(), "picker__weekday-display") + s.node("div", g("short_months"), a.klass.month_display) + s.node("div", createDayLabel(), a.klass.day_display) + s.node("div", m("raw"), a.klass.year_display), a.klass.date_display) + s.node("div", s.node("div", (a.selectYears ? g() + m() : g() + m()) + v() + v(1), a.klass.header) + s.node("table", p + s.node("tbody", s.group({
                min: 0,
                max: n - 1,
                i: 1,
                node: "tr",
                item: function (t) {
                    var n = a.firstDay && 0 === e.create([u.year, u.month, 1]).day ? -7 : 0;
                    return [s.group({
                        min: i * t - u.day + n + 1,
                        max: function () {
                            return this.min + i - 1
                        },
                        i: 1,
                        node: "td",
                        item: function (t) {
                            t = e.create([u.year, u.month, t + (a.firstDay ? 1 : 0)]);
                            var i = l && l.pick == t.pick,
                                n = c && c.pick == t.pick,
                                o = h && e.disabled(t) || t.pick < d.pick || t.pick > f.pick,
                                p = s.trigger(e.formats.toString, e, [a.format, t]);
                            return [s.node("div", t.date, function (e) {
                                return e.push(u.month == t.month ? a.klass.infocus : a.klass.outfocus), r.pick == t.pick && e.push(a.klass.now), i && e.push(a.klass.selected), n && e.push(a.klass.highlighted), o && e.push(a.klass.disabled), e.join(" ")
                            }([a.klass.day]), "data-pick=" + t.pick + " " + s.ariaAttr({
                                role: "gridcell",
                                label: p,
                                selected: i && e.$node.val() === p ? !0 : null,
                                activedescendant: n ? !0 : null,
                                disabled: o ? !0 : null
                            })), "", s.ariaAttr({
                                role: "presentation"
                            })]
                        }
                    })]
                }
            })), a.klass.table, 'id="' + e.$node[0].id + '_table" ' + s.ariaAttr({
                role: "grid",
                controls: e.$node[0].id,
                readonly: !0
            })), a.klass.calendar_container) + s.node("div", s.node("button", a.today, "btn-flat picker__today", "type=button data-pick=" + r.pick + (t && !e.disabled(r) ? "" : " disabled") + " " + s.ariaAttr({
                controls: e.$node[0].id
            })) + s.node("button", a.clear, "btn-flat picker__clear", "type=button data-clear=1" + (t ? "" : " disabled") + " " + s.ariaAttr({
                controls: e.$node[0].id
            })) + s.node("button", a.close, "btn-flat picker__close", "type=button data-close=true " + (t ? "" : " disabled") + " " + s.ariaAttr({
                controls: e.$node[0].id
            })), a.klass.footer)
        }, a.defaults = function (t) {
            return {
                labelMonthNext: "Next month",
                labelMonthPrev: "Previous month",
                labelMonthSelect: "Select a month",
                labelYearSelect: "Select a year",
                monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                weekdaysLetter: ["S", "M", "T", "W", "T", "F", "S"],
                today: "Today",
                clear: "Clear",
                close: "Close",
                format: "d mmmm, yyyy",
                klass: {
                    table: t + "table",
                    header: t + "header",
                    date_display: t + "date-display",
                    day_display: t + "day-display",
                    month_display: t + "month-display",
                    year_display: t + "year-display",
                    calendar_container: t + "calendar-container",
                    navPrev: t + "nav--prev",
                    navNext: t + "nav--next",
                    navDisabled: t + "nav--disabled",
                    month: t + "month",
                    year: t + "year",
                    selectMonth: t + "select--month",
                    selectYear: t + "select--year",
                    weekdays: t + "weekday",
                    day: t + "day",
                    disabled: t + "day--disabled",
                    selected: t + "day--selected",
                    highlighted: t + "day--highlighted",
                    now: t + "day--today",
                    infocus: t + "day--infocus",
                    outfocus: t + "day--outfocus",
                    footer: t + "footer",
                    buttonClear: t + "button--clear",
                    buttonToday: t + "button--today",
                    buttonClose: t + "button--close"
                }
            }
        }(t.klasses().picker + "__"), t.extend("pickadate", a)
    }),
    function () {
        function h(t) {
            return document.createElementNS(n, t)
        }

        function d(t) {
            return (10 > t ? "0" : "") + t
        }

        function p(t) {
            var e = ++f + "";
            return t ? t + e : e
        }

        function C(e, n) {
            function W(t, e) {
                var a = o.offset(),
                    r = /^touch/.test(t.type),
                    u = a.left + v,
                    h = a.top + v,
                    d = (r ? t.originalEvent.touches[0] : t).pageX - u,
                    f = (r ? t.originalEvent.touches[0] : t).pageY - h,
                    p = Math.sqrt(d * d + f * f),
                    m = !1;
                if (!e || !(g - y > p || p > g + y)) {
                    t.preventDefault();
                    var b = setTimeout(function () {
                        M.popover.addClass("clockpicker-moving")
                    }, 200);
                    s && o.append(M.canvas), M.setHand(d, f, !e, !0), i.off(l).on(l, function (t) {
                        t.preventDefault();
                        var e = /^touch/.test(t.type),
                            i = (e ? t.originalEvent.touches[0] : t).pageX - u,
                            n = (e ? t.originalEvent.touches[0] : t).pageY - h;
                        (m || i !== d || n !== f) && (m = !0, M.setHand(i, n, !1, !0))
                    }), i.off(c).on(c, function (t) {
                        i.off(c), t.preventDefault();
                        var s = /^touch/.test(t.type),
                            a = (s ? t.originalEvent.changedTouches[0] : t).pageX - u,
                            r = (s ? t.originalEvent.changedTouches[0] : t).pageY - h;
                        (e || m) && a === d && r === f && M.setHand(a, r), "hours" === M.currentView ? M.toggleView("minutes", w / 2) : n.autoclose && (M.minutesView.addClass("clockpicker-dial-out"), setTimeout(function () {
                            M.done()
                        }, w / 2)), o.prepend(_), clearTimeout(b), M.popover.removeClass("clockpicker-moving"), i.off(l)
                    })
                }
            }
            var a = t(x),
                o = a.find(".clockpicker-plate"),
                u = a.find(".picker__holder"),
                f = a.find(".clockpicker-hours"),
                C = a.find(".clockpicker-minutes"),
                S = a.find(".clockpicker-am-pm-block"),
                P = "INPUT" === e.prop("tagName"),
                T = P ? e : e.find("input"),
                A = t("label[for=" + T.attr("id") + "]"),
                M = this;
            if (this.id = p("cp"), this.element = e, this.holder = u, this.options = n, this.isAppended = !1, this.isShown = !1, this.currentView = "hours", this.isInput = P, this.input = T, this.label = A, this.popover = a, this.plate = o, this.hoursView = f, this.minutesView = C, this.amPmBlock = S, this.spanHours = a.find(".clockpicker-span-hours"), this.spanMinutes = a.find(".clockpicker-span-minutes"), this.spanAmPm = a.find(".clockpicker-span-am-pm"), this.footer = a.find(".picker__footer"), this.amOrPm = "PM", n.twelvehour) {
                var E = ['<div class="clockpicker-am-pm-block">', '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-am-button">', "AM", "</button>", '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-pm-button">', "PM", "</button>", "</div>"].join("");
                t(E);
                n.ampmclickable ? (this.spanAmPm.empty(), t('<div id="click-am">AM</div>').on("click", function () {
                    M.spanAmPm.children("#click-am").addClass("text-primary"), M.spanAmPm.children("#click-pm").removeClass("text-primary"), M.amOrPm = "AM"
                }).appendTo(this.spanAmPm), t('<div id="click-pm">PM</div>').on("click", function () {
                    M.spanAmPm.children("#click-pm").addClass("text-primary"), M.spanAmPm.children("#click-am").removeClass("text-primary"), M.amOrPm = "PM"
                }).appendTo(this.spanAmPm)) : (t('<button type="button" class="btn-floating btn-flat clockpicker-button am-button" tabindex="1">AM</button>').on("click", function () {
                    M.amOrPm = "AM", M.amPmBlock.children(".pm-button").removeClass("active"), M.amPmBlock.children(".am-button").addClass("active"), M.spanAmPm.empty().append("AM")
                }).appendTo(this.amPmBlock), t('<button type="button" class="btn-floating btn-flat clockpicker-button pm-button" tabindex="2">PM</button>').on("click", function () {
                    M.amOrPm = "PM", M.amPmBlock.children(".am-button").removeClass("active"), M.amPmBlock.children(".pm-button").addClass("active"), M.spanAmPm.empty().append("PM")
                }).appendTo(this.amPmBlock))
            }
            n.darktheme && a.addClass("darktheme"), t('<button type="button" class="btn-flat clockpicker-button" tabindex="' + (n.twelvehour ? "3" : "1") + '">' + n.donetext + "</button>").click(t.proxy(this.done, this)).appendTo(this.footer), this.spanHours.click(t.proxy(this.toggleView, this, "hours")), this.spanMinutes.click(t.proxy(this.toggleView, this, "minutes")), T.on("focus.clockpicker click.clockpicker", t.proxy(this.show, this));
            var I, z, V, D, F = t('<div class="clockpicker-tick"></div>');
            if (n.twelvehour)
                for (I = 1; 13 > I; I += 1) z = F.clone(), V = I / 6 * Math.PI, D = g, z.css("font-size", "140%"), z.css({
                    left: v + Math.sin(V) * D - y,
                    top: v - Math.cos(V) * D - y
                }), z.html(0 === I ? "00" : I), f.append(z), z.on(r, W);
            else
                for (I = 0; 24 > I; I += 1) {
                    z = F.clone(), V = I / 6 * Math.PI;
                    var R = I > 0 && 13 > I;
                    D = R ? m : g, z.css({
                        left: v + Math.sin(V) * D - y,
                        top: v - Math.cos(V) * D - y
                    }), R && z.css("font-size", "120%"), z.html(0 === I ? "00" : I), f.append(z), z.on(r, W)
                }
            for (I = 0; 60 > I; I += 5) z = F.clone(), V = I / 30 * Math.PI, z.css({
                left: v + Math.sin(V) * g - y,
                top: v - Math.cos(V) * g - y
            }), z.css("font-size", "140%"), z.html(d(I)), C.append(z), z.on(r, W);
            if (o.on(r, function (e) {
                    0 === t(e.target).closest(".clockpicker-tick").length && W(e, !0)
                }), s) {
                var _ = a.find(".clockpicker-canvas"),
                    H = h("svg");
                H.setAttribute("class", "clockpicker-svg"), H.setAttribute("width", b), H.setAttribute("height", b);
                var $ = h("g");
                $.setAttribute("transform", "translate(" + v + "," + v + ")");
                var B = h("circle");
                B.setAttribute("class", "clockpicker-canvas-bearing"), B.setAttribute("cx", 0), B.setAttribute("cy", 0), B.setAttribute("r", 2);
                var j = h("line");
                j.setAttribute("x1", 0), j.setAttribute("y1", 0);
                var N = h("circle");
                N.setAttribute("class", "clockpicker-canvas-bg"), N.setAttribute("r", y);
                var q = h("circle");
                q.setAttribute("class", "clockpicker-canvas-fg"), q.setAttribute("r", 5), $.appendChild(j), $.appendChild(N), $.appendChild(q), $.appendChild(B), H.appendChild($), _.append(H), this.hand = j, this.bg = N, this.fg = q, this.bearing = B, this.g = $, this.canvas = _
            }
            k(this.options.init)
        }

        function k(t) {
            t && "function" == typeof t && t()
        }
        var t = window.jQuery,
            e = t(window),
            i = t(document),
            n = "http://www.w3.org/2000/svg",
            s = "SVGAngle" in window && function () {
                var t, e = document.createElement("div");
                return e.innerHTML = "<svg/>", t = (e.firstChild && e.firstChild.namespaceURI) == n, e.innerHTML = "", t
            }(),
            a = function () {
                var t = document.createElement("div").style;
                return "transition" in t || "WebkitTransition" in t || "MozTransition" in t || "msTransition" in t || "OTransition" in t
            }(),
            o = "ontouchstart" in window,
            r = "mousedown" + (o ? " touchstart" : ""),
            l = "mousemove.clockpicker" + (o ? " touchmove.clockpicker" : ""),
            c = "mouseup.clockpicker" + (o ? " touchend.clockpicker" : ""),
            u = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null,
            f = 0,
            v = 135,
            g = 110,
            m = 80,
            y = 20,
            b = 2 * v,
            w = a ? 350 : 1,
            x = ['<div class="clockpicker picker">', '<div class="picker__holder">', '<div class="picker__frame">', '<div class="picker__wrap">', '<div class="picker__box">', '<div class="picker__date-display">', '<div class="clockpicker-display">', '<div class="clockpicker-display-column">', '<span class="clockpicker-span-hours text-primary"></span>', ":", '<span class="clockpicker-span-minutes"></span>', "</div>", '<div class="clockpicker-display-column clockpicker-display-am-pm">', '<div class="clockpicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="picker__calendar-container">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', "</div>", '<div class="clockpicker-am-pm-block">', "</div>", "</div>", '<div class="picker__footer">', "</div>", "</div>", "</div>", "</div>", "</div>", "</div>"].join("");
        C.DEFAULTS = {
            "default": "",
            fromnow: 0,
            donetext: "Done",
            autoclose: !1,
            ampmclickable: !1,
            darktheme: !1,
            twelvehour: !0,
            vibrate: !0
        }, C.prototype.toggle = function () {
            this[this.isShown ? "hide" : "show"]()
        }, C.prototype.locate = function () {
            var t = this.element,
                e = this.popover;
            t.offset(), t.outerWidth(), t.outerHeight(), this.options.align;
            e.show()
        }, C.prototype.show = function (n) {
            if (!this.isShown) {
                k(this.options.beforeShow), t(":input").each(function () {
                    t(this).attr("tabindex", -1)
                });
                var s = this;
                this.input.blur(), this.popover.addClass("picker--opened"), this.input.addClass("picker__input picker__input--active"), t(document.body).css("overflow", "hidden"), this.isAppended || (this.popover.insertAfter(this.input), this.options.twelvehour && (this.amOrPm = "PM", this.options.ampmclickable ? (this.spanAmPm.children("#click-pm").addClass("text-primary"), this.spanAmPm.children("#click-am").removeClass("text-primary")) : (this.amPmBlock.children(".am-button").removeClass("active"), this.amPmBlock.children(".pm-button").addClass("active"), this.spanAmPm.empty().append("PM"))), e.on("resize.clockpicker" + this.id, function () {
                    s.isShown && s.locate()
                }), this.isAppended = !0);
                var a = ((this.input.prop("value") || this.options["default"] || "") + "").split(":");
                if (this.options.twelvehour && "undefined" != typeof a[1] && (a[1] = a[1].replace("AM", "").replace("PM", "")), "now" === a[0]) {
                    var o = new Date(+new Date + this.options.fromnow);
                    a = [o.getHours(), o.getMinutes()]
                }
                this.hours = +a[0] || 0, this.minutes = +a[1] || 0, this.spanHours.html(d(this.hours)), this.spanMinutes.html(d(this.minutes)), this.toggleView("hours"), this.locate(), this.isShown = !0, i.on("click.clockpicker." + this.id + " focusin.clockpicker." + this.id, function (e) {
                    var i = t(e.target);
                    0 === i.closest(s.popover.find(".picker__wrap")).length && 0 === i.closest(s.input).length && s.hide()
                }), i.on("keyup.clockpicker." + this.id, function (t) {
                    27 === t.keyCode && s.hide()
                }), k(this.options.afterShow)
            }
        }, C.prototype.hide = function () {
            k(this.options.beforeHide), this.input.removeClass("picker__input picker__input--active"), this.popover.removeClass("picker--opened"), t(document.body).css("overflow", "visible"), this.isShown = !1, t(":input").each(function (e) {
                t(this).attr("tabindex", e + 1)
            }), i.off("click.clockpicker." + this.id + " focusin.clockpicker." + this.id), i.off("keyup.clockpicker." + this.id), this.popover.hide(), k(this.options.afterHide)
        }, C.prototype.toggleView = function (e, i) {
            var n = !1;
            "minutes" === e && "visible" === t(this.hoursView).css("visibility") && (k(this.options.beforeHourSelect), n = !0);
            var s = "hours" === e,
                a = s ? this.hoursView : this.minutesView,
                o = s ? this.minutesView : this.hoursView;
            this.currentView = e, this.spanHours.toggleClass("text-primary", s), this.spanMinutes.toggleClass("text-primary", !s), o.addClass("clockpicker-dial-out"), a.css("visibility", "visible").removeClass("clockpicker-dial-out"), this.resetClock(i), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function () {
                o.css("visibility", "hidden")
            }, w), n && k(this.options.afterHourSelect)
        }, C.prototype.resetClock = function (t) {
            var e = this.currentView,
                i = this[e],
                n = "hours" === e,
                a = Math.PI / (n ? 6 : 30),
                o = i * a,
                r = n && i > 0 && 13 > i ? m : g,
                l = Math.sin(o) * r,
                c = -Math.cos(o) * r,
                u = this;
            s && t ? (u.canvas.addClass("clockpicker-canvas-out"), setTimeout(function () {
                u.canvas.removeClass("clockpicker-canvas-out"), u.setHand(l, c)
            }, t)) : this.setHand(l, c)
        }, C.prototype.setHand = function (e, i, n, a) {
            var v, o = Math.atan2(e, -i),
                r = "hours" === this.currentView,
                l = Math.PI / (r || n ? 6 : 30),
                c = Math.sqrt(e * e + i * i),
                h = this.options,
                f = r && (g + m) / 2 > c,
                p = f ? m : g;
            if (h.twelvehour && (p = g), 0 > o && (o = 2 * Math.PI + o), v = Math.round(o / l), o = v * l, h.twelvehour ? r ? 0 === v && (v = 12) : (n && (v *= 5), 60 === v && (v = 0)) : r ? (12 === v && (v = 0), v = f ? 0 === v ? 12 : v : 0 === v ? 0 : v + 12) : (n && (v *= 5), 60 === v && (v = 0)), r ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : v % 5 == 0 ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : this.fg.setAttribute("class", "clockpicker-canvas-fg active"), this[this.currentView] !== v && u && this.options.vibrate && (this.vibrateTimer || (navigator[u](10), this.vibrateTimer = setTimeout(t.proxy(function () {
                    this.vibrateTimer = null
                }, this), 100))), this[this.currentView] = v, this[r ? "spanHours" : "spanMinutes"].html(d(v)), !s) return void this[r ? "hoursView" : "minutesView"].find(".clockpicker-tick").each(function () {
                var e = t(this);
                e.toggleClass("active", v === +e.html())
            });
            a || !r && v % 5 ? (this.g.insertBefore(this.hand, this.bearing), this.g.insertBefore(this.bg, this.fg), this.bg.setAttribute("class", "clockpicker-canvas-bg clockpicker-canvas-bg-trans")) : (this.g.insertBefore(this.hand, this.bg), this.g.insertBefore(this.fg, this.bg), this.bg.setAttribute("class", "clockpicker-canvas-bg"));
            var b = Math.sin(o) * (p - y),
                w = -Math.cos(o) * (p - y),
                x = Math.sin(o) * p,
                C = -Math.cos(o) * p;
            this.hand.setAttribute("x2", b), this.hand.setAttribute("y2", w), this.bg.setAttribute("cx", x), this.bg.setAttribute("cy", C), this.fg.setAttribute("cx", x), this.fg.setAttribute("cy", C)
        }, C.prototype.done = function () {
            k(this.options.beforeDone), this.hide(), this.label.addClass("active");
            var t = this.input.prop("value"),
                e = d(this.hours) + ":" + d(this.minutes);
            this.options.twelvehour && (e += this.amOrPm), this.input.prop("value", e), e !== t && (this.input.triggerHandler("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur"), k(this.options.afterDone)
        }, C.prototype.remove = function () {
            this.element.removeData("clockpicker"), this.input.off("focus.clockpicker click.clockpicker"), this.isShown && this.hide(), this.isAppended && (e.off("resize.clockpicker" + this.id), this.popover.remove())
        }, t.fn.pickatime = function (e) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
                var n = t(this),
                    s = n.data("clockpicker");
                if (s) "function" == typeof s[e] && s[e].apply(s, i);
                else {
                    var a = t.extend({}, C.DEFAULTS, n.data(), "object" == typeof e && e);
                    n.data("clockpicker", new C(n, a))
                }
            })
        }
    }(), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (t, e, i, n, s) {
            return jQuery.easing[jQuery.easing.def](t, e, i, n, s)
        },
        easeInQuad: function (t, e, i, n, s) {
            return n * (e /= s) * e + i
        },
        easeOutQuad: function (t, e, i, n, s) {
            return -n * (e /= s) * (e - 2) + i
        },
        easeInOutQuad: function (t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
        },
        easeInCubic: function (t, e, i, n, s) {
            return n * (e /= s) * e * e + i
        },
        easeOutCubic: function (t, e, i, n, s) {
            return n * ((e = e / s - 1) * e * e + 1) + i
        },
        easeInOutCubic: function (t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
        },
        easeInQuart: function (t, e, i, n, s) {
            return n * (e /= s) * e * e * e + i
        },
        easeOutQuart: function (t, e, i, n, s) {
            return -n * ((e = e / s - 1) * e * e * e - 1) + i
        },
        easeInOutQuart: function (t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
        },
        easeInQuint: function (t, e, i, n, s) {
            return n * (e /= s) * e * e * e * e + i
        },
        easeOutQuint: function (t, e, i, n, s) {
            return n * ((e = e / s - 1) * e * e * e * e + 1) + i
        },
        easeInOutQuint: function (t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
        },
        easeInSine: function (t, e, i, n, s) {
            return -n * Math.cos(e / s * (Math.PI / 2)) + n + i
        },
        easeOutSine: function (t, e, i, n, s) {
            return n * Math.sin(e / s * (Math.PI / 2)) + i
        },
        easeInOutSine: function (t, e, i, n, s) {
            return -n / 2 * (Math.cos(Math.PI * e / s) - 1) + i
        },
        easeInExpo: function (t, e, i, n, s) {
            return 0 == e ? i : n * Math.pow(2, 10 * (e / s - 1)) + i
        },
        easeOutExpo: function (t, e, i, n, s) {
            return e == s ? i + n : n * (-Math.pow(2, -10 * e / s) + 1) + i
        },
        easeInOutExpo: function (t, e, i, n, s) {
            return 0 == e ? i : e == s ? i + n : (e /= s / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
        },
        easeInCirc: function (t, e, i, n, s) {
            return -n * (Math.sqrt(1 - (e /= s) * e) - 1) + i
        },
        easeOutCirc: function (t, e, i, n, s) {
            return n * Math.sqrt(1 - (e = e / s - 1) * e) + i
        },
        easeInOutCirc: function (t, e, i, n, s) {
            return (e /= s / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
        },
        easeInElastic: function (t, e, i, n, s) {
            var a = 1.70158,
                o = 0,
                r = n;
            if (0 == e) return i;
            if (1 == (e /= s)) return i + n;
            if (o || (o = .3 * s), r < Math.abs(n)) {
                r = n;
                var a = o / 4
            } else var a = o / (2 * Math.PI) * Math.asin(n / r);
            return -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * s - a) * (2 * Math.PI) / o)) + i
        },
        easeOutElastic: function (t, e, i, n, s) {
            var a = 1.70158,
                o = 0,
                r = n;
            if (0 == e) return i;
            if (1 == (e /= s)) return i + n;
            if (o || (o = .3 * s), r < Math.abs(n)) {
                r = n;
                var a = o / 4
            } else var a = o / (2 * Math.PI) * Math.asin(n / r);
            return r * Math.pow(2, -10 * e) * Math.sin((e * s - a) * (2 * Math.PI) / o) + n + i
        },
        easeInOutElastic: function (t, e, i, n, s) {
            var a = 1.70158,
                o = 0,
                r = n;
            if (0 == e) return i;
            if (2 == (e /= s / 2)) return i + n;
            if (o || (o = s * (.3 * 1.5)), r < Math.abs(n)) {
                r = n;
                var a = o / 4
            } else var a = o / (2 * Math.PI) * Math.asin(n / r);
            return 1 > e ? -.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * s - a) * (2 * Math.PI) / o)) + i : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * s - a) * (2 * Math.PI) / o) * .5 + n + i
        },
        easeInBack: function (t, e, i, n, s, a) {
            return void 0 == a && (a = 1.70158), n * (e /= s) * e * ((a + 1) * e - a) + i
        },
        easeOutBack: function (t, e, i, n, s, a) {
            return void 0 == a && (a = 1.70158), n * ((e = e / s - 1) * e * ((a + 1) * e + a) + 1) + i
        },
        easeInOutBack: function (t, e, i, n, s, a) {
            return void 0 == a && (a = 1.70158), (e /= s / 2) < 1 ? n / 2 * (e * e * (((a *= 1.525) + 1) * e - a)) + i : n / 2 * ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2) + i
        },
        easeInBounce: function (t, e, i, n, s) {
            return n - jQuery.easing.easeOutBounce(t, s - e, 0, n, s) + i
        },
        easeOutBounce: function (t, e, i, n, s) {
            return (e /= s) < 1 / 2.75 ? n * (7.5625 * e * e) + i : 2 / 2.75 > e ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
        },
        easeInOutBounce: function (t, e, i, n, s) {
            return s / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, s) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - s, 0, n, s) + .5 * n + i
        }
    }),
    function (t) {
        t.fn.scrollTo = function (e) {
            return t(this).scrollTop(t(this).scrollTop() - t(this).offset().top + t(e).offset().top), this
        }, t.fn.dropdown = function (e) {
            var i = {
                inDuration: 300,
                outDuration: 225,
                constrain_width: !0,
                hover: !1,
                gutter: 0,
                belowOrigin: !1
            };
            this.each(function () {
                function o() {
                    void 0 !== n.data("induration") && (s.inDuration = n.data("inDuration")), void 0 !== n.data("outduration") && (s.outDuration = n.data("outDuration")), void 0 !== n.data("constrainwidth") && (s.constrain_width = n.data("constrainwidth")), void 0 !== n.data("hover") && (s.hover = n.data("hover")), void 0 !== n.data("gutter") && (s.gutter = n.data("gutter")), void 0 !== n.data("beloworigin") && (s.belowOrigin = n.data("beloworigin"))
                }

                function r() {
                    o(), a.addClass("active"), s.constrain_width === !0 && a.css("width", n.outerWidth());
                    var e = 0;
                    s.belowOrigin === !0 && (e = n.height());
                    var i = n.offset().left,
                        r = 0,
                        l = s.gutter;
                    i + a.innerWidth() > t(window).width() && (r = n.innerWidth() - a.innerWidth(), l = -1 * l), a.css({
                        position: "absolute",
                        top: n.position().top + e,
                        left: n.position().left + r + l
                    }), a.stop(!0, !0).css("opacity", 0).slideDown({
                        queue: !1,
                        duration: s.inDuration,
                        easing: "easeOutCubic",
                        complete: function () {
                            t(this).css("height", "")
                        }
                    }).animate({
                        opacity: 1
                    }, {
                        queue: !1,
                        duration: s.inDuration,
                        easing: "easeOutSine"
                    })
                }

                function l() {
                    a.fadeOut(s.outDuration), a.removeClass("active")
                }
                var n = t(this),
                    s = t.extend({}, i, e),
                    a = t("#" + n.attr("data-activates"));
                if (o(), n.after(a), s.hover) {
                    var c = !1;
                    n.unbind("click." + n.attr("id")), n.on("mouseenter", function (t) {
                        c === !1 && (r(), c = !0)
                    }), n.on("mouseleave", function (e) {
                        var i = e.toElement || e.relatedTarget;
                        t(i).closest(".dropdown-content").is(a) || (a.stop(!0, !0), l(), c = !1)
                    }), a.on("mouseleave", function (e) {
                        var i = e.toElement || e.relatedTarget;
                        t(i).closest(".dropdown-button").is(n) || (a.stop(!0, !0), l(), c = !1)
                    })
                } else n.unbind("click." + n.attr("id")), n.bind("click." + n.attr("id"), function (e) {
                    n[0] == e.currentTarget && 0 === t(e.target).closest(".dropdown-content").length ? (e.preventDefault(), r()) : n.hasClass("active") && (l(), t(document).unbind("click." + a.attr("id"))), a.hasClass("active") && t(document).bind("click." + a.attr("id"), function (e) {
                        !a.is(e.target) && !n.is(e.target) && !n.find(e.target).length > 0 && (l(), t(document).unbind("click." + a.attr("id")))
                    })
                });
                n.on("open", r), n.on("close", l)
            })
        }, t(document).ready(function () {
            t(".dropdown-button").dropdown()
        })
    }(jQuery), Materialize = {}, Materialize.guid = function () {
        function t() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return function () {
            return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
        }
    }(), Materialize.elementOrParentIsFixed = function (t) {
        var e = $(t),
            i = e.add(e.parents()),
            n = !1;
        return i.each(function () {
            return "fixed" === $(this).css("position") ? (n = !0, !1) : void 0
        }), n
    };
var Vel;
Vel = $ ? $.Velocity : Velocity,
    function (t) {
        t(document).ready(function () {
            function s(e) {
                var n = e.css("font-family"),
                    s = e.css("font-size");
                s && i.css("font-size", s), n && i.css("font-family", n), "off" === e.attr("wrap") && i.css("overflow-wrap", "normal").css("white-space", "pre"), i.text(e.val() + "\n");
                var a = i.html().replace(/\n/g, "<br>");
                i.html(a), e.is(":visible") ? i.css("width", e.width()) : i.css("width", t(window).width() / 2), e.css("height", i.height())
            }
            Materialize.updateTextFields = function () {
                var e = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
                t(e).each(function (e, i) {
                    t(i).val().length > 0 || void 0 !== t(this).attr("placeholder") || t(i)[0].validity.badInput === !0 ? t(this).siblings("label, i").addClass("active") : t(this).siblings("label, i").removeClass("active")
                })
            };
            var e = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
            t("input[autofocus]").siblings("label, i").addClass("active"), t(document).on("change", e, function () {
                (0 !== t(this).val().length || void 0 !== t(this).attr("placeholder")) && t(this).siblings("label, i").addClass("active"), validate_field(t(this))
            }), t(document).ready(function () {
                Materialize.updateTextFields()
            }), t(document).on("reset", function (i) {
                var n = t(i.target);
                n.is("form") && (n.find(e).removeClass("valid").removeClass("invalid"), n.find(e).each(function () {
                    "" === t(this).attr("value") && t(this).siblings("label, i").removeClass("active")
                }), n.find("select.initialized").each(function () {
                    var t = n.find("option[selected]").text();
                    n.siblings("input.select-dropdown").val(t)
                }))
            }), t(document).on("focus", e, function () {
                t(this).siblings("label, i").addClass("active")
            }), t(document).on("blur", e, function () {
                var e = t(this);
                0 === e.val().length && e[0].validity.badInput !== !0 && void 0 === e.attr("placeholder") && e.siblings("label, i").removeClass("active"), validate_field(e)
            }), validate_field = function (t) {
                var e = void 0 !== t.attr("length"),
                    i = parseInt(t.attr("length")),
                    n = t.val().length;
                0 === t.val().length && t[0].validity.badInput === !1 ? t.hasClass("validate") && (t.removeClass("valid"), t.removeClass("invalid")) : t.hasClass("validate") && (t.is(":valid") && e && i > n || t.is(":valid") && !e ? (t.removeClass("invalid"), t.addClass("valid")) : (t.removeClass("valid"), t.addClass("invalid")))
            };
            var i = t(".hiddendiv").first();
            i.length || (i = t('<div class="hiddendiv common"></div>'), t("body").append(i));
            var n = ".materialize-textarea";
            t(n).each(function () {
                var e = t(this);
                e.val().length && s(e)
            }), t("body").on("keyup keydown", n, function () {
                s(t(this))
            }), t(".file-field").each(function () {
                var e = t(this).find("input.file-path");
                t(this).find('input[type="file"]').change(function () {
                    e.val(t(this)[0].files[0].name), e.trigger("change")
                })
            });
            var r, a = "input[type=range]",
                o = !1;
            t(a).each(function () {
                var e = t('<span class="thumb"><span class="value"></span></span>');
                t(this).after(e)
            });
            var l = ".range-field";
            t(document).on("change", a, function (e) {
                var i = t(this).siblings(".thumb");
                i.find(".value").html(t(this).val())
            }), t(document).on("input mousedown touchstart", a, function (e) {
                var i = t(this).siblings(".thumb");
                i.length <= 0 && (i = t('<span class="thumb"><span class="value"></span></span>'), t(this).append(i)), i.find(".value").html(t(this).val()), o = !0, t(this).addClass("active"), i.hasClass("active") || i.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }), r = void 0 === e.pageX || null === e.pageX ? e.originalEvent.touches[0].pageX - t(this).offset().left : e.pageX - t(this).offset().left;
                var n = t(this).outerWidth();
                0 > r ? r = 0 : r > n && (r = n), i.addClass("active").css("left", r), i.find(".value").html(t(this).val())
            }), t(document).on("mouseup touchend", l, function () {
                o = !1, t(this).removeClass("active")
            }), t(document).on("mousemove touchmove", l, function (e) {
                var n, i = t(this).children(".thumb");
                if (o) {
                    i.hasClass("active") || i.velocity({
                        height: "30px",
                        width: "30px",
                        top: "-20px",
                        marginLeft: "-15px"
                    }, {
                        duration: 300,
                        easing: "easeOutExpo"
                    }), n = void 0 === e.pageX || null === e.pageX ? e.originalEvent.touches[0].pageX - t(this).offset().left : e.pageX - t(this).offset().left;
                    var s = t(this).outerWidth();
                    0 > n ? n = 0 : n > s && (n = s), i.addClass("active").css("left", n), i.find(".value").html(i.siblings(a).val())
                }
            }), t(document).on("mouseout touchleave", l, function () {
                if (!o) {
                    var e = t(this).children(".thumb");
                    e.hasClass("active") && e.velocity({
                        height: "0",
                        width: "0",
                        top: "10px",
                        marginLeft: "-6px"
                    }, {
                        duration: 100
                    }), e.removeClass("active")
                }
            })
        }), t.fn.material_select = function (e) {
            t(this).each(function () {
                if ($select = t(this), !$select.hasClass("browser-default")) {
                    var i = $select.data("select-id");
                    if (i && ($select.parent().find("i").remove(), $select.parent().find("input").remove(), $select.unwrap(), t("ul#select-options-" + i).remove()), "destroy" === e) return void $select.data("select-id", null).removeClass("initialized");
                    var n = Materialize.guid();
                    $select.data("select-id", n);
                    var s = t('<div class="select-wrapper"></div>');
                    s.addClass($select.attr("class"));
                    var r, a = t('<ul id="select-options-' + n + '" class="dropdown-content select-dropdown"></ul>'),
                        o = $select.children("option");
                    r = void 0 !== $select.find("option:selected") ? $select.find("option:selected") : a.first(), o.each(function () {
                        a.append(t('<li class="' + (t(this).is(":disabled") ? "disabled" : "") + '"><span>' + t(this).html() + "</span></li>"))
                    }), a.find("li").each(function (i) {
                        var n = $select;
                        t(this).click(function () {
                            t(this).hasClass("disabled") || (n.find("option").eq(i).prop("selected", !0), n.trigger("change"), n.siblings("input.select-dropdown").val(t(this).text()), "undefined" != typeof e && e())
                        })
                    }), $select.wrap(s);
                    var l = t('<span class="caret">&#9660;</span>');
                    $select.is(":disabled") && l.addClass("disabled");
                    var c = t('<input type="text" class="select-dropdown" readonly="true" ' + ($select.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + n + '" value="' + r.html() + '"/>');
                    $select.before(c), c.before(l), t("body").append(a), $select.is(":disabled") || c.dropdown({
                        hover: !1
                    }), $select.attr("tabindex") && t(c[0]).attr("tabindex", $select.attr("tabindex")), $select.addClass("initialized"), c.on("focus", function () {
                        t(this).trigger("open"), r = t(this).val(), selectedOption = a.find("li").filter(function () {
                            return t(this).text().toLowerCase() === r.toLowerCase()
                        })[0], activateOption(a, selectedOption)
                    }), c.on("blur", function () {
                        t(this).trigger("close")
                    }), activateOption = function (e, i) {
                        e.find("li.active").removeClass("active"), t(i).addClass("active"), e.scrollTo(i)
                    }, filterQuery = [], onKeyDown = function (e) {
                        if (9 == e.which) return void c.trigger("close");
                        if (40 == e.which && !a.is(":visible")) return void c.trigger("open");
                        if (13 != e.which || a.is(":visible")) {
                            e.preventDefault(), letter = String.fromCharCode(e.which).toLowerCase();
                            var i = [9, 13, 27, 38, 40];
                            letter && -1 === i.indexOf(e.which) && (filterQuery.push(letter), string = filterQuery.join(""), newOption = a.find("li").filter(function () {
                                return 0 === t(this).text().toLowerCase().indexOf(string)
                            })[0], newOption && activateOption(a, newOption)), 13 == e.which && (activeOption = a.find("li.active:not(.disabled)")[0], activeOption && (t(activeOption).trigger("click"), c.trigger("close"))), 40 == e.which && (newOption = a.find("li.active").next("li:not(.disabled)")[0], newOption && activateOption(a, newOption)), 27 == e.which && c.trigger("close"), 38 == e.which && (newOption = a.find("li.active").prev("li:not(.disabled)")[0], newOption && activateOption(a, newOption)), setTimeout(function () {
                                filterQuery = []
                            }, 1e3)
                        }
                    }, c.on("keydown", onKeyDown)
                }
            })
        }
    }(jQuery), ! function (t) {
        function e(t) {
            var e = t.length,
                n = i.type(t);
            return "function" === n || i.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }
        if (!t.jQuery) {
            var i = function (t, e) {
                return new i.fn.init(t, e)
            };
            i.isWindow = function (t) {
                return null != t && t == t.window
            }, i.type = function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? s[o.call(t)] || "object" : typeof t
            }, i.isArray = Array.isArray || function (t) {
                return "array" === i.type(t)
            }, i.isPlainObject = function (t) {
                var e;
                if (!t || "object" !== i.type(t) || t.nodeType || i.isWindow(t)) return !1;
                try {
                    if (t.constructor && !a.call(t, "constructor") && !a.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                for (e in t);
                return void 0 === e || a.call(t, e)
            }, i.each = function (t, i, n) {
                var s, a = 0,
                    o = t.length,
                    r = e(t);
                if (n) {
                    if (r)
                        for (; o > a && (s = i.apply(t[a], n), s !== !1); a++);
                    else
                        for (a in t)
                            if (s = i.apply(t[a], n), s === !1) break
                } else if (r)
                    for (; o > a && (s = i.call(t[a], a, t[a]), s !== !1); a++);
                else
                    for (a in t)
                        if (s = i.call(t[a], a, t[a]), s === !1) break; return t
            }, i.data = function (t, e, s) {
                if (void 0 === s) {
                    var a = t[i.expando],
                        o = a && n[a];
                    if (void 0 === e) return o;
                    if (o && e in o) return o[e]
                } else if (void 0 !== e) {
                    var a = t[i.expando] || (t[i.expando] = ++i.uuid);
                    return n[a] = n[a] || {}, n[a][e] = s, s
                }
            }, i.removeData = function (t, e) {
                var s = t[i.expando],
                    a = s && n[s];
                a && i.each(e, function (t, e) {
                    delete a[e]
                })
            }, i.extend = function () {
                var t, e, n, s, a, o, r = arguments[0] || {},
                    l = 1,
                    c = arguments.length,
                    u = !1;
                for ("boolean" == typeof r && (u = r, r = arguments[l] || {}, l++), "object" != typeof r && "function" !== i.type(r) && (r = {}), l === c && (r = this, l--); c > l; l++)
                    if (null != (a = arguments[l]))
                        for (s in a) t = r[s], n = a[s], r !== n && (u && n && (i.isPlainObject(n) || (e = i.isArray(n))) ? (e ? (e = !1, o = t && i.isArray(t) ? t : []) : o = t && i.isPlainObject(t) ? t : {}, r[s] = i.extend(u, o, n)) : void 0 !== n && (r[s] = n));
                return r
            }, i.queue = function (t, n, s) {
                function a(t, i) {
                    var n = i || [];
                    return null != t && (e(Object(t)) ? ! function (t, e) {
                        for (var i = +e.length, n = 0, s = t.length; i > n;) t[s++] = e[n++];
                        if (i !== i)
                            for (; void 0 !== e[n];) t[s++] = e[n++];
                        return t.length = s, t
                    }(n, "string" == typeof t ? [t] : t) : [].push.call(n, t)), n
                }
                if (t) {
                    n = (n || "fx") + "queue";
                    var o = i.data(t, n);
                    return s ? (!o || i.isArray(s) ? o = i.data(t, n, a(s)) : o.push(s), o) : o || []
                }
            }, i.dequeue = function (t, e) {
                i.each(t.nodeType ? [t] : t, function (t, n) {
                    e = e || "fx";
                    var s = i.queue(n, e),
                        a = s.shift();
                    "inprogress" === a && (a = s.shift()), a && ("fx" === e && s.unshift("inprogress"), a.call(n, function () {
                        i.dequeue(n, e)
                    }))
                })
            }, i.fn = i.prototype = {
                init: function (t) {
                    if (t.nodeType) return this[0] = t, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function () {
                    var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function () {
                    function t() {
                        for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position;) t = t.offsetParent;
                        return t || document
                    }
                    var e = this[0],
                        t = t.apply(e),
                        n = this.offset(),
                        s = /^(?:body|html)$/i.test(t.nodeName) ? {
                            top: 0,
                            left: 0
                        } : i(t).offset();
                    return n.top -= parseFloat(e.style.marginTop) || 0, n.left -= parseFloat(e.style.marginLeft) || 0, t.style && (s.top += parseFloat(t.style.borderTopWidth) || 0, s.left += parseFloat(t.style.borderLeftWidth) || 0), {
                        top: n.top - s.top,
                        left: n.left - s.left
                    }
                }
            };
            var n = {};
            i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
            for (var s = {}, a = s.hasOwnProperty, o = s.toString, r = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < r.length; l++) s["[object " + r[l] + "]"] = r[l].toLowerCase();
            i.fn.init.prototype = i.fn, t.Velocity = {
                Utilities: i
            }
        }
    }(window),
    function (t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t()
    }(function () {
        return function (t, e, i, n) {
            function s(t) {
                for (var e = -1, i = t ? t.length : 0, n = []; ++e < i;) {
                    var s = t[e];
                    s && n.push(s)
                }
                return n
            }

            function a(t) {
                return p.isWrapped(t) ? t = [].slice.call(t) : p.isNode(t) && (t = [t]), t
            }

            function o(t) {
                var e = v.data(t, "velocity");
                return null === e ? n : e
            }

            function r(t) {
                return function (e) {
                    return Math.round(e * t) * (1 / t)
                }
            }

            function l(t, i, n, s) {
                function a(t, e) {
                    return 1 - 3 * e + 3 * t
                }

                function o(t, e) {
                    return 3 * e - 6 * t
                }

                function r(t) {
                    return 3 * t
                }

                function l(t, e, i) {
                    return ((a(e, i) * t + o(e, i)) * t + r(e)) * t
                }

                function c(t, e, i) {
                    return 3 * a(e, i) * t * t + 2 * o(e, i) * t + r(e)
                }

                function u(e, i) {
                    for (var s = 0; v > s; ++s) {
                        var a = c(i, t, n);
                        if (0 === a) return i;
                        var o = l(i, t, n) - e;
                        i -= o / a
                    }
                    return i
                }

                function h() {
                    for (var e = 0; b > e; ++e) k[e] = l(e * w, t, n)
                }

                function d(e, i, s) {
                    var a, o, r = 0;
                    do o = i + (s - i) / 2, a = l(o, t, n) - e, a > 0 ? s = o : i = o; while (Math.abs(a) > m && ++r < y);
                    return o
                }

                function f(e) {
                    for (var i = 0, s = 1, a = b - 1; s != a && k[s] <= e; ++s) i += w;
                    --s;
                    var o = (e - k[s]) / (k[s + 1] - k[s]),
                        r = i + o * w,
                        l = c(r, t, n);
                    return l >= g ? u(e, r) : 0 == l ? r : d(e, i, i + w)
                }

                function p() {
                    S = !0, (t != i || n != s) && h()
                }
                var v = 4,
                    g = .001,
                    m = 1e-7,
                    y = 10,
                    b = 11,
                    w = 1 / (b - 1),
                    x = "Float32Array" in e;
                if (4 !== arguments.length) return !1;
                for (var C = 0; 4 > C; ++C)
                    if ("number" != typeof arguments[C] || isNaN(arguments[C]) || !isFinite(arguments[C])) return !1;
                t = Math.min(t, 1), n = Math.min(n, 1), t = Math.max(t, 0), n = Math.max(n, 0);
                var k = x ? new Float32Array(b) : new Array(b),
                    S = !1,
                    P = function (e) {
                        return S || p(), t === i && n === s ? e : 0 === e ? 0 : 1 === e ? 1 : l(f(e), i, s)
                    };
                P.getControlPoints = function () {
                    return [{
                        x: t,
                        y: i
                    }, {
                        x: n,
                        y: s
                    }]
                };
                var T = "generateBezier(" + [t, i, n, s] + ")";
                return P.toString = function () {
                    return T
                }, P
            }

            function c(t, e) {
                var i = t;
                return p.isString(t) ? b.Easings[t] || (i = !1) : i = p.isArray(t) && 1 === t.length ? r.apply(null, t) : p.isArray(t) && 2 === t.length ? w.apply(null, t.concat([e])) : p.isArray(t) && 4 === t.length ? l.apply(null, t) : !1, i === !1 && (i = b.Easings[b.defaults.easing] ? b.defaults.easing : y), i
            }

            function u(t) {
                if (t) {
                    var e = (new Date).getTime(),
                        i = b.State.calls.length;
                    i > 1e4 && (b.State.calls = s(b.State.calls));
                    for (var a = 0; i > a; a++)
                        if (b.State.calls[a]) {
                            var r = b.State.calls[a],
                                l = r[0],
                                c = r[2],
                                d = r[3],
                                f = !!d,
                                g = null;
                            d || (d = b.State.calls[a][3] = e - 16);
                            for (var m = Math.min((e - d) / c.duration, 1), y = 0, w = l.length; w > y; y++) {
                                var C = l[y],
                                    S = C.element;
                                if (o(S)) {
                                    var P = !1;
                                    if (c.display !== n && null !== c.display && "none" !== c.display) {
                                        if ("flex" === c.display) {
                                            var T = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            v.each(T, function (t, e) {
                                                x.setPropertyValue(S, "display", e)
                                            })
                                        }
                                        x.setPropertyValue(S, "display", c.display)
                                    }
                                    c.visibility !== n && "hidden" !== c.visibility && x.setPropertyValue(S, "visibility", c.visibility);
                                    for (var A in C)
                                        if ("element" !== A) {
                                            var O, M = C[A],
                                                E = p.isString(M.easing) ? b.Easings[M.easing] : M.easing;
                                            if (1 === m) O = M.endValue;
                                            else {
                                                var L = M.endValue - M.startValue;
                                                if (O = M.startValue + L * E(m, c, L), !f && O === M.currentValue) continue
                                            }
                                            if (M.currentValue = O, "tween" === A) g = O;
                                            else {
                                                if (x.Hooks.registered[A]) {
                                                    var F = x.Hooks.getRoot(A),
                                                        I = o(S).rootPropertyValueCache[F];
                                                    I && (M.rootPropertyValue = I)
                                                }
                                                var z = x.setPropertyValue(S, A, M.currentValue + (0 === parseFloat(O) ? "" : M.unitType), M.rootPropertyValue, M.scrollData);
                                                x.Hooks.registered[A] && (o(S).rootPropertyValueCache[F] = x.Normalizations.registered[F] ? x.Normalizations.registered[F]("extract", null, z[1]) : z[1]), "transform" === z[0] && (P = !0)
                                            }
                                        }
                                    c.mobileHA && o(S).transformCache.translate3d === n && (o(S).transformCache.translate3d = "(0px, 0px, 0px)", P = !0), P && x.flushTransformCache(S)
                                }
                            }
                            c.display !== n && "none" !== c.display && (b.State.calls[a][2].display = !1), c.visibility !== n && "hidden" !== c.visibility && (b.State.calls[a][2].visibility = !1), c.progress && c.progress.call(r[1], r[1], m, Math.max(0, d + c.duration - e), d, g), 1 === m && h(a)
                        }
                }
                b.State.isTicking && k(u)
            }

            function h(t, e) {
                if (!b.State.calls[t]) return !1;
                for (var i = b.State.calls[t][0], s = b.State.calls[t][1], a = b.State.calls[t][2], r = b.State.calls[t][4], l = !1, c = 0, u = i.length; u > c; c++) {
                    var h = i[c].element;
                    if (e || a.loop || ("none" === a.display && x.setPropertyValue(h, "display", a.display), "hidden" === a.visibility && x.setPropertyValue(h, "visibility", a.visibility)), a.loop !== !0 && (v.queue(h)[1] === n || !/\.velocityQueueEntryFlag/i.test(v.queue(h)[1])) && o(h)) {
                        o(h).isAnimating = !1, o(h).rootPropertyValueCache = {};
                        var d = !1;
                        v.each(x.Lists.transforms3D, function (t, e) {
                            var i = /^scale/.test(e) ? 1 : 0,
                                s = o(h).transformCache[e];
                            o(h).transformCache[e] !== n && new RegExp("^\\(" + i + "[^.]").test(s) && (d = !0, delete o(h).transformCache[e])
                        }), a.mobileHA && (d = !0, delete o(h).transformCache.translate3d), d && x.flushTransformCache(h), x.Values.removeClass(h, "velocity-animating")
                    }
                    if (!e && a.complete && !a.loop && c === u - 1) try {
                        a.complete.call(s, s)
                    } catch (f) {
                        setTimeout(function () {
                            throw f
                        }, 1)
                    }
                    r && a.loop !== !0 && r(s), o(h) && a.loop === !0 && !e && (v.each(o(h).tweensContainer, function (t, e) {
                        /^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0, e.startValue = 360), /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100)
                    }), b(h, "reverse", {
                        loop: !0,
                        delay: a.delay
                    })), a.queue !== !1 && v.dequeue(h, a.queue)
                }
                b.State.calls[t] = !1;
                for (var p = 0, g = b.State.calls.length; g > p; p++)
                    if (b.State.calls[p] !== !1) {
                        l = !0;
                        break
                    }
                l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
            }
            var v, d = function () {
                    if (i.documentMode) return i.documentMode;
                    for (var t = 7; t > 4; t--) {
                        var e = i.createElement("div");
                        if (e.innerHTML = "<!--[if IE " + t + "]><span></span><![endif]-->", e.getElementsByTagName("span").length) return e = null, t
                    }
                    return n
                }(),
                f = function () {
                    var t = 0;
                    return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function (e) {
                        var n, i = (new Date).getTime();
                        return n = Math.max(0, 16 - (i - t)), t = i + n, setTimeout(function () {
                            e(i + n)
                        }, n)
                    }
                }(),
                p = {
                    isString: function (t) {
                        return "string" == typeof t
                    },
                    isArray: Array.isArray || function (t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    },
                    isFunction: function (t) {
                        return "[object Function]" === Object.prototype.toString.call(t);
                    },
                    isNode: function (t) {
                        return t && t.nodeType
                    },
                    isNodeList: function (t) {
                        return "object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== n && (0 === t.length || "object" == typeof t[0] && t[0].nodeType > 0)
                    },
                    isWrapped: function (t) {
                        return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t))
                    },
                    isSVG: function (t) {
                        return e.SVGElement && t instanceof e.SVGElement
                    },
                    isEmptyObject: function (t) {
                        for (var e in t) return !1;
                        return !0
                    }
                },
                g = !1;
            if (t.fn && t.fn.jquery ? (v = t, g = !0) : v = e.Velocity.Utilities, 8 >= d && !g) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (7 >= d) return void(jQuery.fn.velocity = jQuery.fn.animate);
            var m = 400,
                y = "swing",
                b = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: e.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: i.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: []
                    },
                    CSS: {},
                    Utilities: v,
                    Redirects: {},
                    Easings: {},
                    Promise: e.Promise,
                    defaults: {
                        queue: "",
                        duration: m,
                        easing: y,
                        begin: n,
                        complete: n,
                        progress: n,
                        display: n,
                        visibility: n,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0
                    },
                    init: function (t) {
                        v.data(t, "velocity", {
                            isSVG: p.isSVG(t),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 2,
                        patch: 2
                    },
                    debug: !1
                };
            e.pageYOffset !== n ? (b.State.scrollAnchor = e, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
            var w = function () {
                function t(t) {
                    return -t.tension * t.x - t.friction * t.v
                }

                function e(e, i, n) {
                    var s = {
                        x: e.x + n.dx * i,
                        v: e.v + n.dv * i,
                        tension: e.tension,
                        friction: e.friction
                    };
                    return {
                        dx: s.v,
                        dv: t(s)
                    }
                }

                function i(i, n) {
                    var s = {
                            dx: i.v,
                            dv: t(i)
                        },
                        a = e(i, .5 * n, s),
                        o = e(i, .5 * n, a),
                        r = e(i, n, o),
                        l = 1 / 6 * (s.dx + 2 * (a.dx + o.dx) + r.dx),
                        c = 1 / 6 * (s.dv + 2 * (a.dv + o.dv) + r.dv);
                    return i.x = i.x + l * n, i.v = i.v + c * n, i
                }
                return function n(t, e, s) {
                    var u, h, d, a = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        o = [0],
                        r = 0,
                        l = 1e-4,
                        c = .016;
                    for (t = parseFloat(t) || 500, e = parseFloat(e) || 20, s = s || null, a.tension = t, a.friction = e, u = null !== s, u ? (r = n(t, e), h = r / s * c) : h = c; d = i(d || a, h), o.push(1 + d.x), r += 16, Math.abs(d.x) > l && Math.abs(d.v) > l;);
                    return u ? function (t) {
                        return o[t * (o.length - 1) | 0]
                    } : r
                }
            }();
            b.Easings = {
                linear: function (t) {
                    return t
                },
                swing: function (t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                },
                spring: function (t) {
                    return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
                }
            }, v.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (t, e) {
                b.Easings[e[0]] = l.apply(null, e[1])
            });
            var x = b.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function () {
                        for (var t = 0; t < x.Lists.colors.length; t++) {
                            var e = "color" === x.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                            x.Hooks.templates[x.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                        }
                        var i, n, s;
                        if (d)
                            for (i in x.Hooks.templates) {
                                n = x.Hooks.templates[i], s = n[0].split(" ");
                                var a = n[1].match(x.RegEx.valueSplit);
                                "Color" === s[0] && (s.push(s.shift()), a.push(a.shift()), x.Hooks.templates[i] = [s.join(" "), a.join(" ")])
                            }
                        for (i in x.Hooks.templates) {
                            n = x.Hooks.templates[i], s = n[0].split(" ");
                            for (var t in s) {
                                var o = i + s[t],
                                    r = t;
                                x.Hooks.registered[o] = [i, r]
                            }
                        }
                    },
                    getRoot: function (t) {
                        var e = x.Hooks.registered[t];
                        return e ? e[0] : t
                    },
                    cleanRootPropertyValue: function (t, e) {
                        return x.RegEx.valueUnwrap.test(e) && (e = e.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(e) && (e = x.Hooks.templates[t][1]), e
                    },
                    extractValue: function (t, e) {
                        var i = x.Hooks.registered[t];
                        if (i) {
                            var n = i[0],
                                s = i[1];
                            return e = x.Hooks.cleanRootPropertyValue(n, e), e.toString().match(x.RegEx.valueSplit)[s]
                        }
                        return e
                    },
                    injectValue: function (t, e, i) {
                        var n = x.Hooks.registered[t];
                        if (n) {
                            var o, r, s = n[0],
                                a = n[1];
                            return i = x.Hooks.cleanRootPropertyValue(s, i), o = i.toString().match(x.RegEx.valueSplit), o[a] = e, r = o.join(" ")
                        }
                        return i
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function (t, e, i) {
                            switch (t) {
                            case "name":
                                return "clip";
                            case "extract":
                                var n;
                                return x.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : (n = i.toString().match(x.RegEx.valueUnwrap), n = n ? n[1].replace(/,(\s+)?/g, " ") : i), n;
                            case "inject":
                                return "rect(" + i + ")"
                            }
                        },
                        blur: function (t, e, i) {
                            switch (t) {
                            case "name":
                                return b.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var n = parseFloat(i);
                                if (!n && 0 !== n) {
                                    var s = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    n = s ? s[1] : 0
                                }
                                return n;
                            case "inject":
                                return parseFloat(i) ? "blur(" + i + ")" : "none"
                            }
                        },
                        opacity: function (t, e, i) {
                            if (8 >= d) switch (t) {
                            case "name":
                                return "filter";
                            case "extract":
                                var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                return i = n ? n[1] / 100 : 1;
                            case "inject":
                                return e.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                            } else switch (t) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return i;
                            case "inject":
                                return i
                            }
                        }
                    },
                    register: function () {
                        9 >= d || b.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                        for (var t = 0; t < x.Lists.transformsBase.length; t++) ! function () {
                            var e = x.Lists.transformsBase[t];
                            x.Normalizations.registered[e] = function (t, i, s) {
                                switch (t) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return o(i) === n || o(i).transformCache[e] === n ? /^scale/i.test(e) ? 1 : 0 : o(i).transformCache[e].replace(/[()]/g, "");
                                case "inject":
                                    var a = !1;
                                    switch (e.substr(0, e.length - 1)) {
                                    case "translate":
                                        a = !/(%|px|em|rem|vw|vh|\d)$/i.test(s);
                                        break;
                                    case "scal":
                                    case "scale":
                                        b.State.isAndroid && o(i).transformCache[e] === n && 1 > s && (s = 1), a = !/(\d)$/i.test(s);
                                        break;
                                    case "skew":
                                        a = !/(deg|\d)$/i.test(s);
                                        break;
                                    case "rotate":
                                        a = !/(deg|\d)$/i.test(s)
                                    }
                                    return a || (o(i).transformCache[e] = "(" + s + ")"), o(i).transformCache[e]
                                }
                            }
                        }();
                        for (var t = 0; t < x.Lists.colors.length; t++) ! function () {
                            var e = x.Lists.colors[t];
                            x.Normalizations.registered[e] = function (t, i, s) {
                                switch (t) {
                                case "name":
                                    return e;
                                case "extract":
                                    var a;
                                    if (x.RegEx.wrappedValueAlreadyExtracted.test(s)) a = s;
                                    else {
                                        var o, r = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(s) ? o = r[s] !== n ? r[s] : r.black : x.RegEx.isHex.test(s) ? o = "rgb(" + x.Values.hexToRgb(s).join(" ") + ")" : /^rgba?\(/i.test(s) || (o = r.black), a = (o || s).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= d || 3 !== a.split(" ").length || (a += " 1"), a;
                                case "inject":
                                    return 8 >= d ? 4 === s.split(" ").length && (s = s.split(/\s+/).slice(0, 3).join(" ")) : 3 === s.split(" ").length && (s += " 1"), (8 >= d ? "rgb" : "rgba") + "(" + s.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                    }
                },
                Names: {
                    camelCase: function (t) {
                        return t.replace(/-(\w)/g, function (t, e) {
                            return e.toUpperCase()
                        })
                    },
                    SVGAttribute: function (t) {
                        var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (d || b.State.isAndroid && !b.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t)
                    },
                    prefixCheck: function (t) {
                        if (b.State.prefixMatches[t]) return [b.State.prefixMatches[t], !0];
                        for (var e = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = e.length; n > i; i++) {
                            var s;
                            if (s = 0 === i ? t : e[i] + t.replace(/^\w/, function (t) {
                                    return t.toUpperCase()
                                }), p.isString(b.State.prefixElement.style[s])) return b.State.prefixMatches[t] = s, [s, !0]
                        }
                        return [t, !1]
                    }
                },
                Values: {
                    hexToRgb: function (t) {
                        var n, e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return t = t.replace(e, function (t, e, i, n) {
                            return e + e + i + i + n + n
                        }), n = i.exec(t), n ? [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function (t) {
                        return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                    },
                    getUnitType: function (t) {
                        return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                    },
                    getDisplayType: function (t) {
                        var e = t && t.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                    },
                    addClass: function (t, e) {
                        t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e
                    },
                    removeClass: function (t, e) {
                        t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                    }
                },
                getPropertyValue: function (t, i, s, a) {
                    function r(t, i) {
                        function s() {
                            c && x.setPropertyValue(t, "display", "none")
                        }
                        var l = 0;
                        if (8 >= d) l = v.css(t, i);
                        else {
                            var c = !1;
                            if (/^(width|height)$/.test(i) && 0 === x.getPropertyValue(t, "display") && (c = !0, x.setPropertyValue(t, "display", x.Values.getDisplayType(t))), !a) {
                                if ("height" === i && "border-box" !== x.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var u = t.offsetHeight - (parseFloat(x.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingBottom")) || 0);
                                    return s(), u
                                }
                                if ("width" === i && "border-box" !== x.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var h = t.offsetWidth - (parseFloat(x.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingRight")) || 0);
                                    return s(), h
                                }
                            }
                            var f;
                            f = o(t) === n ? e.getComputedStyle(t, null) : o(t).computedStyle ? o(t).computedStyle : o(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === i && (i = "borderTopColor"), l = 9 === d && "filter" === i ? f.getPropertyValue(i) : f[i], ("" === l || null === l) && (l = t.style[i]), s()
                        }
                        if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                            var p = r(t, "position");
                            ("fixed" === p || "absolute" === p && /top|left/i.test(i)) && (l = v(t).position()[i] + "px")
                        }
                        return l
                    }
                    var l;
                    if (x.Hooks.registered[i]) {
                        var c = i,
                            u = x.Hooks.getRoot(c);
                        s === n && (s = x.getPropertyValue(t, x.Names.prefixCheck(u)[0])), x.Normalizations.registered[u] && (s = x.Normalizations.registered[u]("extract", t, s)), l = x.Hooks.extractValue(c, s)
                    } else if (x.Normalizations.registered[i]) {
                        var h, f;
                        h = x.Normalizations.registered[i]("name", t), "transform" !== h && (f = r(t, x.Names.prefixCheck(h)[0]), x.Values.isCSSNullValue(f) && x.Hooks.templates[i] && (f = x.Hooks.templates[i][1])), l = x.Normalizations.registered[i]("extract", t, f)
                    }
                    if (!/^[\d-]/.test(l))
                        if (o(t) && o(t).isSVG && x.Names.SVGAttribute(i))
                            if (/^(height|width)$/i.test(i)) try {
                                l = t.getBBox()[i]
                            } catch (p) {
                                l = 0
                            } else l = t.getAttribute(i);
                            else l = r(t, x.Names.prefixCheck(i)[0]);
                    return x.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + i + ": " + l), l
                },
                setPropertyValue: function (t, i, n, s, a) {
                    var r = i;
                    if ("scroll" === i) a.container ? a.container["scroll" + a.direction] = n : "Left" === a.direction ? e.scrollTo(n, a.alternateValue) : e.scrollTo(a.alternateValue, n);
                    else if (x.Normalizations.registered[i] && "transform" === x.Normalizations.registered[i]("name", t)) x.Normalizations.registered[i]("inject", t, n), r = "transform", n = o(t).transformCache[i];
                    else {
                        if (x.Hooks.registered[i]) {
                            var l = i,
                                c = x.Hooks.getRoot(i);
                            s = s || x.getPropertyValue(t, c), n = x.Hooks.injectValue(l, n, s), i = c
                        }
                        if (x.Normalizations.registered[i] && (n = x.Normalizations.registered[i]("inject", t, n), i = x.Normalizations.registered[i]("name", t)), r = x.Names.prefixCheck(i)[0], 8 >= d) try {
                            t.style[r] = n
                        } catch (u) {
                            b.debug && console.log("Browser does not support [" + n + "] for [" + r + "]")
                        } else o(t) && o(t).isSVG && x.Names.SVGAttribute(i) ? t.setAttribute(i, n) : t.style[r] = n;
                        b.debug >= 2 && console.log("Set " + i + " (" + r + "): " + n)
                    }
                    return [r, n]
                },
                flushTransformCache: function (t) {
                    function e(e) {
                        return parseFloat(x.getPropertyValue(t, e))
                    }
                    var i = "";
                    if ((d || b.State.isAndroid && !b.State.isChrome) && o(t).isSVG) {
                        var n = {
                            translate: [e("translateX"), e("translateY")],
                            skewX: [e("skewX")],
                            skewY: [e("skewY")],
                            scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
                            rotate: [e("rotateZ"), 0, 0]
                        };
                        v.each(o(t).transformCache, function (t) {
                            /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), n[t] && (i += t + "(" + n[t].join(" ") + ") ", delete n[t])
                        })
                    } else {
                        var s, a;
                        v.each(o(t).transformCache, function (e) {
                            return s = o(t).transformCache[e], "transformPerspective" === e ? (a = s, !0) : (9 === d && "rotateZ" === e && (e = "rotate"), void(i += e + s + " "))
                        }), a && (i = "perspective" + a + " " + i)
                    }
                    x.setPropertyValue(t, "transform", i)
                }
            };
            x.Hooks.register(), x.Normalizations.register(), b.hook = function (t, e, i) {
                var s = n;
                return t = a(t), v.each(t, function (t, a) {
                    if (o(a) === n && b.init(a), i === n) s === n && (s = b.CSS.getPropertyValue(a, e));
                    else {
                        var r = b.CSS.setPropertyValue(a, e, i);
                        "transform" === r[0] && b.CSS.flushTransformCache(a), s = r
                    }
                }), s
            };
            var C = function () {
                function t() {
                    return l ? A.promise || null : d
                }

                function s() {
                    function t(t) {
                        function h(t, e) {
                            var i = n,
                                o = n,
                                r = n;
                            return p.isArray(t) ? (i = t[0], !p.isArray(t[1]) && /^[\d-]/.test(t[1]) || p.isFunction(t[1]) || x.RegEx.isHex.test(t[1]) ? r = t[1] : (p.isString(t[1]) && !x.RegEx.isHex.test(t[1]) || p.isArray(t[1])) && (o = e ? t[1] : c(t[1], a.duration), t[2] !== n && (r = t[2]))) : i = t, e || (o = o || a.easing), p.isFunction(i) && (i = i.call(s, S, k)), p.isFunction(r) && (r = r.call(s, S, k)), [i || 0, o, r]
                        }

                        function d(t, e) {
                            var i, n;
                            return n = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (t) {
                                return i = t, ""
                            }), i || (i = x.Values.getUnitType(t)), [n, i]
                        }

                        function f() {
                            var t = {
                                    myParent: s.parentNode || i.body,
                                    position: x.getPropertyValue(s, "position"),
                                    fontSize: x.getPropertyValue(s, "fontSize")
                                },
                                n = t.position === z.lastPosition && t.myParent === z.lastParent,
                                a = t.fontSize === z.lastFontSize;
                            z.lastParent = t.myParent, z.lastPosition = t.position, z.lastFontSize = t.fontSize;
                            var r = 100,
                                l = {};
                            if (a && n) l.emToPx = z.lastEmToPx, l.percentToPxWidth = z.lastPercentToPxWidth, l.percentToPxHeight = z.lastPercentToPxHeight;
                            else {
                                var c = o(s).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                b.init(c), t.myParent.appendChild(c), v.each(["overflow", "overflowX", "overflowY"], function (t, e) {
                                    b.CSS.setPropertyValue(c, e, "hidden")
                                }), b.CSS.setPropertyValue(c, "position", t.position), b.CSS.setPropertyValue(c, "fontSize", t.fontSize), b.CSS.setPropertyValue(c, "boxSizing", "content-box"), v.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (t, e) {
                                    b.CSS.setPropertyValue(c, e, r + "%")
                                }), b.CSS.setPropertyValue(c, "paddingLeft", r + "em"), l.percentToPxWidth = z.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(c, "width", null, !0)) || 1) / r, l.percentToPxHeight = z.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(c, "height", null, !0)) || 1) / r, l.emToPx = z.lastEmToPx = (parseFloat(x.getPropertyValue(c, "paddingLeft")) || 1) / r, t.myParent.removeChild(c)
                            }
                            return null === z.remToPx && (z.remToPx = parseFloat(x.getPropertyValue(i.body, "fontSize")) || 16), null === z.vwToPx && (z.vwToPx = parseFloat(e.innerWidth) / 100, z.vhToPx = parseFloat(e.innerHeight) / 100), l.remToPx = z.remToPx, l.vwToPx = z.vwToPx, l.vhToPx = z.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), s), l
                        }
                        if (a.begin && 0 === S) try {
                            a.begin.call(g, g)
                        } catch (m) {
                            setTimeout(function () {
                                throw m
                            }, 1)
                        }
                        if ("scroll" === M) {
                            var T, O, E, C = /^x$/i.test(a.axis) ? "Left" : "Top",
                                P = parseFloat(a.offset) || 0;
                            a.container ? p.isWrapped(a.container) || p.isNode(a.container) ? (a.container = a.container[0] || a.container, T = a.container["scroll" + C], E = T + v(s).position()[C.toLowerCase()] + P) : a.container = null : (T = b.State.scrollAnchor[b.State["scrollProperty" + C]], O = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === C ? "Top" : "Left")]], E = v(s).offset()[C.toLowerCase()] + P), r = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: T,
                                    currentValue: T,
                                    endValue: E,
                                    unitType: "",
                                    easing: a.easing,
                                    scrollData: {
                                        container: a.container,
                                        direction: C,
                                        alternateValue: O
                                    }
                                },
                                element: s
                            }, b.debug && console.log("tweensContainer (scroll): ", r.scroll, s)
                        } else if ("reverse" === M) {
                            if (!o(s).tweensContainer) return void v.dequeue(s, a.queue);
                            "none" === o(s).opts.display && (o(s).opts.display = "auto"), "hidden" === o(s).opts.visibility && (o(s).opts.visibility = "visible"), o(s).opts.loop = !1, o(s).opts.begin = null, o(s).opts.complete = null, w.easing || delete a.easing, w.duration || delete a.duration, a = v.extend({}, o(s).opts, a);
                            var L = v.extend(!0, {}, o(s).tweensContainer);
                            for (var F in L)
                                if ("element" !== F) {
                                    var I = L[F].startValue;
                                    L[F].startValue = L[F].currentValue = L[F].endValue, L[F].endValue = I, p.isEmptyObject(w) || (L[F].easing = a.easing), b.debug && console.log("reverse tweensContainer (" + F + "): " + JSON.stringify(L[F]), s)
                                }
                            r = L
                        } else if ("start" === M) {
                            var L;
                            o(s).tweensContainer && o(s).isAnimating === !0 && (L = o(s).tweensContainer), v.each(y, function (t, e) {
                                if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(t)) {
                                    var i = h(e, !0),
                                        s = i[0],
                                        a = i[1],
                                        o = i[2];
                                    if (x.RegEx.isHex.test(s)) {
                                        for (var r = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(s), c = o ? x.Values.hexToRgb(o) : n, u = 0; u < r.length; u++) {
                                            var d = [l[u]];
                                            a && d.push(a), c !== n && d.push(c[u]), y[t + r[u]] = d
                                        }
                                        delete y[t]
                                    }
                                }
                            });
                            for (var D in y) {
                                var R = h(y[D]),
                                    W = R[0],
                                    _ = R[1],
                                    H = R[2];
                                D = x.Names.camelCase(D);
                                var $ = x.Hooks.getRoot(D),
                                    B = !1;
                                if (o(s).isSVG || "tween" === $ || x.Names.prefixCheck($)[1] !== !1 || x.Normalizations.registered[$] !== n) {
                                    (a.display !== n && null !== a.display && "none" !== a.display || a.visibility !== n && "hidden" !== a.visibility) && /opacity|filter/.test(D) && !H && 0 !== W && (H = 0), a._cacheValues && L && L[D] ? (H === n && (H = L[D].endValue + L[D].unitType), B = o(s).rootPropertyValueCache[$]) : x.Hooks.registered[D] ? H === n ? (B = x.getPropertyValue(s, $), H = x.getPropertyValue(s, D, B)) : B = x.Hooks.templates[$][1] : H === n && (H = x.getPropertyValue(s, D));
                                    var j, N, q, X = !1;
                                    if (j = d(D, H), H = j[0], q = j[1], j = d(D, W), W = j[0].replace(/^([+-\/*])=/, function (t, e) {
                                            return X = e, ""
                                        }), N = j[1], H = parseFloat(H) || 0, W = parseFloat(W) || 0, "%" === N && (/^(fontSize|lineHeight)$/.test(D) ? (W /= 100, N = "em") : /^scale/.test(D) ? (W /= 100, N = "") : /(Red|Green|Blue)$/i.test(D) && (W = W / 100 * 255, N = "")), /[\/*]/.test(X)) N = q;
                                    else if (q !== N && 0 !== H)
                                        if (0 === W) N = q;
                                        else {
                                            l = l || f();
                                            var Y = /margin|padding|left|right|width|text|word|letter/i.test(D) || /X$/.test(D) || "x" === D ? "x" : "y";
                                            switch (q) {
                                            case "%":
                                                H *= "x" === Y ? l.percentToPxWidth : l.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                H *= l[q + "ToPx"]
                                            }
                                            switch (N) {
                                            case "%":
                                                H *= 1 / ("x" === Y ? l.percentToPxWidth : l.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                H *= 1 / l[N + "ToPx"]
                                            }
                                        }
                                    switch (X) {
                                    case "+":
                                        W = H + W;
                                        break;
                                    case "-":
                                        W = H - W;
                                        break;
                                    case "*":
                                        W = H * W;
                                        break;
                                    case "/":
                                        W = H / W
                                    }
                                    r[D] = {
                                        rootPropertyValue: B,
                                        startValue: H,
                                        currentValue: H,
                                        endValue: W,
                                        unitType: N,
                                        easing: _
                                    }, b.debug && console.log("tweensContainer (" + D + "): " + JSON.stringify(r[D]), s)
                                } else b.debug && console.log("Skipping [" + $ + "] due to a lack of browser support.")
                            }
                            r.element = s
                        }
                        r.element && (x.Values.addClass(s, "velocity-animating"), V.push(r), "" === a.queue && (o(s).tweensContainer = r, o(s).opts = a), o(s).isAnimating = !0, S === k - 1 ? (b.State.calls.push([V, g, a, null, A.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, u())) : S++)
                    }
                    var l, s = this,
                        a = v.extend({}, b.defaults, w),
                        r = {};
                    switch (o(s) === n && b.init(s), parseFloat(a.delay) && a.queue !== !1 && v.queue(s, a.queue, function (t) {
                        b.velocityQueueEntryFlag = !0, o(s).delayTimer = {
                            setTimeout: setTimeout(t, parseFloat(a.delay)),
                            next: t
                        }
                    }), a.duration.toString().toLowerCase()) {
                    case "fast":
                        a.duration = 200;
                        break;
                    case "normal":
                        a.duration = m;
                        break;
                    case "slow":
                        a.duration = 600;
                        break;
                    default:
                        a.duration = parseFloat(a.duration) || 1
                    }
                    b.mock !== !1 && (b.mock === !0 ? a.duration = a.delay = 1 : (a.duration *= parseFloat(b.mock) || 1, a.delay *= parseFloat(b.mock) || 1)), a.easing = c(a.easing, a.duration), a.begin && !p.isFunction(a.begin) && (a.begin = null), a.progress && !p.isFunction(a.progress) && (a.progress = null), a.complete && !p.isFunction(a.complete) && (a.complete = null), a.display !== n && null !== a.display && (a.display = a.display.toString().toLowerCase(), "auto" === a.display && (a.display = b.CSS.Values.getDisplayType(s))), a.visibility !== n && null !== a.visibility && (a.visibility = a.visibility.toString().toLowerCase()), a.mobileHA = a.mobileHA && b.State.isMobile && !b.State.isGingerbread, a.queue === !1 ? a.delay ? setTimeout(t, a.delay) : t() : v.queue(s, a.queue, function (e, i) {
                        return i === !0 ? (A.promise && A.resolver(g), !0) : (b.velocityQueueEntryFlag = !0, void t(e))
                    }), "" !== a.queue && "fx" !== a.queue || "inprogress" === v.queue(s)[0] || v.dequeue(s)
                }
                var l, d, f, g, y, w, r = arguments[0] && (arguments[0].p || v.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || p.isString(arguments[0].properties));
                if (p.isWrapped(this) ? (l = !1, f = 0, g = this, d = this) : (l = !0, f = 1, g = r ? arguments[0].elements || arguments[0].e : arguments[0]), g = a(g)) {
                    r ? (y = arguments[0].properties || arguments[0].p, w = arguments[0].options || arguments[0].o) : (y = arguments[f], w = arguments[f + 1]);
                    var k = g.length,
                        S = 0;
                    if (!/^(stop|finish)$/i.test(y) && !v.isPlainObject(w)) {
                        var P = f + 1;
                        w = {};
                        for (var T = P; T < arguments.length; T++) p.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? p.isString(arguments[T]) || p.isArray(arguments[T]) ? w.easing = arguments[T] : p.isFunction(arguments[T]) && (w.complete = arguments[T]) : w.duration = arguments[T]
                    }
                    var A = {
                        promise: null,
                        resolver: null,
                        rejecter: null
                    };
                    l && b.Promise && (A.promise = new b.Promise(function (t, e) {
                        A.resolver = t, A.rejecter = e
                    }));
                    var M;
                    switch (y) {
                    case "scroll":
                        M = "scroll";
                        break;
                    case "reverse":
                        M = "reverse";
                        break;
                    case "finish":
                    case "stop":
                        v.each(g, function (t, e) {
                            o(e) && o(e).delayTimer && (clearTimeout(o(e).delayTimer.setTimeout), o(e).delayTimer.next && o(e).delayTimer.next(), delete o(e).delayTimer)
                        });
                        var O = [];
                        return v.each(b.State.calls, function (t, e) {
                            e && v.each(e[1], function (i, s) {
                                var a = w === n ? "" : w;
                                return a === !0 || e[2].queue === a || w === n && e[2].queue === !1 ? void v.each(g, function (i, n) {
                                    n === s && ((w === !0 || p.isString(w)) && (v.each(v.queue(n, p.isString(w) ? w : ""), function (t, e) {
                                        p.isFunction(e) && e(null, !0)
                                    }), v.queue(n, p.isString(w) ? w : "", [])), "stop" === y ? (o(n) && o(n).tweensContainer && a !== !1 && v.each(o(n).tweensContainer, function (t, e) {
                                        e.endValue = e.currentValue
                                    }), O.push(t)) : "finish" === y && (e[2].duration = 1))
                                }) : !0
                            })
                        }), "stop" === y && (v.each(O, function (t, e) {
                            h(e, !0)
                        }), A.promise && A.resolver(g)), t();
                    default:
                        if (!v.isPlainObject(y) || p.isEmptyObject(y)) {
                            if (p.isString(y) && b.Redirects[y]) {
                                var E = v.extend({}, w),
                                    L = E.duration,
                                    F = E.delay || 0;
                                return E.backwards === !0 && (g = v.extend(!0, [], g).reverse()), v.each(g, function (t, e) {
                                    parseFloat(E.stagger) ? E.delay = F + parseFloat(E.stagger) * t : p.isFunction(E.stagger) && (E.delay = F + E.stagger.call(e, t, k)), E.drag && (E.duration = parseFloat(L) || (/^(callout|transition)/.test(y) ? 1e3 : m), E.duration = Math.max(E.duration * (E.backwards ? 1 - t / k : (t + 1) / k), .75 * E.duration, 200)), b.Redirects[y].call(e, e, E || {}, t, k, g, A.promise ? A : n)
                                }), t()
                            }
                            var I = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return A.promise ? A.rejecter(new Error(I)) : console.log(I), t()
                        }
                        M = "start"
                    }
                    var z = {
                            lastParent: null,
                            lastPosition: null,
                            lastFontSize: null,
                            lastPercentToPxWidth: null,
                            lastPercentToPxHeight: null,
                            lastEmToPx: null,
                            remToPx: null,
                            vwToPx: null,
                            vhToPx: null
                        },
                        V = [];
                    v.each(g, function (t, e) {
                        p.isNode(e) && s.call(e)
                    });
                    var D, E = v.extend({}, b.defaults, w);
                    if (E.loop = parseInt(E.loop), D = 2 * E.loop - 1, E.loop)
                        for (var R = 0; D > R; R++) {
                            var W = {
                                delay: E.delay,
                                progress: E.progress
                            };
                            R === D - 1 && (W.display = E.display, W.visibility = E.visibility, W.complete = E.complete), C(g, "reverse", W)
                        }
                    return t()
                }
            };
            b = v.extend(C, b), b.animate = C;
            var k = e.requestAnimationFrame || f;
            return b.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function () {
                i.hidden ? (k = function (t) {
                    return setTimeout(function () {
                        t(!0)
                    }, 16)
                }, u()) : k = e.requestAnimationFrame || f
            }), t.Velocity = b, t !== e && (t.fn.velocity = C, t.fn.velocity.defaults = b.defaults), v.each(["Down", "Up"], function (t, e) {
                b.Redirects["slide" + e] = function (t, i, s, a, o, r) {
                    var l = v.extend({}, i),
                        c = l.begin,
                        u = l.complete,
                        h = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        },
                        d = {};
                    l.display === n && (l.display = "Down" === e ? "inline" === b.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), l.begin = function () {
                        c && c.call(o, o);
                        for (var i in h) {
                            d[i] = t.style[i];
                            var n = b.CSS.getPropertyValue(t, i);
                            h[i] = "Down" === e ? [n, 0] : [0, n]
                        }
                        d.overflow = t.style.overflow, t.style.overflow = "hidden"
                    }, l.complete = function () {
                        for (var e in d) t.style[e] = d[e];
                        u && u.call(o, o), r && r.resolver(o)
                    }, b(t, h, l)
                }
            }), v.each(["In", "Out"], function (t, e) {
                b.Redirects["fade" + e] = function (t, i, s, a, o, r) {
                    var l = v.extend({}, i),
                        c = {
                            opacity: "In" === e ? 1 : 0
                        },
                        u = l.complete;
                    l.complete = s !== a - 1 ? l.begin = null : function () {
                        u && u.call(o, o), r && r.resolver(o)
                    }, l.display === n && (l.display = "In" === e ? "auto" : "none"), b(this, c, l)
                }
            }), b
        }(window.jQuery || window.Zepto || window, window, document)
    }),
    function (t) {
        t(document).ready(function () {
            t.fn.reverse = [].reverse, t(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn", function (i) {
                var n = t(this);
                e(n)
            }), t(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn", function (e) {
                var n = t(this);
                i(n)
            })
        }), t.fn.extend({
            openFAB: function () {
                var i = t(this);
                e(i)
            },
            closeFAB: function () {
                i($this)
            }
        });
        var e = function (e) {
                if ($this = e, $this.hasClass("active") === !1) {
                    $this.addClass("active"), $this.find("ul .btn-floating").velocity({
                        scaleY: ".4",
                        scaleX: ".4",
                        translateY: "40px"
                    }, {
                        duration: 0
                    });
                    var i = 0;
                    $this.find("ul .btn-floating").reverse().each(function () {
                        t(this).velocity({
                            opacity: "1",
                            scaleX: "1",
                            scaleY: "1",
                            translateY: "0"
                        }, {
                            duration: 80,
                            delay: i
                        }), i += 40
                    })
                }
            },
            i = function (t) {
                $this = t, $this.removeClass("active");
                $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
                    opacity: "0",
                    scaleX: ".4",
                    scaleY: ".4",
                    translateY: "40px"
                }, {
                    duration: 80
                })
            }
    }(jQuery),
    function (t) {
        "use strict";

        function n(t) {
            return null !== t && t === t.window
        }

        function s(t) {
            return n(t) ? t : 9 === t.nodeType && t.defaultView
        }

        function a(t) {
            var e, i, n = {
                    top: 0,
                    left: 0
                },
                a = t && t.ownerDocument;
            return e = a.documentElement, "undefined" != typeof t.getBoundingClientRect && (n = t.getBoundingClientRect()), i = s(a), {
                top: n.top + i.pageYOffset - e.clientTop,
                left: n.left + i.pageXOffset - e.clientLeft
            }
        }

        function o(t) {
            var e = "";
            for (var i in t) t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";");
            return e
        }

        function c(t) {
            if (l.allowEvent(t) === !1) return null;
            for (var e = null, i = t.target || t.srcElement; null !== i.parentElement;) {
                if (!(i instanceof SVGElement || -1 === i.className.indexOf("waves-effect"))) {
                    e = i;
                    break
                }
                if (i.classList.contains("waves-effect")) {
                    e = i;
                    break
                }
                i = i.parentElement
            }
            return e
        }

        function u(e) {
            var i = c(e);
            null !== i && (r.show(e, i), "ontouchstart" in t && (i.addEventListener("touchend", r.hide, !1), i.addEventListener("touchcancel", r.hide, !1)), i.addEventListener("mouseup", r.hide, !1), i.addEventListener("mouseleave", r.hide, !1))
        }
        var e = e || {},
            i = document.querySelectorAll.bind(document),
            r = {
                duration: 750,
                show: function (t, e) {
                    if (2 === t.button) return !1;
                    var i = e || this,
                        n = document.createElement("div");
                    n.className = "waves-ripple", i.appendChild(n);
                    var s = a(i),
                        l = t.pageY - s.top,
                        c = t.pageX - s.left,
                        u = "scale(" + i.clientWidth / 100 * 10 + ")";
                    "touches" in t && (l = t.touches[0].pageY - s.top, c = t.touches[0].pageX - s.left), n.setAttribute("data-hold", Date.now()), n.setAttribute("data-scale", u), n.setAttribute("data-x", c), n.setAttribute("data-y", l);
                    var h = {
                        top: l + "px",
                        left: c + "px"
                    };
                    n.className = n.className + " waves-notransition", n.setAttribute("style", o(h)), n.className = n.className.replace("waves-notransition", ""), h["-webkit-transform"] = u, h["-moz-transform"] = u, h["-ms-transform"] = u, h["-o-transform"] = u, h.transform = u, h.opacity = "1", h["-webkit-transition-duration"] = r.duration + "ms", h["-moz-transition-duration"] = r.duration + "ms", h["-o-transition-duration"] = r.duration + "ms", h["transition-duration"] = r.duration + "ms", h["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", h["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", h["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", h["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", n.setAttribute("style", o(h))
                },
                hide: function (t) {
                    l.touchup(t);
                    var e = this,
                        n = (1.4 * e.clientWidth, null),
                        s = e.getElementsByClassName("waves-ripple");
                    if (!(s.length > 0)) return !1;
                    n = s[s.length - 1];
                    var a = n.getAttribute("data-x"),
                        c = n.getAttribute("data-y"),
                        u = n.getAttribute("data-scale"),
                        h = Date.now() - Number(n.getAttribute("data-hold")),
                        d = 350 - h;
                    0 > d && (d = 0), setTimeout(function () {
                        var t = {
                            top: c + "px",
                            left: a + "px",
                            opacity: "0",
                            "-webkit-transition-duration": r.duration + "ms",
                            "-moz-transition-duration": r.duration + "ms",
                            "-o-transition-duration": r.duration + "ms",
                            "transition-duration": r.duration + "ms",
                            "-webkit-transform": u,
                            "-moz-transform": u,
                            "-ms-transform": u,
                            "-o-transform": u,
                            transform: u
                        };
                        n.setAttribute("style", o(t)), setTimeout(function () {
                            try {
                                e.removeChild(n)
                            } catch (t) {
                                return !1
                            }
                        }, r.duration)
                    }, d)
                },
                wrapInput: function (t) {
                    for (var e = 0; e < t.length; e++) {
                        var i = t[e];
                        if ("input" === i.tagName.toLowerCase()) {
                            var n = i.parentNode;
                            if ("i" === n.tagName.toLowerCase() && -1 !== n.className.indexOf("waves-effect")) continue;
                            var s = document.createElement("i");
                            s.className = i.className + " waves-input-wrapper";
                            var a = i.getAttribute("style");
                            a || (a = ""), s.setAttribute("style", a), i.className = "waves-button-input", i.removeAttribute("style"), n.replaceChild(s, i), s.appendChild(i)
                        }
                    }
                }
            },
            l = {
                touches: 0,
                allowEvent: function (t) {
                    var e = !0;
                    return "touchstart" === t.type ? l.touches += 1 : "touchend" === t.type || "touchcancel" === t.type ? setTimeout(function () {
                        l.touches > 0 && (l.touches -= 1)
                    }, 500) : "mousedown" === t.type && l.touches > 0 && (e = !1), e
                },
                touchup: function (t) {
                    l.allowEvent(t)
                }
            };
        e.displayEffect = function (e) {
            e = e || {}, "duration" in e && (r.duration = e.duration), r.wrapInput(i(".waves-effect")), "ontouchstart" in t && document.body.addEventListener("touchstart", u, !1), document.body.addEventListener("mousedown", u, !1)
        }, e.attach = function (e) {
            "input" === e.tagName.toLowerCase() && (r.wrapInput([e]), e = e.parentElement), "ontouchstart" in t && e.addEventListener("touchstart", u, !1), e.addEventListener("mousedown", u, !1)
        }, t.Waves = e, document.addEventListener("DOMContentLoaded", function () {
            e.displayEffect()
        }, !1)
    }(window);