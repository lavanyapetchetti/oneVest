/**
 * Page Object for Google Messages on Android Emulator.
 * This page object provides functions for logging in, starting chats, 
 * creating groups, sending messages, and verifying sent messages.
 */

const messages = {
    /**
     * Clicks on the 'No Login' button if present.
     * @returns {Object} The browser instance for chaining.
     */
    signInWithoutLogin: function () {
        return this
            .waitForElementPresent('@noLogin', 'Sign in without Login button is present')
            .click('@noLogin');
    },

    /**
     * Starts a new chat by clicking on the 'Start Chat' button.
     * @returns {Object} The browser instance for chaining.
     */
    selectionStartChat: function () {
        return this.waitForElementPresent('@startChat', 'Start Chat button is present')
            .click('@startChat');
    },

    /**
     * Selects the 'Create Group' option.
     * @returns {Object} The browser instance for chaining.
     */
    selectCreateGroup: function () {
        return this.waitForElementPresent('@createGroup', 'Create Group button is present')
            .click('@createGroup');
    },

    /**
     * Enters a phone number into the input field.
     * @param {string} phoneNumber - The recipient's phone number.
     * @returns {Object} The browser instance for chaining.
     */
    enterPhoneNumber: function (phoneNumber) {
        return this.waitForElementPresent('@inputNumber', 'Phone number input field is present')
            .setValue('@inputNumber', phoneNumber)
            .selectTickMark();
    },

    /**
     * Selects the tick mark button (usually to confirm a selection).
     * @returns {Object} The browser instance for chaining.
     */
    selectTickMark: function () {
        return this.waitForElementPresent('@tickMark', 'Tick mark button is present')
            .click('@tickMark');
    },

    /**
     * Enters a group name into the input field.
     * @param {string} groupName - The name of the group.
     * @returns {Object} The browser instance for chaining.
     */
    enterGroupName: function (groupName) {
        return this.waitForElementPresent('@inputGroupName', 'Group name input field is present')
            .setValue('@inputGroupName', groupName)
            .assert.textContains('@inputGroupName', groupName);
    },

    /**
     * Clicks on the 'Next' button to proceed.
     * @returns {Object} The browser instance for chaining.
     */
    selectNextButton: function () {
        return this.waitForElementPresent('@nextButton', 'Next button is present')
            .click('@nextButton');
    },

    /**
     * Clicks on the 'Done' button to finalize an action.
     * @returns {Object} The browser instance for chaining.
     */
    selectDoneButton: function () {
        return this.waitForElementPresent('@doneButton', 'Done button is present')
            .click('@doneButton');
    },

    /**
     * Enters a message into the message input field.
     * @param {string} message - The message to send.
     * @returns {Object} The browser instance for chaining.
     */
    enterMessage: function (message) {
        return this.waitForElementPresent('@messageInput', 'Message input field is present')
            .setValue('@messageInput', message)
            .assert.textContains('@messageInput', message);
    },

    /**
     * Clicks on the 'Send' button to send a message.
     * @returns {Object} The browser instance for chaining.
     */
    selectSend: function () {
        return this.waitForElementPresent('@sendButton', 'Send button is present')
            .click('@sendButton');
    },

    /**
     * Verifies that a message has been sent by checking the last message in the conversation.
     * @param {string} message - The expected message text.
     * @returns {Object} The browser instance for chaining.
     */
    verifyMessageSent: function (message) {
        return this.waitForElementPresent('@sendMessage', 'Message sent text is present')
            .assert.textContains('@sendMessage', message);
    }
};

module.exports = {
    commands: [messages],
    elements: {
        /**
         * No Login button selector.
         */
        noLogin: { selector: 'com.google.android.apps.messaging:id/secondary_action_button', locateStrategy: 'id' },

        /**
         * Start Chat button selector.
         */
        startChat: { selector: 'Start chat', locateStrategy: 'accessibility id' },

        /**
         * Create Group button selector.
         */
        createGroup: { selector: '//android.widget.TextView[@text="Create group"]', locateStrategy: 'xpath' },

        /**
         * Phone number input field selector.
         */
        inputNumber: { selector: '//android.widget.EditText', locateStrategy: 'xpath' },

        /**
         * Tick mark button selector.
         */
        tickMark: { selector: '//android.view.View[@content-desc="Unselected"]//android.widget.Button', locateStrategy: 'xpath' },

        /**
         * Group name input field selector.
         */
        inputGroupName: { selector: '//android.widget.EditText', locateStrategy: 'xpath' },

        /**
         * Next button selector.
         */
        nextButton: { selector: '//android.widget.TextView[@text="Next"]', locateStrategy: 'xpath' },

        /**
         * Done button selector.
         */
        doneButton: { selector: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.widget.Button', locateStrategy: 'xpath' },

        /**
         * Message input field selector.
         */
        messageInput: { selector: 'com.google.android.apps.messaging:id/compose_message_text', locateStrategy: 'id' },

        /**
         * Send button selector.
         */
        sendButton: { selector: 'Send Message', locateStrategy: 'accessibility id' },

        /**
         * Sent message text selector.
         */
        sendMessage: { selector: 'com.google.android.apps.messaging:id/message_text', locateStrategy: 'id' }
    }
};
