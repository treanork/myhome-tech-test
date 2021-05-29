import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'myhome-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['././header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
    public title = 'MyHome Tech Test'
}
