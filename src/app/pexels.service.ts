import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PexelsService {

  constructor(private http: HttpClient) { }

  getPicture(prompt: string){
    return this.http.get<any>('https://api.pexels.com/v1/search?query='+prompt,
    {
      headers: {'Authorization':'lhXzQUABhw8g92hXexzgpMDrdqwR8nZjQC3JLiBnItV5MruXuFdCHisN'}
    });
  }
}
