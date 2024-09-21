import { UInt64 } from '@proto-kit/library';
import { ArkanoidGameHub } from './games/arkanoid/ArkanoidGameHub';
import { RandzuLogic } from './games/randzu/RandzuLogic';
import { ThimblerigLogic } from './games/thimblerig/ThimblerigLogic';
import { Balances } from './framework';
import { ModulesConfig } from '@proto-kit/common';
import { CheckersLogic } from './games/checkers';
import { GuessGame } from './games/number_guessing';

const modules = {
  ArkanoidGameHub,
  ThimblerigLogic,
  Balances,
  RandzuLogic,
  CheckersLogic,
  GuessGame,
};

const config: ModulesConfig<typeof modules> = {
  ArkanoidGameHub: {},
  ThimblerigLogic: {},
  Balances: {
    totalSupply: UInt64.from(10000),
  },
  RandzuLogic: {},
  CheckersLogic: {},
  GuessGame: {},
};

export default {
  modules,
  config,
};
