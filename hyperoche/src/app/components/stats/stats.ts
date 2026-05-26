import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../../pipes/safe-html-pipe';

@Component({
  selector: 'app-stats',
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
})
export class Stats {
  stats = [
    { value: '10x', label: 'Faster than manual work', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C63FF" stroke-width="2"><polyline points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>' },
    { value: '314 hrs', label: 'Avg. saved per team/month', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00B894" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>' },
    { value: '98.7%', label: 'AI processing accuracy', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C63FF" stroke-width="2"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg>' },
    { value: '500+', label: 'Companies onboarded', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00B894" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
  ];
}
