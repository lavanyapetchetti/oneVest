const messages = {
    // Clicks on the 'No Login' button if present
    signInWithoutLogin: function () {
        return this
            .waitForElementPresent('@noLogin', 'sign in with Login button is present')
            .click('@noLogin');
    },

    // Starts a new chat by clicking on the 'Start Chat' button
    selectionStartChat: function () {
        return this.waitForElementPresent('@startChat', 'Start Chat button is present')
            .click('@startChat');
    },

    // Selects the 'Create Group' option
    selectCreateGroup: function () {
        return this.waitForElementPresent('@createGroup', 'Create Group button is present')
            .click('@createGroup');
    },

    // Enters a phone number into the input field
    enterPhoneNumber: function (phoneNumber) {
        return this.waitForElementPresent('@inputNumber', 'Phone number input field is present')
            .setValue('@inputNumber', phoneNumber)
            .selectTickMark();
    },

    // Selects the tick mark button (usually to confirm a selection)
    selectTickMark: function () {
        return this.waitForElementPresent('@tickMark', 'Tick mark button is present')
            .click('@tickMark');
    },

    // Enters a group name into the input field
    enterGroupName: function (groupName) {
        return this.waitForElementPresent('@inputGroupName', 'Group name input field is present')
            .setValue('@inputGroupName', groupName)
            .assert.textContains('@inputGroupName', groupName);
    },

    // Clicks on the 'Next' button to proceed
    selectNextButton: function () {
        return this.waitForElementPresent('@nextButton', 'Next button is present')
            .click('@nextButton');
    },

    // Clicks on the 'Done' button to finalize an action
    selectDoneButton: function () {
        return this.waitForElementPresent('@doneButton', 'Done button is present')
            .click('@doneButton');
    },

    // Enters a message into the message input field
    enterMessage: function (message) {
        return this.waitForElementPresent('@messageInput', 'Message input field is present')
            .setValue('@messageInput', message)
            .assert.textContains('@messageInput', message);
    },

    // Clicks on the 'Send' button to send a message
    selectSend: function () {
        return this.waitForElementPresent('@sendButton', 'Send button is present')
            .click('@sendButton');
    },

    //Verifies that a message has been sent
    verifyMessageSent: function (message) {
        return this.waitForElementPresent('@sendMessage', 'Message sent text is present')
            .assert.textContains('@sendMessage', message);
    }
};

module.exports = {
    commands: [messages],
    elements: {
        noLogin: { selector: 'com.google.android.apps.messaging:id/secondary_action_button', locateStrategy: 'id' },
        startChat: { selector: 'Start chat', locateStrategy: 'accessibility id' },
        createGroup: { selector: '//android.widget.TextView[@text="Create group"]', locateStrategy: 'xpath' },
        inputNumber: { selector: '//android.widget.EditText', locateStrategy: 'xpath' },
        tickMark: { selector: '//android.view.View[@content-desc="Unselected"]//android.widget.Button', locateStrategy: 'xpath' },
        inputGroupName: { selector: '//android.widget.EditText', locateStrategy: 'xpath' },
        nextButton: { selector: '//android.widget.TextView[@text=\"Next\"]', locateStrategy: 'xpath' },
        doneButton: { selector: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.widget.Button', locateStrategy: 'xpath' },
        messageInput: { selector: 'com.google.android.apps.messaging:id/compose_message_text', locateStrategy: 'id' },
        sendButton: { selector: 'Send Message', locateStrategy: 'accessibility id'},
        sendMessage: { selector: 'com.google.android.apps.messaging:id/message_text', locateStrategy: 'id' }
    }
};
