import { Injectable } from '@angular/core';
import { ConfigHelper } from 'src/app/helpers/ConfigHelper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WithdrawService {

  private url: string = ConfigHelper.Url;

  constructor(private http: HttpClient) { }

  //Listar saques
  listWithdraw() {
    return this.http.get<any>(`${this.url}/withdrawals`)
  }

  //Detalhes saque
  viewWithdraw(id) {
    return this.http.get<any>(`${this.url}/withdrawal/${id}`)
  }

  //Aprovar Saque
  aprovedWithdraw(withdraw: string) {
    return this.http.post<any>(`${this.url}/confirmWithdrawal`, { withdraw: withdraw })
  }

  //Recusar Saque
  recusedWithdraw(withdraw: string, message: string) {
    return this.http.post<any>(`${this.url}/refuseWithdrawal`, { withdraw: withdraw, message: message })
  }
}
