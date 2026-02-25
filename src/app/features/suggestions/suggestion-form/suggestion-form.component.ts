import { Component ,OnInit} from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../suggestion.service';
@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css'
})
export class SuggestionFormComponent implements OnInit {
 suggestionForm!:FormGroup;

  category: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre'
  ];
  constructor(private fb :FormBuilder , private router:Router, private activatedRoute: ActivatedRoute, private suggestionService: SuggestionService) { }
  ngOnInit(): void {
    const today = new Date().toISOString().split('T')[0];
    this.suggestionForm = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[A-Z][a-zA-Z]*$')
      ]],
      description:['',[
        Validators.required,
        Validators.minLength(30)
      ]],
      category:['',Validators.required],
      date: [today, Validators.required],
      status: ['En attente', Validators.required]
    });

}
onSubmit(){
  if(this.suggestionForm.valid){
    const formValue = this.suggestionForm.getRawValue();
    const newSuggestion: Suggestion = {
      id: Date.now(), 
      title: formValue.title,
      description: formValue.description,
      category: formValue.category,
      date: new Date(formValue.date),
      status: formValue.status,
      nbLikes: 0
    };

    this.suggestionService.addSuggestion(newSuggestion);
    
    // Small delay to ensure service updates propagate
    setTimeout(() => {
      this.router.navigate(['../'], { relativeTo: this.activatedRoute });
    }, 100);
  }
}

onCancel(){
  this.router.navigate(['../'], { relativeTo: this.activatedRoute });
}




}
