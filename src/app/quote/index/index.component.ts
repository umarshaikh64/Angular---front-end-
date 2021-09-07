import { Component, OnInit, ViewChild } from '@angular/core';

import { QuoteService } from '../quote.service';
import { Quote } from '../quote';
import { LazyLoadEvent } from 'primeng/api';
import { Paginator } from 'primeng/paginator';
import { Column } from '../../soci/column';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  datasource: Quote[] = [];
  quotes: Quote[] = [];
  pages: [];
  columns: Column[] = [
    {header:'Created Date', field: 'created_at', type: 'date'},
    {header:'Quotation ID', field: 'quote_id', type: 'string'},
    {header:'Company Name', field: 'company', type: 'string'},
    {header:'Validity Date', field: 'validity_date', type: 'date'},
    {header:'Reason', field: 'remarks', type: 'string'},
    {header:'Status', field: 'status', type: 'string'},
    {header:'Amount (MYR)', field: 'amount', type: 'numeric'},
  ];
  pageItems: number = 10;
  totalRecords:number;
  search_text: string = '';
  loading: boolean;
  
  constructor(public quoteService: QuoteService) { }
  
  ngOnInit(): void {
    this.quoteService.getAll(this.pageItems,this.search_text).subscribe(data=>{
      this.datasource = data['data'];
      this.quotes = this.datasource['data'];
      this.pages = data['data']['links'];
      this.totalRecords = this.datasource['total'];
    })  
    this.loading = false;
  }
  
  deleteQuote(id){
    this.quoteService.delete(id).subscribe(res => {
         this.quotes = this.quotes.filter(item => item.id !== id);
         console.log('Quote deleted successfully!');
    })
  }

  getAll(){
    this.quoteService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      this.quotes = data['data']['data'];
      this.pages = data['data']['links'];
      this.totalRecords = data['data']['total'];
    })  
  }

  onClick(url){
    this.quoteService.getPage(url,this.pageItems,this.search_text).subscribe((data)=>{
      this.quotes = data['data']['data'];
      this.pages = data['data']['links'];
    })  
  }

  // loadQuotations(event: LazyLoadEvent) {
  //   // this.loading = true;
  //   console.log(event.rows)
  //   setTimeout(() => {
  //     this.quoteService.getAll(this.pageItems,this.search_text).subscribe(data=>{
  //       this.datasource = data['data'];
        
  //       this.quotes = data['data']['total'];
  //       console.log(this.totalRecords);
  //       // this.quotes = this.datasource.slice(event.first, (event.first + event.rows));
  //       this.loading = false;
  //     })  
  //   }, 1000);
  // }

  test(event){
    console.log(event.filters)
  }

  paginate(event){
    console.log(event);
    this.pageItems = event.rows;
    let url = "http://idsmed-sales-funnel-api.test/api/quote?page="+(parseInt(event.page) + 1);
    this.onClick(url);
  }
}