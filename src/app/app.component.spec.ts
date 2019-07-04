import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MatButtonModule, MatCardModule, MatCheckboxModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { RockPaperScissorsService } from './services/rock-paper-scissors.service';

describe('AppComponent', () => {
    let fixture;
    let app;
    let appCompiled;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MatToolbarModule,
                MatCardModule,
                MatProgressSpinnerModule,
                MatButtonModule,
                MatCheckboxModule,
                RouterTestingModule
            ],
            providers: [
                RockPaperScissorsService
            ],
            declarations: [
                AppComponent
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        app = fixture.debugElement.componentInstance;
        appCompiled = fixture.debugElement.nativeElement;
    }));

    it('Should Create an Instance of the App Component', () => {
        expect(app).toBeTruthy();
    });

    it('Should Render the Starting Score as 0', () => {
        fixture.detectChanges();

        const score = appCompiled.querySelector('button.score');

        expect(score.textContent).toContain('0');
    });
});
