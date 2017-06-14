import { WfdPage } from './app.po';

describe('wfd App', () => {
  let page: WfdPage;

  beforeEach(() => {
    page = new WfdPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
