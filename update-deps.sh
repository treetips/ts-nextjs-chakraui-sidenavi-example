#!/bin/sh
npx ncu -u -x jest,ts-jest,react-router,react-router-dom,framer-motion
rm -rf ./package-lock.json yarn.lock ./node_modules && yarn
