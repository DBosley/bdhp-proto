import { Component, OnInit, Input } from '@angular/core';
import { CallToAction } from './call-to-action.model';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent implements OnInit {

  @Input() data: CallToAction;

  constructor() { }

  ngOnInit() {
  }

}
