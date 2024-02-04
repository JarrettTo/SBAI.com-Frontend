
export type INBAGame = {
    id: number;
    homeTeam : string;
    homeTeamLogo : string;
    awayTeam : string;
    awayTeamLogo : string;
    schedule: Date;
    
}

export type INBATeam = {
    id: number;
    name: string;
    logo: string;
    home: boolean; 
}
