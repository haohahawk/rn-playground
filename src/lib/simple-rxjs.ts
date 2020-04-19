export class BehaviorSubject<T> implements Subject<T> {
  private observers: Observer<T>[] = [];
  private isComplete: boolean = false;

  constructor(private record: T) {}

  getValue() {
    return this.record;
  }

  next(d: T) {
    this.record = d;

    if (this.isComplete || !this.observers.length) {
      return;
    }

    this.observers.forEach((ob) => {
      if (ob.next) {
        ob.next(d);
      }
    });
  }

  complete() {
    this.isComplete = true;
    this.observers = [];
  }

  asObservable() {
    const self = this;
    const observable: Observable<T> = {
      subscribe(observer) {
        return self.subscribe(observer);
      },
    };
    return observable;
  }

  subscribe(observer: Observer<T>) {
    const self = this;
    const subscrption: Subscrption = {
      unsubscribe() {
        self.removeObserver(observer);
      },
    };
    self.addObserver(observer);

    if (observer.next) {
      observer.next(this.record);
    }
    return subscrption;
  }

  private addObserver(observer: Observer<T>) {
    this.observers = this.observers.concat(observer);
  }

  private removeObserver(observer: Observer<T>) {
    this.observers = this.observers.filter((ob) => ob !== observer);
  }
}

export interface Subject<T> extends Observable<T> {
  getValue(): T;
  next(d: T): void;
  complete(): void;
  asObservable(): Observable<T>;
}

export interface Observable<T> {
  subscribe(observer: Observer<T>): Subscrption;
}

export interface Observer<T> {
  next?(d: T): void;
  error?(e: any): void;
  complete?(): void;
}

export interface Subscrption {
  unsubscribe(): void;
}
