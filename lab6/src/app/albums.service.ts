import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from './album';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  ROOT_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.ROOT_URL}/albums`)
  }

  deleteAlbum(id: number): Observable<any> {
    return this.client.delete<any>(`${this.ROOT_URL}/albums/${id}`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.ROOT_URL}/albums/${id}`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.client.put<Album>(`${this.ROOT_URL}/albums/${album.id}`, album);
  }

  getPhotos(id: number): Observable<Photo[]> {
    return this.client.get<Photo[]>(`${this.ROOT_URL}/albums/${id}/photos`);
  }

  addAlbum(album: Album): Observable<Album> {
    return this.client.post<Album>(`${this.ROOT_URL}/albums`, album);
  }
}