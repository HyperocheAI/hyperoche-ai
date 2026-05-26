import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../../pipes/safe-html-pipe';

@Component({
  selector: 'app-how-it-works',
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.scss',
})
export class HowItWorks {
  steps = [
    { title: 'Connect Your Tools', description: 'Link Hyperoche to your existing apps — email, CRM, spreadsheets, databases, Slack, and more. No engineering required.', icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>', time: 'Setup in 15 minutes' },
    { title: 'Define Your Workflows', description: 'Tell Hyperoche what to automate using plain English. Our AI understands your business logic and builds the automation for you.', icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>', time: 'Configure in 30 minutes' },
    { title: 'AI Works, You Save Time', description: 'Hyperoche runs your automations 24/7, learns from outcomes, and continuously improves. Your team gets hours back every week.', icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg>', time: 'Results from day one' },
  ];
}
