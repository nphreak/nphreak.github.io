import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/blog/lista/lista.component';
import { PostComponent } from './components/blog/post/post.component';
import { HomeComponent } from './components/home/home.component';
import { RedesComponent } from './components/redes/redes.component';
import { SobreComponent } from './components/sobre/sobre.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  {
    path: 'blog', children: [
      {path:'post', component:PostComponent},
      {path:'lista', component:ListaComponent},
      
    ]
  },
  { path: 'redes', component: RedesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
