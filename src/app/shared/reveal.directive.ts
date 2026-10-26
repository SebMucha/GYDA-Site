import { afterNextRender, DestroyRef, Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appReveal]',
})
export class RevealDirective {
  readonly revealDelay = input(0, { alias: 'appReveal', transform: (v: unknown) => Number(v) || 0 });

  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (typeof IntersectionObserver === 'undefined') return;
      if (el.getBoundingClientRect().top < window.innerHeight) return;

      const delay = this.revealDelay();
      let cleanupTimer: ReturnType<typeof setTimeout> | undefined;

      const cleanup = () => {
        clearTimeout(cleanupTimer);
        el.removeEventListener('transitionend', onTransitionEnd);
        el.classList.remove('reveal', 'is-visible');
        el.style.removeProperty('--reveal-delay');
      };
      const onTransitionEnd = (event: TransitionEvent) => {
        if (event.target === el && event.propertyName === 'transform') cleanup();
      };

      el.style.setProperty('--reveal-delay', `${delay}ms`);
      el.classList.add('reveal');

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          observer.disconnect();
          el.addEventListener('transitionend', onTransitionEnd);
          el.classList.add('is-visible');
          cleanupTimer = setTimeout(cleanup, delay + 1000);
        },
        { rootMargin: '0px 0px -60px 0px', threshold: 0.12 },
      );
      observer.observe(el);
      destroyRef.onDestroy(() => {
        observer.disconnect();
        clearTimeout(cleanupTimer);
        el.removeEventListener('transitionend', onTransitionEnd);
      });
    });
  }
}
