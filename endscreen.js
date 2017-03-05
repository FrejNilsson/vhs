(function(g) {
    var window = this;
    var Zta = function(a, b) {
        g.U(a).experiments.g("web_player_gel_logging_killswitch") || a.app.X.V("onLogToGel", {
            payload_name: "thumbnailLoaded",
            payload: b
        })
    }
      , $ta = function(a, b, c, d) {
        var e = b.Vb();
        g.O(a.element, "ytp-suggestion-set", !!e.videoId);
        var f = b.getPlaylistId();
        d = b.tc(c, d ? d : "mqdefault.jpg");
        var k = b instanceof g.et ? g.qv(b.lengthSeconds) : null
          , l = !!f
          , f = l && "RD" == g.Ht(f).type
          , m = b instanceof g.et ? b.Ba : null;
        c = {
            title: b.title,
            author: b.author,
            author_and_views: e.shortViewCount ? b.author + " \u2022 " + e.shortViewCount : b.author,
            watch: g.P("YTP_WATCH_VIDEO_OR_PLAYLIST", {
                TITLE: b.title
            }, b.title),
            duration: k,
            url: b.im(c),
            is_live: m,
            is_list: l,
            is_mix: f,
            background: d ? "background-image: url(" + d + ")" : ""
        };
        b instanceof g.Kt && (c.playlist_length = b.getLength());
        a.update(c)
    }
      , Q8 = function(a) {
        var b = g.U(a)
          , c = b.experiments.g("video_wall_moving_thumbnails_hover")
          , c = b.experiments.g("video_wall_moving_thumbnails_autoplay") || c
          , d = g.Bi || g.uc ? {
            style: "will-change: opacity"
        } : void 0
          , e = ["ytp-videowall-still"];
        b.experiments.g("video_wall_show_text") && e.push("ytp-show-text");
        var f = {
            K: "img",
            $: "ytp-videowall-moving-thumbnail",
            aa: {
                src: "{{moving_thumbnail}}"
            }
        }
          , b = b.C && !b.H;
        g.V.call(this, {
            K: "a",
            fa: e,
            aa: {
                href: "{{url}}",
                target: b ? "_blank" : "",
                "aria-label": "{{watch}}",
                "data-is-live": "{{is_live}}",
                "data-is-list": "{{is_list}}",
                "data-is-mix": "{{is_mix}}"
            },
            T: [{
                K: "div",
                $: "ytp-videowall-still-image",
                aa: {
                    style: "{{background}}"
                }
            }, c ? f : null, {
                K: "span",
                $: "ytp-videowall-still-info",
                T: [{
                    K: "span",
                    $: "ytp-videowall-still-info-bg",
                    T: [{
                        K: "span",
                        $: "ytp-videowall-still-info-content",
                        aa: d,
                        T: [{
                            K: "span",
                            $: "ytp-videowall-still-info-title",
                            T: ["{{title}}"]
                        }, {
                            K: "span",
                            $: "ytp-videowall-still-info-author",
                            T: ["{{author_and_views}}"]
                        }, {
                            K: "span",
                            $: "ytp-videowall-still-info-live",
                            T: [g.P("YTP_LIVE")]
                        }, {
                            K: "span",
                            $: "ytp-videowall-still-info-duration",
                            T: ["{{duration}}"]
                        }]
                    }]
                }]
            }, {
                K: "span",
                fa: ["ytp-videowall-still-listlabel-regular", "ytp-videowall-still-listlabel"],
                T: [{
                    K: "span",
                    $: "ytp-videowall-still-listlabel-icon"
                }, g.P("YTP_PLAYLIST"), {
                    K: "span",
                    $: "ytp-videowall-still-listlabel-length",
                    T: [" (", {
                        K: "span",
                        T: ["{{playlist_length}}"]
                    }, ")"]
                }]
            }, {
                K: "span",
                fa: ["ytp-videowall-still-listlabel-mix", "ytp-videowall-still-listlabel"],
                T: [{
                    K: "span",
                    $: "ytp-videowall-still-listlabel-mix-icon"
                }, g.P("YTP_MIX"), {
                    K: "span",
                    $: "ytp-videowall-still-listlabel-length",
                    T: [" (50+)"]
                }]
            }]
        });
        this.D = b;
        this.o = a;
        this.A = null;
        this.C = 0;
        this.U("click", this.LH);
        this.U("keypress", this.MH);
        c && this.W(this.ra["ytp-videowall-moving-thumbnail"], "load", this.OH);
        g.U(a).experiments.g("player_interaction_logging") && (a = a.app.ca,
        g.jb(a.A, this),
        b = String(a.G++),
        this.element.setAttribute("data-visual-id", b),
        g.Fb(this, (0,
        g.z)(a.F, a, this)))
    }
      , aua = function(a) {
        if (5E5 < g.Jr(g.U(a.o).schedule)) {
            var b = a.A.Yl();
            b && (a.C = (0,
            g.Pl)(),
            a.update({
                moving_thumbnail: b
            }))
        }
    }
      , R8 = function(a) {
        g.Bv.call(this, a, {
            K: "div",
            fa: ["ytp-thumbnail-overlay", "ytp-channel-overlay"],
            T: [{
                K: "div",
                $: "ytp-thumbnail-overlay-image",
                aa: {
                    style: "{{background}}"
                }
            }, {
                K: "div",
                $: "ytp-thumbnail-overlay-curtain"
            }]
        })
    }
      , S8 = function(a) {
        var b = g.U(a).experiments.g("moving_thumbnails_autonav")
          , c = {
            K: "img",
            $: "ytp-upnext-moving-thumbnail",
            aa: {
                src: "{{moving_thumbnail}}"
            }
        }
          , c = {
            K: "div",
            $: "ytp-upnext",
            aa: {
                "aria-label": "{{watch}}"
            },
            T: [{
                K: "div",
                $: "ytp-thumbnail-overlay-image",
                aa: {
                    style: "{{background}}"
                }
            }, b ? c : null, {
                K: "div",
                $: "ytp-thumbnail-overlay-curtain"
            }, {
                K: "span",
                $: "ytp-upnext-top",
                T: [{
                    K: "span",
                    $: "ytp-upnext-header",
                    T: [g.P("YTP_PLAYLIST_UP_NEXT")]
                }, {
                    K: "span",
                    $: "ytp-upnext-title",
                    T: ["{{title}}"]
                }, {
                    K: "span",
                    $: "ytp-upnext-author",
                    T: ["{{author}}"]
                }]
            }, {
                K: "a",
                $: "ytp-upnext-autoplay-icon",
                aa: {
                    href: "{{url}}"
                },
                T: [{
                    K: "svg",
                    aa: {
                        height: "100%",
                        version: "1.1",
                        viewBox: "0 0 98 98",
                        width: "100%"
                    },
                    T: [{
                        K: "circle",
                        $: "ytp-svg-autoplay-circle",
                        aa: {
                            cx: "49",
                            cy: "49",
                            fill: "#000",
                            "fill-opacity": "0.8",
                            r: "48"
                        }
                    }, {
                        K: "circle",
                        $: "ytp-svg-autoplay-ring",
                        aa: {
                            cx: "-49",
                            cy: "49",
                            "fill-opacity": "0",
                            r: "46.5",
                            stroke: "#FFFFFF",
                            "stroke-dasharray": "293",
                            "stroke-dashoffset": "-293",
                            "stroke-width": "4",
                            transform: "rotate(-90)"
                        }
                    }, {
                        K: "polygon",
                        $: "ytp-svg-autoplay-triangle",
                        aa: {
                            fill: "#fff",
                            points: "32,27 72,49 32,71"
                        }
                    }]
                }]
            }, {
                K: "span",
                $: "ytp-upnext-bottom",
                T: [{
                    K: "span",
                    $: "ytp-upnext-cancel"
                }, {
                    K: "span",
                    $: "ytp-upnext-paused",
                    T: [g.P("YTP_AUTOPLAY_PAUSED_2")]
                }]
            }, {
                K: "span",
                $: "ytp-upnext-close"
            }]
        };
        g.V.call(this, c);
        this.D = null;
        var d = this.ra["ytp-upnext-cancel"]
          , c = this.ra["ytp-upnext-close"];
        this.D = new g.V({
            K: "button",
            fa: ["ytp-upnext-cancel-button", "ytp-button"],
            aa: {
                tabindex: 0,
                "aria-label": g.P("YTP_AUTOPLAY_CANCEL")
            },
            T: [g.P("YTP_CANCEL")]
        });
        g.J(this, this.D);
        this.D.U("click", this.Bx, this);
        this.D.Ga(d);
        d = new g.V({
            K: "button",
            fa: ["ytp-upnext-close-button", "ytp-button"]
        });
        g.J(this, d);
        d.U("click", this.Bx, this);
        d.Ga(c);
        this.o = a;
        this.L = this.ra["ytp-svg-autoplay-ring"];
        this.F = this.C = this.A = this.B = null;
        this.G = new g.Od(this.Gl,5E3,this);
        g.J(this, this.G);
        this.H = 0;
        this.W(this.ra["ytp-upnext-autoplay-icon"], "click", this.XK);
        this.yx();
        this.W(a, "autonavvisibility", this.yx);
        this.W(a, "mdxnowautoplaying", this.oK);
        this.W(a, "mdxautoplaycanceled", this.pK);
        this.W(a, "mdxautoplayupnext", this.Jz);
        3 == this.o.Va() && (a = (a = g.om(g.im(this.o))) ? a.hF() : null) && this.Jz(a);
        b && (this.J = 0,
        this.W(this.ra["ytp-upnext-moving-thumbnail"], "load", this.FR))
    }
      , bua = function(a, b) {
        a.B = b;
        $ta(a, b, g.U(a.o), "hqdefault.jpg");
        g.oh(a.element, "ytp-moving-thumbnail-loaded");
        a.update({
            moving_thumbnail: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        });
        if (5E5 < g.Jr(g.U(a.o).schedule)) {
            var c = a.B.Yl();
            c && (a.J = (0,
            g.Pl)(),
            a.update({
                moving_thumbnail: c
            }))
        }
    }
      , T8 = function(a, b) {
        a.A || (g.Pi("a11y-announce", g.P("YTP_PLAYLIST_UP_NEXT") + " " + a.B.title),
        a.H = (0,
        g.Pl)(),
        a.A = new g.Od((0,
        g.z)(a.Jo, a, b),25),
        a.Jo(b));
        g.oh(a.element, "ytp-upnext-autoplay-paused")
    }
      , V8 = function(a) {
        U8(a);
        a.H = (0,
        g.Pl)();
        a.Jo();
        g.N(a.element, "ytp-upnext-autoplay-paused")
    }
      , U8 = function(a) {
        a.A && (a.A.dispose(),
        a.A = null)
    }
      , W8 = function(a, b) {
        g.pv.call(this, {
            K: "div",
            fa: ["html5-endscreen", "ytp-player-content", b || "base-endscreen"]
        });
        this.o = a;
        this.X = !1
    }
      , cua = function(a) {
        a = g.U(a);
        return a.jc && !a.Ha
    }
      , X8 = function(a, b) {
        W8.call(this, a, "videowall-endscreen");
        this.da = a;
        this.ca = b;
        this.G = 0;
        this.A = [];
        this.H = this.D = this.C = null;
        this.J = this.ba = !1;
        this.F = new g.fo(this);
        g.J(this, this.F);
        this.M = new g.Od(g.za(g.N, this.element, "ytp-show-tiles"),0);
        g.J(this, this.M);
        var c = new g.V({
            K: "button",
            fa: ["ytp-button", "ytp-endscreen-previous"],
            aa: {
                "aria-label": g.P("YTP_PREVIOUS")
            },
            T: [g.Hg()]
        });
        g.J(this, c);
        c.Ga(this.element);
        c.U("click", this.hQ, this);
        this.P = new g.tu({
            K: "div",
            $: "ytp-endscreen-content"
        });
        g.J(this, this.P);
        this.P.Ga(this.element);
        c = new g.V({
            K: "button",
            fa: ["ytp-button", "ytp-endscreen-next"],
            aa: {
                "aria-label": g.P("YTP_NEXT")
            },
            T: [g.Ig()]
        });
        g.J(this, c);
        c.Ga(this.element);
        c.U("click", this.gQ, this);
        this.B = new S8(a);
        g.J(this, this.B);
        g.Jm(this.o, this.B.element, 5);
        this.ma()
    }
      , dua = function(a) {
        return (0,
        g.Q)(a.Ff, function(a) {
            return g.tv(a)
        })
    }
      , eua = function(a, b, c) {
        return 0 == b && a.C.length && (b = c / X8.g,
        2 <= c / X8.g && 2 <= b && g.U(a.o).experiments.g("video_wall_emphasize_first")) ? 2 * X8.g : X8.g
    }
      , Y8 = function(a) {
        var b = a.ca.us();
        b != a.ba && (a.ba = b,
        a.o.V("autonavvisibility"))
    }
      , Z8 = function(a) {
        W8.call(this, a, "subscribecard-endscreen");
        var b = a.getVideoData();
        this.A = new R8(a);
        g.J(this, this.A);
        g.Jm(this.o, this.A.element, 5);
        this.B = new g.V(["div", "ytp-subscribe-card", ["img", "ytp-author-image", {
            src: b.profilePicture
        }], ["div", "ytp-subscribe-card-right", ["div", "ytp-author-name", b.author], ["div", "html5-subscribe-button-container"]]]);
        g.J(this, this.B);
        this.B.Ga(this.element);
        this.C = new g.Bu(g.P("YTP_SUBSCRIBE"),g.P("YTP_UNSUBSCRIBE"),!0,b.Lz,b.subscribed,"trailer-endscreen",null,a);
        g.J(this, this.C);
        this.C.Ga(this.B.ra["html5-subscribe-button-container"]);
        this.ma()
    }
      , $8 = function(a) {
        g.qu.call(this, a);
        g.Ih({});
        this.o = null;
        this.isAvailable = !0;
        this.A = new g.fo(this);
        g.J(this, this.A);
        this.B = g.U(a);
        cua(a) ? this.o = new X8(this.g,this) : this.B.Ha ? this.o = new Z8(this.g) : this.o = new W8(this.g);
        g.J(this, this.o);
        g.Jm(this.g, this.o.element, 5);
        this.Ny();
        this.A.W(a, "videodatachange", this.Ny, this);
        this.A.W(a, "crn_endscreen", this.LP, this);
        this.A.W(a, "crx_endscreen", this.MP, this)
    };
    g.ca(Q8, g.V);
    g.h = Q8.prototype;
    g.h.Ni = function() {
        var a = this.A.Vb().videoId
          , b = this.A.getPlaylistId();
        g.U2(this.o.app, a, this.A.pd, b, void 0, void 0)
    }
    ;
    g.h.LH = function(a) {
        g.Nm(this.o, this);
        g.vv(a, this.o, !this.o.isFullscreen() && this.D, this.A.pd || void 0) && this.Ni()
    }
    ;
    g.h.NH = function() {
        this.za(this.B);
        this.B = null;
        aua(this)
    }
    ;
    g.h.MH = function(a) {
        switch (a.keyCode) {
        case 13:
        case 32:
            g.Vk(a) || (this.Ni(),
            g.Uk(a))
        }
    }
    ;
    g.h.OH = function(a) {
        120 < g.Qk(a).naturalWidth && (g.N(this.element, "ytp-videowall-moving-thumbnail-loaded"),
        this.A.videoId && Zta(this.o, {
            isMovingThumbnail: !0,
            durationLoadingMs: Math.round((0,
            g.Pl)() - this.C),
            videoId: this.A.videoId
        }))
    }
    ;
    g.A(R8, g.Bv);
    R8.prototype.Gb = function(a) {
        a ? this.B.show() : g.Av(this.B)
    }
    ;
    g.A(S8, g.V);
    g.h = S8.prototype;
    g.h.Gl = function() {
        this.C && (this.G.stop(),
        this.za(this.F),
        this.F = null,
        this.C.close(),
        this.C = null)
    }
    ;
    g.h.yx = function() {
        this.Gb(g.jm(this.o))
    }
    ;
    g.h.NK = function() {
        window.focus();
        this.Gl()
    }
    ;
    g.h.Jo = function(a) {
        a = a || g.U(this.o).experiments.o("autoplay_time") || 1E4;
        var b = Math.min((0,
        g.Pl)() - this.H, a);
        a = Math.min(b / a, 1);
        this.L.setAttribute("stroke-dashoffset", -293 * (a + 1));
        1 <= a && 3 != this.o.Va() ? this.select(!0) : this.A && this.A.start()
    }
    ;
    g.h.select = function(a) {
        var b = g.U(this.o);
        if (b.experiments.g("autonav_notifications") && a && window.Notification && window.document.hasFocus) {
            var c = window.Notification.permission;
            g.ym(this.o, "xwebnotifications", {
                permission: c
            });
            "default" == c ? window.Notification.requestPermission() : "granted" != c || window.document.hasFocus() || (c = this.B.Vb(),
            this.Gl(),
            this.C = new window.Notification(g.P("YTP_PLAYLIST_UP_NEXT"),{
                body: c.title,
                icon: c.tc(b)
            }),
            this.F = this.W(this.C, "click", this.NK),
            this.G.start())
        }
        U8(this);
        this.o.fj(!1, a)
    }
    ;
    g.h.XK = function(a) {
        !g.ff(this.D.element, g.Qk(a)) && g.vv(a, this.o) && this.select()
    }
    ;
    g.h.Bx = function() {
        g.zm(this.o, "autonavcancel");
        g.mm(this.o, !0)
    }
    ;
    g.h.FR = function(a) {
        120 < g.Qk(a).naturalWidth && (g.N(this.element, "ytp-moving-thumbnail-loaded"),
        Zta(this.o, {
            isMovingThumbnail: !0,
            durationLoadingMs: Math.round((0,
            g.Pl)() - this.J),
            videoId: this.B.Vb().videoId
        }))
    }
    ;
    g.h.oK = function(a) {
        this.o.Va();
        this.show();
        T8(this, a)
    }
    ;
    g.h.Jz = function(a) {
        this.o.Va();
        this.B && this.B.Vb().videoId == a.Vb().videoId || bua(this, a)
    }
    ;
    g.h.pK = function() {
        this.o.Va();
        U8(this);
        this.ma()
    }
    ;
    g.h.R = function() {
        U8(this);
        this.Gl();
        S8.N.R.call(this)
    }
    ;
    g.A(W8, g.pv);
    W8.prototype.create = function() {
        this.X = !0
    }
    ;
    W8.prototype.destroy = function() {
        this.X = !1
    }
    ;
    W8.prototype.Oo = function() {
        return !1
    }
    ;
    g.A(X8, W8);
    X8.g = 2;
    g.h = X8.prototype;
    g.h.create = function() {
        X8.N.create.call(this);
        var a = this.o.getVideoData();
        a && (this.C = dua(a),
        this.D = a);
        this.Zg();
        this.F.W(this.o, "appresize", this.Zg);
        this.F.W(this.o, "videodatachange", this.iQ);
        this.F.W(this.o, "autonavchange", this.NA);
        this.F.W(this.o, "autonavcancel", this.fQ);
        this.F.W(this.element, "transitionend", this.ZL)
    }
    ;
    g.h.destroy = function() {
        g.ho(this.F);
        g.Hb(this.A);
        this.A = [];
        this.C = null;
        X8.N.destroy.call(this);
        g.oh(this.element, "ytp-show-tiles");
        this.M.stop()
    }
    ;
    g.h.Oo = function() {
        return 1 != this.D.autonavState
    }
    ;
    g.h.jk = function() {
        return g.Km(this.o) && this.Oo() && !this.H
    }
    ;
    g.h.show = function() {
        X8.N.show.call(this);
        g.oh(this.element, "ytp-show-tiles");
        g.U(this.o).isMobile ? g.Pd(this.M) : this.M.start();
        (this.J || this.H && this.H != this.D.clientPlaybackNonce) && g.mm(this.o, !1);
        var a = this.jk();
        g.Km(this.o) && g.U(this.o).experiments.g("ui_logging") && this.ca.log({
            cancelButtonShow: a ? "1" : "0",
            state: this.Oo() ? "enabled" : "disabled"
        });
        a ? (Y8(this),
        2 == this.D.autonavState ? g.U(this.o).experiments.g("fast_autonav_in_background") && 3 == this.o.sA() ? this.B.select(!0) : T8(this.B) : 3 == this.D.autonavState && V8(this.B)) : (g.mm(this.o, !0),
        Y8(this))
    }
    ;
    g.h.ma = function() {
        X8.N.ma.call(this);
        V8(this.B);
        Y8(this)
    }
    ;
    g.h.ZL = function(a) {
        g.Qk(a) == this.element && this.Zg()
    }
    ;
    g.h.Zg = function() {
        if (this.C && this.C.length) {
            var a = g.U(this.o).experiments.g("video_wall_moving_thumbnails_hover");
            g.N(this.element, "ytp-endscreen-paginate");
            var b = g.vk(this.element), c = b.width / b.height, d = 96 / 54, e = X8.g, f = X8.g, k = Math.max(b.width / 96, 2), l = Math.max(b.height / 54, 2), m = this.C.length, n = Math.pow(X8.g, 2), q, t = eua(this, 0, l), v = eua(this, 1, l);
            q = m * n + (Math.pow(t, 2) - n);
            q += Math.pow(v, 2) - n;
            for (q -= n; 0 < q && (e < k || f < l); ) {
                var w = e / X8.g
                  , C = f / X8.g
                  , E = e <= k - X8.g && q >= C * n
                  , K = f <= l - X8.g && q >= w * n;
                if ((w + 1) / C * d / c > c / (w / (C + 1) * d) && K)
                    q -= w * n,
                    f += X8.g;
                else if (E)
                    q -= C * n,
                    e += X8.g;
                else if (K)
                    q -= w * n,
                    f += X8.g;
                else
                    break
            }
            d = !1;
            k = X8.g + t;
            q >= 3 * n && 6 >= m * n - q && (f >= k || e >= k) && v <= X8.g && (d = !0);
            q = 96 * e;
            n = 54 * f;
            c = q / n < c ? b.height / n : b.width / q;
            c = Math.min(c, 2);
            q *= c;
            n *= c;
            q *= g.re(b.width / q || 1, 1, 1.21);
            n *= g.re(b.height / n || 1, 1, 1.21);
            q = Math.floor(Math.min(b.width, q));
            n = Math.floor(Math.min(b.height, n));
            b = this.P.element;
            g.uk(b, q, n);
            g.bk(b, {
                marginLeft: q / -2 + "px",
                marginTop: n / -2 + "px"
            });
            bua(this.B, this.C[0]);
            g.O(this.element, "ytp-endscreen-takeover", this.jk());
            Y8(this);
            c = q + 4;
            q = n + 4;
            n = 0;
            k = !this.jk();
            l = !1;
            for (w = 0; w < e; w++)
                for (C = 0; C < f; C++) {
                    var K = v > X8.g && 1 <= n && !l ? n + 1 : n
                      , H = 0;
                    d && w >= e - X8.g && C >= f - X8.g ? H = 1 : 0 == C % X8.g && 0 == w % X8.g && (C < t && w < t ? 0 == C && 0 == w && (H = t) : v > X8.g && C >= f - v && w >= e - v ? C == f - v && w == e - v && (l = !0,
                    K = 1,
                    H = v) : H = X8.g);
                    K = g.se(K + this.G, m);
                    if (0 != H) {
                        E = this.A[n];
                        E || (E = new Q8(this.o),
                        this.A[n] = E,
                        b.appendChild(E.element));
                        var Aa = Math.floor(q * C / f)
                          , gb = Math.floor(c * w / e)
                          , fa = Math.floor(q * (C + H) / f) - Aa - 4
                          , Yc = Math.floor(c * (w + H) / e) - gb - 4;
                        g.jk(E.element, gb, Aa);
                        g.uk(E.element, Yc, fa);
                        g.bk(E.element, "transitionDelay", (C + w) / 20 + "s");
                        g.O(E.element, "ytp-videowall-still-mini", 1 == H);
                        g.O(E.element, "ytp-videowall-still-large", 2 < H);
                        K = this.C[K];
                        H = k && !a;
                        E.A = K;
                        Aa = g.U(E.o);
                        $ta(E, K, Aa, g.mh(E.element, "ytp-videowall-still-large") ? "hqdefault.jpg" : "mqdefault.jpg");
                        g.oh(E.element, "ytp-videowall-moving-thumbnail-loaded");
                        E.update({
                            moving_thumbnail: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        });
                        H ? (g.N(E.element, "ytp-videowall-active"),
                        aua(E)) : Aa.experiments.g("video_wall_moving_thumbnails_hover") && !E.B && (E.B = E.U("mouseover", E.NH));
                        H = K.pd;
                        K = E.o;
                        g.U(K).experiments.g("player_interaction_logging") && (K = K.app.ca,
                        H = H && H.itct,
                        E = E.element.getAttribute("data-visual-id"),
                        g.Lm(K, "onLogServerVeCreated", {
                            id: E,
                            tracking_params: H
                        }));
                        n++
                    }
                }
            g.O(this.element, "ytp-endscreen-paginate", n < m);
            for (a = this.A.length - 1; a >= n; a--)
                E = this.A[a],
                g.Ze(E.element),
                g.Gb(E);
            this.A.length = n
        }
    }
    ;
    X8.A = 2;
    X8.o = 1.21;
    g.h = X8.prototype;
    g.h.iQ = function() {
        var a = this.o.getVideoData();
        this.D != a && (this.G = 0,
        this.C = dua(a),
        this.D = a,
        this.Zg())
    }
    ;
    g.h.gQ = function() {
        this.G += this.A.length;
        this.Zg()
    }
    ;
    g.h.hQ = function() {
        this.G -= this.A.length;
        this.Zg()
    }
    ;
    g.h.hH = function() {
        return !!this.B.A
    }
    ;
    g.h.NA = function(a) {
        1 == a ? (this.J = !1,
        this.H = this.D.clientPlaybackNonce,
        U8(this.B),
        this.g && this.Zg()) : (this.J = !0,
        this.g && this.jk() && (2 == a ? T8(this.B) : 3 == a && V8(this.B)))
    }
    ;
    g.h.fQ = function(a) {
        if (a) {
            for (a = 0; a < this.A.length; a++)
                g.Om(this.da, this.A[a], !0);
            this.NA(1)
        } else
            this.H = null,
            this.J = !1;
        this.Zg()
    }
    ;
    g.A(Z8, W8);
    Z8.prototype.show = function() {
        Z8.N.show.call(this);
        this.A.Gb(!0)
    }
    ;
    Z8.prototype.ma = function() {
        Z8.N.ma.call(this);
        this.A.Gb(!1)
    }
    ;
    g.A($8, g.qu);
    g.h = $8.prototype;
    g.h.FA = function() {
        var a = this.g.getVideoData()
          , b = !cua(this.g) || !(!a.Ff || !a.Ff.length)
          , a = g.km(a, "ypc_module")
          , c = g.x_(this.g.app);
        return (b || !1) && !a && !c
    }
    ;
    g.h.us = function() {
        return (this.o instanceof X8 || !1) && this.o.g && this.o.jk()
    }
    ;
    g.h.eH = function() {
        return this.us() ? this.o.hH() : !1
    }
    ;
    g.h.R = function() {
        g.Gm(this.g, "endscreen");
        $8.N.R.call(this)
    }
    ;
    g.h.load = function() {
        $8.N.load.call(this);
        this.o.show();
        g.U(this.g).Ha && .01 > Math.random() && this.log({
            trailerEndscreenShow: 1
        })
    }
    ;
    g.h.log = function(a) {
        g.ym(this.g, "end", a)
    }
    ;
    g.h.unload = function() {
        $8.N.unload.call(this);
        this.o.ma();
        this.o.destroy();
        this.isAvailable = !1
    }
    ;
    g.h.LP = function(a) {
        this.FA() && (this.o.X || this.o.create(),
        "load" == a.getId() && this.load())
    }
    ;
    g.h.MP = function(a) {
        "load" == a.getId() && this.loaded && this.unload()
    }
    ;
    g.h.Ny = function() {
        g.Gm(this.g, "endscreen");
        var a = Math.max(1E3 * (this.g.getVideoData().lengthSeconds - 10), 0)
          , a = new g.Pm(a,0x8000000000000,{
            id: "preload",
            namespace: "endscreen"
        })
          , b = new g.Pm(0x8000000000000,0x8000000000000,{
            id: "load",
            priority: 6,
            namespace: "endscreen"
        });
        g.Dm(this.g, [a, b])
    }
    ;
    window._exportCheck == g.Ca && g.oa("ytmod.player.endscreen", $8, void 0);
})(_yt_player);
