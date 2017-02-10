import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { EmailValidators } from 'ng2-validators';
import { FirebaseObjectObservable } from 'angularfire2';

import { IPlayer } from '../../../../models';

@Component({
    selector: 'app-player-form',
    templateUrl: './player-form.component.html',
    styleUrls: ['./player-form.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerFormComponent implements OnInit {

    form: FormGroup;
    formSubmitted: boolean = false;

    @Input() player: IPlayer;
    @Output() formSubmitEvent: EventEmitter<IPlayer> = new EventEmitter<IPlayer>();

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {

        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            surname: ['', Validators.required],
            phoneNumber: [''],
            dateOfBirth: [''],
            preferredFoot: [''],
            preferredPosition: ['']
        });

        if (this.player) {
         
            this.form.setValue({
                firstName: this.player.firstName ? this.player.firstName : '',
                surname: this.player.surname ? this.player.surname : '',
                phoneNumber: this.player.phoneNumber ? this.player.phoneNumber : '',
                dateOfBirth: this.player.dateOfBirth ? this.player.dateOfBirth : '',
                preferredFoot: this.player.preferredFoot ? this.player.preferredFoot : '',
                preferredPosition: this.player.preferredPosition ? this.player.preferredPosition : ''
            });

        }

    }

    submit(): void {

        this.formSubmitted = true;

        if (this.form.valid) this.formSubmitEvent.next(this.form.value);

    }

}
