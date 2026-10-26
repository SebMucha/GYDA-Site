import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Layout } from './layout/layout';

@Component({
  imports: [Layout],
  selector: 'app-root',
  template: '<app-layout />',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
