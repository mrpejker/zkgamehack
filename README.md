# ZkNoid

ZkNoid store is a repository for the easiest way for building provable games on [Mina protocol](https://minaprotocol.com/).

🚀 Founded on hackathon with the idea to provide infrastructure for #ZkDevs and unify the provable gaming ecosystem!

ZkNoid store is a home for provable games. Modular framework is provided for developers bringing all the infrastructure they need to easily deploy games on Mina Protocol. After Zk Proofs integration to the game process, game is listed on the store becoming a part of the project ecosystem

Learn more about ZkNoid on [zknoid.io](https://www.zknoid.io/)
- [Deployed Games Store](https://app.zknoid.io/)
- [Docs](https://docs.zknoid.io/)
- [Blog](https://zknoid.medium.com/)

### Get started

If you want to create your own provable game, please check out the [hacker's guide](https://zknoid.medium.com/building-a-simple-zknoid-game-from-scratch-hackers-guide-0898bf30fdfb)

### Repository

Repository contains ZkNoid game platform turborepo. 
Monorepo 

### Setup
Project can be used localy. Here are the commands for set-up

```bash
git clone https://github.com/ZkNoid/store
cd zknoid
 
# ensures you have the right node js version
# !important! Without this step the app may not work!
# If nvm is not installed please install it. 
# `nvm install` may be needed to install correct node version
nvm use

pnpm install

pnpm env:inmemory dev
```

### Implementing your own game
ZkNoid is a modular platform that makes it easy to implement you own game using platform infrastructure. 
To build a game you need to create a game folder inside [packages/games](https://github.com/ZkNoid/store/tree/main/packages/games).
Define game config and implement front-end and contracts part in [packages/chain/src/games](https://github.com/ZkNoid/store/blob/main/packages/chain/src/games)

- Read more in [hacker's guide](https://zknoid.medium.com/zknoid-hackers-guide-v2-try-yourself-the-updated-store-benefits-c736ca1c76e8)
- Learn more about SDK [here](https://docs.zknoid.io/docs/sdk)
- Learn more about your game implementation [here](https://docs.zknoid.io/docs/game_building)


### Interesting places
- Arkanoid game verification – [arkanoid/GameContexts.ts](https://github.com/ZkNoid/store/blob/main/packages/chain/src/games/arkanoid/GameContext.ts)
- Competitions and leaderboard system SDK module [engine/GameHub.ts](https://github.com/ZkNoid/store/blob/main/packages/chain/src/engine/GameHub.ts)
- Matchmaking system – [engine/MatchMaker.ts](https://github.com/ZkNoid/store/blob/main/packages/chain/src/engine/MatchMaker.ts)
- Randzu logic implementation – [packages/chain/src/games/randzu/RandzuLogic.ts](https://github.com/ZkNoid/store/blob/main/packages/chain/src/games/randzu/RandzuLogic.ts)
- Games frontend implementation [apps/web/games](https://github.com/ZkNoid/store/tree/main/apps/web/games)
- Games contracts implementation [packages/chain/src/](https://github.com/ZkNoid/store/blob/main/packages/chain/src/)

