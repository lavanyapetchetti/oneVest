pipeline {
    agent any
    environment {
        AVD_NAME = 'nightwatch-android-11'
        ANDROID_HOME = '/Users/lavanyapetchetti/Library/Android/sdk'
    }
    tools {
        nodejs "Node_23"
    }
    stages {
        stage('Checkout Code') {
            steps {
                script {
                    try {
                        echo 'Cloning the repository from GitHub...'
                        // You can specify a branch name if required
                        git branch: 'main', url: 'https://github.com/lavanyapetchetti/oneVest.git'
                    } catch (Exception e) {
                        error "Git Clone failed: ${e.message}"
                    }
                }
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
                sleep 60 
                adb devices
                '''
            }
        }

        stage('Start Appium Server') {
            steps {
                sh 'appium --address 127.0.0.1 --port 4723 --log-level error > appium.log 2>&1 &'
                sleep 10
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx nightwatch --env app.android.emulator'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'reports/**/*.xml', fingerprint: true
            junit 'reports/**/*.xml'

            sh 'adb emu kill || true'  
            sh 'pkill -f appium || true'  
        }
    }
}
