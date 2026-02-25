import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuggestionsComponent } from './suggestions.component';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
import { NotfoundComponent } from '../../notfound/notfound.component';

const routes: Routes = [
  { path: '', component: ListSuggestionComponent },
   { path: 'detail/:id', component: SuggestionDetailsComponent }
   ,   {path:'**',component:NotfoundComponent}
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule { }
