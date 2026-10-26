import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  DOCUMENT,
  inject,
  signal,
} from '@angular/core';
import { NAV_ITEMS } from '../../shared/site-links';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-scrolled]': 'scrolled()',
    '(document:keydown.escape)': 'menuOpen.set(false)',
  },
})
export class Header {
  private readonly document = inject(DOCUMENT);

  protected readonly navItems = NAV_ITEMS;
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly activeId = signal(NAV_ITEMS[0].id);

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const win = this.document.defaultView!;
      let frame = 0;

      const update = () => {
        frame = 0;
        this.scrolled.set(win.scrollY > 8);

        const offset = win.innerHeight * 0.35;
        let current = NAV_ITEMS[0].id;
        for (const { id } of NAV_ITEMS) {
          const section = this.document.getElementById(id);
          if (section && section.getBoundingClientRect().top <= offset) current = id;
        }
        if (win.innerHeight + win.scrollY >= this.document.documentElement.scrollHeight - 2) {
          current = NAV_ITEMS[NAV_ITEMS.length - 1].id;
        }
        this.activeId.set(current);
      };

      const onScroll = () => {
        if (!frame) frame = win.requestAnimationFrame(update);
      };

      update();
      win.addEventListener('scroll', onScroll, { passive: true });
      win.addEventListener('resize', onScroll, { passive: true });
      destroyRef.onDestroy(() => {
        win.removeEventListener('scroll', onScroll);
        win.removeEventListener('resize', onScroll);
        if (frame) win.cancelAnimationFrame(frame);
      });
    });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected navigate(event: Event, id: string): void {
    const target = this.document.getElementById(id);
    this.menuOpen.set(false);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.document.defaultView?.history.replaceState(null, '', `#${id}`);
  }
}
