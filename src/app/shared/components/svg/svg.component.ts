import { Component, Input, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-svg',
  template: `<div [innerHTML]="svgContent" *ngIf="svgContent"></div>`,
})
export class SvgComponent implements OnInit {
  svgContent: SafeHtml | undefined;
  @Input() svgPath: any;
  @Input() renderSvg: boolean = false;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    if (!this.renderSvg) {
      this.loadSvgFile(this.svgPath);
    }
  }

  loadSvgFile(filePath: string): void {
    // Make an HTTP request to fetch the SVG file content
    this.fetchSvgFile(filePath).then(svgContent => {
      // Sanitize and set the SVG content
      this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svgContent);
    }).catch(error => {
      console.error('Error loading SVG file:', error);
    });
  }

  fetchSvgFile(filePath: string): Promise<string> {
    // Replace this with your own HTTP request logic
    return new Promise<string>((resolve, reject) => {
      // For demonstration purposes, using a simple fetch
      fetch(filePath)
        .then(response => response.text())
        .then(svgContent => resolve(svgContent))
        .catch(error => reject(error));
    });
  }
}
