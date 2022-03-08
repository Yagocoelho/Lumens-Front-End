import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('authorization', environment.token)
  }

  getAllCategoria(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>('http://projetolumens.herokuapp.com/categoria' , this.token)
  }

  getByIdCategoria(id: number): Observable<Categoria>{
    return this.http.get<Categoria>('http://projetolumens.herokuapp.com/categoria/${id}', this.token)
  }

  getByNomeCategoria(nome: string): Observable<Categoria[]>{
    return this.http.get<Categoria[]>('http://projetolumens.herokuapp.com/categoria/${nome}', this.token)
  }

  postCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>('http://projetolumens.herokuapp.com/categoria', categoria, this.token)
  }

}