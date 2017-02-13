import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { IPlayer } from '../../../../models';
import { UtilsService } from '../../../../services';

@Component({
    selector: 'app-player-details',
    templateUrl: './player-details.component.html',
    styleUrls: ['./player-details.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerDetailsComponent implements OnInit {

    @Input() player: IPlayer;
    @Input() playerExists: boolean;

    constructor(private utilsService: UtilsService) { }

    ngOnInit() { }

    getAge(dateOfBirth: string): number {
        if (dateOfBirth) {
            return this.utilsService.getAge(dateOfBirth);
        }
        else {
            return null;
        }
    }


}
