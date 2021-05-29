import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'myhome-gallery-component',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit{
    public pictureArray: string[];
    public pictureIndex: number = 0;

    public ngOnInit(): void {
        this.pictureArray = history.state.data.pictureArray;
    }

    public onNextClick(): void {
        this.pictureIndex++;
        if(this.pictureIndex > this.pictureArray.length) {
            this.pictureIndex = 0;
        }
    }

    public onPrevClick(): void {
        this.pictureIndex--;
        if(this.pictureIndex < 0) {
            this.pictureIndex = this.pictureArray.length;
        }
    }
}
