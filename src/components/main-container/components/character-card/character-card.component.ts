import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  output,
} from '@angular/core';
import { Character } from '../../../../models/character.model';
import { JsonPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [NgOptimizedImage, JsonPipe],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterCardComponent implements OnInit {
  character = input.required<Character>();
  characterInfo = input<Character>();
  loaded = output<string>();

  ngOnInit() {
    this.loaded.emit(this.character().url);
  }
}
