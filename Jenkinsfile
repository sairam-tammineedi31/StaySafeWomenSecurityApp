pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/sairam-tammineedi31/StaySafeWomenSecurityApp.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('staysafeapp')
                }
            }
        }
        stage('Run Container') {
            steps {
                script {
                    docker.image('staysafeapp').run('-d -p 8080:80')
                }
            }
        }
    }
}
