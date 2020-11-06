import React, { Dispatch } from 'react'
import {createBook, getAllBooks, IBookAction} from "../actions";
import {connect} from "react-redux";
import styled from 'styled-components';
import SingleBook from "./singleBook";
import { IBook, IbooksState, IGetAllAction } from '../types';
import { RootState } from '../store';

export interface BooksListProps {
    books: IbooksState;
    getAllBooks: ()=> any;
}

class BookList extends React.Component<BooksListProps> {

    componentDidMount() {
        console.log('did moint')
        this.props.getAllBooks();
    }

    render() {
        return (
            <Container>
                <ul className="list">
                    {
                         Object.entries(this.props.books).map(([index, item]) => console.log(item))
                         
                        //     // <SingleBook
                        //     //     key={index}
                        //     //     book={item}
                        //     // >
                        //         <> {item.title}</>
                        //     // </SingleBook>
                        // )
                    }
                </ul>
            </Container>
        );
    }

}

const Container = styled.div`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`;
const ListElement = styled.li`
	font-size: 24px;
	font-weight: 500;
	color: palevioletred;
`;
const mapStateToProps = (state:RootState) => {
    return {
        books: state.books
    }
};

const mapDispatchToProps = (dispatch:Dispatch<any>) => {
    return {
        getAllBooks: () => {
            dispatch(getAllBooks());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
