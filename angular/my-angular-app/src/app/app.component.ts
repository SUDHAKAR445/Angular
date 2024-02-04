import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';

  async ngOnInit(): Promise<void> {
    // setTimeout(() => {
    //   console.log(10);
    //   setTimeout(() => {
    //     console.log(30);
    //     setTimeout(() => {
    //       console.log(40);
    //     }, 2000)
    //   }, 1000)
    // }, 3000)

    const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        //resolve('Success1')
        return Math.floor(Math.random() * 2) === 1 ? resolve('Success1') : reject('Failure1');
      }, 500)
    })
    const promise2 = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          //resolve('Success2');
          return Math.floor(Math.random() * 2) === 1 ? resolve('Success2') : reject('Failure2');
        }, 500)
      })
    }
    const promise3 = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          //resolve('Success3')
          return Math.floor(Math.random() * 2) === 1 ? resolve('Success3') : reject('Failure3');
        }, 500)
      })
    }


    // Promise.all([promise1, promise2(), promise3()])
    //   .then((message) => console.log(message))
    //   .catch((message) => console.log(message));

    // Promise.race([promise1, promise2(), promise3()])
    //   .then((message) => console.log(message))
    //   .catch((message) => console.log(message));

    // Promise.allSettled([promise1, promise2(), promise3()])
    //   .then((message) => console.log(message))
    //   .catch((message) => console.log(message));
    Promise.any([promise1, promise2(), promise3()])
      .then((message) => console.log(message))
      .catch((message) => console.log(message));

    // promise1
    //   .then((message) => {
    //     console.log(message);
    //     //console.log(promise2);
    //     return promise2();
    //   })
    //   .then((message) => {
    //     console.log(message);
    //     //console.log(promise2);
    //     return promise3();
    //   })
    //   .then((message) => {
    //     console.log(message);
    //   })
    //   .catch((message) => console.log(message));

    console.log(1);
    const total = 1000000000;
    // setInterval(() => {
    //   for (let index = 1; index <= total; index++) {
    //     if(index === total)
    //       console.log(index)
    //   }
    // }, 1);

    const promise4 = await new Promise((resolve) => {
      setInterval(() => {
        for (let index = 1; index <= total; index++) {
          if(index === total){
            resolve(index);
          }
        }
      }, 3000);
    })

    console.log(promise4);

    console.log(2);
  }
}
