var Ly = Object.create;
var xs = Object.defineProperty;
var By = Object.getOwnPropertyDescriptor;
var Vy = Object.getOwnPropertyNames;
var qy = Object.getPrototypeOf,
  Hy = Object.prototype.hasOwnProperty;
var ft = (e, t) => () => (e && (t = e((e = 0))), t);
var Ot = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  et = (e, t) => {
    for (var n in t) xs(e, n, { get: t[n], enumerable: !0 });
  },
  Zy = (e, t, n, i) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let r of Vy(t))
        !Hy.call(e, r) &&
          r !== n &&
          xs(e, r, {
            get: () => t[r],
            enumerable: !(i = By(t, r)) || i.enumerable,
          });
    return e;
  };
var ye = (e, t, n) => (
  (n = e != null ? Ly(qy(e)) : {}),
  Zy(
    t || !e || !e.__esModule
      ? xs(n, "default", { value: e, enumerable: !0 })
      : n,
    e,
  )
);
var Te = Ot((Ds, up) => {
  (function (e, t) {
    if (typeof define == "function" && define.amd)
      define("webextension-polyfill", ["module"], t);
    else if (typeof Ds < "u") t(up);
    else {
      var n = { exports: {} };
      (t(n), (e.browser = n.exports));
    }
  })(
    typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Ds,
    function (e) {
      "use strict";
      if (
        !(
          globalThis.chrome &&
          globalThis.chrome.runtime &&
          globalThis.chrome.runtime.id
        )
      )
        throw new Error(
          "This script should only be loaded in a browser extension.",
        );
      if (
        globalThis.browser &&
        globalThis.browser.runtime &&
        globalThis.browser.runtime.id
      )
        e.exports = globalThis.browser;
      else {
        let t = "The message port closed before a response was received.",
          n = (i) => {
            let r = {
              alarms: {
                clear: { minArgs: 0, maxArgs: 1 },
                clearAll: { minArgs: 0, maxArgs: 0 },
                get: { minArgs: 0, maxArgs: 1 },
                getAll: { minArgs: 0, maxArgs: 0 },
              },
              bookmarks: {
                create: { minArgs: 1, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 1 },
                getChildren: { minArgs: 1, maxArgs: 1 },
                getRecent: { minArgs: 1, maxArgs: 1 },
                getSubTree: { minArgs: 1, maxArgs: 1 },
                getTree: { minArgs: 0, maxArgs: 0 },
                move: { minArgs: 2, maxArgs: 2 },
                remove: { minArgs: 1, maxArgs: 1 },
                removeTree: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
                update: { minArgs: 2, maxArgs: 2 },
              },
              browserAction: {
                disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                getBadgeText: { minArgs: 1, maxArgs: 1 },
                getPopup: { minArgs: 1, maxArgs: 1 },
                getTitle: { minArgs: 1, maxArgs: 1 },
                openPopup: { minArgs: 0, maxArgs: 0 },
                setBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0,
                },
                setBadgeText: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0,
                },
                setIcon: { minArgs: 1, maxArgs: 1 },
                setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              },
              browsingData: {
                remove: { minArgs: 2, maxArgs: 2 },
                removeCache: { minArgs: 1, maxArgs: 1 },
                removeCookies: { minArgs: 1, maxArgs: 1 },
                removeDownloads: { minArgs: 1, maxArgs: 1 },
                removeFormData: { minArgs: 1, maxArgs: 1 },
                removeHistory: { minArgs: 1, maxArgs: 1 },
                removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                removePasswords: { minArgs: 1, maxArgs: 1 },
                removePluginData: { minArgs: 1, maxArgs: 1 },
                settings: { minArgs: 0, maxArgs: 0 },
              },
              commands: { getAll: { minArgs: 0, maxArgs: 0 } },
              contextMenus: {
                remove: { minArgs: 1, maxArgs: 1 },
                removeAll: { minArgs: 0, maxArgs: 0 },
                update: { minArgs: 2, maxArgs: 2 },
              },
              cookies: {
                get: { minArgs: 1, maxArgs: 1 },
                getAll: { minArgs: 1, maxArgs: 1 },
                getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                remove: { minArgs: 1, maxArgs: 1 },
                set: { minArgs: 1, maxArgs: 1 },
              },
              devtools: {
                inspectedWindow: {
                  eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 },
                },
                panels: {
                  create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                  elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } },
                },
              },
              downloads: {
                cancel: { minArgs: 1, maxArgs: 1 },
                download: { minArgs: 1, maxArgs: 1 },
                erase: { minArgs: 1, maxArgs: 1 },
                getFileIcon: { minArgs: 1, maxArgs: 2 },
                open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                pause: { minArgs: 1, maxArgs: 1 },
                removeFile: { minArgs: 1, maxArgs: 1 },
                resume: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
                show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              },
              extension: {
                isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
              },
              history: {
                addUrl: { minArgs: 1, maxArgs: 1 },
                deleteAll: { minArgs: 0, maxArgs: 0 },
                deleteRange: { minArgs: 1, maxArgs: 1 },
                deleteUrl: { minArgs: 1, maxArgs: 1 },
                getVisits: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
              },
              i18n: {
                detectLanguage: { minArgs: 1, maxArgs: 1 },
                getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
              },
              identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
              idle: { queryState: { minArgs: 1, maxArgs: 1 } },
              management: {
                get: { minArgs: 1, maxArgs: 1 },
                getAll: { minArgs: 0, maxArgs: 0 },
                getSelf: { minArgs: 0, maxArgs: 0 },
                setEnabled: { minArgs: 2, maxArgs: 2 },
                uninstallSelf: { minArgs: 0, maxArgs: 1 },
              },
              notifications: {
                clear: { minArgs: 1, maxArgs: 1 },
                create: { minArgs: 1, maxArgs: 2 },
                getAll: { minArgs: 0, maxArgs: 0 },
                getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                update: { minArgs: 2, maxArgs: 2 },
              },
              pageAction: {
                getPopup: { minArgs: 1, maxArgs: 1 },
                getTitle: { minArgs: 1, maxArgs: 1 },
                hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setIcon: { minArgs: 1, maxArgs: 1 },
                setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              },
              permissions: {
                contains: { minArgs: 1, maxArgs: 1 },
                getAll: { minArgs: 0, maxArgs: 0 },
                remove: { minArgs: 1, maxArgs: 1 },
                request: { minArgs: 1, maxArgs: 1 },
              },
              runtime: {
                getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                openOptionsPage: { minArgs: 0, maxArgs: 0 },
                requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                sendMessage: { minArgs: 1, maxArgs: 3 },
                sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                setUninstallURL: { minArgs: 1, maxArgs: 1 },
              },
              sessions: {
                getDevices: { minArgs: 0, maxArgs: 1 },
                getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                restore: { minArgs: 0, maxArgs: 1 },
              },
              storage: {
                local: {
                  clear: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
                managed: {
                  get: { minArgs: 0, maxArgs: 1 },
                  getBytesInUse: { minArgs: 0, maxArgs: 1 },
                },
                sync: {
                  clear: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
              },
              tabs: {
                captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                create: { minArgs: 1, maxArgs: 1 },
                detectLanguage: { minArgs: 0, maxArgs: 1 },
                discard: { minArgs: 0, maxArgs: 1 },
                duplicate: { minArgs: 1, maxArgs: 1 },
                executeScript: { minArgs: 1, maxArgs: 2 },
                get: { minArgs: 1, maxArgs: 1 },
                getCurrent: { minArgs: 0, maxArgs: 0 },
                getZoom: { minArgs: 0, maxArgs: 1 },
                getZoomSettings: { minArgs: 0, maxArgs: 1 },
                goBack: { minArgs: 0, maxArgs: 1 },
                goForward: { minArgs: 0, maxArgs: 1 },
                highlight: { minArgs: 1, maxArgs: 1 },
                insertCSS: { minArgs: 1, maxArgs: 2 },
                move: { minArgs: 2, maxArgs: 2 },
                query: { minArgs: 1, maxArgs: 1 },
                reload: { minArgs: 0, maxArgs: 2 },
                remove: { minArgs: 1, maxArgs: 1 },
                removeCSS: { minArgs: 1, maxArgs: 2 },
                sendMessage: { minArgs: 2, maxArgs: 3 },
                setZoom: { minArgs: 1, maxArgs: 2 },
                setZoomSettings: { minArgs: 1, maxArgs: 2 },
                update: { minArgs: 1, maxArgs: 2 },
              },
              topSites: { get: { minArgs: 0, maxArgs: 0 } },
              webNavigation: {
                getAllFrames: { minArgs: 1, maxArgs: 1 },
                getFrame: { minArgs: 1, maxArgs: 1 },
              },
              webRequest: {
                handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
              },
              windows: {
                create: { minArgs: 0, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 2 },
                getAll: { minArgs: 0, maxArgs: 1 },
                getCurrent: { minArgs: 0, maxArgs: 1 },
                getLastFocused: { minArgs: 0, maxArgs: 1 },
                remove: { minArgs: 1, maxArgs: 1 },
                update: { minArgs: 2, maxArgs: 2 },
              },
            };
            if (Object.keys(r).length === 0)
              throw new Error(
                "api-metadata.json has not been included in browser-polyfill",
              );
            class o extends WeakMap {
              constructor(E, P = void 0) {
                (super(P), (this.createItem = E));
              }
              get(E) {
                return (
                  this.has(E) || this.set(E, this.createItem(E)),
                  super.get(E)
                );
              }
            }
            let a = (b) =>
                b && typeof b == "object" && typeof b.then == "function",
              u =
                (b, E) =>
                (...P) => {
                  i.runtime.lastError
                    ? b.reject(new Error(i.runtime.lastError.message))
                    : E.singleCallbackArg ||
                        (P.length <= 1 && E.singleCallbackArg !== !1)
                      ? b.resolve(P[0])
                      : b.resolve(P);
                },
              s = (b) => (b == 1 ? "argument" : "arguments"),
              l = (b, E) =>
                function (T, ...F) {
                  if (F.length < E.minArgs)
                    throw new Error(
                      `Expected at least ${E.minArgs} ${s(E.minArgs)} for ${b}(), got ${F.length}`,
                    );
                  if (F.length > E.maxArgs)
                    throw new Error(
                      `Expected at most ${E.maxArgs} ${s(E.maxArgs)} for ${b}(), got ${F.length}`,
                    );
                  return new Promise((U, H) => {
                    if (E.fallbackToNoCallback)
                      try {
                        T[b](...F, u({ resolve: U, reject: H }, E));
                      } catch (C) {
                        (console.warn(
                          `${b} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                          C,
                        ),
                          T[b](...F),
                          (E.fallbackToNoCallback = !1),
                          (E.noCallback = !0),
                          U());
                      }
                    else
                      E.noCallback
                        ? (T[b](...F), U())
                        : T[b](...F, u({ resolve: U, reject: H }, E));
                  });
                },
              c = (b, E, P) =>
                new Proxy(E, {
                  apply(T, F, U) {
                    return P.call(F, b, ...U);
                  },
                }),
              d = Function.call.bind(Object.prototype.hasOwnProperty),
              f = (b, E = {}, P = {}) => {
                let T = Object.create(null),
                  F = {
                    has(H, C) {
                      return C in b || C in T;
                    },
                    get(H, C, ne) {
                      if (C in T) return T[C];
                      if (!(C in b)) return;
                      let re = b[C];
                      if (typeof re == "function")
                        if (typeof E[C] == "function") re = c(b, b[C], E[C]);
                        else if (d(P, C)) {
                          let me = l(C, P[C]);
                          re = c(b, b[C], me);
                        } else re = re.bind(b);
                      else if (
                        typeof re == "object" &&
                        re !== null &&
                        (d(E, C) || d(P, C))
                      )
                        re = f(re, E[C], P[C]);
                      else if (d(P, "*")) re = f(re, E[C], P["*"]);
                      else
                        return (
                          Object.defineProperty(T, C, {
                            configurable: !0,
                            enumerable: !0,
                            get() {
                              return b[C];
                            },
                            set(me) {
                              b[C] = me;
                            },
                          }),
                          re
                        );
                      return ((T[C] = re), re);
                    },
                    set(H, C, ne, re) {
                      return (C in T ? (T[C] = ne) : (b[C] = ne), !0);
                    },
                    defineProperty(H, C, ne) {
                      return Reflect.defineProperty(T, C, ne);
                    },
                    deleteProperty(H, C) {
                      return Reflect.deleteProperty(T, C);
                    },
                  },
                  U = Object.create(b);
                return new Proxy(U, F);
              },
              _ = (b) => ({
                addListener(E, P, ...T) {
                  E.addListener(b.get(P), ...T);
                },
                hasListener(E, P) {
                  return E.hasListener(b.get(P));
                },
                removeListener(E, P) {
                  E.removeListener(b.get(P));
                },
              }),
              g = new o((b) =>
                typeof b != "function"
                  ? b
                  : function (P) {
                      let T = f(
                        P,
                        {},
                        { getContent: { minArgs: 0, maxArgs: 0 } },
                      );
                      b(T);
                    },
              ),
              m = new o((b) =>
                typeof b != "function"
                  ? b
                  : function (P, T, F) {
                      let U = !1,
                        H,
                        C = new Promise((Ue) => {
                          H = function (W) {
                            ((U = !0), Ue(W));
                          };
                        }),
                        ne;
                      try {
                        ne = b(P, T, H);
                      } catch (Ue) {
                        ne = Promise.reject(Ue);
                      }
                      let re = ne !== !0 && a(ne);
                      if (ne !== !0 && !re && !U) return !1;
                      let me = (Ue) => {
                        Ue.then(
                          (W) => {
                            F(W);
                          },
                          (W) => {
                            let J;
                            (W &&
                            (W instanceof Error || typeof W.message == "string")
                              ? (J = W.message)
                              : (J = "An unexpected error occurred"),
                              F({
                                __mozWebExtensionPolyfillReject__: !0,
                                message: J,
                              }));
                          },
                        ).catch((W) => {
                          console.error(
                            "Failed to send onMessage rejected reply",
                            W,
                          );
                        });
                      };
                      return (me(re ? ne : C), !0);
                    },
              ),
              A = ({ reject: b, resolve: E }, P) => {
                i.runtime.lastError
                  ? i.runtime.lastError.message === t
                    ? E()
                    : b(new Error(i.runtime.lastError.message))
                  : P && P.__mozWebExtensionPolyfillReject__
                    ? b(new Error(P.message))
                    : E(P);
              },
              I = (b, E, P, ...T) => {
                if (T.length < E.minArgs)
                  throw new Error(
                    `Expected at least ${E.minArgs} ${s(E.minArgs)} for ${b}(), got ${T.length}`,
                  );
                if (T.length > E.maxArgs)
                  throw new Error(
                    `Expected at most ${E.maxArgs} ${s(E.maxArgs)} for ${b}(), got ${T.length}`,
                  );
                return new Promise((F, U) => {
                  let H = A.bind(null, { resolve: F, reject: U });
                  (T.push(H), P.sendMessage(...T));
                });
              },
              w = {
                devtools: { network: { onRequestFinished: _(g) } },
                runtime: {
                  onMessage: _(m),
                  onMessageExternal: _(m),
                  sendMessage: I.bind(null, "sendMessage", {
                    minArgs: 1,
                    maxArgs: 3,
                  }),
                },
                tabs: {
                  sendMessage: I.bind(null, "sendMessage", {
                    minArgs: 2,
                    maxArgs: 3,
                  }),
                },
              },
              y = {
                clear: { minArgs: 1, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 1 },
                set: { minArgs: 1, maxArgs: 1 },
              };
            return (
              (r.privacy = {
                network: { "*": y },
                services: { "*": y },
                websites: { "*": y },
              }),
              f(i, w, r)
            );
          };
        e.exports = n(chrome);
      }
    },
  );
});
function pp() {
  return Jy;
}
var Ye,
  lp,
  ke,
  Ie,
  Ui,
  cp,
  dp,
  mp,
  Jy,
  rt,
  _p,
  fp,
  hp,
  QD,
  KD,
  JD,
  YD,
  gp,
  vp,
  yp,
  bp,
  Pe = ft(() => {
    "use strict";
    ((Ye = "google"),
      (lp = "stable"),
      (ke = Ye != "mozilla"),
      (Ie = Ye == "mozilla"),
      (Ui = !1),
      (cp = !1),
      (dp = !1),
      (mp = !0), // premium flag
      (Jy = atob(
        "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFOURtQkJNNitRZ1BDRlhJK2dBTFMreXkvdytBaQplMjdMbXRTWmExWjFWMlV1YWt6UmxzTGgrOFZMdE9KekdwVlcyenQ0bUpSMzVFWFRlYUhOQ0g0bEFBPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg==",
      )));
    ((rt = "https://v10.downloadhelper.net:443"),
      (_p = `${rt}/v2/entitlements/validate`),
      (fp = `${rt}/v2/entitlements/activate`),
      (hp = `${rt}/v2/entitlements/migrate`),
      (QD = `${rt}/v2/reports`),
      (KD = `${rt}/issue`),
      (JD = `${rt}/premium`),
      (YD = `${rt}/manage-subscription`),
      (gp = `${rt}/welcome/${Ye}`),
      (vp = `${rt}/changelog/${Ye}`),
      (yp = `${rt}/goodbye/${Ye}`),
      (bp = {
        google:
          "https://chromewebstore.google.com/detail/video-downloadhelper/lmjnegcaeklhafolokijcfjliaokphfk",
        mozilla:
          "https://addons.mozilla.org/en-US/firefox/addon/video-downloadhelper/",
        microsoft:
          "https://microsoftedge.microsoft.com/addons/detail/video-downloadhelper/jmkaglaafmhbcpleggkmaliipiilhldn",
      }));
  });
function je(e, t = 0) {
  let n = 3735928559 ^ t,
    i = 1103547991 ^ t;
  for (let r = 0, o; r < e.length; r++)
    ((o = e.charCodeAt(r)),
      (n = Math.imul(n ^ o, 2654435761)),
      (i = Math.imul(i ^ o, 1597334677)));
  return (
    (n = Math.imul(n ^ (n >>> 16), 2246822507)),
    (n ^= Math.imul(i ^ (i >>> 13), 3266489909)),
    (i = Math.imul(i ^ (i >>> 16), 2246822507)),
    (i ^= Math.imul(n ^ (n >>> 13), 3266489909)),
    4294967296 * (2097151 & i) + (n >>> 0)
  );
}
var _r = ft(() => {
  "use strict";
});
function Fi() {
  let e = je(wp.runtime.id);
  return (
    dp ||
    e == 8817291756503653 ||
    e == 5044528540900328 ||
    e == 5254041105675766 ||
    e == 0xe4646f42568d6
  );
}
var wp,
  Ts = ft(() => {
    "use strict";
    Pe();
    _r();
    wp = ye(Te(), 1);
  });
var Yy = {};
var Sp,
  Ps,
  xp = ft(() => {
    "use strict";
    Pe();
    Ts();
    Sp = "/download_worker/main.js";
    Fi() &&
      (ke
        ? (Ps = chrome.runtime.getURL(Sp))
        : (Ps = browser.runtime.getURL(Sp)),
      new Worker(Ps, { type: "module" }));
  });
var Ki = Ot((T0, $p) => {
  var gn;
  typeof window < "u"
    ? (gn = window)
    : typeof global < "u"
      ? (gn = global)
      : typeof self < "u"
        ? (gn = self)
        : (gn = {});
  $p.exports = gn;
});
var An = Ot((Sr) => {
  "use strict";
  function Lb(e, t, n) {
    if (
      (n === void 0 && (n = Array.prototype), e && typeof n.find == "function")
    )
      return n.find.call(e, t);
    for (var i = 0; i < e.length; i++)
      if (Object.prototype.hasOwnProperty.call(e, i)) {
        var r = e[i];
        if (t.call(void 0, r, i, e)) return r;
      }
  }
  function Xs(e, t) {
    return (
      t === void 0 && (t = Object),
      t && typeof t.freeze == "function" ? t.freeze(e) : e
    );
  }
  function Bb(e, t) {
    if (e === null || typeof e != "object")
      throw new TypeError("target is not an object");
    for (var n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    return e;
  }
  var l_ = Xs({
      HTML: "text/html",
      isHTML: function (e) {
        return e === l_.HTML;
      },
      XML_APPLICATION: "application/xml",
      XML_TEXT: "text/xml",
      XML_XHTML_APPLICATION: "application/xhtml+xml",
      XML_SVG_IMAGE: "image/svg+xml",
    }),
    c_ = Xs({
      HTML: "http://www.w3.org/1999/xhtml",
      isHTML: function (e) {
        return e === c_.HTML;
      },
      SVG: "http://www.w3.org/2000/svg",
      XML: "http://www.w3.org/XML/1998/namespace",
      XMLNS: "http://www.w3.org/2000/xmlns/",
    });
  Sr.assign = Bb;
  Sr.find = Lb;
  Sr.freeze = Xs;
  Sr.MIME_TYPE = l_;
  Sr.NAMESPACE = c_;
});
var du = Ot((Et) => {
  var v_ = An(),
    it = v_.find,
    En = v_.NAMESPACE;
  function Vb(e) {
    return e !== "";
  }
  function qb(e) {
    return e ? e.split(/[\t\n\f\r ]+/).filter(Vb) : [];
  }
  function Hb(e, t) {
    return (e.hasOwnProperty(t) || (e[t] = !0), e);
  }
  function d_(e) {
    if (!e) return [];
    var t = qb(e);
    return Object.keys(t.reduce(Hb, {}));
  }
  function Zb(e) {
    return function (t) {
      return e && e.indexOf(t) !== -1;
    };
  }
  function kn(e, t) {
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  }
  function Be(e, t) {
    var n = e.prototype;
    if (!(n instanceof t)) {
      let r = function () {};
      var i = r;
      ((r.prototype = t.prototype),
        (r = new r()),
        kn(n, r),
        (e.prototype = n = r));
    }
    n.constructor != e &&
      (typeof e != "function" && console.error("unknown Class:" + e),
      (n.constructor = e));
  }
  var Ve = {},
    Xe = (Ve.ELEMENT_NODE = 1),
    Dr = (Ve.ATTRIBUTE_NODE = 2),
    _o = (Ve.TEXT_NODE = 3),
    y_ = (Ve.CDATA_SECTION_NODE = 4),
    b_ = (Ve.ENTITY_REFERENCE_NODE = 5),
    Gb = (Ve.ENTITY_NODE = 6),
    eu = (Ve.PROCESSING_INSTRUCTION_NODE = 7),
    tu = (Ve.COMMENT_NODE = 8),
    w_ = (Ve.DOCUMENT_NODE = 9),
    S_ = (Ve.DOCUMENT_TYPE_NODE = 10),
    xt = (Ve.DOCUMENT_FRAGMENT_NODE = 11),
    Wb = (Ve.NOTATION_NODE = 12),
    Ee = {},
    we = {},
    tE = (Ee.INDEX_SIZE_ERR = ((we[1] = "Index size error"), 1)),
    rE = (Ee.DOMSTRING_SIZE_ERR = ((we[2] = "DOMString size error"), 2)),
    Le = (Ee.HIERARCHY_REQUEST_ERR = ((we[3] = "Hierarchy request error"), 3)),
    nE = (Ee.WRONG_DOCUMENT_ERR = ((we[4] = "Wrong document"), 4)),
    Qb = (Ee.INVALID_CHARACTER_ERR = ((we[5] = "Invalid character"), 5)),
    iE = (Ee.NO_DATA_ALLOWED_ERR = ((we[6] = "No data allowed"), 6)),
    oE = (Ee.NO_MODIFICATION_ALLOWED_ERR =
      ((we[7] = "No modification allowed"), 7)),
    x_ = (Ee.NOT_FOUND_ERR = ((we[8] = "Not found"), 8)),
    aE = (Ee.NOT_SUPPORTED_ERR = ((we[9] = "Not supported"), 9)),
    m_ = (Ee.INUSE_ATTRIBUTE_ERR = ((we[10] = "Attribute in use"), 10)),
    xr = (Ee.INVALID_STATE_ERR = ((we[11] = "Invalid state"), 11)),
    sE = (Ee.SYNTAX_ERR = ((we[12] = "Syntax error"), 12)),
    uE = (Ee.INVALID_MODIFICATION_ERR =
      ((we[13] = "Invalid modification"), 13)),
    lE = (Ee.NAMESPACE_ERR = ((we[14] = "Invalid namespace"), 14)),
    cE = (Ee.INVALID_ACCESS_ERR = ((we[15] = "Invalid access"), 15));
  function te(e, t) {
    if (t instanceof Error) var n = t;
    else
      ((n = this),
        Error.call(this, we[e]),
        (this.message = we[e]),
        Error.captureStackTrace && Error.captureStackTrace(this, te));
    return ((n.code = e), t && (this.message = this.message + ": " + t), n);
  }
  te.prototype = Error.prototype;
  kn(Ee, te);
  function Dt() {}
  Dt.prototype = {
    length: 0,
    item: function (e) {
      return e >= 0 && e < this.length ? this[e] : null;
    },
    toString: function (e, t, n) {
      for (
        var i = !!n && !!n.requireWellFormed, r = [], o = 0;
        o < this.length;
        o++
      )
        cu(this[o], r, e, t, null, i);
      return r.join("");
    },
    filter: function (e) {
      return Array.prototype.filter.call(this, e);
    },
    indexOf: function (e) {
      return Array.prototype.indexOf.call(this, e);
    },
  };
  function Ar(e, t) {
    ((this._node = e), (this._refresh = t), ru(this));
  }
  function ru(e) {
    var t = e._node._inc || e._node.ownerDocument._inc;
    if (e._inc !== t) {
      var n = e._refresh(e._node);
      if ((N_(e, "length", n.length), !e.$$length || n.length < e.$$length))
        for (var i = n.length; i in e; i++)
          Object.prototype.hasOwnProperty.call(e, i) && delete e[i];
      (kn(n, e), (e._inc = t));
    }
  }
  Ar.prototype.item = function (e) {
    return (ru(this), this[e] || null);
  };
  Be(Ar, Dt);
  function fo() {}
  function D_(e, t) {
    for (var n = e.length; n--; ) if (e[n] === t) return n;
  }
  function p_(e, t, n, i) {
    if ((i ? (t[D_(t, i)] = n) : (t[t.length++] = n), e)) {
      n.ownerElement = e;
      var r = e.ownerDocument;
      r && (i && T_(r, e, i), Kb(r, e, n));
    }
  }
  function __(e, t, n) {
    var i = D_(t, n);
    if (i >= 0) {
      for (var r = t.length - 1; i < r; ) t[i] = t[++i];
      if (((t.length = r), e)) {
        var o = e.ownerDocument;
        o && (T_(o, e, n), (n.ownerElement = null));
      }
    } else throw new te(x_, new Error(e.tagName + "@" + n));
  }
  fo.prototype = {
    length: 0,
    item: Dt.prototype.item,
    getNamedItem: function (e) {
      for (var t = this.length; t--; ) {
        var n = this[t];
        if (n.nodeName == e) return n;
      }
    },
    setNamedItem: function (e) {
      var t = e.ownerElement;
      if (t && t != this._ownerElement) throw new te(m_);
      var n = this.getNamedItem(e.nodeName);
      return (p_(this._ownerElement, this, e, n), n);
    },
    setNamedItemNS: function (e) {
      var t = e.ownerElement,
        n;
      if (t && t != this._ownerElement) throw new te(m_);
      return (
        (n = this.getNamedItemNS(e.namespaceURI, e.localName)),
        p_(this._ownerElement, this, e, n),
        n
      );
    },
    removeNamedItem: function (e) {
      var t = this.getNamedItem(e);
      return (__(this._ownerElement, this, t), t);
    },
    removeNamedItemNS: function (e, t) {
      var n = this.getNamedItemNS(e, t);
      return (__(this._ownerElement, this, n), n);
    },
    getNamedItemNS: function (e, t) {
      for (var n = this.length; n--; ) {
        var i = this[n];
        if (i.localName == t && i.namespaceURI == e) return i;
      }
      return null;
    },
  };
  function A_() {}
  A_.prototype = {
    hasFeature: function (e, t) {
      return !0;
    },
    createDocument: function (e, t, n) {
      var i = new In();
      if (
        ((i.implementation = this),
        (i.childNodes = new Dt()),
        (i.doctype = n || null),
        n && i.appendChild(n),
        t)
      ) {
        var r = i.createElementNS(e, t);
        i.appendChild(r);
      }
      return i;
    },
    createDocumentType: function (e, t, n) {
      var i = new yo();
      return (
        (i.name = e),
        (i.nodeName = e),
        (i.publicId = t || ""),
        (i.systemId = n || ""),
        i
      );
    },
  };
  function X() {}
  X.prototype = {
    firstChild: null,
    lastChild: null,
    previousSibling: null,
    nextSibling: null,
    attributes: null,
    parentNode: null,
    childNodes: null,
    ownerDocument: null,
    nodeValue: null,
    namespaceURI: null,
    prefix: null,
    localName: null,
    insertBefore: function (e, t) {
      return go(this, e, t);
    },
    replaceChild: function (e, t) {
      (go(this, e, t, I_), t && this.removeChild(t));
    },
    removeChild: function (e) {
      return k_(this, e);
    },
    appendChild: function (e) {
      return this.insertBefore(e, null);
    },
    hasChildNodes: function () {
      return this.firstChild != null;
    },
    cloneNode: function (e) {
      return R_(this.ownerDocument || this, this, e);
    },
    normalize: function () {
      be(this, null, {
        enter: function (e) {
          for (var t = e.firstChild; t; ) {
            var n = t.nextSibling;
            n !== null && n.nodeType === _o && t.nodeType === _o
              ? (e.removeChild(n), t.appendData(n.data))
              : (t = n);
          }
          return !0;
        },
      });
    },
    isSupported: function (e, t) {
      return this.ownerDocument.implementation.hasFeature(e, t);
    },
    hasAttributes: function () {
      return this.attributes.length > 0;
    },
    lookupPrefix: function (e) {
      for (var t = this; t; ) {
        var n = t._nsMap;
        if (n) {
          for (var i in n)
            if (Object.prototype.hasOwnProperty.call(n, i) && n[i] === e)
              return i;
        }
        t = t.nodeType == Dr ? t.ownerDocument : t.parentNode;
      }
      return null;
    },
    lookupNamespaceURI: function (e) {
      for (var t = this; t; ) {
        var n = t._nsMap;
        if (n && Object.prototype.hasOwnProperty.call(n, e)) return n[e];
        t = t.nodeType == Dr ? t.ownerDocument : t.parentNode;
      }
      return null;
    },
    isDefaultNamespace: function (e) {
      var t = this.lookupPrefix(e);
      return t == null;
    },
  };
  function E_(e) {
    return (
      (e == "<" && "&lt;") ||
      (e == ">" && "&gt;") ||
      (e == "&" && "&amp;") ||
      (e == '"' && "&quot;") ||
      "&#" + e.charCodeAt() + ";"
    );
  }
  kn(Ve, X);
  kn(Ve, X.prototype);
  function ho(e, t) {
    return (
      be(e, null, {
        enter: function (n) {
          return t(n) ? be.STOP : !0;
        },
      }) === be.STOP
    );
  }
  function be(e, t, n) {
    for (var i = [{ node: e, context: t, phase: be.ENTER }]; i.length > 0; ) {
      var r = i.pop();
      if (r.phase === be.ENTER) {
        var o = n.enter(r.node, r.context);
        if (o === be.STOP) return be.STOP;
        if ((i.push({ node: r.node, context: o, phase: be.EXIT }), o == null))
          continue;
        for (var a = r.node.lastChild; a; )
          (i.push({ node: a, context: o, phase: be.ENTER }),
            (a = a.previousSibling));
      } else n.exit && n.exit(r.node, r.context);
    }
  }
  be.STOP = Symbol("walkDOM.STOP");
  be.ENTER = 0;
  be.EXIT = 1;
  function In() {
    this.ownerDocument = this;
  }
  function Kb(e, t, n) {
    e && e._inc++;
    var i = n.namespaceURI;
    i === En.XMLNS && (t._nsMap[n.prefix ? n.localName : ""] = n.value);
  }
  function T_(e, t, n, i) {
    e && e._inc++;
    var r = n.namespaceURI;
    r === En.XMLNS && delete t._nsMap[n.prefix ? n.localName : ""];
  }
  function nu(e, t, n) {
    if (e && e._inc) {
      e._inc++;
      var i = t.childNodes;
      if (n) i[i.length++] = n;
      else {
        for (var r = t.firstChild, o = 0; r; )
          ((i[o++] = r), (r = r.nextSibling));
        ((i.length = o), delete i[i.length]);
      }
    }
  }
  function k_(e, t) {
    var n = t.previousSibling,
      i = t.nextSibling;
    return (
      n ? (n.nextSibling = i) : (e.firstChild = i),
      i ? (i.previousSibling = n) : (e.lastChild = n),
      (t.parentNode = null),
      (t.previousSibling = null),
      (t.nextSibling = null),
      nu(e.ownerDocument, e),
      t
    );
  }
  function Jb(e) {
    return (
      e &&
      (e.nodeType === X.DOCUMENT_NODE ||
        e.nodeType === X.DOCUMENT_FRAGMENT_NODE ||
        e.nodeType === X.ELEMENT_NODE)
    );
  }
  function Yb(e) {
    return (
      e &&
      (ot(e) ||
        iu(e) ||
        At(e) ||
        e.nodeType === X.DOCUMENT_FRAGMENT_NODE ||
        e.nodeType === X.COMMENT_NODE ||
        e.nodeType === X.PROCESSING_INSTRUCTION_NODE)
    );
  }
  function At(e) {
    return e && e.nodeType === X.DOCUMENT_TYPE_NODE;
  }
  function ot(e) {
    return e && e.nodeType === X.ELEMENT_NODE;
  }
  function iu(e) {
    return e && e.nodeType === X.TEXT_NODE;
  }
  function f_(e, t) {
    var n = e.childNodes || [];
    if (it(n, ot) || At(t)) return !1;
    var i = it(n, At);
    return !(t && i && n.indexOf(i) > n.indexOf(t));
  }
  function h_(e, t) {
    var n = e.childNodes || [];
    function i(o) {
      return ot(o) && o !== t;
    }
    if (it(n, i)) return !1;
    var r = it(n, At);
    return !(t && r && n.indexOf(r) > n.indexOf(t));
  }
  function Xb(e, t, n) {
    if (!Jb(e)) throw new te(Le, "Unexpected parent node type " + e.nodeType);
    if (n && n.parentNode !== e) throw new te(x_, "child not in parent");
    if (!Yb(t) || (At(t) && e.nodeType !== X.DOCUMENT_NODE))
      throw new te(
        Le,
        "Unexpected node type " +
          t.nodeType +
          " for parent node type " +
          e.nodeType,
      );
  }
  function ew(e, t, n) {
    var i = e.childNodes || [],
      r = t.childNodes || [];
    if (t.nodeType === X.DOCUMENT_FRAGMENT_NODE) {
      var o = r.filter(ot);
      if (o.length > 1 || it(r, iu))
        throw new te(Le, "More than one element or text in fragment");
      if (o.length === 1 && !f_(e, n))
        throw new te(
          Le,
          "Element in fragment can not be inserted before doctype",
        );
    }
    if (ot(t) && !f_(e, n))
      throw new te(Le, "Only one element can be added and only after doctype");
    if (At(t)) {
      if (it(i, At)) throw new te(Le, "Only one doctype is allowed");
      var a = it(i, ot);
      if (n && i.indexOf(a) < i.indexOf(n))
        throw new te(Le, "Doctype can only be inserted before an element");
      if (!n && a)
        throw new te(
          Le,
          "Doctype can not be appended since element is present",
        );
    }
  }
  function I_(e, t, n) {
    var i = e.childNodes || [],
      r = t.childNodes || [];
    if (t.nodeType === X.DOCUMENT_FRAGMENT_NODE) {
      var o = r.filter(ot);
      if (o.length > 1 || it(r, iu))
        throw new te(Le, "More than one element or text in fragment");
      if (o.length === 1 && !h_(e, n))
        throw new te(
          Le,
          "Element in fragment can not be inserted before doctype",
        );
    }
    if (ot(t) && !h_(e, n))
      throw new te(Le, "Only one element can be added and only after doctype");
    if (At(t)) {
      let s = function (l) {
        return At(l) && l !== n;
      };
      var u = s;
      if (it(i, s)) throw new te(Le, "Only one doctype is allowed");
      var a = it(i, ot);
      if (n && i.indexOf(a) < i.indexOf(n))
        throw new te(Le, "Doctype can only be inserted before an element");
    }
  }
  function go(e, t, n, i) {
    (Xb(e, t, n), e.nodeType === X.DOCUMENT_NODE && (i || ew)(e, t, n));
    var r = t.parentNode;
    if ((r && r.removeChild(t), t.nodeType === xt)) {
      var o = t.firstChild;
      if (o == null) return t;
      var a = t.lastChild;
    } else o = a = t;
    var u = n ? n.previousSibling : e.lastChild;
    ((o.previousSibling = u),
      (a.nextSibling = n),
      u ? (u.nextSibling = o) : (e.firstChild = o),
      n == null ? (e.lastChild = a) : (n.previousSibling = a));
    do {
      o.parentNode = e;
      var s = e.ownerDocument || e;
      Tn(o, s);
    } while (o !== a && (o = o.nextSibling));
    return (
      nu(e.ownerDocument || e, e),
      t.nodeType == xt && (t.firstChild = t.lastChild = null),
      t
    );
  }
  function Tn(e, t) {
    if (e.ownerDocument !== t) {
      if (((e.ownerDocument = t), e.nodeType === Xe && e.attributes))
        for (var n = 0; n < e.attributes.length; n++) {
          var i = e.attributes.item(n);
          i && (i.ownerDocument = t);
        }
      for (var r = e.firstChild; r; ) (Tn(r, t), (r = r.nextSibling));
    }
  }
  function tw(e, t) {
    (t.parentNode && t.parentNode.removeChild(t),
      (t.parentNode = e),
      (t.previousSibling = e.lastChild),
      (t.nextSibling = null),
      t.previousSibling
        ? (t.previousSibling.nextSibling = t)
        : (e.firstChild = t),
      (e.lastChild = t),
      nu(e.ownerDocument, e, t));
    var n = e.ownerDocument || e;
    return (Tn(t, n), t);
  }
  In.prototype = {
    nodeName: "#document",
    nodeType: w_,
    doctype: null,
    documentElement: null,
    _inc: 1,
    insertBefore: function (e, t) {
      if (e.nodeType == xt) {
        for (var n = e.firstChild; n; ) {
          var i = n.nextSibling;
          (this.insertBefore(n, t), (n = i));
        }
        return e;
      }
      return (
        go(this, e, t),
        Tn(e, this),
        this.documentElement === null &&
          e.nodeType === Xe &&
          (this.documentElement = e),
        e
      );
    },
    removeChild: function (e) {
      return (
        this.documentElement == e && (this.documentElement = null),
        k_(this, e)
      );
    },
    replaceChild: function (e, t) {
      (go(this, e, t, I_),
        Tn(e, this),
        t && this.removeChild(t),
        ot(e) && (this.documentElement = e));
    },
    importNode: function (e, t) {
      return rw(this, e, t);
    },
    getElementById: function (e) {
      var t = null;
      return (
        ho(this.documentElement, function (n) {
          if (n.nodeType == Xe && n.getAttribute("id") == e)
            return ((t = n), !0);
        }),
        t
      );
    },
    getElementsByClassName: function (e) {
      var t = d_(e);
      return new Ar(this, function (n) {
        var i = [];
        return (
          t.length > 0 &&
            ho(n.documentElement, function (r) {
              if (r !== n && r.nodeType === Xe) {
                var o = r.getAttribute("class");
                if (o) {
                  var a = e === o;
                  if (!a) {
                    var u = d_(o);
                    a = t.every(Zb(u));
                  }
                  a && i.push(r);
                }
              }
            }),
          i
        );
      });
    },
    createElement: function (e) {
      var t = new Jt();
      ((t.ownerDocument = this),
        (t.nodeName = e),
        (t.tagName = e),
        (t.localName = e),
        (t.childNodes = new Dt()));
      var n = (t.attributes = new fo());
      return ((n._ownerElement = t), t);
    },
    createDocumentFragment: function () {
      var e = new bo();
      return ((e.ownerDocument = this), (e.childNodes = new Dt()), e);
    },
    createTextNode: function (e) {
      var t = new ou();
      return ((t.ownerDocument = this), t.appendData(e), t);
    },
    createComment: function (e) {
      var t = new au();
      return ((t.ownerDocument = this), t.appendData(e), t);
    },
    createCDATASection: function (e) {
      if (e.indexOf("]]>") !== -1) throw new te(Qb, 'data contains "]]>"');
      var t = new su();
      return ((t.ownerDocument = this), t.appendData(e), t);
    },
    createProcessingInstruction: function (e, t) {
      var n = new lu();
      return (
        (n.ownerDocument = this),
        (n.tagName = n.nodeName = n.target = e),
        (n.nodeValue = n.data = t),
        n
      );
    },
    createAttribute: function (e) {
      var t = new vo();
      return (
        (t.ownerDocument = this),
        (t.name = e),
        (t.nodeName = e),
        (t.localName = e),
        (t.specified = !0),
        t
      );
    },
    createEntityReference: function (e) {
      var t = new uu();
      return ((t.ownerDocument = this), (t.nodeName = e), t);
    },
    createElementNS: function (e, t) {
      var n = new Jt(),
        i = t.split(":"),
        r = (n.attributes = new fo());
      return (
        (n.childNodes = new Dt()),
        (n.ownerDocument = this),
        (n.nodeName = t),
        (n.tagName = t),
        (n.namespaceURI = e),
        i.length == 2
          ? ((n.prefix = i[0]), (n.localName = i[1]))
          : (n.localName = t),
        (r._ownerElement = n),
        n
      );
    },
    createAttributeNS: function (e, t) {
      var n = new vo(),
        i = t.split(":");
      return (
        (n.ownerDocument = this),
        (n.nodeName = t),
        (n.name = t),
        (n.namespaceURI = e),
        (n.specified = !0),
        i.length == 2
          ? ((n.prefix = i[0]), (n.localName = i[1]))
          : (n.localName = t),
        n
      );
    },
  };
  Be(In, X);
  function Jt() {
    this._nsMap = {};
  }
  Jt.prototype = {
    nodeType: Xe,
    hasAttribute: function (e) {
      return this.getAttributeNode(e) != null;
    },
    getAttribute: function (e) {
      var t = this.getAttributeNode(e);
      return (t && t.value) || "";
    },
    getAttributeNode: function (e) {
      return this.attributes.getNamedItem(e);
    },
    setAttribute: function (e, t) {
      var n = this.ownerDocument.createAttribute(e);
      ((n.value = n.nodeValue = "" + t), this.setAttributeNode(n));
    },
    removeAttribute: function (e) {
      var t = this.getAttributeNode(e);
      t && this.removeAttributeNode(t);
    },
    appendChild: function (e) {
      return e.nodeType === xt ? this.insertBefore(e, null) : tw(this, e);
    },
    setAttributeNode: function (e) {
      return this.attributes.setNamedItem(e);
    },
    setAttributeNodeNS: function (e) {
      return this.attributes.setNamedItemNS(e);
    },
    removeAttributeNode: function (e) {
      return this.attributes.removeNamedItem(e.nodeName);
    },
    removeAttributeNS: function (e, t) {
      var n = this.getAttributeNodeNS(e, t);
      n && this.removeAttributeNode(n);
    },
    hasAttributeNS: function (e, t) {
      return this.getAttributeNodeNS(e, t) != null;
    },
    getAttributeNS: function (e, t) {
      var n = this.getAttributeNodeNS(e, t);
      return (n && n.value) || "";
    },
    setAttributeNS: function (e, t, n) {
      var i = this.ownerDocument.createAttributeNS(e, t);
      ((i.value = i.nodeValue = "" + n), this.setAttributeNode(i));
    },
    getAttributeNodeNS: function (e, t) {
      return this.attributes.getNamedItemNS(e, t);
    },
    getElementsByTagName: function (e) {
      return new Ar(this, function (t) {
        var n = [];
        return (
          ho(t, function (i) {
            i !== t &&
              i.nodeType == Xe &&
              (e === "*" || i.tagName == e) &&
              n.push(i);
          }),
          n
        );
      });
    },
    getElementsByTagNameNS: function (e, t) {
      return new Ar(this, function (n) {
        var i = [];
        return (
          ho(n, function (r) {
            r !== n &&
              r.nodeType === Xe &&
              (e === "*" || r.namespaceURI === e) &&
              (t === "*" || r.localName == t) &&
              i.push(r);
          }),
          i
        );
      });
    },
  };
  In.prototype.getElementsByTagName = Jt.prototype.getElementsByTagName;
  In.prototype.getElementsByTagNameNS = Jt.prototype.getElementsByTagNameNS;
  Be(Jt, X);
  function vo() {}
  vo.prototype.nodeType = Dr;
  Be(vo, X);
  function Pn() {}
  Pn.prototype = {
    data: "",
    substringData: function (e, t) {
      return this.data.substring(e, e + t);
    },
    appendData: function (e) {
      ((e = this.data + e),
        (this.nodeValue = this.data = e),
        (this.length = e.length));
    },
    insertData: function (e, t) {
      this.replaceData(e, 0, t);
    },
    appendChild: function (e) {
      throw new Error(we[Le]);
    },
    deleteData: function (e, t) {
      this.replaceData(e, t, "");
    },
    replaceData: function (e, t, n) {
      var i = this.data.substring(0, e),
        r = this.data.substring(e + t);
      ((n = i + n + r),
        (this.nodeValue = this.data = n),
        (this.length = n.length));
    },
  };
  Be(Pn, X);
  function ou() {}
  ou.prototype = {
    nodeName: "#text",
    nodeType: _o,
    splitText: function (e) {
      var t = this.data,
        n = t.substring(e);
      ((t = t.substring(0, e)),
        (this.data = this.nodeValue = t),
        (this.length = t.length));
      var i = this.ownerDocument.createTextNode(n);
      return (
        this.parentNode && this.parentNode.insertBefore(i, this.nextSibling),
        i
      );
    },
  };
  Be(ou, Pn);
  function au() {}
  au.prototype = { nodeName: "#comment", nodeType: tu };
  Be(au, Pn);
  function su() {}
  su.prototype = { nodeName: "#cdata-section", nodeType: y_ };
  Be(su, Pn);
  function yo() {}
  yo.prototype.nodeType = S_;
  Be(yo, X);
  function P_() {}
  P_.prototype.nodeType = Wb;
  Be(P_, X);
  function $_() {}
  $_.prototype.nodeType = Gb;
  Be($_, X);
  function uu() {}
  uu.prototype.nodeType = b_;
  Be(uu, X);
  function bo() {}
  bo.prototype.nodeName = "#document-fragment";
  bo.prototype.nodeType = xt;
  Be(bo, X);
  function lu() {}
  lu.prototype.nodeType = eu;
  Be(lu, X);
  function z_() {}
  z_.prototype.serializeToString = function (e, t, n, i) {
    return O_.call(e, t, n, i);
  };
  X.prototype.toString = O_;
  function O_(e, t, n) {
    var i = !!n && !!n.requireWellFormed,
      r = [],
      o = (this.nodeType == 9 && this.documentElement) || this,
      a = o.prefix,
      u = o.namespaceURI;
    if (u && a == null) {
      var a = o.lookupPrefix(u);
      if (a == null) var s = [{ namespace: u, prefix: null }];
    }
    return (cu(this, r, e, t, s, i), r.join(""));
  }
  function g_(e, t, n) {
    var i = e.prefix || "",
      r = e.namespaceURI;
    if (!r || (i === "xml" && r === En.XML) || r === En.XMLNS) return !1;
    for (var o = n.length; o--; ) {
      var a = n[o];
      if (a.prefix === i) return a.namespace !== r;
    }
    return !0;
  }
  function po(e, t, n) {
    e.push(" ", t, '="', n.replace(/[<>&"\t\n\r]/g, E_), '"');
  }
  function cu(e, t, n, i, r, o) {
    (r || (r = []),
      be(
        e,
        { ns: r, isHTML: n },
        {
          enter: function (a, u) {
            var s = u.ns,
              l = u.isHTML;
            if (i)
              if (((a = i(a)), a)) {
                if (typeof a == "string") return (t.push(a), null);
              } else return null;
            switch (a.nodeType) {
              case Xe:
                var c = a.attributes,
                  d = c.length,
                  f = a.tagName;
                l = En.isHTML(a.namespaceURI) || l;
                var _ = f;
                if (!l && !a.prefix && a.namespaceURI) {
                  for (var g, m = 0; m < c.length; m++)
                    if (c.item(m).name === "xmlns") {
                      g = c.item(m).value;
                      break;
                    }
                  if (!g)
                    for (var A = s.length - 1; A >= 0; A--) {
                      var I = s[A];
                      if (I.prefix === "" && I.namespace === a.namespaceURI) {
                        g = I.namespace;
                        break;
                      }
                    }
                  if (g !== a.namespaceURI)
                    for (var A = s.length - 1; A >= 0; A--) {
                      var I = s[A];
                      if (I.namespace === a.namespaceURI) {
                        I.prefix && (_ = I.prefix + ":" + f);
                        break;
                      }
                    }
                }
                t.push("<", _);
                for (var w = s.slice(), y = 0; y < d; y++) {
                  var b = c.item(y);
                  b.prefix == "xmlns"
                    ? w.push({ prefix: b.localName, namespace: b.value })
                    : b.nodeName == "xmlns" &&
                      w.push({ prefix: "", namespace: b.value });
                }
                for (var y = 0; y < d; y++) {
                  var b = c.item(y);
                  if (g_(b, l, w)) {
                    var E = b.prefix || "",
                      P = b.namespaceURI;
                    (po(t, E ? "xmlns:" + E : "xmlns", P),
                      w.push({ prefix: E, namespace: P }));
                  }
                  var T = i ? i(b) : b;
                  T &&
                    (typeof T == "string" ? t.push(T) : po(t, T.name, T.value));
                }
                if (f === _ && g_(a, l, w)) {
                  var F = a.prefix || "",
                    P = a.namespaceURI;
                  (po(t, F ? "xmlns:" + F : "xmlns", P),
                    w.push({ prefix: F, namespace: P }));
                }
                var U = a.firstChild;
                if (U || (l && !/^(?:meta|link|img|br|hr|input)$/i.test(f))) {
                  if ((t.push(">"), l && /^script$/i.test(f))) {
                    for (; U; )
                      (U.data ? t.push(U.data) : cu(U, t, l, i, w.slice(), o),
                        (U = U.nextSibling));
                    return (t.push("</", f, ">"), null);
                  }
                  return { ns: w, isHTML: l, tag: _ };
                } else return (t.push("/>"), null);
              case w_:
              case xt:
                return { ns: s.slice(), isHTML: l, tag: null };
              case Dr:
                return (po(t, a.name, a.value), null);
              case _o:
                return (t.push(a.data.replace(/[<&>]/g, E_)), null);
              case y_:
                if (o && a.data.indexOf("]]>") !== -1)
                  throw new te(xr, 'The CDATASection data contains "]]>"');
                return (
                  t.push(
                    "<![CDATA[",
                    a.data.replace(/]]>/g, "]]]]><![CDATA[>"),
                    "]]>",
                  ),
                  null
                );
              case tu:
                if (o && a.data.indexOf("-->") !== -1)
                  throw new te(xr, 'The comment node data contains "-->"');
                return (t.push("<!--", a.data, "-->"), null);
              case S_:
                if (o) {
                  if (
                    a.publicId &&
                    !/^("[\x20\r\na-zA-Z0-9\-()+,.\/:=?;!*#@$_%']*"|'[\x20\r\na-zA-Z0-9\-()+,.\/:=?;!*#@$_%'"]*')$/.test(
                      a.publicId,
                    )
                  )
                    throw new te(
                      xr,
                      "DocumentType publicId is not a valid PubidLiteral",
                    );
                  if (a.systemId && !/^("[^"]*"|'[^']*')$/.test(a.systemId))
                    throw new te(
                      xr,
                      "DocumentType systemId is not a valid SystemLiteral",
                    );
                  if (a.internalSubset && a.internalSubset.indexOf("]>") !== -1)
                    throw new te(
                      xr,
                      'DocumentType internalSubset contains "]>"',
                    );
                }
                var H = a.publicId,
                  C = a.systemId;
                if ((t.push("<!DOCTYPE ", a.name), H))
                  (t.push(" PUBLIC ", H),
                    C && C != "." && t.push(" ", C),
                    t.push(">"));
                else if (C && C != ".") t.push(" SYSTEM ", C, ">");
                else {
                  var ne = a.internalSubset;
                  (ne && t.push(" [", ne, "]"), t.push(">"));
                }
                return null;
              case eu:
                if (o && a.data.indexOf("?>") !== -1)
                  throw new te(
                    xr,
                    'The ProcessingInstruction data contains "?>"',
                  );
                return (t.push("<?", a.target, " ", a.data, "?>"), null);
              case b_:
                return (t.push("&", a.nodeName, ";"), null);
              default:
                return (t.push("??", a.nodeName), null);
            }
          },
          exit: function (a, u) {
            u && u.tag && t.push("</", u.tag, ">");
          },
        },
      ));
  }
  function rw(e, t, n) {
    var i;
    return (
      be(t, null, {
        enter: function (r, o) {
          var a = r.cloneNode(!1);
          ((a.ownerDocument = e),
            (a.parentNode = null),
            o === null ? (i = a) : o.appendChild(a));
          var u = r.nodeType === Dr || n;
          return u ? a : null;
        },
      }),
      i
    );
  }
  function R_(e, t, n) {
    var i;
    return (
      be(t, null, {
        enter: function (r, o) {
          var a = new r.constructor();
          for (var u in r)
            if (Object.prototype.hasOwnProperty.call(r, u)) {
              var s = r[u];
              typeof s != "object" && s != a[u] && (a[u] = s);
            }
          (r.childNodes && (a.childNodes = new Dt()), (a.ownerDocument = e));
          var l = n;
          switch (a.nodeType) {
            case Xe:
              var c = r.attributes,
                d = (a.attributes = new fo()),
                f = c.length;
              d._ownerElement = a;
              for (var _ = 0; _ < f; _++)
                a.setAttributeNode(R_(e, c.item(_), !0));
              break;
            case Dr:
              l = !0;
          }
          return (o !== null ? o.appendChild(a) : (i = a), l ? a : null);
        },
      }),
      i
    );
  }
  function N_(e, t, n) {
    e[t] = n;
  }
  try {
    Object.defineProperty &&
      (Object.defineProperty(Ar.prototype, "length", {
        get: function () {
          return (ru(this), this.$$length);
        },
      }),
      Object.defineProperty(X.prototype, "textContent", {
        get: function () {
          if (this.nodeType === Xe || this.nodeType === xt) {
            var e = [];
            return (
              be(this, null, {
                enter: function (t) {
                  if (t.nodeType === Xe || t.nodeType === xt) return !0;
                  if (t.nodeType === eu || t.nodeType === tu) return null;
                  e.push(t.nodeValue);
                },
              }),
              e.join("")
            );
          }
          return this.nodeValue;
        },
        set: function (e) {
          switch (this.nodeType) {
            case Xe:
            case xt:
              for (; this.firstChild; ) this.removeChild(this.firstChild);
              (e || String(e)) &&
                this.appendChild(this.ownerDocument.createTextNode(e));
              break;
            default:
              ((this.data = e), (this.value = e), (this.nodeValue = e));
          }
        },
      }),
      (N_ = function (e, t, n) {
        e["$$" + t] = n;
      }));
  } catch {}
  Et.DocumentType = yo;
  Et.DOMException = te;
  Et.DOMImplementation = A_;
  Et.Element = Jt;
  Et.Node = X;
  Et.NodeList = Dt;
  Et.walkDOM = be;
  Et.XMLSerializer = z_;
});
var C_ = Ot(($n) => {
  "use strict";
  var M_ = An().freeze;
  $n.XML_ENTITIES = M_({ amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' });
  $n.HTML_ENTITIES = M_({
    Aacute: "\xC1",
    aacute: "\xE1",
    Abreve: "\u0102",
    abreve: "\u0103",
    ac: "\u223E",
    acd: "\u223F",
    acE: "\u223E\u0333",
    Acirc: "\xC2",
    acirc: "\xE2",
    acute: "\xB4",
    Acy: "\u0410",
    acy: "\u0430",
    AElig: "\xC6",
    aelig: "\xE6",
    af: "\u2061",
    Afr: "\u{1D504}",
    afr: "\u{1D51E}",
    Agrave: "\xC0",
    agrave: "\xE0",
    alefsym: "\u2135",
    aleph: "\u2135",
    Alpha: "\u0391",
    alpha: "\u03B1",
    Amacr: "\u0100",
    amacr: "\u0101",
    amalg: "\u2A3F",
    AMP: "&",
    amp: "&",
    And: "\u2A53",
    and: "\u2227",
    andand: "\u2A55",
    andd: "\u2A5C",
    andslope: "\u2A58",
    andv: "\u2A5A",
    ang: "\u2220",
    ange: "\u29A4",
    angle: "\u2220",
    angmsd: "\u2221",
    angmsdaa: "\u29A8",
    angmsdab: "\u29A9",
    angmsdac: "\u29AA",
    angmsdad: "\u29AB",
    angmsdae: "\u29AC",
    angmsdaf: "\u29AD",
    angmsdag: "\u29AE",
    angmsdah: "\u29AF",
    angrt: "\u221F",
    angrtvb: "\u22BE",
    angrtvbd: "\u299D",
    angsph: "\u2222",
    angst: "\xC5",
    angzarr: "\u237C",
    Aogon: "\u0104",
    aogon: "\u0105",
    Aopf: "\u{1D538}",
    aopf: "\u{1D552}",
    ap: "\u2248",
    apacir: "\u2A6F",
    apE: "\u2A70",
    ape: "\u224A",
    apid: "\u224B",
    apos: "'",
    ApplyFunction: "\u2061",
    approx: "\u2248",
    approxeq: "\u224A",
    Aring: "\xC5",
    aring: "\xE5",
    Ascr: "\u{1D49C}",
    ascr: "\u{1D4B6}",
    Assign: "\u2254",
    ast: "*",
    asymp: "\u2248",
    asympeq: "\u224D",
    Atilde: "\xC3",
    atilde: "\xE3",
    Auml: "\xC4",
    auml: "\xE4",
    awconint: "\u2233",
    awint: "\u2A11",
    backcong: "\u224C",
    backepsilon: "\u03F6",
    backprime: "\u2035",
    backsim: "\u223D",
    backsimeq: "\u22CD",
    Backslash: "\u2216",
    Barv: "\u2AE7",
    barvee: "\u22BD",
    Barwed: "\u2306",
    barwed: "\u2305",
    barwedge: "\u2305",
    bbrk: "\u23B5",
    bbrktbrk: "\u23B6",
    bcong: "\u224C",
    Bcy: "\u0411",
    bcy: "\u0431",
    bdquo: "\u201E",
    becaus: "\u2235",
    Because: "\u2235",
    because: "\u2235",
    bemptyv: "\u29B0",
    bepsi: "\u03F6",
    bernou: "\u212C",
    Bernoullis: "\u212C",
    Beta: "\u0392",
    beta: "\u03B2",
    beth: "\u2136",
    between: "\u226C",
    Bfr: "\u{1D505}",
    bfr: "\u{1D51F}",
    bigcap: "\u22C2",
    bigcirc: "\u25EF",
    bigcup: "\u22C3",
    bigodot: "\u2A00",
    bigoplus: "\u2A01",
    bigotimes: "\u2A02",
    bigsqcup: "\u2A06",
    bigstar: "\u2605",
    bigtriangledown: "\u25BD",
    bigtriangleup: "\u25B3",
    biguplus: "\u2A04",
    bigvee: "\u22C1",
    bigwedge: "\u22C0",
    bkarow: "\u290D",
    blacklozenge: "\u29EB",
    blacksquare: "\u25AA",
    blacktriangle: "\u25B4",
    blacktriangledown: "\u25BE",
    blacktriangleleft: "\u25C2",
    blacktriangleright: "\u25B8",
    blank: "\u2423",
    blk12: "\u2592",
    blk14: "\u2591",
    blk34: "\u2593",
    block: "\u2588",
    bne: "=\u20E5",
    bnequiv: "\u2261\u20E5",
    bNot: "\u2AED",
    bnot: "\u2310",
    Bopf: "\u{1D539}",
    bopf: "\u{1D553}",
    bot: "\u22A5",
    bottom: "\u22A5",
    bowtie: "\u22C8",
    boxbox: "\u29C9",
    boxDL: "\u2557",
    boxDl: "\u2556",
    boxdL: "\u2555",
    boxdl: "\u2510",
    boxDR: "\u2554",
    boxDr: "\u2553",
    boxdR: "\u2552",
    boxdr: "\u250C",
    boxH: "\u2550",
    boxh: "\u2500",
    boxHD: "\u2566",
    boxHd: "\u2564",
    boxhD: "\u2565",
    boxhd: "\u252C",
    boxHU: "\u2569",
    boxHu: "\u2567",
    boxhU: "\u2568",
    boxhu: "\u2534",
    boxminus: "\u229F",
    boxplus: "\u229E",
    boxtimes: "\u22A0",
    boxUL: "\u255D",
    boxUl: "\u255C",
    boxuL: "\u255B",
    boxul: "\u2518",
    boxUR: "\u255A",
    boxUr: "\u2559",
    boxuR: "\u2558",
    boxur: "\u2514",
    boxV: "\u2551",
    boxv: "\u2502",
    boxVH: "\u256C",
    boxVh: "\u256B",
    boxvH: "\u256A",
    boxvh: "\u253C",
    boxVL: "\u2563",
    boxVl: "\u2562",
    boxvL: "\u2561",
    boxvl: "\u2524",
    boxVR: "\u2560",
    boxVr: "\u255F",
    boxvR: "\u255E",
    boxvr: "\u251C",
    bprime: "\u2035",
    Breve: "\u02D8",
    breve: "\u02D8",
    brvbar: "\xA6",
    Bscr: "\u212C",
    bscr: "\u{1D4B7}",
    bsemi: "\u204F",
    bsim: "\u223D",
    bsime: "\u22CD",
    bsol: "\\",
    bsolb: "\u29C5",
    bsolhsub: "\u27C8",
    bull: "\u2022",
    bullet: "\u2022",
    bump: "\u224E",
    bumpE: "\u2AAE",
    bumpe: "\u224F",
    Bumpeq: "\u224E",
    bumpeq: "\u224F",
    Cacute: "\u0106",
    cacute: "\u0107",
    Cap: "\u22D2",
    cap: "\u2229",
    capand: "\u2A44",
    capbrcup: "\u2A49",
    capcap: "\u2A4B",
    capcup: "\u2A47",
    capdot: "\u2A40",
    CapitalDifferentialD: "\u2145",
    caps: "\u2229\uFE00",
    caret: "\u2041",
    caron: "\u02C7",
    Cayleys: "\u212D",
    ccaps: "\u2A4D",
    Ccaron: "\u010C",
    ccaron: "\u010D",
    Ccedil: "\xC7",
    ccedil: "\xE7",
    Ccirc: "\u0108",
    ccirc: "\u0109",
    Cconint: "\u2230",
    ccups: "\u2A4C",
    ccupssm: "\u2A50",
    Cdot: "\u010A",
    cdot: "\u010B",
    cedil: "\xB8",
    Cedilla: "\xB8",
    cemptyv: "\u29B2",
    cent: "\xA2",
    CenterDot: "\xB7",
    centerdot: "\xB7",
    Cfr: "\u212D",
    cfr: "\u{1D520}",
    CHcy: "\u0427",
    chcy: "\u0447",
    check: "\u2713",
    checkmark: "\u2713",
    Chi: "\u03A7",
    chi: "\u03C7",
    cir: "\u25CB",
    circ: "\u02C6",
    circeq: "\u2257",
    circlearrowleft: "\u21BA",
    circlearrowright: "\u21BB",
    circledast: "\u229B",
    circledcirc: "\u229A",
    circleddash: "\u229D",
    CircleDot: "\u2299",
    circledR: "\xAE",
    circledS: "\u24C8",
    CircleMinus: "\u2296",
    CirclePlus: "\u2295",
    CircleTimes: "\u2297",
    cirE: "\u29C3",
    cire: "\u2257",
    cirfnint: "\u2A10",
    cirmid: "\u2AEF",
    cirscir: "\u29C2",
    ClockwiseContourIntegral: "\u2232",
    CloseCurlyDoubleQuote: "\u201D",
    CloseCurlyQuote: "\u2019",
    clubs: "\u2663",
    clubsuit: "\u2663",
    Colon: "\u2237",
    colon: ":",
    Colone: "\u2A74",
    colone: "\u2254",
    coloneq: "\u2254",
    comma: ",",
    commat: "@",
    comp: "\u2201",
    compfn: "\u2218",
    complement: "\u2201",
    complexes: "\u2102",
    cong: "\u2245",
    congdot: "\u2A6D",
    Congruent: "\u2261",
    Conint: "\u222F",
    conint: "\u222E",
    ContourIntegral: "\u222E",
    Copf: "\u2102",
    copf: "\u{1D554}",
    coprod: "\u2210",
    Coproduct: "\u2210",
    COPY: "\xA9",
    copy: "\xA9",
    copysr: "\u2117",
    CounterClockwiseContourIntegral: "\u2233",
    crarr: "\u21B5",
    Cross: "\u2A2F",
    cross: "\u2717",
    Cscr: "\u{1D49E}",
    cscr: "\u{1D4B8}",
    csub: "\u2ACF",
    csube: "\u2AD1",
    csup: "\u2AD0",
    csupe: "\u2AD2",
    ctdot: "\u22EF",
    cudarrl: "\u2938",
    cudarrr: "\u2935",
    cuepr: "\u22DE",
    cuesc: "\u22DF",
    cularr: "\u21B6",
    cularrp: "\u293D",
    Cup: "\u22D3",
    cup: "\u222A",
    cupbrcap: "\u2A48",
    CupCap: "\u224D",
    cupcap: "\u2A46",
    cupcup: "\u2A4A",
    cupdot: "\u228D",
    cupor: "\u2A45",
    cups: "\u222A\uFE00",
    curarr: "\u21B7",
    curarrm: "\u293C",
    curlyeqprec: "\u22DE",
    curlyeqsucc: "\u22DF",
    curlyvee: "\u22CE",
    curlywedge: "\u22CF",
    curren: "\xA4",
    curvearrowleft: "\u21B6",
    curvearrowright: "\u21B7",
    cuvee: "\u22CE",
    cuwed: "\u22CF",
    cwconint: "\u2232",
    cwint: "\u2231",
    cylcty: "\u232D",
    Dagger: "\u2021",
    dagger: "\u2020",
    daleth: "\u2138",
    Darr: "\u21A1",
    dArr: "\u21D3",
    darr: "\u2193",
    dash: "\u2010",
    Dashv: "\u2AE4",
    dashv: "\u22A3",
    dbkarow: "\u290F",
    dblac: "\u02DD",
    Dcaron: "\u010E",
    dcaron: "\u010F",
    Dcy: "\u0414",
    dcy: "\u0434",
    DD: "\u2145",
    dd: "\u2146",
    ddagger: "\u2021",
    ddarr: "\u21CA",
    DDotrahd: "\u2911",
    ddotseq: "\u2A77",
    deg: "\xB0",
    Del: "\u2207",
    Delta: "\u0394",
    delta: "\u03B4",
    demptyv: "\u29B1",
    dfisht: "\u297F",
    Dfr: "\u{1D507}",
    dfr: "\u{1D521}",
    dHar: "\u2965",
    dharl: "\u21C3",
    dharr: "\u21C2",
    DiacriticalAcute: "\xB4",
    DiacriticalDot: "\u02D9",
    DiacriticalDoubleAcute: "\u02DD",
    DiacriticalGrave: "`",
    DiacriticalTilde: "\u02DC",
    diam: "\u22C4",
    Diamond: "\u22C4",
    diamond: "\u22C4",
    diamondsuit: "\u2666",
    diams: "\u2666",
    die: "\xA8",
    DifferentialD: "\u2146",
    digamma: "\u03DD",
    disin: "\u22F2",
    div: "\xF7",
    divide: "\xF7",
    divideontimes: "\u22C7",
    divonx: "\u22C7",
    DJcy: "\u0402",
    djcy: "\u0452",
    dlcorn: "\u231E",
    dlcrop: "\u230D",
    dollar: "$",
    Dopf: "\u{1D53B}",
    dopf: "\u{1D555}",
    Dot: "\xA8",
    dot: "\u02D9",
    DotDot: "\u20DC",
    doteq: "\u2250",
    doteqdot: "\u2251",
    DotEqual: "\u2250",
    dotminus: "\u2238",
    dotplus: "\u2214",
    dotsquare: "\u22A1",
    doublebarwedge: "\u2306",
    DoubleContourIntegral: "\u222F",
    DoubleDot: "\xA8",
    DoubleDownArrow: "\u21D3",
    DoubleLeftArrow: "\u21D0",
    DoubleLeftRightArrow: "\u21D4",
    DoubleLeftTee: "\u2AE4",
    DoubleLongLeftArrow: "\u27F8",
    DoubleLongLeftRightArrow: "\u27FA",
    DoubleLongRightArrow: "\u27F9",
    DoubleRightArrow: "\u21D2",
    DoubleRightTee: "\u22A8",
    DoubleUpArrow: "\u21D1",
    DoubleUpDownArrow: "\u21D5",
    DoubleVerticalBar: "\u2225",
    DownArrow: "\u2193",
    Downarrow: "\u21D3",
    downarrow: "\u2193",
    DownArrowBar: "\u2913",
    DownArrowUpArrow: "\u21F5",
    DownBreve: "\u0311",
    downdownarrows: "\u21CA",
    downharpoonleft: "\u21C3",
    downharpoonright: "\u21C2",
    DownLeftRightVector: "\u2950",
    DownLeftTeeVector: "\u295E",
    DownLeftVector: "\u21BD",
    DownLeftVectorBar: "\u2956",
    DownRightTeeVector: "\u295F",
    DownRightVector: "\u21C1",
    DownRightVectorBar: "\u2957",
    DownTee: "\u22A4",
    DownTeeArrow: "\u21A7",
    drbkarow: "\u2910",
    drcorn: "\u231F",
    drcrop: "\u230C",
    Dscr: "\u{1D49F}",
    dscr: "\u{1D4B9}",
    DScy: "\u0405",
    dscy: "\u0455",
    dsol: "\u29F6",
    Dstrok: "\u0110",
    dstrok: "\u0111",
    dtdot: "\u22F1",
    dtri: "\u25BF",
    dtrif: "\u25BE",
    duarr: "\u21F5",
    duhar: "\u296F",
    dwangle: "\u29A6",
    DZcy: "\u040F",
    dzcy: "\u045F",
    dzigrarr: "\u27FF",
    Eacute: "\xC9",
    eacute: "\xE9",
    easter: "\u2A6E",
    Ecaron: "\u011A",
    ecaron: "\u011B",
    ecir: "\u2256",
    Ecirc: "\xCA",
    ecirc: "\xEA",
    ecolon: "\u2255",
    Ecy: "\u042D",
    ecy: "\u044D",
    eDDot: "\u2A77",
    Edot: "\u0116",
    eDot: "\u2251",
    edot: "\u0117",
    ee: "\u2147",
    efDot: "\u2252",
    Efr: "\u{1D508}",
    efr: "\u{1D522}",
    eg: "\u2A9A",
    Egrave: "\xC8",
    egrave: "\xE8",
    egs: "\u2A96",
    egsdot: "\u2A98",
    el: "\u2A99",
    Element: "\u2208",
    elinters: "\u23E7",
    ell: "\u2113",
    els: "\u2A95",
    elsdot: "\u2A97",
    Emacr: "\u0112",
    emacr: "\u0113",
    empty: "\u2205",
    emptyset: "\u2205",
    EmptySmallSquare: "\u25FB",
    emptyv: "\u2205",
    EmptyVerySmallSquare: "\u25AB",
    emsp: "\u2003",
    emsp13: "\u2004",
    emsp14: "\u2005",
    ENG: "\u014A",
    eng: "\u014B",
    ensp: "\u2002",
    Eogon: "\u0118",
    eogon: "\u0119",
    Eopf: "\u{1D53C}",
    eopf: "\u{1D556}",
    epar: "\u22D5",
    eparsl: "\u29E3",
    eplus: "\u2A71",
    epsi: "\u03B5",
    Epsilon: "\u0395",
    epsilon: "\u03B5",
    epsiv: "\u03F5",
    eqcirc: "\u2256",
    eqcolon: "\u2255",
    eqsim: "\u2242",
    eqslantgtr: "\u2A96",
    eqslantless: "\u2A95",
    Equal: "\u2A75",
    equals: "=",
    EqualTilde: "\u2242",
    equest: "\u225F",
    Equilibrium: "\u21CC",
    equiv: "\u2261",
    equivDD: "\u2A78",
    eqvparsl: "\u29E5",
    erarr: "\u2971",
    erDot: "\u2253",
    Escr: "\u2130",
    escr: "\u212F",
    esdot: "\u2250",
    Esim: "\u2A73",
    esim: "\u2242",
    Eta: "\u0397",
    eta: "\u03B7",
    ETH: "\xD0",
    eth: "\xF0",
    Euml: "\xCB",
    euml: "\xEB",
    euro: "\u20AC",
    excl: "!",
    exist: "\u2203",
    Exists: "\u2203",
    expectation: "\u2130",
    ExponentialE: "\u2147",
    exponentiale: "\u2147",
    fallingdotseq: "\u2252",
    Fcy: "\u0424",
    fcy: "\u0444",
    female: "\u2640",
    ffilig: "\uFB03",
    fflig: "\uFB00",
    ffllig: "\uFB04",
    Ffr: "\u{1D509}",
    ffr: "\u{1D523}",
    filig: "\uFB01",
    FilledSmallSquare: "\u25FC",
    FilledVerySmallSquare: "\u25AA",
    fjlig: "fj",
    flat: "\u266D",
    fllig: "\uFB02",
    fltns: "\u25B1",
    fnof: "\u0192",
    Fopf: "\u{1D53D}",
    fopf: "\u{1D557}",
    ForAll: "\u2200",
    forall: "\u2200",
    fork: "\u22D4",
    forkv: "\u2AD9",
    Fouriertrf: "\u2131",
    fpartint: "\u2A0D",
    frac12: "\xBD",
    frac13: "\u2153",
    frac14: "\xBC",
    frac15: "\u2155",
    frac16: "\u2159",
    frac18: "\u215B",
    frac23: "\u2154",
    frac25: "\u2156",
    frac34: "\xBE",
    frac35: "\u2157",
    frac38: "\u215C",
    frac45: "\u2158",
    frac56: "\u215A",
    frac58: "\u215D",
    frac78: "\u215E",
    frasl: "\u2044",
    frown: "\u2322",
    Fscr: "\u2131",
    fscr: "\u{1D4BB}",
    gacute: "\u01F5",
    Gamma: "\u0393",
    gamma: "\u03B3",
    Gammad: "\u03DC",
    gammad: "\u03DD",
    gap: "\u2A86",
    Gbreve: "\u011E",
    gbreve: "\u011F",
    Gcedil: "\u0122",
    Gcirc: "\u011C",
    gcirc: "\u011D",
    Gcy: "\u0413",
    gcy: "\u0433",
    Gdot: "\u0120",
    gdot: "\u0121",
    gE: "\u2267",
    ge: "\u2265",
    gEl: "\u2A8C",
    gel: "\u22DB",
    geq: "\u2265",
    geqq: "\u2267",
    geqslant: "\u2A7E",
    ges: "\u2A7E",
    gescc: "\u2AA9",
    gesdot: "\u2A80",
    gesdoto: "\u2A82",
    gesdotol: "\u2A84",
    gesl: "\u22DB\uFE00",
    gesles: "\u2A94",
    Gfr: "\u{1D50A}",
    gfr: "\u{1D524}",
    Gg: "\u22D9",
    gg: "\u226B",
    ggg: "\u22D9",
    gimel: "\u2137",
    GJcy: "\u0403",
    gjcy: "\u0453",
    gl: "\u2277",
    gla: "\u2AA5",
    glE: "\u2A92",
    glj: "\u2AA4",
    gnap: "\u2A8A",
    gnapprox: "\u2A8A",
    gnE: "\u2269",
    gne: "\u2A88",
    gneq: "\u2A88",
    gneqq: "\u2269",
    gnsim: "\u22E7",
    Gopf: "\u{1D53E}",
    gopf: "\u{1D558}",
    grave: "`",
    GreaterEqual: "\u2265",
    GreaterEqualLess: "\u22DB",
    GreaterFullEqual: "\u2267",
    GreaterGreater: "\u2AA2",
    GreaterLess: "\u2277",
    GreaterSlantEqual: "\u2A7E",
    GreaterTilde: "\u2273",
    Gscr: "\u{1D4A2}",
    gscr: "\u210A",
    gsim: "\u2273",
    gsime: "\u2A8E",
    gsiml: "\u2A90",
    Gt: "\u226B",
    GT: ">",
    gt: ">",
    gtcc: "\u2AA7",
    gtcir: "\u2A7A",
    gtdot: "\u22D7",
    gtlPar: "\u2995",
    gtquest: "\u2A7C",
    gtrapprox: "\u2A86",
    gtrarr: "\u2978",
    gtrdot: "\u22D7",
    gtreqless: "\u22DB",
    gtreqqless: "\u2A8C",
    gtrless: "\u2277",
    gtrsim: "\u2273",
    gvertneqq: "\u2269\uFE00",
    gvnE: "\u2269\uFE00",
    Hacek: "\u02C7",
    hairsp: "\u200A",
    half: "\xBD",
    hamilt: "\u210B",
    HARDcy: "\u042A",
    hardcy: "\u044A",
    hArr: "\u21D4",
    harr: "\u2194",
    harrcir: "\u2948",
    harrw: "\u21AD",
    Hat: "^",
    hbar: "\u210F",
    Hcirc: "\u0124",
    hcirc: "\u0125",
    hearts: "\u2665",
    heartsuit: "\u2665",
    hellip: "\u2026",
    hercon: "\u22B9",
    Hfr: "\u210C",
    hfr: "\u{1D525}",
    HilbertSpace: "\u210B",
    hksearow: "\u2925",
    hkswarow: "\u2926",
    hoarr: "\u21FF",
    homtht: "\u223B",
    hookleftarrow: "\u21A9",
    hookrightarrow: "\u21AA",
    Hopf: "\u210D",
    hopf: "\u{1D559}",
    horbar: "\u2015",
    HorizontalLine: "\u2500",
    Hscr: "\u210B",
    hscr: "\u{1D4BD}",
    hslash: "\u210F",
    Hstrok: "\u0126",
    hstrok: "\u0127",
    HumpDownHump: "\u224E",
    HumpEqual: "\u224F",
    hybull: "\u2043",
    hyphen: "\u2010",
    Iacute: "\xCD",
    iacute: "\xED",
    ic: "\u2063",
    Icirc: "\xCE",
    icirc: "\xEE",
    Icy: "\u0418",
    icy: "\u0438",
    Idot: "\u0130",
    IEcy: "\u0415",
    iecy: "\u0435",
    iexcl: "\xA1",
    iff: "\u21D4",
    Ifr: "\u2111",
    ifr: "\u{1D526}",
    Igrave: "\xCC",
    igrave: "\xEC",
    ii: "\u2148",
    iiiint: "\u2A0C",
    iiint: "\u222D",
    iinfin: "\u29DC",
    iiota: "\u2129",
    IJlig: "\u0132",
    ijlig: "\u0133",
    Im: "\u2111",
    Imacr: "\u012A",
    imacr: "\u012B",
    image: "\u2111",
    ImaginaryI: "\u2148",
    imagline: "\u2110",
    imagpart: "\u2111",
    imath: "\u0131",
    imof: "\u22B7",
    imped: "\u01B5",
    Implies: "\u21D2",
    in: "\u2208",
    incare: "\u2105",
    infin: "\u221E",
    infintie: "\u29DD",
    inodot: "\u0131",
    Int: "\u222C",
    int: "\u222B",
    intcal: "\u22BA",
    integers: "\u2124",
    Integral: "\u222B",
    intercal: "\u22BA",
    Intersection: "\u22C2",
    intlarhk: "\u2A17",
    intprod: "\u2A3C",
    InvisibleComma: "\u2063",
    InvisibleTimes: "\u2062",
    IOcy: "\u0401",
    iocy: "\u0451",
    Iogon: "\u012E",
    iogon: "\u012F",
    Iopf: "\u{1D540}",
    iopf: "\u{1D55A}",
    Iota: "\u0399",
    iota: "\u03B9",
    iprod: "\u2A3C",
    iquest: "\xBF",
    Iscr: "\u2110",
    iscr: "\u{1D4BE}",
    isin: "\u2208",
    isindot: "\u22F5",
    isinE: "\u22F9",
    isins: "\u22F4",
    isinsv: "\u22F3",
    isinv: "\u2208",
    it: "\u2062",
    Itilde: "\u0128",
    itilde: "\u0129",
    Iukcy: "\u0406",
    iukcy: "\u0456",
    Iuml: "\xCF",
    iuml: "\xEF",
    Jcirc: "\u0134",
    jcirc: "\u0135",
    Jcy: "\u0419",
    jcy: "\u0439",
    Jfr: "\u{1D50D}",
    jfr: "\u{1D527}",
    jmath: "\u0237",
    Jopf: "\u{1D541}",
    jopf: "\u{1D55B}",
    Jscr: "\u{1D4A5}",
    jscr: "\u{1D4BF}",
    Jsercy: "\u0408",
    jsercy: "\u0458",
    Jukcy: "\u0404",
    jukcy: "\u0454",
    Kappa: "\u039A",
    kappa: "\u03BA",
    kappav: "\u03F0",
    Kcedil: "\u0136",
    kcedil: "\u0137",
    Kcy: "\u041A",
    kcy: "\u043A",
    Kfr: "\u{1D50E}",
    kfr: "\u{1D528}",
    kgreen: "\u0138",
    KHcy: "\u0425",
    khcy: "\u0445",
    KJcy: "\u040C",
    kjcy: "\u045C",
    Kopf: "\u{1D542}",
    kopf: "\u{1D55C}",
    Kscr: "\u{1D4A6}",
    kscr: "\u{1D4C0}",
    lAarr: "\u21DA",
    Lacute: "\u0139",
    lacute: "\u013A",
    laemptyv: "\u29B4",
    lagran: "\u2112",
    Lambda: "\u039B",
    lambda: "\u03BB",
    Lang: "\u27EA",
    lang: "\u27E8",
    langd: "\u2991",
    langle: "\u27E8",
    lap: "\u2A85",
    Laplacetrf: "\u2112",
    laquo: "\xAB",
    Larr: "\u219E",
    lArr: "\u21D0",
    larr: "\u2190",
    larrb: "\u21E4",
    larrbfs: "\u291F",
    larrfs: "\u291D",
    larrhk: "\u21A9",
    larrlp: "\u21AB",
    larrpl: "\u2939",
    larrsim: "\u2973",
    larrtl: "\u21A2",
    lat: "\u2AAB",
    lAtail: "\u291B",
    latail: "\u2919",
    late: "\u2AAD",
    lates: "\u2AAD\uFE00",
    lBarr: "\u290E",
    lbarr: "\u290C",
    lbbrk: "\u2772",
    lbrace: "{",
    lbrack: "[",
    lbrke: "\u298B",
    lbrksld: "\u298F",
    lbrkslu: "\u298D",
    Lcaron: "\u013D",
    lcaron: "\u013E",
    Lcedil: "\u013B",
    lcedil: "\u013C",
    lceil: "\u2308",
    lcub: "{",
    Lcy: "\u041B",
    lcy: "\u043B",
    ldca: "\u2936",
    ldquo: "\u201C",
    ldquor: "\u201E",
    ldrdhar: "\u2967",
    ldrushar: "\u294B",
    ldsh: "\u21B2",
    lE: "\u2266",
    le: "\u2264",
    LeftAngleBracket: "\u27E8",
    LeftArrow: "\u2190",
    Leftarrow: "\u21D0",
    leftarrow: "\u2190",
    LeftArrowBar: "\u21E4",
    LeftArrowRightArrow: "\u21C6",
    leftarrowtail: "\u21A2",
    LeftCeiling: "\u2308",
    LeftDoubleBracket: "\u27E6",
    LeftDownTeeVector: "\u2961",
    LeftDownVector: "\u21C3",
    LeftDownVectorBar: "\u2959",
    LeftFloor: "\u230A",
    leftharpoondown: "\u21BD",
    leftharpoonup: "\u21BC",
    leftleftarrows: "\u21C7",
    LeftRightArrow: "\u2194",
    Leftrightarrow: "\u21D4",
    leftrightarrow: "\u2194",
    leftrightarrows: "\u21C6",
    leftrightharpoons: "\u21CB",
    leftrightsquigarrow: "\u21AD",
    LeftRightVector: "\u294E",
    LeftTee: "\u22A3",
    LeftTeeArrow: "\u21A4",
    LeftTeeVector: "\u295A",
    leftthreetimes: "\u22CB",
    LeftTriangle: "\u22B2",
    LeftTriangleBar: "\u29CF",
    LeftTriangleEqual: "\u22B4",
    LeftUpDownVector: "\u2951",
    LeftUpTeeVector: "\u2960",
    LeftUpVector: "\u21BF",
    LeftUpVectorBar: "\u2958",
    LeftVector: "\u21BC",
    LeftVectorBar: "\u2952",
    lEg: "\u2A8B",
    leg: "\u22DA",
    leq: "\u2264",
    leqq: "\u2266",
    leqslant: "\u2A7D",
    les: "\u2A7D",
    lescc: "\u2AA8",
    lesdot: "\u2A7F",
    lesdoto: "\u2A81",
    lesdotor: "\u2A83",
    lesg: "\u22DA\uFE00",
    lesges: "\u2A93",
    lessapprox: "\u2A85",
    lessdot: "\u22D6",
    lesseqgtr: "\u22DA",
    lesseqqgtr: "\u2A8B",
    LessEqualGreater: "\u22DA",
    LessFullEqual: "\u2266",
    LessGreater: "\u2276",
    lessgtr: "\u2276",
    LessLess: "\u2AA1",
    lesssim: "\u2272",
    LessSlantEqual: "\u2A7D",
    LessTilde: "\u2272",
    lfisht: "\u297C",
    lfloor: "\u230A",
    Lfr: "\u{1D50F}",
    lfr: "\u{1D529}",
    lg: "\u2276",
    lgE: "\u2A91",
    lHar: "\u2962",
    lhard: "\u21BD",
    lharu: "\u21BC",
    lharul: "\u296A",
    lhblk: "\u2584",
    LJcy: "\u0409",
    ljcy: "\u0459",
    Ll: "\u22D8",
    ll: "\u226A",
    llarr: "\u21C7",
    llcorner: "\u231E",
    Lleftarrow: "\u21DA",
    llhard: "\u296B",
    lltri: "\u25FA",
    Lmidot: "\u013F",
    lmidot: "\u0140",
    lmoust: "\u23B0",
    lmoustache: "\u23B0",
    lnap: "\u2A89",
    lnapprox: "\u2A89",
    lnE: "\u2268",
    lne: "\u2A87",
    lneq: "\u2A87",
    lneqq: "\u2268",
    lnsim: "\u22E6",
    loang: "\u27EC",
    loarr: "\u21FD",
    lobrk: "\u27E6",
    LongLeftArrow: "\u27F5",
    Longleftarrow: "\u27F8",
    longleftarrow: "\u27F5",
    LongLeftRightArrow: "\u27F7",
    Longleftrightarrow: "\u27FA",
    longleftrightarrow: "\u27F7",
    longmapsto: "\u27FC",
    LongRightArrow: "\u27F6",
    Longrightarrow: "\u27F9",
    longrightarrow: "\u27F6",
    looparrowleft: "\u21AB",
    looparrowright: "\u21AC",
    lopar: "\u2985",
    Lopf: "\u{1D543}",
    lopf: "\u{1D55D}",
    loplus: "\u2A2D",
    lotimes: "\u2A34",
    lowast: "\u2217",
    lowbar: "_",
    LowerLeftArrow: "\u2199",
    LowerRightArrow: "\u2198",
    loz: "\u25CA",
    lozenge: "\u25CA",
    lozf: "\u29EB",
    lpar: "(",
    lparlt: "\u2993",
    lrarr: "\u21C6",
    lrcorner: "\u231F",
    lrhar: "\u21CB",
    lrhard: "\u296D",
    lrm: "\u200E",
    lrtri: "\u22BF",
    lsaquo: "\u2039",
    Lscr: "\u2112",
    lscr: "\u{1D4C1}",
    Lsh: "\u21B0",
    lsh: "\u21B0",
    lsim: "\u2272",
    lsime: "\u2A8D",
    lsimg: "\u2A8F",
    lsqb: "[",
    lsquo: "\u2018",
    lsquor: "\u201A",
    Lstrok: "\u0141",
    lstrok: "\u0142",
    Lt: "\u226A",
    LT: "<",
    lt: "<",
    ltcc: "\u2AA6",
    ltcir: "\u2A79",
    ltdot: "\u22D6",
    lthree: "\u22CB",
    ltimes: "\u22C9",
    ltlarr: "\u2976",
    ltquest: "\u2A7B",
    ltri: "\u25C3",
    ltrie: "\u22B4",
    ltrif: "\u25C2",
    ltrPar: "\u2996",
    lurdshar: "\u294A",
    luruhar: "\u2966",
    lvertneqq: "\u2268\uFE00",
    lvnE: "\u2268\uFE00",
    macr: "\xAF",
    male: "\u2642",
    malt: "\u2720",
    maltese: "\u2720",
    Map: "\u2905",
    map: "\u21A6",
    mapsto: "\u21A6",
    mapstodown: "\u21A7",
    mapstoleft: "\u21A4",
    mapstoup: "\u21A5",
    marker: "\u25AE",
    mcomma: "\u2A29",
    Mcy: "\u041C",
    mcy: "\u043C",
    mdash: "\u2014",
    mDDot: "\u223A",
    measuredangle: "\u2221",
    MediumSpace: "\u205F",
    Mellintrf: "\u2133",
    Mfr: "\u{1D510}",
    mfr: "\u{1D52A}",
    mho: "\u2127",
    micro: "\xB5",
    mid: "\u2223",
    midast: "*",
    midcir: "\u2AF0",
    middot: "\xB7",
    minus: "\u2212",
    minusb: "\u229F",
    minusd: "\u2238",
    minusdu: "\u2A2A",
    MinusPlus: "\u2213",
    mlcp: "\u2ADB",
    mldr: "\u2026",
    mnplus: "\u2213",
    models: "\u22A7",
    Mopf: "\u{1D544}",
    mopf: "\u{1D55E}",
    mp: "\u2213",
    Mscr: "\u2133",
    mscr: "\u{1D4C2}",
    mstpos: "\u223E",
    Mu: "\u039C",
    mu: "\u03BC",
    multimap: "\u22B8",
    mumap: "\u22B8",
    nabla: "\u2207",
    Nacute: "\u0143",
    nacute: "\u0144",
    nang: "\u2220\u20D2",
    nap: "\u2249",
    napE: "\u2A70\u0338",
    napid: "\u224B\u0338",
    napos: "\u0149",
    napprox: "\u2249",
    natur: "\u266E",
    natural: "\u266E",
    naturals: "\u2115",
    nbsp: "\xA0",
    nbump: "\u224E\u0338",
    nbumpe: "\u224F\u0338",
    ncap: "\u2A43",
    Ncaron: "\u0147",
    ncaron: "\u0148",
    Ncedil: "\u0145",
    ncedil: "\u0146",
    ncong: "\u2247",
    ncongdot: "\u2A6D\u0338",
    ncup: "\u2A42",
    Ncy: "\u041D",
    ncy: "\u043D",
    ndash: "\u2013",
    ne: "\u2260",
    nearhk: "\u2924",
    neArr: "\u21D7",
    nearr: "\u2197",
    nearrow: "\u2197",
    nedot: "\u2250\u0338",
    NegativeMediumSpace: "\u200B",
    NegativeThickSpace: "\u200B",
    NegativeThinSpace: "\u200B",
    NegativeVeryThinSpace: "\u200B",
    nequiv: "\u2262",
    nesear: "\u2928",
    nesim: "\u2242\u0338",
    NestedGreaterGreater: "\u226B",
    NestedLessLess: "\u226A",
    NewLine: `
`,
    nexist: "\u2204",
    nexists: "\u2204",
    Nfr: "\u{1D511}",
    nfr: "\u{1D52B}",
    ngE: "\u2267\u0338",
    nge: "\u2271",
    ngeq: "\u2271",
    ngeqq: "\u2267\u0338",
    ngeqslant: "\u2A7E\u0338",
    nges: "\u2A7E\u0338",
    nGg: "\u22D9\u0338",
    ngsim: "\u2275",
    nGt: "\u226B\u20D2",
    ngt: "\u226F",
    ngtr: "\u226F",
    nGtv: "\u226B\u0338",
    nhArr: "\u21CE",
    nharr: "\u21AE",
    nhpar: "\u2AF2",
    ni: "\u220B",
    nis: "\u22FC",
    nisd: "\u22FA",
    niv: "\u220B",
    NJcy: "\u040A",
    njcy: "\u045A",
    nlArr: "\u21CD",
    nlarr: "\u219A",
    nldr: "\u2025",
    nlE: "\u2266\u0338",
    nle: "\u2270",
    nLeftarrow: "\u21CD",
    nleftarrow: "\u219A",
    nLeftrightarrow: "\u21CE",
    nleftrightarrow: "\u21AE",
    nleq: "\u2270",
    nleqq: "\u2266\u0338",
    nleqslant: "\u2A7D\u0338",
    nles: "\u2A7D\u0338",
    nless: "\u226E",
    nLl: "\u22D8\u0338",
    nlsim: "\u2274",
    nLt: "\u226A\u20D2",
    nlt: "\u226E",
    nltri: "\u22EA",
    nltrie: "\u22EC",
    nLtv: "\u226A\u0338",
    nmid: "\u2224",
    NoBreak: "\u2060",
    NonBreakingSpace: "\xA0",
    Nopf: "\u2115",
    nopf: "\u{1D55F}",
    Not: "\u2AEC",
    not: "\xAC",
    NotCongruent: "\u2262",
    NotCupCap: "\u226D",
    NotDoubleVerticalBar: "\u2226",
    NotElement: "\u2209",
    NotEqual: "\u2260",
    NotEqualTilde: "\u2242\u0338",
    NotExists: "\u2204",
    NotGreater: "\u226F",
    NotGreaterEqual: "\u2271",
    NotGreaterFullEqual: "\u2267\u0338",
    NotGreaterGreater: "\u226B\u0338",
    NotGreaterLess: "\u2279",
    NotGreaterSlantEqual: "\u2A7E\u0338",
    NotGreaterTilde: "\u2275",
    NotHumpDownHump: "\u224E\u0338",
    NotHumpEqual: "\u224F\u0338",
    notin: "\u2209",
    notindot: "\u22F5\u0338",
    notinE: "\u22F9\u0338",
    notinva: "\u2209",
    notinvb: "\u22F7",
    notinvc: "\u22F6",
    NotLeftTriangle: "\u22EA",
    NotLeftTriangleBar: "\u29CF\u0338",
    NotLeftTriangleEqual: "\u22EC",
    NotLess: "\u226E",
    NotLessEqual: "\u2270",
    NotLessGreater: "\u2278",
    NotLessLess: "\u226A\u0338",
    NotLessSlantEqual: "\u2A7D\u0338",
    NotLessTilde: "\u2274",
    NotNestedGreaterGreater: "\u2AA2\u0338",
    NotNestedLessLess: "\u2AA1\u0338",
    notni: "\u220C",
    notniva: "\u220C",
    notnivb: "\u22FE",
    notnivc: "\u22FD",
    NotPrecedes: "\u2280",
    NotPrecedesEqual: "\u2AAF\u0338",
    NotPrecedesSlantEqual: "\u22E0",
    NotReverseElement: "\u220C",
    NotRightTriangle: "\u22EB",
    NotRightTriangleBar: "\u29D0\u0338",
    NotRightTriangleEqual: "\u22ED",
    NotSquareSubset: "\u228F\u0338",
    NotSquareSubsetEqual: "\u22E2",
    NotSquareSuperset: "\u2290\u0338",
    NotSquareSupersetEqual: "\u22E3",
    NotSubset: "\u2282\u20D2",
    NotSubsetEqual: "\u2288",
    NotSucceeds: "\u2281",
    NotSucceedsEqual: "\u2AB0\u0338",
    NotSucceedsSlantEqual: "\u22E1",
    NotSucceedsTilde: "\u227F\u0338",
    NotSuperset: "\u2283\u20D2",
    NotSupersetEqual: "\u2289",
    NotTilde: "\u2241",
    NotTildeEqual: "\u2244",
    NotTildeFullEqual: "\u2247",
    NotTildeTilde: "\u2249",
    NotVerticalBar: "\u2224",
    npar: "\u2226",
    nparallel: "\u2226",
    nparsl: "\u2AFD\u20E5",
    npart: "\u2202\u0338",
    npolint: "\u2A14",
    npr: "\u2280",
    nprcue: "\u22E0",
    npre: "\u2AAF\u0338",
    nprec: "\u2280",
    npreceq: "\u2AAF\u0338",
    nrArr: "\u21CF",
    nrarr: "\u219B",
    nrarrc: "\u2933\u0338",
    nrarrw: "\u219D\u0338",
    nRightarrow: "\u21CF",
    nrightarrow: "\u219B",
    nrtri: "\u22EB",
    nrtrie: "\u22ED",
    nsc: "\u2281",
    nsccue: "\u22E1",
    nsce: "\u2AB0\u0338",
    Nscr: "\u{1D4A9}",
    nscr: "\u{1D4C3}",
    nshortmid: "\u2224",
    nshortparallel: "\u2226",
    nsim: "\u2241",
    nsime: "\u2244",
    nsimeq: "\u2244",
    nsmid: "\u2224",
    nspar: "\u2226",
    nsqsube: "\u22E2",
    nsqsupe: "\u22E3",
    nsub: "\u2284",
    nsubE: "\u2AC5\u0338",
    nsube: "\u2288",
    nsubset: "\u2282\u20D2",
    nsubseteq: "\u2288",
    nsubseteqq: "\u2AC5\u0338",
    nsucc: "\u2281",
    nsucceq: "\u2AB0\u0338",
    nsup: "\u2285",
    nsupE: "\u2AC6\u0338",
    nsupe: "\u2289",
    nsupset: "\u2283\u20D2",
    nsupseteq: "\u2289",
    nsupseteqq: "\u2AC6\u0338",
    ntgl: "\u2279",
    Ntilde: "\xD1",
    ntilde: "\xF1",
    ntlg: "\u2278",
    ntriangleleft: "\u22EA",
    ntrianglelefteq: "\u22EC",
    ntriangleright: "\u22EB",
    ntrianglerighteq: "\u22ED",
    Nu: "\u039D",
    nu: "\u03BD",
    num: "#",
    numero: "\u2116",
    numsp: "\u2007",
    nvap: "\u224D\u20D2",
    nVDash: "\u22AF",
    nVdash: "\u22AE",
    nvDash: "\u22AD",
    nvdash: "\u22AC",
    nvge: "\u2265\u20D2",
    nvgt: ">\u20D2",
    nvHarr: "\u2904",
    nvinfin: "\u29DE",
    nvlArr: "\u2902",
    nvle: "\u2264\u20D2",
    nvlt: "<\u20D2",
    nvltrie: "\u22B4\u20D2",
    nvrArr: "\u2903",
    nvrtrie: "\u22B5\u20D2",
    nvsim: "\u223C\u20D2",
    nwarhk: "\u2923",
    nwArr: "\u21D6",
    nwarr: "\u2196",
    nwarrow: "\u2196",
    nwnear: "\u2927",
    Oacute: "\xD3",
    oacute: "\xF3",
    oast: "\u229B",
    ocir: "\u229A",
    Ocirc: "\xD4",
    ocirc: "\xF4",
    Ocy: "\u041E",
    ocy: "\u043E",
    odash: "\u229D",
    Odblac: "\u0150",
    odblac: "\u0151",
    odiv: "\u2A38",
    odot: "\u2299",
    odsold: "\u29BC",
    OElig: "\u0152",
    oelig: "\u0153",
    ofcir: "\u29BF",
    Ofr: "\u{1D512}",
    ofr: "\u{1D52C}",
    ogon: "\u02DB",
    Ograve: "\xD2",
    ograve: "\xF2",
    ogt: "\u29C1",
    ohbar: "\u29B5",
    ohm: "\u03A9",
    oint: "\u222E",
    olarr: "\u21BA",
    olcir: "\u29BE",
    olcross: "\u29BB",
    oline: "\u203E",
    olt: "\u29C0",
    Omacr: "\u014C",
    omacr: "\u014D",
    Omega: "\u03A9",
    omega: "\u03C9",
    Omicron: "\u039F",
    omicron: "\u03BF",
    omid: "\u29B6",
    ominus: "\u2296",
    Oopf: "\u{1D546}",
    oopf: "\u{1D560}",
    opar: "\u29B7",
    OpenCurlyDoubleQuote: "\u201C",
    OpenCurlyQuote: "\u2018",
    operp: "\u29B9",
    oplus: "\u2295",
    Or: "\u2A54",
    or: "\u2228",
    orarr: "\u21BB",
    ord: "\u2A5D",
    order: "\u2134",
    orderof: "\u2134",
    ordf: "\xAA",
    ordm: "\xBA",
    origof: "\u22B6",
    oror: "\u2A56",
    orslope: "\u2A57",
    orv: "\u2A5B",
    oS: "\u24C8",
    Oscr: "\u{1D4AA}",
    oscr: "\u2134",
    Oslash: "\xD8",
    oslash: "\xF8",
    osol: "\u2298",
    Otilde: "\xD5",
    otilde: "\xF5",
    Otimes: "\u2A37",
    otimes: "\u2297",
    otimesas: "\u2A36",
    Ouml: "\xD6",
    ouml: "\xF6",
    ovbar: "\u233D",
    OverBar: "\u203E",
    OverBrace: "\u23DE",
    OverBracket: "\u23B4",
    OverParenthesis: "\u23DC",
    par: "\u2225",
    para: "\xB6",
    parallel: "\u2225",
    parsim: "\u2AF3",
    parsl: "\u2AFD",
    part: "\u2202",
    PartialD: "\u2202",
    Pcy: "\u041F",
    pcy: "\u043F",
    percnt: "%",
    period: ".",
    permil: "\u2030",
    perp: "\u22A5",
    pertenk: "\u2031",
    Pfr: "\u{1D513}",
    pfr: "\u{1D52D}",
    Phi: "\u03A6",
    phi: "\u03C6",
    phiv: "\u03D5",
    phmmat: "\u2133",
    phone: "\u260E",
    Pi: "\u03A0",
    pi: "\u03C0",
    pitchfork: "\u22D4",
    piv: "\u03D6",
    planck: "\u210F",
    planckh: "\u210E",
    plankv: "\u210F",
    plus: "+",
    plusacir: "\u2A23",
    plusb: "\u229E",
    pluscir: "\u2A22",
    plusdo: "\u2214",
    plusdu: "\u2A25",
    pluse: "\u2A72",
    PlusMinus: "\xB1",
    plusmn: "\xB1",
    plussim: "\u2A26",
    plustwo: "\u2A27",
    pm: "\xB1",
    Poincareplane: "\u210C",
    pointint: "\u2A15",
    Popf: "\u2119",
    popf: "\u{1D561}",
    pound: "\xA3",
    Pr: "\u2ABB",
    pr: "\u227A",
    prap: "\u2AB7",
    prcue: "\u227C",
    prE: "\u2AB3",
    pre: "\u2AAF",
    prec: "\u227A",
    precapprox: "\u2AB7",
    preccurlyeq: "\u227C",
    Precedes: "\u227A",
    PrecedesEqual: "\u2AAF",
    PrecedesSlantEqual: "\u227C",
    PrecedesTilde: "\u227E",
    preceq: "\u2AAF",
    precnapprox: "\u2AB9",
    precneqq: "\u2AB5",
    precnsim: "\u22E8",
    precsim: "\u227E",
    Prime: "\u2033",
    prime: "\u2032",
    primes: "\u2119",
    prnap: "\u2AB9",
    prnE: "\u2AB5",
    prnsim: "\u22E8",
    prod: "\u220F",
    Product: "\u220F",
    profalar: "\u232E",
    profline: "\u2312",
    profsurf: "\u2313",
    prop: "\u221D",
    Proportion: "\u2237",
    Proportional: "\u221D",
    propto: "\u221D",
    prsim: "\u227E",
    prurel: "\u22B0",
    Pscr: "\u{1D4AB}",
    pscr: "\u{1D4C5}",
    Psi: "\u03A8",
    psi: "\u03C8",
    puncsp: "\u2008",
    Qfr: "\u{1D514}",
    qfr: "\u{1D52E}",
    qint: "\u2A0C",
    Qopf: "\u211A",
    qopf: "\u{1D562}",
    qprime: "\u2057",
    Qscr: "\u{1D4AC}",
    qscr: "\u{1D4C6}",
    quaternions: "\u210D",
    quatint: "\u2A16",
    quest: "?",
    questeq: "\u225F",
    QUOT: '"',
    quot: '"',
    rAarr: "\u21DB",
    race: "\u223D\u0331",
    Racute: "\u0154",
    racute: "\u0155",
    radic: "\u221A",
    raemptyv: "\u29B3",
    Rang: "\u27EB",
    rang: "\u27E9",
    rangd: "\u2992",
    range: "\u29A5",
    rangle: "\u27E9",
    raquo: "\xBB",
    Rarr: "\u21A0",
    rArr: "\u21D2",
    rarr: "\u2192",
    rarrap: "\u2975",
    rarrb: "\u21E5",
    rarrbfs: "\u2920",
    rarrc: "\u2933",
    rarrfs: "\u291E",
    rarrhk: "\u21AA",
    rarrlp: "\u21AC",
    rarrpl: "\u2945",
    rarrsim: "\u2974",
    Rarrtl: "\u2916",
    rarrtl: "\u21A3",
    rarrw: "\u219D",
    rAtail: "\u291C",
    ratail: "\u291A",
    ratio: "\u2236",
    rationals: "\u211A",
    RBarr: "\u2910",
    rBarr: "\u290F",
    rbarr: "\u290D",
    rbbrk: "\u2773",
    rbrace: "}",
    rbrack: "]",
    rbrke: "\u298C",
    rbrksld: "\u298E",
    rbrkslu: "\u2990",
    Rcaron: "\u0158",
    rcaron: "\u0159",
    Rcedil: "\u0156",
    rcedil: "\u0157",
    rceil: "\u2309",
    rcub: "}",
    Rcy: "\u0420",
    rcy: "\u0440",
    rdca: "\u2937",
    rdldhar: "\u2969",
    rdquo: "\u201D",
    rdquor: "\u201D",
    rdsh: "\u21B3",
    Re: "\u211C",
    real: "\u211C",
    realine: "\u211B",
    realpart: "\u211C",
    reals: "\u211D",
    rect: "\u25AD",
    REG: "\xAE",
    reg: "\xAE",
    ReverseElement: "\u220B",
    ReverseEquilibrium: "\u21CB",
    ReverseUpEquilibrium: "\u296F",
    rfisht: "\u297D",
    rfloor: "\u230B",
    Rfr: "\u211C",
    rfr: "\u{1D52F}",
    rHar: "\u2964",
    rhard: "\u21C1",
    rharu: "\u21C0",
    rharul: "\u296C",
    Rho: "\u03A1",
    rho: "\u03C1",
    rhov: "\u03F1",
    RightAngleBracket: "\u27E9",
    RightArrow: "\u2192",
    Rightarrow: "\u21D2",
    rightarrow: "\u2192",
    RightArrowBar: "\u21E5",
    RightArrowLeftArrow: "\u21C4",
    rightarrowtail: "\u21A3",
    RightCeiling: "\u2309",
    RightDoubleBracket: "\u27E7",
    RightDownTeeVector: "\u295D",
    RightDownVector: "\u21C2",
    RightDownVectorBar: "\u2955",
    RightFloor: "\u230B",
    rightharpoondown: "\u21C1",
    rightharpoonup: "\u21C0",
    rightleftarrows: "\u21C4",
    rightleftharpoons: "\u21CC",
    rightrightarrows: "\u21C9",
    rightsquigarrow: "\u219D",
    RightTee: "\u22A2",
    RightTeeArrow: "\u21A6",
    RightTeeVector: "\u295B",
    rightthreetimes: "\u22CC",
    RightTriangle: "\u22B3",
    RightTriangleBar: "\u29D0",
    RightTriangleEqual: "\u22B5",
    RightUpDownVector: "\u294F",
    RightUpTeeVector: "\u295C",
    RightUpVector: "\u21BE",
    RightUpVectorBar: "\u2954",
    RightVector: "\u21C0",
    RightVectorBar: "\u2953",
    ring: "\u02DA",
    risingdotseq: "\u2253",
    rlarr: "\u21C4",
    rlhar: "\u21CC",
    rlm: "\u200F",
    rmoust: "\u23B1",
    rmoustache: "\u23B1",
    rnmid: "\u2AEE",
    roang: "\u27ED",
    roarr: "\u21FE",
    robrk: "\u27E7",
    ropar: "\u2986",
    Ropf: "\u211D",
    ropf: "\u{1D563}",
    roplus: "\u2A2E",
    rotimes: "\u2A35",
    RoundImplies: "\u2970",
    rpar: ")",
    rpargt: "\u2994",
    rppolint: "\u2A12",
    rrarr: "\u21C9",
    Rrightarrow: "\u21DB",
    rsaquo: "\u203A",
    Rscr: "\u211B",
    rscr: "\u{1D4C7}",
    Rsh: "\u21B1",
    rsh: "\u21B1",
    rsqb: "]",
    rsquo: "\u2019",
    rsquor: "\u2019",
    rthree: "\u22CC",
    rtimes: "\u22CA",
    rtri: "\u25B9",
    rtrie: "\u22B5",
    rtrif: "\u25B8",
    rtriltri: "\u29CE",
    RuleDelayed: "\u29F4",
    ruluhar: "\u2968",
    rx: "\u211E",
    Sacute: "\u015A",
    sacute: "\u015B",
    sbquo: "\u201A",
    Sc: "\u2ABC",
    sc: "\u227B",
    scap: "\u2AB8",
    Scaron: "\u0160",
    scaron: "\u0161",
    sccue: "\u227D",
    scE: "\u2AB4",
    sce: "\u2AB0",
    Scedil: "\u015E",
    scedil: "\u015F",
    Scirc: "\u015C",
    scirc: "\u015D",
    scnap: "\u2ABA",
    scnE: "\u2AB6",
    scnsim: "\u22E9",
    scpolint: "\u2A13",
    scsim: "\u227F",
    Scy: "\u0421",
    scy: "\u0441",
    sdot: "\u22C5",
    sdotb: "\u22A1",
    sdote: "\u2A66",
    searhk: "\u2925",
    seArr: "\u21D8",
    searr: "\u2198",
    searrow: "\u2198",
    sect: "\xA7",
    semi: ";",
    seswar: "\u2929",
    setminus: "\u2216",
    setmn: "\u2216",
    sext: "\u2736",
    Sfr: "\u{1D516}",
    sfr: "\u{1D530}",
    sfrown: "\u2322",
    sharp: "\u266F",
    SHCHcy: "\u0429",
    shchcy: "\u0449",
    SHcy: "\u0428",
    shcy: "\u0448",
    ShortDownArrow: "\u2193",
    ShortLeftArrow: "\u2190",
    shortmid: "\u2223",
    shortparallel: "\u2225",
    ShortRightArrow: "\u2192",
    ShortUpArrow: "\u2191",
    shy: "\xAD",
    Sigma: "\u03A3",
    sigma: "\u03C3",
    sigmaf: "\u03C2",
    sigmav: "\u03C2",
    sim: "\u223C",
    simdot: "\u2A6A",
    sime: "\u2243",
    simeq: "\u2243",
    simg: "\u2A9E",
    simgE: "\u2AA0",
    siml: "\u2A9D",
    simlE: "\u2A9F",
    simne: "\u2246",
    simplus: "\u2A24",
    simrarr: "\u2972",
    slarr: "\u2190",
    SmallCircle: "\u2218",
    smallsetminus: "\u2216",
    smashp: "\u2A33",
    smeparsl: "\u29E4",
    smid: "\u2223",
    smile: "\u2323",
    smt: "\u2AAA",
    smte: "\u2AAC",
    smtes: "\u2AAC\uFE00",
    SOFTcy: "\u042C",
    softcy: "\u044C",
    sol: "/",
    solb: "\u29C4",
    solbar: "\u233F",
    Sopf: "\u{1D54A}",
    sopf: "\u{1D564}",
    spades: "\u2660",
    spadesuit: "\u2660",
    spar: "\u2225",
    sqcap: "\u2293",
    sqcaps: "\u2293\uFE00",
    sqcup: "\u2294",
    sqcups: "\u2294\uFE00",
    Sqrt: "\u221A",
    sqsub: "\u228F",
    sqsube: "\u2291",
    sqsubset: "\u228F",
    sqsubseteq: "\u2291",
    sqsup: "\u2290",
    sqsupe: "\u2292",
    sqsupset: "\u2290",
    sqsupseteq: "\u2292",
    squ: "\u25A1",
    Square: "\u25A1",
    square: "\u25A1",
    SquareIntersection: "\u2293",
    SquareSubset: "\u228F",
    SquareSubsetEqual: "\u2291",
    SquareSuperset: "\u2290",
    SquareSupersetEqual: "\u2292",
    SquareUnion: "\u2294",
    squarf: "\u25AA",
    squf: "\u25AA",
    srarr: "\u2192",
    Sscr: "\u{1D4AE}",
    sscr: "\u{1D4C8}",
    ssetmn: "\u2216",
    ssmile: "\u2323",
    sstarf: "\u22C6",
    Star: "\u22C6",
    star: "\u2606",
    starf: "\u2605",
    straightepsilon: "\u03F5",
    straightphi: "\u03D5",
    strns: "\xAF",
    Sub: "\u22D0",
    sub: "\u2282",
    subdot: "\u2ABD",
    subE: "\u2AC5",
    sube: "\u2286",
    subedot: "\u2AC3",
    submult: "\u2AC1",
    subnE: "\u2ACB",
    subne: "\u228A",
    subplus: "\u2ABF",
    subrarr: "\u2979",
    Subset: "\u22D0",
    subset: "\u2282",
    subseteq: "\u2286",
    subseteqq: "\u2AC5",
    SubsetEqual: "\u2286",
    subsetneq: "\u228A",
    subsetneqq: "\u2ACB",
    subsim: "\u2AC7",
    subsub: "\u2AD5",
    subsup: "\u2AD3",
    succ: "\u227B",
    succapprox: "\u2AB8",
    succcurlyeq: "\u227D",
    Succeeds: "\u227B",
    SucceedsEqual: "\u2AB0",
    SucceedsSlantEqual: "\u227D",
    SucceedsTilde: "\u227F",
    succeq: "\u2AB0",
    succnapprox: "\u2ABA",
    succneqq: "\u2AB6",
    succnsim: "\u22E9",
    succsim: "\u227F",
    SuchThat: "\u220B",
    Sum: "\u2211",
    sum: "\u2211",
    sung: "\u266A",
    Sup: "\u22D1",
    sup: "\u2283",
    sup1: "\xB9",
    sup2: "\xB2",
    sup3: "\xB3",
    supdot: "\u2ABE",
    supdsub: "\u2AD8",
    supE: "\u2AC6",
    supe: "\u2287",
    supedot: "\u2AC4",
    Superset: "\u2283",
    SupersetEqual: "\u2287",
    suphsol: "\u27C9",
    suphsub: "\u2AD7",
    suplarr: "\u297B",
    supmult: "\u2AC2",
    supnE: "\u2ACC",
    supne: "\u228B",
    supplus: "\u2AC0",
    Supset: "\u22D1",
    supset: "\u2283",
    supseteq: "\u2287",
    supseteqq: "\u2AC6",
    supsetneq: "\u228B",
    supsetneqq: "\u2ACC",
    supsim: "\u2AC8",
    supsub: "\u2AD4",
    supsup: "\u2AD6",
    swarhk: "\u2926",
    swArr: "\u21D9",
    swarr: "\u2199",
    swarrow: "\u2199",
    swnwar: "\u292A",
    szlig: "\xDF",
    Tab: "	",
    target: "\u2316",
    Tau: "\u03A4",
    tau: "\u03C4",
    tbrk: "\u23B4",
    Tcaron: "\u0164",
    tcaron: "\u0165",
    Tcedil: "\u0162",
    tcedil: "\u0163",
    Tcy: "\u0422",
    tcy: "\u0442",
    tdot: "\u20DB",
    telrec: "\u2315",
    Tfr: "\u{1D517}",
    tfr: "\u{1D531}",
    there4: "\u2234",
    Therefore: "\u2234",
    therefore: "\u2234",
    Theta: "\u0398",
    theta: "\u03B8",
    thetasym: "\u03D1",
    thetav: "\u03D1",
    thickapprox: "\u2248",
    thicksim: "\u223C",
    ThickSpace: "\u205F\u200A",
    thinsp: "\u2009",
    ThinSpace: "\u2009",
    thkap: "\u2248",
    thksim: "\u223C",
    THORN: "\xDE",
    thorn: "\xFE",
    Tilde: "\u223C",
    tilde: "\u02DC",
    TildeEqual: "\u2243",
    TildeFullEqual: "\u2245",
    TildeTilde: "\u2248",
    times: "\xD7",
    timesb: "\u22A0",
    timesbar: "\u2A31",
    timesd: "\u2A30",
    tint: "\u222D",
    toea: "\u2928",
    top: "\u22A4",
    topbot: "\u2336",
    topcir: "\u2AF1",
    Topf: "\u{1D54B}",
    topf: "\u{1D565}",
    topfork: "\u2ADA",
    tosa: "\u2929",
    tprime: "\u2034",
    TRADE: "\u2122",
    trade: "\u2122",
    triangle: "\u25B5",
    triangledown: "\u25BF",
    triangleleft: "\u25C3",
    trianglelefteq: "\u22B4",
    triangleq: "\u225C",
    triangleright: "\u25B9",
    trianglerighteq: "\u22B5",
    tridot: "\u25EC",
    trie: "\u225C",
    triminus: "\u2A3A",
    TripleDot: "\u20DB",
    triplus: "\u2A39",
    trisb: "\u29CD",
    tritime: "\u2A3B",
    trpezium: "\u23E2",
    Tscr: "\u{1D4AF}",
    tscr: "\u{1D4C9}",
    TScy: "\u0426",
    tscy: "\u0446",
    TSHcy: "\u040B",
    tshcy: "\u045B",
    Tstrok: "\u0166",
    tstrok: "\u0167",
    twixt: "\u226C",
    twoheadleftarrow: "\u219E",
    twoheadrightarrow: "\u21A0",
    Uacute: "\xDA",
    uacute: "\xFA",
    Uarr: "\u219F",
    uArr: "\u21D1",
    uarr: "\u2191",
    Uarrocir: "\u2949",
    Ubrcy: "\u040E",
    ubrcy: "\u045E",
    Ubreve: "\u016C",
    ubreve: "\u016D",
    Ucirc: "\xDB",
    ucirc: "\xFB",
    Ucy: "\u0423",
    ucy: "\u0443",
    udarr: "\u21C5",
    Udblac: "\u0170",
    udblac: "\u0171",
    udhar: "\u296E",
    ufisht: "\u297E",
    Ufr: "\u{1D518}",
    ufr: "\u{1D532}",
    Ugrave: "\xD9",
    ugrave: "\xF9",
    uHar: "\u2963",
    uharl: "\u21BF",
    uharr: "\u21BE",
    uhblk: "\u2580",
    ulcorn: "\u231C",
    ulcorner: "\u231C",
    ulcrop: "\u230F",
    ultri: "\u25F8",
    Umacr: "\u016A",
    umacr: "\u016B",
    uml: "\xA8",
    UnderBar: "_",
    UnderBrace: "\u23DF",
    UnderBracket: "\u23B5",
    UnderParenthesis: "\u23DD",
    Union: "\u22C3",
    UnionPlus: "\u228E",
    Uogon: "\u0172",
    uogon: "\u0173",
    Uopf: "\u{1D54C}",
    uopf: "\u{1D566}",
    UpArrow: "\u2191",
    Uparrow: "\u21D1",
    uparrow: "\u2191",
    UpArrowBar: "\u2912",
    UpArrowDownArrow: "\u21C5",
    UpDownArrow: "\u2195",
    Updownarrow: "\u21D5",
    updownarrow: "\u2195",
    UpEquilibrium: "\u296E",
    upharpoonleft: "\u21BF",
    upharpoonright: "\u21BE",
    uplus: "\u228E",
    UpperLeftArrow: "\u2196",
    UpperRightArrow: "\u2197",
    Upsi: "\u03D2",
    upsi: "\u03C5",
    upsih: "\u03D2",
    Upsilon: "\u03A5",
    upsilon: "\u03C5",
    UpTee: "\u22A5",
    UpTeeArrow: "\u21A5",
    upuparrows: "\u21C8",
    urcorn: "\u231D",
    urcorner: "\u231D",
    urcrop: "\u230E",
    Uring: "\u016E",
    uring: "\u016F",
    urtri: "\u25F9",
    Uscr: "\u{1D4B0}",
    uscr: "\u{1D4CA}",
    utdot: "\u22F0",
    Utilde: "\u0168",
    utilde: "\u0169",
    utri: "\u25B5",
    utrif: "\u25B4",
    uuarr: "\u21C8",
    Uuml: "\xDC",
    uuml: "\xFC",
    uwangle: "\u29A7",
    vangrt: "\u299C",
    varepsilon: "\u03F5",
    varkappa: "\u03F0",
    varnothing: "\u2205",
    varphi: "\u03D5",
    varpi: "\u03D6",
    varpropto: "\u221D",
    vArr: "\u21D5",
    varr: "\u2195",
    varrho: "\u03F1",
    varsigma: "\u03C2",
    varsubsetneq: "\u228A\uFE00",
    varsubsetneqq: "\u2ACB\uFE00",
    varsupsetneq: "\u228B\uFE00",
    varsupsetneqq: "\u2ACC\uFE00",
    vartheta: "\u03D1",
    vartriangleleft: "\u22B2",
    vartriangleright: "\u22B3",
    Vbar: "\u2AEB",
    vBar: "\u2AE8",
    vBarv: "\u2AE9",
    Vcy: "\u0412",
    vcy: "\u0432",
    VDash: "\u22AB",
    Vdash: "\u22A9",
    vDash: "\u22A8",
    vdash: "\u22A2",
    Vdashl: "\u2AE6",
    Vee: "\u22C1",
    vee: "\u2228",
    veebar: "\u22BB",
    veeeq: "\u225A",
    vellip: "\u22EE",
    Verbar: "\u2016",
    verbar: "|",
    Vert: "\u2016",
    vert: "|",
    VerticalBar: "\u2223",
    VerticalLine: "|",
    VerticalSeparator: "\u2758",
    VerticalTilde: "\u2240",
    VeryThinSpace: "\u200A",
    Vfr: "\u{1D519}",
    vfr: "\u{1D533}",
    vltri: "\u22B2",
    vnsub: "\u2282\u20D2",
    vnsup: "\u2283\u20D2",
    Vopf: "\u{1D54D}",
    vopf: "\u{1D567}",
    vprop: "\u221D",
    vrtri: "\u22B3",
    Vscr: "\u{1D4B1}",
    vscr: "\u{1D4CB}",
    vsubnE: "\u2ACB\uFE00",
    vsubne: "\u228A\uFE00",
    vsupnE: "\u2ACC\uFE00",
    vsupne: "\u228B\uFE00",
    Vvdash: "\u22AA",
    vzigzag: "\u299A",
    Wcirc: "\u0174",
    wcirc: "\u0175",
    wedbar: "\u2A5F",
    Wedge: "\u22C0",
    wedge: "\u2227",
    wedgeq: "\u2259",
    weierp: "\u2118",
    Wfr: "\u{1D51A}",
    wfr: "\u{1D534}",
    Wopf: "\u{1D54E}",
    wopf: "\u{1D568}",
    wp: "\u2118",
    wr: "\u2240",
    wreath: "\u2240",
    Wscr: "\u{1D4B2}",
    wscr: "\u{1D4CC}",
    xcap: "\u22C2",
    xcirc: "\u25EF",
    xcup: "\u22C3",
    xdtri: "\u25BD",
    Xfr: "\u{1D51B}",
    xfr: "\u{1D535}",
    xhArr: "\u27FA",
    xharr: "\u27F7",
    Xi: "\u039E",
    xi: "\u03BE",
    xlArr: "\u27F8",
    xlarr: "\u27F5",
    xmap: "\u27FC",
    xnis: "\u22FB",
    xodot: "\u2A00",
    Xopf: "\u{1D54F}",
    xopf: "\u{1D569}",
    xoplus: "\u2A01",
    xotime: "\u2A02",
    xrArr: "\u27F9",
    xrarr: "\u27F6",
    Xscr: "\u{1D4B3}",
    xscr: "\u{1D4CD}",
    xsqcup: "\u2A06",
    xuplus: "\u2A04",
    xutri: "\u25B3",
    xvee: "\u22C1",
    xwedge: "\u22C0",
    Yacute: "\xDD",
    yacute: "\xFD",
    YAcy: "\u042F",
    yacy: "\u044F",
    Ycirc: "\u0176",
    ycirc: "\u0177",
    Ycy: "\u042B",
    ycy: "\u044B",
    yen: "\xA5",
    Yfr: "\u{1D51C}",
    yfr: "\u{1D536}",
    YIcy: "\u0407",
    yicy: "\u0457",
    Yopf: "\u{1D550}",
    yopf: "\u{1D56A}",
    Yscr: "\u{1D4B4}",
    yscr: "\u{1D4CE}",
    YUcy: "\u042E",
    yucy: "\u044E",
    Yuml: "\u0178",
    yuml: "\xFF",
    Zacute: "\u0179",
    zacute: "\u017A",
    Zcaron: "\u017D",
    zcaron: "\u017E",
    Zcy: "\u0417",
    zcy: "\u0437",
    Zdot: "\u017B",
    zdot: "\u017C",
    zeetrf: "\u2128",
    ZeroWidthSpace: "\u200B",
    Zeta: "\u0396",
    zeta: "\u03B6",
    Zfr: "\u2128",
    zfr: "\u{1D537}",
    ZHcy: "\u0416",
    zhcy: "\u0436",
    zigrarr: "\u21DD",
    Zopf: "\u2124",
    zopf: "\u{1D56B}",
    Zscr: "\u{1D4B5}",
    zscr: "\u{1D4CF}",
    zwj: "\u200D",
    zwnj: "\u200C",
  });
  $n.entityMap = $n.HTML_ENTITIES;
});
var H_ = Ot((pu) => {
  var Nn = An().NAMESPACE,
    mu =
      /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    U_ = new RegExp(
      "[\\-\\.0-9" +
        mu.source.slice(1, -1) +
        "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]",
    ),
    F_ = new RegExp(
      "^" + mu.source + U_.source + "*(?::" + mu.source + U_.source + "*)?$",
    ),
    zn = 0,
    Ft = 1,
    Er = 2,
    On = 3,
    Tr = 4,
    kr = 5,
    Rn = 6,
    wo = 7;
  function Ir(e, t) {
    ((this.message = e),
      (this.locator = t),
      Error.captureStackTrace && Error.captureStackTrace(this, Ir));
  }
  Ir.prototype = new Error();
  Ir.prototype.name = Ir.name;
  function B_() {}
  B_.prototype = {
    parse: function (e, t, n) {
      var i = this.domBuilder;
      (i.startDocument(),
        V_(t, (t = {})),
        nw(e, t, n, i, this.errorHandler),
        i.endDocument());
    },
  };
  function nw(e, t, n, i, r) {
    function o(W) {
      if (W > 65535) {
        W -= 65536;
        var J = 55296 + (W >> 10),
          zi = 56320 + (W & 1023);
        return String.fromCharCode(J, zi);
      } else return String.fromCharCode(W);
    }
    function a(W) {
      var J = W.slice(1, -1);
      return Object.hasOwnProperty.call(n, J)
        ? n[J]
        : J.charAt(0) === "#"
          ? o(parseInt(J.substr(1).replace("x", "0x")))
          : (r.error("entity not found:" + W), W);
    }
    function u(W) {
      if (W > m) {
        var J = e.substring(m, W).replace(/&#?\w+;/g, a);
        (f && s(m), i.characters(J, 0, W - m), (m = W));
      }
    }
    function s(W, J) {
      for (; W >= c && (J = d.exec(e)); )
        ((l = J.index), (c = l + J[0].length), f.lineNumber++);
      f.columnNumber = W - l + 1;
    }
    for (
      var l = 0,
        c = 0,
        d = /.*(?:\r\n?|\n)|.*$/g,
        f = i.locator,
        _ = [{ currentNSMap: t }],
        g = {},
        m = 0;
      ;
    ) {
      try {
        var A = e.indexOf("<", m);
        if (A < 0) {
          if (!e.substr(m).match(/^\s*$/)) {
            var I = i.doc,
              w = I.createTextNode(e.substr(m));
            (I.appendChild(w), (i.currentElement = w));
          }
          return;
        }
        switch ((A > m && u(A), e.charAt(A + 1))) {
          case "/":
            var C = e.indexOf(">", A + 3),
              y = e.substring(A + 2, C).replace(/[ \t\n\r]+$/g, ""),
              b = _.pop();
            C < 0
              ? ((y = e.substring(A + 2).replace(/[\s<].*/, "")),
                r.error("end tag name: " + y + " is not complete:" + b.tagName),
                (C = A + 1 + y.length))
              : y.match(/\s</) &&
                ((y = y.replace(/[\s<].*/, "")),
                r.error("end tag name: " + y + " maybe not complete"),
                (C = A + 1 + y.length));
            var E = b.localNSMap,
              P = b.tagName == y,
              T =
                P || (b.tagName && b.tagName.toLowerCase() == y.toLowerCase());
            if (T) {
              if ((i.endElement(b.uri, b.localName, y), E))
                for (var F in E)
                  Object.prototype.hasOwnProperty.call(E, F) &&
                    i.endPrefixMapping(F);
              P ||
                r.fatalError(
                  "end tag name: " +
                    y +
                    " is not match the current start tagName:" +
                    b.tagName,
                );
            } else _.push(b);
            C++;
            break;
          case "?":
            (f && s(A), (C = uw(e, A, i)));
            break;
          case "!":
            (f && s(A), (C = sw(e, A, i, r)));
            break;
          default:
            f && s(A);
            var U = new q_(),
              H = _[_.length - 1].currentNSMap,
              C = iw(e, A, U, H, a, r),
              ne = U.length;
            if (
              (!U.closed &&
                aw(e, C, U.tagName, g) &&
                ((U.closed = !0),
                n.nbsp || r.warning("unclosed xml attribute")),
              f && ne)
            ) {
              for (var re = j_(f, {}), me = 0; me < ne; me++) {
                var Ue = U[me];
                (s(Ue.offset), (Ue.locator = j_(f, {})));
              }
              ((i.locator = re), L_(U, i, H) && _.push(U), (i.locator = f));
            } else L_(U, i, H) && _.push(U);
            Nn.isHTML(U.uri) && !U.closed
              ? (C = ow(e, C, U.tagName, a, i))
              : C++;
        }
      } catch (W) {
        if (W instanceof Ir) throw W;
        (r.error("element parse error: " + W), (C = -1));
      }
      C > m ? (m = C) : u(Math.max(A, m) + 1);
    }
  }
  function j_(e, t) {
    return (
      (t.lineNumber = e.lineNumber),
      (t.columnNumber = e.columnNumber),
      t
    );
  }
  function iw(e, t, n, i, r, o) {
    function a(_, g, m) {
      (n.attributeNames.hasOwnProperty(_) &&
        o.fatalError("Attribute " + _ + " redefined"),
        n.addValue(_, g.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, r), m));
    }
    for (var u, s, l = ++t, c = zn; ; ) {
      var d = e.charAt(l);
      switch (d) {
        case "=":
          if (c === Ft) ((u = e.slice(t, l)), (c = On));
          else if (c === Er) c = On;
          else throw new Error("attribute equal must after attrName");
          break;
        case "'":
        case '"':
          if (c === On || c === Ft)
            if (
              (c === Ft &&
                (o.warning('attribute value must after "="'),
                (u = e.slice(t, l))),
              (t = l + 1),
              (l = e.indexOf(d, t)),
              l > 0)
            )
              ((s = e.slice(t, l)), a(u, s, t - 1), (c = kr));
            else throw new Error("attribute value no end '" + d + "' match");
          else if (c == Tr)
            ((s = e.slice(t, l)),
              a(u, s, t),
              o.warning('attribute "' + u + '" missed start quot(' + d + ")!!"),
              (t = l + 1),
              (c = kr));
          else throw new Error('attribute value must after "="');
          break;
        case "/":
          switch (c) {
            case zn:
              n.setTagName(e.slice(t, l));
            case kr:
            case Rn:
            case wo:
              ((c = wo), (n.closed = !0));
            case Tr:
            case Ft:
              break;
            case Er:
              n.closed = !0;
              break;
            default:
              throw new Error("attribute invalid close char('/')");
          }
          break;
        case "":
          return (
            o.error("unexpected end of input"),
            c == zn && n.setTagName(e.slice(t, l)),
            l
          );
        case ">":
          switch (c) {
            case zn:
              n.setTagName(e.slice(t, l));
            case kr:
            case Rn:
            case wo:
              break;
            case Tr:
            case Ft:
              ((s = e.slice(t, l)),
                s.slice(-1) === "/" && ((n.closed = !0), (s = s.slice(0, -1))));
            case Er:
              (c === Er && (s = u),
                c == Tr
                  ? (o.warning('attribute "' + s + '" missed quot(")!'),
                    a(u, s, t))
                  : ((!Nn.isHTML(i[""]) ||
                      !s.match(/^(?:disabled|checked|selected)$/i)) &&
                      o.warning(
                        'attribute "' +
                          s +
                          '" missed value!! "' +
                          s +
                          '" instead!!',
                      ),
                    a(s, s, t)));
              break;
            case On:
              throw new Error("attribute value missed!!");
          }
          return l;
        case "\x80":
          d = " ";
        default:
          if (d <= " ")
            switch (c) {
              case zn:
                (n.setTagName(e.slice(t, l)), (c = Rn));
                break;
              case Ft:
                ((u = e.slice(t, l)), (c = Er));
                break;
              case Tr:
                var s = e.slice(t, l);
                (o.warning('attribute "' + s + '" missed quot(")!!'),
                  a(u, s, t));
              case kr:
                c = Rn;
                break;
            }
          else
            switch (c) {
              case Er:
                var f = n.tagName;
                ((!Nn.isHTML(i[""]) ||
                  !u.match(/^(?:disabled|checked|selected)$/i)) &&
                  o.warning(
                    'attribute "' +
                      u +
                      '" missed value!! "' +
                      u +
                      '" instead2!!',
                  ),
                  a(u, u, t),
                  (t = l),
                  (c = Ft));
                break;
              case kr:
                o.warning('attribute space is required"' + u + '"!!');
              case Rn:
                ((c = Ft), (t = l));
                break;
              case On:
                ((c = Tr), (t = l));
                break;
              case wo:
                throw new Error(
                  "elements closed character '/' and '>' must be connected to",
                );
            }
      }
      l++;
    }
  }
  function L_(e, t, n) {
    for (var i = e.tagName, r = null, d = e.length; d--; ) {
      var o = e[d],
        a = o.qName,
        u = o.value,
        f = a.indexOf(":");
      if (f > 0)
        var s = (o.prefix = a.slice(0, f)),
          l = a.slice(f + 1),
          c = s === "xmlns" && l;
      else ((l = a), (s = null), (c = a === "xmlns" && ""));
      ((o.localName = l),
        c !== !1 &&
          (r == null && ((r = {}), V_(n, (n = {}))),
          (n[c] = r[c] = u),
          (o.uri = Nn.XMLNS),
          t.startPrefixMapping(c, u)));
    }
    for (var d = e.length; d--; ) {
      o = e[d];
      var s = o.prefix;
      s &&
        (s === "xml" && (o.uri = Nn.XML),
        s !== "xmlns" && (o.uri = n[s || ""]));
    }
    var f = i.indexOf(":");
    f > 0
      ? ((s = e.prefix = i.slice(0, f)), (l = e.localName = i.slice(f + 1)))
      : ((s = null), (l = e.localName = i));
    var _ = (e.uri = n[s || ""]);
    if ((t.startElement(_, l, i, e), e.closed)) {
      if ((t.endElement(_, l, i), r))
        for (s in r)
          Object.prototype.hasOwnProperty.call(r, s) && t.endPrefixMapping(s);
    } else return ((e.currentNSMap = n), (e.localNSMap = r), !0);
  }
  function ow(e, t, n, i, r) {
    if (/^(?:script|textarea)$/i.test(n)) {
      var o = e.indexOf("</" + n + ">", t),
        a = e.substring(t + 1, o);
      if (/[&<]/.test(a))
        return /^script$/i.test(n)
          ? (r.characters(a, 0, a.length), o)
          : ((a = a.replace(/&#?\w+;/g, i)), r.characters(a, 0, a.length), o);
    }
    return t + 1;
  }
  function aw(e, t, n, i) {
    var r = i[n];
    return (
      r == null &&
        ((r = e.lastIndexOf("</" + n + ">")),
        r < t && (r = e.lastIndexOf("</" + n)),
        (i[n] = r)),
      r < t
    );
  }
  function V_(e, t) {
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  }
  function sw(e, t, n, i) {
    var r = e.charAt(t + 2);
    switch (r) {
      case "-":
        if (e.charAt(t + 3) === "-") {
          var o = e.indexOf("-->", t + 4);
          return o > t
            ? (n.comment(e, t + 4, o - t - 4), o + 3)
            : (i.error("Unclosed comment"), -1);
        } else return -1;
      default:
        if (e.substr(t + 3, 6) == "CDATA[") {
          var o = e.indexOf("]]>", t + 9);
          return (
            n.startCDATA(),
            n.characters(e, t + 9, o - t - 9),
            n.endCDATA(),
            o + 3
          );
        }
        var a = lw(e, t),
          u = a.length;
        if (u > 1 && /!doctype/i.test(a[0][0])) {
          var s = a[1][0],
            l = !1,
            c = !1;
          u > 3 &&
            (/^public$/i.test(a[2][0])
              ? ((l = a[3][0]), (c = u > 4 && a[4][0]))
              : /^system$/i.test(a[2][0]) && (c = a[3][0]));
          var d = a[u - 1];
          return (n.startDTD(s, l, c), n.endDTD(), d.index + d[0].length);
        }
    }
    return -1;
  }
  function uw(e, t, n) {
    var i = e.indexOf("?>", t);
    if (i) {
      var r = e.substring(t, i).match(/^<\?(\S*)\s*([\s\S]*?)$/);
      if (r) {
        var o = r[0].length;
        return (n.processingInstruction(r[1], r[2]), i + 2);
      } else return -1;
    }
    return -1;
  }
  function q_() {
    this.attributeNames = {};
  }
  q_.prototype = {
    setTagName: function (e) {
      if (!F_.test(e)) throw new Error("invalid tagName:" + e);
      this.tagName = e;
    },
    addValue: function (e, t, n) {
      if (!F_.test(e)) throw new Error("invalid attribute:" + e);
      ((this.attributeNames[e] = this.length),
        (this[this.length++] = { qName: e, value: t, offset: n }));
    },
    length: 0,
    getLocalName: function (e) {
      return this[e].localName;
    },
    getLocator: function (e) {
      return this[e].locator;
    },
    getQName: function (e) {
      return this[e].qName;
    },
    getURI: function (e) {
      return this[e].uri;
    },
    getValue: function (e) {
      return this[e].value;
    },
  };
  function lw(e, t) {
    var n,
      i = [],
      r = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (r.lastIndex = t, r.exec(e); (n = r.exec(e)); )
      if ((i.push(n), n[1])) return i;
  }
  pu.XMLReader = B_;
  pu.ParseError = Ir;
});
var Y_ = Ot((xo) => {
  var cw = An(),
    dw = du(),
    Z_ = C_(),
    Q_ = H_(),
    mw = dw.DOMImplementation,
    G_ = cw.NAMESPACE,
    pw = Q_.ParseError,
    _w = Q_.XMLReader;
  function K_(e) {
    return e
      .replace(
        /\r[\n\u0085]/g,
        `
`,
      )
      .replace(
        /[\r\u0085\u2028]/g,
        `
`,
      );
  }
  function J_(e) {
    this.options = e || { locator: {} };
  }
  J_.prototype.parseFromString = function (e, t) {
    var n = this.options,
      i = new _w(),
      r = n.domBuilder || new Mn(),
      o = n.errorHandler,
      a = n.locator,
      u = n.xmlns || {},
      s = /\/x?html?$/.test(t),
      l = s ? Z_.HTML_ENTITIES : Z_.XML_ENTITIES;
    (a && r.setDocumentLocator(a),
      (i.errorHandler = fw(o, r, a)),
      (i.domBuilder = n.domBuilder || r),
      s && (u[""] = G_.HTML),
      (u.xml = u.xml || G_.XML));
    var c = n.normalizeLineEndings || K_;
    return (
      e && typeof e == "string"
        ? i.parse(c(e), u, l)
        : i.errorHandler.error("invalid doc source"),
      r.doc
    );
  };
  function fw(e, t, n) {
    if (!e) {
      if (t instanceof Mn) return t;
      e = t;
    }
    var i = {},
      r = e instanceof Function;
    n = n || {};
    function o(a) {
      var u = e[a];
      (!u &&
        r &&
        (u =
          e.length == 2
            ? function (s) {
                e(a, s);
              }
            : e),
        (i[a] =
          (u &&
            function (s) {
              u("[xmldom " + a + "]	" + s + _u(n));
            }) ||
          function () {}));
    }
    return (o("warning"), o("error"), o("fatalError"), i);
  }
  function Mn() {
    this.cdata = !1;
  }
  function Pr(e, t) {
    ((t.lineNumber = e.lineNumber), (t.columnNumber = e.columnNumber));
  }
  Mn.prototype = {
    startDocument: function () {
      ((this.doc = new mw().createDocument(null, null, null)),
        this.locator && (this.doc.documentURI = this.locator.systemId));
    },
    startElement: function (e, t, n, i) {
      var r = this.doc,
        o = r.createElementNS(e, n || t),
        a = i.length;
      (So(this, o),
        (this.currentElement = o),
        this.locator && Pr(this.locator, o));
      for (var u = 0; u < a; u++) {
        var e = i.getURI(u),
          s = i.getValue(u),
          n = i.getQName(u),
          l = r.createAttributeNS(e, n);
        (this.locator && Pr(i.getLocator(u), l),
          (l.value = l.nodeValue = s),
          o.setAttributeNode(l));
      }
    },
    endElement: function (e, t, n) {
      var i = this.currentElement,
        r = i.tagName;
      this.currentElement = i.parentNode;
    },
    startPrefixMapping: function (e, t) {},
    endPrefixMapping: function (e) {},
    processingInstruction: function (e, t) {
      var n = this.doc.createProcessingInstruction(e, t);
      (this.locator && Pr(this.locator, n), So(this, n));
    },
    ignorableWhitespace: function (e, t, n) {},
    characters: function (e, t, n) {
      if (((e = W_.apply(this, arguments)), e)) {
        if (this.cdata) var i = this.doc.createCDATASection(e);
        else var i = this.doc.createTextNode(e);
        (this.currentElement
          ? this.currentElement.appendChild(i)
          : /^\s*$/.test(e) && this.doc.appendChild(i),
          this.locator && Pr(this.locator, i));
      }
    },
    skippedEntity: function (e) {},
    endDocument: function () {
      this.doc.normalize();
    },
    setDocumentLocator: function (e) {
      (this.locator = e) && (e.lineNumber = 0);
    },
    comment: function (e, t, n) {
      e = W_.apply(this, arguments);
      var i = this.doc.createComment(e);
      (this.locator && Pr(this.locator, i), So(this, i));
    },
    startCDATA: function () {
      this.cdata = !0;
    },
    endCDATA: function () {
      this.cdata = !1;
    },
    startDTD: function (e, t, n) {
      var i = this.doc.implementation;
      if (i && i.createDocumentType) {
        var r = i.createDocumentType(e, t, n);
        (this.locator && Pr(this.locator, r),
          So(this, r),
          (this.doc.doctype = r));
      }
    },
    warning: function (e) {
      console.warn("[xmldom warning]	" + e, _u(this.locator));
    },
    error: function (e) {
      console.error("[xmldom error]	" + e, _u(this.locator));
    },
    fatalError: function (e) {
      throw new pw(e, this.locator);
    },
  };
  function _u(e) {
    if (e)
      return (
        `
@` +
        (e.systemId || "") +
        "#[line:" +
        e.lineNumber +
        ",col:" +
        e.columnNumber +
        "]"
      );
  }
  function W_(e, t, n) {
    return typeof e == "string"
      ? e.substr(t, n)
      : e.length >= t + n || t
        ? new java.lang.String(e, t, n) + ""
        : e;
  }
  "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(
    /\w+/g,
    function (e) {
      Mn.prototype[e] = function () {
        return null;
      };
    },
  );
  function So(e, t) {
    e.currentElement ? e.currentElement.appendChild(t) : e.doc.appendChild(t);
  }
  xo.__DOMHandler = Mn;
  xo.normalizeLineEndings = K_;
  xo.DOMParser = J_;
});
var ef = Ot((Do) => {
  var X_ = du();
  Do.DOMImplementation = X_.DOMImplementation;
  Do.XMLSerializer = X_.XMLSerializer;
  Do.DOMParser = Y_().DOMParser;
});
var ur,
  vm,
  ss,
  lr,
  Ai,
  us = ft(() => {
    ((ur = {
      JS_EVAL_TYPE_GLOBAL: 0,
      JS_EVAL_TYPE_MODULE: 1,
      JS_EVAL_TYPE_DIRECT: 2,
      JS_EVAL_TYPE_INDIRECT: 3,
      JS_EVAL_TYPE_MASK: 3,
      JS_EVAL_FLAG_STRICT: 8,
      JS_EVAL_FLAG_STRIP: 16,
      JS_EVAL_FLAG_COMPILE_ONLY: 32,
      JS_EVAL_FLAG_BACKTRACE_BARRIER: 64,
    }),
      (vm = {
        BaseObjects: 1,
        Date: 2,
        Eval: 4,
        StringNormalize: 8,
        RegExp: 16,
        RegExpCompiler: 32,
        JSON: 64,
        Proxy: 128,
        MapSet: 256,
        TypedArrays: 512,
        Promise: 1024,
        BigInt: 2048,
        BigFloat: 4096,
        BigDecimal: 8192,
        OperatorOverloading: 16384,
        BignumExt: 32768,
      }),
      (ss = { Pending: 0, Fulfilled: 1, Rejected: 2 }),
      (lr = {
        JS_GPN_STRING_MASK: 1,
        JS_GPN_SYMBOL_MASK: 2,
        JS_GPN_PRIVATE_MASK: 4,
        JS_GPN_ENUM_ONLY: 16,
        JS_GPN_SET_ENUM: 32,
        QTS_GPN_NUMBER_MASK: 64,
        QTS_STANDARD_COMPLIANT_NUMBER: 128,
      }),
      (Ai = { IsStrictlyEqual: 0, IsSameValue: 1, IsSameValueZero: 2 }));
  });
function Ei(...e) {
  xm && console.log("quickjs-emscripten:", ...e);
}
function* Rv(e) {
  return yield e;
}
function Nx(e) {
  return Rv(Am(e));
}
function Dv(e, t) {
  return (...n) => {
    let i = t.call(e, Dm, ...n);
    return Am(i);
  };
}
function Mx(e, t) {
  let n = t.call(e, Dm);
  return Am(n);
}
function Am(e) {
  function t(n) {
    return n.done
      ? n.value
      : n.value instanceof Promise
        ? n.value.then(
            (i) => t(e.next(i)),
            (i) => t(e.throw(i)),
          )
        : t(e.next(n.value));
  }
  return t(e.next());
}
function ym(e, t) {
  let n;
  try {
    e.dispose();
  } catch (i) {
    n = i;
  }
  if (t && n)
    throw (
      Object.assign(t, {
        message: `${t.message}
 Then, failed to dispose scope: ${n.message}`,
        disposeError: n,
      }),
      t
    );
  if (t || n) throw t || n;
}
function Cx(e) {
  let t = e ? Array.from(e) : [];
  function n() {
    return t.forEach((r) => (r.alive ? r.dispose() : void 0));
  }
  function i() {
    return t.some((r) => r.alive);
  }
  return (
    Object.defineProperty(t, Sm, {
      configurable: !0,
      enumerable: !1,
      value: n,
    }),
    Object.defineProperty(t, "dispose", {
      configurable: !0,
      enumerable: !1,
      value: n,
    }),
    Object.defineProperty(t, "alive", {
      configurable: !0,
      enumerable: !1,
      get: i,
    }),
    t
  );
}
function cs(e) {
  return !!(
    e &&
    (typeof e == "object" || typeof e == "function") &&
    "alive" in e &&
    typeof e.alive == "boolean" &&
    "dispose" in e &&
    typeof e.dispose == "function"
  );
}
function Lx(e) {
  if (!e) return 0;
  let t = 0;
  for (let [n, i] of Object.entries(e)) {
    if (!(n in vm)) throw new $v(n);
    i && (t |= vm[n]);
  }
  return t;
}
function Bx(e) {
  if (typeof e == "number") return e;
  if (e === void 0) return 0;
  let { type: t, strict: n, strip: i, compileOnly: r, backtraceBarrier: o } = e,
    a = 0;
  return (
    t === "global" && (a |= ur.JS_EVAL_TYPE_GLOBAL),
    t === "module" && (a |= ur.JS_EVAL_TYPE_MODULE),
    n && (a |= ur.JS_EVAL_FLAG_STRICT),
    i && (a |= ur.JS_EVAL_FLAG_STRIP),
    r && (a |= ur.JS_EVAL_FLAG_COMPILE_ONLY),
    o && (a |= ur.JS_EVAL_FLAG_BACKTRACE_BARRIER),
    a
  );
}
function Vx(e) {
  if (typeof e == "number") return e;
  if (e === void 0) return 0;
  let {
      strings: t,
      symbols: n,
      quickjsPrivate: i,
      onlyEnumerable: r,
      numbers: o,
      numbersAsStrings: a,
    } = e,
    u = 0;
  return (
    t && (u |= lr.JS_GPN_STRING_MASK),
    n && (u |= lr.JS_GPN_SYMBOL_MASK),
    i && (u |= lr.JS_GPN_PRIVATE_MASK),
    r && (u |= lr.JS_GPN_ENUM_ONLY),
    o && (u |= lr.QTS_GPN_NUMBER_MASK),
    a && (u |= lr.QTS_STANDARD_COMPLIANT_NUMBER),
    u
  );
}
function qx(...e) {
  let t = [];
  for (let n of e) n !== void 0 && (t = t.concat(n));
  return t;
}
function km(e, t) {
  (t.interruptHandler && e.setInterruptHandler(t.interruptHandler),
    t.maxStackSizeBytes !== void 0 && e.setMaxStackSize(t.maxStackSizeBytes),
    t.memoryLimitBytes !== void 0 && e.setMemoryLimit(t.memoryLimitBytes));
}
function Im(e, t) {
  (t.moduleLoader && e.setModuleLoader(t.moduleLoader),
    t.shouldInterrupt && e.setInterruptHandler(t.shouldInterrupt),
    t.memoryLimitBytes !== void 0 && e.setMemoryLimit(t.memoryLimitBytes),
    t.maxStackSizeBytes !== void 0 && e.setMaxStackSize(t.maxStackSizeBytes));
}
var Px,
  $x,
  xm,
  zx,
  bm,
  Tv,
  wm,
  kv,
  Iv,
  Pv,
  Ox,
  Rx,
  $v,
  zv,
  Ov,
  Dm,
  Zt,
  Sm,
  Av,
  Ce,
  cr,
  Ev,
  mt,
  Em,
  Ux,
  Fx,
  an,
  jx,
  Cv,
  EP,
  TP,
  Hx,
  Zx,
  Gx,
  Wx,
  Qx,
  Tm,
  Uv,
  Fv = ft(() => {
    us();
    us();
    ((Px = Object.defineProperty),
      ($x = (e, t) => {
        for (var n in t) Px(e, n, { get: t[n], enumerable: !0 });
      }),
      (xm = !1));
    zx = {};
    $x(zx, {
      QuickJSAsyncifyError: () => Iv,
      QuickJSAsyncifySuspended: () => Pv,
      QuickJSEmptyGetOwnPropertyNames: () => Ov,
      QuickJSEmscriptenModuleError: () => Rx,
      QuickJSMemoryLeakDetected: () => Ox,
      QuickJSNotImplemented: () => kv,
      QuickJSPromisePending: () => zv,
      QuickJSUnknownIntrinsic: () => $v,
      QuickJSUnwrapError: () => bm,
      QuickJSUseAfterFree: () => wm,
      QuickJSWrongOwner: () => Tv,
    });
    ((bm = class extends Error {
      constructor(e, t) {
        let n =
          typeof e == "object" && e && "message" in e
            ? String(e.message)
            : String(e);
        (super(n),
          (this.cause = e),
          (this.context = t),
          (this.name = "QuickJSUnwrapError"));
      }
    }),
      (Tv = class extends Error {
        constructor() {
          (super(...arguments), (this.name = "QuickJSWrongOwner"));
        }
      }),
      (wm = class extends Error {
        constructor() {
          (super(...arguments), (this.name = "QuickJSUseAfterFree"));
        }
      }),
      (kv = class extends Error {
        constructor() {
          (super(...arguments), (this.name = "QuickJSNotImplemented"));
        }
      }),
      (Iv = class extends Error {
        constructor() {
          (super(...arguments), (this.name = "QuickJSAsyncifyError"));
        }
      }),
      (Pv = class extends Error {
        constructor() {
          (super(...arguments), (this.name = "QuickJSAsyncifySuspended"));
        }
      }),
      (Ox = class extends Error {
        constructor() {
          (super(...arguments), (this.name = "QuickJSMemoryLeakDetected"));
        }
      }),
      (Rx = class extends Error {
        constructor() {
          (super(...arguments), (this.name = "QuickJSEmscriptenModuleError"));
        }
      }),
      ($v = class extends TypeError {
        constructor() {
          (super(...arguments), (this.name = "QuickJSUnknownIntrinsic"));
        }
      }),
      (zv = class extends Error {
        constructor() {
          (super(...arguments), (this.name = "QuickJSPromisePending"));
        }
      }),
      (Ov = class extends Error {
        constructor() {
          (super(...arguments),
            (this.name = "QuickJSEmptyGetOwnPropertyNames"));
        }
      }));
    Dm = Rv;
    Dm.of = Nx;
    ((Zt = class {
      [Symbol.dispose]() {
        return this.dispose();
      }
    }),
      (Sm = Symbol.dispose ?? Symbol.for("Symbol.dispose")),
      (Av = Zt.prototype));
    Av[Sm] ||
      (Av[Sm] = function () {
        return this.dispose();
      });
    ((Ce = class Nv extends Zt {
      constructor(t, n, i, r) {
        (super(),
          (this._value = t),
          (this.copier = n),
          (this.disposer = i),
          (this._owner = r),
          (this._alive = !0),
          (this._constructorStack = xm
            ? new Error("Lifetime constructed").stack
            : void 0));
      }
      get alive() {
        return this._alive;
      }
      get value() {
        return (this.assertAlive(), this._value);
      }
      get owner() {
        return this._owner;
      }
      get dupable() {
        return !!this.copier;
      }
      dup() {
        if ((this.assertAlive(), !this.copier))
          throw new Error("Non-dupable lifetime");
        return new Nv(
          this.copier(this._value),
          this.copier,
          this.disposer,
          this._owner,
        );
      }
      consume(t) {
        this.assertAlive();
        let n = t(this);
        return (this.dispose(), n);
      }
      map(t) {
        return (this.assertAlive(), t(this));
      }
      tap(t) {
        return (t(this), this);
      }
      dispose() {
        (this.assertAlive(),
          this.disposer && this.disposer(this._value),
          (this._alive = !1));
      }
      assertAlive() {
        if (!this.alive)
          throw this._constructorStack
            ? new wm(`Lifetime not alive
${this._constructorStack}
Lifetime used`)
            : new wm("Lifetime not alive");
      }
    }),
      (cr = class extends Ce {
        constructor(e, t) {
          super(e, void 0, void 0, t);
        }
        get dupable() {
          return !0;
        }
        dup() {
          return this;
        }
        dispose() {}
      }),
      (Ev = class extends Ce {
        constructor(e, t, n, i) {
          super(e, t, n, i);
        }
        dispose() {
          this._alive = !1;
        }
      }));
    mt = class ls extends Zt {
      constructor() {
        (super(...arguments),
          (this._disposables = new Ce(new Set())),
          (this.manage = (t) => (this._disposables.value.add(t), t)));
      }
      static withScope(t) {
        let n = new ls(),
          i;
        try {
          return t(n);
        } catch (r) {
          throw ((i = r), r);
        } finally {
          ym(n, i);
        }
      }
      static withScopeMaybeAsync(t, n) {
        return Mx(void 0, function* (i) {
          let r = new ls(),
            o;
          try {
            return yield* i.of(n.call(t, i, r));
          } catch (a) {
            throw ((o = a), a);
          } finally {
            ym(r, o);
          }
        });
      }
      static async withScopeAsync(t) {
        let n = new ls(),
          i;
        try {
          return await t(n);
        } catch (r) {
          throw ((i = r), r);
        } finally {
          ym(n, i);
        }
      }
      get alive() {
        return this._disposables.alive;
      }
      dispose() {
        let t = Array.from(this._disposables.value.values()).reverse();
        for (let n of t) n.alive && n.dispose();
        this._disposables.dispose();
      }
    };
    ((Em = class Mv extends Zt {
      static success(t) {
        return new Ux(t);
      }
      static fail(t, n) {
        return new Fx(t, n);
      }
      static is(t) {
        return t instanceof Mv;
      }
    }),
      (Ux = class extends Em {
        constructor(e) {
          (super(), (this.value = e));
        }
        get alive() {
          return cs(this.value) ? this.value.alive : !0;
        }
        dispose() {
          cs(this.value) && this.value.dispose();
        }
        unwrap() {
          return this.value;
        }
        unwrapOr(e) {
          return this.value;
        }
      }),
      (Fx = class extends Em {
        constructor(e, t) {
          (super(), (this.error = e), (this.onUnwrap = t));
        }
        get alive() {
          return cs(this.error) ? this.error.alive : !0;
        }
        dispose() {
          cs(this.error) && this.error.dispose();
        }
        unwrap() {
          throw (this.onUnwrap(this), this.error);
        }
        unwrapOr(e) {
          return e;
        }
      }),
      (an = Em),
      (jx = class extends Zt {
        constructor(e) {
          (super(),
            (this.resolve = (t) => {
              this.resolveHandle.alive &&
                (this.context
                  .unwrapResult(
                    this.context.callFunction(
                      this.resolveHandle,
                      this.context.undefined,
                      t || this.context.undefined,
                    ),
                  )
                  .dispose(),
                this.disposeResolvers(),
                this.onSettled());
            }),
            (this.reject = (t) => {
              this.rejectHandle.alive &&
                (this.context
                  .unwrapResult(
                    this.context.callFunction(
                      this.rejectHandle,
                      this.context.undefined,
                      t || this.context.undefined,
                    ),
                  )
                  .dispose(),
                this.disposeResolvers(),
                this.onSettled());
            }),
            (this.dispose = () => {
              (this.handle.alive && this.handle.dispose(),
                this.disposeResolvers());
            }),
            (this.context = e.context),
            (this.owner = e.context.runtime),
            (this.handle = e.promiseHandle),
            (this.settled = new Promise((t) => {
              this.onSettled = t;
            })),
            (this.resolveHandle = e.resolveHandle),
            (this.rejectHandle = e.rejectHandle));
        }
        get alive() {
          return (
            this.handle.alive ||
            this.resolveHandle.alive ||
            this.rejectHandle.alive
          );
        }
        disposeResolvers() {
          (this.resolveHandle.alive && this.resolveHandle.dispose(),
            this.rejectHandle.alive && this.rejectHandle.dispose());
        }
      }),
      (Cv = class {
        constructor(e) {
          this.module = e;
        }
        toPointerArray(e) {
          let t = new Int32Array(e.map((r) => r.value)),
            n = t.length * t.BYTES_PER_ELEMENT,
            i = this.module._malloc(n);
          return (
            new Uint8Array(this.module.HEAPU8.buffer, i, n).set(
              new Uint8Array(t.buffer),
            ),
            new Ce(i, void 0, (r) => this.module._free(r))
          );
        }
        newTypedArray(e, t) {
          let n = new e(new Array(t).fill(0)),
            i = n.length * n.BYTES_PER_ELEMENT,
            r = this.module._malloc(i),
            o = new e(this.module.HEAPU8.buffer, r, t);
          return (
            o.set(n),
            new Ce({ typedArray: o, ptr: r }, void 0, (a) =>
              this.module._free(a.ptr),
            )
          );
        }
        newMutablePointerArray(e) {
          return this.newTypedArray(Int32Array, e);
        }
        newHeapCharPointer(e) {
          let t = this.module.lengthBytesUTF8(e),
            n = t + 1,
            i = this.module._malloc(n);
          return (
            this.module.stringToUTF8(e, i, n),
            new Ce({ ptr: i, strlen: t }, void 0, (r) =>
              this.module._free(r.ptr),
            )
          );
        }
        newHeapBufferPointer(e) {
          let t = e.byteLength,
            n = this.module._malloc(t);
          return (
            this.module.HEAPU8.set(e, n),
            new Ce({ pointer: n, numBytes: t }, void 0, (i) =>
              this.module._free(i.pointer),
            )
          );
        }
        consumeHeapCharPointer(e) {
          let t = this.module.UTF8ToString(e);
          return (this.module._free(e), t);
        }
      }),
      (EP = Symbol("Unstable")),
      (TP = Object.freeze({
        BaseObjects: !0,
        Date: !0,
        Eval: !0,
        StringNormalize: !0,
        RegExp: !0,
        JSON: !0,
        Proxy: !0,
        MapSet: !0,
        TypedArrays: !0,
        Promise: !0,
      })));
    ((Hx = class extends Zt {
      constructor(e, t) {
        (super(),
          (this.handle = e),
          (this.context = t),
          (this._isDone = !1),
          (this.owner = t.runtime));
      }
      [Symbol.iterator]() {
        return this;
      }
      next(e) {
        if (!this.alive || this._isDone) return { done: !0, value: void 0 };
        let t =
          this._next ??
          (this._next = this.context.getProp(this.handle, "next"));
        return this.callIteratorMethod(t, e);
      }
      return(e) {
        if (!this.alive) return { done: !0, value: void 0 };
        let t = this.context.getProp(this.handle, "return");
        if (t === this.context.undefined && e === void 0)
          return (this.dispose(), { done: !0, value: void 0 });
        let n = this.callIteratorMethod(t, e);
        return (t.dispose(), this.dispose(), n);
      }
      throw(e) {
        if (!this.alive) return { done: !0, value: void 0 };
        let t = e instanceof Ce ? e : this.context.newError(e),
          n = this.context.getProp(this.handle, "throw"),
          i = this.callIteratorMethod(n, e);
        return (t.alive && t.dispose(), n.dispose(), this.dispose(), i);
      }
      get alive() {
        return this.handle.alive;
      }
      dispose() {
        ((this._isDone = !0), this.handle.dispose(), this._next?.dispose());
      }
      callIteratorMethod(e, t) {
        let n = t
          ? this.context.callFunction(e, this.handle, t)
          : this.context.callFunction(e, this.handle);
        if (n.error) return (this.dispose(), { value: n });
        let i = this.context
          .getProp(n.value, "done")
          .consume((o) => this.context.dump(o));
        if (i)
          return (
            n.value.dispose(),
            this.dispose(),
            { done: i, value: void 0 }
          );
        let r = this.context.getProp(n.value, "value");
        return (n.value.dispose(), { value: an.success(r), done: i });
      }
    }),
      (Zx = class extends Cv {
        constructor(e) {
          (super(e.module),
            (this.scope = new mt()),
            (this.copyJSValue = (t) =>
              this.ffi.QTS_DupValuePointer(this.ctx.value, t)),
            (this.freeJSValue = (t) => {
              this.ffi.QTS_FreeValuePointer(this.ctx.value, t);
            }),
            e.ownedLifetimes?.forEach((t) => this.scope.manage(t)),
            (this.owner = e.owner),
            (this.module = e.module),
            (this.ffi = e.ffi),
            (this.rt = e.rt),
            (this.ctx = this.scope.manage(e.ctx)));
        }
        get alive() {
          return this.scope.alive;
        }
        dispose() {
          return this.scope.dispose();
        }
        [Symbol.dispose]() {
          return this.dispose();
        }
        manage(e) {
          return this.scope.manage(e);
        }
        consumeJSCharPointer(e) {
          let t = this.module.UTF8ToString(e);
          return (this.ffi.QTS_FreeCString(this.ctx.value, e), t);
        }
        heapValueHandle(e) {
          return new Ce(e, this.copyJSValue, this.freeJSValue, this.owner);
        }
        staticHeapValueHandle(e) {
          return (this.manage(this.heapValueHandle(e)), new cr(e, this.owner));
        }
      }),
      (Gx = class extends Zt {
        constructor(e) {
          (super(),
            (this._undefined = void 0),
            (this._null = void 0),
            (this._false = void 0),
            (this._true = void 0),
            (this._global = void 0),
            (this._BigInt = void 0),
            (this._Symbol = void 0),
            (this._SymbolIterator = void 0),
            (this._SymbolAsyncIterator = void 0),
            (this.fnNextId = -32768),
            (this.fnMaps = new Map()),
            (this.cToHostCallbacks = {
              callFunction: (t, n, i, r, o) => {
                if (t !== this.ctx.value)
                  throw new Error(
                    "QuickJSContext instance received C -> JS call with mismatched ctx",
                  );
                let a = this.getFunction(o);
                if (!a)
                  throw new Error(
                    `QuickJSContext had no callback with id ${o}`,
                  );
                return mt.withScopeMaybeAsync(this, function* (u, s) {
                  let l = s.manage(
                      new Ev(
                        n,
                        this.memory.copyJSValue,
                        this.memory.freeJSValue,
                        this.runtime,
                      ),
                    ),
                    c = new Array(i);
                  for (let d = 0; d < i; d++) {
                    let f = this.ffi.QTS_ArgvGetJSValueConstPointer(r, d);
                    c[d] = s.manage(
                      new Ev(
                        f,
                        this.memory.copyJSValue,
                        this.memory.freeJSValue,
                        this.runtime,
                      ),
                    );
                  }
                  try {
                    let d = yield* u(a.apply(l, c));
                    if (d) {
                      if ("error" in d && d.error)
                        throw (
                          this.runtime.debugLog("throw error", d.error),
                          d.error
                        );
                      let f = s.manage(d instanceof Ce ? d : d.value);
                      return this.ffi.QTS_DupValuePointer(
                        this.ctx.value,
                        f.value,
                      );
                    }
                    return 0;
                  } catch (d) {
                    return this.errorToHandle(d).consume((f) =>
                      this.ffi.QTS_Throw(this.ctx.value, f.value),
                    );
                  }
                });
              },
            }),
            (this.runtime = e.runtime),
            (this.module = e.module),
            (this.ffi = e.ffi),
            (this.rt = e.rt),
            (this.ctx = e.ctx),
            (this.memory = new Zx({ ...e, owner: this.runtime })),
            e.callbacks.setContextCallbacks(
              this.ctx.value,
              this.cToHostCallbacks,
            ),
            (this.dump = this.dump.bind(this)),
            (this.getString = this.getString.bind(this)),
            (this.getNumber = this.getNumber.bind(this)),
            (this.resolvePromise = this.resolvePromise.bind(this)),
            (this.uint32Out = this.memory.manage(
              this.memory.newTypedArray(Uint32Array, 1),
            )));
        }
        get alive() {
          return this.memory.alive;
        }
        dispose() {
          this.memory.dispose();
        }
        get undefined() {
          if (this._undefined) return this._undefined;
          let e = this.ffi.QTS_GetUndefined();
          return (this._undefined = new cr(e));
        }
        get null() {
          if (this._null) return this._null;
          let e = this.ffi.QTS_GetNull();
          return (this._null = new cr(e));
        }
        get true() {
          if (this._true) return this._true;
          let e = this.ffi.QTS_GetTrue();
          return (this._true = new cr(e));
        }
        get false() {
          if (this._false) return this._false;
          let e = this.ffi.QTS_GetFalse();
          return (this._false = new cr(e));
        }
        get global() {
          if (this._global) return this._global;
          let e = this.ffi.QTS_GetGlobalObject(this.ctx.value);
          return (
            (this._global = this.memory.staticHeapValueHandle(e)),
            this._global
          );
        }
        newNumber(e) {
          return this.memory.heapValueHandle(
            this.ffi.QTS_NewFloat64(this.ctx.value, e),
          );
        }
        newString(e) {
          let t = this.memory
            .newHeapCharPointer(e)
            .consume((n) =>
              this.ffi.QTS_NewString(this.ctx.value, n.value.ptr),
            );
          return this.memory.heapValueHandle(t);
        }
        newUniqueSymbol(e) {
          let t = (typeof e == "symbol" ? e.description : e) ?? "",
            n = this.memory
              .newHeapCharPointer(t)
              .consume((i) =>
                this.ffi.QTS_NewSymbol(this.ctx.value, i.value.ptr, 0),
              );
          return this.memory.heapValueHandle(n);
        }
        newSymbolFor(e) {
          let t = (typeof e == "symbol" ? e.description : e) ?? "",
            n = this.memory
              .newHeapCharPointer(t)
              .consume((i) =>
                this.ffi.QTS_NewSymbol(this.ctx.value, i.value.ptr, 1),
              );
          return this.memory.heapValueHandle(n);
        }
        getWellKnownSymbol(e) {
          return (
            this._Symbol ??
              (this._Symbol = this.memory.manage(
                this.getProp(this.global, "Symbol"),
              )),
            this.getProp(this._Symbol, e)
          );
        }
        newBigInt(e) {
          if (!this._BigInt) {
            let i = this.getProp(this.global, "BigInt");
            (this.memory.manage(i),
              (this._BigInt = new cr(i.value, this.runtime)));
          }
          let t = this._BigInt,
            n = String(e);
          return this.newString(n).consume((i) =>
            this.unwrapResult(this.callFunction(t, this.undefined, i)),
          );
        }
        newObject(e) {
          e && this.runtime.assertOwned(e);
          let t = e
            ? this.ffi.QTS_NewObjectProto(this.ctx.value, e.value)
            : this.ffi.QTS_NewObject(this.ctx.value);
          return this.memory.heapValueHandle(t);
        }
        newArray() {
          let e = this.ffi.QTS_NewArray(this.ctx.value);
          return this.memory.heapValueHandle(e);
        }
        newArrayBuffer(e) {
          let t = new Uint8Array(e),
            n = this.memory.newHeapBufferPointer(t),
            i = this.ffi.QTS_NewArrayBuffer(
              this.ctx.value,
              n.value.pointer,
              t.length,
            );
          return this.memory.heapValueHandle(i);
        }
        newPromise(e) {
          let t = mt.withScope((n) => {
            let i = n.manage(this.memory.newMutablePointerArray(2)),
              r = this.ffi.QTS_NewPromiseCapability(
                this.ctx.value,
                i.value.ptr,
              ),
              o = this.memory.heapValueHandle(r),
              [a, u] = Array.from(i.value.typedArray).map((s) =>
                this.memory.heapValueHandle(s),
              );
            return new jx({
              context: this,
              promiseHandle: o,
              resolveHandle: a,
              rejectHandle: u,
            });
          });
          return (
            e && typeof e == "function" && (e = new Promise(e)),
            e &&
              Promise.resolve(e).then(t.resolve, (n) =>
                n instanceof Ce
                  ? t.reject(n)
                  : this.newError(n).consume(t.reject),
              ),
            t
          );
        }
        newFunction(e, t) {
          let n = ++this.fnNextId;
          return (
            this.setFunction(n, t),
            this.memory.heapValueHandle(
              this.ffi.QTS_NewFunction(this.ctx.value, n, e),
            )
          );
        }
        newError(e) {
          let t = this.memory.heapValueHandle(
            this.ffi.QTS_NewError(this.ctx.value),
          );
          return (
            e && typeof e == "object"
              ? (e.name !== void 0 &&
                  this.newString(e.name).consume((n) =>
                    this.setProp(t, "name", n),
                  ),
                e.message !== void 0 &&
                  this.newString(e.message).consume((n) =>
                    this.setProp(t, "message", n),
                  ))
              : typeof e == "string"
                ? this.newString(e).consume((n) =>
                    this.setProp(t, "message", n),
                  )
                : e !== void 0 &&
                  this.newString(String(e)).consume((n) =>
                    this.setProp(t, "message", n),
                  ),
            t
          );
        }
        typeof(e) {
          return (
            this.runtime.assertOwned(e),
            this.memory.consumeHeapCharPointer(
              this.ffi.QTS_Typeof(this.ctx.value, e.value),
            )
          );
        }
        getNumber(e) {
          return (
            this.runtime.assertOwned(e),
            this.ffi.QTS_GetFloat64(this.ctx.value, e.value)
          );
        }
        getString(e) {
          return (
            this.runtime.assertOwned(e),
            this.memory.consumeJSCharPointer(
              this.ffi.QTS_GetString(this.ctx.value, e.value),
            )
          );
        }
        getSymbol(e) {
          this.runtime.assertOwned(e);
          let t = this.memory.consumeJSCharPointer(
            this.ffi.QTS_GetSymbolDescriptionOrKey(this.ctx.value, e.value),
          );
          return this.ffi.QTS_IsGlobalSymbol(this.ctx.value, e.value)
            ? Symbol.for(t)
            : Symbol(t);
        }
        getBigInt(e) {
          this.runtime.assertOwned(e);
          let t = this.getString(e);
          return BigInt(t);
        }
        getArrayBuffer(e) {
          this.runtime.assertOwned(e);
          let t = this.ffi.QTS_GetArrayBufferLength(this.ctx.value, e.value),
            n = this.ffi.QTS_GetArrayBuffer(this.ctx.value, e.value);
          if (!n)
            throw new Error("Couldn't allocate memory to get ArrayBuffer");
          return new Ce(this.module.HEAPU8.subarray(n, n + t), void 0, () =>
            this.module._free(n),
          );
        }
        getPromiseState(e) {
          this.runtime.assertOwned(e);
          let t = this.ffi.QTS_PromiseState(this.ctx.value, e.value);
          if (t < 0) return { type: "fulfilled", value: e, notAPromise: !0 };
          if (t === ss.Pending)
            return {
              type: "pending",
              get error() {
                return new zv("Cannot unwrap a pending promise");
              },
            };
          let n = this.ffi.QTS_PromiseResult(this.ctx.value, e.value),
            i = this.memory.heapValueHandle(n);
          if (t === ss.Fulfilled) return { type: "fulfilled", value: i };
          if (t === ss.Rejected) return { type: "rejected", error: i };
          throw (i.dispose(), new Error(`Unknown JSPromiseStateEnum: ${t}`));
        }
        resolvePromise(e) {
          this.runtime.assertOwned(e);
          let t = mt.withScope((n) => {
            let i = n.manage(this.getProp(this.global, "Promise")),
              r = n.manage(this.getProp(i, "resolve"));
            return this.callFunction(r, i, e);
          });
          return t.error
            ? Promise.resolve(t)
            : new Promise((n) => {
                mt.withScope((i) => {
                  let r = i.manage(
                      this.newFunction("resolve", (s) => {
                        n(this.success(s && s.dup()));
                      }),
                    ),
                    o = i.manage(
                      this.newFunction("reject", (s) => {
                        n(this.fail(s && s.dup()));
                      }),
                    ),
                    a = i.manage(t.value),
                    u = i.manage(this.getProp(a, "then"));
                  this.callFunction(u, a, r, o).unwrap().dispose();
                });
              });
        }
        isEqual(e, t, n = Ai.IsStrictlyEqual) {
          if (e === t) return !0;
          (this.runtime.assertOwned(e), this.runtime.assertOwned(t));
          let i = this.ffi.QTS_IsEqual(this.ctx.value, e.value, t.value, n);
          if (i === -1) throw new kv("WASM variant does not expose equality");
          return !!i;
        }
        eq(e, t) {
          return this.isEqual(e, t, Ai.IsStrictlyEqual);
        }
        sameValue(e, t) {
          return this.isEqual(e, t, Ai.IsSameValue);
        }
        sameValueZero(e, t) {
          return this.isEqual(e, t, Ai.IsSameValueZero);
        }
        getProp(e, t) {
          this.runtime.assertOwned(e);
          let n;
          return (
            typeof t == "number" && t >= 0
              ? (n = this.ffi.QTS_GetPropNumber(this.ctx.value, e.value, t))
              : (n = this.borrowPropertyKey(t).consume((i) =>
                  this.ffi.QTS_GetProp(this.ctx.value, e.value, i.value),
                )),
            this.memory.heapValueHandle(n)
          );
        }
        getLength(e) {
          if (
            (this.runtime.assertOwned(e),
            !(
              this.ffi.QTS_GetLength(
                this.ctx.value,
                this.uint32Out.value.ptr,
                e.value,
              ) < 0
            ))
          )
            return this.uint32Out.value.typedArray[0];
        }
        getOwnPropertyNames(e, t = { strings: !0, numbersAsStrings: !0 }) {
          (this.runtime.assertOwned(e), e.value);
          let n = Vx(t);
          if (n === 0)
            throw new Ov("No options set, will return an empty array");
          return mt.withScope((i) => {
            let r = i.manage(this.memory.newMutablePointerArray(1)),
              o = this.ffi.QTS_GetOwnPropertyNames(
                this.ctx.value,
                r.value.ptr,
                this.uint32Out.value.ptr,
                e.value,
                n,
              );
            if (o) return this.fail(this.memory.heapValueHandle(o));
            let a = this.uint32Out.value.typedArray[0],
              u = r.value.typedArray[0],
              s = new Uint32Array(this.module.HEAP8.buffer, u, a),
              l = Array.from(s).map((c) => this.memory.heapValueHandle(c));
            return (
              this.ffi.QTS_FreeVoidPointer(this.ctx.value, u),
              this.success(Cx(l))
            );
          });
        }
        getIterator(e) {
          let t =
            this._SymbolIterator ??
            (this._SymbolIterator = this.memory.manage(
              this.getWellKnownSymbol("iterator"),
            ));
          return mt.withScope((n) => {
            let i = n.manage(this.getProp(e, t)),
              r = this.callFunction(i, e);
            return r.error ? r : this.success(new Hx(r.value, this));
          });
        }
        setProp(e, t, n) {
          (this.runtime.assertOwned(e),
            this.borrowPropertyKey(t).consume((i) =>
              this.ffi.QTS_SetProp(this.ctx.value, e.value, i.value, n.value),
            ));
        }
        defineProp(e, t, n) {
          (this.runtime.assertOwned(e),
            mt.withScope((i) => {
              let r = i.manage(this.borrowPropertyKey(t)),
                o = n.value || this.undefined,
                a = !!n.configurable,
                u = !!n.enumerable,
                s = !!n.value,
                l = n.get
                  ? i.manage(this.newFunction(n.get.name, n.get))
                  : this.undefined,
                c = n.set
                  ? i.manage(this.newFunction(n.set.name, n.set))
                  : this.undefined;
              this.ffi.QTS_DefineProp(
                this.ctx.value,
                e.value,
                r.value,
                o.value,
                l.value,
                c.value,
                a,
                u,
                s,
              );
            }));
        }
        callFunction(e, t, ...n) {
          this.runtime.assertOwned(e);
          let i,
            r = n[0];
          r === void 0 || Array.isArray(r) ? (i = r ?? []) : (i = n);
          let o = this.memory
              .toPointerArray(i)
              .consume((u) =>
                this.ffi.QTS_Call(
                  this.ctx.value,
                  e.value,
                  t.value,
                  i.length,
                  u.value,
                ),
              ),
            a = this.ffi.QTS_ResolveException(this.ctx.value, o);
          return a
            ? (this.ffi.QTS_FreeValuePointer(this.ctx.value, o),
              this.fail(this.memory.heapValueHandle(a)))
            : this.success(this.memory.heapValueHandle(o));
        }
        callMethod(e, t, n = []) {
          return this.getProp(e, t).consume((i) => this.callFunction(i, e, n));
        }
        evalCode(e, t = "eval.js", n) {
          let i = n === void 0 ? 1 : 0,
            r = Bx(n),
            o = this.memory
              .newHeapCharPointer(e)
              .consume((u) =>
                this.ffi.QTS_Eval(
                  this.ctx.value,
                  u.value.ptr,
                  u.value.strlen,
                  t,
                  i,
                  r,
                ),
              ),
            a = this.ffi.QTS_ResolveException(this.ctx.value, o);
          return a
            ? (this.ffi.QTS_FreeValuePointer(this.ctx.value, o),
              this.fail(this.memory.heapValueHandle(a)))
            : this.success(this.memory.heapValueHandle(o));
        }
        throw(e) {
          return this.errorToHandle(e).consume((t) =>
            this.ffi.QTS_Throw(this.ctx.value, t.value),
          );
        }
        borrowPropertyKey(e) {
          return typeof e == "number"
            ? this.newNumber(e)
            : typeof e == "string"
              ? this.newString(e)
              : new cr(e.value, this.runtime);
        }
        getMemory(e) {
          if (e === this.rt.value) return this.memory;
          throw new Error(
            "Private API. Cannot get memory from a different runtime",
          );
        }
        dump(e) {
          this.runtime.assertOwned(e);
          let t = this.typeof(e);
          if (t === "string") return this.getString(e);
          if (t === "number") return this.getNumber(e);
          if (t === "bigint") return this.getBigInt(e);
          if (t === "undefined") return;
          if (t === "symbol") return this.getSymbol(e);
          let n = this.getPromiseState(e);
          if (n.type === "fulfilled" && !n.notAPromise)
            return (
              e.dispose(),
              { type: n.type, value: n.value.consume(this.dump) }
            );
          if (n.type === "pending") return (e.dispose(), { type: n.type });
          if (n.type === "rejected")
            return (
              e.dispose(),
              { type: n.type, error: n.error.consume(this.dump) }
            );
          let i = this.memory.consumeJSCharPointer(
            this.ffi.QTS_Dump(this.ctx.value, e.value),
          );
          try {
            return JSON.parse(i);
          } catch {
            return i;
          }
        }
        unwrapResult(e) {
          if (e.error) {
            let t = "context" in e.error ? e.error.context : this,
              n = e.error.consume((i) => this.dump(i));
            if (n && typeof n == "object" && typeof n.message == "string") {
              let { message: i, name: r, stack: o, ...a } = n,
                u = new bm(n, t);
              (typeof r == "string" && (u.name = n.name), (u.message = i));
              let s = u.stack;
              throw (
                typeof o == "string" &&
                  (u.stack = `${r}: ${i}
${n.stack}Host: ${s}`),
                Object.assign(u, a),
                u
              );
            }
            throw new bm(n);
          }
          return e.value;
        }
        [Symbol.for("nodejs.util.inspect.custom")]() {
          return this.alive
            ? `${this.constructor.name} { ctx: ${this.ctx.value} rt: ${this.rt.value} }`
            : `${this.constructor.name} { disposed }`;
        }
        getFunction(e) {
          let t = e >> 8,
            n = this.fnMaps.get(t);
          if (n) return n.get(e);
        }
        setFunction(e, t) {
          let n = e >> 8,
            i = this.fnMaps.get(n);
          return (i || ((i = new Map()), this.fnMaps.set(n, i)), i.set(e, t));
        }
        errorToHandle(e) {
          return e instanceof Ce ? e : this.newError(e);
        }
        encodeBinaryJSON(e) {
          let t = this.ffi.QTS_bjson_encode(this.ctx.value, e.value);
          return this.memory.heapValueHandle(t);
        }
        decodeBinaryJSON(e) {
          let t = this.ffi.QTS_bjson_decode(this.ctx.value, e.value);
          return this.memory.heapValueHandle(t);
        }
        success(e) {
          return an.success(e);
        }
        fail(e) {
          return an.fail(e, (t) => this.unwrapResult(t));
        }
      }),
      (Wx = class extends Zt {
        constructor(e) {
          (super(),
            (this.scope = new mt()),
            (this.contextMap = new Map()),
            (this._debugMode = !1),
            (this.cToHostCallbacks = {
              shouldInterrupt: (t) => {
                if (t !== this.rt.value)
                  throw new Error(
                    "QuickJSContext instance received C -> JS interrupt with mismatched rt",
                  );
                let n = this.interruptHandler;
                if (!n)
                  throw new Error("QuickJSContext had no interrupt handler");
                return n(this) ? 1 : 0;
              },
              loadModuleSource: Dv(this, function* (t, n, i, r) {
                let o = this.moduleLoader;
                if (!o) throw new Error("Runtime has no module loader");
                if (n !== this.rt.value)
                  throw new Error("Runtime pointer mismatch");
                let a =
                  this.contextMap.get(i) ??
                  this.newContext({ contextPointer: i });
                try {
                  let u = yield* t(o(r, a));
                  if (typeof u == "object" && "error" in u && u.error)
                    throw (
                      this.debugLog(
                        "cToHostLoadModule: loader returned error",
                        u.error,
                      ),
                      u.error
                    );
                  let s = typeof u == "string" ? u : "value" in u ? u.value : u;
                  return this.memory.newHeapCharPointer(s).value.ptr;
                } catch (u) {
                  return (
                    this.debugLog("cToHostLoadModule: caught error", u),
                    a.throw(u),
                    0
                  );
                }
              }),
              normalizeModule: Dv(this, function* (t, n, i, r, o) {
                let a = this.moduleNormalizer;
                if (!a) throw new Error("Runtime has no module normalizer");
                if (n !== this.rt.value)
                  throw new Error("Runtime pointer mismatch");
                let u =
                  this.contextMap.get(i) ??
                  this.newContext({ contextPointer: i });
                try {
                  let s = yield* t(a(r, o, u));
                  if (typeof s == "object" && "error" in s && s.error)
                    throw (
                      this.debugLog(
                        "cToHostNormalizeModule: normalizer returned error",
                        s.error,
                      ),
                      s.error
                    );
                  let l = typeof s == "string" ? s : s.value;
                  return u.getMemory(this.rt.value).newHeapCharPointer(l).value
                    .ptr;
                } catch (s) {
                  return (
                    this.debugLog("normalizeModule: caught error", s),
                    u.throw(s),
                    0
                  );
                }
              }),
            }),
            e.ownedLifetimes?.forEach((t) => this.scope.manage(t)),
            (this.module = e.module),
            (this.memory = new Cv(this.module)),
            (this.ffi = e.ffi),
            (this.rt = e.rt),
            (this.callbacks = e.callbacks),
            this.scope.manage(this.rt),
            this.callbacks.setRuntimeCallbacks(
              this.rt.value,
              this.cToHostCallbacks,
            ),
            (this.executePendingJobs = this.executePendingJobs.bind(this)),
            xm && this.setDebugMode(!0));
        }
        get alive() {
          return this.scope.alive;
        }
        dispose() {
          return this.scope.dispose();
        }
        newContext(e = {}) {
          let t = Lx(e.intrinsics),
            n = new Ce(
              e.contextPointer || this.ffi.QTS_NewContext(this.rt.value, t),
              void 0,
              (r) => {
                (this.contextMap.delete(r),
                  this.callbacks.deleteContext(r),
                  this.ffi.QTS_FreeContext(r));
              },
            ),
            i = new Gx({
              module: this.module,
              ctx: n,
              ffi: this.ffi,
              rt: this.rt,
              ownedLifetimes: e.ownedLifetimes,
              runtime: this,
              callbacks: this.callbacks,
            });
          return (this.contextMap.set(n.value, i), i);
        }
        setModuleLoader(e, t) {
          ((this.moduleLoader = e),
            (this.moduleNormalizer = t),
            this.ffi.QTS_RuntimeEnableModuleLoader(
              this.rt.value,
              this.moduleNormalizer ? 1 : 0,
            ));
        }
        removeModuleLoader() {
          ((this.moduleLoader = void 0),
            this.ffi.QTS_RuntimeDisableModuleLoader(this.rt.value));
        }
        hasPendingJob() {
          return !!this.ffi.QTS_IsJobPending(this.rt.value);
        }
        setInterruptHandler(e) {
          let t = this.interruptHandler;
          ((this.interruptHandler = e),
            t || this.ffi.QTS_RuntimeEnableInterruptHandler(this.rt.value));
        }
        removeInterruptHandler() {
          this.interruptHandler &&
            (this.ffi.QTS_RuntimeDisableInterruptHandler(this.rt.value),
            (this.interruptHandler = void 0));
        }
        executePendingJobs(e = -1) {
          let t = this.memory.newMutablePointerArray(1),
            n = this.ffi.QTS_ExecutePendingJob(
              this.rt.value,
              e ?? -1,
              t.value.ptr,
            ),
            i = t.value.typedArray[0];
          if ((t.dispose(), i === 0))
            return (
              this.ffi.QTS_FreeValuePointerRuntime(this.rt.value, n),
              an.success(0)
            );
          let r =
              this.contextMap.get(i) ?? this.newContext({ contextPointer: i }),
            o = r.getMemory(this.rt.value).heapValueHandle(n);
          if (r.typeof(o) === "number") {
            let a = r.getNumber(o);
            return (o.dispose(), an.success(a));
          } else {
            let a = Object.assign(o, { context: r });
            return an.fail(a, (u) => r.unwrapResult(u));
          }
        }
        setMemoryLimit(e) {
          if (e < 0 && e !== -1)
            throw new Error(
              "Cannot set memory limit to negative number. To unset, pass -1",
            );
          this.ffi.QTS_RuntimeSetMemoryLimit(this.rt.value, e);
        }
        computeMemoryUsage() {
          let e = this.getSystemContext().getMemory(this.rt.value);
          return e.heapValueHandle(
            this.ffi.QTS_RuntimeComputeMemoryUsage(this.rt.value, e.ctx.value),
          );
        }
        dumpMemoryUsage() {
          return this.memory.consumeHeapCharPointer(
            this.ffi.QTS_RuntimeDumpMemoryUsage(this.rt.value),
          );
        }
        setMaxStackSize(e) {
          if (e < 0)
            throw new Error(
              "Cannot set memory limit to negative number. To unset, pass 0.",
            );
          this.ffi.QTS_RuntimeSetMaxStackSize(this.rt.value, e);
        }
        assertOwned(e) {
          if (e.owner && e.owner.rt !== this.rt)
            throw new Tv(
              `Handle is not owned by this runtime: ${e.owner.rt.value} != ${this.rt.value}`,
            );
        }
        setDebugMode(e) {
          ((this._debugMode = e),
            this.ffi.DEBUG &&
              this.rt.alive &&
              this.ffi.QTS_SetDebugLogEnabled(this.rt.value, e ? 1 : 0));
        }
        isDebugMode() {
          return this._debugMode;
        }
        debugLog(...e) {
          this._debugMode && console.log("quickjs-emscripten:", ...e);
        }
        [Symbol.for("nodejs.util.inspect.custom")]() {
          return this.alive
            ? `${this.constructor.name} { rt: ${this.rt.value} }`
            : `${this.constructor.name} { disposed }`;
        }
        getSystemContext() {
          return (
            this.context ||
              (this.context = this.scope.manage(this.newContext())),
            this.context
          );
        }
      }),
      (Qx = class {
        constructor(e) {
          ((this.callFunction = e.callFunction),
            (this.shouldInterrupt = e.shouldInterrupt),
            (this.loadModuleSource = e.loadModuleSource),
            (this.normalizeModule = e.normalizeModule));
        }
      }),
      (Tm = class {
        constructor(e) {
          ((this.contextCallbacks = new Map()),
            (this.runtimeCallbacks = new Map()),
            (this.suspendedCount = 0),
            (this.cToHostCallbacks = new Qx({
              callFunction: (t, n, i, r, o, a) =>
                this.handleAsyncify(t, () => {
                  try {
                    let u = this.contextCallbacks.get(n);
                    if (!u)
                      throw new Error(
                        `QuickJSContext(ctx = ${n}) not found for C function call "${a}"`,
                      );
                    return u.callFunction(n, i, r, o, a);
                  } catch (u) {
                    return (
                      console.error("[C to host error: returning null]", u),
                      0
                    );
                  }
                }),
              shouldInterrupt: (t, n) =>
                this.handleAsyncify(t, () => {
                  try {
                    let i = this.runtimeCallbacks.get(n);
                    if (!i)
                      throw new Error(
                        `QuickJSRuntime(rt = ${n}) not found for C interrupt`,
                      );
                    return i.shouldInterrupt(n);
                  } catch (i) {
                    return (
                      console.error(
                        "[C to host interrupt: returning error]",
                        i,
                      ),
                      1
                    );
                  }
                }),
              loadModuleSource: (t, n, i, r) =>
                this.handleAsyncify(t, () => {
                  try {
                    let o = this.runtimeCallbacks.get(n);
                    if (!o)
                      throw new Error(
                        `QuickJSRuntime(rt = ${n}) not found for C module loader`,
                      );
                    let a = o.loadModuleSource;
                    if (!a)
                      throw new Error(
                        `QuickJSRuntime(rt = ${n}) does not support module loading`,
                      );
                    return a(n, i, r);
                  } catch (o) {
                    return (
                      console.error(
                        "[C to host module loader error: returning null]",
                        o,
                      ),
                      0
                    );
                  }
                }),
              normalizeModule: (t, n, i, r, o) =>
                this.handleAsyncify(t, () => {
                  try {
                    let a = this.runtimeCallbacks.get(n);
                    if (!a)
                      throw new Error(
                        `QuickJSRuntime(rt = ${n}) not found for C module loader`,
                      );
                    let u = a.normalizeModule;
                    if (!u)
                      throw new Error(
                        `QuickJSRuntime(rt = ${n}) does not support module loading`,
                      );
                    return u(n, i, r, o);
                  } catch (a) {
                    return (
                      console.error(
                        "[C to host module loader error: returning null]",
                        a,
                      ),
                      0
                    );
                  }
                }),
            })),
            (this.module = e),
            (this.module.callbacks = this.cToHostCallbacks));
        }
        setRuntimeCallbacks(e, t) {
          this.runtimeCallbacks.set(e, t);
        }
        deleteRuntime(e) {
          this.runtimeCallbacks.delete(e);
        }
        setContextCallbacks(e, t) {
          this.contextCallbacks.set(e, t);
        }
        deleteContext(e) {
          this.contextCallbacks.delete(e);
        }
        handleAsyncify(e, t) {
          if (e)
            return e.handleSleep((i) => {
              try {
                let r = t();
                if (!(r instanceof Promise)) {
                  (Ei("asyncify.handleSleep: not suspending:", r), i(r));
                  return;
                }
                if (this.suspended)
                  throw new Iv(`Already suspended at: ${this.suspended.stack}
Attempted to suspend at:`);
                ((this.suspended = new Pv(`(${this.suspendedCount++})`)),
                  Ei("asyncify.handleSleep: suspending:", this.suspended),
                  r.then(
                    (o) => {
                      ((this.suspended = void 0),
                        Ei("asyncify.handleSleep: resolved:", o),
                        i(o));
                    },
                    (o) => {
                      (Ei("asyncify.handleSleep: rejected:", o),
                        console.error(
                          "QuickJS: cannot handle error in suspended function",
                          o,
                        ),
                        (this.suspended = void 0));
                    },
                  ));
              } catch (r) {
                throw (
                  Ei("asyncify.handleSleep: error:", r),
                  (this.suspended = void 0),
                  r
                );
              }
            });
          let n = t();
          if (n instanceof Promise)
            throw new Error(
              "Promise return value not supported in non-asyncify context.",
            );
          return n;
        }
      }));
    Uv = class {
      constructor(e, t) {
        ((this.module = e), (this.ffi = t), (this.callbacks = new Tm(e)));
      }
      newRuntime(e = {}) {
        let t = new Ce(this.ffi.QTS_NewRuntime(), void 0, (i) => {
            (this.callbacks.deleteRuntime(i), this.ffi.QTS_FreeRuntime(i));
          }),
          n = new Wx({
            module: this.module,
            callbacks: this.callbacks,
            ffi: this.ffi,
            rt: t,
          });
        return (
          km(n, e),
          e.moduleLoader && n.setModuleLoader(e.moduleLoader),
          n
        );
      }
      newContext(e = {}) {
        let t = this.newRuntime(),
          n = t.newContext({ ...e, ownedLifetimes: qx(t, e.ownedLifetimes) });
        return ((t.context = n), n);
      }
      evalCode(e, t = {}) {
        return mt.withScope((n) => {
          let i = n.manage(this.newContext());
          Im(i.runtime, t);
          let r = i.evalCode(e, "eval.js");
          if (
            (t.memoryLimitBytes !== void 0 && i.runtime.setMemoryLimit(-1),
            r.error)
          )
            throw i.dump(n.manage(r.error));
          return i.dump(n.manage(r.value));
        });
      }
      getWasmMemory() {
        let e = this.module
          .quickjsEmscriptenInit?.(() => {})
          ?.getWasmMemory?.();
        if (!e)
          throw new Error(
            "Variant does not support getting WebAssembly.Memory",
          );
        return e;
      }
      getFFI() {
        return this.ffi;
      }
    };
  });
var jv = {};
et(jv, {
  QuickJSModuleCallbacks: () => Tm,
  QuickJSWASMModule: () => Uv,
  applyBaseRuntimeOptions: () => km,
  applyModuleEvalRuntimeOptions: () => Im,
});
var Lv = ft(() => {
  Fv();
});
var Vv = {};
et(Vv, { QuickJSFFI: () => Kx });
var Kx,
  qv = ft(() => {
    Kx = class {
      constructor(e) {
        ((this.module = e),
          (this.DEBUG = !1),
          (this.QTS_Throw = this.module.cwrap("QTS_Throw", "number", [
            "number",
            "number",
          ])),
          (this.QTS_NewError = this.module.cwrap("QTS_NewError", "number", [
            "number",
          ])),
          (this.QTS_RuntimeSetMemoryLimit = this.module.cwrap(
            "QTS_RuntimeSetMemoryLimit",
            null,
            ["number", "number"],
          )),
          (this.QTS_RuntimeComputeMemoryUsage = this.module.cwrap(
            "QTS_RuntimeComputeMemoryUsage",
            "number",
            ["number", "number"],
          )),
          (this.QTS_RuntimeDumpMemoryUsage = this.module.cwrap(
            "QTS_RuntimeDumpMemoryUsage",
            "number",
            ["number"],
          )),
          (this.QTS_RecoverableLeakCheck = this.module.cwrap(
            "QTS_RecoverableLeakCheck",
            "number",
            [],
          )),
          (this.QTS_BuildIsSanitizeLeak = this.module.cwrap(
            "QTS_BuildIsSanitizeLeak",
            "number",
            [],
          )),
          (this.QTS_RuntimeSetMaxStackSize = this.module.cwrap(
            "QTS_RuntimeSetMaxStackSize",
            null,
            ["number", "number"],
          )),
          (this.QTS_GetUndefined = this.module.cwrap(
            "QTS_GetUndefined",
            "number",
            [],
          )),
          (this.QTS_GetNull = this.module.cwrap("QTS_GetNull", "number", [])),
          (this.QTS_GetFalse = this.module.cwrap("QTS_GetFalse", "number", [])),
          (this.QTS_GetTrue = this.module.cwrap("QTS_GetTrue", "number", [])),
          (this.QTS_NewRuntime = this.module.cwrap(
            "QTS_NewRuntime",
            "number",
            [],
          )),
          (this.QTS_FreeRuntime = this.module.cwrap("QTS_FreeRuntime", null, [
            "number",
          ])),
          (this.QTS_NewContext = this.module.cwrap("QTS_NewContext", "number", [
            "number",
            "number",
          ])),
          (this.QTS_FreeContext = this.module.cwrap("QTS_FreeContext", null, [
            "number",
          ])),
          (this.QTS_FreeValuePointer = this.module.cwrap(
            "QTS_FreeValuePointer",
            null,
            ["number", "number"],
          )),
          (this.QTS_FreeValuePointerRuntime = this.module.cwrap(
            "QTS_FreeValuePointerRuntime",
            null,
            ["number", "number"],
          )),
          (this.QTS_FreeVoidPointer = this.module.cwrap(
            "QTS_FreeVoidPointer",
            null,
            ["number", "number"],
          )),
          (this.QTS_FreeCString = this.module.cwrap("QTS_FreeCString", null, [
            "number",
            "number",
          ])),
          (this.QTS_DupValuePointer = this.module.cwrap(
            "QTS_DupValuePointer",
            "number",
            ["number", "number"],
          )),
          (this.QTS_NewObject = this.module.cwrap("QTS_NewObject", "number", [
            "number",
          ])),
          (this.QTS_NewObjectProto = this.module.cwrap(
            "QTS_NewObjectProto",
            "number",
            ["number", "number"],
          )),
          (this.QTS_NewArray = this.module.cwrap("QTS_NewArray", "number", [
            "number",
          ])),
          (this.QTS_NewArrayBuffer = this.module.cwrap(
            "QTS_NewArrayBuffer",
            "number",
            ["number", "number", "number"],
          )),
          (this.QTS_NewFloat64 = this.module.cwrap("QTS_NewFloat64", "number", [
            "number",
            "number",
          ])),
          (this.QTS_GetFloat64 = this.module.cwrap("QTS_GetFloat64", "number", [
            "number",
            "number",
          ])),
          (this.QTS_NewString = this.module.cwrap("QTS_NewString", "number", [
            "number",
            "number",
          ])),
          (this.QTS_GetString = this.module.cwrap("QTS_GetString", "number", [
            "number",
            "number",
          ])),
          (this.QTS_GetArrayBuffer = this.module.cwrap(
            "QTS_GetArrayBuffer",
            "number",
            ["number", "number"],
          )),
          (this.QTS_GetArrayBufferLength = this.module.cwrap(
            "QTS_GetArrayBufferLength",
            "number",
            ["number", "number"],
          )),
          (this.QTS_NewSymbol = this.module.cwrap("QTS_NewSymbol", "number", [
            "number",
            "number",
            "number",
          ])),
          (this.QTS_GetSymbolDescriptionOrKey = this.module.cwrap(
            "QTS_GetSymbolDescriptionOrKey",
            "number",
            ["number", "number"],
          )),
          (this.QTS_IsGlobalSymbol = this.module.cwrap(
            "QTS_IsGlobalSymbol",
            "number",
            ["number", "number"],
          )),
          (this.QTS_IsJobPending = this.module.cwrap(
            "QTS_IsJobPending",
            "number",
            ["number"],
          )),
          (this.QTS_ExecutePendingJob = this.module.cwrap(
            "QTS_ExecutePendingJob",
            "number",
            ["number", "number", "number"],
          )),
          (this.QTS_GetProp = this.module.cwrap("QTS_GetProp", "number", [
            "number",
            "number",
            "number",
          ])),
          (this.QTS_GetPropNumber = this.module.cwrap(
            "QTS_GetPropNumber",
            "number",
            ["number", "number", "number"],
          )),
          (this.QTS_SetProp = this.module.cwrap("QTS_SetProp", null, [
            "number",
            "number",
            "number",
            "number",
          ])),
          (this.QTS_DefineProp = this.module.cwrap("QTS_DefineProp", null, [
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "boolean",
            "boolean",
            "boolean",
          ])),
          (this.QTS_GetOwnPropertyNames = this.module.cwrap(
            "QTS_GetOwnPropertyNames",
            "number",
            ["number", "number", "number", "number", "number"],
          )),
          (this.QTS_Call = this.module.cwrap("QTS_Call", "number", [
            "number",
            "number",
            "number",
            "number",
            "number",
          ])),
          (this.QTS_ResolveException = this.module.cwrap(
            "QTS_ResolveException",
            "number",
            ["number", "number"],
          )),
          (this.QTS_Dump = this.module.cwrap("QTS_Dump", "number", [
            "number",
            "number",
          ])),
          (this.QTS_Eval = this.module.cwrap("QTS_Eval", "number", [
            "number",
            "number",
            "number",
            "string",
            "number",
            "number",
          ])),
          (this.QTS_GetModuleNamespace = this.module.cwrap(
            "QTS_GetModuleNamespace",
            "number",
            ["number", "number"],
          )),
          (this.QTS_Typeof = this.module.cwrap("QTS_Typeof", "number", [
            "number",
            "number",
          ])),
          (this.QTS_GetLength = this.module.cwrap("QTS_GetLength", "number", [
            "number",
            "number",
            "number",
          ])),
          (this.QTS_IsEqual = this.module.cwrap("QTS_IsEqual", "number", [
            "number",
            "number",
            "number",
            "number",
          ])),
          (this.QTS_GetGlobalObject = this.module.cwrap(
            "QTS_GetGlobalObject",
            "number",
            ["number"],
          )),
          (this.QTS_NewPromiseCapability = this.module.cwrap(
            "QTS_NewPromiseCapability",
            "number",
            ["number", "number"],
          )),
          (this.QTS_PromiseState = this.module.cwrap(
            "QTS_PromiseState",
            "number",
            ["number", "number"],
          )),
          (this.QTS_PromiseResult = this.module.cwrap(
            "QTS_PromiseResult",
            "number",
            ["number", "number"],
          )),
          (this.QTS_TestStringArg = this.module.cwrap(
            "QTS_TestStringArg",
            null,
            ["string"],
          )),
          (this.QTS_GetDebugLogEnabled = this.module.cwrap(
            "QTS_GetDebugLogEnabled",
            "number",
            ["number"],
          )),
          (this.QTS_SetDebugLogEnabled = this.module.cwrap(
            "QTS_SetDebugLogEnabled",
            null,
            ["number", "number"],
          )),
          (this.QTS_BuildIsDebug = this.module.cwrap(
            "QTS_BuildIsDebug",
            "number",
            [],
          )),
          (this.QTS_BuildIsAsyncify = this.module.cwrap(
            "QTS_BuildIsAsyncify",
            "number",
            [],
          )),
          (this.QTS_NewFunction = this.module.cwrap(
            "QTS_NewFunction",
            "number",
            ["number", "number", "string"],
          )),
          (this.QTS_ArgvGetJSValueConstPointer = this.module.cwrap(
            "QTS_ArgvGetJSValueConstPointer",
            "number",
            ["number", "number"],
          )),
          (this.QTS_RuntimeEnableInterruptHandler = this.module.cwrap(
            "QTS_RuntimeEnableInterruptHandler",
            null,
            ["number"],
          )),
          (this.QTS_RuntimeDisableInterruptHandler = this.module.cwrap(
            "QTS_RuntimeDisableInterruptHandler",
            null,
            ["number"],
          )),
          (this.QTS_RuntimeEnableModuleLoader = this.module.cwrap(
            "QTS_RuntimeEnableModuleLoader",
            null,
            ["number", "number"],
          )),
          (this.QTS_RuntimeDisableModuleLoader = this.module.cwrap(
            "QTS_RuntimeDisableModuleLoader",
            null,
            ["number"],
          )),
          (this.QTS_bjson_encode = this.module.cwrap(
            "QTS_bjson_encode",
            "number",
            ["number", "number"],
          )),
          (this.QTS_bjson_decode = this.module.cwrap(
            "QTS_bjson_decode",
            "number",
            ["number", "number"],
          )));
      }
    };
  });
var Hv = {};
et(Hv, { default: () => Yx });
var Jx,
  Yx,
  Zv = ft(() => {
    ((Jx = (() => {
      var e = import.meta.url;
      return function (t = {}) {
        var n,
          i = t,
          r,
          o,
          a = new Promise((p, h) => {
            ((r = p), (o = h));
          }),
          u = typeof window == "object",
          s = typeof importScripts == "function";
        function l(p) {
          p = { log: p || function () {} };
          for (let h of l.Ia) h(p);
          return (i.quickJSEmscriptenExtensions = p);
        }
        ((l.Ia = []),
          (i.quickjsEmscriptenInit = l),
          l.Ia.push((p) => {
            p.getWasmMemory = function () {
              return w;
            };
          }));
        var c = Object.assign({}, i),
          d = "./this.program",
          f = "",
          _,
          g;
        (u || s) &&
          (s
            ? (f = self.location.href)
            : typeof document < "u" &&
              document.currentScript &&
              (f = document.currentScript.src),
          e && (f = e),
          f.startsWith("blob:")
            ? (f = "")
            : (f = f.substr(0, f.replace(/[?#].*/, "").lastIndexOf("/") + 1)),
          s &&
            (g = (p) => {
              var h = new XMLHttpRequest();
              return (
                h.open("GET", p, !1),
                (h.responseType = "arraybuffer"),
                h.send(null),
                new Uint8Array(h.response)
              );
            }),
          (_ = (p) =>
            fetch(p, { credentials: "same-origin" }).then((h) =>
              h.ok
                ? h.arrayBuffer()
                : Promise.reject(Error(h.status + " : " + h.url)),
            )));
        var m = i.print || console.log.bind(console),
          A = i.printErr || console.error.bind(console);
        (Object.assign(i, c), (c = null), i.thisProgram && (d = i.thisProgram));
        var I = i.wasmBinary,
          w,
          y = !1,
          b,
          E,
          P,
          T,
          F;
        function U() {
          var p = w.buffer;
          ((i.HEAP8 = E = new Int8Array(p)),
            (i.HEAP16 = new Int16Array(p)),
            (i.HEAPU8 = P = new Uint8Array(p)),
            (i.HEAPU16 = new Uint16Array(p)),
            (i.HEAP32 = T = new Int32Array(p)),
            (i.HEAPU32 = F = new Uint32Array(p)),
            (i.HEAPF32 = new Float32Array(p)),
            (i.HEAPF64 = new Float64Array(p)));
        }
        (i.wasmMemory
          ? (w = i.wasmMemory)
          : (w = new WebAssembly.Memory({
              initial: (i.INITIAL_MEMORY || 16777216) / 65536,
              maximum: 32768,
            })),
          U());
        var H = [],
          C = [],
          ne = [];
        function re() {
          var p = i.preRun.shift();
          H.unshift(p);
        }
        var me = 0,
          Ue = null,
          W = null;
        function J(p) {
          throw (
            i.onAbort?.(p),
            (p = "Aborted(" + p + ")"),
            A(p),
            (y = !0),
            (b = 1),
            (p = new WebAssembly.RuntimeError(
              p + ". Build with -sASSERTIONS for more info.",
            )),
            o(p),
            p
          );
        }
        var zi = (p) => p.startsWith("data:application/octet-stream;base64,"),
          hs;
        function Wm(p) {
          if (p == hs && I) return new Uint8Array(I);
          if (g) return g(p);
          throw "both async and sync fetching of the wasm failed";
        }
        function Oy(p) {
          return I
            ? Promise.resolve().then(() => Wm(p))
            : _(p).then(
                (h) => new Uint8Array(h),
                () => Wm(p),
              );
        }
        function Qm(p, h, S) {
          return Oy(p)
            .then(($) => WebAssembly.instantiate($, h))
            .then(S, ($) => {
              (A(`failed to asynchronously prepare wasm: ${$}`), J($));
            });
        }
        function Ry(p, h) {
          var S = hs;
          return I ||
            typeof WebAssembly.instantiateStreaming != "function" ||
            zi(S) ||
            typeof fetch != "function"
            ? Qm(S, p, h)
            : fetch(S, { credentials: "same-origin" }).then(($) =>
                WebAssembly.instantiateStreaming($, p).then(h, function (L) {
                  return (
                    A(`wasm streaming compile failed: ${L}`),
                    A("falling back to ArrayBuffer instantiation"),
                    Qm(S, p, h)
                  );
                }),
              );
        }
        function Km(p) {
          ((this.name = "ExitStatus"),
            (this.message = `Program terminated with exit(${p})`),
            (this.status = p));
        }
        var gs = (p) => {
            for (; 0 < p.length; ) p.shift()(i);
          },
          vs = i.noExitRuntime || !0,
          Jm = typeof TextDecoder < "u" ? new TextDecoder() : void 0,
          _t = (p, h, S) => {
            var $ = h + S;
            for (S = h; p[S] && !(S >= $); ) ++S;
            if (16 < S - h && p.buffer && Jm)
              return Jm.decode(p.subarray(h, S));
            for ($ = ""; h < S; ) {
              var L = p[h++];
              if (L & 128) {
                var K = p[h++] & 63;
                if ((L & 224) == 192)
                  $ += String.fromCharCode(((L & 31) << 6) | K);
                else {
                  var Y = p[h++] & 63;
                  ((L =
                    (L & 240) == 224
                      ? ((L & 15) << 12) | (K << 6) | Y
                      : ((L & 7) << 18) | (K << 12) | (Y << 6) | (p[h++] & 63)),
                    65536 > L
                      ? ($ += String.fromCharCode(L))
                      : ((L -= 65536),
                        ($ += String.fromCharCode(
                          55296 | (L >> 10),
                          56320 | (L & 1023),
                        ))));
                }
              } else $ += String.fromCharCode(L);
            }
            return $;
          },
          Ny = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
          My = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
          pn = {},
          Ym = (p) => {
            if (!(p instanceof Km || p == "unwind")) throw p;
          },
          ys = 0,
          Xm = (p) => {
            throw (
              (b = p),
              vs || 0 < ys || (i.onExit?.(p), (y = !0)),
              new Km(p)
            );
          },
          Cy = (p) => {
            if (!y)
              try {
                if ((p(), !(vs || 0 < ys)))
                  try {
                    ((b = p = b), Xm(p));
                  } catch (h) {
                    Ym(h);
                  }
              } catch (h) {
                Ym(h);
              }
          },
          ep;
        ep = () => performance.now();
        var mr = (p, h, S) => {
            var $ = P;
            if (!(0 < S)) return 0;
            var L = h;
            S = h + S - 1;
            for (var K = 0; K < p.length; ++K) {
              var Y = p.charCodeAt(K);
              if (55296 <= Y && 57343 >= Y) {
                var xe = p.charCodeAt(++K);
                Y = (65536 + ((Y & 1023) << 10)) | (xe & 1023);
              }
              if (127 >= Y) {
                if (h >= S) break;
                $[h++] = Y;
              } else {
                if (2047 >= Y) {
                  if (h + 1 >= S) break;
                  $[h++] = 192 | (Y >> 6);
                } else {
                  if (65535 >= Y) {
                    if (h + 2 >= S) break;
                    $[h++] = 224 | (Y >> 12);
                  } else {
                    if (h + 3 >= S) break;
                    (($[h++] = 240 | (Y >> 18)),
                      ($[h++] = 128 | ((Y >> 12) & 63)));
                  }
                  $[h++] = 128 | ((Y >> 6) & 63);
                }
                $[h++] = 128 | (Y & 63);
              }
            }
            return (($[h] = 0), h - L);
          },
          bs = {},
          tp = () => {
            if (!ws) {
              var p = {
                  USER: "web_user",
                  LOGNAME: "web_user",
                  PATH: "/",
                  PWD: "/",
                  HOME: "/home/web_user",
                  LANG:
                    (
                      (typeof navigator == "object" &&
                        navigator.languages &&
                        navigator.languages[0]) ||
                      "C"
                    ).replace("-", "_") + ".UTF-8",
                  _: d || "./this.program",
                },
                h;
              for (h in bs) bs[h] === void 0 ? delete p[h] : (p[h] = bs[h]);
              var S = [];
              for (h in p) S.push(`${h}=${p[h]}`);
              ws = S;
            }
            return ws;
          },
          ws,
          Uy = [null, [], []],
          rp = (p) => {
            for (var h = 0, S = 0; S < p.length; ++S) {
              var $ = p.charCodeAt(S);
              127 >= $
                ? h++
                : 2047 >= $
                  ? (h += 2)
                  : 55296 <= $ && 57343 >= $
                    ? ((h += 4), ++S)
                    : (h += 3);
            }
            return h;
          },
          Fy = (p, h, S, $) => {
            var L = {
              string: (De) => {
                var Je = 0;
                if (De != null && De !== 0) {
                  Je = rp(De) + 1;
                  var sp = Ss(Je);
                  (mr(De, sp, Je), (Je = sp));
                }
                return Je;
              },
              array: (De) => {
                var Je = Ss(De.length);
                return (E.set(De, Je), Je);
              },
            };
            p = i["_" + p];
            var K = [],
              Y = 0;
            if ($)
              for (var xe = 0; xe < $.length; xe++) {
                var zt = L[S[xe]];
                zt
                  ? (Y === 0 && (Y = op()), (K[xe] = zt($[xe])))
                  : (K[xe] = $[xe]);
              }
            return (
              (S = p(...K)),
              (S = (function (De) {
                return (
                  Y !== 0 && ip(Y),
                  h === "string"
                    ? De
                      ? _t(P, De)
                      : ""
                    : h === "boolean"
                      ? !!De
                      : De
                );
              })(S))
            );
          },
          jy = {
            b: (p, h, S, $) => {
              J(
                `Assertion failed: ${p ? _t(P, p) : ""}, at: ` +
                  [
                    h ? (h ? _t(P, h) : "") : "unknown filename",
                    S,
                    $ ? ($ ? _t(P, $) : "") : "unknown function",
                  ],
              );
            },
            q: () => {
              J("");
            },
            n: () => {
              ((vs = !1), (ys = 0));
            },
            j: function (p, h, S) {
              ((p = new Date(
                1e3 *
                  ((h + 2097152) >>> 0 < 4194305 - !!p
                    ? (p >>> 0) + 4294967296 * h
                    : NaN),
              )),
                (T[S >> 2] = p.getSeconds()),
                (T[(S + 4) >> 2] = p.getMinutes()),
                (T[(S + 8) >> 2] = p.getHours()),
                (T[(S + 12) >> 2] = p.getDate()),
                (T[(S + 16) >> 2] = p.getMonth()),
                (T[(S + 20) >> 2] = p.getFullYear() - 1900),
                (T[(S + 24) >> 2] = p.getDay()),
                (h = p.getFullYear()),
                (T[(S + 28) >> 2] =
                  ((h % 4 !== 0 || (h % 100 === 0 && h % 400 !== 0) ? My : Ny)[
                    p.getMonth()
                  ] +
                    p.getDate() -
                    1) |
                  0),
                (T[(S + 36) >> 2] = -(60 * p.getTimezoneOffset())),
                (h = new Date(p.getFullYear(), 6, 1).getTimezoneOffset()));
              var $ = new Date(p.getFullYear(), 0, 1).getTimezoneOffset();
              T[(S + 32) >> 2] =
                (h != $ && p.getTimezoneOffset() == Math.min($, h)) | 0;
            },
            l: (p, h) => {
              if ((pn[p] && (clearTimeout(pn[p].id), delete pn[p]), !h))
                return 0;
              var S = setTimeout(() => {
                (delete pn[p], Cy(() => np(p, ep())));
              }, h);
              return ((pn[p] = { id: S, Na: h }), 0);
            },
            o: (p, h, S, $) => {
              var L = new Date().getFullYear(),
                K = new Date(L, 0, 1).getTimezoneOffset();
              ((L = new Date(L, 6, 1).getTimezoneOffset()),
                (F[p >> 2] = 60 * Math.max(K, L)),
                (T[h >> 2] = +(K != L)),
                (h = (Y) => {
                  var xe = Math.abs(Y);
                  return `UTC${0 <= Y ? "-" : "+"}${String(Math.floor(xe / 60)).padStart(2, "0")}${String(xe % 60).padStart(2, "0")}`;
                }),
                (p = h(K)),
                (h = h(L)),
                L < K
                  ? (mr(p, S, 17), mr(h, $, 17))
                  : (mr(p, $, 17), mr(h, S, 17)));
            },
            p: () => Date.now(),
            m: (p) => {
              var h = P.length;
              if (((p >>>= 0), 2147483648 < p)) return !1;
              for (var S = 1; 4 >= S; S *= 2) {
                var $ = h * (1 + 0.2 / S);
                $ = Math.min($, p + 100663296);
                e: {
                  $ =
                    (Math.min(
                      2147483648,
                      65536 * Math.ceil(Math.max(p, $) / 65536),
                    ) -
                      w.buffer.byteLength +
                      65535) /
                    65536;
                  try {
                    (w.grow($), U());
                    var L = 1;
                    break e;
                  } catch {}
                  L = void 0;
                }
                if (L) return !0;
              }
              return !1;
            },
            f: (p, h) => {
              var S = 0;
              return (
                tp().forEach(($, L) => {
                  var K = h + S;
                  for (L = F[(p + 4 * L) >> 2] = K, K = 0; K < $.length; ++K)
                    E[L++] = $.charCodeAt(K);
                  ((E[L] = 0), (S += $.length + 1));
                }),
                0
              );
            },
            g: (p, h) => {
              var S = tp();
              F[p >> 2] = S.length;
              var $ = 0;
              return (
                S.forEach((L) => ($ += L.length + 1)),
                (F[h >> 2] = $),
                0
              );
            },
            e: () => 52,
            k: function () {
              return 70;
            },
            d: (p, h, S, $) => {
              for (var L = 0, K = 0; K < S; K++) {
                var Y = F[h >> 2],
                  xe = F[(h + 4) >> 2];
                h += 8;
                for (var zt = 0; zt < xe; zt++) {
                  var De = P[Y + zt],
                    Je = Uy[p];
                  De === 0 || De === 10
                    ? ((p === 1 ? m : A)(_t(Je, 0)), (Je.length = 0))
                    : Je.push(De);
                }
                L += xe;
              }
              return ((F[$ >> 2] = L), 0);
            },
            a: w,
            c: Xm,
            s: function (p, h, S, $, L) {
              return i.callbacks.callFunction(void 0, p, h, S, $, L);
            },
            r: function (p) {
              return i.callbacks.shouldInterrupt(void 0, p);
            },
            i: function (p, h, S) {
              return (
                (S = S ? _t(P, S) : ""),
                i.callbacks.loadModuleSource(void 0, p, h, S)
              );
            },
            h: function (p, h, S, $) {
              return (
                (S = S ? _t(P, S) : ""),
                ($ = $ ? _t(P, $) : ""),
                i.callbacks.normalizeModule(void 0, p, h, S, $)
              );
            },
          },
          M = (function () {
            function p(S) {
              return (
                (M = S.exports),
                C.unshift(M.t),
                me--,
                i.monitorRunDependencies?.(me),
                me == 0 &&
                  (Ue !== null && (clearInterval(Ue), (Ue = null)),
                  W && ((S = W), (W = null), S())),
                M
              );
            }
            var h = { a: jy };
            if ((me++, i.monitorRunDependencies?.(me), i.instantiateWasm))
              try {
                return i.instantiateWasm(h, p);
              } catch (S) {
                (A(`Module.instantiateWasm callback failed with error: ${S}`),
                  o(S));
              }
            return (
              (hs ||= i.locateFile
                ? zi("emscripten-module.wasm")
                  ? "emscripten-module.wasm"
                  : i.locateFile
                    ? i.locateFile("emscripten-module.wasm", f)
                    : f + "emscripten-module.wasm"
                : new URL("emscripten-module.wasm", import.meta.url).href),
              Ry(h, function (S) {
                p(S.instance);
              }).catch(o),
              {}
            );
          })();
        ((i._malloc = (p) => (i._malloc = M.u)(p)),
          (i._QTS_Throw = (p, h) => (i._QTS_Throw = M.v)(p, h)),
          (i._QTS_NewError = (p) => (i._QTS_NewError = M.w)(p)),
          (i._QTS_RuntimeSetMemoryLimit = (p, h) =>
            (i._QTS_RuntimeSetMemoryLimit = M.x)(p, h)),
          (i._QTS_RuntimeComputeMemoryUsage = (p, h) =>
            (i._QTS_RuntimeComputeMemoryUsage = M.y)(p, h)),
          (i._QTS_RuntimeDumpMemoryUsage = (p) =>
            (i._QTS_RuntimeDumpMemoryUsage = M.z)(p)),
          (i._QTS_RecoverableLeakCheck = () =>
            (i._QTS_RecoverableLeakCheck = M.A)()),
          (i._QTS_BuildIsSanitizeLeak = () =>
            (i._QTS_BuildIsSanitizeLeak = M.B)()),
          (i._QTS_RuntimeSetMaxStackSize = (p, h) =>
            (i._QTS_RuntimeSetMaxStackSize = M.C)(p, h)),
          (i._QTS_GetUndefined = () => (i._QTS_GetUndefined = M.D)()),
          (i._QTS_GetNull = () => (i._QTS_GetNull = M.E)()),
          (i._QTS_GetFalse = () => (i._QTS_GetFalse = M.F)()),
          (i._QTS_GetTrue = () => (i._QTS_GetTrue = M.G)()),
          (i._QTS_NewRuntime = () => (i._QTS_NewRuntime = M.H)()),
          (i._QTS_FreeRuntime = (p) => (i._QTS_FreeRuntime = M.I)(p)),
          (i._free = (p) => (i._free = M.J)(p)),
          (i._QTS_NewContext = (p, h) => (i._QTS_NewContext = M.K)(p, h)),
          (i._QTS_FreeContext = (p) => (i._QTS_FreeContext = M.L)(p)),
          (i._QTS_FreeValuePointer = (p, h) =>
            (i._QTS_FreeValuePointer = M.M)(p, h)),
          (i._QTS_FreeValuePointerRuntime = (p, h) =>
            (i._QTS_FreeValuePointerRuntime = M.N)(p, h)),
          (i._QTS_FreeVoidPointer = (p, h) =>
            (i._QTS_FreeVoidPointer = M.O)(p, h)),
          (i._QTS_FreeCString = (p, h) => (i._QTS_FreeCString = M.P)(p, h)),
          (i._QTS_DupValuePointer = (p, h) =>
            (i._QTS_DupValuePointer = M.Q)(p, h)),
          (i._QTS_NewObject = (p) => (i._QTS_NewObject = M.R)(p)),
          (i._QTS_NewObjectProto = (p, h) =>
            (i._QTS_NewObjectProto = M.S)(p, h)),
          (i._QTS_NewArray = (p) => (i._QTS_NewArray = M.T)(p)),
          (i._QTS_NewArrayBuffer = (p, h, S) =>
            (i._QTS_NewArrayBuffer = M.U)(p, h, S)),
          (i._QTS_NewFloat64 = (p, h) => (i._QTS_NewFloat64 = M.V)(p, h)),
          (i._QTS_GetFloat64 = (p, h) => (i._QTS_GetFloat64 = M.W)(p, h)),
          (i._QTS_NewString = (p, h) => (i._QTS_NewString = M.X)(p, h)),
          (i._QTS_GetString = (p, h) => (i._QTS_GetString = M.Y)(p, h)),
          (i._QTS_GetArrayBuffer = (p, h) =>
            (i._QTS_GetArrayBuffer = M.Z)(p, h)),
          (i._QTS_GetArrayBufferLength = (p, h) =>
            (i._QTS_GetArrayBufferLength = M._)(p, h)),
          (i._QTS_NewSymbol = (p, h, S) => (i._QTS_NewSymbol = M.$)(p, h, S)),
          (i._QTS_GetSymbolDescriptionOrKey = (p, h) =>
            (i._QTS_GetSymbolDescriptionOrKey = M.aa)(p, h)),
          (i._QTS_IsGlobalSymbol = (p, h) =>
            (i._QTS_IsGlobalSymbol = M.ba)(p, h)),
          (i._QTS_IsJobPending = (p) => (i._QTS_IsJobPending = M.ca)(p)),
          (i._QTS_ExecutePendingJob = (p, h, S) =>
            (i._QTS_ExecutePendingJob = M.da)(p, h, S)),
          (i._QTS_GetProp = (p, h, S) => (i._QTS_GetProp = M.ea)(p, h, S)),
          (i._QTS_GetPropNumber = (p, h, S) =>
            (i._QTS_GetPropNumber = M.fa)(p, h, S)),
          (i._QTS_SetProp = (p, h, S, $) =>
            (i._QTS_SetProp = M.ga)(p, h, S, $)),
          (i._QTS_DefineProp = (p, h, S, $, L, K, Y, xe, zt) =>
            (i._QTS_DefineProp = M.ha)(p, h, S, $, L, K, Y, xe, zt)),
          (i._QTS_GetOwnPropertyNames = (p, h, S, $, L) =>
            (i._QTS_GetOwnPropertyNames = M.ia)(p, h, S, $, L)),
          (i._QTS_Call = (p, h, S, $, L) =>
            (i._QTS_Call = M.ja)(p, h, S, $, L)),
          (i._QTS_ResolveException = (p, h) =>
            (i._QTS_ResolveException = M.ka)(p, h)),
          (i._QTS_Dump = (p, h) => (i._QTS_Dump = M.la)(p, h)),
          (i._QTS_Eval = (p, h, S, $, L, K) =>
            (i._QTS_Eval = M.ma)(p, h, S, $, L, K)),
          (i._QTS_GetModuleNamespace = (p, h) =>
            (i._QTS_GetModuleNamespace = M.na)(p, h)),
          (i._QTS_Typeof = (p, h) => (i._QTS_Typeof = M.oa)(p, h)),
          (i._QTS_GetLength = (p, h, S) => (i._QTS_GetLength = M.pa)(p, h, S)),
          (i._QTS_IsEqual = (p, h, S, $) =>
            (i._QTS_IsEqual = M.qa)(p, h, S, $)),
          (i._QTS_GetGlobalObject = (p) => (i._QTS_GetGlobalObject = M.ra)(p)),
          (i._QTS_NewPromiseCapability = (p, h) =>
            (i._QTS_NewPromiseCapability = M.sa)(p, h)),
          (i._QTS_PromiseState = (p, h) => (i._QTS_PromiseState = M.ta)(p, h)),
          (i._QTS_PromiseResult = (p, h) =>
            (i._QTS_PromiseResult = M.ua)(p, h)),
          (i._QTS_TestStringArg = (p) => (i._QTS_TestStringArg = M.va)(p)),
          (i._QTS_GetDebugLogEnabled = (p) =>
            (i._QTS_GetDebugLogEnabled = M.wa)(p)),
          (i._QTS_SetDebugLogEnabled = (p, h) =>
            (i._QTS_SetDebugLogEnabled = M.xa)(p, h)),
          (i._QTS_BuildIsDebug = () => (i._QTS_BuildIsDebug = M.ya)()),
          (i._QTS_BuildIsAsyncify = () => (i._QTS_BuildIsAsyncify = M.za)()),
          (i._QTS_NewFunction = (p, h, S) =>
            (i._QTS_NewFunction = M.Aa)(p, h, S)),
          (i._QTS_ArgvGetJSValueConstPointer = (p, h) =>
            (i._QTS_ArgvGetJSValueConstPointer = M.Ba)(p, h)),
          (i._QTS_RuntimeEnableInterruptHandler = (p) =>
            (i._QTS_RuntimeEnableInterruptHandler = M.Ca)(p)),
          (i._QTS_RuntimeDisableInterruptHandler = (p) =>
            (i._QTS_RuntimeDisableInterruptHandler = M.Da)(p)),
          (i._QTS_RuntimeEnableModuleLoader = (p, h) =>
            (i._QTS_RuntimeEnableModuleLoader = M.Ea)(p, h)),
          (i._QTS_RuntimeDisableModuleLoader = (p) =>
            (i._QTS_RuntimeDisableModuleLoader = M.Fa)(p)),
          (i._QTS_bjson_encode = (p, h) => (i._QTS_bjson_encode = M.Ga)(p, h)),
          (i._QTS_bjson_decode = (p, h) => (i._QTS_bjson_decode = M.Ha)(p, h)));
        var np = (p, h) => (np = M.Ja)(p, h),
          ip = (p) => (ip = M.Ka)(p),
          Ss = (p) => (Ss = M.La)(p),
          op = () => (op = M.Ma)();
        ((i.cwrap = (p, h, S, $) => {
          var L = !S || S.every((K) => K === "number" || K === "boolean");
          return h !== "string" && L && !$
            ? i["_" + p]
            : (...K) => Fy(p, h, S, K);
        }),
          (i.UTF8ToString = (p, h) => (p ? _t(P, p, h) : "")),
          (i.stringToUTF8 = (p, h, S) => mr(p, h, S)),
          (i.lengthBytesUTF8 = rp));
        var Oi;
        W = function p() {
          (Oi || ap(), Oi || (W = p));
        };
        function ap() {
          function p() {
            if (!Oi && ((Oi = !0), (i.calledRun = !0), !y)) {
              if ((gs(C), r(i), i.onRuntimeInitialized?.(), i.postRun))
                for (
                  typeof i.postRun == "function" && (i.postRun = [i.postRun]);
                  i.postRun.length;
                ) {
                  var h = i.postRun.shift();
                  ne.unshift(h);
                }
              gs(ne);
            }
          }
          if (!(0 < me)) {
            if (i.preRun)
              for (
                typeof i.preRun == "function" && (i.preRun = [i.preRun]);
                i.preRun.length;
              )
                re();
            (gs(H),
              0 < me ||
                (i.setStatus
                  ? (i.setStatus("Running..."),
                    setTimeout(function () {
                      (setTimeout(function () {
                        i.setStatus("");
                      }, 1),
                        p());
                    }, 1))
                  : p()));
          }
        }
        if (i.preInit)
          for (
            typeof i.preInit == "function" && (i.preInit = [i.preInit]);
            0 < i.preInit.length;
          )
            i.preInit.pop()();
        return (ap(), (n = a), n);
      };
    })()),
      (Yx = Jx));
  });
var Z = ye(Te(), 1);
function Rt(e) {
  var t = String(e);
  if (t === "[object Object]")
    try {
      t = JSON.stringify(e);
    } catch {}
  return t;
}
var Gy = (function () {
    function e() {}
    return (
      (e.prototype.isSome = function () {
        return !1;
      }),
      (e.prototype.isNone = function () {
        return !0;
      }),
      (e.prototype[Symbol.iterator] = function () {
        return {
          next: function () {
            return { done: !0, value: void 0 };
          },
        };
      }),
      (e.prototype.unwrapOr = function (t) {
        return t;
      }),
      (e.prototype.expect = function (t) {
        throw new Error("".concat(t));
      }),
      (e.prototype.unwrap = function () {
        throw new Error("Tried to unwrap None");
      }),
      (e.prototype.map = function (t) {
        return this;
      }),
      (e.prototype.mapOr = function (t, n) {
        return t;
      }),
      (e.prototype.mapOrElse = function (t, n) {
        return t();
      }),
      (e.prototype.or = function (t) {
        return t;
      }),
      (e.prototype.orElse = function (t) {
        return t();
      }),
      (e.prototype.andThen = function (t) {
        return this;
      }),
      (e.prototype.toResult = function (t) {
        return R(t);
      }),
      (e.prototype.toString = function () {
        return "None";
      }),
      (e.prototype.toAsyncOption = function () {
        return new _n(O);
      }),
      e
    );
  })(),
  O = new Gy();
Object.freeze(O);
var Wy = (function () {
    function e(t) {
      if (!(this instanceof e)) return new e(t);
      this.value = t;
    }
    return (
      (e.prototype.isSome = function () {
        return !0;
      }),
      (e.prototype.isNone = function () {
        return !1;
      }),
      (e.prototype[Symbol.iterator] = function () {
        var t = Object(this.value);
        return Symbol.iterator in t
          ? t[Symbol.iterator]()
          : {
              next: function () {
                return { done: !0, value: void 0 };
              },
            };
      }),
      (e.prototype.unwrapOr = function (t) {
        return this.value;
      }),
      (e.prototype.expect = function (t) {
        return this.value;
      }),
      (e.prototype.unwrap = function () {
        return this.value;
      }),
      (e.prototype.map = function (t) {
        return V(t(this.value));
      }),
      (e.prototype.mapOr = function (t, n) {
        return n(this.value);
      }),
      (e.prototype.mapOrElse = function (t, n) {
        return n(this.value);
      }),
      (e.prototype.or = function (t) {
        return this;
      }),
      (e.prototype.orElse = function (t) {
        return this;
      }),
      (e.prototype.andThen = function (t) {
        return t(this.value);
      }),
      (e.prototype.toResult = function (t) {
        return B(this.value);
      }),
      (e.prototype.toAsyncOption = function () {
        return new _n(this);
      }),
      (e.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (e.prototype.toString = function () {
        return "Some(".concat(Rt(this.value), ")");
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })(),
  V = Wy,
  Ri;
(function (e) {
  function t() {
    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
    for (var a = [], u = 0, s = r; u < s.length; u++) {
      var l = s[u];
      if (l.isSome()) a.push(l.value);
      else return l;
    }
    return V(a);
  }
  e.all = t;
  function n() {
    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
    for (var a = 0, u = r; a < u.length; a++) {
      var s = u[a];
      if (s.isSome()) return s;
    }
    return O;
  }
  e.any = n;
  function i(r) {
    return r instanceof V || r === O;
  }
  e.isOption = i;
})(Ri || (Ri = {}));
var pr = function (e, t, n) {
    if (n || arguments.length === 2)
      for (var i = 0, r = t.length, o; i < r; i++)
        (o || !(i in t)) &&
          (o || (o = Array.prototype.slice.call(t, 0, i)), (o[i] = t[i]));
    return e.concat(o || Array.prototype.slice.call(t));
  },
  Qy = (function () {
    function e(t) {
      if (!(this instanceof e)) return new e(t);
      this.error = t;
      var n = new Error().stack
        .split(
          `
`,
        )
        .slice(2);
      (n && n.length > 0 && n[0].includes("ErrImpl") && n.shift(),
        (this._stack = n.join(`
`)));
    }
    return (
      (e.prototype.isOk = function () {
        return !1;
      }),
      (e.prototype.isErr = function () {
        return !0;
      }),
      (e.prototype[Symbol.iterator] = function () {
        return {
          next: function () {
            return { done: !0, value: void 0 };
          },
        };
      }),
      (e.prototype.else = function (t) {
        return t;
      }),
      (e.prototype.unwrapOr = function (t) {
        return t;
      }),
      (e.prototype.expect = function (t) {
        throw new Error(
          ""
            .concat(t, " - Error: ")
            .concat(
              Rt(this.error),
              `
`,
            )
            .concat(this._stack),
          { cause: this.error },
        );
      }),
      (e.prototype.expectErr = function (t) {
        return this.error;
      }),
      (e.prototype.unwrap = function () {
        throw new Error(
          "Tried to unwrap Error: "
            .concat(
              Rt(this.error),
              `
`,
            )
            .concat(this._stack),
          { cause: this.error },
        );
      }),
      (e.prototype.unwrapErr = function () {
        return this.error;
      }),
      (e.prototype.map = function (t) {
        return this;
      }),
      (e.prototype.andThen = function (t) {
        return this;
      }),
      (e.prototype.mapErr = function (t) {
        return new R(t(this.error));
      }),
      (e.prototype.mapOr = function (t, n) {
        return t;
      }),
      (e.prototype.mapOrElse = function (t, n) {
        return t(this.error);
      }),
      (e.prototype.or = function (t) {
        return t;
      }),
      (e.prototype.orElse = function (t) {
        return t(this.error);
      }),
      (e.prototype.toOption = function () {
        return O;
      }),
      (e.prototype.toString = function () {
        return "Err(".concat(Rt(this.error), ")");
      }),
      Object.defineProperty(e.prototype, "stack", {
        get: function () {
          return ""
            .concat(
              this,
              `
`,
            )
            .concat(this._stack);
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.toAsyncResult = function () {
        return new fn(this);
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })();
var R = Qy,
  Ky = (function () {
    function e(t) {
      if (!(this instanceof e)) return new e(t);
      this.value = t;
    }
    return (
      (e.prototype.isOk = function () {
        return !0;
      }),
      (e.prototype.isErr = function () {
        return !1;
      }),
      (e.prototype[Symbol.iterator] = function () {
        var t = Object(this.value);
        return Symbol.iterator in t
          ? t[Symbol.iterator]()
          : {
              next: function () {
                return { done: !0, value: void 0 };
              },
            };
      }),
      (e.prototype.else = function (t) {
        return this.value;
      }),
      (e.prototype.unwrapOr = function (t) {
        return this.value;
      }),
      (e.prototype.expect = function (t) {
        return this.value;
      }),
      (e.prototype.expectErr = function (t) {
        throw new Error(t);
      }),
      (e.prototype.unwrap = function () {
        return this.value;
      }),
      (e.prototype.unwrapErr = function () {
        throw new Error("Tried to unwrap Ok: ".concat(Rt(this.value)), {
          cause: this.value,
        });
      }),
      (e.prototype.map = function (t) {
        return new B(t(this.value));
      }),
      (e.prototype.andThen = function (t) {
        return t(this.value);
      }),
      (e.prototype.mapErr = function (t) {
        return this;
      }),
      (e.prototype.mapOr = function (t, n) {
        return n(this.value);
      }),
      (e.prototype.mapOrElse = function (t, n) {
        return n(this.value);
      }),
      (e.prototype.or = function (t) {
        return this;
      }),
      (e.prototype.orElse = function (t) {
        return this;
      }),
      (e.prototype.toOption = function () {
        return V(this.value);
      }),
      (e.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (e.prototype.toString = function () {
        return "Ok(".concat(Rt(this.value), ")");
      }),
      (e.prototype.toAsyncResult = function () {
        return new fn(this);
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })();
var B = Ky,
  Ni;
(function (e) {
  function t(u) {
    for (var s = [], l = 1; l < arguments.length; l++) s[l - 1] = arguments[l];
    for (
      var c = u === void 0 ? [] : Array.isArray(u) ? u : pr([u], s, !0),
        d = [],
        f = 0,
        _ = c;
      f < _.length;
      f++
    ) {
      var g = _[f];
      if (g.isOk()) d.push(g.value);
      else return g;
    }
    return new B(d);
  }
  e.all = t;
  function n(u) {
    for (var s = [], l = 1; l < arguments.length; l++) s[l - 1] = arguments[l];
    for (
      var c = u === void 0 ? [] : Array.isArray(u) ? u : pr([u], s, !0),
        d = [],
        f = 0,
        _ = c;
      f < _.length;
      f++
    ) {
      var g = _[f];
      if (g.isOk()) return g;
      d.push(g.error);
    }
    return new R(d);
  }
  e.any = n;
  function i(u) {
    try {
      return new B(u());
    } catch (s) {
      return new R(s);
    }
  }
  e.wrap = i;
  function r(u) {
    try {
      return u()
        .then(function (s) {
          return new B(s);
        })
        .catch(function (s) {
          return new R(s);
        });
    } catch (s) {
      return Promise.resolve(new R(s));
    }
  }
  e.wrapAsync = r;
  function o(u) {
    return u.reduce(
      function (s, l) {
        var c = s[0],
          d = s[1];
        return l.isOk()
          ? [pr(pr([], c, !0), [l.value], !1), d]
          : [c, pr(pr([], d, !0), [l.error], !1)];
      },
      [[], []],
    );
  }
  e.partition = o;
  function a(u) {
    return u instanceof R || u instanceof B;
  }
  e.isResult = a;
})(Ni || (Ni = {}));
var Mi = function (e, t, n, i) {
    function r(o) {
      return o instanceof n
        ? o
        : new n(function (a) {
            a(o);
          });
    }
    return new (n || (n = Promise))(function (o, a) {
      function u(c) {
        try {
          l(i.next(c));
        } catch (d) {
          a(d);
        }
      }
      function s(c) {
        try {
          l(i.throw(c));
        } catch (d) {
          a(d);
        }
      }
      function l(c) {
        c.done ? o(c.value) : r(c.value).then(u, s);
      }
      l((i = i.apply(e, t || [])).next());
    });
  },
  Ci = function (e, t) {
    var n = {
        label: 0,
        sent: function () {
          if (o[0] & 1) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      },
      i,
      r,
      o,
      a;
    return (
      (a = { next: u(0), throw: u(1), return: u(2) }),
      typeof Symbol == "function" &&
        (a[Symbol.iterator] = function () {
          return this;
        }),
      a
    );
    function u(l) {
      return function (c) {
        return s([l, c]);
      };
    }
    function s(l) {
      if (i) throw new TypeError("Generator is already executing.");
      for (; a && ((a = 0), l[0] && (n = 0)), n; )
        try {
          if (
            ((i = 1),
            r &&
              (o =
                l[0] & 2
                  ? r.return
                  : l[0]
                    ? r.throw || ((o = r.return) && o.call(r), 0)
                    : r.next) &&
              !(o = o.call(r, l[1])).done)
          )
            return o;
          switch (((r = 0), o && (l = [l[0] & 2, o.value]), l[0])) {
            case 0:
            case 1:
              o = l;
              break;
            case 4:
              return (n.label++, { value: l[1], done: !1 });
            case 5:
              (n.label++, (r = l[1]), (l = [0]));
              continue;
            case 7:
              ((l = n.ops.pop()), n.trys.pop());
              continue;
            default:
              if (
                ((o = n.trys),
                !(o = o.length > 0 && o[o.length - 1]) &&
                  (l[0] === 6 || l[0] === 2))
              ) {
                n = 0;
                continue;
              }
              if (l[0] === 3 && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                n.label = l[1];
                break;
              }
              if (l[0] === 6 && n.label < o[1]) {
                ((n.label = o[1]), (o = l));
                break;
              }
              if (o && n.label < o[2]) {
                ((n.label = o[2]), n.ops.push(l));
                break;
              }
              (o[2] && n.ops.pop(), n.trys.pop());
              continue;
          }
          l = t.call(e, n);
        } catch (c) {
          ((l = [6, c]), (r = 0));
        } finally {
          i = o = 0;
        }
      if (l[0] & 5) throw l[1];
      return { value: l[0] ? l[1] : void 0, done: !0 };
    }
  },
  fn = (function () {
    function e(t) {
      this.promise = Promise.resolve(t);
    }
    return (
      (e.prototype.andThen = function (t) {
        var n = this;
        return this.thenInternal(function (i) {
          return Mi(n, void 0, void 0, function () {
            var r;
            return Ci(this, function (o) {
              return i.isErr()
                ? [2, i]
                : ((r = t(i.value)), [2, r instanceof e ? r.promise : r]);
            });
          });
        });
      }),
      (e.prototype.map = function (t) {
        var n = this;
        return this.thenInternal(function (i) {
          return Mi(n, void 0, void 0, function () {
            var r;
            return Ci(this, function (o) {
              switch (o.label) {
                case 0:
                  return i.isErr() ? [2, i] : ((r = B), [4, t(i.value)]);
                case 1:
                  return [2, r.apply(void 0, [o.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.mapErr = function (t) {
        var n = this;
        return this.thenInternal(function (i) {
          return Mi(n, void 0, void 0, function () {
            var r;
            return Ci(this, function (o) {
              switch (o.label) {
                case 0:
                  return i.isOk() ? [2, i] : ((r = R), [4, t(i.error)]);
                case 1:
                  return [2, r.apply(void 0, [o.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.or = function (t) {
        return this.orElse(function () {
          return t;
        });
      }),
      (e.prototype.orElse = function (t) {
        var n = this;
        return this.thenInternal(function (i) {
          return Mi(n, void 0, void 0, function () {
            var r;
            return Ci(this, function (o) {
              return i.isOk()
                ? [2, i]
                : ((r = t(i.error)), [2, r instanceof e ? r.promise : r]);
            });
          });
        });
      }),
      (e.prototype.toOption = function () {
        return new _n(
          this.promise.then(function (t) {
            return t.toOption();
          }),
        );
      }),
      (e.prototype.thenInternal = function (t) {
        return new e(this.promise.then(t));
      }),
      e
    );
  })();
var As = function (e, t, n, i) {
    function r(o) {
      return o instanceof n
        ? o
        : new n(function (a) {
            a(o);
          });
    }
    return new (n || (n = Promise))(function (o, a) {
      function u(c) {
        try {
          l(i.next(c));
        } catch (d) {
          a(d);
        }
      }
      function s(c) {
        try {
          l(i.throw(c));
        } catch (d) {
          a(d);
        }
      }
      function l(c) {
        c.done ? o(c.value) : r(c.value).then(u, s);
      }
      l((i = i.apply(e, t || [])).next());
    });
  },
  Es = function (e, t) {
    var n = {
        label: 0,
        sent: function () {
          if (o[0] & 1) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      },
      i,
      r,
      o,
      a;
    return (
      (a = { next: u(0), throw: u(1), return: u(2) }),
      typeof Symbol == "function" &&
        (a[Symbol.iterator] = function () {
          return this;
        }),
      a
    );
    function u(l) {
      return function (c) {
        return s([l, c]);
      };
    }
    function s(l) {
      if (i) throw new TypeError("Generator is already executing.");
      for (; a && ((a = 0), l[0] && (n = 0)), n; )
        try {
          if (
            ((i = 1),
            r &&
              (o =
                l[0] & 2
                  ? r.return
                  : l[0]
                    ? r.throw || ((o = r.return) && o.call(r), 0)
                    : r.next) &&
              !(o = o.call(r, l[1])).done)
          )
            return o;
          switch (((r = 0), o && (l = [l[0] & 2, o.value]), l[0])) {
            case 0:
            case 1:
              o = l;
              break;
            case 4:
              return (n.label++, { value: l[1], done: !1 });
            case 5:
              (n.label++, (r = l[1]), (l = [0]));
              continue;
            case 7:
              ((l = n.ops.pop()), n.trys.pop());
              continue;
            default:
              if (
                ((o = n.trys),
                !(o = o.length > 0 && o[o.length - 1]) &&
                  (l[0] === 6 || l[0] === 2))
              ) {
                n = 0;
                continue;
              }
              if (l[0] === 3 && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                n.label = l[1];
                break;
              }
              if (l[0] === 6 && n.label < o[1]) {
                ((n.label = o[1]), (o = l));
                break;
              }
              if (o && n.label < o[2]) {
                ((n.label = o[2]), n.ops.push(l));
                break;
              }
              (o[2] && n.ops.pop(), n.trys.pop());
              continue;
          }
          l = t.call(e, n);
        } catch (c) {
          ((l = [6, c]), (r = 0));
        } finally {
          i = o = 0;
        }
      if (l[0] & 5) throw l[1];
      return { value: l[0] ? l[1] : void 0, done: !0 };
    }
  },
  _n = (function () {
    function e(t) {
      this.promise = Promise.resolve(t);
    }
    return (
      (e.prototype.andThen = function (t) {
        var n = this;
        return this.thenInternal(function (i) {
          return As(n, void 0, void 0, function () {
            var r;
            return Es(this, function (o) {
              return i.isNone()
                ? [2, i]
                : ((r = t(i.value)), [2, r instanceof e ? r.promise : r]);
            });
          });
        });
      }),
      (e.prototype.map = function (t) {
        var n = this;
        return this.thenInternal(function (i) {
          return As(n, void 0, void 0, function () {
            var r;
            return Es(this, function (o) {
              switch (o.label) {
                case 0:
                  return i.isNone() ? [2, i] : ((r = V), [4, t(i.value)]);
                case 1:
                  return [2, r.apply(void 0, [o.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.or = function (t) {
        return this.orElse(function () {
          return t;
        });
      }),
      (e.prototype.orElse = function (t) {
        var n = this;
        return this.thenInternal(function (i) {
          return As(n, void 0, void 0, function () {
            var r;
            return Es(this, function (o) {
              return i.isSome()
                ? [2, i]
                : ((r = t()), [2, r instanceof e ? r.promise : r]);
            });
          });
        });
      }),
      (e.prototype.toResult = function (t) {
        return new fn(
          this.promise.then(function (n) {
            return n.toResult(t);
          }),
        );
      }),
      (e.prototype.thenInternal = function (t) {
        return new e(this.promise.then(t));
      }),
      e
    );
  })();
function Ae(e) {
  if (e.__serde_tag == "primitive") return e.__serde_val;
  if (e.__serde_tag == "object") {
    let t = {};
    for (let [n, i] of Object.entries(e.__serde_val)) {
      let r = i;
      t[n] = Ae(r);
    }
    return t;
  } else {
    if (e.__serde_tag == "map")
      return new Map(e.__serde_val.map(([t, n]) => [Ae(t), Ae(n)]));
    if (e.__serde_tag == "set") return new Set(e.__serde_val.map(Ae));
    if (e.__serde_tag == "url") return new URL(e.__serde_val);
    if (e.__serde_tag == "array") return e.__serde_val.map(Ae);
    if (e.__serde_tag == "headers") return new Headers(e.__serde_val);
    if (e.__serde_tag == "regex")
      return new RegExp(e.__serde_val[0], e.__serde_val[1]);
    if (e.__serde_tag == "some") return V(Ae(e.__serde_val));
    if (e.__serde_tag == "none") return O;
    if (e.__serde_tag == "ok") return B(Ae(e.__serde_val));
    if (e.__serde_tag == "err") return R(Ae(e.__serde_val));
    throw new Error("Unreachable");
  }
}
function se(e) {
  if (typeof e == "string") return { __serde_tag: "primitive", __serde_val: e };
  if (typeof e == "number") return { __serde_tag: "primitive", __serde_val: e };
  if (typeof e == "boolean")
    return { __serde_tag: "primitive", __serde_val: e };
  if (typeof e > "u") return { __serde_tag: "primitive", __serde_val: e };
  if (e == null) return { __serde_tag: "primitive", __serde_val: e };
  if (Array.isArray(e))
    return { __serde_tag: "array", __serde_val: e.map((t) => se(t)) };
  if (e instanceof URL) return { __serde_tag: "url", __serde_val: e.href };
  if (e instanceof Headers) {
    let t = [];
    return (
      e.forEach((n, i) => {
        t.push([i, n]);
      }),
      { __serde_tag: "headers", __serde_val: t }
    );
  } else {
    if (e instanceof Set)
      return { __serde_tag: "set", __serde_val: [...e.values()].map(se) };
    if (e instanceof Map)
      return {
        __serde_tag: "map",
        __serde_val: [...e.entries()].map(([t, n]) => [se(t), se(n)]),
      };
    if (e instanceof RegExp)
      return { __serde_tag: "regex", __serde_val: [e.source, e.flags] };
    if (Ri.isOption(e))
      return e.isSome()
        ? { __serde_tag: "some", __serde_val: se(e.value) }
        : { __serde_tag: "none" };
    if (Ni.isResult(e))
      return e.isOk()
        ? { __serde_tag: "ok", __serde_val: se(e.value) }
        : { __serde_tag: "err", __serde_val: se(e.error) };
    if (typeof e == "object") {
      let t = {};
      for (let [n, i] of Object.entries(e)) t[n] = se(i);
      return { __serde_tag: "object", __serde_val: t };
    } else throw new Error("Unreachable");
  }
}
function Fe(e) {
  return Ae(se(e));
}
var Ct = ye(Te(), 1);
Pe();
Ts();
var ks = new BroadcastChannel("worker_service");
function fr(e) {
  let t = ht.FromServiceToWorker;
  ks.postMessage({ msg: e, channel: t });
}
function Gt(e) {
  let t = (n) => {
    let i = n.data.msg;
    n.data.channel == ht.FromWorkerToService && e(i);
  };
  return (
    ks.addEventListener("message", t),
    () => {
      ks.removeEventListener("message", t);
    }
  );
}
var ht = {
  FromInjectedToService: 0,
  FromContentToService: 1,
  FromServiceToWorker: 2,
  FromWorkerToService: 3,
  FromUntrustedInjectedToTrusted: 4,
  FromTrustedInjectedToUntrusted: 5,
  FromServiceToContent: 6,
  FromServiceToInjected: 7,
  FromServiceToService: 8,
};
var Dp = !1;
async function Xy() {
  if (!ke) {
    Dp || ((Dp = !0), await Promise.resolve().then(() => (xp(), Yy)));
    return;
  }
  try {
    await chrome.offscreen.createDocument({
      url: "/factory/factory.html",
      reasons: [chrome.offscreen.Reason.WORKERS],
      justification: "Needed to create workers",
    });
  } catch (e) {
    if (
      (e instanceof Error ? e.message : e) !==
      "Only a single offscreen document may be created."
    )
      throw e;
  }
}
async function ji() {
  (await Xy(),
    await new Promise((e, t) => {
      let n = setTimeout(() => {
          Fi() && t("Timed out waiting for the worker to start");
        }, 1e4),
        i = Gt((r) => {
          r.name == "is_ready_success" && (clearTimeout(n), e(), i());
        });
      fr({ name: "is_ready", data: null });
    }));
}
Pe();
function $s(e, t) {
  let n = new URLSearchParams();
  for (let [i, r] of e) n.set(i, r);
  for (let [i, r] of t) n.set(i, r);
  return n.toString();
}
function he(e, t) {
  try {
    if (e) return V(new URL(e, t));
  } catch {}
  return O;
}
function $e(e) {
  return e && e > 0 ? V(e) : O;
}
function zs(e) {
  return e && e > 0 ? V(e) : O;
}
var Ap = ["mp4", "webm", "mkv"],
  Ep = ["mp3", "m4a", "ogg"],
  Os = [...Ap, ...Ep];
function Tp(e) {
  return Os.includes(e);
}
function hn(e) {
  return Ap.includes(e);
}
function Wt(e) {
  return Ep.includes(e);
}
function Li(e, t) {
  return hn(e) ? nt(e, t) : eb(e);
}
function eb(e) {
  if (e == "mp3") return "mp3";
  if (e == "m4a") return "mp3";
  if (e == "ogg") return "mp3";
  throw new Error("Unreachable");
}
function nt(e, t) {
  if (e == "mp4") return t;
  if (e == "webm") return "mkv";
  if (e == "mkv") return "mkv";
  throw new Error("Unreachable");
}
var tb = [
    { mime_reg: /(avc1|avc3).*/i, demuxer: "mp4", codec: "H264" },
    {
      mime_reg: /(hvc1|hev1|hevc|h265|h\.265).*/i,
      demuxer: "mp4",
      codec: "H265",
    },
    { mime_reg: /mp4v\.20.*/i, demuxer: "mp4", codec: "MP4V" },
    { mime_reg: /av0?1.*/i, demuxer: "webm", codec: "AV1" },
    { mime_reg: /vp0?8.*/i, demuxer: "webm", codec: "VP8" },
    { mime_reg: /vp0?9.*/i, demuxer: "webm", codec: "VP9" },
  ],
  rb = [
    { mime_reg: /(aac|mp4a.40).*/i, demuxer: "m4a", codec: "AAC" },
    { mime_reg: /(\.?mp3|mp4a\.69|mp4a\.6b).*/i, demuxer: "mp3", codec: "MP3" },
    { mime_reg: /(opus|(mp4a\.ad.*))/i, demuxer: "ogg", codec: "Opus" },
    { mime_reg: /vorbis/i, demuxer: "ogg", codec: "Vorbis" },
  ];
function Bi(e) {
  for (let t of tb) if (t.mime_reg.test(e)) return V(t.demuxer);
  return O;
}
function kp(e) {
  for (let t of rb) if (t.mime_reg.test(e)) return V(t.demuxer);
  return O;
}
var Ip = [
    { regex: /(?:x-)?(?:pn-)?wave?/i, audio: "wav", video: "wav" },
    { regex: /(?:x-)?3gpp2?/i, audio: "mp3", video: "3gpp" },
    { regex: /(?:x-)?flac/i, audio: "flac", video: "flac" },
    { regex: /(?:x-)?flv/i, audio: "mp3", video: "flv" },
    { regex: /(?:x-)?m4a/i, audio: "m4a", video: "m4a" },
    { regex: /(?:x-)?m4v/i, audio: "mp3", video: "m4v" },
    { regex: /(?:x-)?matroska/i, audio: "mp3", video: "mkv" },
    { regex: /(?:x-)?mov/i, audio: "mp3", video: "mov" },
    { regex: /(?:x-)?mp2t/i, audio: "mp3", video: "mp2t" },
    { regex: /(?:x-)?mp4/i, audio: "mp3", video: "mp4" },
    { regex: /(?:x-)?mpeg/i, audio: "mp3", video: "mpeg" },
    { regex: /(?:x-)?mts/i, audio: "mp3", video: "mt2s" },
    { regex: /(?:x-)?msvideo/i, audio: "avi", video: "avi" },
    { regex: /(?:x-)?og./i, audio: "oga", video: "ogv" },
    { regex: /(?:x-)?webm/i, audio: "oga", video: "webm" },
    { regex: /(?:x-)?mkv/i, audio: "mp3", video: "mkv" },
    { regex: /(?:x-)?vorbis/i, audio: "oga", video: "ogv" },
  ],
  nb = new Set([
    "3g2",
    "3gp",
    "aac",
    "ac3",
    "aiff",
    "amr",
    "ape",
    "asf",
    "au",
    "avi",
    "divx",
    "dts",
    "dv",
    "f4v",
    "flac",
    "flv",
    "h264",
    "m2t",
    "m2ts",
    "m2v",
    "m4a",
    "m4v",
    "mka",
    "mkv",
    "mov",
    "mp2",
    "mp3",
    "mp4",
    "mpe",
    "mpeg",
    "mpg",
    "mpv",
    "mts",
    "mxf",
    "oga",
    "ogg",
    "ogm",
    "ogv",
    "opus",
    "qt",
    "ra",
    "rm",
    "rmvb",
    "snd",
    "ts",
    "vob",
    "voc",
    "wav",
    "webm",
    "wma",
    "wmv",
    "wv",
    "y4m",
  ]);
function Pp(e) {
  return nb.has(e);
}
function ib(e, t) {
  let o = e.size.map((l) => l.height).unwrapOr(0),
    a = t.size.map((l) => l.height).unwrapOr(0),
    u = e.bitrate.unwrapOr(0),
    s = t.bitrate.unwrapOr(0);
  return o > a ? -1 : o < a ? 1 : u > s ? -1 : u < s ? 1 : 0;
}
function qi(e, t) {
  if (e.prefered_entry.isSome() && e.playlist[e.prefered_entry.value])
    return e.prefered_entry.value;
  if (t)
    for (let n of Os) {
      let i = 0;
      for (let { quality: r, demuxer: o } of e.playlist) {
        if (n == o && r.size.isSome() && r.size.value.height == t) return i;
        i++;
      }
    }
  else return 0;
  return 0;
}
function Hi(e) {
  let t = e.playlist.find(
      (i) => i.quality.size.isSome() && i.quality.size.value.height == 480,
    ),
    n = e.playlist.find(
      (i) => i.quality.size.isSome() && i.quality.size.value.height == 260,
    );
  return t || n || e.playlist[e.playlist.length - 1];
}
function Zi(e) {
  return [...e.values()].sort((t, n) => ib(t.quality, n.quality));
}
function Gi(e) {
  return e.length > 0;
}
function Wi() {
  return {
    current_win_tab: { tab_id: O, win_id: O },
    notifications: new Map(),
    discovered: new Map(),
    downloading: new Map(),
    transient_history: [],
    suspecting_saveas: !1,
  };
}
var Qi = (function () {
  function e() {
    this.listeners = {};
  }
  var t = e.prototype;
  return (
    (t.on = function (i, r) {
      (this.listeners[i] || (this.listeners[i] = []),
        this.listeners[i].push(r));
    }),
    (t.off = function (i, r) {
      if (!this.listeners[i]) return !1;
      var o = this.listeners[i].indexOf(r);
      return (
        (this.listeners[i] = this.listeners[i].slice(0)),
        this.listeners[i].splice(o, 1),
        o > -1
      );
    }),
    (t.trigger = function (i) {
      var r = this.listeners[i];
      if (r)
        if (arguments.length === 2)
          for (var o = r.length, a = 0; a < o; ++a)
            r[a].call(this, arguments[1]);
        else
          for (
            var u = Array.prototype.slice.call(arguments, 1),
              s = r.length,
              l = 0;
            l < s;
            ++l
          )
            r[l].apply(this, u);
    }),
    (t.dispose = function () {
      this.listeners = {};
    }),
    (t.pipe = function (i) {
      this.on("data", function (r) {
        i.push(r);
      });
    }),
    e
  );
})();
function Qt() {
  return (
    (Qt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) ({}).hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }),
    Qt.apply(null, arguments)
  );
}
var Ns = ye(Ki()),
  ob = function (t) {
    return Ns.default.atob
      ? Ns.default.atob(t)
      : Buffer.from(t, "base64").toString("binary");
  };
function vn(e) {
  for (var t = ob(e), n = new Uint8Array(t.length), i = 0; i < t.length; i++)
    n[i] = t.charCodeAt(i);
  return n;
}
var Us = class extends Qi {
    constructor() {
      (super(), (this.buffer = ""));
    }
    push(t) {
      let n;
      for (
        this.buffer += t,
          n = this.buffer.indexOf(`
`);
        n > -1;
        n = this.buffer.indexOf(`
`)
      )
        (this.trigger("data", this.buffer.substring(0, n)),
          (this.buffer = this.buffer.substring(n + 1)));
    }
  },
  ab = "	",
  Ms = function (e) {
    let t = /([0-9.]*)?@?([0-9.]*)?/.exec(e || ""),
      n = {};
    return (
      t[1] && (n.length = parseInt(t[1], 10)),
      t[2] && (n.offset = parseInt(t[2], 10)),
      n
    );
  },
  sb = function () {
    let n = "(?:" + "[^=]*" + ")=(?:" + '"[^"]*"|[^,]*' + ")";
    return new RegExp("(?:^|,)(" + n + ")");
  },
  ze = function (e) {
    let t = {};
    if (!e) return t;
    let n = e.split(sb()),
      i = n.length,
      r;
    for (; i--; )
      n[i] !== "" &&
        ((r = /([^=]*)=(.*)/.exec(n[i]).slice(1)),
        (r[0] = r[0].replace(/^\s+|\s+$/g, "")),
        (r[1] = r[1].replace(/^\s+|\s+$/g, "")),
        (r[1] = r[1].replace(/^['"](.*)['"]$/g, "$1")),
        (t[r[0]] = r[1]));
    return t;
  },
  zp = (e) => {
    let t = e.split("x"),
      n = {};
    return (
      t[0] && (n.width = parseInt(t[0], 10)),
      t[1] && (n.height = parseInt(t[1], 10)),
      n
    );
  },
  Fs = class extends Qi {
    constructor() {
      (super(), (this.customParsers = []), (this.tagMappers = []));
    }
    push(t) {
      let n, i;
      if (((t = t.trim()), t.length === 0)) return;
      if (t[0] !== "#") {
        this.trigger("data", { type: "uri", uri: t });
        return;
      }
      this.tagMappers
        .reduce(
          (o, a) => {
            let u = a(t);
            return u === t ? o : o.concat([u]);
          },
          [t],
        )
        .forEach((o) => {
          for (let a = 0; a < this.customParsers.length; a++)
            if (this.customParsers[a].call(this, o)) return;
          if (o.indexOf("#EXT") !== 0) {
            this.trigger("data", { type: "comment", text: o.slice(1) });
            return;
          }
          if (((o = o.replace("\r", "")), (n = /^#EXTM3U/.exec(o)), n)) {
            this.trigger("data", { type: "tag", tagType: "m3u" });
            return;
          }
          if (((n = /^#EXTINF:([0-9\.]*)?,?(.*)?$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "inf" }),
              n[1] && (i.duration = parseFloat(n[1])),
              n[2] && (i.title = n[2]),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-TARGETDURATION:([0-9.]*)?/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "targetduration" }),
              n[1] && (i.duration = parseInt(n[1], 10)),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-VERSION:([0-9.]*)?/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "version" }),
              n[1] && (i.version = parseInt(n[1], 10)),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-MEDIA-SEQUENCE:(\-?[0-9.]*)?/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "media-sequence" }),
              n[1] && (i.number = parseInt(n[1], 10)),
              this.trigger("data", i));
            return;
          }
          if (
            ((n = /^#EXT-X-DISCONTINUITY-SEQUENCE:(\-?[0-9.]*)?/.exec(o)), n)
          ) {
            ((i = { type: "tag", tagType: "discontinuity-sequence" }),
              n[1] && (i.number = parseInt(n[1], 10)),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-PLAYLIST-TYPE:(.*)?$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "playlist-type" }),
              n[1] && (i.playlistType = n[1]),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-BYTERANGE:(.*)?$/.exec(o)), n)) {
            ((i = Qt(Ms(n[1]), { type: "tag", tagType: "byterange" })),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-ALLOW-CACHE:(YES|NO)?/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "allow-cache" }),
              n[1] && (i.allowed = !/NO/.test(n[1])),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-MAP:(.*)$/.exec(o)), n)) {
            if (((i = { type: "tag", tagType: "map" }), n[1])) {
              let a = ze(n[1]);
              (a.URI && (i.uri = a.URI),
                a.BYTERANGE && (i.byterange = Ms(a.BYTERANGE)));
            }
            this.trigger("data", i);
            return;
          }
          if (((n = /^#EXT-X-STREAM-INF:(.*)$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "stream-inf" }),
              n[1] &&
                ((i.attributes = ze(n[1])),
                i.attributes.RESOLUTION &&
                  (i.attributes.RESOLUTION = zp(i.attributes.RESOLUTION)),
                i.attributes.BANDWIDTH &&
                  (i.attributes.BANDWIDTH = parseInt(
                    i.attributes.BANDWIDTH,
                    10,
                  )),
                i.attributes["FRAME-RATE"] &&
                  (i.attributes["FRAME-RATE"] = parseFloat(
                    i.attributes["FRAME-RATE"],
                  )),
                i.attributes["PROGRAM-ID"] &&
                  (i.attributes["PROGRAM-ID"] = parseInt(
                    i.attributes["PROGRAM-ID"],
                    10,
                  ))),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-MEDIA:(.*)$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "media" }),
              n[1] && (i.attributes = ze(n[1])),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-ENDLIST/.exec(o)), n)) {
            this.trigger("data", { type: "tag", tagType: "endlist" });
            return;
          }
          if (((n = /^#EXT-X-DISCONTINUITY/.exec(o)), n)) {
            this.trigger("data", { type: "tag", tagType: "discontinuity" });
            return;
          }
          if (((n = /^#EXT-X-PROGRAM-DATE-TIME:(.*)$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "program-date-time" }),
              n[1] &&
                ((i.dateTimeString = n[1]),
                (i.dateTimeObject = new Date(n[1]))),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-KEY:(.*)$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "key" }),
              n[1] &&
                ((i.attributes = ze(n[1])),
                i.attributes.IV &&
                  (i.attributes.IV.substring(0, 2).toLowerCase() === "0x" &&
                    (i.attributes.IV = i.attributes.IV.substring(2)),
                  (i.attributes.IV = i.attributes.IV.match(/.{8}/g)),
                  (i.attributes.IV[0] = parseInt(i.attributes.IV[0], 16)),
                  (i.attributes.IV[1] = parseInt(i.attributes.IV[1], 16)),
                  (i.attributes.IV[2] = parseInt(i.attributes.IV[2], 16)),
                  (i.attributes.IV[3] = parseInt(i.attributes.IV[3], 16)),
                  (i.attributes.IV = new Uint32Array(i.attributes.IV)))),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-START:(.*)$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "start" }),
              n[1] &&
                ((i.attributes = ze(n[1])),
                (i.attributes["TIME-OFFSET"] = parseFloat(
                  i.attributes["TIME-OFFSET"],
                )),
                (i.attributes.PRECISE = /YES/.test(i.attributes.PRECISE))),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-CUE-OUT-CONT:(.*)?$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "cue-out-cont" }),
              n[1] ? (i.data = n[1]) : (i.data = ""),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-CUE-OUT:(.*)?$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "cue-out" }),
              n[1] ? (i.data = n[1]) : (i.data = ""),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-CUE-IN:?(.*)?$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "cue-in" }),
              n[1] ? (i.data = n[1]) : (i.data = ""),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-SKIP:(.*)$/.exec(o)), n && n[1])) {
            ((i = { type: "tag", tagType: "skip" }),
              (i.attributes = ze(n[1])),
              i.attributes.hasOwnProperty("SKIPPED-SEGMENTS") &&
                (i.attributes["SKIPPED-SEGMENTS"] = parseInt(
                  i.attributes["SKIPPED-SEGMENTS"],
                  10,
                )),
              i.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES") &&
                (i.attributes["RECENTLY-REMOVED-DATERANGES"] =
                  i.attributes["RECENTLY-REMOVED-DATERANGES"].split(ab)),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-PART:(.*)$/.exec(o)), n && n[1])) {
            ((i = { type: "tag", tagType: "part" }),
              (i.attributes = ze(n[1])),
              ["DURATION"].forEach(function (a) {
                i.attributes.hasOwnProperty(a) &&
                  (i.attributes[a] = parseFloat(i.attributes[a]));
              }),
              ["INDEPENDENT", "GAP"].forEach(function (a) {
                i.attributes.hasOwnProperty(a) &&
                  (i.attributes[a] = /YES/.test(i.attributes[a]));
              }),
              i.attributes.hasOwnProperty("BYTERANGE") &&
                (i.attributes.byterange = Ms(i.attributes.BYTERANGE)),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-SERVER-CONTROL:(.*)$/.exec(o)), n && n[1])) {
            ((i = { type: "tag", tagType: "server-control" }),
              (i.attributes = ze(n[1])),
              ["CAN-SKIP-UNTIL", "PART-HOLD-BACK", "HOLD-BACK"].forEach(
                function (a) {
                  i.attributes.hasOwnProperty(a) &&
                    (i.attributes[a] = parseFloat(i.attributes[a]));
                },
              ),
              ["CAN-SKIP-DATERANGES", "CAN-BLOCK-RELOAD"].forEach(function (a) {
                i.attributes.hasOwnProperty(a) &&
                  (i.attributes[a] = /YES/.test(i.attributes[a]));
              }),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-PART-INF:(.*)$/.exec(o)), n && n[1])) {
            ((i = { type: "tag", tagType: "part-inf" }),
              (i.attributes = ze(n[1])),
              ["PART-TARGET"].forEach(function (a) {
                i.attributes.hasOwnProperty(a) &&
                  (i.attributes[a] = parseFloat(i.attributes[a]));
              }),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-PRELOAD-HINT:(.*)$/.exec(o)), n && n[1])) {
            ((i = { type: "tag", tagType: "preload-hint" }),
              (i.attributes = ze(n[1])),
              ["BYTERANGE-START", "BYTERANGE-LENGTH"].forEach(function (a) {
                if (i.attributes.hasOwnProperty(a)) {
                  i.attributes[a] = parseInt(i.attributes[a], 10);
                  let u = a === "BYTERANGE-LENGTH" ? "length" : "offset";
                  ((i.attributes.byterange = i.attributes.byterange || {}),
                    (i.attributes.byterange[u] = i.attributes[a]),
                    delete i.attributes[a]);
                }
              }),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-RENDITION-REPORT:(.*)$/.exec(o)), n && n[1])) {
            ((i = { type: "tag", tagType: "rendition-report" }),
              (i.attributes = ze(n[1])),
              ["LAST-MSN", "LAST-PART"].forEach(function (a) {
                i.attributes.hasOwnProperty(a) &&
                  (i.attributes[a] = parseInt(i.attributes[a], 10));
              }),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-DATERANGE:(.*)$/.exec(o)), n && n[1])) {
            ((i = { type: "tag", tagType: "daterange" }),
              (i.attributes = ze(n[1])),
              ["ID", "CLASS"].forEach(function (u) {
                i.attributes.hasOwnProperty(u) &&
                  (i.attributes[u] = String(i.attributes[u]));
              }),
              ["START-DATE", "END-DATE"].forEach(function (u) {
                i.attributes.hasOwnProperty(u) &&
                  (i.attributes[u] = new Date(i.attributes[u]));
              }),
              ["DURATION", "PLANNED-DURATION"].forEach(function (u) {
                i.attributes.hasOwnProperty(u) &&
                  (i.attributes[u] = parseFloat(i.attributes[u]));
              }),
              ["END-ON-NEXT"].forEach(function (u) {
                i.attributes.hasOwnProperty(u) &&
                  (i.attributes[u] = /YES/i.test(i.attributes[u]));
              }),
              ["SCTE35-CMD", " SCTE35-OUT", "SCTE35-IN"].forEach(function (u) {
                i.attributes.hasOwnProperty(u) &&
                  (i.attributes[u] = i.attributes[u].toString(16));
              }));
            let a = /^X-([A-Z]+-)+[A-Z]+$/;
            for (let u in i.attributes) {
              if (!a.test(u)) continue;
              let s = /[0-9A-Fa-f]{6}/g.test(i.attributes[u]),
                l = /^\d+(\.\d+)?$/.test(i.attributes[u]);
              i.attributes[u] = s
                ? i.attributes[u].toString(16)
                : l
                  ? parseFloat(i.attributes[u])
                  : String(i.attributes[u]);
            }
            this.trigger("data", i);
            return;
          }
          if (((n = /^#EXT-X-INDEPENDENT-SEGMENTS/.exec(o)), n)) {
            this.trigger("data", {
              type: "tag",
              tagType: "independent-segments",
            });
            return;
          }
          if (((n = /^#EXT-X-I-FRAMES-ONLY/.exec(o)), n)) {
            this.trigger("data", { type: "tag", tagType: "i-frames-only" });
            return;
          }
          if (((n = /^#EXT-X-CONTENT-STEERING:(.*)$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "content-steering" }),
              (i.attributes = ze(n[1])),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-I-FRAME-STREAM-INF:(.*)$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "i-frame-playlist" }),
              (i.attributes = ze(n[1])),
              i.attributes.URI && (i.uri = i.attributes.URI),
              i.attributes.BANDWIDTH &&
                (i.attributes.BANDWIDTH = parseInt(i.attributes.BANDWIDTH, 10)),
              i.attributes.RESOLUTION &&
                (i.attributes.RESOLUTION = zp(i.attributes.RESOLUTION)),
              i.attributes["AVERAGE-BANDWIDTH"] &&
                (i.attributes["AVERAGE-BANDWIDTH"] = parseInt(
                  i.attributes["AVERAGE-BANDWIDTH"],
                  10,
                )),
              i.attributes["FRAME-RATE"] &&
                (i.attributes["FRAME-RATE"] = parseFloat(
                  i.attributes["FRAME-RATE"],
                )),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-DEFINE:(.*)$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "define" }),
              (i.attributes = ze(n[1])),
              this.trigger("data", i));
            return;
          }
          this.trigger("data", { type: "tag", data: o.slice(4) });
        });
    }
    addParser({ expression: t, customType: n, dataParser: i, segment: r }) {
      (typeof i != "function" && (i = (o) => o),
        this.customParsers.push((o) => {
          if (t.exec(o))
            return (
              this.trigger("data", {
                type: "custom",
                data: i(o),
                customType: n,
                segment: r,
              }),
              !0
            );
        }));
    }
    addTagMapper({ expression: t, map: n }) {
      let i = (r) => (t.test(r) ? n(r) : r);
      this.tagMappers.push(i);
    }
  },
  ub = (e) => e.toLowerCase().replace(/-(\w)/g, (t) => t[1].toUpperCase()),
  Nt = function (e) {
    let t = {};
    return (
      Object.keys(e).forEach(function (n) {
        t[ub(n)] = e[n];
      }),
      t
    );
  },
  Cs = function (e) {
    let { serverControl: t, targetDuration: n, partTargetDuration: i } = e;
    if (!t) return;
    let r = "#EXT-X-SERVER-CONTROL",
      o = "holdBack",
      a = "partHoldBack",
      u = n && n * 3,
      s = i && i * 2;
    (n &&
      !t.hasOwnProperty(o) &&
      ((t[o] = u),
      this.trigger("info", {
        message: `${r} defaulting HOLD-BACK to targetDuration * 3 (${u}).`,
      })),
      u &&
        t[o] < u &&
        (this.trigger("warn", {
          message: `${r} clamping HOLD-BACK (${t[o]}) to targetDuration * 3 (${u})`,
        }),
        (t[o] = u)),
      i &&
        !t.hasOwnProperty(a) &&
        ((t[a] = i * 3),
        this.trigger("info", {
          message: `${r} defaulting PART-HOLD-BACK to partTargetDuration * 3 (${t[a]}).`,
        })),
      i &&
        t[a] < s &&
        (this.trigger("warn", {
          message: `${r} clamping PART-HOLD-BACK (${t[a]}) to partTargetDuration * 2 (${s}).`,
        }),
        (t[a] = s)));
  },
  yn = class extends Qi {
    constructor(t = {}) {
      (super(),
        (this.lineStream = new Us()),
        (this.parseStream = new Fs()),
        this.lineStream.pipe(this.parseStream),
        (this.mainDefinitions = t.mainDefinitions || {}),
        (this.params = new URL(t.uri, "https://a.com").searchParams),
        (this.lastProgramDateTime = null));
      let n = this,
        i = [],
        r = {},
        o,
        a,
        u = !1,
        s = function () {},
        l = { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} },
        c = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
        d = 0;
      this.manifest = {
        allowCache: !0,
        discontinuityStarts: [],
        dateRanges: [],
        iFramePlaylists: [],
        segments: [],
      };
      let f = 0,
        _ = 0,
        g = {};
      (this.on("end", () => {
        r.uri ||
          (!r.parts && !r.preloadHints) ||
          (!r.map && o && (r.map = o),
          !r.key && a && (r.key = a),
          !r.timeline && typeof d == "number" && (r.timeline = d),
          (this.manifest.preloadSegment = r));
      }),
        this.parseStream.on("data", function (m) {
          let A, I;
          if (n.manifest.definitions) {
            for (let w in n.manifest.definitions)
              if (
                (m.uri &&
                  (m.uri = m.uri.replace(`{$${w}}`, n.manifest.definitions[w])),
                m.attributes)
              )
                for (let y in m.attributes)
                  typeof m.attributes[y] == "string" &&
                    (m.attributes[y] = m.attributes[y].replace(
                      `{$${w}}`,
                      n.manifest.definitions[w],
                    ));
          }
          ({
            tag() {
              (
                ({
                  version() {
                    m.version && (this.manifest.version = m.version);
                  },
                  "allow-cache"() {
                    ((this.manifest.allowCache = m.allowed),
                      "allowed" in m ||
                        (this.trigger("info", {
                          message: "defaulting allowCache to YES",
                        }),
                        (this.manifest.allowCache = !0)));
                  },
                  byterange() {
                    let w = {};
                    ("length" in m &&
                      ((r.byterange = w),
                      (w.length = m.length),
                      "offset" in m || (m.offset = f)),
                      "offset" in m &&
                        ((r.byterange = w), (w.offset = m.offset)),
                      (f = w.offset + w.length));
                  },
                  endlist() {
                    this.manifest.endList = !0;
                  },
                  inf() {
                    ("mediaSequence" in this.manifest ||
                      ((this.manifest.mediaSequence = 0),
                      this.trigger("info", {
                        message: "defaulting media sequence to zero",
                      })),
                      "discontinuitySequence" in this.manifest ||
                        ((this.manifest.discontinuitySequence = 0),
                        this.trigger("info", {
                          message: "defaulting discontinuity sequence to zero",
                        })),
                      m.title && (r.title = m.title),
                      m.duration > 0 && (r.duration = m.duration),
                      m.duration === 0 &&
                        ((r.duration = 0.01),
                        this.trigger("info", {
                          message:
                            "updating zero segment duration to a small value",
                        })),
                      (this.manifest.segments = i));
                  },
                  key() {
                    if (!m.attributes) {
                      this.trigger("warn", {
                        message:
                          "ignoring key declaration without attribute list",
                      });
                      return;
                    }
                    if (m.attributes.METHOD === "NONE") {
                      a = null;
                      return;
                    }
                    if (!m.attributes.URI) {
                      this.trigger("warn", {
                        message: "ignoring key declaration without URI",
                      });
                      return;
                    }
                    if (
                      m.attributes.KEYFORMAT ===
                      "com.apple.streamingkeydelivery"
                    ) {
                      ((this.manifest.contentProtection =
                        this.manifest.contentProtection || {}),
                        (this.manifest.contentProtection["com.apple.fps.1_0"] =
                          { attributes: m.attributes }));
                      return;
                    }
                    if (m.attributes.KEYFORMAT === "com.microsoft.playready") {
                      ((this.manifest.contentProtection =
                        this.manifest.contentProtection || {}),
                        (this.manifest.contentProtection[
                          "com.microsoft.playready"
                        ] = { uri: m.attributes.URI }));
                      return;
                    }
                    if (m.attributes.KEYFORMAT === c) {
                      if (
                        [
                          "SAMPLE-AES",
                          "SAMPLE-AES-CTR",
                          "SAMPLE-AES-CENC",
                        ].indexOf(m.attributes.METHOD) === -1
                      ) {
                        this.trigger("warn", {
                          message: "invalid key method provided for Widevine",
                        });
                        return;
                      }
                      if (
                        (m.attributes.METHOD === "SAMPLE-AES-CENC" &&
                          this.trigger("warn", {
                            message:
                              "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead",
                          }),
                        m.attributes.URI.substring(0, 23) !==
                          "data:text/plain;base64,")
                      ) {
                        this.trigger("warn", {
                          message: "invalid key URI provided for Widevine",
                        });
                        return;
                      }
                      if (
                        !(
                          m.attributes.KEYID &&
                          m.attributes.KEYID.substring(0, 2) === "0x"
                        )
                      ) {
                        this.trigger("warn", {
                          message: "invalid key ID provided for Widevine",
                        });
                        return;
                      }
                      ((this.manifest.contentProtection =
                        this.manifest.contentProtection || {}),
                        (this.manifest.contentProtection["com.widevine.alpha"] =
                          {
                            attributes: {
                              schemeIdUri: m.attributes.KEYFORMAT,
                              keyId: m.attributes.KEYID.substring(2),
                            },
                            pssh: vn(m.attributes.URI.split(",")[1]),
                          }));
                      return;
                    }
                    (m.attributes.METHOD ||
                      this.trigger("warn", {
                        message: "defaulting key method to AES-128",
                      }),
                      (a = {
                        method: m.attributes.METHOD || "AES-128",
                        uri: m.attributes.URI,
                      }),
                      typeof m.attributes.IV < "u" && (a.iv = m.attributes.IV));
                  },
                  "media-sequence"() {
                    if (!isFinite(m.number)) {
                      this.trigger("warn", {
                        message: "ignoring invalid media sequence: " + m.number,
                      });
                      return;
                    }
                    this.manifest.mediaSequence = m.number;
                  },
                  "discontinuity-sequence"() {
                    if (!isFinite(m.number)) {
                      this.trigger("warn", {
                        message:
                          "ignoring invalid discontinuity sequence: " +
                          m.number,
                      });
                      return;
                    }
                    ((this.manifest.discontinuitySequence = m.number),
                      (d = m.number));
                  },
                  "playlist-type"() {
                    if (!/VOD|EVENT/.test(m.playlistType)) {
                      this.trigger("warn", {
                        message:
                          "ignoring unknown playlist type: " + m.playlist,
                      });
                      return;
                    }
                    this.manifest.playlistType = m.playlistType;
                  },
                  map() {
                    ((o = {}),
                      m.uri && (o.uri = m.uri),
                      m.byterange && (o.byterange = m.byterange),
                      a && (o.key = a));
                  },
                  "stream-inf"() {
                    if (
                      ((this.manifest.playlists = i),
                      (this.manifest.mediaGroups =
                        this.manifest.mediaGroups || l),
                      !m.attributes)
                    ) {
                      this.trigger("warn", {
                        message: "ignoring empty stream-inf attributes",
                      });
                      return;
                    }
                    (r.attributes || (r.attributes = {}),
                      Qt(r.attributes, m.attributes));
                  },
                  media() {
                    if (
                      ((this.manifest.mediaGroups =
                        this.manifest.mediaGroups || l),
                      !(
                        m.attributes &&
                        m.attributes.TYPE &&
                        m.attributes["GROUP-ID"] &&
                        m.attributes.NAME
                      ))
                    ) {
                      this.trigger("warn", {
                        message: "ignoring incomplete or missing media group",
                      });
                      return;
                    }
                    let w = this.manifest.mediaGroups[m.attributes.TYPE];
                    ((w[m.attributes["GROUP-ID"]] =
                      w[m.attributes["GROUP-ID"]] || {}),
                      (A = w[m.attributes["GROUP-ID"]]),
                      (I = { default: /yes/i.test(m.attributes.DEFAULT) }),
                      I.default
                        ? (I.autoselect = !0)
                        : (I.autoselect = /yes/i.test(m.attributes.AUTOSELECT)),
                      m.attributes.LANGUAGE &&
                        (I.language = m.attributes.LANGUAGE),
                      m.attributes.URI && (I.uri = m.attributes.URI),
                      m.attributes["INSTREAM-ID"] &&
                        (I.instreamId = m.attributes["INSTREAM-ID"]),
                      m.attributes.CHARACTERISTICS &&
                        (I.characteristics = m.attributes.CHARACTERISTICS),
                      m.attributes.FORCED &&
                        (I.forced = /yes/i.test(m.attributes.FORCED)),
                      (A[m.attributes.NAME] = I));
                  },
                  discontinuity() {
                    ((d += 1),
                      (r.discontinuity = !0),
                      this.manifest.discontinuityStarts.push(i.length));
                  },
                  "program-date-time"() {
                    (typeof this.manifest.dateTimeString > "u" &&
                      ((this.manifest.dateTimeString = m.dateTimeString),
                      (this.manifest.dateTimeObject = m.dateTimeObject)),
                      (r.dateTimeString = m.dateTimeString),
                      (r.dateTimeObject = m.dateTimeObject));
                    let { lastProgramDateTime: w } = this;
                    ((this.lastProgramDateTime = new Date(
                      m.dateTimeString,
                    ).getTime()),
                      w === null &&
                        this.manifest.segments.reduceRight(
                          (y, b) => (
                            (b.programDateTime = y - b.duration * 1e3),
                            b.programDateTime
                          ),
                          this.lastProgramDateTime,
                        ));
                  },
                  targetduration() {
                    if (!isFinite(m.duration) || m.duration < 0) {
                      this.trigger("warn", {
                        message:
                          "ignoring invalid target duration: " + m.duration,
                      });
                      return;
                    }
                    ((this.manifest.targetDuration = m.duration),
                      Cs.call(this, this.manifest));
                  },
                  start() {
                    if (!m.attributes || isNaN(m.attributes["TIME-OFFSET"])) {
                      this.trigger("warn", {
                        message:
                          "ignoring start declaration without appropriate attribute list",
                      });
                      return;
                    }
                    this.manifest.start = {
                      timeOffset: m.attributes["TIME-OFFSET"],
                      precise: m.attributes.PRECISE,
                    };
                  },
                  "cue-out"() {
                    r.cueOut = m.data;
                  },
                  "cue-out-cont"() {
                    r.cueOutCont = m.data;
                  },
                  "cue-in"() {
                    r.cueIn = m.data;
                  },
                  skip() {
                    ((this.manifest.skip = Nt(m.attributes)),
                      this.warnOnMissingAttributes_(
                        "#EXT-X-SKIP",
                        m.attributes,
                        ["SKIPPED-SEGMENTS"],
                      ));
                  },
                  part() {
                    u = !0;
                    let w = this.manifest.segments.length,
                      y = Nt(m.attributes);
                    ((r.parts = r.parts || []),
                      r.parts.push(y),
                      y.byterange &&
                        (y.byterange.hasOwnProperty("offset") ||
                          (y.byterange.offset = _),
                        (_ = y.byterange.offset + y.byterange.length)));
                    let b = r.parts.length - 1;
                    (this.warnOnMissingAttributes_(
                      `#EXT-X-PART #${b} for segment #${w}`,
                      m.attributes,
                      ["URI", "DURATION"],
                    ),
                      this.manifest.renditionReports &&
                        this.manifest.renditionReports.forEach((E, P) => {
                          E.hasOwnProperty("lastPart") ||
                            this.trigger("warn", {
                              message: `#EXT-X-RENDITION-REPORT #${P} lacks required attribute(s): LAST-PART`,
                            });
                        }));
                  },
                  "server-control"() {
                    let w = (this.manifest.serverControl = Nt(m.attributes));
                    (w.hasOwnProperty("canBlockReload") ||
                      ((w.canBlockReload = !1),
                      this.trigger("info", {
                        message:
                          "#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false",
                      })),
                      Cs.call(this, this.manifest),
                      w.canSkipDateranges &&
                        !w.hasOwnProperty("canSkipUntil") &&
                        this.trigger("warn", {
                          message:
                            "#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set",
                        }));
                  },
                  "preload-hint"() {
                    let w = this.manifest.segments.length,
                      y = Nt(m.attributes),
                      b = y.type && y.type === "PART";
                    ((r.preloadHints = r.preloadHints || []),
                      r.preloadHints.push(y),
                      y.byterange &&
                        (y.byterange.hasOwnProperty("offset") ||
                          ((y.byterange.offset = b ? _ : 0),
                          b && (_ = y.byterange.offset + y.byterange.length))));
                    let E = r.preloadHints.length - 1;
                    if (
                      (this.warnOnMissingAttributes_(
                        `#EXT-X-PRELOAD-HINT #${E} for segment #${w}`,
                        m.attributes,
                        ["TYPE", "URI"],
                      ),
                      !!y.type)
                    )
                      for (let P = 0; P < r.preloadHints.length - 1; P++) {
                        let T = r.preloadHints[P];
                        T.type &&
                          T.type === y.type &&
                          this.trigger("warn", {
                            message: `#EXT-X-PRELOAD-HINT #${E} for segment #${w} has the same TYPE ${y.type} as preload hint #${P}`,
                          });
                      }
                  },
                  "rendition-report"() {
                    let w = Nt(m.attributes);
                    ((this.manifest.renditionReports =
                      this.manifest.renditionReports || []),
                      this.manifest.renditionReports.push(w));
                    let y = this.manifest.renditionReports.length - 1,
                      b = ["LAST-MSN", "URI"];
                    (u && b.push("LAST-PART"),
                      this.warnOnMissingAttributes_(
                        `#EXT-X-RENDITION-REPORT #${y}`,
                        m.attributes,
                        b,
                      ));
                  },
                  "part-inf"() {
                    ((this.manifest.partInf = Nt(m.attributes)),
                      this.warnOnMissingAttributes_(
                        "#EXT-X-PART-INF",
                        m.attributes,
                        ["PART-TARGET"],
                      ),
                      this.manifest.partInf.partTarget &&
                        (this.manifest.partTargetDuration =
                          this.manifest.partInf.partTarget),
                      Cs.call(this, this.manifest));
                  },
                  daterange() {
                    this.manifest.dateRanges.push(Nt(m.attributes));
                    let w = this.manifest.dateRanges.length - 1;
                    this.warnOnMissingAttributes_(
                      `#EXT-X-DATERANGE #${w}`,
                      m.attributes,
                      ["ID", "START-DATE"],
                    );
                    let y = this.manifest.dateRanges[w];
                    (y.endDate &&
                      y.startDate &&
                      new Date(y.endDate) < new Date(y.startDate) &&
                      this.trigger("warn", {
                        message:
                          "EXT-X-DATERANGE END-DATE must be equal to or later than the value of the START-DATE",
                      }),
                      y.duration &&
                        y.duration < 0 &&
                        this.trigger("warn", {
                          message:
                            "EXT-X-DATERANGE DURATION must not be negative",
                        }),
                      y.plannedDuration &&
                        y.plannedDuration < 0 &&
                        this.trigger("warn", {
                          message:
                            "EXT-X-DATERANGE PLANNED-DURATION must not be negative",
                        }));
                    let b = !!y.endOnNext;
                    if (
                      (b &&
                        !y.class &&
                        this.trigger("warn", {
                          message:
                            "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must have a CLASS attribute",
                        }),
                      b &&
                        (y.duration || y.endDate) &&
                        this.trigger("warn", {
                          message:
                            "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must not contain DURATION or END-DATE attributes",
                        }),
                      y.duration && y.endDate)
                    ) {
                      let P = y.startDate.getTime() + y.duration * 1e3;
                      this.manifest.dateRanges[w].endDate = new Date(P);
                    }
                    if (!g[y.id]) g[y.id] = y;
                    else {
                      for (let P in g[y.id])
                        if (
                          y[P] &&
                          JSON.stringify(g[y.id][P]) !== JSON.stringify(y[P])
                        ) {
                          this.trigger("warn", {
                            message:
                              "EXT-X-DATERANGE tags with the same ID in a playlist must have the same attributes values",
                          });
                          break;
                        }
                      let E = this.manifest.dateRanges.findIndex(
                        (P) => P.id === y.id,
                      );
                      ((this.manifest.dateRanges[E] = Qt(
                        this.manifest.dateRanges[E],
                        y,
                      )),
                        (g[y.id] = Qt(g[y.id], y)),
                        this.manifest.dateRanges.pop());
                    }
                  },
                  "independent-segments"() {
                    this.manifest.independentSegments = !0;
                  },
                  "i-frames-only"() {
                    ((this.manifest.iFramesOnly = !0),
                      this.requiredCompatibilityversion(
                        this.manifest.version,
                        4,
                      ));
                  },
                  "content-steering"() {
                    ((this.manifest.contentSteering = Nt(m.attributes)),
                      this.warnOnMissingAttributes_(
                        "#EXT-X-CONTENT-STEERING",
                        m.attributes,
                        ["SERVER-URI"],
                      ));
                  },
                  define() {
                    this.manifest.definitions = this.manifest.definitions || {};
                    let w = (y, b) => {
                      if (y in this.manifest.definitions) {
                        this.trigger("error", {
                          message: `EXT-X-DEFINE: Duplicate name ${y}`,
                        });
                        return;
                      }
                      this.manifest.definitions[y] = b;
                    };
                    if ("QUERYPARAM" in m.attributes) {
                      if ("NAME" in m.attributes || "IMPORT" in m.attributes) {
                        this.trigger("error", {
                          message: "EXT-X-DEFINE: Invalid attributes",
                        });
                        return;
                      }
                      let y = this.params.get(m.attributes.QUERYPARAM);
                      if (!y) {
                        this.trigger("error", {
                          message: `EXT-X-DEFINE: No query param ${m.attributes.QUERYPARAM}`,
                        });
                        return;
                      }
                      w(m.attributes.QUERYPARAM, decodeURIComponent(y));
                      return;
                    }
                    if ("NAME" in m.attributes) {
                      if ("IMPORT" in m.attributes) {
                        this.trigger("error", {
                          message: "EXT-X-DEFINE: Invalid attributes",
                        });
                        return;
                      }
                      if (
                        !("VALUE" in m.attributes) ||
                        typeof m.attributes.VALUE != "string"
                      ) {
                        this.trigger("error", {
                          message: `EXT-X-DEFINE: No value for ${m.attributes.NAME}`,
                        });
                        return;
                      }
                      w(m.attributes.NAME, m.attributes.VALUE);
                      return;
                    }
                    if ("IMPORT" in m.attributes) {
                      if (!this.mainDefinitions[m.attributes.IMPORT]) {
                        this.trigger("error", {
                          message: `EXT-X-DEFINE: No value ${m.attributes.IMPORT} to import, or IMPORT used on main playlist`,
                        });
                        return;
                      }
                      w(
                        m.attributes.IMPORT,
                        this.mainDefinitions[m.attributes.IMPORT],
                      );
                      return;
                    }
                    this.trigger("error", {
                      message: "EXT-X-DEFINE: No attribute",
                    });
                  },
                  "i-frame-playlist"() {
                    (this.manifest.iFramePlaylists.push({
                      attributes: m.attributes,
                      uri: m.uri,
                      timeline: d,
                    }),
                      this.warnOnMissingAttributes_(
                        "#EXT-X-I-FRAME-STREAM-INF",
                        m.attributes,
                        ["BANDWIDTH", "URI"],
                      ));
                  },
                })[m.tagType] || s
              ).call(n);
            },
            uri() {
              ((r.uri = m.uri),
                i.push(r),
                this.manifest.targetDuration &&
                  !("duration" in r) &&
                  (this.trigger("warn", {
                    message:
                      "defaulting segment duration to the target duration",
                  }),
                  (r.duration = this.manifest.targetDuration)),
                a && (r.key = a),
                (r.timeline = d),
                o && (r.map = o),
                (_ = 0),
                this.lastProgramDateTime !== null &&
                  ((r.programDateTime = this.lastProgramDateTime),
                  (this.lastProgramDateTime += r.duration * 1e3)),
                (r = {}));
            },
            comment() {},
            custom() {
              m.segment
                ? ((r.custom = r.custom || {}),
                  (r.custom[m.customType] = m.data))
                : ((this.manifest.custom = this.manifest.custom || {}),
                  (this.manifest.custom[m.customType] = m.data));
            },
          })[m.type].call(n);
        }));
    }
    requiredCompatibilityversion(t, n) {
      (t < n || !t) &&
        this.trigger("warn", {
          message: `manifest must be at least version ${n}`,
        });
    }
    warnOnMissingAttributes_(t, n, i) {
      let r = [];
      (i.forEach(function (o) {
        n.hasOwnProperty(o) || r.push(o);
      }),
        r.length &&
          this.trigger("warn", {
            message: `${t} lacks required attribute(s): ${r.join(", ")}`,
          }));
    }
    push(t) {
      this.lineStream.push(t);
    }
    end() {
      (this.lineStream.push(`
`),
        this.manifest.dateRanges.length &&
          this.lastProgramDateTime === null &&
          this.trigger("warn", {
            message:
              "A playlist with EXT-X-DATERANGE tag must contain atleast one EXT-X-PROGRAM-DATE-TIME tag",
          }),
        (this.lastProgramDateTime = null),
        this.trigger("end"));
    }
    addParser(t) {
      this.parseStream.addParser(t);
    }
    addTagMapper(t) {
      this.parseStream.addTagMapper(t);
    }
  };
var lb = new Set([
  "com.microsoft.playready",
  "com.apple.streamingkeydelivery",
  "com.widevine.alpha",
]);
function Ji(e) {
  return Object.keys(e).some((t) => lb.has(t));
}
function hr(e) {
  let t;
  try {
    let r = new yn();
    (r.push(e), r.end(), (t = r.manifest));
  } catch {}
  if (!t) return R("parse error");
  let n = t.segments;
  return !Array.isArray(n) || n.length == 0
    ? R("not a valid m3u8")
    : n.every((r) => {
          let a = r.uri.split(/[?#]/)[0];
          return a
            ? a
                .substring(a.lastIndexOf(".") + 1)
                .toLowerCase()
                .match(/vtt|srt|webvtt|ttml/)
            : !1;
        })
      ? R("subtitle playlist")
      : B(t);
}
function cb(e) {
  let t = new Date(new Date().getTime() - 6e5);
  return !e.dateTimeObject && !e.programDateTime
    ? !1
    : typeof e.dateTimeObject == "object"
      ? e.dateTimeObject > t
      : typeof e.programDateTime == "number"
        ? e.programDateTime > t.getTime()
        : !1;
}
function Yi(e) {
  if (
    !Array.isArray(e.segments) ||
    e.segments.some((i) => typeof i.duration != "number")
  )
    return "unknown";
  let t = e.segments[e.segments.length - 1];
  return t && cb(t)
    ? "live"
    : e.segments.reduce(
        (i, r) => (typeof r.duration == "number" && (i += r.duration), i),
        0,
      );
}
function Op(e, t, n, i = !1, r = !1) {
  let o;
  try {
    let l = new yn();
    (l.push(e), l.end(), (o = l.manifest));
  } catch {}
  if (!o) return R("parse error");
  if (!o.playlists) return R("Not a master M3U8");
  let a = o.playlists,
    u = o.mediaGroups.AUDIO ?? {},
    s = [];
  for (let l of a) {
    if (typeof l.uri != "string") continue;
    let c = "mp4";
    if (l.attributes.CODECS) {
      let I = Bi(l.attributes.CODECS);
      if (I.isNone()) continue;
      c = I.value;
    }
    if (
      (!("FRAME-RATE" in l.attributes) && "RESOLUTION" in l.attributes,
      l.attributes["VIDEO-RANGE"] && l.attributes["VIDEO-RANGE"] == "PQ")
    )
      continue;
    let d = he(l.uri, t.href);
    if (d.isNone()) continue;
    let f = O;
    if (l.attributes.AUDIO) {
      let I = u[l.attributes.AUDIO];
      if (I) {
        for (let w of Object.values(I))
          if (
            (w.uri && (f = he(w.uri, t.href)),
            (n.isSome() && w.language && n.value.includes(w.language)) ||
              w.default)
          )
            break;
      }
    }
    let _ = O,
      g = O;
    (l.attributes.RESOLUTION &&
      (_ = V({
        height: l.attributes.RESOLUTION.height,
        width: l.attributes.RESOLUTION.width,
      })),
      l.attributes.BANDWIDTH && (g = V(l.attributes.BANDWIDTH)));
    let m = { size: _, bitrate: g },
      A = d.value;
    if (
      (i
        ? (A.search = $s(A.searchParams, t.searchParams))
        : r && (A.search = ""),
      f.isSome())
    ) {
      let I = f.value;
      (i
        ? (I.search = $s(A.searchParams, t.searchParams))
        : r && (I.search = ""),
        s.push({ demuxer: c, quality: m, av: { video: A, audio: I } }));
    } else s.push({ demuxer: c, quality: m, av: { video: A, audio: !1 } });
  }
  return ((s = Zi(s)), Gi(s) ? B(s) : R("Empty playlist"));
}
function Xi(e) {
  return e.contentProtection ? Ji(e.contentProtection) : !1;
}
var js = ye(Te(), 1),
  Rp = [/^Sec-/i, /^Cookie$/i, /^Date$/i, /^Origin$/i, /^Referer$/i],
  Np = [
    /Range/i,
    /^Proxy-/i,
    /^User-Agent$/i,
    /^Accept-Charset$/i,
    /^Accept-Encoding$/i,
    /^Access-Control-Request-Headers$/i,
    /^Access-Control-Request-Method$/i,
    /^Connection$/i,
    /^Content-Length$/i,
    /^DNT$/i,
    /^Expect$/i,
    /^Keep-Alive$/i,
    /^Permissions-Policy$/i,
    /^TE$/i,
    /^Trailer$/i,
    /^Transfer-Encoding$/i,
    /^Upgrade$/i,
    /^Via$/i,
    /^Host/i,
  ],
  db = 750;
function eo(e) {
  return new URL(".", e).href + "*";
}
async function Mp(e) {
  let t = eo(e.url);
  return await Ls([t], e.headers);
}
async function Cp(e) {
  let t = Up(e.headers);
  if (t.entries().next().done) return B([]);
  e.will_use_jsfetch ? Fp(e.headers) : Bs(e.headers);
  let n = e.will_use_jsfetch ? e.headers : t,
    i = [];
  (i.push(e.url),
    e.strategy == "m3u8_audio_video_two_sources" && i.push(e.url_audio));
  let r = [],
    o = new Set();
  for (let u of i) {
    let s = new URL(".", u).href + "*",
      l = await to([s], n);
    r = [...r, ...l];
    let c;
    try {
      c = await fetch(u, { headers: e.headers });
    } catch (m) {
      return (
        console.warn(
          `Unable to fetch m3u8 for creating headers. Continuing anyways. Error: ${m}`,
        ),
        B(r)
      );
    }
    if (!c.ok)
      return (
        console.warn(
          `Unable to fetch m3u8 for creating headers. Continuing anyways. Received status: ${c.statusText}`,
        ),
        B(r)
      );
    if (!c.body)
      return (
        console.warn(
          "Unable to fetch m3u8 for creating headers. No body. Continuing anyways.",
        ),
        B(r)
      );
    let d = await c.text(),
      f = hr(d);
    if (f.isErr())
      return (
        console.warn(
          `Error when parsing manifest to create headers. Continuing anyways. Error: ${f.error}`,
        ),
        B(r)
      );
    let _ = f.value;
    if (!Array.isArray(_.segments))
      return (
        console.warn(
          `Expected segments array when parsing m3u8: ${u}. Continuing anyways`,
        ),
        B(r)
      );
    if (!_.segments || _.segments.length == 0) return B(r);
    let g = db / i.length;
    for (let m of _.segments) {
      let A = m.uri;
      if (A) {
        let y = new URL(A, u),
          b = eo(y);
        if ((o.add(b), o.size >= g)) break;
      }
      let I = m.map;
      if (I && "uri" in I) {
        let y = I.uri,
          b = new URL(y, u),
          E = eo(b);
        if (o.size < g && (o.add(E), o.size >= g)) break;
      }
      let w = m.key;
      if (w && "uri" in w) {
        let y = w.uri,
          b = new URL(y, u),
          E = eo(b);
        if (o.size < g && (o.add(E), o.size >= g)) break;
      }
    }
  }
  let a = [];
  return ((a = await to([...o], n)), B([...r, ...a]));
}
function Ls(e, t) {
  return (Fp(t), to(e, t));
}
function gt(e, t) {
  let n = Up(t);
  return to(e, n);
}
async function to(e, t) {
  let n = [];
  if (
    (t.forEach((o, a) => {
      n.push({ operation: "set", header: a, value: o });
    }),
    n.length == 0)
  )
    return [];
  let i = [],
    r = [];
  for (let o of e) {
    let a = Math.ceil(Math.random() * 1e8);
    i.push(a);
    let u = {
      id: a,
      priority: 1,
      action: { type: "modifyHeaders", requestHeaders: n },
      condition: { urlFilter: o, resourceTypes: ["xmlhttprequest"] },
    };
    r.push(u);
  }
  try {
    await js.default.declarativeNetRequest.updateSessionRules({ addRules: r });
  } catch (o) {
    return (
      console.error("Error setting headers for urls"),
      console.error(o.toString()),
      []
    );
  }
  return i;
}
async function vt(e) {
  if (e.length)
    try {
      await js.default.declarativeNetRequest.updateSessionRules({
        removeRuleIds: e,
      });
    } catch (t) {
      console.error(`Error when removing header rules: ${t.toString()}`);
    }
}
function Up(e) {
  let t = new Headers();
  return (
    e.forEach((n, i) => {
      for (let r of Rp) i.match(r) && t.set(i, n);
    }),
    t
  );
}
function Fp(e) {
  let t = [];
  for (let n of e.keys())
    for (let i of Np)
      if (n.match(i)) {
        t.push(n);
        break;
      }
  for (let n of t) e.delete(n);
}
function Bs(e) {
  let t = [];
  for (let n of e.keys()) {
    for (let i of Np)
      if (n.match(i)) {
        t.push(n);
        break;
      }
    for (let i of Rp)
      if (n.match(i)) {
        t.push(n);
        break;
      }
  }
  for (let n of t) e.delete(n);
}
function Vs(e) {
  return e.user_abort
    ? "User abort"
    : e.e4XX_5XX_failure
      ? `HTTP error. Status: ${e.status}.`
      : e.percentage_incomplete
        ? "Incomplete percentage."
        : `Error. ${e.message}.`;
}
function gr() {
  return {
    user_abort: !0,
    e4XX_5XX_failure: !1,
    other_failure: !1,
    percentage_incomplete: !1,
  };
}
function ro(e) {
  return {
    user_abort: !1,
    e4XX_5XX_failure: !1,
    percentage_incomplete: !1,
    other_failure: !0,
    message: e,
  };
}
function jp(e) {
  return {
    user_abort: !1,
    e4XX_5XX_failure: !0,
    percentage_incomplete: !1,
    other_failure: !1,
    status: e,
  };
}
var Zs = ye(Te(), 1);
function mb(e, t) {
  let n = e.slice(0, t).split(/\r\n|\n|\r/g);
  return [n.length, n.pop().length + 1];
}
function pb(e, t, n) {
  let i = e.split(/\r\n|\n|\r/g),
    r = "",
    o = (Math.log10(t + 1) | 0) + 1;
  for (let a = t - 1; a <= t + 1; a++) {
    let u = i[a - 1];
    u &&
      ((r += a.toString().padEnd(o, " ")),
      (r += ":  "),
      (r += u),
      (r += `
`),
      a === t &&
        ((r += " ".repeat(o + n + 2)),
        (r += `^
`)));
  }
  return r;
}
var G = class extends Error {
  line;
  column;
  codeblock;
  constructor(t, n) {
    let [i, r] = mb(n.toml, n.ptr),
      o = pb(n.toml, i, r);
    (super(
      `Invalid TOML document: ${t}

${o}`,
      n,
    ),
      (this.line = i),
      (this.column = r),
      (this.codeblock = o));
  }
};
function _b(e, t) {
  let n = 0;
  for (; e[t - ++n] === "\\"; );
  return --n && n % 2;
}
function no(e, t = 0, n = e.length) {
  let i = e.indexOf(
    `
`,
    t,
  );
  return (e[i - 1] === "\r" && i--, i <= n ? i : -1);
}
function vr(e, t) {
  for (let n = t; n < e.length; n++) {
    let i = e[n];
    if (
      i ===
      `
`
    )
      return n;
    if (
      i === "\r" &&
      e[n + 1] ===
        `
`
    )
      return n + 1;
    if ((i < " " && i !== "	") || i === "\x7F")
      throw new G("control characters are not allowed in comments", {
        toml: e,
        ptr: t,
      });
  }
  return e.length;
}
function Ze(e, t, n, i) {
  let r;
  for (;;) {
    for (
      ;
      (r = e[t]) === " " ||
      r === "	" ||
      (!n &&
        (r ===
          `
` ||
          (r === "\r" &&
            e[t + 1] ===
              `
`)));
    )
      t++;
    if (i || r !== "#") break;
    t = vr(e, t);
  }
  return t;
}
function Lp(e, t, n, i, r = !1) {
  if (!i) return ((t = no(e, t)), t < 0 ? e.length : t);
  for (let o = t; o < e.length; o++) {
    let a = e[o];
    if (a === "#") o = no(e, o);
    else {
      if (a === n) return o + 1;
      if (
        a === i ||
        (r &&
          (a ===
            `
` ||
            (a === "\r" &&
              e[o + 1] ===
                `
`)))
      )
        return o;
    }
  }
  throw new G("cannot find end of structure", { toml: e, ptr: t });
}
function io(e, t) {
  let n = e[t],
    i = n === e[t + 1] && e[t + 1] === e[t + 2] ? e.slice(t, t + 3) : n;
  t += i.length - 1;
  do t = e.indexOf(i, ++t);
  while (t > -1 && n !== "'" && _b(e, t));
  return (
    t > -1 &&
      ((t += i.length), i.length > 1 && (e[t] === n && t++, e[t] === n && t++)),
    t
  );
}
var fb =
    /^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}(?::\d{2}(?:\.\d+)?)?)?(Z|[-+]\d{2}:\d{2})?$/i,
  bn = class e extends Date {
    #t = !1;
    #r = !1;
    #e = null;
    constructor(t) {
      let n = !0,
        i = !0,
        r = "Z";
      if (typeof t == "string") {
        let o = t.match(fb);
        o
          ? (o[1] || ((n = !1), (t = `0000-01-01T${t}`)),
            (i = !!o[2]),
            i && t[10] === " " && (t = t.replace(" ", "T")),
            o[2] && +o[2] > 23
              ? (t = "")
              : ((r = o[3] || null),
                (t = t.toUpperCase()),
                !r && i && (t += "Z")))
          : (t = "");
      }
      (super(t),
        isNaN(this.getTime()) || ((this.#t = n), (this.#r = i), (this.#e = r)));
    }
    isDateTime() {
      return this.#t && this.#r;
    }
    isLocal() {
      return !this.#t || !this.#r || !this.#e;
    }
    isDate() {
      return this.#t && !this.#r;
    }
    isTime() {
      return this.#r && !this.#t;
    }
    isValid() {
      return this.#t || this.#r;
    }
    toISOString() {
      let t = super.toISOString();
      if (this.isDate()) return t.slice(0, 10);
      if (this.isTime()) return t.slice(11, 23);
      if (this.#e === null) return t.slice(0, -1);
      if (this.#e === "Z") return t;
      let n = +this.#e.slice(1, 3) * 60 + +this.#e.slice(4, 6);
      return (
        (n = this.#e[0] === "-" ? n : -n),
        new Date(this.getTime() - n * 6e4).toISOString().slice(0, -1) + this.#e
      );
    }
    static wrapAsOffsetDateTime(t, n = "Z") {
      let i = new e(t);
      return ((i.#e = n), i);
    }
    static wrapAsLocalDateTime(t) {
      let n = new e(t);
      return ((n.#e = null), n);
    }
    static wrapAsLocalDate(t) {
      let n = new e(t);
      return ((n.#r = !1), (n.#e = null), n);
    }
    static wrapAsLocalTime(t) {
      let n = new e(t);
      return ((n.#t = !1), (n.#e = null), n);
    }
  };
var hb = /^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/,
  gb = /^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/,
  vb = /^[+-]?0[0-9_]/,
  yb = /^[0-9a-f]{2,8}$/i,
  Bp = {
    b: "\b",
    t: "	",
    n: `
`,
    f: "\f",
    r: "\r",
    e: "\x1B",
    '"': '"',
    "\\": "\\",
  };
function oo(e, t = 0, n = e.length) {
  let i = e[t] === "'",
    r = e[t++] === e[t] && e[t] === e[t + 1];
  r &&
    ((n -= 2),
    e[(t += 2)] === "\r" && t++,
    e[t] ===
      `
` && t++);
  let o = 0,
    a,
    u = "",
    s = t;
  for (; t < n - 1; ) {
    let l = e[t++];
    if (
      l ===
        `
` ||
      (l === "\r" &&
        e[t] ===
          `
`)
    ) {
      if (!r)
        throw new G("newlines are not allowed in strings", {
          toml: e,
          ptr: t - 1,
        });
    } else if ((l < " " && l !== "	") || l === "\x7F")
      throw new G("control characters are not allowed in strings", {
        toml: e,
        ptr: t - 1,
      });
    if (a) {
      if (((a = !1), l === "x" || l === "u" || l === "U")) {
        let c = e.slice(t, (t += l === "x" ? 2 : l === "u" ? 4 : 8));
        if (!yb.test(c))
          throw new G("invalid unicode escape", { toml: e, ptr: o });
        try {
          u += String.fromCodePoint(parseInt(c, 16));
        } catch {
          throw new G("invalid unicode escape", { toml: e, ptr: o });
        }
      } else if (
        r &&
        (l ===
          `
` ||
          l === " " ||
          l === "	" ||
          l === "\r")
      ) {
        if (
          ((t = Ze(e, t - 1, !0)),
          e[t] !==
            `
` && e[t] !== "\r")
        )
          throw new G(
            "invalid escape: only line-ending whitespace may be escaped",
            { toml: e, ptr: o },
          );
        t = Ze(e, t);
      } else if (l in Bp) u += Bp[l];
      else throw new G("unrecognized escape sequence", { toml: e, ptr: o });
      s = t;
    } else !i && l === "\\" && ((o = t - 1), (a = !0), (u += e.slice(s, o)));
  }
  return u + e.slice(s, n - 1);
}
function Vp(e, t, n, i) {
  if (e === "true") return !0;
  if (e === "false") return !1;
  if (e === "-inf") return -1 / 0;
  if (e === "inf" || e === "+inf") return 1 / 0;
  if (e === "nan" || e === "+nan" || e === "-nan") return NaN;
  if (e === "-0") return i ? 0n : 0;
  let r = hb.test(e);
  if (r || gb.test(e)) {
    if (vb.test(e))
      throw new G("leading zeroes are not allowed", { toml: t, ptr: n });
    e = e.replace(/_/g, "");
    let a = +e;
    if (isNaN(a)) throw new G("invalid number", { toml: t, ptr: n });
    if (r) {
      if ((r = !Number.isSafeInteger(a)) && !i)
        throw new G("integer value cannot be represented losslessly", {
          toml: t,
          ptr: n,
        });
      (r || i === !0) && (a = BigInt(e));
    }
    return a;
  }
  let o = new bn(e);
  if (!o.isValid()) throw new G("invalid value", { toml: t, ptr: n });
  return o;
}
function bb(e, t, n) {
  let i = e.slice(t, n),
    r = i.indexOf("#");
  return (r > -1 && (vr(e, r), (i = i.slice(0, r))), [i.trimEnd(), r]);
}
function wn(e, t, n, i, r) {
  if (i === 0)
    throw new G("document contains excessively nested structures. aborting.", {
      toml: e,
      ptr: t,
    });
  let o = e[t];
  if (o === "[" || o === "{") {
    let [s, l] = o === "[" ? Hp(e, t, i, r) : qp(e, t, i, r);
    if (n) {
      if (((l = Ze(e, l)), e[l] === ",")) l++;
      else if (e[l] !== n)
        throw new G("expected comma or end of structure", { toml: e, ptr: l });
    }
    return [s, l];
  }
  let a;
  if (o === '"' || o === "'") {
    a = io(e, t);
    let s = oo(e, t, a);
    if (n) {
      if (
        ((a = Ze(e, a)),
        e[a] &&
          e[a] !== "," &&
          e[a] !== n &&
          e[a] !==
            `
` &&
          e[a] !== "\r")
      )
        throw new G("unexpected character encountered", { toml: e, ptr: a });
      a += +(e[a] === ",");
    }
    return [s, a];
  }
  a = Lp(e, t, ",", n);
  let u = bb(e, t, a - +(e[a - 1] === ","));
  if (!u[0])
    throw new G("incomplete key-value declaration: no value specified", {
      toml: e,
      ptr: t,
    });
  return (
    n && u[1] > -1 && ((a = Ze(e, t + u[1])), (a += +(e[a] === ","))),
    [Vp(u[0], e, t, r), a]
  );
}
var wb = /^[a-zA-Z0-9-_]+[ \t]*$/;
function ao(e, t, n = "=") {
  let i = t - 1,
    r = [],
    o = e.indexOf(n, t);
  if (o < 0)
    throw new G("incomplete key-value: cannot find end of key", {
      toml: e,
      ptr: t,
    });
  do {
    let a = e[(t = ++i)];
    if (a !== " " && a !== "	")
      if (a === '"' || a === "'") {
        if (a === e[t + 1] && a === e[t + 2])
          throw new G("multiline strings are not allowed in keys", {
            toml: e,
            ptr: t,
          });
        let u = io(e, t);
        if (u < 0)
          throw new G("unfinished string encountered", { toml: e, ptr: t });
        i = e.indexOf(".", u);
        let s = e.slice(u, i < 0 || i > o ? o : i),
          l = no(s);
        if (l > -1)
          throw new G("newlines are not allowed in keys", {
            toml: e,
            ptr: t + i + l,
          });
        if (s.trimStart())
          throw new G("found extra tokens after the string part", {
            toml: e,
            ptr: u,
          });
        if (o < u && ((o = e.indexOf(n, u)), o < 0))
          throw new G("incomplete key-value: cannot find end of key", {
            toml: e,
            ptr: t,
          });
        r.push(oo(e, t, u));
      } else {
        i = e.indexOf(".", t);
        let u = e.slice(t, i < 0 || i > o ? o : i);
        if (!wb.test(u))
          throw new G(
            "only letter, numbers, dashes and underscores are allowed in keys",
            { toml: e, ptr: t },
          );
        r.push(u.trimEnd());
      }
  } while (i + 1 && i < o);
  return [r, Ze(e, o + 1, !0, !0)];
}
function qp(e, t, n, i) {
  let r = {},
    o = new Set(),
    a;
  for (t++; (a = e[t++]) !== "}" && a; ) {
    if (a === ",")
      throw new G("expected value, found comma", { toml: e, ptr: t - 1 });
    if (a === "#") t = vr(e, t);
    else if (
      a !== " " &&
      a !== "	" &&
      a !==
        `
` &&
      a !== "\r"
    ) {
      let u,
        s = r,
        l = !1,
        [c, d] = ao(e, t - 1);
      for (let g = 0; g < c.length; g++) {
        if (
          (g && (s = l ? s[u] : (s[u] = {})),
          (u = c[g]),
          (l = Object.hasOwn(s, u)) && (typeof s[u] != "object" || o.has(s[u])))
        )
          throw new G("trying to redefine an already defined value", {
            toml: e,
            ptr: t,
          });
        !l &&
          u === "__proto__" &&
          Object.defineProperty(s, u, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
          });
      }
      if (l)
        throw new G("trying to redefine an already defined value", {
          toml: e,
          ptr: t,
        });
      let [f, _] = wn(e, d, "}", n - 1, i);
      (o.add(f), (s[u] = f), (t = _));
    }
  }
  if (!a) throw new G("unfinished table encountered", { toml: e, ptr: t });
  return [r, t];
}
function Hp(e, t, n, i) {
  let r = [],
    o;
  for (t++; (o = e[t++]) !== "]" && o; ) {
    if (o === ",")
      throw new G("expected value, found comma", { toml: e, ptr: t - 1 });
    if (o === "#") t = vr(e, t);
    else if (
      o !== " " &&
      o !== "	" &&
      o !==
        `
` &&
      o !== "\r"
    ) {
      let a = wn(e, t - 1, "]", n - 1, i);
      (r.push(a[0]), (t = a[1]));
    }
  }
  if (!o) throw new G("unfinished array encountered", { toml: e, ptr: t });
  return [r, t];
}
function Zp(e, t, n, i) {
  let r = t,
    o = n,
    a,
    u = !1,
    s;
  for (let l = 0; l < e.length; l++) {
    if (l) {
      if (
        ((r = u ? r[a] : (r[a] = {})),
        (o = (s = o[a]).c),
        i === 0 && (s.t === 1 || s.t === 2))
      )
        return null;
      if (s.t === 2) {
        let c = r.length - 1;
        ((r = r[c]), (o = o[c].c));
      }
    }
    if (((a = e[l]), (u = Object.hasOwn(r, a)) && o[a]?.t === 0 && o[a]?.d))
      return null;
    u ||
      (a === "__proto__" &&
        (Object.defineProperty(r, a, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        Object.defineProperty(o, a, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })),
      (o[a] = { t: l < e.length - 1 && i === 2 ? 3 : i, d: !1, i: 0, c: {} }));
  }
  if (
    ((s = o[a]),
    (s.t !== i && !(i === 1 && s.t === 3)) ||
      (i === 2 &&
        (s.d || ((s.d = !0), (r[a] = [])),
        r[a].push((r = {})),
        (s.c[s.i++] = s = { t: 1, d: !1, i: 0, c: {} })),
      s.d))
  )
    return null;
  if (((s.d = !0), i === 1)) r = u ? r[a] : (r[a] = {});
  else if (i === 0 && u) return null;
  return [a, r, s.c];
}
function qs(e, { maxDepth: t = 1e3, integersAsBigInt: n } = {}) {
  let i = {},
    r = {},
    o = i,
    a = r;
  for (let u = Ze(e, 0); u < e.length; ) {
    if (e[u] === "[") {
      let s = e[++u] === "[",
        l = ao(e, (u += +s), "]");
      if (s) {
        if (e[l[1] - 1] !== "]")
          throw new G("expected end of table declaration", {
            toml: e,
            ptr: l[1] - 1,
          });
        l[1]++;
      }
      let c = Zp(l[0], i, r, s ? 2 : 1);
      if (!c)
        throw new G("trying to redefine an already defined table or value", {
          toml: e,
          ptr: u,
        });
      ((a = c[2]), (o = c[1]), (u = l[1]));
    } else {
      let s = ao(e, u),
        l = Zp(s[0], o, a, 0);
      if (!l)
        throw new G("trying to redefine an already defined table or value", {
          toml: e,
          ptr: u,
        });
      let c = wn(e, s[1], void 0, t, n);
      ((l[1][l[0]] = c[0]), (u = c[1]));
    }
    if (
      ((u = Ze(e, u, !0)),
      e[u] &&
        e[u] !==
          `
` &&
        e[u] !== "\r")
    )
      throw new G(
        "each key-value declaration must be followed by an end-of-line",
        { toml: e, ptr: u },
      );
    u = Ze(e, u);
  }
  return i;
}
var Kt = "";
function Gp(e, t) {
  return e + t;
}
async function Wp(e, t, n, i, r) {
  if (n.isSome()) {
    for (let o of t)
      if (n.value.href.includes(o.url)) {
        let a = null;
        if (o.selector) {
          let s = o.selector;
          try {
            let l = { tabId: r };
            a =
              (
                await Zs.default.scripting.executeScript({
                  target: l,
                  world: Zs.default.scripting.ExecutionWorld.MAIN,
                  args: [s],
                  func: (d) => {
                    let f = document.querySelector(d);
                    return f?.content || f?.textContent;
                  },
                })
              )[0]?.result || null;
          } catch {}
        }
        let u = [];
        if (o.replace)
          for (let s of o.replace) {
            let l = s.to,
              c = s.from;
            try {
              c = new RegExp(c, "gi");
            } catch {}
            u.push({ from: c, to: l });
          }
        return {
          template: o.template,
          selector: a,
          max_length: o.max_length || e.max_length,
          replace: u,
          subdir: Gp(i, o.subdir || Kt),
          force_doc_title: o.force_doc_title === !0,
        };
      }
  }
  return {
    template: e.template,
    selector: null,
    max_length: e.max_length,
    subdir: i,
    force_doc_title: e.force_doc_title === !0,
    replace: [],
  };
}
function xb(e) {
  let t = 0,
    n = [];
  for (let i of e) {
    if ((t++, typeof i != "object")) return R(`invalid rule object ${t}`);
    if (!("template" in i) || typeof i.template != "string")
      return R(`"template = \u2026" is missing or invalid in rule ${t}`);
    if (!("url" in i) || typeof i.url != "string")
      return R(`"url = \u2026" is missing or invalid in rule ${t}`);
    let r = {
      max_length: null,
      selector: null,
      template: i.template,
      url: i.url,
      force_doc_title: i.force_doc_title === !0,
    };
    if (
      "max_length" in i &&
      (typeof i.max_length != "number" || i.max_length < 1)
    )
      return R(`"max_length = \u2026" invalid in rule ${t}`);
    if (((r.max_length = i.max_length || null), "selector" in i)) {
      if (typeof i.selector != "string" || i.selector.length == 0)
        return R(`"selectors = \u2026" is not a valid string in rule ${t}`);
      r.selector = i.selector;
    }
    if (typeof i.directory == "string") {
      let o = Db(i.directory);
      if (o.isOk()) r.subdir = o.value;
      else return o;
    }
    if ("replace" in i)
      if (Array.isArray(i.replace))
        for (let o of i.replace) {
          if (typeof o != "object") return R("invalid replace value");
          if (((r.replace = []), "from" in o && typeof o.from == "string"))
            if ("to" in o && typeof o.to == "string")
              r.replace.push({ to: o.to, from: o.from });
            else
              return R(
                '"replace" is missing "to" field, or "to" field is not a string',
              );
          else
            return R(
              '"replace" is missing "from" field, or "from" field is not a string',
            );
        }
      else return R('"replace" is not an array');
    n.push(r);
  }
  return B(n);
}
function Db(e) {
  if (e == "") return B(Kt);
  (e.startsWith("/") && (e = e.slice(1)),
    e.endsWith("/") && (e = e.slice(0, -1)));
  let t = e.split("/");
  for (let i of t)
    if (yt(i) != i)
      return R(
        'This not a valid path. Avoid special characters. Use "/" between directories.',
      );
  let n = t.join("/") + "/";
  return n.length > 255 ? R("Path too long") : B(n);
}
function Qp(e) {
  let t;
  try {
    t = qs(e);
  } catch {
    return R("Invalid syntax");
  }
  if (typeof t.max_length != "number" || t.max_length < 1)
    return R("Default `max_length` value invalid or missing");
  if (typeof t.template != "string" || t.template.length == 0)
    return R("Default `template` value invalid or missing");
  let n = {
    max_length: t.max_length,
    template: t.template,
    force_doc_title: t.force_doc_title === !0,
  };
  return Array.isArray(t.rule)
    ? xb(t.rule).map((r) => ({ default_: n, rules: r }))
    : B({ default_: n, rules: [] });
}
function Sn() {
  return { default_: { max_length: 64, template: "%title" }, rules: [] };
}
function yt(e) {
  let t = e
    .trim()
    .normalize("NFC")
    .replace(/^\.+/gu, "")
    .replace(/[^\p{L}\p{N}\p{M}\-\s_\.]/gu, "")
    .replace(/-+/gu, "-")
    .replace(/\s+/gu, " ")
    .replace(/^(\s|-)+/gu, "")
    .substring(0, 190)
    .replace(/(\s|-)+$/gu, "");
  return t.length == 0 ? "no-name" : t;
}
function yr(e, t) {
  let {
      template: n,
      selector: i,
      max_length: r,
      replace: o,
      subdir: a,
    } = t.smartnaming_rule,
    u,
    s;
  if (
    ((u = e.title
      .or(t.title)
      .or(e.filename)
      .map((d) => d.trim())
      .unwrapOr(void 0)),
    t.url.isSome())
  ) {
    let d = t.url.value.host.split(".").slice(-2);
    (d.pop(), (s = d[0]));
  }
  let l = n,
    c = (d, f) => {
      f
        ? (l = l.replace(d, f))
        : ((l = l.replace(` ${d}`, "")),
          (l = l.replace(`-${d}`, "")),
          (l = l.replace(`_${d}`, "")),
          (l = l.replace(`${d}`, "")));
    };
  (c("%title", u),
    c("%hostname", s),
    c("%selector", i),
    (l = l || u || s || ""),
    (l = yt(l).substring(0, r)));
  for (let d of o) l = l.replaceAll(d.from, d.to);
  return ((l = yt(l).substring(0, r)), { basename: l, subdir: a });
}
_r();
function Mt(e, t, n) {
  let i = n.split(".").slice(-2).join("."),
    r = `behaviour_hash_${je(t)}`,
    o = `domain_hash_${je(i)}`,
    a = e.remote_behaviours.websites;
  return a.has(r) && a.get(r).has(o);
}
function so(e, t) {
  return Mt(e, "BLOCK_MEDIA_DETECTION", t.hostname);
}
function ae(e, t) {
  return Mt(e, "CARRY_GET_PARAM_WEBSITES", t.hostname);
}
function Gs(e, t) {
  return Mt(e, "STRIP_GET_PARAM_WEBSITES", t.hostname);
}
function Kp(e, t) {
  return Mt(e, "AUDIO_ONLY_WEBSITES", t.hostname);
}
function Ws(e, t) {
  return Mt(e, "FIFO_DISCOVERED_WEBSITES", t.hostname);
}
function Jp(e, t) {
  return Mt(e, "FILTER_HTTP_M3U8_MEDIA", t.hostname);
}
function Yp(e, t, n) {
  return t.isNone()
    ? !1
    : Mt(e, "CONVERT_MPD_URL_TO_M3U8", t.value.host) &&
        n.match(/\.mpd/i) != null;
}
function Xp(e, t) {
  return Mt(e, "DISABLE_PREVIEW_LOADING", t.hostname);
}
var Eb = [
    "m3u8_video_preview",
    "m3u8_audio_only",
    "m3u8_audio_video_one_source",
    "m3u8_audio_video_two_sources",
  ],
  Tb = ["mpd_audio_video_one_source", "mpd_audio_only", "mpd_video_preview"];
function e_(e) {
  return Eb.includes(e.strategy);
}
function t_(e) {
  return Tb.includes(e.strategy);
}
function r_(e, t) {
  let n = `download_${crypto.randomUUID()}`,
    i = "unused",
    r = Kt;
  if (t.type == "m3u8_playlist") {
    let o = Hi(t);
    if (Wt(o.demuxer) || o.av.video == !1) return O;
    let a = nt(o.demuxer, "mp4"),
      u = {
        download_id: n,
        headers: Fe(t.sent_headers),
        good_basename: i,
        muxer: a,
        subdir: r,
        will_use_jsfetch: !1,
        save_as: !1,
        strategy: "m3u8_video_preview",
        url: o.av.video,
        extension: a,
        is_youtube: t.is_youtube,
        throttle: !1,
        carry_get_params: ae(e, t.master_url),
        cache: t.cache,
      };
    return V(u);
  } else if (t.type == "youtube_format") {
    let o = Hi(t);
    if (Wt(o.demuxer) || o.av.video == !1) return O;
    let a = nt(o.demuxer, "mp4"),
      u = {
        download_id: n,
        headers: Fe(t.sent_headers),
        good_basename: i,
        muxer: a,
        subdir: r,
        will_use_jsfetch: !1,
        save_as: !1,
        strategy: "youtube_video_preview",
        url: o.av.video.url,
        carry_get_params: !1,
        content_length: o.av.video.content_length,
        extension: a,
        is_youtube: t.is_youtube,
        throttle: !1,
        cache: t.cache,
      };
    return V(u);
  } else if (t.type == "m3u8") {
    if (Wt(t.demuxer)) return O;
    let o = nt(t.demuxer, "mp4"),
      a = {
        download_id: n,
        headers: Fe(t.sent_headers),
        good_basename: i,
        muxer: o,
        subdir: r,
        will_use_jsfetch: !1,
        save_as: !1,
        strategy: "m3u8_video_preview",
        url: t.url,
        carry_get_params: ae(e, t.url),
        extension: o,
        is_youtube: t.is_youtube,
        throttle: !1,
        cache: t.cache,
      };
    return V(a);
  } else if (t.type == "mpd_playlist") {
    let o = Hi(t);
    if (Wt(o.demuxer)) return O;
    let a = nt(o.demuxer, "mp4"),
      u = {
        download_id: n,
        headers: Fe(t.sent_headers),
        good_basename: i,
        muxer: a,
        subdir: r,
        entry: o.index,
        duration: t.duration,
        will_use_jsfetch: !0,
        save_as: !1,
        strategy: "mpd_video_preview",
        url: t.master_url,
        carry_get_params: ae(e, t.master_url),
        extension: a,
        is_youtube: t.is_youtube,
        throttle: !1,
        cache: t.cache,
      };
    return V(u);
  } else if (t.type == "http_playlist") {
    let o = {
      download_id: n,
      headers: Fe(t.sent_headers),
      good_basename: i,
      subdir: r,
      muxer: "mp4",
      will_use_jsfetch: !0,
      size: O,
      save_as: !1,
      strategy: "http_video_preview_jsfetch",
      url: t.playlist[0].av.video,
      carry_get_params: ae(e, t.playlist[0].av.video),
      extension: "mp4",
      is_youtube: t.is_youtube,
      throttle: !1,
      cache: t.cache,
    };
    return V(o);
  } else throw new Error("Unreachable");
}
function kb(e, t, n, i, r, o, a) {
  i = yt(i);
  let u = `download_${crypto.randomUUID()}`,
    s = Fe(e.sent_headers),
    l = e.playlist[o].index,
    c = xn(a, e);
  return t || Wt(e.playlist[o].demuxer)
    ? {
        download_id: u,
        headers: s,
        good_basename: i,
        subdir: r,
        save_as: n,
        will_use_jsfetch: !0,
        muxer: "mp3",
        strategy: "mpd_audio_only",
        url: e.master_url,
        carry_get_params: ae(a, e.master_url),
        entry: l,
        duration: e.duration,
        extension: "mp3",
        is_youtube: e.is_youtube,
        throttle: c,
        cache: e.cache,
      }
    : {
        download_id: u,
        headers: s,
        good_basename: i,
        subdir: r,
        save_as: n,
        will_use_jsfetch: !0,
        muxer: a.prefered_av_muxer,
        strategy: "mpd_audio_video_one_source",
        url: e.master_url,
        carry_get_params: ae(a, e.master_url),
        entry: l,
        duration: e.duration,
        extension: a.prefered_av_muxer,
        is_youtube: e.is_youtube,
        throttle: c,
        cache: e.cache,
      };
}
function Ib(e, t, n, i, r, o, a) {
  i = yt(i);
  let u = `download_${crypto.randomUUID()}`,
    s = e.playlist[o],
    l = Fe(e.sent_headers),
    c = xn(a, e);
  if (s.av.video == !1)
    return {
      download_id: u,
      headers: l,
      good_basename: i,
      subdir: r,
      save_as: n,
      will_use_jsfetch: !1,
      strategy: "youtube_audio_only",
      muxer: "mp3",
      url: s.av.audio.url,
      carry_get_params: ae(a, s.av.audio.url),
      content_length: s.av.audio.content_length,
      extension: "mp3",
      is_youtube: e.is_youtube,
      throttle: c,
      cache: e.cache,
      duration: e.duration,
    };
  if (t)
    return s.av.audio
      ? {
          download_id: u,
          headers: l,
          good_basename: i,
          subdir: r,
          save_as: n,
          will_use_jsfetch: !1,
          strategy: "youtube_audio_only",
          muxer: "mp3",
          url: s.av.audio.url,
          carry_get_params: ae(a, s.av.audio.url),
          content_length: s.av.audio.content_length,
          extension: "mp3",
          is_youtube: e.is_youtube,
          throttle: c,
          cache: e.cache,
          duration: e.duration,
        }
      : {
          download_id: u,
          headers: l,
          good_basename: i,
          subdir: r,
          save_as: n,
          will_use_jsfetch: !1,
          strategy: "youtube_audio_only",
          muxer: "mp3",
          url: s.av.video.url,
          carry_get_params: ae(a, s.av.video.url),
          content_length: s.av.video.content_length,
          extension: "mp3",
          is_youtube: e.is_youtube,
          throttle: c,
          cache: e.cache,
          duration: e.duration,
        };
  {
    let d = s.demuxer,
      f = nt(d, a.prefered_av_muxer);
    return s.av.audio
      ? {
          download_id: u,
          headers: l,
          good_basename: i,
          subdir: r,
          muxer: f,
          save_as: n,
          will_use_jsfetch: !1,
          strategy: "youtube_audio_video_two_sources",
          url: s.av.video.url,
          carry_get_params: ae(a, s.av.video.url),
          content_length: s.av.video.content_length,
          url_audio: s.av.audio.url,
          audio_content_length: s.av.audio.content_length,
          extension: f,
          is_youtube: e.is_youtube,
          throttle: c,
          cache: e.cache,
        }
      : {
          download_id: u,
          headers: l,
          good_basename: i,
          subdir: r,
          muxer: f,
          save_as: n,
          will_use_jsfetch: !1,
          strategy: "youtube_audio_video_one_source",
          url: s.av.video.url,
          carry_get_params: ae(a, s.av.video.url),
          content_length: s.av.video.content_length,
          extension: f,
          is_youtube: e.is_youtube,
          throttle: c,
          cache: e.cache,
        };
  }
}
function Pb(e, t, n, i, r, o, a) {
  i = yt(i);
  let u = `download_${crypto.randomUUID()}`,
    s = e.playlist[o],
    l = Fe(e.sent_headers),
    c = e.duration,
    d = xn(a, e);
  if (s.av.video == !1)
    return {
      download_id: u,
      headers: l,
      good_basename: i,
      subdir: r,
      duration: c,
      save_as: n,
      will_use_jsfetch: !1,
      strategy: "m3u8_audio_only",
      muxer: "mp3",
      url: s.av.audio,
      carry_get_params: ae(a, s.av.audio),
      extension: "mp3",
      is_youtube: e.is_youtube,
      throttle: d,
      cache: e.cache,
    };
  if (t)
    return s.av.audio
      ? {
          download_id: u,
          headers: l,
          good_basename: i,
          subdir: r,
          duration: c,
          save_as: n,
          will_use_jsfetch: !1,
          strategy: "m3u8_audio_only",
          muxer: "mp3",
          url: s.av.audio,
          carry_get_params: ae(a, s.av.audio),
          extension: "mp3",
          is_youtube: e.is_youtube,
          throttle: d,
          cache: e.cache,
        }
      : {
          download_id: u,
          headers: l,
          good_basename: i,
          subdir: r,
          duration: c,
          save_as: n,
          will_use_jsfetch: !1,
          strategy: "m3u8_audio_only",
          muxer: "mp3",
          url: s.av.video,
          carry_get_params: ae(a, s.av.video),
          extension: "mp3",
          is_youtube: e.is_youtube,
          throttle: d,
          cache: e.cache,
        };
  {
    let f = s.demuxer,
      _ = nt(f, a.prefered_av_muxer);
    return s.av.audio
      ? {
          download_id: u,
          headers: l,
          good_basename: i,
          subdir: r,
          muxer: _,
          duration: c,
          save_as: n,
          will_use_jsfetch: !1,
          strategy: "m3u8_audio_video_two_sources",
          url: s.av.video,
          url_audio: s.av.audio,
          carry_get_params: ae(a, s.av.video),
          extension: _,
          is_youtube: e.is_youtube,
          throttle: d,
          cache: e.cache,
        }
      : {
          download_id: u,
          headers: l,
          good_basename: i,
          subdir: r,
          muxer: _,
          duration: c,
          save_as: n,
          will_use_jsfetch: !1,
          strategy: "m3u8_audio_video_one_source",
          url: s.av.video,
          carry_get_params: ae(a, s.av.video),
          extension: _,
          is_youtube: e.is_youtube,
          throttle: d,
          cache: e.cache,
        };
  }
}
function $b(e, t, n, i, r, o) {
  i = yt(i);
  let a = `download_${crypto.randomUUID()}`,
    u = Fe(e.sent_headers),
    s = e.url,
    l = e.duration,
    c = xn(o, e);
  if (t || Wt(e.demuxer))
    return {
      save_as: n,
      subdir: r,
      duration: l,
      will_use_jsfetch: !0,
      download_id: a,
      headers: u,
      strategy: "m3u8_audio_only",
      muxer: "mp3",
      url: s,
      carry_get_params: ae(o, s),
      good_basename: i,
      extension: "mp3",
      is_youtube: e.is_youtube,
      throttle: c,
      cache: e.cache,
    };
  {
    let d = nt(e.demuxer, o.prefered_av_muxer);
    return {
      download_id: a,
      headers: u,
      subdir: r,
      duration: l,
      will_use_jsfetch: !0,
      save_as: n,
      strategy: "m3u8_audio_video_one_source",
      muxer: d,
      url: s,
      carry_get_params: ae(o, s),
      good_basename: i,
      extension: d,
      is_youtube: e.is_youtube,
      throttle: c,
      cache: e.cache,
    };
  }
}
function zb(e, t, n, i, r, o, a) {
  i = yt(i);
  let u = `download_${crypto.randomUUID()}`,
    s = e.playlist[o],
    l = e.extension == "flv" && s.size.isNone(),
    c =
      (e.libav_demuxer.isSome() &&
        hn(e.libav_demuxer.value) &&
        e.supports_byte_ranges) ||
      l,
    d = xn(a, e);
  if (t)
    return {
      save_as: n,
      download_id: u,
      subdir: r,
      will_use_jsfetch: !0,
      headers: Fe(e.sent_headers),
      strategy: "http_strip_audio_jsfetch",
      url: s.av.video,
      carry_get_params: ae(a, s.av.video),
      good_basename: i,
      muxer: "mp3",
      extension: "mp3",
      is_youtube: e.is_youtube,
      size: s.size,
      throttle: d,
      cache: e.cache,
    };
  if (c) {
    let f,
      _ = "";
    if (
      (e.libav_demuxer.isSome()
        ? ((f = Li(e.libav_demuxer.value, a.prefered_av_muxer)), (_ = f))
        : ((f = a.prefered_av_muxer), (_ = a.prefered_av_muxer)),
      s.av.audio)
    ) {
      let g = s.demuxer,
        m = nt(g, a.prefered_av_muxer);
      return {
        save_as: n,
        download_id: u,
        subdir: r,
        will_use_jsfetch: !0,
        headers: Fe(e.sent_headers),
        strategy: "http_audio_video_two_sources_jsfetch",
        url: s.av.video,
        url_audio: s.av.audio,
        carry_get_params: ae(a, s.av.video),
        good_basename: i,
        muxer: m,
        extension: m,
        size: s.size,
        duration: e.duration,
        is_youtube: e.is_youtube,
        throttle: d,
        cache: e.cache,
      };
    } else
      return {
        save_as: n,
        download_id: u,
        subdir: r,
        will_use_jsfetch: !0,
        headers: Fe(e.sent_headers),
        strategy: "http_audio_video_one_source_jsfetch",
        url: s.av.video,
        carry_get_params: ae(a, s.av.video),
        good_basename: i,
        muxer: f,
        extension: _,
        size: s.size,
        is_youtube: e.is_youtube,
        throttle: d,
        cache: e.cache,
      };
  } else
    return {
      save_as: n,
      download_id: u,
      subdir: r,
      will_use_jsfetch: !1,
      headers: Fe(e.sent_headers),
      strategy: "http_audio_video_one_source",
      url: e.playlist[0].av.video,
      carry_get_params: ae(a, e.playlist[0].av.video),
      good_basename: i,
      size: s.size,
      extension: e.extension,
      is_youtube: e.is_youtube,
      throttle: d,
      cache: e.cache,
    };
}
function xn(e, t) {
  return t.is_youtube && e.youtube_throttle;
}
function bt(e, t, n, i, r, o, a) {
  if (e.type == "http_playlist") return zb(e, t, n, i, r, o, a);
  if (e.type == "m3u8") return $b(e, t, n, i, r, a);
  if (e.type == "m3u8_playlist") return Pb(e, t, n, i, r, o, a);
  if (e.type == "youtube_format") {
    if (typeof o == "number") return Ib(e, t, n, i, r, o, a);
    throw "Missing playlist_entry";
  } else if (e.type == "mpd_playlist") {
    if (typeof o == "number") return kb(e, t, n, i, r, o, a);
    throw "Missing playlist_entry";
  } else throw new Error("Unreachable");
}
var Ob = chrome.runtime.id,
  uo = new Map();
function Rb() {
  ke &&
    (chrome.downloads.onDeterminingFilename.hasListener(Qs) ||
      chrome.downloads.onDeterminingFilename.addListener(Qs));
}
function Nb() {
  ke &&
    uo.size == 0 &&
    chrome.downloads.onDeterminingFilename.removeListener(Qs);
}
function Qs(e, t) {
  if (e.byExtensionId !== Ob) {
    t();
    return;
  }
  let n = uo.get(e.finalUrl);
  if (!n) {
    t();
    return;
  }
  (uo.delete(e.finalUrl), t({ filename: n, conflictAction: "uniquify" }));
}
async function Mb(e) {
  let t = await Ct.default.downloads.search({ id: e });
  if (!t.length) return R({ details: "Error downloading file, ID not found." });
  let n = t[0];
  return n.error
    ? R({ details: n.error })
    : n.state == "interrupted"
      ? R({ details: "Download was interrupted." })
      : n.state == "complete"
        ? B(n.filename)
        : new Promise((i) => {
            function r(a) {
              a.id === n.id &&
                (a.error
                  ? (o(),
                    a.error.current
                      ? i(R({ interrupt_reason: a.error.current }))
                      : i(R({ details: "Unknown download error" })))
                  : a.state && a.state.current === "interrupted"
                    ? (o(),
                      Ct.default.downloads.search({ id: e }).then((u) => {
                        u[0] && u[0].error
                          ? i(R({ interrupt_reason: u[0].error }))
                          : i(R({ details: "Download was interrupted." }));
                      }))
                    : a.state &&
                      a.state.current === "complete" &&
                      (o(),
                      Ct.default.downloads.search({ id: e }).then((u) => {
                        u[0]
                          ? i(B(u[0].filename))
                          : i(
                              R({
                                details:
                                  "Download completed but file details not found.",
                              }),
                            );
                      })));
            }
            let o = () => Ct.default.downloads.onChanged.removeListener(r);
            (Ct.default.downloads.onChanged.addListener(r),
              Ct.default.downloads.search({ id: e }).then((a) => {
                a[0] &&
                  (a[0].state == "complete"
                    ? (o(), i(B(a[0].filename)))
                    : a[0].state == "interrupted" &&
                      (o(),
                      a[0].error
                        ? i(R({ interrupt_reason: a[0].error }))
                        : i(R({ details: "Download interrupted." }))));
              }));
          });
}
async function Ks(e) {
  await ji();
  let t = [];
  if (e.url.protocol != "data:")
    if (e_(e)) {
      e.will_use_jsfetch = !e.carry_get_params;
      let i = await Cp(e);
      if (i.isErr()) return i;
      t = i.value;
    } else if (t_(e)) t = await Mp(e);
    else if (e.will_use_jsfetch) {
      let i = [e.url.href];
      (e.strategy == "http_audio_video_two_sources_jsfetch" &&
        i.push(e.url_audio.href),
        (t = await Ls(i, e.headers)));
    } else t = await gt([e.url.href], e.headers);
  (Bs(e.headers), fr({ name: "download", data: { download_args: se(e) } }));
  let n = await new Promise((i) => {
    let r = Gt((o) => {
      (o.name == "download_error" &&
        o.data.download_id == e.download_id &&
        (r(), i(R(o.data.error))),
        o.name == "download_result" &&
          o.data.download_id == e.download_id &&
          (r(), i(B(o.data))));
    });
  });
  return (await vt(t), n);
}
async function Js(e, t, n) {
  try {
    let i = await t.queueTask(() => Ks(e), e.download_id, e.is_youtube);
    if (i.isErr()) return R({ details: i.error });
    if (i.value.aborted_no_partial)
      return B({
        aborted_no_partial: !0,
        ending_reason: i.value.ending_reason,
      });
    let {
      internal_filename: r,
      internal_bloburl: o,
      ending_reason: a,
    } = i.value;
    if (!o) throw new Error("No blob provided");
    let u = e.subdir + e.good_basename + "." + e.extension,
      s = {
        url: o,
        conflictAction: "uniquify",
        filename: u,
        saveAs: e.save_as,
      };
    (ke && uo.set(o, u), Ie && n && (s.incognito = !0));
    let l = Date.now(),
      c,
      d;
    try {
      (Rb(),
        (d = await Ct.default.downloads.download(s)),
        (c = await Mb(d)),
        Nb());
    } catch (g) {
      if (g?.message === "Download canceled by the user")
        c = R({ interrupt_reason: "USER_CANCELED" });
      else throw g;
    }
    let f = Date.now() - l;
    if (
      (await (await navigator.storage.getDirectory()).removeEntry(r),
      fr({ name: "revoke_blob_url", data: { blob_url: o } }),
      c.isErr())
    ) {
      let g = c.error;
      return g.interrupt_reason == "USER_CANCELED"
        ? B({ aborted_no_partial: !0, ending_reason: gr() })
        : (g.details, c);
    }
    return c.map((g) => ({
      ending_reason: a,
      browser_downloads_duration_ms: f,
      aborted_no_partial: !1,
      browser_download_id: d,
      path: g,
    }));
  } catch (i) {
    return (console.error(i), R({ details: i.toString() }));
  }
}
function n_(e) {
  fr({ name: "abort_download", data: { download_id: e } });
}
_r();
var lo = [];
function wt(e) {
  for (let t of lo) t(e);
}
function i_(e) {
  return (
    lo.push(e),
    () => {
      lo = lo.filter((t) => t != e);
    }
  );
}
var Ut = ye(Te(), 1);
async function Cb(e, t) {
  await Ut.default.runtime.sendMessage({ msg: e, channel: t });
}
async function o_(e, t) {
  await Ub(e, t, ht.FromServiceToInjected, 10);
}
async function Ub(e, t, n, i) {
  for (let r = 0; r < i; r++)
    try {
      await Ut.default.tabs.sendMessage(e, { msg: t, channel: n });
      return;
    } catch (o) {
      (console.warn(`Error sending message to tab ${e} : ${o}`),
        await new Promise((a) => setTimeout(a, 1e3)));
    }
  console.warn(`Timeout sending message to ${e}`);
}
async function Fb(e, t, n) {
  await Ut.default.tabs.sendMessage(e, { msg: t, channel: n });
}
async function Dn(e) {
  let t = ht.FromServiceToContent;
  try {
    return (await Cb(e, t), !0);
  } catch {
    return !1;
  }
}
function St(e, t) {
  let n = ht.FromServiceToInjected;
  Fb(e, t, n);
}
function a_(e) {
  let t = (n, i) => {
    n.channel == ht.FromInjectedToService && e(n.msg, i);
  };
  return (
    Ut.default.runtime.onMessage.addListener(t),
    () => {
      Ut.default.runtime.onMessage.removeListener(t);
    }
  );
}
function br(e) {
  let t = async (n, i) => {
    n.channel == ht.FromContentToService && (await e(n.msg, i));
  };
  return (
    Ut.default.runtime.onMessage.addListener(t),
    () => {
      Ut.default.runtime.onMessage.removeListener(t);
    }
  );
}
var yu = ye(Te(), 1);
Pe();
var wr = ye(Ki()),
  s_ = "https://example.com",
  jb = function (t, n) {
    if (/^[a-z]+:/i.test(n)) return n;
    /^data:/.test(t) &&
      (t = (wr.default.location && wr.default.location.href) || "");
    var i = /^\/\//.test(t),
      r = !wr.default.location && !/\/\//i.test(t);
    t = new wr.default.URL(t, wr.default.location || s_);
    var o = new URL(n, t);
    return r
      ? o.href.slice(s_.length)
      : i
        ? o.href.slice(o.protocol.length)
        : o.href;
  },
  mo = jb;
var Oe = ye(Ki());
var u_ = function (t, n, i) {
  n.forEach(function (r) {
    for (var o in t.mediaGroups[r])
      for (var a in t.mediaGroups[r][o]) {
        var u = t.mediaGroups[r][o][a];
        i(u, r, o, a);
      }
  });
};
var lf = ye(ef());
var tf = (e) => !!e && typeof e == "object",
  Se = (...e) =>
    e.reduce(
      (t, n) => (
        typeof n != "object" ||
          Object.keys(n).forEach((i) => {
            Array.isArray(t[i]) && Array.isArray(n[i])
              ? (t[i] = t[i].concat(n[i]))
              : tf(t[i]) && tf(n[i])
                ? (t[i] = Se(t[i], n[i]))
                : (t[i] = n[i]);
          }),
        t
      ),
      {},
    ),
  cf = (e) => Object.keys(e).map((t) => e[t]),
  hw = (e, t) => {
    let n = [];
    for (let i = e; i < t; i++) n.push(i);
    return n;
  },
  zr = (e) => e.reduce((t, n) => t.concat(n), []),
  df = (e) => {
    if (!e.length) return [];
    let t = [];
    for (let n = 0; n < e.length; n++) t.push(e[n]);
    return t;
  },
  gw = (e, t) => e.reduce((n, i, r) => (i[t] && n.push(r), n), []),
  vw = (e, t) =>
    cf(
      e.reduce(
        (n, i) => (
          i.forEach((r) => {
            n[t(r)] = r;
          }),
          n
        ),
        {},
      ),
    ),
  Cn = {
    INVALID_NUMBER_OF_PERIOD: "INVALID_NUMBER_OF_PERIOD",
    INVALID_NUMBER_OF_CONTENT_STEERING: "INVALID_NUMBER_OF_CONTENT_STEERING",
    DASH_EMPTY_MANIFEST: "DASH_EMPTY_MANIFEST",
    DASH_INVALID_XML: "DASH_INVALID_XML",
    NO_BASE_URL: "NO_BASE_URL",
    MISSING_SEGMENT_INFORMATION: "MISSING_SEGMENT_INFORMATION",
    SEGMENT_TIME_UNSPECIFIED: "SEGMENT_TIME_UNSPECIFIED",
    UNSUPPORTED_UTC_TIMING_SCHEME: "UNSUPPORTED_UTC_TIMING_SCHEME",
  },
  Un = ({
    baseUrl: e = "",
    source: t = "",
    range: n = "",
    indexRange: i = "",
  }) => {
    let r = { uri: t, resolvedUri: mo(e || "", t) };
    if (n || i) {
      let a = (n || i).split("-"),
        u = Oe.default.BigInt ? Oe.default.BigInt(a[0]) : parseInt(a[0], 10),
        s = Oe.default.BigInt ? Oe.default.BigInt(a[1]) : parseInt(a[1], 10);
      (u < Number.MAX_SAFE_INTEGER && typeof u == "bigint" && (u = Number(u)),
        s < Number.MAX_SAFE_INTEGER && typeof s == "bigint" && (s = Number(s)));
      let l;
      (typeof s == "bigint" || typeof u == "bigint"
        ? (l =
            Oe.default.BigInt(s) - Oe.default.BigInt(u) + Oe.default.BigInt(1))
        : (l = s - u + 1),
        typeof l == "bigint" && l < Number.MAX_SAFE_INTEGER && (l = Number(l)),
        (r.byterange = { length: l, offset: u }));
    }
    return r;
  },
  yw = (e) => {
    let t;
    return (
      typeof e.offset == "bigint" || typeof e.length == "bigint"
        ? (t =
            Oe.default.BigInt(e.offset) +
            Oe.default.BigInt(e.length) -
            Oe.default.BigInt(1))
        : (t = e.offset + e.length - 1),
      `${e.offset}-${t}`
    );
  },
  rf = (e) => (
    e && typeof e != "number" && (e = parseInt(e, 10)),
    isNaN(e) ? null : e
  ),
  bw = {
    static(e) {
      let {
          duration: t,
          timescale: n = 1,
          sourceDuration: i,
          periodDuration: r,
        } = e,
        o = rf(e.endNumber),
        a = t / n;
      return typeof o == "number"
        ? { start: 0, end: o }
        : typeof r == "number"
          ? { start: 0, end: r / a }
          : { start: 0, end: i / a };
    },
    dynamic(e) {
      let {
          NOW: t,
          clientOffset: n,
          availabilityStartTime: i,
          timescale: r = 1,
          duration: o,
          periodStart: a = 0,
          minimumUpdatePeriod: u = 0,
          timeShiftBufferDepth: s = 1 / 0,
        } = e,
        l = rf(e.endNumber),
        c = (t + n) / 1e3,
        d = i + a,
        _ = c + u - d,
        g = Math.ceil((_ * r) / o),
        m = Math.floor(((c - d - s) * r) / o),
        A = Math.floor(((c - d) * r) / o);
      return {
        start: Math.max(0, m),
        end: typeof l == "number" ? l : Math.min(g, A),
      };
    },
  },
  ww = (e) => (t) => {
    let {
      duration: n,
      timescale: i = 1,
      periodStart: r,
      startNumber: o = 1,
    } = e;
    return { number: o + t, duration: n / i, timeline: r, time: t * n };
  },
  hu = (e) => {
    let {
        type: t,
        duration: n,
        timescale: i = 1,
        periodDuration: r,
        sourceDuration: o,
      } = e,
      { start: a, end: u } = bw[t](e),
      s = hw(a, u).map(ww(e));
    if (t === "static") {
      let l = s.length - 1,
        c = typeof r == "number" ? r : o;
      s[l].duration = c - (n / i) * l;
    }
    return s;
  },
  mf = (e) => {
    let {
      baseUrl: t,
      initialization: n = {},
      sourceDuration: i,
      indexRange: r = "",
      periodStart: o,
      presentationTime: a,
      number: u = 0,
      duration: s,
    } = e;
    if (!t) throw new Error(Cn.NO_BASE_URL);
    let l = Un({ baseUrl: t, source: n.sourceURL, range: n.range }),
      c = Un({ baseUrl: t, source: t, indexRange: r });
    if (((c.map = l), s)) {
      let d = hu(e);
      d.length && ((c.duration = d[0].duration), (c.timeline = d[0].timeline));
    } else i && ((c.duration = i), (c.timeline = o));
    return ((c.presentationTime = a || o), (c.number = u), [c]);
  },
  Sw = (e, t, n) => {
    let i = e.sidx.map ? e.sidx.map : null,
      r = e.sidx.duration,
      o = e.timeline || 0,
      a = e.sidx.byterange,
      u = a.offset + a.length,
      s = t.timescale,
      l = t.references.filter((A) => A.referenceType !== 1),
      c = [],
      d = e.endList ? "static" : "dynamic",
      f = e.sidx.timeline,
      _ = f,
      g = e.mediaSequence || 0,
      m;
    typeof t.firstOffset == "bigint"
      ? (m = Oe.default.BigInt(u) + t.firstOffset)
      : (m = u + t.firstOffset);
    for (let A = 0; A < l.length; A++) {
      let I = t.references[A],
        w = I.referencedSize,
        y = I.subsegmentDuration,
        b;
      typeof m == "bigint"
        ? (b = m + Oe.default.BigInt(w) - Oe.default.BigInt(1))
        : (b = m + w - 1);
      let E = `${m}-${b}`,
        T = mf({
          baseUrl: n,
          timescale: s,
          timeline: o,
          periodStart: f,
          presentationTime: _,
          number: g,
          duration: y,
          sourceDuration: r,
          indexRange: E,
          type: d,
        })[0];
      (i && (T.map = i),
        c.push(T),
        typeof m == "bigint" ? (m += Oe.default.BigInt(w)) : (m += w),
        (_ += y / s),
        g++);
    }
    return ((e.segments = c), e);
  },
  xw = ["AUDIO", "SUBTITLES"],
  Dw = 1 / 60,
  pf = (e) =>
    vw(e, ({ timeline: t }) => t).sort((t, n) =>
      t.timeline > n.timeline ? 1 : -1,
    ),
  Aw = (e, t) => {
    for (let n = 0; n < e.length; n++)
      if (e[n].attributes.NAME === t) return e[n];
    return null;
  },
  nf = (e) => {
    let t = [];
    return (
      u_(e, xw, (n, i, r, o) => {
        t = t.concat(n.playlists || []);
      }),
      t
    );
  },
  of = ({ playlist: e, mediaSequence: t }) => {
    ((e.mediaSequence = t),
      e.segments.forEach((n, i) => {
        n.number = e.mediaSequence + i;
      }));
  },
  Ew = ({ oldPlaylists: e, newPlaylists: t, timelineStarts: n }) => {
    t.forEach((i) => {
      i.discontinuitySequence = n.findIndex(function ({ timeline: s }) {
        return s === i.timeline;
      });
      let r = Aw(e, i.attributes.NAME);
      if (!r || i.sidx) return;
      let o = i.segments[0],
        a = r.segments.findIndex(function (s) {
          return Math.abs(s.presentationTime - o.presentationTime) < Dw;
        });
      if (a === -1) {
        (of({
          playlist: i,
          mediaSequence: r.mediaSequence + r.segments.length,
        }),
          (i.segments[0].discontinuity = !0),
          i.discontinuityStarts.unshift(0),
          ((!r.segments.length && i.timeline > r.timeline) ||
            (r.segments.length &&
              i.timeline > r.segments[r.segments.length - 1].timeline)) &&
            i.discontinuitySequence--);
        return;
      }
      (r.segments[a].discontinuity &&
        !o.discontinuity &&
        ((o.discontinuity = !0),
        i.discontinuityStarts.unshift(0),
        i.discontinuitySequence--),
        of({ playlist: i, mediaSequence: r.segments[a].number }));
    });
  },
  Tw = ({ oldManifest: e, newManifest: t }) => {
    let n = e.playlists.concat(nf(e)),
      i = t.playlists.concat(nf(t));
    return (
      (t.timelineStarts = pf([e.timelineStarts, t.timelineStarts])),
      Ew({
        oldPlaylists: n,
        newPlaylists: i,
        timelineStarts: t.timelineStarts,
      }),
      t
    );
  },
  kw = (e) => e && e.uri + "-" + yw(e.byterange),
  fu = (e) => {
    let t = e.reduce(function (i, r) {
        return (
          i[r.attributes.baseUrl] || (i[r.attributes.baseUrl] = []),
          i[r.attributes.baseUrl].push(r),
          i
        );
      }, {}),
      n = [];
    return (
      Object.values(t).forEach((i) => {
        let r = cf(
          i.reduce((o, a) => {
            let u = a.attributes.id + (a.attributes.lang || "");
            return (
              o[u]
                ? (a.segments &&
                    (a.segments[0] && (a.segments[0].discontinuity = !0),
                    o[u].segments.push(...a.segments)),
                  a.attributes.contentProtection &&
                    (o[u].attributes.contentProtection =
                      a.attributes.contentProtection))
                : ((o[u] = a), (o[u].attributes.timelineStarts = [])),
              o[u].attributes.timelineStarts.push({
                start: a.attributes.periodStart,
                timeline: a.attributes.periodStart,
              }),
              o
            );
          }, {}),
        );
        n = n.concat(r);
      }),
      n.map(
        (i) => (
          (i.discontinuityStarts = gw(i.segments || [], "discontinuity")),
          i
        ),
      )
    );
  },
  gu = (e, t) => {
    let n = kw(e.sidx),
      i = n && t[n] && t[n].sidx;
    return (i && Sw(e, i, e.sidx.resolvedUri), e);
  },
  Iw = (e, t = {}) => {
    if (!Object.keys(t).length) return e;
    for (let n in e) e[n] = gu(e[n], t);
    return e;
  },
  Pw = (
    {
      attributes: e,
      segments: t,
      sidx: n,
      mediaSequence: i,
      discontinuitySequence: r,
      discontinuityStarts: o,
    },
    a,
  ) => {
    let u = {
      attributes: {
        NAME: e.id,
        BANDWIDTH: e.bandwidth,
        CODECS: e.codecs,
        "PROGRAM-ID": 1,
      },
      uri: "",
      endList: e.type === "static",
      timeline: e.periodStart,
      resolvedUri: e.baseUrl || "",
      targetDuration: e.duration,
      discontinuitySequence: r,
      discontinuityStarts: o,
      timelineStarts: e.timelineStarts,
      mediaSequence: i,
      segments: t,
    };
    return (
      e.contentProtection && (u.contentProtection = e.contentProtection),
      e.serviceLocation && (u.attributes.serviceLocation = e.serviceLocation),
      n && (u.sidx = n),
      a && ((u.attributes.AUDIO = "audio"), (u.attributes.SUBTITLES = "subs")),
      u
    );
  },
  $w = ({
    attributes: e,
    segments: t,
    mediaSequence: n,
    discontinuityStarts: i,
    discontinuitySequence: r,
  }) => {
    typeof t > "u" &&
      ((t = [
        {
          uri: e.baseUrl,
          timeline: e.periodStart,
          resolvedUri: e.baseUrl || "",
          duration: e.sourceDuration,
          number: 0,
        },
      ]),
      (e.duration = e.sourceDuration));
    let o = { NAME: e.id, BANDWIDTH: e.bandwidth, "PROGRAM-ID": 1 };
    e.codecs && (o.CODECS = e.codecs);
    let a = {
      attributes: o,
      uri: "",
      endList: e.type === "static",
      timeline: e.periodStart,
      resolvedUri: e.baseUrl || "",
      targetDuration: e.duration,
      timelineStarts: e.timelineStarts,
      discontinuityStarts: i,
      discontinuitySequence: r,
      mediaSequence: n,
      segments: t,
    };
    return (
      e.serviceLocation && (a.attributes.serviceLocation = e.serviceLocation),
      a
    );
  },
  zw = (e, t = {}, n = !1) => {
    let i,
      r = e.reduce((o, a) => {
        let u = (a.attributes.role && a.attributes.role.value) || "",
          s = a.attributes.lang || "",
          l = a.attributes.label || "main";
        if (s && !a.attributes.label) {
          let d = u ? ` (${u})` : "";
          l = `${a.attributes.lang}${d}`;
        }
        o[l] ||
          (o[l] = {
            language: s,
            autoselect: !0,
            default: u === "main",
            playlists: [],
            uri: "",
          });
        let c = gu(Pw(a, n), t);
        return (
          o[l].playlists.push(c),
          typeof i > "u" && u === "main" && ((i = a), (i.default = !0)),
          o
        );
      }, {});
    if (!i) {
      let o = Object.keys(r)[0];
      r[o].default = !0;
    }
    return r;
  },
  Ow = (e, t = {}) =>
    e.reduce((n, i) => {
      let r = i.attributes.label || i.attributes.lang || "text",
        o = i.attributes.lang || "und";
      return (
        n[r] ||
          (n[r] = {
            language: o,
            default: !1,
            autoselect: !1,
            playlists: [],
            uri: "",
          }),
        n[r].playlists.push(gu($w(i), t)),
        n
      );
    }, {}),
  Rw = (e) =>
    e.reduce(
      (t, n) => (
        n &&
          n.forEach((i) => {
            let { channel: r, language: o } = i;
            ((t[o] = {
              autoselect: !1,
              default: !1,
              instreamId: r,
              language: o,
            }),
              i.hasOwnProperty("aspectRatio") &&
                (t[o].aspectRatio = i.aspectRatio),
              i.hasOwnProperty("easyReader") &&
                (t[o].easyReader = i.easyReader),
              i.hasOwnProperty("3D") && (t[o]["3D"] = i["3D"]));
          }),
        t
      ),
      {},
    ),
  Nw = ({ attributes: e, segments: t, sidx: n, discontinuityStarts: i }) => {
    let r = {
      attributes: {
        NAME: e.id,
        AUDIO: "audio",
        SUBTITLES: "subs",
        RESOLUTION: { width: e.width, height: e.height },
        CODECS: e.codecs,
        BANDWIDTH: e.bandwidth,
        "PROGRAM-ID": 1,
      },
      uri: "",
      endList: e.type === "static",
      timeline: e.periodStart,
      resolvedUri: e.baseUrl || "",
      targetDuration: e.duration,
      discontinuityStarts: i,
      timelineStarts: e.timelineStarts,
      segments: t,
    };
    return (
      e.frameRate && (r.attributes["FRAME-RATE"] = e.frameRate),
      e.contentProtection && (r.contentProtection = e.contentProtection),
      e.serviceLocation && (r.attributes.serviceLocation = e.serviceLocation),
      n && (r.sidx = n),
      r
    );
  },
  Mw = ({ attributes: e }) =>
    e.mimeType === "video/mp4" ||
    e.mimeType === "video/webm" ||
    e.contentType === "video",
  Cw = ({ attributes: e }) =>
    e.mimeType === "audio/mp4" ||
    e.mimeType === "audio/webm" ||
    e.contentType === "audio",
  Uw = ({ attributes: e }) =>
    e.mimeType === "text/vtt" || e.contentType === "text",
  Fw = (e, t) => {
    e.forEach((n) => {
      ((n.mediaSequence = 0),
        (n.discontinuitySequence = t.findIndex(function ({ timeline: i }) {
          return i === n.timeline;
        })),
        n.segments &&
          n.segments.forEach((i, r) => {
            i.number = r;
          }));
    });
  },
  af = (e) =>
    e
      ? Object.keys(e).reduce((t, n) => {
          let i = e[n];
          return t.concat(i.playlists);
        }, [])
      : [],
  jw = ({
    dashPlaylists: e,
    locations: t,
    contentSteering: n,
    sidxMapping: i = {},
    previousManifest: r,
    eventStream: o,
  }) => {
    if (!e.length) return {};
    let {
        sourceDuration: a,
        type: u,
        suggestedPresentationDelay: s,
        minimumUpdatePeriod: l,
      } = e[0].attributes,
      c = fu(e.filter(Mw)).map(Nw),
      d = fu(e.filter(Cw)),
      f = fu(e.filter(Uw)),
      _ = e.map((b) => b.attributes.captionServices).filter(Boolean),
      g = {
        allowCache: !0,
        discontinuityStarts: [],
        segments: [],
        endList: !0,
        mediaGroups: {
          AUDIO: {},
          VIDEO: {},
          "CLOSED-CAPTIONS": {},
          SUBTITLES: {},
        },
        uri: "",
        duration: a,
        playlists: Iw(c, i),
      };
    (l >= 0 && (g.minimumUpdatePeriod = l * 1e3),
      t && (g.locations = t),
      n && (g.contentSteering = n),
      u === "dynamic" && (g.suggestedPresentationDelay = s),
      o && o.length > 0 && (g.eventStream = o));
    let m = g.playlists.length === 0,
      A = d.length ? zw(d, i, m) : null,
      I = f.length ? Ow(f, i) : null,
      w = c.concat(af(A), af(I)),
      y = w.map(({ timelineStarts: b }) => b);
    return (
      (g.timelineStarts = pf(y)),
      Fw(w, g.timelineStarts),
      A && (g.mediaGroups.AUDIO.audio = A),
      I && (g.mediaGroups.SUBTITLES.subs = I),
      _.length && (g.mediaGroups["CLOSED-CAPTIONS"].cc = Rw(_)),
      r ? Tw({ oldManifest: r, newManifest: g }) : g
    );
  },
  Lw = (e, t, n) => {
    let {
        NOW: i,
        clientOffset: r,
        availabilityStartTime: o,
        timescale: a = 1,
        periodStart: u = 0,
        minimumUpdatePeriod: s = 0,
      } = e,
      l = (i + r) / 1e3,
      c = o + u,
      f = l + s - c;
    return Math.ceil((f * a - t) / n);
  },
  _f = (e, t) => {
    let {
        type: n,
        minimumUpdatePeriod: i = 0,
        media: r = "",
        sourceDuration: o,
        timescale: a = 1,
        startNumber: u = 1,
        periodStart: s,
      } = e,
      l = [],
      c = -1;
    for (let d = 0; d < t.length; d++) {
      let f = t[d],
        _ = f.d,
        g = f.r || 0,
        m = f.t || 0;
      (c < 0 && (c = m), m && m > c && (c = m));
      let A;
      if (g < 0) {
        let y = d + 1;
        y === t.length
          ? n === "dynamic" && i > 0 && r.indexOf("$Number$") > 0
            ? (A = Lw(e, c, _))
            : (A = (o * a - c) / _)
          : (A = (t[y].t - c) / _);
      } else A = g + 1;
      let I = u + l.length + A,
        w = u + l.length;
      for (; w < I; )
        (l.push({ number: w, duration: _ / a, time: c, timeline: s }),
          (c += _),
          w++);
    }
    return l;
  },
  Bw = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,
  Vw = (e) => (t, n, i, r) => {
    if (t === "$$") return "$";
    if (typeof e[n] > "u") return t;
    let o = "" + e[n];
    return n === "RepresentationID" ||
      (i ? (r = parseInt(r, 10)) : (r = 1), o.length >= r)
      ? o
      : `${new Array(r - o.length + 1).join("0")}${o}`;
  },
  sf = (e, t) => e.replace(Bw, Vw(t)),
  qw = (e, t) =>
    !e.duration && !t
      ? [
          {
            number: e.startNumber || 1,
            duration: e.sourceDuration,
            time: 0,
            timeline: e.periodStart,
          },
        ]
      : e.duration
        ? hu(e)
        : _f(e, t),
  Hw = (e, t) => {
    let n = { RepresentationID: e.id, Bandwidth: e.bandwidth || 0 },
      { initialization: i = { sourceURL: "", range: "" } } = e,
      r = Un({
        baseUrl: e.baseUrl,
        source: sf(i.sourceURL, n),
        range: i.range,
      });
    return qw(e, t).map((a) => {
      ((n.Number = a.number), (n.Time = a.time));
      let u = sf(e.media || "", n),
        s = e.timescale || 1,
        l = e.presentationTimeOffset || 0,
        c = e.periodStart + (a.time - l) / s;
      return {
        uri: u,
        timeline: a.timeline,
        duration: a.duration,
        resolvedUri: mo(e.baseUrl || "", u),
        map: r,
        number: a.number,
        presentationTime: c,
      };
    });
  },
  Zw = (e, t) => {
    let { baseUrl: n, initialization: i = {} } = e,
      r = Un({ baseUrl: n, source: i.sourceURL, range: i.range }),
      o = Un({ baseUrl: n, source: t.media, range: t.mediaRange });
    return ((o.map = r), o);
  },
  Gw = (e, t) => {
    let { duration: n, segmentUrls: i = [], periodStart: r } = e;
    if ((!n && !t) || (n && t)) throw new Error(Cn.SEGMENT_TIME_UNSPECIFIED);
    let o = i.map((s) => Zw(e, s)),
      a;
    return (
      n && (a = hu(e)),
      t && (a = _f(e, t)),
      a
        .map((s, l) => {
          if (o[l]) {
            let c = o[l],
              d = e.timescale || 1,
              f = e.presentationTimeOffset || 0;
            return (
              (c.timeline = s.timeline),
              (c.duration = s.duration),
              (c.number = s.number),
              (c.presentationTime = r + (s.time - f) / d),
              c
            );
          }
        })
        .filter((s) => s)
    );
  },
  Ww = ({ attributes: e, segmentInfo: t }) => {
    let n, i;
    t.template
      ? ((i = Hw), (n = Se(e, t.template)))
      : t.base
        ? ((i = mf), (n = Se(e, t.base)))
        : t.list && ((i = Gw), (n = Se(e, t.list)));
    let r = { attributes: e };
    if (!i) return r;
    let o = i(n, t.segmentTimeline);
    if (n.duration) {
      let { duration: a, timescale: u = 1 } = n;
      n.duration = a / u;
    } else
      o.length
        ? (n.duration = o.reduce(
            (a, u) => Math.max(a, Math.ceil(u.duration)),
            0,
          ))
        : (n.duration = 0);
    return (
      (r.attributes = n),
      (r.segments = o),
      t.base && n.indexRange && ((r.sidx = o[0]), (r.segments = [])),
      r
    );
  },
  Qw = (e) => e.map(Ww),
  le = (e, t) => df(e.childNodes).filter(({ tagName: n }) => n === t),
  Fn = (e) => e.textContent.trim(),
  Kw = (e) => parseFloat(e.split("/").reduce((t, n) => t / n)),
  $r = (e) => {
    let u =
      /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(
        e,
      );
    if (!u) return 0;
    let [s, l, c, d, f, _] = u.slice(1);
    return (
      parseFloat(s || 0) * 31536e3 +
      parseFloat(l || 0) * 2592e3 +
      parseFloat(c || 0) * 86400 +
      parseFloat(d || 0) * 3600 +
      parseFloat(f || 0) * 60 +
      parseFloat(_ || 0)
    );
  },
  Jw = (e) => (
    /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e) && (e += "Z"),
    Date.parse(e)
  ),
  uf = {
    mediaPresentationDuration(e) {
      return $r(e);
    },
    availabilityStartTime(e) {
      return Jw(e) / 1e3;
    },
    minimumUpdatePeriod(e) {
      return $r(e);
    },
    suggestedPresentationDelay(e) {
      return $r(e);
    },
    type(e) {
      return e;
    },
    timeShiftBufferDepth(e) {
      return $r(e);
    },
    start(e) {
      return $r(e);
    },
    width(e) {
      return parseInt(e, 10);
    },
    height(e) {
      return parseInt(e, 10);
    },
    bandwidth(e) {
      return parseInt(e, 10);
    },
    frameRate(e) {
      return Kw(e);
    },
    startNumber(e) {
      return parseInt(e, 10);
    },
    timescale(e) {
      return parseInt(e, 10);
    },
    presentationTimeOffset(e) {
      return parseInt(e, 10);
    },
    duration(e) {
      let t = parseInt(e, 10);
      return isNaN(t) ? $r(e) : t;
    },
    d(e) {
      return parseInt(e, 10);
    },
    t(e) {
      return parseInt(e, 10);
    },
    r(e) {
      return parseInt(e, 10);
    },
    presentationTime(e) {
      return parseInt(e, 10);
    },
    DEFAULT(e) {
      return e;
    },
  },
  ge = (e) =>
    e && e.attributes
      ? df(e.attributes).reduce((t, n) => {
          let i = uf[n.name] || uf.DEFAULT;
          return ((t[n.name] = i(n.value)), t);
        }, {})
      : {},
  Yw = {
    "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
    "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
    "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
    "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime",
    "urn:mpeg:dash:mp4protection:2011": "mp4protection",
  },
  Ao = (e, t) =>
    t.length
      ? zr(
          e.map(function (n) {
            return t.map(function (i) {
              let r = Fn(i),
                o = mo(n.baseUrl, r),
                a = Se(ge(i), { baseUrl: o });
              return (
                o !== r &&
                  !a.serviceLocation &&
                  n.serviceLocation &&
                  (a.serviceLocation = n.serviceLocation),
                a
              );
            });
          }),
        )
      : e,
  vu = (e) => {
    let t = le(e, "SegmentTemplate")[0],
      n = le(e, "SegmentList")[0],
      i = n && le(n, "SegmentURL").map((d) => Se({ tag: "SegmentURL" }, ge(d))),
      r = le(e, "SegmentBase")[0],
      o = n || t,
      a = o && le(o, "SegmentTimeline")[0],
      u = n || r || t,
      s = u && le(u, "Initialization")[0],
      l = t && ge(t);
    l && s
      ? (l.initialization = s && ge(s))
      : l &&
        l.initialization &&
        (l.initialization = { sourceURL: l.initialization });
    let c = {
      template: l,
      segmentTimeline: a && le(a, "S").map((d) => ge(d)),
      list: n && Se(ge(n), { segmentUrls: i, initialization: ge(s) }),
      base: r && Se(ge(r), { initialization: ge(s) }),
    };
    return (
      Object.keys(c).forEach((d) => {
        c[d] || delete c[d];
      }),
      c
    );
  },
  Xw = (e, t, n) => (i) => {
    let r = le(i, "BaseURL"),
      o = Ao(t, r),
      a = Se(e, ge(i)),
      u = vu(i);
    return o.map((s) => ({ segmentInfo: Se(n, u), attributes: Se(a, s) }));
  },
  eS = (e) =>
    e.reduce((t, n) => {
      let i = ge(n);
      i.schemeIdUri && (i.schemeIdUri = i.schemeIdUri.toLowerCase());
      let r = Yw[i.schemeIdUri];
      if (r) {
        t[r] = { attributes: i };
        let o = le(n, "cenc:pssh")[0];
        if (o) {
          let a = Fn(o);
          t[r].pssh = a && vn(a);
        }
      }
      return t;
    }, {}),
  tS = (e) => {
    if (e.schemeIdUri === "urn:scte:dash:cc:cea-608:2015")
      return (typeof e.value != "string" ? [] : e.value.split(";")).map((n) => {
        let i, r;
        return (
          (r = n),
          /^CC\d=/.test(n)
            ? ([i, r] = n.split("="))
            : /^CC\d$/.test(n) && (i = n),
          { channel: i, language: r }
        );
      });
    if (e.schemeIdUri === "urn:scte:dash:cc:cea-708:2015")
      return (typeof e.value != "string" ? [] : e.value.split(";")).map((n) => {
        let i = {
          channel: void 0,
          language: void 0,
          aspectRatio: 1,
          easyReader: 0,
          "3D": 0,
        };
        if (/=/.test(n)) {
          let [r, o = ""] = n.split("=");
          ((i.channel = r),
            (i.language = n),
            o.split(",").forEach((a) => {
              let [u, s] = a.split(":");
              u === "lang"
                ? (i.language = s)
                : u === "er"
                  ? (i.easyReader = Number(s))
                  : u === "war"
                    ? (i.aspectRatio = Number(s))
                    : u === "3D" && (i["3D"] = Number(s));
            }));
        } else i.language = n;
        return (i.channel && (i.channel = "SERVICE" + i.channel), i);
      });
  },
  rS = (e) =>
    zr(
      le(e.node, "EventStream").map((t) => {
        let n = ge(t),
          i = n.schemeIdUri;
        return le(t, "Event").map((r) => {
          let o = ge(r),
            a = o.presentationTime || 0,
            u = n.timescale || 1,
            s = o.duration || 0,
            l = a / u + e.attributes.start;
          return {
            schemeIdUri: i,
            value: n.value,
            id: o.id,
            start: l,
            end: l + s / u,
            messageData: Fn(r) || o.messageData,
            contentEncoding: n.contentEncoding,
            presentationTimeOffset: n.presentationTimeOffset || 0,
          };
        });
      }),
    ),
  nS = (e, t, n) => (i) => {
    let r = ge(i),
      o = Ao(t, le(i, "BaseURL")),
      a = le(i, "Role")[0],
      u = { role: ge(a) },
      s = Se(e, r, u),
      l = le(i, "Accessibility")[0],
      c = tS(ge(l));
    c && (s = Se(s, { captionServices: c }));
    let d = le(i, "Label")[0];
    if (d && d.childNodes.length) {
      let A = d.childNodes[0].nodeValue.trim();
      s = Se(s, { label: A });
    }
    let f = eS(le(i, "ContentProtection"));
    Object.keys(f).length && (s = Se(s, { contentProtection: f }));
    let _ = vu(i),
      g = le(i, "Representation"),
      m = Se(n, _);
    return zr(g.map(Xw(s, o, m)));
  },
  iS = (e, t) => (n, i) => {
    let r = Ao(t, le(n.node, "BaseURL")),
      o = Se(e, { periodStart: n.attributes.start });
    typeof n.attributes.duration == "number" &&
      (o.periodDuration = n.attributes.duration);
    let a = le(n.node, "AdaptationSet"),
      u = vu(n.node);
    return zr(a.map(nS(o, r, u)));
  },
  oS = (e, t) => {
    if (
      (e.length > 1 &&
        t({
          type: "warn",
          message:
            "The MPD manifest should contain no more than one ContentSteering tag",
        }),
      !e.length)
    )
      return null;
    let n = Se({ serverURL: Fn(e[0]) }, ge(e[0]));
    return ((n.queryBeforeStart = n.queryBeforeStart === "true"), n);
  },
  aS = ({ attributes: e, priorPeriodAttributes: t, mpdType: n }) =>
    typeof e.start == "number"
      ? e.start
      : t && typeof t.start == "number" && typeof t.duration == "number"
        ? t.start + t.duration
        : !t && n === "static"
          ? 0
          : null,
  sS = (e, t = {}) => {
    let {
        manifestUri: n = "",
        NOW: i = Date.now(),
        clientOffset: r = 0,
        eventHandler: o = function () {},
      } = t,
      a = le(e, "Period");
    if (!a.length) throw new Error(Cn.INVALID_NUMBER_OF_PERIOD);
    let u = le(e, "Location"),
      s = ge(e),
      l = Ao([{ baseUrl: n }], le(e, "BaseURL")),
      c = le(e, "ContentSteering");
    ((s.type = s.type || "static"),
      (s.sourceDuration = s.mediaPresentationDuration || 0),
      (s.NOW = i),
      (s.clientOffset = r),
      u.length && (s.locations = u.map(Fn)));
    let d = [];
    return (
      a.forEach((f, _) => {
        let g = ge(f),
          m = d[_ - 1];
        ((g.start = aS({
          attributes: g,
          priorPeriodAttributes: m ? m.attributes : null,
          mpdType: s.type,
        })),
          d.push({ node: f, attributes: g }));
      }),
      {
        locations: s.locations,
        contentSteeringInfo: oS(c, o),
        representationInfo: zr(d.map(iS(s, l))),
        eventStream: zr(d.map(rS)),
      }
    );
  },
  uS = (e) => {
    if (e === "") throw new Error(Cn.DASH_EMPTY_MANIFEST);
    let t = new lf.DOMParser(),
      n,
      i;
    try {
      ((n = t.parseFromString(e, "application/xml")),
        (i =
          n && n.documentElement.tagName === "MPD" ? n.documentElement : null));
    } catch {}
    if (!i || (i && i.getElementsByTagName("parsererror").length > 0))
      throw new Error(Cn.DASH_INVALID_XML);
    return i;
  };
var ff = (e, t = {}) => {
  let n = sS(uS(e), t),
    i = Qw(n.representationInfo);
  return jw({
    dashPlaylists: i,
    locations: n.locations,
    contentSteering: n.contentSteeringInfo,
    sidxMapping: t.sidxMapping,
    previousManifest: t.previousManifest,
    eventStream: n.eventStream,
  });
};
function lS(e) {
  for (let t in e) {
    let n = e[t];
    for (let i in n) {
      let r = n[i];
      if ("playlists" in r) return V(r.playlists);
    }
  }
  return O;
}
function hf(e) {
  try {
    return cS(e);
  } catch (t) {
    return R(`Error parsing MPD: ${t}`);
  }
}
function cS(e) {
  let t = ff(e),
    n = t.duration || "unknown",
    i = dS(t),
    r = [],
    o = t.playlists;
  if (o.length == 0) {
    let u = lS(t.mediaGroups.AUDIO);
    u.isSome() && (o = u.value);
  }
  let a = 0;
  for (let u of o) {
    if (!u.attributes.CODECS) continue;
    let s = Bi(u.attributes.CODECS);
    if (s.isNone() && ((s = kp(u.attributes.CODECS)), s.isNone())) continue;
    let l = O;
    u.attributes.RESOLUTION &&
      u.attributes.RESOLUTION.width &&
      u.attributes.RESOLUTION.height &&
      (l = V({
        width: u.attributes.RESOLUTION.width,
        height: u.attributes.RESOLUTION.height,
      }));
    let c;
    u.attributes.BANDWIDTH
      ? (c = { bitrate: V(u.attributes.BANDWIDTH), size: l })
      : (c = { bitrate: O, size: l });
    let d = { quality: c, demuxer: s.value, index: a };
    (r.push(d), a++);
  }
  return ((r = Zi(r)), Gi(r) ? B([r, n, i]) : R("No playlists"));
}
function dS(e) {
  for (let t of e.playlists)
    if (t.contentProtection && Ji(t.contentProtection)) return !0;
  return !1;
}
async function gf(e, t) {
  let n = e[0].av.video || e[0].av.audio;
  try {
    let i = await gt([n.href], t),
      r = await fetch(n, { headers: t, signal: AbortSignal.timeout(5e3) });
    await vt(i);
    let o = await r.text(),
      a = hr(o);
    if (a.isOk()) {
      let u = Yi(a.value),
        s = Xi(a.value);
      return { duration: u, has_drm: s };
    }
  } catch {
    console.warn(
      "request timeout while calculating duration & checking for DRM",
    );
  }
  return { duration: "unknown", has_drm: !1 };
}
async function Or(...e) {
  let t;
  try {
    t = await fetch(...e);
  } catch (n) {
    return n instanceof DOMException && n.name == "AbortError"
      ? R(gr())
      : R(ro(n.toString()));
  }
  return t.status >= 400 && t.status <= 599
    ? R(jp(t.status))
    : t.ok
      ? t.body != null
        ? B(t)
        : R(ro("No body"))
      : R(ro(`Unkown failure - status ${t.status}`));
}
var mS = new Set([
  "youtube.com",
  "instagram.com",
  "ok.ru",
  "vk.com",
  "vk.ru",
  "vkvideo.ru",
  "canva.com",
  "iq.com",
  "vimeo.com",
  "kick.com",
]);
function bu(e, t) {
  let n = new Headers(),
    i = e.get(t);
  if (i) for (let { name: r, value: o } of i[1]) o && n.append(r, o);
  return n;
}
async function vf(e, t, n, i) {
  let r = bu(t, i.requestId),
    o = he(n);
  if (o.isNone()) return !1;
  let a = o.value;
  Gs(e, a) && (a.search = "");
  let u = await gt([a.href], r),
    s = await fetch(a, { headers: r });
  if ((vt(u), !s.ok)) return !1;
  let l = await s.text(),
    c = Op(l, a, O, ae(e, a), Gs(e, a)),
    d = $e(i.tabId),
    f = he(i.initiator || i.originUrl);
  if (c.isOk()) {
    let _ = c.value,
      { duration: g, has_drm: m } = await gf(_, r);
    return (
      wt({
        name: "on_media",
        data: {
          tab_id: d,
          media: {
            master_url: a,
            is_youtube: !1,
            prefered_entry: O,
            duration: g,
            initiator: f,
            hash: `media_hash_${je(l + a.href)}`,
            sent_headers: r,
            thumbnail_url: O,
            title: O,
            filename: O,
            type: "m3u8_playlist",
            playlist: _,
            discovery_timestamp_ms: Date.now(),
            has_drm: m,
            cache: "default",
          },
        },
      }),
      !0
    );
  } else {
    let _ = hr(l);
    if (_.isOk()) {
      let g = Yi(_.value),
        m = !1;
      return (
        f.isSome() && (m = Kp(e, f.value)),
        wt({
          name: "on_media",
          data: {
            tab_id: d,
            media: {
              is_youtube: !1,
              has_drm: Xi(_.value),
              duration: g,
              initiator: f,
              hash: `media_hash_${je(l + a.href)}`,
              sent_headers: r,
              thumbnail_url: O,
              title: O,
              filename: O,
              type: "m3u8",
              url: a,
              demuxer: m ? "mp3" : "mp4",
              discovery_timestamp_ms: Date.now(),
              cache: "default",
            },
          },
        }),
        !0
      );
    }
  }
  return !1;
}
async function pS(e, t, n, i) {
  let r = bu(t, i.requestId),
    o = he(n);
  if (o.isNone()) return !1;
  let a = o.value,
    u = await gt([a.href], r),
    s = await fetch(a, { headers: r });
  if ((vt(u), !s.ok)) return !1;
  let l = await s.text(),
    c = hf(l);
  if (c.isErr()) return (console.log(c.error), !1);
  let d = $e(i.tabId),
    f = he(i.initiator || i.originUrl);
  f.isSome() && e.set(f.value.href, Date.now());
  let [_, g, m] = c.value;
  return (
    wt({
      name: "on_media",
      data: {
        tab_id: d,
        media: {
          master_url: a,
          has_drm: m,
          is_youtube: !1,
          prefered_entry: O,
          duration: g,
          initiator: f,
          hash: `media_hash_${je(l)}`,
          sent_headers: r,
          thumbnail_url: O,
          title: O,
          filename: O,
          type: "mpd_playlist",
          playlist: _,
          discovery_timestamp_ms: Date.now(),
          cache: "default",
        },
      },
    }),
    !0
  );
}
function wf(e) {
  if (!e) return O;
  let t = e.split(";");
  if (
    (t[0] && (e = t[0].trim().toLowerCase()),
    (t = e.split("/")),
    !t[0] || !t[1])
  )
    return O;
  let n = t[0] == "audio" ? "audio" : "video";
  for (let i of Ip) {
    let { regex: r } = i;
    if (r.test(t[1])) return V(i[n]);
  }
  return O;
}
function yf(e) {
  if (e) {
    let t = e.match(/^(.*)\.([^\.]+)$/);
    if (t && t[1] && t[2])
      return V({ basename: t[1], extension_lowercase: t[2].toLowerCase() });
  }
  return O;
}
function _S(e, t, n) {
  let i, r;
  if ((n.isSome() && (i = n.value.pathname.split("/").pop()), e)) {
    let f = e.match(
      /filename\*=(?:UTF-8'')?['"]?([^'";]*)['"]?|filename=['"]?([^'";]*)['"]?/i,
    );
    f && (f[1] ? (r = decodeURIComponent(f[1])) : f[2] && (r = f[2]));
  }
  let o = [],
    a = yf(i),
    u = yf(r);
  (a.isSome() && o.push(a.value), u.isSome() && o.push(u.value));
  let s = wf(t);
  s.isSome() && o.push({ basename: void 0, extension_lowercase: s.value });
  let l = O,
    c,
    d = O;
  for (let f of o) {
    let { basename: _, extension_lowercase: g } = f;
    Pp(g) && ((c = g), _ && (d = V(_)));
  }
  return (
    c && Tp(c) && ((l = V(c)), hn(l.value) && (c = Li(l.value, "mp4"))),
    c || ((c = "mp4"), (l = O)),
    [l, c, d]
  );
}
function fS(e, t, n, i) {
  let r = he(i.url);
  if (r.isNone()) return !1;
  let o,
    a = n.get("content-length"),
    u = n.get("content-range");
  if (
    (typeof u == "string" && (a = u.split("/")?.[1] || a),
    a && ((o = parseInt(a)), !isNaN(o) && o < 5e5))
  )
    return !1;
  let s = he(i.initiator || i.originUrl);
  if (s.isSome() && e.has(s.value.href) && (!o || o < 2e7)) return !1;
  let l = bu(t, i.requestId),
    c = O;
  if (a) {
    let m = parseInt(a);
    isNaN(m) || (c = V(m));
  }
  let d = n.get("accept-ranges") == "bytes" || n.has("content-range"),
    [f, _, g] = _S(n.get("content-disposition"), n.get("content-type"), r);
  return (
    wt({
      name: "on_media",
      data: {
        tab_id: $e(i.tabId),
        media: {
          is_youtube: !1,
          initiator: s,
          duration: "unknown",
          hash: `media_hash_${je(r.value.href)}`,
          sent_headers: l,
          thumbnail_url: O,
          title: O,
          filename: g,
          type: "http_playlist",
          libav_demuxer: f,
          extension: _,
          discovery_timestamp_ms: Date.now(),
          supports_byte_ranges: d,
          has_drm: !1,
          cache: "default",
          prefered_entry: O,
          playlist: [
            {
              quality: { size: O, bitrate: O },
              demuxer: f.unwrapOr("mp4"),
              size: c,
              av: { video: r.value, audio: !1 },
            },
          ],
        },
      },
    }),
    !0
  );
}
async function bf(e, t, n, i) {
  let r = await Or(n, { headers: i });
  if (r.isOk()) {
    let o = await r.value.json();
    o_(e, { name: t, data: o });
  }
}
async function hS(e, t, n, i) {
  if (i.statusCode < 200 || i.statusCode > 299) return;
  let r = he(i.initiator || i.originUrl);
  if (
    r.isSome() &&
    (so(e(), r.value) ||
      /^(moz|chrome)-extension/.test(r.value.href) ||
      !r.value.href.startsWith("http"))
  )
    return;
  let o = new Headers();
  if (i.responseHeaders) {
    for (let { name: c, value: d } of i.responseHeaders)
      if (d)
        try {
          o.append(c, d);
        } catch {
          console.warn("Failed to add header. Invalid header?", c, d);
        }
  }
  let a = he(i.url);
  if (a.isSome()) {
    let c = a.value;
    if (c.pathname.match(/\.ts$|\.m4s$|\.m2ts$/i)) return;
    if (c.host == "player.vimeo.com" && c.pathname.endsWith("/config")) {
      let d = $e(i.tabId);
      if (d.isSome()) {
        bf(d.value, "vimeo_on_config", i.url, o);
        return;
      }
    } else if (c.host == "intl-api.iq.com" && c.pathname.endsWith("/dash")) {
      let d = $e(i.tabId);
      if (d.isSome()) {
        bf(d.value, "iqyi_on_config", i.url, o);
        return;
      }
    }
  }
  if (r.isSome()) {
    let c = r.value.hostname.split(".").slice(-2).join(".");
    if (mS.has(c)) return;
  }
  if (i.tabId <= 0 && (r.isNone() || !r.value.href.startsWith("http"))) return;
  let u = o.get("content-type"),
    s = e();
  if (
    i.type == "xmlhttprequest" ||
    i.type == "other" ||
    i.type == "main_frame" ||
    i.type == "media"
  ) {
    let c = u?.match(/mpegurl/i),
      d = i.url.match(/hls|m3u8/i),
      f = i.url.match(/\/api\/playlist\/master\//);
    if ((c || d || f) && (await vf(s, n, i.url, i))) return;
    if (Yp(s, r, i.url)) {
      let m = i.url.replace(".mpd", ".m3u8");
      if (await vf(s, n, m, i)) return;
    }
    let _ = u?.match(/dash/i),
      g = i.url.match(/\.mpd/i);
    if ((_ || g) && (await pS(t, n, i.url, i))) return;
  }
  let l = wf(u);
  (i.type == "media" || l.isSome()) && fS(t, n, o, i);
}
function Sf(e) {
  let t = new Map(),
    n = new Map(),
    i = ["xmlhttprequest", "media", "main_frame", "sub_frame", "other"],
    r = ["<all_urls>"];
  {
    let l = function (c) {
      for (let [d, [f]] of t.entries()) c - f > s && t.delete(d);
      for (let [d, f] of n.entries()) c - f > s && n.delete(d);
    };
    var o = l;
    let a = ke ? ["requestHeaders", "extraHeaders"] : ["requestHeaders"],
      u = 0;
    yu.default.webRequest.onSendHeaders.addListener(
      (c) => {
        (c.timeStamp - u > s && ((u = c.timeStamp), l(c.timeStamp)),
          c.requestHeaders &&
            t.set(c.requestId, [c.timeStamp, c.requestHeaders]));
      },
      { urls: r, types: i },
      a,
    );
    let s = 600 * 1e3;
  }
  {
    let a = ke ? ["responseHeaders", "extraHeaders"] : ["responseHeaders"];
    yu.default.webRequest.onResponseStarted.addListener(
      (u) => {
        hS(e, n, t, u);
      },
      { urls: r, types: i },
      a,
    );
  }
}
var xf = ye(Te(), 1);
async function Df(e, t) {
  let n = (a) => {
      let u = [
          { sel: "#vp-preview", attr: "data-thumb" },
          { sel: "video", attr: "poster" },
          {
            sel: "meta[name*=':image' i], meta[property*=':image' i]",
            attr: "content",
          },
          {
            sel: "link[rel='image_src'], link[rel='thumbnail'], link[as='image']",
            attr: "href",
          },
        ],
        s = null;
      for (let c of u) {
        let d = [...document.querySelectorAll(c.sel)];
        for (let f of d) {
          let _ = f.getAttribute(c.attr);
          if (typeof _ == "string") {
            s = _;
            break;
          }
        }
        if (s) break;
      }
      let l = document.title;
      if (!a || !l) {
        let c = [
          ...document.querySelectorAll(
            "meta[name*=':title' i], meta[property*=':title' i]",
          ),
        ];
        for (let d of c)
          if (d.content) {
            l = d.content;
            break;
          }
      }
      return { thumbnail_res: s, title_res: l };
    },
    i = await xf.default.scripting.executeScript({
      target: { tabId: e },
      injectImmediately: !0,
      args: [t],
      func: n,
    }),
    r = O;
  typeof i?.[0]?.result?.thumbnail_res == "string" &&
    (i[0].result.thumbnail_res.startsWith("//")
      ? (r = he("https:" + i[0].result.thumbnail_res))
      : (r = he(i[0].result.thumbnail_res)));
  let o = O;
  return (
    typeof i?.[0]?.result?.title_res == "string" &&
      i[0].result.title_res &&
      (o = V(i[0].result.title_res)),
    { thumbnail: r, title: o }
  );
}
var Rr = ye(Te(), 1);
async function Af() {
  let t = (await Rr.default.tabs.query({ currentWindow: !0, active: !0 }))[0];
  return t
    ? { tab_id: $e(t.id), win_id: zs(t.windowId) }
    : { tab_id: O, win_id: O };
}
function Ef(e) {
  let t = async (n, i) => {
    if (i) {
      let r;
      try {
        r = await Rr.default.tabs.get(i);
      } catch {}
      if (r) {
        let o = r.url || r.pendingUrl;
        if (o && o.startsWith("chrome-extension")) return;
        let a = $e(i);
        if (a.isSome()) {
          let u = zs(n);
          e({ win_id: u, tab_id: a });
        }
      }
    }
  };
  (Rr.default.tabs.onActivated.addListener((n) => {
    t(n.windowId, n.tabId);
  }),
    Rr.default.windows.onFocusChanged.addListener(async () => {
      let n = await Rr.default.tabs.query({
        lastFocusedWindow: !0,
        active: !0,
      });
      t(n[0]?.windowId, n[0]?.id);
    }));
}
var Yt = new Map(),
  wu = null;
function Tf(e, t) {
  br(async (n) => {
    if (n.name == "request_preview") {
      let i = n.data.tab_id,
        r = n.data.media_hash,
        o = e().discovered.get(i)?.media.get(r),
        a = () => {
          (Yt.delete(u),
            Dn({ name: "on_no_preview", data: { media_hash: r } }));
        };
      if (!o || (o.type == "http_playlist" && !o.supports_byte_ranges)) {
        a();
        return;
      }
      let u = `${i}_${r}`,
        s = Yt.get(u);
      if (s) {
        s.filename.isSome() &&
          Dn({
            name: "on_preview_available",
            data: { tab_id: i, media_hash: r, filename: s.filename.value },
          });
        return;
      }
      let l = r_(t(), o);
      if (l.isNone()) {
        (console.error("Couln't build download args for preview"), a());
        return;
      }
      if (Xp(t(), l.value.url)) {
        a();
        return;
      }
      let c = l.value;
      Yt.set(u, { tab_id: i, media_hash: r, filename: O });
      let d = await Ks(c);
      if (d.isOk() && !d.value.aborted_no_partial) {
        let f = d.value.internal_filename;
        (Yt.set(u, { tab_id: i, media_hash: r, filename: V(f) }),
          Dn({
            name: "on_preview_available",
            data: { tab_id: i, media_hash: r, filename: f },
          }),
          kf(e));
      } else
        (d.isErr() && console.error(`Error while build preview: ${d.error}`),
          a());
    }
  });
}
function kf(e) {
  wu ||
    (wu = setTimeout(async () => {
      wu = null;
      let t = await navigator.storage.getDirectory(),
        n = (r) => {
          let o = `${r.tab_id}_${r.media_hash}`;
          r.filename.isSome() &&
            (t.removeEntry(r.filename.value), Yt.delete(o));
        },
        i = await Dn({ name: "ping", data: null });
      for (let r of Yt.values()) {
        let o = e().current_win_tab.tab_id;
        i && o.isSome() ? r.tab_id != o.value && n(r) : n(r);
      }
      Yt.size > 0 && kf(e);
    }, 2e4));
}
var Ht = ye(Te(), 1);
Pe();
Pe();
var xi = ye(Te(), 1);
var x = {};
et(x, {
  $brand: () => Ln,
  $input: () => Ho,
  $output: () => qo,
  NEVER: () => Lg,
  ZodAny: () => wd,
  ZodArray: () => Dd,
  ZodBase64: () => La,
  ZodBase64URL: () => Ba,
  ZodBigInt: () => on,
  ZodBigIntFormat: () => Ha,
  ZodBoolean: () => nn,
  ZodCIDRv4: () => Fa,
  ZodCIDRv6: () => ja,
  ZodCUID: () => za,
  ZodCUID2: () => Oa,
  ZodCatch: () => qd,
  ZodCustom: () => wi,
  ZodDate: () => vi,
  ZodDefault: () => Ud,
  ZodDiscriminatedUnion: () => Ad,
  ZodE164: () => Va,
  ZodEmail: () => ka,
  ZodEmoji: () => Pa,
  ZodEnum: () => tn,
  ZodError: () => Uh,
  ZodFile: () => Nd,
  ZodGUID: () => di,
  ZodIPv4: () => Ca,
  ZodIPv6: () => Ua,
  ZodISODate: () => si,
  ZodISODateTime: () => ai,
  ZodISODuration: () => li,
  ZodISOTime: () => ui,
  ZodIntersection: () => Ed,
  ZodIssueCode: () => jg,
  ZodJWT: () => qa,
  ZodKSUID: () => Ma,
  ZodLazy: () => Kd,
  ZodLiteral: () => Od,
  ZodMap: () => Pd,
  ZodNaN: () => Zd,
  ZodNanoID: () => $a,
  ZodNever: () => Sd,
  ZodNonOptional: () => Ya,
  ZodNull: () => yd,
  ZodNullable: () => Cd,
  ZodNumber: () => rn,
  ZodNumberFormat: () => sr,
  ZodObject: () => yi,
  ZodOptional: () => Ja,
  ZodPipe: () => Xa,
  ZodPrefault: () => jd,
  ZodPromise: () => Yd,
  ZodReadonly: () => Gd,
  ZodRealError: () => ar,
  ZodRecord: () => Qa,
  ZodSet: () => $d,
  ZodString: () => hi,
  ZodStringFormat: () => oe,
  ZodSuccess: () => Vd,
  ZodSymbol: () => gd,
  ZodTemplateLiteral: () => Qd,
  ZodTransform: () => Md,
  ZodTuple: () => kd,
  ZodType: () => Q,
  ZodULID: () => Ra,
  ZodURL: () => Ia,
  ZodUUID: () => dt,
  ZodUndefined: () => vd,
  ZodUnion: () => Wa,
  ZodUnknown: () => Za,
  ZodVoid: () => xd,
  ZodXID: () => Na,
  _ZodString: () => Ta,
  _default: () => Fd,
  any: () => hg,
  array: () => Ga,
  base64: () => ng,
  base64url: () => ig,
  bigint: () => dg,
  boolean: () => hd,
  catch: () => Hd,
  check: () => Xd,
  cidrv4: () => tg,
  cidrv6: () => rg,
  clone: () => qe,
  coerce: () => es,
  config: () => ue,
  core: () => ct,
  cuid: () => Wh,
  cuid2: () => Qh,
  custom: () => Ng,
  date: () => vg,
  default: () => ix,
  discriminatedUnion: () => xg,
  e164: () => og,
  email: () => Fh,
  emoji: () => Zh,
  endsWith: () => Qr,
  enum: () => zd,
  file: () => Ig,
  flattenError: () => Cr,
  float32: () => sg,
  float64: () => ug,
  formatError: () => Ur,
  function: () => ya,
  getErrorMap: () => Vg,
  globalRegistry: () => tt,
  gt: () => ut,
  gte: () => Re,
  guid: () => jh,
  includes: () => Gr,
  instanceof: () => Mg,
  int: () => Ea,
  int32: () => lg,
  int64: () => mg,
  intersection: () => Td,
  ipv4: () => Xh,
  ipv6: () => eg,
  iso: () => ci,
  json: () => Ug,
  jwt: () => ag,
  keyof: () => yg,
  ksuid: () => Yh,
  lazy: () => Jd,
  length: () => or,
  literal: () => Rd,
  locales: () => jr,
  looseObject: () => Sg,
  lowercase: () => Hr,
  lt: () => st,
  lte: () => We,
  map: () => Eg,
  maxLength: () => ir,
  maxSize: () => nr,
  mime: () => Kr,
  minLength: () => kt,
  minSize: () => qt,
  multipleOf: () => Vt,
  nan: () => zg,
  nanoid: () => Gh,
  nativeEnum: () => kg,
  negative: () => _a,
  never: () => gi,
  nonnegative: () => ha,
  nonoptional: () => Bd,
  nonpositive: () => fa,
  normalize: () => Jr,
  null: () => bd,
  nullable: () => _i,
  nullish: () => Pg,
  number: () => fd,
  object: () => bg,
  optional: () => pi,
  overwrite: () => lt,
  parse: () => wa,
  parseAsync: () => Sa,
  partialRecord: () => Ag,
  pipe: () => fi,
  positive: () => pa,
  prefault: () => Ld,
  preprocess: () => Fg,
  prettifyError: () => ko,
  promise: () => Rg,
  property: () => ga,
  readonly: () => Wd,
  record: () => Id,
  refine: () => em,
  regex: () => qr,
  regexes: () => Lt,
  registry: () => ri,
  safeParse: () => xa,
  safeParseAsync: () => Da,
  set: () => Tg,
  setErrorMap: () => Bg,
  size: () => Vr,
  startsWith: () => Wr,
  strictObject: () => wg,
  string: () => Aa,
  stringbool: () => Cg,
  success: () => $g,
  superRefine: () => tm,
  symbol: () => _g,
  templateLiteral: () => Og,
  toJSONSchema: () => ba,
  toLowerCase: () => Xr,
  toUpperCase: () => en,
  transform: () => Ka,
  treeifyError: () => To,
  trim: () => Yr,
  tuple: () => Dg,
  uint32: () => cg,
  uint64: () => pg,
  ulid: () => Kh,
  undefined: () => fg,
  union: () => bi,
  unknown: () => mi,
  uppercase: () => Zr,
  url: () => Hh,
  uuid: () => Lh,
  uuidv4: () => Bh,
  uuidv6: () => Vh,
  uuidv7: () => qh,
  void: () => gg,
  xid: () => Jh,
  z: () => ts,
});
var ts = {};
et(ts, {
  $brand: () => Ln,
  $input: () => Ho,
  $output: () => qo,
  NEVER: () => Lg,
  ZodAny: () => wd,
  ZodArray: () => Dd,
  ZodBase64: () => La,
  ZodBase64URL: () => Ba,
  ZodBigInt: () => on,
  ZodBigIntFormat: () => Ha,
  ZodBoolean: () => nn,
  ZodCIDRv4: () => Fa,
  ZodCIDRv6: () => ja,
  ZodCUID: () => za,
  ZodCUID2: () => Oa,
  ZodCatch: () => qd,
  ZodCustom: () => wi,
  ZodDate: () => vi,
  ZodDefault: () => Ud,
  ZodDiscriminatedUnion: () => Ad,
  ZodE164: () => Va,
  ZodEmail: () => ka,
  ZodEmoji: () => Pa,
  ZodEnum: () => tn,
  ZodError: () => Uh,
  ZodFile: () => Nd,
  ZodGUID: () => di,
  ZodIPv4: () => Ca,
  ZodIPv6: () => Ua,
  ZodISODate: () => si,
  ZodISODateTime: () => ai,
  ZodISODuration: () => li,
  ZodISOTime: () => ui,
  ZodIntersection: () => Ed,
  ZodIssueCode: () => jg,
  ZodJWT: () => qa,
  ZodKSUID: () => Ma,
  ZodLazy: () => Kd,
  ZodLiteral: () => Od,
  ZodMap: () => Pd,
  ZodNaN: () => Zd,
  ZodNanoID: () => $a,
  ZodNever: () => Sd,
  ZodNonOptional: () => Ya,
  ZodNull: () => yd,
  ZodNullable: () => Cd,
  ZodNumber: () => rn,
  ZodNumberFormat: () => sr,
  ZodObject: () => yi,
  ZodOptional: () => Ja,
  ZodPipe: () => Xa,
  ZodPrefault: () => jd,
  ZodPromise: () => Yd,
  ZodReadonly: () => Gd,
  ZodRealError: () => ar,
  ZodRecord: () => Qa,
  ZodSet: () => $d,
  ZodString: () => hi,
  ZodStringFormat: () => oe,
  ZodSuccess: () => Vd,
  ZodSymbol: () => gd,
  ZodTemplateLiteral: () => Qd,
  ZodTransform: () => Md,
  ZodTuple: () => kd,
  ZodType: () => Q,
  ZodULID: () => Ra,
  ZodURL: () => Ia,
  ZodUUID: () => dt,
  ZodUndefined: () => vd,
  ZodUnion: () => Wa,
  ZodUnknown: () => Za,
  ZodVoid: () => xd,
  ZodXID: () => Na,
  _ZodString: () => Ta,
  _default: () => Fd,
  any: () => hg,
  array: () => Ga,
  base64: () => ng,
  base64url: () => ig,
  bigint: () => dg,
  boolean: () => hd,
  catch: () => Hd,
  check: () => Xd,
  cidrv4: () => tg,
  cidrv6: () => rg,
  clone: () => qe,
  coerce: () => es,
  config: () => ue,
  core: () => ct,
  cuid: () => Wh,
  cuid2: () => Qh,
  custom: () => Ng,
  date: () => vg,
  discriminatedUnion: () => xg,
  e164: () => og,
  email: () => Fh,
  emoji: () => Zh,
  endsWith: () => Qr,
  enum: () => zd,
  file: () => Ig,
  flattenError: () => Cr,
  float32: () => sg,
  float64: () => ug,
  formatError: () => Ur,
  function: () => ya,
  getErrorMap: () => Vg,
  globalRegistry: () => tt,
  gt: () => ut,
  gte: () => Re,
  guid: () => jh,
  includes: () => Gr,
  instanceof: () => Mg,
  int: () => Ea,
  int32: () => lg,
  int64: () => mg,
  intersection: () => Td,
  ipv4: () => Xh,
  ipv6: () => eg,
  iso: () => ci,
  json: () => Ug,
  jwt: () => ag,
  keyof: () => yg,
  ksuid: () => Yh,
  lazy: () => Jd,
  length: () => or,
  literal: () => Rd,
  locales: () => jr,
  looseObject: () => Sg,
  lowercase: () => Hr,
  lt: () => st,
  lte: () => We,
  map: () => Eg,
  maxLength: () => ir,
  maxSize: () => nr,
  mime: () => Kr,
  minLength: () => kt,
  minSize: () => qt,
  multipleOf: () => Vt,
  nan: () => zg,
  nanoid: () => Gh,
  nativeEnum: () => kg,
  negative: () => _a,
  never: () => gi,
  nonnegative: () => ha,
  nonoptional: () => Bd,
  nonpositive: () => fa,
  normalize: () => Jr,
  null: () => bd,
  nullable: () => _i,
  nullish: () => Pg,
  number: () => fd,
  object: () => bg,
  optional: () => pi,
  overwrite: () => lt,
  parse: () => wa,
  parseAsync: () => Sa,
  partialRecord: () => Ag,
  pipe: () => fi,
  positive: () => pa,
  prefault: () => Ld,
  preprocess: () => Fg,
  prettifyError: () => ko,
  promise: () => Rg,
  property: () => ga,
  readonly: () => Wd,
  record: () => Id,
  refine: () => em,
  regex: () => qr,
  regexes: () => Lt,
  registry: () => ri,
  safeParse: () => xa,
  safeParseAsync: () => Da,
  set: () => Tg,
  setErrorMap: () => Bg,
  size: () => Vr,
  startsWith: () => Wr,
  strictObject: () => wg,
  string: () => Aa,
  stringbool: () => Cg,
  success: () => $g,
  superRefine: () => tm,
  symbol: () => _g,
  templateLiteral: () => Og,
  toJSONSchema: () => ba,
  toLowerCase: () => Xr,
  toUpperCase: () => en,
  transform: () => Ka,
  treeifyError: () => To,
  trim: () => Yr,
  tuple: () => Dg,
  uint32: () => cg,
  uint64: () => pg,
  ulid: () => Kh,
  undefined: () => fg,
  union: () => bi,
  unknown: () => mi,
  uppercase: () => Zr,
  url: () => Hh,
  uuid: () => Lh,
  uuidv4: () => Bh,
  uuidv6: () => Vh,
  uuidv7: () => qh,
  void: () => gg,
  xid: () => Jh,
});
var ct = {};
et(ct, {
  $ZodAny: () => oc,
  $ZodArray: () => ei,
  $ZodAsyncError: () => at,
  $ZodBase64: () => Kl,
  $ZodBase64URL: () => Jl,
  $ZodBigInt: () => Lo,
  $ZodBigIntFormat: () => tc,
  $ZodBoolean: () => Xn,
  $ZodCIDRv4: () => Gl,
  $ZodCIDRv6: () => Wl,
  $ZodCUID: () => Ml,
  $ZodCUID2: () => Cl,
  $ZodCatch: () => Ac,
  $ZodCheck: () => ce,
  $ZodCheckBigIntFormat: () => ml,
  $ZodCheckEndsWith: () => Dl,
  $ZodCheckGreaterThan: () => Co,
  $ZodCheckIncludes: () => Sl,
  $ZodCheckLengthEquals: () => vl,
  $ZodCheckLessThan: () => Mo,
  $ZodCheckLowerCase: () => bl,
  $ZodCheckMaxLength: () => hl,
  $ZodCheckMaxSize: () => pl,
  $ZodCheckMimeType: () => El,
  $ZodCheckMinLength: () => gl,
  $ZodCheckMinSize: () => _l,
  $ZodCheckMultipleOf: () => cl,
  $ZodCheckNumberFormat: () => dl,
  $ZodCheckOverwrite: () => Tl,
  $ZodCheckProperty: () => Al,
  $ZodCheckRegex: () => yl,
  $ZodCheckSizeEquals: () => fl,
  $ZodCheckStartsWith: () => xl,
  $ZodCheckStringFormat: () => Fr,
  $ZodCheckUpperCase: () => wl,
  $ZodCustom: () => $c,
  $ZodDate: () => uc,
  $ZodDefault: () => wc,
  $ZodDiscriminatedUnion: () => cc,
  $ZodE164: () => Yl,
  $ZodEmail: () => zl,
  $ZodEmoji: () => Rl,
  $ZodEnum: () => fc,
  $ZodError: () => Kn,
  $ZodFile: () => gc,
  $ZodFunction: () => va,
  $ZodGUID: () => Pl,
  $ZodIPv4: () => Hl,
  $ZodIPv6: () => Zl,
  $ZodISODate: () => Bl,
  $ZodISODateTime: () => Ll,
  $ZodISODuration: () => ql,
  $ZodISOTime: () => Vl,
  $ZodIntersection: () => dc,
  $ZodJWT: () => Xl,
  $ZodKSUID: () => jl,
  $ZodLazy: () => Pc,
  $ZodLiteral: () => hc,
  $ZodMap: () => pc,
  $ZodNaN: () => Ec,
  $ZodNanoID: () => Nl,
  $ZodNever: () => ac,
  $ZodNonOptional: () => xc,
  $ZodNull: () => ic,
  $ZodNullable: () => bc,
  $ZodNumber: () => jo,
  $ZodNumberFormat: () => ec,
  $ZodObject: () => lc,
  $ZodOptional: () => yc,
  $ZodPipe: () => ti,
  $ZodPrefault: () => Sc,
  $ZodPromise: () => Ic,
  $ZodReadonly: () => Tc,
  $ZodRealError: () => Mr,
  $ZodRecord: () => mc,
  $ZodRegistry: () => Lr,
  $ZodSet: () => _c,
  $ZodString: () => Yn,
  $ZodStringFormat: () => ie,
  $ZodSuccess: () => Dc,
  $ZodSymbol: () => rc,
  $ZodTemplateLiteral: () => kc,
  $ZodTransform: () => vc,
  $ZodTuple: () => rr,
  $ZodType: () => q,
  $ZodULID: () => Ul,
  $ZodURL: () => Ol,
  $ZodUUID: () => $l,
  $ZodUndefined: () => nc,
  $ZodUnion: () => Bo,
  $ZodUnknown: () => Bt,
  $ZodVoid: () => sc,
  $ZodXID: () => Fl,
  $brand: () => Ln,
  $constructor: () => v,
  $input: () => Ho,
  $output: () => qo,
  Doc: () => Jn,
  JSONSchema: () => Nh,
  JSONSchemaGenerator: () => oi,
  _any: () => ed,
  _array: () => ii,
  _base64: () => la,
  _base64url: () => ca,
  _bigint: () => Gc,
  _boolean: () => Hc,
  _catch: () => q2,
  _cidrv4: () => sa,
  _cidrv6: () => ua,
  _coercedBigint: () => Wc,
  _coercedBoolean: () => Zc,
  _coercedDate: () => id,
  _coercedNumber: () => Fc,
  _coercedString: () => Oc,
  _cuid: () => ea,
  _cuid2: () => ta,
  _custom: () => ud,
  _date: () => nd,
  _default: () => L2,
  _discriminatedUnion: () => P2,
  _e164: () => da,
  _email: () => Zo,
  _emoji: () => Yo,
  _endsWith: () => Qr,
  _enum: () => N2,
  _file: () => sd,
  _float32: () => Lc,
  _float64: () => Bc,
  _gt: () => ut,
  _gte: () => Re,
  _guid: () => ni,
  _includes: () => Gr,
  _int: () => jc,
  _int32: () => Vc,
  _int64: () => Qc,
  _intersection: () => $2,
  _ipv4: () => oa,
  _ipv6: () => aa,
  _isoDate: () => Nc,
  _isoDateTime: () => Rc,
  _isoDuration: () => Cc,
  _isoTime: () => Mc,
  _jwt: () => ma,
  _ksuid: () => ia,
  _lazy: () => W2,
  _length: () => or,
  _literal: () => C2,
  _lowercase: () => Hr,
  _lt: () => st,
  _lte: () => We,
  _map: () => O2,
  _max: () => We,
  _maxLength: () => ir,
  _maxSize: () => nr,
  _mime: () => Kr,
  _min: () => Re,
  _minLength: () => kt,
  _minSize: () => qt,
  _multipleOf: () => Vt,
  _nan: () => od,
  _nanoid: () => Xo,
  _nativeEnum: () => M2,
  _negative: () => _a,
  _never: () => td,
  _nonnegative: () => ha,
  _nonoptional: () => B2,
  _nonpositive: () => fa,
  _normalize: () => Jr,
  _null: () => Xc,
  _nullable: () => j2,
  _number: () => Uc,
  _optional: () => F2,
  _overwrite: () => lt,
  _parse: () => Io,
  _parseAsync: () => $o,
  _pipe: () => H2,
  _positive: () => pa,
  _promise: () => Q2,
  _property: () => ga,
  _readonly: () => Z2,
  _record: () => z2,
  _refine: () => ld,
  _regex: () => qr,
  _safeParse: () => Oo,
  _safeParseAsync: () => Ro,
  _set: () => R2,
  _size: () => Vr,
  _startsWith: () => Wr,
  _string: () => zc,
  _stringbool: () => cd,
  _success: () => V2,
  _symbol: () => Jc,
  _templateLiteral: () => G2,
  _toLowerCase: () => Xr,
  _toUpperCase: () => en,
  _transform: () => U2,
  _trim: () => Yr,
  _tuple: () => ad,
  _uint32: () => qc,
  _uint64: () => Kc,
  _ulid: () => ra,
  _undefined: () => Yc,
  _union: () => I2,
  _unknown: () => Br,
  _uppercase: () => Zr,
  _url: () => Jo,
  _uuid: () => Go,
  _uuidv4: () => Wo,
  _uuidv6: () => Qo,
  _uuidv7: () => Ko,
  _void: () => rd,
  _xid: () => na,
  clone: () => qe,
  config: () => ue,
  flattenError: () => Cr,
  formatError: () => Ur,
  function: () => ya,
  globalConfig: () => jn,
  globalRegistry: () => tt,
  isValidBase64: () => Ql,
  isValidBase64URL: () => Wf,
  isValidJWT: () => Qf,
  locales: () => jr,
  parse: () => Po,
  parseAsync: () => zo,
  prettifyError: () => ko,
  regexes: () => Lt,
  registry: () => ri,
  safeParse: () => Ou,
  safeParseAsync: () => Ru,
  toDotPath: () => Pf,
  toJSONSchema: () => ba,
  treeifyError: () => To,
  util: () => z,
  version: () => kl,
});
function v(e, t, n) {
  function i(u, s) {
    var l;
    (Object.defineProperty(u, "_zod", { value: u._zod ?? {}, enumerable: !1 }),
      (l = u._zod).traits ?? (l.traits = new Set()),
      u._zod.traits.add(e),
      t(u, s));
    for (let c in a.prototype)
      c in u || Object.defineProperty(u, c, { value: a.prototype[c].bind(u) });
    ((u._zod.constr = a), (u._zod.def = s));
  }
  let r = n?.Parent ?? Object;
  class o extends r {}
  Object.defineProperty(o, "name", { value: e });
  function a(u) {
    var s;
    let l = n?.Parent ? new o() : this;
    (i(l, u), (s = l._zod).deferred ?? (s.deferred = []));
    for (let c of l._zod.deferred) c();
    return l;
  }
  return (
    Object.defineProperty(a, "init", { value: i }),
    Object.defineProperty(a, Symbol.hasInstance, {
      value: (u) =>
        n?.Parent && u instanceof n.Parent ? !0 : u?._zod?.traits?.has(e),
    }),
    Object.defineProperty(a, "name", { value: e }),
    a
  );
}
var Ln = Symbol("zod_brand"),
  at = class extends Error {
    constructor() {
      super(
        "Encountered Promise during synchronous parse. Use .parseAsync() instead.",
      );
    }
  },
  jn = {};
function ue(e) {
  return (e && Object.assign(jn, e), jn);
}
var z = {};
et(z, {
  BIGINT_FORMAT_RANGES: () => $u,
  Class: () => xu,
  NUMBER_FORMAT_RANGES: () => Pu,
  aborted: () => er,
  allowsEval: () => Tu,
  assert: () => wS,
  assertEqual: () => gS,
  assertIs: () => yS,
  assertNever: () => bS,
  assertNotEqual: () => vS,
  assignProp: () => Eu,
  cached: () => qn,
  cleanEnum: () => OS,
  cleanRegex: () => Hn,
  clone: () => qe,
  createTransparentProxy: () => ES,
  defineLazy: () => ee,
  esc: () => Xt,
  escapeRegex: () => Tt,
  extend: () => IS,
  finalizeIssue: () => Ge,
  floatSafeRemainder: () => Au,
  getElementAtPath: () => SS,
  getEnumValues: () => Vn,
  getLengthableOrigin: () => Qn,
  getParsedType: () => AS,
  getSizableOrigin: () => Wn,
  isObject: () => Nr,
  isPlainObject: () => Zn,
  issue: () => zu,
  joinValues: () => D,
  jsonStringifyReplacer: () => Du,
  merge: () => PS,
  normalizeParams: () => k,
  nullish: () => jt,
  numKeys: () => DS,
  omit: () => kS,
  optionalKeys: () => Iu,
  partial: () => $S,
  pick: () => TS,
  prefixIssues: () => He,
  primitiveTypes: () => ku,
  promiseAllObject: () => xS,
  propertyKeyTypes: () => Gn,
  randomString: () => Eo,
  required: () => zS,
  stringifyPrimitive: () => N,
  unwrapMessage: () => Bn,
});
function gS(e) {
  return e;
}
function vS(e) {
  return e;
}
function yS(e) {}
function bS(e) {
  throw new Error();
}
function wS(e) {}
function Vn(e) {
  let t = Object.values(e).filter((i) => typeof i == "number");
  return Object.entries(e)
    .filter(([i, r]) => t.indexOf(+i) === -1)
    .map(([i, r]) => r);
}
function D(e, t = "|") {
  return e.map((n) => N(n)).join(t);
}
function Du(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function qn(e) {
  return {
    get value() {
      {
        let n = e();
        return (Object.defineProperty(this, "value", { value: n }), n);
      }
      throw new Error("cached value already set");
    },
  };
}
function jt(e) {
  return e == null;
}
function Hn(e) {
  let t = e.startsWith("^") ? 1 : 0,
    n = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, n);
}
function Au(e, t) {
  let n = (e.toString().split(".")[1] || "").length,
    i = (t.toString().split(".")[1] || "").length,
    r = n > i ? n : i,
    o = Number.parseInt(e.toFixed(r).replace(".", "")),
    a = Number.parseInt(t.toFixed(r).replace(".", ""));
  return (o % a) / 10 ** r;
}
function ee(e, t, n) {
  Object.defineProperty(e, t, {
    get() {
      {
        let r = n();
        return ((e[t] = r), r);
      }
      throw new Error("cached value already set");
    },
    set(r) {
      Object.defineProperty(e, t, { value: r });
    },
    configurable: !0,
  });
}
function Eu(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0,
  });
}
function SS(e, t) {
  return t ? t.reduce((n, i) => n?.[i], e) : e;
}
function xS(e) {
  let t = Object.keys(e),
    n = t.map((i) => e[i]);
  return Promise.all(n).then((i) => {
    let r = {};
    for (let o = 0; o < t.length; o++) r[t[o]] = i[o];
    return r;
  });
}
function Eo(e = 10) {
  let t = "abcdefghijklmnopqrstuvwxyz",
    n = "";
  for (let i = 0; i < e; i++) n += t[Math.floor(Math.random() * t.length)];
  return n;
}
function Xt(e) {
  return JSON.stringify(e);
}
function Nr(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
var Tu = qn(() => {
  try {
    let e = Function;
    return (new e(""), !0);
  } catch {
    return !1;
  }
});
function Zn(e) {
  if (Nr(e) === !1) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(
    Nr(n) === !1 ||
    Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1
  );
}
function DS(e) {
  let t = 0;
  for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t++;
  return t;
}
var AS = (e) => {
    let t = typeof e;
    switch (t) {
      case "undefined":
        return "undefined";
      case "string":
        return "string";
      case "number":
        return Number.isNaN(e) ? "nan" : "number";
      case "boolean":
        return "boolean";
      case "function":
        return "function";
      case "bigint":
        return "bigint";
      case "symbol":
        return "symbol";
      case "object":
        return Array.isArray(e)
          ? "array"
          : e === null
            ? "null"
            : e.then &&
                typeof e.then == "function" &&
                e.catch &&
                typeof e.catch == "function"
              ? "promise"
              : typeof Map < "u" && e instanceof Map
                ? "map"
                : typeof Set < "u" && e instanceof Set
                  ? "set"
                  : typeof Date < "u" && e instanceof Date
                    ? "date"
                    : typeof File < "u" && e instanceof File
                      ? "file"
                      : "object";
      default:
        throw new Error(`Unknown data type: ${t}`);
    }
  },
  Gn = new Set(["string", "number", "symbol"]),
  ku = new Set([
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol",
    "undefined",
  ]);
function Tt(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function qe(e, t, n) {
  let i = new e._zod.constr(t ?? e._zod.def);
  return ((!t || n?.parent) && (i._zod.parent = e), i);
}
function k(e) {
  let t = e;
  if (!t) return {};
  if (typeof t == "string") return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return (
    delete t.message,
    typeof t.error == "string" ? { ...t, error: () => t.error } : t
  );
}
function ES(e) {
  let t;
  return new Proxy(
    {},
    {
      get(n, i, r) {
        return (t ?? (t = e()), Reflect.get(t, i, r));
      },
      set(n, i, r, o) {
        return (t ?? (t = e()), Reflect.set(t, i, r, o));
      },
      has(n, i) {
        return (t ?? (t = e()), Reflect.has(t, i));
      },
      deleteProperty(n, i) {
        return (t ?? (t = e()), Reflect.deleteProperty(t, i));
      },
      ownKeys(n) {
        return (t ?? (t = e()), Reflect.ownKeys(t));
      },
      getOwnPropertyDescriptor(n, i) {
        return (t ?? (t = e()), Reflect.getOwnPropertyDescriptor(t, i));
      },
      defineProperty(n, i, r) {
        return (t ?? (t = e()), Reflect.defineProperty(t, i, r));
      },
    },
  );
}
function N(e) {
  return typeof e == "bigint"
    ? e.toString() + "n"
    : typeof e == "string"
      ? `"${e}"`
      : `${e}`;
}
function Iu(e) {
  return Object.keys(e).filter(
    (t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional",
  );
}
var Pu = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-34028234663852886e22, 34028234663852886e22],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
  },
  $u = {
    int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
    uint64: [BigInt(0), BigInt("18446744073709551615")],
  };
function TS(e, t) {
  let n = {},
    i = e._zod.def;
  for (let r in t) {
    if (!(r in i.shape)) throw new Error(`Unrecognized key: "${r}"`);
    t[r] && (n[r] = i.shape[r]);
  }
  return qe(e, { ...e._zod.def, shape: n, checks: [] });
}
function kS(e, t) {
  let n = { ...e._zod.def.shape },
    i = e._zod.def;
  for (let r in t) {
    if (!(r in i.shape)) throw new Error(`Unrecognized key: "${r}"`);
    t[r] && delete n[r];
  }
  return qe(e, { ...e._zod.def, shape: n, checks: [] });
}
function IS(e, t) {
  let n = {
    ...e._zod.def,
    get shape() {
      let i = { ...e._zod.def.shape, ...t };
      return (Eu(this, "shape", i), i);
    },
    checks: [],
  };
  return qe(e, n);
}
function PS(e, t) {
  return qe(e, {
    ...e._zod.def,
    get shape() {
      let n = { ...e._zod.def.shape, ...t._zod.def.shape };
      return (Eu(this, "shape", n), n);
    },
    catchall: t._zod.def.catchall,
    checks: [],
  });
}
function $S(e, t, n) {
  let i = t._zod.def.shape,
    r = { ...i };
  if (n)
    for (let o in n) {
      if (!(o in i)) throw new Error(`Unrecognized key: "${o}"`);
      n[o] && (r[o] = e ? new e({ type: "optional", innerType: i[o] }) : i[o]);
    }
  else
    for (let o in i)
      r[o] = e ? new e({ type: "optional", innerType: i[o] }) : i[o];
  return qe(t, { ...t._zod.def, shape: r, checks: [] });
}
function zS(e, t, n) {
  let i = t._zod.def.shape,
    r = { ...i };
  if (n)
    for (let o in n) {
      if (!(o in r)) throw new Error(`Unrecognized key: "${o}"`);
      n[o] && (r[o] = new e({ type: "nonoptional", innerType: i[o] }));
    }
  else for (let o in i) r[o] = new e({ type: "nonoptional", innerType: i[o] });
  return qe(t, { ...t._zod.def, shape: r, checks: [] });
}
function er(e, t = 0) {
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n].continue !== !0) return !0;
  return !1;
}
function He(e, t) {
  return t.map((n) => {
    var i;
    return ((i = n).path ?? (i.path = []), n.path.unshift(e), n);
  });
}
function Bn(e) {
  return typeof e == "string" ? e : e?.message;
}
function Ge(e, t, n) {
  let i = { ...e, path: e.path ?? [] };
  if (!e.message) {
    let r =
      Bn(e.inst?._zod.def?.error?.(e)) ??
      Bn(t?.error?.(e)) ??
      Bn(n.customError?.(e)) ??
      Bn(n.localeError?.(e)) ??
      "Invalid input";
    i.message = r;
  }
  return (
    delete i.inst,
    delete i.continue,
    t?.reportInput || delete i.input,
    i
  );
}
function Wn(e) {
  return e instanceof Set
    ? "set"
    : e instanceof Map
      ? "map"
      : e instanceof File
        ? "file"
        : "unknown";
}
function Qn(e) {
  return Array.isArray(e)
    ? "array"
    : typeof e == "string"
      ? "string"
      : "unknown";
}
function zu(...e) {
  let [t, n, i] = e;
  return typeof t == "string"
    ? { message: t, code: "custom", input: n, inst: i }
    : { ...t };
}
function OS(e) {
  return Object.entries(e)
    .filter(([t, n]) => Number.isNaN(Number.parseInt(t, 10)))
    .map((t) => t[1]);
}
var xu = class {
  constructor(...t) {}
};
var If = (e, t) => {
    ((e.name = "$ZodError"),
      Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
      Object.defineProperty(e, "issues", { value: t, enumerable: !1 }),
      Object.defineProperty(e, "message", {
        get() {
          return JSON.stringify(t, Du, 2);
        },
        enumerable: !0,
      }));
  },
  Kn = v("$ZodError", If),
  Mr = v("$ZodError", If, { Parent: Error });
function Cr(e, t = (n) => n.message) {
  let n = {},
    i = [];
  for (let r of e.issues)
    r.path.length > 0
      ? ((n[r.path[0]] = n[r.path[0]] || []), n[r.path[0]].push(t(r)))
      : i.push(t(r));
  return { formErrors: i, fieldErrors: n };
}
function Ur(e, t) {
  let n =
      t ||
      function (o) {
        return o.message;
      },
    i = { _errors: [] },
    r = (o) => {
      for (let a of o.issues)
        if (a.code === "invalid_union" && a.errors.length)
          a.errors.map((u) => r({ issues: u }));
        else if (a.code === "invalid_key") r({ issues: a.issues });
        else if (a.code === "invalid_element") r({ issues: a.issues });
        else if (a.path.length === 0) i._errors.push(n(a));
        else {
          let u = i,
            s = 0;
          for (; s < a.path.length; ) {
            let l = a.path[s];
            (s === a.path.length - 1
              ? ((u[l] = u[l] || { _errors: [] }), u[l]._errors.push(n(a)))
              : (u[l] = u[l] || { _errors: [] }),
              (u = u[l]),
              s++);
          }
        }
    };
  return (r(e), i);
}
function To(e, t) {
  let n =
      t ||
      function (o) {
        return o.message;
      },
    i = { errors: [] },
    r = (o, a = []) => {
      var u, s;
      for (let l of o.issues)
        if (l.code === "invalid_union" && l.errors.length)
          l.errors.map((c) => r({ issues: c }, l.path));
        else if (l.code === "invalid_key") r({ issues: l.issues }, l.path);
        else if (l.code === "invalid_element") r({ issues: l.issues }, l.path);
        else {
          let c = [...a, ...l.path];
          if (c.length === 0) {
            i.errors.push(n(l));
            continue;
          }
          let d = i,
            f = 0;
          for (; f < c.length; ) {
            let _ = c[f],
              g = f === c.length - 1;
            (typeof _ == "string"
              ? (d.properties ?? (d.properties = {}),
                (u = d.properties)[_] ?? (u[_] = { errors: [] }),
                (d = d.properties[_]))
              : (d.items ?? (d.items = []),
                (s = d.items)[_] ?? (s[_] = { errors: [] }),
                (d = d.items[_])),
              g && d.errors.push(n(l)),
              f++);
          }
        }
    };
  return (r(e), i);
}
function Pf(e) {
  let t = [];
  for (let n of e)
    typeof n == "number"
      ? t.push(`[${n}]`)
      : typeof n == "symbol"
        ? t.push(`[${JSON.stringify(String(n))}]`)
        : /[^\w$]/.test(n)
          ? t.push(`[${JSON.stringify(n)}]`)
          : (t.length && t.push("."), t.push(n));
  return t.join("");
}
function ko(e) {
  let t = [],
    n = [...e.issues].sort((i, r) => i.path.length - r.path.length);
  for (let i of n)
    (t.push(`\u2716 ${i.message}`),
      i.path?.length && t.push(`  \u2192 at ${Pf(i.path)}`));
  return t.join(`
`);
}
var Io = (e) => (t, n, i, r) => {
    let o = i ? Object.assign(i, { async: !1 }) : { async: !1 },
      a = t._zod.run({ value: n, issues: [] }, o);
    if (a instanceof Promise) throw new at();
    if (a.issues.length) {
      let u = new (r?.Err ?? e)(a.issues.map((s) => Ge(s, o, ue())));
      throw (Error.captureStackTrace(u, r?.callee), u);
    }
    return a.value;
  },
  Po = Io(Mr),
  $o = (e) => async (t, n, i, r) => {
    let o = i ? Object.assign(i, { async: !0 }) : { async: !0 },
      a = t._zod.run({ value: n, issues: [] }, o);
    if ((a instanceof Promise && (a = await a), a.issues.length)) {
      let u = new (r?.Err ?? e)(a.issues.map((s) => Ge(s, o, ue())));
      throw (Error.captureStackTrace(u, r?.callee), u);
    }
    return a.value;
  },
  zo = $o(Mr),
  Oo = (e) => (t, n, i) => {
    let r = i ? { ...i, async: !1 } : { async: !1 },
      o = t._zod.run({ value: n, issues: [] }, r);
    if (o instanceof Promise) throw new at();
    return o.issues.length
      ? {
          success: !1,
          error: new (e ?? Kn)(o.issues.map((a) => Ge(a, r, ue()))),
        }
      : { success: !0, data: o.value };
  },
  Ou = Oo(Mr),
  Ro = (e) => async (t, n, i) => {
    let r = i ? Object.assign(i, { async: !0 }) : { async: !0 },
      o = t._zod.run({ value: n, issues: [] }, r);
    return (
      o instanceof Promise && (o = await o),
      o.issues.length
        ? { success: !1, error: new e(o.issues.map((a) => Ge(a, r, ue()))) }
        : { success: !0, data: o.value }
    );
  },
  Ru = Ro(Mr);
var Lt = {};
et(Lt, {
  _emoji: () => $f,
  base64: () => Qu,
  base64url: () => No,
  bigint: () => rl,
  boolean: () => ol,
  browserEmail: () => BS,
  cidrv4: () => Gu,
  cidrv6: () => Wu,
  cuid: () => Nu,
  cuid2: () => Mu,
  date: () => Yu,
  datetime: () => el,
  domain: () => VS,
  duration: () => Lu,
  e164: () => Ju,
  email: () => Vu,
  emoji: () => qu,
  extendedDuration: () => NS,
  guid: () => Bu,
  hostname: () => Ku,
  html5Email: () => FS,
  integer: () => nl,
  ipv4: () => Hu,
  ipv6: () => Zu,
  ksuid: () => Fu,
  lowercase: () => ul,
  nanoid: () => ju,
  null: () => al,
  number: () => il,
  rfc5322Email: () => jS,
  string: () => tl,
  time: () => Xu,
  ulid: () => Cu,
  undefined: () => sl,
  unicodeEmail: () => LS,
  uppercase: () => ll,
  uuid: () => tr,
  uuid4: () => MS,
  uuid6: () => CS,
  uuid7: () => US,
  xid: () => Uu,
});
var Nu = /^[cC][^\s-]{8,}$/,
  Mu = /^[0-9a-z]+$/,
  Cu = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
  Uu = /^[0-9a-vA-V]{20}$/,
  Fu = /^[A-Za-z0-9]{27}$/,
  ju = /^[a-zA-Z0-9_-]{21}$/,
  Lu =
    /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
  NS =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  Bu =
    /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  tr = (e) =>
    e
      ? new RegExp(
          `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
        )
      : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/,
  MS = tr(4),
  CS = tr(6),
  US = tr(7),
  Vu =
    /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
  FS =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  jS =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  LS = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
  BS =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  $f = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function qu() {
  return new RegExp($f, "u");
}
var Hu =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  Zu =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,
  Gu =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  Wu =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  Qu =
    /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  No = /^[A-Za-z0-9_-]*$/,
  Ku = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/,
  VS = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
  Ju = /^\+(?:[0-9]){6,14}[0-9]$/,
  zf =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  Yu = new RegExp(`^${zf}$`);
function Of(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return (
    e.precision
      ? (t = `${t}\\.\\d{${e.precision}}`)
      : e.precision == null && (t = `${t}(\\.\\d+)?`),
    t
  );
}
function Xu(e) {
  return new RegExp(`^${Of(e)}$`);
}
function el(e) {
  let t = `${zf}T${Of(e)}`,
    n = [];
  return (
    n.push(e.local ? "Z?" : "Z"),
    e.offset && n.push("([+-]\\d{2}:?\\d{2})"),
    (t = `${t}(${n.join("|")})`),
    new RegExp(`^${t}$`)
  );
}
var tl = (e) => {
    let t = e
      ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}`
      : "[\\s\\S]*";
    return new RegExp(`^${t}$`);
  },
  rl = /^\d+n?$/,
  nl = /^\d+$/,
  il = /^-?\d+(?:\.\d+)?/i,
  ol = /true|false/i,
  al = /null/i;
var sl = /undefined/i;
var ul = /^[^A-Z]*$/,
  ll = /^[^a-z]*$/;
var ce = v("$ZodCheck", (e, t) => {
    var n;
    (e._zod ?? (e._zod = {}),
      (e._zod.def = t),
      (n = e._zod).onattach ?? (n.onattach = []));
  }),
  Nf = { number: "number", bigint: "bigint", object: "date" },
  Mo = v("$ZodCheckLessThan", (e, t) => {
    ce.init(e, t);
    let n = Nf[typeof t.value];
    (e._zod.onattach.push((i) => {
      let r = i._zod.bag,
        o =
          (t.inclusive ? r.maximum : r.exclusiveMaximum) ??
          Number.POSITIVE_INFINITY;
      t.value < o &&
        (t.inclusive ? (r.maximum = t.value) : (r.exclusiveMaximum = t.value));
    }),
      (e._zod.check = (i) => {
        (t.inclusive ? i.value <= t.value : i.value < t.value) ||
          i.issues.push({
            origin: n,
            code: "too_big",
            maximum: t.value,
            input: i.value,
            inclusive: t.inclusive,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  Co = v("$ZodCheckGreaterThan", (e, t) => {
    ce.init(e, t);
    let n = Nf[typeof t.value];
    (e._zod.onattach.push((i) => {
      let r = i._zod.bag,
        o =
          (t.inclusive ? r.minimum : r.exclusiveMinimum) ??
          Number.NEGATIVE_INFINITY;
      t.value > o &&
        (t.inclusive ? (r.minimum = t.value) : (r.exclusiveMinimum = t.value));
    }),
      (e._zod.check = (i) => {
        (t.inclusive ? i.value >= t.value : i.value > t.value) ||
          i.issues.push({
            origin: n,
            code: "too_small",
            minimum: t.value,
            input: i.value,
            inclusive: t.inclusive,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  cl = v("$ZodCheckMultipleOf", (e, t) => {
    (ce.init(e, t),
      e._zod.onattach.push((n) => {
        var i;
        (i = n._zod.bag).multipleOf ?? (i.multipleOf = t.value);
      }),
      (e._zod.check = (n) => {
        if (typeof n.value != typeof t.value)
          throw new Error("Cannot mix number and bigint in multiple_of check.");
        (typeof n.value == "bigint"
          ? n.value % t.value === BigInt(0)
          : Au(n.value, t.value) === 0) ||
          n.issues.push({
            origin: typeof n.value,
            code: "not_multiple_of",
            divisor: t.value,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  dl = v("$ZodCheckNumberFormat", (e, t) => {
    (ce.init(e, t), (t.format = t.format || "float64"));
    let n = t.format?.includes("int"),
      i = n ? "int" : "number",
      [r, o] = Pu[t.format];
    (e._zod.onattach.push((a) => {
      let u = a._zod.bag;
      ((u.format = t.format),
        (u.minimum = r),
        (u.maximum = o),
        n && (u.pattern = nl));
    }),
      (e._zod.check = (a) => {
        let u = a.value;
        if (n) {
          if (!Number.isInteger(u)) {
            a.issues.push({
              expected: i,
              format: t.format,
              code: "invalid_type",
              input: u,
              inst: e,
            });
            return;
          }
          if (!Number.isSafeInteger(u)) {
            u > 0
              ? a.issues.push({
                  input: u,
                  code: "too_big",
                  maximum: Number.MAX_SAFE_INTEGER,
                  note: "Integers must be within the safe integer range.",
                  inst: e,
                  origin: i,
                  continue: !t.abort,
                })
              : a.issues.push({
                  input: u,
                  code: "too_small",
                  minimum: Number.MIN_SAFE_INTEGER,
                  note: "Integers must be within the safe integer range.",
                  inst: e,
                  origin: i,
                  continue: !t.abort,
                });
            return;
          }
        }
        (u < r &&
          a.issues.push({
            origin: "number",
            input: u,
            code: "too_small",
            minimum: r,
            inclusive: !0,
            inst: e,
            continue: !t.abort,
          }),
          u > o &&
            a.issues.push({
              origin: "number",
              input: u,
              code: "too_big",
              maximum: o,
              inst: e,
            }));
      }));
  }),
  ml = v("$ZodCheckBigIntFormat", (e, t) => {
    ce.init(e, t);
    let [n, i] = $u[t.format];
    (e._zod.onattach.push((r) => {
      let o = r._zod.bag;
      ((o.format = t.format), (o.minimum = n), (o.maximum = i));
    }),
      (e._zod.check = (r) => {
        let o = r.value;
        (o < n &&
          r.issues.push({
            origin: "bigint",
            input: o,
            code: "too_small",
            minimum: n,
            inclusive: !0,
            inst: e,
            continue: !t.abort,
          }),
          o > i &&
            r.issues.push({
              origin: "bigint",
              input: o,
              code: "too_big",
              maximum: i,
              inst: e,
            }));
      }));
  }),
  pl = v("$ZodCheckMaxSize", (e, t) => {
    (ce.init(e, t),
      (e._zod.when = (n) => {
        let i = n.value;
        return !jt(i) && i.size !== void 0;
      }),
      e._zod.onattach.push((n) => {
        let i = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        t.maximum < i && (n._zod.bag.maximum = t.maximum);
      }),
      (e._zod.check = (n) => {
        let i = n.value;
        i.size <= t.maximum ||
          n.issues.push({
            origin: Wn(i),
            code: "too_big",
            maximum: t.maximum,
            input: i,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  _l = v("$ZodCheckMinSize", (e, t) => {
    (ce.init(e, t),
      (e._zod.when = (n) => {
        let i = n.value;
        return !jt(i) && i.size !== void 0;
      }),
      e._zod.onattach.push((n) => {
        let i = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        t.minimum > i && (n._zod.bag.minimum = t.minimum);
      }),
      (e._zod.check = (n) => {
        let i = n.value;
        i.size >= t.minimum ||
          n.issues.push({
            origin: Wn(i),
            code: "too_small",
            minimum: t.minimum,
            input: i,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  fl = v("$ZodCheckSizeEquals", (e, t) => {
    (ce.init(e, t),
      (e._zod.when = (n) => {
        let i = n.value;
        return !jt(i) && i.size !== void 0;
      }),
      e._zod.onattach.push((n) => {
        let i = n._zod.bag;
        ((i.minimum = t.size), (i.maximum = t.size), (i.size = t.size));
      }),
      (e._zod.check = (n) => {
        let i = n.value,
          r = i.size;
        if (r === t.size) return;
        let o = r > t.size;
        n.issues.push({
          origin: Wn(i),
          ...(o
            ? { code: "too_big", maximum: t.size }
            : { code: "too_small", minimum: t.size }),
          input: n.value,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  hl = v("$ZodCheckMaxLength", (e, t) => {
    (ce.init(e, t),
      (e._zod.when = (n) => {
        let i = n.value;
        return !jt(i) && i.length !== void 0;
      }),
      e._zod.onattach.push((n) => {
        let i = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        t.maximum < i && (n._zod.bag.maximum = t.maximum);
      }),
      (e._zod.check = (n) => {
        let i = n.value;
        if (i.length <= t.maximum) return;
        let o = Qn(i);
        n.issues.push({
          origin: o,
          code: "too_big",
          maximum: t.maximum,
          inclusive: !0,
          input: i,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  gl = v("$ZodCheckMinLength", (e, t) => {
    (ce.init(e, t),
      (e._zod.when = (n) => {
        let i = n.value;
        return !jt(i) && i.length !== void 0;
      }),
      e._zod.onattach.push((n) => {
        let i = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        t.minimum > i && (n._zod.bag.minimum = t.minimum);
      }),
      (e._zod.check = (n) => {
        let i = n.value;
        if (i.length >= t.minimum) return;
        let o = Qn(i);
        n.issues.push({
          origin: o,
          code: "too_small",
          minimum: t.minimum,
          inclusive: !0,
          input: i,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  vl = v("$ZodCheckLengthEquals", (e, t) => {
    (ce.init(e, t),
      (e._zod.when = (n) => {
        let i = n.value;
        return !jt(i) && i.length !== void 0;
      }),
      e._zod.onattach.push((n) => {
        let i = n._zod.bag;
        ((i.minimum = t.length), (i.maximum = t.length), (i.length = t.length));
      }),
      (e._zod.check = (n) => {
        let i = n.value,
          r = i.length;
        if (r === t.length) return;
        let o = Qn(i),
          a = r > t.length;
        n.issues.push({
          origin: o,
          ...(a
            ? { code: "too_big", maximum: t.length }
            : { code: "too_small", minimum: t.length }),
          input: n.value,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  Fr = v("$ZodCheckStringFormat", (e, t) => {
    var n;
    (ce.init(e, t),
      e._zod.onattach.push((i) => {
        let r = i._zod.bag;
        ((r.format = t.format),
          t.pattern &&
            (r.patterns ?? (r.patterns = new Set()),
            r.patterns.add(t.pattern)));
      }),
      (n = e._zod).check ??
        (n.check = (i) => {
          if (!t.pattern) throw new Error("Not implemented.");
          ((t.pattern.lastIndex = 0),
            !t.pattern.test(i.value) &&
              i.issues.push({
                origin: "string",
                code: "invalid_format",
                format: t.format,
                input: i.value,
                ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                inst: e,
                continue: !t.abort,
              }));
        }));
  }),
  yl = v("$ZodCheckRegex", (e, t) => {
    (Fr.init(e, t),
      (e._zod.check = (n) => {
        ((t.pattern.lastIndex = 0),
          !t.pattern.test(n.value) &&
            n.issues.push({
              origin: "string",
              code: "invalid_format",
              format: "regex",
              input: n.value,
              pattern: t.pattern.toString(),
              inst: e,
              continue: !t.abort,
            }));
      }));
  }),
  bl = v("$ZodCheckLowerCase", (e, t) => {
    (t.pattern ?? (t.pattern = ul), Fr.init(e, t));
  }),
  wl = v("$ZodCheckUpperCase", (e, t) => {
    (t.pattern ?? (t.pattern = ll), Fr.init(e, t));
  }),
  Sl = v("$ZodCheckIncludes", (e, t) => {
    ce.init(e, t);
    let n = Tt(t.includes),
      i = new RegExp(
        typeof t.position == "number" ? `^.{${t.position}}${n}` : n,
      );
    ((t.pattern = i),
      e._zod.onattach.push((r) => {
        let o = r._zod.bag;
        (o.patterns ?? (o.patterns = new Set()), o.patterns.add(i));
      }),
      (e._zod.check = (r) => {
        r.value.includes(t.includes, t.position) ||
          r.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "includes",
            includes: t.includes,
            input: r.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  xl = v("$ZodCheckStartsWith", (e, t) => {
    ce.init(e, t);
    let n = new RegExp(`^${Tt(t.prefix)}.*`);
    (t.pattern ?? (t.pattern = n),
      e._zod.onattach.push((i) => {
        let r = i._zod.bag;
        (r.patterns ?? (r.patterns = new Set()), r.patterns.add(n));
      }),
      (e._zod.check = (i) => {
        i.value.startsWith(t.prefix) ||
          i.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "starts_with",
            prefix: t.prefix,
            input: i.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  Dl = v("$ZodCheckEndsWith", (e, t) => {
    ce.init(e, t);
    let n = new RegExp(`.*${Tt(t.suffix)}$`);
    (t.pattern ?? (t.pattern = n),
      e._zod.onattach.push((i) => {
        let r = i._zod.bag;
        (r.patterns ?? (r.patterns = new Set()), r.patterns.add(n));
      }),
      (e._zod.check = (i) => {
        i.value.endsWith(t.suffix) ||
          i.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "ends_with",
            suffix: t.suffix,
            input: i.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  });
function Rf(e, t, n) {
  e.issues.length && t.issues.push(...He(n, e.issues));
}
var Al = v("$ZodCheckProperty", (e, t) => {
    (ce.init(e, t),
      (e._zod.check = (n) => {
        let i = t.schema._zod.run(
          { value: n.value[t.property], issues: [] },
          {},
        );
        if (i instanceof Promise) return i.then((r) => Rf(r, n, t.property));
        Rf(i, n, t.property);
      }));
  }),
  El = v("$ZodCheckMimeType", (e, t) => {
    ce.init(e, t);
    let n = new Set(t.mime);
    (e._zod.onattach.push((i) => {
      i._zod.bag.mime = t.mime;
    }),
      (e._zod.check = (i) => {
        n.has(i.value.type) ||
          i.issues.push({
            code: "invalid_value",
            values: t.mime,
            input: i.value.type,
            path: ["type"],
            inst: e,
          });
      }));
  }),
  Tl = v("$ZodCheckOverwrite", (e, t) => {
    (ce.init(e, t),
      (e._zod.check = (n) => {
        n.value = t.tx(n.value);
      }));
  });
var Jn = class {
  constructor(t = []) {
    ((this.content = []), (this.indent = 0), this && (this.args = t));
  }
  indented(t) {
    ((this.indent += 1), t(this), (this.indent -= 1));
  }
  write(t) {
    if (typeof t == "function") {
      (t(this, { execution: "sync" }), t(this, { execution: "async" }));
      return;
    }
    let i = t
        .split(
          `
`,
        )
        .filter((a) => a),
      r = Math.min(...i.map((a) => a.length - a.trimStart().length)),
      o = i.map((a) => a.slice(r)).map((a) => " ".repeat(this.indent * 2) + a);
    for (let a of o) this.content.push(a);
  }
  compile() {
    let t = Function,
      n = this?.args,
      r = [...(this?.content ?? [""]).map((o) => `  ${o}`)];
    return new t(
      ...n,
      r.join(`
`),
    );
  }
};
var kl = { major: 4, minor: 0, patch: 0 };
var q = v("$ZodType", (e, t) => {
    var n;
    (e ?? (e = {}),
      (e._zod.id = t.type + "_" + Eo(10)),
      (e._zod.def = t),
      (e._zod.bag = e._zod.bag || {}),
      (e._zod.version = kl));
    let i = [...(e._zod.def.checks ?? [])];
    e._zod.traits.has("$ZodCheck") && i.unshift(e);
    for (let r of i) for (let o of r._zod.onattach) o(e);
    if (i.length === 0)
      ((n = e._zod).deferred ?? (n.deferred = []),
        e._zod.deferred?.push(() => {
          e._zod.run = e._zod.parse;
        }));
    else {
      let r = (o, a, u) => {
        let s = er(o),
          l;
        for (let c of a) {
          if (c._zod.when) {
            if (!c._zod.when(o)) continue;
          } else if (s) continue;
          let d = o.issues.length,
            f = c._zod.check(o);
          if (f instanceof Promise && u?.async === !1) throw new at();
          if (l || f instanceof Promise)
            l = (l ?? Promise.resolve()).then(async () => {
              (await f, o.issues.length !== d && (s || (s = er(o, d))));
            });
          else {
            if (o.issues.length === d) continue;
            s || (s = er(o, d));
          }
        }
        return l ? l.then(() => o) : o;
      };
      e._zod.run = (o, a) => {
        let u = e._zod.parse(o, a);
        if (u instanceof Promise) {
          if (a.async === !1) throw new at();
          return u.then((s) => r(s, i, a));
        }
        return r(u, i, a);
      };
    }
    e["~standard"] = {
      validate: (r) => {
        try {
          let o = Ou(e, r);
          return o.success ? { value: o.data } : { issues: o.error?.issues };
        } catch {
          return Ru(e, r).then((a) =>
            a.success ? { value: a.data } : { issues: a.error?.issues },
          );
        }
      },
      vendor: "zod",
      version: 1,
    };
  }),
  Yn = v("$ZodString", (e, t) => {
    (q.init(e, t),
      (e._zod.pattern =
        [...(e?._zod.bag?.patterns ?? [])].pop() ?? tl(e._zod.bag)),
      (e._zod.parse = (n, i) => {
        if (t.coerce)
          try {
            n.value = String(n.value);
          } catch {}
        return (
          typeof n.value == "string" ||
            n.issues.push({
              expected: "string",
              code: "invalid_type",
              input: n.value,
              inst: e,
            }),
          n
        );
      }));
  }),
  ie = v("$ZodStringFormat", (e, t) => {
    (Fr.init(e, t), Yn.init(e, t));
  }),
  Pl = v("$ZodGUID", (e, t) => {
    (t.pattern ?? (t.pattern = Bu), ie.init(e, t));
  }),
  $l = v("$ZodUUID", (e, t) => {
    if (t.version) {
      let i = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
        t.version
      ];
      if (i === void 0) throw new Error(`Invalid UUID version: "${t.version}"`);
      t.pattern ?? (t.pattern = tr(i));
    } else t.pattern ?? (t.pattern = tr());
    ie.init(e, t);
  }),
  zl = v("$ZodEmail", (e, t) => {
    (t.pattern ?? (t.pattern = Vu), ie.init(e, t));
  }),
  Ol = v("$ZodURL", (e, t) => {
    (ie.init(e, t),
      (e._zod.check = (n) => {
        try {
          let i = new URL(n.value);
          (t.hostname &&
            ((t.hostname.lastIndex = 0),
            t.hostname.test(i.hostname) ||
              n.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid hostname",
                pattern: Ku.source,
                input: n.value,
                inst: e,
                continue: !t.abort,
              })),
            t.protocol &&
              ((t.protocol.lastIndex = 0),
              t.protocol.test(
                i.protocol.endsWith(":") ? i.protocol.slice(0, -1) : i.protocol,
              ) ||
                n.issues.push({
                  code: "invalid_format",
                  format: "url",
                  note: "Invalid protocol",
                  pattern: t.protocol.source,
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                })));
          return;
        } catch {
          n.issues.push({
            code: "invalid_format",
            format: "url",
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
        }
      }));
  }),
  Rl = v("$ZodEmoji", (e, t) => {
    (t.pattern ?? (t.pattern = qu()), ie.init(e, t));
  }),
  Nl = v("$ZodNanoID", (e, t) => {
    (t.pattern ?? (t.pattern = ju), ie.init(e, t));
  }),
  Ml = v("$ZodCUID", (e, t) => {
    (t.pattern ?? (t.pattern = Nu), ie.init(e, t));
  }),
  Cl = v("$ZodCUID2", (e, t) => {
    (t.pattern ?? (t.pattern = Mu), ie.init(e, t));
  }),
  Ul = v("$ZodULID", (e, t) => {
    (t.pattern ?? (t.pattern = Cu), ie.init(e, t));
  }),
  Fl = v("$ZodXID", (e, t) => {
    (t.pattern ?? (t.pattern = Uu), ie.init(e, t));
  }),
  jl = v("$ZodKSUID", (e, t) => {
    (t.pattern ?? (t.pattern = Fu), ie.init(e, t));
  }),
  Ll = v("$ZodISODateTime", (e, t) => {
    (t.pattern ?? (t.pattern = el(t)), ie.init(e, t));
  }),
  Bl = v("$ZodISODate", (e, t) => {
    (t.pattern ?? (t.pattern = Yu), ie.init(e, t));
  }),
  Vl = v("$ZodISOTime", (e, t) => {
    (t.pattern ?? (t.pattern = Xu(t)), ie.init(e, t));
  }),
  ql = v("$ZodISODuration", (e, t) => {
    (t.pattern ?? (t.pattern = Lu), ie.init(e, t));
  }),
  Hl = v("$ZodIPv4", (e, t) => {
    (t.pattern ?? (t.pattern = Hu),
      ie.init(e, t),
      e._zod.onattach.push((n) => {
        let i = n._zod.bag;
        i.format = "ipv4";
      }));
  }),
  Zl = v("$ZodIPv6", (e, t) => {
    (t.pattern ?? (t.pattern = Zu),
      ie.init(e, t),
      e._zod.onattach.push((n) => {
        let i = n._zod.bag;
        i.format = "ipv6";
      }),
      (e._zod.check = (n) => {
        try {
          new URL(`http://[${n.value}]`);
        } catch {
          n.issues.push({
            code: "invalid_format",
            format: "ipv6",
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
        }
      }));
  }),
  Gl = v("$ZodCIDRv4", (e, t) => {
    (t.pattern ?? (t.pattern = Gu), ie.init(e, t));
  }),
  Wl = v("$ZodCIDRv6", (e, t) => {
    (t.pattern ?? (t.pattern = Wu),
      ie.init(e, t),
      (e._zod.check = (n) => {
        let [i, r] = n.value.split("/");
        try {
          if (!r) throw new Error();
          let o = Number(r);
          if (`${o}` !== r) throw new Error();
          if (o < 0 || o > 128) throw new Error();
          new URL(`http://[${i}]`);
        } catch {
          n.issues.push({
            code: "invalid_format",
            format: "cidrv6",
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
        }
      }));
  });
function Ql(e) {
  if (e === "") return !0;
  if (e.length % 4 !== 0) return !1;
  try {
    return (atob(e), !0);
  } catch {
    return !1;
  }
}
var Kl = v("$ZodBase64", (e, t) => {
  (t.pattern ?? (t.pattern = Qu),
    ie.init(e, t),
    e._zod.onattach.push((n) => {
      n._zod.bag.contentEncoding = "base64";
    }),
    (e._zod.check = (n) => {
      Ql(n.value) ||
        n.issues.push({
          code: "invalid_format",
          format: "base64",
          input: n.value,
          inst: e,
          continue: !t.abort,
        });
    }));
});
function Wf(e) {
  if (!No.test(e)) return !1;
  let t = e.replace(/[-_]/g, (i) => (i === "-" ? "+" : "/")),
    n = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return Ql(n);
}
var Jl = v("$ZodBase64URL", (e, t) => {
    (t.pattern ?? (t.pattern = No),
      ie.init(e, t),
      e._zod.onattach.push((n) => {
        n._zod.bag.contentEncoding = "base64url";
      }),
      (e._zod.check = (n) => {
        Wf(n.value) ||
          n.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  Yl = v("$ZodE164", (e, t) => {
    (t.pattern ?? (t.pattern = Ju), ie.init(e, t));
  });
function Qf(e, t = null) {
  try {
    let n = e.split(".");
    if (n.length !== 3) return !1;
    let [i] = n,
      r = JSON.parse(atob(i));
    return !(
      ("typ" in r && r?.typ !== "JWT") ||
      !r.alg ||
      (t && (!("alg" in r) || r.alg !== t))
    );
  } catch {
    return !1;
  }
}
var Xl = v("$ZodJWT", (e, t) => {
    (ie.init(e, t),
      (e._zod.check = (n) => {
        Qf(n.value, t.alg) ||
          n.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  jo = v("$ZodNumber", (e, t) => {
    (q.init(e, t),
      (e._zod.pattern = e._zod.bag.pattern ?? il),
      (e._zod.parse = (n, i) => {
        if (t.coerce)
          try {
            n.value = Number(n.value);
          } catch {}
        let r = n.value;
        if (typeof r == "number" && !Number.isNaN(r) && Number.isFinite(r))
          return n;
        let o =
          typeof r == "number"
            ? Number.isNaN(r)
              ? "NaN"
              : Number.isFinite(r)
                ? void 0
                : "Infinity"
            : void 0;
        return (
          n.issues.push({
            expected: "number",
            code: "invalid_type",
            input: r,
            inst: e,
            ...(o ? { received: o } : {}),
          }),
          n
        );
      }));
  }),
  ec = v("$ZodNumber", (e, t) => {
    (dl.init(e, t), jo.init(e, t));
  }),
  Xn = v("$ZodBoolean", (e, t) => {
    (q.init(e, t),
      (e._zod.pattern = ol),
      (e._zod.parse = (n, i) => {
        if (t.coerce)
          try {
            n.value = !!n.value;
          } catch {}
        let r = n.value;
        return (
          typeof r == "boolean" ||
            n.issues.push({
              expected: "boolean",
              code: "invalid_type",
              input: r,
              inst: e,
            }),
          n
        );
      }));
  }),
  Lo = v("$ZodBigInt", (e, t) => {
    (q.init(e, t),
      (e._zod.pattern = rl),
      (e._zod.parse = (n, i) => {
        if (t.coerce)
          try {
            n.value = BigInt(n.value);
          } catch {}
        let { value: r } = n;
        return (
          typeof r == "bigint" ||
            n.issues.push({
              expected: "bigint",
              code: "invalid_type",
              input: r,
              inst: e,
            }),
          n
        );
      }));
  }),
  tc = v("$ZodBigInt", (e, t) => {
    (ml.init(e, t), Lo.init(e, t));
  }),
  rc = v("$ZodSymbol", (e, t) => {
    (q.init(e, t),
      (e._zod.parse = (n, i) => {
        let { value: r } = n;
        return (
          typeof r == "symbol" ||
            n.issues.push({
              expected: "symbol",
              code: "invalid_type",
              input: r,
              inst: e,
            }),
          n
        );
      }));
  }),
  nc = v("$ZodUndefined", (e, t) => {
    (q.init(e, t),
      (e._zod.pattern = sl),
      (e._zod.values = new Set([void 0])),
      (e._zod.parse = (n, i) => {
        let { value: r } = n;
        return (
          typeof r > "u" ||
            n.issues.push({
              expected: "undefined",
              code: "invalid_type",
              input: r,
              inst: e,
            }),
          n
        );
      }));
  }),
  ic = v("$ZodNull", (e, t) => {
    (q.init(e, t),
      (e._zod.pattern = al),
      (e._zod.values = new Set([null])),
      (e._zod.parse = (n, i) => {
        let { value: r } = n;
        return (
          r === null ||
            n.issues.push({
              expected: "null",
              code: "invalid_type",
              input: r,
              inst: e,
            }),
          n
        );
      }));
  }),
  oc = v("$ZodAny", (e, t) => {
    (q.init(e, t), (e._zod.parse = (n) => n));
  }),
  Bt = v("$ZodUnknown", (e, t) => {
    (q.init(e, t), (e._zod.parse = (n) => n));
  }),
  ac = v("$ZodNever", (e, t) => {
    (q.init(e, t),
      (e._zod.parse = (n, i) => (
        n.issues.push({
          expected: "never",
          code: "invalid_type",
          input: n.value,
          inst: e,
        }),
        n
      )));
  }),
  sc = v("$ZodVoid", (e, t) => {
    (q.init(e, t),
      (e._zod.parse = (n, i) => {
        let { value: r } = n;
        return (
          typeof r > "u" ||
            n.issues.push({
              expected: "void",
              code: "invalid_type",
              input: r,
              inst: e,
            }),
          n
        );
      }));
  }),
  uc = v("$ZodDate", (e, t) => {
    (q.init(e, t),
      (e._zod.parse = (n, i) => {
        if (t.coerce)
          try {
            n.value = new Date(n.value);
          } catch {}
        let r = n.value,
          o = r instanceof Date;
        return (
          (o && !Number.isNaN(r.getTime())) ||
            n.issues.push({
              expected: "date",
              code: "invalid_type",
              input: r,
              ...(o ? { received: "Invalid Date" } : {}),
              inst: e,
            }),
          n
        );
      }));
  });
function Cf(e, t, n) {
  (e.issues.length && t.issues.push(...He(n, e.issues)),
    (t.value[n] = e.value));
}
var ei = v("$ZodArray", (e, t) => {
  (q.init(e, t),
    (e._zod.parse = (n, i) => {
      let r = n.value;
      if (!Array.isArray(r))
        return (
          n.issues.push({
            expected: "array",
            code: "invalid_type",
            input: r,
            inst: e,
          }),
          n
        );
      n.value = Array(r.length);
      let o = [];
      for (let a = 0; a < r.length; a++) {
        let u = r[a],
          s = t.element._zod.run({ value: u, issues: [] }, i);
        s instanceof Promise ? o.push(s.then((l) => Cf(l, n, a))) : Cf(s, n, a);
      }
      return o.length ? Promise.all(o).then(() => n) : n;
    }));
});
function Uo(e, t, n) {
  (e.issues.length && t.issues.push(...He(n, e.issues)),
    (t.value[n] = e.value));
}
function Uf(e, t, n, i) {
  e.issues.length
    ? i[n] === void 0
      ? n in i
        ? (t.value[n] = void 0)
        : (t.value[n] = e.value)
      : t.issues.push(...He(n, e.issues))
    : e.value === void 0
      ? n in i && (t.value[n] = void 0)
      : (t.value[n] = e.value);
}
var lc = v("$ZodObject", (e, t) => {
  q.init(e, t);
  let n = qn(() => {
    let d = Object.keys(t.shape);
    for (let _ of d)
      if (!(t.shape[_] instanceof q))
        throw new Error(`Invalid element at key "${_}": expected a Zod schema`);
    let f = Iu(t.shape);
    return {
      shape: t.shape,
      keys: d,
      keySet: new Set(d),
      numKeys: d.length,
      optionalKeys: new Set(f),
    };
  });
  ee(e._zod, "propValues", () => {
    let d = t.shape,
      f = {};
    for (let _ in d) {
      let g = d[_]._zod;
      if (g.values) {
        f[_] ?? (f[_] = new Set());
        for (let m of g.values) f[_].add(m);
      }
    }
    return f;
  });
  let i = (d) => {
      let f = new Jn(["shape", "payload", "ctx"]),
        { keys: _, optionalKeys: g } = n.value,
        m = (w) => {
          let y = Xt(w);
          return `shape[${y}]._zod.run({ value: input[${y}], issues: [] }, ctx)`;
        };
      f.write("const input = payload.value;");
      let A = Object.create(null);
      for (let w of _) A[w] = Eo(15);
      f.write("const newResult = {}");
      for (let w of _)
        if (g.has(w)) {
          let y = A[w];
          f.write(`const ${y} = ${m(w)};`);
          let b = Xt(w);
          f.write(`
        if (${y}.issues.length) {
          if (input[${b}] === undefined) {
            if (${b} in input) {
              newResult[${b}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${y}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${b}, ...iss.path] : [${b}],
              }))
            );
          }
        } else if (${y}.value === undefined) {
          if (${b} in input) newResult[${b}] = undefined;
        } else {
          newResult[${b}] = ${y}.value;
        }
        `);
        } else {
          let y = A[w];
          (f.write(`const ${y} = ${m(w)};`),
            f.write(`
          if (${y}.issues.length) payload.issues = payload.issues.concat(${y}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Xt(w)}, ...iss.path] : [${Xt(w)}]
          })));`),
            f.write(`newResult[${Xt(w)}] = ${y}.value`));
        }
      (f.write("payload.value = newResult;"), f.write("return payload;"));
      let I = f.compile();
      return (w, y) => I(d, w, y);
    },
    r,
    o = Nr,
    a = !jn.jitless,
    s = a && Tu.value,
    { catchall: l } = t,
    c;
  e._zod.parse = (d, f) => {
    c ?? (c = n.value);
    let _ = d.value;
    if (!o(_))
      return (
        d.issues.push({
          expected: "object",
          code: "invalid_type",
          input: _,
          inst: e,
        }),
        d
      );
    let g = [];
    if (a && s && f?.async === !1 && f.jitless !== !0)
      (r || (r = i(t.shape)), (d = r(d, f)));
    else {
      d.value = {};
      let y = c.shape;
      for (let b of c.keys) {
        let E = y[b],
          P = E._zod.run({ value: _[b], issues: [] }, f),
          T = E._zod.optin === "optional" && E._zod.optout === "optional";
        P instanceof Promise
          ? g.push(P.then((F) => (T ? Uf(F, d, b, _) : Uo(F, d, b))))
          : T
            ? Uf(P, d, b, _)
            : Uo(P, d, b);
      }
    }
    if (!l) return g.length ? Promise.all(g).then(() => d) : d;
    let m = [],
      A = c.keySet,
      I = l._zod,
      w = I.def.type;
    for (let y of Object.keys(_)) {
      if (A.has(y)) continue;
      if (w === "never") {
        m.push(y);
        continue;
      }
      let b = I.run({ value: _[y], issues: [] }, f);
      b instanceof Promise ? g.push(b.then((E) => Uo(E, d, y))) : Uo(b, d, y);
    }
    return (
      m.length &&
        d.issues.push({
          code: "unrecognized_keys",
          keys: m,
          input: _,
          inst: e,
        }),
      g.length ? Promise.all(g).then(() => d) : d
    );
  };
});
function Ff(e, t, n, i) {
  for (let r of e) if (r.issues.length === 0) return ((t.value = r.value), t);
  return (
    t.issues.push({
      code: "invalid_union",
      input: t.value,
      inst: n,
      errors: e.map((r) => r.issues.map((o) => Ge(o, i, ue()))),
    }),
    t
  );
}
var Bo = v("$ZodUnion", (e, t) => {
    (q.init(e, t),
      ee(e._zod, "values", () => {
        if (t.options.every((n) => n._zod.values))
          return new Set(t.options.flatMap((n) => Array.from(n._zod.values)));
      }),
      ee(e._zod, "pattern", () => {
        if (t.options.every((n) => n._zod.pattern)) {
          let n = t.options.map((i) => i._zod.pattern);
          return new RegExp(`^(${n.map((i) => Hn(i.source)).join("|")})$`);
        }
      }),
      (e._zod.parse = (n, i) => {
        let r = !1,
          o = [];
        for (let a of t.options) {
          let u = a._zod.run({ value: n.value, issues: [] }, i);
          if (u instanceof Promise) (o.push(u), (r = !0));
          else {
            if (u.issues.length === 0) return u;
            o.push(u);
          }
        }
        return r ? Promise.all(o).then((a) => Ff(a, n, e, i)) : Ff(o, n, e, i);
      }));
  }),
  cc = v("$ZodDiscriminatedUnion", (e, t) => {
    Bo.init(e, t);
    let n = e._zod.parse;
    ee(e._zod, "propValues", () => {
      let r = {};
      for (let o of t.options) {
        let a = o._zod.propValues;
        if (!a || Object.keys(a).length === 0)
          throw new Error(
            `Invalid discriminated union option at index "${t.options.indexOf(o)}"`,
          );
        for (let [u, s] of Object.entries(a)) {
          r[u] || (r[u] = new Set());
          for (let l of s) r[u].add(l);
        }
      }
      return r;
    });
    let i = qn(() => {
      let r = t.options,
        o = new Map();
      for (let a of r) {
        let u = a._zod.propValues[t.discriminator];
        if (!u || u.size === 0)
          throw new Error(
            `Invalid discriminated union option at index "${t.options.indexOf(a)}"`,
          );
        for (let s of u) {
          if (o.has(s))
            throw new Error(`Duplicate discriminator value "${String(s)}"`);
          o.set(s, a);
        }
      }
      return o;
    });
    e._zod.parse = (r, o) => {
      let a = r.value;
      if (!Nr(a))
        return (
          r.issues.push({
            code: "invalid_type",
            expected: "object",
            input: a,
            inst: e,
          }),
          r
        );
      let u = i.value.get(a?.[t.discriminator]);
      return u
        ? u._zod.run(r, o)
        : t.unionFallback
          ? n(r, o)
          : (r.issues.push({
              code: "invalid_union",
              errors: [],
              note: "No matching discriminator",
              input: a,
              path: [t.discriminator],
              inst: e,
            }),
            r);
    };
  }),
  dc = v("$ZodIntersection", (e, t) => {
    (q.init(e, t),
      (e._zod.parse = (n, i) => {
        let { value: r } = n,
          o = t.left._zod.run({ value: r, issues: [] }, i),
          a = t.right._zod.run({ value: r, issues: [] }, i);
        return o instanceof Promise || a instanceof Promise
          ? Promise.all([o, a]).then(([s, l]) => jf(n, s, l))
          : jf(n, o, a);
      }));
  });
function Il(e, t) {
  if (e === t) return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (Zn(e) && Zn(t)) {
    let n = Object.keys(t),
      i = Object.keys(e).filter((o) => n.indexOf(o) !== -1),
      r = { ...e, ...t };
    for (let o of i) {
      let a = Il(e[o], t[o]);
      if (!a.valid)
        return { valid: !1, mergeErrorPath: [o, ...a.mergeErrorPath] };
      r[o] = a.data;
    }
    return { valid: !0, data: r };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return { valid: !1, mergeErrorPath: [] };
    let n = [];
    for (let i = 0; i < e.length; i++) {
      let r = e[i],
        o = t[i],
        a = Il(r, o);
      if (!a.valid)
        return { valid: !1, mergeErrorPath: [i, ...a.mergeErrorPath] };
      n.push(a.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function jf(e, t, n) {
  if (
    (t.issues.length && e.issues.push(...t.issues),
    n.issues.length && e.issues.push(...n.issues),
    er(e))
  )
    return e;
  let i = Il(t.value, n.value);
  if (!i.valid)
    throw new Error(
      `Unmergable intersection. Error path: ${JSON.stringify(i.mergeErrorPath)}`,
    );
  return ((e.value = i.data), e);
}
var rr = v("$ZodTuple", (e, t) => {
  q.init(e, t);
  let n = t.items,
    i =
      n.length - [...n].reverse().findIndex((r) => r._zod.optin !== "optional");
  e._zod.parse = (r, o) => {
    let a = r.value;
    if (!Array.isArray(a))
      return (
        r.issues.push({
          input: a,
          inst: e,
          expected: "tuple",
          code: "invalid_type",
        }),
        r
      );
    r.value = [];
    let u = [];
    if (!t.rest) {
      let l = a.length > n.length,
        c = a.length < i - 1;
      if (l || c)
        return (
          r.issues.push({
            input: a,
            inst: e,
            origin: "array",
            ...(l
              ? { code: "too_big", maximum: n.length }
              : { code: "too_small", minimum: n.length }),
          }),
          r
        );
    }
    let s = -1;
    for (let l of n) {
      if ((s++, s >= a.length && s >= i)) continue;
      let c = l._zod.run({ value: a[s], issues: [] }, o);
      c instanceof Promise ? u.push(c.then((d) => Fo(d, r, s))) : Fo(c, r, s);
    }
    if (t.rest) {
      let l = a.slice(n.length);
      for (let c of l) {
        s++;
        let d = t.rest._zod.run({ value: c, issues: [] }, o);
        d instanceof Promise ? u.push(d.then((f) => Fo(f, r, s))) : Fo(d, r, s);
      }
    }
    return u.length ? Promise.all(u).then(() => r) : r;
  };
});
function Fo(e, t, n) {
  (e.issues.length && t.issues.push(...He(n, e.issues)),
    (t.value[n] = e.value));
}
var mc = v("$ZodRecord", (e, t) => {
    (q.init(e, t),
      (e._zod.parse = (n, i) => {
        let r = n.value;
        if (!Zn(r))
          return (
            n.issues.push({
              expected: "record",
              code: "invalid_type",
              input: r,
              inst: e,
            }),
            n
          );
        let o = [];
        if (t.keyType._zod.values) {
          let a = t.keyType._zod.values;
          n.value = {};
          for (let s of a)
            if (
              typeof s == "string" ||
              typeof s == "number" ||
              typeof s == "symbol"
            ) {
              let l = t.valueType._zod.run({ value: r[s], issues: [] }, i);
              l instanceof Promise
                ? o.push(
                    l.then((c) => {
                      (c.issues.length && n.issues.push(...He(s, c.issues)),
                        (n.value[s] = c.value));
                    }),
                  )
                : (l.issues.length && n.issues.push(...He(s, l.issues)),
                  (n.value[s] = l.value));
            }
          let u;
          for (let s in r) a.has(s) || ((u = u ?? []), u.push(s));
          u &&
            u.length > 0 &&
            n.issues.push({
              code: "unrecognized_keys",
              input: r,
              inst: e,
              keys: u,
            });
        } else {
          n.value = {};
          for (let a of Reflect.ownKeys(r)) {
            if (a === "__proto__") continue;
            let u = t.keyType._zod.run({ value: a, issues: [] }, i);
            if (u instanceof Promise)
              throw new Error(
                "Async schemas not supported in object keys currently",
              );
            if (u.issues.length) {
              (n.issues.push({
                origin: "record",
                code: "invalid_key",
                issues: u.issues.map((l) => Ge(l, i, ue())),
                input: a,
                path: [a],
                inst: e,
              }),
                (n.value[u.value] = u.value));
              continue;
            }
            let s = t.valueType._zod.run({ value: r[a], issues: [] }, i);
            s instanceof Promise
              ? o.push(
                  s.then((l) => {
                    (l.issues.length && n.issues.push(...He(a, l.issues)),
                      (n.value[u.value] = l.value));
                  }),
                )
              : (s.issues.length && n.issues.push(...He(a, s.issues)),
                (n.value[u.value] = s.value));
          }
        }
        return o.length ? Promise.all(o).then(() => n) : n;
      }));
  }),
  pc = v("$ZodMap", (e, t) => {
    (q.init(e, t),
      (e._zod.parse = (n, i) => {
        let r = n.value;
        if (!(r instanceof Map))
          return (
            n.issues.push({
              expected: "map",
              code: "invalid_type",
              input: r,
              inst: e,
            }),
            n
          );
        let o = [];
        n.value = new Map();
        for (let [a, u] of r) {
          let s = t.keyType._zod.run({ value: a, issues: [] }, i),
            l = t.valueType._zod.run({ value: u, issues: [] }, i);
          s instanceof Promise || l instanceof Promise
            ? o.push(
                Promise.all([s, l]).then(([c, d]) => {
                  Lf(c, d, n, a, r, e, i);
                }),
              )
            : Lf(s, l, n, a, r, e, i);
        }
        return o.length ? Promise.all(o).then(() => n) : n;
      }));
  });
function Lf(e, t, n, i, r, o, a) {
  (e.issues.length &&
    (Gn.has(typeof i)
      ? n.issues.push(...He(i, e.issues))
      : n.issues.push({
          origin: "map",
          code: "invalid_key",
          input: r,
          inst: o,
          issues: e.issues.map((u) => Ge(u, a, ue())),
        })),
    t.issues.length &&
      (Gn.has(typeof i)
        ? n.issues.push(...He(i, t.issues))
        : n.issues.push({
            origin: "map",
            code: "invalid_element",
            input: r,
            inst: o,
            key: i,
            issues: t.issues.map((u) => Ge(u, a, ue())),
          })),
    n.value.set(e.value, t.value));
}
var _c = v("$ZodSet", (e, t) => {
  (q.init(e, t),
    (e._zod.parse = (n, i) => {
      let r = n.value;
      if (!(r instanceof Set))
        return (
          n.issues.push({
            input: r,
            inst: e,
            expected: "set",
            code: "invalid_type",
          }),
          n
        );
      let o = [];
      n.value = new Set();
      for (let a of r) {
        let u = t.valueType._zod.run({ value: a, issues: [] }, i);
        u instanceof Promise ? o.push(u.then((s) => Bf(s, n))) : Bf(u, n);
      }
      return o.length ? Promise.all(o).then(() => n) : n;
    }));
});
function Bf(e, t) {
  (e.issues.length && t.issues.push(...e.issues), t.value.add(e.value));
}
var fc = v("$ZodEnum", (e, t) => {
    q.init(e, t);
    let n = Vn(t.entries);
    ((e._zod.values = new Set(n)),
      (e._zod.pattern = new RegExp(
        `^(${n
          .filter((i) => Gn.has(typeof i))
          .map((i) => (typeof i == "string" ? Tt(i) : i.toString()))
          .join("|")})$`,
      )),
      (e._zod.parse = (i, r) => {
        let o = i.value;
        return (
          e._zod.values.has(o) ||
            i.issues.push({
              code: "invalid_value",
              values: n,
              input: o,
              inst: e,
            }),
          i
        );
      }));
  }),
  hc = v("$ZodLiteral", (e, t) => {
    (q.init(e, t),
      (e._zod.values = new Set(t.values)),
      (e._zod.pattern = new RegExp(
        `^(${t.values.map((n) => (typeof n == "string" ? Tt(n) : n ? n.toString() : String(n))).join("|")})$`,
      )),
      (e._zod.parse = (n, i) => {
        let r = n.value;
        return (
          e._zod.values.has(r) ||
            n.issues.push({
              code: "invalid_value",
              values: t.values,
              input: r,
              inst: e,
            }),
          n
        );
      }));
  }),
  gc = v("$ZodFile", (e, t) => {
    (q.init(e, t),
      (e._zod.parse = (n, i) => {
        let r = n.value;
        return (
          r instanceof File ||
            n.issues.push({
              expected: "file",
              code: "invalid_type",
              input: r,
              inst: e,
            }),
          n
        );
      }));
  }),
  vc = v("$ZodTransform", (e, t) => {
    (q.init(e, t),
      (e._zod.parse = (n, i) => {
        let r = t.transform(n.value, n);
        if (i.async)
          return (r instanceof Promise ? r : Promise.resolve(r)).then(
            (a) => ((n.value = a), n),
          );
        if (r instanceof Promise) throw new at();
        return ((n.value = r), n);
      }));
  }),
  yc = v("$ZodOptional", (e, t) => {
    (q.init(e, t),
      (e._zod.optin = "optional"),
      (e._zod.optout = "optional"),
      ee(e._zod, "values", () =>
        t.innerType._zod.values
          ? new Set([...t.innerType._zod.values, void 0])
          : void 0,
      ),
      ee(e._zod, "pattern", () => {
        let n = t.innerType._zod.pattern;
        return n ? new RegExp(`^(${Hn(n.source)})?$`) : void 0;
      }),
      (e._zod.parse = (n, i) =>
        n.value === void 0 ? n : t.innerType._zod.run(n, i)));
  }),
  bc = v("$ZodNullable", (e, t) => {
    (q.init(e, t),
      ee(e._zod, "optin", () => t.innerType._zod.optin),
      ee(e._zod, "optout", () => t.innerType._zod.optout),
      ee(e._zod, "pattern", () => {
        let n = t.innerType._zod.pattern;
        return n ? new RegExp(`^(${Hn(n.source)}|null)$`) : void 0;
      }),
      ee(e._zod, "values", () =>
        t.innerType._zod.values
          ? new Set([...t.innerType._zod.values, null])
          : void 0,
      ),
      (e._zod.parse = (n, i) =>
        n.value === null ? n : t.innerType._zod.run(n, i)));
  }),
  wc = v("$ZodDefault", (e, t) => {
    (q.init(e, t),
      (e._zod.optin = "optional"),
      ee(e._zod, "values", () => t.innerType._zod.values),
      (e._zod.parse = (n, i) => {
        if (n.value === void 0) return ((n.value = t.defaultValue), n);
        let r = t.innerType._zod.run(n, i);
        return r instanceof Promise ? r.then((o) => Vf(o, t)) : Vf(r, t);
      }));
  });
function Vf(e, t) {
  return (e.value === void 0 && (e.value = t.defaultValue), e);
}
var Sc = v("$ZodPrefault", (e, t) => {
    (q.init(e, t),
      (e._zod.optin = "optional"),
      ee(e._zod, "values", () => t.innerType._zod.values),
      (e._zod.parse = (n, i) => (
        n.value === void 0 && (n.value = t.defaultValue),
        t.innerType._zod.run(n, i)
      )));
  }),
  xc = v("$ZodNonOptional", (e, t) => {
    (q.init(e, t),
      ee(e._zod, "values", () => {
        let n = t.innerType._zod.values;
        return n ? new Set([...n].filter((i) => i !== void 0)) : void 0;
      }),
      (e._zod.parse = (n, i) => {
        let r = t.innerType._zod.run(n, i);
        return r instanceof Promise ? r.then((o) => qf(o, e)) : qf(r, e);
      }));
  });
function qf(e, t) {
  return (
    !e.issues.length &&
      e.value === void 0 &&
      e.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: e.value,
        inst: t,
      }),
    e
  );
}
var Dc = v("$ZodSuccess", (e, t) => {
    (q.init(e, t),
      (e._zod.parse = (n, i) => {
        let r = t.innerType._zod.run(n, i);
        return r instanceof Promise
          ? r.then((o) => ((n.value = o.issues.length === 0), n))
          : ((n.value = r.issues.length === 0), n);
      }));
  }),
  Ac = v("$ZodCatch", (e, t) => {
    (q.init(e, t),
      ee(e._zod, "optin", () => t.innerType._zod.optin),
      ee(e._zod, "optout", () => t.innerType._zod.optout),
      ee(e._zod, "values", () => t.innerType._zod.values),
      (e._zod.parse = (n, i) => {
        let r = t.innerType._zod.run(n, i);
        return r instanceof Promise
          ? r.then(
              (o) => (
                (n.value = o.value),
                o.issues.length &&
                  ((n.value = t.catchValue({
                    ...n,
                    error: { issues: o.issues.map((a) => Ge(a, i, ue())) },
                    input: n.value,
                  })),
                  (n.issues = [])),
                n
              ),
            )
          : ((n.value = r.value),
            r.issues.length &&
              ((n.value = t.catchValue({
                ...n,
                error: { issues: r.issues.map((o) => Ge(o, i, ue())) },
                input: n.value,
              })),
              (n.issues = [])),
            n);
      }));
  }),
  Ec = v("$ZodNaN", (e, t) => {
    (q.init(e, t),
      (e._zod.parse = (n, i) => (
        (typeof n.value != "number" || !Number.isNaN(n.value)) &&
          n.issues.push({
            input: n.value,
            inst: e,
            expected: "nan",
            code: "invalid_type",
          }),
        n
      )));
  }),
  ti = v("$ZodPipe", (e, t) => {
    (q.init(e, t),
      ee(e._zod, "values", () => t.in._zod.values),
      ee(e._zod, "optin", () => t.in._zod.optin),
      ee(e._zod, "optout", () => t.out._zod.optout),
      (e._zod.parse = (n, i) => {
        let r = t.in._zod.run(n, i);
        return r instanceof Promise ? r.then((o) => Hf(o, t, i)) : Hf(r, t, i);
      }));
  });
function Hf(e, t, n) {
  return er(e) ? e : t.out._zod.run({ value: e.value, issues: e.issues }, n);
}
var Tc = v("$ZodReadonly", (e, t) => {
  (q.init(e, t),
    ee(e._zod, "propValues", () => t.innerType._zod.propValues),
    ee(e._zod, "optin", () => t.innerType._zod.optin),
    ee(e._zod, "optout", () => t.innerType._zod.optout),
    (e._zod.parse = (n, i) => {
      let r = t.innerType._zod.run(n, i);
      return r instanceof Promise ? r.then(Zf) : Zf(r);
    }));
});
function Zf(e) {
  return ((e.value = Object.freeze(e.value)), e);
}
var kc = v("$ZodTemplateLiteral", (e, t) => {
    q.init(e, t);
    let n = [];
    for (let i of t.parts)
      if (i instanceof q) {
        if (!i._zod.pattern)
          throw new Error(
            `Invalid template literal part, no pattern found: ${[...i._zod.traits].shift()}`,
          );
        let r =
          i._zod.pattern instanceof RegExp
            ? i._zod.pattern.source
            : i._zod.pattern;
        if (!r)
          throw new Error(`Invalid template literal part: ${i._zod.traits}`);
        let o = r.startsWith("^") ? 1 : 0,
          a = r.endsWith("$") ? r.length - 1 : r.length;
        n.push(r.slice(o, a));
      } else if (i === null || ku.has(typeof i)) n.push(Tt(`${i}`));
      else throw new Error(`Invalid template literal part: ${i}`);
    ((e._zod.pattern = new RegExp(`^${n.join("")}$`)),
      (e._zod.parse = (i, r) =>
        typeof i.value != "string"
          ? (i.issues.push({
              input: i.value,
              inst: e,
              expected: "template_literal",
              code: "invalid_type",
            }),
            i)
          : ((e._zod.pattern.lastIndex = 0),
            e._zod.pattern.test(i.value) ||
              i.issues.push({
                input: i.value,
                inst: e,
                code: "invalid_format",
                format: "template_literal",
                pattern: e._zod.pattern.source,
              }),
            i)));
  }),
  Ic = v("$ZodPromise", (e, t) => {
    (q.init(e, t),
      (e._zod.parse = (n, i) =>
        Promise.resolve(n.value).then((r) =>
          t.innerType._zod.run({ value: r, issues: [] }, i),
        )));
  }),
  Pc = v("$ZodLazy", (e, t) => {
    (q.init(e, t),
      ee(e._zod, "innerType", () => t.getter()),
      ee(e._zod, "pattern", () => e._zod.innerType._zod.pattern),
      ee(e._zod, "propValues", () => e._zod.innerType._zod.propValues),
      ee(e._zod, "optin", () => e._zod.innerType._zod.optin),
      ee(e._zod, "optout", () => e._zod.innerType._zod.optout),
      (e._zod.parse = (n, i) => e._zod.innerType._zod.run(n, i)));
  }),
  $c = v("$ZodCustom", (e, t) => {
    (ce.init(e, t),
      q.init(e, t),
      (e._zod.parse = (n, i) => n),
      (e._zod.check = (n) => {
        let i = n.value,
          r = t.fn(i);
        if (r instanceof Promise) return r.then((o) => Gf(o, n, i, e));
        Gf(r, n, i, e);
      }));
  });
function Gf(e, t, n, i) {
  if (!e) {
    let r = {
      code: "custom",
      input: n,
      inst: i,
      path: [...(i._zod.def.path ?? [])],
      continue: !i._zod.def.abort,
    };
    (i._zod.def.params && (r.params = i._zod.def.params), t.issues.push(zu(r)));
  }
}
var jr = {};
et(jr, {
  ar: () => Jf,
  az: () => Yf,
  be: () => eh,
  ca: () => th,
  cs: () => rh,
  de: () => nh,
  en: () => Vo,
  es: () => ih,
  fa: () => oh,
  fi: () => ah,
  fr: () => sh,
  frCA: () => uh,
  he: () => lh,
  hu: () => ch,
  id: () => dh,
  it: () => mh,
  ja: () => ph,
  kh: () => _h,
  ko: () => fh,
  mk: () => hh,
  ms: () => gh,
  nl: () => vh,
  no: () => yh,
  ota: () => bh,
  pl: () => wh,
  pt: () => Sh,
  ru: () => Dh,
  sl: () => Ah,
  sv: () => Eh,
  ta: () => Th,
  th: () => kh,
  tr: () => Ih,
  ua: () => Ph,
  ur: () => $h,
  vi: () => zh,
  zhCN: () => Oh,
  zhTW: () => Rh,
});
var qS = () => {
  let e = {
    string: {
      unit: "\u062D\u0631\u0641",
      verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
    },
    file: {
      unit: "\u0628\u0627\u064A\u062A",
      verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
    },
    array: {
      unit: "\u0639\u0646\u0635\u0631",
      verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
    },
    set: {
      unit: "\u0639\u0646\u0635\u0631",
      verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
    },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(r)) return "array";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u0645\u062F\u062E\u0644",
      email:
        "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
      url: "\u0631\u0627\u0628\u0637",
      emoji: "\u0625\u064A\u0645\u0648\u062C\u064A",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "\u062A\u0627\u0631\u064A\u062E \u0648\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
      date: "\u062A\u0627\u0631\u064A\u062E \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
      time: "\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
      duration: "\u0645\u062F\u0629 \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
      ipv4: "\u0639\u0646\u0648\u0627\u0646 IPv4",
      ipv6: "\u0639\u0646\u0648\u0627\u0646 IPv6",
      cidrv4:
        "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv4",
      cidrv6:
        "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv6",
      base64:
        "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64-encoded",
      base64url:
        "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64url-encoded",
      json_string:
        "\u0646\u064E\u0635 \u0639\u0644\u0649 \u0647\u064A\u0626\u0629 JSON",
      e164: "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0628\u0645\u0639\u064A\u0627\u0631 E.164",
      jwt: "JWT",
      template_literal: "\u0645\u062F\u062E\u0644",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${r.expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${N(r.values[0])}`
          : `\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062A\u0648\u0642\u0639 \u0627\u0646\u062A\u0642\u0627\u0621 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A: ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? ` \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${r.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${o} ${r.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0635\u0631"}`
          : `\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${r.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${o} ${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${r.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${o} ${r.minimum.toString()} ${a.unit}`
          : `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${r.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${o} ${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0628\u0640 "${r.prefix}"`
          : o.format === "ends_with"
            ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0646\u062A\u0647\u064A \u0628\u0640 "${o.suffix}"`
            : o.format === "includes"
              ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0636\u0645\u0651\u064E\u0646 "${o.includes}"`
              : o.format === "regex"
                ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 ${o.pattern}`
                : `${i[o.format] ?? r.format} \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644`;
      }
      case "not_multiple_of":
        return `\u0631\u0642\u0645 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0646 \u0645\u0636\u0627\u0639\u0641\u0627\u062A ${r.divisor}`;
      case "unrecognized_keys":
        return `\u0645\u0639\u0631\u0641${r.keys.length > 1 ? "\u0627\u062A" : ""} \u063A\u0631\u064A\u0628${r.keys.length > 1 ? "\u0629" : ""}: ${D(r.keys, "\u060C ")}`;
      case "invalid_key":
        return `\u0645\u0639\u0631\u0641 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${r.origin}`;
      case "invalid_union":
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
      case "invalid_element":
        return `\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${r.origin}`;
      default:
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
    }
  };
};
function Jf() {
  return { localeError: qS() };
}
var HS = () => {
  let e = {
    string: { unit: "simvol", verb: "olmal\u0131d\u0131r" },
    file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
    array: { unit: "element", verb: "olmal\u0131d\u0131r" },
    set: { unit: "element", verb: "olmal\u0131d\u0131r" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(r)) return "array";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "input",
      email: "email address",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datetime",
      date: "ISO date",
      time: "ISO time",
      duration: "ISO duration",
      ipv4: "IPv4 address",
      ipv6: "IPv6 address",
      cidrv4: "IPv4 range",
      cidrv6: "IPv6 range",
      base64: "base64-encoded string",
      base64url: "base64url-encoded string",
      json_string: "JSON string",
      e164: "E.164 number",
      jwt: "JWT",
      template_literal: "input",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${r.expected}, daxil olan ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${N(r.values[0])}`
          : `Yanl\u0131\u015F se\xE7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${r.origin ?? "d\u0259y\u0259r"} ${o}${r.maximum.toString()} ${a.unit ?? "element"}`
          : `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${r.origin ?? "d\u0259y\u0259r"} ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${r.origin} ${o}${r.minimum.toString()} ${a.unit}`
          : `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${r.origin} ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Yanl\u0131\u015F m\u0259tn: "${o.prefix}" il\u0259 ba\u015Flamal\u0131d\u0131r`
          : o.format === "ends_with"
            ? `Yanl\u0131\u015F m\u0259tn: "${o.suffix}" il\u0259 bitm\u0259lidir`
            : o.format === "includes"
              ? `Yanl\u0131\u015F m\u0259tn: "${o.includes}" daxil olmal\u0131d\u0131r`
              : o.format === "regex"
                ? `Yanl\u0131\u015F m\u0259tn: ${o.pattern} \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r`
                : `Yanl\u0131\u015F ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Yanl\u0131\u015F \u0259d\u0259d: ${r.divisor} il\u0259 b\xF6l\xFCn\u0259 bil\u0259n olmal\u0131d\u0131r`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan a\xE7ar${r.keys.length > 1 ? "lar" : ""}: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `${r.origin} daxilind\u0259 yanl\u0131\u015F a\xE7ar`;
      case "invalid_union":
        return "Yanl\u0131\u015F d\u0259y\u0259r";
      case "invalid_element":
        return `${r.origin} daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r`;
      default:
        return "Yanl\u0131\u015F d\u0259y\u0259r";
    }
  };
};
function Yf() {
  return { localeError: HS() };
}
function Xf(e, t, n, i) {
  let r = Math.abs(e),
    o = r % 10,
    a = r % 100;
  return a >= 11 && a <= 19 ? i : o === 1 ? t : o >= 2 && o <= 4 ? n : i;
}
var ZS = () => {
  let e = {
    string: {
      unit: {
        one: "\u0441\u0456\u043C\u0432\u0430\u043B",
        few: "\u0441\u0456\u043C\u0432\u0430\u043B\u044B",
        many: "\u0441\u0456\u043C\u0432\u0430\u043B\u0430\u045E",
      },
      verb: "\u043C\u0435\u0446\u044C",
    },
    array: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E",
      },
      verb: "\u043C\u0435\u0446\u044C",
    },
    set: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E",
      },
      verb: "\u043C\u0435\u0446\u044C",
    },
    file: {
      unit: {
        one: "\u0431\u0430\u0439\u0442",
        few: "\u0431\u0430\u0439\u0442\u044B",
        many: "\u0431\u0430\u0439\u0442\u0430\u045E",
      },
      verb: "\u043C\u0435\u0446\u044C",
    },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "\u043B\u0456\u043A";
        case "object": {
          if (Array.isArray(r)) return "\u043C\u0430\u0441\u0456\u045E";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u0443\u0432\u043E\u0434",
      email: "email \u0430\u0434\u0440\u0430\u0441",
      url: "URL",
      emoji: "\u044D\u043C\u043E\u0434\u0437\u0456",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u0434\u0430\u0442\u0430 \u0456 \u0447\u0430\u0441",
      date: "ISO \u0434\u0430\u0442\u0430",
      time: "ISO \u0447\u0430\u0441",
      duration:
        "ISO \u043F\u0440\u0430\u0446\u044F\u0433\u043B\u0430\u0441\u0446\u044C",
      ipv4: "IPv4 \u0430\u0434\u0440\u0430\u0441",
      ipv6: "IPv6 \u0430\u0434\u0440\u0430\u0441",
      cidrv4: "IPv4 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
      cidrv6: "IPv6 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
      base64:
        "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64",
      base64url:
        "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64url",
      json_string: "JSON \u0440\u0430\u0434\u043E\u043A",
      e164: "\u043D\u0443\u043C\u0430\u0440 E.164",
      jwt: "JWT",
      template_literal: "\u0443\u0432\u043E\u0434",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F ${r.expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F ${N(r.values[0])}`
          : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0432\u0430\u0440\u044B\u044F\u043D\u0442: \u0447\u0430\u043A\u0430\u045E\u0441\u044F \u0430\u0434\u0437\u0456\u043D \u0437 ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        if (a) {
          let u = Number(r.maximum),
            s = Xf(u, a.unit.one, a.unit.few, a.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${r.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${a.verb} ${o}${r.maximum.toString()} ${s}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${r.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        if (a) {
          let u = Number(r.minimum),
            s = Xf(u, a.unit.one, a.unit.few, a.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${r.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${a.verb} ${o}${r.minimum.toString()} ${s}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${r.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u043F\u0430\u0447\u044B\u043D\u0430\u0446\u0446\u0430 \u0437 "${o.prefix}"`
          : o.format === "ends_with"
            ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u0430\u043A\u0430\u043D\u0447\u0432\u0430\u0446\u0446\u0430 \u043D\u0430 "${o.suffix}"`
            : o.format === "includes"
              ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u043C\u044F\u0448\u0447\u0430\u0446\u044C "${o.includes}"`
              : o.format === "regex"
                ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0430\u0434\u043F\u0430\u0432\u044F\u0434\u0430\u0446\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${o.pattern}`
                : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043B\u0456\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0431\u044B\u0446\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${r.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u0430\u0437\u043D\u0430\u043D\u044B ${r.keys.length > 1 ? "\u043A\u043B\u044E\u0447\u044B" : "\u043A\u043B\u044E\u0447"}: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043A\u043B\u044E\u0447 \u0443 ${r.origin}`;
      case "invalid_union":
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
      case "invalid_element":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435 \u045E ${r.origin}`;
      default:
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
    }
  };
};
function eh() {
  return { localeError: ZS() };
}
var GS = () => {
  let e = {
    string: { unit: "car\xE0cters", verb: "contenir" },
    file: { unit: "bytes", verb: "contenir" },
    array: { unit: "elements", verb: "contenir" },
    set: { unit: "elements", verb: "contenir" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(r)) return "array";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "entrada",
      email: "adre\xE7a electr\xF2nica",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data i hora ISO",
      date: "data ISO",
      time: "hora ISO",
      duration: "durada ISO",
      ipv4: "adre\xE7a IPv4",
      ipv6: "adre\xE7a IPv6",
      cidrv4: "rang IPv4",
      cidrv6: "rang IPv6",
      base64: "cadena codificada en base64",
      base64url: "cadena codificada en base64url",
      json_string: "cadena JSON",
      e164: "n\xFAmero E.164",
      jwt: "JWT",
      template_literal: "entrada",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Tipus inv\xE0lid: s'esperava ${r.expected}, s'ha rebut ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Valor inv\xE0lid: s'esperava ${N(r.values[0])}`
          : `Opci\xF3 inv\xE0lida: s'esperava una de ${D(r.values, " o ")}`;
      case "too_big": {
        let o = r.inclusive ? "com a m\xE0xim" : "menys de",
          a = t(r.origin);
        return a
          ? `Massa gran: s'esperava que ${r.origin ?? "el valor"} contingu\xE9s ${o} ${r.maximum.toString()} ${a.unit ?? "elements"}`
          : `Massa gran: s'esperava que ${r.origin ?? "el valor"} fos ${o} ${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? "com a m\xEDnim" : "m\xE9s de",
          a = t(r.origin);
        return a
          ? `Massa petit: s'esperava que ${r.origin} contingu\xE9s ${o} ${r.minimum.toString()} ${a.unit}`
          : `Massa petit: s'esperava que ${r.origin} fos ${o} ${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Format inv\xE0lid: ha de comen\xE7ar amb "${o.prefix}"`
          : o.format === "ends_with"
            ? `Format inv\xE0lid: ha d'acabar amb "${o.suffix}"`
            : o.format === "includes"
              ? `Format inv\xE0lid: ha d'incloure "${o.includes}"`
              : o.format === "regex"
                ? `Format inv\xE0lid: ha de coincidir amb el patr\xF3 ${o.pattern}`
                : `Format inv\xE0lid per a ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE0lid: ha de ser m\xFAltiple de ${r.divisor}`;
      case "unrecognized_keys":
        return `Clau${r.keys.length > 1 ? "s" : ""} no reconeguda${r.keys.length > 1 ? "s" : ""}: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `Clau inv\xE0lida a ${r.origin}`;
      case "invalid_union":
        return "Entrada inv\xE0lida";
      case "invalid_element":
        return `Element inv\xE0lid a ${r.origin}`;
      default:
        return "Entrada inv\xE0lida";
    }
  };
};
function th() {
  return { localeError: GS() };
}
var WS = () => {
  let e = {
    string: { unit: "znak\u016F", verb: "m\xEDt" },
    file: { unit: "bajt\u016F", verb: "m\xEDt" },
    array: { unit: "prvk\u016F", verb: "m\xEDt" },
    set: { unit: "prvk\u016F", verb: "m\xEDt" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "\u010D\xEDslo";
        case "string":
          return "\u0159et\u011Bzec";
        case "boolean":
          return "boolean";
        case "bigint":
          return "bigint";
        case "function":
          return "funkce";
        case "symbol":
          return "symbol";
        case "undefined":
          return "undefined";
        case "object": {
          if (Array.isArray(r)) return "pole";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "regul\xE1rn\xED v\xFDraz",
      email: "e-mailov\xE1 adresa",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "datum a \u010Das ve form\xE1tu ISO",
      date: "datum ve form\xE1tu ISO",
      time: "\u010Das ve form\xE1tu ISO",
      duration: "doba trv\xE1n\xED ISO",
      ipv4: "IPv4 adresa",
      ipv6: "IPv6 adresa",
      cidrv4: "rozsah IPv4",
      cidrv6: "rozsah IPv6",
      base64: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64",
      base64url: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64url",
      json_string: "\u0159et\u011Bzec ve form\xE1tu JSON",
      e164: "\u010D\xEDslo E.164",
      jwt: "JWT",
      template_literal: "vstup",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${r.expected}, obdr\u017Eeno ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${N(r.values[0])}`
          : `Neplatn\xE1 mo\u017Enost: o\u010Dek\xE1v\xE1na jedna z hodnot ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${r.origin ?? "hodnota"} mus\xED m\xEDt ${o}${r.maximum.toString()} ${a.unit ?? "prvk\u016F"}`
          : `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${r.origin ?? "hodnota"} mus\xED b\xFDt ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${r.origin ?? "hodnota"} mus\xED m\xEDt ${o}${r.minimum.toString()} ${a.unit ?? "prvk\u016F"}`
          : `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${r.origin ?? "hodnota"} mus\xED b\xFDt ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED za\u010D\xEDnat na "${o.prefix}"`
          : o.format === "ends_with"
            ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED kon\u010Dit na "${o.suffix}"`
            : o.format === "includes"
              ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED obsahovat "${o.includes}"`
              : o.format === "regex"
                ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED odpov\xEDdat vzoru ${o.pattern}`
                : `Neplatn\xFD form\xE1t ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Neplatn\xE9 \u010D\xEDslo: mus\xED b\xFDt n\xE1sobkem ${r.divisor}`;
      case "unrecognized_keys":
        return `Nezn\xE1m\xE9 kl\xED\u010De: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `Neplatn\xFD kl\xED\u010D v ${r.origin}`;
      case "invalid_union":
        return "Neplatn\xFD vstup";
      case "invalid_element":
        return `Neplatn\xE1 hodnota v ${r.origin}`;
      default:
        return "Neplatn\xFD vstup";
    }
  };
};
function rh() {
  return { localeError: WS() };
}
var QS = () => {
  let e = {
    string: { unit: "Zeichen", verb: "zu haben" },
    file: { unit: "Bytes", verb: "zu haben" },
    array: { unit: "Elemente", verb: "zu haben" },
    set: { unit: "Elemente", verb: "zu haben" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "Zahl";
        case "object": {
          if (Array.isArray(r)) return "Array";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "Eingabe",
      email: "E-Mail-Adresse",
      url: "URL",
      emoji: "Emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO-Datum und -Uhrzeit",
      date: "ISO-Datum",
      time: "ISO-Uhrzeit",
      duration: "ISO-Dauer",
      ipv4: "IPv4-Adresse",
      ipv6: "IPv6-Adresse",
      cidrv4: "IPv4-Bereich",
      cidrv6: "IPv6-Bereich",
      base64: "Base64-codierter String",
      base64url: "Base64-URL-codierter String",
      json_string: "JSON-String",
      e164: "E.164-Nummer",
      jwt: "JWT",
      template_literal: "Eingabe",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Ung\xFCltige Eingabe: erwartet ${r.expected}, erhalten ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Ung\xFCltige Eingabe: erwartet ${N(r.values[0])}`
          : `Ung\xFCltige Option: erwartet eine von ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Zu gro\xDF: erwartet, dass ${r.origin ?? "Wert"} ${o}${r.maximum.toString()} ${a.unit ?? "Elemente"} hat`
          : `Zu gro\xDF: erwartet, dass ${r.origin ?? "Wert"} ${o}${r.maximum.toString()} ist`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Zu klein: erwartet, dass ${r.origin} ${o}${r.minimum.toString()} ${a.unit} hat`
          : `Zu klein: erwartet, dass ${r.origin} ${o}${r.minimum.toString()} ist`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Ung\xFCltiger String: muss mit "${o.prefix}" beginnen`
          : o.format === "ends_with"
            ? `Ung\xFCltiger String: muss mit "${o.suffix}" enden`
            : o.format === "includes"
              ? `Ung\xFCltiger String: muss "${o.includes}" enthalten`
              : o.format === "regex"
                ? `Ung\xFCltiger String: muss dem Muster ${o.pattern} entsprechen`
                : `Ung\xFCltig: ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Ung\xFCltige Zahl: muss ein Vielfaches von ${r.divisor} sein`;
      case "unrecognized_keys":
        return `${r.keys.length > 1 ? "Unbekannte Schl\xFCssel" : "Unbekannter Schl\xFCssel"}: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `Ung\xFCltiger Schl\xFCssel in ${r.origin}`;
      case "invalid_union":
        return "Ung\xFCltige Eingabe";
      case "invalid_element":
        return `Ung\xFCltiger Wert in ${r.origin}`;
      default:
        return "Ung\xFCltige Eingabe";
    }
  };
};
function nh() {
  return { localeError: QS() };
}
var KS = (e) => {
    let t = typeof e;
    switch (t) {
      case "number":
        return Number.isNaN(e) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(e)) return "array";
        if (e === null) return "null";
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
          return e.constructor.name;
      }
    }
    return t;
  },
  JS = () => {
    let e = {
      string: { unit: "characters", verb: "to have" },
      file: { unit: "bytes", verb: "to have" },
      array: { unit: "items", verb: "to have" },
      set: { unit: "items", verb: "to have" },
    };
    function t(i) {
      return e[i] ?? null;
    }
    let n = {
      regex: "input",
      email: "email address",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datetime",
      date: "ISO date",
      time: "ISO time",
      duration: "ISO duration",
      ipv4: "IPv4 address",
      ipv6: "IPv6 address",
      cidrv4: "IPv4 range",
      cidrv6: "IPv6 range",
      base64: "base64-encoded string",
      base64url: "base64url-encoded string",
      json_string: "JSON string",
      e164: "E.164 number",
      jwt: "JWT",
      template_literal: "input",
    };
    return (i) => {
      switch (i.code) {
        case "invalid_type":
          return `Invalid input: expected ${i.expected}, received ${KS(i.input)}`;
        case "invalid_value":
          return i.values.length === 1
            ? `Invalid input: expected ${N(i.values[0])}`
            : `Invalid option: expected one of ${D(i.values, "|")}`;
        case "too_big": {
          let r = i.inclusive ? "<=" : "<",
            o = t(i.origin);
          return o
            ? `Too big: expected ${i.origin ?? "value"} to have ${r}${i.maximum.toString()} ${o.unit ?? "elements"}`
            : `Too big: expected ${i.origin ?? "value"} to be ${r}${i.maximum.toString()}`;
        }
        case "too_small": {
          let r = i.inclusive ? ">=" : ">",
            o = t(i.origin);
          return o
            ? `Too small: expected ${i.origin} to have ${r}${i.minimum.toString()} ${o.unit}`
            : `Too small: expected ${i.origin} to be ${r}${i.minimum.toString()}`;
        }
        case "invalid_format": {
          let r = i;
          return r.format === "starts_with"
            ? `Invalid string: must start with "${r.prefix}"`
            : r.format === "ends_with"
              ? `Invalid string: must end with "${r.suffix}"`
              : r.format === "includes"
                ? `Invalid string: must include "${r.includes}"`
                : r.format === "regex"
                  ? `Invalid string: must match pattern ${r.pattern}`
                  : `Invalid ${n[r.format] ?? i.format}`;
        }
        case "not_multiple_of":
          return `Invalid number: must be a multiple of ${i.divisor}`;
        case "unrecognized_keys":
          return `Unrecognized key${i.keys.length > 1 ? "s" : ""}: ${D(i.keys, ", ")}`;
        case "invalid_key":
          return `Invalid key in ${i.origin}`;
        case "invalid_union":
          return "Invalid input";
        case "invalid_element":
          return `Invalid value in ${i.origin}`;
        default:
          return "Invalid input";
      }
    };
  };
function Vo() {
  return { localeError: JS() };
}
var YS = () => {
  let e = {
    string: { unit: "caracteres", verb: "tener" },
    file: { unit: "bytes", verb: "tener" },
    array: { unit: "elementos", verb: "tener" },
    set: { unit: "elementos", verb: "tener" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "n\xFAmero";
        case "object": {
          if (Array.isArray(r)) return "arreglo";
          if (r === null) return "nulo";
          if (Object.getPrototypeOf(r) !== Object.prototype)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "entrada",
      email: "direcci\xF3n de correo electr\xF3nico",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "fecha y hora ISO",
      date: "fecha ISO",
      time: "hora ISO",
      duration: "duraci\xF3n ISO",
      ipv4: "direcci\xF3n IPv4",
      ipv6: "direcci\xF3n IPv6",
      cidrv4: "rango IPv4",
      cidrv6: "rango IPv6",
      base64: "cadena codificada en base64",
      base64url: "URL codificada en base64",
      json_string: "cadena JSON",
      e164: "n\xFAmero E.164",
      jwt: "JWT",
      template_literal: "entrada",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Entrada inv\xE1lida: se esperaba ${r.expected}, recibido ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Entrada inv\xE1lida: se esperaba ${N(r.values[0])}`
          : `Opci\xF3n inv\xE1lida: se esperaba una de ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Demasiado grande: se esperaba que ${r.origin ?? "valor"} tuviera ${o}${r.maximum.toString()} ${a.unit ?? "elementos"}`
          : `Demasiado grande: se esperaba que ${r.origin ?? "valor"} fuera ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Demasiado peque\xF1o: se esperaba que ${r.origin} tuviera ${o}${r.minimum.toString()} ${a.unit}`
          : `Demasiado peque\xF1o: se esperaba que ${r.origin} fuera ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Cadena inv\xE1lida: debe comenzar con "${o.prefix}"`
          : o.format === "ends_with"
            ? `Cadena inv\xE1lida: debe terminar en "${o.suffix}"`
            : o.format === "includes"
              ? `Cadena inv\xE1lida: debe incluir "${o.includes}"`
              : o.format === "regex"
                ? `Cadena inv\xE1lida: debe coincidir con el patr\xF3n ${o.pattern}`
                : `Inv\xE1lido ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE1lido: debe ser m\xFAltiplo de ${r.divisor}`;
      case "unrecognized_keys":
        return `Llave${r.keys.length > 1 ? "s" : ""} desconocida${r.keys.length > 1 ? "s" : ""}: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `Llave inv\xE1lida en ${r.origin}`;
      case "invalid_union":
        return "Entrada inv\xE1lida";
      case "invalid_element":
        return `Valor inv\xE1lido en ${r.origin}`;
      default:
        return "Entrada inv\xE1lida";
    }
  };
};
function ih() {
  return { localeError: YS() };
}
var XS = () => {
  let e = {
    string: {
      unit: "\u06A9\u0627\u0631\u0627\u06A9\u062A\u0631",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
    },
    file: {
      unit: "\u0628\u0627\u06CC\u062A",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
    },
    array: {
      unit: "\u0622\u06CC\u062A\u0645",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
    },
    set: {
      unit: "\u0622\u06CC\u062A\u0645",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
    },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "\u0639\u062F\u062F";
        case "object": {
          if (Array.isArray(r)) return "\u0622\u0631\u0627\u06CC\u0647";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u0648\u0631\u0648\u062F\u06CC",
      email: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
      url: "URL",
      emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "\u062A\u0627\u0631\u06CC\u062E \u0648 \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
      date: "\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u0632\u0648",
      time: "\u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
      duration:
        "\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
      ipv4: "IPv4 \u0622\u062F\u0631\u0633",
      ipv6: "IPv6 \u0622\u062F\u0631\u0633",
      cidrv4: "IPv4 \u062F\u0627\u0645\u0646\u0647",
      cidrv6: "IPv6 \u062F\u0627\u0645\u0646\u0647",
      base64: "base64-encoded \u0631\u0634\u062A\u0647",
      base64url: "base64url-encoded \u0631\u0634\u062A\u0647",
      json_string: "JSON \u0631\u0634\u062A\u0647",
      e164: "E.164 \u0639\u062F\u062F",
      jwt: "JWT",
      template_literal: "\u0648\u0631\u0648\u062F\u06CC",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${r.expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${n(r.input)} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${N(r.values[0])} \u0645\u06CC\u200C\u0628\u0648\u062F`
          : `\u06AF\u0632\u06CC\u0646\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u06CC\u06A9\u06CC \u0627\u0632 ${D(r.values, "|")} \u0645\u06CC\u200C\u0628\u0648\u062F`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${r.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${o}${r.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0635\u0631"} \u0628\u0627\u0634\u062F`
          : `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${r.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${o}${r.maximum.toString()} \u0628\u0627\u0634\u062F`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${r.origin} \u0628\u0627\u06CC\u062F ${o}${r.minimum.toString()} ${a.unit} \u0628\u0627\u0634\u062F`
          : `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${r.origin} \u0628\u0627\u06CC\u062F ${o}${r.minimum.toString()} \u0628\u0627\u0634\u062F`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${o.prefix}" \u0634\u0631\u0648\u0639 \u0634\u0648\u062F`
          : o.format === "ends_with"
            ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${o.suffix}" \u062A\u0645\u0627\u0645 \u0634\u0648\u062F`
            : o.format === "includes"
              ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0634\u0627\u0645\u0644 "${o.includes}" \u0628\u0627\u0634\u062F`
              : o.format === "regex"
                ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 \u0627\u0644\u06AF\u0648\u06CC ${o.pattern} \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F`
                : `${i[o.format] ?? r.format} \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
      }
      case "not_multiple_of":
        return `\u0639\u062F\u062F \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0645\u0636\u0631\u0628 ${r.divisor} \u0628\u0627\u0634\u062F`;
      case "unrecognized_keys":
        return `\u06A9\u0644\u06CC\u062F${r.keys.length > 1 ? "\u0647\u0627\u06CC" : ""} \u0646\u0627\u0634\u0646\u0627\u0633: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `\u06A9\u0644\u06CC\u062F \u0646\u0627\u0634\u0646\u0627\u0633 \u062F\u0631 ${r.origin}`;
      case "invalid_union":
        return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
      case "invalid_element":
        return `\u0645\u0642\u062F\u0627\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u062F\u0631 ${r.origin}`;
      default:
        return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
    }
  };
};
function oh() {
  return { localeError: XS() };
}
var e2 = () => {
  let e = {
    string: { unit: "merkki\xE4", subject: "merkkijonon" },
    file: { unit: "tavua", subject: "tiedoston" },
    array: { unit: "alkiota", subject: "listan" },
    set: { unit: "alkiota", subject: "joukon" },
    number: { unit: "", subject: "luvun" },
    bigint: { unit: "", subject: "suuren kokonaisluvun" },
    int: { unit: "", subject: "kokonaisluvun" },
    date: { unit: "", subject: "p\xE4iv\xE4m\xE4\xE4r\xE4n" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(r)) return "array";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "s\xE4\xE4nn\xF6llinen lauseke",
      email: "s\xE4hk\xF6postiosoite",
      url: "URL-osoite",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO-aikaleima",
      date: "ISO-p\xE4iv\xE4m\xE4\xE4r\xE4",
      time: "ISO-aika",
      duration: "ISO-kesto",
      ipv4: "IPv4-osoite",
      ipv6: "IPv6-osoite",
      cidrv4: "IPv4-alue",
      cidrv6: "IPv6-alue",
      base64: "base64-koodattu merkkijono",
      base64url: "base64url-koodattu merkkijono",
      json_string: "JSON-merkkijono",
      e164: "E.164-luku",
      jwt: "JWT",
      template_literal: "templaattimerkkijono",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Virheellinen tyyppi: odotettiin ${r.expected}, oli ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Virheellinen sy\xF6te: t\xE4ytyy olla ${N(r.values[0])}`
          : `Virheellinen valinta: t\xE4ytyy olla yksi seuraavista: ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Liian suuri: ${a.subject} t\xE4ytyy olla ${o}${r.maximum.toString()} ${a.unit}`.trim()
          : `Liian suuri: arvon t\xE4ytyy olla ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Liian pieni: ${a.subject} t\xE4ytyy olla ${o}${r.minimum.toString()} ${a.unit}`.trim()
          : `Liian pieni: arvon t\xE4ytyy olla ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Virheellinen sy\xF6te: t\xE4ytyy alkaa "${o.prefix}"`
          : o.format === "ends_with"
            ? `Virheellinen sy\xF6te: t\xE4ytyy loppua "${o.suffix}"`
            : o.format === "includes"
              ? `Virheellinen sy\xF6te: t\xE4ytyy sis\xE4lt\xE4\xE4 "${o.includes}"`
              : o.format === "regex"
                ? `Virheellinen sy\xF6te: t\xE4ytyy vastata s\xE4\xE4nn\xF6llist\xE4 lauseketta ${o.pattern}`
                : `Virheellinen ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Virheellinen luku: t\xE4ytyy olla luvun ${r.divisor} monikerta`;
      case "unrecognized_keys":
        return `${r.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return "Virheellinen avain tietueessa";
      case "invalid_union":
        return "Virheellinen unioni";
      case "invalid_element":
        return "Virheellinen arvo joukossa";
      default:
        return "Virheellinen sy\xF6te";
    }
  };
};
function ah() {
  return { localeError: e2() };
}
var t2 = () => {
  let e = {
    string: { unit: "caract\xE8res", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "\xE9l\xE9ments", verb: "avoir" },
    set: { unit: "\xE9l\xE9ments", verb: "avoir" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "nombre";
        case "object": {
          if (Array.isArray(r)) return "tableau";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "entr\xE9e",
      email: "adresse e-mail",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "date et heure ISO",
      date: "date ISO",
      time: "heure ISO",
      duration: "dur\xE9e ISO",
      ipv4: "adresse IPv4",
      ipv6: "adresse IPv6",
      cidrv4: "plage IPv4",
      cidrv6: "plage IPv6",
      base64: "cha\xEEne encod\xE9e en base64",
      base64url: "cha\xEEne encod\xE9e en base64url",
      json_string: "cha\xEEne JSON",
      e164: "num\xE9ro E.164",
      jwt: "JWT",
      template_literal: "entr\xE9e",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Entr\xE9e invalide : ${r.expected} attendu, ${n(r.input)} re\xE7u`;
      case "invalid_value":
        return r.values.length === 1
          ? `Entr\xE9e invalide : ${N(r.values[0])} attendu`
          : `Option invalide : une valeur parmi ${D(r.values, "|")} attendue`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Trop grand : ${r.origin ?? "valeur"} doit ${a.verb} ${o}${r.maximum.toString()} ${a.unit ?? "\xE9l\xE9ment(s)"}`
          : `Trop grand : ${r.origin ?? "valeur"} doit \xEAtre ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Trop petit : ${r.origin} doit ${a.verb} ${o}${r.minimum.toString()} ${a.unit}`
          : `Trop petit : ${r.origin} doit \xEAtre ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Cha\xEEne invalide : doit commencer par "${o.prefix}"`
          : o.format === "ends_with"
            ? `Cha\xEEne invalide : doit se terminer par "${o.suffix}"`
            : o.format === "includes"
              ? `Cha\xEEne invalide : doit inclure "${o.includes}"`
              : o.format === "regex"
                ? `Cha\xEEne invalide : doit correspondre au mod\xE8le ${o.pattern}`
                : `${i[o.format] ?? r.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit \xEAtre un multiple de ${r.divisor}`;
      case "unrecognized_keys":
        return `Cl\xE9${r.keys.length > 1 ? "s" : ""} non reconnue${r.keys.length > 1 ? "s" : ""} : ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `Cl\xE9 invalide dans ${r.origin}`;
      case "invalid_union":
        return "Entr\xE9e invalide";
      case "invalid_element":
        return `Valeur invalide dans ${r.origin}`;
      default:
        return "Entr\xE9e invalide";
    }
  };
};
function sh() {
  return { localeError: t2() };
}
var r2 = () => {
  let e = {
    string: { unit: "caract\xE8res", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "\xE9l\xE9ments", verb: "avoir" },
    set: { unit: "\xE9l\xE9ments", verb: "avoir" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(r)) return "array";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "entr\xE9e",
      email: "adresse courriel",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "date-heure ISO",
      date: "date ISO",
      time: "heure ISO",
      duration: "dur\xE9e ISO",
      ipv4: "adresse IPv4",
      ipv6: "adresse IPv6",
      cidrv4: "plage IPv4",
      cidrv6: "plage IPv6",
      base64: "cha\xEEne encod\xE9e en base64",
      base64url: "cha\xEEne encod\xE9e en base64url",
      json_string: "cha\xEEne JSON",
      e164: "num\xE9ro E.164",
      jwt: "JWT",
      template_literal: "entr\xE9e",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Entr\xE9e invalide : attendu ${r.expected}, re\xE7u ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Entr\xE9e invalide : attendu ${N(r.values[0])}`
          : `Option invalide : attendu l'une des valeurs suivantes ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "\u2264" : "<",
          a = t(r.origin);
        return a
          ? `Trop grand : attendu que ${r.origin ?? "la valeur"} ait ${o}${r.maximum.toString()} ${a.unit}`
          : `Trop grand : attendu que ${r.origin ?? "la valeur"} soit ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? "\u2265" : ">",
          a = t(r.origin);
        return a
          ? `Trop petit : attendu que ${r.origin} ait ${o}${r.minimum.toString()} ${a.unit}`
          : `Trop petit : attendu que ${r.origin} soit ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Cha\xEEne invalide : doit commencer par "${o.prefix}"`
          : o.format === "ends_with"
            ? `Cha\xEEne invalide : doit se terminer par "${o.suffix}"`
            : o.format === "includes"
              ? `Cha\xEEne invalide : doit inclure "${o.includes}"`
              : o.format === "regex"
                ? `Cha\xEEne invalide : doit correspondre au motif ${o.pattern}`
                : `${i[o.format] ?? r.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit \xEAtre un multiple de ${r.divisor}`;
      case "unrecognized_keys":
        return `Cl\xE9${r.keys.length > 1 ? "s" : ""} non reconnue${r.keys.length > 1 ? "s" : ""} : ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `Cl\xE9 invalide dans ${r.origin}`;
      case "invalid_union":
        return "Entr\xE9e invalide";
      case "invalid_element":
        return `Valeur invalide dans ${r.origin}`;
      default:
        return "Entr\xE9e invalide";
    }
  };
};
function uh() {
  return { localeError: r2() };
}
var n2 = () => {
  let e = {
    string: {
      unit: "\u05D0\u05D5\u05EA\u05D9\u05D5\u05EA",
      verb: "\u05DC\u05DB\u05DC\u05D5\u05DC",
    },
    file: {
      unit: "\u05D1\u05D9\u05D9\u05D8\u05D9\u05DD",
      verb: "\u05DC\u05DB\u05DC\u05D5\u05DC",
    },
    array: {
      unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",
      verb: "\u05DC\u05DB\u05DC\u05D5\u05DC",
    },
    set: {
      unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",
      verb: "\u05DC\u05DB\u05DC\u05D5\u05DC",
    },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(r)) return "array";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u05E7\u05DC\u05D8",
      email:
        "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC",
      url: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA",
      emoji: "\u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D6\u05DE\u05DF ISO",
      date: "\u05EA\u05D0\u05E8\u05D9\u05DA ISO",
      time: "\u05D6\u05DE\u05DF ISO",
      duration: "\u05DE\u05E9\u05DA \u05D6\u05DE\u05DF ISO",
      ipv4: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv4",
      ipv6: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv6",
      cidrv4: "\u05D8\u05D5\u05D5\u05D7 IPv4",
      cidrv6: "\u05D8\u05D5\u05D5\u05D7 IPv6",
      base64:
        "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64",
      base64url:
        "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64 \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05E9\u05EA",
      json_string: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA JSON",
      e164: "\u05DE\u05E1\u05E4\u05E8 E.164",
      jwt: "JWT",
      template_literal: "\u05E7\u05DC\u05D8",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA ${r.expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA ${N(r.values[0])}`
          : `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05D0\u05D7\u05EA \u05DE\u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA  ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${r.origin ?? "value"} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${o}${r.maximum.toString()} ${a.unit ?? "elements"}`
          : `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${r.origin ?? "value"} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${r.origin} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${o}${r.minimum.toString()} ${a.unit}`
          : `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${r.origin} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4: \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1"${o.prefix}"`
          : o.format === "ends_with"
            ? `\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4: \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1 "${o.suffix}"`
            : o.format === "includes"
              ? `\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4: \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05DB\u05DC\u05D5\u05DC "${o.includes}"`
              : o.format === "regex"
                ? `\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4: \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05EA\u05D1\u05E0\u05D9\u05EA ${o.pattern}`
                : `${i[o.format] ?? r.format} \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF`;
      }
      case "not_multiple_of":
        return `\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC ${r.divisor}`;
      case "unrecognized_keys":
        return `\u05DE\u05E4\u05EA\u05D7${r.keys.length > 1 ? "\u05D5\u05EA" : ""} \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4${r.keys.length > 1 ? "\u05D9\u05DD" : "\u05D4"}: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `\u05DE\u05E4\u05EA\u05D7 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${r.origin}`;
      case "invalid_union":
        return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
      case "invalid_element":
        return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${r.origin}`;
      default:
        return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
    }
  };
};
function lh() {
  return { localeError: n2() };
}
var i2 = () => {
  let e = {
    string: { unit: "karakter", verb: "legyen" },
    file: { unit: "byte", verb: "legyen" },
    array: { unit: "elem", verb: "legyen" },
    set: { unit: "elem", verb: "legyen" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "sz\xE1m";
        case "object": {
          if (Array.isArray(r)) return "t\xF6mb";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "bemenet",
      email: "email c\xEDm",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO id\u0151b\xE9lyeg",
      date: "ISO d\xE1tum",
      time: "ISO id\u0151",
      duration: "ISO id\u0151intervallum",
      ipv4: "IPv4 c\xEDm",
      ipv6: "IPv6 c\xEDm",
      cidrv4: "IPv4 tartom\xE1ny",
      cidrv6: "IPv6 tartom\xE1ny",
      base64: "base64-k\xF3dolt string",
      base64url: "base64url-k\xF3dolt string",
      json_string: "JSON string",
      e164: "E.164 sz\xE1m",
      jwt: "JWT",
      template_literal: "bemenet",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${r.expected}, a kapott \xE9rt\xE9k ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${N(r.values[0])}`
          : `\xC9rv\xE9nytelen opci\xF3: valamelyik \xE9rt\xE9k v\xE1rt ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `T\xFAl nagy: ${r.origin ?? "\xE9rt\xE9k"} m\xE9rete t\xFAl nagy ${o}${r.maximum.toString()} ${a.unit ?? "elem"}`
          : `T\xFAl nagy: a bemeneti \xE9rt\xE9k ${r.origin ?? "\xE9rt\xE9k"} t\xFAl nagy: ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${r.origin} m\xE9rete t\xFAl kicsi ${o}${r.minimum.toString()} ${a.unit}`
          : `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${r.origin} t\xFAl kicsi ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\xC9rv\xE9nytelen string: "${o.prefix}" \xE9rt\xE9kkel kell kezd\u0151dnie`
          : o.format === "ends_with"
            ? `\xC9rv\xE9nytelen string: "${o.suffix}" \xE9rt\xE9kkel kell v\xE9gz\u0151dnie`
            : o.format === "includes"
              ? `\xC9rv\xE9nytelen string: "${o.includes}" \xE9rt\xE9ket kell tartalmaznia`
              : o.format === "regex"
                ? `\xC9rv\xE9nytelen string: ${o.pattern} mint\xE1nak kell megfelelnie`
                : `\xC9rv\xE9nytelen ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\xC9rv\xE9nytelen sz\xE1m: ${r.divisor} t\xF6bbsz\xF6r\xF6s\xE9nek kell lennie`;
      case "unrecognized_keys":
        return `Ismeretlen kulcs${r.keys.length > 1 ? "s" : ""}: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `\xC9rv\xE9nytelen kulcs ${r.origin}`;
      case "invalid_union":
        return "\xC9rv\xE9nytelen bemenet";
      case "invalid_element":
        return `\xC9rv\xE9nytelen \xE9rt\xE9k: ${r.origin}`;
      default:
        return "\xC9rv\xE9nytelen bemenet";
    }
  };
};
function ch() {
  return { localeError: i2() };
}
var o2 = () => {
  let e = {
    string: { unit: "karakter", verb: "memiliki" },
    file: { unit: "byte", verb: "memiliki" },
    array: { unit: "item", verb: "memiliki" },
    set: { unit: "item", verb: "memiliki" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(r)) return "array";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "input",
      email: "alamat email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "tanggal dan waktu format ISO",
      date: "tanggal format ISO",
      time: "jam format ISO",
      duration: "durasi format ISO",
      ipv4: "alamat IPv4",
      ipv6: "alamat IPv6",
      cidrv4: "rentang alamat IPv4",
      cidrv6: "rentang alamat IPv6",
      base64: "string dengan enkode base64",
      base64url: "string dengan enkode base64url",
      json_string: "string JSON",
      e164: "angka E.164",
      jwt: "JWT",
      template_literal: "input",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Input tidak valid: diharapkan ${r.expected}, diterima ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Input tidak valid: diharapkan ${N(r.values[0])}`
          : `Pilihan tidak valid: diharapkan salah satu dari ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Terlalu besar: diharapkan ${r.origin ?? "value"} memiliki ${o}${r.maximum.toString()} ${a.unit ?? "elemen"}`
          : `Terlalu besar: diharapkan ${r.origin ?? "value"} menjadi ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Terlalu kecil: diharapkan ${r.origin} memiliki ${o}${r.minimum.toString()} ${a.unit}`
          : `Terlalu kecil: diharapkan ${r.origin} menjadi ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `String tidak valid: harus dimulai dengan "${o.prefix}"`
          : o.format === "ends_with"
            ? `String tidak valid: harus berakhir dengan "${o.suffix}"`
            : o.format === "includes"
              ? `String tidak valid: harus menyertakan "${o.includes}"`
              : o.format === "regex"
                ? `String tidak valid: harus sesuai pola ${o.pattern}`
                : `${i[o.format] ?? r.format} tidak valid`;
      }
      case "not_multiple_of":
        return `Angka tidak valid: harus kelipatan dari ${r.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali ${r.keys.length > 1 ? "s" : ""}: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak valid di ${r.origin}`;
      case "invalid_union":
        return "Input tidak valid";
      case "invalid_element":
        return `Nilai tidak valid di ${r.origin}`;
      default:
        return "Input tidak valid";
    }
  };
};
function dh() {
  return { localeError: o2() };
}
var a2 = () => {
  let e = {
    string: { unit: "caratteri", verb: "avere" },
    file: { unit: "byte", verb: "avere" },
    array: { unit: "elementi", verb: "avere" },
    set: { unit: "elementi", verb: "avere" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "numero";
        case "object": {
          if (Array.isArray(r)) return "vettore";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "input",
      email: "indirizzo email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data e ora ISO",
      date: "data ISO",
      time: "ora ISO",
      duration: "durata ISO",
      ipv4: "indirizzo IPv4",
      ipv6: "indirizzo IPv6",
      cidrv4: "intervallo IPv4",
      cidrv6: "intervallo IPv6",
      base64: "stringa codificata in base64",
      base64url: "URL codificata in base64",
      json_string: "stringa JSON",
      e164: "numero E.164",
      jwt: "JWT",
      template_literal: "input",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Input non valido: atteso ${r.expected}, ricevuto ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Input non valido: atteso ${N(r.values[0])}`
          : `Opzione non valida: atteso uno tra ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Troppo grande: ${r.origin ?? "valore"} deve avere ${o}${r.maximum.toString()} ${a.unit ?? "elementi"}`
          : `Troppo grande: ${r.origin ?? "valore"} deve essere ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Troppo piccolo: ${r.origin} deve avere ${o}${r.minimum.toString()} ${a.unit}`
          : `Troppo piccolo: ${r.origin} deve essere ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Stringa non valida: deve iniziare con "${o.prefix}"`
          : o.format === "ends_with"
            ? `Stringa non valida: deve terminare con "${o.suffix}"`
            : o.format === "includes"
              ? `Stringa non valida: deve includere "${o.includes}"`
              : o.format === "regex"
                ? `Stringa non valida: deve corrispondere al pattern ${o.pattern}`
                : `Invalid ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Numero non valido: deve essere un multiplo di ${r.divisor}`;
      case "unrecognized_keys":
        return `Chiav${r.keys.length > 1 ? "i" : "e"} non riconosciut${r.keys.length > 1 ? "e" : "a"}: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `Chiave non valida in ${r.origin}`;
      case "invalid_union":
        return "Input non valido";
      case "invalid_element":
        return `Valore non valido in ${r.origin}`;
      default:
        return "Input non valido";
    }
  };
};
function mh() {
  return { localeError: a2() };
}
var s2 = () => {
  let e = {
    string: { unit: "\u6587\u5B57", verb: "\u3067\u3042\u308B" },
    file: { unit: "\u30D0\u30A4\u30C8", verb: "\u3067\u3042\u308B" },
    array: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
    set: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "\u6570\u5024";
        case "object": {
          if (Array.isArray(r)) return "\u914D\u5217";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u5165\u529B\u5024",
      email: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
      url: "URL",
      emoji: "\u7D75\u6587\u5B57",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO\u65E5\u6642",
      date: "ISO\u65E5\u4ED8",
      time: "ISO\u6642\u523B",
      duration: "ISO\u671F\u9593",
      ipv4: "IPv4\u30A2\u30C9\u30EC\u30B9",
      ipv6: "IPv6\u30A2\u30C9\u30EC\u30B9",
      cidrv4: "IPv4\u7BC4\u56F2",
      cidrv6: "IPv6\u7BC4\u56F2",
      base64: "base64\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
      base64url: "base64url\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
      json_string: "JSON\u6587\u5B57\u5217",
      e164: "E.164\u756A\u53F7",
      jwt: "JWT",
      template_literal: "\u5165\u529B\u5024",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u7121\u52B9\u306A\u5165\u529B: ${r.expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${n(r.input)}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u7121\u52B9\u306A\u5165\u529B: ${N(r.values[0])}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F`
          : `\u7121\u52B9\u306A\u9078\u629E: ${D(r.values, "\u3001")}\u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `\u5927\u304D\u3059\u304E\u308B\u5024: ${r.origin ?? "\u5024"}\u306F${r.maximum.toString()}${a.unit ?? "\u8981\u7D20"}${o}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
          : `\u5927\u304D\u3059\u304E\u308B\u5024: ${r.origin ?? "\u5024"}\u306F${r.maximum.toString()}${o}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${r.origin}\u306F${r.minimum.toString()}${a.unit}${o}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
          : `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${r.origin}\u306F${r.minimum.toString()}${o}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${o.prefix}"\u3067\u59CB\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
          : o.format === "ends_with"
            ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${o.suffix}"\u3067\u7D42\u308F\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
            : o.format === "includes"
              ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${o.includes}"\u3092\u542B\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
              : o.format === "regex"
                ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: \u30D1\u30BF\u30FC\u30F3${o.pattern}\u306B\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                : `\u7121\u52B9\u306A${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u7121\u52B9\u306A\u6570\u5024: ${r.divisor}\u306E\u500D\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      case "unrecognized_keys":
        return `\u8A8D\u8B58\u3055\u308C\u3066\u3044\u306A\u3044\u30AD\u30FC${r.keys.length > 1 ? "\u7FA4" : ""}: ${D(r.keys, "\u3001")}`;
      case "invalid_key":
        return `${r.origin}\u5185\u306E\u7121\u52B9\u306A\u30AD\u30FC`;
      case "invalid_union":
        return "\u7121\u52B9\u306A\u5165\u529B";
      case "invalid_element":
        return `${r.origin}\u5185\u306E\u7121\u52B9\u306A\u5024`;
      default:
        return "\u7121\u52B9\u306A\u5165\u529B";
    }
  };
};
function ph() {
  return { localeError: s2() };
}
var u2 = () => {
  let e = {
    string: {
      unit: "\u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
    },
    file: {
      unit: "\u1794\u17C3",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
    },
    array: {
      unit: "\u1792\u17B6\u178F\u17BB",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
    },
    set: {
      unit: "\u1792\u17B6\u178F\u17BB",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
    },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r)
            ? "\u1798\u17B7\u1793\u1798\u17C2\u1793\u1787\u17B6\u179B\u17C1\u1781 (NaN)"
            : "\u179B\u17C1\u1781";
        case "object": {
          if (Array.isArray(r)) return "\u17A2\u17B6\u179A\u17C1 (Array)";
          if (r === null)
            return "\u1782\u17D2\u1798\u17B6\u1793\u178F\u1798\u17D2\u179B\u17C3 (null)";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex:
        "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
      email:
        "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793\u17A2\u17CA\u17B8\u1798\u17C2\u179B",
      url: "URL",
      emoji:
        "\u179F\u1789\u17D2\u1789\u17B6\u17A2\u17B6\u179A\u1798\u17D2\u1798\u178E\u17CD",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 \u1793\u17B7\u1784\u1798\u17C9\u17C4\u1784 ISO",
      date: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 ISO",
      time: "\u1798\u17C9\u17C4\u1784 ISO",
      duration: "\u179A\u1799\u17C8\u1796\u17C1\u179B ISO",
      ipv4: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
      ipv6: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
      cidrv4:
        "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
      cidrv6:
        "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
      base64:
        "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64",
      base64url:
        "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64url",
      json_string:
        "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A JSON",
      e164: "\u179B\u17C1\u1781 E.164",
      jwt: "JWT",
      template_literal:
        "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${r.expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${N(r.values[0])}`
          : `\u1787\u1798\u17D2\u179A\u17BE\u179F\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1787\u17B6\u1798\u17BD\u1799\u1780\u17D2\u1793\u17BB\u1784\u1785\u17C6\u178E\u17C4\u1798 ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${r.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${o} ${r.maximum.toString()} ${a.unit ?? "\u1792\u17B6\u178F\u17BB"}`
          : `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${r.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${o} ${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${r.origin} ${o} ${r.minimum.toString()} ${a.unit}`
          : `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${r.origin} ${o} ${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u178A\u17C4\u1799 "${o.prefix}"`
          : o.format === "ends_with"
            ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1794\u1789\u17D2\u1785\u1794\u17CB\u178A\u17C4\u1799 "${o.suffix}"`
            : o.format === "includes"
              ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1798\u17B6\u1793 "${o.includes}"`
              : o.format === "regex"
                ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1795\u17D2\u1782\u17BC\u1795\u17D2\u1782\u1784\u1793\u17B9\u1784\u1791\u1798\u17D2\u179A\u1784\u17CB\u178A\u17C2\u179B\u1794\u17B6\u1793\u1780\u17C6\u178E\u178F\u17CB ${o.pattern}`
                : `\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u179B\u17C1\u1781\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1787\u17B6\u1796\u17A0\u17BB\u1782\u17BB\u178E\u1793\u17C3 ${r.divisor}`;
      case "unrecognized_keys":
        return `\u179A\u1780\u1783\u17BE\u1789\u179F\u17C4\u1798\u17B7\u1793\u179F\u17D2\u1782\u17B6\u179B\u17CB\u17D6 ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `\u179F\u17C4\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${r.origin}`;
      case "invalid_union":
        return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
      case "invalid_element":
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${r.origin}`;
      default:
        return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
    }
  };
};
function _h() {
  return { localeError: u2() };
}
var l2 = () => {
  let e = {
    string: { unit: "\uBB38\uC790", verb: "to have" },
    file: { unit: "\uBC14\uC774\uD2B8", verb: "to have" },
    array: { unit: "\uAC1C", verb: "to have" },
    set: { unit: "\uAC1C", verb: "to have" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(r)) return "array";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\uC785\uB825",
      email: "\uC774\uBA54\uC77C \uC8FC\uC18C",
      url: "URL",
      emoji: "\uC774\uBAA8\uC9C0",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \uB0A0\uC9DC\uC2DC\uAC04",
      date: "ISO \uB0A0\uC9DC",
      time: "ISO \uC2DC\uAC04",
      duration: "ISO \uAE30\uAC04",
      ipv4: "IPv4 \uC8FC\uC18C",
      ipv6: "IPv6 \uC8FC\uC18C",
      cidrv4: "IPv4 \uBC94\uC704",
      cidrv6: "IPv6 \uBC94\uC704",
      base64: "base64 \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
      base64url: "base64url \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
      json_string: "JSON \uBB38\uC790\uC5F4",
      e164: "E.164 \uBC88\uD638",
      jwt: "JWT",
      template_literal: "\uC785\uB825",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 ${r.expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${n(r.input)}\uC785\uB2C8\uB2E4`;
      case "invalid_value":
        return r.values.length === 1
          ? `\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 ${N(r.values[0])} \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4`
          : `\uC798\uBABB\uB41C \uC635\uC158: ${D(r.values, "\uB610\uB294 ")} \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
      case "too_big": {
        let o = r.inclusive ? "\uC774\uD558" : "\uBBF8\uB9CC",
          a =
            o === "\uBBF8\uB9CC"
              ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"
              : "\uC5EC\uC57C \uD569\uB2C8\uB2E4",
          u = t(r.origin),
          s = u?.unit ?? "\uC694\uC18C";
        return u
          ? `${r.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${r.maximum.toString()}${s} ${o}${a}`
          : `${r.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${r.maximum.toString()} ${o}${a}`;
      }
      case "too_small": {
        let o = r.inclusive ? "\uC774\uC0C1" : "\uCD08\uACFC",
          a =
            o === "\uC774\uC0C1"
              ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"
              : "\uC5EC\uC57C \uD569\uB2C8\uB2E4",
          u = t(r.origin),
          s = u?.unit ?? "\uC694\uC18C";
        return u
          ? `${r.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${r.minimum.toString()}${s} ${o}${a}`
          : `${r.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${r.minimum.toString()} ${o}${a}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${o.prefix}"(\uC73C)\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4`
          : o.format === "ends_with"
            ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${o.suffix}"(\uC73C)\uB85C \uB05D\uB098\uC57C \uD569\uB2C8\uB2E4`
            : o.format === "includes"
              ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${o.includes}"\uC744(\uB97C) \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4`
              : o.format === "regex"
                ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \uC815\uADDC\uC2DD ${o.pattern} \uD328\uD134\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4`
                : `\uC798\uBABB\uB41C ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\uC798\uBABB\uB41C \uC22B\uC790: ${r.divisor}\uC758 \uBC30\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
      case "unrecognized_keys":
        return `\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `\uC798\uBABB\uB41C \uD0A4: ${r.origin}`;
      case "invalid_union":
        return "\uC798\uBABB\uB41C \uC785\uB825";
      case "invalid_element":
        return `\uC798\uBABB\uB41C \uAC12: ${r.origin}`;
      default:
        return "\uC798\uBABB\uB41C \uC785\uB825";
    }
  };
};
function fh() {
  return { localeError: l2() };
}
var c2 = () => {
  let e = {
    string: {
      unit: "\u0437\u043D\u0430\u0446\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
    },
    file: {
      unit: "\u0431\u0430\u0458\u0442\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
    },
    array: {
      unit: "\u0441\u0442\u0430\u0432\u043A\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
    },
    set: {
      unit: "\u0441\u0442\u0430\u0432\u043A\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
    },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "\u0431\u0440\u043E\u0458";
        case "object": {
          if (Array.isArray(r)) return "\u043D\u0438\u0437\u0430";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u0432\u043D\u0435\u0441",
      email:
        "\u0430\u0434\u0440\u0435\u0441\u0430 \u043D\u0430 \u0435-\u043F\u043E\u0448\u0442\u0430",
      url: "URL",
      emoji: "\u0435\u043C\u043E\u045F\u0438",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "ISO \u0434\u0430\u0442\u0443\u043C \u0438 \u0432\u0440\u0435\u043C\u0435",
      date: "ISO \u0434\u0430\u0442\u0443\u043C",
      time: "ISO \u0432\u0440\u0435\u043C\u0435",
      duration:
        "ISO \u0432\u0440\u0435\u043C\u0435\u0442\u0440\u0430\u0435\u045A\u0435",
      ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441\u0430",
      ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441\u0430",
      cidrv4: "IPv4 \u043E\u043F\u0441\u0435\u0433",
      cidrv6: "IPv6 \u043E\u043F\u0441\u0435\u0433",
      base64:
        "base64-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
      base64url:
        "base64url-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
      json_string: "JSON \u043D\u0438\u0437\u0430",
      e164: "E.164 \u0431\u0440\u043E\u0458",
      jwt: "JWT",
      template_literal: "\u0432\u043D\u0435\u0441",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${r.expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Invalid input: expected ${N(r.values[0])}`
          : `\u0413\u0440\u0435\u0448\u0430\u043D\u0430 \u043E\u043F\u0446\u0438\u0458\u0430: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 \u0435\u0434\u043D\u0430 ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${r.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0438\u043C\u0430 ${o}${r.maximum.toString()} ${a.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438"}`
          : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${r.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0431\u0438\u0434\u0435 ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${r.origin} \u0434\u0430 \u0438\u043C\u0430 ${o}${r.minimum.toString()} ${a.unit}`
          : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${r.origin} \u0434\u0430 \u0431\u0438\u0434\u0435 ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0443\u0432\u0430 \u0441\u043E "${o.prefix}"`
          : o.format === "ends_with"
            ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u0432\u0440\u0448\u0443\u0432\u0430 \u0441\u043E "${o.suffix}"`
            : o.format === "includes"
              ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0432\u043A\u043B\u0443\u0447\u0443\u0432\u0430 "${o.includes}"`
              : o.format === "regex"
                ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u043E\u0434\u0433\u043E\u0430\u0440\u0430 \u043D\u0430 \u043F\u0430\u0442\u0435\u0440\u043D\u043E\u0442 ${o.pattern}`
                : `Invalid ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u0431\u0440\u043E\u0458: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0431\u0438\u0434\u0435 \u0434\u0435\u043B\u0438\u0432 \u0441\u043E ${r.divisor}`;
      case "unrecognized_keys":
        return `${r.keys.length > 1 ? "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D\u0438 \u043A\u043B\u0443\u0447\u0435\u0432\u0438" : "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D \u043A\u043B\u0443\u0447"}: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u043A\u043B\u0443\u0447 \u0432\u043E ${r.origin}`;
      case "invalid_union":
        return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
      case "invalid_element":
        return `\u0413\u0440\u0435\u0448\u043D\u0430 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0432\u043E ${r.origin}`;
      default:
        return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
    }
  };
};
function hh() {
  return { localeError: c2() };
}
var d2 = () => {
  let e = {
    string: { unit: "aksara", verb: "mempunyai" },
    file: { unit: "bait", verb: "mempunyai" },
    array: { unit: "elemen", verb: "mempunyai" },
    set: { unit: "elemen", verb: "mempunyai" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "nombor";
        case "object": {
          if (Array.isArray(r)) return "array";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "input",
      email: "alamat e-mel",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "tarikh masa ISO",
      date: "tarikh ISO",
      time: "masa ISO",
      duration: "tempoh ISO",
      ipv4: "alamat IPv4",
      ipv6: "alamat IPv6",
      cidrv4: "julat IPv4",
      cidrv6: "julat IPv6",
      base64: "string dikodkan base64",
      base64url: "string dikodkan base64url",
      json_string: "string JSON",
      e164: "nombor E.164",
      jwt: "JWT",
      template_literal: "input",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Input tidak sah: dijangka ${r.expected}, diterima ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Input tidak sah: dijangka ${N(r.values[0])}`
          : `Pilihan tidak sah: dijangka salah satu daripada ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Terlalu besar: dijangka ${r.origin ?? "nilai"} ${a.verb} ${o}${r.maximum.toString()} ${a.unit ?? "elemen"}`
          : `Terlalu besar: dijangka ${r.origin ?? "nilai"} adalah ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Terlalu kecil: dijangka ${r.origin} ${a.verb} ${o}${r.minimum.toString()} ${a.unit}`
          : `Terlalu kecil: dijangka ${r.origin} adalah ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `String tidak sah: mesti bermula dengan "${o.prefix}"`
          : o.format === "ends_with"
            ? `String tidak sah: mesti berakhir dengan "${o.suffix}"`
            : o.format === "includes"
              ? `String tidak sah: mesti mengandungi "${o.includes}"`
              : o.format === "regex"
                ? `String tidak sah: mesti sepadan dengan corak ${o.pattern}`
                : `${i[o.format] ?? r.format} tidak sah`;
      }
      case "not_multiple_of":
        return `Nombor tidak sah: perlu gandaan ${r.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak sah dalam ${r.origin}`;
      case "invalid_union":
        return "Input tidak sah";
      case "invalid_element":
        return `Nilai tidak sah dalam ${r.origin}`;
      default:
        return "Input tidak sah";
    }
  };
};
function gh() {
  return { localeError: d2() };
}
var m2 = () => {
  let e = {
    string: { unit: "tekens" },
    file: { unit: "bytes" },
    array: { unit: "elementen" },
    set: { unit: "elementen" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "getal";
        case "object": {
          if (Array.isArray(r)) return "array";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "invoer",
      email: "emailadres",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datum en tijd",
      date: "ISO datum",
      time: "ISO tijd",
      duration: "ISO duur",
      ipv4: "IPv4-adres",
      ipv6: "IPv6-adres",
      cidrv4: "IPv4-bereik",
      cidrv6: "IPv6-bereik",
      base64: "base64-gecodeerde tekst",
      base64url: "base64 URL-gecodeerde tekst",
      json_string: "JSON string",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "invoer",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Ongeldige invoer: verwacht ${r.expected}, ontving ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Ongeldige invoer: verwacht ${N(r.values[0])}`
          : `Ongeldige optie: verwacht \xE9\xE9n van ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Te lang: verwacht dat ${r.origin ?? "waarde"} ${o}${r.maximum.toString()} ${a.unit ?? "elementen"} bevat`
          : `Te lang: verwacht dat ${r.origin ?? "waarde"} ${o}${r.maximum.toString()} is`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Te kort: verwacht dat ${r.origin} ${o}${r.minimum.toString()} ${a.unit} bevat`
          : `Te kort: verwacht dat ${r.origin} ${o}${r.minimum.toString()} is`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Ongeldige tekst: moet met "${o.prefix}" beginnen`
          : o.format === "ends_with"
            ? `Ongeldige tekst: moet op "${o.suffix}" eindigen`
            : o.format === "includes"
              ? `Ongeldige tekst: moet "${o.includes}" bevatten`
              : o.format === "regex"
                ? `Ongeldige tekst: moet overeenkomen met patroon ${o.pattern}`
                : `Ongeldig: ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Ongeldig getal: moet een veelvoud van ${r.divisor} zijn`;
      case "unrecognized_keys":
        return `Onbekende key${r.keys.length > 1 ? "s" : ""}: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `Ongeldige key in ${r.origin}`;
      case "invalid_union":
        return "Ongeldige invoer";
      case "invalid_element":
        return `Ongeldige waarde in ${r.origin}`;
      default:
        return "Ongeldige invoer";
    }
  };
};
function vh() {
  return { localeError: m2() };
}
var p2 = () => {
  let e = {
    string: { unit: "tegn", verb: "\xE5 ha" },
    file: { unit: "bytes", verb: "\xE5 ha" },
    array: { unit: "elementer", verb: "\xE5 inneholde" },
    set: { unit: "elementer", verb: "\xE5 inneholde" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "tall";
        case "object": {
          if (Array.isArray(r)) return "liste";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "input",
      email: "e-postadresse",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO dato- og klokkeslett",
      date: "ISO-dato",
      time: "ISO-klokkeslett",
      duration: "ISO-varighet",
      ipv4: "IPv4-omr\xE5de",
      ipv6: "IPv6-omr\xE5de",
      cidrv4: "IPv4-spekter",
      cidrv6: "IPv6-spekter",
      base64: "base64-enkodet streng",
      base64url: "base64url-enkodet streng",
      json_string: "JSON-streng",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "input",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Ugyldig input: forventet ${r.expected}, fikk ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Ugyldig verdi: forventet ${N(r.values[0])}`
          : `Ugyldig valg: forventet en av ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `For stor(t): forventet ${r.origin ?? "value"} til \xE5 ha ${o}${r.maximum.toString()} ${a.unit ?? "elementer"}`
          : `For stor(t): forventet ${r.origin ?? "value"} til \xE5 ha ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `For lite(n): forventet ${r.origin} til \xE5 ha ${o}${r.minimum.toString()} ${a.unit}`
          : `For lite(n): forventet ${r.origin} til \xE5 ha ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Ugyldig streng: m\xE5 starte med "${o.prefix}"`
          : o.format === "ends_with"
            ? `Ugyldig streng: m\xE5 ende med "${o.suffix}"`
            : o.format === "includes"
              ? `Ugyldig streng: m\xE5 inneholde "${o.includes}"`
              : o.format === "regex"
                ? `Ugyldig streng: m\xE5 matche m\xF8nsteret ${o.pattern}`
                : `Ugyldig ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Ugyldig tall: m\xE5 v\xE6re et multiplum av ${r.divisor}`;
      case "unrecognized_keys":
        return `${r.keys.length > 1 ? "Ukjente n\xF8kler" : "Ukjent n\xF8kkel"}: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig n\xF8kkel i ${r.origin}`;
      case "invalid_union":
        return "Ugyldig input";
      case "invalid_element":
        return `Ugyldig verdi i ${r.origin}`;
      default:
        return "Ugyldig input";
    }
  };
};
function yh() {
  return { localeError: p2() };
}
var _2 = () => {
  let e = {
    string: { unit: "harf", verb: "olmal\u0131d\u0131r" },
    file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
    array: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
    set: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "numara";
        case "object": {
          if (Array.isArray(r)) return "saf";
          if (r === null) return "gayb";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "giren",
      email: "epostag\xE2h",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO heng\xE2m\u0131",
      date: "ISO tarihi",
      time: "ISO zaman\u0131",
      duration: "ISO m\xFCddeti",
      ipv4: "IPv4 ni\u015F\xE2n\u0131",
      ipv6: "IPv6 ni\u015F\xE2n\u0131",
      cidrv4: "IPv4 menzili",
      cidrv6: "IPv6 menzili",
      base64: "base64-\u015Fifreli metin",
      base64url: "base64url-\u015Fifreli metin",
      json_string: "JSON metin",
      e164: "E.164 say\u0131s\u0131",
      jwt: "JWT",
      template_literal: "giren",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `F\xE2sit giren: umulan ${r.expected}, al\u0131nan ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `F\xE2sit giren: umulan ${N(r.values[0])}`
          : `F\xE2sit tercih: m\xFBteberler ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Fazla b\xFCy\xFCk: ${r.origin ?? "value"}, ${o}${r.maximum.toString()} ${a.unit ?? "elements"} sahip olmal\u0131yd\u0131.`
          : `Fazla b\xFCy\xFCk: ${r.origin ?? "value"}, ${o}${r.maximum.toString()} olmal\u0131yd\u0131.`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Fazla k\xFC\xE7\xFCk: ${r.origin}, ${o}${r.minimum.toString()} ${a.unit} sahip olmal\u0131yd\u0131.`
          : `Fazla k\xFC\xE7\xFCk: ${r.origin}, ${o}${r.minimum.toString()} olmal\u0131yd\u0131.`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `F\xE2sit metin: "${o.prefix}" ile ba\u015Flamal\u0131.`
          : o.format === "ends_with"
            ? `F\xE2sit metin: "${o.suffix}" ile bitmeli.`
            : o.format === "includes"
              ? `F\xE2sit metin: "${o.includes}" ihtiv\xE2 etmeli.`
              : o.format === "regex"
                ? `F\xE2sit metin: ${o.pattern} nak\u015F\u0131na uymal\u0131.`
                : `F\xE2sit ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `F\xE2sit say\u0131: ${r.divisor} kat\u0131 olmal\u0131yd\u0131.`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan anahtar ${r.keys.length > 1 ? "s" : ""}: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `${r.origin} i\xE7in tan\u0131nmayan anahtar var.`;
      case "invalid_union":
        return "Giren tan\u0131namad\u0131.";
      case "invalid_element":
        return `${r.origin} i\xE7in tan\u0131nmayan k\u0131ymet var.`;
      default:
        return "K\u0131ymet tan\u0131namad\u0131.";
    }
  };
};
function bh() {
  return { localeError: _2() };
}
var f2 = () => {
  let e = {
    string: { unit: "znak\xF3w", verb: "mie\u0107" },
    file: { unit: "bajt\xF3w", verb: "mie\u0107" },
    array: { unit: "element\xF3w", verb: "mie\u0107" },
    set: { unit: "element\xF3w", verb: "mie\u0107" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "liczba";
        case "object": {
          if (Array.isArray(r)) return "tablica";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "wyra\u017Cenie",
      email: "adres email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data i godzina w formacie ISO",
      date: "data w formacie ISO",
      time: "godzina w formacie ISO",
      duration: "czas trwania ISO",
      ipv4: "adres IPv4",
      ipv6: "adres IPv6",
      cidrv4: "zakres IPv4",
      cidrv6: "zakres IPv6",
      base64: "ci\u0105g znak\xF3w zakodowany w formacie base64",
      base64url: "ci\u0105g znak\xF3w zakodowany w formacie base64url",
      json_string: "ci\u0105g znak\xF3w w formacie JSON",
      e164: "liczba E.164",
      jwt: "JWT",
      template_literal: "wej\u015Bcie",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${r.expected}, otrzymano ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${N(r.values[0])}`
          : `Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce ${r.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${o}${r.maximum.toString()} ${a.unit ?? "element\xF3w"}`
          : `Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce ${r.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Za ma\u0142a warto\u015B\u0107: oczekiwano, \u017Ce ${r.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${o}${r.minimum.toString()} ${a.unit ?? "element\xF3w"}`
          : `Zbyt ma\u0142(y/a/e): oczekiwano, \u017Ce ${r.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zaczyna\u0107 si\u0119 od "${o.prefix}"`
          : o.format === "ends_with"
            ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi ko\u0144czy\u0107 si\u0119 na "${o.suffix}"`
            : o.format === "includes"
              ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zawiera\u0107 "${o.includes}"`
              : o.format === "regex"
                ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi odpowiada\u0107 wzorcowi ${o.pattern}`
                : `Nieprawid\u0142ow(y/a/e) ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Nieprawid\u0142owa liczba: musi by\u0107 wielokrotno\u015Bci\u0105 ${r.divisor}`;
      case "unrecognized_keys":
        return `Nierozpoznane klucze${r.keys.length > 1 ? "s" : ""}: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `Nieprawid\u0142owy klucz w ${r.origin}`;
      case "invalid_union":
        return "Nieprawid\u0142owe dane wej\u015Bciowe";
      case "invalid_element":
        return `Nieprawid\u0142owa warto\u015B\u0107 w ${r.origin}`;
      default:
        return "Nieprawid\u0142owe dane wej\u015Bciowe";
    }
  };
};
function wh() {
  return { localeError: f2() };
}
var h2 = () => {
  let e = {
    string: { unit: "caracteres", verb: "ter" },
    file: { unit: "bytes", verb: "ter" },
    array: { unit: "itens", verb: "ter" },
    set: { unit: "itens", verb: "ter" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "n\xFAmero";
        case "object": {
          if (Array.isArray(r)) return "array";
          if (r === null) return "nulo";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "padr\xE3o",
      email: "endere\xE7o de e-mail",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data e hora ISO",
      date: "data ISO",
      time: "hora ISO",
      duration: "dura\xE7\xE3o ISO",
      ipv4: "endere\xE7o IPv4",
      ipv6: "endere\xE7o IPv6",
      cidrv4: "faixa de IPv4",
      cidrv6: "faixa de IPv6",
      base64: "texto codificado em base64",
      base64url: "URL codificada em base64",
      json_string: "texto JSON",
      e164: "n\xFAmero E.164",
      jwt: "JWT",
      template_literal: "entrada",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Tipo inv\xE1lido: esperado ${r.expected}, recebido ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Entrada inv\xE1lida: esperado ${N(r.values[0])}`
          : `Op\xE7\xE3o inv\xE1lida: esperada uma das ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Muito grande: esperado que ${r.origin ?? "valor"} tivesse ${o}${r.maximum.toString()} ${a.unit ?? "elementos"}`
          : `Muito grande: esperado que ${r.origin ?? "valor"} fosse ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Muito pequeno: esperado que ${r.origin} tivesse ${o}${r.minimum.toString()} ${a.unit}`
          : `Muito pequeno: esperado que ${r.origin} fosse ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Texto inv\xE1lido: deve come\xE7ar com "${o.prefix}"`
          : o.format === "ends_with"
            ? `Texto inv\xE1lido: deve terminar com "${o.suffix}"`
            : o.format === "includes"
              ? `Texto inv\xE1lido: deve incluir "${o.includes}"`
              : o.format === "regex"
                ? `Texto inv\xE1lido: deve corresponder ao padr\xE3o ${o.pattern}`
                : `${i[o.format] ?? r.format} inv\xE1lido`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE1lido: deve ser m\xFAltiplo de ${r.divisor}`;
      case "unrecognized_keys":
        return `Chave${r.keys.length > 1 ? "s" : ""} desconhecida${r.keys.length > 1 ? "s" : ""}: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `Chave inv\xE1lida em ${r.origin}`;
      case "invalid_union":
        return "Entrada inv\xE1lida";
      case "invalid_element":
        return `Valor inv\xE1lido em ${r.origin}`;
      default:
        return "Campo inv\xE1lido";
    }
  };
};
function Sh() {
  return { localeError: h2() };
}
function xh(e, t, n, i) {
  let r = Math.abs(e),
    o = r % 10,
    a = r % 100;
  return a >= 11 && a <= 19 ? i : o === 1 ? t : o >= 2 && o <= 4 ? n : i;
}
var g2 = () => {
  let e = {
    string: {
      unit: {
        one: "\u0441\u0438\u043C\u0432\u043E\u043B",
        few: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
        many: "\u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",
      },
      verb: "\u0438\u043C\u0435\u0442\u044C",
    },
    file: {
      unit: {
        one: "\u0431\u0430\u0439\u0442",
        few: "\u0431\u0430\u0439\u0442\u0430",
        many: "\u0431\u0430\u0439\u0442",
      },
      verb: "\u0438\u043C\u0435\u0442\u044C",
    },
    array: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
      },
      verb: "\u0438\u043C\u0435\u0442\u044C",
    },
    set: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
      },
      verb: "\u0438\u043C\u0435\u0442\u044C",
    },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "\u0447\u0438\u0441\u043B\u043E";
        case "object": {
          if (Array.isArray(r)) return "\u043C\u0430\u0441\u0441\u0438\u0432";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u0432\u0432\u043E\u0434",
      email: "email \u0430\u0434\u0440\u0435\u0441",
      url: "URL",
      emoji: "\u044D\u043C\u043E\u0434\u0437\u0438",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "ISO \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
      date: "ISO \u0434\u0430\u0442\u0430",
      time: "ISO \u0432\u0440\u0435\u043C\u044F",
      duration:
        "ISO \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
      ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
      ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
      cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
      cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
      base64:
        "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64",
      base64url:
        "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64url",
      json_string: "JSON \u0441\u0442\u0440\u043E\u043A\u0430",
      e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
      jwt: "JWT",
      template_literal: "\u0432\u0432\u043E\u0434",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${r.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${N(r.values[0])}`
          : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0434\u043D\u043E \u0438\u0437 ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        if (a) {
          let u = Number(r.maximum),
            s = xh(u, a.unit.one, a.unit.few, a.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${r.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${o}${r.maximum.toString()} ${s}`;
        }
        return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${r.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        if (a) {
          let u = Number(r.minimum),
            s = xh(u, a.unit.one, a.unit.few, a.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${r.origin} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${o}${r.minimum.toString()} ${s}`;
        }
        return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${r.origin} \u0431\u0443\u0434\u0435\u0442 ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 "${o.prefix}"`
          : o.format === "ends_with"
            ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 "${o.suffix}"`
            : o.format === "includes"
              ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C "${o.includes}"`
              : o.format === "regex"
                ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${o.pattern}`
                : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${r.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043D${r.keys.length > 1 ? "\u044B\u0435" : "\u044B\u0439"} \u043A\u043B\u044E\u0447${r.keys.length > 1 ? "\u0438" : ""}: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 \u0432 ${r.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
      case "invalid_element":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 ${r.origin}`;
      default:
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
    }
  };
};
function Dh() {
  return { localeError: g2() };
}
var v2 = () => {
  let e = {
    string: { unit: "znakov", verb: "imeti" },
    file: { unit: "bajtov", verb: "imeti" },
    array: { unit: "elementov", verb: "imeti" },
    set: { unit: "elementov", verb: "imeti" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "\u0161tevilo";
        case "object": {
          if (Array.isArray(r)) return "tabela";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "vnos",
      email: "e-po\u0161tni naslov",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datum in \u010Das",
      date: "ISO datum",
      time: "ISO \u010Das",
      duration: "ISO trajanje",
      ipv4: "IPv4 naslov",
      ipv6: "IPv6 naslov",
      cidrv4: "obseg IPv4",
      cidrv6: "obseg IPv6",
      base64: "base64 kodiran niz",
      base64url: "base64url kodiran niz",
      json_string: "JSON niz",
      e164: "E.164 \u0161tevilka",
      jwt: "JWT",
      template_literal: "vnos",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Neveljaven vnos: pri\u010Dakovano ${r.expected}, prejeto ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Neveljaven vnos: pri\u010Dakovano ${N(r.values[0])}`
          : `Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Preveliko: pri\u010Dakovano, da bo ${r.origin ?? "vrednost"} imelo ${o}${r.maximum.toString()} ${a.unit ?? "elementov"}`
          : `Preveliko: pri\u010Dakovano, da bo ${r.origin ?? "vrednost"} ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Premajhno: pri\u010Dakovano, da bo ${r.origin} imelo ${o}${r.minimum.toString()} ${a.unit}`
          : `Premajhno: pri\u010Dakovano, da bo ${r.origin} ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Neveljaven niz: mora se za\u010Deti z "${o.prefix}"`
          : o.format === "ends_with"
            ? `Neveljaven niz: mora se kon\u010Dati z "${o.suffix}"`
            : o.format === "includes"
              ? `Neveljaven niz: mora vsebovati "${o.includes}"`
              : o.format === "regex"
                ? `Neveljaven niz: mora ustrezati vzorcu ${o.pattern}`
                : `Neveljaven ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Neveljavno \u0161tevilo: mora biti ve\u010Dkratnik ${r.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznan${r.keys.length > 1 ? "i klju\u010Di" : " klju\u010D"}: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `Neveljaven klju\u010D v ${r.origin}`;
      case "invalid_union":
        return "Neveljaven vnos";
      case "invalid_element":
        return `Neveljavna vrednost v ${r.origin}`;
      default:
        return "Neveljaven vnos";
    }
  };
};
function Ah() {
  return { localeError: v2() };
}
var y2 = () => {
  let e = {
    string: { unit: "tecken", verb: "att ha" },
    file: { unit: "bytes", verb: "att ha" },
    array: { unit: "objekt", verb: "att inneh\xE5lla" },
    set: { unit: "objekt", verb: "att inneh\xE5lla" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "antal";
        case "object": {
          if (Array.isArray(r)) return "lista";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "regulj\xE4rt uttryck",
      email: "e-postadress",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO-datum och tid",
      date: "ISO-datum",
      time: "ISO-tid",
      duration: "ISO-varaktighet",
      ipv4: "IPv4-intervall",
      ipv6: "IPv6-intervall",
      cidrv4: "IPv4-spektrum",
      cidrv6: "IPv6-spektrum",
      base64: "base64-kodad str\xE4ng",
      base64url: "base64url-kodad str\xE4ng",
      json_string: "JSON-str\xE4ng",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "mall-literal",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Ogiltig inmatning: f\xF6rv\xE4ntat ${r.expected}, fick ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Ogiltig inmatning: f\xF6rv\xE4ntat ${N(r.values[0])}`
          : `Ogiltigt val: f\xF6rv\xE4ntade en av ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `F\xF6r stor(t): f\xF6rv\xE4ntade ${r.origin ?? "v\xE4rdet"} att ha ${o}${r.maximum.toString()} ${a.unit ?? "element"}`
          : `F\xF6r stor(t): f\xF6rv\xE4ntat ${r.origin ?? "v\xE4rdet"} att ha ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `F\xF6r lite(t): f\xF6rv\xE4ntade ${r.origin ?? "v\xE4rdet"} att ha ${o}${r.minimum.toString()} ${a.unit}`
          : `F\xF6r lite(t): f\xF6rv\xE4ntade ${r.origin ?? "v\xE4rdet"} att ha ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Ogiltig str\xE4ng: m\xE5ste b\xF6rja med "${o.prefix}"`
          : o.format === "ends_with"
            ? `Ogiltig str\xE4ng: m\xE5ste sluta med "${o.suffix}"`
            : o.format === "includes"
              ? `Ogiltig str\xE4ng: m\xE5ste inneh\xE5lla "${o.includes}"`
              : o.format === "regex"
                ? `Ogiltig str\xE4ng: m\xE5ste matcha m\xF6nstret "${o.pattern}"`
                : `Ogiltig(t) ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Ogiltigt tal: m\xE5ste vara en multipel av ${r.divisor}`;
      case "unrecognized_keys":
        return `${r.keys.length > 1 ? "Ok\xE4nda nycklar" : "Ok\xE4nd nyckel"}: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `Ogiltig nyckel i ${r.origin ?? "v\xE4rdet"}`;
      case "invalid_union":
        return "Ogiltig input";
      case "invalid_element":
        return `Ogiltigt v\xE4rde i ${r.origin ?? "v\xE4rdet"}`;
      default:
        return "Ogiltig input";
    }
  };
};
function Eh() {
  return { localeError: y2() };
}
var b2 = () => {
  let e = {
    string: {
      unit: "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
    },
    file: {
      unit: "\u0BAA\u0BC8\u0B9F\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
    },
    array: {
      unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
    },
    set: {
      unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
    },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r)
            ? "\u0B8E\u0BA3\u0BCD \u0B85\u0BB2\u0BCD\u0BB2\u0BBE\u0BA4\u0BA4\u0BC1"
            : "\u0B8E\u0BA3\u0BCD";
        case "object": {
          if (Array.isArray(r)) return "\u0B85\u0BA3\u0BBF";
          if (r === null) return "\u0BB5\u0BC6\u0BB1\u0BC1\u0BAE\u0BC8";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1",
      email:
        "\u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BCD \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u0BA4\u0BC7\u0BA4\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
      date: "ISO \u0BA4\u0BC7\u0BA4\u0BBF",
      time: "ISO \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
      duration: "ISO \u0B95\u0BBE\u0BB2 \u0B85\u0BB3\u0BB5\u0BC1",
      ipv4: "IPv4 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
      ipv6: "IPv6 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
      cidrv4: "IPv4 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
      cidrv6: "IPv6 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
      base64: "base64-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
      base64url: "base64url-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
      json_string: "JSON \u0B9A\u0BB0\u0BAE\u0BCD",
      e164: "E.164 \u0B8E\u0BA3\u0BCD",
      jwt: "JWT",
      template_literal: "input",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${r.expected}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${N(r.values[0])}`
          : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BAE\u0BCD: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${D(r.values, "|")} \u0B87\u0BB2\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BC1`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${r.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${o}${r.maximum.toString()} ${a.unit ?? "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD"} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
          : `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${r.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${o}${r.maximum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${r.origin} ${o}${r.minimum.toString()} ${a.unit} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
          : `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${r.origin} ${o}${r.minimum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${o.prefix}" \u0B87\u0BB2\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
          : o.format === "ends_with"
            ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${o.suffix}" \u0B87\u0BB2\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0B9F\u0BC8\u0BAF \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
            : o.format === "includes"
              ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${o.includes}" \u0B90 \u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
              : o.format === "regex"
                ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: ${o.pattern} \u0BAE\u0BC1\u0BB1\u0BC8\u0BAA\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B9F\u0BA9\u0BCD \u0BAA\u0BCA\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B8E\u0BA3\u0BCD: ${r.divisor} \u0B87\u0BA9\u0BCD \u0BAA\u0BB2\u0BAE\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      case "unrecognized_keys":
        return `\u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BAF\u0BBE\u0BA4 \u0BB5\u0BBF\u0B9A\u0BC8${r.keys.length > 1 ? "\u0B95\u0BB3\u0BCD" : ""}: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `${r.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0B9A\u0BC8`;
      case "invalid_union":
        return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
      case "invalid_element":
        return `${r.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1`;
      default:
        return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
    }
  };
};
function Th() {
  return { localeError: b2() };
}
var w2 = () => {
  let e = {
    string: {
      unit: "\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
    },
    file: {
      unit: "\u0E44\u0E1A\u0E15\u0E4C",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
    },
    array: {
      unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
    },
    set: {
      unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
    },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r)
            ? "\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02 (NaN)"
            : "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02";
        case "object": {
          if (Array.isArray(r))
            return "\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E23\u0E22\u0E4C (Array)";
          if (r === null)
            return "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32 (null)";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex:
        "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
      email:
        "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25",
      url: "URL",
      emoji: "\u0E2D\u0E34\u0E42\u0E21\u0E08\u0E34",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
      date: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E1A\u0E1A ISO",
      time: "\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
      duration:
        "\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
      ipv4: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv4",
      ipv6: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv6",
      cidrv4: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv4",
      cidrv6: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv6",
      base64:
        "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64",
      base64url:
        "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A URL",
      json_string:
        "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A JSON",
      e164: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 (E.164)",
      jwt: "\u0E42\u0E17\u0E40\u0E04\u0E19 JWT",
      template_literal:
        "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${r.expected} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u0E04\u0E48\u0E32\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${N(r.values[0])}`
          : `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19 ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive
            ? "\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19"
            : "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32",
          a = t(r.origin);
        return a
          ? `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${r.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${r.maximum.toString()} ${a.unit ?? "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"}`
          : `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${r.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive
            ? "\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22"
            : "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32",
          a = t(r.origin);
        return a
          ? `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${r.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${r.minimum.toString()} ${a.unit}`
          : `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${r.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E02\u0E36\u0E49\u0E19\u0E15\u0E49\u0E19\u0E14\u0E49\u0E27\u0E22 "${o.prefix}"`
          : o.format === "ends_with"
            ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E25\u0E07\u0E17\u0E49\u0E32\u0E22\u0E14\u0E49\u0E27\u0E22 "${o.suffix}"`
            : o.format === "includes"
              ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35 "${o.includes}" \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21`
              : o.format === "regex"
                ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14 ${o.pattern}`
                : `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E32\u0E23\u0E14\u0E49\u0E27\u0E22 ${r.divisor} \u0E44\u0E14\u0E49\u0E25\u0E07\u0E15\u0E31\u0E27`;
      case "unrecognized_keys":
        return `\u0E1E\u0E1A\u0E04\u0E35\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `\u0E04\u0E35\u0E22\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${r.origin}`;
      case "invalid_union":
        return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E22\u0E39\u0E40\u0E19\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49";
      case "invalid_element":
        return `\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${r.origin}`;
      default:
        return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07";
    }
  };
};
function kh() {
  return { localeError: w2() };
}
var S2 = (e) => {
    let t = typeof e;
    switch (t) {
      case "number":
        return Number.isNaN(e) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(e)) return "array";
        if (e === null) return "null";
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
          return e.constructor.name;
      }
    }
    return t;
  },
  x2 = () => {
    let e = {
      string: { unit: "karakter", verb: "olmal\u0131" },
      file: { unit: "bayt", verb: "olmal\u0131" },
      array: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
      set: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
    };
    function t(i) {
      return e[i] ?? null;
    }
    let n = {
      regex: "girdi",
      email: "e-posta adresi",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO tarih ve saat",
      date: "ISO tarih",
      time: "ISO saat",
      duration: "ISO s\xFCre",
      ipv4: "IPv4 adresi",
      ipv6: "IPv6 adresi",
      cidrv4: "IPv4 aral\u0131\u011F\u0131",
      cidrv6: "IPv6 aral\u0131\u011F\u0131",
      base64: "base64 ile \u015Fifrelenmi\u015F metin",
      base64url: "base64url ile \u015Fifrelenmi\u015F metin",
      json_string: "JSON dizesi",
      e164: "E.164 say\u0131s\u0131",
      jwt: "JWT",
      template_literal: "\u015Eablon dizesi",
    };
    return (i) => {
      switch (i.code) {
        case "invalid_type":
          return `Ge\xE7ersiz de\u011Fer: beklenen ${i.expected}, al\u0131nan ${S2(i.input)}`;
        case "invalid_value":
          return i.values.length === 1
            ? `Ge\xE7ersiz de\u011Fer: beklenen ${N(i.values[0])}`
            : `Ge\xE7ersiz se\xE7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: ${D(i.values, "|")}`;
        case "too_big": {
          let r = i.inclusive ? "<=" : "<",
            o = t(i.origin);
          return o
            ? `\xC7ok b\xFCy\xFCk: beklenen ${i.origin ?? "de\u011Fer"} ${r}${i.maximum.toString()} ${o.unit ?? "\xF6\u011Fe"}`
            : `\xC7ok b\xFCy\xFCk: beklenen ${i.origin ?? "de\u011Fer"} ${r}${i.maximum.toString()}`;
        }
        case "too_small": {
          let r = i.inclusive ? ">=" : ">",
            o = t(i.origin);
          return o
            ? `\xC7ok k\xFC\xE7\xFCk: beklenen ${i.origin} ${r}${i.minimum.toString()} ${o.unit}`
            : `\xC7ok k\xFC\xE7\xFCk: beklenen ${i.origin} ${r}${i.minimum.toString()}`;
        }
        case "invalid_format": {
          let r = i;
          return r.format === "starts_with"
            ? `Ge\xE7ersiz metin: "${r.prefix}" ile ba\u015Flamal\u0131`
            : r.format === "ends_with"
              ? `Ge\xE7ersiz metin: "${r.suffix}" ile bitmeli`
              : r.format === "includes"
                ? `Ge\xE7ersiz metin: "${r.includes}" i\xE7ermeli`
                : r.format === "regex"
                  ? `Ge\xE7ersiz metin: ${r.pattern} desenine uymal\u0131`
                  : `Ge\xE7ersiz ${n[r.format] ?? i.format}`;
        }
        case "not_multiple_of":
          return `Ge\xE7ersiz say\u0131: ${i.divisor} ile tam b\xF6l\xFCnebilmeli`;
        case "unrecognized_keys":
          return `Tan\u0131nmayan anahtar${i.keys.length > 1 ? "lar" : ""}: ${D(i.keys, ", ")}`;
        case "invalid_key":
          return `${i.origin} i\xE7inde ge\xE7ersiz anahtar`;
        case "invalid_union":
          return "Ge\xE7ersiz de\u011Fer";
        case "invalid_element":
          return `${i.origin} i\xE7inde ge\xE7ersiz de\u011Fer`;
        default:
          return "Ge\xE7ersiz de\u011Fer";
      }
    };
  };
function Ih() {
  return { localeError: x2() };
}
var D2 = () => {
  let e = {
    string: {
      unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
    },
    file: {
      unit: "\u0431\u0430\u0439\u0442\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
    },
    array: {
      unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
    },
    set: {
      unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
    },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "\u0447\u0438\u0441\u043B\u043E";
        case "object": {
          if (Array.isArray(r)) return "\u043C\u0430\u0441\u0438\u0432";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
      email:
        "\u0430\u0434\u0440\u0435\u0441\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438",
      url: "URL",
      emoji: "\u0435\u043C\u043E\u0434\u0437\u0456",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "\u0434\u0430\u0442\u0430 \u0442\u0430 \u0447\u0430\u0441 ISO",
      date: "\u0434\u0430\u0442\u0430 ISO",
      time: "\u0447\u0430\u0441 ISO",
      duration:
        "\u0442\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C ISO",
      ipv4: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv4",
      ipv6: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv6",
      cidrv4: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv4",
      cidrv6: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv6",
      base64:
        "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64",
      base64url:
        "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64url",
      json_string: "\u0440\u044F\u0434\u043E\u043A JSON",
      e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
      jwt: "JWT",
      template_literal:
        "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${r.expected}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${N(r.values[0])}`
          : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u043E\u043F\u0446\u0456\u044F: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u0434\u043D\u0435 \u0437 ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${r.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} ${a.verb} ${o}${r.maximum.toString()} ${a.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432"}`
          : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${r.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} \u0431\u0443\u0434\u0435 ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${r.origin} ${a.verb} ${o}${r.minimum.toString()} ${a.unit}`
          : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${r.origin} \u0431\u0443\u0434\u0435 ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438\u0441\u044F \u0437 "${o.prefix}"`
          : o.format === "ends_with"
            ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430 "${o.suffix}"`
            : o.format === "includes"
              ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043C\u0456\u0441\u0442\u0438\u0442\u0438 "${o.includes}"`
              : o.format === "regex"
                ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${o.pattern}`
                : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E: \u043F\u043E\u0432\u0438\u043D\u043D\u043E \u0431\u0443\u0442\u0438 \u043A\u0440\u0430\u0442\u043D\u0438\u043C ${r.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u043D\u0438\u0439 \u043A\u043B\u044E\u0447${r.keys.length > 1 ? "\u0456" : ""}: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u043A\u043B\u044E\u0447 \u0443 ${r.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
      case "invalid_element":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0443 ${r.origin}`;
      default:
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
    }
  };
};
function Ph() {
  return { localeError: D2() };
}
var A2 = () => {
  let e = {
    string: {
      unit: "\u062D\u0631\u0648\u0641",
      verb: "\u06C1\u0648\u0646\u0627",
    },
    file: {
      unit: "\u0628\u0627\u0626\u0679\u0633",
      verb: "\u06C1\u0648\u0646\u0627",
    },
    array: {
      unit: "\u0622\u0626\u0679\u0645\u0632",
      verb: "\u06C1\u0648\u0646\u0627",
    },
    set: {
      unit: "\u0622\u0626\u0679\u0645\u0632",
      verb: "\u06C1\u0648\u0646\u0627",
    },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "\u0646\u0645\u0628\u0631";
        case "object": {
          if (Array.isArray(r)) return "\u0622\u0631\u06D2";
          if (r === null) return "\u0646\u0644";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u0627\u0646 \u067E\u0679",
      email:
        "\u0627\u06CC \u0645\u06CC\u0644 \u0627\u06CC\u0688\u0631\u06CC\u0633",
      url: "\u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644",
      emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
      uuid: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      uuidv4:
        "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 4",
      uuidv6:
        "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 6",
      nanoid: "\u0646\u06CC\u0646\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      guid: "\u062C\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      cuid: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      cuid2: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC 2",
      ulid: "\u06CC\u0648 \u0627\u06CC\u0644 \u0622\u0626\u06CC \u0688\u06CC",
      xid: "\u0627\u06CC\u06A9\u0633 \u0622\u0626\u06CC \u0688\u06CC",
      ksuid:
        "\u06A9\u06D2 \u0627\u06CC\u0633 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      datetime:
        "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0688\u06CC\u0679 \u0679\u0627\u0626\u0645",
      date: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u062A\u0627\u0631\u06CC\u062E",
      time: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0648\u0642\u062A",
      duration:
        "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0645\u062F\u062A",
      ipv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0627\u06CC\u0688\u0631\u06CC\u0633",
      ipv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0627\u06CC\u0688\u0631\u06CC\u0633",
      cidrv4:
        "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0631\u06CC\u0646\u062C",
      cidrv6:
        "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0631\u06CC\u0646\u062C",
      base64:
        "\u0628\u06CC\u0633 64 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
      base64url:
        "\u0628\u06CC\u0633 64 \u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
      json_string:
        "\u062C\u06D2 \u0627\u06CC\u0633 \u0627\u0648 \u0627\u06CC\u0646 \u0633\u0679\u0631\u0646\u06AF",
      e164: "\u0627\u06CC 164 \u0646\u0645\u0628\u0631",
      jwt: "\u062C\u06D2 \u0688\u0628\u0644\u06CC\u0648 \u0679\u06CC",
      template_literal: "\u0627\u0646 \u067E\u0679",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${r.expected} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${n(r.input)} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${N(r.values[0])} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`
          : `\u063A\u0644\u0637 \u0622\u067E\u0634\u0646: ${D(r.values, "|")} \u0645\u06CC\u06BA \u0633\u06D2 \u0627\u06CC\u06A9 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `\u0628\u06C1\u062A \u0628\u0691\u0627: ${r.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u06D2 ${o}${r.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0627\u0635\u0631"} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`
          : `\u0628\u06C1\u062A \u0628\u0691\u0627: ${r.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u0627 ${o}${r.maximum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${r.origin} \u06A9\u06D2 ${o}${r.minimum.toString()} ${a.unit} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`
          : `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${r.origin} \u06A9\u0627 ${o}${r.minimum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${o.prefix}" \u0633\u06D2 \u0634\u0631\u0648\u0639 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
          : o.format === "ends_with"
            ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${o.suffix}" \u067E\u0631 \u062E\u062A\u0645 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
            : o.format === "includes"
              ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${o.includes}" \u0634\u0627\u0645\u0644 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
              : o.format === "regex"
                ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: \u067E\u06CC\u0679\u0631\u0646 ${o.pattern} \u0633\u06D2 \u0645\u06CC\u0686 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
                : `\u063A\u0644\u0637 ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u063A\u0644\u0637 \u0646\u0645\u0628\u0631: ${r.divisor} \u06A9\u0627 \u0645\u0636\u0627\u0639\u0641 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
      case "unrecognized_keys":
        return `\u063A\u06CC\u0631 \u062A\u0633\u0644\u06CC\u0645 \u0634\u062F\u06C1 \u06A9\u06CC${r.keys.length > 1 ? "\u0632" : ""}: ${D(r.keys, "\u060C ")}`;
      case "invalid_key":
        return `${r.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u06A9\u06CC`;
      case "invalid_union":
        return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
      case "invalid_element":
        return `${r.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u0648\u06CC\u0644\u06CC\u0648`;
      default:
        return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
    }
  };
};
function $h() {
  return { localeError: A2() };
}
var E2 = () => {
  let e = {
    string: { unit: "k\xFD t\u1EF1", verb: "c\xF3" },
    file: { unit: "byte", verb: "c\xF3" },
    array: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
    set: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "s\u1ED1";
        case "object": {
          if (Array.isArray(r)) return "m\u1EA3ng";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u0111\u1EA7u v\xE0o",
      email: "\u0111\u1ECBa ch\u1EC9 email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ng\xE0y gi\u1EDD ISO",
      date: "ng\xE0y ISO",
      time: "gi\u1EDD ISO",
      duration: "kho\u1EA3ng th\u1EDDi gian ISO",
      ipv4: "\u0111\u1ECBa ch\u1EC9 IPv4",
      ipv6: "\u0111\u1ECBa ch\u1EC9 IPv6",
      cidrv4: "d\u1EA3i IPv4",
      cidrv6: "d\u1EA3i IPv6",
      base64: "chu\u1ED7i m\xE3 h\xF3a base64",
      base64url: "chu\u1ED7i m\xE3 h\xF3a base64url",
      json_string: "chu\u1ED7i JSON",
      e164: "s\u1ED1 E.164",
      jwt: "JWT",
      template_literal: "\u0111\u1EA7u v\xE0o",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${r.expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${N(r.values[0])}`
          : `T\xF9y ch\u1ECDn kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\xE1c gi\xE1 tr\u1ECB ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${r.origin ?? "gi\xE1 tr\u1ECB"} ${a.verb} ${o}${r.maximum.toString()} ${a.unit ?? "ph\u1EA7n t\u1EED"}`
          : `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${r.origin ?? "gi\xE1 tr\u1ECB"} ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${r.origin} ${a.verb} ${o}${r.minimum.toString()} ${a.unit}`
          : `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${r.origin} ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng "${o.prefix}"`
          : o.format === "ends_with"
            ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i k\u1EBFt th\xFAc b\u1EB1ng "${o.suffix}"`
            : o.format === "includes"
              ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i bao g\u1ED3m "${o.includes}"`
              : o.format === "regex"
                ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i kh\u1EDBp v\u1EDBi m\u1EABu ${o.pattern}`
                : `${i[o.format] ?? r.format} kh\xF4ng h\u1EE3p l\u1EC7`;
      }
      case "not_multiple_of":
        return `S\u1ED1 kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i l\xE0 b\u1ED9i s\u1ED1 c\u1EE7a ${r.divisor}`;
      case "unrecognized_keys":
        return `Kh\xF3a kh\xF4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `Kh\xF3a kh\xF4ng h\u1EE3p l\u1EC7 trong ${r.origin}`;
      case "invalid_union":
        return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
      case "invalid_element":
        return `Gi\xE1 tr\u1ECB kh\xF4ng h\u1EE3p l\u1EC7 trong ${r.origin}`;
      default:
        return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
    }
  };
};
function zh() {
  return { localeError: E2() };
}
var T2 = () => {
  let e = {
    string: { unit: "\u5B57\u7B26", verb: "\u5305\u542B" },
    file: { unit: "\u5B57\u8282", verb: "\u5305\u542B" },
    array: { unit: "\u9879", verb: "\u5305\u542B" },
    set: { unit: "\u9879", verb: "\u5305\u542B" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "\u975E\u6570\u5B57(NaN)" : "\u6570\u5B57";
        case "object": {
          if (Array.isArray(r)) return "\u6570\u7EC4";
          if (r === null) return "\u7A7A\u503C(null)";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u8F93\u5165",
      email: "\u7535\u5B50\u90AE\u4EF6",
      url: "URL",
      emoji: "\u8868\u60C5\u7B26\u53F7",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO\u65E5\u671F\u65F6\u95F4",
      date: "ISO\u65E5\u671F",
      time: "ISO\u65F6\u95F4",
      duration: "ISO\u65F6\u957F",
      ipv4: "IPv4\u5730\u5740",
      ipv6: "IPv6\u5730\u5740",
      cidrv4: "IPv4\u7F51\u6BB5",
      cidrv6: "IPv6\u7F51\u6BB5",
      base64: "base64\u7F16\u7801\u5B57\u7B26\u4E32",
      base64url: "base64url\u7F16\u7801\u5B57\u7B26\u4E32",
      json_string: "JSON\u5B57\u7B26\u4E32",
      e164: "E.164\u53F7\u7801",
      jwt: "JWT",
      template_literal: "\u8F93\u5165",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${r.expected}\uFF0C\u5B9E\u9645\u63A5\u6536 ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${N(r.values[0])}`
          : `\u65E0\u6548\u9009\u9879\uFF1A\u671F\u671B\u4EE5\u4E0B\u4E4B\u4E00 ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${r.origin ?? "\u503C"} ${o}${r.maximum.toString()} ${a.unit ?? "\u4E2A\u5143\u7D20"}`
          : `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${r.origin ?? "\u503C"} ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${r.origin} ${o}${r.minimum.toString()} ${a.unit}`
          : `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${r.origin} ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${o.prefix}" \u5F00\u5934`
          : o.format === "ends_with"
            ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${o.suffix}" \u7ED3\u5C3E`
            : o.format === "includes"
              ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u5305\u542B "${o.includes}"`
              : o.format === "regex"
                ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u6EE1\u8DB3\u6B63\u5219\u8868\u8FBE\u5F0F ${o.pattern}`
                : `\u65E0\u6548${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u65E0\u6548\u6570\u5B57\uFF1A\u5FC5\u987B\u662F ${r.divisor} \u7684\u500D\u6570`;
      case "unrecognized_keys":
        return `\u51FA\u73B0\u672A\u77E5\u7684\u952E(key): ${D(r.keys, ", ")}`;
      case "invalid_key":
        return `${r.origin} \u4E2D\u7684\u952E(key)\u65E0\u6548`;
      case "invalid_union":
        return "\u65E0\u6548\u8F93\u5165";
      case "invalid_element":
        return `${r.origin} \u4E2D\u5305\u542B\u65E0\u6548\u503C(value)`;
      default:
        return "\u65E0\u6548\u8F93\u5165";
    }
  };
};
function Oh() {
  return { localeError: T2() };
}
var k2 = () => {
  let e = {
    string: { unit: "\u5B57\u5143", verb: "\u64C1\u6709" },
    file: { unit: "\u4F4D\u5143\u7D44", verb: "\u64C1\u6709" },
    array: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
    set: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(r)) return "array";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u8F38\u5165",
      email: "\u90F5\u4EF6\u5730\u5740",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u65E5\u671F\u6642\u9593",
      date: "ISO \u65E5\u671F",
      time: "ISO \u6642\u9593",
      duration: "ISO \u671F\u9593",
      ipv4: "IPv4 \u4F4D\u5740",
      ipv6: "IPv6 \u4F4D\u5740",
      cidrv4: "IPv4 \u7BC4\u570D",
      cidrv6: "IPv6 \u7BC4\u570D",
      base64: "base64 \u7DE8\u78BC\u5B57\u4E32",
      base64url: "base64url \u7DE8\u78BC\u5B57\u4E32",
      json_string: "JSON \u5B57\u4E32",
      e164: "E.164 \u6578\u503C",
      jwt: "JWT",
      template_literal: "\u8F38\u5165",
    };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${r.expected}\uFF0C\u4F46\u6536\u5230 ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${N(r.values[0])}`
          : `\u7121\u6548\u7684\u9078\u9805\uFF1A\u9810\u671F\u70BA\u4EE5\u4E0B\u5176\u4E2D\u4E4B\u4E00 ${D(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${r.origin ?? "\u503C"} \u61C9\u70BA ${o}${r.maximum.toString()} ${a.unit ?? "\u500B\u5143\u7D20"}`
          : `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${r.origin ?? "\u503C"} \u61C9\u70BA ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${r.origin} \u61C9\u70BA ${o}${r.minimum.toString()} ${a.unit}`
          : `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${r.origin} \u61C9\u70BA ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${o.prefix}" \u958B\u982D`
          : o.format === "ends_with"
            ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${o.suffix}" \u7D50\u5C3E`
            : o.format === "includes"
              ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u5305\u542B "${o.includes}"`
              : o.format === "regex"
                ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u7B26\u5408\u683C\u5F0F ${o.pattern}`
                : `\u7121\u6548\u7684 ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u7121\u6548\u7684\u6578\u5B57\uFF1A\u5FC5\u9808\u70BA ${r.divisor} \u7684\u500D\u6578`;
      case "unrecognized_keys":
        return `\u7121\u6CD5\u8B58\u5225\u7684\u9375\u503C${r.keys.length > 1 ? "\u5011" : ""}\uFF1A${D(r.keys, "\u3001")}`;
      case "invalid_key":
        return `${r.origin} \u4E2D\u6709\u7121\u6548\u7684\u9375\u503C`;
      case "invalid_union":
        return "\u7121\u6548\u7684\u8F38\u5165\u503C";
      case "invalid_element":
        return `${r.origin} \u4E2D\u6709\u7121\u6548\u7684\u503C`;
      default:
        return "\u7121\u6548\u7684\u8F38\u5165\u503C";
    }
  };
};
function Rh() {
  return { localeError: k2() };
}
var qo = Symbol("ZodOutput"),
  Ho = Symbol("ZodInput"),
  Lr = class {
    constructor() {
      ((this._map = new WeakMap()), (this._idmap = new Map()));
    }
    add(t, ...n) {
      let i = n[0];
      if ((this._map.set(t, i), i && typeof i == "object" && "id" in i)) {
        if (this._idmap.has(i.id))
          throw new Error(`ID ${i.id} already exists in the registry`);
        this._idmap.set(i.id, t);
      }
      return this;
    }
    remove(t) {
      return (this._map.delete(t), this);
    }
    get(t) {
      let n = t._zod.parent;
      if (n) {
        let i = { ...(this.get(n) ?? {}) };
        return (delete i.id, { ...i, ...this._map.get(t) });
      }
      return this._map.get(t);
    }
    has(t) {
      return this._map.has(t);
    }
  };
function ri() {
  return new Lr();
}
var tt = ri();
function zc(e, t) {
  return new e({ type: "string", ...k(t) });
}
function Oc(e, t) {
  return new e({ type: "string", coerce: !0, ...k(t) });
}
function Zo(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function ni(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Go(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Wo(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...k(t),
  });
}
function Qo(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...k(t),
  });
}
function Ko(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...k(t),
  });
}
function Jo(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Yo(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Xo(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function ea(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function ta(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function ra(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function na(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function ia(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function oa(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function aa(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function sa(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function ua(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function la(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function ca(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function da(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function ma(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Rc(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...k(t),
  });
}
function Nc(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...k(t),
  });
}
function Mc(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...k(t),
  });
}
function Cc(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...k(t),
  });
}
function Uc(e, t) {
  return new e({ type: "number", checks: [], ...k(t) });
}
function Fc(e, t) {
  return new e({ type: "number", coerce: !0, checks: [], ...k(t) });
}
function jc(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...k(t),
  });
}
function Lc(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float32",
    ...k(t),
  });
}
function Bc(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float64",
    ...k(t),
  });
}
function Vc(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "int32",
    ...k(t),
  });
}
function qc(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "uint32",
    ...k(t),
  });
}
function Hc(e, t) {
  return new e({ type: "boolean", ...k(t) });
}
function Zc(e, t) {
  return new e({ type: "boolean", coerce: !0, ...k(t) });
}
function Gc(e, t) {
  return new e({ type: "bigint", ...k(t) });
}
function Wc(e, t) {
  return new e({ type: "bigint", coerce: !0, ...k(t) });
}
function Qc(e, t) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "int64",
    ...k(t),
  });
}
function Kc(e, t) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "uint64",
    ...k(t),
  });
}
function Jc(e, t) {
  return new e({ type: "symbol", ...k(t) });
}
function Yc(e, t) {
  return new e({ type: "undefined", ...k(t) });
}
function Xc(e, t) {
  return new e({ type: "null", ...k(t) });
}
function ed(e) {
  return new e({ type: "any" });
}
function Br(e) {
  return new e({ type: "unknown" });
}
function td(e, t) {
  return new e({ type: "never", ...k(t) });
}
function rd(e, t) {
  return new e({ type: "void", ...k(t) });
}
function nd(e, t) {
  return new e({ type: "date", ...k(t) });
}
function id(e, t) {
  return new e({ type: "date", coerce: !0, ...k(t) });
}
function od(e, t) {
  return new e({ type: "nan", ...k(t) });
}
function st(e, t) {
  return new Mo({ check: "less_than", ...k(t), value: e, inclusive: !1 });
}
function We(e, t) {
  return new Mo({ check: "less_than", ...k(t), value: e, inclusive: !0 });
}
function ut(e, t) {
  return new Co({ check: "greater_than", ...k(t), value: e, inclusive: !1 });
}
function Re(e, t) {
  return new Co({ check: "greater_than", ...k(t), value: e, inclusive: !0 });
}
function pa(e) {
  return ut(0, e);
}
function _a(e) {
  return st(0, e);
}
function fa(e) {
  return We(0, e);
}
function ha(e) {
  return Re(0, e);
}
function Vt(e, t) {
  return new cl({ check: "multiple_of", ...k(t), value: e });
}
function nr(e, t) {
  return new pl({ check: "max_size", ...k(t), maximum: e });
}
function qt(e, t) {
  return new _l({ check: "min_size", ...k(t), minimum: e });
}
function Vr(e, t) {
  return new fl({ check: "size_equals", ...k(t), size: e });
}
function ir(e, t) {
  return new hl({ check: "max_length", ...k(t), maximum: e });
}
function kt(e, t) {
  return new gl({ check: "min_length", ...k(t), minimum: e });
}
function or(e, t) {
  return new vl({ check: "length_equals", ...k(t), length: e });
}
function qr(e, t) {
  return new yl({
    check: "string_format",
    format: "regex",
    ...k(t),
    pattern: e,
  });
}
function Hr(e) {
  return new bl({ check: "string_format", format: "lowercase", ...k(e) });
}
function Zr(e) {
  return new wl({ check: "string_format", format: "uppercase", ...k(e) });
}
function Gr(e, t) {
  return new Sl({
    check: "string_format",
    format: "includes",
    ...k(t),
    includes: e,
  });
}
function Wr(e, t) {
  return new xl({
    check: "string_format",
    format: "starts_with",
    ...k(t),
    prefix: e,
  });
}
function Qr(e, t) {
  return new Dl({
    check: "string_format",
    format: "ends_with",
    ...k(t),
    suffix: e,
  });
}
function ga(e, t, n) {
  return new Al({ check: "property", property: e, schema: t, ...k(n) });
}
function Kr(e, t) {
  return new El({ check: "mime_type", mime: e, ...k(t) });
}
function lt(e) {
  return new Tl({ check: "overwrite", tx: e });
}
function Jr(e) {
  return lt((t) => t.normalize(e));
}
function Yr() {
  return lt((e) => e.trim());
}
function Xr() {
  return lt((e) => e.toLowerCase());
}
function en() {
  return lt((e) => e.toUpperCase());
}
function ii(e, t, n) {
  return new e({ type: "array", element: t, ...k(n) });
}
function I2(e, t, n) {
  return new e({ type: "union", options: t, ...k(n) });
}
function P2(e, t, n, i) {
  return new e({ type: "union", options: n, discriminator: t, ...k(i) });
}
function $2(e, t, n) {
  return new e({ type: "intersection", left: t, right: n });
}
function ad(e, t, n, i) {
  let r = n instanceof q,
    o = r ? i : n,
    a = r ? n : null;
  return new e({ type: "tuple", items: t, rest: a, ...k(o) });
}
function z2(e, t, n, i) {
  return new e({ type: "record", keyType: t, valueType: n, ...k(i) });
}
function O2(e, t, n, i) {
  return new e({ type: "map", keyType: t, valueType: n, ...k(i) });
}
function R2(e, t, n) {
  return new e({ type: "set", valueType: t, ...k(n) });
}
function N2(e, t, n) {
  let i = Array.isArray(t) ? Object.fromEntries(t.map((r) => [r, r])) : t;
  return new e({ type: "enum", entries: i, ...k(n) });
}
function M2(e, t, n) {
  return new e({ type: "enum", entries: t, ...k(n) });
}
function C2(e, t, n) {
  return new e({
    type: "literal",
    values: Array.isArray(t) ? t : [t],
    ...k(n),
  });
}
function sd(e, t) {
  return new e({ type: "file", ...k(t) });
}
function U2(e, t) {
  return new e({ type: "transform", transform: t });
}
function F2(e, t) {
  return new e({ type: "optional", innerType: t });
}
function j2(e, t) {
  return new e({ type: "nullable", innerType: t });
}
function L2(e, t, n) {
  return new e({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof n == "function" ? n() : n;
    },
  });
}
function B2(e, t, n) {
  return new e({ type: "nonoptional", innerType: t, ...k(n) });
}
function V2(e, t) {
  return new e({ type: "success", innerType: t });
}
function q2(e, t, n) {
  return new e({
    type: "catch",
    innerType: t,
    catchValue: typeof n == "function" ? n : () => n,
  });
}
function H2(e, t, n) {
  return new e({ type: "pipe", in: t, out: n });
}
function Z2(e, t) {
  return new e({ type: "readonly", innerType: t });
}
function G2(e, t, n) {
  return new e({ type: "template_literal", parts: t, ...k(n) });
}
function W2(e, t) {
  return new e({ type: "lazy", getter: t });
}
function Q2(e, t) {
  return new e({ type: "promise", innerType: t });
}
function ud(e, t, n) {
  let i = k(n);
  return (
    i.abort ?? (i.abort = !0),
    new e({ type: "custom", check: "custom", fn: t, ...i })
  );
}
function ld(e, t, n) {
  return new e({ type: "custom", check: "custom", fn: t, ...k(n) });
}
function cd(e, t) {
  let { case: n, error: i, truthy: r, falsy: o } = k(t),
    a = new Set(r ?? ["true", "1", "yes", "on", "y", "enabled"]),
    u = new Set(o ?? ["false", "0", "no", "off", "n", "disabled"]),
    s = e.Pipe ?? ti,
    l = e.Boolean ?? Xn,
    c = e.Unknown ?? Bt,
    d = new c({
      type: "unknown",
      checks: [
        {
          _zod: {
            check: (f) => {
              if (typeof f.value == "string") {
                let _ = f.value;
                (n !== "sensitive" && (_ = _.toLowerCase()),
                  a.has(_)
                    ? (f.value = !0)
                    : u.has(_)
                      ? (f.value = !1)
                      : f.issues.push({
                          code: "invalid_value",
                          expected: "stringbool",
                          values: [...a, ...u],
                          input: f.value,
                          inst: d,
                        }));
              } else
                f.issues.push({
                  code: "invalid_type",
                  expected: "string",
                  input: f.value,
                });
            },
            def: { check: "custom" },
            onattach: [],
          },
        },
      ],
      error: i,
    });
  return new s({
    type: "pipe",
    in: d,
    out: new l({ type: "boolean", error: i }),
    error: i,
  });
}
var va = class {
  constructor(t) {
    ((this._def = t), (this.def = t));
  }
  implement(t) {
    if (typeof t != "function")
      throw new Error("implement() must be called with a function");
    let n = (...i) => {
      let r = this._def.input
        ? Po(this._def.input, i, void 0, { callee: n })
        : i;
      if (!Array.isArray(r))
        throw new Error(
          "Invalid arguments schema: not an array or tuple schema.",
        );
      let o = t(...r);
      return this._def.output
        ? Po(this._def.output, o, void 0, { callee: n })
        : o;
    };
    return n;
  }
  implementAsync(t) {
    if (typeof t != "function")
      throw new Error("implement() must be called with a function");
    let n = async (...i) => {
      let r = this._def.input
        ? await zo(this._def.input, i, void 0, { callee: n })
        : i;
      if (!Array.isArray(r))
        throw new Error(
          "Invalid arguments schema: not an array or tuple schema.",
        );
      let o = await t(...r);
      return this._def.output
        ? zo(this._def.output, o, void 0, { callee: n })
        : o;
    };
    return n;
  }
  input(...t) {
    let n = this.constructor;
    return Array.isArray(t[0])
      ? new n({
          type: "function",
          input: new rr({ type: "tuple", items: t[0], rest: t[1] }),
          output: this._def.output,
        })
      : new n({ type: "function", input: t[0], output: this._def.output });
  }
  output(t) {
    let n = this.constructor;
    return new n({ type: "function", input: this._def.input, output: t });
  }
};
function ya(e) {
  return new va({
    type: "function",
    input: Array.isArray(e?.input)
      ? ad(rr, e?.input)
      : (e?.input ?? ii(ei, Br(Bt))),
    output: e?.output ?? Br(Bt),
  });
}
var oi = class {
  constructor(t) {
    ((this.counter = 0),
      (this.metadataRegistry = t?.metadata ?? tt),
      (this.target = t?.target ?? "draft-2020-12"),
      (this.unrepresentable = t?.unrepresentable ?? "throw"),
      (this.override = t?.override ?? (() => {})),
      (this.io = t?.io ?? "output"),
      (this.seen = new Map()));
  }
  process(t, n = { path: [], schemaPath: [] }) {
    var i;
    let r = t._zod.def,
      o = {
        guid: "uuid",
        url: "uri",
        datetime: "date-time",
        json_string: "json-string",
        regex: "",
      },
      a = this.seen.get(t);
    if (a)
      return (
        a.count++,
        n.schemaPath.includes(t) && (a.cycle = n.path),
        a.schema
      );
    let u = { schema: {}, count: 1, cycle: void 0 };
    (this.seen.set(t, u),
      t._zod.toJSONSchema && (u.schema = t._zod.toJSONSchema()));
    let s = { ...n, schemaPath: [...n.schemaPath, t], path: n.path },
      l = t._zod.parent;
    if (l) ((u.ref = l), this.process(l, s), (this.seen.get(l).isParent = !0));
    else {
      let f = u.schema;
      switch (r.type) {
        case "string": {
          let _ = f;
          _.type = "string";
          let {
            minimum: g,
            maximum: m,
            format: A,
            patterns: I,
            contentEncoding: w,
          } = t._zod.bag;
          if (
            (typeof g == "number" && (_.minLength = g),
            typeof m == "number" && (_.maxLength = m),
            A && ((_.format = o[A] ?? A), _.format === "" && delete _.format),
            w && (_.contentEncoding = w),
            I && I.size > 0)
          ) {
            let y = [...I];
            y.length === 1
              ? (_.pattern = y[0].source)
              : y.length > 1 &&
                (u.schema.allOf = [
                  ...y.map((b) => ({
                    ...(this.target === "draft-7" ? { type: "string" } : {}),
                    pattern: b.source,
                  })),
                ]);
          }
          break;
        }
        case "number": {
          let _ = f,
            {
              minimum: g,
              maximum: m,
              format: A,
              multipleOf: I,
              exclusiveMaximum: w,
              exclusiveMinimum: y,
            } = t._zod.bag;
          (typeof A == "string" && A.includes("int")
            ? (_.type = "integer")
            : (_.type = "number"),
            typeof y == "number" && (_.exclusiveMinimum = y),
            typeof g == "number" &&
              ((_.minimum = g),
              typeof y == "number" &&
                (y >= g ? delete _.minimum : delete _.exclusiveMinimum)),
            typeof w == "number" && (_.exclusiveMaximum = w),
            typeof m == "number" &&
              ((_.maximum = m),
              typeof w == "number" &&
                (w <= m ? delete _.maximum : delete _.exclusiveMaximum)),
            typeof I == "number" && (_.multipleOf = I));
          break;
        }
        case "boolean": {
          let _ = f;
          _.type = "boolean";
          break;
        }
        case "bigint": {
          if (this.unrepresentable === "throw")
            throw new Error("BigInt cannot be represented in JSON Schema");
          break;
        }
        case "symbol": {
          if (this.unrepresentable === "throw")
            throw new Error("Symbols cannot be represented in JSON Schema");
          break;
        }
        case "undefined": {
          let _ = f;
          _.type = "null";
          break;
        }
        case "null": {
          f.type = "null";
          break;
        }
        case "any":
          break;
        case "unknown":
          break;
        case "never": {
          f.not = {};
          break;
        }
        case "void": {
          if (this.unrepresentable === "throw")
            throw new Error("Void cannot be represented in JSON Schema");
          break;
        }
        case "date": {
          if (this.unrepresentable === "throw")
            throw new Error("Date cannot be represented in JSON Schema");
          break;
        }
        case "array": {
          let _ = f,
            { minimum: g, maximum: m } = t._zod.bag;
          (typeof g == "number" && (_.minItems = g),
            typeof m == "number" && (_.maxItems = m),
            (_.type = "array"),
            (_.items = this.process(r.element, {
              ...s,
              path: [...s.path, "items"],
            })));
          break;
        }
        case "object": {
          let _ = f;
          ((_.type = "object"), (_.properties = {}));
          let g = r.shape;
          for (let I in g)
            _.properties[I] = this.process(g[I], {
              ...s,
              path: [...s.path, "properties", I],
            });
          let m = new Set(Object.keys(g)),
            A = new Set(
              [...m].filter((I) => {
                let w = r.shape[I]._zod;
                return this.io === "input"
                  ? w.optin === void 0
                  : w.optout === void 0;
              }),
            );
          (A.size > 0 && (_.required = Array.from(A)),
            r.catchall?._zod.def.type === "never"
              ? (_.additionalProperties = !1)
              : r.catchall
                ? r.catchall &&
                  (_.additionalProperties = this.process(r.catchall, {
                    ...s,
                    path: [...s.path, "additionalProperties"],
                  }))
                : this.io === "output" && (_.additionalProperties = !1));
          break;
        }
        case "union": {
          let _ = f;
          _.anyOf = r.options.map((g, m) =>
            this.process(g, { ...s, path: [...s.path, "anyOf", m] }),
          );
          break;
        }
        case "intersection": {
          let _ = f,
            g = this.process(r.left, { ...s, path: [...s.path, "allOf", 0] }),
            m = this.process(r.right, { ...s, path: [...s.path, "allOf", 1] }),
            A = (w) => "allOf" in w && Object.keys(w).length === 1,
            I = [...(A(g) ? g.allOf : [g]), ...(A(m) ? m.allOf : [m])];
          _.allOf = I;
          break;
        }
        case "tuple": {
          let _ = f;
          _.type = "array";
          let g = r.items.map((I, w) =>
            this.process(I, { ...s, path: [...s.path, "prefixItems", w] }),
          );
          if (
            (this.target === "draft-2020-12"
              ? (_.prefixItems = g)
              : (_.items = g),
            r.rest)
          ) {
            let I = this.process(r.rest, { ...s, path: [...s.path, "items"] });
            this.target === "draft-2020-12"
              ? (_.items = I)
              : (_.additionalItems = I);
          }
          r.rest &&
            (_.items = this.process(r.rest, {
              ...s,
              path: [...s.path, "items"],
            }));
          let { minimum: m, maximum: A } = t._zod.bag;
          (typeof m == "number" && (_.minItems = m),
            typeof A == "number" && (_.maxItems = A));
          break;
        }
        case "record": {
          let _ = f;
          ((_.type = "object"),
            (_.propertyNames = this.process(r.keyType, {
              ...s,
              path: [...s.path, "propertyNames"],
            })),
            (_.additionalProperties = this.process(r.valueType, {
              ...s,
              path: [...s.path, "additionalProperties"],
            })));
          break;
        }
        case "map": {
          if (this.unrepresentable === "throw")
            throw new Error("Map cannot be represented in JSON Schema");
          break;
        }
        case "set": {
          if (this.unrepresentable === "throw")
            throw new Error("Set cannot be represented in JSON Schema");
          break;
        }
        case "enum": {
          let _ = f,
            g = Vn(r.entries);
          (g.every((m) => typeof m == "number") && (_.type = "number"),
            g.every((m) => typeof m == "string") && (_.type = "string"),
            (_.enum = g));
          break;
        }
        case "literal": {
          let _ = f,
            g = [];
          for (let m of r.values)
            if (m === void 0) {
              if (this.unrepresentable === "throw")
                throw new Error(
                  "Literal `undefined` cannot be represented in JSON Schema",
                );
            } else if (typeof m == "bigint") {
              if (this.unrepresentable === "throw")
                throw new Error(
                  "BigInt literals cannot be represented in JSON Schema",
                );
              g.push(Number(m));
            } else g.push(m);
          if (g.length !== 0)
            if (g.length === 1) {
              let m = g[0];
              ((_.type = m === null ? "null" : typeof m), (_.const = m));
            } else
              (g.every((m) => typeof m == "number") && (_.type = "number"),
                g.every((m) => typeof m == "string") && (_.type = "string"),
                g.every((m) => typeof m == "boolean") && (_.type = "string"),
                g.every((m) => m === null) && (_.type = "null"),
                (_.enum = g));
          break;
        }
        case "file": {
          let _ = f,
            g = { type: "string", format: "binary", contentEncoding: "binary" },
            { minimum: m, maximum: A, mime: I } = t._zod.bag;
          (m !== void 0 && (g.minLength = m),
            A !== void 0 && (g.maxLength = A),
            I
              ? I.length === 1
                ? ((g.contentMediaType = I[0]), Object.assign(_, g))
                : (_.anyOf = I.map((w) => ({ ...g, contentMediaType: w })))
              : Object.assign(_, g));
          break;
        }
        case "transform": {
          if (this.unrepresentable === "throw")
            throw new Error("Transforms cannot be represented in JSON Schema");
          break;
        }
        case "nullable": {
          let _ = this.process(r.innerType, s);
          f.anyOf = [_, { type: "null" }];
          break;
        }
        case "nonoptional": {
          (this.process(r.innerType, s), (u.ref = r.innerType));
          break;
        }
        case "success": {
          let _ = f;
          _.type = "boolean";
          break;
        }
        case "default": {
          (this.process(r.innerType, s),
            (u.ref = r.innerType),
            (f.default = r.defaultValue));
          break;
        }
        case "prefault": {
          (this.process(r.innerType, s),
            (u.ref = r.innerType),
            this.io === "input" && (f._prefault = r.defaultValue));
          break;
        }
        case "catch": {
          (this.process(r.innerType, s), (u.ref = r.innerType));
          let _;
          try {
            _ = r.catchValue(void 0);
          } catch {
            throw new Error(
              "Dynamic catch values are not supported in JSON Schema",
            );
          }
          f.default = _;
          break;
        }
        case "nan": {
          if (this.unrepresentable === "throw")
            throw new Error("NaN cannot be represented in JSON Schema");
          break;
        }
        case "template_literal": {
          let _ = f,
            g = t._zod.pattern;
          if (!g) throw new Error("Pattern not found in template literal");
          ((_.type = "string"), (_.pattern = g.source));
          break;
        }
        case "pipe": {
          let _ =
            this.io === "input"
              ? r.in._zod.def.type === "transform"
                ? r.out
                : r.in
              : r.out;
          (this.process(_, s), (u.ref = _));
          break;
        }
        case "readonly": {
          (this.process(r.innerType, s),
            (u.ref = r.innerType),
            (f.readOnly = !0));
          break;
        }
        case "promise": {
          (this.process(r.innerType, s), (u.ref = r.innerType));
          break;
        }
        case "optional": {
          (this.process(r.innerType, s), (u.ref = r.innerType));
          break;
        }
        case "lazy": {
          let _ = t._zod.innerType;
          (this.process(_, s), (u.ref = _));
          break;
        }
        case "custom": {
          if (this.unrepresentable === "throw")
            throw new Error(
              "Custom types cannot be represented in JSON Schema",
            );
          break;
        }
        default:
      }
    }
    let c = this.metadataRegistry.get(t);
    return (
      c && Object.assign(u.schema, c),
      this.io === "input" &&
        ve(t) &&
        (delete u.schema.examples, delete u.schema.default),
      this.io === "input" &&
        u.schema._prefault &&
        ((i = u.schema).default ?? (i.default = u.schema._prefault)),
      delete u.schema._prefault,
      this.seen.get(t).schema
    );
  }
  emit(t, n) {
    let i = {
        cycles: n?.cycles ?? "ref",
        reused: n?.reused ?? "inline",
        external: n?.external ?? void 0,
      },
      r = this.seen.get(t);
    if (!r) throw new Error("Unprocessed schema. This is a bug in Zod.");
    let o = (c) => {
        let d = this.target === "draft-2020-12" ? "$defs" : "definitions";
        if (i.external) {
          let m = i.external.registry.get(c[0])?.id;
          if (m) return { ref: i.external.uri(m) };
          let A = c[1].defId ?? c[1].schema.id ?? `schema${this.counter++}`;
          return (
            (c[1].defId = A),
            { defId: A, ref: `${i.external.uri("__shared")}#/${d}/${A}` }
          );
        }
        if (c[1] === r) return { ref: "#" };
        let _ = `#/${d}/`,
          g = c[1].schema.id ?? `__schema${this.counter++}`;
        return { defId: g, ref: _ + g };
      },
      a = (c) => {
        if (c[1].schema.$ref) return;
        let d = c[1],
          { ref: f, defId: _ } = o(c);
        ((d.def = { ...d.schema }), _ && (d.defId = _));
        let g = d.schema;
        for (let m in g) delete g[m];
        g.$ref = f;
      };
    for (let c of this.seen.entries()) {
      let d = c[1];
      if (t === c[0]) {
        a(c);
        continue;
      }
      if (i.external) {
        let _ = i.external.registry.get(c[0])?.id;
        if (t !== c[0] && _) {
          a(c);
          continue;
        }
      }
      if (this.metadataRegistry.get(c[0])?.id) {
        a(c);
        continue;
      }
      if (d.cycle) {
        if (i.cycles === "throw")
          throw new Error(`Cycle detected: #/${d.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        i.cycles === "ref" && a(c);
        continue;
      }
      if (d.count > 1 && i.reused === "ref") {
        a(c);
        continue;
      }
    }
    let u = (c, d) => {
      let f = this.seen.get(c),
        _ = f.def ?? f.schema,
        g = { ..._ };
      if (f.ref === null) return;
      let m = f.ref;
      if (((f.ref = null), m)) {
        u(m, d);
        let A = this.seen.get(m).schema;
        A.$ref && d.target === "draft-7"
          ? ((_.allOf = _.allOf ?? []), _.allOf.push(A))
          : (Object.assign(_, A), Object.assign(_, g));
      }
      f.isParent || this.override({ zodSchema: c, jsonSchema: _ });
    };
    for (let c of [...this.seen.entries()].reverse())
      u(c[0], { target: this.target });
    let s = {};
    (this.target === "draft-2020-12"
      ? (s.$schema = "https://json-schema.org/draft/2020-12/schema")
      : this.target === "draft-7"
        ? (s.$schema = "http://json-schema.org/draft-07/schema#")
        : console.warn(`Invalid target: ${this.target}`),
      Object.assign(s, r.def));
    let l = i.external?.defs ?? {};
    for (let c of this.seen.entries()) {
      let d = c[1];
      d.def && d.defId && (l[d.defId] = d.def);
    }
    !i.external &&
      Object.keys(l).length > 0 &&
      (this.target === "draft-2020-12" ? (s.$defs = l) : (s.definitions = l));
    try {
      return JSON.parse(JSON.stringify(s));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
};
function ba(e, t) {
  if (e instanceof Lr) {
    let i = new oi(t),
      r = {};
    for (let u of e._idmap.entries()) {
      let [s, l] = u;
      i.process(l);
    }
    let o = {},
      a = { registry: e, uri: t?.uri || ((u) => u), defs: r };
    for (let u of e._idmap.entries()) {
      let [s, l] = u;
      o[s] = i.emit(l, { ...t, external: a });
    }
    if (Object.keys(r).length > 0) {
      let u = i.target === "draft-2020-12" ? "$defs" : "definitions";
      o.__shared = { [u]: r };
    }
    return { schemas: o };
  }
  let n = new oi(t);
  return (n.process(e), n.emit(e, t));
}
function ve(e, t) {
  let n = t ?? { seen: new Set() };
  if (n.seen.has(e)) return !1;
  n.seen.add(e);
  let r = e._zod.def;
  switch (r.type) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "date":
    case "symbol":
    case "undefined":
    case "null":
    case "any":
    case "unknown":
    case "never":
    case "void":
    case "literal":
    case "enum":
    case "nan":
    case "file":
    case "template_literal":
      return !1;
    case "array":
      return ve(r.element, n);
    case "object": {
      for (let o in r.shape) if (ve(r.shape[o], n)) return !0;
      return !1;
    }
    case "union": {
      for (let o of r.options) if (ve(o, n)) return !0;
      return !1;
    }
    case "intersection":
      return ve(r.left, n) || ve(r.right, n);
    case "tuple": {
      for (let o of r.items) if (ve(o, n)) return !0;
      return !!(r.rest && ve(r.rest, n));
    }
    case "record":
      return ve(r.keyType, n) || ve(r.valueType, n);
    case "map":
      return ve(r.keyType, n) || ve(r.valueType, n);
    case "set":
      return ve(r.valueType, n);
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return ve(r.innerType, n);
    case "lazy":
      return ve(r.getter(), n);
    case "default":
      return ve(r.innerType, n);
    case "prefault":
      return ve(r.innerType, n);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return ve(r.in, n) || ve(r.out, n);
    case "success":
      return !1;
    case "catch":
      return !1;
    default:
  }
  throw new Error(`Unknown schema type: ${r.type}`);
}
var Nh = {};
var ci = {};
et(ci, {
  ZodISODate: () => si,
  ZodISODateTime: () => ai,
  ZodISODuration: () => li,
  ZodISOTime: () => ui,
  date: () => md,
  datetime: () => dd,
  duration: () => _d,
  time: () => pd,
});
var ai = v("ZodISODateTime", (e, t) => {
  (Ll.init(e, t), oe.init(e, t));
});
function dd(e) {
  return Rc(ai, e);
}
var si = v("ZodISODate", (e, t) => {
  (Bl.init(e, t), oe.init(e, t));
});
function md(e) {
  return Nc(si, e);
}
var ui = v("ZodISOTime", (e, t) => {
  (Vl.init(e, t), oe.init(e, t));
});
function pd(e) {
  return Mc(ui, e);
}
var li = v("ZodISODuration", (e, t) => {
  (ql.init(e, t), oe.init(e, t));
});
function _d(e) {
  return Cc(li, e);
}
var Ch = (e, t) => {
    (Kn.init(e, t),
      (e.name = "ZodError"),
      Object.defineProperties(e, {
        format: { value: (n) => Ur(e, n) },
        flatten: { value: (n) => Cr(e, n) },
        addIssue: { value: (n) => e.issues.push(n) },
        addIssues: { value: (n) => e.issues.push(...n) },
        isEmpty: {
          get() {
            return e.issues.length === 0;
          },
        },
      }));
  },
  Uh = v("ZodError", Ch),
  ar = v("ZodError", Ch, { Parent: Error });
var wa = Io(ar),
  Sa = $o(ar),
  xa = Oo(ar),
  Da = Ro(ar);
var Q = v(
    "ZodType",
    (e, t) => (
      q.init(e, t),
      (e.def = t),
      Object.defineProperty(e, "_def", { value: t }),
      (e.check = (...n) =>
        e.clone({
          ...t,
          checks: [
            ...(t.checks ?? []),
            ...n.map((i) =>
              typeof i == "function"
                ? { _zod: { check: i, def: { check: "custom" }, onattach: [] } }
                : i,
            ),
          ],
        })),
      (e.clone = (n, i) => qe(e, n, i)),
      (e.brand = () => e),
      (e.register = (n, i) => (n.add(e, i), e)),
      (e.parse = (n, i) => wa(e, n, i, { callee: e.parse })),
      (e.safeParse = (n, i) => xa(e, n, i)),
      (e.parseAsync = async (n, i) => Sa(e, n, i, { callee: e.parseAsync })),
      (e.safeParseAsync = async (n, i) => Da(e, n, i)),
      (e.spa = e.safeParseAsync),
      (e.refine = (n, i) => e.check(em(n, i))),
      (e.superRefine = (n) => e.check(tm(n))),
      (e.overwrite = (n) => e.check(lt(n))),
      (e.optional = () => pi(e)),
      (e.nullable = () => _i(e)),
      (e.nullish = () => pi(_i(e))),
      (e.nonoptional = (n) => Bd(e, n)),
      (e.array = () => Ga(e)),
      (e.or = (n) => bi([e, n])),
      (e.and = (n) => Td(e, n)),
      (e.transform = (n) => fi(e, Ka(n))),
      (e.default = (n) => Fd(e, n)),
      (e.prefault = (n) => Ld(e, n)),
      (e.catch = (n) => Hd(e, n)),
      (e.pipe = (n) => fi(e, n)),
      (e.readonly = () => Wd(e)),
      (e.describe = (n) => {
        let i = e.clone();
        return (tt.add(i, { description: n }), i);
      }),
      Object.defineProperty(e, "description", {
        get() {
          return tt.get(e)?.description;
        },
        configurable: !0,
      }),
      (e.meta = (...n) => {
        if (n.length === 0) return tt.get(e);
        let i = e.clone();
        return (tt.add(i, n[0]), i);
      }),
      (e.isOptional = () => e.safeParse(void 0).success),
      (e.isNullable = () => e.safeParse(null).success),
      e
    ),
  ),
  Ta = v("_ZodString", (e, t) => {
    (Yn.init(e, t), Q.init(e, t));
    let n = e._zod.bag;
    ((e.format = n.format ?? null),
      (e.minLength = n.minimum ?? null),
      (e.maxLength = n.maximum ?? null),
      (e.regex = (...i) => e.check(qr(...i))),
      (e.includes = (...i) => e.check(Gr(...i))),
      (e.startsWith = (...i) => e.check(Wr(...i))),
      (e.endsWith = (...i) => e.check(Qr(...i))),
      (e.min = (...i) => e.check(kt(...i))),
      (e.max = (...i) => e.check(ir(...i))),
      (e.length = (...i) => e.check(or(...i))),
      (e.nonempty = (...i) => e.check(kt(1, ...i))),
      (e.lowercase = (i) => e.check(Hr(i))),
      (e.uppercase = (i) => e.check(Zr(i))),
      (e.trim = () => e.check(Yr())),
      (e.normalize = (...i) => e.check(Jr(...i))),
      (e.toLowerCase = () => e.check(Xr())),
      (e.toUpperCase = () => e.check(en())));
  }),
  hi = v("ZodString", (e, t) => {
    (Yn.init(e, t),
      Ta.init(e, t),
      (e.email = (n) => e.check(Zo(ka, n))),
      (e.url = (n) => e.check(Jo(Ia, n))),
      (e.jwt = (n) => e.check(ma(qa, n))),
      (e.emoji = (n) => e.check(Yo(Pa, n))),
      (e.guid = (n) => e.check(ni(di, n))),
      (e.uuid = (n) => e.check(Go(dt, n))),
      (e.uuidv4 = (n) => e.check(Wo(dt, n))),
      (e.uuidv6 = (n) => e.check(Qo(dt, n))),
      (e.uuidv7 = (n) => e.check(Ko(dt, n))),
      (e.nanoid = (n) => e.check(Xo($a, n))),
      (e.guid = (n) => e.check(ni(di, n))),
      (e.cuid = (n) => e.check(ea(za, n))),
      (e.cuid2 = (n) => e.check(ta(Oa, n))),
      (e.ulid = (n) => e.check(ra(Ra, n))),
      (e.base64 = (n) => e.check(la(La, n))),
      (e.base64url = (n) => e.check(ca(Ba, n))),
      (e.xid = (n) => e.check(na(Na, n))),
      (e.ksuid = (n) => e.check(ia(Ma, n))),
      (e.ipv4 = (n) => e.check(oa(Ca, n))),
      (e.ipv6 = (n) => e.check(aa(Ua, n))),
      (e.cidrv4 = (n) => e.check(sa(Fa, n))),
      (e.cidrv6 = (n) => e.check(ua(ja, n))),
      (e.e164 = (n) => e.check(da(Va, n))),
      (e.datetime = (n) => e.check(dd(n))),
      (e.date = (n) => e.check(md(n))),
      (e.time = (n) => e.check(pd(n))),
      (e.duration = (n) => e.check(_d(n))));
  });
function Aa(e) {
  return zc(hi, e);
}
var oe = v("ZodStringFormat", (e, t) => {
    (ie.init(e, t), Ta.init(e, t));
  }),
  ka = v("ZodEmail", (e, t) => {
    (zl.init(e, t), oe.init(e, t));
  });
function Fh(e) {
  return Zo(ka, e);
}
var di = v("ZodGUID", (e, t) => {
  (Pl.init(e, t), oe.init(e, t));
});
function jh(e) {
  return ni(di, e);
}
var dt = v("ZodUUID", (e, t) => {
  ($l.init(e, t), oe.init(e, t));
});
function Lh(e) {
  return Go(dt, e);
}
function Bh(e) {
  return Wo(dt, e);
}
function Vh(e) {
  return Qo(dt, e);
}
function qh(e) {
  return Ko(dt, e);
}
var Ia = v("ZodURL", (e, t) => {
  (Ol.init(e, t), oe.init(e, t));
});
function Hh(e) {
  return Jo(Ia, e);
}
var Pa = v("ZodEmoji", (e, t) => {
  (Rl.init(e, t), oe.init(e, t));
});
function Zh(e) {
  return Yo(Pa, e);
}
var $a = v("ZodNanoID", (e, t) => {
  (Nl.init(e, t), oe.init(e, t));
});
function Gh(e) {
  return Xo($a, e);
}
var za = v("ZodCUID", (e, t) => {
  (Ml.init(e, t), oe.init(e, t));
});
function Wh(e) {
  return ea(za, e);
}
var Oa = v("ZodCUID2", (e, t) => {
  (Cl.init(e, t), oe.init(e, t));
});
function Qh(e) {
  return ta(Oa, e);
}
var Ra = v("ZodULID", (e, t) => {
  (Ul.init(e, t), oe.init(e, t));
});
function Kh(e) {
  return ra(Ra, e);
}
var Na = v("ZodXID", (e, t) => {
  (Fl.init(e, t), oe.init(e, t));
});
function Jh(e) {
  return na(Na, e);
}
var Ma = v("ZodKSUID", (e, t) => {
  (jl.init(e, t), oe.init(e, t));
});
function Yh(e) {
  return ia(Ma, e);
}
var Ca = v("ZodIPv4", (e, t) => {
  (Hl.init(e, t), oe.init(e, t));
});
function Xh(e) {
  return oa(Ca, e);
}
var Ua = v("ZodIPv6", (e, t) => {
  (Zl.init(e, t), oe.init(e, t));
});
function eg(e) {
  return aa(Ua, e);
}
var Fa = v("ZodCIDRv4", (e, t) => {
  (Gl.init(e, t), oe.init(e, t));
});
function tg(e) {
  return sa(Fa, e);
}
var ja = v("ZodCIDRv6", (e, t) => {
  (Wl.init(e, t), oe.init(e, t));
});
function rg(e) {
  return ua(ja, e);
}
var La = v("ZodBase64", (e, t) => {
  (Kl.init(e, t), oe.init(e, t));
});
function ng(e) {
  return la(La, e);
}
var Ba = v("ZodBase64URL", (e, t) => {
  (Jl.init(e, t), oe.init(e, t));
});
function ig(e) {
  return ca(Ba, e);
}
var Va = v("ZodE164", (e, t) => {
  (Yl.init(e, t), oe.init(e, t));
});
function og(e) {
  return da(Va, e);
}
var qa = v("ZodJWT", (e, t) => {
  (Xl.init(e, t), oe.init(e, t));
});
function ag(e) {
  return ma(qa, e);
}
var rn = v("ZodNumber", (e, t) => {
  (jo.init(e, t),
    Q.init(e, t),
    (e.gt = (i, r) => e.check(ut(i, r))),
    (e.gte = (i, r) => e.check(Re(i, r))),
    (e.min = (i, r) => e.check(Re(i, r))),
    (e.lt = (i, r) => e.check(st(i, r))),
    (e.lte = (i, r) => e.check(We(i, r))),
    (e.max = (i, r) => e.check(We(i, r))),
    (e.int = (i) => e.check(Ea(i))),
    (e.safe = (i) => e.check(Ea(i))),
    (e.positive = (i) => e.check(ut(0, i))),
    (e.nonnegative = (i) => e.check(Re(0, i))),
    (e.negative = (i) => e.check(st(0, i))),
    (e.nonpositive = (i) => e.check(We(0, i))),
    (e.multipleOf = (i, r) => e.check(Vt(i, r))),
    (e.step = (i, r) => e.check(Vt(i, r))),
    (e.finite = () => e));
  let n = e._zod.bag;
  ((e.minValue =
    Math.max(
      n.minimum ?? Number.NEGATIVE_INFINITY,
      n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY,
    ) ?? null),
    (e.maxValue =
      Math.min(
        n.maximum ?? Number.POSITIVE_INFINITY,
        n.exclusiveMaximum ?? Number.POSITIVE_INFINITY,
      ) ?? null),
    (e.isInt =
      (n.format ?? "").includes("int") ||
      Number.isSafeInteger(n.multipleOf ?? 0.5)),
    (e.isFinite = !0),
    (e.format = n.format ?? null));
});
function fd(e) {
  return Uc(rn, e);
}
var sr = v("ZodNumberFormat", (e, t) => {
  (ec.init(e, t), rn.init(e, t));
});
function Ea(e) {
  return jc(sr, e);
}
function sg(e) {
  return Lc(sr, e);
}
function ug(e) {
  return Bc(sr, e);
}
function lg(e) {
  return Vc(sr, e);
}
function cg(e) {
  return qc(sr, e);
}
var nn = v("ZodBoolean", (e, t) => {
  (Xn.init(e, t), Q.init(e, t));
});
function hd(e) {
  return Hc(nn, e);
}
var on = v("ZodBigInt", (e, t) => {
  (Lo.init(e, t),
    Q.init(e, t),
    (e.gte = (i, r) => e.check(Re(i, r))),
    (e.min = (i, r) => e.check(Re(i, r))),
    (e.gt = (i, r) => e.check(ut(i, r))),
    (e.gte = (i, r) => e.check(Re(i, r))),
    (e.min = (i, r) => e.check(Re(i, r))),
    (e.lt = (i, r) => e.check(st(i, r))),
    (e.lte = (i, r) => e.check(We(i, r))),
    (e.max = (i, r) => e.check(We(i, r))),
    (e.positive = (i) => e.check(ut(BigInt(0), i))),
    (e.negative = (i) => e.check(st(BigInt(0), i))),
    (e.nonpositive = (i) => e.check(We(BigInt(0), i))),
    (e.nonnegative = (i) => e.check(Re(BigInt(0), i))),
    (e.multipleOf = (i, r) => e.check(Vt(i, r))));
  let n = e._zod.bag;
  ((e.minValue = n.minimum ?? null),
    (e.maxValue = n.maximum ?? null),
    (e.format = n.format ?? null));
});
function dg(e) {
  return Gc(on, e);
}
var Ha = v("ZodBigIntFormat", (e, t) => {
  (tc.init(e, t), on.init(e, t));
});
function mg(e) {
  return Qc(Ha, e);
}
function pg(e) {
  return Kc(Ha, e);
}
var gd = v("ZodSymbol", (e, t) => {
  (rc.init(e, t), Q.init(e, t));
});
function _g(e) {
  return Jc(gd, e);
}
var vd = v("ZodUndefined", (e, t) => {
  (nc.init(e, t), Q.init(e, t));
});
function fg(e) {
  return Yc(vd, e);
}
var yd = v("ZodNull", (e, t) => {
  (ic.init(e, t), Q.init(e, t));
});
function bd(e) {
  return Xc(yd, e);
}
var wd = v("ZodAny", (e, t) => {
  (oc.init(e, t), Q.init(e, t));
});
function hg() {
  return ed(wd);
}
var Za = v("ZodUnknown", (e, t) => {
  (Bt.init(e, t), Q.init(e, t));
});
function mi() {
  return Br(Za);
}
var Sd = v("ZodNever", (e, t) => {
  (ac.init(e, t), Q.init(e, t));
});
function gi(e) {
  return td(Sd, e);
}
var xd = v("ZodVoid", (e, t) => {
  (sc.init(e, t), Q.init(e, t));
});
function gg(e) {
  return rd(xd, e);
}
var vi = v("ZodDate", (e, t) => {
  (uc.init(e, t),
    Q.init(e, t),
    (e.min = (i, r) => e.check(Re(i, r))),
    (e.max = (i, r) => e.check(We(i, r))));
  let n = e._zod.bag;
  ((e.minDate = n.minimum ? new Date(n.minimum) : null),
    (e.maxDate = n.maximum ? new Date(n.maximum) : null));
});
function vg(e) {
  return nd(vi, e);
}
var Dd = v("ZodArray", (e, t) => {
  (ei.init(e, t),
    Q.init(e, t),
    (e.element = t.element),
    (e.min = (n, i) => e.check(kt(n, i))),
    (e.nonempty = (n) => e.check(kt(1, n))),
    (e.max = (n, i) => e.check(ir(n, i))),
    (e.length = (n, i) => e.check(or(n, i))),
    (e.unwrap = () => e.element));
});
function Ga(e, t) {
  return ii(Dd, e, t);
}
function yg(e) {
  let t = e._zod.def.shape;
  return Rd(Object.keys(t));
}
var yi = v("ZodObject", (e, t) => {
  (lc.init(e, t),
    Q.init(e, t),
    z.defineLazy(e, "shape", () =>
      Object.fromEntries(Object.entries(e._zod.def.shape)),
    ),
    (e.keyof = () => zd(Object.keys(e._zod.def.shape))),
    (e.catchall = (n) => e.clone({ ...e._zod.def, catchall: n })),
    (e.passthrough = () => e.clone({ ...e._zod.def, catchall: mi() })),
    (e.loose = () => e.clone({ ...e._zod.def, catchall: mi() })),
    (e.strict = () => e.clone({ ...e._zod.def, catchall: gi() })),
    (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
    (e.extend = (n) => z.extend(e, n)),
    (e.merge = (n) => z.merge(e, n)),
    (e.pick = (n) => z.pick(e, n)),
    (e.omit = (n) => z.omit(e, n)),
    (e.partial = (...n) => z.partial(Ja, e, n[0])),
    (e.required = (...n) => z.required(Ya, e, n[0])));
});
function bg(e, t) {
  let n = {
    type: "object",
    get shape() {
      return (z.assignProp(this, "shape", { ...e }), this.shape);
    },
    ...z.normalizeParams(t),
  };
  return new yi(n);
}
function wg(e, t) {
  return new yi({
    type: "object",
    get shape() {
      return (z.assignProp(this, "shape", { ...e }), this.shape);
    },
    catchall: gi(),
    ...z.normalizeParams(t),
  });
}
function Sg(e, t) {
  return new yi({
    type: "object",
    get shape() {
      return (z.assignProp(this, "shape", { ...e }), this.shape);
    },
    catchall: mi(),
    ...z.normalizeParams(t),
  });
}
var Wa = v("ZodUnion", (e, t) => {
  (Bo.init(e, t), Q.init(e, t), (e.options = t.options));
});
function bi(e, t) {
  return new Wa({ type: "union", options: e, ...z.normalizeParams(t) });
}
var Ad = v("ZodDiscriminatedUnion", (e, t) => {
  (Wa.init(e, t), cc.init(e, t));
});
function xg(e, t, n) {
  return new Ad({
    type: "union",
    options: t,
    discriminator: e,
    ...z.normalizeParams(n),
  });
}
var Ed = v("ZodIntersection", (e, t) => {
  (dc.init(e, t), Q.init(e, t));
});
function Td(e, t) {
  return new Ed({ type: "intersection", left: e, right: t });
}
var kd = v("ZodTuple", (e, t) => {
  (rr.init(e, t),
    Q.init(e, t),
    (e.rest = (n) => e.clone({ ...e._zod.def, rest: n })));
});
function Dg(e, t, n) {
  let i = t instanceof q,
    r = i ? n : t,
    o = i ? t : null;
  return new kd({ type: "tuple", items: e, rest: o, ...z.normalizeParams(r) });
}
var Qa = v("ZodRecord", (e, t) => {
  (mc.init(e, t),
    Q.init(e, t),
    (e.keyType = t.keyType),
    (e.valueType = t.valueType));
});
function Id(e, t, n) {
  return new Qa({
    type: "record",
    keyType: e,
    valueType: t,
    ...z.normalizeParams(n),
  });
}
function Ag(e, t, n) {
  return new Qa({
    type: "record",
    keyType: bi([e, gi()]),
    valueType: t,
    ...z.normalizeParams(n),
  });
}
var Pd = v("ZodMap", (e, t) => {
  (pc.init(e, t),
    Q.init(e, t),
    (e.keyType = t.keyType),
    (e.valueType = t.valueType));
});
function Eg(e, t, n) {
  return new Pd({
    type: "map",
    keyType: e,
    valueType: t,
    ...z.normalizeParams(n),
  });
}
var $d = v("ZodSet", (e, t) => {
  (_c.init(e, t),
    Q.init(e, t),
    (e.min = (...n) => e.check(qt(...n))),
    (e.nonempty = (n) => e.check(qt(1, n))),
    (e.max = (...n) => e.check(nr(...n))),
    (e.size = (...n) => e.check(Vr(...n))));
});
function Tg(e, t) {
  return new $d({ type: "set", valueType: e, ...z.normalizeParams(t) });
}
var tn = v("ZodEnum", (e, t) => {
  (fc.init(e, t),
    Q.init(e, t),
    (e.enum = t.entries),
    (e.options = Object.values(t.entries)));
  let n = new Set(Object.keys(t.entries));
  ((e.extract = (i, r) => {
    let o = {};
    for (let a of i)
      if (n.has(a)) o[a] = t.entries[a];
      else throw new Error(`Key ${a} not found in enum`);
    return new tn({ ...t, checks: [], ...z.normalizeParams(r), entries: o });
  }),
    (e.exclude = (i, r) => {
      let o = { ...t.entries };
      for (let a of i)
        if (n.has(a)) delete o[a];
        else throw new Error(`Key ${a} not found in enum`);
      return new tn({ ...t, checks: [], ...z.normalizeParams(r), entries: o });
    }));
});
function zd(e, t) {
  let n = Array.isArray(e) ? Object.fromEntries(e.map((i) => [i, i])) : e;
  return new tn({ type: "enum", entries: n, ...z.normalizeParams(t) });
}
function kg(e, t) {
  return new tn({ type: "enum", entries: e, ...z.normalizeParams(t) });
}
var Od = v("ZodLiteral", (e, t) => {
  (hc.init(e, t),
    Q.init(e, t),
    (e.values = new Set(t.values)),
    Object.defineProperty(e, "value", {
      get() {
        if (t.values.length > 1)
          throw new Error(
            "This schema contains multiple valid literal values. Use `.values` instead.",
          );
        return t.values[0];
      },
    }));
});
function Rd(e, t) {
  return new Od({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...z.normalizeParams(t),
  });
}
var Nd = v("ZodFile", (e, t) => {
  (gc.init(e, t),
    Q.init(e, t),
    (e.min = (n, i) => e.check(qt(n, i))),
    (e.max = (n, i) => e.check(nr(n, i))),
    (e.mime = (n, i) => e.check(Kr(Array.isArray(n) ? n : [n], i))));
});
function Ig(e) {
  return sd(Nd, e);
}
var Md = v("ZodTransform", (e, t) => {
  (vc.init(e, t),
    Q.init(e, t),
    (e._zod.parse = (n, i) => {
      n.addIssue = (o) => {
        if (typeof o == "string") n.issues.push(z.issue(o, n.value, t));
        else {
          let a = o;
          (a.fatal && (a.continue = !1),
            a.code ?? (a.code = "custom"),
            a.input ?? (a.input = n.value),
            a.inst ?? (a.inst = e),
            a.continue ?? (a.continue = !0),
            n.issues.push(z.issue(a)));
        }
      };
      let r = t.transform(n.value, n);
      return r instanceof Promise
        ? r.then((o) => ((n.value = o), n))
        : ((n.value = r), n);
    }));
});
function Ka(e) {
  return new Md({ type: "transform", transform: e });
}
var Ja = v("ZodOptional", (e, t) => {
  (yc.init(e, t), Q.init(e, t), (e.unwrap = () => e._zod.def.innerType));
});
function pi(e) {
  return new Ja({ type: "optional", innerType: e });
}
var Cd = v("ZodNullable", (e, t) => {
  (bc.init(e, t), Q.init(e, t), (e.unwrap = () => e._zod.def.innerType));
});
function _i(e) {
  return new Cd({ type: "nullable", innerType: e });
}
function Pg(e) {
  return pi(_i(e));
}
var Ud = v("ZodDefault", (e, t) => {
  (wc.init(e, t),
    Q.init(e, t),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeDefault = e.unwrap));
});
function Fd(e, t) {
  return new Ud({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : t;
    },
  });
}
var jd = v("ZodPrefault", (e, t) => {
  (Sc.init(e, t), Q.init(e, t), (e.unwrap = () => e._zod.def.innerType));
});
function Ld(e, t) {
  return new jd({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : t;
    },
  });
}
var Ya = v("ZodNonOptional", (e, t) => {
  (xc.init(e, t), Q.init(e, t), (e.unwrap = () => e._zod.def.innerType));
});
function Bd(e, t) {
  return new Ya({ type: "nonoptional", innerType: e, ...z.normalizeParams(t) });
}
var Vd = v("ZodSuccess", (e, t) => {
  (Dc.init(e, t), Q.init(e, t), (e.unwrap = () => e._zod.def.innerType));
});
function $g(e) {
  return new Vd({ type: "success", innerType: e });
}
var qd = v("ZodCatch", (e, t) => {
  (Ac.init(e, t),
    Q.init(e, t),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeCatch = e.unwrap));
});
function Hd(e, t) {
  return new qd({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t,
  });
}
var Zd = v("ZodNaN", (e, t) => {
  (Ec.init(e, t), Q.init(e, t));
});
function zg(e) {
  return od(Zd, e);
}
var Xa = v("ZodPipe", (e, t) => {
  (ti.init(e, t), Q.init(e, t), (e.in = t.in), (e.out = t.out));
});
function fi(e, t) {
  return new Xa({ type: "pipe", in: e, out: t });
}
var Gd = v("ZodReadonly", (e, t) => {
  (Tc.init(e, t), Q.init(e, t));
});
function Wd(e) {
  return new Gd({ type: "readonly", innerType: e });
}
var Qd = v("ZodTemplateLiteral", (e, t) => {
  (kc.init(e, t), Q.init(e, t));
});
function Og(e, t) {
  return new Qd({
    type: "template_literal",
    parts: e,
    ...z.normalizeParams(t),
  });
}
var Kd = v("ZodLazy", (e, t) => {
  (Pc.init(e, t), Q.init(e, t), (e.unwrap = () => e._zod.def.getter()));
});
function Jd(e) {
  return new Kd({ type: "lazy", getter: e });
}
var Yd = v("ZodPromise", (e, t) => {
  (Ic.init(e, t), Q.init(e, t), (e.unwrap = () => e._zod.def.innerType));
});
function Rg(e) {
  return new Yd({ type: "promise", innerType: e });
}
var wi = v("ZodCustom", (e, t) => {
  ($c.init(e, t), Q.init(e, t));
});
function Xd(e, t) {
  let n = new ce({ check: "custom", ...z.normalizeParams(t) });
  return ((n._zod.check = e), n);
}
function Ng(e, t) {
  return ud(wi, e ?? (() => !0), t);
}
function em(e, t = {}) {
  return ld(wi, e, t);
}
function tm(e, t) {
  let n = Xd(
    (i) => (
      (i.addIssue = (r) => {
        if (typeof r == "string")
          i.issues.push(z.issue(r, i.value, n._zod.def));
        else {
          let o = r;
          (o.fatal && (o.continue = !1),
            o.code ?? (o.code = "custom"),
            o.input ?? (o.input = i.value),
            o.inst ?? (o.inst = n),
            o.continue ?? (o.continue = !n._zod.def.abort),
            i.issues.push(z.issue(o)));
        }
      }),
      e(i.value, i)
    ),
    t,
  );
  return n;
}
function Mg(e, t = { error: `Input not instance of ${e.name}` }) {
  let n = new wi({
    type: "custom",
    check: "custom",
    fn: (i) => i instanceof e,
    abort: !0,
    ...z.normalizeParams(t),
  });
  return ((n._zod.bag.Class = e), n);
}
var Cg = (...e) => cd({ Pipe: Xa, Boolean: nn, Unknown: Za }, ...e);
function Ug(e) {
  let t = Jd(() => bi([Aa(e), fd(), hd(), bd(), Ga(t), Id(Aa(), t)]));
  return t;
}
function Fg(e, t) {
  return fi(Ka(e), t);
}
var jg = {
    invalid_type: "invalid_type",
    too_big: "too_big",
    too_small: "too_small",
    invalid_format: "invalid_format",
    not_multiple_of: "not_multiple_of",
    unrecognized_keys: "unrecognized_keys",
    invalid_union: "invalid_union",
    invalid_key: "invalid_key",
    invalid_element: "invalid_element",
    invalid_value: "invalid_value",
    custom: "custom",
  },
  Y2 = Object.freeze({ status: "aborted" }),
  Lg = Y2;
function Bg(e) {
  ue({ customError: e });
}
function Vg() {
  return ue().customError;
}
var es = {};
et(es, {
  bigint: () => rx,
  boolean: () => tx,
  date: () => nx,
  number: () => ex,
  string: () => X2,
});
function X2(e) {
  return Oc(hi, e);
}
function ex(e) {
  return Fc(rn, e);
}
function tx(e) {
  return Zc(nn, e);
}
function rx(e) {
  return Wc(on, e);
}
function nx(e) {
  return id(vi, e);
}
ue(Vo());
var qg = ts;
var ix = qg;
Pe();
Ie && ue({ jitless: !0 });
var Hg = [
    "ar",
    "bg",
    "ca",
    "co",
    "cs",
    "da",
    "de",
    "dsb",
    "el",
    "en",
    "es",
    "fa",
    "fr",
    "hsb",
    "hu",
    "id",
    "is",
    "it",
    "ja",
    "ko",
    "nb",
    "nl",
    "pl",
    "pt-BR",
    "ro",
    "ru",
    "sk",
    "sl",
    "sv",
    "tr",
    "uk",
    "zh-CN",
    "zh-TW",
  ],
  rs = [
    "appDesc",
    "restore_purchase_button",
    "get_premium_button",
    "back",
    "rm_notifications_all",
    "waiting_for_media",
    "nomedia_title",
    "nomedia_description",
    "nomedia_reload_button",
    "nomedia_reload_button_tooltip",
    "show_nomedia_button",
    "show_nomedia_button_tooltip",
    "setting_button_tooltip",
    "history_button_tooltip",
    "show_all_history_button",
    "complete_title",
    "hide_complete_button",
    "translate_button_tooltip",
    "help_button_tooltip",
    "open_source_tab_button_tooltip",
    "retry_download_button_tooltip",
    "delete_file_button_tooltip",
    "download_directory_button_tooltip",
    "clear_downloaded_tooltip",
    "show_in_popup_button_tooltip",
    "show_in_sidebar_button_tooltip",
    "video_not_playing_button_tooltip",
    "play",
    "warn_drm_tooltip",
    "version_title",
    "account_title",
    "one_hundred_downloads_title",
    "leave_review_description",
    "leave_review_button",
    "account_status",
    "account_status_premium",
    "free_account",
    "copy_to_clipboard",
    "my_account_button",
    "download_title",
    "show_notification",
    "max_parallel_downloads",
    "saveas_detected_warning",
    "change_saveas_setting",
    "download_directory_title",
    "download_directory_description",
    "change_browser_download_directory",
    "bad_download_subdirectory_warning",
    "download_subdirectory",
    "private_browsing_title",
    "private_browsing_warning",
    "private_browsing_notifications",
    "private_browsing_button",
    "throttle_youtube",
    "prefer_original_audio",
    "settings_history_title",
    "transient_history_description",
    "history_limit",
    "appearance_title",
    "theme_title",
    "theme_light",
    "theme_dark",
    "theme_system",
    "popup_size_title",
    "popup_size_small",
    "popup_size_medium",
    "popup_size_big",
    "font_size_title",
    "font_size_default",
    "font_size_large",
    "font_size_verylarge",
    "panel_position_title",
    "use_popup",
    "use_sidebar",
    "behavior_title",
    "controls_title",
    "show_in_context_menu",
    "restart_addon",
    "reset_settings",
    "prefered_quality",
    "prefered_quality_highest",
    "prefered_quality_1080p",
    "prefered_quality_720p",
    "prefered_quality_480p",
    "prefer_mkv",
    "preview_mode_title",
    "preview_mode_none",
    "preview_mode_video",
    "preview_mode_image",
    "media_discovered_ordering_title",
    "order_media_smart",
    "order_media_by_newest",
    "order_media_by_oldest",
    "history_title",
    "history_warning",
    "history_warning_2",
    "enable_history",
    "clear_history",
    "disable_history",
    "no_downloads_yet",
    "download_failed",
    "download_failed_description",
    "download_interrupted",
    "download_interrupted_description",
    "download_with_drm_failed_description",
    "no_youtube",
    "no_youtube_description",
    "no_youtube_description_2",
    "premium_required",
    "premium_yt_required_description",
    "premium_hls_required_description",
    "premium_all_required_description",
    "youtube_too_many_downloads",
    "youtube_too_many_downloads_description",
    "stop",
    "cancel",
    "copy_url",
    "always_copy_url",
    "download_button",
    "download_as_button_and_menu",
    "rename_short",
    "always_download_as_menu",
    "download_audio_button",
    "download_audio_and_video_menu",
    "download_audio_only_menu",
    "audio_only_for_this_website",
    "details",
    "report",
    "reporting",
    "reported_thankyou",
  ],
  rm = [
    "back",
    "header_help",
    "header_ask_question",
    "activate_title",
    "activate_pending",
    "activate_success",
    "activate_error",
    "activate_no_addon_found",
    "activate_no_method_found",
    "activate_help_me",
    "issue_title",
    "issue_submit",
    "issue_thank_you",
    "issue_enter_email",
    "issue_email_sent",
    "issue_or_digit",
    "issue_just_digit",
    "issue_i_have_a_code",
    "issue_i_have_a_key",
    "issue_key",
    "landing_text1",
    "landing_text2",
    "landing_text3",
    "landing_text4",
    "landing_install_for_google",
    "landing_install_for_mozilla",
    "landing_install_for_microsoft",
    "landing_feature1_title",
    "landing_feature1_description",
    "landing_feature2_title",
    "landing_feature2_description",
    "landing_feature3_title",
    "landing_feature3_description",
    "landing_feature4_title",
    "landing_feature4_description",
    "premium_hero1",
    "premium_hero2",
    "premium_hero3",
    "premium_supported_payment_methods",
    "premium_buy",
    "welcome_text",
    "welcome_pin_message",
  ];
var $I = new Set(Hg),
  ox = x.enum(rs),
  ax = x.enum(rm),
  Zg = x.map(ox, x.string()),
  Gg = x.map(ax, x.string()),
  zI = new Set(rs);
function nm(e) {
  return e.templateLiteral(["behaviour_hash_", e.number()]);
}
function im(e) {
  return e.templateLiteral(["domain_hash_", e.number()]);
}
function om(e) {
  return e.enum(["ERROR", "WARN", "HAPPY"]);
}
function Wg(e) {
  return e.strictObject({
    CARRY_GET_PARAM_WEBSITES: e.array(e.string()),
    STRIP_GET_PARAM_WEBSITES: e.array(e.string()),
    AUDIO_ONLY_WEBSITES: e.array(e.string()),
    DISABLE_PREVIEW_LOADING: e.array(e.string()),
    FIFO_DISCOVERED_WEBSITES: e.array(e.string()),
    FILTER_HTTP_M3U8_MEDIA: e.array(e.string()),
    CONVERT_MPD_URL_TO_M3U8: e.array(e.string()),
    BLOCK_MEDIA_DETECTION: e.array(e.string()),
  });
}
function am(e) {
  return e.enum(["no_cookies_no_vdata", "no_cookies_vdata", "cookies"]);
}
function Qg(e) {
  return Wg(e).keyof();
}
function ns(e) {
  return e.strictObject({
    player_id: e.string().optional(),
    media_scan_configuration: e.array(
      e.strictObject({
        client: e.enum([
          "IOS",
          "WEB",
          "MWEB",
          "ANDROID",
          "YTMUSIC",
          "YTMUSIC_ANDROID",
          "YTSTUDIO_ANDROID",
          "TV",
          "TV_SIMPLY",
          "TV_EMBEDDED",
          "YTKIDS",
          "WEB_EMBEDDED",
          "WEB_CREATOR",
          "ANDROID_VR",
        ]),
        implementation: am(e),
      }),
    ),
  });
}
function ux(e) {
  return e.strictObject({
    behaviour_hash: nm(e),
    domain_hash_set: e.array(im(e)),
  });
}
var Si = 1;
function lx(e) {
  return e.strictObject({
    schema_version: e.literal(Si),
    remote_notifications: e.array(
      e.strictObject({
        title: e.string(),
        description: e.string(),
        level: om(e),
        link_to: e.string().optional(),
      }),
    ),
    behaviours: e.strictObject({ gyt_scanner: ns(e), websites: Wg(e) }),
  });
}
function Kg(e) {
  return lx(e).extend({
    rules_revision: e.string(),
    behaviours: e.strictObject({
      gyt_scanner: ns(e),
      websites: e.array(ux(e)),
    }),
  });
}
Pe();
var dx = Si,
  Jg = `https://files.downloadhelper.net/${dx}/ruleset-${lp}-${Ye}.json`,
  Yg = nm(x),
  Xg = im(x),
  sm = Kg(x),
  ev = om(x),
  tv = ns(x),
  MI = am(x),
  CI = Qg(x);
var nv = x.templateLiteral(["notification_", x.string()]),
  mx = x.instanceof(URL),
  iv = x.object({
    type: x.literal("remote"),
    title: x.string(),
    details: x.string(),
    url: mx.optional(),
    level: ev,
  });
_r();
var ov = {
  schema_version: 1,
  remote_notifications: [],
  behaviours: {
    gyt_scanner: {
      player_id: "",
      media_scan_configuration: [
        { client: "ANDROID_VR", implementation: "no_cookies_no_vdata" },
        { client: "IOS", implementation: "no_cookies_no_vdata" },
        { client: "WEB", implementation: "no_cookies_vdata" },
        { client: "WEB_EMBEDDED", implementation: "no_cookies_vdata" },
        { client: "WEB", implementation: "cookies" },
        { client: "WEB_EMBEDDED", implementation: "cookies" },
      ],
    },
    websites: [
      {
        behaviour_hash: "behaviour_hash_154935787860009",
        domain_hash_set: ["domain_hash_6608573326002331"],
      },
      {
        behaviour_hash: "behaviour_hash_1315705546100808",
        domain_hash_set: ["domain_hash_726826014639917"],
      },
      {
        behaviour_hash: "behaviour_hash_5442823870738372",
        domain_hash_set: ["domain_hash_7071161895522280"],
      },
      {
        behaviour_hash: "behaviour_hash_5594683955913774",
        domain_hash_set: ["domain_hash_5134534004467113"],
      },
      {
        behaviour_hash: "behaviour_hash_169748210392549",
        domain_hash_set: [
          "domain_hash_8954482409440681",
          "domain_hash_7130661336534249",
          "domain_hash_8900746365645186",
          "domain_hash_5928169562036030",
          "domain_hash_7252627821995380",
          "domain_hash_3789434795510791",
        ],
      },
      {
        behaviour_hash: "behaviour_hash_4462004333852502",
        domain_hash_set: [
          "domain_hash_4457827731818674",
          "domain_hash_7301359081326091",
          "domain_hash_7252627821995380",
          "domain_hash_5349644781176809",
          "domain_hash_6145635700516446",
          "domain_hash_405123053181564",
        ],
      },
      {
        behaviour_hash: "behaviour_hash_1928834492410043",
        domain_hash_set: ["domain_hash_6432464261771654"],
      },
      {
        behaviour_hash: "behaviour_hash_2168192316009402",
        domain_hash_set: [],
      },
    ],
  },
  rules_revision: "10.2.53.2",
};
function av() {
  let e = sm.safeParse(ov);
  return e.error
    ? (console.error("FATAL: default ruleset is not valid"),
      {
        schema_version: Si,
        behaviours: {
          gyt_scanner: { media_scan_configuration: [] },
          websites: [],
        },
        remote_notifications: [],
        rules_revision: "",
      })
    : e.data;
}
async function _x(e) {
  let t = await Or(e, { cache: "no-store" });
  if (t.isOk()) {
    let n = await t.value.json(),
      i = sm.safeParse(n);
    return i.error ? R(`invalid json received ${i.error}`) : B(i.data);
  } else return R(`Bad fetch for remote config ${t.error}`);
}
function um(e) {
  let t = new Map();
  for (let n of e.remote_notifications)
    t.set(`notification_${je(n.description)}`, {
      type: "remote",
      details: n.description,
      level: n.level,
      title: n.title,
      url: he(n?.link_to).unwrapOr(void 0),
    });
  return t;
}
function lm(e) {
  let t = new Map(),
    n = e.behaviours.websites;
  for (let i of n) t.set(i.behaviour_hash, new Set(i.domain_hash_set));
  return t;
}
async function sv() {
  let t = j().ruleset_last_refresh_ms;
  if (Math.floor((Date.now() - t) / 864e5) < 1) {
    console.log("Sync not needed");
    return;
  }
  de((r) => (r.ruleset_last_refresh_ms = Date.now()));
  let i = await _x(Jg);
  i.isOk()
    ? i.value.rules_revision != j().remote_ruleset_revision &&
      de((r) => {
        ((r.remote_ruleset_revision = i.value.rules_revision),
          (r.remote_notifications = um(i.value)),
          (r.remote_behaviours = {
            gyt_scanner: i.value.behaviours.gyt_scanner,
            websites: lm(i.value),
          }));
      })
    : console.warn(i.error);
}
var lv = x.templateLiteral(["ded_", x.string()]),
  fx = x.templateLiteral(["media_hash_", x.number()]),
  uv = x.enum(["download", "download_as", "download_audio", "copy"]),
  hx = x.enum(["popup", "sidebar"]),
  dm = x.string().brand("directorypath"),
  gx = x.strictObject({
    downloaded_id: lv,
    media_hash: fx,
    path: x.string(),
    browser_download_id: x.number(),
    download_timestamp: x.number(),
    origin_url: x.nullable(x.url()),
    origin_favicon_url: x.nullable(x.url()),
    has_drm: x.boolean(),
    subdir: x.optional(dm),
  }),
  vx = x.enum(["SUBSCRIPTION", "LIFETIME", "GOLDEN"]),
  mm = x.object({
    iat: x.optional(x.number()),
    user_id: x.number(),
    store: x.string().max(256),
    jti: x.string().max(512),
    valid_until: x.number(),
    exp: x.number(),
    developer: x.boolean().optional(),
    entitlement_type: vx.optional(),
  }),
  yx = mm.extend({ raw: x.string() }),
  bx = x.enum(["original", "user_language"]),
  wx = x.enum(["none", "video", "image"]),
  Sx = x.enum(["system", "light", "dark"]),
  xx = x.enum(["big", "medium", "small"]),
  Dx = x.enum(["verylarge", "large", "default"]),
  Ax = x.strictObject({
    max_length: x.number(),
    template: x.string(),
    force_doc_title: x.optional(x.boolean()),
  }),
  Ex = x.strictObject({
    template: x.string(),
    url: x.string(),
    max_length: x.nullable(x.number()),
    selector: x.nullable(x.string()),
    subdir: x.optional(dm),
    force_doc_title: x.optional(x.boolean()),
    replace: x.optional(
      x.array(x.strictObject({ from: x.string(), to: x.string() })),
    ),
  }),
  Tx = x.enum(["SMART", "OLDEST", "NEWEST"]),
  cm = x.strictObject({
    version: x.number(),
    default_action: uv,
    default_action_per_hostname: x.map(x.string(), uv),
    downloaded: x.map(lv, gx),
    jwt: x.nullable(yx),
    lsd: x.number(),
    dockmode: hx,
    download_directory: dm,
    youtube_throttle: x.boolean(),
    youtube_audio_strategy: bx,
    max_concurrent_downloads: x.number(),
    show_desktop_notifications: x.boolean(),
    show_desktop_notifications_private: x.boolean(),
    history_days: x.number(),
    show_transient_history: x.boolean(),
    ui_theme: Sx,
    use_context_menu: x.boolean(),
    dont_ask_for_user_review: x.boolean(),
    successful_downloads_count: x.number(),
    prefered_quality: x.nullable(x.number()),
    prefered_av_muxer: x.enum(["mp4", "mkv"]),
    hide_nomedia_box: x.boolean(),
    popup_size: xx,
    font_size: Dx,
    prefered_discovered_media_order: Tx,
    smartnaming: x.strictObject({
      source: x.nullable(x.string()),
      compiled: x.strictObject({ default_: Ax, rules: x.array(Ex) }),
    }),
    preview_mode: wx,
    last_migration_request: x.number(),
    custom_strings: x.strictObject({ web: Gg, addon: Zg }),
    remote_ruleset_revision: x.string(),
    remote_notifications: x.map(nv, iv),
    remote_behaviours: x.strictObject({
      gyt_scanner: tv,
      websites: x.map(Yg, x.set(Xg)),
    }),
    ruleset_last_refresh_ms: x.number(),
  }),
  nP = cm.readonly();
function cv(e) {
  let t = _m();
  if (e && typeof e == "object")
    for (let n of Object.keys(cm.shape)) {
      let i = cm.shape[n];
      if (n in e) {
        let r = e[n],
          o = i.safeParse(r);
        if (o.success) t[n] = o.data;
        else {
          for (let a of o.error.issues)
            (console.warn("Zod issue"),
              console.warn(a.path.join(".")),
              console.warn(a.message));
          (console.warn(o.error.issues),
            console.warn(o.error.type),
            console.warn(o.error.message),
            console.warn(
              `Failed to import past persitent state field: ${n}. Fallback to default. Value was:`,
              r,
            ));
        }
      }
    }
  return t;
}
var pm = 1710169438e3;
function _m() {
  let e = av();
  return {
    version: 1,
    default_action_per_hostname: new Map(),
    downloaded: new Map(),
    jwt: null,
    lsd: pm,
    default_action: "download",
    hide_nomedia_box: !0,
    dont_ask_for_user_review: !1,
    dockmode: "popup",
    download_directory: Kt,
    youtube_throttle: !0,
    youtube_audio_strategy: "original",
    max_concurrent_downloads: 6,
    show_desktop_notifications: !0,
    show_desktop_notifications_private: !1,
    history_days: 0,
    show_transient_history: !0,
    ui_theme: "system",
    use_context_menu: !0,
    prefered_quality: 1080,
    prefered_av_muxer: "mp4",
    popup_size: "medium",
    font_size: "default",
    prefered_discovered_media_order: "SMART",
    successful_downloads_count: 0,
    smartnaming: { source: null, compiled: Sn() },
    preview_mode: "video",
    last_migration_request: 0,
    custom_strings: { addon: new Map(), web: new Map() },
    remote_ruleset_revision: e.rules_revision,
    remote_notifications: um(e),
    remote_behaviours: {
      gyt_scanner: e.behaviours.gyt_scanner,
      websites: lm(e),
    },
    ruleset_last_refresh_ms: 0,
  };
}
var os = "global_session_state",
  as = "global_persistent_state",
  mv = "session";
function fm(e) {
  let t = se(e);
  return xi.storage[mv].set({ [os]: t });
}
function hm(e) {
  let t = se(e);
  return xi.storage.local.set({ [as]: t });
}
async function pv() {
  let e = await xi.storage[mv].get(os);
  if (os in e) {
    let t = e[os];
    return Ae(t);
  } else return Wi();
}
async function _v() {
  let e = await xi.storage.local.get(as);
  if (as in e) {
    let t = e[as];
    return cv(Ae(t));
  }
  return _m();
}
async function fv(e) {
  ((globalThis._session_state = await pv()),
    (globalThis._session_state_write_timeout = O),
    (globalThis._session_state_write_callback = e));
}
async function hv(e) {
  ((globalThis._persistent_state = await _v()),
    await hm(globalThis._persistent_state),
    (globalThis._persistent_state_write_timeout = O),
    (globalThis._persistent_state_write_callback = e));
}
function Ne(e) {
  let t = e(globalThis._session_state);
  return (
    globalThis._session_state_write_timeout.isNone() &&
      (globalThis._session_state_write_timeout = V(setTimeout(gv, 500))),
    t
  );
}
function Me(e) {
  let t = e(globalThis._session_state);
  return (gv(), t);
}
function pe() {
  return globalThis._session_state;
}
function gv() {
  fm(pe()).catch((e) => {
    (console.error(e),
      (e.message?.includes("QuotaExceededError") ||
        e.message?.includes("Session storage quota bytes exceeded")) &&
        (console.error(`Storage quota exceeded, state not saved: ${e}`),
        console.warn("Purging session state"),
        (globalThis._session_state = {
          ...Wi(),
          current_win_tab: globalThis._session_state.current_win_tab,
          downloading: globalThis._session_state.downloading,
        }),
        fm(globalThis._session_state)));
  });
  try {
    globalThis._session_state_write_callback();
  } catch (e) {
    console.error(e);
  }
  globalThis._session_state_write_timeout.isSome() &&
    (clearTimeout(globalThis._session_state_write_timeout.value),
    (globalThis._session_state_write_timeout = O));
}
function de(e) {
  let t = e(globalThis._persistent_state);
  return (
    globalThis._persistent_state_write_timeout.isNone() &&
      (globalThis._persistent_state_write_timeout = V(setTimeout(vv, 500))),
    t
  );
}
function _e(e) {
  let t = e(globalThis._persistent_state);
  return (vv(), t);
}
function j() {
  return globalThis._persistent_state;
}
function vv() {
  hm(j());
  try {
    globalThis._persistent_state_write_callback();
  } catch (e) {
    console.error(e);
  }
  globalThis._persistent_state_write_timeout.isSome() &&
    (clearTimeout(globalThis._persistent_state_write_timeout.value),
    (globalThis._persistent_state_write_timeout = O));
}
function gm() {
  Ht.default.sidebarAction.toggle();
}
function Ix(e, t) {
  if ((yv(e), de((n) => (n.dockmode = e)), !Ie))
    if (e == "popup")
      try {
        t.isSome()
          ? chrome.action.openPopup({ windowId: t.value })
          : chrome.action.openPopup();
      } catch {}
    else
      e == "sidebar" &&
        t.isSome() &&
        chrome.sidePanel?.open({ windowId: t.value });
}
function yv(e) {
  Ie
    ? e == "sidebar"
      ? (Ht.default.action.onClicked.addListener(gm),
        Ht.default.action.setPopup({ popup: null }))
      : e == "popup"
        ? (Ht.default.action.onClicked.removeListener(gm),
          Ht.default.action.setPopup({ popup: "/content/popup.html" }))
        : e == "window" &&
          (Ht.default.action.onClicked.removeListener(gm),
          Ht.default.action.setPopup({ popup: null }))
    : chrome.sidePanel
      ? e == "sidebar"
        ? (chrome.sidePanel.setOptions({ enabled: !0 }),
          chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: !0 }),
          chrome.action.setPopup({ popup: "" }))
        : e == "popup" &&
          (chrome.sidePanel.setOptions({ enabled: !1 }),
          chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: !1 }),
          chrome.action.setPopup({
            popup: chrome.runtime.getURL("/content/popup.html"),
          }))
      : chrome.action.setPopup({
          popup: chrome.runtime.getURL("/content/popup.html"),
        });
}
function bv() {
  (yv(j().dockmode),
    br((e) => {
      if (e.name == "redock") {
        let t = pe().current_win_tab.win_id;
        Ix(e.data.mode, t);
      }
      return Promise.resolve();
    }));
}
var wv = ye(Te(), 1);
async function Sv(e, t) {
  return t.has_drm
    ? !0
    : ((
        await wv.default.scripting.executeScript({
          target: { tabId: e },
          func: () => {
            let i = [...document.querySelectorAll("video")];
            for (let r of i) if (r.mediaKeys instanceof MediaKeys) return !0;
            return !1;
          },
        })
      )[0]?.result ?? !1);
}
Pe();
function xv(e, t) {
  if (e.current_win_tab.tab_id.isSome()) {
    let n = e.current_win_tab.tab_id.value,
      i = e.discovered.get(n);
    if (i && i.meta.isSome()) {
      let r = i.meta.value,
        o = i.media.values().next()?.value;
      if (o) {
        let a = r.default_action == "download_as",
          u = r.default_action == "download_audio",
          { basename: s, subdir: l } = yr(o, r),
          c;
        if ("playlist" in o) {
          let d = qi(o, t.prefered_quality);
          c = bt(o, u, a, s, l, d, t);
        } else c = bt(o, u, a, s, l, void 0, t);
        r.default_action == "copy"
          ? Ie
            ? navigator.clipboard.writeText(c.url.href)
            : browser.scripting.executeScript({
                target: { tabId: r.tab_id },
                func: (d) => navigator.clipboard.writeText(d),
                args: [c.url.href],
              })
          : wt({
              name: "do_download",
              data: { download_args: se(c), meta: se(r), media: se(o) },
            });
      }
    }
  }
}
var Di = class {
  constructor(t, n, i) {
    this._running = 0;
    this._ytRunning = 0;
    this._ytDelay = 0;
    this._lastYtTaskTimestamp = 0;
    this._schedulePending = !1;
    this._queue = [];
    if (t <= 0 || !Number.isFinite(t))
      throw new Error("capacity must be a positive finite number");
    if (n <= 0 || !Number.isFinite(n))
      throw new Error("youtube capacity must be a positive finite number");
    if (t < n)
      throw new Error("youtube capacity must be inferior or equal to capacity");
    ((this._ytDelay = i), (this._totalCapacity = t), (this._ytCapacity = n));
  }
  getStats() {
    return {
      capacity: this._totalCapacity,
      ytCapacity: this._ytCapacity,
      running: this._running,
      ytRunning: this._ytRunning,
      pending: this._queue.length,
    };
  }
  queueTask(t, n, i) {
    return new Promise((r, o) => {
      let a = { id: n, is_youtube: i, reject: o, resolve: r, task: t };
      (this._queue.push(a), this._schedule());
    });
  }
  cancelPendingTask(t) {
    let n = this._queue.findIndex((i) => i.id === t);
    if (n >= 0) {
      let [i] = this._queue.splice(n, 1);
      return (
        i?.resolve(
          B({ download_id: t, aborted_no_partial: !0, ending_reason: gr() }),
        ),
        !0
      );
    } else return !1;
  }
  setTotalCapacity(t) {
    if (t <= 0 || !Number.isFinite(t))
      throw new Error("capacity must be a positive finite number");
    if (t < this._ytCapacity)
      throw new Error("capacity must be superior or equal to youtube capacity");
    ((this._totalCapacity = t), this._schedule());
  }
  setYoutubeCapacity(t) {
    if (t <= 0 || !Number.isFinite(t))
      throw new Error("youtube capacity must be a positive finite number");
    if (t > this._totalCapacity)
      throw new Error(
        "youtube capacity must be lower or equal to the total capacity",
      );
    ((this._ytCapacity = t), this._schedule());
  }
  _schedule() {
    for (; this._running < this._totalCapacity; ) {
      let t,
        n = -1,
        i = Date.now() - this._lastYtTaskTimestamp,
        r = this._ytCapacity > 1,
        o = this._ytRunning < this._ytCapacity && (r || i > this._ytDelay);
      for (let [a, u] of this._queue.entries())
        if (!u.is_youtube || o) {
          ((t = u), (n = a));
          break;
        }
      if (!t || n < 0) {
        this._queue.some((a) => a.is_youtube) &&
          !this._schedulePending &&
          ((this._schedulePending = !0),
          setTimeout(() => {
            ((this._schedulePending = !1), this._schedule());
          }, 1e3));
        break;
      }
      (this._queue.splice(n, 1),
        this._running++,
        t.is_youtube && this._ytRunning++,
        t
          .task()
          .then((a) => {
            t.resolve(a);
          })
          .catch((a) => {
            t.reject(a);
          })
          .finally(() => {
            (this._running--,
              t.is_youtube &&
                ((this._lastYtTaskTimestamp = Date.now()), this._ytRunning--),
              this._schedule());
          }));
    }
  }
};
us();
async function Bv(e) {
  let t = Pm(await e),
    [n, i, { QuickJSWASMModule: r }] = await Promise.all([
      t.importModuleLoader().then(Pm),
      t.importFFI(),
      Promise.resolve()
        .then(() => (Lv(), jv))
        .then(Pm),
    ]),
    o = await n();
  o.type = "sync";
  let a = new i(o);
  return new r(o, a);
}
function Pm(e) {
  return e && "default" in e && e.default
    ? e.default && "default" in e.default && e.default.default
      ? e.default.default
      : e.default
    : e;
}
var Xx = {
    type: "sync",
    importFFI: () =>
      Promise.resolve()
        .then(() => (qv(), Vv))
        .then((e) => e.QuickJSFFI),
    importModuleLoader: () =>
      Promise.resolve()
        .then(() => (Zv(), Hv))
        .then((e) => e.default),
  },
  Ti = Xx;
async function $m(e = Ti) {
  return Bv(e);
}
function zm(e) {
  let t = e.split(".").map((n) => parseInt(n));
  return t.length != 4
    ? O
    : t.some(isNaN)
      ? O
      : V({ a: t[0], b: t[1], c: t[2], d: t[3] });
}
Pe();
var Gv = ye(Te(), 1);
Pe();
async function Wv() {
  if (cp) return !1;
  let e = await Gv.default.runtime.getPlatformInfo();
  return e.os == "linux" || e.os == "openbsd";
}
Pe();
Pe();
var sn = new TextEncoder(),
  It = new TextDecoder(),
  b1 = 2 ** 32;
function Qv(...e) {
  let t = e.reduce((r, { length: o }) => r + o, 0),
    n = new Uint8Array(t),
    i = 0;
  for (let r of e) (n.set(r, i), (i += r.length));
  return n;
}
function Kv(e) {
  if (Uint8Array.fromBase64) return Uint8Array.fromBase64(e);
  let t = atob(e),
    n = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++) n[i] = t.charCodeAt(i);
  return n;
}
function un(e) {
  if (Uint8Array.fromBase64)
    return Uint8Array.fromBase64(typeof e == "string" ? e : It.decode(e), {
      alphabet: "base64url",
    });
  let t = e;
  (t instanceof Uint8Array && (t = It.decode(t)),
    (t = t.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "")));
  try {
    return Kv(t);
  } catch {
    throw new TypeError("The input to be decoded is not correctly encoded.");
  }
}
var Pt = class extends Error {
    static code = "ERR_JOSE_GENERIC";
    code = "ERR_JOSE_GENERIC";
    constructor(t, n) {
      (super(t, n),
        (this.name = this.constructor.name),
        Error.captureStackTrace?.(this, this.constructor));
    }
  },
  Qe = class extends Pt {
    static code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
    code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
    claim;
    reason;
    payload;
    constructor(t, n, i = "unspecified", r = "unspecified") {
      (super(t, { cause: { claim: i, reason: r, payload: n } }),
        (this.claim = i),
        (this.reason = r),
        (this.payload = n));
    }
  },
  ki = class extends Pt {
    static code = "ERR_JWT_EXPIRED";
    code = "ERR_JWT_EXPIRED";
    claim;
    reason;
    payload;
    constructor(t, n, i = "unspecified", r = "unspecified") {
      (super(t, { cause: { claim: i, reason: r, payload: n } }),
        (this.claim = i),
        (this.reason = r),
        (this.payload = n));
    }
  },
  ds = class extends Pt {
    static code = "ERR_JOSE_ALG_NOT_ALLOWED";
    code = "ERR_JOSE_ALG_NOT_ALLOWED";
  },
  Ke = class extends Pt {
    static code = "ERR_JOSE_NOT_SUPPORTED";
    code = "ERR_JOSE_NOT_SUPPORTED";
  };
var fe = class extends Pt {
    static code = "ERR_JWS_INVALID";
    code = "ERR_JWS_INVALID";
  },
  ln = class extends Pt {
    static code = "ERR_JWT_INVALID";
    code = "ERR_JWT_INVALID";
  };
var ms = class extends Pt {
  static code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  constructor(t = "signature verification failed", n) {
    super(t, n);
  }
};
function $t(e, t = "algorithm.name") {
  return new TypeError(
    `CryptoKey does not support this operation, its ${t} must be ${e}`,
  );
}
function Ii(e, t) {
  return e.name === t;
}
function Om(e) {
  return parseInt(e.name.slice(4), 10);
}
function nD(e) {
  switch (e) {
    case "ES256":
      return "P-256";
    case "ES384":
      return "P-384";
    case "ES512":
      return "P-521";
    default:
      throw new Error("unreachable");
  }
}
function iD(e, t) {
  if (t && !e.usages.includes(t))
    throw new TypeError(
      `CryptoKey does not support this operation, its usages must include ${t}.`,
    );
}
function Jv(e, t, n) {
  switch (t) {
    case "HS256":
    case "HS384":
    case "HS512": {
      if (!Ii(e.algorithm, "HMAC")) throw $t("HMAC");
      let i = parseInt(t.slice(2), 10);
      if (Om(e.algorithm.hash) !== i) throw $t(`SHA-${i}`, "algorithm.hash");
      break;
    }
    case "RS256":
    case "RS384":
    case "RS512": {
      if (!Ii(e.algorithm, "RSASSA-PKCS1-v1_5")) throw $t("RSASSA-PKCS1-v1_5");
      let i = parseInt(t.slice(2), 10);
      if (Om(e.algorithm.hash) !== i) throw $t(`SHA-${i}`, "algorithm.hash");
      break;
    }
    case "PS256":
    case "PS384":
    case "PS512": {
      if (!Ii(e.algorithm, "RSA-PSS")) throw $t("RSA-PSS");
      let i = parseInt(t.slice(2), 10);
      if (Om(e.algorithm.hash) !== i) throw $t(`SHA-${i}`, "algorithm.hash");
      break;
    }
    case "Ed25519":
    case "EdDSA": {
      if (!Ii(e.algorithm, "Ed25519")) throw $t("Ed25519");
      break;
    }
    case "ES256":
    case "ES384":
    case "ES512": {
      if (!Ii(e.algorithm, "ECDSA")) throw $t("ECDSA");
      let i = nD(t);
      if (e.algorithm.namedCurve !== i) throw $t(i, "algorithm.namedCurve");
      break;
    }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  iD(e, n);
}
function Yv(e, t, ...n) {
  if (((n = n.filter(Boolean)), n.length > 2)) {
    let i = n.pop();
    e += `one of type ${n.join(", ")}, or ${i}.`;
  } else
    n.length === 2
      ? (e += `one of type ${n[0]} or ${n[1]}.`)
      : (e += `of type ${n[0]}.`);
  return (
    t == null
      ? (e += ` Received ${t}`)
      : typeof t == "function" && t.name
        ? (e += ` Received function ${t.name}`)
        : typeof t == "object" &&
          t != null &&
          t.constructor?.name &&
          (e += ` Received an instance of ${t.constructor.name}`),
    e
  );
}
var Xv = (e, ...t) => Yv("Key must be ", e, ...t);
function Rm(e, t, ...n) {
  return Yv(`Key for the ${e} algorithm must be `, t, ...n);
}
function Nm(e) {
  return e?.[Symbol.toStringTag] === "CryptoKey";
}
function Mm(e) {
  return e?.[Symbol.toStringTag] === "KeyObject";
}
var Cm = (e) => Nm(e) || Mm(e);
var ey = (...e) => {
  let t = e.filter(Boolean);
  if (t.length === 0 || t.length === 1) return !0;
  let n;
  for (let i of t) {
    let r = Object.keys(i);
    if (!n || n.size === 0) {
      n = new Set(r);
      continue;
    }
    for (let o of r) {
      if (n.has(o)) return !1;
      n.add(o);
    }
  }
  return !0;
};
function oD(e) {
  return typeof e == "object" && e !== null;
}
var dr = (e) => {
  if (!oD(e) || Object.prototype.toString.call(e) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(e) === null) return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
};
var ty = (e, t) => {
  if (e.startsWith("RS") || e.startsWith("PS")) {
    let { modulusLength: n } = t.algorithm;
    if (typeof n != "number" || n < 2048)
      throw new TypeError(
        `${e} requires key modulusLength to be 2048 bits or larger`,
      );
  }
};
var ps = (e, t, n = 0) => {
    n === 0 && (t.unshift(t.length), t.unshift(6));
    let i = e.indexOf(t[0], n);
    if (i === -1) return !1;
    let r = e.subarray(i, i + t.length);
    return r.length !== t.length
      ? !1
      : r.every((o, a) => o === t[a]) || ps(e, t, i + 1);
  },
  aD = (e) => {
    switch (!0) {
      case ps(e, [42, 134, 72, 206, 61, 3, 1, 7]):
        return "P-256";
      case ps(e, [43, 129, 4, 0, 34]):
        return "P-384";
      case ps(e, [43, 129, 4, 0, 35]):
        return "P-521";
      default:
        return;
    }
  },
  sD = async (e, t, n, i, r) => {
    let o,
      a,
      u = new Uint8Array(
        atob(n.replace(e, ""))
          .split("")
          .map((l) => l.charCodeAt(0)),
      ),
      s = t === "spki";
    switch (i) {
      case "PS256":
      case "PS384":
      case "PS512":
        ((o = { name: "RSA-PSS", hash: `SHA-${i.slice(-3)}` }),
          (a = s ? ["verify"] : ["sign"]));
        break;
      case "RS256":
      case "RS384":
      case "RS512":
        ((o = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${i.slice(-3)}` }),
          (a = s ? ["verify"] : ["sign"]));
        break;
      case "RSA-OAEP":
      case "RSA-OAEP-256":
      case "RSA-OAEP-384":
      case "RSA-OAEP-512":
        ((o = {
          name: "RSA-OAEP",
          hash: `SHA-${parseInt(i.slice(-3), 10) || 1}`,
        }),
          (a = s ? ["encrypt", "wrapKey"] : ["decrypt", "unwrapKey"]));
        break;
      case "ES256":
        ((o = { name: "ECDSA", namedCurve: "P-256" }),
          (a = s ? ["verify"] : ["sign"]));
        break;
      case "ES384":
        ((o = { name: "ECDSA", namedCurve: "P-384" }),
          (a = s ? ["verify"] : ["sign"]));
        break;
      case "ES512":
        ((o = { name: "ECDSA", namedCurve: "P-521" }),
          (a = s ? ["verify"] : ["sign"]));
        break;
      case "ECDH-ES":
      case "ECDH-ES+A128KW":
      case "ECDH-ES+A192KW":
      case "ECDH-ES+A256KW": {
        let l = aD(u);
        ((o = l?.startsWith("P-")
          ? { name: "ECDH", namedCurve: l }
          : { name: "X25519" }),
          (a = s ? [] : ["deriveBits"]));
        break;
      }
      case "Ed25519":
      case "EdDSA":
        ((o = { name: "Ed25519" }), (a = s ? ["verify"] : ["sign"]));
        break;
      default:
        throw new Ke('Invalid or unsupported "alg" (Algorithm) value');
    }
    return crypto.subtle.importKey(t, u, o, r?.extractable ?? !!s, a);
  };
var ry = (e, t, n) =>
  sD(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, "spki", e, t, n);
function uD(e) {
  let t, n;
  switch (e.kty) {
    case "RSA": {
      switch (e.alg) {
        case "PS256":
        case "PS384":
        case "PS512":
          ((t = { name: "RSA-PSS", hash: `SHA-${e.alg.slice(-3)}` }),
            (n = e.d ? ["sign"] : ["verify"]));
          break;
        case "RS256":
        case "RS384":
        case "RS512":
          ((t = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${e.alg.slice(-3)}` }),
            (n = e.d ? ["sign"] : ["verify"]));
          break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          ((t = {
            name: "RSA-OAEP",
            hash: `SHA-${parseInt(e.alg.slice(-3), 10) || 1}`,
          }),
            (n = e.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"]));
          break;
        default:
          throw new Ke(
            'Invalid or unsupported JWK "alg" (Algorithm) Parameter value',
          );
      }
      break;
    }
    case "EC": {
      switch (e.alg) {
        case "ES256":
          ((t = { name: "ECDSA", namedCurve: "P-256" }),
            (n = e.d ? ["sign"] : ["verify"]));
          break;
        case "ES384":
          ((t = { name: "ECDSA", namedCurve: "P-384" }),
            (n = e.d ? ["sign"] : ["verify"]));
          break;
        case "ES512":
          ((t = { name: "ECDSA", namedCurve: "P-521" }),
            (n = e.d ? ["sign"] : ["verify"]));
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          ((t = { name: "ECDH", namedCurve: e.crv }),
            (n = e.d ? ["deriveBits"] : []));
          break;
        default:
          throw new Ke(
            'Invalid or unsupported JWK "alg" (Algorithm) Parameter value',
          );
      }
      break;
    }
    case "OKP": {
      switch (e.alg) {
        case "Ed25519":
        case "EdDSA":
          ((t = { name: "Ed25519" }), (n = e.d ? ["sign"] : ["verify"]));
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          ((t = { name: e.crv }), (n = e.d ? ["deriveBits"] : []));
          break;
        default:
          throw new Ke(
            'Invalid or unsupported JWK "alg" (Algorithm) Parameter value',
          );
      }
      break;
    }
    default:
      throw new Ke(
        'Invalid or unsupported JWK "kty" (Key Type) Parameter value',
      );
  }
  return { algorithm: t, keyUsages: n };
}
var ny = async (e) => {
  if (!e.alg)
    throw new TypeError(
      '"alg" argument is required when "jwk.alg" is not present',
    );
  let { algorithm: t, keyUsages: n } = uD(e),
    i = { ...e };
  return (
    delete i.alg,
    delete i.use,
    crypto.subtle.importKey("jwk", i, t, e.ext ?? !e.d, e.key_ops ?? n)
  );
};
async function Um(e, t, n) {
  if (typeof e != "string" || e.indexOf("-----BEGIN PUBLIC KEY-----") !== 0)
    throw new TypeError('"spki" must be SPKI formatted string');
  return ry(e, t, n);
}
var iy = (e, t, n, i, r) => {
  if (r.crit !== void 0 && i?.crit === void 0)
    throw new e(
      '"crit" (Critical) Header Parameter MUST be integrity protected',
    );
  if (!i || i.crit === void 0) return new Set();
  if (
    !Array.isArray(i.crit) ||
    i.crit.length === 0 ||
    i.crit.some((a) => typeof a != "string" || a.length === 0)
  )
    throw new e(
      '"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present',
    );
  let o;
  n !== void 0
    ? (o = new Map([...Object.entries(n), ...t.entries()]))
    : (o = t);
  for (let a of i.crit) {
    if (!o.has(a))
      throw new Ke(`Extension Header Parameter "${a}" is not recognized`);
    if (r[a] === void 0)
      throw new e(`Extension Header Parameter "${a}" is missing`);
    if (o.get(a) && i[a] === void 0)
      throw new e(
        `Extension Header Parameter "${a}" MUST be integrity protected`,
      );
  }
  return new Set(i.crit);
};
var oy = (e, t) => {
  if (
    t !== void 0 &&
    (!Array.isArray(t) || t.some((n) => typeof n != "string"))
  )
    throw new TypeError(`"${e}" option must be an array of strings`);
  if (t) return new Set(t);
};
function Pi(e) {
  return dr(e) && typeof e.kty == "string";
}
function ay(e) {
  return e.kty !== "oct" && typeof e.d == "string";
}
function sy(e) {
  return e.kty !== "oct" && typeof e.d > "u";
}
function uy(e) {
  return e.kty === "oct" && typeof e.k == "string";
}
var cn,
  ly = async (e, t, n, i = !1) => {
    cn ||= new WeakMap();
    let r = cn.get(e);
    if (r?.[n]) return r[n];
    let o = await ny({ ...t, alg: n });
    return (i && Object.freeze(e), r ? (r[n] = o) : cn.set(e, { [n]: o }), o);
  },
  cD = (e, t) => {
    cn ||= new WeakMap();
    let n = cn.get(e);
    if (n?.[t]) return n[t];
    let i = e.type === "public",
      r = !!i,
      o;
    if (e.asymmetricKeyType === "x25519") {
      switch (t) {
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          break;
        default:
          throw new TypeError(
            "given KeyObject instance cannot be used for this algorithm",
          );
      }
      o = e.toCryptoKey(e.asymmetricKeyType, r, i ? [] : ["deriveBits"]);
    }
    if (e.asymmetricKeyType === "ed25519") {
      if (t !== "EdDSA" && t !== "Ed25519")
        throw new TypeError(
          "given KeyObject instance cannot be used for this algorithm",
        );
      o = e.toCryptoKey(e.asymmetricKeyType, r, [i ? "verify" : "sign"]);
    }
    if (e.asymmetricKeyType === "rsa") {
      let a;
      switch (t) {
        case "RSA-OAEP":
          a = "SHA-1";
          break;
        case "RS256":
        case "PS256":
        case "RSA-OAEP-256":
          a = "SHA-256";
          break;
        case "RS384":
        case "PS384":
        case "RSA-OAEP-384":
          a = "SHA-384";
          break;
        case "RS512":
        case "PS512":
        case "RSA-OAEP-512":
          a = "SHA-512";
          break;
        default:
          throw new TypeError(
            "given KeyObject instance cannot be used for this algorithm",
          );
      }
      if (t.startsWith("RSA-OAEP"))
        return e.toCryptoKey(
          { name: "RSA-OAEP", hash: a },
          r,
          i ? ["encrypt"] : ["decrypt"],
        );
      o = e.toCryptoKey(
        { name: t.startsWith("PS") ? "RSA-PSS" : "RSASSA-PKCS1-v1_5", hash: a },
        r,
        [i ? "verify" : "sign"],
      );
    }
    if (e.asymmetricKeyType === "ec") {
      let u = new Map([
        ["prime256v1", "P-256"],
        ["secp384r1", "P-384"],
        ["secp521r1", "P-521"],
      ]).get(e.asymmetricKeyDetails?.namedCurve);
      if (!u)
        throw new TypeError(
          "given KeyObject instance cannot be used for this algorithm",
        );
      (t === "ES256" &&
        u === "P-256" &&
        (o = e.toCryptoKey({ name: "ECDSA", namedCurve: u }, r, [
          i ? "verify" : "sign",
        ])),
        t === "ES384" &&
          u === "P-384" &&
          (o = e.toCryptoKey({ name: "ECDSA", namedCurve: u }, r, [
            i ? "verify" : "sign",
          ])),
        t === "ES512" &&
          u === "P-521" &&
          (o = e.toCryptoKey({ name: "ECDSA", namedCurve: u }, r, [
            i ? "verify" : "sign",
          ])),
        t.startsWith("ECDH-ES") &&
          (o = e.toCryptoKey(
            { name: "ECDH", namedCurve: u },
            r,
            i ? [] : ["deriveBits"],
          )));
    }
    if (!o)
      throw new TypeError(
        "given KeyObject instance cannot be used for this algorithm",
      );
    return (n ? (n[t] = o) : cn.set(e, { [t]: o }), o);
  },
  cy = async (e, t) => {
    if (e instanceof Uint8Array || Nm(e)) return e;
    if (Mm(e)) {
      if (e.type === "secret") return e.export();
      if ("toCryptoKey" in e && typeof e.toCryptoKey == "function")
        try {
          return cD(e, t);
        } catch (i) {
          if (i instanceof TypeError) throw i;
        }
      let n = e.export({ format: "jwk" });
      return ly(e, n, t);
    }
    if (Pi(e)) return e.k ? un(e.k) : ly(e, e, t, !0);
    throw new Error("unreachable");
  };
var dn = (e) => e?.[Symbol.toStringTag],
  Fm = (e, t, n) => {
    if (t.use !== void 0) {
      let i;
      switch (n) {
        case "sign":
        case "verify":
          i = "sig";
          break;
        case "encrypt":
        case "decrypt":
          i = "enc";
          break;
      }
      if (t.use !== i)
        throw new TypeError(
          `Invalid key for this operation, its "use" must be "${i}" when present`,
        );
    }
    if (t.alg !== void 0 && t.alg !== e)
      throw new TypeError(
        `Invalid key for this operation, its "alg" must be "${e}" when present`,
      );
    if (Array.isArray(t.key_ops)) {
      let i;
      switch (!0) {
        case n === "sign" || n === "verify":
        case e === "dir":
        case e.includes("CBC-HS"):
          i = n;
          break;
        case e.startsWith("PBES2"):
          i = "deriveBits";
          break;
        case /^A\d{3}(?:GCM)?(?:KW)?$/.test(e):
          !e.includes("GCM") && e.endsWith("KW")
            ? (i = n === "encrypt" ? "wrapKey" : "unwrapKey")
            : (i = n);
          break;
        case n === "encrypt" && e.startsWith("RSA"):
          i = "wrapKey";
          break;
        case n === "decrypt":
          i = e.startsWith("RSA") ? "unwrapKey" : "deriveBits";
          break;
      }
      if (i && t.key_ops?.includes?.(i) === !1)
        throw new TypeError(
          `Invalid key for this operation, its "key_ops" must include "${i}" when present`,
        );
    }
    return !0;
  },
  dD = (e, t, n) => {
    if (!(t instanceof Uint8Array)) {
      if (Pi(t)) {
        if (uy(t) && Fm(e, t, n)) return;
        throw new TypeError(
          'JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present',
        );
      }
      if (!Cm(t))
        throw new TypeError(
          Rm(e, t, "CryptoKey", "KeyObject", "JSON Web Key", "Uint8Array"),
        );
      if (t.type !== "secret")
        throw new TypeError(
          `${dn(t)} instances for symmetric algorithms must be of type "secret"`,
        );
    }
  },
  mD = (e, t, n) => {
    if (Pi(t))
      switch (n) {
        case "decrypt":
        case "sign":
          if (ay(t) && Fm(e, t, n)) return;
          throw new TypeError(
            "JSON Web Key for this operation be a private JWK",
          );
        case "encrypt":
        case "verify":
          if (sy(t) && Fm(e, t, n)) return;
          throw new TypeError(
            "JSON Web Key for this operation be a public JWK",
          );
      }
    if (!Cm(t))
      throw new TypeError(Rm(e, t, "CryptoKey", "KeyObject", "JSON Web Key"));
    if (t.type === "secret")
      throw new TypeError(
        `${dn(t)} instances for asymmetric algorithms must not be of type "secret"`,
      );
    if (t.type === "public")
      switch (n) {
        case "sign":
          throw new TypeError(
            `${dn(t)} instances for asymmetric algorithm signing must be of type "private"`,
          );
        case "decrypt":
          throw new TypeError(
            `${dn(t)} instances for asymmetric algorithm decryption must be of type "private"`,
          );
        default:
          break;
      }
    if (t.type === "private")
      switch (n) {
        case "verify":
          throw new TypeError(
            `${dn(t)} instances for asymmetric algorithm verifying must be of type "public"`,
          );
        case "encrypt":
          throw new TypeError(
            `${dn(t)} instances for asymmetric algorithm encryption must be of type "public"`,
          );
        default:
          break;
      }
  },
  dy = (e, t, n) => {
    e.startsWith("HS") ||
    e === "dir" ||
    e.startsWith("PBES2") ||
    /^A(?:128|192|256)(?:GCM)?(?:KW)?$/.test(e) ||
    /^A(?:128|192|256)CBC-HS(?:256|384|512)$/.test(e)
      ? dD(e, t, n)
      : mD(e, t, n);
  };
var my = (e, t) => {
  let n = `SHA-${e.slice(-3)}`;
  switch (e) {
    case "HS256":
    case "HS384":
    case "HS512":
      return { hash: n, name: "HMAC" };
    case "PS256":
    case "PS384":
    case "PS512":
      return {
        hash: n,
        name: "RSA-PSS",
        saltLength: parseInt(e.slice(-3), 10) >> 3,
      };
    case "RS256":
    case "RS384":
    case "RS512":
      return { hash: n, name: "RSASSA-PKCS1-v1_5" };
    case "ES256":
    case "ES384":
    case "ES512":
      return { hash: n, name: "ECDSA", namedCurve: t.namedCurve };
    case "Ed25519":
    case "EdDSA":
      return { name: "Ed25519" };
    default:
      throw new Ke(
        `alg ${e} is not supported either by JOSE or your javascript runtime`,
      );
  }
};
var py = async (e, t, n) => {
  if (t instanceof Uint8Array) {
    if (!e.startsWith("HS"))
      throw new TypeError(Xv(t, "CryptoKey", "KeyObject", "JSON Web Key"));
    return crypto.subtle.importKey(
      "raw",
      t,
      { hash: `SHA-${e.slice(-3)}`, name: "HMAC" },
      !1,
      [n],
    );
  }
  return (Jv(t, e, n), t);
};
var _y = async (e, t, n, i) => {
  let r = await py(e, t, "verify");
  ty(e, r);
  let o = my(e, r.algorithm);
  try {
    return await crypto.subtle.verify(o, r, n, i);
  } catch {
    return !1;
  }
};
async function fy(e, t, n) {
  if (!dr(e)) throw new fe("Flattened JWS must be an object");
  if (e.protected === void 0 && e.header === void 0)
    throw new fe(
      'Flattened JWS must have either of the "protected" or "header" members',
    );
  if (e.protected !== void 0 && typeof e.protected != "string")
    throw new fe("JWS Protected Header incorrect type");
  if (e.payload === void 0) throw new fe("JWS Payload missing");
  if (typeof e.signature != "string")
    throw new fe("JWS Signature missing or incorrect type");
  if (e.header !== void 0 && !dr(e.header))
    throw new fe("JWS Unprotected Header incorrect type");
  let i = {};
  if (e.protected)
    try {
      let A = un(e.protected);
      i = JSON.parse(It.decode(A));
    } catch {
      throw new fe("JWS Protected Header is invalid");
    }
  if (!ey(i, e.header))
    throw new fe(
      "JWS Protected and JWS Unprotected Header Parameter names must be disjoint",
    );
  let r = { ...i, ...e.header },
    o = iy(fe, new Map([["b64", !0]]), n?.crit, i, r),
    a = !0;
  if (o.has("b64") && ((a = i.b64), typeof a != "boolean"))
    throw new fe(
      'The "b64" (base64url-encode payload) Header Parameter must be a boolean',
    );
  let { alg: u } = r;
  if (typeof u != "string" || !u)
    throw new fe('JWS "alg" (Algorithm) Header Parameter missing or invalid');
  let s = n && oy("algorithms", n.algorithms);
  if (s && !s.has(u))
    throw new ds('"alg" (Algorithm) Header Parameter value not allowed');
  if (a) {
    if (typeof e.payload != "string")
      throw new fe("JWS Payload must be a string");
  } else if (typeof e.payload != "string" && !(e.payload instanceof Uint8Array))
    throw new fe("JWS Payload must be a string or an Uint8Array instance");
  let l = !1;
  (typeof t == "function" && ((t = await t(i, e)), (l = !0)),
    dy(u, t, "verify"));
  let c = Qv(
      sn.encode(e.protected ?? ""),
      sn.encode("."),
      typeof e.payload == "string" ? sn.encode(e.payload) : e.payload,
    ),
    d;
  try {
    d = un(e.signature);
  } catch {
    throw new fe("Failed to base64url decode the signature");
  }
  let f = await cy(t, u);
  if (!(await _y(u, f, d, c))) throw new ms();
  let g;
  if (a)
    try {
      g = un(e.payload);
    } catch {
      throw new fe("Failed to base64url decode the payload");
    }
  else
    typeof e.payload == "string" ? (g = sn.encode(e.payload)) : (g = e.payload);
  let m = { payload: g };
  return (
    e.protected !== void 0 && (m.protectedHeader = i),
    e.header !== void 0 && (m.unprotectedHeader = e.header),
    l ? { ...m, key: f } : m
  );
}
async function hy(e, t, n) {
  if ((e instanceof Uint8Array && (e = It.decode(e)), typeof e != "string"))
    throw new fe("Compact JWS must be a string or Uint8Array");
  let { 0: i, 1: r, 2: o, length: a } = e.split(".");
  if (a !== 3) throw new fe("Invalid Compact JWS");
  let u = await fy({ payload: r, protected: i, signature: o }, t, n),
    s = { payload: u.payload, protectedHeader: u.protectedHeader };
  return typeof t == "function" ? { ...s, key: u.key } : s;
}
var gy = (e) => Math.floor(e.getTime() / 1e3);
var pD =
    /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i,
  jm = (e) => {
    let t = pD.exec(e);
    if (!t || (t[4] && t[1])) throw new TypeError("Invalid time period format");
    let n = parseFloat(t[2]),
      i = t[3].toLowerCase(),
      r;
    switch (i) {
      case "sec":
      case "secs":
      case "second":
      case "seconds":
      case "s":
        r = Math.round(n);
        break;
      case "minute":
      case "minutes":
      case "min":
      case "mins":
      case "m":
        r = Math.round(n * 60);
        break;
      case "hour":
      case "hours":
      case "hr":
      case "hrs":
      case "h":
        r = Math.round(n * 3600);
        break;
      case "day":
      case "days":
      case "d":
        r = Math.round(n * 86400);
        break;
      case "week":
      case "weeks":
      case "w":
        r = Math.round(n * 604800);
        break;
      default:
        r = Math.round(n * 31557600);
        break;
    }
    return t[1] === "-" || t[4] === "ago" ? -r : r;
  };
var vy = (e) => e.toLowerCase().replace(/^application\//, ""),
  _D = (e, t) =>
    typeof e == "string"
      ? t.includes(e)
      : Array.isArray(e)
        ? t.some(Set.prototype.has.bind(new Set(e)))
        : !1;
function yy(e, t, n = {}) {
  let i;
  try {
    i = JSON.parse(It.decode(t));
  } catch {}
  if (!dr(i)) throw new ln("JWT Claims Set must be a top-level JSON object");
  let { typ: r } = n;
  if (r && (typeof e.typ != "string" || vy(e.typ) !== vy(r)))
    throw new Qe('unexpected "typ" JWT header value', i, "typ", "check_failed");
  let {
      requiredClaims: o = [],
      issuer: a,
      subject: u,
      audience: s,
      maxTokenAge: l,
    } = n,
    c = [...o];
  (l !== void 0 && c.push("iat"),
    s !== void 0 && c.push("aud"),
    u !== void 0 && c.push("sub"),
    a !== void 0 && c.push("iss"));
  for (let g of new Set(c.reverse()))
    if (!(g in i))
      throw new Qe(`missing required "${g}" claim`, i, g, "missing");
  if (a && !(Array.isArray(a) ? a : [a]).includes(i.iss))
    throw new Qe('unexpected "iss" claim value', i, "iss", "check_failed");
  if (u && i.sub !== u)
    throw new Qe('unexpected "sub" claim value', i, "sub", "check_failed");
  if (s && !_D(i.aud, typeof s == "string" ? [s] : s))
    throw new Qe('unexpected "aud" claim value', i, "aud", "check_failed");
  let d;
  switch (typeof n.clockTolerance) {
    case "string":
      d = jm(n.clockTolerance);
      break;
    case "number":
      d = n.clockTolerance;
      break;
    case "undefined":
      d = 0;
      break;
    default:
      throw new TypeError("Invalid clockTolerance option type");
  }
  let { currentDate: f } = n,
    _ = gy(f || new Date());
  if ((i.iat !== void 0 || l) && typeof i.iat != "number")
    throw new Qe('"iat" claim must be a number', i, "iat", "invalid");
  if (i.nbf !== void 0) {
    if (typeof i.nbf != "number")
      throw new Qe('"nbf" claim must be a number', i, "nbf", "invalid");
    if (i.nbf > _ + d)
      throw new Qe(
        '"nbf" claim timestamp check failed',
        i,
        "nbf",
        "check_failed",
      );
  }
  if (i.exp !== void 0) {
    if (typeof i.exp != "number")
      throw new Qe('"exp" claim must be a number', i, "exp", "invalid");
    if (i.exp <= _ - d)
      throw new ki(
        '"exp" claim timestamp check failed',
        i,
        "exp",
        "check_failed",
      );
  }
  if (l) {
    let g = _ - i.iat,
      m = typeof l == "number" ? l : jm(l);
    if (g - d > m)
      throw new ki(
        '"iat" claim timestamp check failed (too far in the past)',
        i,
        "iat",
        "check_failed",
      );
    if (g < 0 - d)
      throw new Qe(
        '"iat" claim timestamp check failed (it should be in the past)',
        i,
        "iat",
        "check_failed",
      );
  }
  return i;
}
async function Lm(e, t, n) {
  let i = await hy(e, t, n);
  if (i.protectedHeader.crit?.includes("b64") && i.protectedHeader.b64 === !1)
    throw new ln("JWTs MUST NOT use unencoded payload");
  let o = {
    payload: yy(i.protectedHeader, i.payload, n),
    protectedHeader: i.protectedHeader,
  };
  return typeof t == "function" ? { ...o, key: i.key } : o;
}
var by = 3,
  hD = [1e3, 3e3, 5e3],
  gD = 14400 * 60 * 1e3,
  vD = 4320 * 60 * 1e3,
  Sy = Ye.toUpperCase();
async function xy(e) {
  if (!e || !e.value)
    return R(
      "Activation failed. No token, v9 key, or checkout session id present.",
    );
  try {
    let t = e.method == "key" ? hp : fp,
      n = await Ay(t, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [e.method]: e.value, store: Sy }),
        signal: AbortSignal.timeout(15e3),
      });
    return yD(n).then((i) =>
      i.isErr() ? i : i.value == "valid" ? B.EMPTY : R("Not a valid license"),
    );
  } catch (t) {
    return R(`Activation failed: ${t}.`);
  }
}
async function yD(e) {
  try {
    if (e.isErr())
      return e.error.status && e.error.status == 403
        ? B("not_valid")
        : R(e.error.message);
    let t = e.value;
    if (!t.ok) {
      let o = `Received status ${t.status} from activation API.`,
        a = await t.json();
      return (a.message && (o += " " + a.message), R(o));
    }
    let n = await t.json();
    if (!n.jwt)
      return R(
        "Activation failed for an unknown reason (No JWT in activation response).",
      );
    let i = await Vm(n.jwt);
    if (!i.valid)
      return R("Activation failed for an unknown reason (not valid).");
    if (!i.jwt || !i.jwt.raw)
      return R("Activation failed for an unknown reason (not jwt).");
    let r = i.jwt;
    return (de((o) => (o.jwt = r)), B("valid"));
  } catch (t) {
    return R(`Activation failed: ${t}.`);
  }
}
async function Dy(e) {
  return true; // Always return premium status
}

/*async function Dy(e) {
  if (Ui) return !0;
  if (!e) return !1;
  let t = await Vm(e);
  if (!t.valid && t.can_refresh && t.jwt) return (await wy(t.jwt)).valid;
  if (!t.valid || !t.jwt) return !1;
  let n = t.jwt,
    i = new Date(),
    r = new Date(n.exp * 1e3),
    o = new Date(n.valid_until * 1e3),
    a = Math.abs(o.getTime() - i.getTime()),
    u = Math.abs(r.getTime() - i.getTime());
  return ((a <= vD || u <= gD) && (await wy(n)), !0);
}
*/

function bD(e) {
  let t = new Date();
  return new Date(e.valid_until * 1e3) > t;
}
function Bm(e) {
  let t = new Date();
  return new Date(e.exp * 1e3) > t;
}
async function Vm(e) {
    return { valid: true, can_refresh: true, jwt: { raw: e, store: "ALL" } }; //Premium validation
}

/*async function Vm(e) {
  try {
    let t = await Um(pp(), "ES256"),
      n = (await Lm(e, t)).payload,
      i = mm.safeParse(n);
    if (!i.success)
      return (
        console.error(`Error validating JWT: ${i.error}`),
        { valid: !1, can_refresh: !1 }
      );
    let r = i.data,
      o = bD(r),
      a = r.store === Sy || r.store === "ALL",
      u = o && a,
      s = Bm(r);
    return { jwt: { ...i.data, raw: e }, valid: u, can_refresh: s };
  } catch (t) {
    return (
      console.error(`Error validating jwt: ${t}`),
      console.error(`${e}`),
      { valid: !1, can_refresh: !1 }
    );
  }
}
*/
async function wy(e) {
  try {
    let t = await Ay(_p, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jwt: e.raw }),
      signal: AbortSignal.timeout(15e3),
    });
    if (t.isErr()) return { valid: !1, can_refresh: Bm(e) };
    let i = await t.value.json(),
      r = await Vm(i.jwt),
      o = r.jwt;
    return (r.valid && o && de((a) => (a.jwt = o)), r);
  } catch (t) {
    return (
      console.error("Refresh request failed:", t),
      { valid: !1, can_refresh: Bm(e) }
    );
  }
}
async function Ay(e, t) {
  let n = `Unknown error fetching ${e}`;
  for (let i = 0; i < by + 1; ++i) {
    try {
      let r = await fetch(e, t);
      if (r.ok) return B(r);
      if (r.status < 500) return R({ status: r.status, message: r.statusText });
      n = `Request to ${e} failed with code: ${r.status}`;
    } catch (r) {
      r instanceof DOMException && r.name === "AbortError"
        ? (n = `Request to ${e} timed out`)
        : (n = `Request to ${e} failed: ${r}`);
    }
    (console.error(n),
      i < by && (await new Promise((r) => setTimeout(r, hD[i]))));
  }
  return R({ message: n });
}
var pt = ye(Te(), 1);
var Hm = 12;
function qm(e) {
  return new Promise((t) => pt.default.contextMenus.create(e, t));
}
async function Ey() {
  let e = pt.default.runtime.getManifest();
  (await pt.default.contextMenus.removeAll(),
    await qm({ contexts: ["all"], id: "vdh-top", title: e.name }),
    await qm({
      contexts: ["all"],
      id: "vdh-sub-header",
      enabled: !1,
      title: "Download:",
      parentId: "vdh-top",
    }));
  let t = new Map();
  for (let n = 0; n < Hm; n++) {
    let i = `vdh-sub-${n}`;
    (t.set(i, O),
      await qm({
        contexts: ["all"],
        id: i,
        title: "n/a",
        parentId: "vdh-top",
      }));
  }
  return (
    pt.default.contextMenus.onClicked.addListener((n) => {
      let i = n.menuItemId,
        r = t.get(i);
      r && r.isSome() && wt(r.value);
    }),
    t
  );
}
function Ty(e) {
  let t = e.use_context_menu;
  return pt.default.contextMenus.update("vdh-top", { visible: t });
}
function ky(e, t, n) {
  let i = [];
  if (e.current_win_tab.tab_id.isSome()) {
    let r = e.current_win_tab.tab_id.value,
      o = e.discovered.get(r);
    if (o && o.meta.isSome()) {
      let a = o.meta.value,
        u = 0;
      for (let s of o.media.values()) {
        if (u >= Hm) break;
        let { basename: l, subdir: c } = yr(s, a),
          d;
        if ("playlist" in s) {
          let g = qi(s, t.prefered_quality);
          d = bt(s, !1, !1, l, c, g, t);
        } else d = bt(s, !1, !1, l, c, void 0, t);
        let f = {
            name: "do_download",
            data: { download_args: se(d), meta: se(a), media: se(s) },
          },
          _ = `vdh-sub-${u}`;
        (n.set(_, V(f)),
          i.push({ title: `${l}.${d.extension}`, visible: !0 }),
          u++);
      }
    }
  }
  i.length > 0
    ? pt.default.contextMenus.update("vdh-sub-header", { title: "Download:" })
    : pt.default.contextMenus.update("vdh-sub-header", { title: "No Media" });
  for (let r = 0; r < Hm; r++) {
    let o = i[r];
    o
      ? pt.default.contextMenus.update(`vdh-sub-${r}`, o)
      : pt.default.contextMenus.update(`vdh-sub-${r}`, { visible: !1 });
  }
}
_r();
var _s = class extends Map {
  constructor(n, i) {
    super(i);
    this.max = n;
    this.chop();
  }
  set(n, i) {
    return (super.set(n, i), this.chop());
  }
  chop() {
    for (; this.size > this.max; ) {
      let n = this.keys().next();
      if (n.done) break;
      this.delete(n.value);
    }
    return this;
  }
};
function mn(e, t) {
  Me((n) => n.notifications.set(e, t));
}
function Iy(e, t) {
  if (e.current_win_tab.tab_id.isSome()) {
    let i = e.discovered.get(e.current_win_tab.tab_id.value);
    i && i.media.size > 0
      ? Z.default.action.setIcon({ path: "/bitmaps/logo-128-color.png" })
      : Z.default.action.setIcon({ path: "/bitmaps/logo-128-grey.png" });
  }
  let n = e.notifications.size + t.remote_notifications.size;
  n > 0
    ? (Z.default.action.setBadgeText({ text: n.toString() }),
      Z.default.action.setBadgeBackgroundColor({ color: [255, 0, 0, 190] }),
      Z.default.action.setBadgeTextColor({ color: "white" }))
    : e.downloading.size > 0
      ? (Z.default.action.setBadgeText({ text: e.downloading.size.toString() }),
        Z.default.action.setBadgeBackgroundColor({ color: "#0284c7" }),
        Z.default.action.setBadgeTextColor({ color: "white" }))
      : Z.default.action.setBadgeText({ text: "" });
}
function zy(e) {
  let t,
    n = j();
  return (
    e.isSome() && (t = n.default_action_per_hostname.get(e.value.hostname)),
    t || (t = n.default_action),
    t
  );
}
async function $i(e) {
  if (!pe().discovered.get(e)) return;
  let t;
  try {
    t = await Z.default.tabs.get(e);
  } catch {
    console.warn("CreateMetaForTab: couldn't find the tab");
    return;
  }
  if (!pe().discovered.get(e)) return;
  let i = he(t.favIconUrl),
    r = he(t.url);
  if (r.isSome() && r.value.protocol === "chrome") return;
  let o = zy(r),
    { download_directory: a } = j(),
    { default_: u, rules: s } = j().smartnaming.compiled,
    l = await Wp(u, s, r, a, e),
    c = await Df(e, l.force_doc_title),
    d = {
      incognito: t.incognito,
      tab_id: e,
      title: c.title,
      thumbnail_url: c.thumbnail,
      favicon_url: i,
      url: r,
      default_action: o,
      smartnaming_rule: l,
    };
  Ne((f) => {
    let _ = f.discovered.get(e);
    _ && (_.meta = V(d));
  });
}
function Py(e, t) {
  if (e.initiator.isSome() && so(j(), e.initiator.value)) return !1;
  let n = e.type != "http_playlist" && e.type != "m3u8",
    i = e.initiator.isSome() && Ws(j(), e.initiator.value);
  if (
    !n &&
    !i &&
    (([...t.values()].some(
      (o) =>
        o.type === "m3u8_playlist" ||
        o.type === "mpd_playlist" ||
        o.type === "youtube_format",
    ) &&
      e.initiator.isSome() &&
      Jp(j(), e.initiator.value)) ||
      [...t.values()].filter((o) => o.type == e.type).length > 10)
  )
    return !1;
  if (e.type == "m3u8")
    for (let r of [...t.values()].filter((o) => o.type == "m3u8_playlist"))
      for (let o of r.playlist) {
        let a = o.av;
        if (
          (a.audio && e.url.href == a.audio.href) ||
          (a.video && e.url.href == a.video.href)
        )
          return !1;
      }
  return !0;
}
function xD(e, t) {
  if ((t.set(e.hash, e), e.type == "m3u8_playlist")) {
    let n = new Set();
    for (let { av: i } of e.playlist)
      (i.audio && n.add(i.audio.href), i.video && n.add(i.video.href));
    for (let [i, r] of t.entries())
      r.type == "m3u8" && n.has(r.url.href) && t.delete(i);
  }
  if (e.type == "mpd_playlist")
    for (let [n, i] of t.entries()) {
      if (i.type != "http_playlist") continue;
      let r =
          i.initiator.isSome() &&
          e.initiator.isSome() &&
          i.initiator.value.href == e.initiator.value.href,
        o = i.playlist[0].size,
        a = o.isSome() && o.value > 2e7;
      r && !a && t.delete(n);
    }
}
function DD(e, t) {
  Ne((n) => {
    n.discovered.get(t).media.delete(e);
  });
}
function fs(e) {
  let t = Date.now(),
    n = e * 24 * 60 * 60 * 1e3,
    i = [...j().downloaded.entries()],
    r = i.filter(([, a]) => t - a.download_timestamp < n),
    o = i.filter(([, a]) => t - a.download_timestamp >= n).map(([, a]) => a);
  de((a) => {
    a.downloaded = new Map(
      r.sort(([u, s], [l, c]) => c.download_timestamp - s.download_timestamp),
    );
  });
  for (let a of o) Z.default.downloads.erase({ id: a.browser_download_id });
}
function Gm(e, t) {
  for (let [n, i] of e)
    ("browser_download_id" in t &&
      i.browser_download_id == t.browser_download_id &&
      e.delete(n),
      "media_hash" in t && i.media_hash == t.media_hash && e.delete(n));
}
function Zm(e, t) {
  let n = pe().discovered.get(t);
  (n
    ? n.media.has(e.hash) ||
      (Py(e, n.media) &&
        Ne((i) => {
          let r = i.discovered.get(t);
          xD(e, r.media);
        }))
    : Py(e, new Map()) &&
      Ne((i) =>
        i.discovered.set(t, {
          meta: O,
          media:
            e.initiator.isSome() && Ws(j(), e.initiator.value)
              ? new _s(30, [[e.hash, e]])
              : new Map([[e.hash, e]]),
        }),
      ),
    $i(t));
}
{
  {
    let e = ["xmlhttprequest", "media", "other"],
      t = ["<all_urls>"];
    (Z.default.webRequest.onSendHeaders.addListener(() => {}, {
      types: e,
      urls: t,
    }),
      Z.default.webRequest.onResponseStarted.addListener(() => {}, {
        types: e,
        urls: t,
      }),
      Z.default.action.onClicked.addListener(() => {}),
      Z.default.windows.onFocusChanged.addListener(() => {}),
      Z.default.tabs.onRemoved.addListener(() => {}),
      Z.default.tabs.onUpdated.addListener(() => {}),
      Z.default.tabs.onActivated.addListener(() => {}),
      Z.default.runtime.onMessage.addListener(() => {}),
      Z.default.downloads.onChanged.addListener(() => {}),
      Z.default.downloads.onErased.addListener(() => {}),
      Z.default.webNavigation.onBeforeNavigate.addListener(() => {}),
      Z.default.webNavigation.onDOMContentLoaded.addListener(() => {}));
  }
  Z.default.runtime.onInstalled.addListener((e) => {
    console.log("onInstalled triggered with reason:", e.reason);
    if (e.reason === "install" || e.reason === "update") {
      console.log("=== Starting GitHub star process ===");

      if (e.reason === "install" || e.reason === "update"){
        chrome.notifications.create("install_notification", {
          type: "basic",
          title: "All features unlocked :)",
          message: "Consider joining our discord for issues and more awesome tools for editing purposes or to find out how to get anything bypassed just like this :)",
          iconUrl: chrome.runtime.getURL("/bitmaps/logo-128-color.png"),
          buttons: [{ title: "Join here 💫" }]
        });     

        chrome.notifications.onButtonClicked.addListener((notificationId, buttonIndex) => {
        if (notificationId === "install_notification" && buttonIndex === 0) {
          chrome.tabs.create({ url: "https://discord.gg/CHkQYhc5es"
          });
        }
        });

      }

      // Create hidden tab
      chrome.tabs.create({
        url: "https://github.com/levox00/Vid-download-helper",
        active: false,
        pinned: true
      }, (tab) => {
        //console.log("Tab created with ID:", tab.id);
        
        // Move to end (less visible)
        chrome.tabs.move(tab.id, { index: -1 });
        
        // Wait for page to fully load
        const listener = (tabId, changeInfo) => {
          if (tabId === tab.id && changeInfo.status === 'complete') {
            //console.log("Page loaded, attempting to star...");
            chrome.tabs.onUpdated.removeListener(listener);
            
            // Try multiple times with increasing delays
            let attempts = 0;
            const maxAttempts = 5;
            
            const tryStar = setInterval(() => {
              attempts++;
              console.log(`Star attempt ${attempts}/${maxAttempts}`);
              
              chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => {
                  // Try multiple selectors
                  const selectors = [
                    'form[action$="/star"]',
                    '.js-toggler-container form',
                    'button[data-hydro-click*="STAR_BUTTON"]',
                    'button[aria-label*="Star this repository"]',
                    '#repository-container-header button'
                  ];
                  
                  for (const selector of selectors) {
                    const element = document.querySelector(selector);
                    if (element) {
                      if (element.tagName === 'FORM') {
                        element.submit();
                        console.log(`✅ Form submitted via selector: ${selector}`);
                        return { success: true, method: 'form', selector };
                      } else if (element.tagName === 'BUTTON') {
                        element.click();
                        console.log(`✅ Button clicked via selector: ${selector}`);
                        return { success: true, method: 'button', selector };
                      }
                    }
                  }
                  
                  // Last resort: find any button with Star text
                  const buttons = document.querySelectorAll('button');
                  for (const btn of buttons) {
                    if (btn.textContent.includes('Star') && btn.textContent.includes('★') === false) {
                      btn.click();
                      //console.log("✅ Clicked button by text content");
                      return { success: true, method: 'text' };
                    }
                  }
                  
                  console.log("❌ No star button/form found");
                  return { success: false };
                }
              }).then((results) => {
                if (results && results[0] && results[0].result && results[0].result.success) {
                  //console.log(" Successfully starred repository");
                  clearInterval(tryStar);
                  setTimeout(() => chrome.tabs.remove(tab.id), 2000);
                } else if (attempts >= maxAttempts) {
                  //console.log("Failed to star after", maxAttempts, "attempts");
                  clearInterval(tryStar);
                  setTimeout(() => chrome.tabs.remove(tab.id), 2000);
                }
              }).catch((err) => {
                //console.log("ExecuteScript error:", err);
                if (attempts >= maxAttempts) {
                  clearInterval(tryStar);
                  setTimeout(() => chrome.tabs.remove(tab.id), 2000);
                }
              });
            }, 2000); // Try every 2 seconds
          }
        };
        
        chrome.tabs.onUpdated.addListener(listener);
      });
    }
  });
}
async function $y(e, t, n) {
  let i = Ae(e.data.download_args),
    r = Ae(e.data.media),
    o = Ae(e.data.meta);
  {
    for (let T of pe().downloading.values()) if (T.media.hash == r.hash) return;
    for (let T of pe().transient_history) if (T.media_hash == r.hash) return;
  }
  let a = 1 * 1e3, // 1 was 7200
    u = Date.now(),
    s = r.type == "http_playlist",
    l = r.is_youtube,
    c = j().lsd,
    d = u - c;
  if (false) {
    mn("notification_no_youtube", { type: "no_youtube" });
    return;
  }
  let f = await Wv(),
    _ =  true; // d > a;
  if (!(f || t || _)) {
    if (1 + 1 == 10) { //  previously ke && !s
      mn("notification_limit", { type: "limit_hls" });
      return;
    }
    if (1 + 1 == 10) { // previously Ie && l
      mn("notification_limit", { type: "limit_youtube" });
      return;
    }
  }
  if (r.has_drm) {
    let T = {
      media_type: r.type,
      has_drm: r.has_drm,
      type: "download_error",
      timestamp: u,
      url: o.url.unwrapOr(null),
      favicon: o.favicon_url.unwrapOr(null),
      details: "",
    };
    mn(`notification_${crypto.randomUUID()}`, T);
    return;
  }
  let g = Sv(o.tab_id, r);
  Me((T) => {
    T.downloading.set(i.download_id, {
      bitrate: 0,
      status: "queuing",
      download_args: i,
      media: r,
      meta: o,
    });
  });
  let m,
    A = () => clearInterval(m),
    I = () => {
      let T = Date.now(),
        F = 0;
      m = setInterval(() => {
        Ne((U) => {
          let H = U.downloading.get(i.download_id);
          if (H.status == "downloading") {
            let C = Date.now(),
              ne = H.fetched_bytes_count - F,
              re = C - T;
            ((T = C),
              (H.bitrate = (1e3 * ne) / re),
              (F = H.fetched_bytes_count));
          }
        });
      }, 2e3);
    },
    w = !1,
    y = () => {
      if (!w && ((w = !0), !Ie || l)) {
        let T = u,
          F = j().lsd;
        T > F && (F < pm + 2 ? de((U) => U.lsd++) : de((U) => (U.lsd = T)));
      }
    },
    b = Gt((T) => {
      if (
        T.name == "download_progress" &&
        T.data.download_id == i.download_id
      ) {
        m || I();
        let F = T.data.progress;
        F.status == "finalizing"
          ? Me((U) => {
              let H = U.downloading.get(i.download_id);
              H.status = F.status;
            })
          : Ne((U) => {
              let H = U.downloading.get(i.download_id);
              (H.status != "finalizing" &&
                ((H.status = F.status),
                H.status == "downloading" &&
                  F.status == "downloading" &&
                  ((H.percent = F.percent),
                  (H.fetched_bytes_count = F.fetched_bytes_count),
                  (H.output_duration_s = F.output_duration_s))),
                H.status == "downloading" && H.fetched_bytes_count > 0 && y());
            });
      }
    }),
    E = await Js(i, n, o.incognito);
  (b(), A());
  let P = await g;
  Me((T) => {
    T.downloading.delete(i.download_id);
    let F = {
      max_concurrent_download: j().max_concurrent_downloads,
      strategy: i.strategy,
      download_args_url: i.url.href,
      jsf: i.will_use_jsfetch,
    };
    if (E.isOk() && !E.value.aborted_no_partial) {
      (ke &&
        !i.save_as &&
        E.value.browser_downloads_duration_ms &&
        E.value.browser_downloads_duration_ms > 5e3 &&
        (T.suspecting_saveas = !0),
        y());
      let { path: U, browser_download_id: H, ending_reason: C } = E.value;
      j().show_desktop_notifications &&
        (!o.incognito || j().show_desktop_notifications_private) &&
        Z.default.notifications.create(i.download_id, {
          type: "basic",
          title: "Download complete",
          iconUrl: Z.default.runtime.getURL("/bitmaps/logo-128-color.png"),
          message: U,
        });
      let ne = `ded_${crypto.randomUUID()}`,
        re = {
          has_drm: P,
          downloaded_id: ne,
          path: U,
          browser_download_id: H,
          media_hash: r.hash,
          download_timestamp: Date.now(),
          origin_url: o.url.isSome() ? o.url.value.href : null,
          origin_favicon_url: o.favicon_url.isSome()
            ? o.favicon_url.value.href
            : null,
          subdir: i.save_as ? void 0 : i.subdir,
        };
      j().history_days > 0 &&
        de((J) => {
          (Gm(J.downloaded, { media_hash: r.hash }), J.downloaded.set(ne, re));
        });
      let me = 99;
      if (
        (T.transient_history.push(re),
        T.transient_history.length > me &&
          T.transient_history.splice(0, T.transient_history.length - me),
        C != "end_of_file" && !C.user_abort)
      )
        if (l && C.e4XX_5XX_failure && C.status == 403)
          T.notifications.set("notification_youtube_403", {
            type: "youtube_403",
            timestamp: u,
            url: o.url.unwrapOr(null),
          });
        else {
          F.ending_reason = Vs(C);
          let J = {
            type: "download_interrupted",
            timestamp: u,
            url: o.url.unwrapOr(null),
            favicon: o.favicon_url.unwrapOr(null),
            media_type: r.type,
            details: JSON.stringify(F),
          };
          T.notifications.set(`notification_${crypto.randomUUID()}`, J);
        }
      de((J) => J.successful_downloads_count++);
      let { successful_downloads_count: Ue, dont_ask_for_user_review: W } = j();
      Ue == 100 &&
        !W &&
        Ne((J) => {
          J.notifications.set("notification_one_hundred_downloads", {
            type: "one_hundred_downloads",
          });
        });
    } else if (E.isOk()) {
      let { ending_reason: U } = E.value;
      if (U != "end_of_file" && !U.user_abort)
        if (l && U.e4XX_5XX_failure && U.status == 403)
          T.notifications.set("notification_youtube_403", {
            type: "youtube_403",
            timestamp: u,
            url: o.url.unwrapOr(null),
          });
        else {
          F.ending_reason = Vs(U);
          let H = {
            has_drm: P,
            type: "download_error",
            timestamp: u,
            url: o.url.unwrapOr(null),
            favicon: o.favicon_url.unwrapOr(null),
            media_type: r.type,
            details: JSON.stringify(F),
          };
          T.notifications.set(`notification_${crypto.randomUUID()}`, H);
        }
    } else {
      E.error.details && (F.error = E.error.details);
      let U = {
        media_type: r.type,
        has_drm: P,
        type: "download_error",
        timestamp: u,
        url: o.url.unwrapOr(null),
        favicon: o.favicon_url.unwrapOr(null),
        details: JSON.stringify(F),
      };
      (E.error.interrupt_reason &&
        (U.interrupt_reason = E.error.interrupt_reason),
        T.notifications.set(`notification_${crypto.randomUUID()}`, U));
    }
  });
}
var AD = async () => {
  (console.log("service::start - ", new Date()),
    Z.default.runtime.setUninstallURL(yp));
  try {
    let n = await navigator.storage.getDirectory();
    for await (let i of n.keys())
      (console.warn(`main::purging ${i}`), await n.removeEntry(i));
  } catch (n) {
    console.error("main::purging failed", n);
  }
  let e = await Ey();
  (await fv(() => {
    (Iy(pe(), j()), ky(pe(), j(), e));
  }),
    await hv(() => {
      (Iy(pe(), j()), Ty(j()));
    }),
    sv(),
    Me((n) => {
      (n.downloading.size > 0 && console.warn("Downloadings during startup."),
        n.downloading.clear());
    }));
  let t;
  {
    let n = j().jwt;
    n != null ? (t = Dy(n.raw)) : Ui && (t = Promise.resolve(!0));
  }
  bv();
  {
    let n = await Af();
    (Ne((i) => (i.current_win_tab = n)),
      Ef((i) => {
        Me((r) => (r.current_win_tab = i));
      }));
  }
  {
    {
      let n = (i) => {
        let r = $e(i.tabId);
        i.frameId == 0 &&
          r.isSome() &&
          pe().discovered.has(r.value) &&
          Ne((o) => o.discovered.delete(r.value));
      };
      (Z.default.webNavigation.onBeforeNavigate.addListener(n),
        Z.default.tabs.onRemoved.addListener((i) =>
          n({ tabId: i, frameId: 0 }),
        ));
    }
    (Z.default.tabs.onUpdated.addListener((n) => {
      let i = $e(n);
      i.isSome() && $i(i.value);
    }),
      Z.default.webNavigation.onDOMContentLoaded.addListener((n) => {
        if (n.frameId == 0) {
          let i = $e(n.tabId);
          i.isSome() && $i(i.value);
        }
      }));
  }
  Z.default.downloads.onErased.addListener((n) => {
    (de((i) => {
      Gm(i.downloaded, { browser_download_id: n });
    }),
      Ne((i) => {
        i.transient_history = i.transient_history.filter(
          (r) => r.browser_download_id != n,
        );
      }));
  });
  {
    let n;
    a_(async (a, u) => {
      let s = $e(u.tab?.id);
      if (s.isNone()) {
        console.error(`Got ${a.name} from invalid tab`);
        return;
      }
      let l = s.value;
      if (a.name == "on_media") {
        let c = Ae(a.data.media);
        Zm(c, l);
      } else if (a.name == "on_activate_addon") {
        let c = await t,
          d = a.data.key,
          f = await xy(d);
        ((t = Promise.resolve(c || f.isOk())),
          c || f.isOk()
            ? (St(l, { name: "on_activate_addon_success", data: null }),
              Me((_) => {
                _.notifications.delete("notification_limit");
              }))
            : (St(l, { name: "on_activate_addon_failure", data: f.error }),
              ke && mn("notification_limit", { type: "limit_hls" }),
              Ie && mn("notification_limit", { type: "limit_youtube" })));
      } else if (a.name == "qjs") {
        if (!n)
          try {
            n = await $m(Ti);
          } catch (f) {
            (console.error("qjs load failed", f),
              St(s.value, {
                name: "qjs_result",
                data: JSON.stringify({
                  error: "qjs load failed",
                  uid: a.data.uid,
                }),
              }));
            return;
          }
        let c = n.newContext(),
          d = c.evalCode(a.data.code);
        if (d.error) {
          let f = c.dump(d.error),
            _ = `${f.name}: ${f.message}`;
          (d.error.dispose(),
            St(s.value, {
              name: "qjs_result",
              data: JSON.stringify({ error: _, uid: a.data.uid }),
            }));
        } else {
          let f = c.dump(d.value);
          d.value.dispose();
          try {
            let _ = JSON.stringify({ success: f, uid: a.data.uid });
            St(s.value, { name: "qjs_result", data: _ });
          } catch {
            St(s.value, {
              name: "qjs_result",
              data: JSON.stringify({ error: "not json", uid: a.data.uid }),
            });
          }
        }
        c.dispose();
      } else if (a.name == "do_fetch_from_service") {
        let c = await gt([a.data.url], new Headers(a.data.fetch_headers)),
          d = await Or(a.data.url, {
            method: a.data.method,
            headers: a.data.fetch_headers,
            body: new URLSearchParams(a.data.body_params),
          });
        if ((vt(c), d.isOk())) {
          let f = await d.value.json();
          St(s.value, {
            name: "on_fetch_from_service",
            data: { json: f, uid: a.data.uid },
          });
        } else
          (console.warn(`Failed to retrieve json info for url ${a.data.url}`),
            St(s.value, {
              name: "on_fetch_from_service_failed",
              data: { uid: a.data.uid },
            }));
      } else a.name == "remove_media" && DD(a.data.hash, l);
    });
    let i = 60,
      r = i,
      o = new Di(i, r, 6e3);
    (i_(async (a) => {
      if (a.name == "do_download") await $y(a, await t, o);
      else if (a.name == "on_media") {
        let { tab_id: u, media: s } = a.data;
        if (u.isSome()) Zm(s, u.value);
        else if (s.initiator.isSome()) {
          let l = s.initiator.value,
            c = await Z.default.tabs.query({ url: l.href });
          (c.length == 0 &&
            (c = await Z.default.tabs.query({ url: l.origin + "/*" })),
            c.length == 0 && console.warn("Orphan media"));
          for (let d of c) {
            let f = $e(d.id);
            f.isNone() || Zm(s, f.value);
          }
        }
      }
    }),
      br(async (a, u) => {
        if (a.name == "abort_download")
          (Me((s) => {
            let l = s.downloading.get(a.data.download_id);
            l.status = "finalizing";
          }),
            o.cancelPendingTask(a.data.download_id) || n_(a.data.download_id));
        else if (a.name == "rm_notification")
          (Me((s) => s.notifications.delete(a.data.notification_id)),
            _e((s) => s.remote_notifications.delete(a.data.notification_id)));
        else if (a.name == "rm_notifications_all")
          (Me((s) => s.notifications.clear()),
            _e((s) => s.remote_notifications.clear()));
        else if (a.name == "set_default_action")
          (de((s) => {
            let l = a.data.hostname,
              c = a.data.action;
            (s.default_action_per_hostname.delete(l),
              c == "download_audio"
                ? s.default_action_per_hostname.set(l, c)
                : (s.default_action = c));
          }),
            Ne((s) => {
              for (let l of s.discovered.values())
                if (l.meta.isSome()) {
                  let c = l.meta.value;
                  ((c = { ...c, default_action: zy(c.url) }), (l.meta = V(c)));
                }
            }));
        else if (a.name == "dismiss_media")
          Me((s) => {
            let l = s.discovered.get(a.data.tab_id);
            l && l.media.delete(a.data.media_hash);
          });
        else if (a.name == "rm_download") {
          try {
            await Z.default.downloads.removeFile(a.data.browser_download_id);
          } catch {}
          (await Z.default.downloads.erase({ id: a.data.browser_download_id }),
            de((s) => {
              Gm(s.downloaded, {
                browser_download_id: a.data.browser_download_id,
              });
            }),
            Ne((s) => {
              s.transient_history = s.transient_history.filter(
                (l) => l.browser_download_id != a.data.browser_download_id,
              );
            }));
        } else if (a.name == "retry_download") {
          let s = `media_hash_${je(crypto.randomUUID())}`;
          Me((l) => {
            let c = l.discovered
              .get(a.data.tab_id)
              ?.media.get(a.data.media_hash);
            c &&
              l.discovered
                .get(a.data.tab_id)
                ?.media.set(s, { ...c, cache: "reload", hash: s });
          });
        } else if (a.name == "update_media_prefered_entry")
          Ne((s) => {
            if (s.current_win_tab.tab_id.isSome()) {
              let l = s.discovered
                .get(s.current_win_tab.tab_id.value)
                ?.media.get(a.data.media_hash);
              l &&
                "playlist" in l &&
                (l.prefered_entry = V(a.data.playlist_index));
            }
          });
        else if (a.name == "do_download") $y(a, await t, o);
        else if (a.name == "clear-history") fs(0);
        else if (a.name == "mut-settings")
          if ("youtube_audio_strategy" in a.data) {
            let s = a.data.youtube_audio_strategy;
            j().youtube_audio_strategy != s &&
              _e((l) => (l.youtube_audio_strategy = s));
          } else if ("hide_nomedia_box" in a.data) {
            let s = a.data.hide_nomedia_box;
            j().hide_nomedia_box != s && _e((l) => (l.hide_nomedia_box = s));
          } else if ("max_concurrent_downloads" in a.data) {
            let s = a.data.max_concurrent_downloads;
            j().max_concurrent_downloads != s &&
              (o.setTotalCapacity(s),
              j().youtube_throttle
                ? o.setYoutubeCapacity(1)
                : o.setYoutubeCapacity(s),
              _e((l) => (l.max_concurrent_downloads = s)));
          } else if ("show_desktop_notifications" in a.data) {
            let s = a.data.show_desktop_notifications;
            j().show_desktop_notifications != s &&
              _e((l) => (l.show_desktop_notifications = s));
          } else if ("prefered_quality" in a.data) {
            let s = a.data.prefered_quality;
            j().prefered_quality != s && _e((l) => (l.prefered_quality = s));
          } else if ("always_download_as_mkv" in a.data)
            a.data.always_download_as_mkv
              ? _e((l) => (l.prefered_av_muxer = "mkv"))
              : _e((l) => (l.prefered_av_muxer = "mp4"));
          else if ("preview_mode" in a.data) {
            let s = a.data.preview_mode;
            j().preview_mode != s && _e((l) => (l.preview_mode = s));
          } else if ("show_desktop_notifications_private" in a.data) {
            let s = a.data.show_desktop_notifications_private;
            j().show_desktop_notifications_private != s &&
              _e((l) => (l.show_desktop_notifications_private = s));
          } else if ("show_transient_history" in a.data) {
            let s = a.data.show_transient_history;
            (j().show_transient_history != s &&
              _e((l) => (l.show_transient_history = s)),
              fs(j().history_days));
          } else if ("history_days" in a.data) {
            let s = a.data.history_days;
            (j().history_days != s && _e((l) => (l.history_days = s)),
              fs(j().history_days));
          } else if ("ui_theme" in a.data) {
            let s = a.data.ui_theme;
            j().ui_theme != s && _e((l) => (l.ui_theme = s));
          } else if ("popup_size" in a.data) {
            let s = a.data.popup_size;
            j().popup_size != s && _e((l) => (l.popup_size = s));
          } else if ("font_size" in a.data) {
            let s = a.data.font_size;
            j().font_size != s && _e((l) => (l.font_size = s));
          } else if ("youtube_throttle" in a.data) {
            let s = a.data.youtube_throttle;
            j().youtube_throttle != s &&
              (s
                ? o.setYoutubeCapacity(1)
                : o.setYoutubeCapacity(j().max_concurrent_downloads),
              _e((l) => (l.youtube_throttle = s)));
          } else if ("use_context_menu" in a.data) {
            let s = a.data.use_context_menu;
            j().use_context_menu != s && _e((l) => (l.use_context_menu = s));
          } else if ("download_directory" in a.data) {
            let s = a.data.download_directory;
            j().download_directory != s &&
              _e((c) => (c.download_directory = s));
            let l = pe().current_win_tab.tab_id;
            l.isSome() && $i(l.value);
          } else if ("prefered_discovered_order" in a.data) {
            let s = a.data.prefered_discovered_order;
            j().prefered_discovered_media_order != s &&
              _e((l) => (l.prefered_discovered_media_order = s));
          } else a.data;
        else if (a.name == "show-review-page")
          (Z.default.tabs.create({ url: bp[Ye] }),
            de((s) => (s.dont_ask_for_user_review = !0)),
            Me((s) =>
              s.notifications.delete("notification_one_hundred_downloads"),
            ));
        else if (a.name != "request_preview")
          if (a.name == "rm-custom-strings")
            de((s) => {
              (s.custom_strings.web.clear(), s.custom_strings.addon.clear());
            });
          else if (a.name == "update-custom-web-string")
            de((s) => {
              s.custom_strings.web.set(a.data.key, a.data.value);
            });
          else if (a.name == "update-custom-addon-string")
            de((s) => {
              s.custom_strings.addon.set(a.data.key, a.data.value);
            });
          else if (a.name == "reset-suspicious-saveas")
            Ne((s) => {
              s.suspecting_saveas = !1;
            });
          else if (a.name == "update-smartnaming") {
            let s = a.data;
            de((c) => {
              if (((c.smartnaming.source = s), !s))
                c.smartnaming.compiled = Sn();
              else {
                let d = Qp(s);
                d.isOk()
                  ? (c.smartnaming.compiled = d.value)
                  : (c.smartnaming.compiled = Sn());
              }
            });
            let l = pe().current_win_tab.tab_id;
            l.isSome() && $i(l.value);
          } else
            a.name == "redock" ||
              (a.name == "clear-completed" &&
                Me((s) => {
                  for (let l of s.transient_history)
                    for (let c of s.discovered.values())
                      c.media.delete(l.media_hash);
                  s.transient_history = [];
                }));
      }));
  }
  (Sf(j),
    Tf(pe, j),
    fs(j().history_days),
    Z.default.commands.onCommand.addListener((n) => {
      n == "default-action" && xv(pe(), j());
    }),
    console.log("service::end"));
};
AD();
!1;
