describe('Google Page', () => {
    it('should have the right title', () => {
        browser.url('https://www.google.com');
        const title = browser.getTitle();
        expect(title).to.equal('Google');
    })
})

