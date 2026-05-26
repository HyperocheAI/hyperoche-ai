import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SafeHtmlPipe } from '../../pipes/safe-html-pipe';

@Component({
  selector: 'app-cta-section',
  imports: [CommonModule, FormsModule, SafeHtmlPipe],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.scss',
})
export class CtaSection {
  formData = { name: '', email: '', company: '' };
  perks = [
    { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B894" stroke-width="2"><polyline points="9,11 12,14 22,4"/><path d="M21,12v7a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3h11"/></svg>', title: '14-Day Free Trial', desc: 'Full access, no credit card required' },
    { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6C63FF" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>', title: 'Dedicated Onboarding', desc: 'A success manager guides your setup' },
    { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B894" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', title: 'Enterprise Security', desc: 'SOC 2 Type II · GDPR compliant' },
    { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6C63FF" stroke-width="2"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg>', title: 'ROI in 30 Days', desc: 'Or we extend your trial for free' },
  ];

  onSubmit(event: Event) {
    event.preventDefault();
    alert(`Thanks ${this.formData.name}! We'll be in touch at ${this.formData.email} within 24 hours.`);
    this.formData = { name: '', email: '', company: '' };
  }
}
