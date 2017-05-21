import { ImgurUploaderPage } from './app.po';

describe('imgur-uploader App', () => {
  let page: ImgurUploaderPage;

  beforeEach(() => {
    page = new ImgurUploaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
