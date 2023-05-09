import { Action } from "@ngrx/store";
import { Project } from "../../projects/project.model";

export enum ProjectsActionTypes {
  ProjectSelected = "[projects] Selected",
  CreateProject = '[Projects] Create Data',
  UpdateProject = '[Projects] Update Data',
  DeleteProject = '[Projects] Delete Data'
}

export class SelectProject implements Action {
  readonly type = ProjectsActionTypes.ProjectSelected;
  constructor(private payload: Project){}
}

export class CreateProject implements Action {
  readonly type = ProjectsActionTypes.CreateProject;
  constructor(private payload: Project){}
}

export class UpdateProject implements Action {
  readonly type = ProjectsActionTypes.UpdateProject;
  constructor(private payload: Project) {}
}

export class DeleteProject implements Action {
  readonly type = ProjectsActionTypes.DeleteProject;
  constructor(private payload: Project){}
}

export type ProjectsAction = SelectProject | CreateProject | UpdateProject | DeleteProject
