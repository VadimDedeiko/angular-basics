//импортируем компонент тайпскрипта с ядра ангуляр
import {Component} from '@angular/core'

//для того чтобы ангуляр понял что данный класс является компонентом, его нужно обозначить декоратором
//селектор служит для того чтобы в дальнейшем определять как этот компонент у нас выглядит
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['post.component.scss']
})
export class PostComponent {
}
