# Mobile Automation QA - Login Functionality
This project automates the login functionality of a mobile application using Appium and WebdriverIO, following the Page Object Model (POM) design pattern. The test cases are written in Cucumber BDD, covering both positive and negative scenarios.

**Prerequisites** 
1. Node.js (v14 or above)
2. Java (JDK 8 or above)
3. Appium Server
4. Android SDK
5. ADB (Android Debug Bridge)
6. An Android Emulator or a physical device
7. WebdriverIO CLI

**Steps to Execute the Code**:
- Clone the repository to your local machine.

- Install all the required packages:

  - Navigate to the project root where 'package.json' is located.
  - Run 'npm i' to install dependencies.
  - Update desired capabilities in 'wdio.conf.js' to match the settings of your system.

- Execute scenarios added using the command 'npx wdio --spec .\features\AppLogin.feature.'

- View the generated results after execution using the command allure open.
