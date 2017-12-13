import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lists } from '../lists.model';
import { RecommenderService } from './recommender.service';

@Component({
  selector: 'app-recommender',
  templateUrl: './recommender.component.html',
  styleUrls: ['./recommender.component.less']
})
export class RecommenderComponent implements OnInit {
  recommendersNav = [
    {display:'Similar users based on users', url:'similar'},
    {display:'Users based on apps', url:'user'},
    {display:'Apps based on users', url:'app'}
  ]
  type;
  searchText;
  selectedItem;
  loading;
  recommenders = {
    similar:{
      title:'Similar Users',
      description:'This recommender identifies users that are similar to a selected user based on their apps',
      select: new Lists().users,
      placeholder:'Select an User',
      recommended:'Users'
    },
    app:{
      title:'Apps',
      description:'This recommender identifies users that would like a specified app',
      select: new Lists().apps,
      placeholder:'Select an User',
      recommended:'Users'
    },
    user:{
      title:'Users',
      description:'This recommender identifies apps that a specified user would like',
      select: new Lists().users,
      placeholder:'Select an App',
      recommended:'Apps'
    }
  }
  recommendations = [];


  constructor(private route: ActivatedRoute, private recommenderService: RecommenderService) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.searchText = '';
      this.type = params['type']
    });
  }

  filter(list) {
    return list.filter( item => this.getItemDisplay(item).includes(this.searchText));
  }
  getItemDisplay(item){
    return this.type === 'app'? item.trackName: item .fname + ' ' +item.lname
  }
  recommend() {
    const item = this.recommenders[this.type].select.find(item => this.getItemDisplay(item) === this.searchText);
    if(item){
      this.selectedItem = item;
      this.loading = true;
      this.recommenderService[this.type](item.user_id || item.app_id).subscribe(data => {
        this.loading = false;
        this.recommendations = data.json().Results.output1.value.Values[0];
      });
    }
  }
}
