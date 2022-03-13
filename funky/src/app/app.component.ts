import { Component, ViewEncapsulation } from '@angular/core';
import { DialItem } from "@progress/kendo-angular-buttons";
import { ActionsLayout, Orientation } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
]
})
export class AppComponent {
  title = 'fucky';
  public popupClass = "font-arial";

  public data: Array<any> = [
    {
      text: "My Profile",
    },
    {
      text: "Friend Requests",
    }
  ];

  public image =
  "https://cf.shopee.tw/file/12a82881420e73ea015f932624e4d4ad_tn";

public items: Array<DialItem> = [
  { icon: "facebook", label: "Facebook" },
  { icon: "twitter", label: "Twitter" },

];


public expanded = false;
  public liked = false;
  public btnText = "More";

  public actionsOrientation: Orientation = "horizontal";
  public actionsLayout: ActionsLayout = "end";

  public get horizontalStretched(): boolean {
    return (
      this.actionsOrientation === "horizontal" &&
      this.actionsLayout === "stretched"
    );
  }

  public toggleRecipe(): void {
    this.expanded = !this.expanded;
    this.btnText = this.expanded ? "Less" : "More";
  }

  public toggleLike(): void {
    this.liked = !this.liked;
  }

  public heartIcon(): string {
    return this.liked ? "k-icon k-i-heart" : "k-icon k-i-heart-outline";
  }

}
