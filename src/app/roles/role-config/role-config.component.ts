import { Component } from '@angular/core';

@Component({
  selector: 'app-role-config',
  templateUrl: './role-config.component.html',
  styleUrls: ['./role-config.component.scss']
})
export class RoleConfigComponent {
  sections = [
    {
      title: 'Candidate List View',
      header: [
        { name: 'Manager', checked: false },
        { name: 'Admin', checked: false },
        { name: 'Benefits Manager', checked: false },
        { name: 'Designer', checked: false },
        { name: 'Product Designer', checked: false },
        { name: 'Reviewer', checked: false }
      ],
      rows: [
        {
          title: 'Candidates View',
          roles: [
            { name: 'Manager', checked: false },
            { name: 'Admin', checked: false },
            { name: 'Benefits Manager', checked: false },
            { name: 'Designer', checked: false },
            { name: 'Product Designer', checked: false },
            { name: 'Reviewer', checked: false }
          ]
        },
        {
          title: 'Export',
          roles: [
            { name: 'Manager', checked: false },
            { name: 'Admin', checked: false },
            { name: 'Benefits Manager', checked: false },
            { name: 'Designer', checked: false },
            { name: 'Product Designer', checked: false },
            { name: 'Reviewer', checked: false }
          ]
        },
        {
          title: 'Add Candidate',
          roles: [
            { name: 'Manager', checked: false },
            { name: 'Admin', checked: false },
            { name: 'Benefits Manager', checked: false },
            { name: 'Designer', checked: false },
            { name: 'Product Designer', checked: false },
            { name: 'Reviewer', checked: false }
          ]
        },
        {
          title: 'Compose Email',
          roles: [
            { name: 'Manager', checked: false },
            { name: 'Admin', checked: false },
            { name: 'Benefits Manager', checked: false },
            { name: 'Designer', checked: false },
            { name: 'Product Designer', checked: false },
            { name: 'Reviewer', checked: false }
          ]
        },
        {
          title: 'Compose Message',
          roles: [
            { name: 'Manager', checked: false },
            { name: 'Admin', checked: false },
            { name: 'Benefits Manager', checked: false },
            { name: 'Designer', checked: false },
            { name: 'Product Designer', checked: false },
            { name: 'Reviewer', checked: false }
          ]
        },
        {
          title: 'Drop Candidate',
          roles: [
            { name: 'Manager', checked: false },
            { name: 'Admin', checked: false },
            { name: 'Benefits Manager', checked: false },
            { name: 'Designer', checked: false },
            { name: 'Product Designer', checked: false },
            { name: 'Reviewer', checked: false }
          ]
        },
        {
          title: 'Request Assemsment',
          roles: [
            { name: 'Manager', checked: false },
            { name: 'Admin', checked: false },
            { name: 'Benefits Manager', checked: false },
            { name: 'Designer', checked: false },
            { name: 'Product Designer', checked: false },
            { name: 'Reviewer', checked: false }
          ]
        },
        {
          title: 'Add to Job',
          roles: [
            { name: 'Manager', checked: false },
            { name: 'Admin', checked: false },
            { name: 'Benefits Manager', checked: false },
            { name: 'Designer', checked: false },
            { name: 'Product Designer', checked: false },
            { name: 'Reviewer', checked: false }
          ]
        },
        {
          title: 'Assign Job',
          roles: [
            { name: 'Manager', checked: false },
            { name: 'Admin', checked: false },
            { name: 'Benefits Manager', checked: false },
            { name: 'Designer', checked: false },
            { name: 'Product Designer', checked: false },
            { name: 'Reviewer', checked: false }
          ]
        },
        {
          title: 'move to',
          roles: [
            { name: 'Manager', checked: false },
            { name: 'Admin', checked: false },
            { name: 'Benefits Manager', checked: false },
            { name: 'Designer', checked: false },
            { name: 'Product Designer', checked: false },
            { name: 'Reviewer', checked: false }
          ]
        },
        {
          title: 'Delete Candidate',
          roles: [
            { name: 'Manager', checked: false },
            { name: 'Admin', checked: false },
            { name: 'Benefits Manager', checked: false },
            { name: 'Designer', checked: false },
            { name: 'Product Designer', checked: false },
            { name: 'Reviewer', checked: false }
          ]
        }
      ]
    },
    {
      title: 'Candidate Summary',
      header: [
        { name: 'Manager', checked: false },
        { name: 'Admin', checked: false },
        { name: 'Benefits Manager', checked: false },
        { name: 'Designer', checked: false },
        { name: 'Product Designer', checked: false },
        { name: 'Reviewer', checked: false }
      ],
      rows: [
        {
          title: 'View Summary',
          roles: [
            { name: 'Manager', checked: false },
            { name: 'Admin', checked: false },
            { name: 'Benefits Manager', checked: false },
            { name: 'Designer', checked: false },
            { name: 'Product Designer', checked: false },
            { name: 'Reviewer', checked: false }
          ]
        },
        {
          title: 'Edit Summary',
          roles: [
            { name: 'Manager', checked: false },
            { name: 'Admin', checked: false },
            { name: 'Benefits Manager', checked: false },
            { name: 'Designer', checked: false },
            { name: 'Product Designer', checked: false },
            { name: 'Reviewer', checked: false }
          ]
        }
      ]
    },
    {
      title: 'Candidate Resume',
      header: [
        { name: 'Manager', checked: false },
        { name: 'Admin', checked: false },
        { name: 'Benefits Manager', checked: false },
        { name: 'Designer', checked: false },
        { name: 'Product Designer', checked: false },
        { name: 'Reviewer', checked: false }
      ],
      rows: [
        {
          title: 'View Resume',
          roles: [
            { name: 'Manager', checked: false },
            { name: 'Admin', checked: false },
            { name: 'Benefits Manager', checked: false },
            { name: 'Designer', checked: false },
            { name: 'Product Designer', checked: false },
            { name: 'Reviewer', checked: false }
          ]
        },
      ]
    }
  ];

  pageData = {
    title: 'Default Roles',
    description: 'Lorem ipsum dolor sit amet consectetur. Dapibus cras'
  }

  getSearchValue(value: string) {

  }

}