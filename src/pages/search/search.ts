import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import firebase from 'firebase';
import moment from 'moment';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchQuery: string = '';
  text: string = "";
  posts: any[] = [];
  pageSize: number = 10;
  cursor: any;
  infiniteEvent: any;
  image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    
  }

  onSearch(searchQuery) {
    console.log("hrell")
    console.log(searchQuery);
   // this.posts = []
    this.getPosts(searchQuery);
  }

  getPosts(searchQuery) {
    console.log(searchQuery)
    this.posts = [];

  //  let loading = this.loadingCtrl.create({
  //    content: "Loading Feed..."
  //  });

  //  loading.present();

    let query = firebase.firestore().collection("posts").where("owner_name", "==", searchQuery).orderBy("created", "desc").limit(this.pageSize);
    console.log(query)
    //let search = fi

    query.onSnapshot((snapshot) => {
      let changedDocs = snapshot.docChanges();
      console.log(changedDocs)
      changedDocs.forEach((change) => {
        if (change.type == "added") {
          // TODO
        }

        if (change.type == "modified") {
          for (let i = 0; i < this.posts.length; i++) {
            if (this.posts[i].id == change.doc.id) {
              this.posts[i] = change.doc;
            }
          }
        }

        if (change.type == "removed") {
          // TODO
        }
      })
    })

    query.get()
      .then((docs) => {

        docs.forEach((doc) => {
          this.posts.push(doc);
        })

        // loading.dismiss();

        this.cursor = this.posts[this.posts.length - 1];

        console.log(this.posts)

      }).catch((err) => {
        console.log(err)
      })
  }

  ago(time) {
    let difference = moment(time).diff(moment());
    return moment.duration(difference).humanize();
  }

  clearSearch() {
    this.searchQuery = '';
    this.posts = [];
    this.pageSize = 1;
    
  }

}
