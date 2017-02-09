import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-auth-form',
    templateUrl: './auth-form.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthFormComponent implements OnInit {

    form: FormGroup;
    formSubmitted: boolean = false;

    @Input() formTitle: string;
    @Output() formSubmitEvent: EventEmitter<void> = new EventEmitter<void>();

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {

        this.form = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

    }

    submit(): void {

        this.formSubmitted = true;

        if (this.form.valid) this.formSubmitEvent.next();
    }

}
