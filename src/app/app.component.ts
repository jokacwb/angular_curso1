import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title title="Olá povo do SST" *ngIf="destruir"></app-title>
  {{valor}}
  <button (click)="adicionar()">Adicionar</button>
  <button (click)="destroy()"><span *ngIf="!destruir">Mostrar</span><span *ngIf="destruir">Esconder</span></button>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit,DoCheck,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  public valor: number = 1;
  public destruir: boolean = true;

  public destroy(){
    this.destruir =  !this.destruir;
  }

  public adicionar(): number {
    return this.valor+=1;
  }

  constructor() {}
  ngAfterViewChecked(): void {
    console.log('Joka -ngAfterViewChecked ',this.valor);
  }
  ngAfterViewInit(): void {
    console.log('Joka -ngAfterViewInit',this.valor);
  }
  ngAfterContentChecked(): void {
    console.log('Joka -ngAfterContentChecked',this.valor);
  }
  ngAfterContentInit(): void {
    console.log('Joka -ngAfterContentInit',this.valor);
  }
  ngDoCheck(): void {
    console.log('Joka -ngDoCheck',this.valor);
  }

  ngOnInit(): void {
      setTimeout(() => {
        console.log('Joka');
      }, 5000);
  }
}
