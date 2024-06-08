## React Component Library 
1. LeetCode Submission Calendar 
2. GitHub Contribution Calendar
3. Combination (LeetCode + GitHub) Calendar

## Start the project based on 
[How to build a component library with React and TypeScript](https://blog.logrocket.com/how-to-build-component-library-react-typescript/#integrating-storybook-into-library)

## How to run the test
npm run storybook

## Other Links: 
1. https://docs.github.com/en/rest?apiVersion=2022-11-28
2. https://github.com/akerl/githubchart
3. https://rubygems.org/gems/githubchart/versions/3.3.1

4. https://github.com/akerl/githubstats
5. https://rubygems.org/gems/githubstats/versions/4.0.1


Maybe I need to create separate libraries for getting the contribution stats and creating calendar just like how above gems are implemented... Trying with Next.js...

6/7 - Take 4: it looks like if I'm using only the SSR I can fetch the data, but if I put any CSR it crashes with CORS error. Doing more experiment with this... 