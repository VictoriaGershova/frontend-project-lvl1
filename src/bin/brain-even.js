#!/usr/bin/env node
import greetingNewPlayer, { welcome, showRules, runBrainEven } from '../index';

const gameName = 'brain-even';
welcome();
showRules(gameName);
greetingNewPlayer();
runBrainEven();
