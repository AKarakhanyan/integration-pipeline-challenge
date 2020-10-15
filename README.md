# integration-pipeline-challenge
Simple web app with a focus on continuous integration 

App takes a number through a query parameter (e.g. https://4ljxvkq0jh.execute-api.us-east-1.amazonaws.com/dev/landing-page?number=12), then outputs a few math solutions (is it prime, area of square and a random array of n length) based on that number.

Focus on this repo is CI/CD. It's currently setup that for every commit, on any branch, github will execute a webhook to Jenkins. 
Jenkins will then pull the branch down, run npm install, run the tests and then POST back to github the status of that commit. The Jenkins job uses `ci.Jenkinsfile` for this.

Once a PR is merged to master, Github will execute another webhook and Jenkins will start a deploy job. The deploy job will pull down the repo, run tests. If that passes, it will then use serverless framework to deploy resources to AWS. The Jenkins job uses `deploy.Jenkinsfile` for this. 

I've setup Jenkins on an EC2 instance on AWS (reachable via browser, but currently only I can access).

## To run serverless locally

**I am assuming you have node installed. This repo uses node v12 runtime.**

Install serverless globally

`npm install -g serverless`

Clone the repo and run install command within repo top level directory

`npm install`

You can run unit tests using npm. Test runner is Jest.

`npm run test`

You can run the lambda locally by running

`serverless offline start`

After starting, you'll be able to reach the lambda at http://localhost:3000/dev/landing-page. Pass a number query parameter to execute logic. e.g. http://localhost:3000/dev/landing-page?number=7.

Test change #2
