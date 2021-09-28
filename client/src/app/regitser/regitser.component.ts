import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'app-regitser',
  templateUrl: './regitser.component.html',
  styleUrls: ['./regitser.component.css']
})
export class RegitserComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountsService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    }, error => {
      console.log(error);
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
