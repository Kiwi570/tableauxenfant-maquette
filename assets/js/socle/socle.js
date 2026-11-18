/* Passerelle entre les modules de la bibliothèque (qui importent ../../socle/socle.js et appellent pret([...]))
   et le socle de la maquette : GSAP et ScrollTrigger sont déjà chargés par la page, Flip est chargé à la demande,
   les recalculs passent par le rafraîchissement regroupé du socle (mesures.js). Pas de Lenis : le défilement
   adouci est celui du socle. */
import { rafraichir as rafraichirSocle } from './mesures.js?v=1';
import { boucle as boucleSocle } from './boucles.js?v=1';

const charges = {};
function script(nom, fichier) {
  return (charges[nom] ??= new Promise((ok, ko) => {
    const s = document.createElement('script');
    s.src = '/assets/vendor/' + fichier;
    s.onload = ok; s.onerror = () => ko(new Error('socle : ' + nom + ' introuvable'));
    document.head.appendChild(s);
  }));
}
const attendreGsap = () => new Promise((ok) => {
  if (window.gsap) return ok();
  const t0 = performance.now();
  const tour = () => (window.gsap || performance.now() - t0 > 4000 ? ok() : requestAnimationFrame(tour));
  tour();
});

export const socle = {
  gsap: null, ScrollTrigger: null, SplitText: null, Flip: null, OGL: null, lenis: null,
  get calme() { return false; },
  get souris() { return matchMedia('(hover: hover) and (pointer: fine)').matches; },
  get telephone() { return innerWidth < 700; },
  webgl() { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; } },
  rafraichir() { rafraichirSocle(); },
  boucle(el, fn) { const b = boucleSocle(el, (dt, t) => fn(t * 1000, dt * 1000)); return { arreter() { b?.arreter?.(); } }; },
  mesurer() {},
};

export async function pret(besoins = []) {
  const voulus = new Set(besoins.map((b) => b.toLowerCase()));
  await attendreGsap();
  if (voulus.has('flip') && !window.Flip) { try { await script('flip', 'Flip.min.js'); } catch (e) { console.warn(e); } }
  const g = window.gsap || null;
  socle.gsap = g;
  if (g && window.ScrollTrigger) { g.registerPlugin(window.ScrollTrigger); socle.ScrollTrigger = window.ScrollTrigger; }
  if (g && window.SplitText) { g.registerPlugin(window.SplitText); socle.SplitText = window.SplitText; }
  if (g && window.Flip) { g.registerPlugin(window.Flip); socle.Flip = window.Flip; }
  return socle;
}
