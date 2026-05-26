import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  footerLinks = [
    { title: 'Solutions', links: ['Workflow Automation','Document Processing','AI Analytics','Customer Support','Content Automation','Integrations'] },
    { title: 'Company',   links: ['About Us','Careers','Blog','Press','Partners','Contact'] },
    { title: 'Resources', links: ['Documentation','API Reference','Case Studies','Webinars','Help Center','Status'] },
  ];
}
