import { Root } from "postcss";
import { Odds } from "./Odds"

export type INBAGame = {
    id: number;
    homeTeam : string;
    homeTeamLogo : string;
    awayTeam : string;
    awayTeamLogo : string;
    schedule: Date;
    odds?: Odds;
}

export type INBATeam = {
    id: number;
    name: string;
    logo: string;
    home: boolean; 
}
