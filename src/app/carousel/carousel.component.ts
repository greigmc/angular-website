import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  slides = [
    {
      image: 'https://www.pentanasolutions.com/_next/image?url=https%3A%2F%2Fadmin.pentanasolutions.com%2Fwp-content%2Fuploads%2F2024%2F05%2FCMTlogo9-1.png&w=640&q=75',
      date: '16 August 2024',
      title: 'Proudly presenting our newest integrated partner: CMT Scanner',
      description: 'The integration between Pentana Solutions and CMT Scanner combines advanced AI vehicle inspection technology with Pentanas eraPower DMS, streamlining dealership operations and improving vehicle assessments. This partnership enhances efficiency, transparency, and customer satisfaction by automating processes and providing reliable, consistent data synchronisation.'
    },
    {
      image: 'https://www.pentanasolutions.com/_next/image?url=https%3A%2F%2Fadmin.pentanasolutions.com%2Fwp-content%2Fuploads%2F2024%2F08%2FAfterpay-blog-icon.png&w=640&q=75',
      date: '19 August 2024',
      title: 'Pentana Solutions partners with Afterpay',
      description: 'Pentana Solutions has teamed up with Afterpay to help dealerships expand their reach and boost sales. With 4.1 million active users in Australia and New Zealand, this partnership connects dealerships with a wider audience, especially Millennial and Gen Z consumers. Setup is simple and requires no extra hardware. Learn how Afterpay can help grow your dealership.'
    },
    {
      image: 'https://www.pentanasolutions.com/_next/image?url=https%3A%2F%2Fadmin.pentanasolutions.com%2Fwp-content%2Fuploads%2F2024%2F08%2FTraction-CRM-icon.png&w=640&q=75',
      date: '6 May 2024',
      title: 'Revolutionising Automotive Dealership Management with Traction CRM',
      description: 'Take the stress away from your CRM management with Traction CRM – its more than just marketing! Create, automate, and manage content effortlessly with AI-powered solutions. Tailor Traction CRM to your dealerships needs, automate tasks for efficiency and enjoy the flexibility to adapt as your business evolves.'
    },
    {
      image: 'https://www.pentanasolutions.com/_next/image?url=https%3A%2F%2Fadmin.pentanasolutions.com%2Fwp-content%2Fuploads%2F2024%2F08%2FMP-Logo-Digital-Dark.png&w=640&q=75',
      date: '19 September 2024',
      title: 'Introducing our newest integrated partner: MotorPlatform',
      description: 'Pentana Solutions has partnered with MotorPlatform to integrate their eraPower DMS with MotorPlatform’s TradeAppraisal application. This collaboration enhances dealership efficiency by streamlining vehicle acquisition processes, eliminating duplicate data entry, and automating workflows. The integration offers customers accurate vehicle valuations, faster trade-ins, and improved overall operations.'
    },
    {
      image: 'https://www.pentanasolutions.com/_next/image?url=https%3A%2F%2Fadmin.pentanasolutions.com%2Fwp-content%2Fuploads%2F2024%2F08%2FTorque_Colour_NoBg_website-05.png&w=640&q=75',
      date: '22 August 2024',
      title: 'The September 2024 Torque Decision Maker Survey is starting soon!',
      description: 'For 50 years, Pentana Solutions has been driven by customer feedback, which has shaped our innovation journey. Following the March 2024 Torque Decision Maker Survey, weve implemented key improvements based on customer insights. These include reducing response times with AI-powered support, streamlining product installation for faster delivery, increasing face-to-face visits with Business Relationship Managers, enhancing customer education through direct engagement, and conducting comprehensive Health Checks for DealerSocket users.'
    },
    
    // Additional slides as needed
  ];

  currentIndex = 0;
  visibleSlides = 3; // Number of slides to show

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.updateVisibleSlides();
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateVisibleSlides();
    }
  }

  updateVisibleSlides() {
    if (isPlatformBrowser(this.platformId)) {
      const width = window.innerWidth;
      if (width < 600) {
        this.visibleSlides = 1;
      } else if (width < 900) {
        this.visibleSlides = 2;
      } else {
        this.visibleSlides = 3;
      }
    }
  }
}
