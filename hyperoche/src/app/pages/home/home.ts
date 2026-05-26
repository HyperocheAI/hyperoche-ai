import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { Stats } from '../../components/stats/stats';
import { Services } from '../../components/services/services';
import { HowItWorks } from '../../components/how-it-works/how-it-works';
import { Testimonials } from '../../components/testimonials/testimonials';
import { CtaSection } from '../../components/cta-section/cta-section';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, Stats, Services, HowItWorks, Testimonials, CtaSection, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
