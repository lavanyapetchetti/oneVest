const messages = {
    signInWithoutLogin: function () {
        this
            .waitForElementPresent('@noLogin')
            .click('@noLogin');

        return this;
    },

    selectionStartChat: function () {
        return this.waitForElementPresent('@startChat')
            .click('@startChat');
    },

    selectCreateGroup: function () {
        return this.waitForElementPresent('@createGroup')
            .click('@createGroup');
    },

    enterPhoneNumber: function (phoneNumber) {
        return this.waitForElementPresent('@inputNumber')
            .setValue('@inputNumber', phoneNumber);
    },

    selectTickMark: function () {
        return this.waitForElementPresent('@tickMark')
            .click('@tickMark');
    },

    enterGroupName: function (groupName) {
        return this.waitForElementPresent('@inputGroupName')
            .setValue('@inputGroupName', groupName);
    },

    selectNextButton: function () {
        return this.waitForElementPresent('@nextButton')
            .click('@nextButton');
    },

    selectDoneButton: function () {
        return this.waitForElementPresent('@doneButton')
            .click('@doneButton');
    },

    enterMessage: function (message) {
        return this.waitForElementVisible('@messageInput')
            .setValue('@messageInput', message)
    },

    selectSendButton: function () {
        return this.waitForElementVisible('@sendButton')
            .click('@sendButton');
    }
};

module.exports = {
    commands: [messages],
    elements: {
        noLogin: { selector: 'com.google.android.apps.messaging:id/secondary_action_button', locateStrategy: 'id' },
        startChat: { selector: 'Start chat', locateStrategy: 'accessibility id' },
        createGroup: { selector: '//android.widget.TextView[@text="Create group"]', locateStrategy: 'xpath' },
        inputNumber: { selector: "//android.widget.EditText", locateStrategy: "xpath" },
        tickMark: { selector: "//android.view.View[@content-desc='Unselected']//android.widget.Button", locateStrategy: "xpath" },
        inputGroupName: { selector: "//android.widget.EditText", locateStrategy: "xpath" },
        nextButton: { selector: "//android.widget.TextView[@text=\"Next\"]", locateStrategy: "xpath" },
        doneButton: { selector: "//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.widget.Button", locateStrategy: "xpath" },
        messageInput: { selector: "com.google.android.apps.messaging:id/compose_message_text", locateStrategy: "id" },
        sendButton: { selector: 'Send Message', locateStrategy: 'accessibility id'}
    }
};
