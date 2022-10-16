import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Project} from "../model/Project";
import {ProjectService} from "../service/project.service";
import {MatAutocomplete, MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {FormControl} from "@angular/forms";
import {Observable, startWith} from "rxjs";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-create-new-project',
  templateUrl: './create-new-project.component.html',
  styleUrls: ['./create-new-project.component.css']
})
export class CreateNewProjectComponent implements OnInit {

  project:Project=new Project();
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  // ============================

  separatorKeysCodes: number[] = [ENTER, COMMA];
  classificationCtrl = new FormControl('');
  filteredClassification: Observable<string[]>;
  classification: string[] = ['server'];
  allClassification: string[] = ['Server', 'Irrigation'];

  // @ts-ignore
  @ViewChild('classificationInput',{static:false}) classificationInput:
    ElementRef<HTMLInputElement>;

  // @ts-ignore
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;


  constructor(private projectService: ProjectService) {
    this.filteredClassification = this.classificationCtrl.valueChanges.pipe(
      startWith(null),
      map((classification: string | null) => (classification ? this._filter(classification) : this.allClassification.slice()))
    );
  }

  add(event: MatChipInputEvent): void {

    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.classification.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.classificationCtrl.setValue(null);

    }

  }

  remove(classification: string): void {
    const index = this.classification.indexOf(classification);

    if (index >= 0) {
      this.classification.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.classification.push(event.option.viewValue);
    this.classificationInput.nativeElement.value = '';
    this.classificationCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allClassification.filter(classification => classification.toLowerCase().indexOf(filterValue)===0);
  }
  // ===============================
  ngOnInit(): void {
  }

  saveProject(){
    this.project.projectClassification=this.classification;
    this.projectService.addProject(this.project).subscribe(data=>{
      console.log(data);
    },
      error => console.log(error));
  }

  onSubmit() {
    //console.log(this.project);
    this.saveProject();
  }
}
