import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { selectAllProjects, selectCurrentProject } from './..';
import * as ProjectsActions from './projects.actions';
import { ProjectsState } from './projects.reducer';
import { Observable } from 'rxjs';
import { Project } from '../../projects/project.model';
@Injectable({
  providedIn: 'root'
})
export class ProjectsFacade {
  projects$: Observable<Project[]>;
  currentProject$: Observable<Project>;
  // currentProject$ = this.store.pipe(select(selectCurrentProject));
  // allProjects$ = this.store.pipe(select(selectAllProjects));
  // currentProject$ = this.store.pipe(select(selectCurrentProject));

  constructor(
    private store: Store<ProjectsState>
  ) {
    this.projects$ = store.pipe(select(selectAllProjects));
    this.currentProject$ = store.pipe(select(selectCurrentProject));
  }

  getProjects() {
    this.store.dispatch(new ProjectsActions.LoadProjects());
  }

  selectProject(projectId) {
    this.store.dispatch(new ProjectsActions.SelectProject(projectId));
  }

  loadAll() {
    this.store.dispatch(new ProjectsActions.LoadProjects());
  }

  createProject(project) {
    this.store.dispatch(new ProjectsActions.AddProject(project));
  }

  updateProject(project) {
    this.store.dispatch(new ProjectsActions.UpdateProject(project));
  }

  deleteProject(project) {
    this.store.dispatch(new ProjectsActions.DeleteProject(project));
  }
}
