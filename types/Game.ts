import { Root } from "postcss";
import { Odds } from "./Odds"
import { Predictions } from "./Predictions";

export type INBAGame = {
    id: number;
    homeTeam : string;
    homeTeamLogo : string;
    awayTeam : string;
    awayTeamLogo : string;
    schedule: Date;
    odds?: Odds;
    predictions?: Predictions;
}

export type INBATeam = {
    id: number;
    name: string;
    logo: string;
    home: boolean; 
}
