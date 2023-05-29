import { Component } from '@angular/core';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
imieinazwisko: string = "";
ocena: string = "";
status: string = "";
onSubmit() {
console.log(this.imieinazwisko, 'dziękujemy za wypełnienie ankiety', 'twoja ocena jakości obsługi klienta to:', this.ocena, 'twój status zawodowy to:', this.status);
}
}