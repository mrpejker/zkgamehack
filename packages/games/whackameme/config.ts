import { createZkNoidGameConfig } from "@zknoid/sdk/lib/createConfig";
import { ZkNoidGameType } from "@zknoid/sdk/lib/platform/game_types";
import {
  ZkNoidGameFeature,
  ZkNoidGameGenre,
} from "@zknoid/sdk/lib/platform/game_tags";
import { WhackMeme } from "./whackMeme.tsx";


export const whackMemeConfig = createZkNoidGameConfig({
  id: "whack-a-meme",
  type: ZkNoidGameType.SinglePlayer,
  name: "Whack a Meme Game",
  description: "Whack the memes as they appear before they disappear!",
  image: "/image/games/soon.svg",
  genre: ZkNoidGameGenre.Arcade,
  features: [ZkNoidGameFeature.SinglePlayer],
  isReleased: false,
  releaseDate: new Date(2025, 1, 1),
  popularity: 0,
  author: "ZkMeme Team",
  rules: "Click on the memes as soon as they appear to score points. Be quick and presize before they disappear!",
  runtimeModules: {},
  page: WhackMeme,
});
