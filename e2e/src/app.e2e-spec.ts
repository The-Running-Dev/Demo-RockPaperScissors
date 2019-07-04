import { browser, by, element, logging } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    getTitleText() {
        return element(by.css('.mat-toolbar')).getText() as Promise<string>;
    }

    getScoreText() {
        return element.all(by.css('button.score')).getText() as Promise<string>;
    }
}

describe('Rock Paper Scissors Lizard Spock App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('Should Display Welcome Message', () => {
        page.navigateTo();

        expect(page.getTitleText()).toEqual('Welcome to Rock Paper Scissors Lizard Spock!');
    });

    it('Should Display the Initial Score as 0 0', () => {
        page.navigateTo();

        expect(page.getScoreText()).toEqual(['0', '0']);
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);

        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE
        } as logging.Entry));
    });
});
