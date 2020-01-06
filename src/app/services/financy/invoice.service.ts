import { Injectable } from '@angular/core';
import { ConfigHelper } from 'src/app/helpers/ConfigHelper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private url: string = ConfigHelper.Url;

  constructor(private http: HttpClient) { }

  //Listar faturas
  listInvoice() {
    return this.http.get<any>(`${this.url}/invoices`)
  }

  //Detalhes faturas
  detailsInvoice(id) {
    return this.http.get<any>(`${this.url}/invoice/${id}`)
  }

  //Confirmar faturas
  confirmedInvoice(invoice: string) {
    return this.http.post<any>(`${this.url}/payInvoice`, { invoice: invoice })
  }
}
