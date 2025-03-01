// This test is to verify send sms through android messages app
describe('Send SMS through android messages app', function () {
    // Generate a random message for testing
    const message = 'Send Test ' + Math.floor(Math.random() * 100);

    // Close the session after all tests
    after(function (app){
        app.end(); // Close session
    });

    // Test case to launch the app without logging in
    it('Launch app without login', function (app) {
        app.page.messages()
            .signInWithoutLogin();
    });

    // Test case to select the 'Start Chat' button
    it('Select start chat button', function (app) {
        app.page.messages()
            .selectionStartChat();
    });

    // Test case to select the 'Create Group' button
    it('Select create group button', function (app) {
        app.page.messages()
            .selectCreateGroup();
    });

    // Test case to enter a phone number and confirm selection
    it('Enter phone number and select it', function (app) {
        app.page.messages()
            .enterPhoneNumber('12345678');
    });

    // Test case to enter another phone number, confirm selection, and proceed
    it('Enter another phone number and select it', function (app) {
        app.page.messages()
            .enterPhoneNumber('8976512')
            .selectNextButton();
    });

    // Test case to enter a group name and confirm
    it('Enter group name', function (app) {
        app.page.messages()
            .enterGroupName('Test')
            .selectDoneButton();
    });

    // Test case to enter a message in the input field
    it('Enter message text', function (app) {
        app.page.messages()
            .enterMessage(message);
    });

    // Test case to send the entered message
    it('Send message', function (app) {
        app.page.messages()
            .selectSend(message);
    });
});
