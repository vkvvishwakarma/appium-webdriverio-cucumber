# appium-webdriverio-cucumber
### How to run the demo test
##### please make sure that system has already node , appium, and android studio

```
Please make sure that few setting should have already been done in the system before running the project
 1. JAVA_HOME should be set
 1. ANDROID_HOME should be set
``` 
First clone the repository in seperate directory using following url
```
git@github.com:vkvvishwakarma/appium-webdriverio-cucumber.git
```
Please run 
```
npm install
```
##### to run the app test 
1. you will have to start the android studio to run the virtual device on plateform 13
2. put name of the device is "Pixel 6 Pro"
3. click on play button to run the device
4. once device starts goto the terminal 
##### once you start the virtual device then run the code on terminal
```
npx wdio
```
##### App execution recording available under "video-recording-excution" folder and reports are in allure-results folder after execution you can open the allure report by using following command

```
npx allure open
```