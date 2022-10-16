import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login-message-modal',
  templateUrl: './login-message-modal.component.html',
  styleUrls: ['./login-message-modal.component.css']
})
export class LoginMessageModalComponent implements OnInit {

  @Input() message:string="";
  @Output() modalClose=new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  modalCloseClicked(){
    this.modalClose.emit(true)
  }
}
