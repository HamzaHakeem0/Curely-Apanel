import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-model-footer',
  imports: [],
  templateUrl: './model-footer.html',
  styleUrl: './model-footer.scss',
})
export class ModelFooter {
 @Input() title: string = '';   
 @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
