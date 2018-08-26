import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'
@Component({
  selector: 'app-contentarea',
  templateUrl: './contentarea.component.html',
  styleUrls: ['./contentarea.component.css']
})
export class ContentareaComponent implements OnInit {
  students=[];
  constructor(private fs:AngularFirestore){}
  ngOnInit(){
    this.fs.collection('students').snapshotChanges().subscribe(
      (res)=>{
        this.students=[];
        res.map((x)=>{          
          this.students.push({'data':x.payload.doc.data(),'id':x.payload.doc.id});
        })
      }
    );
  }
  deleteStudent(id){
    console.log(id);
    this.fs.collection('students').doc(id).delete();
  }
  addStudent(fn,ln,loc){
    this.fs.collection('students').add({'firstname':fn,'lastname':ln,'location':loc})
    .then((x)=>{alert("New student added"+x);console.log(x)});
  }
}
