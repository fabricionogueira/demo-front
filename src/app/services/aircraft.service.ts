import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Aircraft } from "../models/aircraft.model";

@Injectable({
    providedIn: 'root'
})
export class AircraftService {

    constructor(private http: HttpClient) {}

    listAllAircrafts() : Observable<Aircraft[]> {
        const URL = `${environment.AIRCRAFT_API_URL}/api/aircraft/all`;

        return this.http.get<Aircraft>(URL).pipe(
            map(this.aircraftFromResponse)
        );
    }

    private aircraftFromResponse(response: any) : Aircraft[] {
        return response.map ( (dados: any) => {
            return {
                id: dados.id,
                model: dados.model.en,
                range: dados.range
            };
        });
    }
}