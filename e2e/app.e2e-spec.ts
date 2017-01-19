import { SkarebyggtjanstPage } from './app.po';

describe('skarebyggtjanst App', function() {
  let page: SkarebyggtjanstPage;

  beforeEach(() => {
    page = new SkarebyggtjanstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
