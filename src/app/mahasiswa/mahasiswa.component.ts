import { AfterViewInit, Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.css'],
})
export class MahasiswaComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    $('#table1').DataTables();
  }

  ngOnInit(): void {}
}
