import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Aircraft } from 'src/app/models/aircraft.model';
import { AircraftService } from 'src/app/services/aircraft.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-aircraft-registration',
  templateUrl: './aircraft-registration.component.html',
  styleUrls: ['./aircraft-registration.component.css']
})
export class AircraftRegistrationComponent implements OnInit, OnDestroy, AfterViewInit {

  panelOpenState = false;

  displayedColumns = ['id', 'model', 'range'];
  aircraftDataSource: MatTableDataSource<Aircraft> = new MatTableDataSource<Aircraft>();

  private readonly subscriptions: Subscription[] = [];

  @ViewChild('paginator', {static: true}) paginator!: MatPaginator;

  aircraftForm!: FormGroup;

  constructor(private aircraftService : AircraftService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.aircraftForm = this.formBuilder.group(
      {
        id: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        model: ['', Validators.required],
        range: ['', Validators.required]
      }
    )

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

  isValidForm() {
    return this.aircraftForm.valid;
  }

  onSubmit(): void {
    console.log(this.aircraftForm.value);
  }

}
