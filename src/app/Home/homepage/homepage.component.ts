import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { Billboards, BillboardsDetails } from './billboards';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'primeng/sidebar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ CommonModule, TabViewModule, TableModule, MultiSelectModule, HttpClientModule, SidebarModule, DialogModule, ButtonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  providers: [BillboardsDetails, BrowserAnimationsModule, NoopAnimationsModule,]
})

export class HomepageComponent implements OnInit {

  dialogVisible: boolean = false;

    showDialog() {
        this.dialogVisible = true;
    }

  sidebarVisible: boolean = false;

  billboards!: Billboards[];
  loading: boolean = true;
  activityValues: number[] = [0, 100];

  constructor (private billboardDetails: BillboardsDetails, private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.billboardDetails.getBillboardsLarge().then((billboards) => {
      this.billboards = billboards;
      this.loading = false;

  });

  this.primengConfig.ripple = true;

  
}
    
}


