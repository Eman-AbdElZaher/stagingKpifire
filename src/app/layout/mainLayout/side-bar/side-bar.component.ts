import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  @Input() isMenuCollapsed: boolean = false;

  menuItems: any[] = [
    {
      menuLink: '#',
      menuIcon: 'bi bi-compass',
      menuText: 'Goals',
      hasSubMenu: true,
      subMenu: [
        {
          menuSubLink: '',
          menuSubText: 'List View',
          menuSubIcon: 'bi bi-list-ul',
        },
        {
          menuSubLink: '',
          menuSubText: 'Tile View',
          menuSubIcon: 'bi bi-table',
        },
        {
          menuSubLink: '',
          menuSubText: 'bowling View',
          menuSubIcon: 'bi bi-binoculars',
        },
        {
          menuSubLink: '',
          menuSubText: 'Grid View',
          menuSubIcon: 'bi bi-grid-3x3',
        },
        {
          menuSubLink: '',
          menuSubText: 'Matrix View',
          menuSubIcon: 'bi bi-arrows-fullscreen',
        },
      ],
    },
    {
      menuLink: '#',
      menuIcon: 'bi bi-lightbulb',
      menuText: 'New Idea',
      hasSubMenu: false,
    },
    {
      menuLink: '#',
      menuIcon: 'bi bi-funnel',
      menuText: 'Idea Funnel',
      hasSubMenu: false,
    },
    {
      menuLink: '#',
      menuIcon: 'bi bi-columns-gap',
      menuText: 'Projects',
      hasSubMenu: true,
      subMenu: [
        {
          menuSubLink: '',
          menuSubText: 'List View',
          menuSubIcon: 'bi bi-list-ul',
        },
        {
          menuSubLink: '',
          menuSubText: 'My Projects',
          menuSubIcon: 'bi bi-columns-gap',
        },
        {
          menuSubLink: '',
          menuSubText: 'My Reports',
          menuSubIcon: 'bi bi-bar-chart',
        },
      ],
    },
    {
      menuLink: '#',
      menuIcon: 'bi bi-speedometer2',
      menuText: 'Metrics',
      hasSubMenu: true,
      subMenu: [
        {
          menuSubLink: '',
          menuSubText: 'List View',
          menuSubIcon: 'bi bi-list-ul',
        },
        {
          menuSubLink: '',
          menuSubText: 'Tile View',
          menuSubIcon: 'bi bi-table',
        },
        {
          menuSubLink: '',
          menuSubText: 'bowling View',
          menuSubIcon: 'bi bi-binoculars',
        },
        {
          menuSubLink: '',
          menuSubText: 'Grid View',
          menuSubIcon: 'bi bi-grid-3x3',
        },
        {
          menuSubLink: '',
          menuSubText: 'Matrix View',
          menuSubIcon: 'bi bi-arrows-fullscreen',
        },
      ],
    },
    {
      menuLink: '#',
      menuIcon: 'bi bi-search',
      menuText: 'search',
      hasSubMenu: false,
    },
  ];

  toggleSubMenu(menuItem: any) {
    menuItem.classList.toggle('expand');
  }
}
