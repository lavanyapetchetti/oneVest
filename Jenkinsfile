pipeline {
    agent any
    environment {
        AVD_NAME = 'Medium_Phone_API_35'
        ANDROID_HOME = '/Users/lavanyapetchetti/Library/Android/sdk'
    }
    tools {
        nodejs "Node_23"
    }
    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/lavanyapetchetti/oneVest.git'
            }
        }

        stage('Setup Node.js & Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Start Android Emulator') {
            steps {
                sh '''
                nohup $ANDROID_HOME/emulator/emulator -avd $AVD_NAME -no-audio -no-window -no-boot-anim &
                sleep 60  # Wait for emulator to fully start
                adb devices  # Verify emulator is running
                '''
            }
        }

        stage('Start Appium Server') {
            steps {
                sh 'appium --address 127.0.0.1 --port 4723 --log-level error > appium.log 2>&1 &'
                sleep 10  # Wait for Appium to start
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx nightwatch --env app.android.emulator'
            }
        }

        stage('Archive Test Results') {
            post {
                always {
                    archiveArtifacts artifacts: 'reports/**/*.xml', fingerprint: true
                    junit 'reports/**/*.xml'
                }
            }
        }
    }

    post {
        always {
            sh 'adb emu kill || true'  // Stop emulator if running
            sh 'pkill -f appium || true'  // Stop Appium
        }
    }
}