import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

function combineMap<S extends object>(
  source: { readonly [K in keyof S]: Observable<S[K]> }
): Observable<S> {
  const entries = Object.entries<Observable<S[keyof S]>>(source);
  const keys = entries.map(([key]) => key);
  const observables = entries.map(([, obs]) => obs);

  return combineLatest(observables).pipe(
    map(values => {
      return values.reduce(
        (acc, cur, i) => ({ ...acc, [keys[i]]: cur }),
        {} as S
      );
    })
  );
}

export abstract class Facade<QueryState extends object> {
  public get state$(): Observable<QueryState> {
    return combineMap(this.configureStateQuery());
  }

  protected abstract configureStateQuery(): {
    [K in keyof QueryState]: Observable<QueryState[K]>;
  };
}
