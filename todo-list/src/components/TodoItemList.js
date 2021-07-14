/*TodoItem 컴포넌트 여러개를 렌더링해주는 역할
‘리스트’ 를 렌더링하게 될 때는, 특히 보여주는 리스트가 동적인 경우에는 함수형이 아닌 클래스형 컴포넌트로 작성.
 그 이유는, 클래스형 컴포넌트로 작성해야 나중에 컴포넌트 성능 최적화를 할 수 있기 때문*/

import React, {Component, component} from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;
        /*todos: todo 객체들이 모여있는 배열, onToggle: 체크박스를 켜고 끄는 함수, onRemove: 아이템 삭제함수*/

        return (
            <div>
                <TodoItem text="안녕"/>
                <TodoItem text="리액트"/>
                <TodoItem text="반가워"/>
            </div>
        );
 }
}

export default TodoItemList;