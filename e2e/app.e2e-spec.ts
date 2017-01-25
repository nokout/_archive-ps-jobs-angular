import { PsJobsPage } from './app.po';

describe('ps-jobs App', function() {
  let page: PsJobsPage;

  beforeEach(() => {
    page = new PsJobsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
