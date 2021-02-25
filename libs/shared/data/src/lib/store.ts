import { BehaviorSubject } from 'rxjs';

export class Store<StateType> {
  private readonly stateSubject$: BehaviorSubject<StateType>;

  constructor(
    initialState: StateType,
    private readonly needsDeepClone = false
  ) {
    this.stateSubject$ = new BehaviorSubject<StateType>(initialState);
  }

  setState(state: StateType) {
    const newState = this.getClone(state);
    this.stateSubject$.next(newState);
  }
  getState() {
    const currentValue = this.stateSubject$.value;
    return this.getClone(currentValue);
  }
  getState$() {
    return this.stateSubject$.asObservable();
  }

  private getClone(source: StateType): StateType {
    // ToDo: check if StateType is an array
    return this.needsDeepClone ? this.deepClone(source) : { ...source };
  }
  private deepClone(source: StateType): StateType {
    // ToDo: optimize deep clone
    const sourceJson = JSON.stringify(source);
    return JSON.parse(sourceJson);
  }
}
