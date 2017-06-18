import { ArgumentMiningPage } from './app.po';

describe('argument-mining App', () => {
  let page: ArgumentMiningPage;

  beforeEach(() => {
    page = new ArgumentMiningPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
