import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';

export class Store<StateType> {
  private readonly state$: BehaviorSubject<StateType>;

  constructor(
    private readonly initialState: StateType,
    private readonly needsDeepClone = false,
    private readonly localStorageKey = ''
  ) {
    this.state$ = new BehaviorSubject<StateType>(this.load());
    this.state$.pipe(tap(() => this.save())).subscribe();
  }

  setState(state: StateType) {
    const newState = this.getClone(state);
    this.state$.next(newState);
  }
  getState() {
    const currentValue = this.state$.value;
    return this.getClone(currentValue);
  }
  getState$() {
    return this.state$.asObservable();
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
  load() {
    if (this.localStorageKey === '') return this.initialState;
    const state = localStorage.getItem(this.localStorageKey);
    return state ? JSON.parse(state) : this.initialState;
  }
  save() {
    console.log('SAVE');
    if (this.localStorageKey === '') return;
    const state = JSON.stringify(this.state$.value);
    localStorage.setItem(this.localStorageKey, state);
  }

  select$(projection: (arg0: StateType) => any) {
    return this.getState$().pipe(
      map((state) => projection(state)),
      distinctUntilChanged()
    );
  }
}
