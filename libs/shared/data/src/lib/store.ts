import { BehaviorSubject, Observable } from 'rxjs';

export class Store<StateType> {
  private readonly stateSubject$: BehaviorSubject<StateType>;

  public readonly state$: Observable<StateType>;

  constructor(
    initialState: StateType,
    private readonly needsDeepClone = false
  ) {
    this.stateSubject$ = new BehaviorSubject<StateType>(initialState);
    this.state$ = this.stateSubject$.asObservable();
  }

  getState() {
    const currentValue = this.stateSubject$.value;
    return this.getClone(currentValue);
  }
  setState(state: StateType) {
    const newState = this.getClone(state);
    this.stateSubject$.next(newState);
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
