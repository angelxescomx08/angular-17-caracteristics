import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './change-detection.component.html',
  //para menos zonejs (que no este tan pendiente de los cambios)
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionComponent {
  public frameworkAsSignal = signal({
    framework: 'Angular',
    realise: '2023',
  });

  public frameworkAsProperty = {
    framework: 'Angular',
    realise: '2023',
  };

  constructor() {
    setTimeout(() => {
      //se dispara pero no se actualiza con el ChangeDetectionStrategy.OnPush
      this.frameworkAsProperty.framework = 'React';

      this.frameworkAsSignal.update((prev) => ({
        ...prev,
        framework: 'React',
      }));
    }, 2000);
  }
}
