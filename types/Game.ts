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

export type INBATeam = {
    id: number;
    name: string;
    logo: string;
    home: boolean; 
}

export type INBABoxScore = {
    id : number;
    position : string;
    player : string;
    minuite : number;
    fieldGoalsMade : number;
    fieldGoalsAttempted : number;
    fieldGoalsPercentage : number;
    threePointstMade : number;
    threePointsAttempted : number;
    threePointsPercentage : number;
    freeThrowsMade : number;
    freeThrowsAttempted : number;
    freeThrowsPercentage : number;
    offensiveRebounds : number;
    defensiveRebounds : number;
    totalRebounds : number;
    assists : number;
    steals : number;
    blocks : number;
    turnovers : number;
    personalFouls : number;
    points : number;
    plusMinus : number;

}
