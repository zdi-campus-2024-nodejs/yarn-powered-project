import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Logger} from "tslog";
import {StatusService} from "./services/status.service";
import {CalculateService} from "./services/calculate.service";
import {firstValueFrom} from "rxjs";
import {CommonModule} from "@angular/common";

const logger = new Logger({ type: 'pretty' });

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nodejs-workspaces-powered-project';

  constructor(private readonly statusService: StatusService,
              private readonly calculateService: CalculateService) {
  }

  async onStatus() {
    logger.info('Status');
    firstValueFrom(this.statusService.getStatus())
        .then((result) => logger.info('getStatus result', result));
  }

  async onCalculate() {
    logger.info('Calculate');
    firstValueFrom(this.calculateService.getCalculate(15, 20))
        .then((result) => logger.info('getCalculate result', result));
  }
}
