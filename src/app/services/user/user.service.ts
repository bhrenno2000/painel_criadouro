import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';
import { ConfigHelper } from 'src/app/helpers/ConfigHelper';
import { LoadingService } from '../loading/loading.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HttpResultModel } from 'src/app/models/HttpResultModel';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})

export class UserService {

	private url: string = ConfigHelper.Url;

	constructor(private http: HttpClient) {

	}

	public balanceInfo() {
		return this.http.get<any>(`${this.url}/balanceInfo`);
	}

	public clients() {
		return this.http.get<any>(`${this.url}/clients`);
	}

	public client(token: string) {
		return this.http.get<any>(`${this.url}/client/${token}`);
	}

	//Listar Ticket
	public listTicket() {
		return this.http.get<any>(`${this.url}/clients`);
	}

	//Bloquear conta
	public blockedUser(client: string) {
		return this.http.put<any>(`${this.url}/client/block`, { client: client });
	}

	//Desbloquear conta
	public unlockeddUser(client: string) {
		return this.http.put<any>(`${this.url}/client/unlock`, { client: client });
	}

	//Pegar token para abrir painel admin
	loginAdmin(client) {
		return this.http.post<any>(`${this.url}/client/authenticate`, { client: client })
	}

	//Verificar username
	public verifyUsername(client: string, username: string) {
		return this.http.post<any>(`${this.url}/client/verifyUsername`, { client: client, username: username });
	}

	//Atualizar perfil usuario
	public updateProfile(token: string, username: string, name: string, phone: string, birth: string, email: string) {
		return this.http.put<any>(`${this.url}/client/updateProfile`, { token: token, username: username, name: name, phone: phone, birth: birth, email: email });
	}
}
