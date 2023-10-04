interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 24,
    location: 'New York'
};

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const tr = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');

th1.textContent = 'firstName';
th2.textContent = 'location';

table.append(thead);
table.append(tbody);
thead.append(tr);
tr.append(th1);
tr.append(th2);

studentsList.forEach((student) => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');

    td1.textContent = student.firstName;
    td2.textContent = student.location;

    tbody.append(tr);
    tr.append(td1);
    tr.append(td2);
});

table.append(thead);
table.append(tbody);

document.body.appendChild(table);