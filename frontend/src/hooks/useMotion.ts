import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
gsap.registerPlugin(ScrollTrigger);

export function useMotion(page: string) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    let raf = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };

    lenis.on('scroll', ScrollTrigger.update);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      lenis.off('scroll', ScrollTrigger.update);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const context = gsap.context(() => {
      const reveal = (
        container: HTMLElement,
        targets: HTMLElement[],
        stagger = 0.1,
      ) => {
        if (targets.length === 0) return;

        gsap.fromTo(
          targets,
          { autoAlpha: 0, y: 32, filter: 'blur(6px)' },
          {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            stagger,
            ease: 'power3.out',
            clearProps: 'transform,opacity,visibility,filter',
            scrollTrigger: {
              trigger: container,
              start: 'top 82%',
              once: true,
            },
          },
        );
      };

      gsap.utils.toArray<HTMLElement>('.public-shell section').forEach((section) => {
        if (section.classList.contains('hero')) {
          const heroContent = section.querySelector<HTMLElement>('.hero-content');
          const heroVisual = section.querySelector<HTMLElement>('.hero-visual');
          const heroImage = section.querySelector<HTMLElement>('.hero-image');
          const heroFloating = section.querySelector<HTMLElement>('.hero-floating');
          const lightSweep = section.querySelector<HTMLElement>('.hero-light-sweep');

          if (heroContent) reveal(section, Array.from(heroContent.children) as HTMLElement[], 0.12);
          if (heroVisual) {
            gsap.fromTo(
              heroVisual,
              { autoAlpha: 0, x: 48, scale: 0.96 },
              {
                autoAlpha: 1,
                x: 0,
                scale: 1,
                duration: 1,
                delay: 0.25,
                ease: 'power3.out',
                clearProps: 'transform,opacity,visibility',
              },
            );
          }
          if (heroImage) {
            gsap.to(heroImage, {
              yPercent: 12,
              scale: 1.05,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
              },
            });
          }
          if (heroFloating) {
            gsap.to(heroFloating, {
              y: -8,
              duration: 2.4,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            });
          }
          if (lightSweep) {
            gsap.fromTo(
              lightSweep,
              { xPercent: -180, autoAlpha: 0 },
              {
                xPercent: 650,
                autoAlpha: 0.9,
                duration: 1.8,
                delay: 0.7,
                ease: 'power2.inOut',
                clearProps: 'transform,opacity,visibility',
              },
            );
          }
          return;
        }

        const sectionChildren = Array.from(section.children).filter(
          (child): child is HTMLElement => child instanceof HTMLElement,
        );
        reveal(
          section,
          sectionChildren.filter(
            (child) => !child.matches('.service-grid, .portfolio-grid, .portfolio-preview'),
          ),
          0.12,
        );
      });

      gsap.utils.toArray<HTMLElement>('.service-grid, .portfolio-grid, .portfolio-preview').forEach((grid) => {
        const cards = Array.from(grid.children).filter(
          (child): child is HTMLElement => child instanceof HTMLElement,
        );
        reveal(grid, cards, 0.14);
      });

      gsap.utils
        .toArray<HTMLElement>(
          '.portfolio-grid .portfolio-placeholder, .portfolio-preview .portfolio-placeholder',
        )
        .forEach((frame) => {
          gsap.fromTo(
            frame,
            { clipPath: 'inset(12% 8% 12% 8% round 28px)', scale: 0.94 },
            {
              clipPath: 'inset(0% 0% 0% 0% round 28px)',
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: frame,
                start: 'top 92%',
                end: 'top 52%',
                scrub: 1,
              },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>(
          '.dash-content .dashboard-heading, .dash-content .metric-card, .dash-content .dash-panel, .dash-content .calendar-grid, .dash-content .quote-preview-wrap, .customer-portal .portal-card',
        )
        .forEach((element) => reveal(element, [element], 0));
    });

    return () => context.revert();
  }, [page]);
}
