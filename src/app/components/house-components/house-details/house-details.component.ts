import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { HouseDetailsModel } from 'src/app/models';

@Component({
  selector: 'myhome-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseDetailsComponent implements OnInit {
  @Input() public houseList: any;
  public list: HouseDetailsModel[];
  public order: boolean;
  public minPrice: number = 0;
  public maxPrice: number = 1000000;
  public formGroup: any;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      minPrice: 0,
      maxPrice: 1000000
    });
  }

  public ngOnInit(): void {
    this.list = this.houseList.SearchResults;
  }

  public onSubmit(form: any): void {
    this.minPrice = form['minPrice'];
    this.maxPrice = form['maxPrice'];
  }

  public sortList(): void {
    this.order = !this.order;
    for (let i = 0; i < this.list.length; i++) {
      this.list = this.list.sort((a1, a2) => {
        if (this.order) {
          if (a1.Price < a2.Price) {
            return 1;
          }
          if (a1.Price > a2.Price) {
            return -1;
          }
          return 0;
        } else {
          if (a1.Price > a2.Price) {
            return 1;
          }
          if (a1.Price < a2.Price) {
            return -1;
          }
          return 0;
        }
      });
    }
  }
}
