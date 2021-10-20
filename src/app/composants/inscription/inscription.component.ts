import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
	hide = true;
	cacher: Boolean = false;
	afficher: Boolean = false;

	profileForm = new FormGroup({
		first_name: new FormControl(''),
		last_name: new FormControl(''),
		birthdate: new FormControl(''),
		phone: new FormControl(''),
		email: new FormControl(''),
		password: new FormControl(''),
		num: new FormControl(''),
		street: new FormControl(''),
		zip: new FormControl(''),
		city: new FormControl(''),
		category: new FormControl('')
	});

	

  constructor(){}

  ngOnInit(): void {
    $('form').keyup((e) => {
      if($('#first_name').val() === ""){
        $('#fname').text('Ce champ est requis.').fadeIn(1000);
        e.preventDefault();
        return false;
      }
      else {
        $('#fname').text('').fadeOut(1000);
      }
      if($('#last_name').val() === ""){

      }
    });

  }

	showPassword() {
		this.cacher = !this.cacher;
		this.afficher = !this.afficher;
	}
}
