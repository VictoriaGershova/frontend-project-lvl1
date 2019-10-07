#!/usr/bin/env node
import runBrainGame from '../index';

const ansYes = 'yes';
const ansNo = 'no';
const rule = `Answer ${ansYes} if the number is even, otherwise answer ${ansNo}.`;

const getQuestion = () => Math.round(Math.random() * 100);

const getAnswer = (num) => (Number(num) % 2 === 0 ? ansYes : ansNo);

runBrainGame(getQuestion, getAnswer, rule);
