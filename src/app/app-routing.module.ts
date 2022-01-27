import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth.guard';
import { PrivateAuthGuard } from './private-auth.guard';
import { PostHomeComponent } from './pages/post-home/post-home.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { UserRoleGuard } from './user-role.guard';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { RoleGuard } from './role.guard';
import { DeniedPageComponent } from './pages/denied-page/denied-page.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { TagsPageComponent } from './pages/admin/tags-page/tags-page.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'login', component:LoginComponent,canActivate:[PrivateAuthGuard]},
  {path:'register',component:RegisterComponent,canActivate:[PrivateAuthGuard]},

  {path:'home',component:HomeComponent,canActivate:[AuthGuard,UserRoleGuard],
  children: [
    {path:'',component:PostHomeComponent},
    {path:'create',component:CreatePostComponent}
  ]
},
{path:'denied',component:DeniedPageComponent,canActivate:[AuthGuard]},
{path:'admin',component:AdminHomeComponent,canActivate:[AuthGuard,RoleGuard],
children:[
{path:'',component:AdminDashboardComponent},
{path:'tags',component:TagsPageComponent}


]



},

  {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],





exports: [RouterModule]
})
export class AppRoutingModule { }
