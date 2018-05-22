# End-to-end testing starter for Angular5, TypeScript, Cucumber and Protractor with headless Chrome

## What is it?
This project is a template for Continuous Integrated E2E tests based on Cucumber, Protractor, Angular5 and TypeScript. 
If you want to add e2e tests in your CI cycle, this project may help you. 
For example, you can run e2e after each dev-environment deployment on your build server, or run it each night via cron.   

## Quick start
- Build base docker image: `./build-base.sh`.
- See how it works with simple angular-docs tests: `./e2e/auto-test.sh`
- Try to create you own .feature file and appropriate step_definitions
- Copy `e2e` folder to your angular project or create separate test project
- Enjoy writing tests and fix it regular failing ;)
- Run same shell scripts on your build server

## Details
[Original repository](https://github.com/jciolek/docker-protractor-headless) contains universal docker image 
to launch protractor tests in docker environment. Also you can find there some theory and explanations. 

Base image `protractor-headless-e2e` can be built only once and saved in your repo, 
each auto-test run is quick as it only adds new tests to base image. Base image can be easily used in any angular project. 
An example of such project is folder `e2e`. 
Folder `e2e/features` contains [cucumber](https://github.com/cucumber/cucumber-js) structure for writing tests.

To avoid various integration problems following versions are used: 
* Chrome - 61
* Protractor - 5.1.2
* TypeScript - 2.5.3
* Node.js - 9.11.1
* Chromedriver - 2.32

Any parameters to pass into protractor can be exported in `auto-test.sh`. 
For example, if you want to test specific domain after deployment, you can export `HOST` env-variable to protractor.
But some cases require modification of docker image, i.e. if you want to run few smoke tests after deployment 
(and all tests each night) you have to override protractor.conf.js in child `e2e/Dockerfile`:
```Dockerfile
COPY protractor-smoke.conf.js /protractor/protractor.conf.js
``` 
