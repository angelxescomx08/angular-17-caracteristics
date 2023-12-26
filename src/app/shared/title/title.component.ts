import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  booleanAttribute,
} from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./title.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  @Input({
    required: true,
    alias: 'title',
  })
  title: string = '';
  //para que se pueda poner solo withShadow en lugar de [withShadow]="true"
  @Input({ transform: booleanAttribute }) withShadow = false;
}
