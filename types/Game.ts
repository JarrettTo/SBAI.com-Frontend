import { Root } from "postcss";
import { Odds } from "./Odds"
import { Predictions } from "./Predictions";

export type INBAGame = {
    id: number;
    homeTeam : string;

    awayTeam : string;

    schedule: Date;
    odds?: Odds;
    predictions?: Predictions;
}
export type IMLBGame = {
    id: number;
    homeTeam : string;

    awayTeam : string;
    series: number;
    seriesGameNumber: number;

    schedule: Date;
    innings: number;
    doubleHeader: boolean;
    tiebreaker: boolean;
    odds?: Odds;
    predictions?: Predictions;
}

export type INBATeam = {
    id: number;
    name: string;
    logo: string;
    home: boolean; 
}
