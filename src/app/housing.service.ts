import { Injectable } from '@angular/core';
import {HousingLocation} from "./housingLocation";

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:48222/locations';

  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }




}
