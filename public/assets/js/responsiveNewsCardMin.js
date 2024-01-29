function cLog(e) {
  console.log(e);
}
!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
      ? define(t)
      : (e.Swiper = t());
})(this, function () {
  'use strict';
  function e(e, t) {
    var a = [],
      n = 0;
    if (e && !t && e instanceof r) return e;
    if (e)
      if ('string' == typeof e) {
        var o,
          l,
          d = e.trim();
        if (0 <= d.indexOf('<') && 0 <= d.indexOf('>')) {
          var p = 'div';
          for (
            0 === d.indexOf('<li') && (p = 'ul'),
              0 === d.indexOf('<tr') && (p = 'tbody'),
              (0 !== d.indexOf('<td') && 0 !== d.indexOf('<th')) ||
                (p = 'tr'),
              0 === d.indexOf('<tbody') && (p = 'table'),
              0 === d.indexOf('<option') && (p = 'select'),
              (l = i.createElement(p)).innerHTML = d,
              n = 0;
            n < l.childNodes.length;
            n += 1
          )
            a.push(l.childNodes[n]);
        } else
          for (
            o =
              t || '#' !== e[0] || e.match(/[ .<>:~]/)
                ? (t || i).querySelectorAll(e.trim())
                : [i.getElementById(e.trim().split('#')[1])],
              n = 0;
            n < o.length;
            n += 1
          )
            o[n] && a.push(o[n]);
      } else if (e.nodeType || e === s || e === i) a.push(e);
      else if (0 < e.length && e[0].nodeType)
        for (n = 0; n < e.length; n += 1) a.push(e[n]);
    return new r(a);
  }
  function t(e) {
    for (var t = [], a = 0; a < e.length; a += 1)
      -1 === t.indexOf(e[a]) && t.push(e[a]);
    return t;
  }
  function a() {
    var e = this,
      t = e.params,
      a = e.el;
    if (!a || 0 !== a.offsetWidth) {
      t.breakpoints && e.setBreakpoint();
      var i = e.allowSlideNext,
        s = e.allowSlidePrev,
        r = e.snapGrid;
      if (
        ((e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        t.freeMode)
      ) {
        var n = Math.min(
          Math.max(e.translate, e.maxTranslate()),
          e.minTranslate()
        );
        e.setTranslate(n),
          e.updateActiveIndex(),
          e.updateSlidesClasses(),
          t.autoHeight && e.updateAutoHeight();
      } else
        e.updateSlidesClasses(),
          ('auto' === t.slidesPerView || 1 < t.slidesPerView) &&
          e.isEnd &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0);
      (e.allowSlidePrev = s),
        (e.allowSlideNext = i),
        e.params.watchOverflow &&
          r !== e.snapGrid &&
          e.checkOverflow();
    }
  }
  var i =
      'undefined' == typeof document
        ? {
            body: {},
            addEventListener: function () {},
            removeEventListener: function () {},
            activeElement: { blur: function () {}, nodeName: '' },
            querySelector: function () {
              return null;
            },
            querySelectorAll: function () {
              return [];
            },
            getElementById: function () {
              return null;
            },
            createEvent: function () {
              return { initEvent: function () {} };
            },
            createElement: function () {
              return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function () {},
                getElementsByTagName: function () {
                  return [];
                },
              };
            },
            location: { hash: '' },
          }
        : document,
    s =
      'undefined' == typeof window
        ? {
            document: i,
            navigator: { userAgent: '' },
            location: {},
            history: {},
            CustomEvent: function () {
              return this;
            },
            addEventListener: function () {},
            removeEventListener: function () {},
            getComputedStyle: function () {
              return {
                getPropertyValue: function () {
                  return '';
                },
              };
            },
            Image: function () {},
            Date: function () {},
            screen: {},
            setTimeout: function () {},
            clearTimeout: function () {},
          }
        : window,
    r = function (e) {
      for (var t = 0; t < e.length; t += 1) this[t] = e[t];
      return (this.length = e.length), this;
    };
  (e.fn = r.prototype), (e.Class = r), (e.Dom7 = r);
  var n = {
    addClass: function (e) {
      if (void 0 === e) return this;
      for (var t = e.split(' '), a = 0; a < t.length; a += 1)
        for (var i = 0; i < this.length; i += 1)
          void 0 !== this[i] &&
            void 0 !== this[i].classList &&
            this[i].classList.add(t[a]);
      return this;
    },
    removeClass: function (e) {
      for (var t = e.split(' '), a = 0; a < t.length; a += 1)
        for (var i = 0; i < this.length; i += 1)
          void 0 !== this[i] &&
            void 0 !== this[i].classList &&
            this[i].classList.remove(t[a]);
      return this;
    },
    hasClass: function (e) {
      return !!this[0] && this[0].classList.contains(e);
    },
    toggleClass: function (e) {
      for (var t = e.split(' '), a = 0; a < t.length; a += 1)
        for (var i = 0; i < this.length; i += 1)
          void 0 !== this[i] &&
            void 0 !== this[i].classList &&
            this[i].classList.toggle(t[a]);
      return this;
    },
    attr: function (e, t) {
      var a = arguments;
      if (1 === arguments.length && 'string' == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (var i = 0; i < this.length; i += 1)
        if (2 === a.length) this[i].setAttribute(e, t);
        else
          for (var s in e)
            (this[i][s] = e[s]), this[i].setAttribute(s, e[s]);
      return this;
    },
    removeAttr: function (e) {
      for (var t = 0; t < this.length; t += 1)
        this[t].removeAttribute(e);
      return this;
    },
    data: function (e, t) {
      var a;
      if (void 0 !== t) {
        for (var i = 0; i < this.length; i += 1)
          (a = this[i]).dom7ElementDataStorage ||
            (a.dom7ElementDataStorage = {}),
            (a.dom7ElementDataStorage[e] = t);
        return this;
      }
      if ((a = this[0])) {
        if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage)
          return a.dom7ElementDataStorage[e];
        return a.getAttribute('data-' + e) || void 0;
      }
    },
    transform: function (e) {
      for (var t = 0; t < this.length; t += 1) {
        var a = this[t].style;
        (a.webkitTransform = e), (a.transform = e);
      }
      return this;
    },
    transition: function (e) {
      'string' != typeof e && (e += 'ms');
      for (var t = 0; t < this.length; t += 1) {
        var a = this[t].style;
        (a.webkitTransitionDuration = e), (a.transitionDuration = e);
      }
      return this;
    },
    on: function () {
      function t(t) {
        var a = t.target;
        if (a) {
          var i = t.target.dom7EventData || [];
          if ((i.indexOf(t) < 0 && i.unshift(t), e(a).is(o)))
            l.apply(a, i);
          else
            for (var s = e(a).parents(), r = 0; r < s.length; r += 1)
              e(s[r]).is(o) && l.apply(s[r], i);
        }
      }
      function a(e) {
        var t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), l.apply(this, t);
      }
      for (var i, s = [], r = arguments.length; r--; )
        s[r] = arguments[r];
      var n = s[0],
        o = s[1],
        l = s[2],
        d = s[3];
      'function' == typeof s[1] &&
        ((n = (i = s)[0]), (l = i[1]), (d = i[2]), (o = void 0)),
        d || (d = !1);
      for (var p, c = n.split(' '), u = 0; u < this.length; u += 1) {
        var h = this[u];
        if (o)
          for (p = 0; p < c.length; p += 1) {
            var v = c[p];
            h.dom7LiveListeners || (h.dom7LiveListeners = {}),
              h.dom7LiveListeners[v] || (h.dom7LiveListeners[v] = []),
              h.dom7LiveListeners[v].push({
                listener: l,
                proxyListener: t,
              }),
              h.addEventListener(v, t, d);
          }
        else
          for (p = 0; p < c.length; p += 1) {
            var f = c[p];
            h.dom7Listeners || (h.dom7Listeners = {}),
              h.dom7Listeners[f] || (h.dom7Listeners[f] = []),
              h.dom7Listeners[f].push({
                listener: l,
                proxyListener: a,
              }),
              h.addEventListener(f, a, d);
          }
      }
      return this;
    },
    off: function () {
      for (var e, t = [], a = arguments.length; a--; )
        t[a] = arguments[a];
      var i = t[0],
        s = t[1],
        r = t[2],
        n = t[3];
      'function' == typeof t[1] &&
        ((i = (e = t)[0]), (r = e[1]), (n = e[2]), (s = void 0)),
        n || (n = !1);
      for (var o = i.split(' '), l = 0; l < o.length; l += 1)
        for (var d = o[l], p = 0; p < this.length; p += 1) {
          var c = this[p],
            u = void 0;
          if (
            (!s && c.dom7Listeners
              ? (u = c.dom7Listeners[d])
              : s &&
                c.dom7LiveListeners &&
                (u = c.dom7LiveListeners[d]),
            u && u.length)
          )
            for (var h = u.length - 1; 0 <= h; h -= 1) {
              var v = u[h];
              r && v.listener === r
                ? (c.removeEventListener(d, v.proxyListener, n),
                  u.splice(h, 1))
                : r ||
                  (c.removeEventListener(d, v.proxyListener, n),
                  u.splice(h, 1));
            }
        }
      return this;
    },
    trigger: function () {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      for (
        var a = e[0].split(' '), r = e[1], n = 0;
        n < a.length;
        n += 1
      )
        for (var o = a[n], l = 0; l < this.length; l += 1) {
          var d = this[l],
            p = void 0;
          try {
            p = new s.CustomEvent(o, {
              detail: r,
              bubbles: !0,
              cancelable: !0,
            });
          } catch (e) {
            (p = i.createEvent('Event')).initEvent(o, !0, !0),
              (p.detail = r);
          }
          (d.dom7EventData = e.filter(function (e, t) {
            return 0 < t;
          })),
            d.dispatchEvent(p),
            (d.dom7EventData = []),
            delete d.dom7EventData;
        }
      return this;
    },
    transitionEnd: function (e) {
      function t(r) {
        if (r.target === this)
          for (e.call(this, r), a = 0; a < i.length; a += 1)
            s.off(i[a], t);
      }
      var a,
        i = ['webkitTransitionEnd', 'transitionend'],
        s = this;
      if (e) for (a = 0; a < i.length; a += 1) s.on(i[a], t);
      return this;
    },
    outerWidth: function (e) {
      if (0 < this.length) {
        if (e) {
          var t = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(t.getPropertyValue('margin-right')) +
            parseFloat(t.getPropertyValue('margin-left'))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (0 < this.length) {
        if (e) {
          var t = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(t.getPropertyValue('margin-top')) +
            parseFloat(t.getPropertyValue('margin-bottom'))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    offset: function () {
      if (0 < this.length) {
        var e = this[0],
          t = e.getBoundingClientRect(),
          a = i.body,
          r = e.clientTop || a.clientTop || 0,
          n = e.clientLeft || a.clientLeft || 0,
          o = e === s ? s.scrollY : e.scrollTop,
          l = e === s ? s.scrollX : e.scrollLeft;
        return { top: t.top + o - r, left: t.left + l - n };
      }
      return null;
    },
    css: function (e, t) {
      var a;
      if (1 === arguments.length) {
        if ('string' != typeof e) {
          for (a = 0; a < this.length; a += 1)
            for (var i in e) this[a].style[i] = e[i];
          return this;
        }
        if (this[0])
          return s
            .getComputedStyle(this[0], null)
            .getPropertyValue(e);
      }
      if (2 === arguments.length && 'string' == typeof e) {
        for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      if (!e) return this;
      for (var t = 0; t < this.length; t += 1)
        if (!1 === e.call(this[t], t, this[t])) return this;
      return this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
      for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e)
        return this[0] ? this[0].textContent.trim() : null;
      for (var t = 0; t < this.length; t += 1)
        this[t].textContent = e;
      return this;
    },
    is: function (t) {
      var a,
        n,
        o = this[0];
      if (!o || void 0 === t) return !1;
      if ('string' == typeof t) {
        if (o.matches) return o.matches(t);
        if (o.webkitMatchesSelector)
          return o.webkitMatchesSelector(t);
        if (o.msMatchesSelector) return o.msMatchesSelector(t);
        for (a = e(t), n = 0; n < a.length; n += 1)
          if (a[n] === o) return !0;
        return !1;
      }
      if (t === i) return o === i;
      if (t === s) return o === s;
      if (t.nodeType || t instanceof r) {
        for (a = t.nodeType ? [t] : t, n = 0; n < a.length; n += 1)
          if (a[n] === o) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      var e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      var t,
        a = this.length;
      return new r(
        a - 1 < e
          ? []
          : e < 0
            ? (t = a + e) < 0
              ? []
              : [this[t]]
            : [this[e]]
      );
    },
    append: function () {
      for (var e, t = [], a = arguments.length; a--; )
        t[a] = arguments[a];
      for (var s = 0; s < t.length; s += 1) {
        e = t[s];
        for (var n = 0; n < this.length; n += 1)
          if ('string' == typeof e) {
            var o = i.createElement('div');
            for (o.innerHTML = e; o.firstChild; )
              this[n].appendChild(o.firstChild);
          } else if (e instanceof r)
            for (var l = 0; l < e.length; l += 1)
              this[n].appendChild(e[l]);
          else this[n].appendChild(e);
      }
      return this;
    },
    prepend: function (e) {
      var t,
        a,
        s = this;
      for (t = 0; t < this.length; t += 1)
        if ('string' == typeof e) {
          var n = i.createElement('div');
          for (
            n.innerHTML = e, a = n.childNodes.length - 1;
            0 <= a;
            a -= 1
          )
            s[t].insertBefore(n.childNodes[a], s[t].childNodes[0]);
        } else if (e instanceof r)
          for (a = 0; a < e.length; a += 1)
            s[t].insertBefore(e[a], s[t].childNodes[0]);
        else s[t].insertBefore(e, s[t].childNodes[0]);
      return this;
    },
    next: function (t) {
      return new r(
        0 < this.length
          ? t
            ? this[0].nextElementSibling &&
              e(this[0].nextElementSibling).is(t)
              ? [this[0].nextElementSibling]
              : []
            : this[0].nextElementSibling
              ? [this[0].nextElementSibling]
              : []
          : []
      );
    },
    nextAll: function (t) {
      var a = [],
        i = this[0];
      if (!i) return new r([]);
      for (; i.nextElementSibling; ) {
        var s = i.nextElementSibling;
        t ? e(s).is(t) && a.push(s) : a.push(s), (i = s);
      }
      return new r(a);
    },
    prev: function (t) {
      if (0 < this.length) {
        var a = this[0];
        return new r(
          t
            ? a.previousElementSibling &&
              e(a.previousElementSibling).is(t)
              ? [a.previousElementSibling]
              : []
            : a.previousElementSibling
              ? [a.previousElementSibling]
              : []
        );
      }
      return new r([]);
    },
    prevAll: function (t) {
      var a = [],
        i = this[0];
      if (!i) return new r([]);
      for (; i.previousElementSibling; ) {
        var s = i.previousElementSibling;
        t ? e(s).is(t) && a.push(s) : a.push(s), (i = s);
      }
      return new r(a);
    },
    parent: function (a) {
      for (var i = [], s = 0; s < this.length; s += 1)
        null !== this[s].parentNode &&
          (a
            ? e(this[s].parentNode).is(a) &&
              i.push(this[s].parentNode)
            : i.push(this[s].parentNode));
      return e(t(i));
    },
    parents: function (a) {
      for (var i = [], s = 0; s < this.length; s += 1)
        for (var r = this[s].parentNode; r; )
          a ? e(r).is(a) && i.push(r) : i.push(r), (r = r.parentNode);
      return e(t(i));
    },
    closest: function (e) {
      var t = this;
      return void 0 === e
        ? new r([])
        : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1)
        for (
          var i = this[a].querySelectorAll(e), s = 0;
          s < i.length;
          s += 1
        )
          t.push(i[s]);
      return new r(t);
    },
    children: function (a) {
      for (var i = [], s = 0; s < this.length; s += 1)
        for (var n = this[s].childNodes, o = 0; o < n.length; o += 1)
          a
            ? 1 === n[o].nodeType && e(n[o]).is(a) && i.push(n[o])
            : 1 === n[o].nodeType && i.push(n[o]);
      return new r(t(i));
    },
    remove: function () {
      for (var e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
    add: function () {
      for (var t = [], a = arguments.length; a--; )
        t[a] = arguments[a];
      var i, s;
      for (i = 0; i < t.length; i += 1) {
        var r = e(t[i]);
        for (s = 0; s < r.length; s += 1)
          (this[this.length] = r[s]), (this.length += 1);
      }
      return this;
    },
    styles: function () {
      return this[0] ? s.getComputedStyle(this[0], null) : {};
    },
  };
  Object.keys(n).forEach(function (t) {
    e.fn[t] = n[t];
  });
  var o,
    l,
    d,
    p = {
      deleteProps: function (e) {
        var t = e;
        Object.keys(t).forEach(function (e) {
          try {
            t[e] = null;
          } catch (e) {}
          try {
            delete t[e];
          } catch (e) {}
        });
      },
      nextTick: function (e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      },
      now: function () {
        return Date.now();
      },
      getTranslate: function (e, t) {
        var a, i, r;
        void 0 === t && (t = 'x');
        var n = s.getComputedStyle(e, null);
        return (
          s.WebKitCSSMatrix
            ? (6 <
                (i = n.transform || n.webkitTransform).split(',')
                  .length &&
                (i = i
                  .split(', ')
                  .map(function (e) {
                    return e.replace(',', '.');
                  })
                  .join(', ')),
              (r = new s.WebKitCSSMatrix('none' === i ? '' : i)))
            : (a = (r =
                n.MozTransform ||
                n.OTransform ||
                n.MsTransform ||
                n.msTransform ||
                n.transform ||
                n
                  .getPropertyValue('transform')
                  .replace('translate(', 'matrix(1, 0, 0, 1,'))
                .toString()
                .split(',')),
          'x' === t &&
            (i = s.WebKitCSSMatrix
              ? r.m41
              : 16 === a.length
                ? parseFloat(a[12])
                : parseFloat(a[4])),
          'y' === t &&
            (i = s.WebKitCSSMatrix
              ? r.m42
              : 16 === a.length
                ? parseFloat(a[13])
                : parseFloat(a[5])),
          i || 0
        );
      },
      parseUrlQuery: function (e) {
        var t,
          a,
          i,
          r,
          n = {},
          o = e || s.location.href;
        if ('string' == typeof o && o.length)
          for (
            r = (a = (o =
              -1 < o.indexOf('?') ? o.replace(/\S*\?/, '') : '')
              .split('&')
              .filter(function (e) {
                return '' !== e;
              })).length,
              t = 0;
            t < r;
            t += 1
          )
            (i = a[t].replace(/#\S+/g, '').split('=')),
              (n[decodeURIComponent(i[0])] =
                void 0 === i[1]
                  ? void 0
                  : decodeURIComponent(i[1]) || '');
        return n;
      },
      isObject: function (e) {
        return (
          'object' == typeof e &&
          null !== e &&
          e.constructor &&
          e.constructor === Object
        );
      },
      extend: function () {
        for (var e = [], t = arguments.length; t--; )
          e[t] = arguments[t];
        for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
          var s = e[i];
          if (null != s)
            for (
              var r = Object.keys(Object(s)), n = 0, o = r.length;
              n < o;
              n += 1
            ) {
              var l = r[n],
                d = Object.getOwnPropertyDescriptor(s, l);
              void 0 !== d &&
                d.enumerable &&
                (p.isObject(a[l]) && p.isObject(s[l])
                  ? p.extend(a[l], s[l])
                  : !p.isObject(a[l]) && p.isObject(s[l])
                    ? ((a[l] = {}), p.extend(a[l], s[l]))
                    : (a[l] = s[l]));
            }
        }
        return a;
      },
    },
    c =
      ((d = i.createElement('div')),
      {
        touch:
          (s.Modernizr && !0 === s.Modernizr.touch) ||
          !!(
            'ontouchstart' in s ||
            (s.DocumentTouch && i instanceof s.DocumentTouch)
          ),
        pointerEvents: !(
          !s.navigator.pointerEnabled && !s.PointerEvent
        ),
        prefixedPointerEvents: !!s.navigator.msPointerEnabled,
        transition:
          'transition' in (l = d.style) ||
          'webkitTransition' in l ||
          'MozTransition' in l,
        transforms3d:
          (s.Modernizr && !0 === s.Modernizr.csstransforms3d) ||
          'webkitPerspective' in (o = d.style) ||
          'MozPerspective' in o ||
          'OPerspective' in o ||
          'MsPerspective' in o ||
          'perspective' in o,
        flexbox: (function () {
          for (
            var e = d.style,
              t =
                'alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient'.split(
                  ' '
                ),
              a = 0;
            a < t.length;
            a += 1
          )
            if (t[a] in e) return !0;
          return !1;
        })(),
        observer:
          'MutationObserver' in s || 'WebkitMutationObserver' in s,
        passiveListener: (function () {
          var e = !1;
          try {
            var t = Object.defineProperty({}, 'passive', {
              get: function () {
                e = !0;
              },
            });
            s.addEventListener('testPassiveListener', null, t);
          } catch (e) {}
          return e;
        })(),
        gestures: 'ongesturestart' in s,
      }),
    u = function (e) {
      void 0 === e && (e = {});
      var t = this;
      (t.params = e),
        (t.eventsListeners = {}),
        t.params &&
          t.params.on &&
          Object.keys(t.params.on).forEach(function (e) {
            t.on(e, t.params.on[e]);
          });
    },
    h = { components: { configurable: !0 } };
  (u.prototype.on = function (e, t, a) {
    var i = this;
    if ('function' != typeof t) return i;
    var s = a ? 'unshift' : 'push';
    return (
      e.split(' ').forEach(function (e) {
        i.eventsListeners[e] || (i.eventsListeners[e] = []),
          i.eventsListeners[e][s](t);
      }),
      i
    );
  }),
    (u.prototype.once = function (e, t, a) {
      var i = this;
      return 'function' != typeof t
        ? i
        : i.on(
            e,
            function a() {
              for (var s = [], r = arguments.length; r--; )
                s[r] = arguments[r];
              t.apply(i, s), i.off(e, a);
            },
            a
          );
    }),
    (u.prototype.off = function (e, t) {
      var a = this;
      return (
        a.eventsListeners &&
          e.split(' ').forEach(function (e) {
            void 0 === t
              ? (a.eventsListeners[e] = [])
              : a.eventsListeners[e].forEach(function (i, s) {
                  i === t && a.eventsListeners[e].splice(s, 1);
                });
          }),
        a
      );
    }),
    (u.prototype.emit = function () {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      var a,
        i,
        s,
        r = this;
      return (
        r.eventsListeners &&
          ('string' == typeof e[0] || Array.isArray(e[0])
            ? ((a = e[0]), (i = e.slice(1, e.length)), (s = r))
            : ((a = e[0].events),
              (i = e[0].data),
              (s = e[0].context || r)),
          (Array.isArray(a) ? a : a.split(' ')).forEach(function (e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
              var t = [];
              r.eventsListeners[e].forEach(function (e) {
                t.push(e);
              }),
                t.forEach(function (e) {
                  e.apply(s, i);
                });
            }
          })),
        r
      );
    }),
    (u.prototype.useModulesParams = function (e) {
      var t = this;
      t.modules &&
        Object.keys(t.modules).forEach(function (a) {
          var i = t.modules[a];
          i.params && p.extend(e, i.params);
        });
    }),
    (u.prototype.useModules = function (e) {
      void 0 === e && (e = {});
      var t = this;
      t.modules &&
        Object.keys(t.modules).forEach(function (a) {
          var i = t.modules[a],
            s = e[a] || {};
          i.instance &&
            Object.keys(i.instance).forEach(function (e) {
              var a = i.instance[e];
              t[e] = 'function' == typeof a ? a.bind(t) : a;
            }),
            i.on &&
              t.on &&
              Object.keys(i.on).forEach(function (e) {
                t.on(e, i.on[e]);
              }),
            i.create && i.create.bind(t)(s);
        });
    }),
    (h.components.set = function (e) {
      this.use && this.use(e);
    }),
    (u.installModule = function (e) {
      for (var t = [], a = arguments.length - 1; 0 < a--; )
        t[a] = arguments[a + 1];
      var i = this;
      i.prototype.modules || (i.prototype.modules = {});
      var s =
        e.name ||
        Object.keys(i.prototype.modules).length + '_' + p.now();
      return (
        (i.prototype.modules[s] = e).proto &&
          Object.keys(e.proto).forEach(function (t) {
            i.prototype[t] = e.proto[t];
          }),
        e.static &&
          Object.keys(e.static).forEach(function (t) {
            i[t] = e.static[t];
          }),
        e.install && e.install.apply(i, t),
        i
      );
    }),
    (u.use = function (e) {
      for (var t = [], a = arguments.length - 1; 0 < a--; )
        t[a] = arguments[a + 1];
      var i = this;
      return Array.isArray(e)
        ? (e.forEach(function (e) {
            return i.installModule(e);
          }),
          i)
        : i.installModule.apply(i, [e].concat(t));
    }),
    Object.defineProperties(u, h);
  var v,
    f = {
      updateSize: function () {
        var e,
          t,
          a = this,
          i = a.$el;
        (e =
          void 0 !== a.params.width
            ? a.params.width
            : i[0].clientWidth),
          (t =
            void 0 !== a.params.height
              ? a.params.height
              : i[0].clientHeight),
          (0 === e && a.isHorizontal()) ||
            (0 === t && a.isVertical()) ||
            ((e =
              e -
              parseInt(i.css('padding-left'), 10) -
              parseInt(i.css('padding-right'), 10)),
            (t =
              t -
              parseInt(i.css('padding-top'), 10) -
              parseInt(i.css('padding-bottom'), 10)),
            p.extend(a, {
              width: e,
              height: t,
              size: a.isHorizontal() ? e : t,
            }));
      },
      updateSlides: function () {
        var e = this,
          t = e.params,
          a = e.$wrapperEl,
          i = e.size,
          r = e.rtlTranslate,
          n = e.wrongRTL,
          o = e.virtual && t.virtual.enabled,
          l = o ? e.virtual.slides.length : e.slides.length,
          d = a.children('.' + e.params.slideClass),
          u = o ? e.virtual.slides.length : d.length,
          h = [],
          v = [],
          f = [],
          m = t.slidesOffsetBefore;
        'function' == typeof m && (m = t.slidesOffsetBefore.call(e));
        var g = t.slidesOffsetAfter;
        'function' == typeof g && (g = t.slidesOffsetAfter.call(e));
        var b = e.snapGrid.length,
          w = e.snapGrid.length,
          y = t.spaceBetween,
          x = -m,
          E = 0,
          T = 0;
        if (void 0 !== i) {
          var S, C;
          'string' == typeof y &&
            0 <= y.indexOf('%') &&
            (y = (parseFloat(y.replace('%', '')) / 100) * i),
            (e.virtualSize = -y),
            r
              ? d.css({ marginLeft: '', marginTop: '' })
              : d.css({ marginRight: '', marginBottom: '' }),
            1 < t.slidesPerColumn &&
              ((S =
                Math.floor(u / t.slidesPerColumn) ===
                u / e.params.slidesPerColumn
                  ? u
                  : Math.ceil(u / t.slidesPerColumn) *
                    t.slidesPerColumn),
              'auto' !== t.slidesPerView &&
                'row' === t.slidesPerColumnFill &&
                (S = Math.max(
                  S,
                  t.slidesPerView * t.slidesPerColumn
                )));
          for (
            var M,
              z = t.slidesPerColumn,
              k = S / z,
              P = k - (t.slidesPerColumn * k - u),
              $ = 0;
            $ < u;
            $ += 1
          ) {
            C = 0;
            var L = d.eq($);
            if (1 < t.slidesPerColumn) {
              var I = void 0,
                D = void 0,
                O = void 0;
              'column' === t.slidesPerColumnFill
                ? ((O = $ - (D = Math.floor($ / z)) * z),
                  (P < D || (D === P && O === z - 1)) &&
                    z <= (O += 1) &&
                    ((O = 0), (D += 1)),
                  (I = D + (O * S) / z),
                  L.css({
                    '-webkit-box-ordinal-group': I,
                    '-moz-box-ordinal-group': I,
                    '-ms-flex-order': I,
                    '-webkit-order': I,
                    order: I,
                  }))
                : (D = $ - (O = Math.floor($ / k)) * k),
                L.css(
                  'margin-' + (e.isHorizontal() ? 'top' : 'left'),
                  0 !== O && t.spaceBetween && t.spaceBetween + 'px'
                )
                  .attr('data-swiper-column', D)
                  .attr('data-swiper-row', O);
            }
            if ('none' !== L.css('display')) {
              if ('auto' === t.slidesPerView) {
                var A = s.getComputedStyle(L[0], null),
                  B = L[0].style.transform,
                  H = L[0].style.webkitTransform;
                B && (L[0].style.transform = 'none'),
                  H && (L[0].style.webkitTransform = 'none'),
                  (C = e.isHorizontal()
                    ? L[0].getBoundingClientRect().width +
                      parseFloat(A.getPropertyValue('margin-left')) +
                      parseFloat(A.getPropertyValue('margin-right'))
                    : L[0].getBoundingClientRect().height +
                      parseFloat(A.getPropertyValue('margin-top')) +
                      parseFloat(
                        A.getPropertyValue('margin-bottom')
                      )),
                  B && (L[0].style.transform = B),
                  H && (L[0].style.webkitTransform = H),
                  t.roundLengths && (C = Math.floor(C));
              } else
                (C =
                  (i - (t.slidesPerView - 1) * y) / t.slidesPerView),
                  t.roundLengths && (C = Math.floor(C)),
                  d[$] &&
                    (e.isHorizontal()
                      ? (d[$].style.width = C + 'px')
                      : (d[$].style.height = C + 'px'));
              d[$] && (d[$].swiperSlideSize = C),
                f.push(C),
                t.centeredSlides
                  ? ((x = x + C / 2 + E / 2 + y),
                    0 === E && 0 !== $ && (x = x - i / 2 - y),
                    0 === $ && (x = x - i / 2 - y),
                    Math.abs(x) < 0.001 && (x = 0),
                    t.roundLengths && (x = Math.floor(x)),
                    T % t.slidesPerGroup == 0 && h.push(x),
                    v.push(x))
                  : (t.roundLengths && (x = Math.floor(x)),
                    T % t.slidesPerGroup == 0 && h.push(x),
                    v.push(x),
                    (x = x + C + y)),
                (e.virtualSize += C + y),
                (E = C),
                (T += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, i) + g),
            r &&
              n &&
              ('slide' === t.effect || 'coverflow' === t.effect) &&
              a.css({ width: e.virtualSize + t.spaceBetween + 'px' }),
            (c.flexbox && !t.setWrapperSize) ||
              (e.isHorizontal()
                ? a.css({
                    width: e.virtualSize + t.spaceBetween + 'px',
                  })
                : a.css({
                    height: e.virtualSize + t.spaceBetween + 'px',
                  })),
            1 < t.slidesPerColumn &&
              ((e.virtualSize = (C + t.spaceBetween) * S),
              (e.virtualSize =
                Math.ceil(e.virtualSize / t.slidesPerColumn) -
                t.spaceBetween),
              e.isHorizontal()
                ? a.css({
                    width: e.virtualSize + t.spaceBetween + 'px',
                  })
                : a.css({
                    height: e.virtualSize + t.spaceBetween + 'px',
                  }),
              t.centeredSlides))
          ) {
            M = [];
            for (var G = 0; G < h.length; G += 1) {
              var N = h[G];
              t.roundLengths && (N = Math.floor(N)),
                h[G] < e.virtualSize + h[0] && M.push(N);
            }
            h = M;
          }
          if (!t.centeredSlides) {
            M = [];
            for (var X = 0; X < h.length; X += 1) {
              var Y = h[X];
              t.roundLengths && (Y = Math.floor(Y)),
                h[X] <= e.virtualSize - i && M.push(Y);
            }
            (h = M),
              1 <
                Math.floor(e.virtualSize - i) -
                  Math.floor(h[h.length - 1]) &&
                h.push(e.virtualSize - i);
          }
          0 === h.length && (h = [0]),
            0 !== t.spaceBetween &&
              (e.isHorizontal()
                ? r
                  ? d.css({ marginLeft: y + 'px' })
                  : d.css({ marginRight: y + 'px' })
                : d.css({ marginBottom: y + 'px' })),
            p.extend(e, {
              slides: d,
              snapGrid: h,
              slidesGrid: v,
              slidesSizesGrid: f,
            }),
            u !== l && e.emit('slidesLengthChange'),
            h.length !== b &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit('snapGridLengthChange')),
            v.length !== w && e.emit('slidesGridLengthChange'),
            (t.watchSlidesProgress || t.watchSlidesVisibility) &&
              e.updateSlidesOffset();
        }
      },
      updateAutoHeight: function (e) {
        var t,
          a = this,
          i = [],
          s = 0;
        if (
          ('number' == typeof e
            ? a.setTransition(e)
            : !0 === e && a.setTransition(a.params.speed),
          'auto' !== a.params.slidesPerView &&
            1 < a.params.slidesPerView)
        )
          for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
            var r = a.activeIndex + t;
            if (r > a.slides.length) break;
            i.push(a.slides.eq(r)[0]);
          }
        else i.push(a.slides.eq(a.activeIndex)[0]);
        for (t = 0; t < i.length; t += 1)
          if (void 0 !== i[t]) {
            var n = i[t].offsetHeight;
            s = s < n ? n : s;
          }
        s && a.$wrapperEl.css('height', s + 'px');
      },
      updateSlidesOffset: function () {
        for (var e = this.slides, t = 0; t < e.length; t += 1)
          e[t].swiperSlideOffset = this.isHorizontal()
            ? e[t].offsetLeft
            : e[t].offsetTop;
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        var t = this,
          a = t.params,
          i = t.slides,
          s = t.rtlTranslate;
        if (0 !== i.length) {
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          var r = -e;
          s && (r = e), i.removeClass(a.slideVisibleClass);
          for (var n = 0; n < i.length; n += 1) {
            var o = i[n],
              l =
                (r +
                  (a.centeredSlides ? t.minTranslate() : 0) -
                  o.swiperSlideOffset) /
                (o.swiperSlideSize + a.spaceBetween);
            if (a.watchSlidesVisibility) {
              var d = -(r - o.swiperSlideOffset),
                p = d + t.slidesSizesGrid[n];
              ((0 <= d && d < t.size) ||
                (0 < p && p <= t.size) ||
                (d <= 0 && p >= t.size)) &&
                i.eq(n).addClass(a.slideVisibleClass);
            }
            o.progress = s ? -l : l;
          }
        }
      },
      updateProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        var t = this,
          a = t.params,
          i = t.maxTranslate() - t.minTranslate(),
          s = t.progress,
          r = t.isBeginning,
          n = t.isEnd,
          o = r,
          l = n;
        0 === i
          ? (n = r = !(s = 0))
          : ((r = (s = (e - t.minTranslate()) / i) <= 0),
            (n = 1 <= s)),
          p.extend(t, { progress: s, isBeginning: r, isEnd: n }),
          (a.watchSlidesProgress || a.watchSlidesVisibility) &&
            t.updateSlidesProgress(e),
          r && !o && t.emit('reachBeginning toEdge'),
          n && !l && t.emit('reachEnd toEdge'),
          ((o && !r) || (l && !n)) && t.emit('fromEdge'),
          t.emit('progress', s);
      },
      updateSlidesClasses: function () {
        var e,
          t = this,
          a = t.slides,
          i = t.params,
          s = t.$wrapperEl,
          r = t.activeIndex,
          n = t.realIndex,
          o = t.virtual && i.virtual.enabled;
        a.removeClass(
          i.slideActiveClass +
            ' ' +
            i.slideNextClass +
            ' ' +
            i.slidePrevClass +
            ' ' +
            i.slideDuplicateActiveClass +
            ' ' +
            i.slideDuplicateNextClass +
            ' ' +
            i.slideDuplicatePrevClass
        ),
          (e = o
            ? t.$wrapperEl.find(
                '.' +
                  i.slideClass +
                  '[data-swiper-slide-index="' +
                  r +
                  '"]'
              )
            : a.eq(r)).addClass(i.slideActiveClass),
          i.loop &&
            (e.hasClass(i.slideDuplicateClass)
              ? s
                  .children(
                    '.' +
                      i.slideClass +
                      ':not(.' +
                      i.slideDuplicateClass +
                      ')[data-swiper-slide-index="' +
                      n +
                      '"]'
                  )
                  .addClass(i.slideDuplicateActiveClass)
              : s
                  .children(
                    '.' +
                      i.slideClass +
                      '.' +
                      i.slideDuplicateClass +
                      '[data-swiper-slide-index="' +
                      n +
                      '"]'
                  )
                  .addClass(i.slideDuplicateActiveClass));
        var l = e
          .nextAll('.' + i.slideClass)
          .eq(0)
          .addClass(i.slideNextClass);
        i.loop &&
          0 === l.length &&
          (l = a.eq(0)).addClass(i.slideNextClass);
        var d = e
          .prevAll('.' + i.slideClass)
          .eq(0)
          .addClass(i.slidePrevClass);
        i.loop &&
          0 === d.length &&
          (d = a.eq(-1)).addClass(i.slidePrevClass),
          i.loop &&
            (l.hasClass(i.slideDuplicateClass)
              ? s
                  .children(
                    '.' +
                      i.slideClass +
                      ':not(.' +
                      i.slideDuplicateClass +
                      ')[data-swiper-slide-index="' +
                      l.attr('data-swiper-slide-index') +
                      '"]'
                  )
                  .addClass(i.slideDuplicateNextClass)
              : s
                  .children(
                    '.' +
                      i.slideClass +
                      '.' +
                      i.slideDuplicateClass +
                      '[data-swiper-slide-index="' +
                      l.attr('data-swiper-slide-index') +
                      '"]'
                  )
                  .addClass(i.slideDuplicateNextClass),
            d.hasClass(i.slideDuplicateClass)
              ? s
                  .children(
                    '.' +
                      i.slideClass +
                      ':not(.' +
                      i.slideDuplicateClass +
                      ')[data-swiper-slide-index="' +
                      d.attr('data-swiper-slide-index') +
                      '"]'
                  )
                  .addClass(i.slideDuplicatePrevClass)
              : s
                  .children(
                    '.' +
                      i.slideClass +
                      '.' +
                      i.slideDuplicateClass +
                      '[data-swiper-slide-index="' +
                      d.attr('data-swiper-slide-index') +
                      '"]'
                  )
                  .addClass(i.slideDuplicatePrevClass));
      },
      updateActiveIndex: function (e) {
        var t,
          a = this,
          i = a.rtlTranslate ? a.translate : -a.translate,
          s = a.slidesGrid,
          r = a.snapGrid,
          n = a.params,
          o = a.activeIndex,
          l = a.realIndex,
          d = a.snapIndex,
          c = e;
        if (void 0 === c) {
          for (var u = 0; u < s.length; u += 1)
            void 0 !== s[u + 1]
              ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2
                ? (c = u)
                : i >= s[u] && i < s[u + 1] && (c = u + 1)
              : i >= s[u] && (c = u);
          n.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
        }
        if (
          ((t =
            0 <= r.indexOf(i)
              ? r.indexOf(i)
              : Math.floor(c / n.slidesPerGroup)) >= r.length &&
            (t = r.length - 1),
          c !== o)
        ) {
          var h = parseInt(
            a.slides.eq(c).attr('data-swiper-slide-index') || c,
            10
          );
          p.extend(a, {
            snapIndex: t,
            realIndex: h,
            previousIndex: o,
            activeIndex: c,
          }),
            a.emit('activeIndexChange'),
            a.emit('snapIndexChange'),
            l !== h && a.emit('realIndexChange'),
            a.emit('slideChange');
        } else
          t !== d && ((a.snapIndex = t), a.emit('snapIndexChange'));
      },
      updateClickedSlide: function (t) {
        var a = this,
          i = a.params,
          s = e(t.target).closest('.' + i.slideClass)[0],
          r = !1;
        if (s)
          for (var n = 0; n < a.slides.length; n += 1)
            a.slides[n] === s && (r = !0);
        if (!s || !r)
          return (
            (a.clickedSlide = void 0), void (a.clickedIndex = void 0)
          );
        (a.clickedSlide = s),
          a.virtual && a.params.virtual.enabled
            ? (a.clickedIndex = parseInt(
                e(s).attr('data-swiper-slide-index'),
                10
              ))
            : (a.clickedIndex = e(s).index()),
          i.slideToClickedSlide &&
            void 0 !== a.clickedIndex &&
            a.clickedIndex !== a.activeIndex &&
            a.slideToClickedSlide();
      },
    },
    m = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
        var t = this.params,
          a = this.rtlTranslate,
          i = this.translate,
          s = this.$wrapperEl;
        if (t.virtualTranslate) return a ? -i : i;
        var r = p.getTranslate(s[0], e);
        return a && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        var a = this,
          i = a.rtlTranslate,
          s = a.params,
          r = a.$wrapperEl,
          n = a.progress,
          o = 0,
          l = 0;
        a.isHorizontal() ? (o = i ? -e : e) : (l = e),
          s.roundLengths &&
            ((o = Math.floor(o)), (l = Math.floor(l))),
          s.virtualTranslate ||
            (c.transforms3d
              ? r.transform(
                  'translate3d(' + o + 'px, ' + l + 'px, 0px)'
                )
              : r.transform('translate(' + o + 'px, ' + l + 'px)')),
          (a.previousTranslate = a.translate),
          (a.translate = a.isHorizontal() ? o : l);
        var d = a.maxTranslate() - a.minTranslate();
        (0 === d ? 0 : (e - a.minTranslate()) / d) !== n &&
          a.updateProgress(e),
          a.emit('setTranslate', a.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
    },
    g = {
      setTransition: function (e, t) {
        this.$wrapperEl.transition(e),
          this.emit('setTransition', e, t);
      },
      transitionStart: function (e, t) {
        void 0 === e && (e = !0);
        var a = this,
          i = a.activeIndex,
          s = a.params,
          r = a.previousIndex;
        s.autoHeight && a.updateAutoHeight();
        var n = t;
        if (
          (n || (n = r < i ? 'next' : i < r ? 'prev' : 'reset'),
          a.emit('transitionStart'),
          e && i !== r)
        ) {
          if ('reset' === n)
            return void a.emit('slideResetTransitionStart');
          a.emit('slideChangeTransitionStart'),
            'next' === n
              ? a.emit('slideNextTransitionStart')
              : a.emit('slidePrevTransitionStart');
        }
      },
      transitionEnd: function (e, t) {
        void 0 === e && (e = !0);
        var a = this,
          i = a.activeIndex,
          s = a.previousIndex;
        (a.animating = !1), a.setTransition(0);
        var r = t;
        if (
          (r || (r = s < i ? 'next' : i < s ? 'prev' : 'reset'),
          a.emit('transitionEnd'),
          e && i !== s)
        ) {
          if ('reset' === r)
            return void a.emit('slideResetTransitionEnd');
          a.emit('slideChangeTransitionEnd'),
            'next' === r
              ? a.emit('slideNextTransitionEnd')
              : a.emit('slidePrevTransitionEnd');
        }
      },
    },
    b = {
      slideTo: function (e, t, a, i) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === a && (a = !0);
        var s = this,
          r = e;
        r < 0 && (r = 0);
        var n = s.params,
          o = s.snapGrid,
          l = s.slidesGrid,
          d = s.previousIndex,
          p = s.activeIndex,
          u = s.rtlTranslate;
        if (s.animating && n.preventInteractionOnTransition)
          return !1;
        var h = Math.floor(r / n.slidesPerGroup);
        h >= o.length && (h = o.length - 1),
          (p || n.initialSlide || 0) === (d || 0) &&
            a &&
            s.emit('beforeSlideChangeStart');
        var v,
          f = -o[h];
        if ((s.updateProgress(f), n.normalizeSlideIndex))
          for (var m = 0; m < l.length; m += 1)
            -Math.floor(100 * f) >= Math.floor(100 * l[m]) && (r = m);
        if (s.initialized && r !== p) {
          if (
            !s.allowSlideNext &&
            f < s.translate &&
            f < s.minTranslate()
          )
            return !1;
          if (
            !s.allowSlidePrev &&
            f > s.translate &&
            f > s.maxTranslate() &&
            (p || 0) !== r
          )
            return !1;
        }
        return (
          (v = p < r ? 'next' : r < p ? 'prev' : 'reset'),
          (u && -f === s.translate) || (!u && f === s.translate)
            ? (s.updateActiveIndex(r),
              n.autoHeight && s.updateAutoHeight(),
              s.updateSlidesClasses(),
              'slide' !== n.effect && s.setTranslate(f),
              'reset' !== v &&
                (s.transitionStart(a, v), s.transitionEnd(a, v)),
              !1)
            : (0 !== t && c.transition
                ? (s.setTransition(t),
                  s.setTranslate(f),
                  s.updateActiveIndex(r),
                  s.updateSlidesClasses(),
                  s.emit('beforeTransitionStart', t, i),
                  s.transitionStart(a, v),
                  s.animating ||
                    ((s.animating = !0),
                    s.onSlideToWrapperTransitionEnd ||
                      (s.onSlideToWrapperTransitionEnd = function (
                        e
                      ) {
                        s &&
                          !s.destroyed &&
                          e.target === this &&
                          (s.$wrapperEl[0].removeEventListener(
                            'transitionend',
                            s.onSlideToWrapperTransitionEnd
                          ),
                          s.$wrapperEl[0].removeEventListener(
                            'webkitTransitionEnd',
                            s.onSlideToWrapperTransitionEnd
                          ),
                          (s.onSlideToWrapperTransitionEnd = null),
                          delete s.onSlideToWrapperTransitionEnd,
                          s.transitionEnd(a, v));
                      }),
                    s.$wrapperEl[0].addEventListener(
                      'transitionend',
                      s.onSlideToWrapperTransitionEnd
                    ),
                    s.$wrapperEl[0].addEventListener(
                      'webkitTransitionEnd',
                      s.onSlideToWrapperTransitionEnd
                    )))
                : (s.setTransition(0),
                  s.setTranslate(f),
                  s.updateActiveIndex(r),
                  s.updateSlidesClasses(),
                  s.emit('beforeTransitionStart', t, i),
                  s.transitionStart(a, v),
                  s.transitionEnd(a, v)),
              !0)
        );
      },
      slideToLoop: function (e, t, a, i) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === a && (a = !0);
        var s = e;
        return (
          this.params.loop && (s += this.loopedSlides),
          this.slideTo(s, t, a, i)
        );
      },
      slideNext: function (e, t, a) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0);
        var i = this,
          s = i.params,
          r = i.animating;
        return s.loop
          ? !r &&
              (i.loopFix(),
              (i._clientLeft = i.$wrapperEl[0].clientLeft),
              i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a))
          : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a);
      },
      slidePrev: function (e, t, a) {
        function i(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0);
        var s = this,
          r = s.params,
          n = s.animating,
          o = s.snapGrid,
          l = s.slidesGrid,
          d = s.rtlTranslate;
        if (r.loop) {
          if (n) return !1;
          s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
        }
        var p,
          c = i(d ? s.translate : -s.translate),
          u = o.map(function (e) {
            return i(e);
          }),
          h =
            (l.map(function (e) {
              return i(e);
            }),
            o[u.indexOf(c)],
            o[u.indexOf(c) - 1]);
        return (
          void 0 !== h &&
            (p = l.indexOf(h)) < 0 &&
            (p = s.activeIndex - 1),
          s.slideTo(p, e, t, a)
        );
      },
      slideReset: function (e, t, a) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, a)
        );
      },
      slideToClosest: function (e, t, a) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0);
        var i = this,
          s = i.activeIndex,
          r = Math.floor(s / i.params.slidesPerGroup);
        if (r < i.snapGrid.length - 1) {
          var n = i.rtlTranslate ? i.translate : -i.translate,
            o = i.snapGrid[r];
          (i.snapGrid[r + 1] - o) / 2 < n - o &&
            (s = i.params.slidesPerGroup);
        }
        return i.slideTo(s, e, t, a);
      },
      slideToClickedSlide: function () {
        var t,
          a = this,
          i = a.params,
          s = a.$wrapperEl,
          r =
            'auto' === i.slidesPerView
              ? a.slidesPerViewDynamic()
              : i.slidesPerView,
          n = a.clickedIndex;
        if (i.loop) {
          if (a.animating) return;
          (t = parseInt(
            e(a.clickedSlide).attr('data-swiper-slide-index'),
            10
          )),
            i.centeredSlides
              ? n < a.loopedSlides - r / 2 ||
                n > a.slides.length - a.loopedSlides + r / 2
                ? (a.loopFix(),
                  (n = s
                    .children(
                      '.' +
                        i.slideClass +
                        '[data-swiper-slide-index="' +
                        t +
                        '"]:not(.' +
                        i.slideDuplicateClass +
                        ')'
                    )
                    .eq(0)
                    .index()),
                  p.nextTick(function () {
                    a.slideTo(n);
                  }))
                : a.slideTo(n)
              : n > a.slides.length - r
                ? (a.loopFix(),
                  (n = s
                    .children(
                      '.' +
                        i.slideClass +
                        '[data-swiper-slide-index="' +
                        t +
                        '"]:not(.' +
                        i.slideDuplicateClass +
                        ')'
                    )
                    .eq(0)
                    .index()),
                  p.nextTick(function () {
                    a.slideTo(n);
                  }))
                : a.slideTo(n);
        } else a.slideTo(n);
      },
    },
    w = {
      loopCreate: function () {
        var t = this,
          a = t.params,
          s = t.$wrapperEl;
        s.children(
          '.' + a.slideClass + '.' + a.slideDuplicateClass
        ).remove();
        var r = s.children('.' + a.slideClass);
        if (a.loopFillGroupWithBlank) {
          var n = a.slidesPerGroup - (r.length % a.slidesPerGroup);
          if (n !== a.slidesPerGroup) {
            for (var o = 0; o < n; o += 1) {
              var l = e(i.createElement('div')).addClass(
                a.slideClass + ' ' + a.slideBlankClass
              );
              s.append(l);
            }
            r = s.children('.' + a.slideClass);
          }
        }
        'auto' !== a.slidesPerView ||
          a.loopedSlides ||
          (a.loopedSlides = r.length),
          (t.loopedSlides = parseInt(
            a.loopedSlides || a.slidesPerView,
            10
          )),
          (t.loopedSlides += a.loopAdditionalSlides),
          t.loopedSlides > r.length && (t.loopedSlides = r.length);
        var d = [],
          p = [];
        r.each(function (a, i) {
          var s = e(i);
          a < t.loopedSlides && p.push(i),
            a < r.length &&
              a >= r.length - t.loopedSlides &&
              d.push(i),
            s.attr('data-swiper-slide-index', a);
        });
        for (var c = 0; c < p.length; c += 1)
          s.append(
            e(p[c].cloneNode(!0)).addClass(a.slideDuplicateClass)
          );
        for (var u = d.length - 1; 0 <= u; u -= 1)
          s.prepend(
            e(d[u].cloneNode(!0)).addClass(a.slideDuplicateClass)
          );
      },
      loopFix: function () {
        var e,
          t = this,
          a = t.params,
          i = t.activeIndex,
          s = t.slides,
          r = t.loopedSlides,
          n = t.allowSlidePrev,
          o = t.allowSlideNext,
          l = t.snapGrid,
          d = t.rtlTranslate;
        (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
        var p = -l[i] - t.getTranslate();
        i < r
          ? ((e = s.length - 3 * r + i),
            (e += r),
            t.slideTo(e, 0, !1, !0) &&
              0 !== p &&
              t.setTranslate((d ? -t.translate : t.translate) - p))
          : (('auto' === a.slidesPerView && 2 * r <= i) ||
              i >= s.length - r) &&
            ((e = -s.length + i + r),
            (e += r),
            t.slideTo(e, 0, !1, !0) &&
              0 !== p &&
              t.setTranslate((d ? -t.translate : t.translate) - p)),
          (t.allowSlidePrev = n),
          (t.allowSlideNext = o);
      },
      loopDestroy: function () {
        var e = this.$wrapperEl,
          t = this.params,
          a = this.slides;
        e
          .children('.' + t.slideClass + '.' + t.slideDuplicateClass)
          .remove(),
          a.removeAttr('data-swiper-slide-index');
      },
    },
    y = {
      setGrabCursor: function (e) {
        if (
          !(
            c.touch ||
            !this.params.simulateTouch ||
            (this.params.watchOverflow && this.isLocked)
          )
        ) {
          var t = this.el;
          (t.style.cursor = 'move'),
            (t.style.cursor = e
              ? '-webkit-grabbing'
              : '-webkit-grab'),
            (t.style.cursor = e ? '-moz-grabbin' : '-moz-grab'),
            (t.style.cursor = e ? 'grabbing' : 'grab');
        }
      },
      unsetGrabCursor: function () {
        c.touch ||
          (this.params.watchOverflow && this.isLocked) ||
          (this.el.style.cursor = '');
      },
    },
    x = {
      appendSlide: function (e) {
        var t = this,
          a = t.$wrapperEl,
          i = t.params;
        if (
          (i.loop && t.loopDestroy(),
          'object' == typeof e && 'length' in e)
        )
          for (var s = 0; s < e.length; s += 1)
            e[s] && a.append(e[s]);
        else a.append(e);
        i.loop && t.loopCreate(),
          (i.observer && c.observer) || t.update();
      },
      prependSlide: function (e) {
        var t = this,
          a = t.params,
          i = t.$wrapperEl,
          s = t.activeIndex;
        a.loop && t.loopDestroy();
        var r = s + 1;
        if ('object' == typeof e && 'length' in e) {
          for (var n = 0; n < e.length; n += 1)
            e[n] && i.prepend(e[n]);
          r = s + e.length;
        } else i.prepend(e);
        a.loop && t.loopCreate(),
          (a.observer && c.observer) || t.update(),
          t.slideTo(r, 0, !1);
      },
      addSlide: function (e, t) {
        var a = this,
          i = a.$wrapperEl,
          s = a.params,
          r = a.activeIndex;
        s.loop &&
          ((r -= a.loopedSlides),
          a.loopDestroy(),
          (a.slides = i.children('.' + s.slideClass)));
        var n = a.slides.length;
        if (e <= 0) a.prependSlide(t);
        else if (n <= e) a.appendSlide(t);
        else {
          for (
            var o = e < r ? r + 1 : r, l = [], d = n - 1;
            e <= d;
            d -= 1
          ) {
            var p = a.slides.eq(d);
            p.remove(), l.unshift(p);
          }
          if ('object' == typeof t && 'length' in t) {
            for (var u = 0; u < t.length; u += 1)
              t[u] && i.append(t[u]);
            o = e < r ? r + t.length : r;
          } else i.append(t);
          for (var h = 0; h < l.length; h += 1) i.append(l[h]);
          s.loop && a.loopCreate(),
            (s.observer && c.observer) || a.update(),
            s.loop
              ? a.slideTo(o + a.loopedSlides, 0, !1)
              : a.slideTo(o, 0, !1);
        }
      },
      removeSlide: function (e) {
        var t = this,
          a = t.params,
          i = t.$wrapperEl,
          s = t.activeIndex;
        a.loop &&
          ((s -= t.loopedSlides),
          t.loopDestroy(),
          (t.slides = i.children('.' + a.slideClass)));
        var r,
          n = s;
        if ('object' == typeof e && 'length' in e) {
          for (var o = 0; o < e.length; o += 1)
            (r = e[o]),
              t.slides[r] && t.slides.eq(r).remove(),
              r < n && (n -= 1);
          n = Math.max(n, 0);
        } else
          (r = e),
            t.slides[r] && t.slides.eq(r).remove(),
            r < n && (n -= 1),
            (n = Math.max(n, 0));
        a.loop && t.loopCreate(),
          (a.observer && c.observer) || t.update(),
          a.loop
            ? t.slideTo(n + t.loopedSlides, 0, !1)
            : t.slideTo(n, 0, !1);
      },
      removeAllSlides: function () {
        for (var e = [], t = 0; t < this.slides.length; t += 1)
          e.push(t);
        this.removeSlide(e);
      },
    },
    E = (function () {
      var e = s.navigator.userAgent,
        t = {
          ios: !1,
          android: !1,
          androidChrome: !1,
          desktop: !1,
          windows: !1,
          iphone: !1,
          ipod: !1,
          ipad: !1,
          cordova: s.cordova || s.phonegap,
          phonegap: s.cordova || s.phonegap,
        },
        a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
        r = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        n = e.match(/(iPad).*OS\s([\d_]+)/),
        o = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        l = !n && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      if (
        (a &&
          ((t.os = 'windows'),
          (t.osVersion = a[2]),
          (t.windows = !0)),
        r &&
          !a &&
          ((t.os = 'android'),
          (t.osVersion = r[2]),
          (t.android = !0),
          (t.androidChrome = 0 <= e.toLowerCase().indexOf('chrome'))),
        (n || l || o) && ((t.os = 'ios'), (t.ios = !0)),
        l &&
          !o &&
          ((t.osVersion = l[2].replace(/_/g, '.')), (t.iphone = !0)),
        n && ((t.osVersion = n[2].replace(/_/g, '.')), (t.ipad = !0)),
        o &&
          ((t.osVersion = o[3] ? o[3].replace(/_/g, '.') : null),
          (t.iphone = !0)),
        t.ios &&
          t.osVersion &&
          0 <= e.indexOf('Version/') &&
          '10' === t.osVersion.split('.')[0] &&
          (t.osVersion = e
            .toLowerCase()
            .split('version/')[1]
            .split(' ')[0]),
        (t.desktop = !(t.os || t.android || t.webView)),
        (t.webView =
          (l || n || o) && e.match(/.*AppleWebKit(?!.*Safari)/i)),
        t.os && 'ios' === t.os)
      ) {
        var d = t.osVersion.split('.'),
          p = i.querySelector('meta[name="viewport"]');
        t.minimalUi =
          !t.webView &&
          (o || l) &&
          (1 * d[0] == 7 ? 1 <= 1 * d[1] : 7 < 1 * d[0]) &&
          p &&
          0 <= p.getAttribute('content').indexOf('minimal-ui');
      }
      return (t.pixelRatio = s.devicePixelRatio || 1), t;
    })(),
    T = {
      attachEvents: function () {
        var t = this,
          r = t.params,
          n = t.touchEvents,
          o = t.el,
          l = t.wrapperEl;
        (t.onTouchStart = function (t) {
          var a = this,
            r = a.touchEventsData,
            n = a.params,
            o = a.touches;
          if (!a.animating || !n.preventInteractionOnTransition) {
            var l = t;
            if (
              (l.originalEvent && (l = l.originalEvent),
              (r.isTouchEvent = 'touchstart' === l.type),
              (r.isTouchEvent || !('which' in l) || 3 !== l.which) &&
                (!r.isTouched || !r.isMoved))
            )
              if (
                n.noSwiping &&
                e(l.target).closest(
                  n.noSwipingSelector
                    ? n.noSwipingSelector
                    : '.' + n.noSwipingClass
                )[0]
              )
                a.allowClick = !0;
              else if (
                !n.swipeHandler ||
                e(l).closest(n.swipeHandler)[0]
              ) {
                (o.currentX =
                  'touchstart' === l.type
                    ? l.targetTouches[0].pageX
                    : l.pageX),
                  (o.currentY =
                    'touchstart' === l.type
                      ? l.targetTouches[0].pageY
                      : l.pageY);
                var d = o.currentX,
                  c = o.currentY,
                  u = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
                  h = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
                if (!u || !(d <= h || d >= s.screen.width - h)) {
                  if (
                    (p.extend(r, {
                      isTouched: !0,
                      isMoved: !1,
                      allowTouchCallbacks: !0,
                      isScrolling: void 0,
                      startMoving: void 0,
                    }),
                    (o.startX = d),
                    (o.startY = c),
                    (r.touchStartTime = p.now()),
                    (a.allowClick = !0),
                    a.updateSize(),
                    (a.swipeDirection = void 0),
                    0 < n.threshold && (r.allowThresholdMove = !1),
                    'touchstart' !== l.type)
                  ) {
                    var v = !0;
                    e(l.target).is(r.formElements) && (v = !1),
                      i.activeElement &&
                        e(i.activeElement).is(r.formElements) &&
                        i.activeElement !== l.target &&
                        i.activeElement.blur(),
                      v && a.allowTouchMove && l.preventDefault();
                  }
                  a.emit('touchStart', l);
                }
              }
          }
        }.bind(t)),
          (t.onTouchMove = function (t) {
            var a = this,
              s = a.touchEventsData,
              r = a.params,
              n = a.touches,
              o = a.rtlTranslate,
              l = t;
            if (
              (l.originalEvent && (l = l.originalEvent), s.isTouched)
            ) {
              if (!s.isTouchEvent || 'mousemove' !== l.type) {
                var d =
                    'touchmove' === l.type
                      ? l.targetTouches[0].pageX
                      : l.pageX,
                  c =
                    'touchmove' === l.type
                      ? l.targetTouches[0].pageY
                      : l.pageY;
                if (l.preventedByNestedSwiper)
                  return (n.startX = d), void (n.startY = c);
                if (!a.allowTouchMove)
                  return (
                    (a.allowClick = !1),
                    void (
                      s.isTouched &&
                      (p.extend(n, {
                        startX: d,
                        startY: c,
                        currentX: d,
                        currentY: c,
                      }),
                      (s.touchStartTime = p.now()))
                    )
                  );
                if (
                  s.isTouchEvent &&
                  r.touchReleaseOnEdges &&
                  !r.loop
                )
                  if (a.isVertical()) {
                    if (
                      (c < n.startY &&
                        a.translate <= a.maxTranslate()) ||
                      (c > n.startY &&
                        a.translate >= a.minTranslate())
                    )
                      return (
                        (s.isTouched = !1), void (s.isMoved = !1)
                      );
                  } else if (
                    (d < n.startX &&
                      a.translate <= a.maxTranslate()) ||
                    (d > n.startX && a.translate >= a.minTranslate())
                  )
                    return;
                if (
                  s.isTouchEvent &&
                  i.activeElement &&
                  l.target === i.activeElement &&
                  e(l.target).is(s.formElements)
                )
                  return (s.isMoved = !0), void (a.allowClick = !1);
                if (
                  (s.allowTouchCallbacks && a.emit('touchMove', l),
                  !(l.targetTouches && 1 < l.targetTouches.length))
                ) {
                  (n.currentX = d), (n.currentY = c);
                  var u,
                    h = n.currentX - n.startX,
                    v = n.currentY - n.startY;
                  if (
                    !(
                      a.params.threshold &&
                      Math.sqrt(Math.pow(h, 2) + Math.pow(v, 2)) <
                        a.params.threshold
                    )
                  )
                    if (
                      (void 0 === s.isScrolling &&
                        ((a.isHorizontal() &&
                          n.currentY === n.startY) ||
                        (a.isVertical() && n.currentX === n.startX)
                          ? (s.isScrolling = !1)
                          : 25 <= h * h + v * v &&
                            ((u =
                              (180 *
                                Math.atan2(
                                  Math.abs(v),
                                  Math.abs(h)
                                )) /
                              Math.PI),
                            (s.isScrolling = a.isHorizontal()
                              ? u > r.touchAngle
                              : 90 - u > r.touchAngle))),
                      s.isScrolling && a.emit('touchMoveOpposite', l),
                      void 0 === s.startMoving &&
                        ((n.currentX === n.startX &&
                          n.currentY === n.startY) ||
                          (s.startMoving = !0)),
                      s.isScrolling)
                    )
                      s.isTouched = !1;
                    else if (s.startMoving) {
                      (a.allowClick = !1),
                        l.preventDefault(),
                        r.touchMoveStopPropagation &&
                          !r.nested &&
                          l.stopPropagation(),
                        s.isMoved ||
                          (r.loop && a.loopFix(),
                          (s.startTranslate = a.getTranslate()),
                          a.setTransition(0),
                          a.animating &&
                            a.$wrapperEl.trigger(
                              'webkitTransitionEnd transitionend'
                            ),
                          (s.allowMomentumBounce = !1),
                          !r.grabCursor ||
                            (!0 !== a.allowSlideNext &&
                              !0 !== a.allowSlidePrev) ||
                            a.setGrabCursor(!0),
                          a.emit('sliderFirstMove', l)),
                        a.emit('sliderMove', l),
                        (s.isMoved = !0);
                      var f = a.isHorizontal() ? h : v;
                      (n.diff = f),
                        (f *= r.touchRatio),
                        o && (f = -f),
                        (a.swipeDirection = 0 < f ? 'prev' : 'next'),
                        (s.currentTranslate = f + s.startTranslate);
                      var m = !0,
                        g = r.resistanceRatio;
                      if (
                        (r.touchReleaseOnEdges && (g = 0),
                        0 < f && s.currentTranslate > a.minTranslate()
                          ? ((m = !1),
                            r.resistance &&
                              (s.currentTranslate =
                                a.minTranslate() -
                                1 +
                                Math.pow(
                                  -a.minTranslate() +
                                    s.startTranslate +
                                    f,
                                  g
                                )))
                          : f < 0 &&
                            s.currentTranslate < a.maxTranslate() &&
                            ((m = !1),
                            r.resistance &&
                              (s.currentTranslate =
                                a.maxTranslate() +
                                1 -
                                Math.pow(
                                  a.maxTranslate() -
                                    s.startTranslate -
                                    f,
                                  g
                                ))),
                        m && (l.preventedByNestedSwiper = !0),
                        !a.allowSlideNext &&
                          'next' === a.swipeDirection &&
                          s.currentTranslate < s.startTranslate &&
                          (s.currentTranslate = s.startTranslate),
                        !a.allowSlidePrev &&
                          'prev' === a.swipeDirection &&
                          s.currentTranslate > s.startTranslate &&
                          (s.currentTranslate = s.startTranslate),
                        0 < r.threshold)
                      ) {
                        if (
                          !(
                            Math.abs(f) > r.threshold ||
                            s.allowThresholdMove
                          )
                        )
                          return void (s.currentTranslate =
                            s.startTranslate);
                        if (!s.allowThresholdMove)
                          return (
                            (s.allowThresholdMove = !0),
                            (n.startX = n.currentX),
                            (n.startY = n.currentY),
                            (s.currentTranslate = s.startTranslate),
                            void (n.diff = a.isHorizontal()
                              ? n.currentX - n.startX
                              : n.currentY - n.startY)
                          );
                      }
                      r.followFinger &&
                        ((r.freeMode ||
                          r.watchSlidesProgress ||
                          r.watchSlidesVisibility) &&
                          (a.updateActiveIndex(),
                          a.updateSlidesClasses()),
                        r.freeMode &&
                          (0 === s.velocities.length &&
                            s.velocities.push({
                              position:
                                n[
                                  a.isHorizontal()
                                    ? 'startX'
                                    : 'startY'
                                ],
                              time: s.touchStartTime,
                            }),
                          s.velocities.push({
                            position:
                              n[
                                a.isHorizontal()
                                  ? 'currentX'
                                  : 'currentY'
                              ],
                            time: p.now(),
                          })),
                        a.updateProgress(s.currentTranslate),
                        a.setTranslate(s.currentTranslate));
                    }
                }
              }
            } else
              s.startMoving &&
                s.isScrolling &&
                a.emit('touchMoveOpposite', l);
          }.bind(t)),
          (t.onTouchEnd = function (e) {
            var t = this,
              a = t.touchEventsData,
              i = t.params,
              s = t.touches,
              r = t.rtlTranslate,
              n = t.$wrapperEl,
              o = t.slidesGrid,
              l = t.snapGrid,
              d = e;
            if (
              (d.originalEvent && (d = d.originalEvent),
              a.allowTouchCallbacks && t.emit('touchEnd', d),
              (a.allowTouchCallbacks = !1),
              !a.isTouched)
            )
              return (
                a.isMoved && i.grabCursor && t.setGrabCursor(!1),
                (a.isMoved = !1),
                void (a.startMoving = !1)
              );
            i.grabCursor &&
              a.isMoved &&
              a.isTouched &&
              (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
              t.setGrabCursor(!1);
            var c,
              u = p.now(),
              h = u - a.touchStartTime;
            if (
              (t.allowClick &&
                (t.updateClickedSlide(d),
                t.emit('tap', d),
                h < 300 &&
                  300 < u - a.lastClickTime &&
                  (a.clickTimeout && clearTimeout(a.clickTimeout),
                  (a.clickTimeout = p.nextTick(function () {
                    t && !t.destroyed && t.emit('click', d);
                  }, 300))),
                h < 300 &&
                  u - a.lastClickTime < 300 &&
                  (a.clickTimeout && clearTimeout(a.clickTimeout),
                  t.emit('doubleTap', d))),
              (a.lastClickTime = p.now()),
              p.nextTick(function () {
                t.destroyed || (t.allowClick = !0);
              }),
              !a.isTouched ||
                !a.isMoved ||
                !t.swipeDirection ||
                0 === s.diff ||
                a.currentTranslate === a.startTranslate)
            )
              return (
                (a.isTouched = !1),
                (a.isMoved = !1),
                void (a.startMoving = !1)
              );
            if (
              ((a.isTouched = !1),
              (a.isMoved = !1),
              (a.startMoving = !1),
              (c = i.followFinger
                ? r
                  ? t.translate
                  : -t.translate
                : -a.currentTranslate),
              i.freeMode)
            ) {
              if (c < -t.minTranslate())
                return void t.slideTo(t.activeIndex);
              if (c > -t.maxTranslate())
                return void (t.slides.length < l.length
                  ? t.slideTo(l.length - 1)
                  : t.slideTo(t.slides.length - 1));
              if (i.freeModeMomentum) {
                if (1 < a.velocities.length) {
                  var v = a.velocities.pop(),
                    f = a.velocities.pop(),
                    m = v.position - f.position,
                    g = v.time - f.time;
                  (t.velocity = m / g),
                    (t.velocity /= 2),
                    Math.abs(t.velocity) <
                      i.freeModeMinimumVelocity && (t.velocity = 0),
                    (150 < g || 300 < p.now() - v.time) &&
                      (t.velocity = 0);
                } else t.velocity = 0;
                (t.velocity *= i.freeModeMomentumVelocityRatio),
                  (a.velocities.length = 0);
                var b = 1e3 * i.freeModeMomentumRatio,
                  w = t.velocity * b,
                  y = t.translate + w;
                r && (y = -y);
                var x,
                  E,
                  T = !1,
                  S =
                    20 *
                    Math.abs(t.velocity) *
                    i.freeModeMomentumBounceRatio;
                if (y < t.maxTranslate())
                  i.freeModeMomentumBounce
                    ? (y + t.maxTranslate() < -S &&
                        (y = t.maxTranslate() - S),
                      (x = t.maxTranslate()),
                      (T = !0),
                      (a.allowMomentumBounce = !0))
                    : (y = t.maxTranslate()),
                    i.loop && i.centeredSlides && (E = !0);
                else if (y > t.minTranslate())
                  i.freeModeMomentumBounce
                    ? (y - t.minTranslate() > S &&
                        (y = t.minTranslate() + S),
                      (x = t.minTranslate()),
                      (T = !0),
                      (a.allowMomentumBounce = !0))
                    : (y = t.minTranslate()),
                    i.loop && i.centeredSlides && (E = !0);
                else if (i.freeModeSticky) {
                  for (var C, M = 0; M < l.length; M += 1)
                    if (l[M] > -y) {
                      C = M;
                      break;
                    }
                  y = -(y =
                    Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) ||
                    'next' === t.swipeDirection
                      ? l[C]
                      : l[C - 1]);
                }
                if (
                  (E &&
                    t.once('transitionEnd', function () {
                      t.loopFix();
                    }),
                  0 !== t.velocity)
                )
                  b = r
                    ? Math.abs((-y - t.translate) / t.velocity)
                    : Math.abs((y - t.translate) / t.velocity);
                else if (i.freeModeSticky)
                  return void t.slideToClosest();
                i.freeModeMomentumBounce && T
                  ? (t.updateProgress(x),
                    t.setTransition(b),
                    t.setTranslate(y),
                    t.transitionStart(!0, t.swipeDirection),
                    (t.animating = !0),
                    n.transitionEnd(function () {
                      t &&
                        !t.destroyed &&
                        a.allowMomentumBounce &&
                        (t.emit('momentumBounce'),
                        t.setTransition(i.speed),
                        t.setTranslate(x),
                        n.transitionEnd(function () {
                          t && !t.destroyed && t.transitionEnd();
                        }));
                    }))
                  : t.velocity
                    ? (t.updateProgress(y),
                      t.setTransition(b),
                      t.setTranslate(y),
                      t.transitionStart(!0, t.swipeDirection),
                      t.animating ||
                        ((t.animating = !0),
                        n.transitionEnd(function () {
                          t && !t.destroyed && t.transitionEnd();
                        })))
                    : t.updateProgress(y),
                  t.updateActiveIndex(),
                  t.updateSlidesClasses();
              } else if (i.freeModeSticky)
                return void t.slideToClosest();
              (!i.freeModeMomentum || h >= i.longSwipesMs) &&
                (t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses());
            } else {
              for (
                var z = 0, k = t.slidesSizesGrid[0], P = 0;
                P < o.length;
                P += i.slidesPerGroup
              )
                void 0 !== o[P + i.slidesPerGroup]
                  ? c >= o[P] &&
                    c < o[P + i.slidesPerGroup] &&
                    (k = o[(z = P) + i.slidesPerGroup] - o[P])
                  : c >= o[P] &&
                    ((z = P),
                    (k = o[o.length - 1] - o[o.length - 2]));
              var $ = (c - o[z]) / k;
              if (h > i.longSwipesMs) {
                if (!i.longSwipes)
                  return void t.slideTo(t.activeIndex);
                'next' === t.swipeDirection &&
                  ($ >= i.longSwipesRatio
                    ? t.slideTo(z + i.slidesPerGroup)
                    : t.slideTo(z)),
                  'prev' === t.swipeDirection &&
                    ($ > 1 - i.longSwipesRatio
                      ? t.slideTo(z + i.slidesPerGroup)
                      : t.slideTo(z));
              } else {
                if (!i.shortSwipes)
                  return void t.slideTo(t.activeIndex);
                'next' === t.swipeDirection &&
                  t.slideTo(z + i.slidesPerGroup),
                  'prev' === t.swipeDirection && t.slideTo(z);
              }
            }
          }.bind(t)),
          (t.onClick = function (e) {
            this.allowClick ||
              (this.params.preventClicks && e.preventDefault(),
              this.params.preventClicksPropagation &&
                this.animating &&
                (e.stopPropagation(), e.stopImmediatePropagation()));
          }.bind(t));
        var d = 'container' === r.touchEventsTarget ? o : l,
          u = !!r.nested;
        if (
          c.touch ||
          (!c.pointerEvents && !c.prefixedPointerEvents)
        ) {
          if (c.touch) {
            var h = !(
              'touchstart' !== n.start ||
              !c.passiveListener ||
              !r.passiveListeners
            ) && { passive: !0, capture: !1 };
            d.addEventListener(n.start, t.onTouchStart, h),
              d.addEventListener(
                n.move,
                t.onTouchMove,
                c.passiveListener ? { passive: !1, capture: u } : u
              ),
              d.addEventListener(n.end, t.onTouchEnd, h);
          }
          ((r.simulateTouch && !E.ios && !E.android) ||
            (r.simulateTouch && !c.touch && E.ios)) &&
            (d.addEventListener('mousedown', t.onTouchStart, !1),
            i.addEventListener('mousemove', t.onTouchMove, u),
            i.addEventListener('mouseup', t.onTouchEnd, !1));
        } else
          d.addEventListener(n.start, t.onTouchStart, !1),
            i.addEventListener(n.move, t.onTouchMove, u),
            i.addEventListener(n.end, t.onTouchEnd, !1);
        (r.preventClicks || r.preventClicksPropagation) &&
          d.addEventListener('click', t.onClick, !0),
          t.on(
            E.ios || E.android
              ? 'resize orientationchange observerUpdate'
              : 'resize observerUpdate',
            a,
            !0
          );
      },
      detachEvents: function () {
        var e = this,
          t = e.params,
          s = e.touchEvents,
          r = e.el,
          n = e.wrapperEl,
          o = 'container' === t.touchEventsTarget ? r : n,
          l = !!t.nested;
        if (
          c.touch ||
          (!c.pointerEvents && !c.prefixedPointerEvents)
        ) {
          if (c.touch) {
            var d = !(
              'onTouchStart' !== s.start ||
              !c.passiveListener ||
              !t.passiveListeners
            ) && { passive: !0, capture: !1 };
            o.removeEventListener(s.start, e.onTouchStart, d),
              o.removeEventListener(s.move, e.onTouchMove, l),
              o.removeEventListener(s.end, e.onTouchEnd, d);
          }
          ((t.simulateTouch && !E.ios && !E.android) ||
            (t.simulateTouch && !c.touch && E.ios)) &&
            (o.removeEventListener('mousedown', e.onTouchStart, !1),
            i.removeEventListener('mousemove', e.onTouchMove, l),
            i.removeEventListener('mouseup', e.onTouchEnd, !1));
        } else
          o.removeEventListener(s.start, e.onTouchStart, !1),
            i.removeEventListener(s.move, e.onTouchMove, l),
            i.removeEventListener(s.end, e.onTouchEnd, !1);
        (t.preventClicks || t.preventClicksPropagation) &&
          o.removeEventListener('click', e.onClick, !0),
          e.off(
            E.ios || E.android
              ? 'resize orientationchange observerUpdate'
              : 'resize observerUpdate',
            a
          );
      },
    },
    S = {
      setBreakpoint: function () {
        var e = this,
          t = e.activeIndex,
          a = e.initialized,
          i = e.loopedSlides;
        void 0 === i && (i = 0);
        var s = e.params,
          r = s.breakpoints;
        if (r && (!r || 0 !== Object.keys(r).length)) {
          var n = e.getBreakpoint(r);
          if (n && e.currentBreakpoint !== n) {
            var o = n in r ? r[n] : e.originalParams,
              l = s.loop && o.slidesPerView !== s.slidesPerView;
            p.extend(e.params, o),
              p.extend(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
              (e.currentBreakpoint = n),
              l &&
                a &&
                (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - i + e.loopedSlides, 0, !1)),
              e.emit('breakpoint', o);
          }
        }
      },
      getBreakpoint: function (e) {
        if (e) {
          var t = !1,
            a = [];
          Object.keys(e).forEach(function (e) {
            a.push(e);
          }),
            a.sort(function (e, t) {
              return parseInt(e, 10) - parseInt(t, 10);
            });
          for (var i = 0; i < a.length; i += 1) {
            var r = a[i];
            r >= s.innerWidth && !t && (t = r);
          }
          return t || 'max';
        }
      },
    },
    C = {
      isIE:
        !!s.navigator.userAgent.match(/Trident/g) ||
        !!s.navigator.userAgent.match(/MSIE/g),
      isSafari:
        ((v = s.navigator.userAgent.toLowerCase()),
        0 <= v.indexOf('safari') &&
          v.indexOf('chrome') < 0 &&
          v.indexOf('android') < 0),
      isUiWebView:
        /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
          s.navigator.userAgent
        ),
    },
    M = {
      init: !0,
      direction: 'horizontal',
      touchEventsTarget: 'container',
      initialSlide: 0,
      speed: 300,
      preventInteractionOnTransition: !1,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: 'slide',
      breakpoints: void 0,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: 'column',
      slidesPerGroup: 1,
      centeredSlides: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !0,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: 'swiper-no-swiping',
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: 'swiper-container-',
      slideClass: 'swiper-slide',
      slideBlankClass: 'swiper-slide-invisible-blank',
      slideActiveClass: 'swiper-slide-active',
      slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideDuplicateClass: 'swiper-slide-duplicate',
      slideNextClass: 'swiper-slide-next',
      slideDuplicateNextClass: 'swiper-slide-duplicate-next',
      slidePrevClass: 'swiper-slide-prev',
      slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
      wrapperClass: 'swiper-wrapper',
      runCallbacksOnInit: !0,
    },
    z = {
      update: f,
      translate: m,
      transition: g,
      slide: b,
      loop: w,
      grabCursor: y,
      manipulation: x,
      events: T,
      breakpoints: S,
      checkOverflow: {
        checkOverflow: function () {
          var e = this,
            t = e.isLocked;
          (e.isLocked = 1 === e.snapGrid.length),
            (e.allowSlideNext = !e.isLocked),
            (e.allowSlidePrev = !e.isLocked),
            t !== e.isLocked &&
              e.emit(e.isLocked ? 'lock' : 'unlock'),
            t &&
              t !== e.isLocked &&
              ((e.isEnd = !1), e.navigation.update());
        },
      },
      classes: {
        addClasses: function () {
          var e = this.classNames,
            t = this.params,
            a = this.rtl,
            i = this.$el,
            s = [];
          s.push(t.direction),
            t.freeMode && s.push('free-mode'),
            c.flexbox || s.push('no-flexbox'),
            t.autoHeight && s.push('autoheight'),
            a && s.push('rtl'),
            1 < t.slidesPerColumn && s.push('multirow'),
            E.android && s.push('android'),
            E.ios && s.push('ios'),
            C.isIE &&
              (c.pointerEvents || c.prefixedPointerEvents) &&
              s.push('wp8-' + t.direction),
            s.forEach(function (a) {
              e.push(t.containerModifierClass + a);
            }),
            i.addClass(e.join(' '));
        },
        removeClasses: function () {
          var e = this.$el,
            t = this.classNames;
          e.removeClass(t.join(' '));
        },
      },
      images: {
        loadImage: function (e, t, a, i, r, n) {
          function o() {
            n && n();
          }
          var l;
          e.complete && r
            ? o()
            : t
              ? (((l = new s.Image()).onload = o),
                (l.onerror = o),
                i && (l.sizes = i),
                a && (l.srcset = a),
                t && (l.src = t))
              : o();
        },
        preloadImages: function () {
          function e() {
            null != t &&
              t &&
              !t.destroyed &&
              (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1),
              t.imagesLoaded === t.imagesToLoad.length &&
                (t.params.updateOnImagesReady && t.update(),
                t.emit('imagesReady')));
          }
          var t = this;
          t.imagesToLoad = t.$el.find('img');
          for (var a = 0; a < t.imagesToLoad.length; a += 1) {
            var i = t.imagesToLoad[a];
            t.loadImage(
              i,
              i.currentSrc || i.getAttribute('src'),
              i.srcset || i.getAttribute('srcset'),
              i.sizes || i.getAttribute('sizes'),
              !0,
              e
            );
          }
        },
      },
    },
    k = {},
    P = (function (t) {
      function a() {
        for (var i, s, r, n = [], o = arguments.length; o--; )
          n[o] = arguments[o];
        1 === n.length &&
        n[0].constructor &&
        n[0].constructor === Object
          ? (r = n[0])
          : ((s = (i = n)[0]), (r = i[1])),
          r || (r = {}),
          (r = p.extend({}, r)),
          s && !r.el && (r.el = s),
          t.call(this, r),
          Object.keys(z).forEach(function (e) {
            Object.keys(z[e]).forEach(function (t) {
              a.prototype[t] || (a.prototype[t] = z[e][t]);
            });
          });
        var l = this;
        void 0 === l.modules && (l.modules = {}),
          Object.keys(l.modules).forEach(function (e) {
            var t = l.modules[e];
            if (t.params) {
              var a = Object.keys(t.params)[0],
                i = t.params[a];
              if ('object' != typeof i) return;
              if (!(a in r && 'enabled' in i)) return;
              !0 === r[a] && (r[a] = { enabled: !0 }),
                'object' != typeof r[a] ||
                  'enabled' in r[a] ||
                  (r[a].enabled = !0),
                r[a] || (r[a] = { enabled: !1 });
            }
          });
        var d = p.extend({}, M);
        l.useModulesParams(d),
          (l.params = p.extend({}, d, k, r)),
          (l.originalParams = p.extend({}, l.params)),
          (l.passedParams = p.extend({}, r));
        var u = (l.$ = e)(l.params.el);
        if ((s = u[0])) {
          if (1 < u.length) {
            var h = [];
            return (
              u.each(function (e, t) {
                var i = p.extend({}, r, { el: t });
                h.push(new a(i));
              }),
              h
            );
          }
          (s.swiper = l), u.data('swiper', l);
          var v,
            f,
            m = u.children('.' + l.params.wrapperClass);
          return (
            p.extend(l, {
              $el: u,
              el: s,
              $wrapperEl: m,
              wrapperEl: m[0],
              classNames: [],
              slides: e(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: function () {
                return 'horizontal' === l.params.direction;
              },
              isVertical: function () {
                return 'vertical' === l.params.direction;
              },
              rtl:
                'rtl' === s.dir.toLowerCase() ||
                'rtl' === u.css('direction'),
              rtlTranslate:
                'horizontal' === l.params.direction &&
                ('rtl' === s.dir.toLowerCase() ||
                  'rtl' === u.css('direction')),
              wrongRTL: '-webkit-box' === m.css('display'),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: l.params.allowSlideNext,
              allowSlidePrev: l.params.allowSlidePrev,
              touchEvents:
                ((v = ['touchstart', 'touchmove', 'touchend']),
                (f = ['mousedown', 'mousemove', 'mouseup']),
                c.pointerEvents
                  ? (f = ['pointerdown', 'pointermove', 'pointerup'])
                  : c.prefixedPointerEvents &&
                    (f = [
                      'MSPointerDown',
                      'MSPointerMove',
                      'MSPointerUp',
                    ]),
                (l.touchEventsTouch = {
                  start: v[0],
                  move: v[1],
                  end: v[2],
                }),
                (l.touchEventsDesktop = {
                  start: f[0],
                  move: f[1],
                  end: f[2],
                }),
                c.touch || !l.params.simulateTouch
                  ? l.touchEventsTouch
                  : l.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements:
                  'input, select, option, textarea, button, video',
                lastClickTime: p.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: l.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            l.useModules(),
            l.params.init && l.init(),
            l
          );
        }
      }
      t && (a.__proto__ = t);
      var i = {
        extendedDefaults: { configurable: !0 },
        defaults: { configurable: !0 },
        Class: { configurable: !0 },
        $: { configurable: !0 },
      };
      return (
        (((a.prototype = Object.create(
          t && t.prototype
        )).constructor = a).prototype.slidesPerViewDynamic =
          function () {
            var e = this,
              t = e.params,
              a = e.slides,
              i = e.slidesGrid,
              s = e.size,
              r = e.activeIndex,
              n = 1;
            if (t.centeredSlides) {
              for (
                var o, l = a[r].swiperSlideSize, d = r + 1;
                d < a.length;
                d += 1
              )
                a[d] &&
                  !o &&
                  ((n += 1),
                  s < (l += a[d].swiperSlideSize) && (o = !0));
              for (var p = r - 1; 0 <= p; p -= 1)
                a[p] &&
                  !o &&
                  ((n += 1),
                  s < (l += a[p].swiperSlideSize) && (o = !0));
            } else
              for (var c = r + 1; c < a.length; c += 1)
                i[c] - i[r] < s && (n += 1);
            return n;
          }),
        (a.prototype.update = function () {
          function e() {
            var e = t.rtlTranslate ? -1 * t.translate : t.translate,
              a = Math.min(
                Math.max(e, t.maxTranslate()),
                t.minTranslate()
              );
            t.setTranslate(a),
              t.updateActiveIndex(),
              t.updateSlidesClasses();
          }
          var t = this;
          if (t && !t.destroyed) {
            var a = t.snapGrid,
              i = t.params;
            i.breakpoints && t.setBreakpoint(),
              t.updateSize(),
              t.updateSlides(),
              t.updateProgress(),
              t.updateSlidesClasses(),
              t.params.freeMode
                ? (e(), t.params.autoHeight && t.updateAutoHeight())
                : (('auto' === t.params.slidesPerView ||
                    1 < t.params.slidesPerView) &&
                  t.isEnd &&
                  !t.params.centeredSlides
                    ? t.slideTo(t.slides.length - 1, 0, !1, !0)
                    : t.slideTo(t.activeIndex, 0, !1, !0)) || e(),
              i.watchOverflow &&
                a !== t.snapGrid &&
                t.checkOverflow(),
              t.emit('update');
          }
        }),
        (a.prototype.init = function () {
          var e = this;
          e.initialized ||
            (e.emit('beforeInit'),
            e.params.breakpoints && e.setBreakpoint(),
            e.addClasses(),
            e.params.loop && e.loopCreate(),
            e.updateSize(),
            e.updateSlides(),
            e.params.watchOverflow && e.checkOverflow(),
            e.params.grabCursor && e.setGrabCursor(),
            e.params.preloadImages && e.preloadImages(),
            e.params.loop
              ? e.slideTo(
                  e.params.initialSlide + e.loopedSlides,
                  0,
                  e.params.runCallbacksOnInit
                )
              : e.slideTo(
                  e.params.initialSlide,
                  0,
                  e.params.runCallbacksOnInit
                ),
            e.attachEvents(),
            (e.initialized = !0),
            e.emit('init'));
        }),
        (a.prototype.destroy = function (e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          var a = this,
            i = a.params,
            s = a.$el,
            r = a.$wrapperEl,
            n = a.slides;
          return (
            void 0 === a.params ||
              a.destroyed ||
              (a.emit('beforeDestroy'),
              (a.initialized = !1),
              a.detachEvents(),
              i.loop && a.loopDestroy(),
              t &&
                (a.removeClasses(),
                s.removeAttr('style'),
                r.removeAttr('style'),
                n &&
                  n.length &&
                  n
                    .removeClass(
                      [
                        i.slideVisibleClass,
                        i.slideActiveClass,
                        i.slideNextClass,
                        i.slidePrevClass,
                      ].join(' ')
                    )
                    .removeAttr('style')
                    .removeAttr('data-swiper-slide-index')
                    .removeAttr('data-swiper-column')
                    .removeAttr('data-swiper-row')),
              a.emit('destroy'),
              Object.keys(a.eventsListeners).forEach(function (e) {
                a.off(e);
              }),
              !1 !== e &&
                ((a.$el[0].swiper = null),
                a.$el.data('swiper', null),
                p.deleteProps(a)),
              (a.destroyed = !0)),
            null
          );
        }),
        (a.extendDefaults = function (e) {
          p.extend(k, e);
        }),
        (i.extendedDefaults.get = function () {
          return k;
        }),
        (i.defaults.get = function () {
          return M;
        }),
        (i.Class.get = function () {
          return t;
        }),
        (i.$.get = function () {
          return e;
        }),
        Object.defineProperties(a, i),
        a
      );
    })(u),
    $ = {
      name: 'device',
      proto: { device: E },
      static: { device: E },
    },
    L = {
      name: 'support',
      proto: { support: c },
      static: { support: c },
    },
    I = {
      name: 'browser',
      proto: { browser: C },
      static: { browser: C },
    },
    D = {
      name: 'resize',
      create: function () {
        var e = this;
        p.extend(e, {
          resize: {
            resizeHandler: function () {
              e &&
                !e.destroyed &&
                e.initialized &&
                (e.emit('beforeResize'), e.emit('resize'));
            },
            orientationChangeHandler: function () {
              e &&
                !e.destroyed &&
                e.initialized &&
                e.emit('orientationchange');
            },
          },
        });
      },
      on: {
        init: function () {
          s.addEventListener('resize', this.resize.resizeHandler),
            s.addEventListener(
              'orientationchange',
              this.resize.orientationChangeHandler
            );
        },
        destroy: function () {
          s.removeEventListener('resize', this.resize.resizeHandler),
            s.removeEventListener(
              'orientationchange',
              this.resize.orientationChangeHandler
            );
        },
      },
    },
    O = {
      func: s.MutationObserver || s.WebkitMutationObserver,
      attach: function (e, t) {
        void 0 === t && (t = {});
        var a = this,
          i = new O.func(function (e) {
            if (1 !== e.length) {
              var t = function () {
                a.emit('observerUpdate', e[0]);
              };
              s.requestAnimationFrame
                ? s.requestAnimationFrame(t)
                : s.setTimeout(t, 0);
            } else a.emit('observerUpdate', e[0]);
          });
        i.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData:
            void 0 === t.characterData || t.characterData,
        }),
          a.observer.observers.push(i);
      },
      init: function () {
        var e = this;
        if (c.observer && e.params.observer) {
          if (e.params.observeParents)
            for (var t = e.$el.parents(), a = 0; a < t.length; a += 1)
              e.observer.attach(t[a]);
          e.observer.attach(e.$el[0], { childList: !1 }),
            e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
        }
      },
      destroy: function () {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }),
          (this.observer.observers = []);
      },
    },
    A = {
      name: 'observer',
      params: { observer: !1, observeParents: !1 },
      create: function () {
        p.extend(this, {
          observer: {
            init: O.init.bind(this),
            attach: O.attach.bind(this),
            destroy: O.destroy.bind(this),
            observers: [],
          },
        });
      },
      on: {
        init: function () {
          this.observer.init();
        },
        destroy: function () {
          this.observer.destroy();
        },
      },
    },
    B = {
      update: function (e) {
        function t() {
          a.updateSlides(),
            a.updateProgress(),
            a.updateSlidesClasses(),
            a.lazy && a.params.lazy.enabled && a.lazy.load();
        }
        var a = this,
          i = a.params,
          s = i.slidesPerView,
          r = i.slidesPerGroup,
          n = i.centeredSlides,
          o = a.virtual,
          l = o.from,
          d = o.to,
          c = o.slides,
          u = o.slidesGrid,
          h = o.renderSlide,
          v = o.offset;
        a.updateActiveIndex();
        var f,
          m,
          g,
          b = a.activeIndex || 0;
        (f = a.rtlTranslate
          ? 'right'
          : a.isHorizontal()
            ? 'left'
            : 'top'),
          n
            ? ((m = Math.floor(s / 2) + r),
              (g = Math.floor(s / 2) + r))
            : ((m = s + (r - 1)), (g = r));
        var w = Math.max((b || 0) - g, 0),
          y = Math.min((b || 0) + m, c.length - 1),
          x = (a.slidesGrid[w] || 0) - (a.slidesGrid[0] || 0);
        if (
          (p.extend(a.virtual, {
            from: w,
            to: y,
            offset: x,
            slidesGrid: a.slidesGrid,
          }),
          l === w && d === y && !e)
        )
          return (
            a.slidesGrid !== u &&
              x !== v &&
              a.slides.css(f, x + 'px'),
            void a.updateProgress()
          );
        if (a.params.virtual.renderExternal)
          return (
            a.params.virtual.renderExternal.call(a, {
              offset: x,
              from: w,
              to: y,
              slides: (function () {
                for (var e = [], t = w; t <= y; t += 1) e.push(c[t]);
                return e;
              })(),
            }),
            void t()
          );
        var E = [],
          T = [];
        if (e) a.$wrapperEl.find('.' + a.params.slideClass).remove();
        else
          for (var S = l; S <= d; S += 1)
            (S < w || y < S) &&
              a.$wrapperEl
                .find(
                  '.' +
                    a.params.slideClass +
                    '[data-swiper-slide-index="' +
                    S +
                    '"]'
                )
                .remove();
        for (var C = 0; C < c.length; C += 1)
          w <= C &&
            C <= y &&
            (void 0 === d || e
              ? T.push(C)
              : (d < C && T.push(C), C < l && E.push(C)));
        T.forEach(function (e) {
          a.$wrapperEl.append(h(c[e], e));
        }),
          E.sort(function (e, t) {
            return e < t;
          }).forEach(function (e) {
            a.$wrapperEl.prepend(h(c[e], e));
          }),
          a.$wrapperEl.children('.swiper-slide').css(f, x + 'px'),
          t();
      },
      renderSlide: function (t, a) {
        var i = this,
          s = i.params.virtual;
        if (s.cache && i.virtual.cache[a]) return i.virtual.cache[a];
        var r = e(
          s.renderSlide
            ? s.renderSlide.call(i, t, a)
            : '<div class="' +
                i.params.slideClass +
                '" data-swiper-slide-index="' +
                a +
                '">' +
                t +
                '</div>'
        );
        return (
          r.attr('data-swiper-slide-index') ||
            r.attr('data-swiper-slide-index', a),
          s.cache && (i.virtual.cache[a] = r),
          r
        );
      },
      appendSlide: function (e) {
        this.virtual.slides.push(e), this.virtual.update(!0);
      },
      prependSlide: function (e) {
        var t = this;
        if ((t.virtual.slides.unshift(e), t.params.virtual.cache)) {
          var a = t.virtual.cache,
            i = {};
          Object.keys(a).forEach(function (e) {
            i[e + 1] = a[e];
          }),
            (t.virtual.cache = i);
        }
        t.virtual.update(!0), t.slideNext(0);
      },
    },
    H = {
      name: 'virtual',
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
        },
      },
      create: function () {
        var e = this;
        p.extend(e, {
          virtual: {
            update: B.update.bind(e),
            appendSlide: B.appendSlide.bind(e),
            prependSlide: B.prependSlide.bind(e),
            renderSlide: B.renderSlide.bind(e),
            slides: e.params.virtual.slides,
            cache: {},
          },
        });
      },
      on: {
        beforeInit: function () {
          var e = this;
          if (e.params.virtual.enabled) {
            e.classNames.push(
              e.params.containerModifierClass + 'virtual'
            );
            var t = { watchSlidesProgress: !0 };
            p.extend(e.params, t),
              p.extend(e.originalParams, t),
              e.virtual.update();
          }
        },
        setTranslate: function () {
          this.params.virtual.enabled && this.virtual.update();
        },
      },
    },
    G = {
      handle: function (e) {
        var t = this,
          a = t.rtlTranslate,
          r = e;
        r.originalEvent && (r = r.originalEvent);
        var n = r.keyCode || r.charCode;
        if (
          !t.allowSlideNext &&
          ((t.isHorizontal() && 39 === n) ||
            (t.isVertical() && 40 === n))
        )
          return !1;
        if (
          !t.allowSlidePrev &&
          ((t.isHorizontal() && 37 === n) ||
            (t.isVertical() && 38 === n))
        )
          return !1;
        if (
          !(
            r.shiftKey ||
            r.altKey ||
            r.ctrlKey ||
            r.metaKey ||
            (i.activeElement &&
              i.activeElement.nodeName &&
              ('input' === i.activeElement.nodeName.toLowerCase() ||
                'textarea' ===
                  i.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            t.params.keyboard.onlyInViewport &&
            (37 === n || 39 === n || 38 === n || 40 === n)
          ) {
            var o = !1;
            if (
              0 < t.$el.parents('.' + t.params.slideClass).length &&
              0 ===
                t.$el.parents('.' + t.params.slideActiveClass).length
            )
              return;
            var l = s.innerWidth,
              d = s.innerHeight,
              p = t.$el.offset();
            a && (p.left -= t.$el[0].scrollLeft);
            for (
              var c = [
                  [p.left, p.top],
                  [p.left + t.width, p.top],
                  [p.left, p.top + t.height],
                  [p.left + t.width, p.top + t.height],
                ],
                u = 0;
              u < c.length;
              u += 1
            ) {
              var h = c[u];
              0 <= h[0] &&
                h[0] <= l &&
                0 <= h[1] &&
                h[1] <= d &&
                (o = !0);
            }
            if (!o) return;
          }
          t.isHorizontal()
            ? ((37 !== n && 39 !== n) ||
                (r.preventDefault
                  ? r.preventDefault()
                  : (r.returnValue = !1)),
              ((39 === n && !a) || (37 === n && a)) && t.slideNext(),
              ((37 === n && !a) || (39 === n && a)) && t.slidePrev())
            : ((38 !== n && 40 !== n) ||
                (r.preventDefault
                  ? r.preventDefault()
                  : (r.returnValue = !1)),
              40 === n && t.slideNext(),
              38 === n && t.slidePrev()),
            t.emit('keyPress', n);
        }
      },
      enable: function () {
        this.keyboard.enabled ||
          (e(i).on('keydown', this.keyboard.handle),
          (this.keyboard.enabled = !0));
      },
      disable: function () {
        this.keyboard.enabled &&
          (e(i).off('keydown', this.keyboard.handle),
          (this.keyboard.enabled = !1));
      },
    },
    N = {
      name: 'keyboard',
      params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
      create: function () {
        p.extend(this, {
          keyboard: {
            enabled: !1,
            enable: G.enable.bind(this),
            disable: G.disable.bind(this),
            handle: G.handle.bind(this),
          },
        });
      },
      on: {
        init: function () {
          this.params.keyboard.enabled && this.keyboard.enable();
        },
        destroy: function () {
          this.keyboard.enabled && this.keyboard.disable();
        },
      },
    },
    X = {
      lastScrollTime: p.now(),
      event:
        -1 < s.navigator.userAgent.indexOf('firefox')
          ? 'DOMMouseScroll'
          : (function () {
                var e = 'onwheel',
                  t = e in i;
                if (!t) {
                  var a = i.createElement('div');
                  a.setAttribute(e, 'return;'),
                    (t = 'function' == typeof a[e]);
                }
                return (
                  !t &&
                    i.implementation &&
                    i.implementation.hasFeature &&
                    !0 !== i.implementation.hasFeature('', '') &&
                    (t = i.implementation.hasFeature(
                      'Events.wheel',
                      '3.0'
                    )),
                  t
                );
              })()
            ? 'wheel'
            : 'mousewheel',
      normalize: function (e) {
        var t = 0,
          a = 0,
          i = 0,
          s = 0;
        return (
          'detail' in e && (a = e.detail),
          'wheelDelta' in e && (a = -e.wheelDelta / 120),
          'wheelDeltaY' in e && (a = -e.wheelDeltaY / 120),
          'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
          'axis' in e &&
            e.axis === e.HORIZONTAL_AXIS &&
            ((t = a), (a = 0)),
          (i = 10 * t),
          (s = 10 * a),
          'deltaY' in e && (s = e.deltaY),
          'deltaX' in e && (i = e.deltaX),
          (i || s) &&
            e.deltaMode &&
            (1 === e.deltaMode
              ? ((i *= 40), (s *= 40))
              : ((i *= 800), (s *= 800))),
          i && !t && (t = i < 1 ? -1 : 1),
          s && !a && (a = s < 1 ? -1 : 1),
          { spinX: t, spinY: a, pixelX: i, pixelY: s }
        );
      },
      handleMouseEnter: function () {
        this.mouseEntered = !0;
      },
      handleMouseLeave: function () {
        this.mouseEntered = !1;
      },
      handle: function (e) {
        var t = e,
          a = this,
          i = a.params.mousewheel;
        if (!a.mouseEntered && !i.releaseOnEdges) return !0;
        t.originalEvent && (t = t.originalEvent);
        var r = 0,
          n = a.rtlTranslate ? -1 : 1,
          o = X.normalize(t);
        if (i.forceToAxis)
          if (a.isHorizontal()) {
            if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
            r = o.pixelX * n;
          } else {
            if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
            r = o.pixelY;
          }
        else
          r =
            Math.abs(o.pixelX) > Math.abs(o.pixelY)
              ? -o.pixelX * n
              : -o.pixelY;
        if (0 === r) return !0;
        if ((i.invert && (r = -r), a.params.freeMode)) {
          a.params.loop && a.loopFix();
          var l = a.getTranslate() + r * i.sensitivity,
            d = a.isBeginning,
            c = a.isEnd;
          if (
            (l >= a.minTranslate() && (l = a.minTranslate()),
            l <= a.maxTranslate() && (l = a.maxTranslate()),
            a.setTransition(0),
            a.setTranslate(l),
            a.updateProgress(),
            a.updateActiveIndex(),
            a.updateSlidesClasses(),
            ((!d && a.isBeginning) || (!c && a.isEnd)) &&
              a.updateSlidesClasses(),
            a.params.freeModeSticky &&
              (clearTimeout(a.mousewheel.timeout),
              (a.mousewheel.timeout = p.nextTick(function () {
                a.slideToClosest();
              }, 300))),
            a.emit('scroll', t),
            a.params.autoplay &&
              a.params.autoplayDisableOnInteraction &&
              a.autoplay.stop(),
            l === a.minTranslate() || l === a.maxTranslate())
          )
            return !0;
        } else {
          if (60 < p.now() - a.mousewheel.lastScrollTime)
            if (r < 0)
              if ((a.isEnd && !a.params.loop) || a.animating) {
                if (i.releaseOnEdges) return !0;
              } else a.slideNext(), a.emit('scroll', t);
            else if (
              (a.isBeginning && !a.params.loop) ||
              a.animating
            ) {
              if (i.releaseOnEdges) return !0;
            } else a.slidePrev(), a.emit('scroll', t);
          a.mousewheel.lastScrollTime = new s.Date().getTime();
        }
        return (
          t.preventDefault
            ? t.preventDefault()
            : (t.returnValue = !1),
          !1
        );
      },
      enable: function () {
        var t = this;
        if (!X.event) return !1;
        if (t.mousewheel.enabled) return !1;
        var a = t.$el;
        return (
          'container' !== t.params.mousewheel.eventsTarged &&
            (a = e(t.params.mousewheel.eventsTarged)),
          a.on('mouseenter', t.mousewheel.handleMouseEnter),
          a.on('mouseleave', t.mousewheel.handleMouseLeave),
          a.on(X.event, t.mousewheel.handle),
          (t.mousewheel.enabled = !0)
        );
      },
      disable: function () {
        var t = this;
        if (!X.event) return !1;
        if (!t.mousewheel.enabled) return !1;
        var a = t.$el;
        return (
          'container' !== t.params.mousewheel.eventsTarged &&
            (a = e(t.params.mousewheel.eventsTarged)),
          a.off(X.event, t.mousewheel.handle),
          !(t.mousewheel.enabled = !1)
        );
      },
    },
    Y = {
      update: function () {
        var e = this,
          t = e.params.navigation;
        if (!e.params.loop) {
          var a = e.navigation,
            i = a.$nextEl,
            s = a.$prevEl;
          s &&
            0 < s.length &&
            (e.isBeginning
              ? s.addClass(t.disabledClass)
              : s.removeClass(t.disabledClass),
            s[
              e.params.watchOverflow && e.isLocked
                ? 'addClass'
                : 'removeClass'
            ](t.lockClass)),
            i &&
              0 < i.length &&
              (e.isEnd
                ? i.addClass(t.disabledClass)
                : i.removeClass(t.disabledClass),
              i[
                e.params.watchOverflow && e.isLocked
                  ? 'addClass'
                  : 'removeClass'
              ](t.lockClass));
        }
      },
      init: function () {
        var t,
          a,
          i = this,
          s = i.params.navigation;
        (s.nextEl || s.prevEl) &&
          (s.nextEl &&
            ((t = e(s.nextEl)),
            i.params.uniqueNavElements &&
              'string' == typeof s.nextEl &&
              1 < t.length &&
              1 === i.$el.find(s.nextEl).length &&
              (t = i.$el.find(s.nextEl))),
          s.prevEl &&
            ((a = e(s.prevEl)),
            i.params.uniqueNavElements &&
              'string' == typeof s.prevEl &&
              1 < a.length &&
              1 === i.$el.find(s.prevEl).length &&
              (a = i.$el.find(s.prevEl))),
          t &&
            0 < t.length &&
            t.on('click', function (e) {
              e.preventDefault(),
                (i.isEnd && !i.params.loop) || i.slideNext();
            }),
          a &&
            0 < a.length &&
            a.on('click', function (e) {
              e.preventDefault(),
                (i.isBeginning && !i.params.loop) || i.slidePrev();
            }),
          p.extend(i.navigation, {
            $nextEl: t,
            nextEl: t && t[0],
            $prevEl: a,
            prevEl: a && a[0],
          }));
      },
      destroy: function () {
        var e = this.navigation,
          t = e.$nextEl,
          a = e.$prevEl;
        t &&
          t.length &&
          (t.off('click'),
          t.removeClass(this.params.navigation.disabledClass)),
          a &&
            a.length &&
            (a.off('click'),
            a.removeClass(this.params.navigation.disabledClass));
      },
    },
    V = {
      update: function () {
        var t = this,
          a = t.rtl,
          i = t.params.pagination;
        if (
          i.el &&
          t.pagination.el &&
          t.pagination.$el &&
          0 !== t.pagination.$el.length
        ) {
          var s,
            r =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            n = t.pagination.$el,
            o = t.params.loop
              ? Math.ceil(
                  (r - 2 * t.loopedSlides) / t.params.slidesPerGroup
                )
              : t.snapGrid.length;
          if (
            (t.params.loop
              ? ((s = Math.ceil(
                  (t.activeIndex - t.loopedSlides) /
                    t.params.slidesPerGroup
                )) >
                  r - 1 - 2 * t.loopedSlides &&
                  (s -= r - 2 * t.loopedSlides),
                o - 1 < s && (s -= o),
                s < 0 &&
                  'bullets' !== t.params.paginationType &&
                  (s = o + s))
              : (s =
                  void 0 !== t.snapIndex
                    ? t.snapIndex
                    : t.activeIndex || 0),
            'bullets' === i.type &&
              t.pagination.bullets &&
              0 < t.pagination.bullets.length)
          ) {
            var l,
              d,
              p,
              c = t.pagination.bullets;
            if (
              (i.dynamicBullets &&
                ((t.pagination.bulletSize = c
                  .eq(0)
                  [
                    t.isHorizontal() ? 'outerWidth' : 'outerHeight'
                  ](!0)),
                n.css(
                  t.isHorizontal() ? 'width' : 'height',
                  t.pagination.bulletSize *
                    (i.dynamicMainBullets + 4) +
                    'px'
                ),
                1 < i.dynamicMainBullets &&
                  void 0 !== t.previousIndex &&
                  ((t.pagination.dynamicBulletIndex +=
                    s - t.previousIndex),
                  t.pagination.dynamicBulletIndex >
                  i.dynamicMainBullets - 1
                    ? (t.pagination.dynamicBulletIndex =
                        i.dynamicMainBullets - 1)
                    : t.pagination.dynamicBulletIndex < 0 &&
                      (t.pagination.dynamicBulletIndex = 0)),
                (l = s - t.pagination.dynamicBulletIndex),
                (p =
                  ((d =
                    l +
                    (Math.min(c.length, i.dynamicMainBullets) - 1)) +
                    l) /
                  2)),
              c.removeClass(
                i.bulletActiveClass +
                  ' ' +
                  i.bulletActiveClass +
                  '-next ' +
                  i.bulletActiveClass +
                  '-next-next ' +
                  i.bulletActiveClass +
                  '-prev ' +
                  i.bulletActiveClass +
                  '-prev-prev ' +
                  i.bulletActiveClass +
                  '-main'
              ),
              1 < n.length)
            )
              c.each(function (t, a) {
                var r = e(a),
                  n = r.index();
                n === s && r.addClass(i.bulletActiveClass),
                  i.dynamicBullets &&
                    (l <= n &&
                      n <= d &&
                      r.addClass(i.bulletActiveClass + '-main'),
                    n === l &&
                      r
                        .prev()
                        .addClass(i.bulletActiveClass + '-prev')
                        .prev()
                        .addClass(i.bulletActiveClass + '-prev-prev'),
                    n === d &&
                      r
                        .next()
                        .addClass(i.bulletActiveClass + '-next')
                        .next()
                        .addClass(
                          i.bulletActiveClass + '-next-next'
                        ));
              });
            else if (
              (c.eq(s).addClass(i.bulletActiveClass),
              i.dynamicBullets)
            ) {
              for (
                var u = c.eq(l), h = c.eq(d), v = l;
                v <= d;
                v += 1
              )
                c.eq(v).addClass(i.bulletActiveClass + '-main');
              u
                .prev()
                .addClass(i.bulletActiveClass + '-prev')
                .prev()
                .addClass(i.bulletActiveClass + '-prev-prev'),
                h
                  .next()
                  .addClass(i.bulletActiveClass + '-next')
                  .next()
                  .addClass(i.bulletActiveClass + '-next-next');
            }
            if (i.dynamicBullets) {
              var f = Math.min(c.length, i.dynamicMainBullets + 4),
                m =
                  (t.pagination.bulletSize * f -
                    t.pagination.bulletSize) /
                    2 -
                  p * t.pagination.bulletSize,
                g = a ? 'right' : 'left';
              c.css(t.isHorizontal() ? g : 'top', m + 'px');
            }
          }
          if (
            ('fraction' === i.type &&
              (n
                .find('.' + i.currentClass)
                .text(i.formatFractionCurrent(s + 1)),
              n
                .find('.' + i.totalClass)
                .text(i.formatFractionTotal(o))),
            'progressbar' === i.type)
          ) {
            var b;
            b = i.progressbarOpposite
              ? t.isHorizontal()
                ? 'vertical'
                : 'horizontal'
              : t.isHorizontal()
                ? 'horizontal'
                : 'vertical';
            var w = (s + 1) / o,
              y = 1,
              x = 1;
            'horizontal' === b ? (y = w) : (x = w),
              n
                .find('.' + i.progressbarFillClass)
                .transform(
                  'translate3d(0,0,0) scaleX(' +
                    y +
                    ') scaleY(' +
                    x +
                    ')'
                )
                .transition(t.params.speed);
          }
          'custom' === i.type && i.renderCustom
            ? (n.html(i.renderCustom(t, s + 1, o)),
              t.emit('paginationRender', t, n[0]))
            : t.emit('paginationUpdate', t, n[0]),
            n[
              t.params.watchOverflow && t.isLocked
                ? 'addClass'
                : 'removeClass'
            ](i.lockClass);
        }
      },
      render: function () {
        var e = this,
          t = e.params.pagination;
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var a =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            i = e.pagination.$el,
            s = '';
          if ('bullets' === t.type) {
            for (
              var r = e.params.loop
                  ? Math.ceil(
                      (a - 2 * e.loopedSlides) /
                        e.params.slidesPerGroup
                    )
                  : e.snapGrid.length,
                n = 0;
              n < r;
              n += 1
            )
              t.renderBullet
                ? (s += t.renderBullet.call(e, n, t.bulletClass))
                : (s +=
                    '<' +
                    t.bulletElement +
                    ' class="' +
                    t.bulletClass +
                    '"></' +
                    t.bulletElement +
                    '>');
            i.html(s),
              (e.pagination.bullets = i.find('.' + t.bulletClass));
          }
          'fraction' === t.type &&
            ((s = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : '<span class="' +
                t.currentClass +
                '"></span> / <span class="' +
                t.totalClass +
                '"></span>'),
            i.html(s)),
            'progressbar' === t.type &&
              ((s = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : '<span class="' +
                  t.progressbarFillClass +
                  '"></span>'),
              i.html(s)),
            'custom' !== t.type &&
              e.emit('paginationRender', e.pagination.$el[0]);
        }
      },
      init: function () {
        var t = this,
          a = t.params.pagination;
        if (a.el) {
          var i = e(a.el);
          0 !== i.length &&
            (t.params.uniqueNavElements &&
              'string' == typeof a.el &&
              1 < i.length &&
              1 === t.$el.find(a.el).length &&
              (i = t.$el.find(a.el)),
            'bullets' === a.type &&
              a.clickable &&
              i.addClass(a.clickableClass),
            i.addClass(a.modifierClass + a.type),
            'bullets' === a.type &&
              a.dynamicBullets &&
              (i.addClass('' + a.modifierClass + a.type + '-dynamic'),
              (t.pagination.dynamicBulletIndex = 0),
              a.dynamicMainBullets < 1 && (a.dynamicMainBullets = 1)),
            'progressbar' === a.type &&
              a.progressbarOpposite &&
              i.addClass(a.progressbarOppositeClass),
            a.clickable &&
              i.on('click', '.' + a.bulletClass, function (a) {
                a.preventDefault();
                var i = e(this).index() * t.params.slidesPerGroup;
                t.params.loop && (i += t.loopedSlides), t.slideTo(i);
              }),
            p.extend(t.pagination, { $el: i, el: i[0] }));
        }
      },
      destroy: function () {
        var e = this,
          t = e.params.pagination;
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var a = e.pagination.$el;
          a.removeClass(t.hiddenClass),
            a.removeClass(t.modifierClass + t.type),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && a.off('click', '.' + t.bulletClass);
        }
      },
    },
    R = {
      setTranslate: function () {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = e.rtlTranslate,
            i = e.progress,
            s = t.dragSize,
            r = t.trackSize,
            n = t.$dragEl,
            o = t.$el,
            l = e.params.scrollbar,
            d = s,
            p = (r - s) * i;
          a
            ? 0 < (p = -p)
              ? ((d = s - p), (p = 0))
              : r < -p + s && (d = r + p)
            : p < 0
              ? ((d = s + p), (p = 0))
              : r < p + s && (d = r - p),
            e.isHorizontal()
              ? (c.transforms3d
                  ? n.transform('translate3d(' + p + 'px, 0, 0)')
                  : n.transform('translateX(' + p + 'px)'),
                (n[0].style.width = d + 'px'))
              : (c.transforms3d
                  ? n.transform('translate3d(0px, ' + p + 'px, 0)')
                  : n.transform('translateY(' + p + 'px)'),
                (n[0].style.height = d + 'px')),
            l.hide &&
              (clearTimeout(e.scrollbar.timeout),
              (o[0].style.opacity = 1),
              (e.scrollbar.timeout = setTimeout(function () {
                (o[0].style.opacity = 0), o.transition(400);
              }, 1e3)));
        }
      },
      setTransition: function (e) {
        this.params.scrollbar.el &&
          this.scrollbar.el &&
          this.scrollbar.$dragEl.transition(e);
      },
      updateSize: function () {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = t.$dragEl,
            i = t.$el;
          (a[0].style.width = ''), (a[0].style.height = '');
          var s,
            r = e.isHorizontal()
              ? i[0].offsetWidth
              : i[0].offsetHeight,
            n = e.size / e.virtualSize,
            o = n * (r / e.size);
          (s =
            'auto' === e.params.scrollbar.dragSize
              ? r * n
              : parseInt(e.params.scrollbar.dragSize, 10)),
            e.isHorizontal()
              ? (a[0].style.width = s + 'px')
              : (a[0].style.height = s + 'px'),
            (i[0].style.display = 1 <= n ? 'none' : ''),
            e.params.scrollbarHide && (i[0].style.opacity = 0),
            p.extend(t, {
              trackSize: r,
              divider: n,
              moveDivider: o,
              dragSize: s,
            }),
            t.$el[
              e.params.watchOverflow && e.isLocked
                ? 'addClass'
                : 'removeClass'
            ](e.params.scrollbar.lockClass);
        }
      },
      setDragPosition: function (e) {
        var t,
          a = this,
          i = a.scrollbar,
          s = a.rtlTranslate,
          r = i.$el,
          n = i.dragSize,
          o = i.trackSize;
        (t =
          ((a.isHorizontal()
            ? 'touchstart' === e.type || 'touchmove' === e.type
              ? e.targetTouches[0].pageX
              : e.pageX || e.clientX
            : 'touchstart' === e.type || 'touchmove' === e.type
              ? e.targetTouches[0].pageY
              : e.pageY || e.clientY) -
            r.offset()[a.isHorizontal() ? 'left' : 'top'] -
            n / 2) /
          (o - n)),
          (t = Math.max(Math.min(t, 1), 0)),
          s && (t = 1 - t);
        var l =
          a.minTranslate() +
          (a.maxTranslate() - a.minTranslate()) * t;
        a.updateProgress(l),
          a.setTranslate(l),
          a.updateActiveIndex(),
          a.updateSlidesClasses();
      },
      onDragStart: function (e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el,
          n = i.$dragEl;
        (t.scrollbar.isTouched = !0),
          e.preventDefault(),
          e.stopPropagation(),
          s.transition(100),
          n.transition(100),
          i.setDragPosition(e),
          clearTimeout(t.scrollbar.dragTimeout),
          r.transition(0),
          a.hide && r.css('opacity', 1),
          t.emit('scrollbarDragStart', e);
      },
      onDragMove: function (e) {
        var t = this.scrollbar,
          a = this.$wrapperEl,
          i = t.$el,
          s = t.$dragEl;
        this.scrollbar.isTouched &&
          (e.preventDefault
            ? e.preventDefault()
            : (e.returnValue = !1),
          t.setDragPosition(e),
          a.transition(0),
          i.transition(0),
          s.transition(0),
          this.emit('scrollbarDragMove', e));
      },
      onDragEnd: function (e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar.$el;
        t.scrollbar.isTouched &&
          ((t.scrollbar.isTouched = !1),
          a.hide &&
            (clearTimeout(t.scrollbar.dragTimeout),
            (t.scrollbar.dragTimeout = p.nextTick(function () {
              i.css('opacity', 0), i.transition(400);
            }, 1e3))),
          t.emit('scrollbarDragEnd', e),
          a.snapOnRelease && t.slideToClosest());
      },
      enableDraggable: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
            a = e.touchEvents,
            s = e.touchEventsDesktop,
            r = e.params,
            n = t.$el[0],
            o = !(!c.passiveListener || !r.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            l = !(!c.passiveListener || !r.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          c.touch || (!c.pointerEvents && !c.prefixedPointerEvents)
            ? (c.touch &&
                (n.addEventListener(
                  a.start,
                  e.scrollbar.onDragStart,
                  o
                ),
                n.addEventListener(a.move, e.scrollbar.onDragMove, o),
                n.addEventListener(a.end, e.scrollbar.onDragEnd, l)),
              ((r.simulateTouch && !E.ios && !E.android) ||
                (r.simulateTouch && !c.touch && E.ios)) &&
                (n.addEventListener(
                  'mousedown',
                  e.scrollbar.onDragStart,
                  o
                ),
                i.addEventListener(
                  'mousemove',
                  e.scrollbar.onDragMove,
                  o
                ),
                i.addEventListener(
                  'mouseup',
                  e.scrollbar.onDragEnd,
                  l
                )))
            : (n.addEventListener(
                s.start,
                e.scrollbar.onDragStart,
                o
              ),
              i.addEventListener(s.move, e.scrollbar.onDragMove, o),
              i.addEventListener(s.end, e.scrollbar.onDragEnd, l));
        }
      },
      disableDraggable: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
            a = e.touchEvents,
            s = e.touchEventsDesktop,
            r = e.params,
            n = t.$el[0],
            o = !(!c.passiveListener || !r.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            l = !(!c.passiveListener || !r.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          c.touch || (!c.pointerEvents && !c.prefixedPointerEvents)
            ? (c.touch &&
                (n.removeEventListener(
                  a.start,
                  e.scrollbar.onDragStart,
                  o
                ),
                n.removeEventListener(
                  a.move,
                  e.scrollbar.onDragMove,
                  o
                ),
                n.removeEventListener(
                  a.end,
                  e.scrollbar.onDragEnd,
                  l
                )),
              ((r.simulateTouch && !E.ios && !E.android) ||
                (r.simulateTouch && !c.touch && E.ios)) &&
                (n.removeEventListener(
                  'mousedown',
                  e.scrollbar.onDragStart,
                  o
                ),
                i.removeEventListener(
                  'mousemove',
                  e.scrollbar.onDragMove,
                  o
                ),
                i.removeEventListener(
                  'mouseup',
                  e.scrollbar.onDragEnd,
                  l
                )))
            : (n.removeEventListener(
                s.start,
                e.scrollbar.onDragStart,
                o
              ),
              i.removeEventListener(
                s.move,
                e.scrollbar.onDragMove,
                o
              ),
              i.removeEventListener(s.end, e.scrollbar.onDragEnd, l));
        }
      },
      init: function () {
        var t = this;
        if (t.params.scrollbar.el) {
          var a = t.scrollbar,
            i = t.$el,
            s = t.params.scrollbar,
            r = e(s.el);
          t.params.uniqueNavElements &&
            'string' == typeof s.el &&
            1 < r.length &&
            1 === i.find(s.el).length &&
            (r = i.find(s.el));
          var n = r.find('.' + t.params.scrollbar.dragClass);
          0 === n.length &&
            ((n = e(
              '<div class="' +
                t.params.scrollbar.dragClass +
                '"></div>'
            )),
            r.append(n)),
            p.extend(a, {
              $el: r,
              el: r[0],
              $dragEl: n,
              dragEl: n[0],
            }),
            s.draggable && a.enableDraggable();
        }
      },
      destroy: function () {
        this.scrollbar.disableDraggable();
      },
    },
    F = {
      setTransform: function (t, a) {
        var i = this.rtl,
          s = e(t),
          r = i ? -1 : 1,
          n = s.attr('data-swiper-parallax') || '0',
          o = s.attr('data-swiper-parallax-x'),
          l = s.attr('data-swiper-parallax-y'),
          d = s.attr('data-swiper-parallax-scale'),
          p = s.attr('data-swiper-parallax-opacity');
        if (
          (o || l
            ? ((o = o || '0'), (l = l || '0'))
            : this.isHorizontal()
              ? ((o = n), (l = '0'))
              : ((l = n), (o = '0')),
          (o =
            0 <= o.indexOf('%')
              ? parseInt(o, 10) * a * r + '%'
              : o * a * r + 'px'),
          (l =
            0 <= l.indexOf('%')
              ? parseInt(l, 10) * a + '%'
              : l * a + 'px'),
          null != p)
        ) {
          var c = p - (p - 1) * (1 - Math.abs(a));
          s[0].style.opacity = c;
        }
        if (null == d)
          s.transform('translate3d(' + o + ', ' + l + ', 0px)');
        else {
          var u = d - (d - 1) * (1 - Math.abs(a));
          s.transform(
            'translate3d(' + o + ', ' + l + ', 0px) scale(' + u + ')'
          );
        }
      },
      setTranslate: function () {
        var t = this,
          a = t.$el,
          i = t.slides,
          s = t.progress,
          r = t.snapGrid;
        a
          .children(
            '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]'
          )
          .each(function (e, a) {
            t.parallax.setTransform(a, s);
          }),
          i.each(function (a, i) {
            var n = i.progress;
            1 < t.params.slidesPerGroup &&
              'auto' !== t.params.slidesPerView &&
              (n += Math.ceil(a / 2) - s * (r.length - 1)),
              (n = Math.min(Math.max(n, -1), 1)),
              e(i)
                .find(
                  '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]'
                )
                .each(function (e, a) {
                  t.parallax.setTransform(a, n);
                });
          });
      },
      setTransition: function (t) {
        void 0 === t && (t = this.params.speed),
          this.$el
            .find(
              '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]'
            )
            .each(function (a, i) {
              var s = e(i),
                r =
                  parseInt(
                    s.attr('data-swiper-parallax-duration'),
                    10
                  ) || t;
              0 === t && (r = 0), s.transition(r);
            });
      },
    },
    q = {
      getDistanceBetweenTouches: function (e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          a = e.targetTouches[0].pageY,
          i = e.targetTouches[1].pageX,
          s = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
      },
      onGestureStart: function (t) {
        var a = this,
          i = a.params.zoom,
          s = a.zoom,
          r = s.gesture;
        if (
          ((s.fakeGestureTouched = !1),
          (s.fakeGestureMoved = !1),
          !c.gestures)
        ) {
          if (
            'touchstart' !== t.type ||
            ('touchstart' === t.type && t.targetTouches.length < 2)
          )
            return;
          (s.fakeGestureTouched = !0),
            (r.scaleStart = q.getDistanceBetweenTouches(t));
        }
        (r.$slideEl && r.$slideEl.length) ||
        ((r.$slideEl = e(t.target).closest('.swiper-slide')),
        0 === r.$slideEl.length &&
          (r.$slideEl = a.slides.eq(a.activeIndex)),
        (r.$imageEl = r.$slideEl.find('img, svg, canvas')),
        (r.$imageWrapEl = r.$imageEl.parent('.' + i.containerClass)),
        (r.maxRatio =
          r.$imageWrapEl.attr('data-swiper-zoom') || i.maxRatio),
        0 !== r.$imageWrapEl.length)
          ? (r.$imageEl.transition(0), (a.zoom.isScaling = !0))
          : (r.$imageEl = void 0);
      },
      onGestureChange: function (e) {
        var t = this.params.zoom,
          a = this.zoom,
          i = a.gesture;
        if (!c.gestures) {
          if (
            'touchmove' !== e.type ||
            ('touchmove' === e.type && e.targetTouches.length < 2)
          )
            return;
          (a.fakeGestureMoved = !0),
            (i.scaleMove = q.getDistanceBetweenTouches(e));
        }
        i.$imageEl &&
          0 !== i.$imageEl.length &&
          (c.gestures
            ? (this.zoom.scale = e.scale * a.currentScale)
            : (a.scale =
                (i.scaleMove / i.scaleStart) * a.currentScale),
          a.scale > i.maxRatio &&
            (a.scale =
              i.maxRatio -
              1 +
              Math.pow(a.scale - i.maxRatio + 1, 0.5)),
          a.scale < t.minRatio &&
            (a.scale =
              t.minRatio +
              1 -
              Math.pow(t.minRatio - a.scale + 1, 0.5)),
          i.$imageEl.transform(
            'translate3d(0,0,0) scale(' + a.scale + ')'
          ));
      },
      onGestureEnd: function (e) {
        var t = this.params.zoom,
          a = this.zoom,
          i = a.gesture;
        if (!c.gestures) {
          if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
          if (
            'touchend' !== e.type ||
            ('touchend' === e.type &&
              e.changedTouches.length < 2 &&
              !E.android)
          )
            return;
          (a.fakeGestureTouched = !1), (a.fakeGestureMoved = !1);
        }
        i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((a.scale = Math.max(
            Math.min(a.scale, i.maxRatio),
            t.minRatio
          )),
          i.$imageEl
            .transition(this.params.speed)
            .transform('translate3d(0,0,0) scale(' + a.scale + ')'),
          (a.currentScale = a.scale),
          (a.isScaling = !1),
          1 === a.scale && (i.$slideEl = void 0));
      },
      onTouchStart: function (e) {
        var t = this.zoom,
          a = t.gesture,
          i = t.image;
        a.$imageEl &&
          0 !== a.$imageEl.length &&
          (i.isTouched ||
            (E.android && e.preventDefault(),
            (i.isTouched = !0),
            (i.touchesStart.x =
              'touchstart' === e.type
                ? e.targetTouches[0].pageX
                : e.pageX),
            (i.touchesStart.y =
              'touchstart' === e.type
                ? e.targetTouches[0].pageY
                : e.pageY)));
      },
      onTouchMove: function (e) {
        var t = this,
          a = t.zoom,
          i = a.gesture,
          s = a.image,
          r = a.velocity;
        if (
          i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((t.allowClick = !1), s.isTouched && i.$slideEl)
        ) {
          s.isMoved ||
            ((s.width = i.$imageEl[0].offsetWidth),
            (s.height = i.$imageEl[0].offsetHeight),
            (s.startX = p.getTranslate(i.$imageWrapEl[0], 'x') || 0),
            (s.startY = p.getTranslate(i.$imageWrapEl[0], 'y') || 0),
            (i.slideWidth = i.$slideEl[0].offsetWidth),
            (i.slideHeight = i.$slideEl[0].offsetHeight),
            i.$imageWrapEl.transition(0),
            t.rtl &&
              ((s.startX = -s.startX), (s.startY = -s.startY)));
          var n = s.width * a.scale,
            o = s.height * a.scale;
          if (!(n < i.slideWidth && o < i.slideHeight)) {
            if (
              ((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
              (s.maxX = -s.minX),
              (s.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
              (s.maxY = -s.minY),
              (s.touchesCurrent.x =
                'touchmove' === e.type
                  ? e.targetTouches[0].pageX
                  : e.pageX),
              (s.touchesCurrent.y =
                'touchmove' === e.type
                  ? e.targetTouches[0].pageY
                  : e.pageY),
              !s.isMoved && !a.isScaling)
            ) {
              if (
                t.isHorizontal() &&
                ((Math.floor(s.minX) === Math.floor(s.startX) &&
                  s.touchesCurrent.x < s.touchesStart.x) ||
                  (Math.floor(s.maxX) === Math.floor(s.startX) &&
                    s.touchesCurrent.x > s.touchesStart.x))
              )
                return void (s.isTouched = !1);
              if (
                !t.isHorizontal() &&
                ((Math.floor(s.minY) === Math.floor(s.startY) &&
                  s.touchesCurrent.y < s.touchesStart.y) ||
                  (Math.floor(s.maxY) === Math.floor(s.startY) &&
                    s.touchesCurrent.y > s.touchesStart.y))
              )
                return void (s.isTouched = !1);
            }
            e.preventDefault(),
              e.stopPropagation(),
              (s.isMoved = !0),
              (s.currentX =
                s.touchesCurrent.x - s.touchesStart.x + s.startX),
              (s.currentY =
                s.touchesCurrent.y - s.touchesStart.y + s.startY),
              s.currentX < s.minX &&
                (s.currentX =
                  s.minX +
                  1 -
                  Math.pow(s.minX - s.currentX + 1, 0.8)),
              s.currentX > s.maxX &&
                (s.currentX =
                  s.maxX -
                  1 +
                  Math.pow(s.currentX - s.maxX + 1, 0.8)),
              s.currentY < s.minY &&
                (s.currentY =
                  s.minY +
                  1 -
                  Math.pow(s.minY - s.currentY + 1, 0.8)),
              s.currentY > s.maxY &&
                (s.currentY =
                  s.maxY -
                  1 +
                  Math.pow(s.currentY - s.maxY + 1, 0.8)),
              r.prevPositionX ||
                (r.prevPositionX = s.touchesCurrent.x),
              r.prevPositionY ||
                (r.prevPositionY = s.touchesCurrent.y),
              r.prevTime || (r.prevTime = Date.now()),
              (r.x =
                (s.touchesCurrent.x - r.prevPositionX) /
                (Date.now() - r.prevTime) /
                2),
              (r.y =
                (s.touchesCurrent.y - r.prevPositionY) /
                (Date.now() - r.prevTime) /
                2),
              Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 &&
                (r.x = 0),
              Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 &&
                (r.y = 0),
              (r.prevPositionX = s.touchesCurrent.x),
              (r.prevPositionY = s.touchesCurrent.y),
              (r.prevTime = Date.now()),
              i.$imageWrapEl.transform(
                'translate3d(' +
                  s.currentX +
                  'px, ' +
                  s.currentY +
                  'px,0)'
              );
          }
        }
      },
      onTouchEnd: function () {
        var e = this.zoom,
          t = e.gesture,
          a = e.image,
          i = e.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!a.isTouched || !a.isMoved)
            return (a.isTouched = !1), void (a.isMoved = !1);
          (a.isTouched = !1), (a.isMoved = !1);
          var s = 300,
            r = 300,
            n = i.x * s,
            o = a.currentX + n,
            l = i.y * r,
            d = a.currentY + l;
          0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)),
            0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
          var p = Math.max(s, r);
          (a.currentX = o), (a.currentY = d);
          var c = a.width * e.scale,
            u = a.height * e.scale;
          (a.minX = Math.min(t.slideWidth / 2 - c / 2, 0)),
            (a.maxX = -a.minX),
            (a.minY = Math.min(t.slideHeight / 2 - u / 2, 0)),
            (a.maxY = -a.minY),
            (a.currentX = Math.max(
              Math.min(a.currentX, a.maxX),
              a.minX
            )),
            (a.currentY = Math.max(
              Math.min(a.currentY, a.maxY),
              a.minY
            )),
            t.$imageWrapEl
              .transition(p)
              .transform(
                'translate3d(' +
                  a.currentX +
                  'px, ' +
                  a.currentY +
                  'px,0)'
              );
        }
      },
      onTransitionEnd: function () {
        var e = this.zoom,
          t = e.gesture;
        t.$slideEl &&
          this.previousIndex !== this.activeIndex &&
          (t.$imageEl.transform('translate3d(0,0,0) scale(1)'),
          t.$imageWrapEl.transform('translate3d(0,0,0)'),
          (t.$slideEl = void 0),
          (t.$imageEl = void 0),
          (t.$imageWrapEl = void 0),
          (e.scale = 1),
          (e.currentScale = 1));
      },
      toggle: function (e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e);
      },
      in: function (t) {
        var a,
          i,
          s,
          r,
          n,
          o,
          l,
          d,
          p,
          c,
          u,
          h,
          v,
          f,
          m,
          g,
          b = this,
          w = b.zoom,
          y = b.params.zoom,
          x = w.gesture,
          E = w.image;
        x.$slideEl ||
          ((x.$slideEl = b.clickedSlide
            ? e(b.clickedSlide)
            : b.slides.eq(b.activeIndex)),
          (x.$imageEl = x.$slideEl.find('img, svg, canvas')),
          (x.$imageWrapEl = x.$imageEl.parent(
            '.' + y.containerClass
          ))),
          x.$imageEl &&
            0 !== x.$imageEl.length &&
            (x.$slideEl.addClass('' + y.zoomedSlideClass),
            void 0 === E.touchesStart.x && t
              ? ((a =
                  'touchend' === t.type
                    ? t.changedTouches[0].pageX
                    : t.pageX),
                (i =
                  'touchend' === t.type
                    ? t.changedTouches[0].pageY
                    : t.pageY))
              : ((a = E.touchesStart.x), (i = E.touchesStart.y)),
            (w.scale =
              x.$imageWrapEl.attr('data-swiper-zoom') || y.maxRatio),
            (w.currentScale =
              x.$imageWrapEl.attr('data-swiper-zoom') || y.maxRatio),
            t
              ? ((m = x.$slideEl[0].offsetWidth),
                (g = x.$slideEl[0].offsetHeight),
                (s = x.$slideEl.offset().left + m / 2 - a),
                (r = x.$slideEl.offset().top + g / 2 - i),
                (l = x.$imageEl[0].offsetWidth),
                (d = x.$imageEl[0].offsetHeight),
                (p = l * w.scale),
                (c = d * w.scale),
                (v = -(u = Math.min(m / 2 - p / 2, 0))),
                (f = -(h = Math.min(g / 2 - c / 2, 0))),
                (n = s * w.scale) < u && (n = u),
                v < n && (n = v),
                (o = r * w.scale) < h && (o = h),
                f < o && (o = f))
              : (o = n = 0),
            x.$imageWrapEl
              .transition(300)
              .transform('translate3d(' + n + 'px, ' + o + 'px,0)'),
            x.$imageEl
              .transition(300)
              .transform(
                'translate3d(0,0,0) scale(' + w.scale + ')'
              ));
      },
      out: function () {
        var t = this,
          a = t.zoom,
          i = t.params.zoom,
          s = a.gesture;
        s.$slideEl ||
          ((s.$slideEl = t.clickedSlide
            ? e(t.clickedSlide)
            : t.slides.eq(t.activeIndex)),
          (s.$imageEl = s.$slideEl.find('img, svg, canvas')),
          (s.$imageWrapEl = s.$imageEl.parent(
            '.' + i.containerClass
          ))),
          s.$imageEl &&
            0 !== s.$imageEl.length &&
            ((a.scale = 1),
            (a.currentScale = 1),
            s.$imageWrapEl
              .transition(300)
              .transform('translate3d(0,0,0)'),
            s.$imageEl
              .transition(300)
              .transform('translate3d(0,0,0) scale(1)'),
            s.$slideEl.removeClass('' + i.zoomedSlideClass),
            (s.$slideEl = void 0));
      },
      enable: function () {
        var e = this,
          t = e.zoom;
        if (!t.enabled) {
          t.enabled = !0;
          var a = !(
            'touchstart' !== e.touchEvents.start ||
            !c.passiveListener ||
            !e.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          c.gestures
            ? (e.$wrapperEl.on(
                'gesturestart',
                '.swiper-slide',
                t.onGestureStart,
                a
              ),
              e.$wrapperEl.on(
                'gesturechange',
                '.swiper-slide',
                t.onGestureChange,
                a
              ),
              e.$wrapperEl.on(
                'gestureend',
                '.swiper-slide',
                t.onGestureEnd,
                a
              ))
            : 'touchstart' === e.touchEvents.start &&
              (e.$wrapperEl.on(
                e.touchEvents.start,
                '.swiper-slide',
                t.onGestureStart,
                a
              ),
              e.$wrapperEl.on(
                e.touchEvents.move,
                '.swiper-slide',
                t.onGestureChange,
                a
              ),
              e.$wrapperEl.on(
                e.touchEvents.end,
                '.swiper-slide',
                t.onGestureEnd,
                a
              )),
            e.$wrapperEl.on(
              e.touchEvents.move,
              '.' + e.params.zoom.containerClass,
              t.onTouchMove
            );
        }
      },
      disable: function () {
        var e = this,
          t = e.zoom;
        if (t.enabled) {
          e.zoom.enabled = !1;
          var a = !(
            'touchstart' !== e.touchEvents.start ||
            !c.passiveListener ||
            !e.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          c.gestures
            ? (e.$wrapperEl.off(
                'gesturestart',
                '.swiper-slide',
                t.onGestureStart,
                a
              ),
              e.$wrapperEl.off(
                'gesturechange',
                '.swiper-slide',
                t.onGestureChange,
                a
              ),
              e.$wrapperEl.off(
                'gestureend',
                '.swiper-slide',
                t.onGestureEnd,
                a
              ))
            : 'touchstart' === e.touchEvents.start &&
              (e.$wrapperEl.off(
                e.touchEvents.start,
                '.swiper-slide',
                t.onGestureStart,
                a
              ),
              e.$wrapperEl.off(
                e.touchEvents.move,
                '.swiper-slide',
                t.onGestureChange,
                a
              ),
              e.$wrapperEl.off(
                e.touchEvents.end,
                '.swiper-slide',
                t.onGestureEnd,
                a
              )),
            e.$wrapperEl.off(
              e.touchEvents.move,
              '.' + e.params.zoom.containerClass,
              t.onTouchMove
            );
        }
      },
    },
    W = {
      loadInSlide: function (t, a) {
        void 0 === a && (a = !0);
        var i = this,
          s = i.params.lazy;
        if (void 0 !== t && 0 !== i.slides.length) {
          var r =
              i.virtual && i.params.virtual.enabled
                ? i.$wrapperEl.children(
                    '.' +
                      i.params.slideClass +
                      '[data-swiper-slide-index="' +
                      t +
                      '"]'
                  )
                : i.slides.eq(t),
            n = r.find(
              '.' +
                s.elementClass +
                ':not(.' +
                s.loadedClass +
                '):not(.' +
                s.loadingClass +
                ')'
            );
          !r.hasClass(s.elementClass) ||
            r.hasClass(s.loadedClass) ||
            r.hasClass(s.loadingClass) ||
            (n = n.add(r[0])),
            0 !== n.length &&
              n.each(function (t, n) {
                var o = e(n);
                o.addClass(s.loadingClass);
                var l = o.attr('data-background'),
                  d = o.attr('data-src'),
                  p = o.attr('data-srcset'),
                  c = o.attr('data-sizes');
                i.loadImage(o[0], d || l, p, c, !1, function () {
                  if (
                    null != i &&
                    i &&
                    (!i || i.params) &&
                    !i.destroyed
                  ) {
                    if (
                      (l
                        ? (o.css(
                            'background-image',
                            'url("' + l + '")'
                          ),
                          o.removeAttr('data-background'))
                        : (p &&
                            (o.attr('srcset', p),
                            o.removeAttr('data-srcset')),
                          c &&
                            (o.attr('sizes', c),
                            o.removeAttr('data-sizes')),
                          d &&
                            (o.attr('src', d),
                            o.removeAttr('data-src'))),
                      o
                        .addClass(s.loadedClass)
                        .removeClass(s.loadingClass),
                      r.find('.' + s.preloaderClass).remove(),
                      i.params.loop && a)
                    ) {
                      var e = r.attr('data-swiper-slide-index');
                      if (r.hasClass(i.params.slideDuplicateClass)) {
                        var t = i.$wrapperEl.children(
                          '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            i.params.slideDuplicateClass +
                            ')'
                        );
                        i.lazy.loadInSlide(t.index(), !1);
                      } else {
                        var n = i.$wrapperEl.children(
                          '.' +
                            i.params.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]'
                        );
                        i.lazy.loadInSlide(n.index(), !1);
                      }
                    }
                    i.emit('lazyImageReady', r[0], o[0]);
                  }
                }),
                  i.emit('lazyImageLoad', r[0], o[0]);
              });
        }
      },
      load: function () {
        function t(e) {
          if (l) {
            if (
              s.children(
                '.' +
                  r.slideClass +
                  '[data-swiper-slide-index="' +
                  e +
                  '"]'
              ).length
            )
              return !0;
          } else if (n[e]) return !0;
          return !1;
        }
        function a(t) {
          return l
            ? e(t).attr('data-swiper-slide-index')
            : e(t).index();
        }
        var i = this,
          s = i.$wrapperEl,
          r = i.params,
          n = i.slides,
          o = i.activeIndex,
          l = i.virtual && r.virtual.enabled,
          d = r.lazy,
          p = r.slidesPerView;
        if (
          ('auto' === p && (p = 0),
          i.lazy.initialImageLoaded ||
            (i.lazy.initialImageLoaded = !0),
          i.params.watchSlidesVisibility)
        )
          s.children('.' + r.slideVisibleClass).each(function (t, a) {
            var s = l
              ? e(a).attr('data-swiper-slide-index')
              : e(a).index();
            i.lazy.loadInSlide(s);
          });
        else if (1 < p)
          for (var c = o; c < o + p; c += 1)
            t(c) && i.lazy.loadInSlide(c);
        else i.lazy.loadInSlide(o);
        if (d.loadPrevNext)
          if (
            1 < p ||
            (d.loadPrevNextAmount && 1 < d.loadPrevNextAmount)
          ) {
            for (
              var u = d.loadPrevNextAmount,
                h = p,
                v = Math.min(o + h + Math.max(u, h), n.length),
                f = Math.max(o - Math.max(h, u), 0),
                m = o + p;
              m < v;
              m += 1
            )
              t(m) && i.lazy.loadInSlide(m);
            for (var g = f; g < o; g += 1)
              t(g) && i.lazy.loadInSlide(g);
          } else {
            var b = s.children('.' + r.slideNextClass);
            0 < b.length && i.lazy.loadInSlide(a(b));
            var w = s.children('.' + r.slidePrevClass);
            0 < w.length && i.lazy.loadInSlide(a(w));
          }
      },
    },
    j = {
      LinearSpline: function (e, t) {
        var a,
          i,
          s,
          r,
          n,
          o = function (e, t) {
            for (i = -1, a = e.length; 1 < a - i; )
              e[(s = (a + i) >> 1)] <= t ? (i = s) : (a = s);
            return a;
          };
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((n = o(this.x, e)),
                (r = n - 1),
                ((e - this.x[r]) * (this.y[n] - this.y[r])) /
                  (this.x[n] - this.x[r]) +
                  this.y[r])
              : 0;
          }),
          this
        );
      },
      getInterpolateFunction: function (e) {
        var t = this;
        t.controller.spline ||
          (t.controller.spline = t.params.loop
            ? new j.LinearSpline(t.slidesGrid, e.slidesGrid)
            : new j.LinearSpline(t.snapGrid, e.snapGrid));
      },
      setTranslate: function (e, t) {
        function a(e) {
          var t = r.rtlTranslate ? -r.translate : r.translate;
          'slide' === r.params.controller.by &&
            (r.controller.getInterpolateFunction(e),
            (s = -r.controller.spline.interpolate(-t))),
            (s && 'container' !== r.params.controller.by) ||
              ((i =
                (e.maxTranslate() - e.minTranslate()) /
                (r.maxTranslate() - r.minTranslate())),
              (s = (t - r.minTranslate()) * i + e.minTranslate())),
            r.params.controller.inverse && (s = e.maxTranslate() - s),
            e.updateProgress(s),
            e.setTranslate(s, r),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        }
        var i,
          s,
          r = this,
          n = r.controller.control;
        if (Array.isArray(n))
          for (var o = 0; o < n.length; o += 1)
            n[o] !== t && n[o] instanceof P && a(n[o]);
        else n instanceof P && t !== n && a(n);
      },
      setTransition: function (e, t) {
        function a(t) {
          t.setTransition(e, s),
            0 !== e &&
              (t.transitionStart(),
              t.params.autoHeight &&
                p.nextTick(function () {
                  t.updateAutoHeight();
                }),
              t.$wrapperEl.transitionEnd(function () {
                r &&
                  (t.params.loop &&
                    'slide' === s.params.controller.by &&
                    t.loopFix(),
                  t.transitionEnd());
              }));
        }
        var i,
          s = this,
          r = s.controller.control;
        if (Array.isArray(r))
          for (i = 0; i < r.length; i += 1)
            r[i] !== t && r[i] instanceof P && a(r[i]);
        else r instanceof P && t !== r && a(r);
      },
    },
    _ = {
      makeElFocusable: function (e) {
        return e.attr('tabIndex', '0'), e;
      },
      addElRole: function (e, t) {
        return e.attr('role', t), e;
      },
      addElLabel: function (e, t) {
        return e.attr('aria-label', t), e;
      },
      disableEl: function (e) {
        return e.attr('aria-disabled', !0), e;
      },
      enableEl: function (e) {
        return e.attr('aria-disabled', !1), e;
      },
      onEnterKey: function (t) {
        var a = this,
          i = a.params.a11y;
        if (13 === t.keyCode) {
          var s = e(t.target);
          a.navigation &&
            a.navigation.$nextEl &&
            s.is(a.navigation.$nextEl) &&
            ((a.isEnd && !a.params.loop) || a.slideNext(),
            a.isEnd
              ? a.a11y.notify(i.lastSlideMessage)
              : a.a11y.notify(i.nextSlideMessage)),
            a.navigation &&
              a.navigation.$prevEl &&
              s.is(a.navigation.$prevEl) &&
              ((a.isBeginning && !a.params.loop) || a.slidePrev(),
              a.isBeginning
                ? a.a11y.notify(i.firstSlideMessage)
                : a.a11y.notify(i.prevSlideMessage)),
            a.pagination &&
              s.is('.' + a.params.pagination.bulletClass) &&
              s[0].click();
        }
      },
      notify: function (e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(''), t.html(e));
      },
      updateNavigation: function () {
        var e = this;
        if (!e.params.loop) {
          var t = e.navigation,
            a = t.$nextEl,
            i = t.$prevEl;
          i &&
            0 < i.length &&
            (e.isBeginning
              ? e.a11y.disableEl(i)
              : e.a11y.enableEl(i)),
            a &&
              0 < a.length &&
              (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a));
        }
      },
      updatePagination: function () {
        var t = this,
          a = t.params.a11y;
        t.pagination &&
          t.params.pagination.clickable &&
          t.pagination.bullets &&
          t.pagination.bullets.length &&
          t.pagination.bullets.each(function (i, s) {
            var r = e(s);
            t.a11y.makeElFocusable(r),
              t.a11y.addElRole(r, 'button'),
              t.a11y.addElLabel(
                r,
                a.paginationBulletMessage.replace(
                  /{{index}}/,
                  r.index() + 1
                )
              );
          });
      },
      init: function () {
        var e = this;
        e.$el.append(e.a11y.liveRegion);
        var t,
          a,
          i = e.params.a11y;
        e.navigation &&
          e.navigation.$nextEl &&
          (t = e.navigation.$nextEl),
          e.navigation &&
            e.navigation.$prevEl &&
            (a = e.navigation.$prevEl),
          t &&
            (e.a11y.makeElFocusable(t),
            e.a11y.addElRole(t, 'button'),
            e.a11y.addElLabel(t, i.nextSlideMessage),
            t.on('keydown', e.a11y.onEnterKey)),
          a &&
            (e.a11y.makeElFocusable(a),
            e.a11y.addElRole(a, 'button'),
            e.a11y.addElLabel(a, i.prevSlideMessage),
            a.on('keydown', e.a11y.onEnterKey)),
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.$el.on(
              'keydown',
              '.' + e.params.pagination.bulletClass,
              e.a11y.onEnterKey
            );
      },
      destroy: function () {
        var e,
          t,
          a = this;
        a.a11y.liveRegion &&
          0 < a.a11y.liveRegion.length &&
          a.a11y.liveRegion.remove(),
          a.navigation &&
            a.navigation.$nextEl &&
            (e = a.navigation.$nextEl),
          a.navigation &&
            a.navigation.$prevEl &&
            (t = a.navigation.$prevEl),
          e && e.off('keydown', a.a11y.onEnterKey),
          t && t.off('keydown', a.a11y.onEnterKey),
          a.pagination &&
            a.params.pagination.clickable &&
            a.pagination.bullets &&
            a.pagination.bullets.length &&
            a.pagination.$el.off(
              'keydown',
              '.' + a.params.pagination.bulletClass,
              a.a11y.onEnterKey
            );
      },
    },
    K = {
      init: function () {
        var e = this;
        if (e.params.history) {
          if (!s.history || !s.history.pushState)
            return (
              (e.params.history.enabled = !1),
              void (e.params.hashNavigation.enabled = !0)
            );
          var t = e.history;
          (t.initialized = !0),
            (t.paths = K.getPathValues()),
            (t.paths.key || t.paths.value) &&
              (t.scrollToSlide(
                0,
                t.paths.value,
                e.params.runCallbacksOnInit
              ),
              e.params.history.replaceState ||
                s.addEventListener(
                  'popstate',
                  e.history.setHistoryPopState
                ));
        }
      },
      destroy: function () {
        this.params.history.replaceState ||
          s.removeEventListener(
            'popstate',
            this.history.setHistoryPopState
          );
      },
      setHistoryPopState: function () {
        (this.history.paths = K.getPathValues()),
          this.history.scrollToSlide(
            this.params.speed,
            this.history.paths.value,
            !1
          );
      },
      getPathValues: function () {
        var e = s.location.pathname
            .slice(1)
            .split('/')
            .filter(function (e) {
              return '' !== e;
            }),
          t = e.length;
        return { key: e[t - 2], value: e[t - 1] };
      },
      setHistory: function (e, t) {
        if (this.history.initialized && this.params.history.enabled) {
          var a = this.slides.eq(t),
            i = K.slugify(a.attr('data-history'));
          s.location.pathname.includes(e) || (i = e + '/' + i);
          var r = s.history.state;
          (r && r.value === i) ||
            (this.params.history.replaceState
              ? s.history.replaceState({ value: i }, null, i)
              : s.history.pushState({ value: i }, null, i));
        }
      },
      slugify: function (e) {
        return e
          .toString()
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]+/g, '')
          .replace(/--+/g, '-')
          .replace(/^-+/, '')
          .replace(/-+$/, '');
      },
      scrollToSlide: function (e, t, a) {
        var i = this;
        if (t)
          for (var s = 0, r = i.slides.length; s < r; s += 1) {
            var n = i.slides.eq(s);
            if (
              K.slugify(n.attr('data-history')) === t &&
              !n.hasClass(i.params.slideDuplicateClass)
            ) {
              var o = n.index();
              i.slideTo(o, e, a);
            }
          }
        else i.slideTo(0, e, a);
      },
    },
    U = {
      onHashCange: function () {
        var e = this,
          t = i.location.hash.replace('#', '');
        t !== e.slides.eq(e.activeIndex).attr('data-hash') &&
          e.slideTo(
            e.$wrapperEl
              .children(
                '.' + e.params.slideClass + '[data-hash="' + t + '"]'
              )
              .index()
          );
      },
      setHash: function () {
        var e = this;
        if (
          e.hashNavigation.initialized &&
          e.params.hashNavigation.enabled
        )
          if (
            e.params.hashNavigation.replaceState &&
            s.history &&
            s.history.replaceState
          )
            s.history.replaceState(
              null,
              null,
              '#' + e.slides.eq(e.activeIndex).attr('data-hash') || ''
            );
          else {
            var t = e.slides.eq(e.activeIndex),
              a = t.attr('data-hash') || t.attr('data-history');
            i.location.hash = a || '';
          }
      },
      init: function () {
        var t = this;
        if (
          !(
            !t.params.hashNavigation.enabled ||
            (t.params.history && t.params.history.enabled)
          )
        ) {
          t.hashNavigation.initialized = !0;
          var a = i.location.hash.replace('#', '');
          if (a)
            for (var r = 0, n = t.slides.length; r < n; r += 1) {
              var o = t.slides.eq(r);
              if (
                (o.attr('data-hash') || o.attr('data-history')) ===
                  a &&
                !o.hasClass(t.params.slideDuplicateClass)
              ) {
                var l = o.index();
                t.slideTo(l, 0, t.params.runCallbacksOnInit, !0);
              }
            }
          t.params.hashNavigation.watchState &&
            e(s).on('hashchange', t.hashNavigation.onHashCange);
        }
      },
      destroy: function () {
        this.params.hashNavigation.watchState &&
          e(s).off('hashchange', this.hashNavigation.onHashCange);
      },
    },
    Z = {
      run: function () {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          a = e.params.autoplay.delay;
        t.attr('data-swiper-autoplay') &&
          (a =
            t.attr('data-swiper-autoplay') ||
            e.params.autoplay.delay),
          (e.autoplay.timeout = p.nextTick(function () {
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  e.slidePrev(e.params.speed, !0, !0),
                  e.emit('autoplay'))
                : e.isBeginning
                  ? e.params.autoplay.stopOnLastSlide
                    ? e.autoplay.stop()
                    : (e.slideTo(
                        e.slides.length - 1,
                        e.params.speed,
                        !0,
                        !0
                      ),
                      e.emit('autoplay'))
                  : (e.slidePrev(e.params.speed, !0, !0),
                    e.emit('autoplay'))
              : e.params.loop
                ? (e.loopFix(),
                  e.slideNext(e.params.speed, !0, !0),
                  e.emit('autoplay'))
                : e.isEnd
                  ? e.params.autoplay.stopOnLastSlide
                    ? e.autoplay.stop()
                    : (e.slideTo(0, e.params.speed, !0, !0),
                      e.emit('autoplay'))
                  : (e.slideNext(e.params.speed, !0, !0),
                    e.emit('autoplay'));
          }, a));
      },
      start: function () {
        var e = this;
        return (
          void 0 === e.autoplay.timeout &&
          !e.autoplay.running &&
          ((e.autoplay.running = !0),
          e.emit('autoplayStart'),
          e.autoplay.run(),
          !0)
        );
      },
      stop: function () {
        var e = this;
        return (
          !!e.autoplay.running &&
          void 0 !== e.autoplay.timeout &&
          (e.autoplay.timeout &&
            (clearTimeout(e.autoplay.timeout),
            (e.autoplay.timeout = void 0)),
          (e.autoplay.running = !1),
          e.emit('autoplayStop'),
          !0)
        );
      },
      pause: function (e) {
        var t = this;
        t.autoplay.running &&
          (t.autoplay.paused ||
            (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            (t.autoplay.paused = !0),
            0 !== e && t.params.autoplay.waitForTransition
              ? (t.$wrapperEl[0].addEventListener(
                  'transitionend',
                  t.autoplay.onTransitionEnd
                ),
                t.$wrapperEl[0].addEventListener(
                  'webkitTransitionEnd',
                  t.autoplay.onTransitionEnd
                ))
              : ((t.autoplay.paused = !1), t.autoplay.run())));
      },
    },
    Q = {
      setTranslate: function () {
        for (
          var e = this, t = e.slides, a = 0;
          a < t.length;
          a += 1
        ) {
          var i = e.slides.eq(a),
            s = -i[0].swiperSlideOffset;
          e.params.virtualTranslate || (s -= e.translate);
          var r = 0;
          e.isHorizontal() || ((r = s), (s = 0));
          var n = e.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(i[0].progress), 0)
            : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({ opacity: n }).transform(
            'translate3d(' + s + 'px, ' + r + 'px, 0px)'
          );
        }
      },
      setTransition: function (e) {
        var t = this,
          a = t.slides,
          i = t.$wrapperEl;
        if ((a.transition(e), t.params.virtualTranslate && 0 !== e)) {
          var s = !1;
          a.transitionEnd(function () {
            if (!s && t && !t.destroyed) {
              (s = !0), (t.animating = !1);
              for (
                var e = ['webkitTransitionEnd', 'transitionend'],
                  a = 0;
                a < e.length;
                a += 1
              )
                i.trigger(e[a]);
            }
          });
        }
      },
    },
    J = {
      setTranslate: function () {
        var t,
          a = this,
          i = a.$el,
          s = a.$wrapperEl,
          r = a.slides,
          n = a.width,
          o = a.height,
          l = a.rtlTranslate,
          d = a.size,
          p = a.params.cubeEffect,
          c = a.isHorizontal(),
          u = a.virtual && a.params.virtual.enabled,
          h = 0;
        p.shadow &&
          (c
            ? (0 === (t = s.find('.swiper-cube-shadow')).length &&
                ((t = e('<div class="swiper-cube-shadow"></div>')),
                s.append(t)),
              t.css({ height: n + 'px' }))
            : 0 === (t = i.find('.swiper-cube-shadow')).length &&
              ((t = e('<div class="swiper-cube-shadow"></div>')),
              i.append(t)));
        for (var v = 0; v < r.length; v += 1) {
          var f = r.eq(v),
            m = v;
          u && (m = parseInt(f.attr('data-swiper-slide-index'), 10));
          var g = 90 * m,
            b = Math.floor(g / 360);
          l && ((g = -g), (b = Math.floor(-g / 360)));
          var w = Math.max(Math.min(f[0].progress, 1), -1),
            y = 0,
            x = 0,
            E = 0;
          m % 4 == 0
            ? ((y = 4 * -b * d), (E = 0))
            : (m - 1) % 4 == 0
              ? ((y = 0), (E = 4 * -b * d))
              : (m - 2) % 4 == 0
                ? ((y = d + 4 * b * d), (E = d))
                : (m - 3) % 4 == 0 &&
                  ((y = -d), (E = 3 * d + 4 * d * b)),
            l && (y = -y),
            c || ((x = y), (y = 0));
          var T =
            'rotateX(' +
            (c ? 0 : -g) +
            'deg) rotateY(' +
            (c ? g : 0) +
            'deg) translate3d(' +
            y +
            'px, ' +
            x +
            'px, ' +
            E +
            'px)';
          if (
            (w <= 1 &&
              -1 < w &&
              ((h = 90 * m + 90 * w), l && (h = 90 * -m - 90 * w)),
            f.transform(T),
            p.slideShadows)
          ) {
            var S = c
                ? f.find('.swiper-slide-shadow-left')
                : f.find('.swiper-slide-shadow-top'),
              M = c
                ? f.find('.swiper-slide-shadow-right')
                : f.find('.swiper-slide-shadow-bottom');
            0 === S.length &&
              ((S = e(
                '<div class="swiper-slide-shadow-' +
                  (c ? 'left' : 'top') +
                  '"></div>'
              )),
              f.append(S)),
              0 === M.length &&
                ((M = e(
                  '<div class="swiper-slide-shadow-' +
                    (c ? 'right' : 'bottom') +
                    '"></div>'
                )),
                f.append(M)),
              S.length && (S[0].style.opacity = Math.max(-w, 0)),
              M.length && (M[0].style.opacity = Math.max(w, 0));
          }
        }
        if (
          (s.css({
            '-webkit-transform-origin': '50% 50% -' + d / 2 + 'px',
            '-moz-transform-origin': '50% 50% -' + d / 2 + 'px',
            '-ms-transform-origin': '50% 50% -' + d / 2 + 'px',
            'transform-origin': '50% 50% -' + d / 2 + 'px',
          }),
          p.shadow)
        )
          if (c)
            t.transform(
              'translate3d(0px, ' +
                (n / 2 + p.shadowOffset) +
                'px, ' +
                -n / 2 +
                'px) rotateX(90deg) rotateZ(0deg) scale(' +
                p.shadowScale +
                ')'
            );
          else {
            var z = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
              k =
                1.5 -
                (Math.sin((2 * z * Math.PI) / 360) / 2 +
                  Math.cos((2 * z * Math.PI) / 360) / 2),
              P = p.shadowScale,
              $ = p.shadowScale / k,
              L = p.shadowOffset;
            t.transform(
              'scale3d(' +
                P +
                ', 1, ' +
                $ +
                ') translate3d(0px, ' +
                (o / 2 + L) +
                'px, ' +
                -o / 2 / $ +
                'px) rotateX(-90deg)'
            );
          }
        var I = C.isSafari || C.isUiWebView ? -d / 2 : 0;
        s.transform(
          'translate3d(0px,0,' +
            I +
            'px) rotateX(' +
            (a.isHorizontal() ? 0 : h) +
            'deg) rotateY(' +
            (a.isHorizontal() ? -h : 0) +
            'deg)'
        );
      },
      setTransition: function (e) {
        var t = this.$el;
        this.slides
          .transition(e)
          .find(
            '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
          )
          .transition(e),
          this.params.cubeEffect.shadow &&
            !this.isHorizontal() &&
            t.find('.swiper-cube-shadow').transition(e);
      },
    },
    ee = {
      setTranslate: function () {
        for (
          var t = this, a = t.slides, i = t.rtlTranslate, s = 0;
          s < a.length;
          s += 1
        ) {
          var r = a.eq(s),
            n = r[0].progress;
          t.params.flipEffect.limitRotation &&
            (n = Math.max(Math.min(r[0].progress, 1), -1));
          var o = -180 * n,
            l = 0,
            d = -r[0].swiperSlideOffset,
            p = 0;
          if (
            (t.isHorizontal()
              ? i && (o = -o)
              : ((p = d), (l = -o), (o = d = 0)),
            (r[0].style.zIndex = -Math.abs(Math.round(n)) + a.length),
            t.params.flipEffect.slideShadows)
          ) {
            var c = t.isHorizontal()
                ? r.find('.swiper-slide-shadow-left')
                : r.find('.swiper-slide-shadow-top'),
              u = t.isHorizontal()
                ? r.find('.swiper-slide-shadow-right')
                : r.find('.swiper-slide-shadow-bottom');
            0 === c.length &&
              ((c = e(
                '<div class="swiper-slide-shadow-' +
                  (t.isHorizontal() ? 'left' : 'top') +
                  '"></div>'
              )),
              r.append(c)),
              0 === u.length &&
                ((u = e(
                  '<div class="swiper-slide-shadow-' +
                    (t.isHorizontal() ? 'right' : 'bottom') +
                    '"></div>'
                )),
                r.append(u)),
              c.length && (c[0].style.opacity = Math.max(-n, 0)),
              u.length && (u[0].style.opacity = Math.max(n, 0));
          }
          r.transform(
            'translate3d(' +
              d +
              'px, ' +
              p +
              'px, 0px) rotateX(' +
              l +
              'deg) rotateY(' +
              o +
              'deg)'
          );
        }
      },
      setTransition: function (e) {
        var t = this,
          a = t.slides,
          i = t.activeIndex,
          s = t.$wrapperEl;
        if (
          (a
            .transition(e)
            .find(
              '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
            )
            .transition(e),
          t.params.virtualTranslate && 0 !== e)
        ) {
          var r = !1;
          a.eq(i).transitionEnd(function () {
            if (!r && t && !t.destroyed) {
              (r = !0), (t.animating = !1);
              for (
                var e = ['webkitTransitionEnd', 'transitionend'],
                  a = 0;
                a < e.length;
                a += 1
              )
                s.trigger(e[a]);
            }
          });
        }
      },
    },
    te = {
      setTranslate: function () {
        for (
          var t = this,
            a = t.width,
            i = t.height,
            s = t.slides,
            r = t.$wrapperEl,
            n = t.slidesSizesGrid,
            o = t.params.coverflowEffect,
            l = t.isHorizontal(),
            d = t.translate,
            p = l ? a / 2 - d : i / 2 - d,
            u = l ? o.rotate : -o.rotate,
            h = o.depth,
            v = 0,
            f = s.length;
          v < f;
          v += 1
        ) {
          var m = s.eq(v),
            g = n[v],
            b =
              ((p - m[0].swiperSlideOffset - g / 2) / g) * o.modifier,
            w = l ? u * b : 0,
            y = l ? 0 : u * b,
            x = -h * Math.abs(b),
            E = l ? 0 : o.stretch * b,
            T = l ? o.stretch * b : 0;
          Math.abs(T) < 0.001 && (T = 0),
            Math.abs(E) < 0.001 && (E = 0),
            Math.abs(x) < 0.001 && (x = 0),
            Math.abs(w) < 0.001 && (w = 0),
            Math.abs(y) < 0.001 && (y = 0);
          var S =
            'translate3d(' +
            T +
            'px,' +
            E +
            'px,' +
            x +
            'px)  rotateX(' +
            y +
            'deg) rotateY(' +
            w +
            'deg)';
          if (
            (m.transform(S),
            (m[0].style.zIndex = 1 - Math.abs(Math.round(b))),
            o.slideShadows)
          ) {
            var C = l
                ? m.find('.swiper-slide-shadow-left')
                : m.find('.swiper-slide-shadow-top'),
              M = l
                ? m.find('.swiper-slide-shadow-right')
                : m.find('.swiper-slide-shadow-bottom');
            0 === C.length &&
              ((C = e(
                '<div class="swiper-slide-shadow-' +
                  (l ? 'left' : 'top') +
                  '"></div>'
              )),
              m.append(C)),
              0 === M.length &&
                ((M = e(
                  '<div class="swiper-slide-shadow-' +
                    (l ? 'right' : 'bottom') +
                    '"></div>'
                )),
                m.append(M)),
              C.length && (C[0].style.opacity = 0 < b ? b : 0),
              M.length && (M[0].style.opacity = 0 < -b ? -b : 0);
          }
        }
        (c.pointerEvents || c.prefixedPointerEvents) &&
          (r[0].style.perspectiveOrigin = p + 'px 50%');
      },
      setTransition: function (e) {
        this.slides
          .transition(e)
          .find(
            '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
          )
          .transition(e);
      },
    },
    ae = [
      $,
      L,
      I,
      D,
      A,
      H,
      N,
      {
        name: 'mousewheel',
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarged: 'container',
          },
        },
        create: function () {
          var e = this;
          p.extend(e, {
            mousewheel: {
              enabled: !1,
              enable: X.enable.bind(e),
              disable: X.disable.bind(e),
              handle: X.handle.bind(e),
              handleMouseEnter: X.handleMouseEnter.bind(e),
              handleMouseLeave: X.handleMouseLeave.bind(e),
              lastScrollTime: p.now(),
            },
          });
        },
        on: {
          init: function () {
            this.params.mousewheel.enabled &&
              this.mousewheel.enable();
          },
          destroy: function () {
            this.mousewheel.enabled && this.mousewheel.disable();
          },
        },
      },
      {
        name: 'navigation',
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock',
          },
        },
        create: function () {
          p.extend(this, {
            navigation: {
              init: Y.init.bind(this),
              update: Y.update.bind(this),
              destroy: Y.destroy.bind(this),
            },
          });
        },
        on: {
          init: function () {
            this.navigation.init(), this.navigation.update();
          },
          toEdge: function () {
            this.navigation.update();
          },
          fromEdge: function () {
            this.navigation.update();
          },
          destroy: function () {
            this.navigation.destroy();
          },
          click: function (t) {
            var a = this.navigation,
              i = a.$nextEl,
              s = a.$prevEl;
            !this.params.navigation.hideOnClick ||
              e(t.target).is(s) ||
              e(t.target).is(i) ||
              (i && i.toggleClass(this.params.navigation.hiddenClass),
              s && s.toggleClass(this.params.navigation.hiddenClass));
          },
        },
      },
      {
        name: 'pagination',
        params: {
          pagination: {
            el: null,
            bulletElement: 'span',
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: 'bullets',
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (e) {
              return e;
            },
            formatFractionTotal: function (e) {
              return e;
            },
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            modifierClass: 'swiper-pagination-',
            currentClass: 'swiper-pagination-current',
            totalClass: 'swiper-pagination-total',
            hiddenClass: 'swiper-pagination-hidden',
            progressbarFillClass:
              'swiper-pagination-progressbar-fill',
            progressbarOppositeClass:
              'swiper-pagination-progressbar-opposite',
            clickableClass: 'swiper-pagination-clickable',
            lockClass: 'swiper-pagination-lock',
          },
        },
        create: function () {
          var e = this;
          p.extend(e, {
            pagination: {
              init: V.init.bind(e),
              render: V.render.bind(e),
              update: V.update.bind(e),
              destroy: V.destroy.bind(e),
              dynamicBulletIndex: 0,
            },
          });
        },
        on: {
          init: function () {
            this.pagination.init(),
              this.pagination.render(),
              this.pagination.update();
          },
          activeIndexChange: function () {
            this.params.loop
              ? this.pagination.update()
              : void 0 === this.snapIndex && this.pagination.update();
          },
          snapIndexChange: function () {
            this.params.loop || this.pagination.update();
          },
          slidesLengthChange: function () {
            this.params.loop &&
              (this.pagination.render(), this.pagination.update());
          },
          snapGridLengthChange: function () {
            this.params.loop ||
              (this.pagination.render(), this.pagination.update());
          },
          destroy: function () {
            this.pagination.destroy();
          },
          click: function (t) {
            var a = this;
            a.params.pagination.el &&
              a.params.pagination.hideOnClick &&
              0 < a.pagination.$el.length &&
              !e(t.target).hasClass(
                a.params.pagination.bulletClass
              ) &&
              a.pagination.$el.toggleClass(
                a.params.pagination.hiddenClass
              );
          },
        },
      },
      {
        name: 'scrollbar',
        params: {
          scrollbar: {
            el: null,
            dragSize: 'auto',
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: 'swiper-scrollbar-lock',
            dragClass: 'swiper-scrollbar-drag',
          },
        },
        create: function () {
          var e = this;
          p.extend(e, {
            scrollbar: {
              init: R.init.bind(e),
              destroy: R.destroy.bind(e),
              updateSize: R.updateSize.bind(e),
              setTranslate: R.setTranslate.bind(e),
              setTransition: R.setTransition.bind(e),
              enableDraggable: R.enableDraggable.bind(e),
              disableDraggable: R.disableDraggable.bind(e),
              setDragPosition: R.setDragPosition.bind(e),
              onDragStart: R.onDragStart.bind(e),
              onDragMove: R.onDragMove.bind(e),
              onDragEnd: R.onDragEnd.bind(e),
              isTouched: !1,
              timeout: null,
              dragTimeout: null,
            },
          });
        },
        on: {
          init: function () {
            this.scrollbar.init(),
              this.scrollbar.updateSize(),
              this.scrollbar.setTranslate();
          },
          update: function () {
            this.scrollbar.updateSize();
          },
          resize: function () {
            this.scrollbar.updateSize();
          },
          observerUpdate: function () {
            this.scrollbar.updateSize();
          },
          setTranslate: function () {
            this.scrollbar.setTranslate();
          },
          setTransition: function (e) {
            this.scrollbar.setTransition(e);
          },
          destroy: function () {
            this.scrollbar.destroy();
          },
        },
      },
      {
        name: 'parallax',
        params: { parallax: { enabled: !1 } },
        create: function () {
          p.extend(this, {
            parallax: {
              setTransform: F.setTransform.bind(this),
              setTranslate: F.setTranslate.bind(this),
              setTransition: F.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            this.params.parallax.enabled &&
              (this.params.watchSlidesProgress = !0);
          },
          init: function () {
            this.params.parallax && this.parallax.setTranslate();
          },
          setTranslate: function () {
            this.params.parallax && this.parallax.setTranslate();
          },
          setTransition: function (e) {
            this.params.parallax && this.parallax.setTransition(e);
          },
        },
      },
      {
        name: 'zoom',
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: 'swiper-zoom-container',
            zoomedSlideClass: 'swiper-slide-zoomed',
          },
        },
        create: function () {
          var e = this,
            t = {
              enabled: !1,
              scale: 1,
              currentScale: 1,
              isScaling: !1,
              gesture: {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3,
              },
              image: {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {},
              },
              velocity: {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0,
              },
            };
          'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'
            .split(' ')
            .forEach(function (a) {
              t[a] = q[a].bind(e);
            }),
            p.extend(e, { zoom: t });
        },
        on: {
          init: function () {
            this.params.zoom.enabled && this.zoom.enable();
          },
          destroy: function () {
            this.zoom.disable();
          },
          touchStart: function (e) {
            this.zoom.enabled && this.zoom.onTouchStart(e);
          },
          touchEnd: function (e) {
            this.zoom.enabled && this.zoom.onTouchEnd(e);
          },
          doubleTap: function (e) {
            this.params.zoom.enabled &&
              this.zoom.enabled &&
              this.params.zoom.toggle &&
              this.zoom.toggle(e);
          },
          transitionEnd: function () {
            this.zoom.enabled &&
              this.params.zoom.enabled &&
              this.zoom.onTransitionEnd();
          },
        },
      },
      {
        name: 'lazy',
        params: {
          lazy: {
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            elementClass: 'swiper-lazy',
            loadingClass: 'swiper-lazy-loading',
            loadedClass: 'swiper-lazy-loaded',
            preloaderClass: 'swiper-lazy-preloader',
          },
        },
        create: function () {
          p.extend(this, {
            lazy: {
              initialImageLoaded: !1,
              load: W.load.bind(this),
              loadInSlide: W.loadInSlide.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            this.params.lazy.enabled &&
              this.params.preloadImages &&
              (this.params.preloadImages = !1);
          },
          init: function () {
            this.params.lazy.enabled &&
              !this.params.loop &&
              0 === this.params.initialSlide &&
              this.lazy.load();
          },
          scroll: function () {
            this.params.freeMode &&
              !this.params.freeModeSticky &&
              this.lazy.load();
          },
          resize: function () {
            this.params.lazy.enabled && this.lazy.load();
          },
          scrollbarDragMove: function () {
            this.params.lazy.enabled && this.lazy.load();
          },
          transitionStart: function () {
            var e = this;
            e.params.lazy.enabled &&
              (e.params.lazy.loadOnTransitionStart ||
                (!e.params.lazy.loadOnTransitionStart &&
                  !e.lazy.initialImageLoaded)) &&
              e.lazy.load();
          },
          transitionEnd: function () {
            this.params.lazy.enabled &&
              !this.params.lazy.loadOnTransitionStart &&
              this.lazy.load();
          },
        },
      },
      {
        name: 'controller',
        params: {
          controller: { control: void 0, inverse: !1, by: 'slide' },
        },
        create: function () {
          var e = this;
          p.extend(e, {
            controller: {
              control: e.params.controller.control,
              getInterpolateFunction:
                j.getInterpolateFunction.bind(e),
              setTranslate: j.setTranslate.bind(e),
              setTransition: j.setTransition.bind(e),
            },
          });
        },
        on: {
          update: function () {
            this.controller.control &&
              this.controller.spline &&
              ((this.controller.spline = void 0),
              delete this.controller.spline);
          },
          resize: function () {
            this.controller.control &&
              this.controller.spline &&
              ((this.controller.spline = void 0),
              delete this.controller.spline);
          },
          observerUpdate: function () {
            this.controller.control &&
              this.controller.spline &&
              ((this.controller.spline = void 0),
              delete this.controller.spline);
          },
          setTranslate: function (e, t) {
            this.controller.control &&
              this.controller.setTranslate(e, t);
          },
          setTransition: function (e, t) {
            this.controller.control &&
              this.controller.setTransition(e, t);
          },
        },
      },
      {
        name: 'a11y',
        params: {
          a11y: {
            enabled: !0,
            notificationClass: 'swiper-notification',
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
          },
        },
        create: function () {
          var t = this;
          p.extend(t, {
            a11y: {
              liveRegion: e(
                '<span class="' +
                  t.params.a11y.notificationClass +
                  '" aria-live="assertive" aria-atomic="true"></span>'
              ),
            },
          }),
            Object.keys(_).forEach(function (e) {
              t.a11y[e] = _[e].bind(t);
            });
        },
        on: {
          init: function () {
            this.params.a11y.enabled &&
              (this.a11y.init(), this.a11y.updateNavigation());
          },
          toEdge: function () {
            this.params.a11y.enabled && this.a11y.updateNavigation();
          },
          fromEdge: function () {
            this.params.a11y.enabled && this.a11y.updateNavigation();
          },
          paginationUpdate: function () {
            this.params.a11y.enabled && this.a11y.updatePagination();
          },
          destroy: function () {
            this.params.a11y.enabled && this.a11y.destroy();
          },
        },
      },
      {
        name: 'history',
        params: {
          history: { enabled: !1, replaceState: !1, key: 'slides' },
        },
        create: function () {
          var e = this;
          p.extend(e, {
            history: {
              init: K.init.bind(e),
              setHistory: K.setHistory.bind(e),
              setHistoryPopState: K.setHistoryPopState.bind(e),
              scrollToSlide: K.scrollToSlide.bind(e),
              destroy: K.destroy.bind(e),
            },
          });
        },
        on: {
          init: function () {
            this.params.history.enabled && this.history.init();
          },
          destroy: function () {
            this.params.history.enabled && this.history.destroy();
          },
          transitionEnd: function () {
            this.history.initialized &&
              this.history.setHistory(
                this.params.history.key,
                this.activeIndex
              );
          },
        },
      },
      {
        name: 'hash-navigation',
        params: {
          hashNavigation: {
            enabled: !1,
            replaceState: !1,
            watchState: !1,
          },
        },
        create: function () {
          var e = this;
          p.extend(e, {
            hashNavigation: {
              initialized: !1,
              init: U.init.bind(e),
              destroy: U.destroy.bind(e),
              setHash: U.setHash.bind(e),
              onHashCange: U.onHashCange.bind(e),
            },
          });
        },
        on: {
          init: function () {
            this.params.hashNavigation.enabled &&
              this.hashNavigation.init();
          },
          destroy: function () {
            this.params.hashNavigation.enabled &&
              this.hashNavigation.destroy();
          },
          transitionEnd: function () {
            this.hashNavigation.initialized &&
              this.hashNavigation.setHash();
          },
        },
      },
      {
        name: 'autoplay',
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
          },
        },
        create: function () {
          var e = this;
          p.extend(e, {
            autoplay: {
              running: !1,
              paused: !1,
              run: Z.run.bind(e),
              start: Z.start.bind(e),
              stop: Z.stop.bind(e),
              pause: Z.pause.bind(e),
              onTransitionEnd: function (t) {
                e &&
                  !e.destroyed &&
                  e.$wrapperEl &&
                  t.target === this &&
                  (e.$wrapperEl[0].removeEventListener(
                    'transitionend',
                    e.autoplay.onTransitionEnd
                  ),
                  e.$wrapperEl[0].removeEventListener(
                    'webkitTransitionEnd',
                    e.autoplay.onTransitionEnd
                  ),
                  (e.autoplay.paused = !1),
                  e.autoplay.running
                    ? e.autoplay.run()
                    : e.autoplay.stop());
              },
            },
          });
        },
        on: {
          init: function () {
            this.params.autoplay.enabled && this.autoplay.start();
          },
          beforeTransitionStart: function (e, t) {
            this.autoplay.running &&
              (t || !this.params.autoplay.disableOnInteraction
                ? this.autoplay.pause(e)
                : this.autoplay.stop());
          },
          sliderFirstMove: function () {
            this.autoplay.running &&
              (this.params.autoplay.disableOnInteraction
                ? this.autoplay.stop()
                : this.autoplay.pause());
          },
          destroy: function () {
            this.autoplay.running && this.autoplay.stop();
          },
        },
      },
      {
        name: 'effect-fade',
        params: { fadeEffect: { crossFade: !1 } },
        create: function () {
          p.extend(this, {
            fadeEffect: {
              setTranslate: Q.setTranslate.bind(this),
              setTransition: Q.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            var e = this;
            if ('fade' === e.params.effect) {
              e.classNames.push(
                e.params.containerModifierClass + 'fade'
              );
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              p.extend(e.params, t), p.extend(e.originalParams, t);
            }
          },
          setTranslate: function () {
            'fade' === this.params.effect &&
              this.fadeEffect.setTranslate();
          },
          setTransition: function (e) {
            'fade' === this.params.effect &&
              this.fadeEffect.setTransition(e);
          },
        },
      },
      {
        name: 'effect-cube',
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        },
        create: function () {
          p.extend(this, {
            cubeEffect: {
              setTranslate: J.setTranslate.bind(this),
              setTransition: J.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            var e = this;
            if ('cube' === e.params.effect) {
              e.classNames.push(
                e.params.containerModifierClass + 'cube'
              ),
                e.classNames.push(
                  e.params.containerModifierClass + '3d'
                );
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0,
              };
              p.extend(e.params, t), p.extend(e.originalParams, t);
            }
          },
          setTranslate: function () {
            'cube' === this.params.effect &&
              this.cubeEffect.setTranslate();
          },
          setTransition: function (e) {
            'cube' === this.params.effect &&
              this.cubeEffect.setTransition(e);
          },
        },
      },
      {
        name: 'effect-flip',
        params: {
          flipEffect: { slideShadows: !0, limitRotation: !0 },
        },
        create: function () {
          p.extend(this, {
            flipEffect: {
              setTranslate: ee.setTranslate.bind(this),
              setTransition: ee.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            var e = this;
            if ('flip' === e.params.effect) {
              e.classNames.push(
                e.params.containerModifierClass + 'flip'
              ),
                e.classNames.push(
                  e.params.containerModifierClass + '3d'
                );
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              p.extend(e.params, t), p.extend(e.originalParams, t);
            }
          },
          setTranslate: function () {
            'flip' === this.params.effect &&
              this.flipEffect.setTranslate();
          },
          setTransition: function (e) {
            'flip' === this.params.effect &&
              this.flipEffect.setTransition(e);
          },
        },
      },
      {
        name: 'effect-coverflow',
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !0,
          },
        },
        create: function () {
          p.extend(this, {
            coverflowEffect: {
              setTranslate: te.setTranslate.bind(this),
              setTransition: te.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            var e = this;
            'coverflow' === e.params.effect &&
              (e.classNames.push(
                e.params.containerModifierClass + 'coverflow'
              ),
              e.classNames.push(
                e.params.containerModifierClass + '3d'
              ),
              (e.params.watchSlidesProgress = !0),
              (e.originalParams.watchSlidesProgress = !0));
          },
          setTranslate: function () {
            'coverflow' === this.params.effect &&
              this.coverflowEffect.setTranslate();
          },
          setTransition: function (e) {
            'coverflow' === this.params.effect &&
              this.coverflowEffect.setTransition(e);
          },
        },
      },
    ];
  return (
    void 0 === P.use &&
      ((P.use = P.Class.use),
      (P.installModule = P.Class.installModule)),
    P.use(ae),
    P
  );
});
var bg = document.querySelector('.item-bg'),
  items = document.querySelectorAll('.news__item'),
  item = document.querySelector('.news__item');
$(window).width() > 800 &&
  $(document).on('mouseover', '.news__item', function (e, t) {
    document.querySelectorAll('.news__item').forEach(function (e, t) {
      e.addEventListener('mouseover', function () {
        var e = this.getBoundingClientRect().left,
          t = this.getBoundingClientRect().top,
          a = this.getBoundingClientRect().width,
          i = this.getBoundingClientRect().height;
        $('.item-bg').addClass('active'),
          $('.news__item').removeClass('active'),
          (bg.style.width = a + 'px'),
          (bg.style.height = i + 'px'),
          (bg.style.transform =
            'translateX(' + e + 'px ) translateY(' + t + 'px)');
      }),
        e.addEventListener('mouseleave', function () {
          $('.item-bg').removeClass('active'),
            $('.news__item').removeClass('active');
        });
    });
  });
var swiper = new Swiper('.news-slider', {
  effect: 'coverflow',
  grabCursor: !0,
  loop: !0,
  centeredSlides: !0,
  keyboard: !0,
  spaceBetween: 0,
  slidesPerView: 'auto',
  speed: 300,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 3,
    slideShadows: !1,
  },
  breakpoints: { 480: { spaceBetween: 0, centeredSlides: !0 } },
  simulateTouch: !0,
  navigation: {
    nextEl: '.news-slider-next',
    prevEl: '.news-slider-prev',
  },
  pagination: { el: '.news-slider__pagination', clickable: !0 },
  on: {
    init: function () {
      var e = document.querySelector('.swiper-slide-active'),
        t = e.querySelector('.news__item');
      $('.swiper-slide-active .news__item').addClass('active');
      var a = t.getBoundingClientRect().left,
        i = t.getBoundingClientRect().top,
        s = t.getBoundingClientRect().width,
        r = t.getBoundingClientRect().height;
      $('.item-bg').addClass('active'),
        (bg.style.width = s + 'px'),
        (bg.style.height = r + 'px'),
        (bg.style.transform =
          'translateX(' + a + 'px ) translateY(' + i + 'px)');
    },
  },
});
swiper.on('touchEnd', function () {
  $('.news__item').removeClass('active'),
    $('.swiper-slide-active .news__item').addClass('active');
}),
  swiper.on('slideChange', function () {
    $('.news__item').removeClass('active');
  }),
  swiper.on('slideChangeTransitionEnd', function () {
    $('.news__item').removeClass('active');
    var e = document.querySelector('.swiper-slide-active'),
      t = e.querySelector('.news__item');
    $('.swiper-slide-active .news__item').addClass('active');
    var a = t.getBoundingClientRect().left,
      i = t.getBoundingClientRect().top,
      s = t.getBoundingClientRect().width,
      r = t.getBoundingClientRect().height;
    $('.item-bg').addClass('active'),
      (bg.style.width = s + 'px'),
      (bg.style.height = r + 'px'),
      (bg.style.transform =
        'translateX(' + a + 'px ) translateY(' + i + 'px)');
  });
