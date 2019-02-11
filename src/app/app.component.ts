import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgxTranslateBug';
  showDialog = false;

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    const browserLanguage = translate.getBrowserLang();
    const browserCulture = translate.getBrowserCultureLang();
    const languages = translate.getLangs();
    translate.use(browserLanguage);
    console.log(`Switched language to browser language: '${browserLanguage}'`);
  }
  private openDialog() {
    this.showDialog = true;
  }
}
