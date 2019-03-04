// animations.ts
import { trigger, state, style, transition, animate } from '@angular/animations';

export const Animations = {
    fadeWithPushDown: trigger('fadeWithPushDown', [
        transition('void => *',[
            style({
                opacity: '0',
                transform: 'translateY(-10px)'
            },),
            animate('0.2s', style({
                opacity: '1',
                transform: 'translateY(0px)'
            }))
        ]),
        transition('* => void',[
            style({
                opacity: '1',
                transform: 'translateY(0px)'
            },),
            animate('0.2s', style({
                opacity: '0',
                transform: 'translateY(-10px)'
            }))
        ])
      ]),
    fadeWithPushUp: trigger('fadeWithPushDown', [
        transition('* => void',[
            style({
                opacity: '1',
                transform: 'translateY(10px)'
            },),
            animate('0.4s', style({
                opacity: '0',
                transform: 'translateY(-10px)'
            }))
        ])
    ])

}