import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {TrainingService} from "../training.service";
import {Exercise} from "../exercise.model";
import {UIService} from "../../shared/ui.service";
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  exercises: Exercise[];
  private exerciseSubsrcription: Subscription;
  isLoading$: Observable<boolean>;

  constructor(
    private trainingService: TrainingService,
    private uiService: UIService,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading)
    this.exerciseSubsrcription = this.trainingService.exercisesChanged.subscribe(
      exercises => {
        this.exercises = exercises
      }
    );
    this.fetchExercises();
  }

  fetchExercises() {
    this.trainingService.fetchAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

  ngOnDestroy(): void {
    if (this.exerciseSubsrcription) {
      this.exerciseSubsrcription.unsubscribe();
    }
  }
}
