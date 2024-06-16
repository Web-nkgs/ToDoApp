import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent {
  welcome = 'Bienvenido a mi primera app con Angular'
  tasks = signal([
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componente',
    'Crear servicio',
  ])
  name = signal("Neds")
  person = {
    name: "Neddy",
    age: 28,
    avatarImage: "https://static.vecteezy.com/system/resources/previews/017/047/818/original/cute-unicorn-illustration-unicorn-kawaii-chibi-drawing-style-unicorn-cartoon-vector.jpg"
  }
  isDisabled = true

  handleClick() {
    alert("Hola!")
  }

  handleChange(event: Event) {
    const input = event.target as HTMLInputElement
    const newValue = input.value
    this.name.set(newValue)
    
  }

  handleKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement
    console.log(input.value);
    
  }  
}
