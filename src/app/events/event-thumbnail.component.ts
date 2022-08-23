import { Component, EventEmitter, Input, Output } from "@angular/core";



@Component({

    selector:'event-thumbnail',

    templateUrl: './event-thumbnail.component.html',

    styles:[`

    .green {color: cyan !important }

    .thumbnail {min-height : 210px;}

    .bold { font-weight : bold; }

.pad-left{margin-left:10px;}

.well div{color: #bbb;}

    `]

   

})

export class EventThumbnailComponent{

    @Input() event:any

    getStartTimeClass(){

        const isEarlyStart = this.event && this.event.time === '8:00 am'

        return{green:isEarlyStart,bold:isEarlyStart}

    }

    getStartTimeClass2(){

        if(this.event && this.event.time === '8:00 am')

        return 'green bold'

        else

        return ''

    }

    getStartTimeClass3(){

        if(this.event && this.event.time === '8:00 am')

        return ['green', 'bold']

        else

        return []

    }

    getStartTimeStyle():any {

        if (this.event && this.event.time === '8:00 am')

          return {color: 'cyan', 'font-weight': 'bold'}

        return {}

      }
      @Output() eventClicked= new EventEmitter();
      address:string="vasavi colony"

    }