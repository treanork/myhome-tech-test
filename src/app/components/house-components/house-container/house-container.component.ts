import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonResponseService } from 'src/app/services';
@Component({
  selector: 'myhome-house-container',
  templateUrl: './house-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [JsonResponseService],
})
export class HouseContainerComponent implements OnInit {
  public houseList$: Observable<any>
  public brochureDetails: any;

  constructor(private jsonResponseService: JsonResponseService) {}

  public ngOnInit(): void {
    this.houseList$ = this.jsonResponseService.getJSON();
    this.brochureDetails = this.jsonResponseService.getJSON();
  }
}
