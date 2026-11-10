export type TeamSide = 'TERRORIST' | 'CT';

export type RoundEndType =
  | 'Terrorists_Win'
  | 'CTs_Win'
  | 'Target_Bombed'
  | 'Bomb_Defused'
  | 'lost'
  | (string & {});

  export type RoundState =
    | 'freezePeriod'
    | 'freezetime'
    | 'live'
    | 'ended'
    | (string & {});

  export interface AdvancedStatsDto {
    kast: number;
    entryKills: number;
    entryDeaths: number;
    multiKillRounds: number;
    oneOnXWins: number;
    flashAssists: number;
    trades: number;
  }

  export interface PlayerScoreboardDto {
    steamId: string;
    dbId: number;
    name: string;
    nick: string;
    score: number;
    deaths: number;
    assists: number;
    headshots: number;
    damagePrRound: number;
    hp: number;
    alive: boolean;
    money: number;
    equipmentValue: number;
    kevlar: boolean;
    helmet: boolean;
    hasDefusekit: boolean;
    primaryWeapon?: string;
    advancedStats: AdvancedStatsDto;
    facts: string[];
  }

  export interface RoundHistoryItemDto {
    type: RoundEndType;
    roundOrdinal: number;
    survivingPlayers: number;
  }

  export interface TeamMatchHistoryDto {
    firstHalf: RoundHistoryItemDto[];
    secondHalf: RoundHistoryItemDto[];
  }

  export interface ScoreboardDto {
    TERRORIST: PlayerScoreboardDto[];
    CT: PlayerScoreboardDto[];
    ctMatchHistory: TeamMatchHistoryDto;
    terroristMatchHistory: TeamMatchHistoryDto;
    bombPlanted: boolean;
    mapName: string;
    terroristTeamName: string;
    ctTeamName: string;
    currentRound: number;
    currentRoundState: RoundState;
    counterTerroristScore: number;
    terroristScore: number;
    ctTeamScore: number;
    tTeamScore: number;
    ctTeamId: number;
    tTeamId: number;
    startingCt: number;
    startingT: number;
    regulationHalfLength: number;
    overtimeHalfLength: number;
    ctInitialEquipmentValue: number;
    tInitialEquipmentValue: number;
    frozen: boolean;
    live: boolean;
    lastKilledSide: TeamSide | string;
    roundTimeRemainingMS: number;
    ctTeamFacts: string[];
    tTeamFacts: string[];
    matchFacts: string[];
  }
