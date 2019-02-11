import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import {
  faMapMarker,
  faSyringe,
  faLaptop,
  faClock,
  faUser,
  faCog,
  faSlidersH
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgxTranslateBug';
  showDialog = false;

  iconMapMarker = faMapMarker;
  iconSyringe = faSyringe;
  iconDevice = faLaptop;
  iconTimings = faClock;
  iconPatient = faUser;
  iconCog = faCog;
  iconSliders = faSlidersH;
  viewModel: ViewModel;

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    const browserLanguage = translate.getBrowserLang();
    const browserCulture = translate.getBrowserCultureLang();
    const languages = translate.getLangs();
    translate.use(browserLanguage);
    console.log(`Switched language to browser language: '${browserLanguage}'`);
    this.viewModel = new ViewModel(Sex.Female, 10, 100, 25);
  }
  private openDialog() {
    this.showDialog = true;
  }
}
class ViewModel {
  constructor(
    public sex: Sex,
    public age: number,
    public height: number,
    public weight: number
  ) {}
}
enum Sex {
  Female = 'Female',
  Male = 'Male'
}
