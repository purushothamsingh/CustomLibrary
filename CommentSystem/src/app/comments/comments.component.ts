import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Comments } from '../models/Comment';
import {cloneDeep} from 'lodash';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  @Input() property: any;
  comment:Comments ={
    commentId: "",
    commentText: "",
    commentDate: "",
    replies: [],
    clone: function (): unknown {
      throw new Error('Function not implemented.');
    },
    slice: function (arg0: number): unknown {
      throw new Error('Function not implemented.');
    }
  }

  commentsArray:Comments[]=[
    {
      commentId: "123",
      commentText: "I have created My First Comment " ,
      commentDate: "15/02/2023",
      replies: [{
        replyId:"123",
        replyDate:"15/02/2023",
        replyText:"Hello First Comment"
      }],
      createdBy:"Purushotham Singh",
      clone: function (): unknown {
        throw new Error('Function not implemented.');
      },
      slice: function (arg0: number): unknown {
        throw new Error('Function not implemented.');
      }
    }
    ,
    {
      commentId: "123",
      commentText: "I have created My Second Comment " ,
      commentDate: "14/02/2023",
      replies: [{
        replyId:"123",
        replyDate:"15/02/2023",
        replyText:"Hello Second Comment"
      }],
      createdBy:"Krithvik Singh",
      clone: function (): unknown {
        throw new Error('Function not implemented.');
      },
      slice: function (arg0: number): unknown {
        throw new Error('Function not implemented.');
      }
    }
  ]
  description: any = '';
  placeholder: any = 'Enter comment';
  data: any = '';
  disabled: boolean = true;
constructor(  private readonly cd: ChangeDetectorRef,private datePipe: DatePipe){}

  onTextChange(event: any) {
    if (event.textValue !== '') {
      this.disabled = false;
      this.description=event.textValue
    }
    else{
      this.disabled =true
    }
   
  }

  cancel() {
    if(this.description!==""){
      this.disabled =true;
      this.description =""
     
    }
  }
  submit(){
    if(this.description != ""){
      let mycurrentcomment =cloneDeep(this.comment)
      mycurrentcomment.commentId = Math.random().toString().substr(2,8)
      mycurrentcomment.commentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss')!;
      mycurrentcomment.commentText = this.description.replace(/<[^>]+>/g, '');
      mycurrentcomment.createdBy = "Raj"
      this.commentsArray.push(mycurrentcomment)
    }
    this.description =""
    console.log(this.commentsArray)
  }

}



