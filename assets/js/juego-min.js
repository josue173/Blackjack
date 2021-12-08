const miModulo = (() => {
  "use strict";
  let e = [];
  const t = ["C", "D", "H", "S"],
    n = ["A", "J", "Q", "K"];
  let a = [];
  const r = document.querySelector("#btnPedir"),
    o = document.querySelector("#btnDetener"),
    l = document.querySelector("#btnNuevo"),
    s = document.querySelectorAll(".divCartas"),
    d = document.querySelectorAll("small"),
    c = () => {
      e = [];
      for (let n = 2; n <= 10; n++) for (let a of t) e.push(n + a);
      for (let a of t) for (let t of n) e.push(t + a);
      return _.shuffle(e);
    },
    i = () => {
      if (0 === e.length) throw "No hay cartas en el deck";
      return e.pop();
    },
    u = (e, t) => (
      (a[t] =
        a[t] +
        ((e) => {
          const t = e.substring(0, e.length - 1);
          return isNaN(t) ? ("A" === t ? 11 : 10) : 1 * t;
        })(e)),
      (d[t].innerText = a[t]),
      a[t]
    ),
    h = (e, t) => {
      const n = document.createElement("img");
      (n.src = `assets/cartas/${e}.png`),
        n.classList.add("carta"),
        s[t].append(n);
    },
    m = (e) => {
      let t = 0;
      do {
        const e = i();
        (t = u(e, a.length - 1)), h(e, a.length - 1);
      } while (t < e && e <= 21);
      (() => {
        const [e, t] = a;
        setTimeout(() => {
          e === t
            ? alert("Nadie gana :(")
            : t > 21
            ? alert("Jugador Gana")
            : e > 21
            ? alert("Computadora gana")
            : alert("Computadora Gana");
        }, 100);
      })();
    };
  r.addEventListener("click", () => {
    const e = i(),
      t = u(e, 0);
    h(e, 0),
      t > 21
        ? (console.warn("Lo siento mucho, perdiste"),
          (r.disabled = !0),
          (o.disabled = !0),
          m(t))
        : 21 === t &&
          (console.warn("21, genial!"),
          (r.disabled = !0),
          (o.disabled = !0),
          m(t));
  }),
    o.addEventListener("click", () => {
      (r.disabled = !0), (o.disabled = !0), m(a[0]);
    }),
    l.addEventListener("click", () => {
      ((t = 2) => {
        (e = c()), (a = []);
        for (let e = 0; e < t; e++) a.push(0);
        d.forEach((e) => (e.innerText = 0)),
          s.forEach((e) => (e.innerHTML = "")),
          (r.disabled = !1),
          (o.disabled = !1);
      })();
    });
})();
