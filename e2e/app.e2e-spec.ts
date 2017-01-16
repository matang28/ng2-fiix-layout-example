import { Ng2FiixLayoutExamplePage } from './app.po';

describe('ng2-fiix-layout-example App', function() {
  let page: Ng2FiixLayoutExamplePage;

  beforeEach(() => {
    page = new Ng2FiixLayoutExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
