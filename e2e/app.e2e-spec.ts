import { Ng2RecipesPage } from './app.po';

describe('ng2-recipes App', () => {
  let page: Ng2RecipesPage;

  beforeEach(() => {
    page = new Ng2RecipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
