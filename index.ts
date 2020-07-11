import { Observable } from "rxjs";

const sequence$ = new Observable((subscriber) => {
  let count = 1;
  const interval = setInterval(() => {
    if(count % 5 === 0) {
      clearInterval(interval);
      subscriber.complete();
      return
    }
    subscriber.next(count++);
  }, 1000);
  return () => {
    console.log('unsubscribe');
    clearInterval(interval);
  }
});

const subscription = sequence$.subscribe((v) => {
  console.log(v);
}, ()=> {
  console.log('Error:', Error);
}, ()=> {
  console.log('Complete');
});

setInterval(() => {
  subscription.unsubscribe();
}, 3000);
