import { Component } from '@angular/core';

@Component({
  selector: 'app-all-places',
  standalone: false,
  templateUrl: './all-places.component.html',
  styleUrls: ['./all-places.component.scss']
})
export class AllPlacesComponent {

  users = [
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 34 },
    { id: 3, name: 'Alice Brown', age: 22 },
    { id: 4, name: 'Bob White', age: 19 }
  ];

  sortedUsers = [...this.users];  // A copy of the users array for sorting
  sortOrder: string = '';  // The current column being sorted
  ascending: boolean = true;  // Whether the sorting is ascending

  // Function to handle sorting by column
  sortTable(column: keyof typeof this.users[0]) {
    // Toggle sorting order if the same column is clicked
    this.ascending = this.sortOrder === column ? !this.ascending : true;
    this.sortOrder = column;

    // Sort the array based on the column
    this.sortedUsers = [...this.users].sort((a, b) => {
      const valA = a[column];
      const valB = b[column];

      // Handle sorting for strings
      if (typeof valA === 'string' && typeof valB === 'string') {
        return this.ascending ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }
      // Handle sorting for numbers
      if (typeof valA === 'number' && typeof valB === 'number') {
        return this.ascending ? valA - valB : valB - valA;
      }
      return 0;
    });
  }

  // Edit user function
  editUser(user: { id: number; name: string; age: number }) {
    console.log('Editing user:', user);
    // Add logic for editing (e.g., open a modal or navigate to an edit page)
  }

  // Delete user function
  deleteUser(userId: number) {
    console.log('Deleting user with ID:', userId);
    this.users = this.users.filter(user => user.id !== userId);
    this.sortedUsers = [...this.users];  // Re-synchronize the sorted array
  }
}
