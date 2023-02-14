import {Replies} from '../models/replies';

export interface Comments{
clone(): unknown;
slice(arg0: number): unknown;
commentId:string;
commentText:string;
commentDate: string;
createdBy?:string;
replies?:Array<Replies>

}