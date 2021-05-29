import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'myhome-brochure-component',
  templateUrl: './brochure.component.html',
  styleUrls: ['./brochure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrochureComponent implements OnInit{
    public brochureDetails: any;

    public ngOnInit(): void {
        this.brochureDetails = JSON.stringify(history.state.data.houseDetails, null, 2);
    }
}
