export interface IService {
  id: number;
  name: string;
}

export interface IRole {
  id: number;
  name: string;
}

export interface IUserEntity {
  id: number;
  name: string;
  age: number;
  role: IRole;
  service: IService;
}

export interface IProject {
  id: number;
  name: string;
}

export interface ITeamEntity {
  id: number;
  users: IUserEntity[];
  project: IProject;
}


