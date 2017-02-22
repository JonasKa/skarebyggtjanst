/*1487800802,,JIT Construction: v2847978,en_US*/

/**
 * Copyright Facebook Inc.
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
try {
  window.instgrm || (function (window, fb_fif_window) {
    var apply = Function.prototype.apply;

    function bindContext(fn, thisArg) {
      return function _sdkBound() {
        return apply.call(fn, thisArg, arguments);
      };
    }

    var global = {__type: 'JS_SDK_SANDBOX', window: window, document: window.document};
    var sandboxWhitelist = ['setTimeout', 'setInterval', 'clearTimeout', 'clearInterval'];
    for (var i = 0; i < sandboxWhitelist.length; i++) {
      global[sandboxWhitelist[i]] = bindContext(window[sandboxWhitelist[i]], window);
    }
    (function () {
      var self = window;
      var __DEV__ = 0;

      function emptyFunction() {
      };
      var __transform_includes = {};
      var __annotator, __bodyWrapper;
      var __w, __t;
      var undefined;
      with (this) {
        (function () {
          var a = {}, b = function i(j, k) {
            if (!j && !k)return null;
            var l = {};
            if (typeof j !== 'undefined') l.type = j;
            if (typeof k !== 'undefined') l.signature = k;
            return l;
          }, c = function i(j, k) {
            return b(j && /^[A-Z]/.test(j) ? j : undefined, k && (k.params && k.params.length || k.returns) ? 'function(' + (k.params ? k.params.map(function (l) {
                  return /\?/.test(l) ? '?' + l.replace('?', '') : l;
                }).join(',') : '') + ')' + (k.returns ? ':' + k.returns : '') : undefined);
          }, d = function i(j, k, l) {
            return j;
          }, e = function i(j, k, l) {
            if ('sourcemeta' in __transform_includes) j.__SMmeta = k;
            if ('typechecks' in __transform_includes) {
              var m = c(k ? k.name : undefined, l);
              if (m) __w(j, m);
            }
            return j;
          }, f = function i(j, k, l) {
            return l.apply(j, k);
          }, g = function i(j, k, l, m) {
            if (m && m.params) __t.apply(j, m.params);
            var n = l.apply(j, k);
            if (m && m.returns) __t([n, m.returns]);
            return n;
          }, h = function i(j, k, l, m, n) {
            if (n) {
              if (!n.callId) n.callId = n.module + ':' + (n.line || 0) + ':' + (n.column || 0);
              var o = n.callId;
              a[o] = (a[o] || 0) + 1;
            }
            return l.apply(j, k);
          };
          if (typeof __transform_includes === 'undefined') {
            __annotator = d;
            __bodyWrapper = f;
          } else {
            __annotator = e;
            if ('codeusage' in __transform_includes) {
              __annotator = d;
              __bodyWrapper = h;
              __bodyWrapper.getCodeUsage = function () {
                return a;
              };
              __bodyWrapper.clearCodeUsage = function () {
                a = {};
              };
            } else if ('typechecks' in __transform_includes) {
              __bodyWrapper = g;
            } else __bodyWrapper = f;
          }
        })();
        __t = function (a) {
          return a[0];
        };
        __w = function (a) {
          return a;
        };
        var require, __d;
        (function (a) {
          var b = {}, c = {}, d = ['global', 'require', 'requireDynamic', 'requireLazy', 'module', 'exports'];
          require = function (e, f) {
            if (c.hasOwnProperty(e))return c[e];
            if (!b.hasOwnProperty(e)) {
              if (f)return null;
              throw new Error('Module ' + e + ' has not been defined');
            }
            var g = b[e], h = g.deps, i = g.factory.length, j, k = [];
            for (var l = 0; l < i; l++) {
              switch (h[l]) {
                case 'module':
                  j = g;
                  break;
                case 'exports':
                  j = g.exports;
                  break;
                case 'global':
                  j = a;
                  break;
                case 'require':
                  j = require;
                  break;
                case 'requireDynamic':
                  j = null;
                  break;
                case 'requireLazy':
                  j = null;
                  break;
                default:
                  j = require.call(null, h[l]);
              }
              k.push(j);
            }
            g.factory.apply(a, k);
            c[e] = g.exports;
            return g.exports;
          };
          __d = function (e, f, g, h) {
            if (typeof g == 'function') {
              b[e] = {factory: g, deps: d.concat(f), exports: {}};
              if (h === 3) require.call(null, e);
            } else c[e] = g;
          };
        })(this);
        __d('ES5Array', [], (function a(b, c, d, e, f, g) {
          var h = {};
          h.isArray = function (i) {
            return Object.prototype.toString.call(i) == '[object Array]';
          };
          f.exports = h;
        }), null);
        __d('ES5ArrayPrototype', [], (function a(b, c, d, e, f, g) {
          var h = {};
          h.map = function (i, j) {
            if (typeof i != 'function')throw new TypeError();
            var k, l = this.length, m = new Array(l);
            for (k = 0; k < l; ++k)if (k in this) m[k] = i.call(j, this[k], k, this);
            return m;
          };
          h.forEach = function (i, j) {
            h.map.call(this, i, j);
          };
          h.filter = function (i, j) {
            if (typeof i != 'function')throw new TypeError();
            var k, l, m = this.length, n = [];
            for (k = 0; k < m; ++k)if (k in this) {
              l = this[k];
              if (i.call(j, l, k, this)) n.push(l);
            }
            return n;
          };
          h.every = function (i, j) {
            if (typeof i != 'function')throw new TypeError();
            var k = new Object(this), l = k.length;
            for (var m = 0; m < l; m++)if (m in k)if (!i.call(j, k[m], m, k))return false;
            return true;
          };
          h.some = function (i, j) {
            if (typeof i != 'function')throw new TypeError();
            var k = new Object(this), l = k.length;
            for (var m = 0; m < l; m++)if (m in k)if (i.call(j, k[m], m, k))return true;
            return false;
          };
          h.indexOf = function (i, j) {
            var k = this.length;
            j |= 0;
            if (j < 0) j += k;
            for (; j < k; j++)if (j in this && this[j] === i)return j;
            return -1;
          };
          f.exports = h;
        }), null);
        __d("ES5Date", [], (function a(b, c, d, e, f, g) {
          var h = {};
          h.now = function () {
            return new Date().getTime();
          };
          f.exports = h;
        }), null);
        __d('ES5FunctionPrototype', [], (function a(b, c, d, e, f, g) {
          var h = {};
          h.bind = function (i) {
            if (typeof this != 'function')throw new TypeError('Bind must be called on a function');
            var j = this, k = Array.prototype.slice.call(arguments, 1);

            function l() {
              return j.apply(i, k.concat(Array.prototype.slice.call(arguments)));
            }

            l.displayName = 'bound:' + (j.displayName || j.name || '(?)');
            l.toString = function m() {
              return 'bound: ' + j;
            };
            return l;
          };
          f.exports = h;
        }), null);
        __d('ie8DontEnum', [], (function a(b, c, d, e, f, g) {
          var h = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'prototypeIsEnumerable', 'constructor'], i = {}.hasOwnProperty, j = function k() {
          };
          if ({toString: true}.propertyIsEnumerable('toString')) j = function k(l, m) {
            for (var n = 0; n < h.length; n++) {
              var o = h[n];
              if (i.call(l, o)) m(o);
            }
          };
          f.exports = j;
        }), null);
        __d('ES5Object', ['ie8DontEnum'], (function a(b, c, d, e, f, g, h) {
          var i = {}.hasOwnProperty, j = {};

          function k() {
          }

          j.create = function (l) {
            var m = typeof l;
            if (m != 'object' && m != 'function')throw new TypeError('Object prototype may only be a Object or null');
            k.prototype = l;
            return new k();
          };
          j.keys = function (l) {
            var m = typeof l;
            if (m != 'object' && m != 'function' || l === null)throw new TypeError('Object.keys called on non-object');
            var n = [];
            for (var o in l)if (i.call(l, o)) n.push(o);
            h(l, function (p) {
              return n.push(p);
            });
            return n;
          };
          f.exports = j;
        }), null);
        __d('ES5StringPrototype', [], (function a(b, c, d, e, f, g) {
          var h = {};
          h.trim = function () {
            if (this == null)throw new TypeError('String.prototype.trim called on null or undefined');
            return String.prototype.replace.call(this, /^\s+|\s+$/g, '');
          };
          h.startsWith = function (i) {
            var j = String(this);
            if (this == null)throw new TypeError('String.prototype.startsWith called on null or undefined');
            var k = arguments.length > 1 ? Number(arguments[1]) : 0;
            if (isNaN(k)) k = 0;
            var l = Math.min(Math.max(k, 0), j.length);
            return j.indexOf(String(i), k) == l;
          };
          h.endsWith = function (i) {
            var j = String(this);
            if (this == null)throw new TypeError('String.prototype.endsWith called on null or undefined');
            var k = j.length, l = String(i), m = arguments.length > 1 ? Number(arguments[1]) : k;
            if (isNaN(m)) m = 0;
            var n = Math.min(Math.max(m, 0), k), o = n - l.length;
            if (o < 0)return false;
            return j.lastIndexOf(l, o) == o;
          };
          h.includes = function (i) {
            if (this == null)throw new TypeError('String.prototype.contains called on null or undefined');
            var j = String(this), k = arguments.length > 1 ? Number(arguments[1]) : 0;
            if (isNaN(k)) k = 0;
            return j.indexOf(String(i), k) != -1;
          };
          h.contains = h.includes;
          h.repeat = function (i) {
            if (this == null)throw new TypeError('String.prototype.repeat called on null or undefined');
            var j = String(this), k = i ? Number(i) : 0;
            if (isNaN(k)) k = 0;
            if (k < 0 || k === Infinity)throw RangeError();
            if (k === 1)return j;
            if (k === 0)return '';
            var l = '';
            while (k) {
              if (k & 1) l += j;
              if (k >>= 1) j += j;
            }
            return l;
          };
          f.exports = h;
        }), null);
        __d('ES6Array', [], (function a(b, c, d, e, f, g) {
          'use strict';
          var h = {
            from: function i(j) {
              if (j == null)throw new TypeError('Object is null or undefined');
              var k = arguments[1], l = arguments[2], m = this, n = Object(j), o = typeof Symbol === 'function' ? typeof Symbol === 'function' ? Symbol.iterator : '@@iterator' : '@@iterator', p = typeof k === 'function', q = typeof n[o] === 'function', r = 0, s = void 0, t = void 0;
              if (q) {
                s = typeof m === 'function' ? new m() : [];
                var u = n[o](), v = void 0;
                while (!(v = u.next()).done) {
                  t = v.value;
                  if (p) t = k.call(l, t, r);
                  s[r] = t;
                  r += 1;
                }
                s.length = r;
                return s;
              }
              var w = n.length;
              if (isNaN(w) || w < 0) w = 0;
              s = typeof m === 'function' ? new m(w) : new Array(w);
              while (r < w) {
                t = n[r];
                if (p) t = k.call(l, t, r);
                s[r] = t;
                r += 1;
              }
              s.length = r;
              return s;
            }
          };
          f.exports = h;
        }), null);
        __d('ES6ArrayPrototype', [], (function a(b, c, d, e, f, g) {
          var h = {
            find: function i(j, k) {
              if (this == null)throw new TypeError('Array.prototype.find called on null or undefined');
              if (typeof j !== 'function')throw new TypeError('predicate must be a function');
              var l = h.findIndex.call(this, j, k);
              return l === -1 ? void 0 : this[l];
            }, findIndex: function i(j, k) {
              if (this == null)throw new TypeError('Array.prototype.findIndex called on null or undefined');
              if (typeof j !== 'function')throw new TypeError('predicate must be a function');
              var l = Object(this), m = l.length >>> 0;
              for (var n = 0; n < m; n++)if (j.call(k, l[n], n, l))return n;
              return -1;
            }, fill: function i(j) {
              if (this == null)throw new TypeError('Array.prototype.fill called on null or undefined');
              var k = Object(this), l = k.length >>> 0, m = arguments[1], n = m >> 0, o = n < 0 ? Math.max(l + n, 0) : Math.min(n, l), p = arguments[2], q = p === undefined ? l : p >> 0, r = q < 0 ? Math.max(l + q, 0) : Math.min(q, l);
              while (o < r) {
                k[o] = j;
                o++;
              }
              return k;
            }
          };
          f.exports = h;
        }), null);
        __d('ES6DatePrototype', [], (function a(b, c, d, e, f, g) {
          function h(j) {
            return (j < 10 ? '0' : '') + j;
          }

          var i = {
            toISOString: function j() {
              if (!isFinite(this))throw new Error('Invalid time value');
              var k = this.getUTCFullYear();
              k = (k < 0 ? '-' : k > 9999 ? '+' : '') + ('00000' + Math.abs(k)).slice(0 <= k && k <= 9999 ? -4 : -6);
              return k + '-' + h(this.getUTCMonth() + 1) + '-' + h(this.getUTCDate()) + 'T' + h(this.getUTCHours()) + ':' + h(this.getUTCMinutes()) + ':' + h(this.getUTCSeconds()) + '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
            }
          };
          f.exports = i;
        }), null);
        __d('ES6Number', [], (function a(b, c, d, e, f, g) {
          var h = Math.pow(2, -52), i = Math.pow(2, 53) - 1, j = -1 * i, k = {
            isFinite: function (l) {
              function m(n) {
                return l.apply(this, arguments);
              }

              m.toString = function () {
                return l.toString();
              };
              return m;
            }(function (l) {
              return typeof l == 'number' && isFinite(l);
            }), isNaN: function (l) {
              function m(n) {
                return l.apply(this, arguments);
              }

              m.toString = function () {
                return l.toString();
              };
              return m;
            }(function (l) {
              return typeof l == 'number' && isNaN(l);
            }), isInteger: function l(m) {
              return this.isFinite(m) && Math.floor(m) === m;
            }, isSafeInteger: function l(m) {
              return this.isFinite(m) && m >= this.MIN_SAFE_INTEGER && m <= this.MAX_SAFE_INTEGER && Math.floor(m) === m;
            }, EPSILON: h, MAX_SAFE_INTEGER: i, MIN_SAFE_INTEGER: j
          };
          f.exports = k;
        }), null);
        __d('ES6Object', ['ie8DontEnum'], (function a(b, c, d, e, f, g, h) {
          var i = {}.hasOwnProperty, j = {
            assign: function k(l) {
              if (l == null)throw new TypeError('Object.assign target cannot be null or undefined');
              l = Object(l);
              for (var m = arguments.length, n = Array(m > 1 ? m - 1 : 0), o = 1; o < m; o++)n[o - 1] = arguments[o];
              for (var p = 0; p < n.length; p++) {
                var q = n[p];
                if (q == null)continue;
                q = Object(q);
                for (var r in q)if (i.call(q, r)) l[r] = q[r];
                h(q, function (s) {
                  return l[s] = q[s];
                });
              }
              return l;
            }, is: function k(l, m) {
              if (l === m) {
                return l !== 0 || 1 / l === 1 / m;
              } else return l !== l && m !== m;
            }
          };
          f.exports = j;
        }), null);
        __d('ES7Object', ['ie8DontEnum'], (function a(b, c, d, e, f, g, h) {
          var i = {}.hasOwnProperty, j = {};
          j.entries = function (k) {
            if (k == null)throw new TypeError('Object.entries called on non-object');
            var l = [];
            for (var m in k)if (i.call(k, m)) l.push([m, k[m]]);
            h(k, function (n) {
              return l.push([n, k[n]]);
            });
            return l;
          };
          j.values = function (k) {
            if (k == null)throw new TypeError('Object.values called on non-object');
            var l = [];
            for (var m in k)if (i.call(k, m)) l.push(k[m]);
            h(k, function (n) {
              return l.push(k[n]);
            });
            return l;
          };
          f.exports = j;
        }), null);
        __d('ES7StringPrototype', [], (function a(b, c, d, e, f, g) {
          var h = {};
          h.trimLeft = function () {
            return this.replace(/^\s+/, '');
          };
          h.trimRight = function () {
            return this.replace(/\s+$/, '');
          };
          f.exports = h;
        }), null);
        /**
         * @providesModule JSON3
         * @preserve-header
         *
         *! JSON v3.2.3 | http://bestiejs.github.com/json3 | Copyright 2012, Kit Cambridge | http://kit.mit-license.org
         */__d("JSON3", [], (function a(b, c, d, e, f, g) {
          (function () {
            var h = {}.toString, i, j, k, l = f.exports = {}, m = '{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}', n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca = new Date(-3509827334573292), da, ea, fa;
            try {
              ca = ca.getUTCFullYear() == -109252 && ca.getUTCMonth() === 0 && ca.getUTCDate() == 1 && ca.getUTCHours() == 10 && ca.getUTCMinutes() == 37 && ca.getUTCSeconds() == 6 && ca.getUTCMilliseconds() == 708;
            } catch (ga) {
            }
            if (!ca) {
              da = Math.floor;
              ea = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
              fa = function (ha, ia) {
                return ea[ia] + 365 * (ha - 1970) + da((ha - 1969 + (ia = +(ia > 1))) / 4) - da((ha - 1901 + ia) / 100) + da((ha - 1601 + ia) / 400);
              };
            }
            if (typeof JSON == "object" && JSON) {
              l.stringify = JSON.stringify;
              l.parse = JSON.parse;
            }
            if ((n = typeof l.stringify == "function" && !fa)) {
              (ca = function () {
                return 1;
              }).toJSON = ca;
              try {
                n = l.stringify(0) === "0" && l.stringify(new Number()) === "0" && l.stringify(new String()) == '""' && l.stringify(h) === k && l.stringify(k) === k && l.stringify() === k && l.stringify(ca) === "1" && l.stringify([ca]) == "[1]" && l.stringify([k]) == "[null]" && l.stringify(null) == "null" && l.stringify([k, h, null]) == "[null,null,null]" && l.stringify({result: [ca, true, false, null, "\0\b\n\f\r\t"]}) == m && l.stringify(null, ca) === "1" && l.stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" && l.stringify(new Date(-8.64e+15)) == '"-271821-04-20T00:00:00.000Z"' && l.stringify(new Date(8.64e+15)) == '"+275760-09-13T00:00:00.000Z"' && l.stringify(new Date(-62198755200000)) == '"-000001-01-01T00:00:00.000Z"' && l.stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
              } catch (ga) {
                n = false;
              }
            }
            if (typeof l.parse == "function")try {
              if (l.parse("0") === 0 && !l.parse(false)) {
                ca = l.parse(m);
                if ((s = ca.A.length == 5 && ca.A[0] == 1)) {
                  try {
                    s = !l.parse('"\t"');
                  } catch (ga) {
                  }
                  if (s)try {
                    s = l.parse("01") != 1;
                  } catch (ga) {
                  }
                }
              }
            } catch (ga) {
              s = false;
            }
            ca = m = null;
            if (!n || !s) {
              if (!(i = {}.hasOwnProperty)) i = function (ha) {
                var ia = {}, ja;
                if ((ia.__proto__ = null, ia.__proto__ = {toString: 1}, ia).toString != h) {
                  i = function (ka) {
                    var la = this.__proto__, ma = ka in (this.__proto__ = null, this);
                    this.__proto__ = la;
                    return ma;
                  };
                } else {
                  ja = ia.constructor;
                  i = function (ka) {
                    var la = (this.constructor || ja).prototype;
                    return ka in this && !(ka in la && this[ka] === la[ka]);
                  };
                }
                ia = null;
                return i.call(this, ha);
              };
              j = function (ha, ia) {
                var ja = 0, ka, la, ma, na;
                (ka = function () {
                  this.valueOf = 0;
                }).prototype.valueOf = 0;
                la = new ka();
                for (ma in la)if (i.call(la, ma)) ja++;
                ka = la = null;
                if (!ja) {
                  la = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                  na = function (oa, pa) {
                    var qa = h.call(oa) == "[object Function]", ra, sa;
                    for (ra in oa)if (!(qa && ra == "prototype") && i.call(oa, ra)) pa(ra);
                    for (sa = la.length; ra = la[--sa]; i.call(oa, ra) && pa(ra));
                  };
                } else if (ja == 2) {
                  na = function (oa, pa) {
                    var qa = {}, ra = h.call(oa) == "[object Function]", sa;
                    for (sa in oa)if (!(ra && sa == "prototype") && !i.call(qa, sa) && (qa[sa] = 1) && i.call(oa, sa)) pa(sa);
                  };
                } else na = function (oa, pa) {
                  var qa = h.call(oa) == "[object Function]", ra, sa;
                  for (ra in oa)if (!(qa && ra == "prototype") && i.call(oa, ra) && !(sa = ra === "constructor")) pa(ra);
                  if (sa || i.call(oa, (ra = "constructor"))) pa(ra);
                };
                return na(ha, ia);
              };
              if (!n) {
                o = {"\\": "\\\\", '"': '\\"', "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t"};
                p = function (ha, ia) {
                  return ("000000" + (ia || 0)).slice(-ha);
                };
                q = function (ha) {
                  var ia = '"', ja = 0, ka;
                  for (; ka = ha.charAt(ja); ja++)ia += '\\"\b\f\n\r\t'.indexOf(ka) > -1 ? o[ka] : ka < " " ? "\\u00" + p(2, ka.charCodeAt(0).toString(16)) : ka;
                  return ia + '"';
                };
                r = function (ha, ia, ja, ka, la, ma, na) {
                  var oa = ia[ha], pa, qa, ra, sa, ta, ua, va, wa, xa, ya, za, ab, bb, cb, db;
                  if (typeof oa == "object" && oa) {
                    pa = h.call(oa);
                    if (pa == "[object Date]" && !i.call(oa, "toJSON")) {
                      if (oa > -1 / 0 && oa < 1 / 0) {
                        if (fa) {
                          sa = da(oa / 86400000);
                          for (qa = da(sa / 365.2425) + 1970 - 1; fa(qa + 1, 0) <= sa; qa++);
                          for (ra = da((sa - fa(qa, 0)) / 30.42); fa(qa, ra + 1) <= sa; ra++);
                          sa = 1 + sa - fa(qa, ra);
                          ta = (oa % 86400000 + 86400000) % 86400000;
                          ua = da(ta / 3600000) % 24;
                          va = da(ta / 60000) % 60;
                          wa = da(ta / 1000) % 60;
                          xa = ta % 1000;
                        } else {
                          qa = oa.getUTCFullYear();
                          ra = oa.getUTCMonth();
                          sa = oa.getUTCDate();
                          ua = oa.getUTCHours();
                          va = oa.getUTCMinutes();
                          wa = oa.getUTCSeconds();
                          xa = oa.getUTCMilliseconds();
                        }
                        oa = (qa <= 0 || qa >= 10000 ? (qa < 0 ? "-" : "+") + p(6, qa < 0 ? -qa : qa) : p(4, qa)) + "-" + p(2, ra + 1) + "-" + p(2, sa) + "T" + p(2, ua) + ":" + p(2, va) + ":" + p(2, wa) + "." + p(3, xa) + "Z";
                      } else oa = null;
                    } else if (typeof oa.toJSON == "function" && ((pa != "[object Number]" && pa != "[object String]" && pa != "[object Array]") || i.call(oa, "toJSON"))) oa = oa.toJSON(ha);
                  }
                  if (ja) oa = ja.call(ia, ha, oa);
                  if (oa === null)return "null";
                  pa = h.call(oa);
                  if (pa == "[object Boolean]") {
                    return "" + oa;
                  } else if (pa == "[object Number]") {
                    return oa > -1 / 0 && oa < 1 / 0 ? "" + oa : "null";
                  } else if (pa == "[object String]")return q(oa);
                  if (typeof oa == "object") {
                    for (bb = na.length; bb--;)if (na[bb] === oa)throw TypeError();
                    na.push(oa);
                    ya = [];
                    cb = ma;
                    ma += la;
                    if (pa == "[object Array]") {
                      for (ab = 0, bb = oa.length; ab < bb; db || (db = true), ab++) {
                        za = r(ab, oa, ja, ka, la, ma, na);
                        ya.push(za === k ? "null" : za);
                      }
                      return db ? (la ? "[\n" + ma + ya.join(",\n" + ma) + "\n" + cb + "]" : ("[" + ya.join(",") + "]")) : "[]";
                    } else {
                      j(ka || oa, function (eb) {
                        var fb = r(eb, oa, ja, ka, la, ma, na);
                        if (fb !== k) ya.push(q(eb) + ":" + (la ? " " : "") + fb);
                        db || (db = true);
                      });
                      return db ? (la ? "{\n" + ma + ya.join(",\n" + ma) + "\n" + cb + "}" : ("{" + ya.join(",") + "}")) : "{}";
                    }
                    na.pop();
                  }
                };
                l.stringify = function (ha, ia, ja) {
                  var ka, la, ma, na, oa, pa;
                  if (typeof ia == "function" || typeof ia == "object" && ia)if (h.call(ia) == "[object Function]") {
                    la = ia;
                  } else if (h.call(ia) == "[object Array]") {
                    ma = {};
                    for (na = 0, oa = ia.length; na < oa; pa = ia[na++], ((h.call(pa) == "[object String]" || h.call(pa) == "[object Number]") && (ma[pa] = 1)));
                  }
                  if (ja)if (h.call(ja) == "[object Number]") {
                    if ((ja -= ja % 1) > 0)for (ka = "", ja > 10 && (ja = 10); ka.length < ja; ka += " ");
                  } else if (h.call(ja) == "[object String]") ka = ja.length <= 10 ? ja : ja.slice(0, 10);
                  return r("", (pa = {}, pa[""] = ha, pa), la, ma, ka, "", []);
                };
              }
              if (!s) {
                t = String.fromCharCode;
                u = {"\\": "\\", '"': '"', "/": "/", b: "\b", t: "\t", n: "\n", f: "\f", r: "\r"};
                v = function () {
                  aa = ba = null;
                  throw SyntaxError();
                };
                w = function () {
                  var ha = ba, ia = ha.length, ja, ka, la, ma, na;
                  while (aa < ia) {
                    ja = ha.charAt(aa);
                    if ("\t\r\n ".indexOf(ja) > -1) {
                      aa++;
                    } else if ("{}[]:,".indexOf(ja) > -1) {
                      aa++;
                      return ja;
                    } else if (ja == '"') {
                      for (ka = "@", aa++; aa < ia;) {
                        ja = ha.charAt(aa);
                        if (ja < " ") {
                          v();
                        } else if (ja == "\\") {
                          ja = ha.charAt(++aa);
                          if ('\\"/btnfr'.indexOf(ja) > -1) {
                            ka += u[ja];
                            aa++;
                          } else if (ja == "u") {
                            la = ++aa;
                            for (ma = aa + 4; aa < ma; aa++) {
                              ja = ha.charAt(aa);
                              if (!(ja >= "0" && ja <= "9" || ja >= "a" && ja <= "f" || ja >= "A" && ja <= "F")) v();
                            }
                            ka += t("0x" + ha.slice(la, aa));
                          } else v();
                        } else {
                          if (ja == '"')break;
                          ka += ja;
                          aa++;
                        }
                      }
                      if (ha.charAt(aa) == '"') {
                        aa++;
                        return ka;
                      }
                      v();
                    } else {
                      la = aa;
                      if (ja == "-") {
                        na = true;
                        ja = ha.charAt(++aa);
                      }
                      if (ja >= "0" && ja <= "9") {
                        if (ja == "0" && (ja = ha.charAt(aa + 1), ja >= "0" && ja <= "9")) v();
                        na = false;
                        for (; aa < ia && (ja = ha.charAt(aa), ja >= "0" && ja <= "9"); aa++);
                        if (ha.charAt(aa) == ".") {
                          ma = ++aa;
                          for (; ma < ia && (ja = ha.charAt(ma), ja >= "0" && ja <= "9"); ma++);
                          if (ma == aa) v();
                          aa = ma;
                        }
                        ja = ha.charAt(aa);
                        if (ja == "e" || ja == "E") {
                          ja = ha.charAt(++aa);
                          if (ja == "+" || ja == "-") aa++;
                          for (ma = aa; ma < ia && (ja = ha.charAt(ma), ja >= "0" && ja <= "9"); ma++);
                          if (ma == aa) v();
                          aa = ma;
                        }
                        return +ha.slice(la, aa);
                      }
                      if (na) v();
                      if (ha.slice(aa, aa + 4) == "true") {
                        aa += 4;
                        return true;
                      } else if (ha.slice(aa, aa + 5) == "false") {
                        aa += 5;
                        return false;
                      } else if (ha.slice(aa, aa + 4) == "null") {
                        aa += 4;
                        return null;
                      }
                      v();
                    }
                  }
                  return "$";
                };
                x = function (ha) {
                  var ia, ja, ka;
                  if (ha == "$") v();
                  if (typeof ha == "string") {
                    if (ha.charAt(0) == "@")return ha.slice(1);
                    if (ha == "[") {
                      ia = [];
                      for (; ; ja || (ja = true)) {
                        ha = w();
                        if (ha == "]")break;
                        if (ja)if (ha == ",") {
                          ha = w();
                          if (ha == "]") v();
                        } else v();
                        if (ha == ",") v();
                        ia.push(x(ha));
                      }
                      return ia;
                    } else if (ha == "{") {
                      ia = {};
                      for (; ; ja || (ja = true)) {
                        ha = w();
                        if (ha == "}")break;
                        if (ja)if (ha == ",") {
                          ha = w();
                          if (ha == "}") v();
                        } else v();
                        if (ha == "," || typeof ha != "string" || ha.charAt(0) != "@" || w() != ":") v();
                        ia[ha.slice(1)] = x(w());
                      }
                      return ia;
                    }
                    v();
                  }
                  return ha;
                };
                z = function (ha, ia, ja) {
                  var ka = y(ha, ia, ja);
                  if (ka === k) {
                    delete ha[ia];
                  } else ha[ia] = ka;
                };
                y = function (ha, ia, ja) {
                  var ka = ha[ia], la;
                  if (typeof ka == "object" && ka)if (h.call(ka) == "[object Array]") {
                    for (la = ka.length; la--;)z(ka, la, ja);
                  } else j(ka, function (ma) {
                    z(ka, ma, ja);
                  });
                  return ja.call(ha, ia, ka);
                };
                l.parse = function (ha, ia) {
                  aa = 0;
                  ba = ha;
                  var ja = x(w());
                  if (w() != "$") v();
                  aa = ba = null;
                  return ia && h.call(ia) == "[object Function]" ? y((ca = {}, ca[""] = ja, ca), "", ia) : ja;
                };
              }
            }
          }).call(this);
        }), null);
        __d('ES', ['ES5ArrayPrototype', 'ES5FunctionPrototype', 'ES5StringPrototype', 'ES5Array', 'ES5Object', 'ES5Date', 'JSON3', 'ES6Array', 'ES6Object', 'ES6ArrayPrototype', 'ES6DatePrototype', 'ES6Number', 'ES7StringPrototype', 'ES7Object'], (function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
          var v = {}.toString, w = {'JSON.stringify': n.stringify, 'JSON.parse': n.parse}, x = {
            'Array.prototype': h,
            'Function.prototype': i,
            'String.prototype': j,
            Object: l,
            Array: k,
            Date: m
          }, y = {Object: p, 'Array.prototype': q, 'Date.prototype': r, Number: s, Array: o}, z = {
            Object: u,
            'String.prototype': t
          };

          function aa(ca) {
            for (var da in ca) {
              if (!ca.hasOwnProperty(da))continue;
              var ea = ca[da], fa = da.split('.');
              if (fa.length === 2) {
                var ga = fa[0], ha = fa[1];
                if (!ga || !ha || !window[ga] || !window[ga][ha]) {
                  var ia = ga ? window[ga] : '-', ja = ga && window[ga] && ha ? window[ga][ha] : '-';
                  throw new Error('Unexpected state (t11975770): ' + (ga + ', ' + ha + ', ' + ia + ', ' + ja + ', ' + da));
                }
              }
              var ka = fa.length === 2 ? window[fa[0]][fa[1]] : window[da];
              for (var la in ea) {
                if (!ea.hasOwnProperty(la))continue;
                if (typeof ea[la] !== 'function') {
                  w[da + '.' + la] = ea[la];
                  continue;
                }
                var ma = ka[la];
                w[da + '.' + la] = ma && /\{\s+\[native code\]\s\}/.test(ma) ? ma : ea[la];
              }
            }
          }

          aa(x);
          aa(y);
          aa(z);
          function ba(ca, da, ea) {
            var fa = ea ? v.call(ca).slice(8, -1) + '.prototype' : ca, ga = w[fa + '.' + da] || ca[da];
            if (typeof ga === 'function') {
              for (var ha = arguments.length, ia = Array(ha > 3 ? ha - 3 : 0), ja = 3; ja < ha; ja++)ia[ja - 3] = arguments[ja];
              return ga.apply(ca, ia);
            } else if (ga)return ga;
            throw new Error('Polyfill ' + fa + ' does not have implementation of ' + da);
          }

          f.exports = ba;
        }), null);
        __d('sdk.babelHelpers', ['ES5FunctionPrototype', 'ES5Object', 'ES6Object'], (function a(b, c, d, e, f, g, h, i, j) {
          var k = {}, l = Object.prototype.hasOwnProperty;
          k.inherits = function (m, n) {
            j.assign(m, n);
            m.prototype = i.create(n && n.prototype);
            m.prototype.constructor = m;
            m.__superConstructor__ = n;
            return n;
          };
          k._extends = j.assign;
          k['extends'] = k._extends;
          k.objectWithoutProperties = function (m, n) {
            var o = {};
            for (var p in m) {
              if (!l.call(m, p) || n.indexOf(p) >= 0)continue;
              o[p] = m[p];
            }
            return o;
          };
          k.taggedTemplateLiteralLoose = function (m, n) {
            m.raw = n;
            return m;
          };
          k.bind = h.bind;
          f.exports = k;
        }), null);
        var ES = require('ES');
        var babelHelpers = require('sdk.babelHelpers');
        (function (a, b) {
          var c = 'keys', d = 'values', e = 'entries', f = function () {
            var l = h(Array), m = void 0;
            if (!l) m = function () {
              function n(o, p) {
                'use strict';
                this.$ArrayIterator1 = o;
                this.$ArrayIterator2 = p;
                this.$ArrayIterator3 = 0;
              }

              n.prototype.next = function () {
                'use strict';
                if (this.$ArrayIterator1 == null)return {value: b, done: true};
                var o = this.$ArrayIterator1, p = this.$ArrayIterator1.length, q = this.$ArrayIterator3, r = this.$ArrayIterator2;
                if (q >= p) {
                  this.$ArrayIterator1 = b;
                  return {value: b, done: true};
                }
                this.$ArrayIterator3 = q + 1;
                if (r === c) {
                  return {value: q, done: false};
                } else if (r === d) {
                  return {value: o[q], done: false};
                } else if (r === e)return {value: [q, o[q]], done: false};
              };
              n.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function () {
                'use strict';
                return this;
              };
              return n;
            }();
            return {
              keys: l ? function (n) {
                  return n.keys();
                } : function (n) {
                  return new m(n, c);
                }, values: l ? function (n) {
                  return n.values();
                } : function (n) {
                  return new m(n, d);
                }, entries: l ? function (n) {
                  return n.entries();
                } : function (n) {
                  return new m(n, e);
                }
            };
          }(), g = function () {
            var l = h(String), m = void 0;
            if (!l) m = function () {
              function n(o) {
                'use strict';
                this.$StringIterator1 = o;
                this.$StringIterator2 = 0;
              }

              n.prototype.next = function () {
                'use strict';
                if (this.$StringIterator1 == null)return {value: b, done: true};
                var o = this.$StringIterator2, p = this.$StringIterator1, q = p.length;
                if (o >= q) {
                  this.$StringIterator1 = b;
                  return {value: b, done: true};
                }
                var r = void 0, s = p.charCodeAt(o);
                if (s < 55296 || s > 56319 || o + 1 === q) {
                  r = p[o];
                } else {
                  var t = p.charCodeAt(o + 1);
                  if (t < 56320 || t > 57343) {
                    r = p[o];
                  } else r = p[o] + p[o + 1];
                }
                this.$StringIterator2 = o + r.length;
                return {value: r, done: false};
              };
              n.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function () {
                'use strict';
                return this;
              };
              return n;
            }();
            return {
              keys: function n() {
                throw TypeError('Strings default iterator doesn\'t implement keys.');
              }, values: l ? function (n) {
                  return n[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();
                } : function (n) {
                  return new m(n);
                }, entries: function n() {
                throw TypeError('Strings default iterator doesn\'t implement entries.');
              }
            };
          }();

          function h(l) {
            return typeof l.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] === 'function' && typeof l.prototype.values === 'function' && typeof l.prototype.keys === 'function' && typeof l.prototype.entries === 'function';
          }

          function i(l, m) {
            'use strict';
            this.$ObjectIterator1 = l;
            this.$ObjectIterator2 = m;
            this.$ObjectIterator3 = ES('Object', 'keys', false, l);
            this.$ObjectIterator4 = 0;
          }

          i.prototype.next = function () {
            'use strict';
            var l = this.$ObjectIterator3.length, m = this.$ObjectIterator4, n = this.$ObjectIterator2, o = this.$ObjectIterator3[m];
            if (m >= l) {
              this.$ObjectIterator1 = b;
              return {value: b, done: true};
            }
            this.$ObjectIterator4 = m + 1;
            if (n === c) {
              return {value: o, done: false};
            } else if (n === d) {
              return {value: this.$ObjectIterator1[o], done: false};
            } else if (n === e)return {value: [o, this.$ObjectIterator1[o]], done: false};
          };
          i.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function () {
            'use strict';
            return this;
          };
          var j = {
            keys: function l(m) {
              return new i(m, c);
            }, values: function l(m) {
              return new i(m, d);
            }, entries: function l(m) {
              return new i(m, e);
            }
          };

          function k(l, m) {
            if (typeof l === 'string') {
              return g[m || d](l);
            } else if (ES('Array', 'isArray', false, l)) {
              return f[m || d](l);
            } else if (l[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']) {
              return l[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();
            } else return j[m || e](l);
          }

          ES('Object', 'assign', false, k, {
            KIND_KEYS: c, KIND_VALUES: d, KIND_ENTRIES: e, keys: function l(m) {
              return k(m, c);
            }, values: function l(m) {
              return k(m, d);
            }, entries: function l(m) {
              return k(m, e);
            }, generic: j.entries
          });
          a.FB_enumerate = k;
        })(typeof global === 'undefined' ? this : global);
        (function (a, b) {
          var c = a.window || a;

          function d() {
            return 'f' + (Math.random() * (1 << 30)).toString(16).replace('.', '');
          }

          function e(j) {
            var k = j ? j.ownerDocument || j : document, l = k.defaultView || c;
            return !!(j && (typeof l.Node === 'function' ? j instanceof l.Node : typeof j === 'object' && typeof j.nodeType === 'number' && typeof j.nodeName === 'string'));
          }

          function f(j) {
            var k = c[j];
            if (k == null)return true;
            if (typeof c.Symbol !== 'function')return true;
            var l = k.prototype;
            return k == null || typeof k !== 'function' || typeof l.clear !== 'function' || new k().size !== 0 || typeof l.keys !== 'function' || typeof l['for' + 'Each'] !== 'function';
          }

          var g = a.FB_enumerate, h = function () {
            if (!f('Map'))return c.Map;
            var j = 'key', k = 'value', l = 'key+value', m = '$map_', n = void 0, o = 'IE_HASH_';

            function p(ba) {
              'use strict';
              if (!u(this))throw new TypeError('Wrong map object type.');
              t(this);
              if (ba != null) {
                var ca = g(ba), da = void 0;
                while (!(da = ca.next()).done) {
                  if (!u(da.value))throw new TypeError('Expected iterable items to be pair objects.');
                  this.set(da.value[0], da.value[1]);
                }
              }
            }

            p.prototype.clear = function () {
              'use strict';
              t(this);
            };
            p.prototype.has = function (ba) {
              'use strict';
              var ca = r(this, ba);
              return !!(ca != null && this._mapData[ca]);
            };
            p.prototype.set = function (ba, ca) {
              'use strict';
              var da = r(this, ba);
              if (da != null && this._mapData[da]) {
                this._mapData[da][1] = ca;
              } else {
                da = this._mapData.push([ba, ca]) - 1;
                s(this, ba, da);
                this.size += 1;
              }
              return this;
            };
            p.prototype.get = function (ba) {
              'use strict';
              var ca = r(this, ba);
              if (ca == null) {
                return b;
              } else return this._mapData[ca][1];
            };
            p.prototype['delete'] = function (ba) {
              'use strict';
              var ca = r(this, ba);
              if (ca != null && this._mapData[ca]) {
                s(this, ba, b);
                this._mapData[ca] = b;
                this.size -= 1;
                return true;
              } else return false;
            };
            p.prototype.entries = function () {
              'use strict';
              return new q(this, l);
            };
            p.prototype.keys = function () {
              'use strict';
              return new q(this, j);
            };
            p.prototype.values = function () {
              'use strict';
              return new q(this, k);
            };
            p.prototype.forEach = function (ba, ca) {
              'use strict';
              if (typeof ba !== 'function')throw new TypeError('Callback must be callable.');
              var da = ES(ba, 'bind', true, ca || b), ea = this._mapData;
              for (var fa = 0; fa < ea.length; fa++) {
                var ga = ea[fa];
                if (ga != null) da(ga[1], ga[0], this);
              }
            };
            p.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function () {
              'use strict';
              return this.entries();
            };
            function q(ba, ca) {
              'use strict';
              if (!(u(ba) && ba._mapData))throw new TypeError('Object is not a map.');
              if (ES([j, l, k], 'indexOf', true, ca) === -1)throw new Error('Invalid iteration kind.');
              this._map = ba;
              this._nextIndex = 0;
              this._kind = ca;
            }

            q.prototype.next = function () {
              'use strict';
              if (!this instanceof p)throw new TypeError('Expected to be called on a MapIterator.');
              var ba = this._map, ca = this._nextIndex, da = this._kind;
              if (ba == null)return v(b, true);
              var ea = ba._mapData;
              while (ca < ea.length) {
                var fa = ea[ca];
                ca += 1;
                this._nextIndex = ca;
                if (fa)if (da === j) {
                  return v(fa[0], false);
                } else if (da === k) {
                  return v(fa[1], false);
                } else if (da)return v(fa, false);
              }
              this._map = b;
              return v(b, true);
            };
            q.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function () {
              'use strict';
              return this;
            };
            function r(ba, ca) {
              if (u(ca)) {
                var da = z(ca);
                return da ? ba._objectIndex[da] : b;
              } else {
                var ea = m + ca;
                if (typeof ca === 'string') {
                  return ba._stringIndex[ea];
                } else return ba._otherIndex[ea];
              }
            }

            function s(ba, ca, da) {
              var ea = da == null;
              if (u(ca)) {
                var fa = z(ca);
                if (!fa) fa = aa(ca);
                if (ea) {
                  delete ba._objectIndex[fa];
                } else ba._objectIndex[fa] = da;
              } else {
                var ga = m + ca;
                if (typeof ca === 'string') {
                  if (ea) {
                    delete ba._stringIndex[ga];
                  } else ba._stringIndex[ga] = da;
                } else if (ea) {
                  delete ba._otherIndex[ga];
                } else ba._otherIndex[ga] = da;
              }
            }

            function t(ba) {
              ba._mapData = [];
              ba._objectIndex = {};
              ba._stringIndex = {};
              ba._otherIndex = {};
              ba.size = 0;
            }

            function u(ba) {
              return ba != null && (typeof ba === 'object' || typeof ba === 'function');
            }

            function v(ba, ca) {
              return {value: ba, done: ca};
            }

            p.__isES5 = function () {
              try {
                Object.defineProperty({}, '__.$#x', {});
                return true;
              } catch (ba) {
                return false;
              }
            }();
            function w(ba) {
              if (!p.__isES5 || !Object.isExtensible) {
                return true;
              } else return Object.isExtensible(ba);
            }

            function x(ba) {
              var ca = void 0;
              switch (ba.nodeType) {
                case 1:
                  ca = ba.uniqueID;
                  break;
                case 9:
                  ca = ba.documentElement.uniqueID;
                  break;
                default:
                  return null;
              }
              if (ca) {
                return o + ca;
              } else return null;
            }

            var y = d();

            function z(ba) {
              if (ba[y]) {
                return ba[y];
              } else if (!p.__isES5 && ba.propertyIsEnumerable && ba.propertyIsEnumerable[y]) {
                return ba.propertyIsEnumerable[y];
              } else if (!p.__isES5 && e(ba) && x(ba)) {
                return x(ba);
              } else if (!p.__isES5 && ba[y])return ba[y];
            }

            var aa = function () {
              var ba = Object.prototype.propertyIsEnumerable, ca = 0;
              return function da(ea) {
                if (w(ea)) {
                  ca += 1;
                  if (p.__isES5) {
                    Object.defineProperty(ea, y, {enumerable: false, writable: false, configurable: false, value: ca});
                  } else if (ea.propertyIsEnumerable) {
                    ea.propertyIsEnumerable = function () {
                      return ba.apply(this, arguments);
                    };
                    ea.propertyIsEnumerable[y] = ca;
                  } else if (e(ea)) {
                    ea[y] = ca;
                  } else throw new Error('Unable to set a non-enumerable property on object.');
                  return ca;
                } else throw new Error('Non-extensible objects are not allowed as keys.');
              };
            }();
            return __annotator(p, {name: 'Map'});
          }(), i = function () {
            if (!f('Set'))return c.Set;
            function j(l) {
              'use strict';
              if (this == null || typeof this !== 'object' && typeof this !== 'function')throw new TypeError('Wrong set object type.');
              k(this);
              if (l != null) {
                var m = g(l), n = void 0;
                while (!(n = m.next()).done)this.add(n.value);
              }
            }

            j.prototype.add = function (l) {
              'use strict';
              this._map.set(l, l);
              this.size = this._map.size;
              return this;
            };
            j.prototype.clear = function () {
              'use strict';
              k(this);
            };
            j.prototype['delete'] = function (l) {
              'use strict';
              var m = this._map['delete'](l);
              this.size = this._map.size;
              return m;
            };
            j.prototype.entries = function () {
              'use strict';
              return this._map.entries();
            };
            j.prototype.forEach = function (l) {
              'use strict';
              var m = arguments[1], n = this._map.keys(), o = void 0;
              while (!(o = n.next()).done)l.call(m, o.value, o.value, this);
            };
            j.prototype.has = function (l) {
              'use strict';
              return this._map.has(l);
            };
            j.prototype.values = function () {
              'use strict';
              return this._map.values();
            };
            j.prototype.keys = function () {
              'use strict';
              return this.values();
            };
            j.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function () {
              'use strict';
              return this.values();
            };
            function k(l) {
              l._map = new h();
              l.size = l._map.size;
            }

            return __annotator(j, {name: 'Set'});
          }();
          a.Map = h;
          a.Set = i;
        })(typeof global === 'undefined' ? this : global);
        __d("JSSDKRuntimeConfig", [], {"locale": "en_US", "rtl": false, "revision": "2847978"});
        __d("UrlMapConfig", [], {
          "www": "www.facebook.com",
          "m": "m.facebook.com",
          "connect": "connect.facebook.net",
          "business": "business.facebook.com",
          "api_https": "api.facebook.com",
          "api_read_https": "api-read.facebook.com",
          "graph_https": "graph.facebook.com",
          "an_https": "an.facebook.com",
          "fbcdn_http": "static.xx.fbcdn.net",
          "fbcdn_https": "static.xx.fbcdn.net",
          "cdn_http": "staticxx.facebook.com",
          "cdn_https": "staticxx.facebook.com"
        });
        __d("JSSDKConfig", [], {
          "bustCache": true,
          "tagCountLogRate": 0.01,
          "errorHandling": {"rate": 4},
          "usePluginPipe": true,
          "features": {
            "dialog_resize_refactor": true,
            "one_comment_controller": true,
            "allow_non_canvas_app_events": false,
            "event_subscriptions_log": {"rate": 0.01, "value": 10000},
            "should_force_single_dialog_instance": true,
            "js_sdk_force_status_on_load": true,
            "js_sdk_mbasic_share_plugin_init": true,
            "kill_fragment": true,
            "xfbml_profile_pic_server": true,
            "error_handling": {"rate": 4},
            "e2e_ping_tracking": {"rate": 1.0e-6},
            "getloginstatus_tracking": {"rate": 0.001},
            "xd_timeout": {"rate": 4, "value": 30000},
            "use_bundle": true,
            "launch_payment_dialog_via_pac": {"rate": 100},
            "plugin_tags_blacklist": ["recommendations_bar", "registration", "activity", "recommendations", "facepile"],
            "should_log_response_error": true
          },
          "api": {
            "mode": "warn",
            "whitelist": ["AppEvents", "AppEvents.EventNames", "AppEvents.ParameterNames", "AppEvents.activateApp", "AppEvents.logEvent", "AppEvents.logPageView", "AppEvents.logPurchase", "Canvas", "Canvas.Prefetcher", "Canvas.Prefetcher.addStaticResource", "Canvas.Prefetcher.setCollectionMode", "Canvas.getPageInfo", "Canvas.hideFlashElement", "Canvas.scrollTo", "Canvas.setAutoGrow", "Canvas.setDoneLoading", "Canvas.setSize", "Canvas.setUrlHandler", "Canvas.showFlashElement", "Canvas.startTimer", "Canvas.stopTimer", "Event", "Event.subscribe", "Event.unsubscribe", "Music.flashCallback", "Music.init", "Music.send", "Payment", "Payment.cancelFlow", "Payment.continueFlow", "Payment.init", "Payment.lockForProcessing", "Payment.parse", "Payment.setSize", "Payment.unlockForProcessing", "ThirdPartyProvider", "ThirdPartyProvider.init", "ThirdPartyProvider.sendData", "UA", "UA.nativeApp", "XFBML", "XFBML.RecommendationsBar", "XFBML.RecommendationsBar.markRead", "XFBML.parse", "addFriend", "api", "getAccessToken", "getAuthResponse", "getLoginStatus", "getUserID", "init", "login", "logout", "publish", "share", "ui"]
          },
          "initSitevars": {
            "enableMobileComments": 1,
            "iframePermissions": {
              "read_stream": false,
              "manage_mailbox": false,
              "manage_friendlists": false,
              "read_mailbox": false,
              "publish_checkins": true,
              "status_update": true,
              "photo_upload": true,
              "video_upload": true,
              "sms": false,
              "create_event": true,
              "rsvp_event": true,
              "offline_access": true,
              "email": true,
              "xmpp_login": false,
              "create_note": true,
              "share_item": true,
              "export_stream": false,
              "publish_stream": true,
              "publish_likes": true,
              "ads_management": false,
              "contact_email": true,
              "access_private_data": false,
              "read_insights": false,
              "read_requests": false,
              "read_friendlists": true,
              "manage_pages": false,
              "physical_login": false,
              "manage_groups": false,
              "read_deals": false
            }
          }
        });
        __d('eprintf', [], function a(b, c, d, e, f, g) {
          function h(i) {
            for (var j = arguments.length, k = Array(j > 1 ? j - 1 : 0), l = 1; l < j; l++)k[l - 1] = arguments[l];
            var m = ES(k, 'map', true, function (p) {
              return String(p);
            }), n = i.split('%s').length - 1;
            if (n !== m.length)return h('eprintf args number mismatch: %s', ES('JSON', 'stringify', false, [i].concat(m)));
            var o = 0;
            return i.replace(/%s/g, function () {
              return String(m[o++]);
            });
          }

          f.exports = h;
        }, null);
        __d('ex', ['eprintf'], function a(b, c, d, e, f, g, h) {
          function i(j) {
            for (var k = arguments.length, l = Array(k > 1 ? k - 1 : 0), m = 1; m < k; m++)l[m - 1] = arguments[m];
            var n = ES(l, 'map', true, function (p) {
              return String(p);
            }), o = j.split('%s').length - 1;
            if (o !== n.length)return i('ex args number mismatch: %s', ES('JSON', 'stringify', false, [j].concat(n)));
            return i._prefix + ES('JSON', 'stringify', false, [j].concat(n)) + i._suffix;
          }

          i._prefix = '<![EX[';
          i._suffix = ']]>';
          f.exports = i;
        }, null);
        __d('$-core', ['ex'], function a(b, c, d, e, f, g, h) {
          function i(k) {
            var l = typeof k === 'string' ? document.getElementById(k) : k;
            if (!l)throw new Error(h('Tried to get element with id of "%s" but it is not present on the page.', k));
            return l;
          }

          function j(k) {
            return i(k);
          }

          j.unsafe = i;
          f.exports = j;
        }, null);
        __d('$', ['$-core'], (function a(b, c, d, e, f, g) {
          f.exports = c('$-core');
        }), null);
        __d("sprintf", [], (function a(b, c, d, e, f, g) {
          function h(i) {
            for (var j = arguments.length, k = Array(j > 1 ? j - 1 : 0), l = 1; l < j; l++)k[l - 1] = arguments[l];
            var m = 0;
            return i.replace(/%s/g, function () {
              return String(k[m++]);
            });
          }

          f.exports = h;
        }), null);
        __d('invariant', ['ex', 'sprintf'], (function a(b, c, d, e, f, g, h, i) {
          'use strict';
          var j = h;

          function k(l, m) {
            if (!l) {
              var n = void 0;
              if (m === undefined) {
                n = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
              } else {
                for (var o = arguments.length, p = Array(o > 2 ? o - 2 : 0), q = 2; q < o; q++)p[q - 2] = arguments[q];
                n = new Error(j.apply(undefined, [m].concat(p)));
                n.name = 'Invariant Violation';
                n.messageWithParams = [m].concat(p);
              }
              n.framesToPop = 1;
              throw n;
            }
          }

          f.exports = k;
        }), null);
        __d('CSSCore', ['invariant'], function a(b, c, d, e, f, g, h) {
          function i(k, l) {
            var m = k;
            while (m.parentNode)m = m.parentNode;
            var n = m.querySelectorAll(l);
            return ES(Array.prototype, 'indexOf', true).call(n, k) !== -1;
          }

          var j = {
            addClass: function k(l, m) {
              !/\s/.test(m) || h(0);
              if (m)if (l.classList) {
                l.classList.add(m);
              } else if (!j.hasClass(l, m)) l.className = l.className + ' ' + m;
              return l;
            }, removeClass: function k(l, m) {
              !/\s/.test(m) || h(0);
              if (m)if (l.classList) {
                l.classList.remove(m);
              } else if (j.hasClass(l, m)) l.className = l.className.replace(new RegExp('(^|\\s)' + m + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
              return l;
            }, conditionClass: function k(l, m, n) {
              return (n ? j.addClass : j.removeClass)(l, m);
            }, hasClass: function k(l, m) {
              !/\s/.test(m) || h(0);
              if (l.classList)return !!m && ES(l.classList, 'contains', true, m);
              return ES(' ' + l.className + ' ', 'indexOf', true, ' ' + m + ' ') > -1;
            }, matchesSelector: function k(l, m) {
              var n = l.matches || l.webkitMatchesSelector || l.mozMatchesSelector || l.msMatchesSelector || function (o) {
                  return i(l, o);
                };
              return n.call(l, m);
            }
          };
          f.exports = j;
        }, null);
        __d('CSS', ['CSSCore', '$'], (function a(b, c, d, e, f, g, h) {
          var i = c('$').unsafe, j = 'hidden_elem', k = {
            setClass: function l(m, n) {
              i(m).className = n || '';
              return m;
            }, hasClass: function l(m, n) {
              return h.hasClass(i(m), n);
            }, matchesSelector: function l(m, n) {
              return h.matchesSelector(i(m), n);
            }, addClass: function l(m, n) {
              return h.addClass(i(m), n);
            }, removeClass: function l(m, n) {
              return h.removeClass(i(m), n);
            }, conditionClass: function l(m, n, o) {
              return h.conditionClass(i(m), n, o);
            }, toggleClass: function l(m, n) {
              return k.conditionClass(m, n, !k.hasClass(m, n));
            }, shown: function l(m) {
              return !k.hasClass(m, j);
            }, hide: function l(m) {
              return k.addClass(m, j);
            }, show: function l(m) {
              return k.removeClass(m, j);
            }, toggle: function l(m) {
              return k.toggleClass(m, j);
            }, conditionShow: function l(m, n) {
              return k.conditionClass(m, j, !n);
            }
          };
          f.exports = k;
        }), null);
        __d('wrapFunction', [], function a(b, c, d, e, f, g) {
          var h = {}, i = function j(k, l, m) {
            var n = l || 'default';
            return function () {
              var o = n in h ? h[n](k, m) : k;
              return o.apply(this, arguments);
            };
          };
          i.setWrapper = function (j) {
            var k = arguments.length <= 1 || arguments[1] === undefined ? 'default' : arguments[1];
            h[k] = j;
          };
          f.exports = i;
        }, null);
        __d('DOMEventListener', ['invariant', 'wrapFunction'], function a(b, c, d, e, f, g, h, i) {
          var j = void 0, k = void 0;
          if (window.addEventListener) {
            j = function m(n, o, p) {
              p.wrapper = i(p, 'entry', 'DOMEventListener.add ' + o);
              n.addEventListener(o, p.wrapper, false);
            };
            k = function m(n, o, p) {
              n.removeEventListener(o, p.wrapper, false);
            };
          } else if (window.attachEvent) {
            j = function m(n, o, p) {
              p.wrapper = i(p, 'entry', 'DOMEventListener.add ' + o);
              n.attachEvent || h(0);
              n.attachEvent('on' + o, p.wrapper);
            };
            k = function m(n, o, p) {
              n.detachEvent || h(0);
              n.detachEvent('on' + o, p.wrapper);
            };
          } else k = j = function m() {
          };
          var l = {
            add: function m(n, o, p) {
              j(n, o, p);
              return {
                remove: function q() {
                  k(n, o, p);
                }
              };
            }, remove: k
          };
          f.exports = l;
        }, null);
        __d('keyMirror', ['invariant'], function a(b, c, d, e, f, g, h) {
          'use strict';
          var i = function j(k) {
            var l = {}, m;
            k instanceof Object && !ES('Array', 'isArray', false, k) || h(0);
            for (m in k) {
              if (!k.hasOwnProperty(m))continue;
              l[m] = m;
            }
            return l;
          };
          f.exports = i;
        }, null);
        __d('IGIframeableMessageTypes', ['keyMirror'], (function a(b, c, d, e, f, g, h) {
          var i = h({MOUNTED: null, LOADING: null, UNMOUNTING: null, MEASURE: null});
          f.exports = i;
        }), null);
        __d("isNumberLike", [], function a(b, c, d, e, f, g) {
          function h(i) {
            return !isNaN(parseFloat(i)) && isFinite(i);
          }

          f.exports = h;
        }, null);
        __d("ObservableMixin", [], function a(b, c, d, e, f, g) {
          function h() {
            this.__observableEvents = {};
          }

          h.prototype = {
            inform: function i(j) {
              var k = Array.prototype.slice.call(arguments, 1), l = Array.prototype.slice.call(this.getSubscribers(j));
              for (var m = 0; m < l.length; m++) {
                if (l[m] === null)continue;
                try {
                  l[m].apply(this, k);
                } catch (n) {
                  setTimeout(function () {
                    throw n;
                  }, 0);
                }
              }
              return this;
            }, getSubscribers: function i(j) {
              return this.__observableEvents[j] || (this.__observableEvents[j] = []);
            }, clearSubscribers: function i(j) {
              if (j) this.__observableEvents[j] = [];
              return this;
            }, clearAllSubscribers: function i() {
              this.__observableEvents = {};
              return this;
            }, subscribe: function i(j, k) {
              var l = this.getSubscribers(j);
              l.push(k);
              return this;
            }, unsubscribe: function i(j, k) {
              var l = this.getSubscribers(j);
              for (var m = 0; m < l.length; m++)if (l[m] === k) {
                l.splice(m, 1);
                break;
              }
              return this;
            }, monitor: function i(j, k) {
              if (!k()) {
                var i = ES(function (l) {
                  if (k.apply(k, arguments)) this.unsubscribe(j, i);
                }, "bind", true, this);
                this.subscribe(j, i);
              }
              return this;
            }
          };
          f.exports = h;
        }, null);
        __d("ManagedError", [], function a(b, c, d, e, f, g) {
          function h(i, j) {
            Error.prototype.constructor.call(this, i);
            this.message = i;
            this.innerError = j;
          }

          h.prototype = new Error();
          h.prototype.constructor = h;
          f.exports = h;
        }, null);
        __d('AssertionError', ['ManagedError'], function a(b, c, d, e, f, g, h) {
          function i(j) {
            h.prototype.constructor.apply(this, arguments);
          }

          i.prototype = new h();
          i.prototype.constructor = i;
          f.exports = i;
        }, null);
        __d('Assert', ['AssertionError', 'sprintf'], function a(b, c, d, e, f, g, h, i) {
          function j(o, p) {
            if (typeof o !== 'boolean' || !o)throw new h(p);
            return o;
          }

          function k(o, p, q) {
            var r;
            if (p === undefined) {
              r = 'undefined';
            } else if (p === null) {
              r = 'null';
            } else {
              var s = Object.prototype.toString.call(p);
              r = /\s(\w*)/.exec(s)[1].toLowerCase();
            }
            j(ES(o, 'indexOf', true, r) !== -1, q || i('Expression is of type %s, not %s', r, o));
            return p;
          }

          function l(o, p, q) {
            j(p instanceof o, q || 'Expression not instance of type');
            return p;
          }

          function m(o, p) {
            n['is' + o] = p;
            n['maybe' + o] = function (q, r) {
              if (q != null) p(q, r);
            };
          }

          var n = {
            isInstanceOf: l, isTrue: j, isTruthy: function o(p, q) {
              return j(!!p, q);
            }, type: k, define: function o(p, q) {
              p = p.substring(0, 1).toUpperCase() + p.substring(1).toLowerCase();
              m(p, function (r, s) {
                j(q(r), s);
              });
            }
          };
          ES(['Array', 'Boolean', 'Date', 'Function', 'Null', 'Number', 'Object', 'Regexp', 'String', 'Undefined'], 'forEach', true, function (o) {
            m(o, ES(k, 'bind', true, null, o.toLowerCase()));
          });
          f.exports = n;
        }, null);
        __d('Type', ['Assert'], function a(b, c, d, e, f, g, h) {
          function i() {
            var m = this.__mixins;
            if (m)for (var n = 0; n < m.length; n++)m[n].apply(this, arguments);
          }

          function j(m, n) {
            if (n instanceof m)return true;
            if (n instanceof i)for (var o = 0; o < n.__mixins.length; o++)if (n.__mixins[o] == m)return true;
            return false;
          }

          function k(m, n) {
            var o = m.prototype;
            if (!ES('Array', 'isArray', false, n)) n = [n];
            for (var p = 0; p < n.length; p++) {
              var q = n[p];
              if (typeof q == 'function') {
                o.__mixins.push(q);
                q = q.prototype;
              }
              ES(ES('Object', 'keys', false, q), 'forEach', true, function (r) {
                o[r] = q[r];
              });
            }
          }

          function l(m, n, o) {
            var p = n && n.hasOwnProperty('constructor') ? n.constructor : function () {
                this.parent.apply(this, arguments);
              };
            h.isFunction(p);
            if (m && m.prototype instanceof i === false)throw new Error('parent type does not inherit from Type');
            m = m || i;
            function q() {
            }

            q.prototype = m.prototype;
            p.prototype = new q();
            if (n) ES('Object', 'assign', false, p.prototype, n);
            p.prototype.constructor = p;
            p.parent = m;
            p.prototype.__mixins = m.prototype.__mixins ? Array.prototype.slice.call(m.prototype.__mixins) : [];
            if (o) k(p, o);
            p.prototype.parent = function () {
              this.parent = m.prototype.parent;
              m.apply(this, arguments);
            };
            p.prototype.parentCall = function (r) {
              return m.prototype[r].apply(this, Array.prototype.slice.call(arguments, 1));
            };
            p.extend = function (r, s) {
              return l(this, r, s);
            };
            return p;
          }

          ES('Object', 'assign', false, i.prototype, {
            instanceOf: function m(n) {
              return j(n, this);
            }
          });
          ES('Object', 'assign', false, i, {
            extend: function m(n, o) {
              return typeof n === 'function' ? l.apply(null, arguments) : l(null, n, o);
            }, instanceOf: j
          });
          f.exports = i;
        }, null);
        __d('sdk.Model', ['Type', 'ObservableMixin'], function a(b, c, d, e, f, g, h, i) {
          var j = h.extend({
            constructor: function k(l) {
              this.parent();
              var m = {}, n = this;
              ES(ES('Object', 'keys', false, l), 'forEach', true, function (o) {
                m[o] = l[o];
                n['set' + o] = function (p) {
                  if (p === m[o])return this;
                  m[o] = p;
                  n.inform(o + '.change', p);
                  return n;
                };
                n['get' + o] = function () {
                  return m[o];
                };
              });
            }
          }, i);
          f.exports = j;
        }, null);
        __d('sdk.Runtime', ['sdk.Model', 'JSSDKRuntimeConfig'], function a(b, c, d, e, f, g, h, i) {
          var j = {UNKNOWN: 0, PAGETAB: 1, CANVAS: 2, PLATFORM: 4}, k = new h({
            AccessToken: '',
            ClientID: '',
            CookieUserID: '',
            Environment: j.UNKNOWN,
            Initialized: false,
            IsVersioned: false,
            KidDirectedSite: undefined,
            Locale: i.locale,
            LoggedIntoFacebook: undefined,
            LoginStatus: undefined,
            Revision: i.revision,
            Rtl: i.rtl,
            Scope: undefined,
            Secure: undefined,
            UseCookie: false,
            UserID: '',
            Version: undefined
          });
          ES('Object', 'assign', false, k, {
            ENVIRONMENTS: j, isEnvironment: function l(m) {
              var n = this.getEnvironment();
              return (m | n) === n;
            }, isCanvasEnvironment: function l() {
              return this.isEnvironment(j.CANVAS) || this.isEnvironment(j.PAGETAB);
            }
          });
          (function () {
            var l = /app_runner/.test(window.name) ? j.PAGETAB : /iframe_canvas/.test(window.name) ? j.CANVAS : j.UNKNOWN;
            if ((l | j.PAGETAB) === l) l = l | j.CANVAS;
            k.setEnvironment(l);
          })();
          f.exports = k;
        }, null);
        __d('sdk.domReady', ['sdk.Runtime'], function a(b, c, d, e, f, g, h) {
          var i, j = 'readyState' in document ? /loaded|complete/.test(document.readyState) : !!document.body;

          function k() {
            if (!i)return;
            var n;
            while (n = i.shift())n();
            i = null;
          }

          function l(n) {
            if (i) {
              i.push(n);
              return;
            } else n();
          }

          if (!j) {
            i = [];
            if (document.addEventListener) {
              document.addEventListener('DOMContentLoaded', k, false);
              window.addEventListener('load', k, false);
            } else if (document.attachEvent) {
              document.attachEvent('onreadystatechange', k);
              window.attachEvent('onload', k);
            }
            if (document.documentElement.doScroll && window == window.top) {
              var m = function n() {
                try {
                  h.getRtl() ? document.documentElement.doScroll('right') : document.documentElement.doScroll('left');
                } catch (o) {
                  setTimeout(n, 0);
                  return;
                }
                k();
              };
              m();
            }
          }
          f.exports = l;
        }, 3);
        __d('ig.sdk.Embeds', ['CSS', 'DOMEventListener', 'sdk.domReady', 'IGIframeableMessageTypes', 'invariant', 'isNumberLike'], function a(b, c, d, e, f, g, h, i, j, k, l, m) {
          var n = h.addClass, o = h.removeClass, p = ['instagram\\.com', 'instagr\\.am'], q = 'data-instgrm-captioned', r = 'instagram-embed-', s = 10000, t = '\n  border-radius: 4px;\n  box-shadow:\n    0 0 1px 0 rgba(0,0,0,0.5),\n    0 1px 10px 0 rgba(0,0,0,0.15);\n  display: block;\n  padding: 0;\n', u = /^https?:\/\//, v = 'https://', w = /\/?(\?|#|$)/, x = 3, y = 'instagram-media', z = y + '-registered', aa = y + '-rendered', ba = new RegExp('^' + 'https?://' + '([\\w-]+\\.)*(' + p.join('|') + ')' + '$'), ca = 'data-instgrm-payload-id', da = 'instagram-media-payload-', ea = new RegExp('^(' + ba.source.replace(/^\^/, '').replace(/\$$/, '') + '/p/[^/]+' + ')'), fa = 'data-instgrm-preserve-position', ga = 'data-instgrm-version', ha = {}, ia = false, ja = {}, ka = 0, la = false, ma = {};

          function na(wa) {
            var xa = document.getElementsByTagName('iframe'), ya;
            for (var za = xa.length - 1; za >= 0; za--) {
              var ab = xa[za];
              if (ab.contentWindow === wa.source) {
                ya = ab;
                break;
              }
            }
            return ya;
          }

          function oa(wa) {
            var xa = wa.href, ya = xa.match(ea);
            if (!ya)return null;
            return (ya[1].replace(/^https?:\/\/(www.)?/, 'https://www.') + '/');
          }

          function pa(wa) {
            var xa = wa.getElementsByTagName('a'), ya = xa.length;
            return ya ? oa(xa[ya - 1]) : null;
          }

          function qa(wa) {
            if ('performance' in window && window.performance != null && typeof window.performance == 'object' && typeof window.performance.now == 'function') wa(window.performance.now());
          }

          function ra(wa, xa) {
            var ya = ka++, za = r + ya;
            if (!wa.id) wa.id = da + ya;
            var ab = xa.replace(w, '/$1');
            ab += 'embed/';
            if (wa.hasAttribute(q)) ab += 'captioned/';
            ab += '?cr=1';
            if (wa.hasAttribute(ga)) {
              var bb = parseInt(wa.getAttribute(ga), 10);
              if (m(bb)) ab += '&v=' + bb;
            }
            ab = ab.replace(u, v);
            var cb;
            cb = document.createElement('iframe');
            cb.className = wa.className;
            cb.id = za;
            cb.src = ab;
            cb.setAttribute('allowTransparency', true);
            var db = wa.style.position;
            if (db) cb.setAttribute(fa, db);
            cb.setAttribute('frameBorder', 0);
            cb.setAttribute('height', 0);
            cb.setAttribute(ca, wa.id);
            cb.setAttribute('scrolling', 'no');
            cb.setAttribute('style', wa.style.cssText + ';' + t);
            cb.style.position = 'absolute';
            wa.parentNode.insertBefore(cb, wa);
            n(wa, z);
            o(wa, y);
            ja[za] = true;
            qa(function (eb) {
              ma[za] = {frameLoading: eb};
            });
            setTimeout(function () {
              sa(za);
            }, s);
          }

          function sa(wa) {
            if (ja.hasOwnProperty(wa)) {
              delete ja[wa];
              ua();
            }
          }

          function ta(wa) {
            if (!ba.test(wa.origin))return;
            var xa = na(wa);
            if (!xa)return;
            var ya = xa.id, za;
            try {
              za = ES('JSON', 'parse', false, wa.data);
            } catch (ab) {
            }
            if (typeof za !== 'object' || typeof za.type !== 'string' || typeof za.details !== 'object')return;
            var bb = za, cb = bb.details, db = bb.type, eb = null;
            switch (db) {
              case k.MOUNTED:
                var fb = document.getElementById(xa.getAttribute(ca));
                fb || l(0);
                eb = fb.clientHeight;
                xa.style.position = xa.hasAttribute(fa) ? xa.getAttribute(fa) : '';
                if (typeof cb.styles === 'object' && cb.styles.length)try {
                  for (var hb = 0; hb < cb.styles.length; hb++) {
                    var ib = cb.styles[hb][0], jb = cb.styles[hb][1];
                    xa.style[ib] = jb;
                  }
                } catch (gb) {
                }
                n(xa, aa);
                fb.parentNode.removeChild(fb);
                sa(ya);
                qa(function (lb) {
                  if (ma[ya]) {
                    ma[ya].contentLoaded = lb;
                    if (window.__igEmbedLoaded) window.__igEmbedLoaded({frameId: ya, stats: ma[ya]});
                  }
                });
                break;
              case k.LOADING:
                qa(function (lb) {
                  if (ma[ya]) ma[ya].contentLoading = lb;
                });
                break;
              case k.MEASURE:
                var kb = cb.height;
                if (ha[ya] !== kb) eb = kb;
                break;
              case k.UNMOUNTING:
                delete ha[ya];
                break;
            }
            if (eb !== null) xa.height = ha[ya] = eb;
          }

          function ua() {
            var wa = document.getElementsByClassName(y), xa;
            for (xa = 0; xa < wa.length; xa++) {
              var ya = ES('Object', 'keys', false, ja).length;
              if (ya >= x)break;
              var za = wa[xa];
              if (za.tagName === 'BLOCKQUOTE') {
                var ab = pa(za);
                if (ab) ra(za, ab);
              }
            }
          }

          function va() {
            if (!ia) {
              if (la)return;
              la = true;
            }
            var wa = document.readyState === 'complete' || document.readyState !== 'loading' && !document.documentElement.doScroll ? setTimeout : j;
            wa(ES(function () {
              ua();
              if (!ia) {
                i.add(window, 'message', ES(ta, 'bind', true, this));
                ia = true;
              }
            }, 'bind', true, this));
          }

          va();
          f.exports = {process: va};
        }, null);
        __d('dotAccess', [], function a(b, c, d, e, f, g) {
          function h(i, j, k) {
            var l = j.split('.');
            do {
              var m = l.shift();
              i = i[m] || k && (i[m] = {});
            } while (l.length && i);
            return i;
          }

          f.exports = h;
        }, null);
        __d('forEachObject', [], function a(b, c, d, e, f, g) {
          'use strict';
          var h = Object.prototype.hasOwnProperty;

          function i(j, k, l) {
            for (var m in j)if (h.call(j, m)) k.call(l, j[m], m, j);
          }

          f.exports = i;
        }, null);
        __d('sdk.UA', [], function a(b, c, d, e, f, g) {
          var h = navigator.userAgent, i = {
            iphone: /\b(iPhone|iP[ao]d)/.test(h),
            ipad: /\b(iP[ao]d)/.test(h),
            android: /Android/i.test(h),
            nativeApp: /FBAN\/\w+;/i.test(h)
          }, j = /Mobile/i.test(h), k = {
            ie: '',
            firefox: '',
            chrome: '',
            webkit: '',
            osx: '',
            edge: '',
            operaMini: '',
            ucWeb: ''
          }, l = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(h);
          if (l) {
            k.ie = l[1] ? parseFloat(l[1]) : l[4] ? parseFloat(l[4]) : '';
            k.firefox = l[2] || '';
            k.webkit = l[3] || '';
            if (l[3]) {
              var m = /(?:Chrome\/(\d+\.\d+))/.exec(h);
              k.chrome = m ? m[1] : '';
              var n = /(?:Edge\/(\d+\.\d+))/.exec(h);
              k.edge = n ? n[1] : '';
            }
          }
          var o = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(h);
          if (o) k.osx = o[1];
          var p = /(?:Opera Mini\/(\d+(?:\.\d+)?))/.exec(h);
          if (p) k.operaMini = p[1];
          var q = /(?:UCWEB\/(\d+(?:\.\d+))?)/.exec(h);
          if (q) k.ucWeb = q[1] || '2.0';
          function r(t) {
            return ES(t.split('.'), 'map', true, function (u) {
              return parseFloat(u);
            });
          }

          var s = {};
          ES(ES('Object', 'keys', false, k), 'map', true, function (t) {
            s[t] = function () {
              return parseFloat(k[t]);
            };
            s[t].getVersionParts = function () {
              return r(k[t]);
            };
          });
          ES(ES('Object', 'keys', false, i), 'map', true, function (t) {
            s[t] = function () {
              return i[t];
            };
          });
          s.mobile = function () {
            return i.iphone || i.ipad || i.android || j;
          };
          s.mTouch = function () {
            return i.android || i.iphone || i.ipad;
          };
          s.mBasic = function () {
            return !!(k.ucWeb || k.operaMini);
          };
          f.exports = s;
        }, null);
        __d('normalizeError', ['sdk.UA'], function a(b, c, d, e, f, g, h) {
          function i(j) {
            var k = {
              line: j.lineNumber || j.line,
              message: j.message,
              name: j.name,
              script: j.fileName || j.sourceURL || j.script,
              stack: j.stackTrace || j.stack
            };
            k._originalError = j;
            var l = /([\w:\.\/]+\.js):(\d+)/.exec(j.stack);
            if (h.chrome() && l) {
              k.script = l[1];
              k.line = parseInt(l[2], 10);
            }
            for (var m in k)k[m] == null && delete k[m];
            return k;
          }

          f.exports = i;
        }, null);
        __d('QueryString', [], function a(b, c, d, e, f, g) {
          function h(l) {
            var m = [];
            ES(ES('Object', 'keys', false, l).sort(), 'forEach', true, function (n) {
              var o = l[n];
              if (typeof o === 'undefined')return;
              if (o === null) {
                m.push(n);
                return;
              }
              m.push(encodeURIComponent(n) + '=' + encodeURIComponent(o));
            });
            return m.join('&');
          }

          function i(l, m) {
            var n = {};
            if (l === '')return n;
            var o = l.split('&');
            for (var p = 0; p < o.length; p++) {
              var q = o[p].split('=', 2), r = decodeURIComponent(q[0]);
              if (m && n.hasOwnProperty(r))throw new URIError('Duplicate key: ' + r);
              n[r] = q.length === 2 ? decodeURIComponent(q[1]) : null;
            }
            return n;
          }

          function j(l, m) {
            return l + (ES(l, 'indexOf', true, '?') !== -1 ? '&' : '?') + (typeof m === 'string' ? m : k.encode(m));
          }

          var k = {encode: h, decode: i, appendToUrl: j};
          f.exports = k;
        }, null);
        __d('UrlMap', ['UrlMapConfig'], function a(b, c, d, e, f, g, h) {
          var i = {
            resolve: function j(k, l) {
              var m = typeof l == 'undefined' ? location.protocol.replace(':', '') : l ? 'https' : 'http';
              if (k in h)return m + '://' + h[k];
              if (typeof l == 'undefined' && k + '_' + m in h)return m + '://' + h[k + '_' + m];
              if (l !== true && k + '_http' in h)return 'http://' + h[k + '_http'];
              if (l !== false && k + '_https' in h)return 'https://' + h[k + '_https'];
            }
          };
          f.exports = i;
        }, null);
        __d('sdk.Scribe', ['QueryString', 'sdk.Runtime', 'UrlMap'], function a(b, c, d, e, f, g, h, i, j) {
          function k(m, n) {
            if (typeof n.extra == 'object') n.extra.revision = i.getRevision();
            new Image().src = h.appendToUrl(j.resolve('www', true) + '/common/scribe_endpoint.php', {
              c: m,
              m: ES('JSON', 'stringify', false, n)
            });
          }

          var l = {log: k};
          f.exports = l;
        }, null);
        __d('sdk.FeatureFunctor', ['invariant'], function a(b, c, d, e, f, g, h) {
          function i(k, l, m) {
            if (k.features && l in k.features) {
              var n = k.features[l];
              if (typeof n === 'object' && typeof n.rate === 'number') {
                if (n.rate && Math.random() * 100 <= n.rate) {
                  return n.value || true;
                } else return n.value ? null : false;
              } else return n;
            }
            return m;
          }

          function j(k) {
            return function (l, m) {
              arguments.length >= 2 || h(0);
              return i(k, l, m);
            };
          }

          f.exports = {create: j};
        }, null);
        __d('sdk.feature', ['sdk.FeatureFunctor', 'JSSDKConfig'], function a(b, c, d, e, f, g, h, i) {
          f.exports = h.create(i);
        }, null);
        __d('sdk.ErrorHandling', ['ManagedError', 'sdk.Runtime', 'sdk.Scribe', 'sdk.feature', 'normalizeError', 'wrapFunction'], function a(b, c, d, e, f, g, h, i, j, k, l, m) {
          var n = k('error_handling', false), o = '';

          function p(v) {
            var w = v._originalError;
            delete v._originalError;
            j.log('jssdk_error', {appId: i.getClientID(), error: v.name || v.message, extra: v});
            throw w;
          }

          function q(v, w) {
            return function () {
              if (!n)return v.apply(this, arguments);
              try {
                o = w;
                return v.apply(this, arguments);
              } catch (x) {
                if (x instanceof h)throw x;
                var y = l(x);
                y.entry = w;
                var z = ES(Array.prototype.slice.call(arguments), 'map', true, function (aa) {
                  var ba = Object.prototype.toString.call(aa);
                  return /^\[object (String|Number|Boolean|Object|Date)\]$/.test(ba) ? aa : aa.toString();
                });
                y.args = ES('JSON', 'stringify', false, z).substring(0, 200);
                p(y);
              } finally {
                o = '';
              }
            };
          }

          function r(v) {
            if (!v.__wrapper) v.__wrapper = function () {
              try {
                return v.apply(this, arguments);
              } catch (w) {
                window.setTimeout(function () {
                  throw w;
                }, 0);
                return false;
              }
            };
            return v.__wrapper;
          }

          function s(v) {
            try {
              return v && v.callee && v.callee.caller ? v.callee.caller.name : '';
            } catch (w) {
              return '';
            }
          }

          function t(v, w) {
            return function (x, y) {
              var z = w + ':' + (o || '[global]') + ':' + (x.name || '[anonymous]' + s(arguments));
              return v(m(x, 'entry', z), y);
            };
          }

          if (n) {
            setTimeout = t(setTimeout, 'setTimeout');
            setInterval = t(setInterval, 'setInterval');
            m.setWrapper(q, 'entry');
          }
          var u = {guard: q, unguard: r};
          f.exports = u;
        }, null);
        __d('instgrm', ['dotAccess', 'forEachObject', 'sdk.ErrorHandling'], function a(b, c, d, e, f, g, h, i, j) {
          var k = window.instgrm = {};

          function l(m, n) {
            var o = m ? h(k, m, true) : k;
            i(n, function (p, q) {
              var r;
              if (typeof p === 'function') {
                var s = (m ? m + '.' : '') + q;
                r = j.guard(p, s);
              } else if (typeof p === 'object') r = p;
              if (r) o[q] = r;
            });
          }

          f.exports = {provide: l};
        }, null);
        __d('legacy:ig.embeds', ['instgrm', 'ig.sdk.Embeds'], (function a(b, c, d, e, f, g, h, i) {
          h.provide('Embeds', i);
        }), 3);
      }
    }).call(global);
  })(window.inDapIF ? parent.window : window, window);
} catch (e) {
  new Image().src = "https:\/\/www.facebook.com\/" + 'common/scribe_endpoint.php?c=jssdk_error&m=' + encodeURIComponent('{"error":"LOAD", "extra": {"name":"' + e.name + '","line":"' + (e.lineNumber || e.line) + '","script":"' + (e.fileName || e.sourceURL || e.script) + '","stack":"' + (e.stackTrace || e.stack) + '","revision":"2847978","namespace":"instgrm","message":"' + e.message + '"}}');
}
