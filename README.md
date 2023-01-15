# AngularComponentPopup
 Injec component  dynamically

 # Create new angular project 
 > ng new angular-component-popup


# Create service 
The modal has two states: open and close. That’s why, before anything else, we create a service using the Angular CLI (command: ng g service modal).

## Import behavioural subject 
> import {BehaviorSubject, Observable} from 'rxjs';

# Create new componet 
> ng g c  modal

The component code contains a variable, an Observable which we instantiate to watch out the state of the modal, and exposes a function which we can use to close the modal.