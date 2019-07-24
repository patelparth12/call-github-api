import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class HttpService {
	constructor(private http: HttpClient) { }

	get(url: string) {
		return this.http.get(url);
	}
}