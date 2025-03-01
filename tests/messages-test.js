describe('Google Messages Android App Test', function () {
    const message = 'Test ' + Math.floor(Math.random() * 100); // Generate message
    after(function (app){
        app.end(); // Close session
    });

    it('Launch app without login', function (app) {
        app.page.messages()
            .signInWithoutLogin();
    });

    it('Select start chat button', function (app) {
        app.page.messages()
            .selectionStartChat();
    });

    it('Select create group button', function (app) {
        app.page.messages()
            .selectCreateGroup();
    });

    it('Enter phone number and select it', function (app) {
        app.page.messages()
            .enterPhoneNumber('12345678')
            .selectTickMark();
    });

    it('Enter another phone number and select it', function (app) {
        app.page.messages()
            .enterPhoneNumber('8976512')
            .selectTickMark()
            .selectNextButton();
    });

    it('Enter group name', function (app) {
        app.page.messages()
            .enterGroupName('Test')
            .selectDoneButton();
    });

    it('Enter message text', function (app) {
        app.page.messages()
            .enterMessage(message);
    });

    it('Send message', function (app) {
        app.page.messages()
            .selectSend(message);
    });
});
