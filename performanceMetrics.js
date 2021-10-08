//FirstByte Info
window.sherlock_firstbyte = window.performance && window.performance.timing ? window.performance.timing.responseStart : Number(new Date());
// FID init code.
(function(a, b) {
    function c(a) {
        l.push(a), f()
    }

    function d(a, b) {
        i || (i = b, j = a, k = new Date, f())
    }

    function e() {
        i && (i = null, j = null, k = null)
    }

    function f() {
        0 <= j && j < k - n && (l.forEach(a => {
            a(j, i)
        }), l = [])
    }

    function g(c, e) {
        function f() {
            d(c, e), h()
        }

        function g() {
            h()
        }

        function h() {
            b(o, f, m), b(p, g, m)
        }
        a(o, f, m), a(p, g, m)
    }

    function h(a) {
        if (a.cancelable) {
            const b = 1e12 < a.timeStamp,
                c = b ? new Date : performance.now(),
                e = c - a.timeStamp;
            "pointerdown" === a.type ? g(e, a) : d(e, a)
        }
    }
    let i, j, k, l = [];
    const m = {
            passive: !0,
            capture: !0
        },
        n = new Date,
        o = "pointerup",
        p = "pointercancel";
    (function(a) {
        ["click", "mousedown", "keydown", "touchstart", "pointerdown"].forEach(b => {
            a(b, h, m)
        })
    })(a), self.perfMetrics = self.perfMetrics || {}, self.perfMetrics.onFirstInputDelay = c, self.perfMetrics.clearFirstInputDelay = e
})(addEventListener, removeEventListener);
// FCP init code.
(function(a) {
    function b() {
        return !!document.body && null !== document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT, function(a) {
            return !!a && /[^\s]/.test(a.nodeValue) && "SCRIPT" !== a.parentNode.tagName && "STYLE" !== a.parentNode.tagName && 0 < a.parentNode.offsetHeight
        }, !1).nextNode()
    }

    function c() {
        return null !== document.querySelector("input[placeholder]")
    }

    function d() {
        return b() || c() ? void a(function() {
            const a = performance.now();
            f ? f(a) : g = a, performance.measure && performance.measure("TTFCP")
        }) : void a(d)
    }

    function e(a) {
        g ? a(g) : f = a
    }
    let f, g;
    a(d), self.perfMetrics = self.perfMetrics || {}, self.perfMetrics.onFirstContentfulPaint = e
})(requestAnimationFrame);
// TTFMP Polyfill code.
(function(a) {
    function b() {
        const c = document.getElementById(i);
        h = 0, c ? g === c ? e = a(b) : "IMG" !== c.tagName || c.complete ? a(function() {
            const a = performance.now();
            g = c, f ? f(a) : h = a, performance.measure && performance.measure("TTFMP")
        }) : e = a(b) : e = a(b)
    }

    function c(a) {
        h ? a(h) : f = a
    }

    function d() {
        cancelAnimationFrame(e)
    }
    let e, f, g, h;
    const i = "FMP-target";
    e = a(b), self.perfMetrics = self.perfMetrics || {}, self.perfMetrics.onFirstMeaningfulPaint = c, self.perfMetrics.startSearchingForFirstMeaningfulPaint = function() {
        g = document.getElementById(i), b()
    }, self.perfMetrics.stopSearchingForFirstMeaningfulPaint = d
})(requestAnimationFrame);