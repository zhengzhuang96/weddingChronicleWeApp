/*
 * @Author: {zhengzhuang}
 * @Date: 2023-11-01 23:28:38
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2023-12-10 19:38:23
 * @Description:
 */
import type { UserConfigExport } from "@tarojs/cli";

export default {
  env: {
    NODE_ENV: '"development"',
  },
  logger: {
    quiet: false,
    stats: true,
  },
  mini: {},
  h5: {},
  plugins: [
    [
      "taro-plugin-sync-in-wsl",
      {
        weapp: [
          {
            sourcePath: "dist",
            outputPath: "/mnt/e/github/weddingChronicleWeApp",
          },
          // {
          //   sourcePath: "cloud",
          //   outputPath: "/mnt/e/github/weddingChronicleWeApp/cloud",
          // },
        ],
      },
    ],
  ],
} satisfies UserConfigExport;
