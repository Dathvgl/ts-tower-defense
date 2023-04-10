export interface Pos {
  x: number;
  y: number;
}

export interface Player {
  heart: number;
  gold: number;
  wave: number;
  played: boolean;
  frame: number;
  animateId?: number;
}

export interface Mouse extends Pos {
  hold?: TowerSpec;
  enemy: boolean;
  turret: number;
  turretFeat: boolean;
}

export interface MapPath {
  state: boolean;
  edges: number[];
}

export interface GroundPath {
  alt: boolean;
  pos: DetailPath[];
}

export interface DetailPath extends Pos {
  index: number;
}

export interface KindPath {
  air: Pos;
  ground: GroundPath;
}
