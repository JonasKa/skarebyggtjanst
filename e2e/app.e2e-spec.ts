import { SkarebyggtjanstPage } from './app.po';

describe('skarebyggtjanst App', () => {
  let page: SkarebyggtjanstPage;

  beforeEach(() => {
    page = new SkarebyggtjanstPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
