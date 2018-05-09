import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SalleService {

    constructor(
        private http: HttpClient
    ) { }

    rechercheSalle(data) {
        // return this.http.post('http://localhost:8000/webapi/lists/', data);
        return this.http.get('http://localhost:8000/webapi/lists/');
    }

    addReservation(data) {
        return this.http.post('http://localhost:8000/webapi/postr/', data);
    }

    getReservations() {
        return this.http.get('http://localhost:8000/webapi/listr/');
    }

    deleteReservation(id) {
        return this.http.delete('http://localhost:8000/webapi/reservation/' + id + "/");
    }

}
