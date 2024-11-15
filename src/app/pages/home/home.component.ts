import { Component } from '@angular/core';
import { CarouselModule } from '../../carousel/carousel.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { }
