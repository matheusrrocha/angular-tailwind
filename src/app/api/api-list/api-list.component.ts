import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/models/api';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent implements OnInit {

  apis: Api[] = [];

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.getAll().subscribe(apis => {
      this.apis = apis;
    })
  }

}
