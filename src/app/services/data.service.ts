import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  contacts = [
    { id: 1, name: "Contact 001", description: "Contact 001 des", email: "c001@email.com" },
    { id: 2, name: "Contact 002", description: "Contact 002 des", email: "c002@email.com" },
    { id: 3, name: "Contact 003", description: "Contact 003 des", email: "c003@email.com" },
    { id: 4, name: "Contact 004", description: "Contact 004 des", email: "c004@email.com" }
  ];

  serviceProviders = [
    {
      id: 1, name: "Joshsb", description: "Videography",
      content: 'Creating a polished, professional-looking video doesn’t have to mean spending on unnecessary equipment and filmmaking workshops. We got you covered.', iconClass:'fa-video',
      thumb: 'assets/img/portfolio/01-thumbnail.jpg',
      image: 'assets/img/portfolio/01-full.jpg',
      date: 'August 24, 2019', email: "c001@email.com",
      uiType:'text',
      html: ``
    },
    {
      id: 2, name: "Daniel", description: "Graphic Design",
      content: 'From packaging to motion graphics, the graphic design industry is huge. we help you Seek the right design services for your business, ...', iconClass:'fa-dyalog',
      thumb: 'assets/img/portfolio/02-thumbnail.jpg',
      image: 'assets/img/portfolio/02-full.jpg',
      date: 'September 4, 2019', email: "c002@email.com",
      uiType:'text',
      html: ``
    },
    {
      id: 3, name: "Cynthia", description: "Publicity",
      content: 'Are you famous, or do you want to be? Meet the best professionals on the market...', iconClass:'fa-passport',
      thumb: 'assets/img/portfolio/03-thumbnail.jpg',
      image: 'assets/img/portfolio/03-full.jpg',
      date: 'October 2, 2019', email: "c003@email.com",
      uiType:'text',
      html: ``
    },
    {
      id: 4, name: "Patrick", description: "Branding",
      content: 'Digital marketing is the component of marketing that utilizes internet and online based digital technologies', iconClass:'fa-shopping-cart',
      thumb: 'assets/img/portfolio/04-thumbnail.jpg',
      image: 'assets/img/portfolio/04-full.jpg',
      date: 'November 20, 2019', email: "c004@email.com",
      uiType:'text',
      html: ``
    },
    {
      id: 5, name: "Joshua", description: "Website Design",
      content: 'Web design encompasses many different skills and disciplines in the production and maintenance of websites. We have already digested it for you.', iconClass:'fa-laptop',
      thumb: 'assets/img/portfolio/05-thumbnail.jpg',
      image: 'assets/img/portfolio/05-full.jpg',
      date: 'December 11, 2019', email: "c003@email.com",
      uiType:'text',
      html: ``
    },
    {
      id: 6, name: "Walter", description: "Photography",
      content: 'The purpose of photography can vary depending on what the photographer is trying to achieve. We got you covered on this.', iconClass:'fa-photo-video',
      thumb: 'assets/img/portfolio/06-thumbnail.jpg',
      image: 'assets/img/portfolio/06-full.jpg',
      date: 'January 12, 2020', email: "c004@email.com",
      uiType:'text',
      html: ``
    }
  ];

  public getContacts(): Array<{ id, name, description, email }> {
    return this.contacts;
  }
  public createContact(contact: { id, name, description, email }) {
    this.contacts.push(contact);
  }

  public getServiceProvider(id) {
    return this.serviceProviders.find(r => {
      return r.id == id
    })
  }
  public searchServiceProvider(text) {
    return this.serviceProviders.find(r => {
      return String(r.name).includes(text) 
    })
  }
}
