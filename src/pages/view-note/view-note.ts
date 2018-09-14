import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteService } from '../../providers/note-service/note-service';
import { Notes } from '../../models/note.model';

@IonicPage()
@Component({
  selector: 'page-view-note',
  templateUrl: 'view-note.html',
})
export class ViewNotePage {

  note:Notes;
  constructor(public navCtrl: NavController, public navParams: NavParams, private noteService:NoteService) {
    this.note = this.navParams.get('note');
  }

  deleteNote(createDate:number){
    this.noteService.deleteNote(createDate);
    this.navCtrl.pop();
  }

}
