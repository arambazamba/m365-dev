import { Observable, from } from "rxjs";
import { Skill } from "./model";

export class httpClient {
  getObservable<T>(url: string): Observable<T> {
    let p = new Promise<T>((resolve, reject) => {
      fetch(url)
        .then(data => {
          resolve(data.json());
        })
        .catch(err => {
          console.log("error calling service");
          console.log(err);
          return reject(err);
        });
    });
    return from(p);
  }
}
