import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dog-dialog',
  inputs: ['text', 'title', 'buttonText'],
  templateUrl: './dog-dialog.component.html',
  styleUrls: ['./dog-dialog.component.css'],
})
export class DogDialogComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  text: string | null = null;
  title: string | null = null;
  buttonText: string | null = null;

  ngOnInit(): void {}

  openDialog(): void {
    this.dialog.open(DogDialog, {
      data: { title: this.title, text: this.text },
    });
  }
}

@Component({
  selector: 'dog-dialog',
  templateUrl: 'dog-dialog.html',
})
export class DogDialog {
  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog() {
    this.dialog.closeAll();
  }
}
