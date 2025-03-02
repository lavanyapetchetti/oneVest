module.exports = {
  src_folders: ['tests'],

  page_objects_path: ['pages'],

  globals_path: '',

  webdriver: {},

  test_workers: {
    enabled: true
  },

  test_settings: {
    default: {
      disable_error_log: false,
      reporter: 'nightwatch-html-reporter',
      // launch_url: 'http://localhost',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'chrome'
      },

      webdriver: {
        start_process: true,
        server_path: ''
      },

    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless=new'
          ]
        }
      },

      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // --verbose
        ]
      }
    },
    app: {
      selenium: {
        start_process: true,
        use_appium: true,
        host: 'localhost',
        port: 4723,
        cli_args: [
          // automatically download the required chromedriver
          // '--allow-insecure=chromedriver_autodownload'
        ],
        // Remove below line if using Appium v1
        default_path_prefix: '',
        // Uncomment below line if Appium is installed globally
        // server_path: 'appium'
      },
      webdriver: {
        timeout_options: {
          timeout: 150000,
          retry_attempts: 3
        },
        keep_alive: false,
        start_process: false
      }
    },

    'app.android.emulator': {
      extends: 'app',
      'desiredCapabilities': {
        browserName: null,
        platformName: 'android',
        'appium:options': {
          automationName: 'UiAutomator2',
          avd: 'nightwatch-android-11',
          appPackage: 'com.google.android.apps.messaging',
          appActivity: 'com.google.android.apps.messaging.ui.ConversationListActivity',
          appWaitActivity: 'com.google.android.apps.messaging.ui.ConversationListActivity',
          newCommandTimeout: 0
        }
      }
    },
  }
}
