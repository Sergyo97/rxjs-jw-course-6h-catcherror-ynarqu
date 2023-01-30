import { EMPTY, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const failingHttpRequest$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.error(new Error('Time out'));
  }, 3000);
});

console.log('App started');

failingHttpRequest$
  .pipe(
    //catchError(error => of('Fallback value'))
    catchError((error) => EMPTY)
  )
  .subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Completed'),
  });
