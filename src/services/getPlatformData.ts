import axios from "axios";
import { RIOT_TOKEN } from "@env";

const baseUrl = "https://br.api.riotgames.com/val";

export const getPlatformData = async () => {
  const data = await axios(`${baseUrl}/status/v1/platform-data`, {
    method: "GET",
    headers: {
      "X-Riot-Token": RIOT_TOKEN,
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
};
