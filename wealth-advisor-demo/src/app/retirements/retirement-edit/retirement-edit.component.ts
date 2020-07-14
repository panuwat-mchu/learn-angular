import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Retirement } from '../shared/retirement.model';
import { RetirementService } from '../shared/retirement.service';

@Component({
  selector: 'app-retirement-edit',
  templateUrl: './retirement-edit.component.html',
  styleUrls: ['./retirement-edit.component.scss']
})
export class RetirementEditComponent implements OnInit {


  closed: boolean = false;

  retirement: Retirement = new Retirement();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private retirementService: RetirementService
  ) {
    let retirementId = 'model1';
    this.retirementService.getRetirement(retirementId).subscribe(data => {
      this.retirement = data;
    });
  }

  ngOnInit(): void {
    //throw new Error("Method not implemented.");
  }

  addRetirement() {
    this.retirementService.addRetirement(this.retirement).subscribe(res => {
      console.log('addRetirement work!')
    });
  }

  saveRetirement() {
    this.retirementService.updateRetirement(this.retirement).subscribe(res => {
      console.log('saveRetirement work!')
    });
  }

  closeAside() {
    console.log('closeAside');
    //this.closed = true;
    this.router.navigate(
      [
        { outlets: { aside: 'advisor' } }
      ],
      {
        relativeTo: this.activatedRoute.parent
      }
    );
  }

}
