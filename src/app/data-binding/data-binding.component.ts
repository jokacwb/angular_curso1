import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome:string = "Joka";
  public idade:number = 51;
  public checkDisabled:boolean = true;
  public urlImg:string = "https://www.lpm-blog.com.br/wp-content/uploads/2011/10/smiley_ok.jpg";
  public urlFeliz:string = "https://www.lpm-blog.com.br/wp-content/uploads/2011/10/smiley_ok.jpg";
  public urlTriste:string = "https://i.pinimg.com/236x/56/6a/eb/566aebe9bd0b88ee53e7ad484dab3f17--smile-html.jpg";

  public isFeliz:boolean = true;

  constructor() { }

  public alteraHumor(): void {
    this.isFeliz = !this.isFeliz;
    this.urlImg = this.isFeliz?this.urlFeliz:this.urlTriste;
  }
  ngOnInit(): void {
  }

}
