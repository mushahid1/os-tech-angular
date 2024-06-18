import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent {
  displayedColumns: string[] = ['companyName', 'representative', 'companyNumber', 'email', 'businessType', 'platforms'];
  dataSource = new MatTableDataSource(COMPANY_DATA);
  @ViewChild(MatSort) sort: MatSort;
  selection = new SelectionModel<TableData>(true, []);

  pageData = {
    title: 'Company Management',
    description: 'Lorem ipsum dolor sit amet consectetur. Dapibus cras'
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getSearchValue(value: string) {

  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  toggleRow(row: TableData) {
    this.selection.toggle(row);
  }
}

export interface TableData {
  companyName: string,
  representative: string,
  companyNumber: string
  email: string,
  businessType: string,
  platforms: string
}

const COMPANY_DATA: TableData[] = [
  {companyName: 'Microsoft', representative: 'Lana Stiener', companyNumber: '+1-212-534-7890', email: 'aliah@gmail.com', businessType: 'Information Technology', platforms: 'Enwage'},
  {companyName: 'Shopfiy', representative: 'Lana Stiener', companyNumber: '+1-212-534-7890', email: 'aliah@gmail.com', businessType: 'Information Technology', platforms: 'Enwage'},
  {companyName: 'Amazon', representative: 'Lana Stiener', companyNumber: '+1-212-534-7890', email: 'aliah@gmail.com', businessType: 'Information Technology', platforms: 'Waffle Dynamic'},
  {companyName: 'Framer', representative: 'Lana Stiener', companyNumber: '+1-212-534-7890', email: 'aliah@gmail.com', businessType: 'Information Technology', platforms: 'Enwage'},
  {companyName: 'Airbnb', representative: 'Lana Stiener', companyNumber: '+1-212-534-7890', email: 'aliah@gmail.com', businessType: 'Information Technology', platforms: 'Waffle Dynamic'},
  {companyName: 'Paypal', representative: 'Lana Stiener', companyNumber: '+1-212-534-7890', email: 'aliah@gmail.com', businessType: 'Information Technology', platforms: 'Waffle Dynamic'},
  {companyName: 'Elastic', representative: 'Lana Stiener', companyNumber: '+1-212-534-7890', email: 'aliah@gmail.com', businessType: 'Information Technology', platforms: 'Enwage'},
  {companyName: 'Adobe', representative: 'Lana Stiener', companyNumber: '+1-212-534-7890', email: 'aliah@gmail.com', businessType: 'Information Technology', platforms: 'Enwage'},
  {companyName: 'HP', representative: 'Lana Stiener', companyNumber: '+1-212-534-7890', email: 'aliah@gmail.com', businessType: 'Information Technology', platforms: 'Enwage'},
  {companyName: 'Intel', representative: 'Lana Stiener', companyNumber: '+1-212-534-7890', email: 'aliah@gmail.com', businessType: 'Information Technology', platforms: 'Waffle Dynamic'},
  {companyName: 'Cisco', representative: 'Lana Stiener', companyNumber: '+1-212-534-7890', email: 'aliah@gmail.com', businessType: 'Information Technology', platforms: 'Enwage'},
  {companyName: 'Redbull', representative: 'Lana Stiener', companyNumber: '+1-212-534-7890', email: 'aliah@gmail.com', businessType: 'Information Technology', platforms: 'Enwage'},
  {companyName: 'Dell', representative: 'Lana Stiener', companyNumber: '+1-212-534-7890', email: 'aliah@gmail.com', businessType: 'Information Technology', platforms: 'Waffle Dynamic'},
  {companyName: 'AT&T', representative: 'Lana Stiener', companyNumber: '+1-212-534-7890', email: 'aliah@gmail.com', businessType: 'Information Technology', platforms: 'Enwage'},
];