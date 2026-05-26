import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../../pipes/safe-html-pipe';

@Component({
  selector: 'app-services',
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services = [
    { title: 'Workflow Automation', description: 'Eliminate repetitive manual tasks by letting AI handle data entry, approvals, notifications, and multi-step processes — around the clock.', icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>', gradient: 'linear-gradient(135deg,#6C63FF,#8B85FF)', tags: ['Process Automation','No-Code','24/7 Operation'] },
    { title: 'Intelligent Document Processing', description: 'Extract, classify, and act on data from invoices, contracts, emails, and reports in seconds. Cut document processing time by 90%.', icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>', gradient: 'linear-gradient(135deg,#00D4AA,#00B894)', tags: ['OCR','Data Extraction','Auto-Classification'] },
    { title: 'AI-Powered Analytics', description: 'Get instant answers from your business data. Hyperoche surfaces trends, anomalies, and opportunities before they become critical.', icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>', gradient: 'linear-gradient(135deg,#F59E0B,#EF4444)', tags: ['Real-time Insights','Predictive','Custom Dashboards'] },
    { title: 'Smart Customer Support', description: 'Deploy AI agents that resolve 80% of customer queries instantly, escalate complex cases intelligently, and learn from every interaction.', icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>', gradient: 'linear-gradient(135deg,#8B5CF6,#6C63FF)', tags: ['Chatbots','Auto-Resolution','Multi-channel'] },
    { title: 'Content & Email Automation', description: 'Generate personalised emails, reports, summaries, and marketing copy at scale. Maintain your brand voice while saving hours of writing time.', icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>', gradient: 'linear-gradient(135deg,#EC4899,#8B5CF6)', tags: ['Personalisation','Bulk Generation','Brand Voice'] },
    { title: 'API & Integration Hub', description: 'Connect Hyperoche to Slack, Salesforce, HubSpot, Notion, Jira, and 200+ tools. AI orchestrates your entire tech stack automatically.', icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>', gradient: 'linear-gradient(135deg,#00D4AA,#6C63FF)', tags: ['200+ Integrations','REST API','Webhooks'] },
  ];
}
