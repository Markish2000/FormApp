// Angular
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Injectable } from '@angular/core';

// Libraries
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidators implements AsyncValidator {
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    const httpCallObservable = new Observable<ValidationErrors | null>(
      (subscriber) => {
        if (email === 'marcosparella2000@gmail.com') {
          subscriber.next({ emailTaken: true });
          subscriber.complete();
        }
        subscriber.next(null);
        subscriber.complete();
      }
    );

    return httpCallObservable;
  }
}
