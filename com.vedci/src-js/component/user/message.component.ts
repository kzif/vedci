import 'node_modules/froala-editor/js/froala_editor.pkgd.min.js'
import {Component, ViewEncapsulation} from '@angular/core'
import {UserMessageModel} from "../../model/user-message.model";
import {MessagePipe} from "../../pipe/message.pipe";

declare let $ :any;
@Component({
    templateUrl: '../../../html/view/user/message.html',
    styleUrls:[
        "node_modules/froala-editor/css/froala_editor.pkgd.min.css",
        "node_modules/froala-editor/css/froala_style.min.css",
        "node_modules/font-awesome/css/font-awesome.css"
    ],
    encapsulation: ViewEncapsulation.None,
})
export class MessageComponent{
    public messages: UserMessageModel[];
    public froalaMessage;
    public isPrivate;

    constructor(){
        //Carrega as mensagens
        UserMessageModel.getMessages(1,0,30).subscribe(
            messages => {
                this.messages = UserMessageModel.fromJson(messages);
            }
        );

    }

    public froalaMainOptions: Object = {
        charCounterCount: true,
        enter: $.FroalaEditor.ENTER_BR,
        placeholderText: 'Diga algo para Ismael',
        language: 'pt_br',
        toolbarButtons: ['bold', 'italic', 'underline','|','insertLink', 'emoticons','html'],
        toolbarButtonsXS: ['bold', 'italic', 'underline','|','insertLink', 'emoticons'],
        toolbarButtonsSM: ['bold', 'italic', 'underline','|','insertLink', 'emoticons'],
        toolbarButtonsMD: ['bold', 'italic', 'underline','|','insertLink', 'emoticons'],
        emoticonsSet :[
            {code: '1f600', desc: 'Grinning face'},
            {code: '1f601', desc: 'Grinning face with smiling eyes'},
            {code: '1f602', desc: 'Face with tears of joy'},
            {code: '1f603', desc: 'Smiling face with open mouth'},
            {code: '1f604', desc: 'Smiling face with open mouth and smiling eyes'},
            {code: '1f605', desc: 'Smiling face with open mouth and cold sweat'},
            {code: '1f606', desc: 'Smiling face with open mouth and tightly-closed eyes'},
            {code: '1f607', desc: 'Smiling face with halo'},

            {code: '1f608', desc: 'Smiling face with horns'},
            {code: '1f609', desc: 'Winking face'},
            {code: '1f60a', desc: 'Smiling face with smiling eyes'},
            {code: '1f60b', desc: 'Face savoring delicious food'},
            {code: '1f60c', desc: 'Relieved face'},
            {code: '1f60d', desc: 'Smiling face with heart-shaped eyes'},
            {code: '1f60e', desc: 'Smiling face with sunglasses'},
            {code: '1f60f', desc: 'Smirking face'},

            {code: '1f610', desc: 'Neutral face'},
            {code: '1f611', desc: 'Expressionless face'},
            {code: '1f612', desc: 'Unamused face'},
            {code: '1f613', desc: 'Face with cold sweat'},
            {code: '1f614', desc: 'Pensive face'},
            {code: '1f615', desc: 'Confused face'},
            {code: '1f616', desc: 'Confounded face'},
            {code: '1f617', desc: 'Kissing face'},

            {code: '1f618', desc: 'Face throwing a kiss'},
            {code: '1f619', desc: 'Kissing face with smiling eyes'},
            {code: '1f61a', desc: 'Kissing face with closed eyes'},
            {code: '1f61b', desc: 'Face with stuck out tongue'},
            {code: '1f61c', desc: 'Face with stuck out tongue and winking eye'},
            {code: '1f61d', desc: 'Face with stuck out tongue and tightly-closed eyes'},
            {code: '1f61e', desc: 'Disappointed face'},
            {code: '1f61f', desc: 'Worried face'},

            {code: '1f620', desc: 'Angry face'},
            {code: '1f621', desc: 'Pouting face'},
            {code: '1f622', desc: 'Crying face'},
            {code: '1f623', desc: 'Persevering face'},
            {code: '1f624', desc: 'Face with look of triumph'},
            {code: '1f625', desc: 'Disappointed but relieved face'},
            {code: '1f626', desc: 'Frowning face with open mouth'},
            {code: '1f627', desc: 'Anguished face'},

            {code: '1f628', desc: 'Fearful face'},
            {code: '1f629', desc: 'Weary face'},
            {code: '1f62a', desc: 'Sleepy face'},
            {code: '1f62b', desc: 'Tired face'},
            {code: '1f62c', desc: 'Grimacing face'},
            {code: '1f62d', desc: 'Loudly crying face'},
            {code: '1f62e', desc: 'Face with open mouth'},
            {code: '1f62f', desc: 'Hushed face'},

            {code: '1f630', desc: 'Face with open mouth and cold sweat'},
            {code: '1f631', desc: 'Face screaming in fear'},
            {code: '1f632', desc: 'Astonished face'},
            {code: '1f633', desc: 'Flushed face'},
            {code: '1f634', desc: 'Sleeping face'},
            {code: '1f635', desc: 'Dizzy face'},
            {code: '1f636', desc: 'Face without mouth'},
            {code: '1f637', desc: 'Face with medical mask'}
        ]
    };

    /**
     * Posta uma mensagem
     */
    public postMessage(){
        let message =  new UserMessageModel(
            null,
            this.froalaMessage,
            this.isPrivate,
            null,
            null
        );

        //Salva a mensagem
        message.save().subscribe(
            result => {
                this.messages.unshift(message);
            }
        );
    }

    /**
     * Deleta messagem
     *
     * @param {UserMessageModel} message
     * @param {number} index
     */
    public deleteMessage(message: UserMessageModel, index: number){
        message.delete().subscribe(
            message =>{
                this.messages.splice(index, 1);
            }
        )
    }
}