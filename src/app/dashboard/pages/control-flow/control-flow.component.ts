import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal<string[]>(['Angular', 'React', 'Svelte', 'Astro']);
  public emptyList = signal<string[]>([]);
  toggleContent() {
    this.showContent.update((prev) => !prev);
  }
}
