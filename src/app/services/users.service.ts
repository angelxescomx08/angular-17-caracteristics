import { Injectable, computed, inject, signal } from '@angular/core';
import { User, UsersResponse } from '../interfaces/req-response.interface';
import { HttpClient } from '@angular/common/http';

type State = {
  users: User[];
  loading: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);
  #state = signal<State>({
    loading: true,
    users: [],
  });
  public loading = computed(() => this.#state().loading);
  public users = computed(() => this.#state().users);
  constructor() {
    const url = new URL('https://reqres.in/api/users');
    this.http.get<UsersResponse>(url.toString()).subscribe((res) => {
      this.#state.set({
        loading: false,
        users: res.data,
      });
    });
  }
}
