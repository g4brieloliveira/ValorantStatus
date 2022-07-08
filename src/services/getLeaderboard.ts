import axios from "axios";
import { RIOT_TOKEN } from "@env";

const baseUrl = "https://br.api.riotgames.com/val";

export const getLeaderboard = async (actId: string) => {
  const data = await axios(
    `${baseUrl}/ranked/v1/leaderboards/by-act/${actId}?size=200&startIndex=0`,
    {
      method: "GET",
      headers: {
        "X-Riot-Token": RIOT_TOKEN,
      },
    }
  )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
};
