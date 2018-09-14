import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Note } from 'ionic-angular';
import { NoteService } from '../../providers/note-service/note-service';
import { Notes } from '../../models/note.model'
import { FormGroup, FormControl } from '@angular/forms';
/**
 * Generated class for the AddNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {

  formGroup: FormGroup;
  note: Notes;

  date:Date = new Date();
  title:string = '';
  content:string = '';

  constructor(public navCtrl: NavController,
      private noteService : NoteService
    ) {
      this.formGroup = new FormGroup({
        title : new FormControl(),
        content : new FormControl(),
        date : new FormControl(),
      })
  }

  saveNote(note: Notes){
    this.noteService.saveNote(note);
    this.navCtrl.pop();
  }

}
