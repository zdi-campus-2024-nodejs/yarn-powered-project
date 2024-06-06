import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, Observable, take, throwError} from "rxjs";
import {Status} from "@app/model/src/Status";

@Injectable({providedIn: 'root'})
export class StatusService {
    constructor(private readonly http: HttpClient) {}

    getStatus(): Observable<Status> {
        return this.http.get<Status>('http://localhost:3000/', {
            withCredentials: true, // send cookies via http request
        }).pipe(
            take(1),
            catchError((err) => throwError(err))
        )
    }
}