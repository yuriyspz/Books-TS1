import React, { Dispatch } from "react";
import { createBook, getAllBooks, IBookAction } from "../actions";
import { connect } from "react-redux";
import styled from "styled-components";
import SingleBook from "./singleBook";
import { IBook, IbooksState, IGetAllAction } from "../types";
import { RootState } from "../store";

export interface BooksListProps {
  books: any;
  getAllBooks: () => any;
}
class BookList extends React.Component<BooksListProps> {
  componentDidMount() {
    console.log("did moint");
    this.props.getAllBooks();
  }

  render() {
    const a = this.props.books;
    
    return (
      <Container>
        <ul className="list">
          {/* {
          console.log(a.books[0])
          }
          {console.log(a.books)}
          {console.log(this.props.books)}
          {Object.keys(a.books).map((key) => console.log(a.books[key]))} */}
          {/* {Object.keys(a).map((key) => console.log(a[key]))} */}
          {console.log(Object.keys(a))}
{/* {a.books.map((i:any)=>console.log(a.books[i]))} */}
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
const mapStateToProps = (state: RootState) => {
  return {
    books: state.books.books,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    getAllBooks: () => {
      dispatch(getAllBooks());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
