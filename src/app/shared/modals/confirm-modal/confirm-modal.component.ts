import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  standalone: true,
  styleUrls: ['./confirm-modal.component.scss'],
  imports: [MatDialogModule, MatButtonModule],
})
export class ConfirmModalComponent implements OnInit {
  @Output() $closeModal: EventEmitter<void> = new EventEmitter<void>();

  constructor(public dialogRef: MatDialogRef<ConfirmModalComponent>) { }

  ngOnInit(): void {}

  confirm(): void {
    this.$closeModal.emit();
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.$closeModal.emit();
    this.dialogRef.close(false);
  }
}
