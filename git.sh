#!/bin/sh

if [ -z "$GITHUB_URL" ]; then
  echo "Define GITHUB_URL in .env file"
  exit 0
fi

origin_url=`git config --get remote.origin.url`

if [ "$origin_url" != "$GITHUB_URL" ]; then
  if [ -z "$(git remote | grep origin)" ]; then
    git remote add origin $GITHUB_URL
  else
    git remote set-url origin $GITHUB_URL
  fi
fi

git checkout master
git fetch origin master
git reset --hard origin/master
git pull origin master --force