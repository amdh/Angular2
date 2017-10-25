import { I3V1Page } from './app.po';

describe('i3-v1 App', function() {
  let page: I3V1Page;

  beforeEach(() => {
    page = new I3V1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
