!function (e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.sol = t() : e.sol = t() }(window, (function () { return function (e) { var t = {}; function n(r) { if (t[r]) return t[r].exports; var o = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports } return n.m = e, n.c = t, n.d = function (e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, n.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function (e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) { return e[t] }.bind(null, o)); return r }, n.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return n.d(t, "a", t), t }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 0) }([function (e, t, n) { "use strict"; n.r(t); var r = function (e) { return function (e) { if (!e) return !1; try { JSON.parse(e); return !0 } catch (e) { } return !1 }(e) ? JSON.parse(e) : e }, o = function (e) { return e ? Object.keys(e).reduce((function (t, n) { return t[n] = r(e[n]), t }), {}) : {} }, i = function (e) { return e instanceof Element || e instanceof HTMLDocument }, c = function (e) { if (Array.isArray(e)) return e; if (i(e)) return [e]; if ("string" == typeof (n = e) || n instanceof String) { var t = document.querySelectorAll(e); return Array.from(t) } var n; return console.warn("".concat(e, " is not a valid parameter.")), [] }; function u(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(e); t && (r = r.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r) } return n } function f(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {}; t % 2 ? u(Object(n), !0).forEach((function (t) { s(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e } function s(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } function a(e) { return function (e) { if (Array.isArray(e)) { for (var t = 0, n = new Array(e.length); t < e.length; t++)n[t] = e[t]; return n } }(e) || function (e) { if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e) }(e) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance") }() } var l = function e(t) { var n = this; !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.select = function (e) { console.warn("select will be deprecated soon. Use find instead."); var t = document.querySelector(e); return n.selection = t || [], n }, this.selectAll = function (e) { console.warn("selectAll will be deprecated soon. Use findAll instead."); var t = document.querySelectorAll(e); return n.selection = t ? a(t) : [], n }, this.selectFrom = function (e) { return console.warn("selectFrom will be deprecated soon. Use find instead."), n.selection = n.selection.reduce((function (t, n) { var r = n.querySelector(e); return r && t.push(r), t }), []), n }, this.find = function (e) { return n.selection = n.selection.reduce((function (t, n) { var r = n.querySelector(e); return r && t.push(r), t }), []), n }, this.findAll = function (e) { return n.selection = n.selection.reduce((function (t, n) { var r = n.querySelectorAll(e); return r && t.push.apply(t, a(r)), t }), []), n }, this.get = function (e) { return n.selection = n.selection[e] ? [n.selection[e]] : [], n }, this.contains = function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = [e]; return Array.isArray(e) && (r = a(e)), n.selection = n.selection.filter((function (e) { var n = !0, o = !1, i = void 0; try { for (var c, u = r[Symbol.iterator](); !(n = (c = u.next()).done); n = !0) { var f = c.value; return t ? e.textContent === f : e.textContent.includes(f) } } catch (e) { o = !0, i = e } finally { try { n || null == u.return || u.return() } finally { if (o) throw i } } return !1 })), n }, this.append = function (e) { var t = c(e); return n.selection.forEach((function (e) { t.forEach((function (t) { e.append(t) })) })), n }, this.before = function (e) { var t = c(e); return n.selection.forEach((function (e) { t.forEach((function (t) { e.before(t) })) })), n }, this.after = function (e) { var t = c(e); return n.selection.forEach((function (e) { t.forEach((function (t) { e.after(t) })) })), n }, this.nodes = function () { return n.selection }, this.createElement = function (e, t) { return console.warn("createElement is deprecated and will be removed soon."), n.selection.forEach((function (n) { var r = document.createElement(e); t && t(r, n) })), n }, this.map = function (e) { return n.selection = n.selection.map((function (t, n) { return e(t, n) })), n }, this.forEach = function (e) { return n.selection.forEach((function (t, n) { return e(t, n) })), n }, this.filter = function (e) { return n.selection = n.selection.filter((function (t, n) { return e(t, n) })), n }, this.containsURL = function (e) { var t = [e]; return Array.isArray(e) && (t = a(e)), t.some((function (e) { return document.URL.includes(e) })) || (n.selection = []), n }, this.containsOneOfURL = function (e) { return console.warn("containsOneOfURL will be deprecated soon. Please use containsURL."), e.some((function (e) { return document.URL.includes(e) })) || (n.selection = []), n }, this.addClass = function (e) { return n.selection.forEach((function (t) { return t.classList.add(e) })), n }, this.removeClass = function (e) { return n.selection.forEach((function (t) { return t.classList.remove(e) })), n }, this.hide = function () { return n.selection.forEach((function (e) { return e.style.display = "none" })), n }, this.arrangeChildren = function (e) { return n.selection.forEach((function (t) { var n = document.createDocumentFragment(), r = a(t.childNodes), o = e.map((function (e) { return r[e].cloneNode(!0) })); r.forEach((function (e) { return e.remove() })), n.append.apply(n, a(o)), t.append(n) })), n }, this.swap = function (e) { var t = i(e) ? e : document.querySelector(e); return n.selection.map((function (e, r) { var o = e.cloneNode(!0), i = t.cloneNode(!0); return t.parentNode.insertBefore(o, t), e.parentNode.insertBefore(i, e), e.remove(), r === n.selection.length - 1 && t.remove(), o })), n }, this.editText = function (e) { return n.selection.forEach((function (t) { return t.textContent = e })), n }, this.editHTML = function (e) { return n.selection.forEach((function (t) { return t.innerHTML = e })), n }, this.forceEditText = function (e) { return n.selection.forEach((function (t) { t.textContent = e, t.addEventListener("DOMSubtreeModified", (function () { t.textContent !== e && (t.textContent = e) })) })), n }, this.setStyle = function (e, t) { return n.selection.forEach((function (n) { return n.style[e] = t })), n }, this.setAttribute = function (e, t) { return n.selection.forEach((function (n) { return n.setAttribute(e, t) })), n }, this.addEvent = function (e, t) { return n.selection.forEach((function (n) { return n.addEventListener(e, t) })), n }, this.getData = function () { return n.selection.reduce((function (e, t) { return e = f({}, e, {}, o(t.dataset)) }), {}) }, this.setData = function (e, t) { return n.selection.forEach((function (n) { n.dataset && (n.dataset[e] = t) })), n }, this.setValue = function (e) { return n.selection.forEach((function (t) { return t.value = e })), n }, this.clone = function () { var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; return n.selection = n.selection.map((function (t) { return t.cloneNode(e) })), n }, this.transform = function (e) { return console.warn("This function will be deprecated soon. Please use map instead."), n.selection = n.selection.map((function (t) { return e(t) })), n }, this.render = function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], c = function (e, t, n, r) { var i = r ? r(e, idx) : {}; return render(h(t, f({}, o(e.dataset), {}, n, {}, i)), e) }, u = function (e, t, n, r) { var o = document.createElement("div"); e.append(o); var i = c(o, t, n, r).base; e.append(i), o.remove() }; return n.selection.forEach((function (n, o) { i ? u(n, e, t, r) : c(n, e, t, r) })), n }, this.print = function () { return console.log(n), n }, this.selection = t && t.length > 0 && null != t[0] ? a(t) : [] }; function d(e) { return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) } n.d(t, "onReady", (function () { return p })), n.d(t, "select", (function () { return y })), n.d(t, "selectAll", (function () { return m })); var p = function (e) { if ("loading" !== document.readyState) return e(); document.addEventListener("DOMContentLoaded", (function () { setTimeout(e, 0) })) }, y = function (e) { var t = []; return "string" == typeof e ? t = [document.querySelector(e)] : "object" == d(e) && (t = [e]), new l(t) }, m = function (e) { var t = document.querySelectorAll(e); return new l(t) } }]) }));