import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TagInputModule } from 'ngx-chips';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { SectionComponent } from './components/section/section.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AlertComponent } from './components/alert/alert.component';
import { StoreModule } from '@ngrx/store';
import {dataReducer} from './store/state.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ValidatorComponent } from './components/validator/validator.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { PostHomeComponent } from './pages/post-home/post-home.component';
import { QuillModule } from 'ngx-quill'
import {CloudinaryModule} from '@cloudinary/ng';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeniedPageComponent } from './pages/denied-page/denied-page.component';
import { TagsPageComponent } from './pages/admin/tags-page/tags-page.component';
import { AlertSuccessComponent } from './components/alert-success/alert-success.component';
import { TagsInputComponent } from './components/tags-input/tags-input.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CardArticleComponent } from './components/card-article/card-article.component';
import { ModalComponent } from './components/modal/modal.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { JwtModule } from "@auth0/angular-jwt";
import { AuthService } from './services/auth.service';
import { LikeBtnComponent } from './components/like-btn/like-btn.component';
import { SaveBtnComponent } from './components/save-btn/save-btn.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from './pages/user/article/article.component';
import { FavoriteComponent } from './pages/user/favorite/favorite.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';
//import { UserEffects } from './effects/user.effects';




@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    ButtonComponent,
    SectionComponent,
    CardComponent,
    TextFieldComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    PageNotFoundComponent,
    LoaderComponent,
    AlertComponent,
    ValidatorComponent,
    HomeComponent,
    SidebarComponent,
    MainSectionComponent,
    AuthHeaderComponent,
    CreatePostComponent,
    PostHomeComponent,
    AdminHomeComponent,
    AdminDashboardComponent,
    DeniedPageComponent,
    TagsPageComponent,
    AlertSuccessComponent,
    TagsInputComponent,
    CardArticleComponent,
    ModalComponent,
    LikeBtnComponent,
    SaveBtnComponent,
    ProfileComponent,
    ArticleComponent,
    FavoriteComponent,


  ],
  imports: [
    BrowserModule,
    TagInputModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CloudinaryModule,
    QuillModule.forRoot(),
    StoreModule.forRoot({reducers:dataReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    BrowserAnimationsModule,
    MdbCollapseModule,
    InfiniteScrollModule,
    MdbModalModule,
    JwtModule.forRoot({config: {
      tokenGetter: () => {
        return sessionStorage.getItem("tk");
      },
    },}),
    EffectsModule.forRoot([AuthEffects])
  ],
  providers: [AuthService,{provide:HTTP_INTERCEPTORS,useClass:HttpService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
