# roll

Minimal notes and tasks web app

## Motivation

I've got an old list styled todo list currently hosted at [todo.reaper.im](https://todo.reaper.im) and while it does the job, there's no classification, there's no way for me to find when I actually added the task. I prefer a backlog style list of tasks that I can also use as a set of notes or research that I did, while I'd like this to be a offline first app, the initial version is going to be a really simple portal to store notes and task lists.

## Dev

- Clone the repository
- Install the deps
- Make sure you have a PG server running and the latest migrations applies to the db
- Run the `dev` command

```sh
git clone git@github.com:barelyhuman/roll
cd roll
yarn
yarn knex migrate:latest
yarn dev
```

## Build 
```sh 
yarn build 
yarn start #To run the built version 
```

