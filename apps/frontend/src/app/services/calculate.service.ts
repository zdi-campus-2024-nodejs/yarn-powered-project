import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, Observable, of, take, throwError} from "rxjs";
// import {UtilityService} from "@app/utility/src/utility.service";

@Injectable({providedIn: 'root'})
export class CalculateService {
    constructor(private readonly http: HttpClient) {}

    getCalculate(x: number, y: number): Observable<number> {
        // return of(new UtilityService().calculate(x, y));
        return this.http.get<number>('http://localhost:3000/calculate', {
            params: {
              x, y
            },
            withCredentials: true, // send cookies via http request
        }).pipe(
            take(1),
            catchError((err) => throwError(err))
        )
    }
}