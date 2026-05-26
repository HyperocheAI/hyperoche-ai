import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  stars = [1, 2, 3, 4, 5];
  testimonials = [
    { text: "We used to spend 3 days a month manually processing invoices. Hyperoche automated the entire pipeline — now it takes 2 hours. The ROI was obvious within the first week.", name: 'Sarah Chen', role: 'CFO', company: 'Nexaflow', initials: 'SC', gradient: 'linear-gradient(135deg,#6C63FF,#8B85FF)', result: '92%', resultLabel: 'Reduction in processing time' },
    { text: "Hyperoche transformed our customer support. Our AI agents now handle 80% of queries automatically, response time dropped from 6 hours to 3 minutes, and CSAT scores went up 40%.", name: 'Marcus Webb', role: 'Head of CX', company: 'Orbita', initials: 'MW', gradient: 'linear-gradient(135deg,#00D4AA,#00B894)', result: '40%', resultLabel: 'Increase in CSAT score' },
    { text: "The integration was seamless. Within a week Hyperoche was connected to our entire stack and automating workflows I didn't even know we could automate. My team saved 15 hours each last month.", name: 'Priya Nair', role: 'VP of Operations', company: 'Synaptiq', initials: 'PN', gradient: 'linear-gradient(135deg,#F59E0B,#EF4444)', result: '15 hrs', resultLabel: 'Saved per person per month' },
  ];
}
