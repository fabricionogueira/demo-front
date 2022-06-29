import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Aircraft } from 'src/app/models/aircraft.model';
import { AircraftService } from 'src/app/services/aircraft.service';

@Component({
  selector: 'app-aircraft-registration',
  templateUrl: './aircraft-registration.component.html',
  styleUrls: ['./aircraft-registration.component.css']
})
export class AircraftRegistrationComponent implements OnInit, OnDestroy, AfterViewInit {

  displayedColumns = ['id', 'model', 'range'];
  aircraftDataSource: MatTableDataSource<Aircraft> = new MatTableDataSource<Aircraft>();

  private readonly subscriptions: Subscription[] = [];

  @ViewChild('paginator', {static: true}) paginator!: MatPaginator;

  constructor(private aircraftService : AircraftService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.aircraftService.listAllAircrafts().subscribe(aircrafts => {
        this.aircraftDataSource.data = aircrafts;
        this.paginator.length = aircrafts.length;
      })
    );
  }

  ngAfterViewInit() {
    this.aircraftDataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  get total() {
    return this.aircraftDataSource.data.length;
  }

}
