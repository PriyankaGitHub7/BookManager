import { BookManagerPage } from './app.po';

describe('book-manager App', () => {
  let page: BookManagerPage;

  beforeEach(() => {
    page = new BookManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
