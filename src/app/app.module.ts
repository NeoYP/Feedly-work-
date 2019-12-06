import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import { ImagePicker, ImagePickerOriginal } from '@ionic-native/image-picker';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { FeedPage } from '../pages/feed/feed';
import { CommentsPage } from '../pages/comments/comments';

import { Camera } from '@ionic-native/camera';
import { Firebase } from '@ionic-native/firebase';

import firebase from 'firebase';
import { SearchPage } from '../pages/search/search';

const config = {
  apiKey: "AIzaSyAQlpVVaYZwjl8aCSgJds4jePGWkAJKu1o",
  authDomain: "feedly-32a42.firebaseapp.com",
  databaseURL: "https://feedly-32a42.firebaseio.com",
  projectId: "feedly-32a42",
  storageBucket: "feedly-32a42.appspot.com",
  messagingSenderId: "215554301431",
  appId: "1:215554301431:web:03e2a3b27f8c5ec07722f2",
  measurementId: "G-PH4T55ZFFV"
};
firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true
})

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    FeedPage,
    CommentsPage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      platforms: {
        ios: {
          backButtonText: ''
        }
      }
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    FeedPage,
    CommentsPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Firebase,
    //ImagePickerOriginal,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
